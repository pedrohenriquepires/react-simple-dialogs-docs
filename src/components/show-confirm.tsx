import { simpleConfirm } from 'react-simple-dialogs-tmp'
import React from 'react'

type Props = {
  message: string
  options?: object
}

export default ({ message, options }: Props) => {
  const showConfirmation = async () => {
    if (await simpleConfirm(options || message)) {
      console.log('Confirmed! 😄')
    } else {
      console.log('Not confirmed. 🥲')
    }
  }

  return <>
    <button onClick={showConfirmation} className="button">See Working</button>
  </>
}