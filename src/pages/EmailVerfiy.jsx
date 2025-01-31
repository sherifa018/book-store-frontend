import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { SERVER_URL } from "../../config";
const EmailVerfiy = () => {
  const [verfied, setverfied] = useState(false);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const tokenValue = searchParams.get("token");
    console.log(tokenValue);
    axios
      .get(`${SERVER_URL}/user/verify?token=${tokenValue}`)
      .then(() => {
        setverfied(true);
      })
      .catch((error) => {
        alert("An error happened pls check console");
        console.log(error);
      });
  }, []);

  return (
    <div
      className="d-flex min-vh-100 align-items-center justify-content-center bg-light"
      style={{
        width: "100%",
        backgroundColor: "red",
      }}
    >
      <div
        className="card p-4 shadow-lg"
        style={{ maxWidth: "400px", width: "100%" }}
      >
        <h1 className="text-center mb-3">
          {verfied ? "Email Verification" : "Email Verfiying..."}
        </h1>
        {verfied && (
          <p className="text-muted text-center mb-4">
            Your email has been successfully verified. Thank you for confirming
            your account.
          </p>
        )}
        <div className="text-center">
          {verfied && (
            <Link to="/" className="btn btn-primary">
              Go to Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default EmailVerfiy;
