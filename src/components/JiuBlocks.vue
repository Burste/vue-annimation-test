<template>
    <div :class="`jiu-block__container ${className}`">
        <div
            :class="'jiu-block__item'"
            v-for="(block, idx) in blocks"
            :key="block"
        >
            <div
                :class="[
                    'jiu-block__bg',
                    {
                        'jiu-block__bg--bling': isBlockBling(idx),
                    },
                ]"
            ></div>
            <div v-if="isBall(idx)" :class="`jiu-block__ball ${ballClassName}`">
                <span>{{ block }}</span>
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    className: {
        type: String,
        default: '',
    },
    showBlockNumber: {
        type: Boolean,
        default: false,
    },
    ballPos: {
        type: Array,
        default: () => [],
    },
    blingBlock: {
        type: Array,
        default: () => [],
    },
    ballClassName: {
        type: String,
        default: '',
    },
});

const blocks = Array.from({ length: 9 }, (_, i) => i + 1);
const isBall = (idx) => props.ballPos.includes(idx + 1);
const isBlockBling = (idx) => {
    return props.blingBlock.includes(idx + 1);
};
</script>

<style lang="scss" scoped>
@keyframes bling {
    0% {
        opacity: 100%;
    }
    100% {
        opacity: 60%;
    }
}
.jiu-block {
    &__container {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(3, 1fr);
        position: relative;
    }
    &__item {
        position: relative;
        height: 100px;
        font-size: 16px;
        width: 100%;
        border: black solid 2px;
    }
    &__bg {
        position: absolute;
        height: 100%;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        background: radial-gradient(
            circle,
            rgba(113, 81, 95, 1) 81%,
            rgba(0, 0, 0, 1) 100%
        );
        &--bling {
            animation: bling 0.5s infinite;
        }
    }
    &__ball {
        position: absolute;
        @include mixin.size(100%);
        display: flex;
        align-items: center;
        z-index: 10;
        justify-content: center;
        // top: 50%;
        // left: 50%;
        // transform: translate(-50%, -50%);
        span {
            display: flex;
            align-items: center;
            justify-content: center;
            background: #ffee63;
            border-radius: 100%;
            width: 50px;
            height: 50px;
            color: #1a1a1a;
            font-weight: bold;
            opacity: 1;
        }
    }
}

@keyframes left-to-right {
    0% {
        transform: translateX(0) translateZ(100px);
    }
    100% {
        transform: translateX(100%) translateZ(100px);
    }
}
.moving-right {
    animation: left-to-right 1s linear infinite;
}
</style>
