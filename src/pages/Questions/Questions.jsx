import { Outlet, useParams } from "react-router-dom";
import EmailForm from "../../components/EmailForm/EmailForm.jsx";

const Question = () => {
    const params = useParams();
    if (params.name) return <Outlet />;

    return (
        <>
            <EmailForm />
        </>
    );
};

export default Question;











