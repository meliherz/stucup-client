import React from 'react';
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
            STUCUP
          </Text>
          <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Username"
            contentLeft={<Mail fill="currentColor" />}
          />
          <Spacer y={1} />
          <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Password"
            contentLeft={<Password fill="currentColor" />}
            css={{ mb: '6px' }}
          />
          <Row justify="space-between">
            <Checkbox>
              <label style={{ fontSize: '14px'  }}>Beni Hatırla</label>
            </Checkbox>
            <Text size={14}>Şifremi Unuttum</Text>
          </Row>
          <Spacer y={1} />
          <Button onClick={() => {console.log('clicked')}}>Giriş</Button>
        </Card>
      </Container>
    </div>
  );
}