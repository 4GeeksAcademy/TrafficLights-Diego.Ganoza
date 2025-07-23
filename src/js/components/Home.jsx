import React, { useEffect, useRef } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { TrafficLights } from "./TrafficLight";
import { useState } from "react";
//create your first component
const Home = () => {

	const [idChecking, setIdChecking] = useState(0)
	const [cycleActived, setCycleActived] = useState(false);
	//const [lightsColors, setLightsColors] = useState(["green", "yellow", "red", "purple"])
	const [time, setTime] = useState(0);
	const trafficCycle = useRef(null);
	const maxtime = 6;

	const IdCheckingFunction = (id) => {
		setIdChecking(id)
	}

	const StartTrafficCycle = () => {
		if (trafficCycle.current == null) {
			trafficCycle.current = setInterval(() => {
				setTime(prev => (prev < maxtime ? prev + 1 : 0));
			}, 1000);
			setCycleActived(true);
			cycleStarted = true;
		}
	}

	const StopTrafficCycle = () => {
		if (trafficCycle.current != null) {
			clearInterval(trafficCycle.current);
			trafficCycle.current = null;
			setTime(0);
			setCycleActived(false);
			cycleStarted = false;
		}
	}

	let tercio = time / maxtime;

	return (
		<div className="text-center">
			<div className="bg-info mx-auto" style={{ width: "50%", height: " 60vh" }}>
				<div className="bg-black mx-auto my-0" style={{ width: "2%", height: "10vh" }}>
					<h1></h1>

				</div>
				<table className="bg-black mx-auto my-0 p-1 border rounded-3" style={{ width: "20%", height: "80%" }}>
					<tbody >
						<tr style={{ width: "60%" }} className="m-3">
							<td>
								<TrafficLights
									id="1"
									color="green"
									IdCheckingFunction={IdCheckingFunction}
									idChecking={idChecking}
									bool={tercio < 0.33 && cycleActived ? true : false}
								></TrafficLights>
							</td>
						</tr>
						<tr>
							<td>
								<TrafficLights
									id="2"
									color="yellow"
									IdCheckingFunction={IdCheckingFunction}
									idChecking={idChecking}
									bool={tercio < 0.66 && tercio > 0.33 && cycleActived ? true : false}
								></TrafficLights>
							</td>
						</tr>
						<tr>
							<td>
								<TrafficLights
									id="3"
									color="red"
									IdCheckingFunction={IdCheckingFunction}
									idChecking={idChecking}
									bool={tercio > 0.66 && cycleActived ? true : false}
								></TrafficLights>
							</td>
						</tr>

					</tbody>
				</table>
			</div>
			<button className="m-3 rounded-3" onClick={() => { trafficCycle.current != null ? StopTrafficCycle() : StartTrafficCycle() }}> <strong>Cycle Button</strong></button>
		</div >
	);
};

export default Home;