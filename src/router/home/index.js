export default {
    path: "/index",
    name: "Home",
    meta: {
        tabFlag: true
    },
    component: () => import("@views/home")
}