<script setup>
const {availableLocales} = useI18n()

</script>

<template>
  <div>

    <form class="flex flex-col">
      <NuxtLink
        v-for="item in availableLocales"
        :key="item"
        :to="`/`+(item ==='en'?'':item)"
      >
        {{ item }}
      </NuxtLink>

      <p>{{ $t('hello') }}</p>
    </form>
  </div>
</template>
