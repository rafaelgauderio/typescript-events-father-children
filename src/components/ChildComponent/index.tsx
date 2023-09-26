import { useState } from "react"

// a prop vai ser um evento

type Props = {
    // disparar o evento (função) sempre que trocar o valor 
    // eslint-disable-next-line @typescript-eslint/ban-types
    onChangeValue?: Function;
}

export default function ChildComponent({ onChangeValue }: Props) {

    const [count, setCount] = useState<number>(0);

    function increaseValue() {
        const newCountValue = count + 1;
        setCount(newCountValue);
        if (onChangeValue !== undefined) {
            onChangeValue(newCountValue);
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
                <h3>{count}</h3>
                <button onClick={increaseValue}>Click to increase</button>

            </div>
        </>
    )
}


