import React from "react";

function Signup() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Signup</h2>
      <form>
        <input type="text" placeholder="Name" /><br /><br />
        <input type="email" placeholder="Email" /><br /><br />
        <input type="password" placeholder="Password" /><br /><br />
        <button type="submit">Signup</button>
      </form>
    </div>
  );
}

export default Signup;
