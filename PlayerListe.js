import React from 'react'
import Player from './Player'
import playersData from './players'

const PlayerListe = () => {
  return (
    <div className='pl'>
        {playersData.map((player,index)=>(<Player Key ={index} {...player}/>))}
    </div>
  )
}

export default PlayerListe