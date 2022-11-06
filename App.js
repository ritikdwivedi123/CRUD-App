import {Grid} from "@mui/material";
import { useState, useEffect } from "react";
import NavBar from "./Components/NavBar"
import PostCard from "./Components/PostCard";
import AddPost from "./Components/AddPost"
import "./App.css"

export default function App() {
  const [blogs, setBlogs] = useState([]);
  const getPosts = async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    const data = await response.json();
    setBlogs(data);
  };
  useEffect(() => {
    getPosts();
  }, []);
  
  const onAdd = async (title, userId, body) => {
    await fetch("`https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        title: title,
        userId: userId,
        body: body
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => {
        if (res.status !== 201) {
          return;
        } else {
          return res.json();
        }
      })
      .then((data) => {
        setBlogs((users) => [...users, data]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
    <NavBar/>
    <AddPost onAdd={onAdd}/>
    <Grid sx={{ flexGrow: 1 }} container spacing={2}>
      <Grid item xs={12}>
        <Grid container justifyContent="center" spacing={2} mt={2}>
          {blogs?.map((blog) => {
            return (
              <Grid key={blog.id} item>
                <PostCard blog={blog} />
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    </Grid>
    </>
  );
}
