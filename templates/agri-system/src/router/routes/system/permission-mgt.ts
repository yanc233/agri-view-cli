/*
 * @Author: Yanc
 * @Date: 2023-01-09 14:01:23
 * @LastEditTime: 2023-03-02 17:17:33
 */

export default {
  path: 'permission-mgt',
  name: 'permission-mgt',
  redirect: 'resources-mgt',
  meta: {
    breadcrumb: '系统管理',
  },
  component: () =>
    import('agri-system2/src/views/system/permission-mgt/index.vue'),
  children: [
    {
      path: 'org-mgt',
      name: 'org-mgt',
      meta: {
        breadcrumb: '组织管理',
      },
      component: () =>
        import(
          'agri-system2/src/views/system/permission-mgt/org-mgt/index.vue'
        ),
    },
    {
      path: 'resources-mgt',
      name: 'resources-mgt',
      meta: {
        breadcrumb: '资源管理',
      },
      component: () =>
        import(
          'agri-system2/src/views/system/permission-mgt/resource-mgt/index.vue'
        ),
    },
    {
      path: 'role-mgt',
      name: 'role-mgt',
      meta: {
        breadcrumb: '角色管理',
      },
      component: () =>
        import(
          'agri-system2/src/views/system/permission-mgt/role-mgt/index.vue'
        ),
    },
    {
      path: 'user-mgt',
      name: 'user-mgt',
      meta: {
        breadcrumb: '用户管理',
      },
      component: () =>
        import(
          'agri-system2/src/views/system/permission-mgt/user-mgt/index.vue'
        ),
    },
    {
      path: 'category-mapping-mgt',
      name: 'category-mapping-mgt',
      meta: {
        breadcrumb: '字典管理',
      },
      component: () =>
        import(
          'agri-system2/src/views/system/permission-mgt/category-mapping-mgt/index.vue'
        ),
    },
  ],
};
