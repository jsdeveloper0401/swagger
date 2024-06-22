import React, { useState, useEffect } from "react";
import { Modal, Box, Typography, TextField, Button } from "@mui/material";
import { auth } from "@service";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import HourglassEmptyIcon from "@mui/icons-material/HourglassEmpty";

const VerifyModal = ({ open, toggle }) => {
    const [code, setCode] = useState("");
    const [time, setTime] = useState(60);

    useEffect(() => {
        let timer;
        if (open) {
            setTime(60);
            timer = setInterval(() => {
                setTime((prevTime) => {
                    if (prevTime <= 1) {
                        clearInterval(timer);
                        toggle();
                        return 0;
                    }
                    return prevTime - 1;
                });
            }, 1000);
        }

        return () => {
            clearInterval(timer);
        };
    }, [open, toggle]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const payload = {
            code: code,
            email: localStorage.getItem("email"),
        };
        try {
            const response = await auth.verify_code(payload);
            console.log(response);

            toast.success("Verification code has been sent successfully!", {
                position: toast.POSITION.TOP_RIGHT,
            });
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <Modal open={open} onClose={toggle}>
            <Box
                sx={{
                    position: "absolute",
                    top: "25%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: 400,
                    bgcolor: "background.paper",
                    borderRadius: "6px",
                    boxShadow: 24,
                    p: 4,
                }}>
                <Typography
                    variant="h5"
                    component="h2"
                    className="text-center"
                    gutterBottom>
                    Verify
                </Typography>
                <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    mb={2}>
                    <HourglassEmptyIcon />
                    <Typography variant="body1" ml={1}>
                        {time}s
                    </Typography>
                </Box>
                <form onSubmit={handleSubmit} id="verifyForm">
                    <TextField
                        fullWidth
                        variant="outlined"
                        label="Enter Code"
                        className="my-2"
                        value={code}
                        onChange={(e) => setCode(e.target.value)}
                    />
                    <Box display="flex" justifyContent="space-between" mt={2}>
                        <Button
                            variant="contained"
                            color="secondary"
                            onClick={toggle}>
                            Cancel
                        </Button>
                        <Button
                            variant="contained"
                            color="primary"
                            type="submit">
                            Send
                        </Button>
                    </Box>
                </form>
                <ToastContainer />
            </Box>
        </Modal>
    );
};

export default VerifyModal;
