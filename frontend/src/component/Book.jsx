import React, { useState } from "react";
import { useParams, Navigate } from "react-router-dom";
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

function Book() {
  return (
    <QueryClientProvider client={queryClient}>
      <Example />
    </QueryClientProvider>
  );
}
function Example() {
  const userId =
    JSON.parse(localStorage.getItem("user")) !== null
      ? JSON.parse(localStorage.getItem("user")).id
      : "";
  const { id } = useParams();
  const [newreview, setNewreview] = useState({
    userId: userId,
    bookId: id,
    content: "",
    like: 0,
    user: {},
    book: {},
  });
  const [review, setReview] = useState([]);

  const [editing, setEditing] = useState(false);

  const mutation = useMutation(() => {
    return axios.delete(`http://localhost:8080/api/v1/deletebooks/${id}`, {
      headers: authHeader(),
    });
  });

  const deleteReviewMutation = useMutation(() => {
    return axios.delete(
      `http://localhost:8080/api/v1/deletereviewbybookidanduserid/${id}/${userData.id}`,
      {
        headers: authHeader(),
      }
    );
  });

  const editReviewMutation = useMutation(() => {
    return axios.put(
      `http://localhost:8080/api/v1/updatereviewbybookidanduserid/${id}/${userData.id}`,
      newreview,
      {
        headers: authHeader(),
      }
    );
  });

  const {
    isLoading: userLoading,
    error: userError,
    data: userData,
  } = useQuery("loadUser", () =>
    fetch(
      `http://localhost:8080/api/v1/fulluser/${
        JSON.parse(localStorage.getItem("user")).id
      }`,
      {
        headers: authHeader(),
      }
    ).then((res) => res.json())
  );

  const newReviewMutation = useMutation(() => {
    return axios.post(`http://localhost:8080/api/v1/reviews`, newreview, {
      headers: authHeader(),
    });
  });

  const {
    isLoading: bookLoading,
    error: bookError,
    data: bookData,
  } = useQuery("loadBook", () =>
    fetch(`http://localhost:8080/api/v1/books/${id}`, {
      headers: authHeader(),
    }).then((res) => res.json())
  );

  const { isLoading, error, data } = useQuery("loadReview", () =>
    fetch(`http://localhost:8080/api/v1/username/review/${id}`, {
      headers: authHeader(),
    })
      .then((res) => res.json())
      .then((data) => setReview(data))
  );

  if (bookLoading) return "Loading...";

  if (bookError) return "An error has occurred: " + bookError.message;

  if (mutation.isLoading) return <div>Deleting</div>;
  if (mutation.isError) return <div>An error occured</div>;
  if (mutation.isSuccess) return <Navigate to="/" replace />;

  return (
    <div>
      <NavBar showSearchBar={false} />
      <div className="d-flex align-items-center flex-column">
        <div className="row w-75 ">
          <div className="col-5">
            <img src={bookData.image} alt="" className="w-100 book-cover" />
          </div>
          <div className="col-7">
            <h1>
              {bookData.title} {"(" + bookData.year + ")"}
            </h1>
            <div>
              <i>By </i>
              <h6 style={{ display: "inline" }}>{bookData.author}</h6>
            </div>
            <p>{bookData.description}</p>
            <p>
              <strong>Available: </strong>
              {bookData.numberOfBooksLeft}
            </p>
            <p>
              <strong>Total borrows: </strong>
              {bookData.totalBorrow}
            </p>
            {localStorage.getItem("user") !== null ? (
              JSON.parse(localStorage.getItem("user")).roles.includes(
                "ROLE_ADMIN"
              ) ? (
                <div className="d-flex">
                  <a href={`/edit/${id}`} className="btn btn-warning m-1">
                    Edit
                  </a>
                  <button
                    onClick={() => mutation.mutate()}
                    className="btn btn-danger m-1"
                  >
                    Delete
                  </button>
                </div>
              ) : (
                <></>
              )
            ) : (
              <></>
            )}

            <h4>Đánh giá</h4>
            {isLoading && <div>Loading review...</div>}
            {error && <div>Error occured while loading review...</div>}
            {review.length !== 0 ? (
              review.map((review) => (
                <div key={review.userId}>
                  <div className="mt-4">
                    <h6 style={{ display: "inline-block" }}>
                      <a href={`/users/${review.userId}`}>{review.name} - </a>
                    </h6>
                    <span>
                      <small>
                        <i>{review.createdAt}</i>
                      </small>
                    </span>
                    <br />
                    {userData ? (
                      userData.id === review.userId ? (
                        editing ? (
                          <input
                            className="form-control"
                            type="text"
                            defaultValue={review.content}
                            onChange={(e) => {
                              setNewreview((previous) => {
                                return { ...previous, content: e.target.value };
                              });
                              setNewreview((previous) => {
                                return {
                                  ...previous,
                                  user: userData,
                                  book: bookData,
                                };
                              });
                            }}
                          />
                        ) : (
                          <p>{review.content}</p>
                        )
                      ) : (
                        <p>{review.content}</p>
                      )
                    ) : (
                      <p>{review.content}</p>
                    )}

                    <span>
                      {/* {review.likes} <i className="fa-solid fa-thumbs-up"></i> */}
                      {userData ? (
                        userData.id === review.userId ? (
                          <>
                            {editing ? (
                              <>
                                <button
                                  onClick={() => {
                                    editReviewMutation.mutate();
                                    window.location.href = `/books/${id}`;
                                  }}
                                  className="btn btn-success m-1"
                                >
                                  Save
                                </button>
                                <button
                                  onClick={() => setEditing(false)}
                                  className="btn btn-info m-1"
                                >
                                  Cancel
                                </button>
                              </>
                            ) : (
                              <button
                                onClick={() => setEditing(true)}
                                className="btn btn-warning m-1"
                              >
                                Edit
                              </button>
                            )}
                            <button
                              className="btn btn-danger m-1"
                              onClick={() => {
                                deleteReviewMutation.mutate();
                                window.location.href = `/books/${id}`;
                              }}
                            >
                              Delete
                            </button>
                          </>
                        ) : (
                          <></>
                        )
                      ) : (
                        <></>
                      )}
                    </span>
                    <hr />
                  </div>
                </div>
              ))
            ) : (
              <></>
            )}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const reviewKey = review.map((rv) => {
                  return rv.userId;
                });
                if (reviewKey.includes(userId))
                  alert("You have already posted a review");
                else {
                  if (localStorage.getItem("user") !== null) {
                    newReviewMutation.mutate();
                    window.location.href = `/books/${id}`;
                  } else alert("you have to login to post review");
                }
              }}
            >
              <h4>Viết đánh giá</h4>
              <div className="form-floating">
                <textarea
                  name="content"
                  className="form-control"
                  placeholder="Leave a comment here"
                  onChange={(e) => {
                    setNewreview((previous) => {
                      return { ...previous, content: e.target.value };
                    });
                    setNewreview((previous) => {
                      return {
                        ...previous,
                        user: userData,
                        book: bookData,
                      };
                    });
                  }}
                  style={{ height: "100px" }}
                ></textarea>
                <label>Comments</label>
              </div>
              <button type="submit" className="btn btn-primary mt-2 mb-2">
                Gửi
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Book;
