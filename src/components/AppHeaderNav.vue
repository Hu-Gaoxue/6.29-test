<!-- <template>
    <ul class="app-header-nav">       
        <li v-for="item in list" :key="item.id">
            <RouterLink to="/">首页</RouterLink>
            <div class="layer"><ul>
                <li v-for="item in 5" :key="item">
                    <a href="#">
                        <img src="@/assets/images/veg/秦都红薯.jpg" alt/>
                    </a>
                    <div>商品名称</div>
                </li>
            </ul></div>
        </li> -->
            
    <!-- </ul>
</template> -->

<script setup>  
import { computed } from 'vue';  
import { useStore } from 'vuex';  

const store = useStore();  
const list = computed(() => {  
  return store.state.category.cateList;  
});  
</script>

<template>  
    <ul class="app-header-nav">  
      <li v-for="item in list" :key="item.id">  
        <!-- 假设你希望根据 item 的某些属性来动态生成链接 -->  
        <RouterLink :to="item.link || '/'">{{ item.name || '首页' }}</RouterLink>  
        <div class="layer">  
          <ul>  
            <li v-for="n in 5" :key="n">  
              <a href="#">  
                <img src="@/assets/images/veg/秦都红薯.jpg" alt="商品图片" />  
              </a>  
              <div>商品名称</div>  
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
    li{
        position: relative;
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
        a{
            padding-bottom: 7px;
            font-size:15px;
        }
        //划过
        a:hover{
            color: @xtxColor;
            border-bottom:2px solid;
        }
    }
    .layer{
        position:absolute;
        left: 0;
        top: 40px;
        background-color: #fff;
        box-shadow:0 0 5px #ccc ;
        width: 1100px;
        height: 130px;
        ul{
            li{
                height: 100px;
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