import * as React from "react";
import { HelloProps } from './Hello.interface';
const styles = require('./Hello.module.scss');

export const Hello = (props: HelloProps) => (
  <h1 className={styles.title}>Using {props.compiler} in <span>{props.framework}</span></h1>
);