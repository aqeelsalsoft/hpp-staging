<script setup>
import { buildVueDompurifyHTMLDirective } from 'vue-dompurify-html';

const vCleanHtml = buildVueDompurifyHTMLDirective();

defineProps({
    title: {
        type: String,
        default: ""
    },
    content: {
        type: String,
        default: ""
    },
});

</script>

<template>
    <div class="hpp__productmoreInfoContentWrapper pt-[30px] md:pt-[70px] pb-[30px] md:pb-[70px] bg-white">
        <div class="md:container md:mx-auto px-[20px] md:px-[15px]">
            <div class="flex flex-wrap justify-center bg-[#f6f6f6] rounded-[22px] md:rounded-[32px] px-[30px] md:px-[50px] py-[30px] md:py-[50px]">
                <div class="text-center basis-full mb-[30px] md:mb-[50px] md:max-w-2xl">
                    <h2 class="font-headings text-[#212529] text-[30px] leading-[34px] font-bold">Learn More About {{title}}</h2>
                    <!-- <p class="font-description text-[#212529] text-[16px] leading-[24px]">This is a demo description
                        about
                        the learn more section</p> -->
                </div>
                <!-- <div class="flex flex-wrap basis-full -mx-[30px]">
                    <div class="desc__wrapper basis-1/2 px-[30px] mb-[30px]">
                        <h2 class="font-headings text-xl font-bold tracking-tight text-gray-900 sm:text-2xl mb-[20px]">
                            Sophisticatedly Crafted Eco-Friendly Kraft Soap Boxes To Inspire Everyone</h2>
                        <p class="font-description text-[14px] leading-[22px] text-gray-600 mb-[15px]">Our beautifully created kraft soap boxes have the potential to steal everyone's attention with their unique styles and intriguing impressions. We manufacture them in unlimited styles and shapes so that they offer an admirable presentation to your beautiful soaps. You can get them made with our eco-friendly kraft or cardboard as per your choice and have added inserts in them for a better experience.</p>
                        <p class="font-description text-[14px] leading-[22px] text-gray-600 mb-[15px]">Our boxes with sliding trays and sleeves offer a luxurious experience to the customers, while the colorfully printed custom soap sleeves on top of them enhance the aura of the aromatic soaps. To satisfy the demand for transparency by modern-day consumers, you can get custom kraft soap boxes with windows that will showcase the actual product and convince the consumers for instant purchases. Moreover, we offer our expert creative designers free design support to help you enjoy the most exciting visuals, compelling typography, and inviting color schemes on your square soap boxes.</p>
                    </div>
                    <div class="desc__wrapper basis-1/2 px-[30px] mb-[30px]">
                        <h2 class="font-headings text-xl font-bold tracking-tight text-gray-900 sm:text-2xl mb-[20px]">Increase Shelf Impact With Our Captivating Impression And Premium Printing</h2>
                        <p class="font-description text-[14px] leading-[22px] text-gray-600 mb-[15px]">When people wander through the aisles or market shelves, the packaging of products impacts their impulse buying. It has been proved that people make their buying decisions by being drawn toward the packaging. We provide you with special soap boxes packaging that fascinates the viewers by portraying stunning impressions. Besides the CMYK and PMS color schemes, our contemporary printing technology ensures an attractive visual appeal to boost your sales effortlessly. Not just this, our printing inks have no harmful impacts on the environment as they are organic and soy-based.</p>
                        <p class="font-description text-[14px] leading-[22px] text-gray-600 mb-[15px]">Our glistening metal foil stamping also caters to your luxury packaging needs, which effortlessly steals the spotlight. You can also go for our raised ink printing to imprint your brand name and logo with a prominent textured effect on your square soap boxes. Additionally, our extensive finishing options enable you to have your desired surface feel on your soap boxes, such as shiny, matte, glossy, etc.</p>
                    </div>
                    <div class="desc__wrapper basis-1/2 px-[30px] mb-[30px]">
                        <h2 class="font-headings text-xl font-bold tracking-tight text-gray-900 sm:text-2xl mb-[20px]">Half Price Packaging Is Your Best Packaging Partner For All The Right Reasons</h2>
                        <p class="font-description text-[14px] leading-[22px] text-gray-600 mb-[15px]">Our clients are gaining an immense appreciation for our extensive additional favors on our already affordable premium quality sustainable packaging solutions, including kraft soap boxes with window wholesale. One of the perks that excite them the most is our free shipping services across the United States and Canada. However, our shipping charges for the rest of the world are also highly economical. Another great deal is that our minimum order quantity is just 100 surprisingly outstanding units. Additionally, enjoying reduced rates on purchasing kraft soap boxes wholesale from us is no less than a treat for you.</p>
                        <p class="font-description text-[14px] leading-[22px] text-gray-600 mb-[15px]">Now that you have found so many good reasons to shop with us, hurry up to place your order at www.halfpricepackaging.com. However, if you want to have a word with us, feel free to reach us through an email at orders@halfpricepackaging.com, call at 866-225-2112, or our live chat support to get in touch instantly.</p>
                    </div>
                </div> -->
                <div class="flex flex-wrap basis-full -mx-[30px]">
                  <div v-clean-html="content" class="desc__wrapper"></div>
                </div>
            </div>

        </div>
    </div>
</template>

<style lang="scss">
.hpp__productmoreInfoContentWrapper{
    .desc__wrapper{
        h2, h3{
            @apply font-headings text-xl font-bold tracking-tight text-gray-900 sm:text-2xl mb-[15px] mt-[30px];
            
            &:first-child{
                @apply mt-0;
            }
        }
        p{
            @apply font-description text-[14px] leading-[22px] text-gray-600 mb-[15px];
        }
        a{
            @apply text-[#ef4b5f];
        }
    }
}
</style>
