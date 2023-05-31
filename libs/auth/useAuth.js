import { useQuery, useMutation } from '@apollo/client';
import { useRouter } from 'next/router';
import { createContext, useContext, useState, useEffect } from 'react';
import { IS_ME, SIGN_OUT } from '../../apollo/queries/user-queries';


const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [state, setState] = useState(false); //Kullanıcı giriş yapmış mı?
  const [userState, setUserState] = useState({}); //Kullanıcı bilgileri

  const router = useRouter();

  const { data, error } = useQuery(IS_ME); //Eklenecek sorgulara
  //let [signOut] = useMutation(SIGN_OUT); //Eklenecek mutationlar
  const [currentPath, setCurrentPath] = useState('/');
  const [userRole, setUserRole] = useState({});

  useEffect(() => {
    setUserState(data?.isme?.user);
    const getUser = async () => {
      if ((error || data) && router.pathname !== '/login') {
        setState(true); }
      // } else {
      //   const { data: newData } = await refetch();
      //   if (newData?.userRole) {
      //     setUserRole(newData.userRole);
      //   }
      //   setState(true);
      // }
    };

    getUser();
  }, [data, error, router]);

  return (state || router.pathname === '/login') ? (
    <AuthContext.Provider value={ { currentPath, user: true, userRole } }>{children}</AuthContext.Provider>
  ) : <div>Loading...</div>;
}

export function useUser() {
  return useContext(AuthContext);
}

export function useLoginPath() {
  return useContext(AuthContext);
}

export { AuthContext, AuthProvider };

