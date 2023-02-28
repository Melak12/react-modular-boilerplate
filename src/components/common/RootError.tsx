
import { Container, Typography } from "@mui/material";
import { useRouteError } from "react-router-dom";
type Props = {}

type RouteError = Error & { status?: number; statusText?: string };

function RootError({ }: Props) {
    const err = useRouteError() as RouteError;
    return (
        <Container sx={{ marginTop: "43vh" }} maxWidth="sm">
            <Typography
                sx={{
                    fontSize: "2em",
                    fontWeight: 300,
                    "& strong": { fontWeight: 400 },
                }}
                variant="h1"
                align="center"
            >
                <strong>Error {err.status || 500}</strong>:{" "}
                {err.statusText ?? err.message}
            </Typography>
        </Container>
    );
}

export default RootError