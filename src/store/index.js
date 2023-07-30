import { defineStore } from 'pinia';
export const usePlatformState = defineStore('platform', {
    state: () => ({
        sidebarExpandStatus: false,
    }),
    getters: {
        // double: (state) => state.count * 2,
    },
    actions: {
        toggleSidebar() {
            this.sidebarExpandStatus = !this.sidebarExpandStatus;
            console.log('toggle');
        },
    },
});
