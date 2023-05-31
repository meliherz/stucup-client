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
    
  export default function Register() {
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
              STUCUP Register
            </Text>
            <Input
              clearable
              bordered
              fullWidth
              color="primary"
              size="lg"
              placeholder="Username"
              id="username"
              aria-label="Username"
            />
            <Spacer y={1} />
            <Input
              clearable
              bordered
              fullWidth
              color="primary"
              size="lg"
              placeholder="First Name"
              id="firstname"
              aria-label="First Name"
              css={{ mb: '6px' }}
            />
            <Spacer y={1} />
            <Input
              clearable
              bordered
              fullWidth
              color="primary"
              size="lg"
              placeholder="Last Name"
              id="lastname"
              aria-label="Last Name"
              css={{ mb: '6px' }}
            />
            <Spacer y={1} />
            <Input
              clearable
              bordered
              fullWidth
              color="primary"
              size="lg"
              placeholder="Email"
              id="email"
              aria-label="Email"
              css={{ mb: '6px' }}
            />
            <Spacer y={1} />
            <Input
              clearable
              bordered
              fullWidth
              color="primary"
              size="lg"
              placeholder="Password"
              id="password"
              aria-label="Password"
              css={{ mb: '6px' }}
            />
            <Spacer y={1} />
            <Button onClick={() => { console.log('clicked') }}>Kayıt Ol</Button>
          </Card>
        </Container>
      </div>
    );
  }
  