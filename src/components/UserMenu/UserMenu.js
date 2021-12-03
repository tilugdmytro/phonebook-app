import { useDispatch, useSelector } from "react-redux";
import { getUserName } from "../../redux/auth/auth-selectors";
import { logOut } from "../../redux/auth/auth-operations";
import defaultAvatar from "./default-avatar.png";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(getUserName);
  const avatar = defaultAvatar;

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <img src={avatar} alt="" width="28" />
      <Typography
        component="h3"
        variant="inherit"
        marginRight="10px"
        marginLeft="10px"
      >
        Hello, {name}
      </Typography>
      <Button
        type="button"
        variant="contained"
        size="medium"
        color="inherit"
        sx={{
          margin: "0 auto",
          mt: 2,
          mb: 2,
        }}
        onClick={() => dispatch(logOut())}
      >
        Log out
      </Button>
    </Box>
  );
}
