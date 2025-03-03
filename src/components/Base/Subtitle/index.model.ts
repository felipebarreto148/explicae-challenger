import type { IModule } from "@/components/Courses/indx.model";

export interface IProps {
  module: IModule
}

export interface ILessons {
  total: number;
  duration: string;
}
export interface IExercises {
  total: number;
  duration: string;
}
export interface IMaterials {
  total: number;
  duration: string;
}