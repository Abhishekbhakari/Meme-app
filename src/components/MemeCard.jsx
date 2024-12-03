import React from 'react'

const MemeCard = ({meme}) => {
  return (
    <div style={{margin: "10px", padding: "10px", border: "1px solid black", width: "250px"}}>
        {console.log(meme)}
      <img src={meme.url} alt="image" style={{width: "100%"}} />
      <p>{meme.author}</p>
    </div>
  )
}

export default MemeCard;
