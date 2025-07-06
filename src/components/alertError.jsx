export default function AlertError ({error}) {
    return(
        <div role="alert" className="alert alert-info alert-dash alert">
            <span>{error}</span>
        </div>
    )
}