import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
    
    //let valueArray = props.dataPoints.map( dataPoint => dataPoint.value );
    //let maxVal = Math.max(...valueArray);
    let cita = 3000;

    return (
        <div className="chart"> {
        props.dataPoints.map( (dataPoint) => (
            <ChartBar
                key={dataPoint.label}
                value={dataPoint.value}
                maxValue={cita}
                label={dataPoint.label}
            />
         ) ) }
        </div>
    );

}

export default Chart;