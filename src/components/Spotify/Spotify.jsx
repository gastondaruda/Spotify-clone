import { useEffect,useRef, useState  } from "react"
import Body from "../Body/Body"
import Footer from "../Footer/Footer"
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import { Container} from "./SpotifyStyled"
import { useStateProvider } from "../../utils/StateProvider"
import axios from "axios"
import { reducerCases } from "../../utils/Constans"

export default function Spotify() {
    const [{token}, dispatch] = useStateProvider()
    const bodyRef = useRef();
    const [navBg, setNavBg] = useState(false)
    const [headerBg, setHeaderBg] = useState(false)

    const bodyScroll = () => {
        bodyRef.current.scrollTop >= 30 ? setNavBg(true) : setNavBg(false)
        bodyRef.current.scrollTop >= 268 ? setHeaderBg(true) : setHeaderBg(false)
    }

    useEffect(() => {
        const getUserInfo = async () => {
            const { data } = await axios.get("https://api.spotify.com/v1/me", {
                headers: {
                Authorization: "Bearer " + token,
                "Content-Type": "application/json",
                },
            });
            const userInfo = {
                userId: data.id,
                name: data.display_name,
            };
            dispatch({ type: reducerCases.SET_USER, userInfo });
            };
            getUserInfo();
        }, [dispatch, token]);
    return (
        <Container>
            <div className="spotify__body">
                <Sidebar />
                <div className="body" ref={bodyRef} onScroll={bodyScroll}>
                    <Navbar navBg={navBg}/>
                    <div className="body__contents">
                        <Body headerBg={headerBg}/>
                    </div>
                </div>
            </div>
            <div className="spotify__footer">
                <Footer />
            </div>
        </Container>
    )
}
