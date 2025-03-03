<script setup lang="ts">
// Core
import { defineAsyncComponent } from "vue";

// Components
const BaseHeader = defineAsyncComponent(() => import("@/components/Base/Header/index.vue"));
</script>

<template>
  <main class="flex flex-col gap-5">
    <BaseHeader />
  </main>
</template>
