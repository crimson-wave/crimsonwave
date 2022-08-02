1. build a docker container

sudo docker build -t csw .

2. run a docker conteiner

sudo docker run --rm -it -p 4000:4000 -v `pwd`:/site csw /bin/sh

3. inside docker run

cd site/
bundle exec jekyll serve -H 0.0.0.0

bundle add webrick

4. kill docker 
    4.1. List containers
    4.2  kill container

sudo docker ps
sudo docker kill <CONTAINER ID>

