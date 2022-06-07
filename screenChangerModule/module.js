//This Module allows you to add dynamic screens to a single page. Updates the Nav simultaneously.

class Page {
  constructor(name, cls, icon) {
    this.onload = onload;
    this.icon = icon;
    this.element = document.createElement("li");
    this.element.id = name;
    this.element.innerText = name;
    this.pageDiv = document.createElement("div");
    this.pageDiv.classList.add("hidden");
    this.pageDiv.classList.add(cls);
    document.querySelector("body").append(this.pageDiv);
  }
  AddContent (html) {
    this.pageDiv.innerHTML = html;
  }
  Inactivate () {
    this.pageDiv.classList.add("hidden");
  }
  Activate () {
    this.pageDiv.classList.remove("hidden");
  }
}
class Nav {
  constructor(name){
    this.pages = [];
    this.element = document.createElement("ul");
    this.name = name;
    this.element.id = name;
    this.element.onclick = (e)=>{
      this.pages.forEach((page, i) => {
        page.Inactivate();
      });
      this.pages[e.srcElement.getAttribute("data-index-num")].Activate();
    }
  }
  AddToDoc (parentQuery) {
    this.element.remove();
    document.querySelector(parentQuery).append(this.element);
  }
  AddPage (page) {
    page.element.dataset.indexNum = this.pages.length;
    this.pages[this.pages.length] = page;
    this.element.append(page.element);
  }
}

export {Nav, Page};
