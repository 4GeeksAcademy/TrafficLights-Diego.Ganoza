import { useEffect, useState } from "react";

export const TrafficLights = ({ color, id, IdCheckingFunction, idChecking, bool }) => {

    const [lightStyles, setLightsStyles] = useState({})
    const lightStylesFunction = () => {
        setLightsStyles({
            width: "70%",
            height: "90%",
            margin: "50%",
            background: color,
            boxShadow: idChecking === id || bool ? "0px 0px 50px 65px white" : ""
        })
    }

    console.log(bool);

    useEffect(() => {
        lightStylesFunction()
    }, [color, IdCheckingFunction, bool])

    return (
        <div className="mx-auto rounded-circle border-white" style={lightStyles} onClick={() => id === idChecking ? IdCheckingFunction(0) : IdCheckingFunction(id)} >
        </div >
    );
}