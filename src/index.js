import './scss/app.scss'

import { Card } from './js/card'

console.log('Hello')
const containerElement = document.querySelector('#container')
const buttonElement = document.querySelector('#button')

buttonElement.addEventListener('click', () => {
  new Card (containerElement)
})
