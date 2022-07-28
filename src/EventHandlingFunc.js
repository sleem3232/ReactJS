import React from 'react'
// if we use the function onclick with the name the func with () the browser render without click in button
function EventHandlingFunc() {
  function  ClickHandler(){
      console.log("buttoncliced")
  }
  return (
    <div>
        
        <button onClick={ClickHandler}>
            Click
        </button>
    </div>
  )
}

export default EventHandlingFunc