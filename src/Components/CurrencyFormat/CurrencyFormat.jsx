import React from 'react'
import numeral from 'numeral'

const CurrencyFormat=({amount})=>{
    const formattedAmount= numeral(amount).format("$0,0.00")
    return <div>{formattedAmount}</div>
}

function CurrencyFormat() {
  return (
    <div>
      
    </div>
  )
}

export default CurrencyFormat
