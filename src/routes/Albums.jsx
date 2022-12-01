import { Link } from "react-router-dom"
import useApiData from "../hooks/useApiData"
import { fetchAlbums } from "../redux/albums/actions"
import "./Albums.css"

export default function AllAlbums() {
    const { data: albums, loading } = useApiData(
        (state) => state.albums,
        fetchAlbums
    )
    return (
        <div className="albums">
            {loading && <div>Loading...</div>}
            {albums.map((album) => (
                <div key={album.id}>
                    <Link to={`/albums/${album.id}`}>{album.title}</Link>
                </div>
            ))}
        </div>
    )
}
