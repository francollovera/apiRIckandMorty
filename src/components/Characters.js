import React from 'react'
import style from './Characters.module.css'

const Characters = ({characters = []}) => {
  return (
    <div className='row'>
        
            {
                characters.map((item, index) => (
                <div key={index} className='col mb-4'>
                    <div className={style.card} >
                        <div className={style.cardsegundo}>
                        <img className={style.imagen} src={item.image} alt='' />
                        <div className='card-body'>
                        <h5 className={style.titulo} >{item.name}</h5>
                        <hr />
                        <p className={style.parrafo}>Species: {item.species}</p>
                        <p className={style.parrafo}>Location: {item.location.name}</p>
                        </div>
                        </div>
                    </div>
                </div>
                ))
            }

       
    </div>
  )
}

export default Characters