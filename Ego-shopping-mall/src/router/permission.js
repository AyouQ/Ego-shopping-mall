 import router from './router.js';

 router.beforeEach((to, from, next) => {
      if(to.meta.isLogin){
        let token = false;
        if(token){
            next();
        }
        else{
            next({
                name:'Login',
            });
        }
      }
      next();
})
export default router;