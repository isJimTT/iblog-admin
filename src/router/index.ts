import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      redirect: '/admin/article/list'
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/login/login.vue')
    },
    {
      path: '/admin',
      name: 'admin',
      component: () => import('@/views/main/main.vue'),
      children: [
        {
          path: '/article',
          name: '文章管理',
          children: [
            {
              path: 'list',
              name: '文章发布',
              component: () => import('@/views/main/article/list/List.vue')
            },
            {
              path: 'edit',
              name: '编辑文章',
              component: () => import('@/views/main/article/edit/Edit.vue')
            }
          ]
        },
        {
          path: 'user',
          name: '用户管理',
          component: () => import('@/views/main/user/User.vue')
        },
        {
          path: 'notice',
          name: '公告管理',
          component: () => import('@/views/main/notice/Notice.vue')
        },
        {
          path: 'comment',
          name: '评论管理',
          component: () => import('@/views/main/comment/Comment.vue')
        },
        {
          path: 'coding',
          name: 'coding',
          component: () => import('@/views/main/coding/Coding.vue')
        }
      ]
    },
    {
      path: '/:patchMatch(.*)',
      component: () => import('@/views/notFound/not-found.vue')
    }
  ]
})

// router.beforeEach((to) => {
//   // const token = localCache.getCache('token')
//   // if (to.path.startsWith('/main') && !token) {
//   //   return '/login'
//   // }
//   // if (to.path === '/login' && token) {
//   //   return '/main'
//   // }
//   // if (to.path === '/main' && firstRoute) {
//   //   return firstRoute.path
//   // }
// })

export default router
