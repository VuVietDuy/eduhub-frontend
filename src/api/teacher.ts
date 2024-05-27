import { fetcher } from "./fetcher";

const path = {
  getAllTeachers: "api/teachers",
};

export async function getAllTeacher() {
  return fetcher.get(path.getAllTeachers);
}
