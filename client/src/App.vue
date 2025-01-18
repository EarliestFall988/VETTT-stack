

<script setup lang="ts">




</script>

<template>
  <h1>Hello App!</h1>
  <p>
    <strong>Current route path:</strong> {{ $route.fullPath }}
  </p>
  <nav>
    <RouterLink to="/">Go to Home</RouterLink>
    <RouterLink to="/about">Go to About</RouterLink>
    <RouterLink to="/fetch">Fetch Example</RouterLink>
    <RouterLink to="/trpc">TRPC Example</RouterLink>
  </nav>
   <main>
    <RouterView />
  </main>
</template>