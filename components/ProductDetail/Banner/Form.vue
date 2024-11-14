<script setup>
import { ref, reactive, watch } from 'vue'

import { useRouter, useRoute } from 'vue-router'
const { FirstPageUrl } = storeToRefs(useGlobalStore());

const props = defineProps({
    products: {
        type: Array,
        default: null
    },
    title: {
        type: String,
        default: ''
    },
})

const route = useRoute()
const router = useRouter()

const form = reactive({
    full_name: '',
    email: '',
    phone: '',
    box_type: '',
    quantity: '',
    file: null,
    extra_field: null,
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
            formData.append('medium', 'Instant Quote')
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
            router.push('/thank-you-instant-quote-form');
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
</script>

<template>
    <div class="product__form">
        <form id="hpp__getQuoteForm" class="mb-0" @submit.prevent="onSubmit">
          <input
            type="text"
            name="extra_field"
            v-model="form.extra_field"
            class="hidden"
            autocomplete="off"
          />
            <div class="flex flex-wrap ml-[-5px] mr-[-5px]">
                <div class="relative w-[50%] md:w-[50%] px-[5px] mb-[10px]">
                    <label for="ipf-full-name" class="sr-only">Full Name</label>
                    <input type="text" required v-model="form.full_name" placeholder="Full Name*" id="ipf-full-name"
                    class="font-description hover:cursor-pointer focus:cursor-auto rounded-lg w-full text-xs font-light transition-all resize-none outline-none border border-gray-200 hover:border-gray-300 py-[10px] px-[17px]" />

                </div>
                <div class="relative w-[50%] md:w-[50%] px-[5px] mb-[10px]">
                    <label for="ipf-email" class="sr-only">Email</label>
                    <input type="email" required v-model="form.email" placeholder="Email*" id="ipf-email"
                    class="font-description hover:cursor-pointer focus:cursor-auto rounded-lg w-full text-xs font-light transition-all resize-none outline-none border border-gray-200 hover:border-gray-300 py-[10px] px-[17px]" />
                    <span v-if="emailError" class="text-red-500 text-xs mt-1">{{ emailError}}</span>
                </div>
                <div class="relative w-[50%] md:w-[50%] px-[5px] mb-[10px]">
                    <label for="ipf-phone" class="sr-only">Phone</label>
                    <input type="text" required @input="validatePhone()" v-model="form.phone" placeholder="Phone*" id="ipf-phone"
                    class="font-description hover:cursor-pointer focus:cursor-auto rounded-lg w-full text-xs font-light transition-all resize-none outline-none border border-gray-200 hover:border-gray-300 py-[10px] px-[17px]" />
                    <span v-if="phoneError" class="text-red-500 text-xs mt-1">{{ phoneError}}</span>
                </div>
                <div class="relative w-[50%] md:w-[50%] px-[5px] mb-[10px]">
                    <label for="ipf-quantity" class="sr-only">Quantity rtry</label>
                    <input type="text" required @input="validateQuantity()" v-model="form.quantity" placeholder="Quantity (min: 200)*" id="ipf-quantity"
                        class="font-description hover:cursor-pointer focus:cursor-auto rounded-lg w-full text-xs font-light transition-all resize-none outline-none border border-gray-200 hover:border-gray-300 py-[10px] px-[17px]" />
                        <span v-if="quantityError" class="text-red-500 text-xs mt-1">{{ quantityError}}</span>
                </div>
                <div class="relative w-[100%] md:w-[100%] px-[5px] mb-[10px]">
                    <label for="ipf-box-type" class="sr-only">Box Type</label>
                    <select v-if="!props.products" v-model="form.box_type" name="box-type" id="ipf-box-type"
                        class="font-description hover:cursor-pointer focus:cursor-auto rounded-lg w-full text-xs font-light transition-all resize-none outline-none border border-gray-200 hover:border-gray-300 py-[10px] px-[17px]">
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
                        <option value="Roll end tuck top corrugated">Roll end tuck top corrugated</option>
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
                    <select v-else v-model="form.box_type" name="box-type" id="ipf-box-type"
                        class="font-description hover:cursor-pointer focus:cursor-auto rounded-lg w-full text-xs font-light transition-all resize-none outline-none border border-gray-200 hover:border-gray-300 py-[10px] px-[17px]">
                        <option value="" disabled>{{props.title}}</option>
                        <option :value="item.name" v-for="(item, index) in props.products" :key="index">{{item.name}}</option>
                    </select>
                </div>
                <div class="relative w-[100%] md:w-[100%] px-[5px] mb-[20px]">
                    <textarea
                        v-model="form.description"
                        class="font-description hover:cursor-pointer focus:cursor-auto rounded-lg w-full text-xs font-light transition-all resize-none outline-none border border-gray-200 hover:border-gray-300 py-[10px] px-[17px]"
                        placeholder="Provide detailed packaging specifications including dimensions, materials, weight restrictions, and design references and we'll get back to you with an instant quote."
                        name="message" id="" cols="30" rows="5"></textarea>
                </div>
                
                <div class="flex items-end w-full px-[10px]">
                    <button
                        class="font-description text-[#ffffff] text-[14px] font-medium border border-[#ef4b5f] bg-[#ef4b5f] select-none transition-all py-[8px] px-[25px] rounded-[6px] no-underline select-none font-normal w-[200px]"
                        type="submit">{{ isProcessing ? 'Loading...' : 'Get a Quote' }}</button>
                </div>
            </div>
        </form>
    </div>
</template>

<style lang="scss" scoped></style>
