<script lang="ts" setup>
// Core
import { ref } from "vue";

// Types
import type { IProps } from "./index.model";

// Composables
withDefaults(defineProps<IProps>(), {
  customHeader: false
})

// Variables
const isOpen = ref(false);
</script>

<template>
  <section
    class="bg-white px-3 py-4 gap-5 flex flex-col w-full h-fit transition-all duration-300"
    :class="{ 'rounded-lg': !customHeader, 'not-last:border-b border-b-gray-300': customHeader }"
  >
    <!-- Default view -->
    <header class="h-fit cursor-pointer" @click="isOpen = !isOpen">
      <slot name="header" :isOpen>
        <section class="w-full flex justify-between">
          <section class="flex flex-col gap-2">
            <section class="flex gap-5 items-center">
              <img class="size-3.5" src="@/assets/icons/subtract.svg" alt="" v-if="isOpen && customHeader">
              <img class="size-3.5" src="@/assets/icons/add.svg" alt="" v-if="!isOpen && customHeader">
              <p class="font-semibold text-lg" :class="{ 'font-medium text-sm': customHeader}">{{ title }}</p>
              </section>
            <slot name="subtitle" />
          </section>

          <img
            v-if="!customHeader"
            src="@/assets/icons/arrow.svg"
            alt="Ícone de seta."
            class="transition-all duration-300 size-5"
            :class="{ 'rotate-180': isOpen }"
          />
        </section>
      </slot>
    </header>
    <!-- Opened view -->
    <section v-if="isOpen" class="px-2" :class="{ 'border border-gray-300 rounded-lg': !customHeader }">
      <slot name="opened" />
    </section>
  </section>
</template>
