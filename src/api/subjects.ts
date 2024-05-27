import { fetcher } from "./fetcher";

const path = {
  getAllSubjects: "api/subjects",
};

export async function getAllSubject() {
  return fetcher.get(path.getAllSubjects);
}
