<script lang="ts" setup>
const { $device } = useNuxtApp();
</script>

<template>
    <div class="google__reviewsWrapper py-[30px] md:py-[70px] bg-white">
        <div class="md:container md:mx-auto px-[20px] md:px-[15px]">
            <div
                class="reviews__header flex flex-wrap md:flex-nowrap items-center bg-[#f6f6f6] rounded-[16px] p-[20px] mb-[30px] md:mb-0">
                <div class="reviews__logoWrap block w-full md:w-[50%] mb-[20px] md:mb-0">
                    <!-- Google Reviews Header -->
                    <div class="google__reviewHeaderWrapper w-full md:w-[50%] text-center md:text-left">
                        <NuxtLink
                            to="https://www.google.com/search?q=half+price+packaging&sxsrf=ALiCzsagnxfrnR5uzV0qnBby6qK5JPHlfA%3A1667214393089&source=hp&ei=OaxfY9e8A6aJlwTW4oD4Dg&iflsig=AJiK0e8AAAAAY1-6STHTn6Ls6EZe00ThMT0OmDApSXrJ&ved=0ahUKEwiXvabNqYr7AhWmxIUKHVYxAO8Q4dUDCAg&uact=5&oq=half+price+packaging&gs_lcp=Cgdnd3Mtd2l6EAMyCgguEMcBEK8BECcyBQgAEIAEMgUIABCABDIGCAAQFhAeMgYIABAWEB4yBggAEBYQHjIFCAAQhgMyBQgAEIYDMgUIABCGAzIFCAAQhgM6BwgjEOoCECc6BAgjECc6CgguEMcBENEDEEM6BAgAEEM6BwguENQCEEM6CAgAELEDEIMBOggIABCABBCxAzoHCAAQyQMQQzoECC4QQzoHCAAQsQMQQzoKCAAQsQMQgwEQQzoKCC4QsQMQgwEQQzoICC4QgAQQsQM6CggAEIAEEIcCEBQ6BQguEIAEOgcIABCABBAKOgsILhCABBDHARCvAToICAAQgAQQyQM6CQgAEBYQHhDJAzoICAAQFhAeEApQAFjaFGDlFWgBcAB4A4ABmAWIAbgwkgEKMi0xMy41LjAuMpgBAKABAbABCg&sclient=gws-wiz"
                            class="inline-flex items-center">
                            <div class="w-[100px] mr-[10px]">
                                <svg class="w-full" viewBox="0 0 272 92">
                                    <path
                                        d="M115.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18C71.25 34.32 81.24 25 93.5 25s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44S80.99 39.2 80.99 47.18c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z"
                                        fill="#EA4335" />
                                    <path
                                        d="M163.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18c0-12.85 9.99-22.18 22.25-22.18s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44s-12.51 5.46-12.51 13.44c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z"
                                        fill="#FBBC05" />
                                    <path
                                        d="M209.75 26.34v39.82c0 16.38-9.66 23.07-21.08 23.07-10.75 0-17.22-7.19-19.66-13.07l8.48-3.53c1.51 3.61 5.21 7.87 11.17 7.87 7.31 0 11.84-4.51 11.84-13v-3.19h-.34c-2.18 2.69-6.38 5.04-11.68 5.04-11.09 0-21.25-9.66-21.25-22.09 0-12.52 10.16-22.26 21.25-22.26 5.29 0 9.49 2.35 11.68 4.96h.34v-3.61h9.25zm-8.56 20.92c0-7.81-5.21-13.52-11.84-13.52-6.72 0-12.35 5.71-12.35 13.52 0 7.73 5.63 13.36 12.35 13.36 6.63 0 11.84-5.63 11.84-13.36z"
                                        fill="#4285F4" />
                                    <path d="M225 3v65h-9.5V3h9.5z" fill="#34A853" />
                                    <path
                                        d="M262.02 54.48l7.56 5.04c-2.44 3.61-8.32 9.83-18.48 9.83-12.6 0-22.01-9.74-22.01-22.18 0-13.19 9.49-22.18 20.92-22.18 11.51 0 17.14 9.16 18.98 14.11l1.01 2.52-29.65 12.28c2.27 4.45 5.8 6.72 10.75 6.72 4.96 0 8.4-2.44 10.92-6.14zm-23.27-7.98l19.82-8.23c-1.09-2.77-4.37-4.7-8.23-4.7-4.95 0-11.84 4.37-11.59 12.93z"
                                        fill="#EA4335" />
                                    <path
                                        d="M35.29 41.41V32H67c.31 1.64.47 3.58.47 5.68 0 7.06-1.93 15.79-8.15 22.01-6.05 6.3-13.78 9.66-24.02 9.66C16.32 69.35.36 53.89.36 34.91.36 15.93 16.32.47 35.3.47c10.5 0 17.98 4.12 23.6 9.49l-6.64 6.64c-4.03-3.78-9.49-6.72-16.97-6.72-13.86 0-24.7 11.17-24.7 25.03 0 13.86 10.84 25.03 24.7 25.03 8.99 0 14.11-3.61 17.39-6.89 2.66-2.66 4.41-6.46 5.1-11.65l-22.49.01z"
                                        fill="#4285F4" />
                                </svg>
                            </div>
                            <div class="font-headings text-[#404040] text-[14px] leading-[18px] font-bold">Reviews</div>
                        </NuxtLink>
                    </div>

                    <!-- Reviews Count -->
                    <div class="flex items-center justify-center md:justify-start gap-[10px] w-full md:w-[50%]">
                        <div class="rating">
                            <span
                                class="font-description text-[#404040] text-[14px] leading-[24px] font-bold">4.9</span>
                        </div>
                        <div class="stars__wrap">
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
                                        <defs>
                                            <linearGradient id="starGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                                <stop offset="70%" style="stop-color:#FDCC0D;stop-opacity:1" />
                                                <stop offset="70%" style="stop-color:#CCCCCC;stop-opacity:1" />
                                            </linearGradient>
                                        </defs>
                                        <path style="fill:url(#starGradient);" d="M26.285,2.486l5.407,10.956c0.376,0.762,1.103,1.29,1.944,1.412l12.091,1.757
    c2.118,0.308,2.963,2.91,1.431,4.403l-8.749,8.528c-0.608,0.593-0.886,1.448-0.742,2.285l2.065,12.042
    c0.362,2.109-1.852,3.717-3.746,2.722l-10.814-5.685c-0.752-0.395-1.651-0.395-2.403,0l-10.814,5.685
    c-1.894,0.996-4.108-0.613-3.746-2.722l2.065-12.042c0.144-0.837-0.134-1.692-0.742-2.285l-8.749-8.528
    c-1.532-1.494-0.687-4.096,1.431-4.403l12.091-1.757c0.841-0.122,1.568-0.65,1.944-1.412l5.407-10.956
    C22.602,0.567,25.338,0.567,26.285,2.486z" />
                                    </svg>
                                </li>
                            </ul>
                        </div>
                        <div class="review__count font-description text-[#70757a] text-[12px] leading-[24px]">142
                            reviews</div>
                    </div>
                </div>

                <!-- Review Button -->
                <div class="text-center md:text-right w-full md:w-[50%]">
                    <a href="https://www.google.com/search?q=half+price+packaging&sxsrf=ALiCzsagnxfrnR5uzV0qnBby6qK5JPHlfA%3A1667214393089&source=hp&ei=OaxfY9e8A6aJlwTW4oD4Dg&iflsig=AJiK0e8AAAAAY1-6STHTn6Ls6EZe00ThMT0OmDApSXrJ&ved=0ahUKEwiXvabNqYr7AhWmxIUKHVYxAO8Q4dUDCAg&uact=5&oq=half+price+packaging&gs_lcp=Cgdnd3Mtd2l6EAMyCgguEMcBEK8BECcyBQgAEIAEMgUIABCABDIGCAAQFhAeMgYIABAWEB4yBggAEBYQHjIFCAAQhgMyBQgAEIYDMgUIABCGAzIFCAAQhgM6BwgjEOoCECc6BAgjECc6CgguEMcBENEDEEM6BAgAEEM6BwguENQCEEM6CAgAELEDEIMBOggIABCABBCxAzoHCAAQyQMQQzoECC4QQzoHCAAQsQMQQzoKCAAQsQMQgwEQQzoKCC4QsQMQgwEQQzoICC4QgAQQsQM6CggAEIAEEIcCEBQ6BQguEIAEOgcIABCABBAKOgsILhCABBDHARCvAToICAAQgAQQyQM6CQgAEBYQHhDJAzoICAAQFhAeEApQAFjaFGDlFWgBcAB4A4ABmAWIAbgwkgEKMi0xMy41LjAuMpgBAKABAbABCg&sclient=gws-wiz"
                        target="_blank" rel="nofollow"
                        class="inline-block text-[12px] bg-blue-600 text-white px-6 py-2 rounded-[6px]">Review
                        us on Google</a>
                </div>
            </div>

            <!-- Google Reviews Component -->
            <ClientOnly>
                <GeneralGoogleReviewsCarousel v-if="$device.isDesktop"/>
                <GeneralGoogleReviewsItems v-else />
            </ClientOnly>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>
