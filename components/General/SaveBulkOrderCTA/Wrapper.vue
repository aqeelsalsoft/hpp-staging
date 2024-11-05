<script setup>
const { setIsModalShow } = useGlobalStore();

const openModal = () => {
  setIsModalShow(true);
}
</script>

<template>
    <div class="hpp__startJourneyCTAWrapper">
        <div class="relative overflow-hidden bg-gray-900">
            <div class="md:container md:mx-auto px-[20px] md:px-[15px]">
                <div
                    class="relative isolate lg:flex lg:justify-center lg:gap-x-20 items-center py-[30px] md:py-0">
                    <svg viewBox="0 0 1024 1024"
                        class="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
                        aria-hidden="true">
                        <circle cx="512" cy="512" r="512" fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
                            fill-opacity="0.7" />
                        <defs>
                            <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                                <stop stop-color="#7775D6" />
                                <stop offset="1" stop-color="#E935C1" />
                            </radialGradient>
                        </defs>
                    </svg>
                    <div class="mx-auto md:w-[calc(100%_-_200px)] text-left lg:mx-0 lg:flex-auto lg:py-[30px] mb-[30px] md:mb-0">
                        <div class="flex flex-wrap md:flex-nowrap items-center">
                            <span
                                class="font-description inline-block text-white text-[18px] font-semibold leading-[18px] px-0 rounded-[6px] mb-[10px] md:mb-0 md:mr-[20px] w-full md:w-auto text-center md:text-left">Need more this year?</span>
                            <h2 class="font-headings text-[30px] md:text-[25px] leading-[34px] md:leading-[28px] font-bold tracking-tight text-white w-full md:w-auto text-center md:text-left"><span
                                    class="text-[#ef4b5f]">Save 30%</span> on Bulk Orders
                            </h2>
                        </div>
                    </div>
                    <div class="flex items-center w-full md:w-[200px] justify-center gap-x-6">
                        <button @click="openModal()"
                            class="font-description flex items-center rounded-[6px] bg-[#ef4b5f] px-[30px] md:px-[20px] py-[10px] md:py-[8px] font-normal text-white shadow-sm hover:bg-[#bc3042]">
                            <span class="mr-3 text-[20px] leading-[20px] md:text-[14px] md:leading-[14px]">Order Now</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="size-7 md:size-5">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>
