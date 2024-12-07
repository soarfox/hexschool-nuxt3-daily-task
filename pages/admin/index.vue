<script setup lang="ts"></script>

<template>
  <div>
    <h1>Page: admin/index</h1>
    <div>
      當前路由的路徑為：{{ $route.fullPath }}
    </div>
    <div>
      <NuxtLink to="/">回首頁</NuxtLink>
    </div>
  </div>
</template>

<style scoped></style>
