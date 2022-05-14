import React, { useState } from "react";
import { useParams } from "react-router-dom";
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

function EditBook() {
  return (
    <QueryClientProvider client={queryClient}>
      <Example />
    </QueryClientProvider>
  );
}
function Example() {
  const [book, setBook] = useState({});
  const { id } = useParams();

  const mutation = useMutation(() => {
    return axios.put(`http://localhost:8080/api/v1/editbooks/${id}`, book, {
      headers: authHeader(),
    });
  });

  const { isLoading, error, data } = useQuery("repoData", () =>
    fetch(`http://localhost:8080/api/v1/books/${id}`, {
      headers: authHeader(),
    }).then((res) => res.json())
  );

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <div>
      <NavBar showSearchBar={false} />
      <div className="row">
        <div className="col-5">
          <img src={data.image} alt="" className="w-100 book-cover" />
        </div>
        <div className="col-7">
          <h1>
            {data.title} {"(" + data.year + ")"}
          </h1>
          <div>
            <i>By </i>
            <h6 style={{ display: "inline" }}>{data.author}</h6>
          </div>
          <p>{data.description}</p>
          {mutation.isLoading && <div>Updating...</div>}
          {mutation.isError && <div>An error occured</div>}
          {mutation.isSuccess && <div>Book updated</div>}
          <form
            className="form-control w-25"
            onSubmit={(e) => {
              e.preventDefault();
              mutation.mutate();
              window.location.href = `/books/${id}`;
            }}
          >
            <div className="form-group m-2">
              <label>Available</label>
              <input
                type="text"
                className="form-control"
                name="available"
                defaultValue={data.numberOfBooksLeft}
                onChange={(e) =>
                  setBook(() => {
                    return { ...data, numberOfBooksLeft: e.target.value };
                  })
                }
              />
            </div>
            <div className="form-group m-2">
              <label>Total borrows</label>
              <input
                type="text"
                className="form-control"
                name="total_borrows"
                defaultValue={data.totalBorrow}
                onChange={(e) =>
                  setBook(() => {
                    return { ...data, totalBorrow: e.target.value };
                  })
                }
              />
            </div>
            <button type="submit" className="btn btn-success m-2">
              Update
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditBook;
