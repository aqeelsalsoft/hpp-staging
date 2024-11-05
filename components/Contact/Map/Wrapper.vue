<script lang="ts" setup>

</script>

<template>
    <div class="map__wrapper py-[30px] md:py-[50px]">
        <div class="md:container md:mx-auto px-[20px] md:px-[15px]">
            <div class="flex">
                <div class="inner__wrap w-[50%] relative pt-[50%] md:pt-[30%] overflow-hidden rounded-[16px] md:rounded-[32px]">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d202556.1281278396!2d-121.959666!3d37.509345!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb8a3daeecb59%3A0xfd731139494a3ea5!2sFremont%2C%20CA%2094538!5e0!3m2!1sen!2sus!4v1728955612122!5m2!1sen!2sus"
                        style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
                        class="absolute top-0 left-0 right-0 bottom-0 w-full h-full"></iframe>
                </div>
                <div class="w-[50%]">
                    <ContactFormWrapper />
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>
