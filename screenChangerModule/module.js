//This Module allows you to add dynamic screens to a single page. Updates the Nav simultaneously.

// creates an element rod nav and an element for content 
class Page {
  constructor(name, cls, contentParent, icon) {
    this.name = name;
    this.onload = onload;
    this.icon = icon;
    this.navElement = document.createElement("li");
    this.navElement.id = name;
    this.navElement.innerText = name;
    this.pageDiv = document.createElement("div");
    this.pageDiv.classList.add("hidden");
    this.pageDiv.classList.add(cls);
    this.pageDiv.id = "divFor"+name;
    document.querySelector(contentParent).append(this.pageDiv);
  }
  AddContent (html) {
    this.pageDiv.innerHTML = html;
  }
  Inactivate () {
    console.log(this.pageDiv.classList);
    this.pageDiv.classList.add("hidden");
  }
  Activate () {
    this.pageDiv.classList.remove("hidden");
  }
}

//creates a nav element and adds navigation function
class Nav {
  constructor(name,container){
    this.pages = {};
    this.element = document.createElement("ul");
    this.name = name;
    this.element.id = name;
    this.element.onclick = (e)=>{
      Object.keys(this.pages).forEach((page, i) => {
        this.pages[page].Inactivate();
      });
      this.pages[(e.srcElement.id).replace("divFor","")].Activate();
    }
    this.AddToDoc(container);
  }
  AddToDoc (parentQuery) {
    this.element.remove();
    document.querySelector(parentQuery).append(this.element);
  }
  AddPage (page) {
    this.pages[page.name] = page;
    this.element.append(page.navElement);
  }
}

//builds nav and page objects into a site
function build(nav, allPages) {
  Object.keys(allPages).forEach((pageName, i) => {
    (allPages[pageName].nav).AddContent(allPages[pageName].content);
    nav.AddPage(allPages[pageName].nav);

  });
}

export {Nav, Page, build};
