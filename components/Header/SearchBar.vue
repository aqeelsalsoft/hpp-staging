<script setup>
import { useRouter } from 'vue-router'
const loading = ref(false)
const selected = ref()
const data = ref([])

const router = useRouter()

async function search(query) {
  let q = query != '' ? query : 'custom boxes';
  loading.value = true
  try {
    data.value = await $fetch(`${useRuntimeConfig().public.apiURL}/search`, { params: { q } })

    loading.value = false
    return data.value
  } catch (error) {
    console.error("Error fetching users:", error)
    loading.value = false
    return []
  }
}

function onItemSelected(item) {
  if (item && item.slug) {
    if (item.item_type === 'category') {
      const path = item.type == "1" ? `/${item.slug}` : `/industry/${item.slug}`;
      router.push(`${path}`);
    } else if (item.item_type === 'product') {
      router.push(`/${item.type}/${item.slug}`)
    }
  }
  setTimeout(() => {
    selected.value = '';
  }, 2000);
}

</script>

<template>
  <div class="hpp__searchBarWrapper px-0 md:px-[15px] mt-5 md:mt-0 w-full md:w-auto">
    <div class="search__innerWrap relative w-full xl:w-[460px]">
      <UInputMenu @change="onItemSelected(selected)" v-model="selected" :search="search" :loading="loading"
        placeholder="Search..." option-attribute="title" trailing by="id" loading-icon="i-heroicons-arrow-path-20-solid" class="w-full"
        inputClass="font-description font-light text-[14px] w-full bg-[#ffffff] rounded-[30px] py-[10px] pr-[55px] pl-[25px] focus:ring-[#bc3042] active:ring-[#bc3042]">
        <!-- trailing-icon="i-heroicons-chevron-up-down-20-solid" class="w-full" -->
        <!-- Custom slot for trailing icon with aria-label -->
        <template #trailing-icon>
          <button aria-label="Expand or collapse options" type="button" tabindex="-1" aria-haspopup="listbox" aria-expanded="false" data-headlessui-state="" class="search__btn absolute inset-y-0 end-0 flex items-center px-2.5">
          <i class="i-heroicons-chevron-up-down-20-solid" />
          </button>
        </template>
      </UInputMenu>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>