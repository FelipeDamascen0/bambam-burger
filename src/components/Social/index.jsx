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
            href="https://bambamburger.saipos.com/home"
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
              href="https://bambamburger.saipos.com/home"
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
