<template>
    <button class="btn btn-sm extra-button border text-secondary fw-lighter">
        <font-awesome-icon :icon="icon" class="mx-1" />{{ label }}
    </button>
</template>

<script setup lang="ts">
    defineProps({
        icon: {
            type: String,
            required: true
        },
        label: {
            type: String,
            required: true
        }
    })
</script>