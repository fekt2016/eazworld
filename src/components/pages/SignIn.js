import React from "react";
import { toast } from "react-toastify";
import { json, redirect } from "react-router-dom";
import SignInForm from "../SignInForm";

const SignIn = () => {
  return <SignInForm />;
};

export default SignIn;

export async function action({ request, params }) {
  const data = await request.formData();

  const authData = {
    email: data.get("email"),
    password: data.get("password"),
  };

  const response = await fetch(
    "http://127.0.0.1:5000/api/v1/users/login",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(authData),
    },
    { credentials: "include" }
  );
  if (response.status === 401 || response.status === 422) {
    console.log(response);
    return response;
  }

  if (!response.ok) {
    throw json({ message: "Something went wrong" }, { status: 500 });
  }
  const res = await response.json();

  if (res.status === "success") {
    localStorage.setItem("token", res.token);
    toast.success("Login successfully..");
  }

  return redirect("/dashboard");
}
