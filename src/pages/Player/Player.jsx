import React, { useEffect, useState } from 'react';
import './Player.css';
import backArrow from '../../asset/back_arrow_icon.png';
import { useNavigate, useParams } from 'react-router-dom';

const Player = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [apiData, setApiData] = useState({
    name: "",
    key: "",
    published_at: "",
    type: ""
  });

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhODI3MTQ2NzczNTk1ZDk1ODQ1YzlmZmM2ODQ5OGE2YyIsInN1YiI6IjY2NTYxMmQ2NWVhM2E2NDA1NmE4OGMxZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.sCoWxlSWMxvlhy3Kw524snUKbhunNVvVMuSOdTswlWE'
    }
  };

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
      .then(response => response.json())
      .then(response => {
        if (response.results && response.results.length > 0) {
          setApiData(response.results[0]);
        }
      })
      .catch(err => console.error(err));
  }, [id]); // Added id as a dependency to refetch if id changes

  return (
    <div className='player'>
      <img 
        src={backArrow} 
        alt="Back Arrow" 
        onClick={() => navigate('/')} 
        onAbort={() => navigate('/dashboard')} 
      />
      {apiData.key ? (
        <iframe
          width="90%"
          height="90%"
          src={`https://www.youtube.com/embed/${apiData.key}`}
          title='trailer'
          frameBorder="0"
          allowFullScreen
        ></iframe>
      ) : (
        <p>Loading...</p>
      )}
      <div className="player-info">
        <p>{apiData.published_at.slice(0, 10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  );
}

export default Player;
