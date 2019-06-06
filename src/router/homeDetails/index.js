export default {
    path: "/homeDetails",
    name: "HomeDetails",
    meta:{
        tabFlag: false
    },
    component: () => import("@views/home-details")
}