import "./style.css";
import "../../app.css";
import { Button, Divider, Link, TextField, Typography } from "@mui/material";

export default function LoginScreen() {
  return (
    <>
      {/* <div className="title">
        
    </div> */}
      <Typography
        sx={{
          top: "5%",
          position: "absolute",
          width: "100%",
        }}
        color="#d1c1deff"
        variant="h3"
        fontWeight={"bold"}
        textAlign={"center"}
      >
        Cupcake bouqutes
      </Typography>
      <div className="login-body">
        <Typography variant="h3" fontWeight={"bold"}>
          Welcome back
        </Typography>
        <Typography variant="subtitle1" fontWeight={"bold"}>
          Enter your details
        </Typography>
        <form className="login-form">
          <TextField label="Email address" type="email" fullWidth required />
          <TextField label="Password" type="password" fullWidth required />
          <Button
            variant="contained"
            type="submit"
            sx={{
              backgroundImage: "linear-gradient(to right, #5E00A7, #7628aeff)",
              height: 46,
            }}
          >
            Login
          </Button>
          <Link>Forgot your password?</Link>
          <Divider
            sx={{
              margin: "12px 0px",
            }}
          >
            Or login with
          </Divider>
          <div className="sign-options">
            <Button variant="contained">Google</Button>
            <Button variant="contained">Facebook</Button>
          </div>
          <Divider
            variant="middle"
            sx={{
              margin: "12px 0px",
            }}
          />
          <Typography textAlign={"center"}>
            Don't have an account? <Link href="/signup">Sign up</Link>
          </Typography>
        </form>
      </div>
    </>
  );
}
