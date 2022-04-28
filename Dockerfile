# pull official base image
FROM node:alpine

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install -g npm@8.7.0
RUN npm install -g svgo
RUN npm install
RUN npm install react-scripts@3.4.1 -g

# add app
COPY . ./

# start app
CMD ["npm", "start"]