import React from "react";

interface IContadorValorProps {
    contador: number
}

export default (props: IContadorValorProps) => {
    return (
        <p>{props.contador}</p>
    )
}