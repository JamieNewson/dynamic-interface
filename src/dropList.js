const dropElements = document.querySelectorAll(".drop-title");
const dropListElements = document.querySelectorAll(".drop-list-element");

dropElements.forEach((dropElement) =>
  dropElement.addEventListener("click", (e) => {
    const dropElement = e.target.parentElement.parentElement;
    const dropTitle = dropElement.querySelector(".drop-title");
    const dropList = dropElement.querySelector(".drop-list");

    if (dropList.style.display === "") {
      dropList.style.display = "block";
      dropTitle.style.borderRadius = "5px 5px 0 0";
    } else {
      dropList.style.display = "";
      dropTitle.style.borderRadius = "5px";
    }
  })
);

dropListElements.forEach((element) =>
  element.addEventListener("click", (e) => {
    console.log(`${e.target.innerHTML} clicked`);
  })
);
