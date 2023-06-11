import React from 'react'
import colorNames from 'colornames'

const Inputers = ({colorValue, setcolorValue, sethexValue, isDarkText, setisDarkText}) => {

  return (
    <>
    <form onSubmit={(e) => e.preventDefault()}>
    <label>Add Color Name</label>
    <input type='text' 
        autoFocus placeholder='Add Color Name' 
        required value={colorValue} 
        onChange={(e) => {
            setcolorValue(e.target.value)
            sethexValue(colorNames(e.target.value));
    }}
    />

    <button type="button" onClick={() => setisDarkText(!isDarkText)}>Toggle Text Color</button>
    
    </form>
    </>
  )
}

export default Inputers