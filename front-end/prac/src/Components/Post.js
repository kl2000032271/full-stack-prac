import React from 'react'

export default function Post(props) {
  return (
    <div className= "shadow-lg p-3 mb-5 bg-light rounded">
       <div className="text-success">{props.id}</div>
       <div style ={{color:props.color}}>{props.name}</div>
       <div>{props.year}</div>
       {/* <div>{props.color}</div> */}
       <div>{props.pantone_value}</div>
    </div>
  )
}