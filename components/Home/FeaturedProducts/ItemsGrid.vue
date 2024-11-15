<script setup>
import { computed } from 'vue';

// List of carousel items
const carouselItems = [
  { id: 1, imgPath: "/images/home-featured-products/auto-lock-boxes.jpg", link: "/tuck-boxes/auto-lock-boxes", title: "Auto Lock Boxes", description: "Request a Quote" },
  { id: 2, imgPath: "/images/home-featured-products/magnetic-closure-with-insert.jpg", link: "/rigid-boxes/custom-magnetic-closure-boxes", title: "Magnetic Closure Boxes with inserts", description: "Request a Quote", },
  { id: 3, imgPath: "/images/home-featured-products/custom-boxes-with-inserts.jpg", link: "/cardboard-boxes/custom-boxes-with-inserts", title: "Custom Boxes with Inserts", description: "Request a Quote" },
  { id: 4, imgPath: "/images/home-featured-products/coffee-cups.jpg", link: "/coffee-tea/double-wall-coffee-cups", title: "Double Wall Coffee Cups", description: "Request a Quote", },
  { id: 5, imgPath: "/images/home-featured-products/eco-friendly.jpg", link: "/sustainable-packaging/eco-friendly-boxes", title: "Eco-Friendly Boxes", description: "Request a Quote" },
  { id: 6, imgPath: "/images/home-featured-products/wine-boxes.jpg", link: "/beverage-wine-liquor/wine-boxes", title: "Wine Boxes", description: "Request a Quote" },
  { id: 7, imgPath: "/images/home-featured-products/metalized-printed-boxes.jpg", link: "/metalized-boxes", title: "Metalized Printed Boxes", description: "Request a Quote", },
];

// Function to generate background styles
// const getBackgroundStyle = (imgUrl) =>
//   computed(() => ({
//     backgroundImage: `url('${imgUrl}')`,
//   }));

// Use Nuxt's image provider to generate optimized image URLs
const img = useImage();

// Generate computed background styles for each carousel item
const carouselBackgroundStyles = carouselItems.map((item) =>
  computed(() => {
    const optimizedImage = img(item.imgPath, { format: 'webp' });
    return { backgroundImage: `url('${optimizedImage}')` };
  })
);
</script>

<template>
  <div class="hpp__featuredIndustriesWrapper">
    <div class="hpp__industriesInner">
      <div class="grid grid-cols-2 content-start gap-[20px] px-[20px]">
        <div
          v-for="item in carouselItems"
          :key="item.id"
          class="item__wrap"
        >
          <NuxtLink
            :to="item.link"
            class="relative flex flex-wrap items-center bg-white cursor-pointer font-mori group tracking-mori rounded-[20px] sm:rounded-b-[12px] sm:rounded-t-[36px] sm:hover:shadow-xl sm:border-[2px] sm:border-white sm:hover:border-[#fbfbfb] transition-all duration-300"
          >
            <div
              class="thumb__wrap w-[100%] bg-[#efefef] rounded-[22px] overflow-hidden aspect-square pt-[100%] bg-no-repeat bg-center bg-cover"
              :style="carouselBackgroundStyles[item.id]"
            ></div>
            <div class="desc__wrap py-[10px]">
              <h3
                class="font-headings text-[18px] leading-[20px] text-acai font-bold mb-0.5"
              >
                {{ item.title }}
              </h3>
              <span
                class="font-description text-acai text-[13px] lg:text-[15px]"
              >
                {{ item.description }}
              </span>
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
/* Add any additional styles here */
</style>
