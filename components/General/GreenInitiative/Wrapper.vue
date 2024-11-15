<script lang="ts" setup></script>

<template>
    <div class="hpp__startJourneyCTAWrapper bg-white">
        <div class="flex flex-wrap md:flex-nowrap">
            <div class="main__gridWrap basis-full md:basis-1/2">
                <ClientOnly>
                    <LazyGeneralGreenInitiativeLargeGrid />
                </ClientOnly>
            </div>
            <div class="flex flex-wrap basis-full md:basis-1/2">
                <ClientOnly>
                    <LazyGeneralGreenInitiativeSmallGridOne />
                    <LazyGeneralGreenInitiativeSmallGridTwo />
                    <LazyGeneralGreenInitiativeSmallGridThree />
                    <LazyGeneralGreenInitiativeSmallGridFour />
                </ClientOnly>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>
