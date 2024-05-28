import Home from "../pages/Home"
import Users from "../pages/Users"

const publicRoutes = [
    { path: "/", component: Home},
    { path: "/users", component: Users}
]

const privateRoutes = [

]

export { publicRoutes, privateRoutes }