<template>
  <div class="text-sm font-semibold leading-6 text-gray-900">{{ $t("language") }}:</div>
  <div class="relative border border-neutral-500 px-2 py-1 rounded">
    <select v-model="language"
            class="focus:outline-0  focus:shadow-none text-sm appearance-none font-semibold leading-6 bg-transparent text-gray-900  ">
      <option
          v-for="item in locales"
          :key="typeof item === 'object' ? item.code : item"
          :value="typeof item === 'object' ? item.code : item"
      >
        {{ typeof item === "object" ? item.name : item }}
      </option>
    </select>
     <span aria-hidden="true" class="text-[12px] inline-block rotate-90">&rarr;</span>
  </div>
</template>
<script setup lang="ts">
const {locales, locale, setLocale} = useI18n();

const language = computed({
  get: () => locale.value,
  set: (value) => {
    setLocale(value);
  },
});
</script>
