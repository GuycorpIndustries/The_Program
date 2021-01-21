const main = document.getElementById('main')



function mainHeader() {
    let header = document.createElement('header');
    //let txtLeftBottom = document.createTextNode('Industries');
    let txtRightBottom = document.createTextNode('Industries');
    let txtBanner = document.createTextNode('Guycorp Industries');
    let txtList = document.createTextNode('Home')
    let txtRightTop = document.createTextNode('Guycorp');
    //let txtLeftTop = document.createTextNode('Guycorp');
    //let iconDivLeft = document.createElement('div');
    let bannerDiv = document.createElement('div');
    let iconDivRight = document.createElement('div');
    let headerRightTop = document.createElement('p');
    //let headerLeftTop = document.createElement('p');
    let headerRightBottom = document.createElement('p');
    //let headerLeftBottom = document.createElement('p');
    //let techImgLeft = document.createElement('img');
    let techImgRight = document.createElement('img');
    let banner = document.createElement('h1');
    let navBar = document.createElement('nav');
    let navBarList = document.createElement('ul');
    let navBarListItem = document.createElement('li');
    let anchor = document.createElement('a');


    header.setAttribute('class', 'header');
    //iconDivLeft.setAttribute('class', 'techIcon');
    iconDivRight.setAttribute('class', 'techIcon');
    headerRightTop.setAttribute('class', 'techIconTop');
    //techImgLeft.setAttribute('src', 'img/icon-blk-tech.png');
    techImgRight.setAttribute('src', 'img/icon-blk-tech.png');
    headerRightBottom.setAttribute('class', 'techIconBottom');
    bannerDiv.setAttribute('class', 'banner');
    navBar.setAttribute('class', 'navBar');
    navBarList.setAttribute('class', 'navBar-list');
    navBarListItem.setAttribute('class', 'navBar-list__home');
    anchor.setAttribute('href', 'index.html');



    headerRightTop.appendChild(txtRightTop);
    //headerLeftTop.appendChild(txtLeftTop);
    headerRightBottom.appendChild(txtRightBottom);
    //headerLeftBottom.appendChild(txtLeftBottom);
    banner.appendChild(txtBanner);
    anchor.appendChild(txtList);

    iconDivRight.appendChild(headerRightTop);
    //iconDivLeft.appendChild(headerLeftTop);
    //iconDivLeft.appendChild(techImgLeft);
    iconDivRight.appendChild(techImgRight);
    //iconDivLeft.appendChild(headerLeftBottom);
    iconDivRight.appendChild(headerRightBottom);
    navBarListItem.appendChild(anchor);
    navBarList.appendChild(navBarListItem);
    navBar.appendChild(navBarList);
    bannerDiv.appendChild(banner);
    bannerDiv.appendChild(navBar);
    //header.appendChild(iconDivLeft);
    header.appendChild(bannerDiv);
    header.appendChild(iconDivRight);
    header.appendChild(iconDivRight);
    document.body.insertBefore(header, main);
} 

mainHeader();