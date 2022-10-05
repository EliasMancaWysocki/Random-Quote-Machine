import React from 'react';
import { QuoteText } from './QuoteText'
import { Footer } from './Footer'
import '../stylesheets/Wrapper.scss'


export function Wrapper({ color }) {
  return(
    <div id='wrapper' className='wrapper'>
      <div id='quote-box' className='quote-box'>
        <QuoteText
        color={color} /> 
      </div>
      <Footer />
    </div>
  )
}