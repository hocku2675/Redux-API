import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import "./Error.css"
export default function NotFound() {
    useEffect(() => {
        console.log(window.location.pathname)
    }, [])
    const navigate = useNavigate()
    const goToStart = () => {
        navigate(`/`)
    }
    return (
        <div className="main">
            <div className="main-text_error">Error 404</div>
            <div className="main-text_smth">
                It is not where you suppose to be
                <div className="return-btn" onClick={goToStart}>
                    Press this text to return
                </div>
            </div>
        </div>
    )
}
