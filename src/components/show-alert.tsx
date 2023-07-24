import { simpleAlert } from 'react-simple-dialogs-tmp'
import React from 'react'

type Props = {
  message: string
  options?: object
}

export default ({ message, options }: Props) => {
  const showAlert = async () => {
    await simpleAlert(options || message);

    console.log('Alert closed')
  }

  return <>
    <button onClick={showAlert} className="button">See Working</button>
  </>
}