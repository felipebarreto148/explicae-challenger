<script setup lang="ts">
// Core
import { defineAsyncComponent } from "vue";

// Variables
import { courses } from "@/database/db.json";

// Components
const BaseHeader = defineAsyncComponent(
  () => import("@/components/Base/Header/index.vue")
);
const Courses = defineAsyncComponent(
  () => import("@/components/Courses/index.vue")
);
</script>

<template>
  <main class="flex flex-col gap-5 px-5">
    <BaseHeader />
    <Courses :module="courses" />
  </main>
</template>
