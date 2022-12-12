import axios from "axios";
import React, { useState } from "react";
import { QueryClient, QueryClientProvider, useMutation } from "react-query";
import { Navigate } from "react-router-dom";

const queryClient = new QueryClient();

function Login() {
    return (
        <QueryClientProvider client={queryClient}>
            <Example />
        </QueryClientProvider>
    );
}

function Example() {
    const [user, setUser] = useState({ username: "", password: "", role: [] });

    const mutation = useMutation(
        (user) => {
            return axios.post("http://localhost:8080/api/auth/signin", user);
        },
        {
            onSuccess: (data) => {
                localStorage.setItem("user", JSON.stringify(data.data));
            },
        }
    );

    return (
        <section className=" vh-100" style={{ backgroundColor: "#508bfc" }}>
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="">
                        <div
                            className="card shadow-2-strong"
                            style={{ borderRadius: "1rem" }}
                        >
                            <form
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    mutation.mutate(user);
                                }}
                                className="card-body p-4 text-center"
                            >
                                <h3 className="mb-5">Sign in</h3>

                                <div className="form-outline mb-4">
                                    <input
                                        type="text"
                                        className="form-control form-control-lg"
                                        placeholder="Username"
                                        required
                                        onChange={(e) => {
                                            setUser((previous) => {
                                                return {
                                                    ...previous,
                                                    username: e.target.value,
                                                };
                                            });
                                        }}
                                    />
                                </div>

                                <div className="form-outline mb-4">
                                    <input
                                        type="password"
                                        className="form-control form-control-lg"
                                        placeholder="Password"
                                        required
                                        onChange={(e) => {
                                            setUser((previous) => {
                                                return {
                                                    ...previous,
                                                    password: e.target.value,
                                                };
                                            });
                                        }}
                                    />
                                </div>

                                <button
                                    className="btn btn-primary btn-block"
                                    type="submit"
                                >
                                    Login
                                </button>
                                {mutation.isLoading ? (
                                    <div>Logging in</div>
                                ) : null}
                                {mutation.isError ? (
                                    <div>
                                        An error occurred:{" "}
                                        {mutation.error.message}
                                    </div>
                                ) : null}
                                {mutation.isSuccess ? (
                                    <Navigate to={"/home"} replace />
                                ) : null}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Login;
