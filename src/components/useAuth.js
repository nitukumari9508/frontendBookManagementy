import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

function useAuth() {
  const [authenticated, setAuthenticated] = useState(false);
  const history = useHistory();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      history.push("/login");
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
          localStorage.removeItem("token");
          history.push("/login");
        });
    }
  }, [history]);

  return { authenticated}
}