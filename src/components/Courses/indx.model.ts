import type { IExercises, ILessons, IMaterials } from "../Base/Subtitle/index.model";

export interface IProps {
  parent_id?: number;
  customHeader?: boolean;
}

export interface IModule {
  id: number;
  parent_id?: number;
  title: string;
  lessons: ILessons;
  exercises: IExercises;
  materials: IMaterials;
  modules?: IModule[];
}