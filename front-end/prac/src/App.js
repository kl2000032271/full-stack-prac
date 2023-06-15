import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import { useEffect, useState } from "react";
import Post from "./Components/Post";

function App() {
  let [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      let url = "https://reqres.in/api/unknown";
      const response = await axios.get(url);
      setData(response.data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }

  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App container">
      {data.map((post, index) => {
        return (
          <Post
            // id={post.id}
            name={post.name} color = {post.color}
            // color={post.color}
            // year={post.year}
            // pantone_value={post.pantone_value}
          />
        );
      })}
    </div>
  );
}

export default App;