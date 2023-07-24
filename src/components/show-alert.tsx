import { simpleAlert } from 'react-simple-dialogs-tmp'
import React from 'react'

type Props = {
  message: string
}

export default ({ message }: Props) => {
  const showAlert = async () => {
    await simpleAlert(message);

    console.log('Alert closed')
  }

  return <>
    <button onClick={showAlert} className="button">See Working</button>
  </>
}