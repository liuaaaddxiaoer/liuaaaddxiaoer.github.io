import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Me from '@/components/Me'
import Interaction from '@/components/Interaction'
import CreateGroup from '@/components/CreateGroup'
import MyGroup from '@/components/MyGroup'
import OrderList from '@/components/OrderList'
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
    {
      path: '/buyList',
      name: 'BuyList',
      component: OrderList
    },
    {
      path: '/sellList',
      name: 'SellList',
      component: OrderList
    },
  ]
})
