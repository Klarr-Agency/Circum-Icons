<script>
import { icons } from "./iconList.js";

export default {
    name: "CircumIcons",
    props: {
        name: String,
        size: {
            type: String,
            default: "32px",
        },
        color: {
            type: String,
            default: "currentColor",
        },
    },
    computed: {
        path() {
            return icons.find((e) => e.name === this.name);
        },
    },
};
</script>

<template>
    <svg :class="'circumicon__' + name" :width="size" :height="size" viewBox="0 0 24 24" :fill="color"
        v-html="path.svg">
    </svg>
</template>
