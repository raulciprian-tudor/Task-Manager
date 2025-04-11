<template>
  <div class="container-fluid min-vh-100 position-relative z-0">
    <div class="row flex-nowrap">
      <!-- Sidebar -->
      <div class="col-auto px-0">
        <Sidebar @open-modal="openModal"/>
      </div>
      
      <!-- Main Content -->
      <div class="col ps-md-2 pt-2 d-flex align-items-center">
        <div class="container">
          <RouterView />
        </div>
      </div> 
    </div>

    <!-- Add Task Modal -->
    <Transition name="bounce">
          <AddTask class="w-100 modal-overlay" :isOpen="isModalOpened" @modal-close="closeModal" @submit="submitHandler" name="first-modal"/>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import Sidebar from './components/Sidebar/Sidebar.vue';
import AddTask from './components/addTask/AddTask.vue';
import { ref } from 'vue';

const isModalOpened = ref(false);

const openModal = () => {
  isModalOpened.value = true;
};
const closeModal = () => {
  isModalOpened.value = false;
};

const submitHandler = ()=>{
  //here you do whatever
}

</script>

<style scoped>
.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  z-index: 9999;
}

</style>