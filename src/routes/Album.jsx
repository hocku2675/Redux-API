import { useMemo } from "react"
import { Link, useParams } from "react-router-dom"
import useApiData from "../hooks/useApiData"
import { fetchAlbums } from "../redux/albums/actions"
import { fetchPhotos } from "../redux/photos/actions"
import { fetchUsers } from "../redux/users/actions"
import "./Album.css"

export default function UserDetail() {
    const { id } = useParams()
    const { data: albums, loading } = useApiData(
        (state) => state.albums,
        fetchAlbums
    )
    const { data: users } = useApiData((state) => state.users, fetchUsers)
    const { data: photos } = useApiData((state) => state.photos, fetchPhotos)
    const currentAlbum = useMemo(
        () => albums.find((a) => a.id === +id),
        [albums, id]
    )
    const currentUser = useMemo(
        () => users.find((a) => a.id === currentAlbum?.userId),
        [users, currentAlbum?.userId]
    )
    const currentPhotos = useMemo(
        () => photos.filter((a) => a.albumId === currentAlbum?.id),
        [photos, currentAlbum?.id]
    )

    return (
        <>
            <div className="">
                {loading && <div>Loading...</div>}
                {currentAlbum && (
                    <div className="album-info">
                        <span>Title: </span>
                        {currentAlbum.title}
                    </div>
                )}
                {currentUser && (
                    <div className="creator">
                        <span>Creator: </span>
                        <Link to={`/users/${currentUser.id}`}>
                            {currentUser.name}
                        </Link>
                    </div>
                )}
            </div>
            {currentPhotos && (
                <div>
                    <div className="images">
                        {currentPhotos.map((photo) => (
                            <div className="" key={photo.id}>
                                <img src={photo.url} alt="placeholder" />
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </>
    )
}
