import React from "react";
import { redirect } from "react-router-dom";
import GetStartedForm from "../GetStartedForm";
import { toast } from "react-toastify";

const GetStarted = () => {
  return <GetStartedForm />;
};

export default GetStarted;

export async function action({ request, params }) {
  const data = await request.formData();

  const authData = {
    name: data.get("name"),
    email: data.get("email"),
    password: data.get("password"),
    passwordConfirm: data.get("passwordConfirm"),
  };
  console.log(authData);

  const response = await fetch(`http://127.0.0.1:5000/api/v1/users/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(authData),
  });
  if (response.status === 500 || response.status === 422) {
    console.log(response);
    return response;
  }

  const res = await response.json();

  if (res.status === "success") {
    toast.success("account created successfully..");
  }

  return redirect("/dashboard");
}
