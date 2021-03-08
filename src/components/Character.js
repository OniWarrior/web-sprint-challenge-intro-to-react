

import React from 'react'
import styled from 'styled-components'


import {Container} from '../Styled/Container'



// Write your Character component here
const Character = (props) => {
   const  {characters} = props

  
   return (
       <CharacterContainer>          
           <p>{characters.name}</p>                            
           <p>{characters.birth_year}</p>           
       </CharacterContainer>
       
   )
}

const CharacterContainer = styled(Container)`
display: flex;
justify-content: space-between;
opacity:0.8;
background-color: black;
color: white;
text-shadow: 1px 1px 5px #fff;  
text-decoration: none;
`






export default Character;