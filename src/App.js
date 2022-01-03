import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(10);
  const handleIncrease = () => {
    // const newCount = count + 1;
    setCount(count + 1);
  };
  function Users() {
    const [users, setUser] = useState([]);
    useEffect(() => {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => res.json())
        .then((data) => setUser(data));
    }, []);
    return (
      <div>
        <h3>Dynamic User: {users.length}</h3>
        {users.map((user) => (
          <li>{user.name}</li>
        ))}
      </div>
    );
  }
  return (
    <div className="App">
      <h1>Count:{count}</h1>
      <Users></Users>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
      <button onClick={handleIncrease}>Increase</button>
    </div>
  );
}

export default App;
