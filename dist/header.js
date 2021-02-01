const main = document.getElementById("main");

function mainHeader() {
  let header = document.createElement("header");
  let txtRightBottom = document.createTextNode("Industries");
  let txtBanner = document.createTextNode("Guycorp Industries");
  let txtList = document.createTextNode("Office Documents");
  let txtListHome = document.createTextNode("Home");
  let txtRightTop = document.createTextNode("Guycorp");
  let bannerDiv = document.createElement("div");
  let iconDivRight = document.createElement("div");
  let headerRightTop = document.createElement("p");
  let headerRightBottom = document.createElement("p");
  let techImgRight = document.createElement("img");
  let banner = document.createElement("h1");
  let navBar = document.createElement("nav");
  let navBarList = document.createElement("ul");
  let navBarListItem = document.createElement("li");
  let anchorHome = document.createElement("a");
  let anchor = document.createElement("a");

  headerRightTop.appendChild(txtRightTop);
  headerRightBottom.appendChild(txtRightBottom);
  banner.appendChild(txtBanner);
  anchorHome.appendChild(txtListHome);
  anchor.appendChild(txtList);

  header.setAttribute("class", "header");
  iconDivRight.setAttribute("class", "techIcon");
  headerRightTop.setAttribute("class", "techIconTop");
  techImgRight.setAttribute("src", "img/icon-blk-tech.png");
  headerRightBottom.setAttribute("class", "techIconBottom");
  bannerDiv.setAttribute("class", "banner");
  navBar.setAttribute("class", "navBar");
  navBarList.setAttribute("class", "navBar-list");
  navBarListItem.setAttribute("class", "navBar-list__home");
  anchorHome.setAttribute("href", "index.html");
  anchor.setAttribute("href", "officeDocuments.html");

  iconDivRight.appendChild(headerRightTop);
  iconDivRight.appendChild(techImgRight);
  iconDivRight.appendChild(headerRightBottom);
  navBarListItem.appendChild(anchor);
  navBarListItem.insertBefore(anchorHome, anchor);
  navBarList.appendChild(navBarListItem);
  navBar.appendChild(navBarList);
  bannerDiv.appendChild(banner);
  bannerDiv.appendChild(navBar);
  header.appendChild(bannerDiv);
  header.appendChild(iconDivRight);
  header.appendChild(iconDivRight);
  document.body.insertBefore(header, main);
}

mainHeader();
