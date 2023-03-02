FROM nginx

#设置时间
ENV TZ=Asia/Shanghai
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone


RUN mkdir -p /usr/share/nginx/html/vue/
RUN mkdir -p /etc/nginx/conf.d
RUN mkdir -p /var/log/nginx

# 拷贝配置文件
COPY ./dist /usr/share/nginx/html/vue/
COPY ./docker/nginx.conf /etc/nginx/nginx.conf
COPY ./docker/default.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
EXPOSE 81
EXPOSE 82

CMD ["nginx", "-g", "daemon off;"]