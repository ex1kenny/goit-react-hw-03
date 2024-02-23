import { useState, useEffect } from "react";
import css from "./App.module.css";
import ContactList from "../ContactList/ContactList";
import SearchBox from "../SearchBox/SearchBox";
import ContactForm from "../ContactForm/ContactForm";

const initialInfoUser = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];

function App() {
  const [users, setUsers] = useState(() => {
    const savedUsers = JSON.parse(window.localStorage.getItem("users-info"));
    return savedUsers !== null &&
      Array.isArray(savedUsers) &&
      savedUsers.length > 0
      ? savedUsers
      : initialInfoUser;
  });

  const deleteUser = (id) => {
    setUsers((prevUsers) => {
      return prevUsers.filter((user) => user.id !== id);
    });
  };

  const [input, setInput] = useState("");

  const handleUsers = users.filter((user) =>
    user.name.toLowerCase().includes(input.toLowerCase())
  );

  const addUser = (user) => {
    setUsers((prevUsers) => {
      return [...prevUsers, { id: Date.now(), ...user }];
    });
  };

  useEffect(() => {
    window.localStorage.setItem("users-info", JSON.stringify(users));
  }, [users]);

  return (
    <div>
      <h1 className={css.p}>Phonebook</h1>
      <ContactForm addUser={addUser} />
      <SearchBox value={input} index={setInput} />
      <ContactList items={handleUsers} onReset={deleteUser} />
    </div>
  );
}

export default App;
