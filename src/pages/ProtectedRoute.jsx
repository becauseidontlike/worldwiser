import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/FakeAuthContext";
import { useEffect } from "react";

function ProtectedRoute({ childern }) {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(
    function () {
      if (!isAuthenticated) navigate("/");
    },
    [isAuthenticated, navigate]
  );

  return childern;
}

export default ProtectedRoute;
