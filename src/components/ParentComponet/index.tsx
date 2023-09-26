import { useState } from "react"
import ChildComponent from "../ChildComponent";

type Props = {
    onChangeValue? : Function;
}

export default function ParentComponent({onChangeValue} : Props) {

    // componente pai vai ter um componente filho dentro dele

    const [quadruple, setQuadruple] =  useState<number> (0);

    function handleChangeValue (newValue : number) {
        setQuadruple(newValue * 4); 
        const halfValue = newValue * 4; // faz valer o mesmo valor que quadruple 
        // e depois o component GranFather divide por 2
        if (onChangeValue) {
            onChangeValue(halfValue);
        }        
        
    }

    return (
        <>
            <div style={
                {
                    border: "2px solid blue",
                    padding: "10px",
                    minHeight: "200px",
                    borderRadius: "10px"
                }
            }>
                <p>quadruple</p><h3>{quadruple}</h3>
                <ChildComponent onChangeValue={handleChangeValue}></ChildComponent>

            </div>
        </>
    )
}