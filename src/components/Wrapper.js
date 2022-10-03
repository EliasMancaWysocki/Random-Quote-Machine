import React from 'react';
import { QuoteText } from './QuoteText'
import '../stylesheets/Wrapper.scss'


export function Wrapper({ color }) {
  return(
    <div id='wrapper' className='wrapper'>
      <div id='quote-box' className='quote-box'>
        <QuoteText
        color={color} /> 
      </div>
    </div>
  )
}