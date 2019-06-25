import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
<%_ if(options.addMenu) { _%>
import RouteView from '@/components/shared/RouteView'
<%_ } _%>
<%_ if(options.addLogin) { _%>
import Login from '@/views/login/Login'
import LoginForm from '@/components/login/LoginForm'
import LoginPasswordForm from '@/components/login/LoginPasswordForm'
<%_ } _%>

import { setBreadcrumbParams } from './breadcrumb-params'
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
    <%_ if(options.addLogin) { _%>
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
        }
      ]
    },<%_ } _%>
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        <%_ if(options.addLogin) { _%>
        private: true,
        <%_ } _%>
        breadcrumbTextKey: 'home'
      }
    }
  ]
})

route.beforeEach((to, from, next) => {
  <%_ if(options.addLogin) { _%>
  if (to.matched.some(record => record.meta.private)) {
    if (!sessionStorage.getItem('sessionToken')) {
      next({name: 'Login'})
    } else {
      next()
    }
  } else {
    next()
  }
  <%_ } _%>
  setBreadcrumbParams(to)
})

export default route
