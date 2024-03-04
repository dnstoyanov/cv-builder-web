import { Avatar } from '@mui/material';

export default function Home() {
    return (
        <section className='flex justify-center'>
            <h1 className='font-bold text-orange-500'>CV Builder App</h1>
            <Avatar
                alt='demo user'
                src='https://images.pexels.com/photos/7098048/pexels-photo-7098048.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            />
        </section>
    );
}
