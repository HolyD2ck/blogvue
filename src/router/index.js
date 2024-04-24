import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Registr from '../views/RegistrPage.vue'
import Log from '../views/LoginPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      meta: { auth: false },
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      meta: { auth: false },
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      meta: { auth: false },
      component: () => import('../views/ContactView.vue')
    },
    {
      path: '/mass',
      name: 'mass',
      meta: { auth: true },
      component: () => import('../views/MassView.vue')
    },
    {
      path: '/testreg',
      name: 'testreg',
      meta: { auth: false },
      component: () => import('../views/TestRegView.vue')
    },
    {
      path: '/testlog',
      name: 'testlog',
      meta: { auth: false },
      component: () => import('../views/TestLogView.vue')
    },
    {
      path: '/reg',
      name: '/reg',
      meta: { auth: false },
      component: Registr
    },
    {
      path: '/login',
      name: '/login',
      meta: { auth: false },
      component: Log
    },
    {
      path: '/kniga',
      name: '/kniga',
      component: () => import('../views/KnigaBron.vue')
    },
    {
      path: '/crud',
      name: '/crud',
      component: () => import('../views/CrudKniga.vue')
    },
    {
      path: '/employers',
      name: '/employers',
      component: () => import('../views/employers/IndexPage.vue')
    },
    {
      path: '/employers/create',
      name: '/employers/create',
      component: () => import('../views/employers/createPage.vue')
    },
    {
      path: '/employers/:id',
      name: '/employers/:id',
      component: () => import('../views/employers/showPage.vue')
    },
    {
      path: '/employers/edit/:id',
      name: '/employers/edit/:id',
      component: () => import('../views/employers/editPage.vue')
    },
    {
      path: '/applicants',
      name: '/applicants',
      component: () => import('../views/applicants/IndexPage.vue')
    },
    {
      path: '/applicants/create',
      name: '/applicants/create',
      component: () => import('../views/applicants/createPage.vue')
    },
    {
      path: '/applicants/:id',
      name: '/applicants/:id',
      component: () => import('../views/applicants/showPage.vue')
    },
    {
      path: '/applicants/edit/:id',
      name: '/applicants/edit/:id',
      component: () => import('../views/applicants/editPage.vue')
    }
  ]
})

import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyBwIZQqJTkdwRcZ0E4hVFe5iWaMYmuYsno',
  authDomain: 'd2ckproject.firebaseapp.com',
  projectId: 'd2ckproject',
  storageBucket: 'd2ckproject.appspot.com',
  messagingSenderId: '23028867207',
  appId: '1:23028867207:web:ea08df1372cf4e75505822',
  measurementId: 'G-N3JPWMSL19'
}

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)

router.beforeEach((to, from, next) => {
  const user = auth.currentUser
  const requereAuth = to.matched.some((record) => record.meta.auth)

  if (requereAuth && !user) {
    next('/login')
  } else next()
})

export default router
