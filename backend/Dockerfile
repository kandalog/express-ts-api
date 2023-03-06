FROM node:18.14.2-buster

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install
# 本番環境用の場合
# RUN npm install --only=production

COPY . .

# コンテナ起動後にexecで起動するか
# shellで入って起動した方が利便性高そう
# DBが立ち上がる前に接続しようとするので気をつける
# CMD ["npm", "start"]