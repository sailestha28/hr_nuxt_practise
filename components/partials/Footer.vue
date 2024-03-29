<template>
  <footer class="bg-gray-900" aria-labelledby="footer-heading">
    <h2 id="footer-heading" class="sr-only">Footer</h2>
    <div class="mx-auto max-w-7xl px-6 pb-8 pt-20 sm:pt-24 lg:px-8 lg:pt-32">
      <div class="xl:grid xl:grid-cols-3 xl:gap-8">
        <div class="grid grid-cols-2 gap-8 xl:col-span-2">
          <div class="md:grid md:grid-cols-2 md:gap-8">
            <div>
              <h3 class="text-sm font-semibold leading-6 text-white">
                {{$t("solutions")}}
              </h3>
              <ul role="list" class="mt-6 space-y-4">
                <li v-for="item in navigation.solutions" :key="item.name">
                  <a :href="item.href" class="text-sm leading-6 text-gray-300 hover:text-white">
                    {{ $t(item.name) }}
                  </a>
                </li>
              </ul>
            </div>
            <div class="mt-10 md:mt-0">
              <h3 class="text-sm font-semibold leading-6 text-white">
                {{$t("support")}}
              </h3>
              <ul role="list" class="mt-6 space-y-4">
                <li v-for="item in navigation.support" :key="item.name">
                  <a :href="item.href" class="text-sm leading-6 text-gray-300 hover:text-white">
                     {{ $t(item.name) }}
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="md:grid md:grid-cols-2 md:gap-8">
            <div>
              <h3 class="text-sm font-semibold leading-6 text-white">
                {{$t('company')}}
              </h3>
              <ul role="list" class="mt-6 space-y-4">
                <li v-for="item in navigation.company" :key="item.name">
                  <a :href="item.href" class="text-sm leading-6 text-gray-300 hover:text-white">
                     {{ $t(item.name) }}
                  </a>
                </li>
              </ul>
            </div>
            <div class="mt-10 md:mt-0">
              <h3 class="text-sm font-semibold leading-6 text-white">
                 {{ $t("legal") }}

              </h3>
              <ul role="list" class="mt-6 space-y-4">
                <li v-for="item in navigation.legal" :key="item.name">
                  <a :href="item.href" class="text-sm leading-6 text-gray-300 hover:text-white">
                     {{ $t(item.name) }}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="mt-10 xl:mt-0">
          <h3 class="text-sm font-semibold leading-6 text-white">
         {{$t('subscribe_to_our_newsletter')}}
          </h3>
          <p class="mt-2 text-sm leading-6 text-gray-300">
{{$t('the_latest_news_articles_and_resources')}}
          </p>
          <form class="mt-6 sm:flex sm:max-w-md">
            <label for="email-address" class="sr-only">
              {{$t('email_address')}}
            </label>
            <input type="email" name="email-address"
                   id="email-address" autocomplete="email" required=""
                   class="w-full min-w-0 appearance-none rounded-md border-0 bg-white/5 px-3 py-1.5 text-base text-white shadow-sm ring-1 ring-inset ring-white/10 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:w-64 sm:text-sm sm:leading-6 xl:w-full"
                   :placeholder="$t('enter_your_email')" />
            <div class="mt-4 sm:ml-4 sm:mt-0 sm:flex-shrink-0">
              <button type="submit"
                      class="flex w-full items-center justify-center rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">
                {{ $t("subscribe")}}
              </button>
            </div>
          </form>
        </div>
      </div>
      <div class="mt-16 border-t border-white/10 pt-8 sm:mt-20 md:flex md:items-center md:justify-between lg:mt-24">
        <div class="flex space-x-6 md:order-2">
          <a v-for="item in navigation.social" :key="item.name" :href="item.href" class="text-gray-500 hover:text-gray-400">
            <span class="sr-only">{{ item.name }}</span>
            <component :is="item.icon" class="h-6 w-6" aria-hidden="true" />
          </a>
        </div>
        <p class="mt-8 text-xs leading-5 text-gray-400 md:order-1 md:mt-0">&copy; 2020 Your Company, Inc. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { defineComponent, h } from 'vue';

// Define TypeScript interfaces for navigation items
interface NavigationItem {
  name: string;
  href: string;
}

interface Navigation {
  solutions: NavigationItem[];
  support: NavigationItem[];
  company: NavigationItem[];
  legal: NavigationItem[];
  social: { name: string; href: string; icon: any }[];
}

// Data for the navigation sections
const navigation: Navigation = {
  solutions: [
    { name: 'marketing', href: '#' },
    { name: 'analytics', href: '#' },
    { name: 'commerce', href: '#' },
    { name: 'insights', href: '#' },
  ],
  support: [
    { name: 'pricing', href: '#' },
    { name: 'documentation', href: '#' },
    { name: 'guides', href: '#' },
    { name: 'api_status', href: '#' },
  ],
  company: [
    { name: 'about', href: '#' },
    { name: 'blog', href: '#' },
    { name: 'jobs', href: '#' },
    { name: 'press', href: '#' },
    { name: 'partners', href: '#' },
  ],
  legal: [
    { name: 'claim', href: '#' },
    { name: 'privacy', href: '#' },
    { name: 'terms', href: '#' },
  ],
  social: [
    {
      name: 'facebook',
      href: '#',
      icon: defineComponent({
        render: () =>
          h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
            // ... (Facebook icon paths)
          ]),
      }),
    },
    // ... (Other social media links with icons)
  ],
}
</script>
