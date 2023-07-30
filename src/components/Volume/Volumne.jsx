import { Container } from "./VolumeStyled"
import { useStateProvider } from "../../utils/StateProvider";
import axios from "axios";

export default function Volumne() {
    const [{ token }] = useStateProvider();
    const setVolume = async (e) => {
        await axios.put(
            "https://api.spotify.com/v1/me/player/volume",
            {},
            {
                params: {
                volume_percent: parseInt(e.target.value),
                },
                headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + token,
                },
            }
            );
        };
    return (
        <Container>
            <input type="range" onMouseUp={(e) => setVolume(e)} min={0} max={100} />
        </Container>
    )
}
