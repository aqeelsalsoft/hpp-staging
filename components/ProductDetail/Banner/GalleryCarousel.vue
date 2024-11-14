<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import KeenSlider from 'keen-slider'
import 'keen-slider/keen-slider.min.css'

defineProps({
    galleryImages: {
        type: Array,
        default: null
    },
});

const sliderRef = ref(null)
const thumbnailRef = ref(null)
let slider
let thumbnail

function ThumbnailPlugin(main) {
    return (slider) => {
        function removeActive() {
            slider.slides.forEach((slide) => {
                slide.classList.remove("active")
            })
        }
        function addActive(idx) {
            slider.slides[idx].classList.add("active")
        }

        function addClickEvents() {
            slider.slides.forEach((slide, idx) => {
                slide.addEventListener("click", () => {
                    main.moveToIdx(idx)
                })
            })
        }

        slider.on("created", () => {
            if (slider?.track?.details) {
                addActive(slider?.track?.details?.rel)
                addClickEvents()
                main.on("animationStarted", (main) => {
                    removeActive()
                    const next = main.animator.targetIdx || 0
                    addActive(main.track.absToRel(next))
                    slider.moveToIdx(Math.min(slider.track.details.maxIdx, next))
                })
            }
        })
    }
}

onMounted(() => {
    if (sliderRef.value && thumbnailRef.value) {
        slider = new KeenSlider(sliderRef.value, {
            loop: true // Add any KeenSlider configuration options here
        })

        thumbnail = new KeenSlider(
            thumbnailRef.value,
            {
                initial: 0,
                slides: {
                    perView: 3,
                    spacing: 20,
                },
                vertical: true,
                breakpoints: {
                    '(max-width: 767px)': {
                        vertical: false,
                    },
                },
            },
            [ThumbnailPlugin(slider)]
        )
    }
})

onBeforeUnmount(() => {
    if (slider) slider.destroy()
    if (thumbnail) thumbnail.destroy()
})

</script>

<template>
    <div class="hpp__productGalleryCarousel w-full">
        <div class="flex flex-wrap gap-0 md:gap-[20px]">
            <div class="carousel__wrapper w-full md:w-[500px] overflow-hidden">
                <!-- Slider Main Container -->
                <div ref="sliderRef" class="keen-slider mb-[20px]">
                    <div v-for="(slide, index) in galleryImages" :key="index" class="keen-slider__slide rounded-[32px]">
                        <NuxtImg format="webp" :src="`${useRuntimeConfig().public.productMediaURL}${slide.image_name}`"
                            :alt="slide.fAltTag" width="800" height="800" loading="lazy" fit="cover"
                            class="w-full h-auto" sizes="sm:430px md:767px lg:550px" />
                    </div>
                </div>
            </div>
            <div class="thumbnail__slider w-full md:w-[165px]">
                <!-- Thumbnail Slider Container -->
                <div ref="thumbnailRef" class="keen-slider thumbnail h-full">
                    <div v-for="(slide, index) in galleryImages" :key="index" class="keen-slider__slide rounded-[16px]">
                        <NuxtImg format="webp" :src="`${useRuntimeConfig().public.productMediaURL}${slide.image_name}`"
                            :alt="slide.fAltTag" width="165" height="165" loading="lazy" fit="cover"
                            class="w-full h-auto" sizes="sm:100px md:150px lg:180px" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.thumbnail .keen-slider__slide {
    cursor: pointer;
}

.thumbnail .keen-slider__slide.active {
    border: 2px dashed black;
}
</style>