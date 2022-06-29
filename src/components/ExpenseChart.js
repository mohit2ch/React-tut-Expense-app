import Chart from "./Chart/Chart";
function ExpenseChart(props) {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];
  const ChartDataPoints = [];
  months.forEach((ele) => {
    let obj = {
      label: ele,
      value: 0,
    };
    ChartDataPoints.push(obj);
  });

  props.expenses.forEach((ele) => {
    const month = ele.date.getMonth();
    ChartDataPoints[month].value += ele.cost;
  });
//   console.log('datapoints', ChartDataPoints);
  return <Chart dataPoints={ChartDataPoints} />;
}

export default ExpenseChart;
