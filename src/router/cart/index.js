export default {
    path: "/cart",
    name: "Cart",
    meta: {
        tabFlag: false
    },
    component: () => import("@views/cart")
}