<template>
  <div class="modal-mask d-flex align-items-center justify-content-center" v-if="true">
    <div class="modal-wrapper rounded-4 p-3 shadow-lg">
      <div class="modal-container" ref="target">
        <div class="modal-header d-flex flex-column align-items-start justify-content-center">
          <!-- Inputs -->
          <input class="task-name-input border-0 w-100 p-1" type="text" :placeholder="randomPlaceholder">
          <input class="task-description-input border-0 w-100 p-1" type="text" placeholder="Description">
          
          <!-- Action Buttons -->
          <div class="d-flex gap-1 py-3">
              <TaskButton icon="calendar-day" label="Date" />
              <TaskButton icon="flag" label="Priority" />
              <TaskButton icon="stopwatch" label="Reminders" />
              <button class="btn btn-sm extra-button border text-secondary">
                <font-awesome-icon icon="ellipsis" />
              </button>
          </div>
        </div>
        <!-- Modal Footer -->
        <div class="modal-footer border-top pt-3">
          <slot class="" name="footer">
            <div class="d-flex gap-2">
                <button class="btn btn-sm cancel-button" @click.stop="emit('modal-close')">Cancel</button>
                <button class="btn btn-sm add-button text-white">Add task</button>
            </div>
          </slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, ref } from "vue";
import {onClickOutside} from '@vueuse/core'
import TaskButton from "./TaskButton.vue";

const taskPlaceholders = [
  "Go to the market Sunday morning",
  "Finish reading Chapter 4 of book",
  "Email client about project update",
  "Book dentist appointment",
  "Walk the dog after lunch",
  "Buy gift for Anna's birthday",
  "Clean out the fridge",
  "Prepare slides for Monday's meeting",
  "Pay electricity bill online",
  "Schedule workout for the week",
  "Update resume",
  "Organize photo folder",
  "Call mom after dinner",
  "Research weekend trip ideas",
  "Fix broken shelf in the kitchen",
  "Plan grocery list for the week",
  "Practice 30 mins of French",
  "Backup laptop files",
  "Water the plants",
  "Declutter workspace"
];

const randomPlaceholder = taskPlaceholders[Math.floor(Math.random() * taskPlaceholders.length)];
const target = ref(null)
const emit = defineEmits(["modal-close"]);
const props = defineProps({isOpen: Boolean});

onClickOutside(target, ()=>emit('modal-close'))
</script>

<style scoped lang="scss">
.modal-wrapper {
  width: 35% !important;
  min-width: 35% !important;
}

.extra-button {
  &:hover {
    background: #f5f5f5 !important;
  }
}

.cancel-button {
  background: #f5f5f5;

  &:hover,
  &:active {
    background: #e5e5e5;
  }

  &:active {
    border: none;
    outline: none;
    transform: scale(0.98) !important;
    transition: all 0.1s ease-in-out !important;
  }

  &:focus {
    border: none;
    outline: none;
  }
}

.add-button {
  background: #dc4c3e;

  &:hover,
  &:active {
    background: #c3392c;
  }

  &:active {
    border: none;
    outline: none;
    transform: scale(0.98) !important;
    transition: all 0.1s ease-in-out !important;
  }

  &:focus {
    border: none;
    outline: none;
  }
}

// Background disabled state (just as comment)
// bg-disabled: #EDA59E;

.task-name-input {
  font: inherit;

  &:focus {
    border: none;
    outline: none;
  }
}

.task-description-input {
    font: inherit;

    &:focus {
    border: none;
    outline: none;
    } 
}
</style>
