import { useState } from "react";
const Forms = () => {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);
    console.log("Submitted");
    alert(`username: ${username},
      email: ${email},
      password: ${password}`);
    setEmail("");
    setPassword("");
    setUserName("");
  };
  const handleUserName = (e) => {
    // console.log(e.target.value);
    setUserName(e.target.value);
  };
  return (
    <form onSubmit={handleSubmit}>
      <h1 className="text-danger mb-5">FORMS</h1>
      <div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">
            UserName: <span className="text-danger fs-3">{username} </span>
          </label>
          <input
            type="text"
            className="form-control"
            id="username"
            value={username}
            onChange={handleUserName}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">
            Email address: <span className="text-danger fs-3">{email} </span>
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </div>
    </form>
  );
};

export default Forms;
