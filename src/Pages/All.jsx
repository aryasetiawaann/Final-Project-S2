import { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import Navbar from "../components/navbar";

export default function All() {
  const location = useLocation();
  return (
    <div>
      <Navbar />
      <h1>Test All</h1>
    </div>
  );
}
