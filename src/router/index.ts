import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/inbox',
            name: 'inbox',
            component: () => import('../components/inbox/Inbox.vue'), // lazy loading
        },
        {
            path: '/search',
            name: 'search',
            component: () => import('../components/search/Search.vue'), // lazy loading
        },
        {
            path: '/today',
            name: 'today',
            component: () => import('../components/today/Today.vue'), // lazy loading
        },
        {
            path: '/filters&labels',
            name: 'filters&labels',
            component: () => import('../components/filters-labels/FiltersLabels.vue'), // lazy loading
        },
        {
            path: '/completed',
            name: 'completed',
            component: () => import('../components/completed/Completed.vue'), // lazy loading
        },
    ],
})

export default router
