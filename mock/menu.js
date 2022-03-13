export default {
  'GET /api/menu': [
    {
      path: '/user',
      layout: false,
      routes: [
        {
          path: '/user',
          routes: [
            {
              name: 'login',
              path: '/user/login',
              component: './user/Login',
            },
          ],
        },
        {
          component: './404',
        },
      ],
    },
    {
      path: '/welcome',
      name: 'welcome',
      component: './Welcome',
    },
    {
      path: '/admin',
      name: 'admin',
      access: 'canAdmin',
      component: './Admin',
      routes: [
        {
          path: '/admin/sub-page',
          name: 'sub-page',
          component: './Welcome',
        },
        {
          component: './404',
        },
      ],
    },
    {
      name: 'list.table-list',
      path: '/list',
      component: './TableList',
    },
    {
      name: 'test',
      path: '/test',
      component: './test',
    },
    {
      path: '/',
      redirect: '/welcome',
    },
    {
      component: './404',
    },
  ],
};
