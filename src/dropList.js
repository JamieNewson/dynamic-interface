const dropTitle = document.querySelector(".drop-title");
const dropList = document.querySelector(".drop-list");

dropTitle.addEventListener("click", () => {
  console.log("Drop element clicked", dropList.style.display);
  if (dropList.style.display === "") {
    dropList.style.display = "block";
    dropTitle.style.borderRadius = "5px 5px 0 0";
  } else {
    dropList.style.display = "";
    dropTitle.style.borderRadius = "5px";
  }
});

dropList.addEventListener("click", (e) => {
  if (e.target.className !== "drop-list-element") return;
  console.log(`${e.target.innerHTML} clicked`);
});
