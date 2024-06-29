const base = {  
    // 这是后端API的基础URL，不包括任何路由路径或查询参数  
    baseUrl: 'http://you.163.com/',  
    // 这是用于获取分类信息的URL路径（相对于apiBaseUrl）  
    categoryUrl: '/api/xhr/globalinfo/queryTop.json' // 注意这里只是路径，不包括基础URL  
};  
  
export default base;