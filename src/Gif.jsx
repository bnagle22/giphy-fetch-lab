import React from 'react'

function Gif ({ gif }){
  console.log("GIF IS HERE", gif)
  return(
    <div>
      <img src={gif.data.images.original.url} alt="searched Gif" />
    </div>
  )
}

export default Gif 