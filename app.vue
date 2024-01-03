<script setup>
import LanguageSwitch from "~/components/Header/LanguageSwitch.vue";

</script>

<template>
  <div>

    <form class="flex flex-col">
      <div class="jb-w--10">
      <LanguageSwitch/>
</div>
      <p>{{ $t('hello') }}</p>
    </form>
  </div>
</template>
