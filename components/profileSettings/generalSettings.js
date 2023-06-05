import { getObjectActions } from '../../apollo/actions/index'
import { useState } from 'react';
import { Button, Input, Spacer } from '@nextui-org/react';

function generalSettings() {

    const [getObjects] = getObjectActions["useUpdateUser"]();

    const [userUpdate, setUserUpdate] = useState({
        username: '',
        firstname: '',
        lastname: '',
        email: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserUpdate((prevData) => ({
          ...prevData,
          [name]: value
        }));
      };
    const updateUser = async () => {
        try {
            const resp = await getObjects({
                variables: { input: userUpdate },
            });

        } catch (error) {
            console.error('Kayıt hatası:', error);
        }
    };


return (
    <div className='d-flex flex-column justify-content-center'>
        <div className='text-center' style={{ justifyContent: "center", alignSelf: "center",}}>
            <Input size='lg' labelPlaceholder="Kullanıcı Adınız" name='username' onChange={handleChange} />
            <Spacer y={1.7} />
            <Input size='lg' labelPlaceholder="Adınız" name='firstname' onChange={handleChange}/>
            <Spacer y={1.7} />
            <Input size='lg' labelPlaceholder="Soyadınız" name='lastname' onChange={handleChange}/>
            <Spacer y={1.7} />
            <Input size='lg' labelPlaceholder="E-Mailiniz" name='email' onChange={handleChange}/>
            <Spacer y={1.7} />
            <Button color="primary" onClick={updateUser}>Bilgileri Güncelle</Button>
        </div>
    </div>
)
};

export default generalSettings;