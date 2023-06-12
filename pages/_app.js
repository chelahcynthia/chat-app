import "../styles/auth.css"
import "../styles/chat.css"
import "../styles/index.css"

import { ContextProvider } from "../context"


import React from 'react'

export default function _app({ Component, pageProps}) {
  return (
   <ContextProvider>
    <Component {...pageProps} />
   </ContextProvider>
  )
}
