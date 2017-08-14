## mongodb 特点
- 开源免费
- 性能比较高 ，读写速度快
- 支持分布式，横向可扩展
- 数据库用的语法就是javascript
- 数据库里面存的是json（其实是buson）


- daemon 守护进程

### DOS
1. 文件路径不要有中文或空格或其它特殊字符
2. 此文件路径必须事先创建好，如果不存在则报错
3. 一切服务启动成功则必须黑窗口一直开着不能关闭，如果关闭了服务则停止

```
启动服务器
mongod --dbpath=F:\mmdata 数据库存放的位置
```

- 再在bin里面打开dos 然后执行
```
1.mongo
2.db 出现test就成功了

```

```
如何优雅的关闭数据库
> use admin;
switched to db admin
> db.shutdownServer();

```
- crud create read update delete 增加读取更新 删除
