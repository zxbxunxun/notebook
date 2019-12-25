<template>
  <div>
    <h2>User</h2>
    <p>User page</p>
    <p>hello, {{ $route.params.id }}</p>
  </div>
</template>

<script>
export default {
  name: 'user'
};
</script>

<style></style>
