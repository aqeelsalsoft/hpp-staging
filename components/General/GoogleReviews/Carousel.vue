<script lang="ts" setup>
import { onMounted, onBeforeUnmount, ref, computed, watch } from 'vue';
import { useKeenSlider } from 'keen-slider/vue.es';
import KeenSlider from 'keen-slider';

const slider = ref<HTMLElement | null>(null); // Ref for the slider container
let keenSlider: KeenSlider | null = null; // Declare keenSlider in the outer scope

const current = ref(0);
// const [container] = useKeenSlider({
//     initial: current.value,
//     slideChanged: (s) => {
//         current.value = s.track.details.rel;
//     },
// });

onMounted(() => {
    if (slider.value) {
        keenSlider = new KeenSlider(slider.value, {
            // mode: "free-snap",
            loop: true,
            slides: {
                perView: 2,
                spacing: 20,
            },
            slideChanged: (s) => {
                if (s?.track?.details) {
                    current.value = s?.track?.details?.rel;
                }
            },
        });
    }
});

const isFirstSlide = computed(() => current.value === 0);
const isLastSlide = computed(() =>
    keenSlider ? current.value === keenSlider.track.details.slides.length - 1 : false
);
// Watch the isLastSlide value
watch(isLastSlide, (newVal) => {
    console.log('isLastSlide:', newVal);
});
// Cleanup on component unmount
onBeforeUnmount(() => {
    if (keenSlider) keenSlider.destroy();
});

const reviews = [{
    "author_name": "Sudha Sikha",
    "author_url": "https://www.google.com/maps/contrib/110616067854594571359/reviews",
    "language": "en",
    "original_language": "en",
    "profile_photo_url": "https://lh3.googleusercontent.com/a/ACg8ocKp8uOLVZFFIpanAeCLe0xrOj52ZvfihSRL5278na3799Bv6w=s128-c0x00000000-cc-rp-mo",
    "rating": 5,
    "relative_time_description": "2 months ago",
    "text": "Fantastic product quality and exceptional customer service! We had an outstanding experience with Half Price Packaging. Ross from their sales team was incredibly patient, working closely with us to curate packaging that perfectly aligned with our brand’s needs. The final output exceeded our expectations, and both our customers and our team were thrilled with the results. Thank you, Half Price Packaging!",
    "time": 1724440801,
    "translated": false
},
{
    "author_name": "Lisa Nelson",
    "author_url": "https://www.google.com/maps/contrib/104934767495503306159/reviews",
    "language": "en",
    "original_language": "en",
    "profile_photo_url": "https://lh3.googleusercontent.com/a/ACg8ocIqueAgV6hgcr_7b9t1JKEu43xzoFjpN2O96INf3v8FlYdkHw=s128-c0x00000000-cc-rp-mo",
    "rating": 5,
    "relative_time_description": "5 months ago",
    "text": "We hired Half Price Packaging to create new boxes for some of our products and we couldn't be happier with the outcome. Our products look so professional and Ross was incredibly helpful throughout the process. Highly recommend them for any packaging needs you have. Great people, great company!",
    "time": 1716495915,
    "translated": false
},
{
    "author_name": "Samuel Palmer",
    "author_url": "https://www.google.com/maps/contrib/100920878920865547942/reviews",
    "language": "en",
    "original_language": "en",
    "profile_photo_url": "https://lh3.googleusercontent.com/a/ACg8ocJn_-d0-hRL675N1rMsh_Tg43zK4xZXIEjDX3vezVuss28-Qg=s128-c0x00000000-cc-rp-mo",
    "rating": 5,
    "relative_time_description": "a month ago",
    "text": "I am extremely pleased with my order from Half Price Packaging. Aaron, my sales rep, was responsive and helpful throughout the process. And the design team was able to fix an issue I've had ordering from other, automated packaging services.\n\nI will be giving them a try again the next time I need packaging or labels\n\nSam\nembodyharmonics.com",
    "time": 1726514642,
    "translated": false
},
{
    "author_name": "Tod Barnett (Haute Toddy)",
    "author_url": "https://www.google.com/maps/contrib/113716000008616965381/reviews",
    "language": "en",
    "original_language": "en",
    "profile_photo_url": "https://lh3.googleusercontent.com/a-/ALV-UjVnPcRuZacaMhOrskLjjdPWb5VaLrdg8yM_EWXk2qD3hDczMS4X=s128-c0x00000000-cc-rp-mo-ba2",
    "rating": 5,
    "relative_time_description": "2 months ago",
    "text": "The communication was probably my favorite part of the process. The entire team was included on most communications, so all questions could be answered quickly, clearly and professionally, without overly communicating or badgering. The product quality team caught an issue and corrected it before I received the product, so once I got my boxes they were all perfect.\n\nThe price was right, the turnaround was good, and the customer service was strong. I’ll be returning to this company in the future for my next projects.",
    "time": 1724878588,
    "translated": false
},
{
    "author_name": "Lindsey Stone",
    "author_url": "https://www.google.com/maps/contrib/116001581740685113649/reviews",
    "language": "en",
    "original_language": "en",
    "profile_photo_url": "https://lh3.googleusercontent.com/a/ACg8ocJpjZp_YwYpW43bGF3WL72OUfVJ8xRBCGZnyzsDvXeHZwdy6A=s128-c0x00000000-cc-rp-mo-ba2",
    "rating": 5,
    "relative_time_description": "a week ago",
    "text": "I own a small business, and I struggled for weeks trying to find a company to purchase my custom boxes from. Thankfully I found Half Priced Packaging, and the boxes are BEAUTIFUL! The price is unbeatable, I will definitely be a repeat customer :)",
    "time": 1729533234,
    "translated": false
}]
</script>

<template>
    <!-- Google Reviews Component -->
    <div class="review__textWrapper mt-6 relative overflow-hidden pb-[70px]">
        <div ref="slider" class="keen-slider !hidden sm:!flex !overflow-visible overflow-y-hidden grow-0">
            <div class="keen-slider__slide !overflow-visible" v-for="item in reviews">
                <!-- User Review -->
                <div class="bg-[#f6f6f6] p-[20px] rounded-[16px] mb-4 h-full">
                    <div class="flex">
                        <!-- User Avatar -->
                        <div class="thumb__wrapper w-[50px]">
                            <NuxtImg loading="lazy" format="webp" :src=item.profile_photo_url :alt=item.author_name
                                class="w-[50px] h-[50px] rounded-full" width="50" height="50" />
                        </div>
                        <!-- User Info -->
                        <div class="author__contentWrap w-[calc(100%_-_50px)] pl-[20px]">
                            <div class="font-medium flex items-center">
                                <span class="font-headings text-[18px] leading-[24px] font-bold mr-[8px]">{{
                                    item.author_name
                                }}</span>
                                <span class="icon">
                                    <svg class="w-[14px] h-[14px]" viewBox="0 0 512 512">
                                        <g fill="none" fill-rule="evenodd">
                                            <path
                                                d="M256 472.153L176.892 512l-41.725-81.129-86.275-16.654 11.596-91.422L0 256l60.488-66.795-11.596-91.422 86.275-16.654L176.892 0 256 39.847 335.108 0l41.725 81.129 86.275 16.654-11.596 91.422L512 256l-60.488 66.795 11.596 91.422-86.275 16.654L335.108 512z"
                                                fill="#4285f4" />
                                            <path
                                                d="M211.824 284.5L171 243.678l-36 36 40.824 40.824-.063.062 36 36 .063-.062.062.062 36-36-.062-.062L376.324 192l-36-36z"
                                                fill="#fff" />
                                        </g>
                                    </svg>
                                </span>
                            </div>
                            <div class="font-description text-[13px] text-gray-400">{{
                                item.relative_time_description }}
                            </div>
                            <!-- Review Text -->
                            <div class="mt-3">
                                <div class="text-yellow-500 flex items-center mb-4">
                                    <ul class="flex gap-[3px]">
                                        <li>
                                            <svg class="w-[15px] h-[15px]" fill="none" viewBox="0 0 47.94 47.94">
                                                <path fill="#FDCC0D"
                                                    d="M26.285,2.486l5.407,10.956c0.376,0.762,1.103,1.29,1.944,1.412l12.091,1.757
	c2.118,0.308,2.963,2.91,1.431,4.403l-8.749,8.528c-0.608,0.593-0.886,1.448-0.742,2.285l2.065,12.042
	c0.362,2.109-1.852,3.717-3.746,2.722l-10.814-5.685c-0.752-0.395-1.651-0.395-2.403,0l-10.814,5.685
	c-1.894,0.996-4.108-0.613-3.746-2.722l2.065-12.042c0.144-0.837-0.134-1.692-0.742-2.285l-8.749-8.528
	c-1.532-1.494-0.687-4.096,1.431-4.403l12.091-1.757c0.841-0.122,1.568-0.65,1.944-1.412l5.407-10.956 C22.602,0.567,25.338,0.567,26.285,2.486z" />
                                            </svg>
                                        </li>
                                        <li>
                                            <svg class="w-[15px] h-[15px]" fill="none" viewBox="0 0 47.94 47.94">
                                                <path fill="#FDCC0D"
                                                    d="M26.285,2.486l5.407,10.956c0.376,0.762,1.103,1.29,1.944,1.412l12.091,1.757
	c2.118,0.308,2.963,2.91,1.431,4.403l-8.749,8.528c-0.608,0.593-0.886,1.448-0.742,2.285l2.065,12.042
	c0.362,2.109-1.852,3.717-3.746,2.722l-10.814-5.685c-0.752-0.395-1.651-0.395-2.403,0l-10.814,5.685
	c-1.894,0.996-4.108-0.613-3.746-2.722l2.065-12.042c0.144-0.837-0.134-1.692-0.742-2.285l-8.749-8.528
	c-1.532-1.494-0.687-4.096,1.431-4.403l12.091-1.757c0.841-0.122,1.568-0.65,1.944-1.412l5.407-10.956 C22.602,0.567,25.338,0.567,26.285,2.486z" />
                                            </svg>
                                        </li>
                                        <li>
                                            <svg class="w-[15px] h-[15px]" fill="none" viewBox="0 0 47.94 47.94">
                                                <path fill="#FDCC0D"
                                                    d="M26.285,2.486l5.407,10.956c0.376,0.762,1.103,1.29,1.944,1.412l12.091,1.757
	c2.118,0.308,2.963,2.91,1.431,4.403l-8.749,8.528c-0.608,0.593-0.886,1.448-0.742,2.285l2.065,12.042
	c0.362,2.109-1.852,3.717-3.746,2.722l-10.814-5.685c-0.752-0.395-1.651-0.395-2.403,0l-10.814,5.685
	c-1.894,0.996-4.108-0.613-3.746-2.722l2.065-12.042c0.144-0.837-0.134-1.692-0.742-2.285l-8.749-8.528
	c-1.532-1.494-0.687-4.096,1.431-4.403l12.091-1.757c0.841-0.122,1.568-0.65,1.944-1.412l5.407-10.956 C22.602,0.567,25.338,0.567,26.285,2.486z" />
                                            </svg>
                                        </li>
                                        <li>
                                            <svg class="w-[15px] h-[15px]" fill="none" viewBox="0 0 47.94 47.94">
                                                <path fill="#FDCC0D"
                                                    d="M26.285,2.486l5.407,10.956c0.376,0.762,1.103,1.29,1.944,1.412l12.091,1.757
	c2.118,0.308,2.963,2.91,1.431,4.403l-8.749,8.528c-0.608,0.593-0.886,1.448-0.742,2.285l2.065,12.042
	c0.362,2.109-1.852,3.717-3.746,2.722l-10.814-5.685c-0.752-0.395-1.651-0.395-2.403,0l-10.814,5.685
	c-1.894,0.996-4.108-0.613-3.746-2.722l2.065-12.042c0.144-0.837-0.134-1.692-0.742-2.285l-8.749-8.528
	c-1.532-1.494-0.687-4.096,1.431-4.403l12.091-1.757c0.841-0.122,1.568-0.65,1.944-1.412l5.407-10.956 C22.602,0.567,25.338,0.567,26.285,2.486z" />
                                            </svg>
                                        </li>
                                        <li>
                                            <svg class="w-[15px] h-[15px]" fill="none" viewBox="0 0 47.94 47.94">
                                                <path fill="#FDCC0D"
                                                    d="M26.285,2.486l5.407,10.956c0.376,0.762,1.103,1.29,1.944,1.412l12.091,1.757
	c2.118,0.308,2.963,2.91,1.431,4.403l-8.749,8.528c-0.608,0.593-0.886,1.448-0.742,2.285l2.065,12.042
	c0.362,2.109-1.852,3.717-3.746,2.722l-10.814-5.685c-0.752-0.395-1.651-0.395-2.403,0l-10.814,5.685
	c-1.894,0.996-4.108-0.613-3.746-2.722l2.065-12.042c0.144-0.837-0.134-1.692-0.742-2.285l-8.749-8.528
	c-1.532-1.494-0.687-4.096,1.431-4.403l12.091-1.757c0.841-0.122,1.568-0.65,1.944-1.412l5.407-10.956 C22.602,0.567,25.338,0.567,26.285,2.486z" />
                                            </svg>
                                        </li>
                                    </ul>
                                </div>
                                <p class="font-description text-[14px] leading-[22px]">{{ item.text }}</p>
                            </div>
                        </div>
                    </div>
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
