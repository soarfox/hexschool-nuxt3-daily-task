<template>
  <div>
    <h1> Page: page/index</h1>
    <div class="container">這是一個container
      <div>
        <button type="button" class="btn btn-primary">Primary</button>
        <button type="button" class="btn btn-secondary">Secondary</button>
        <button type="button" class="btn btn-success">Success</button>
        <button type="button" class="btn btn-danger">Danger</button>
        <button type="button" class="btn btn-warning">Warning</button>
        <button type="button" class="btn btn-info">Info</button>
        <button type="button" class="btn btn-light">Light</button>
        <button type="button" class="btn btn-dark">Dark</button>
        <button type="button" class="btn btn-link">Link</button>
      </div>
    </div>
    <NuxtLink to="/front">前台首頁</NuxtLink>
    <span> |  </span>
    <NuxtLink to="/admin">後台首頁</NuxtLink>
  </div>
</template>

<style lang="scss" scoped>
$primary: #659287;
h1 
  {
    color: $primary;
    font-size: $fs-xl;
  }
.container {
  margin: 0 auto;
  border: 5px solid $primary;
  }
</style>