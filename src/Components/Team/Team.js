import React from "react"

import {  team } from "../../ConstData/ProductData"
import "./Team.css"

const Team = () => {
  return (
    <>
      <section className='team'>
        <div className='scontainer'>
          <h1 >Our Professional</h1>

          <div className='contentgrid2'>
            {team.map((val, index) => (
              <div className='box' key={index}>
                <div className='img'>
                  <img src={val.cover} alt='' style={{width:"380px",height:"380px",borderRadius:"20px"}}/>
                </div>
                <div className='name'>
                  <h3>{val.name}</h3>
                  <span>{val.exper}</span>
                </div>
                
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Team