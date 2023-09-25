import { useState } from "react"
import ChildComponent from "../ChildComponent";

export default function ParentComponent() {

    // componente pai vai ter um componente filho dentro dele

    const [quadruple, setQuadruple] =  useState<number> (0);

    function handleChangeValue (newValue : number) {
        setQuadruple(newValue * 4);
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