export default {
  path: 'user',
  name: 'user',
  component: () => import('agri-system2/src/views/system/user/index.vue'),
  children: [
    {
      path: 'setting',
      name: 'setting',
      meta: {
        breadcrumb: '用户中心',
      },
      component: () =>
        import('agri-system2/src/views/system/user/setting/index.vue'),
    },
  ],
};
