const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/contact', component: Contact }
];

window.router = VueRouter.createRouter({
  history: VueRouter.createHistory(),
  routes,
});
window.router.beforeEach((to, from, next) => {
  // Perform any necessary checks or actions before navigating to the new route
  console.log(`Navigating to ${to.path} from ${from.path}`);
  next();
});