import { Link } from "react-router-dom"
import useApiData from "../hooks/useApiData"
import { fetchUsers } from "../redux/users/actions"
import "./Users.css"

export default function Users() {
    const { data: users } = useApiData((state) => state.users, fetchUsers)
    return (
        <div className="users">
            {users.map((user) => (
                <div key={user.id}>
                    <Link to={`/users/${user.id}`}>{user.name}</Link>
                </div>
            ))}
        </div>
    )
}
