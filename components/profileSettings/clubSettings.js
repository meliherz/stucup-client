import { getObjectActions } from '../../apollo/actions/index'
import { useState } from 'react';
import { useRouter } from 'next/router';
import { Button, Input, Spacer, Textarea } from '@nextui-org/react';

/// Admin olan kişinin id'sini useUser kullanarak al. userın yönetici olduğu clubun idsini al. o id ile clube update et eventi
function clubSettings() {

    const router = useRouter();

    const [getObjects] = getObjectActions["useCreateEvent"]();

    const [registerEvent, setRegisterEvent] = useState({
        eventname: '',
        description: '',
        eventDate: '',
        eventTime: '',
        location: '',
        organizer: '',
        category: '',
        capacity: '',
        eventImage: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setRegisterEvent((prevData) => ({
          ...prevData,
          [name]: value
        }));
      };
    const createEvent = async () => {
        try {
            const resp = await getObjects({
                variables: { input: registerEvent },
            });
            if(resp?.data?.eventCreate) {
                const eventId = resp.data.eventCreate.id
                router.push(`/events/${eventId}`);
            }

        } catch (error) {
            console.error('Kayıt hatası:', error);
        }
    };


return (
    <div className='d-flex flex-column justify-content-center'>

        <h4 className='text-center'>Etkinlik Ekle</h4>
        <hr />
        <div className='text-center' style={{ justifyContent: "center", alignSelf: "center" }}>
            <Spacer y={1.5} />
            <Input size='lg' labelPlaceholder="Etkinlik Adı" name='eventname' onChange={handleChange} />
            <Spacer y={1.5} />
            <Textarea placeholder="Etkinlik Açıklaması" name='description' onChange={handleChange}/>
            <Spacer y={1.7} />
            <Input size='md' labelPlaceholder="Etkinlik Konumu" name='location'onChange={handleChange}/>
            <Spacer y={1.7} />
            <Input size='md' labelPlaceholder="Etkinlik Organizatörü" name='organizer' onChange={handleChange}/>
            <Spacer y={1.7} />
            <Input size='md' labelPlaceholder="Etkinlik Kategorisi" name='category' onChange={handleChange}/>
            <Spacer y={1.7} />
            <Input size='md' labelPlaceholder="Etkinlik Kapasitesi" name='capacity' onChange={handleChange}/>
            <Spacer y={1.7} />
            <Input size='md' labelPlaceholder="Etkinlik Resmi (URL)" name='eventImage' onChange={handleChange}/>
            <Spacer y={1} />
            <Input
                size="md"
                width="186px"
                label="Etkinlik Tarihi"
                type="date"
                name='eventDate'
                onChange={handleChange}
            />
            <Spacer y={1} />
            <Input
                width="186px"
                label="Etkinlik Saati"
                type="time"
                name='eventTime'
                onChange={handleChange}
            />
            <Spacer y={1} />
            <Button color="primary" onClick={createEvent}>Etkinlik Ekle</Button>
        </div>
    </div>
)
};

export default clubSettings