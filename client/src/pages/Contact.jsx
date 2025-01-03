import { useEffect, useState } from "react";
import Cookies from "js-cookie";

const Contact = () => {
  const [name, setName] = useState("");
  const [storageName, setStorageName] = useState("");

  const handleClick = () => {
    // local storage
    localStorage.setItem("name", name);

    // Session Storage
    sessionStorage.setItem("name", name);

    // cookies
    Cookies.set("name", name, { expires: 1 });
  };

  const handleDelete = () => {
    // localStorage.clear();
    localStorage.removeItem("name");

    // sessionStorage.clear();
    sessionStorage.removeItem("name");

    // cookies
    Cookies.remove("name");
  };

  useEffect(() => {
    // local storage
    const l = localStorage.getItem("name");

    // session Storage
    const s = sessionStorage.getItem("name");

    // cookies
    Cookies.get("name");

    setStorageName(s);
  }, []);

  return (
    <div>
      <h1>Storing data in Storage : {storageName}</h1>
      <input
        type="text"
        placeholder="Enter name here..."
        onChange={(e) => setName(e.target.value)}
      />
      <button
        style={{
          padding: "5px 20px",
        }}
        onClick={handleClick}
      >
        Add
      </button>
      <button
        style={{
          padding: "5px 20px",
        }}
        onClick={handleDelete}
      >
        Delete
      </button>
    </div>
  );
};

export default Contact;

// MERN - MongoDB Database

/*

let token = 'kavbckabkjbkvbsakjc';

      Local             Session           Cookies
      Storage           Storage

1.    persist           persist only      we can set
                        till tab is       expiry date
                        open

*/
