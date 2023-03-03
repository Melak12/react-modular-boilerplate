import apiClient from "@app/services/api.service";
import { Todo } from "../types/Todo";

export const getTodos  = async ():Promise<Array<Todo>> => {
   const result =  await apiClient.get<Array<Todo>>("todos");
   return result.data;
}