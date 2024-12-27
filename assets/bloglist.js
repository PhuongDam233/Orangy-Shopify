function handleBlogList() {
  let tabs = document.querySelectorAll(".tag-btn-link");

  tabs.forEach(function (tab) {
    tab.addEventListener("click", function (event) {
      // remove all class active of tabs
      tabs.forEach(function (tab) {
        tab.classList.remove("active");
      });

      //   add class active
      this.classList.add("active");
    });
  });
}
handleBlogList();
