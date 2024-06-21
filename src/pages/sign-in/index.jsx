import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import SnackbarWithDecorators from "../../components/notification";
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
        if (username === "admin" && password === "123") {
            setOpen(true);
            setType("success");
            setTimeout(() => {
                navigate("/main");
            }, 1500);
        } else {
            setOpen(true);
            setType("danger");
        }
    };

    const moveRergister = () => {
        navigate("sign-up");
    };
    return (
        <div className="container">
            <SnackbarWithDecorators open={open} setOpen={setOpen} type={type} />
            <div className="row mt-2">
                <div className="col-md-6 offset-3">
                    <div className="card">
                        <div className="card-header">
                            <h1 className="text-center">Login</h1>
                        </div>
                        <div className="card-body">
                            <form id="submit" onSubmit={handleSubmit}>
                                <TextField
                                    fullWidth
                                    label="Username"
                                    name="username"
                                    onChange={handleChange}
                                    type="text"
                                    id="username"
                                    className="my-2"
                                />
                                <TextField
                                    fullWidth
                                    label="Password"
                                    name="password"
                                    onChange={handleChange}
                                    type="password"
                                    id="password"
                                    className="my-2"
                                />
                                <p className="text-decoration-underline cursor-pointer" onClick={moveRergister}>Register</p>
                            </form>
                        </div>
                        <div className="card-footer">
                            <button
                                type="submit"
                                form="submit"
                                className="btn btn-success">
                                login
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
