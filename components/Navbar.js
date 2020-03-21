import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {Link} from 'react-router-dom'
import fire from "../fire";

export default function Navbar() {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      <Link to="/signup">Sign Up</Link>
    </div>
  )
}
