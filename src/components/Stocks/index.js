import { Redirect, useHistory } from "react-router-dom";

let loggedIn = true;

function Stocks() {
  if (loggedIn === false) return <Redirect to="/not-logged-in" />;
  const handleClick = () => {
    window.alert("Sending info to the DB!");
    history.push("/");
  };
  const history = useHistory();
  return (
    <div className="comp orange">
      <h1>Stocks Component</h1>
      <button onClick={handleClick}>Home</button>
    </div>
  );
}

export default Stocks;
