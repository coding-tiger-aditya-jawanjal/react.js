import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const About = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, password);
    // https://www.backend.com/api/signup
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <form>
      <h1>Register !</h1>
      <input
        type="text"
        placeholder="Enter Name here..."
        autoComplete="name"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      <input
        type="email"
        placeholder="Enter Email here..."
        autoComplete="email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <div className="pass">
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Enter pasword here..."
          autoComplete="current-password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <div className="icon">
          {showPassword ? (
            <FaEye size={28} onClick={() => setShowPassword(false)} />
          ) : (
            <FaEyeSlash size={28} onClick={() => setShowPassword(true)} />
          )}
        </div>
      </div>
      <button onClick={handleSubmit}>Submit</button>
    </form>
  );
};

export default About;
