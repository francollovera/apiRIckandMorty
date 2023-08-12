import React from 'react'
import style from './Pagination.module.css';

const Pagination = ({prev,next, onPrevius, onNext}) => {
    const handlePreviues = () =>{
        onPrevius();
    }
   const handleNext = () =>{
        onNext();
    }
  return (
    <nav className='my-5'>
        <ul className='pagination justify-content-center'>
            {
                prev ? ( 
            
            <li className='page-item'>
                <button className={style.botones} onClick={handlePreviues}>Prev</button>
            </li>
            ) : null}
            {
                next ? ( 
            
            <li className='page-item'>
            <button className={style.botones} onClick={handleNext}>Next</button>
            </li>
            ): null}
        </ul>
         </nav>
  )
}

export default Pagination