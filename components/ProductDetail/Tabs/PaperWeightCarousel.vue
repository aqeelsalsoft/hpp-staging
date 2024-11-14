<script lang="ts" setup>
import { onMounted, onBeforeUnmount, ref, watch } from 'vue';
import { useKeenSlider } from 'keen-slider/vue.es';
import KeenSlider from 'keen-slider';

const paperWeightSlider = ref(null);
let keenSlider: KeenSlider | null = null; // Declare keenSlider in the outer scope

const current = ref(0);

// const keenSlider = useKeenSlider({
//     loop: true,
//     slides: {
//         perView: 4,
//         spacing: 30,
//     },
// });

const props = defineProps({
    isActive: {
        type: Boolean,
        required: true,
    },
});

const initializeSlider = () => {
    if (props.isActive && paperWeightSlider.value) {
        keenSlider = new KeenSlider(paperWeightSlider.value, {
            // mode: "free-snap",
            loop: true,
            slides: {
                perView: 4,
                spacing: 20,
            },
            breakpoints: {
                '(max-width: 767px)': {
                    slides: {
                        perView: 2,
                        spacing: 20,
                    },
                },
            },
            slideChanged: (s) => {
                if (s?.track?.details) {
                    current.value = s?.track?.details?.rel;
                }
            },
        });
    }
};

const destroySlider = () => {
    if (keenSlider[0]) {
        keenSlider[0].destroy();
    }
};

onMounted(() => {
    if (props.isActive) initializeSlider();
});

watch(() => props.isActive, (newVal) => {
    if (newVal) {
        initializeSlider();
    } else {
        destroySlider();
    }
});

onBeforeUnmount(() => {
    destroySlider();
});

const materials = [
    { thumbnail_link: "/images/products/paper-weight/s1.png", item_name: "S1" },
    { thumbnail_link: "/images/products/paper-weight/card-stock.webp", item_name: "Card Stock" },
    { thumbnail_link: "/images/products/paper-weight/s1.png", item_name: "S1" },
    { thumbnail_link: "/images/products/paper-weight/foiling.jpg", item_name: "Foiling" },
    { thumbnail_link: "/images/products/paper-weight/s3.png", item_name: "S3" },
    { thumbnail_link: "/images/products/paper-weight/s4.png", item_name: "S4" },
    { thumbnail_link: "/images/products/paper-weight/s5.png", item_name: "S5" },
    { thumbnail_link: "/images/products/paper-weight/s6.png", item_name: "S6" },
];

</script>

<template>
    <!-- Google Reviews Component -->
    <div class="relative overflow-hidden pb-[70px]">
        <div ref="paperWeightSlider" class="keen-slider !flex !overflow-visible overflow-y-hidden grow-0">
            <div class="keen-slider__slide !overflow-visible" v-for="item in materials">
                <!-- User Review -->
                <div class="item__wrap">
                    <div class="thumb__wrapper w-full mb-[10px]">
                        <NuxtImg loading="lazy" format="webp" :src=item.thumbnail_link :alt=item.item_name
                            class="w-full h-auto rounded-[16px]" width="200" height="200" />
                    </div>
                    <!-- <div class="font-headings text-lg font-medium text-center">{{ item.item_name }}</div> -->
                </div>
            </div>
        </div>
        <button @click="keenSlider?.prev()" aria-label="previous"
            class="rounded-full shadow-icon-button border-2 border-transparent bg-slate-100 transition-all hover:bg-[#7157f8] active:border-core-purple-90 absolute bottom-[5px] left-[calc(50%_-_50px)] group"><svg
                stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 20 20"
                class="w-6 h-6 m-2 group-hover:fill-white" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                    d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                    clip-rule="evenodd"></path>
            </svg></button>
        <button @click="keenSlider?.next()" aria-label="next"
            class="rounded-full shadow-icon-button border-2 border-transparent bg-slate-100 transition-all hover:bg-[#7157f8] active:border-core-purple-90 absolute bottom-[5px] right-[calc(50%_-_50px)] group"><svg
                stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 20 20"
                class="w-6 h-6 m-2 group-hover:fill-white" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clip-rule="evenodd"></path>
            </svg></button>
    </div>
</template>

<style lang="scss" scoped></style>
