import './ExpenseDate.css';

function ExpenseDate(props){
    const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
    return (
        <div className="expense-date">
            <span className="day">{props.date.getDate()}</span>
            <span className="month">{month[props.date.getMonth()]}</span>
            <span className="year">{props.date.getFullYear()}</span>
        </div>
    );
}
export default ExpenseDate;