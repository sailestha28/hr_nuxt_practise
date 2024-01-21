<template>
  <div class="flex">
    <Container>
      <div class="flex items-center justify-between">
        <nav class="flex gap-3">
          <header class="absolute inset-x-0 top-0 z-50">
            <nav class="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
              <div class="flex lg:flex-1">
                <a href="#" class="-m-1.5 p-1.5">
                  <span class="sr-only">Your Company</span>
                  <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                       alt=""/>
                </a>
              </div>
              <div class="flex lg:hidden">
                <button type="button"
                        class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                        @click="mobileMenuOpen = true">
                  <span class="sr-only">Open main menu</span>
                  <Bars3Icon class="h-6 w-6" aria-hidden="true"/>
                </button>
              </div>
              <div class="hidden lg:flex lg:gap-x-12">
                <NuxtLink
                    v-for="item in navigation"
                    :key="item.name"
                    class="text-sm font-semibold leading-6 text-gray-900" :to="localPath(item.href)">
                  {{
                    $t(item.name)                  }}
                </NuxtLink>
              </div>
              <div class="hidden lg:flex lg:flex-1 lg:justify-end gap-1">

                <div class="flex gap-2 items-center">
                  <LangSwitcher/>
                </div>
              </div>
            </nav>
            <Dialog as="div" class="lg:hidden" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
              <div class="fixed inset-0 z-50"/>
              <DialogPanel
                  class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                <div class="flex items-center justify-between">
                  <a href="#" class="-m-1.5 p-1.5">
                    <span class="sr-only">Your Company</span>
                    <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                         alt=""/>
                  </a>
                  <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700" @click="mobileMenuOpen = false">
                    <span class="sr-only">Close menu</span>
                    <XMarkIcon class="h-6 w-6" aria-hidden="true"/>
                  </button>
                </div>
                <div class="mt-6 flow-root">
                  <div class="-my-6 divide-y divide-gray-500/10">
                    <div class="space-y-2 py-6">
                      <NuxtLink
                          v-for="item in navigation"
                          :key="item.name"
                          class="text-sm font-semibold leading-6 text-gray-900" :to="localPath(item.href)">{{
                          $t(item.name)
                        }}
                      </NuxtLink>
                    </div>
                  </div>
                </div>
              </DialogPanel>
            </Dialog>
          </header>

        </nav>

      </div>
    </Container>
  </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'
import Container from "~/components/partials/Container.vue";
import {Dialog, DialogPanel} from '@headlessui/vue'
import {Bars3Icon, XMarkIcon} from '@heroicons/vue/24/outline'

const localPath = useLocalePath();


const navigation = [
  {name: 'home', href: '/'},
  {name: 'about', href: '/about'},
]

const mobileMenuOpen = ref(false)
</script>
