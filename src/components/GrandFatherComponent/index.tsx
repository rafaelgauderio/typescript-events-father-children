import { useState } from "react"
import ParentComponent from "../ParentComponet";


export default function GrantParentComponent() {

    const [half, setHalf] = useState<number>(0);

    function handleChangeValue(newValue: number) {                   
            setHalf(newValue / 2);        
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
                <p>half of quadruple</p><h3>{half}</h3>
                <ParentComponent onChangeValue={handleChangeValue}></ParentComponent>

            </div>
        </>
    )
}