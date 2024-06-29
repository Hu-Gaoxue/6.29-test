const { defineConfig } = require('@vue/cli-service')  

const path=require('path');
module.exports = defineConfig({
  // ... 其他配置  
  css: {  
    loaderOptions: {  
      less: {  
        lessOptions: { // 注意这里使用 lessOptions  
          modifyVars: { // 将 modifyVars 嵌套在 lessOptions 中  
            'primary-color': '#1DA57A',  
            'link-color': '#1DA57A',  
            'border-radius-base': '2px',  
          },   
        },  
      },  
    },  
  },

  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [
        'D:\\vue\\new\\vue3-demo\\src\\assets\\style\\variables.less',
        'D:\\vue\\new\\vue3-demo\\src\\assets\\style\\mixins.less'
      ]
    }
  },
  //跨域请求
  devServer:{
    proxy:{
      '/api':{
        target:'http://you.163.com/', //第七个视频里讲到的
        ws:true,
        changeOrigin:true,
        pathRewrite:{
          //重写路径
          '^/api':''      
        }
      },
      '/foo':{
        target:'http://localhost:8080/',//本地接口
        ws:true,
        changeOrigin:true,
        pathRewrite:{
          //重写路径
          '^/foo':''
        }
      },
    },
  }

})
