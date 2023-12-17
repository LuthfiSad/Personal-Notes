import React from "react";

export default function Button({type="button", style, onclick=(()=>{}), children}){
    return(
        <button type={type} className={style} onClick={onclick}>{children}</button>
    )
}