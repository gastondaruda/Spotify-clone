import { Container } from "./NavbarStyled"
import { FaSearch } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { useStateProvider } from "../../utils/StateProvider";

export default function Navbar({navBg}) {
    const [{userInfo}] = useStateProvider()
    return (
        <Container navBg={navBg}>
            <div className="search__bar">
                <FaSearch />
                <input type="text" placeholder="Artist, songs or podcasts" />
            </div>
            <div className="avatar">
                <a href="#">
                    <CgProfile />
                    <span>
                        {userInfo?.name}
                    </span>
                </a>
            </div>
        </Container>
    )
}
