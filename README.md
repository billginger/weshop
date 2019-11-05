# WeShop

a WeChat electronic shop

## How to use

### Clone this project to your server

```
cd /data
git clone https://github.com/billginger/weshop.git
```

### Configuration

#### Nginx

* 根据以下文件在相同目录下创建 `server.conf`：

```
/data/weshop/nginx/conf/server.example.conf
```

* 建议开发环境：

```
# Portal Frontend
server {
    listen       80;
    server_name  <YOUR_SERVER_NAME>;

    location / {
        proxy_pass  <YOUR_PROXY_URL>;
    }

    include  conf/error.conf;
}
```

* 建议生产环境：

```
# Portal Frontend
server {
    listen       80;
    server_name  <YOUR_SERVER_NAME>;

    location / {
        root   /apps/weshop-portal-frontend/dist;
        index  index.html index.htm;
    }

    include  conf/error.conf;
}
```

### Use Docker

#### Prepare Docker Images

* Pull Nginx image:

```
docker pull nginx
```

* 使用 Dockerfile 构建 node-pm2 镜像：

```
cd /data/weshop/dockerfile/node-pm2
docker build -t node-pm2 .
```

#### Run Nginx

* 以挂载本地目录和配置文件的方式运行容器：

```
docker run --name nginx -d --network host -v /data/weshop/nginx:/etc/nginx -v /data/weshop/apps:/apps -v /data/weshop/logs:/logs nginx
```

> 请注意：这里 nginx 容器使用了宿主网络，不需要映射端口，访问其它容器暴露的端口也会比较方便。

#### When the configuration file is modified

* 重启容器使新的配置文件生效（不建议）：

```
docker restart nginx
```

* 进入容器，先验证配置文件，再重载配置文件：

```
docker exec -it nginx bash
nginx -t
nginx -s reload
```

* 在容器外，先验证配置文件，再重载配置文件：

```
docker exec nginx bash -c "nginx -t"
docker exec nginx bash -c "nginx -s reload"
```

#### Run App Frontend Dev

* 以挂载本地目录的方式运行容器：

```
docker run --name weshop-portal-frontend -d -p 8081:8080 -v /data/weshop/apps/weshop-portal-frontend:/app node-pm2
docker run --name weshop-mall-frontend -d -p 8082:8080 -v /data/weshop/apps/weshop-mall-frontend:/app node-pm2
```

* 进入容器：

```
docker exec -it weshop-portal-frontend sh
```

* 第一次运行程序，需要安装依赖的模块：

```
cd /app
npm i
```

* 使用 PM2 运行程序：

```
cd /app
pm2 start npm -- start -- --disable-host-check --compress --no-inline
```

* 在容器外，查看程序状态和重启程序：

```
docker exec weshop-portal-frontend sh -c "pm2 list"
docker exec weshop-portal-frontend sh -c "pm2 restart all"
```
