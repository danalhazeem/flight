import { useState } from "react";
import Head from "next/head";
import authService from "@/services/auth.service";
import "bootstrap/dist/css/bootstrap.min.css";
import { useRouter } from "next/router";
import Link from "next/link";

export default function RegisterPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState(null);

    const router = useRouter();

    const handleEmailChange = (event) => setEmail(event.target.value);
    const handlePasswordChange = (event) => setPassword(event.target.value);

    function handleSubmit(event) {
        event.preventDefault();
        authService
            .register(email, password)
            .then((data) => {
                setMessage({ type: "success", content: "Registered successfully, redirecting..." });
                setTimeout(() => router.push("/login"), 2000);
            })
            .catch((error) => {
                console.error("Full error object:", error); // Debugging output

                if (error.response && error.response.data) {
                    const { error: errorField } = error.response.data;
                    const content = errorField?.password ? errorField.password : errorField;
                    setMessage({
                        type: "danger",
                        content: content?.charAt(0).toUpperCase() + content?.substring(1) || "An error occurred"
                    });
                } else if (error.request) {
                    // The request was made but no response was received
                    setMessage({
                        type: "danger",
                        content: "No response from the server. Please try again later."
                    });
                } else {
                    // Something else caused the error
                    setMessage({
                        type: "danger",
                        content: "An unexpected error occurred. Please check your internet connection."
                    });
                }
            });
    }

    return (
        <>
            <Head>
                <title>Flight Booking System - Register</title>
                <meta name="description" content="A Flight Booking System application built using Next.js & Spring Cloud" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <main className="container d-flex flex-column align-items-center mt-4 pt-4">
                <h1 className="heading boldest">Register</h1>
                <div className="row mt-4 justify-content-center">
                    <form className="col mt-4 d-flex flex-column align-items-center text-center" onSubmit={handleSubmit}>
                        <input
                            type="email"
                            aria-label="Email"
                            className="form-control"
                            placeholder="Email"
                            value={email}
                            onChange={handleEmailChange}
                            required
                        />
                        <input
                            type="password"
                            aria-label="Password"
                            className="form-control mt-2"
                            placeholder="Password"
                            value={password}
                            onChange={handlePasswordChange}
                            required
                        />
                        <input type="submit" className="form-control btn btn-dark mt-2" value="Register" />
                        {message ? <span className={`mt-3 text-${message.type}`}>{message.content}</span> : null}
                        <Link href="/login" className="text-black">
                            Login
                            </Link>
                    </form>
                </div>
            </main>
        </>
    );
}
