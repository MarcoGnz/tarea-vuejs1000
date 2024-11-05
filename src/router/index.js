import Vue from 'vue';
//import Router from 'vue-router';
import VueRouter from 'vue-router';
import HomeView from '@/views/HomeView.vue'; 
import AddTask from '@/views/AddTask.vue';
import TaskList from '@/views/TaskList.vue';
import CombinedView from '@/views/CombinedView.vue';
/*
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomeView',
      component: HomeView,
    },
    {
      path: '/addtask',
      name: 'AddTask',
      component: AddTask
    },
    {
      path: '/tasklist',
      name: 'TaskList',
      component: TaskList
    },
    {
      path: '/combined',
      name: 'CombinedView',
      component: CombinedView
    },
  ]

  
});*/

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: HomeView,
  },
  {
    path: '/addtask',
    name: 'AddTask',
    component: AddTask
  },
  {
    path: '/tasklist',
    name: 'TaskList',
    component: TaskList
  },
  {
    path: '/combined',
    name: 'CombinedView',
    component: CombinedView
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
