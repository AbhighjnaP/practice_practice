function saveData() {
  // Get form data
  const formData = new FormData(document.getElementById("myForm"));
  const name = formData.get("name");
  const email = formData.get("email");

  // Create new workbook
  const wb = XLSX.utils.book_new();
  const ws = XLSX.utils.json_to_sheet([{ Name: name, Email: email }]);
  XLSX.utils.book_append_sheet(wb, ws, "Sheet1");

  // Save workbook
  const date = new Date();
  const fileName = `data_${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}.xlsx`;
  XLSX.writeFile(wb, fileName);
}
