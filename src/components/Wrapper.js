import React from 'react';
import { QuoteText } from './QuoteText'
import { Footer } from './Footer'
import '../stylesheets/Wrapper.scss'


export function Wrapper({ color, body }) {
  return(
    <div id='wrapper' className='wrapper'>
      <div id='quote-box' className='quote-box'>
        <QuoteText
        color={color}
        body={body} /> 
      </div>
      <Footer />
    </div>
  )
}