"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";

import Link from "next/link";
import Image from "next/image";
import Input from "../shared/input";
import Button from "../shared/button";
import Logo from "../shared/logo";
import { loginUser, registerUser } from "@/actions/auth.actions";

interface AuthFormProps {
  type: "Login" | "Register";
}

export default function AuthForm({ type }: AuthFormProps) {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
  
    const formData = new FormData();
    
    formData.append("email", email);
    formData.append("password", password);
    
    console.log("Form submitted with:", formData);
    
    if (type === "Register") {
      try {
        formData.append("username", username);
  
        const newUser = await registerUser(formData);
        toast.success("Registered Successfully!");
  
        router.push("/feed");
  
        console.log("Response: ", newUser);
      } catch (error) {
        router.refresh();
        toast.error("Permission denied!");
        console.error("Error:", error);
      }
    }
  
    if (type === "Login") {
      try {
        const user = await loginUser(formData);
        toast.success("Logged In Successfully!");
  
        router.push("/feed");
  
        console.log("Response: ", user);
      } catch (error) {
        router.refresh();
        toast.error("Permission denied!");
        console.error("Error:", error);
      }
    }
  };  

  return (
    <div className="flex flex-row justify-center items-center h-full w-screen">
      <form
        onSubmit={handleSubmit}
        className="h-full w-full md:w-2/5 py-16 px-8 md:px-16  flex flex-col justify-center"
      >
        <div className="flex items-center justify-center mb-5">
          <p className="text-3xl">
            {type === "Register"
              ? "Create new account!"
              : "Log In to your Account!"}
          </p>
        </div>
        <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300"></div>
        {type === "Register" ? (
          <div className="mb-4">
            <Input
              placeholder="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              name="username"
              id="username"
            />
          </div>
        ) : (
          ""
        )}
        <div className="mb-4">
          <Input
            placeholder="email"
            // disabled={}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            name="email"
            id="email"
          />
        </div>
        <div className="mb-4">
          <Input
            placeholder="password"
            // disabled={}
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            name="password"
            id="password"
          />
        </div>
        <div className="text-center">
          <Button
            label={type === "Register" ? "Register" : "Log In"}
            fullWidth
            large
          />
          <p className="mb-0 mt-4 pt-1 text-sm font-medium text-center">
            {type === "Register"
              ? "Already have an account?"
              : "Don't have an account?"}
            <Link
              href={type === "Register" ? "/login" : "/register"}
              className="ml-2 text-indigo-700 transition duration-150 ease-in-out hover:text-indigo-800 focus:text-indigo-800 active:text-indigo-600 cursor-pointer"
            >
              {type === "Register" ? "Log In" : "Create Account"}
            </Link>
          </p>
        </div>
      </form>
      <div className="hidden md:flex h-screen w-3/5 bg-secondary p-4" />
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
}
