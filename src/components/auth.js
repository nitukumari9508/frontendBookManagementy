import { useEffect, useState } from "react";
import axios from "axios";

function withAuth(WrappedComponent) {
  return function(props) {
    const [authenticated, setAuthenticated] = useState(false);

    useEffect(() => {
      const token = localStorage.getItem("token");
      if (!token) {
        setAuthenticated(false);
      } else {
        axios
          .get("/api/auth", {
            headers: {
              Authorization: `Bearer ${token}`
            }
          })
          .then(() => {
            setAuthenticated(true);
          })
          .catch(() => {
            setAuthenticated(false);
          });
      }
    }, []);

    return <WrappedComponent authenticated={authenticated} {...props} />;
  };
}
