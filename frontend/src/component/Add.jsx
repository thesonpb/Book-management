import React, { useState } from "react";
import NavBar from "./NavBar";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
  useMutation,
} from "react-query";
import axios from "axios";
import authHeader from "../services/auth-header";

const queryClient = new QueryClient();

function Add(props) {
  return (
    <QueryClientProvider client={queryClient}>
      <Example props={props} />
    </QueryClientProvider>
  );
}

function Example(props) {
  const [book, setBook] = useState({});

  const mutation = useMutation((newBook) => {
    return axios.post("http://localhost:8080/api/v1/addbooks", newBook, {
      headers: authHeader(),
    });
  });

  return (
    <div>
      <NavBar active={props.props.active} showSearchBar={false} />
      <div className="d-flex align-items-center  flex-column">
        <h1 className="text-center">Add a book</h1>
        {mutation.isLoading && <div>Adding...</div>}
        {mutation.isError && <div>An error occured</div>}
        {mutation.isSuccess && <div>Book added</div>}
        <form
          className="w-25"
          onSubmit={(e) => {
            e.preventDefault();
            mutation.mutate(book);
          }}
        >
          <div className="form-group">
            <label>Title</label>
            <input
              type="text"
              className="form-control"
              name="title"
              onChange={(e) =>
                setBook((previous) => {
                  return { ...previous, title: e.target.value };
                })
              }
            />
          </div>
          <div className="form-group">
            <label>Author</label>
            <input
              type="text"
              className="form-control"
              name="author"
              onChange={(e) =>
                setBook((previous) => {
                  return { ...previous, author: e.target.value };
                })
              }
            />
          </div>
          <div className="form-group">
            <label>Year</label>
            <input
              type="text"
              className="form-control"
              name="year"
              onChange={(e) =>
                setBook((previous) => {
                  return { ...previous, year: e.target.value };
                })
              }
            />
          </div>
          <div className="form-group">
            <label>Description</label>
            <input
              type="text"
              className="form-control"
              name="description"
              onChange={(e) =>
                setBook((previous) => {
                  return { ...previous, description: e.target.value };
                })
              }
            />
          </div>
          <div className="form-group">
            <label>Number of books left</label>
            <input
              type="text"
              className="form-control"
              name="numberOfBooksLeft"
              onChange={(e) =>
                setBook((previous) => {
                  return { ...previous, numberOfBooksLeft: e.target.value };
                })
              }
            />
          </div>
          <div className="form-group">
            <label>Total borrows</label>
            <input
              type="text"
              className="form-control"
              name="totalBorrow"
              onChange={(e) =>
                setBook((previous) => {
                  return { ...previous, totalBorrow: e.target.value };
                })
              }
            />
          </div>
          <div className="form-group">
            <label>Image link</label>
            <input
              type="text"
              className="form-control"
              name="image"
              onChange={(e) =>
                setBook((previous) => {
                  return { ...previous, image: e.target.value };
                })
              }
            />
          </div>
          <button type="submit" className="btn btn-primary mt-2">
            Add
          </button>
        </form>
      </div>
    </div>
  );
}

export default Add;
