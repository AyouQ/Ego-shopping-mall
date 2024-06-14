 import router from './router.js';
import store from '../store';
 router.beforeEach((to, from, next) => {
      if(to.meta.isLogin){
        let token = store.state.login.user.token;
        if(token){
            next();
        }
        else{
            next({
                name:'Login',
            });
        }
      }
      else{
        next();
      }
})
export default router;