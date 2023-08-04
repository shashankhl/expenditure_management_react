import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

// function ExpenseItem(props) {
// return <h2>Expense Item</h2>;
// const da = new Date();
// console.log(da);
// const expenseDate = new Date().toDateString();//toISOString()
// const expenseDate = new Date();
// const expenseTitle = "Car Insurance";
// const expenseAmount = 294.67;

// /* <!--<div>{props.date.toDateString()}</div>--> */
// const month = props.date.toLocaleString("en-US", { month: "long" });
// const day = props.date.toLocaleString("en-US", { day: "2-digit" });
// const year = props.date.getFullYear();

const ExpenseItem = (props) => {
  //function clickHandler(){}
  // const [title, setTitle] = useState(props.title);

  // const clickHandler = () => {
  //   console.log(title);
  //   setTitle("Updated!");
  // };

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          {/* <h2>{title}</h2> */}
        </div>
        <div className="expense-item__price">${props.amount}</div>
        {/* <button onClick={clickHandler}>change title</button> */}
      </Card>
    </li>
  );
};

export default ExpenseItem;
