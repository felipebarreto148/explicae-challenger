import type { IExercises, ILessons, IMaterials } from "../Base/Subtitle/index.model";

export interface IProps {
  module: IModule[];
  customHeader?: boolean;
}

export interface IModule {
  title: string;
  lessons: ILessons;
  exercises: IExercises;
  materials: IMaterials;
  modules?: IModule[];
}