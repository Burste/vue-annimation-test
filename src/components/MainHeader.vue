<template>
    <div
        class="flex justify-between items-center fixed top-0 h-[60px] w-full px-4 bg-portal-coffee border-b-[1px] border-portal-black z-10"
    >
        <div
            class="flex items-center justify-center text-white font-bold cursor-pointer h-full"
            @click="navigateToHome"
        >
            {{ appTitle }}
        </div>
        <div
            class="flex items-center justify-center w-6 h-6 text-sm border-[1px] border-white text-white rounded"
            @click="toggleSidebar"
        >
            <svg
                class="svg-icon"
                style="
                    width: 16px;
                    height: 16px;
                    vertical-align: middle;
                    fill: currentColor;
                    overflow: hidden;
                "
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M177.50016 307.2l614.4 0c11.30496 0 20.48-9.15456 20.48-20.48s-9.17504-20.48-20.48-20.48l-614.4 0c-11.30496 0-20.48 9.15456-20.48 20.48S166.17472 307.2 177.50016 307.2z"
                />
                <path
                    d="M177.50016 757.76l614.4 0c11.30496 0 20.48-9.15456 20.48-20.48s-9.17504-20.48-20.48-20.48l-614.4 0c-11.30496 0-20.48 9.15456-20.48 20.48S166.17472 757.76 177.50016 757.76z"
                />
                <path
                    d="M177.50016 532.48l614.4 0c11.30496 0 20.48-9.15456 20.48-20.48s-9.17504-20.48-20.48-20.48l-614.4 0c-11.30496 0-20.48 9.15456-20.48 20.48S166.17472 532.48 177.50016 532.48z"
                    fill="currentColor"
                />
            </svg>
        </div>
    </div>
</template>

<script setup>
import { usePlatformState } from '@/store';
import { useRouter } from 'vue-router';

const navigateToHome = () => {
    router.push('/');
};

const router = useRouter();
const appTitle = import.meta.env.VITE_APP_TITLE;
const storePlatform = usePlatformState();
const { toggleSidebar } = storePlatform;
</script>
<style lang="scss" scoped></style>
