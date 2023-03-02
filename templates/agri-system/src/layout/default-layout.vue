<template>
  <a-layout class="layout" :class="{ mobile: appStore.hideMenu }">
    <!-- 头部导航 -->
    <a-layout-header v-if="navbar" class="layout-header">
      <NavBar />
    </a-layout-header>

    <a-layout class="layout-content">
      <a-layout-sider
        v-if="renderMenu"
        v-show="!hideMenu"
        class="layout-sider"
        breakpoint="xl"
        :collapsed="collapsed"
        :collapsible="true"
        :width="menuWidth"
        :hide-trigger="true"
        @collapse="setCollapsed"
      >
        <div class="menu-wrapper">
          <Menu :menu-tree="userStore.getResource.children" />
        </div>
      </a-layout-sider>

      <a-layout-content class="layout-page">
        <PageLayout class="layout-page-container" />
        <Footer v-if="footer" class="layout-page-footer"></Footer>
      </a-layout-content>
    </a-layout>

    <a-drawer
      v-if="hideMenu"
      :visible="drawerVisible"
      placement="left"
      :footer="false"
      title="菜单导航"
      mask-closable
      :closable="false"
      @cancel="drawerCancel"
    >
      <Menu :menu-tree="userStore.getResource.children" />
    </a-drawer>
  </a-layout>
</template>

<script lang="ts" setup>
  import { ref, computed, watch, provide, onMounted } from 'vue';
  import { useRouter, useRoute } from 'vue-router';
  import { useAppStore, useUserStore } from '@/store';
  import NavBar from '@/components/navbar/index.vue';
  import Menu from 'agri-system2/src/components/menu/index.vue';
  import Footer from '@/components/footer/index.vue';
  import usePermission from '@/hooks/permission';
  import useResponsive from '@/hooks/responsive';
  import PageLayout from './page-layout.vue';

  const isInit = ref(false);
  const appStore = useAppStore();
  const userStore = useUserStore();
  const router = useRouter();
  const route = useRoute();
  const permission = usePermission();
  useResponsive(true);

  const navbar = computed(() => appStore.navbar);
  const renderMenu = computed(() => appStore.menu);
  const hideMenu = computed(() => appStore.hideMenu);
  const footer = computed(() => appStore.footer);
  const menuWidth = computed(() => {
    return appStore.menuCollapse ? 48 : appStore.menuWidth;
  });
  const collapsed = computed(() => {
    return appStore.menuCollapse;
  });

  const setCollapsed = (val: boolean) => {
    if (!isInit.value) return; // for page initialization menu state problem
    appStore.updateSettings({ menuCollapse: val });
  };
  watch(
    () => userStore.role,
    (roleValue) => {
      if (roleValue && !permission.accessRouter(route))
        router.push({ name: 'notFound' });
    }
  );
  const drawerVisible = ref(false);
  const drawerCancel = () => {
    drawerVisible.value = false;
  };
  provide('toggleDrawerMenu', () => {
    drawerVisible.value = !drawerVisible.value;
  });
  onMounted(() => {
    isInit.value = true;
  });
</script>

<style scoped lang="less">
  @nav-size-height: 60px;
  @layout-max-width: 1100px;

  .layout {
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    overflow: hidden;

    .layout-header {
      height: 60px;
    }

    .layout-content {
      display: flex;
      flex: 1;
      overflow: hidden;
      background-color: var(--color-fill-2);
      transition: padding 0.2s cubic-bezier(0.34, 0.69, 0.1, 1);

      .layout-sider {
        transition: all 0.2s cubic-bezier(0.34, 0.69, 0.1, 1);

        &::after {
          position: absolute;
          top: 0;
          right: -1px;
          display: block;
          width: 1px;
          height: 100%;
          background-color: var(--color-border);
          content: '';
        }

        > :deep(.arco-layout-sider-children) {
          overflow-y: hidden;
        }
      }

      .layout-page {
        display: flex;
        flex: 1;
        flex-direction: column;
        height: 100%;

        .layout-page-container {
          flex: 1;
          height: 100%;
          min-height: 0;
          overflow: auto;
        }

        .layout-page-footer {
          min-height: 0;
        }
      }
    }
  }

  .menu-wrapper {
    height: 100%;
    overflow: auto;
    overflow-x: hidden;

    :deep(.arco-menu) {
      ::-webkit-scrollbar {
        width: 12px;
        height: 4px;
      }

      ::-webkit-scrollbar-thumb {
        background-color: var(--color-text-4);
        background-clip: padding-box;
        border: 4px solid transparent;
        border-radius: 7px;
      }

      ::-webkit-scrollbar-thumb:hover {
        background-color: var(--color-text-3);
      }
    }
  }
</style>
