import './src/css/style.css'
import { Profile } from './src/js/profile'
import { profile, works } from './data/da.json'
import { Work } from './src/js/pages'
// common element  
// profile page
const profileContainer = document.querySelector('.book-page.page-left')
const personalpage = new Profile(profile.name, profile.img_src, profile.title, profile.self_intro).build()
profileContainer.appendChild(personalpage)

// 1-2 pages
const page1_2_container = document.querySelector('#turn-1')
const page1 = new Work(works.work_1.id, works.work_1.title, works.work_1.img_src, works.work_1.description, works.work_1.state).build()
const page2 = new Work(works.work_2.id, works.work_2.title, works.work_2.img_src, works.work_2.description, works.work_2.state).build()
page1_2_container.appendChild(page1)
page1_2_container.appendChild(page2)

// 3-4 pages
const page3_4_container = document.querySelector('#turn-2')
const page3 = new Work(works.work_3.id, works.work_3.title, works.work_3.img_src, works.work_3.description, works.work_3.state).build()
const page4 = new Work(works.work_4.id, works.work_4.title, works.work_4.img_src, works.work_4.description, works.work_4.state).build()
page3_4_container.appendChild(page3)
page3_4_container.appendChild(page4)

// 5-6 pages
const page5_6_container = document.querySelector('#turn-3')
const page5 = new Work(works.work_5.id, works.work_5.title, works.work_5.img_src, works.work_5.description, works.work_5.state).build()
const page6 = new Work(works.work_6.id, works.work_6.title, works.work_6.img_src, works.work_6.description, works.work_6.state).build()
page5_6_container.appendChild(page5)
page5_6_container.appendChild(page6)

// functional area
//turn pages when click next or prev button
const pageTurnBtn = document.querySelectorAll('.nextprev-btn');

pageTurnBtn.forEach((el, index) => {
  el.onclick = () => {
    const pageTurnId = el.getAttribute('data-page');
    const pageTurn = document.getElementById(pageTurnId);
    if (pageTurn && pageTurn.classList.contains('turn')) {
      pageTurn.classList.remove('turn');
      setTimeout(() => {
        pageTurn.style.zIndex = 20 - index;
      }, 500)
    }
    else if (pageTurn) {
      pageTurn.classList.add('turn');
      setTimeout(() => {
        pageTurn.style.zIndex = 20 + index;
      }, 500)
    }
  }
});

//contact me button when click
const pages = document.querySelectorAll('.book-page.page-right');
//create reverse index function
let totalPages = pages.length;
let pageNumber = 0;

function reverseIndex() {
  pageNumber--;
  if (pageNumber < 0) {
    pageNumber = totalPages - 1;
  }
}

//opening animation
const coverRight = document.querySelector('.cover.cover-right');
const pageLeft = document.querySelector('.book-page.page-left');

//opening animation (cover right animation)
setTimeout(() => {
  coverRight.classList.add('turn');
}, 2100)

setTimeout(() => {
  coverRight.style.zIndex = -1;
}, 2800)

//opening animation (page left or profile page animation)
setTimeout(() => {
  pageLeft.style.zIndex = 20;
}, 3200)

//opening animation (all page right animation)
pages.forEach((_, index) => {
  setTimeout(() => {
    reverseIndex();
    pages[pageNumber].classList.remove('turn');

    setTimeout(() => {
      reverseIndex();
      pages[pageNumber].style.zIndex = 10 + index;
    }, 500)

  }, (index + 1) * 200 + 2100)
})