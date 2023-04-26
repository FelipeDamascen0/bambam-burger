import Logo from '../../assets/Logo.png';
import { SiIfood, SiWhatsapp } from 'react-icons/si';
import { FiInstagram } from 'react-icons/fi';

export const Footer = () => {
  return(
    <footer className='flex flex-col justify-center items-center'>
      <div className='flex flex-col justify-center items-center mx-10 border-b-2 pb-4 border-slate-400 mb-7'>
        <div className='flex'>
          <img src={Logo} width='50px' />
          <p className='font-lilita text-2xl ml-4 mt-2'>
            BAMBAM <span className='text-orange-600'>BURGER</span>
          </p>
        </div>

        <div className='flex mt-4'>
          <a href="" className='mr-4'>  
            <SiIfood size={20} />
          </a>

          <a href="" className='mr-4'>
            <FiInstagram size={20} />
          </a>

          <a href="">
            <SiWhatsapp size={20} />
          </a>
        </div>
      </div>

      <div className='mb-4'>
        <p className='font-lilita'>
          2023 © BamBamBurger. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}