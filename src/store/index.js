import { defineStore } from 'pinia';
import { getLocalStorage, setLocalStorage } from '@/utils/system';
import { STORAGE } from '@/constants/config';
import { get } from '@vueuse/core';

export const usePlatformState = defineStore('platform', {
    state: () => ({
        sidebarExpandStatus: false,
        activeMenuItem: getLocalStorage(STORAGE.ACTIVE_MENU_ITEM) || '',
    }),
    getters: {
        // double: (state) => state.count * 2,
    },
    actions: {
        toggleSidebar() {
            this.sidebarExpandStatus = !this.sidebarExpandStatus;
            console.log('toggle');
        },
        setActiveMenuItem(key) {
            this.activeMenuItem = key;
            setLocalStorage(STORAGE.ACTIVE_MENU_ITEM, key);
        },
    },
});
