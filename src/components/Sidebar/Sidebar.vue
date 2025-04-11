<template>
    <div class="col-auto px-0">
        <div class="collapse collapse-horizontal shadow-sm show min-vh-100" id="sidebar">
            <div style="width: 250px">
                <div class="d-flex justify-content-end p-1">
                    <font-awesome-icon icon="bell" class="p-1 my-2 mx-2" style="cursor: pointer;" />
                    <button class="p-1 bg-transparent border-0 rounded open-sidebar-button" type="button">
                        <img src="./images/sidebar-icon.png" alt="sidebar icon" width="30" height="25">
                    </button>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item mx-2 rounded p-1 py-2 border-0 bg-transparent" id="add-task" @click.prevent="$emit('open-modal')">
                        <font-awesome-icon icon="plus" class="mx-2" />Add Task
                    </li>
                    <RouterLink class="list-group-item mx-2 rounded p-1 py-2 border-0 bg-transparent text-decoration-none" to="/search" id="inbox">
                        <font-awesome-icon icon="search" class="mx-2" />Search
                    </RouterLink>
                    <RouterLink class="list-group-item mx-2 rounded p-1 py-2 border-0 bg-transparent text-decoration-none" to="/inbox" id="inbox">
                        <font-awesome-icon icon="inbox" class="mx-2" />Inbox
                    </RouterLink>
                    <RouterLink class="list-group-item mx-2 rounded p-1 py-2 border-0 bg-transparent text-decoration-none" to="/today" id="inbox">
                        <font-awesome-icon icon="calendar-day" class="mx-2" />Today
                    </RouterLink>
                    <RouterLink class="list-group-item mx-2 rounded p-1 py-2 border-0 bg-transparent text-decoration-none" to="/filters&labels" id="inbox">
                        <font-awesome-icon icon="arrow-down-z-a" class="mx-2" />Filters & Labels
                    </RouterLink>
                    <RouterLink class="list-group-item mx-2 rounded p-1 py-2 border-0 bg-transparent text-decoration-none" to="/completed" id="inbox">
                        <font-awesome-icon icon="circle-check" class="mx-2" />Completed
                    </RouterLink>
                </ul>
            </div>
        </div>
      </div>
</template>

<script setup lang="ts">
import "./Sidebar.scss";
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
</script>