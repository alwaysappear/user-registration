import { NavigateFunction, useNavigate } from "react-router-dom"

const GoBack: React.FC = () => {
    const navigate: NavigateFunction = useNavigate()
    const goBack = (): void => navigate(-1)

    return (
        <button onClick={goBack} className="mt-5 underline">
            Go Back
        </button>
    )
}

export default GoBack