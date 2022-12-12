import axios from "axios";
import React, { useState } from "react";
import {
    QueryClient,
    QueryClientProvider,
    useMutation,
    useQuery,
} from "react-query";
import { useParams } from "react-router-dom";
import authHeader from "../services/auth-header";
import NavBar from "./NavBar";

const queryClient = new QueryClient();

function User() {
    return (
        <QueryClientProvider client={queryClient}>
            <Example />
        </QueryClientProvider>
    );
}

function Example() {
    const [user, setUser] = useState({});
    const [userreview, setUserreview] = useState([]);
    const { id } = useParams();

    const deleteReviewMutation = useMutation((bookId) => {
        return axios.delete(
            `http://localhost:8080/api/v1/deletereviewbybookidanduserid/${bookId}/${id}`,
            {
                headers: authHeader(),
            }
        );
    });

    const {
        isLoading: userLoading,
        error: userError,
        data: userData,
    } = useQuery("loadUser", () => {
        fetch(`http://localhost:8080/api/v1/users/${id}`, {
            headers: authHeader(),
        })
            .then((res) => res.json())
            .then((data) => setUser(data));
    });

    const { isLoading, error, data } = useQuery("loadUserReview", () => {
        fetch(`http://localhost:8080/api/v1/books/reviews/${id}`, {
            headers: authHeader(),
        })
            .then((res) => res.json())
            .then((data) => setUserreview(data));
    });
    return (
        <div>
            <NavBar showSearchBar={false} />
            <div className="d-flex align-items-center flex-column">
                <div className="w-75">
                    <div className="row border">
                        <div className="col-3 p-4">
                            <img
                                className="w-100"
                                src="https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png"
                                alt=""
                            />
                        </div>
                        <div className="col-9 p-4">
                            <h5>Name: {user.name}</h5>
                        </div>
                    </div>
                    <hr />
                    <h3>Reviews</h3>
                    {userLoading && <div>Loading user...</div>}
                    {userError && (
                        <div>An error occured {userError.message}</div>
                    )}
                    {userreview.length !== 0 ? (
                        userreview.map((review) => (
                            <div key={review.bookId}>
                                <div className="row">
                                    <div className="col-3">
                                        <a href={`/books/${review.bookId}`}>
                                            <img
                                                style={{ maxHeight: "20rem" }}
                                                className="w-100"
                                                src={review.image}
                                                alt=""
                                            />
                                        </a>
                                    </div>
                                    <div className="col-2">
                                        <a href={`/books/${review.bookId}`}>
                                            <h5>{review.title}</h5>
                                        </a>
                                        <h6>{review.author}</h6>
                                    </div>
                                    <div className="col-7">
                                        <span>
                                            <small>
                                                <i>{review.created_at}</i>
                                            </small>
                                        </span>
                                        <br />
                                        <p>{review.content}</p>
                                        <span>
                                            {/* {review.like} <i className="fa-solid fa-thumbs-up"></i> */}
                                            <button
                                                className="btn btn-danger m-1"
                                                onClick={() => {
                                                    deleteReviewMutation.mutate(
                                                        review.bookId
                                                    );
                                                    window.location.href = `/users/${id}`;
                                                }}
                                            >
                                                Delete
                                            </button>
                                        </span>
                                    </div>
                                </div>
                                <hr />
                            </div>
                        ))
                    ) : (
                        <div>Người dùng này chưa viết đánh giá nào</div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default User;
