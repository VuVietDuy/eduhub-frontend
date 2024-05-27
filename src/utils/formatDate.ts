function formatDate(inputDateTime: any) {
  if (inputDateTime === undefined) return "";

  const inputDate = new Date(inputDateTime);

  // Lấy thông tin về ngày, tháng, năm, giờ, phút và giây
  const year = inputDate.getFullYear();
  const month = String(inputDate.getMonth() + 1).padStart(2, "0"); // Tháng bắt đầu từ 0
  const day = String(inputDate.getDate()).padStart(2, "0");

  // Định dạng chuỗi kết quả
  const formattedDateTime = `${day}-${month}-${year}`;

  return formattedDateTime;
}

export { formatDate };
