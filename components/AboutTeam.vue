<template>
   <div class="mx-auto mt-32 max-w-7xl px-6 sm:mt-48 lg:px-8">
        <div class="mx-auto max-w-2xl lg:mx-0">
          <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          {{$t('our_team')}}
          </h2>
          <p class="mt-6 text-lg leading-8 text-gray-600">
            {{$t('our_team_description')}}
          </p>
        </div>
        <ul role="list"
            class="mx-auto mt-20 grid max-w-2xl grid-cols-2 gap-x-8 gap-y-16 text-center sm:grid-cols-3 md:grid-cols-4 lg:mx-0 lg:max-w-none lg:grid-cols-5 xl:grid-cols-6">
          <li v-for="person in team" :key="person.name">
            <img class="mx-auto h-24 w-24 rounded-full" :src="person.imageUrl" alt=""/>
            <h3 class="mt-6 text-base font-semibold leading-7 tracking-tight text-gray-900">{{ person.name }}</h3>
            <p class="text-sm leading-6 text-gray-600">{{ person.role }}</p>
          </li>
        </ul>
      </div>
</template>
<script setup lang="ts">

interface team {
  name: string;
  role: string;
  imageUrl: string;
}

const team:team[] = [
  {
    name: 'Michael Foster',
    role: 'Co-Founder / CTO',
    imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
  },  {
    name: 'Michael Foster',
    role: 'Co-Founder / CTO',
    imageUrl:
        'https://images.unsplash.com/photo-1485217988980-11786ced9454?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80',
  },
]
</script>
