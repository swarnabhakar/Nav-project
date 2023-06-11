import React from 'react';

const Button = (props) => {
    const className="btn btn-success mr-5 ml-5 mt-5 mb-5 "+props.className;
  return (
    <div>
        <button className={className} onClick={props.onClick} disabled={props.disabled}>{props.buttonname}</button>
    </div>
    
  );
};
export default Button;