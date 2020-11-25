import { Link } from "react-router-dom";

const handle = () => {
    alert('ok')
    return <Link to="/" />
}

export default function Test() {
    return(
        <>
            <h1>Test Page</h1>
            <button type="button" onClick={handle}>Redirect</button>
        </>   
    )
}

