############################################################
# Dockerfile to build Pantheon Demo
############################################################

FROM ubuntu

# File Author / Maintainer
MAINTAINER Cara Warner

RUN echo 'Installing apt dependencies'
RUN apt-get update && apt-get install -y nginx \
    build-essential \
    python3 \
    python3-dev\
    python3-pip \
    uwsgi \
    uwsgi-src \
    vim \
    curl \
 && apt-get clean \
 && apt-get autoremove \
 && rm -rf /var/lib/apt/lists/*

# set up uwsgi
WORKDIR ~
RUN PYTHON=python3.6 uwsgi --build-plugin "/usr/src/uwsgi/plugins/python python36"
RUN mv python36_plugin.so /usr/lib/uwsgi/plugins/python36_plugin.so
RUN chmod 644 /usr/lib/uwsgi/plugins/python36_plugin.so

# replace shell with bash so we can source files
RUN rm /bin/sh && ln -s /bin/bash /bin/sh

# nvm environment variables
ENV NVM_DIR /usr/local/nvm
ENV NODE_VERSION 9.10.0

# install nvm
RUN curl --silent -o- https://raw.githubusercontent.com/creationix/nvm/v0.31.2/install.sh | bash

# install node and npm
RUN source $NVM_DIR/nvm.sh \
    && nvm install $NODE_VERSION \
    && nvm alias default $NODE_VERSION \
    && nvm use default

# add node and npm to path so the commands are available
ENV NODE_PATH $NVM_DIR/v$NODE_VERSION/lib/node_modules
ENV PATH $NVM_DIR/versions/node/v$NODE_VERSION/bin:$PATH

# install python dependencies
COPY ./app/server/requirements.txt /var/www/pantheon/app/server/requirements.txt
RUN pip3 install -r /var/www/pantheon/app/server/requirements.txt
RUN python3 -m spacy download en_core_web_md

# install js dependencies
Copy ./app/static/package.json /var/www/pantheon/app/static/package.json
WORKDIR /var/www/pantheon/app/static
RUN npm install

# copy application code
Copy ./app /var/www/pantheon/app/

# build application
WORKDIR /var/www/pantheon/app/static
RUN npm run build

# configure
COPY ./resources/etc/init/pantheon.conf /etc/init/pantheon.conf
COPY ./resources/etc/nginx/sites-available/pantheon /etc/nginx/sites-available/pantheon
COPY ./app/server/pantheon.ini /etc/uwsgi/apps-available/pantheon.ini

# run
RUN ln -s /etc/uwsgi/apps-available/pantheon.ini /etc/uwsgi/apps-enabled/pantheon.ini
RUN ln -s /etc/nginx/sites-available/pantheon /etc/nginx/sites-enabled/pantheon
RUN rm /etc/nginx/sites-enabled/default

# TODO: start uwsgi, start nginx, create log directories

EXPOSE 80 443
