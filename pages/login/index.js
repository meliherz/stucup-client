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

export default function Login() {
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
                    <Button onClick={() => { console.log('clicked') }}>Giriş</Button>
                </Card>
            </Container>
        </div>
    );
}