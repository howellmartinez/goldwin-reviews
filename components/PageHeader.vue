<template>
    <header class="bg-zinc-950">
        <nav class="flex items-center justify-between p-6 mx-auto max-w-7xl lg:px-8" aria-label="Global">
            <a href="#" class="-m-1.5 p-1.5">
                <span class="sr-only">Your Company</span>
                <img class="w-auto h-32"
                    src="https://static.wixstatic.com/media/ec7bd9_02aaafc74a2649b4ac8d939f3e771958~mv2.jpg/v1/fill/w_272,h_272,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/ec7bd9_02aaafc74a2649b4ac8d939f3e771958~mv2.jpg"
                    alt="" />
            </a>
            <div class="flex lg:hidden">
                <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                    @click="mobileMenuOpen = true">
                    <span class="sr-only">Open main menu</span>
                    <Bars3Icon class="w-6 h-6" aria-hidden="true" />
                </button>
            </div>
            <div class="hidden lg:flex lg:gap-x-12">
                <a v-for="item in navigation" :key="item.name" :href="item.href"
                    class="text-sm font-semibold leading-6 text-gray-100">{{ item.name }}</a>
                <!-- <a href="#" class="text-sm font-semibold leading-6 text-gray-100">Log in <span
                        aria-hidden="true">&rarr;</span></a> -->
            </div>
        </nav>
        <Dialog as="div" class="lg:hidden" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
            <div class="fixed inset-0 z-10" />
            <DialogPanel
                class="fixed inset-y-0 right-0 z-10 w-full px-6 py-6 overflow-y-auto bg-zinc-950 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                <div class="flex items-center justify-between">
                    <a href="#" class="-m-1.5 p-1.5">
                        <span class="sr-only">Your Company</span>
                        <img class="w-auto h-8" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                            alt="" />
                    </a>
                    <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700" @click="mobileMenuOpen = false">
                        <span class="sr-only">Close menu</span>
                        <XMarkIcon class="w-6 h-6" aria-hidden="true" />
                    </button>
                </div>
                <div class="flow-root mt-6">
                    <div class="-my-6 divide-y divide-gray-500/10">
                        <div class="py-6 space-y-2">
                            <a v-for="item in navigation" :key="item.name" :href="item.href"
                                class="block px-3 py-2 -mx-3 text-base font-semibold leading-7 text-gray-100 rounded-lg hover:bg-gray-50">{{
                                    item.name }}</a>
                        </div>
                        <div class="py-6">
                            <a href="#"
                                class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-100 hover:bg-gray-50">Log
                                in</a>
                        </div>
                    </div>
                </div>
            </DialogPanel>
        </Dialog>
    </header>
</template>

<script setup>
import { ref } from 'vue'
import { Dialog, DialogPanel } from '@headlessui/vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'

const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '#' },
    { name: 'More', href: '#' },
]

const mobileMenuOpen = ref(false)
</script>
