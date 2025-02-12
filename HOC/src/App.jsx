import React from 'react'
import Button from './Button.jsx'
import WithClickTracking from './WithClickTracking.jsx'

const App = () => {

  const ButtonWithTracking = WithClickTracking(Button)

  return (
    <div>
      <ButtonWithTracking 
      lable = "Pay Now"
      trackingInfo = {{amount: "2000", useer: "imad"}}
      />
    </div>
  )
}

export default App