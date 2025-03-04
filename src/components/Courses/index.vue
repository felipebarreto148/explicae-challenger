<script lang="ts" setup>
// Core
import { defineAsyncComponent, ref, type Ref } from "vue";

// Types
import type { IModule, IProps } from "./indx.model";

// Stores
import { useCoursesStore } from "@/stores/courses";
const useCourses = useCoursesStore();

// Composables
const props = defineProps<IProps>();

// Components
const Courses = defineAsyncComponent(
  () => import("@/components/Courses/index.vue")
);
const Subtitle = defineAsyncComponent(
  () => import("@/components/Base/Subtitle/index.vue")
);
const UIAccordion = defineAsyncComponent(
  () => import("@/components/UI/Accordion/index.vue")
);

// Variables
const data: Ref<IModule[]> = ref([]);

// Functions
async function onCreated() {
  data.value = useCourses.getCourses(props.parent_id);
}

// Lifecycle hooks
onCreated();
</script>

<template>
  <main class="flex flex-col gap-3">
    <UIAccordion
      v-for="(course, index) in data"
      :key="index"
      :title="course.title"
      :custom-header="customHeader"
    >
      <template #subtitle>
        <Subtitle :module="course" />
      </template>
      <template #opened>
        <Courses :parent_id="course.id" :custom-header="true" />
      </template>
    </UIAccordion>
  </main>
</template>
