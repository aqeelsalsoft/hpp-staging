<script setup>
import { ref, reactive, watch } from 'vue'

import { useRouter, useRoute } from 'vue-router'
const { FirstPageUrl, IsModalShow, IsModalImage } = storeToRefs(useGlobalStore());
const { setIsModalShow, setIsModalImage } = useGlobalStore();

const closeModal = () => {
  setIsModalImage(null);
  setIsModalShow(false);
}

const route = useRoute()
const router = useRouter()

const form = reactive({
    full_name: '',
    email: '',
    phone: '',
    extra_field:null,
    box_type: '',
    quantity: '',
    file: null,
    description: '',
})

const phoneError = ref('');
const emailError = ref('');
const quantityError = ref('');
const isProcessing = ref(false);


const onSubmit = async () => {

  if (form.extra_field) {
    console.log("Bot detected: honeypot field is filled.");
    return false;
  }
    if (!phoneError.value && !emailError.value && !quantityError.value) {
        try {
            isProcessing.value = true
            const formData = new FormData()
            formData.append('full_name', form.full_name)
            formData.append('email', form.email)
            formData.append('phone', form.phone)
            formData.append('box_type', form.box_type)
            formData.append('quantity', form.quantity)
            formData.append('lead_source', 'Direct')
            formData.append('medium', 'Custom Quote Form')
            formData.append('file', '')
            formData.append('description', form.description)
            formData.append('first_page_url', window.location.origin + FirstPageUrl.value)
            formData.append('full_page_url', window.location.origin + route.fullPath)

            const response = await $fetch(`${useRuntimeConfig().public.apiURL}/submit-data`, {
                method: 'POST',
                body: formData
            })

            isProcessing.value = false;
            resetForm();
            closeModal();
            router.push('/thank-you-popup-form');
        } catch (error) {
            console.error(error)
            isProcessing.value = false
        }
    }
}


const resetForm = () => {
    form.full_name = ''
    form.email = ''
    form.phone = ''
    form.box_type = ''
    form.quantity = ''
    form.file = null
    form.description = ''
}

const rules = {
    required: (value) => !!value || 'This field is required',
    isNumeric: (value) => /^[+\d\s()-]+$/.test(value) || 'Phone number is not valid',
    minLength: (value, length = 6) => value.length >= length || `Phone number must be at least ${length} digits long`,
    isEmail: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) || 'Email must be valid',
    isQuantity: (value) => {
      if (!/^\d+$/.test(value)) {
        return 'Please enter a valid number';
      }
      return value >= 200 || 'Min 200 | Great Savings on Larger QTY';
    }
};


// Function to validate
const validatePhone = () => {
    const phone = form.phone
    const numericError = rules.isNumeric(phone)
    const minLengthError = rules.minLength(phone, 6)

    if (numericError !== true) {
        phoneError.value = numericError
        return false
    } else if (minLengthError !== true) {
        phoneError.value = minLengthError
        return false
    } else {
        phoneError.value = ''
        return true
    }
}

const validateEmail = () => {
    const email = form.email
    const emailFormatError = rules.isEmail(email)

    if (emailFormatError !== true) {
        emailError.value = emailFormatError
        return false
    } else {
        emailError.value = ''
        return true
    }
}

const validateQuantity = () => {
    const quantity = form.quantity
    const quantityFormatError = rules.isQuantity(quantity)

    if (quantityFormatError !== true) {
        quantityError.value = quantityFormatError
        return false
    } else {
        quantityError.value = ''
        return true
    }
}

const handleFileChange = (event) => {
    const file = event.target.files[0]
    form.file = file
}

// Validate all fields
const validate = () => {
    const isPhoneValid = validatePhone()
    const isEmailValid = validateEmail()
    const isQuantityValid = validateQuantity()

    return isPhoneValid && isEmailValid && isQuantityValid
}

watch(() => IsModalShow.value, (newValue) => {
  if (newValue) {
    console.log("ismodal::", newValue);
    
  }
});
</script>

<template>
    <div>  
        <UModal v-model="IsModalShow" :ui="{
            wrapper: 'modal__wrapper',
            inner: 'modal__inner',
            container: 'modal__container ',
            base: 'modal__base sm:w-[1000px] md:max-w-[1000px]',
            rounded: 'rounded-[16px]'

        }">
            <div class="p-[10px] relative">
                <UButton color="gray" variant="ghost" icon="i-heroicons-x-mark-20-solid" class="absolute -top-[10px] -right-[10px] w-[30px] h-[30px] rounded-full bg-[#d4486f] text-white" @click="closeModal()" />
                <div class="flex flex-wrap bg-[#f6f6f6] overflow-hidden rounded-[16px]">
                    <div class="thumb__wrapper w-full h-full md:w-[400px]">
                      <NuxtImg v-if="IsModalImage" format="webp"
                          :src="`https://www.halfpricepackaging.com/${IsModalImage}`"
                          width="400" height="450"
                            alt="Popup Form Thumbnail" loading="lazy" fit="cover" class="w-full h-full object-cover" />
                        <NuxtImg v-else format="webp" src="/images/popup-img.png" width="400" height="450"
                            alt="Popup Form Thumbnail" loading="lazy" fit="cover" class="w-full h-full object-cover" />
                    </div>
                    <div class="form__wrapper w-full md:w-[calc(100%_-_400px)] px-[30px] py-[30px]">
                        <div class="md:text-center mb-[20px]">
                            <h3 class="font-headings text-[#212529] text-[24px] leading-[30px] font-bold mb-[5px]">
                                Price Match Guarantee</h3>
                            <p class="font-description text-[#212529] text-[12px] leading-[20px]">Fill out the form to
                                get in touch with our
                                dedicated packaging consultant</p>
                        </div>
                        <div class="">
                            <form id="hpp__instantPricesPopupForm" @submit.prevent="onSubmit" class="mb-0">
                              <input
                                  type="text"
                                  name="extra_field"
                                  v-model="form.extra_field"
                                  class="hidden"
                                  autocomplete="off"
                                />
                                <div class="flex flex-wrap ml-[-5px] mr-[-5px]">
                                    <div class="relative w-[50%] px-[5px] mb-[10px]">
                                        <label for="ipf-full-name" class="sr-only">Full Name</label>
                                        <input type="text" required v-model="form.full_name" placeholder="Full Name*"
                                            id="ipf-full-name"
                                            class="font-description hover:cursor-pointer focus:cursor-auto rounded-0 border-0 border-b border-[#CCCCCC] w-full text-xs font-light transition-all resize-none outline-none pt-0 pb-[10px] bg-transparent" />
                                    </div>
                                    <div class="relative w-[50%] px-[5px] mb-[10px]">
                                        <label for="ipf-email" class="sr-only">Email</label>
                                        <input v-model="form.email" type="email" required placeholder="Email*"
                                            id="ipf-email"
                                            class="font-description hover:cursor-pointer focus:cursor-auto rounded-0 border-0 border-b border-[#CCCCCC] w-full text-xs font-light transition-all resize-none outline-none pt-0 pb-[10px] bg-transparent" />
                                        <span v-if="emailError" class="text-red-500 text-xs mt-1">{{ emailError
                                            }}</span>
                                    </div>
                                    <div class="relative w-[50%] px-[5px] mb-[10px]">
                                        <label for="ipf-phone" class="sr-only">Phone</label>
                                        <input type="text" @input="validatePhone()" required v-model="form.phone"
                                            placeholder="Phone*" id="ipf-phone"
                                            class="font-description hover:cursor-pointer focus:cursor-auto rounded-0 border-0 border-b border-[#CCCCCC] w-full text-xs font-light transition-all resize-none outline-none pt-0 pb-[10px] bg-transparent" />
                                        <span v-if="phoneError" class="text-red-500 text-xs mt-1">{{ phoneError
                                            }}</span>
                                    </div>
                                    <div class="relative w-[50%] md:w-[50%] px-[5px] mb-[10px]">
                                        <label for="ipf-quantity" class="sr-only">Quantity</label>
                                        <input type="text" v-model="form.quantity" @input="validateQuantity()" required
                                            placeholder="Quantity (min: 200)*" id="ipf-quantity"
                                            class="font-description hover:cursor-pointer focus:cursor-auto rounded-0 border-0 border-b border-[#CCCCCC] w-full text-xs font-light transition-all resize-none outline-none pt-0 pb-[10px] bg-transparent" />
                                        <span v-if="quantityError" class="text-red-500 text-xs mt-1">{{ quantityError
                                            }}</span>
                                    </div>
                                    <div class="relative w-[50%] px-[5px] mb-[10px]">
                                        <label for="ipf-box-type" class="sr-only">Box Type</label>
                                        <select v-model="form.box_type" name="box-type" id="ipf-box-type"
                                        class="font-description hover:cursor-pointer focus:cursor-auto rounded-0 border-0 border-b border-[#CCCCCC] w-full text-xs font-light transition-all resize-none outline-none pt-0 pb-[10px] bg-transparent">
                                            <option value="" disabled>Select Box Type</option>
                                            <option value="Straight Tuck Boxes">Straight Tuck Boxes</option>
                                            <option value="Reverse Tuck Boxes">Reverse Tuck Boxes</option>
                                            <option value="Lock Bottom Boxes">Lock Bottom Boxes</option>
                                            <option value="Holster Boxes">Holster Boxes</option>
                                            <option value="Tuck Top Boxes">Tuck Top Boxes</option>
                                            <option value="Sleeve Boxes">Sleeve Boxes</option>
                                            <option value="Two-Piece Boxes">Two-Piece Boxes</option>
                                            <option value="Folding Cartons">Folding Cartons</option>
                                            <option value="Rigid Boxes">Rigid Boxes</option>
                                            <option value="Seal End Box">Seal End Box</option>
                                            <option value="Beer Tray with lid">Beer Tray with lid</option>
                                            <option value="Book Style Boxes">Book Style Boxes</option>
                                            <option value="Dispenser Boxes">Dispenser Boxes</option>
                                            <option value="Cigar Box">Cigar Box</option>
                                            <option value="Flip Top Box">Flip Top Box</option>
                                            <option value="Tray with Sleeve">Tray with Sleeve</option>
                                            <option value="One Piece Boxes">One Piece Boxes</option>
                                            <option value="Suitcase Boxes">Suitcase Boxes</option>
                                            <option value="Auto-lock Bottom Boxes">Auto-lock Bottom Boxes</option>
                                            <option value="Display Boxes">Display Boxes</option>
                                            <option value="5-panel Hanger Boxes">5-panel Hanger Boxes</option>
                                            <option value="Crash Bottom Boxes">Crash Bottom Boxes</option>
                                            <option value="One-piece Tuck Top Boxes">One-piece Tuck Top Boxes</option>
                                            <option value="Boxes with Custom Cutouts">Boxes with Custom Cutouts</option>
                                            <option value="Boxes with Thumb Tabs">Boxes with Thumb Tabs</option>
                                            <option value="Bubble Mailers">Bubble Mailers</option>
                                            <option value="Roll end tuck top corrugated">Roll end tuck top corrugated
                                            </option>
                                            <option value="Hang Tab Boxes">Hang Tab Boxes</option>
                                            <option value="Pillow Boxes">Pillow Boxes</option>
                                            <option value="Snap Lock Bottom Boxes">Snap Lock Bottom Boxes</option>
                                            <option value="Paper Bags">Paper Bags</option>
                                            <option value="Mylar Bags">Mylar Bags</option>
                                            <option value="Die Cut Mylar Bags">Die Cut Mylar Bags</option>
                                            <option value="Mylar Pouches">Mylar Pouches</option>
                                            <option value="Mylar ziplock bags">Mylar ziplock bags</option>
                                            <option value="Heat seal mylar bags">Heat seal mylar bags</option>
                                            <option value="Custom zipper pouches">Custom zipper pouches</option>
                                            <option value="Circle mylar bags">Circle mylar bags</option>
                                            <option value="Sealed mylar bags">Sealed mylar bags</option>
                                            <option value="Cigaratte boxes">Cigaratte boxes</option>
                                            <option value="Chilled resistance boxes">Chilled resistance boxes</option>
                                            <option value="Clear Lid Display boxes">Clear Lid Display boxes</option>
                                            <option value="Takeout boxes">Takeout boxes</option>
                                            <option value="Gable boxes">Gable boxes</option>
                                            <option value="Handle boxes">Handle boxes</option>
                                            <option value="Tuck top mailer boxes">Tuck top mailer boxes</option>
                                            <option value="Double wall tuck top">Double wall tuck top</option>
                                            <option value="Hexagon boxes">Hexagon boxes</option>
                                            <option value="Popup Display Boxes">Popup Display Boxes</option>
                                            <option value="Pyramid Boxes">Pyramid Boxes</option>
                                            <option value="Window Display Boxes">Window Display Boxes</option>
                                            <option value="Telescope Boxes">Telescope Boxes</option>
                                            <option value="Cube Boxes">Cube Boxes</option>
                                            <option value="Round Top Boxes">Round Top Boxes</option>
                                            <option value="Roll End Tuck Top Boxes">Roll End Tuck Top Boxes</option>
                                            <option value="Roll End Lid Boxes">Roll End Lid Boxes</option>
                                        </select>
                                    </div>

                                    <div class="relative w-[50%] md:w-[50%] px-[5px] mb-[10px]">
                                        <label for="ipf-printing-sides" class="sr-only">Company Name</label>
                                        <input type="text" v-model="form.company"
                                            placeholder="Company Name" id="ipf-company-name"
                                            class="font-description hover:cursor-pointer focus:cursor-auto rounded-0 border-0 border-b border-[#CCCCCC] w-full text-xs font-light transition-all resize-none outline-none pt-0 pb-[10px] bg-transparent" />
                                     
                                    </div>

                                    <div class="relative w-full md:w-full px-[5px] mb-[10px]">
                                        <textarea v-model="form.description"
                                        class="font-description hover:cursor-pointer focus:cursor-auto rounded-0 border-0 border-b border-[#CCCCCC] w-full text-xs font-light transition-all resize-none outline-none pt-0 pb-[10px] bg-transparent"
                                            placeholder="Provide detailed packaging specifications including dimensions, materials, weight restrictions, and design references and we'll get back to you with an instant quote."
                                            name="message" id="" rows="3"></textarea>
                                    </div>
                                    <div
                                        class="relative w-[100%] md:w-[100%] upload-container flex items-center justify-between w-full self-center px-[10px] mb-[20px]">
                                        <div class="drop-area w-fit rounded-md transition-all text-center">
                                            <label for="file-input"
                                                class="text-gray-800/50 text-xs border border-transparent select-none transition-all rounded-md no-underline w-fit cursor-pointer p-0 flex items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="#ffffff"
                                                    viewBox="0 0 24 24" stroke-width="1.5" stroke="#7157f8"
                                                    class="size-8">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                        class="fill-transparent"
                                                        d="M12 16.5V9.75m0 0 3 3m-3-3-3 3M6.75 19.5a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z" />
                                                </svg>
                                                <span
                                                    class="font-description block px-[10px] text-[13px] text-gray-800/50 font-medium text-left">Upload
                                                    your Artwork or Reference images</span>
                                            </label>
                                            <input name="file" @change="handleFileChange" type="file" id="file-input"
                                                accept="image/*" class="hidden" />
                                            <small
                                                class="font-description block text-[11px] text-gray-500/50 font-medium text-left">File(s)
                                                size limit is 20MB.</small>
                                            <!-- Image upload input -->
                                            <div class="preview-container rounded-lg items-center gap-2"
                                                v-if="form.file">
                                                <div class="preview-image w-16 h-16 bg-cover bg-center rounded-md">
                                                </div>
                                                <div>
                                                    <div class="flex items-baseline flex-col mb-2">
                                                        <p class="_description text-black/50 text-xs">File name: {{
                                                            form.file.name }}</p>
                                                        <span
                                                            class="file-name text-left text-sm truncate lg:max-w-[402px] max-w-[220px]"></span>
                                                    </div>
                                                    <p @click="form.file = null"
                                                        class="close-button text-[11px] w-fit cursor-pointer transition-all rounded-md px-3 py-0.5 border border-black/10 text-xs hover:border-gray-300">
                                                        Remove
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="flex items-end justify-center basis-full px-[10px]">
                                        <button :disabled="isProcessing"
                                            class="font-description text-[#ffffff] text-[13px] font-medium border border-[#ef4b5f] bg-[#ef4b5f] select-none transition-all py-[8px] px-[25px] rounded-[6px] no-underline select-none font-normal w-[180px]"
                                            type="submit">{{ isProcessing ? 'Loading...' : 'Order Now' }}</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </UModal>
    </div>
</template>

<style lang="scss" scoped></style>
