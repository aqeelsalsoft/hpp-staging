<script lang="ts" setup></script>

<template>
    <div class="hpp__instantPricesWrapper pt-[20px] pb-[40px] bg-[#f5f6fa]">
        <div class="container mx-auto px-[15px]">
            <div class="hpp__instantFormWrapper">
                <div class="flex flex-wrap items-center justify-center">
                    <div class="text-center basis-full mb-[30px]">
                        <h3 class="font-headings text-[#212529] text-[36px] leading-[40px] font-bold mb-[5px] mb-3">Get
                            The Most Accurate Quotation</h3>
                        <p class="font-description text-[#212529] text-[16px] leading-[24px]">Fill out the form to get
                            in touch with our
                            dedicated packaging consultant</p>
                    </div>
                    <div class="p-[25px] w-full bg-white rounded-[32px]">
                        <form id="hpp__instantPricesForm" class="mb-0">
                            <div class="flex flex-wrap ml-[-5px] mr-[-5px]">
                                <div class="relative basis-[25%] px-[5px] mb-[10px]">
                                    <label for="ipf-full-name" class="sr-only">Full Name</label>
                                    <input type="text" placeholder="Full Name" id="ipf-full-name"
                                        class="font-description hover:cursor-pointer focus:cursor-auto rounded-lg w-full text-xs font-light transition-all resize-none outline-none border border-gray-200 hover:border-gray-300 py-[10px] px-[17px]" />
                                </div>
                                <div class="relative basis-[25%] px-[5px] mb-[10px]">
                                    <label for="ipf-phone" class="sr-only">Phone</label>
                                    <input type="text" placeholder="Phone" id="ipf-phone"
                                        class="font-description hover:cursor-pointer focus:cursor-auto rounded-lg w-full text-xs font-light transition-all resize-none outline-none border border-gray-200 hover:border-gray-300 py-[10px] px-[17px]" />
                                </div>
                                <div class="relative basis-[25%] px-[5px] mb-[10px]">
                                    <label for="ipf-email" class="sr-only">Email</label>
                                    <input type="email" placeholder="Email" id="ipf-email"
                                        class="font-description hover:cursor-pointer focus:cursor-auto rounded-lg w-full text-xs font-light transition-all resize-none outline-none border border-gray-200 hover:border-gray-300 py-[10px] px-[17px]" />
                                </div>
                                <div class="relative basis-[25%] px-[5px] mb-[10px]">
                                    <label for="ipf-box-type" class="sr-only">Box Type</label>
                                    <select name="box-type" id="ipf-box-type"
                                        class="font-description hover:cursor-pointer focus:cursor-auto rounded-lg w-full text-xs font-light transition-all resize-none outline-none border border-gray-200 hover:border-gray-300 py-[10px] px-[17px]">
                                        <option value="">Select Box Type</option>
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
                                <div class="relative basis-[20%] px-[5px] mb-[10px]">
                                    <label for="ipf-material" class="sr-only">Materials</label>
                                    <select name="material" id="ipf-material"
                                        class="font-description hover:cursor-pointer focus:cursor-auto rounded-lg w-full text-xs font-light transition-all resize-none outline-none border border-gray-200 hover:border-gray-300 py-[10px] px-[17px]">
                                        <option value="">Select Material</option>
                                        <option value="Corrugated Stock">Corrugated Stock</option>
                                        <option value="Foil Metallic Cardstock">Foil Metallic Cardstock</option>
                                        <option value="Kraft-ecofriendly Brown Cardstock">Kraft-ecofriendly Brown
                                            Cardstock
                                        </option>
                                        <option value="Rigid Press Board Card">Rigid Press Board Card</option>
                                        <option value="Textured Neenah Cardstock">Textured Neenah Cardstock</option>
                                        <option value="Colored Stock">Colored Stock</option>
                                        <option value="Standard White Cardstock">Standard White Cardstock</option>
                                        <option value="Holographic Stock">Holographic Stock</option>
                                    </select>
                                </div>
                                <div class="relative basis-[20%] px-[5px] mb-[10px]">
                                    <label for="ipf-length" class="sr-only">Length</label>
                                    <input type="text" placeholder="Length" id="ipf-length"
                                        class="font-description hover:cursor-pointer focus:cursor-auto rounded-lg w-full text-xs font-light transition-all resize-none outline-none border border-gray-200 hover:border-gray-300 py-[10px] px-[17px]" />
                                </div>
                                <div class="relative basis-[20%] px-[5px] mb-[10px]">
                                    <label for="ipf-width" class="sr-only">Width</label>
                                    <input type="text" placeholder="Width" id="ipf-width"
                                        class="font-description hover:cursor-pointer focus:cursor-auto rounded-lg w-full text-xs font-light transition-all resize-none outline-none border border-gray-200 hover:border-gray-300 py-[10px] px-[17px]" />
                                </div>
                                <div class="relative basis-[20%] px-[5px] mb-[10px]">
                                    <label for="ipf-height" class="sr-only">Height</label>
                                    <input type="text" placeholder="Height" id="ipf-height"
                                        class="font-description hover:cursor-pointer focus:cursor-auto rounded-lg w-full text-xs font-light transition-all resize-none outline-none border border-gray-200 hover:border-gray-300 py-[10px] px-[17px]" />
                                </div>
                                <div class="relative basis-[20%] px-[5px] mb-[10px]">
                                    <label for="ipf-dimension-unit" class="sr-only">Dimension Unit</label>
                                    <select name="dimension-unit" id="ipf-dimension-unit"
                                        class="font-description hover:cursor-pointer focus:cursor-auto rounded-lg w-full text-xs font-light transition-all resize-none outline-none border border-gray-200 hover:border-gray-300 py-[10px] px-[17px]">
                                        <option value="">Select Dimension Unit</option>
                                        <option value="Inch">Inch</option>
                                        <option value="CM">CM</option>
                                        <option value="MM">MM</option>
                                        <option value="Unit Printing">Unit Printing</option>
                                    </select>
                                </div>
                                <div class="relative basis-[20%] px-[5px] mb-[10px]">
                                    <label for="ipf-quantity" class="sr-only">Quantity</label>
                                    <input type="text" placeholder="Quantity (min: 200)" id="ipf-quantity"
                                        class="font-description hover:cursor-pointer focus:cursor-auto rounded-lg w-full text-xs font-light transition-all resize-none outline-none border border-gray-200 hover:border-gray-300 py-[10px] px-[17px]" />
                                </div>
                                <div class="relative basis-[20%] px-[5px] mb-[10px]">
                                    <label for="ipf-printing-sides" class="sr-only">Printing Sides</label>
                                    <select name="dimension-unit" id="ipf-printing-sides"
                                        class="font-description hover:cursor-pointer focus:cursor-auto rounded-lg w-full text-xs font-light transition-all resize-none outline-none border border-gray-200 hover:border-gray-300 py-[10px] px-[17px]">
                                        <option value="">Select Printing Sides</option>
                                        <option value="Outside Only">Outside Only</option>
                                        <option value="Inside Only">Inside Only</option>
                                        <option value="Both Side">Both Side</option>
                                    </select>
                                </div>
                                <div class="relative basis-[20%] px-[5px] mb-[10px]">
                                    <label for="ipf-card-thickness" class="sr-only">Card Thickness</label>
                                    <select name="card-thickness" id="ipf-card-thickness"
                                        class="font-description hover:cursor-pointer focus:cursor-auto rounded-lg w-full text-xs font-light transition-all resize-none outline-none border border-gray-200 hover:border-gray-300 py-[10px] px-[17px]">
                                        <option value="">Select Card Thickness</option>
                                        <option value="11 pt 230 GSM">11 pt 230 GSM</option>
                                        <option value="12 pt 250 GSM">12 pt 250 GSM</option>
                                        <option value="13 pt 270 GSM">13 pt 270 GSM</option>
                                        <option value="14 pt 300 GSM">14 pt 300 GSM</option>
                                        <option value="18 pt 350 GSM">18 pt 350 GSM</option>
                                        <option value="24 pt 460 GSM">24 pt 460 GSM</option>
                                        <option value="800 GSM">800 GSM</option>
                                        <option value="1000 GSM">1000 GSM</option>
                                        <option value="1200 GSM">1200 GSM</option>
                                        <option value="1400 GSM">1400 GSM</option>
                                        <option value="1600 GSM">1600 GSM</option>
                                        <option value="E-flute">E-flute</option>
                                        <option value="B-flute">B-flute</option>
                                        <!-- <option value="B-flute">B-flute</option> -->
                                    </select>
                                </div>
                                <div class="relative basis-[20%] px-[5px] mb-[10px]">
                                    <label for="ipf-coating-lamination" class="sr-only">Coating Lamination</label>
                                    <select name="coating-lamination" id="ipf-coating-lamination"
                                        class="font-description hover:cursor-pointer focus:cursor-auto rounded-lg w-full text-xs font-light transition-all resize-none outline-none border border-gray-200 hover:border-gray-300 py-[10px] px-[17px]">
                                        <option value="">Select Coating Lamination</option>
                                        <option value="Glossy lamination">Glossy lamination</option>
                                        <option value="Matte lamination">Matte lamination</option>
                                        <option value="Soft touch Silk lamination">Soft touch Silk lamination</option>
                                        <option value="Aqueous coating">Aqueous coating</option>
                                        <option value="Crystal UV Liquid UV">Crystal UV Liquid UV</option>
                                    </select>
                                </div>
                                <div class="relative basis-[20%] px-[5px] mb-[10px]">
                                    <label for="ipf-extra-finishing" class="sr-only">Extra Finishing</label>
                                    <select name="extra-finishing" id="ipf-extra-finishing"
                                        class="font-description hover:cursor-pointer focus:cursor-auto rounded-lg w-full text-xs font-light transition-all resize-none outline-none border border-gray-200 hover:border-gray-300 py-[10px] px-[17px]">
                                        <option value="">Select Extra Finishing</option>
                                        <option value="Debossing">Debossing</option>
                                        <option value="Embossing">Embossing</option>
                                        <option value="Foiling">Foiling</option>
                                        <option value="Spot UV Spot gloss">Spot UV Spot gloss</option>
                                        <option value="Raised Spot UV">Raised Spot UV</option>
                                        <option value="Holographic Foiling">Holographic Foiling</option>
                                        <option value="PVC Window">PVC Window</option>
                                    </select>
                                </div>
                                <div class="relative basis-[60%] px-[5px] mb-[20px]">
                                    <textarea
                                        class="font-description hover:cursor-pointer focus:cursor-auto rounded-lg w-full text-xs font-light transition-all resize-none outline-none border border-gray-200 hover:border-gray-300 py-[10px] px-[17px]"
                                        placeholder="Your message" name="message" id="" cols="30" rows="5"></textarea>
                                </div>
                                <div
                                    class="relative basis-[40%] upload-container flex items-center justify-between w-full self-center px-[10px] mb-[20px]">
                                    <div class="drop-area w-fit rounded-md transition-all text-center">
                                        <label for="file-input"
                                            class="bg-white/80 text-gray-800/50 text-xs border border-transparent select-none transition-all rounded-md no-underline w-fit cursor-pointer p-0 flex items-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="#ffffff" viewBox="0 0 24 24"
                                                stroke-width="1.5" stroke="#7157f8" class="size-12">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                    class="fill-transparent"
                                                    d="M12 16.5V9.75m0 0 3 3m-3-3-3 3M6.75 19.5a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z" />
                                            </svg>
                                            <span
                                                class="font-description block px-[10px] text-[14px] text-gray-800/50 font-medium text-left">Upload
                                                your Artwork or Reference images</span>
                                        </label>
                                        <input name="file" type="file" id="file-input" accept="image/*"
                                            class="hidden" />
                                        <small
                                            class="font-description block px-[10px] text-[11px] text-gray-500/50 font-medium text-left">File(s)
                                            size limit is 20MB.</small>
                                        <!-- Image upload input -->
                                        <div class="preview-container hidden rounded-lg items-center gap-2">
                                            <div class="preview-image w-16 h-16 bg-cover bg-center rounded-md"></div>
                                            <div>
                                                <div class="flex items-baseline flex-col mb-2">
                                                    <p class="_description text-black/50 text-xs">File name:</p>
                                                    <span
                                                        class="file-name text-left text-sm truncate lg:max-w-[402px] max-w-[220px]"></span>
                                                </div>
                                                <p
                                                    class="close-button text-[11px] w-fit cursor-pointer transition-all rounded-md px-3 py-0.5 border border-black/10 text-xs hover:border-gray-300">
                                                    Remove
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="flex items-end justify-center basis-full px-[10px]">
                                    <button
                                        class="font-description text-[#ffffff] text-[14px] font-medium border border-[#ef4b5f] bg-[#ef4b5f] select-none transition-all py-[8px] px-[25px] rounded-[6px] no-underline select-none font-normal w-[200px]"
                                        type="submit">Order Now</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>
