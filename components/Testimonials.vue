<template>
  <Container>
      <h3 class="font-bold text-lg sm:text-xl lg:text-3xl text-center mb-10">Testimonials</h3>
    <Swiper
        :modules="[SwiperAutoplay, SwiperEffectCreative]"
        :slides-per-view="1"
        :loop="true"
        :effect="'creative'"
        :autoplay="{
      delay: 3000,
      disableOnInteraction: true,
    }"
        :creative-effect="{
      prev: {
        shadow: false,
        translate: ['-20%', 0, -1],
      },
      next: {
        translate: ['100%', 0, 0],
      },
    }"
    >
      <SwiperSlide v-for="slide in options" :key="slide.id">
        <div class="bg-white px-4 py-5 sm:px-6 space-y-3.5">
          <div class="flex space-x-3">
            <div class="flex-shrink-0">
              <img class="h-10 w-10 rounded-full"
                   :src="slide?.user?.avatar"
                   alt=""/>
            </div>
            <div class="min-w-0 flex-1">
              <p class="text-sm font-semibold text-gray-900">
                <a href="#" class="hover:underline">
                  {{slide?.user?.name}}
                </a>
              </p>
              <p class="text-sm text-gray-500">
                <a href="#" class="hover:underline">
                  {{ slide?.timestamp}}
                </a>
              </p>
            </div>
            <div class="flex flex-shrink-0 self-center">
              <Menu as="div" class="relative inline-block text-left">
                <div>
                  <MenuButton class="-m-2 flex items-center rounded-full p-2 text-gray-400 hover:text-gray-600">
                    <span class="sr-only">Open options</span>
                    <EllipsisVerticalIcon class="h-5 w-5" aria-hidden="true"/>
                  </MenuButton>
                </div>

                <transition enter-active-class="transition ease-out duration-100"
                            enter-from-class="transform opacity-0 scale-95"
                            enter-to-class="transform opacity-100 scale-100"
                            leave-active-class="transition ease-in duration-75"
                            leave-from-class="transform opacity-100 scale-100"
                            leave-to-class="transform opacity-0 scale-95">
                  <MenuItems
                      class="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div class="py-1">
                      <MenuItem v-slot="{ active }">
                        <a href="#"
                           :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'flex px-4 py-2 text-sm']">
                          <StarIcon class="mr-3 h-5 w-5 text-gray-400" aria-hidden="true"/>
                          <span>Add to favorites</span>
                        </a>
                      </MenuItem>
                      <MenuItem v-slot="{ active }">
                        <a href="#"
                           :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'flex px-4 py-2 text-sm']">
                          <CodeBracketIcon class="mr-3 h-5 w-5 text-gray-400" aria-hidden="true"/>
                          <span>Embed</span>
                        </a>
                      </MenuItem>
                      <MenuItem v-slot="{ active }">
                        <a href="#"
                           :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'flex px-4 py-2 text-sm']">
                          <FlagIcon class="mr-3 h-5 w-5 text-gray-400" aria-hidden="true"/>
                          <span>Report content</span>
                        </a>
                      </MenuItem>
                    </div>
                  </MenuItems>
                </transition>
              </Menu>
            </div>
          </div>
          <div class="px-4 pb-5  sm:p-6 sm:pt-0 text-black">
            <p>{{slide?.content}}</p>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>

  </Container>
</template>

<script setup lang="ts">
import {Menu, MenuButton, MenuItem, MenuItems} from '@headlessui/vue'
import {CodeBracketIcon, EllipsisVerticalIcon, FlagIcon, StarIcon} from '@heroicons/vue/20/solid'
import Container from "~/components/partials/Container.vue";
import { defineProps, ref, Ref } from 'vue';

interface User {
  name: string;
  avatar: string;
}

interface Option {
  id: number;
  user: User;
  timestamp: string;
  content: string;
}


const options: Ref<Option[]> = ref(
  Array.from({ length: 10 }, (_, index) => ({
    id: index + 1,
    user: {
      name: 'Chelsea Hagon',
      avatar:
        'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    timestamp: 'December 9 at 11:43 AM',
    content:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo impedit sapiente recusandae iusto officiis dolor? Laborum quibusdam quam, quidem vel assumenda repellat inventore sint nesciunt, ullam asperiores magnam placeat eveniet. Aliquam voluptatibus assumenda distinctio veniam quam tempora modi aperiam nemo voluptate reprehenderit quidem, nisi vero est.',
  }))
);

</script>
