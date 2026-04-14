import { useParams } from "react-router-dom"

const UsersProfilePage = () => {

    const params = useParams()
    console.log(params);

    return (
        <>
            <div>UsersProfilePage</div>
            <p> this page is yet to be designed </p>
        </>
    )
}

export default UsersProfilePage