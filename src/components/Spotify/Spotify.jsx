import Body from "../Body/Body"
import Footer from "../Footer/Footer"
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import { Container} from "./SpotifyStyled"

export default function Spotify() {
    return (
        <Container>
            <div className="spotify__body">
                <Sidebar />
                <div className="body">
                    <Navbar/>
                    <div className="body__contents">
                        <Body />
                    </div>
                </div>
            </div>
            <div className="spotify__footer">
                <Footer />
            </div>
        </Container>
    )
}
