import React from 'react'

export default function Modal({isCorrect, turn, solution}) {
  return (
    <div className='modal'>
      {isCorrect && (
        <div>
            <h1>Awesome!</h1>
            <p className='solution'> {solution} </p>
            <p>You found the solution in {turn} guesses!</p>
        </div>
      )}
      {!isCorrect && (
        <div>
            <h1>Drat!</h1>
            <p className='solution'>Correct word was {solution}.</p>
            <p>Better luck next time!</p>
        </div>
      )}
    </div>
  )
}
