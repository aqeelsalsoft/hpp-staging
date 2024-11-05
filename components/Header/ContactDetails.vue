<script setup>
import { ref } from 'vue'
const { setIsModalShow } = useGlobalStore();

const openModal = () => {
  setIsModalShow(true);
}
</script>

<template>
    <div class="hpp__contactNumberWrap pl-[15px] ml-auto">
        <div class="flex items-center">
            <div class="pr-[20px] text-center">
                <span class="font-headings font-medium block text-[#232323] text-[16px] leading-[20px]">Speak with a
                    Packaging Expert</span>
                <NuxtLink to="tel:+18662252112"
                    class="font-description text-[17px] leading-[27px] font-semibold text-[#bc3042]">(866) 225-2112
                </NuxtLink>
            </div>
            <div class="flex bg-[#999999] h-[20px] w-[1px]"></div>
            <div class="pl-[20px]">
              <!-- <button type="button" @click="openModal()" class="font-description block ease-in-out duration-[0.3s] text-[#ffffff] text-[14px] bg-[#bc3042] rounded-[50px] py-[8px] px-[30px] border border-[#d4486f] border-solid hover:bg-[#ef4b5f] hover:border-[#ef4b5f]">Request A Quote</button> -->
              <button type="button" @click="openModal()" class="font-description block ease-in-out duration-[0.3s] text-[#ffffff] text-[14px] bg-[#bc3042] rounded-[6px] py-[8px] px-[30px] border border-[#d4486f] border-solid hover:bg-[#ef4b5f] hover:border-[#ef4b5f]">Request A Quote</button>
            </div>
        </div>

    </div>
</template>

<style lang="scss" scoped></style>
