import React, { useState } from "react";
import {
    TextField,
    Box,
    Typography,
    Button,
    Container,
    Grid,
    Card,
    CardContent,
    CardHeader,
} from "@mui/material";
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
            <Container>
                <Grid container justifyContent="center" mt={2}>
                    <Grid item xs={12} md={6}>
                        <Card>
                            <CardHeader
                                title={
                                    <Typography
                                        variant="h4"
                                        component="h1"
                                        align="center">
                                        Sign-Up
                                    </Typography>
                                }
                            />
                            <CardContent>
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
                                        margin="normal"
                                    />
                                    <TextField
                                        fullWidth
                                        label="Full Name"
                                        name="full_name"
                                        value={form.full_name}
                                        onChange={handleChange}
                                        type="text"
                                        id="full_name"
                                        className="my-2"
                                        margin="normal"
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
                                        margin="normal"
                                    />
                                    <TextField
                                        fullWidth
                                        label="Phone Number"
                                        name="phone_number"
                                        value={form.phone_number}
                                        onChange={handleChange}
                                        type="text"
                                        id="phone_number"
                                        className="my-2"
                                        margin="normal"
                                    />
                                    <Box mt={2} display="flex">
                                        <Button
                                            type="submit"
                                            form="submit"
                                            variant="contained"
                                            color="primary">
                                            Sign Up
                                        </Button>
                                    </Box>
                                </form>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
};

export default Index;
