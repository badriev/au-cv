import React from "react"
import classes from "./Button.module.css"

type ButtonProps = React.ComponentProps<"button"> & {label: string}
const Button: React.FC<ButtonProps> = (props) => {
  return <button {...props} className={classes.baseButton}>{props.label}</button>
}

export default Button;