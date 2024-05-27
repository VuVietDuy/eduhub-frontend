import { fetcher } from "./fetcher";

const path = {
  getAllClasses: "api/classes",
};

export async function getAllClasses() {
  return fetcher.get(path.getAllClasses);
}
