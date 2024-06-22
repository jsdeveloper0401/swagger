import * as React from "react";
import Button from "@mui/joy/Button";
import Snackbar from "@mui/joy/Snackbar";
import PlaylistAddCheckCircleRoundedIcon from "@mui/icons-material/PlaylistAddCheckCircleRounded";
import ErrorOutlineRoundedIcon from "@mui/icons-material/ErrorOutlineRounded";

export default function SnackbarWithDecorators({ open, setOpen, type }) {
    const getIcon = () => {
        if (type === "success") {
            return <PlaylistAddCheckCircleRoundedIcon />;
        }
        return <ErrorOutlineRoundedIcon />;
    };

    const getMessage = () => {
        if (type === "success") {
            return "Your message was sent successfully.";
        }
        return "There was an error processing your request.";
    };

    return (
        <React.Fragment>
            <Snackbar
                variant="soft"
                color={type}
                open={open}
                autoHideDuration={2000}
                onClose={() => setOpen(false)}
                anchorOrigin={{ vertical: "top", horizontal: "center" }}
                startDecorator={getIcon()}
                endDecorator={
                    <Button
                        onClick={() => setOpen(false)}
                        size="sm"
                        variant="soft"
                        color={type === "success" ? "success" : "danger"}>
                        Dismiss
                    </Button>
                }>
                {getMessage()}
            </Snackbar>
        </React.Fragment>
    );
}
