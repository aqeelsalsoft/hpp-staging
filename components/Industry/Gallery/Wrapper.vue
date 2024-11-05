<script lang="ts" setup></script>

<template>
    <div class="hpp__catGalleryWrapper pt-[50px] pb-[100px]">
        <div class="container mx-auto px-[15px]">
            <div class="flex flex-wrap justify-center">
                <div class="text-center basis-full mb-[50px] max-w-2xl">
                    <h2 class="font-headings text-[#212529] text-[36px] leading-[40px] font-bold mb-[15px]">Custom Soap Boxes Gallery</h2>
                    <p class="font-description text-[#212529] text-[14px] leading-[22px]">This is a demo description about the gallery section</p>
                </div>
                <div class="w-full max-w-[980px] grid grid-cols-4 gap-[15px]">
                    <div class="grid__column grid grid-cols-1 gap-[15px]">
                        <div class="gallery__item w-[100%] bg-[#efefef] rounded-[16px] overflow-hidden">
                            <NuxtImg format="webp" src="/images/industry/soap/gallery/soap-box-gallery1.jpg"
                                alt="Soap Box Gallery 1 Thumbnail" loading="lazy" fit="cover" class="w-full h-auto" />
                        </div>
                        <div class="gallery__item w-[100%] bg-[#efefef] rounded-[16px] overflow-hidden">
                            <NuxtImg format="webp" src="/images/industry/soap/gallery/soap-box-gallery2.jpg"
                                alt="Soap Box Gallery 2 Thumbnail" loading="lazy" fit="cover" class="w-full h-auto" />
                        </div>
                    </div>
                    <div class="grid__column grid grid-cols-1 gap-[15px]">
                        <div class="gallery__item w-[100%] bg-[#efefef] rounded-[16px] overflow-hidden">
                            <NuxtImg format="webp" src="/images/industry/soap/gallery/soap-box-gallery3.jpg"
                                alt="Soap Box Gallery 3 Thumbnail" loading="lazy" fit="cover" class="w-full h-auto" />
                        </div>
                        <div class="gallery__item w-[100%] bg-[#efefef] rounded-[16px] overflow-hidden">
                            <NuxtImg format="webp" src="/images/industry/soap/gallery/soap-box-gallery4.jpg"
                                alt="Soap Box Gallery 4 Thumbnail" loading="lazy" fit="cover" class="w-full h-auto" />
                        </div>
                    </div>
                    <div class="grid__column grid grid-cols-1 gap-[15px]">
                        <div class="gallery__item w-[100%] bg-[#efefef] rounded-[16px] overflow-hidden">
                            <NuxtImg format="webp" src="/images/industry/soap/gallery/soap-box-gallery4.jpg"
                                alt="Soap Box Gallery 4 Thumbnail" loading="lazy" fit="cover" class="w-full h-auto" />
                        </div>
                        <div class="gallery__item w-[100%] bg-[#efefef] rounded-[16px] overflow-hidden">
                            <NuxtImg format="webp" src="/images/industry/soap/gallery/soap-box-gallery3.jpg"
                                alt="Soap Box Gallery 3 Thumbnail" loading="lazy" fit="cover" class="w-full h-auto" />
                        </div>
                    </div>
                    <div class="grid__column grid grid-cols-1 gap-[15px]">
                        <div class="gallery__item w-[100%] bg-[#efefef] rounded-[16px] overflow-hidden">
                            <NuxtImg format="webp" src="/images/industry/soap/gallery/soap-box-gallery1.jpg"
                                alt="Soap Box Gallery 1 Thumbnail" loading="lazy" fit="cover" class="w-full h-auto" />
                        </div>
                        <div class="gallery__item w-[100%] bg-[#efefef] rounded-[16px] overflow-hidden">
                            <NuxtImg format="webp" src="/images/industry/soap/gallery/soap-box-gallery2.jpg"
                                alt="Soap Box Gallery 2 Thumbnail" loading="lazy" fit="cover" class="w-full h-auto" />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<style lang="scss" scoped></style>
