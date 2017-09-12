<a href="http://anryzhang.github.io/myBlog/" target="_blank" title="个人博客">个人博客</a>

>目录结构
        
       app.js --- 服务启动
       entry_config.js --- 逻辑依赖
       assets --- 页面js逻辑
              admin --- 后台页面
              web   --- 前端页面
              commom --- 公共模块
              apiList.js --- 接口文档列表
       public --- build目录
       static --- 静态文件
       server ---
            api    --- 接口目录
            routes --- 页面路由
                admin --- 后台路由
                web   --- 前端路由
                index.js --- 所有路由入口 
       template --- 页面
            admin --- 后台页面
            web   --- 前端页面
            common --- 页面公共文件
        

1. 安装.

        npm install
        npm install supervisor -g

2. 运行.

    * `npm start` 开发环境.
    * `npm run browsersync` 浏览器模拟生产
    * `npm run production` 打包用于生产.
    * `npm run build` 前端打包测试...

3.  node-inspector&
    http://127.0.0.1:8080/?port=5858 
    
    

