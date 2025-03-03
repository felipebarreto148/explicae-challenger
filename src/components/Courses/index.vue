<script lang="ts" setup>
// Core
import { defineAsyncComponent } from "vue";

// Types
import type { IProps } from "./indx.model";

// Composables
defineProps<IProps>();

// Components
const Courses = defineAsyncComponent(
  () => import("@/components/Courses/index.vue")
);
const UIAccordion = defineAsyncComponent(
  () => import("@/components/UI/Accordion/index.vue")
);
</script>

<template>
  <main class="flex flex-col gap-3">
    <UIAccordion
      v-for="(course, index) in module"
      :key="index"
      :title="course.title"
      :custom-header="customHeader"
    >
      <template #opened>
        <Courses v-if="course?.modules" :module="course.modules" :custom-header="true" />
      </template>
    </UIAccordion>
  </main>
</template>
