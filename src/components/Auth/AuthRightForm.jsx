import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import "./Auth.css";
import { useNavigate } from "react-router-dom";

const AuthRightForm = () => {
  const navigate = useNavigate();

  return (
    <>
      <Box
        sx={{
          mt: 3,
          display: "flex",
          flexDirection: "column",
          width: { xs: "90%", sm: "70%", md: "35%" },
        }}
      >
        <Typography
          sx={{
            fontWeight: 700,
            fontSize: 26,
            mt: {
              xs: 8,
              md: 0,
            },
          }}
          component="h1"
          variant="h5"
        >
          Create an Account
        </Typography>

        <Typography sx={{ fontSize: 13, fontWeight: 600 }}>
          Enjoy the benefits — you'll always get faster checkout, access to your
          shopping bag from any device, easily process returns and more!
        </Typography>
        <Box component="form" noValidate sx={{ mt: 1 }}>
          <Box sx={{ mt: 0 }}>
            <Typography sx={{ fontWeight: 600, fontSize: 14 }}>
              First Name
            </Typography>
            <TextField required fullWidth id="fname" name="fname" />
          </Box>

          <Box sx={{ mt: 2 }}>
            <Typography sx={{ fontWeight: 600, fontSize: 14 }}>
              Last Name
            </Typography>
            <TextField required fullWidth id="lname" name="lname" />
          </Box>

          <Box sx={{ mt: 2 }}>
            <Typography sx={{ fontWeight: 600, fontSize: 14 }}>
              Email
            </Typography>
            <TextField required fullWidth name="email" autoFocus />
          </Box>

          <Box sx={{ mt: 2 }}>
            <Typography sx={{ fontWeight: 600, fontSize: 14 }}>
              Confirm Email
            </Typography>
            <TextField required fullWidth name="email" autoFocus />
          </Box>

          <Box sx={{ mt: 2 }}>
            <Typography sx={{ fontWeight: 600, fontSize: 14 }}>
              Password
            </Typography>
            <TextField
              className="input-password"
              required
              fullWidth
              name="password"
              type="password"
              autoComplete="current-password"
              // ===============
            />
          </Box>
          <Box sx={{ mt: 2 }}>
            <Typography sx={{ fontWeight: 600, fontSize: 14 }}>
              Confirm Password
            </Typography>
            <TextField
              className="input-password"
              required
              fullWidth
              name="password"
              type="password"
              autoComplete="current-password"
            />
          </Box>

          <Button
            className="button_create"
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2, fontWeight: 600 }}
            onClick={() => {
              navigate("/");
            }}
          >
            CREATE ACCOUNT
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default AuthRightForm;
