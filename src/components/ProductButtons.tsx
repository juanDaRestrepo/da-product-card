import React, { CSSProperties, useContext } from "react";
import { ProductContext } from "./ProductCard";

import styles from "../styles/styles.module.css";

export interface Props {
  className?: string;
  style?: CSSProperties;
}

export const ProductButtons = ({ className, style }: Props) => {

    const {counter, increaseBy, isMaxCountReached} = useContext( ProductContext );

    return (
      <div 
        className={ `${ styles.buttonsContainer } ${ className } `}
        style={ style }
      >
        <button className={styles.buttonMinus} onClick={() => increaseBy(-1)}>
          -
        </button>
        <div className={styles.countLabel}>{counter}</div>
        <button className={`${ styles.buttonAdd } ${ isMaxCountReached && styles.disabled  }`} onClick={() => increaseBy(1)}>
          +
        </button>
      </div>
    );
  };