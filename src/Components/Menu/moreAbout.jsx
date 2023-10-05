import { useParams } from "react-router-dom"

const MoreAbout = () => {
    const params = useParams()
    return (
        <div>
            {params.id}
        </div>
    )
}
export default MoreAbout