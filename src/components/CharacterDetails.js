import React from 'react'
// Details of each character
// note: did not have time to implement.

const CharacterDetails = (props) => {
   const {details} = props;


   return (
       <div class='character-info'>
           <h3>Character info</h3>
           <p>Name: {details.name}</p>
           <p>Birth year: {details.birth_year }</p>
           <p>Eye Color: {details.eye_color}olor</p>
           <p>Gender: {details.gender}</p>
           <p>Hair Color: {details.hair_color}</p>
           <p>Height: {details.height}</p>
           <p>Home World: {details.homeworld}</p>
           <p>Mass: {details.mass}</p>
           <p>Skin Color: {details.skin_color}</p>
           <p>Species: {details.species}</p>
       </div>
   )
}

export default CharacterDetails;