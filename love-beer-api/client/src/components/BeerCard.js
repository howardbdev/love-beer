import React from 'react';

const BeerCard = ({beer}) => {
    return <div className="BeerCard">
      <h1>{beer.name}</h1>
      <p>brewer - {beer.brewer.name}</p>
      <p>style - {beer.style}</p>
      <img className="beerImage" src={beer.image_url} alt="(no pic)"/>
      <p>{beer.description}</p>
    </div>
}

// BeerCard.defaultProps = {
//   beer: {
//     name: "some beer",
//     style: "some style",
//     brewer: {
//       name: "some brewer",
//     },
//     image_url: "some.com",
//     description: "that's some beer"
//   }
// }

export default BeerCard;;
