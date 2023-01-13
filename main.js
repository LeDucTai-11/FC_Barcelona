let serviceSearchBtn = document.querySelector('.service__search__btn');
let serviceSearchNav = document.querySelector('.service__search__nav');
let serviceSearchIcon = document.getElementById('service__search-icon');

let fanSiteBtn = document.querySelector('.fan__site');
let mediaFanSite = document.querySelector('.fan__site__panel');

serviceSearchBtn.addEventListener('click', function () {
    serviceSearchIcon.classList.toggle('fa-xmark');
    serviceSearchNav.classList.toggle('service__search__nav--open');
});

fanSiteBtn.addEventListener('click', function () {
    mediaFanSite.classList.add('fan__site__panel--open');
})

document.querySelector('.fan__site__panel_title').addEventListener('click', function () {
    mediaFanSite.classList.remove('fan__site__panel--open');
})

