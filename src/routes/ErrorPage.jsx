import React from "react";
import { Link } from "react-router-dom";
export default function ErrorPage() {
  return (
    <>
      <Link to="/" className="error">
        <img
          src="https://images-na.ssl-images-amazon.com/images/G/01/error/en_US/title._TTD_.png"
          alt="Sorry! We couldn't find that page. Try searching or go to Amazon's home page."
        />
        <img
          id="d"
          alt="Dogs of Amazon"
          src="https://images-na.ssl-images-amazon.com/images/G/01/error/en_US/172._TTD_.jpg"
        />
      </Link>
    </>
  );
}
