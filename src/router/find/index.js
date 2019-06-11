export default {
  path: "/find",
  name: "Find",
  component: () => import("@views/find"),
  meta: {
    tabFlag: true
  },
  children: [{
      path: "/findcontent",
      component: () => import("@components/find/findcontent"),
      meta: {
        tabFlag: true
      }
    },
    {
      path: "/coverstory",

      component: () => import("@components/find/coverstory"),
      meta: {
        tabFlag: true
      },
      children: [{
          path: "covertitle",
          name: "covertitle",
          component: () => import("@components/find/covertitle"),
          meta: {
            tabFlag: true
          },
          children: [{
              path: "/bastfloral",
              name: "Bastfloral",
              component: () => import("@components/find/bastfloral"),
              meta: {
                tabFlag: true
              }
            },
            {
              path: "/basthome",
              name: "Basthome",
              component: () => import("@components/find/basthome"),
              meta: {
                tabFlag: true
              }
            },
            {
              path: "/littleb",
              name: "Littleb",
              component: () => import("@components/find/littleb"),
              meta: {
                tabFlag: true
              }
            },
            {
              path: "/naked",
              name: "Naked",
              component: () => import("@components/find/naked"),
              meta: {
                tabFlag: true
              }
            },
            {
              path: "/tbh",
              name: "Tbh",
              component: () => import("@components/find/tbh"),
              meta: {
                tabFlag: true
              }
            }
          ]
        }

      ]
    }
  ]

}