import ChartBar from "./ChartBar";
import "./Chart.css";

function Chart(props) {
  let maxVal =0;
   props.dataPoints.forEach(element => {
    maxVal = Math.max(maxVal, element.value);  
  });
  // console.log(maxVal);
  return (
    <div className="chart">
      {props.dataPoints.map((ele) => {
        return <ChartBar value={ele.value} maxValue={maxVal} label={ele.label} />;
      })}
    </div>
  );
}

export default Chart;