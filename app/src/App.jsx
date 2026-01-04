import { useEffect, useState } from "react";
import { API_URL } from "./services/api";

function App() {
  const [status, setStatus] = useState("");

  useEffect(() => {
    fetch(`${API_URL}/health`)
      .then(res => res.json())
      .then(data => setStatus(data.status));
  }, []);

  return <h1>API Status: {status}</h1>;
}

export default App;
