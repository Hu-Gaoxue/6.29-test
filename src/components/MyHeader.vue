<template>
    <div class="my-header w">
        <!-- 上面区域 -->
         <div class="header-top">
            <h1 class="logo">  
               <img src="../assets/images/favicon.jpg" width="40px" height="40px" alt="Description of the image">  
               <router-link to="/" class="logo-link">咸阳农产</router-link>  
            </h1>
            <!-- 搜索 -->
            <div class="center">
                <div class="center-serarch">
                    <input type="text" name="" id="" placeholder="酥梨">
                    <button class="search-btn">搜索</button>
                </div>
                <ul class="center-navs">       
                    <li><a href="#">蔬菜</a></li>
                    <li><a href="#">水果</a></li>
                    <li><a href="#">干货</a></li>
                    <li><a href="#">茶饮</a></li>
                    <li><a href="#">礼品</a></li>
                    <li><a href="#">面食</a></li>
                    <li><a href="#">零食</a></li>

                </ul>
            </div>
            <div class="cart">
              <a href="##">
                <i class="iconfont icon-cart">购物车</i>
                <em>2</em>
              </a>  
            </div>
         </div>


         <!-- 二级导航 -->
          <AppHeaderNav/>
    </div>
</template>
<script>
import { useStore } from 'vuex';
import AppHeaderNav from './AppHeaderNav.vue'
export default{
    components:{
        AppHeaderNav
    },
    //发请求
    setup(props){
        const store= useStore();
        // 触发action
        store.dispatch('category/getAllCategory')
    }
}
</script>
<style lang="less" scoped>
.my-header {  
    height: 120px;  
    padding: 25px 0 0 0;  
    background-color: #fff;  
  
    .header-top {  
        display: flex;  
        justify-content: space-between; // 可选，用于水平分布子元素  
  
        .logo {  
            display: flex; // 使用 Flexbox 使 img 和 router-link 并行显示  
            // align-items: center; // 垂直居中子元素  
            width: 330px; // 根据需要设置宽度  
  
            img {  
                width: 40px; // 保持与 HTML 中设置的宽度一致  
                height: 40px; // 保持与 HTML 中设置的高度一致  
                margin-right: 25px; // 图片和链接之间的间距  
            }  
  
            .logo-link {  
                
            }  
        }  
  
        .center {  
            flex: 1; // 占据剩余空间  
            .center-serarch {  
               width: 540px;
               height: 35px;
               input{
                width: 440px;
                height: 35px;
                //注意拼写
                border:1px solid @xtxColor;
                border-radius:20px 0 0 20px;
                padding-left: 15px;
                box-sizing: border-box;
               }
               .search-btn{
                float: right;
                width: 100px;
                height: 35px;
                color: #fff;
                background-color:@xtxColor ;
                border-radius: 0 20px 20px 0 ;
                border: 0;
                font-size: 16px;
                cursor:pointer;
               }
               
            } 
            .center-navs{
                width: 540px;
                li{
                    float:left;
                    height: 32px;
                    padding: 5px;
                    a{
                        padding: 0 5px;
                        border-right: 1px solid #ccc;
                        &:hover{
                            color:@xtxColor;
                        }
                    }
                   
                }
                
               }
                li:last-child a{
                    border-right: 0;
                } 
        }  
  
        .cart {  
          box-sizing:border-box;
          width: 150px;  
          height: 35px;
          line-height: 32px;
          border-radius: 20px;
          border:1px solid @xtxColor;
          font-size: 16px;
          padding: 0 15px;
          i{

          }
          em{
            color:#fff;
            background-color: red;
            border-radius: 50%;
            padding: 5px;
            display: inline-block;
            width: 12px;
            height: 12px;
            line-height: 10px;
            font-size:10px;
            // padding:2px 5px;
          }
        }  
    }  
}

</style>