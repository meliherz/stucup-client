import { useState } from 'react';
import {
    Card,
    Spacer,
    Button,
    Text,
    Input,
    Row,
    Checkbox,
    Container,
} from '@nextui-org/react';
import { Mail } from '../../components/global/Mail';
import { Password } from '../../components/global/Password';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useSignInUser } from '../../apollo/actions/user-actions';
import { useLoginPath } from '../../libs/auth/useAuth';


export default function Login() {

    const router = useRouter();

    const contextState = useLoginPath();

    const [signInUser] = useSignInUser();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleOnChangeMail = (e) => {
        setUsername(e.target.value);
    };
    const handleOnChangePassword = (e) => {
        setPassword(e.target.value);
    };

    const handleLogin = async () => {
        try {
            const resp = await signInUser({ 
                variables: { username, password },
              });

              if (resp?.data?.signIn?.token) {
                router.push(contextState?.currentPath);
              }

              if (resp?.data?.signIn?.message) {
                // empty
              }
        } catch (err) {
            // empty
        }
    };

    return (
        <div style={{ backgroundColor: '#f5f5f5' }}>
            <Container
                display="flex"
                alignItems="center"
                justify="center"
                css={{ minHeight: '100vh' }}
            >
                <Card css={{ mw: '420px', p: '20px' }}>
                    <Text
                        size={24}
                        weight="bold"
                        css={{
                            as: 'center',
                            mb: '20px',
                        }}
                    >
                        STUCUP Login
                    </Text>
                    <Input
                        id='username' 
                        clearable
                        bordered
                        fullWidth
                        color="primary"
                        size="lg"
                        placeholder="Username"
                        aria-label="Username"
                        contentLeft={<Mail fill="currentColor" />}
                        onChange={handleOnChangeMail}
                    />
                    <Spacer y={1} />
                    <Input
                        id='password'
                        clearable
                        bordered
                        fullWidth
                        color="primary"
                        size="lg"
                        placeholder="Password"
                        aria-label="Password"
                        contentLeft={<Password fill="currentColor" />}
                        onChange={handleOnChangePassword}
                        css={{ mb: '6px' }}
                    />
                    <Row justify="space-between">
                        <Checkbox>
                            <Text htmlFor='remember-checkbox' style={{ fontSize: '14px' }}>
                                Beni Hatırla
                            </Text>
                        </Checkbox>
                        <Link href="/login/register">
                            <Text size={14}>Kayıt Ol</Text>
                        </Link>
                    </Row>
                    <Spacer y={1} />
                    <Button onClick={handleLogin}>Giriş</Button>
                </Card>
            </Container>
        </div>
    );
}