import React, { useState } from "react";
import NavBar from "./NavBar";
import "../css/home.css";
import Item from "./Item";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import authHeader from "../services/auth-header";

const queryClient = new QueryClient();

function Home(props) {
  return (
    <QueryClientProvider client={queryClient}>
      <Example active={props.active} />
    </QueryClientProvider>
  );
}

function Example(props) {
  const [user, setUser] = useState({});
  const [keyword, setKeyword] = useState("");
  const { isLoading, error, data } = useQuery(["repoData", keyword], () =>
    fetch(`http://localhost:8080/api/v1/books/?keyword=${keyword}`, {
      headers: authHeader(),
    }).then((res) => res.json())
  );
  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;
  return (
    <div>
      <NavBar
        active={props.active}
        changeKeyword={setKeyword}
        showSearchBar={true}
      />
      <h1 className="text-center">Library</h1>
      <img
        style={{ height: "450px", objectFit: "cover" }}
        className="w-100 img-fluid"
        src="https://images.pexels.com/photos/2041540/pexels-photo-2041540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt=""
      />
      <ul className="d-flex flex-wrap justify-content-start m-3">
        {data.length === 0 ? (
          <h5>No books exist</h5>
        ) : (
          data.map((book) => (
            <li key={book.id} className="m-1">
              <Item book={book} />
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default Home;
