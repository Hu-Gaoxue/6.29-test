<!-- 全局组件 -->
<template>
  <el-carousel height="500px">
      <el-carousel-item v-for="item in 4" :key="item">
        <!-- <h3 class="small justify-center" text="2xl">{{ item }}</h3>
          -->
        <img src="" alt="">
      </el-carousel-item>
    </el-carousel>
  </template>
   
  <script>
  export default {
    name: "AppBanner",
    props: {
      list: {
        type: Array,
        default: []
      }
    }
  };
  </script>
   
  <style lang="less" scoped>
   
  </style>  
    
    <style>
    /* .el-carousel__item h3 {
      color: #475669;
      font-size: 14px;
      opacity: 0.75;
      line-height: 150px;
      margin: 0;
    }
  
    .el-carousel__item:nth-child(2n) {
       background-color: #99a9bf;
    }
    
    .el-carousel__item:nth-child(2n+1) {
       background-color: #d3dce6;
    } */
    .el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>