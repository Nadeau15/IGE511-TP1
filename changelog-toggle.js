function toggleTable() {
  var table = document.getElementById("changelogTable");
  var chevronIcon = document.getElementById("chevronIcon");

  if (table.style.display === "none") {
    table.style.display = "table";
    chevronIcon.classList.remove("fa-chevron-down");
    chevronIcon.classList.add("fa-chevron-up");
  } else {
    table.style.display = "none";
    chevronIcon.classList.remove("fa-chevron-up");
    chevronIcon.classList.add("fa-chevron-down");
  }
}