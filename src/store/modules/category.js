import {getCategoryList} from '@/api/index'
import {topCategory} from '@/utils/constants'
export default {  
    namespaced: true,  
    state: ()=>{  
        return{
            cateList:topCategory,//默认值，请求不到数据时显示
        } 
    },  
    //同步修改状态
    mutations: {  
        setList(state, payload) {  
            state.cateList = payload;  
        }  
    },  
    //异步修改 异步请求
    actions: {  
      
       async getAllCategory({commit}) {
        try{
             //发送请求，请求所有分类类别
            const res=await getCategoryList();
            console.log(res);
            if(res.code==='200'){
                commit('setList',res.data.cateList)
            }
        }catch(error){
            console.log(error);
        }
       }
    },  
    getters: {  
        // 添加 getter 如果需要的话  
    }  
};