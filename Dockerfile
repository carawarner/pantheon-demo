############################################################
# Dockerfile to build Pantheon Demo
############################################################

FROM ubuntu

# File Author / Maintainer
MAINTAINER Cara Warner

RUN echo 'Installing apt dependencies'
RUN apt-get update && apt-get install -y apache2 \
    libapache2-mod-wsgi-py3 \
    build-essential \
    python3 \
    python-dev\
    python3-pip \
    vim \
    curl \
 && apt-get clean \
 && apt-get autoremove \
 && rm -rf /var/lib/apt/lists/*

# replace shell with bash so we can source files
RUN rm /bin/sh && ln -s /bin/bash /bin/sh

# nvm environment variables
ENV NVM_DIR /usr/local/nvm
ENV NODE_VERSION 9.10.0

# install nvm
# https://github.com/creationix/nvm#install-script
RUN curl --silent -o- https://raw.githubusercontent.com/creationix/nvm/v0.31.2/install.sh | bash

# install node and npm
RUN source $NVM_DIR/nvm.sh \
    && nvm install $NODE_VERSION \
    && nvm alias default $NODE_VERSION \
    && nvm use default

# add node and npm to path so the commands are available
ENV NODE_PATH $NVM_DIR/v$NODE_VERSION/lib/node_modules
ENV PATH $NVM_DIR/versions/node/v$NODE_VERSION/bin:$PATH

# confirm installation
RUN node -v
RUN npm -v

# Copy Python requirements and install
COPY ./app/requirements.txt /var/www/pantheondemo/app/requirements.txt
RUN pip3 install -r /var/www/pantheondemo/app/requirements.txt

RUN python3 -m spacy download en_core_web_md

# Copy packages.json and install
Copy ./app/static/package.json /var/www/pantheondemo/app/static/package.json
WORKDIR /var/www/pantheondemo/app/static
RUN npm install

# Create log directories and assign to www-data user and group
RUN mkdir -p /var/www/pantheondemo/logs
RUN chown www-data:www-data -R /var/www/pantheondemo/logs

# Copy over the wsgi file
COPY ./pantheon-demo.wsgi /var/www/pantheondemo/pantheon-demo.wsgi

# Copy over the apache configuration file and enable the site
Copy ./pantheon-demo.conf /etc/apache2/sites-available/pantheon-demo.conf

# Copy application code and build
# Copy ./run.py /var/www/pantheondemo/run.py
Copy ./app /var/www/pantheondemo/app/
WORKDIR /var/www/pantheondemo/app/static
RUN npm run build

#Copy ./__init__.py /var/www/pantheondemo/__init__.py

# Enable and launch the site
RUN a2dissite 000-default.conf
RUN a2ensite pantheon-demo.conf
# RUN service apache2 reload

# Copied from boilerplate: expose port 80 and set WORKDIR
EXPOSE 80
WORKDIR /var/www/pantheondemo
