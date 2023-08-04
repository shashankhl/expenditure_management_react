import "./Card.css";

//props. children is a special prop, automatically passed to every component, that can be used to render the content included between the opening and closing tags when invoking a component.

function Card(props) {
  const classes = "card " + props.className;
  return <div className={classes}>{props.children}</div>;
}

export default Card;
