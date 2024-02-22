import React from 'react';

export default function Input({type,id,placeholder,register,errMsg}){
    return (
      <div>
        <input type={type}id={id} placeholder={placeholder} {...register}/>
        <div style={{fontSize:"12px",color:"red"}}>{errMsg}</div>
      </div>
    );
} 