// HANDLE TABS
function handleTabsNew() {
  let tabs = document.querySelectorAll(".sctabs__tab-item"),
    listNews = document.querySelectorAll(".shopify-tab-content");

  tabs.forEach(function (tab) {
    tab.addEventListener("click", function () {
      // remove all class active of tabs
      tabs.forEach(function (tab) {
        tab.classList.remove("active");
      });

      //   add class active
      this.classList.add("active");

      // hide all news list
      listNews.forEach(function (newList) {
        newList.classList.remove("active");
      });

      // get data-tab
      let id = this.dataset.tab;
      // addclass active to news list
      document.querySelector(".article__list-" + id).classList.add("active");
      console.log(id);
    });
  });
}

window.addEventListener("load", handleTabsNew());
