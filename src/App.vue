<script setup lang="ts">
// Core
import { defineAsyncComponent } from "vue";

// Components
const BaseHeader = defineAsyncComponent(
  () => import("@/components/Base/Header/index.vue")
);
const Courses = defineAsyncComponent(
  () => import("@/components/Courses/index.vue")
);
</script>

<template>
  <main class="flex flex-col gap-5 px-5 pb-5 size-full overflow-auto">
    <BaseHeader />
    <Courses />
  </main>
</template>
