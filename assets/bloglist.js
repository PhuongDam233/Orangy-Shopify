function handleBlogList() {
  let tabs = document.querySelectorAll(".tag-btn-link");

  tabs.forEach(function (tab) {
    tab.addEventListener("click", function () {
      // remove all class active of tabs
      tabs.forEach(function (tab) {
        tab.classList.remove("active");
      });

      //   add class active
      this.classList.add("active");

      // get data-tab
      let id = this.dataset.tab;
      // addclass active to news list
      document.querySelector("#" + id).classList.add("active");
    });
  });
}
