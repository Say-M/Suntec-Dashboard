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
