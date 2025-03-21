import { ProjectTypeEnum } from "./ProjectTypeEnum";

export interface ProjectParams {
  title: string;
  description: string;
  authorId: string;
  projectType: ProjectTypeEnum;
}
