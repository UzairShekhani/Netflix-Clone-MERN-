import React from 'react'
import './TittleCards.css'
import cards_data from "../../asset/cards/Cards_data"

const TittleCards = () => {
  return (
    <div className='titlecards'>
      <h2>Popular On Netflix</h2>
      <div className="card-list">
        {cards_data.map((card, index) => {
          return <div className="card" key={index}>
            <img src={card.image} alt="" />
            <p>{card.name}</p>
          </div>
        })}
      </div>
    </div>
  )
}

export default TittleCards