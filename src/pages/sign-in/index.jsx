import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import SnackbarWithDecorators from "../../components/notification";
import "./login.css";
import {
    Card,
    CardHeader,
    CardContent,
    CardActions,
    Button,
    Container,
    Grid,
    Typography,
} from "@mui/material";

const Login = () => {
    const [form, setForm] = useState({});
    const [open, setOpen] = useState(false);
    const [type, setType] = useState("");
    const navigate = useNavigate();

    const handleChange = (event) => {
        const { value, name } = event.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { username, password } = form;

        if (
            !username ||
            !password ||
            username.trim() === "" ||
            password.trim() === ""
        ) {
            setType("error");
            setOpen(true);
            return;
        }

        if (username === "admin" && password === "123") {
            setType("success");
            setOpen(true);
            setTimeout(() => {
                navigate("/main");
            }, 1500);
        } else {
            setType("error");
            setOpen(true);
        }
    };

    const moveRegister = () => {
        navigate("sign-up");
    };

    return (
        <Container>
            <SnackbarWithDecorators open={open} setOpen={setOpen} type={type} />
            <Grid container justifyContent="center" mt={9}>
                <Grid item xs={12} md={6}>
                    <Card>
                        <CardHeader
                            title={
                                <Typography
                                    variant="h4"
                                    component="h1"
                                    align="center">
                                    Login
                                </Typography>
                            }
                        />
                        <CardContent>
                            <form id="submit" onSubmit={handleSubmit}>
                                <TextField
                                    fullWidth
                                    label="Username"
                                    name="username"
                                    onChange={handleChange}
                                    type="text"
                                    id="username"
                                    margin="normal"
                                />
                                <TextField
                                    fullWidth
                                    label="Password"
                                    name="password"
                                    onChange={handleChange}
                                    type="password"
                                    id="password"
                                    margin="normal"
                                />
                                <Typography
                                    variant="body2"
                                    className="text-decoration-underline cursor-pointer"
                                    onClick={moveRegister}
                                    marginTop={1}
                                    fontWeight={500}
                                    sx={{
                                        cursor: "pointer",
                                        textDecoration: "underline",
                                    }}>
                                    Register
                                </Typography>
                            </form>
                        </CardContent>
                        <CardActions>
                            <Button
                                type="submit"
                                form="submit"
                                variant="contained"
                                color="primary">
                                Login
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;
