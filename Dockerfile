# Pull miniconda from docker hub as base image
FROM continuumio/miniconda3:latest
ENV LANG=C.UTF-8 LC_ALL=C.UTF-8

# Install node
# RUN apt-get update
# RUN apt-get upgrade -y
# RUN apt-get install curl -y
# RUN curl -sL https://deb.nodesource.com/setup_14.x | bash - && apt-get install -y nodejs

# Create folder
RUN mkdir -p /backend
RUN mkdir -p /scripts
RUN mkdir -p /static-files
RUN mkdir -p /media-files
# RUN mkdir -p /frontend

# pass all the files and folders from local folder to image
COPY ./backend /backend
COPY ./scripts /scripts
RUN chmod +x ./scripts

# create the environment inside the docker container
RUN /opt/conda/bin/conda env create -f /backend/requirements.yml

# we set the path were all the python pacakages are
ENV PATH /opt/conda/envs/myluna/bin:$PATH

# activate app
RUN echo "source activate myluna" >~/.bashrc

# Build react depencencies & index.html
# WORKDIR /frontend
# COPY ./frontend/package.json /frontend/
# COPY ./frontend/package-lock.json /frontend/
# RUN npm install
# COPY ./frontend /frontend
# RUN npm run build

# set the working directory to /backend for whenever you login into your containerasd
WORKDIR /backend