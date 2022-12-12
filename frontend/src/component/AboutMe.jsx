import React from "react";
import "../css/aboutme.css";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import authHeader from "../services/auth-header";

const queryClient = new QueryClient();

function AboutMe() {
  return (
    <QueryClientProvider client={queryClient}>
      <Example />
    </QueryClientProvider>
  );
}

function Example() {
  const { isLoading, error, data } = useQuery("repoData", () =>
    fetch("https://random-data-api.com/api/users/random_user", {
      headers: authHeader(),
    }).then((res) => res.json())
  );

  function format(inputDate) {
    var date = new Date(inputDate);
    if (!isNaN(date.getTime())) {
      return (
        date.getDate() + 1 + "/" + date.getMonth() + "/" + date.getFullYear()
      );
    }
  }

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <div>
      <h1>About Me</h1>
      <div className="">
        <div className="d-flex justify-content-center">
          <div className="w-50 p-4">
            <p>
              <strong>First name:</strong> {data.first_name}
            </p>
            <p>
              <strong>Last name:</strong> {data.last_name}
            </p>
            <p>
              <strong>DOB:</strong> {format(data.date_of_birth)}
            </p>
            <p>
              <strong>Email:</strong> {data.email}
            </p>
          </div>
          <div className="w-50 p-4">
            <p>
              <strong>Job:</strong> {data.employment.title}
            </p>
            <p>
              <strong>Key skill:</strong> {data.employment.key_skill}
            </p>
            <p>
              <strong>Credit card:</strong> {data.credit_card.cc_number}
            </p>
            <p>
              <strong>City:</strong> {data.address.city}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AboutMe;
