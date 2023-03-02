<!--
 * @Author: Yanc
 * @Date: 2023-02-23 18:38:27
 * @LastEditTime: 2023-03-02 15:35:53
-->
<template>
  <div>
    <router-view v-slot="{ Component, route }">
      <transition name="fade" mode="out-in" appear>
        <div class="container-page-breadcrumb">
          <div v-if="appStore.breadcrumb" class="breadcrumb">
            <breadcrumb
              :route="route"
              :items="getBreadcrumbFromRoute(route)"
            ></breadcrumb>
          </div>
          <div class="page">
            <component :is="Component" :key="route.fullPath" />
            <!-- <component
              :is="Component"
              v-if="route.meta.ignoreCache"
              :key="route.fullPath"
            />
            <keep-alive v-else>
              <component :is="Component" :key="route.fullPath" />
            </keep-alive> -->
          </div>
        </div>
      </transition>
    </router-view>
  </div>
</template>

<script lang="ts" setup>
  import { RouteLocationNormalizedLoaded } from 'vue-router';
  import { useAppStore } from '@/store';
  import Breadcrumb from '../components/breadcrumb/index.vue';

  const appStore = useAppStore();

  const getBreadcrumbFromRoute = (route: RouteLocationNormalizedLoaded) => {
    return route.matched
      .map((item) => item.meta?.breadcrumb)
      .filter(Boolean) as any;
  };
</script>

<style scoped lang="less">
  .container-page-breadcrumb {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    padding: 10px 20px;

    .breadcrumb {
      margin-bottom: 10px;
    }

    .page {
      flex: 1;
      min-height: 0;
    }
  }
</style>
