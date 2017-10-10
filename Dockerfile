FROM node

ADD . /app

RUN cd /app; \
npm install --production

EXPOSE 3000

CMD ["node", "/app/webapp.js"]
