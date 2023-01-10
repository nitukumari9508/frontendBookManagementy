import { useState } from "react";

 export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const handleChange = event => {
    const { name, value } = event.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = event => {
    event.preventDefault();
    // make API call to login
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        name="email"
        id="email"
        value={formData.email}
        onChange={handleChange}
      />
      <label htmlFor="password">Password:</label>
      <input
        type="password"
        name="password"
        id="password"
        value={formData.password}
        onChange={handleChange}
      />
      <button type="submit">Log In</button>
    </form>
  );
}
