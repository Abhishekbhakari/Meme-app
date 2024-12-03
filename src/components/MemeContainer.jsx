import React from 'react';
import MemeCard from './memeCard';
import Shimmer from './Shimmer';


const MemeContainer = ({ data }) => {
    
  return (
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {data.map((meme, index) => (
          <MemeCard key={index} meme={meme} />
        ))}
      </div>
    )

};

export default MemeContainer;
