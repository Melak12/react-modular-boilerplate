import apiClient from "@app/services/api.service";
import { Todo } from "../types/Todo";

export const getTodos  = async (controller?:AbortController):Promise<Array<Todo>> => {
   const result =  await apiClient.get<Array<Todo>>("todos", {controller:controller});
   return result.data;
}