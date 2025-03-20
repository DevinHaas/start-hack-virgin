import { ProjectParams } from "@/types/ProjectType";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

const createProject = async (project: ProjectParams) => {
  const { request, data } = await axios.post(
    "/api/projects",
    {
      title: project.title,
      description: project.description,
      authorId: project.authorId,
    },
    {
      headers: { ContentType: "application/json" },
    },
  );

  if (!request.ok) {
    throw Error("Failed to create new Project");
  }

  return data;
};

export function useCreateProject() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createProject,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["projects"] });
    },
  });
}
