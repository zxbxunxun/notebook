<template>
  <div>
    <h2>User</h2>
    <p>User page</p>
    <p>
      hello, <span class="username">{{ $route.params.id }}</span>
    </p>
  </div>
</template>

<script>
export default {
  name: 'user',
  created() {
    window.console.log('created');
  }
};
</script>

<style>
.username {
  color: green;
}
</style>
