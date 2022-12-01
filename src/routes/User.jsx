import { useMemo } from "react"
import { Link, useParams } from "react-router-dom"
import useApiData from "../hooks/useApiData"
import { fetchAlbums } from "../redux/albums/actions"
import { fetchUsers } from "../redux/users/actions"

export default function User() {
    const { id } = useParams()
    const { data: users, loading } = useApiData(
        (state) => state.users,
        fetchUsers
    )
    const { data: albums } = useApiData((state) => state.albums, fetchAlbums)
    const user = useMemo(() => users.find((u) => u.id === +id), [id, users])
    const userAlbums = useMemo(
        () => albums.filter((a) => a.userId === user?.id),
        [user?.id, albums]
    )

    return (
        <div>
            {loading && <div>Loading...</div>}
            {user && (
                <div className="user-info">
                    <div>
                        Name: <span id="user-prop">{user.name}</span>
                    </div>
                    <div>
                        Username: <span id="user-prop">{user.username}</span>
                    </div>
                    <div>
                        Email: <span id="user-prop">{user.email}</span>
                    </div>
                </div>
            )}

            {userAlbums.map((album) => (
                <div key={album.id} id="user-prop">
                    <Link to={`/albums/${album.id}`}>{album.title}</Link>
                </div>
            ))}
        </div>
    )
}
