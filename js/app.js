//sidebar
const menu = document.querySelector('.menu')
const sidebar = document.querySelector('.sidebar')
const main = document.querySelector('main')
const overlay = document.querySelector('.overlay')

menu.addEventListener('click', () => {
  sidebar.classList.add('active')
  main.classList.add('full-width')
  overlay.classList.remove('hide')
})
overlay.addEventListener('click', () => {
  sidebar.classList.remove('active')
  main.classList.remove('full-width')
  overlay.classList.add('hide')
})

//header
const rightHeaderMenu = document.querySelector('.right-header-menu')
const rightHeader = document.querySelector('.right-header')
const leftHeaderSearch = document.querySelector('.left-header-search')
const search = document.querySelector('.search')
rightHeaderMenu.addEventListener('click', () => {
  rightHeader.classList.toggle('active')
})
leftHeaderSearch.addEventListener('click', () => {
  search.classList.toggle('active')
})

//Language dropdown
const languageBtn = document.querySelector('.language-btn')
const languageList = document.querySelector('.language-list')

languageBtn.addEventListener('click', () => {
  languageList.classList.toggle('active')
})

//fullscreen
let isFullScreen = false
const elem = document.documentElement
const expand = document.querySelector('.expand')
function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen()
  } else if (elem.webkitRequestFullscreen) {
    /* Safari */
    elem.webkitRequestFullscreen()
  } else if (elem.msRequestFullscreen) {
    /* IE11 */
    elem.msRequestFullscreen()
  }
  isFullScreen = true
}
function exitFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen()
  } else if (document.webkitExitFullscreen) {
    /* Safari */
    document.webkitExitFullscreen()
  } else if (document.msExitFullscreen) {
    /* IE11 */
    document.msExitFullscreen()
  }
  isFullScreen = false
}

expand.addEventListener('click', () => {
  if (isFullScreen) exitFullscreen()
  else openFullscreen()
})

//header dropdown
const settingBtn = document.querySelector('.setting-btn')
const notificationBtn = document.querySelector('.notification-btn')
settingBtn.addEventListener('click', function () {
  notificationBtn.children[1].classList.remove('active')
  this.children[1].classList.toggle('active')
})
notificationBtn.addEventListener('click', function () {
  settingBtn.children[1].classList.remove('active')
  this.children[1].classList.toggle('active')
})
