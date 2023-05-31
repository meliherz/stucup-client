import { useState } from 'react';
import { useRouter } from 'next/router';
import { Card, Spacer, Button, Text, Input, Row, Checkbox, Container} from '@nextui-org/react';
import { getObjectActions } from '../../apollo/actions/index';

    
  export default function Register() {

    const router = useRouter();

    const [registerData, setRegisterData] = useState({
      username: '',
      firstname: '',
      lastname: '',
      email: '',
      password: ''
    });
   const [getObjects] = getObjectActions["useCreateUser"]();

   const createUser = async () => {
    try {
      const resp = await getObjects({
        variables: { input: registerData },
      });
      
      if (resp?.data?.userCreate) {
        // Kayıt işlemi başarılı
        console.log('Kayıt işlemi başarılı!');
        router.push('/login');
      } else {
        // Kayıt işlemi başarısız
        console.log("Kayıt İşlemi başarısız!");
      }
    } catch (error) {
      console.error('Kayıt hatası:', error);
    }
  };


   const handleInputChange = (e) => {
      const { name, value } = e.target;
      setRegisterData((prevData) => ({
        ...prevData,
        [name]: value
      }));
    };

    const handleSubmit = () => {
    createUser();
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
              STUCUP Register
            </Text>
            <Input
              clearable
              bordered
              fullWidth
              color="primary"
              size="lg"
              placeholder="Username"
              name="username"
              defaultValue={registerData.username}
              onChange={handleInputChange}
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
              name="firstname"
              defaultValue={registerData.firstname}
              onChange={handleInputChange}
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
              name="lastname"
              defaultValue={registerData.lastname}
              onChange={handleInputChange}
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
              name="email"
              defaultValue={registerData.email}
              onChange={handleInputChange}
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
              name="password"
              defaultValue={registerData.password}
              onChange={handleInputChange}
              aria-label="Password"
              css={{ mb: '6px' }}
            />
            <Spacer y={1} />
            <Button onClick={handleSubmit} >Kayıt Ol</Button>
          </Card>
        </Container>
      </div>
    );
  }
  