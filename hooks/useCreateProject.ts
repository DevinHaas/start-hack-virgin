import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

const createProject = async (title: string, description: string) => {
  const { data } = await axios.post(
    "/api/projects",
    { title: title, description: description },
    {
      headers: { ContentType: "application/json" },
    },
  );

  if (!response.ok) {
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
