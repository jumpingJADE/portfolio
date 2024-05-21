import './src/css/style.css'
import { Profile } from './src/js/profile'
import { profile, works } from './data/da.json'
import { Work } from './src/js/pages'
// common element  
// profile page
const profileContainer = document.querySelector('.book-page.page-left')
const personalpage = new Profile(profile.name, profile.img_src, profile.self_intro).build()
profileContainer.appendChild(personalpage)

// 1-2 pages
const page1_2_container = document.querySelector('#turn-1')
const page1 = new Work(works.work_1.id, works.work_1.title, works.work_1.img_src, works.work_1.description, works.work_1.state).build()
console.log(page1);
page1_2_container.appendChild(page1)
