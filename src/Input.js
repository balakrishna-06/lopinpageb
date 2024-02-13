import React from 'react';

export default function Input({type,id,label,placeholder,register,errMsg}){
    return (
      <div>
        <label>{label}</label>
        <input type={type}id={id} placeholder={placeholder} {...register}/>
        <div style={{fontSize:"12px",color:"red"}}>{errMsg}</div>
      </div>
    );
} 