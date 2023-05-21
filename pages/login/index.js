import { useRouter, useSearchParams } from "next/router";
import { useGetUsers } from "../../apollo/actions/user-actions/index.js";

export default function LoginPage() {
    const router = useRouter();
    const [users] = useGetUsers();

    const getUser = async () => {
        try {
            const resp = await users({ variables: { username } 
            })
         return console.log(resp);
        }
        catch (err) {
            console.log(err)

        }
    }
        getUser();

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

        return (
            <form onSubmit={handleSubmit}>
                <label>
                    UserName:
                    <input type="text" name="username"></input>
                </label>
                <label>
                    Password:
                    <input type="password" name="password"></input>
                </label>
                <button type="submit">Login</button>
            </form>
        );
    };

