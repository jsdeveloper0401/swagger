import { TextField } from "@mui/material";
import { useState } from "react";
import { auth } from "@service";
import VerifyModal from "../../components/verify-modal";

const Index = () => {
    const [form, setForm] = useState({
        email: "",
        full_name: "",
        password: "",
        phone_number: "",
    });
    const [modal, setModal] = useState(false);

    const handleChange = (event) => {
        const { value, name } = event.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await auth.sign_up(form);
            if (response.status === 200) {
                setModal(true);
                localStorage.setItem("email", form.email);
            }
        } catch (error) {
            console.log(error);
        }
    };

    const toggleModal = () => {
        setModal(!modal);
    };

    return (
        <>
            <VerifyModal open={modal} toggle={toggleModal} />
            <div className="container">
                <div className="row mt-2">
                    <div className="col-md-6 offset-3">
                        <div className="card">
                            <div className="card-header">
                                <h1 className="text-center">Sign-Up</h1>
                            </div>
                            <div className="card-body">
                                <form id="submit" onSubmit={handleSubmit}>
                                    <TextField
                                        fullWidth
                                        label="Email"
                                        name="email"
                                        value={form.email}
                                        onChange={handleChange}
                                        type="text"
                                        id="email"
                                        className="my-2"
                                    />
                                    <TextField
                                        fullWidth
                                        label="Fullname"
                                        name="full_name"
                                        value={form.full_name}
                                        onChange={handleChange}
                                        type="text"
                                        id="full_name"
                                        className="my-2"
                                    />
                                    <TextField
                                        fullWidth
                                        label="Password"
                                        name="password"
                                        value={form.password}
                                        onChange={handleChange}
                                        type="password"
                                        id="password"
                                        className="my-2"
                                    />
                                    <TextField
                                        fullWidth
                                        label="Phone number"
                                        name="phone_number"
                                        value={form.phone_number}
                                        onChange={handleChange}
                                        type="text"
                                        id="phone_number"
                                        className="my-2"
                                    />
                                    <button
                                        type="submit"
                                        form="submit"
                                        className="btn btn-success">
                                        Sign Up
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Index;
