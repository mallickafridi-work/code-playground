import { useParams } from "react-router-dom"

const UsersProfilePage = () => {

    const params = useParams()
    console.log(params);

    return (
        <div>UsersProfilePage</div>
    )
}

export default UsersProfilePage