<script setup>  
import { computed } from 'vue';  
import { useStore } from 'vuex';  
  
const store = useStore();  
  
// 从仓库读取  
const list = computed(() => {  
  return store.state.category.cateList;  
});  
  
const show = (item) => {  
  item.open = true;  
};  
  
const hide = (item) => {  
  item.open = false;  
};  
</script>

<template>  
  
    <ul class="app-header-nav">  
      <li class="item">
        <RouterLink class="link" to="/" >首页</RouterLink>  
      </li>

      <!-- 渲染出来滴 -->
      <li class="item" v-for="item in list" :key="item.id" 
      @mouseenter="show(item)" 
      @mouseleave="hide(item)">  
        <!-- 假设你希望根据 item 的某些属性来动态生成链接 -->  
        <RouterLink class="link" :to="'/Category/'+item.id" @click="hide(item)" >{{ item.name  }}</RouterLink>  
        <div class="layer" :class="{active:item.open}">  
          <ul>  
            <li v-for="ele in item.subCateGroupList" :key="ele.id">  
              <a href="#">  
                <img :src="ele.categoryList[0].bannerUrl" alt="商品图片" />  
              </a>  
              <div>{{ ele.name }}</div>  
            </li>  
          </ul>  
        </div>  
      </li>  
      <!-- 其他静态链接可以像这样添加 -->  
       <!-- <li><a href="/xxx">蔬菜</a></li>
        <li><a href="#">水果</a></li>
        <li><a href="#">干货</a></li>
        <li><a href="#">茶饮</a></li>
        <li><a href="#">礼品</a></li>
        <li><a href="#">面食</a></li>
        <li><a href="#">零食</a></li>   -->
            
    </ul>  
  </template>  
    

<style lang="less" scoped>
.app-header-nav{
    position: relative;
    .item{
        
        float: left;
        padding:0 10px;
        font-size: 14px;
        font-weight: bold;
        height: 40px;
        line-height: 40px;
        //选中高亮设置
        .router-link-exact-active{
            color: @xtxColor;
            border-bottom:2px solid;
        }
        .link{
            padding-bottom: 7px;
            font-size:15px;
        }
        //划过
        &:hover{
            .link{
                color: @xtxColor;
                border-bottom:2px solid;
            }
            .layer{
                opacity: 0;
                height: 120px;
            }
            .active{
                opacity: 1;
            }
        }
    }
    .layer{
        position:absolute;
        left: 0;
        top: 42px;
        opacity: 0;
        background-color: #fff;
        box-shadow:0 0 5px #ccc ;
        width: 1100px;
        height: 0;
        padding:10px;
        overflow: hidden;//鼠标悬停在上方才会浮现
        transition: all 0.5s;
        ul{
            display: flex;

            li{
                height: 100px;
                width: 110px;
                text-align: center;
                box-sizing: border-box;
                a{
                    border-bottom: 0;
                }
                img{
                    width: 80px;
                    height: 80px;
                    text-align: center;
                }
                &:hover{
                    background-color: #f7f7f7;
                }
            }
        }
    }
}
</style>