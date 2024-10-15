import React from 'react'
import logo1 from "../logo1.png"
import logo2 from "../logo2.png"

export  function Logo1({w,h}) {
  return (
     <img
        width={w}
        height={h}
        src={logo1}
        alt={"logo"}
        loading="lazy"
      />
  )
}

export  function Logo2({ w, h }) {
  return (
    <img
      width={w}
      height={h}
      src={logo2}
      alt={"logo"}
      loading="lazy"
    />
  )
}
