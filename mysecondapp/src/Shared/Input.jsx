import React from 'react'

const Input = (props) => {
    const className="h-10 w-60 border rounded" +props.className;
  return (
    <div>
        <label className="mr-3 ml-3 mt-2 mb-2 font-bold">{props.label}</label>
        <input type={props.type} placeholder={props.placeholder} className={className} onChange={props.onChange} value={props.value}/>
    </div>
  )
}

export default Input;