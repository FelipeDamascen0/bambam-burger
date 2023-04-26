import { SiIfood, SiWhatsapp } from 'react-icons/si';
import { FiInstagram } from 'react-icons/fi';
import { MdOutlineMenuBook } from 'react-icons/md';

export const Social = () => {
  return(
    <div className='my-12 sm:flex justify-center items-center'>
      <div className='flex justify-around'>
        <div className='flex flex-col justify-center items-center  sm:ml-4'>
          <a
            target="_blank"
            href="https://www.foodbooking.com/ordering/restaurant/menu?company_uid=7cb711ec-96fe-405a-8bb8-9bd12f64aca7&restaurant_uid=c946edf6-2caa-4432-8329-8fb4f2e0ae14&facebook=true"
          >
            <MdOutlineMenuBook size={50} />
          </a>
          <p className='font-lilita text-lg'>
            Cardapio
          </p>
        </div>
        <div>
          <div className='flex flex-col justify-center items-center  sm:ml-4'>
            <a 
              target="_blank"
              href="https://www.ifood.com.br/delivery/brasilia-df/bambam-burger-residencial-santos-dumont-santa-maria/a56b5443-44dc-49b6-b759-d28399880e3f"
            >
              <SiIfood size={50} className='text-red-600'/>
            </a>
            <p className='font-lilita text-lg text-black'>
              Ifood
            </p>
          </div>
        </div>
      </div>

      <div className='flex justify-around mt-7 sm:mt-0'>
        <div className='flex flex-col justify-center items-center sm:ml-4'>
          <a 
            target="_blank"
            href="https://www.instagram.com/bambam.burger_/"
          >
            <FiInstagram size={50} className='text-[#ec9ede]' />
          </a>
          <p className='font-lilita text-lg'>
            Instagram
          </p>
        </div>
        <div>
          <div className='flex flex-col justify-center items-center sm:ml-4'>
            <a 
              href="https://api.whatsapp.com/send/?phone=5561981595418&text&type=phone_number&app_absent=0"
            >
              <SiWhatsapp size={50} className='text-green-500' />
            </a>
            <p className='font-lilita text-lg'>
              Whatsapp
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}