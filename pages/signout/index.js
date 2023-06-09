import { useEffect } from "react";
import { getObjectActions } from "../../apollo/actions/index"
import { useRouter } from "next/router";

const SignOutPage = () => {

  const [signOutUser] = getObjectActions["useSignOutUser"]();

  const router = useRouter();

  useEffect(() => {

    const handleSignOut = async () => {
        try {
          const response = await signOutUser();
    
            router.push("/login");
    
        } catch (error) {
    console.log(error);
        }
    };

    handleSignOut();
  },[])

};

export default SignOutPage;
