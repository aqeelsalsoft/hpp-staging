<script setup>
import { computed } from 'vue';

// Define the carousel items with URLs and metadata
const carouselItems = [
  { id: 1, imgPath: '/images/home-featured-industries/mailer-box.jpg', title: 'Mailer Box', link: '/mailer-boxes', description: "Request a Quote" },
  { id: 2, imgPath: '/images/home-featured-industries/tuck-box.jpg', title: 'Tuck Boxes', link: '/tuck-boxes', description: "Request a Quote" },
  { id: 3, imgPath: '/images/home-featured-industries/mylar-bag.jpg', title: 'Mylar Bags and Pouches', link: '/mylar-bags', description: "Request a Quote" },
  { id: 4, imgPath: '/images/home-featured-industries/rigid-boxes.jpg', title: 'Rigid Boxes', link: '/rigid-boxes', description: "Request a Quote" },
  { id: 5, imgPath: '/images/home-featured-industries/labels-and-stickers.jpg', title: 'Labels & Stickers', link: '/labels-stickers', description: "Request a Quote" },
  { id: 6, imgPath: '/images/home-featured-industries/custom-product-dispenser-box.jpg', title: 'Dispenser Boxes', link: '/retail/custom-dispenser-boxes', description: "Request a Quote" },
  { id: 7, imgPath: '/images/home-featured-industries/cigarette-boxes.jpg', title: 'Cigarette Boxes', link: '/industry/vape-e-cigarette', description: "Request a Quote" },
];

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
        <!-- Dynamically render items -->
        <div
          v-for="(item, index) in carouselItems"
          :key="item.id"
          class="item__wrap"
        >
          <NuxtLink
            :to="item.link"
            class="relative flex flex-wrap items-center bg-white cursor-pointer font-mori group tracking-mori rounded-[20px] sm:rounded-b-[12px] sm:rounded-t-[36px] sm:hover:shadow-xl sm:border-[2px] sm:border-white sm:hover:border-[#fbfbfb] transition-all duration-300"
          >
            <!-- Background image -->
            <div
              class="thumb__wrap w-[100%] bg-[#efefef] rounded-[22px] overflow-hidden aspect-square pt-[100%] bg-no-repeat bg-center bg-cover"
              :style="carouselBackgroundStyles.value[index]"
            ></div>

            <!-- Title and description -->
            <div class="desc__wrap py-[10px]">
              <h3 class="font-headings text-[18px] leading-[20px] text-acai font-bold mb-0.5">
                {{ item.title }}
              </h3>
              <span class="font-description text-acai text-[13px] lg:text-[15px]">{{ item.description }}</span>
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
/* Add your styles here */
.thumb__wrap {
  background-size: cover;
  background-position: center;
}
</style>
