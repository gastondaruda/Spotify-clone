import CurrentTrack from "../CurrentTrack/CurrentTrack"
import PlayerControl from "../PlayerControl/PlayerControl"
import Volumne from "../Volume/Volumne"
import { Container } from "./FooterStyled"

export default function Footer() {
    return (
        <Container>
            <CurrentTrack />
            <PlayerControl />
            <Volumne />
        </Container>
    )
}
