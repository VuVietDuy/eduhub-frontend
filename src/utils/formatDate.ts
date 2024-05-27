export function formatDate(createdAt: any) {
  const date = new Date(createdAt);
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const seconds = date.getSeconds().toString().padStart(2, "0");
  const formattedDate = `${hours}:${minutes}:${seconds} ${date
    .getDate()
    .toString()
    .padStart(2, "0")}/${(date.getMonth() + 1)
    .toString()
    .padStart(2, "0")}/${date.getFullYear()}`;

  // Định dạng ngày tháng theo kiểu dd/mm/yyyy
  // const formattedDate = date.toLocaleDateString("vi-VN", {
  //   day: "2-digit",
  //   month: "2-digit",
  //   year: "numeric",
  // });
  return formattedDate;
}
