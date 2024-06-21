import React, { useState } from "react";
import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import { auth } from "@service";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const VerifyModal = ({ open, toggle }) => {
    const [code, setCode] = useState("");

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
        <Modal isOpen={open} toggle={toggle}>
            <ModalHeader>
                <h1 className="text-center">Verify</h1>
            </ModalHeader>
            <ModalBody>
                <form onSubmit={handleSubmit} id="verifyForm">
                    <input
                        type="text"
                        placeholder="Enter Code"
                        className="form-control my-2"
                        value={code}
                        onChange={(e) => setCode(e.target.value)}
                    />
                </form>
            </ModalBody>
            <ModalFooter>
                <button className="btn btn-danger" onClick={toggle}>
                    Cancel
                </button>
                <button
                    className="btn btn-success"
                    form="verifyForm"
                    type="submit">
                    Send
                </button>
            </ModalFooter>
            <ToastContainer />
        </Modal>
    );
};

export default VerifyModal;
