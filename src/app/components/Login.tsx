"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

type Props = {};

export default function Login({}: Props) {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    if (String(email) === "thawitchai" && String(password) === "13495000") {
      console.log({ email: email, password: password });
      return router.push("http://localhost:3000/admin");
    }

    if (email != "thawitchai" && password != "13495000") {
      return router.push("http://localhost:3000/client");
    }
    console.log({ email: email, password: password });
  };

  return (
    <div>
      <input type="text" onChange={(e)=>setEmail(e.target.value)} />
      <input type="text" onChange={(e)=>setPassword(e.target.value)} />
      <button onClick={handleSubmit}>Ok</button>
      
    </div>
  );
}
