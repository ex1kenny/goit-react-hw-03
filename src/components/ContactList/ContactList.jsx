/* eslint-disable react/prop-types */

import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

export default function ContactList({ items, onReset }) {
  return (
    <div className={css.container}>
      {items.map((item) => (
        <Contact data={item} key={item.id} onReset={onReset} />
      ))}
    </div>
  );
}
