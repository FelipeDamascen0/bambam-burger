import { Divider, Center } from '@chakra-ui/react';
import iconWatch from '../../assets/iconWatch.svg';

export const OpeningHours = () => {
  return(
    <div className='mx-2 rounded-md flex bg-red-500 mt-5 mb-5 w-full sm:w-1/3'>
      <div className='p-5'>
        <img src={iconWatch} width='70px'/>
      </div>
      <Center color='black'>
        <Divider orientation='vertical' />
      </Center>
      <div className='py-4 font-lilita'>
        <h1 className='text-lg text-orange-200'>HORÁRIO DE FUNCIONAMENTO</h1>
        <p className='text-white'>Segunda, Terça e Quinta 18:30 as 23:00</p>
        <p className='text-white'>Sexta, Sábado e Domingo 18:30 as 00:00 </p>
      </div>
    </div>
  );
}
