import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import Me from '@/components/Me'
import Interaction from '@/components/Interaction'
import CreateGroup from '@/components/CreateGroup'
import MyGroup from '@/components/MyGroup'
import Demo from '@/components/demo'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Home',
      name: 'Home',
      component: Home
    },
    {
      path: '/me',
      name: 'Me',
      component: Me
    },
    {
      path: '/interaction',
      name: 'Interaction',
      component: Interaction
    },
    {
      path: '/createGroup',
      name: 'CreateGroup',
      component: CreateGroup
    },
    {
      path: '/myGroup',
      name: 'MyGroup',
      component: MyGroup
    },
  ]
})
