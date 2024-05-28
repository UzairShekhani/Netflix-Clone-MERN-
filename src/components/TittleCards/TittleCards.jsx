import React, { useEffect, useRef, useState } from 'react'
import './TittleCards.css'
import cards_data from "../../asset/cards/Cards_data"




const TittleCards = ({title, category}) => {

  const [apiData, setApiData] = useState([]);

    const cardsRef =  useRef()

    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhODI3MTQ2NzczNTk1ZDk1ODQ1YzlmZmM2ODQ5OGE2YyIsInN1YiI6IjY2NTYxMmQ2NWVhM2E2NDA1NmE4OGMxZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.sCoWxlSWMxvlhy3Kw524snUKbhunNVvVMuSOdTswlWE'
      }
    };
    
    

    const handleWheel = ((event) => {
    event.preventDefault()
    cardsRef.current.scrollLeft += event.deltaY
})

useEffect(() => {


  fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}`, options)
      .then(response => response.json())
      .then(response => setApiData(response.results))
      .catch(err => console.error(err));


},[])


  return (
    <div className='titlecards'>
      <h2>{title?title:"Popular On Netflix"}</h2>
      <div className="card-list" ref={cardsRef}>
        {apiData.map((card, index) => {
          return <div className="card" key={index}>
            <img src={`https://image.tmdb.org/t/p/w500`+card.backdrop_path} alt="" />
            <p>{card.original_title}</p>
          </div>
        })}
      </div>
    </div>
  )
}

export default TittleCards