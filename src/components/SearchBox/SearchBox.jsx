/* eslint-disable react/prop-types */

import { useId } from "react";
import css from "./SearchBox.module.css";

export default function SearchBox({ value, index }) {
  const id = useId();
  return (
    <div className={css.container}>
      <label htmlFor={id}>Find contacts by name</label>
      <input
        className={css.input}
        type="text"
        value={value}
        id={id}
        onChange={(inx) => index(inx.target.value)}
      ></input>
    </div>
  );
}
