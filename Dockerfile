############################################################
# Dockerfile to build Pantheon Demo
############################################################

# File Author / Maintainer
MAINTAINER Cara Warner

RUN apt-get update && apt-get install -y apache2 \
    libapache2-mod-wsgi-py3 \
    build-essential \
    python3 \
    python-3dev\
    python-pip \
    vim \
    npm \
    nodejs \
 && apt-get clean \
 && apt-get autoremove \
 && rm -rf /var/lib/apt/lists/*

# Copy Python requirements and install in a virtualenv
COPY ./app/requirements.txt /var/www/pantheon-demo/app/requirements.txt
RUN pip install virtualenv
RUN virtualenv -p python3 /var/www/pantheon-demo/app/venv
RUN source /var/www/pantheon-demo/app/venv/bin/activate
RUN pip install -r /var/www/pantheon-demo/app/requirements.txt

# Copy packages.json and install
Copy ./app/static/packages.json /var/www/pantheon-demo/app/static/packages.json
RUN npm install /var/www/pantheon-demo/app/static/packages.json
RUN npm run build

# Create log directories and assign to www-data user and group
RUN mkdir -p /var/www/pantheon-demo/logs
RUN chown www-data:www-data -R /var/www/pantheon-demo/logs

# Copy over the wsgi file
COPY ./pantheon-demo.wsgi /var/www/pantheon-demo/pantheon-demo.wsgi

# Copy over the apache configuration file and enable the site
Copy ./pantheon-demo.conf /etc/apache2/sites-available/pantheon-demo.conf

# Copy application code
Copy ./run.py /var/www/pantheon-demo/run.py
Copy ./app /var/www/pantheon-demo/app/

# Enable and launch the site
RUN a2dissite 000-default.conf
RUN a2ensite pantheon-demo.conf
RUN service apache2 reload

# Copied from boilerplate: expose port 80 and set WORKDIR
EXPOSE 80
WORKDIR /var/www/pantheon-demo
