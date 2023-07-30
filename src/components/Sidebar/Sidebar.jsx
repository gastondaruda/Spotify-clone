import { Container } from "./SidebarStyled"
import {IoLibrary} from "react-icons/io5"
import { MdHomeFilled, MdSearch } from "react-icons/md";
import Playlist from "../Playlist/Playlist";

export default function Sidebar() {
    return (
        <Container>
            <div className="top__links">
                <div className="logo">
                    <img 
                        src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png"
                        alt="spotify"
                    />
                </div>
                <ul>
                    <li>
                        <MdHomeFilled />
                        <span>Home</span>
                        </li>
                    <li>
                        <MdSearch />
                        <span>Search</span>
                    </li>
                    <li>
                        <IoLibrary />
                        <span>Your Library</span>
                    </li>
                </ul>
            </div>
            <Playlist />
        </Container>
    )
}
