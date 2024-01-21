

<template>
  <div>

    <div class="flex flex-col">
      <div class="jb-w--10">
        <LanguageSwitch/>
      </div>
      <Layout>
        <p>{{ $t('hello') }}</p>
      </Layout>
    </div>
  </div>
</template>
<script setup>
import LanguageSwitch from "~/components/Header/LanguageSwitch.vue";

</script>
