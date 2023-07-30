import { useEffect } from "react"
import { Container } from "./PlaylistStyled"
import { useStateProvider } from "../../utils/StateProvider"
import axios from "axios"
import { reducerCases } from "../../utils/Constans"

export default function Playlist() {
    const [{token, playlists}, dispatch] = useStateProvider()

    useEffect(() => {
        const getPlaylistData = async () => {
            const response = await axios.get("https://api.spotify.com/v1/me/playlists", 
            {
                headers: {
                    Authorization: "Bearer "+ token,
                    "Content-Type": "application/json"
                }
            }
        );
        const {items} = response.data;
        const playlists = items.map(({name,id, images}) => {
            return {name , id, images}
        })
        dispatch({type:reducerCases.SET_PLAYLISTS, playlists})
        }
        getPlaylistData()
    }, [token, dispatch])
    return (
        <Container>
            <ul>
                {
                    playlists.map(({name, id}) => {
                        return (
                            <>
                                <li key={id}>{name}</li>
                            </>
                        )
                    })
                }
            </ul>
        </Container>
    )
}


