import { useRouter } from "next/router";
import { getObjectActions } from "../../apollo/actions";

export default function Login() {

    const [getObjects] = getObjectActions["useGetEvents"]();

    const getUsers = async () => {
        const { data } = await getObjects();
        console.log(data);
    }
    getUsers();
    
    const router = useRouter();

    return (
        <div>
            <label>Register</label>
            <form id="register-form">
                <input type="text" placeholder="Username" />
                <input type="password" placeholder="Password" />
            </form>
            <label>Register</label>
        </div>
    );
};


