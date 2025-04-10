<template>
  <div class="container-fluid min-vh-100">
    <div class="row flex-nowrap">
      <div class="col-auto px-0">
        <Sidebar />
      </div>
      <main class="col ps-md-2 pt-2">
          content
      </main> 
    </div>
  </div>
</template>

<script setup lang="ts">
import Sidebar from './components/Sidebar/Sidebar.vue';
</script>