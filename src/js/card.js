import { DnD } from './dnd'

class Card {
  data = []
  activeStick = null

  constructor() {
    this.buttonElement = document.querySelector('#button')
    this.containerElement = document.querySelector('#container')
    this.cardElement = document.querySelector('#card')

    this.init()
  }

  init() {
    this.buttonElement.addEventListener('click', this.handleClickButton.bind(this))
    this.cardElement.addEventListener('click', this.handleClickCard.bind(this))

  }
}

handleClickButton() {
  const card = {
    id: Date.now(),
    content: 'Hello',
    position: {
      top: 'auto',
      left: 'auto'
    }
  }

  this.data.push(card)
  this.render()
}

buildCardElement(data) {
  const cardWrapperElement = document.createElement('div')
  cardWrapperElement.classList.add('card')
  cardWrapperElement.setAttribute('data-id', data.id)
  cardWrapperElement.style.top = data.position.top
  cardWrapperElement.style.left = data.position.left

}

const templateInnerCard = `


      <div class="card__content">${data.content}</div>
      <form class="card__form">
        <textarea>${data.content}</textarea>
        <button>Save</button>
      </form>
    `
    cardWrapperElement.innerHTML = templateInnerCard
    new DnD(cardWrapperElement)

    return cardWrapperElement
  }

  render() {
    this.containerElement.innerHTML = ''


    this.data.forEach((data) => {
      const cardElement = this.buildCardElement(data)

      this.containerElement.append(this.cardElement)
    })
  }

export { Card }
