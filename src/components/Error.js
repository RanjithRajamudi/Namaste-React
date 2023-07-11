import { useRouteError } from 'react-router-dom'

const Error = () => {

    const errors = useRouteError();
    console.log(errors);
    return (
        <div>
            <h1>OOps..!</h1>
            <h2>Something went wrong here...!</h2>
            <h2>{errors.status + ":" + errors.statusText}</h2>
        </div>
    )
}

export default Error;