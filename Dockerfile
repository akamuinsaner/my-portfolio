FROM node:20-alpine


COPY . /root/webapp/
WORKDIR /root/webapp

# RUN npm config set registry https://registry.npmmirror.com
RUN npm install
RUN npm run build

EXPOSE 4000

# Start Script
CMD npm run start