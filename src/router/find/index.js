

export default{
  path:"/find",
  name:"find",
  component:()=>import("@views/find"),
  meta:{
    tabBarFlag:true
  },
  children:[
    {
      path:"findcontent",
    
      component:()=>import("@components/find/findcontent"),
      meta:{
        tabBarFlag:true
        }
    },
    {
      path:"coverstory",
      
      component:()=>import("@components/find/coverstory"),
      meta:{
        tabBarFlag:true
        },
      children:[
        {
          path:"covertitle",
          name:"covertitle",
          component:()=>import("@components/find/covertitle"),
          meta:{
            tabBarFlag:true
            },
            children:[
              
                {
                  path:"bastfloral",
                  name:"bastfloral",
                  component:()=>import("@components/find/bastfloral"),
                  meta:{
                    tabBarFlag:true
                    }
                },
                {
                  path:"basthome",
                  name:"basthome",
                  component:()=>import("@components/find/basthome"),
                  meta:{
                    tabBarFlag:true
                    }
                },
                {
                  path:"littleb",
                  name:"littleb",
                  component:()=>import("@components/find/littleb"),
                  meta:{
                    tabBarFlag:true
                    }
                },
                {
                  path:"naked",
                  name:"naked",
                  component:()=>import("@components/find/naked"),
                  meta:{
                    tabBarFlag:true
                    }
                },
                {
                  path:"tbh",
                  name:"tbh",
                  component:()=>import("@components/find/tbh"),
                  meta:{
                    tabBarFlag:true
                    }
                }
              
            ]
        }
        
      ]
    }
  ]
   
}
