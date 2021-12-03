import { useSelector } from "react-redux";
import Navigation from "../Navigation/Navigation";
import UserMenu from "../UserMenu/UserMenu";
import AuthNav from "../AuthNav/AuthNav";
import { getIsLoggedIn } from "../../redux/auth/auth-selectors";
import Box from "@mui/material/Box";

export default function AppBar() {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </Box>
  );
}
