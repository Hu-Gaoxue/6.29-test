<template>
    <div class="app-top-nav">
        <div class="w">
            <ul>
                <template v-if="true">
                    <li><a href="javascript:;">小鱼儿</a></li>
                    <li><a href="javascript:;">退出登录</a></li>
                </template>
                <li v-else><a href="javascript:;">登录/注册</a></li>
                <li><a href="javascript:;">我的订单</a></li>
                <li><a href="javascript:;">小农</a></li>
                <li><a href="javascript:;">企业采购</a></li>
                <li><a href="javascript:;">客户服务</a></li>
                <li><a href="javascript:;"><i class="iconfont icon-phone"></i>APP</a></li>
            </ul>
        </div>
    </div>
</template>
<script>
//拿到仓库
import {useStore} from 'vuex'
import {computed} from 'vue';
export default{
    setup(props){
       const store= useStore();
       let userinfo=computed(()=>{
        return store.state.user.userinfo;
       });
       return {userinfo};
    }
}
</script>
<style lang="less" scoped>
// @import url('../assets/style/variables.less');
// 每次使用之前倒要引用太麻烦了，弄个插件
//vue add style-resources-loader   (y,less)
.app-top-nav{
    background-color: #333;
   ul{
    
    display: flex;
    height: 40px;
    line-height: 40px;
    justify-content: flex-end;
    li{
        a{
            font-size: 12px;
            padding:2px 10px;
            color:#ccc;
            &:hover{
            color:@xtxColor; 
            }
            
        }
        ~li{
            // 让第一个竖线消失，~:兄弟元素
            a{
                border-left:1px solid #ccc ;
            }
        }
    }
   }
}
</style>