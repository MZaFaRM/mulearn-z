import { Link } from "react-router-dom";

// TODO: Redesign

const NotFound = () => {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                height: "100vh"
            }}
        >
            <h1 style={{ fontSize: "10rem" }}>404</h1>
            <p>Page not found</p>
            <Link
                to="/"
                style={{
                    marginTop: "1rem",
                    backgroundColor: "#456FF6",
                    color: "white",
                    padding: "0.5rem 1rem",
                    borderRadius: "0.5rem"
                }}
            >
                Go back to home
            </Link>
        </div>
    );
};

export default NotFound;
