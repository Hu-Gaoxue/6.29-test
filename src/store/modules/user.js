// //管理用户信息 非模块
// export default{
//     namespaced:true,
//     state:()=>{
//         return{
//             userinfo:{
//                 token:'123456',
//                 username:'小鱼儿'
//             }
//         }
//     },
//     //实现修改名字
//     mutations:{
//         updateName(state,payload){
//             state.userinfo.username=payload;
//         }
//     },
//     actions:{
//         //对象里写异步操作
//         //登录操作
//         updeatNameAsync({commit},payload){
//             setTimeout(()=>{
//                 commit('updateName',payload)
//             },2000);
//         }
//     },
//     getters:{

//     }
// }




// store.js  
export default {  
    namespaced: true,  
    state: {  
        userinfo: {  
            token: '123456',  
            username: '小鱼儿'  
        }  
    },  
    mutations: {  
        updateName(state, payload) {  
            state.userinfo.username = payload;  
        }  
    },  
    actions: {  
        updateNameAsync({ commit }, payload) {  
            setTimeout(() => {  
                commit('updateName', payload);  
            }, 2000);  
        }  
    },  
    getters: {  
        // 添加 getter 如果需要的话  
    }  
};