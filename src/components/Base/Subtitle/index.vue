<script lang="ts" setup>
// Types
import type { IProps } from './index.model';

// Composables
defineProps<IProps>();
</script>

<template>
  <section class="flex flex-col sm:flex-row gap-x-3 gap-y-1">
    <p class="text-xs">Aulas <span class="font-bold">{{ module.lessons?.total }} | {{ module.lessons?.duration }}</span></p>
    <p class="text-xs">Exercícios <span class="font-bold">{{ module.exercises?.total }} | {{ module.exercises?.duration }}</span></p>
    <p class="text-xs">Materiais <span class="font-bold">{{ module.materials?.total }} | {{ module.materials?.duration }}</span></p>
  </section>
</template>