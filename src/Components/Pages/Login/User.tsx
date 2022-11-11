import { Box } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ResetPassword } from "./ResetPassword";
import { VerifyEmail } from "./VerifyEmail";
export const User = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const params = useRef("");
  const [mode, setMode] = useState("");
  useEffect(() => {
    const query = new URLSearchParams(location.search);
    setMode(query.get("mode") || "");
    params.current = query.get("oobCode") || "";
    if (params.current === "") {
      navigate("/login");
    }
  }, [navigate, location.search, mode]);
  switch (mode) {
    case "resetPassword":
      return <ResetPassword code={params.current} />;
    case "verifyEmail":
      return (
        <Box pt="100px">
          <VerifyEmail code={params.current} />
        </Box>
      );
    default:
      return <Box pt="100px">Something went wrong</Box>;
  }
};
