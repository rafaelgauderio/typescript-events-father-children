import { useState } from "react"

export default function ChildComponent() {

    const [count, setCount] = useState<number>(0);

    function increaseValue () {
        const newCountValue = count + 1;
        setCount(newCountValue);
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

function setCount(arg0: any) {
    throw new Error("Function not implemented.");
}
