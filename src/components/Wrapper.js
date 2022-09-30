import React from 'react';
import { QuoteText } from './QuoteText'
import '../stylesheets/Wrapper.scss'


export function Wrapper() {
  return(
    <div id='wrapper' className='wrapper'>
      <div id='quote-box' className='quote-box'>
        <QuoteText />
        
      </div>
    </div>
  )
}