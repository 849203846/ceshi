## 连接服务器
- 先打开gitbash
ssh root@118.31.112.78
yes
## 升级操作系统
```
apt-get update
```
## 安装npm 是node的包管理器
```
apt-get install npm
```
## 安装n 
```
npm install n -g
```
n是一个node模块 可以用来安装node
## 安装node
```
n latest 安装最新版本
```

## 安装git
```
apg-get install git
```
## 安装mongodb
```
apt-get install mongodb
```
>mongodb 安装完成后会自动启动不需要手动启动了

### 在服务器上把代码下载下来
```
git clone https://github.com/zhufengnodejs/201705crawl201705crawl.git

```

####进入项目所在目录
- cd 201705craw201705crawl
#### 下载依赖
- npm i
####设置环境变量
- export DEBUG=crawl:*
### 启动项目
```
node server.js
```

### 访问服务器
```
http://118.31.112.78:8080/
```
## 安装node进程管理器
```
nom install pm2 -g
```

### 安装nginx
```
apt-get install nginx
```
cp default crawl
cp default wangl
拷贝一个
vi crawl
编辑
:x 保存一下
service nginx reload
ls

cat crawl 
查看


pwd 查看当前目录
cd /root 进入root
ls 


upstream crawl{
    server 127.0.0.1:8080;
}

server {
        listen 80;
        server_name abcdefg.com;

}