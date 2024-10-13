
import React from 'react';
import classes from './Section.module.css'

type SectionProps = {
  style?: Partial<React.CSSProperties>
}
const Section = ({style, children}: React.PropsWithChildren<SectionProps>) => {

  return <div className={classes.section} style={style}>
    {children}
  </div>
}

export default Section;
