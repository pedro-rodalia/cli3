import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from '@/views/login/Login'
import LoginForm from '@/components/login/LoginForm'
import LoginPasswordForm from '@/components/login/LoginPasswordForm'
import LoginPasswordResetForm from '@/components/login/LoginPasswordResetForm'
import LoginRegister from '@/components/login/LoginRegister'
Vue.use(Router)

/* function to add breadcrumbs to a view */
const setBreadcrumbParams = to => {
  const breadcrumbParams = {
    userInfo: sessionStorage.getItem('userInfo'),
    randomStr: sessionStorage.getItem('randomStr')
  }
  to.matched.forEach(e => {
    for (const param in breadcrumbParams) {
      if (e.meta.breadcrumbParam === param) {
        to.params[e.meta.breadcrumbParam] = breadcrumbParams[param]
      }
    }
  })
}

const route = new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login,
      redirect: { name: 'login-form' },
      children: [
        {
          path: '',
          name: 'login-form',
          component: LoginForm
        },
        {
          path: 'password',
          name: 'password-form',
          component: LoginPasswordForm
        },
        {
          path: 'register',
          name: 'register',
          component: LoginRegister
        },
        {
          path: 'password-reset',
          name: 'password-reset-form',
          component: LoginPasswordResetForm
        }
      ]
    }, {
      path: '/',
      name: 'Home',
      component: Home,
      meta: {
        private: true,
        breadcrumbTextKey: 'home'
      }
    }
  ]
})

route.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.private)) {
    if (false) { // CHANGEIT: Condition for unauthorized user
      next({ name: 'Login' })
    } else {
      next()
    }
  } else {
    next()
  }
  setBreadcrumbParams(to)
})

export default route
