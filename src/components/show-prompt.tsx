import React from 'react'
import { simplePrompt } from 'react-simple-dialogs-tmp'

type Props = {
  message: string
  options?: object
}

export default ({ message, options }: Props) => {
  const showPrompt = async () => {
    const name = await simplePrompt(options || message)
  
    console.log(`User name is ${name || 'a mistery'}`)
  }

  return <>
    <button onClick={showPrompt} className="button">See Working</button>
  </>
}