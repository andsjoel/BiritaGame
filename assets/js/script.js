function createCard(cardContent, list) {
    const card = document.createElement('li')
    card.innerHTML = `<div class="front">
                        <h3>${cardContent.title}</h3>
                        <p>${cardContent.task}</p>
                      </div>
                      <div class="back">  
                      </div>`
    card.addEventListener('click', () => {
      const cardLi = document.querySelector('.card-desk li')
      if(cardLi.className.includes('flip')){
        displayRandomCard()
      } else {
        cardLi.classList.add('flip')
      }
    })
    list.appendChild(card)
  }
  
  function displayRandomCard() {
    const cardDeskList = document.querySelector('.card-desk ul')
    cardDeskList.innerHTML = ''
    const randomIndex = getRandomNum(0, cards.length - 1)
    const selectedCard = cards[randomIndex]
    createCard(selectedCard, cardDeskList)
  }
  
  function getRandomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  const btnImage = document.getElementById('getRandomCard')
  
  btnImage.addEventListener('click', displayRandomCard)
  
  