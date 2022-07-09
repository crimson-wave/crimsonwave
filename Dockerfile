FROM alpine:latest

#COPY Gemfile /srv/jekyll/

# Install development packages
RUN apk update && apk add \
    # development packages
    ruby-dev \
    gcc \
    make \
    curl \
    build-base \
    libc-dev \
    libffi-dev \
    zlib-dev \
    libxml2-dev \
    libgcrypt-dev \
    libxslt-dev \
    python3 \
    # pushing to git via ssh
    openssh \
    # permissions to install packages
    sudo \
    # tab completion inside the container
    git-bash-completion

RUN gem install bundler jekyll

#RUN bundle install && bundle update


EXPOSE 4000


