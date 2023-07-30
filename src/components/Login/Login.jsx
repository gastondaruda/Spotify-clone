import { Container } from "./LoginStyled"
//import { Button } from "bootstrap";

export default function Login() {
    const handleClick = () => {
        const clientId = "fe66e9fa65a642bd8eb0d02dfb46e2a2"
        const redirectUrl = "http://localhost:5173/"
        const apiUrl = "https://accounts.spotify.com/authorize"
        const scope = [
            "user-read-email",
            "user-read-email",
            "user-modify-playback-state",
            "user-read-playback-state",
            "user-read-currently-playing",
            "user-read-recently-played",
            "user-top-read",
        ];
        window.location.href = `${apiUrl}?client_id=${clientId}&redirect_uri=${redirectUrl}&scope=${scope.join(
            " "
        )}&response_type=token&show_dialog=true`
    }

    return (
        <Container>
            <img   src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_Black.png" alt="spotify"/>
            <button onClick={handleClick}>Connect Spotify</button>
        </Container>
    )
}


