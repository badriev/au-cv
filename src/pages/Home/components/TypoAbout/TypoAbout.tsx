import {PropsWithChildren} from "react";
import classes from "./TypoAbout.module.css";

const TypoAbout = ({ children }: PropsWithChildren) => {
  return <p className={classes.typoAbout}>{children}</p>;
};

export default TypoAbout;
