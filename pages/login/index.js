import { useRouter, useSearchParams } from "next/router";
import { getObjectActions } from "../../apollo/actions";

export default function LoginPage() {
    const router = useRouter();

    const [getObjects] = getObjectActions["useGetUsers"]();

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);
        const username = formData.get('username');
        const password = formData.get('password');

        const res = await fetch("/api/login", {
            method: "POST",
            body: JSON.stringify({
                username,
                password,
            }),
        });
        const { success } = await res.json();

        if (success) {
            const nextUrl = searchParams.get("next");
            router.push(nextUrl ? nextUrl : `/`);
        } else {
            alert('Login failed')
        }
    }
    const getUsers = async () => {
        const { data } = await getObjects();
        console.log(data);
     }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    UserName:
                    <input type="text" name="username"></input>
                </label>
                <label>
                    Password:
                    <input type="password" name="password"></input>
                </label>
                <button type="submit" onClick={getUsers}> Login</button>
            </form>
        </div>
    );
};

