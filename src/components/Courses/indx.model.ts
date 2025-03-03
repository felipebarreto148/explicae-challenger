export interface IProps {
  module: IModule[];
  customHeader?: boolean;
}

export interface IModule {
  title: string;
  lessons: string;
  exercises: string;
  materials: string;
  modules?: IModule[];
}