
慕课网

https://coding.imooc.com/learn/list/320.html

学习至7-2



[Redis下载地址](http://www.redis.cn/download.html)

启动Redis

在Redis文件目录下CMD

```
redis-server.exe redis.windows.conf
redis-cli.exe -h 127.0.0.1 -p 6379
```



// HTML文件运行

```
npm i http-server --registry=https://registry.npm.taobao.org
http-server -p 8001
```



[Nginx下载地址](http://nginx.org/en/download.html)

启动Nginx

在Nginx文件目录下CMD

```
start nginx
```

Nginx配置文件

```properties
worker_processes  6;

events {
    worker_connections  1024;
}


http {
    include       mime.types;
    default_type  application/octet-stream;
    
    sendfile        on;
    
    keepalive_timeout  65;

    server {
        listen       8080;
        server_name  localhost;

        location / {
            proxy_pass http://localhost:8001;
        }

        location /api/ {
            proxy_pass http://localhost:8000;
            proxy_set_header Host $host;
        }

        error_page   500 502 503 504  /50x.html;
        location = /50x.html {
            root   html;
        }
        
    }

}

```

