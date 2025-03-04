import { courses } from "@/database/db";

import { defineStore } from "pinia";

export const useCoursesStore = defineStore("courses", {
  actions: {
    getCourses(parent_id?: number) {
      return !parent_id
        ? courses.filter((c) => !c.parent_id)
        : courses.filter((c) => c.parent_id === parent_id);
    },
  },
});
