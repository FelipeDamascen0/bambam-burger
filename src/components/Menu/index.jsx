import bannerImgMenu from '../../assets/banner.svg';
import bannerMobileMenu from '../../assets/bannerMobile.svg';
import { MdRestaurantMenu } from 'react-icons/md'
import { VscChromeClose } from 'react-icons/vsc'
import { useState } from 'react';
import Logo from '../../assets/Logo.png'
import test from '../../assets/test.jpg'


export const Menu = () => {
  let largura = document.documentElement.clientWidth
  const [ menuIconState, setMenuIconState ] = useState(false)


  
  const menuNavBar = () => {
    setMenuIconState(!menuIconState)
  }

  return(
    <div className="w-full bg-center bg-cover object-contain" 
      style={{backgroundImage: `url(${largura >= 700 ? bannerImgMenu : bannerMobileMenu})`, width: 'auto', height: `${largura >= 700 ? '400px' : '700px'}`,
    }}>
      <nav className='md:flex justify-between md:items-center font-lilita p-3 bg-white bg-opacity-30 lg:px-72'>
        <div className='flex justify-between items-center mr-5 md:pl-0 pl-7'>
          <img src={Logo} width='100px' />
          <span className='text-5xl cursor-pointer md:hidden block' onClick={menuNavBar}>
            {
              menuIconState ? 
              <VscChromeClose fontSize={30} />
              : 
              <MdRestaurantMenu fontSize={30} />
            }
          </span>
        </div>
            
      
        <ul className={`
        md:flex md:items-center z-[-1] 
        md:z-auto md:static
        left-0 md:py-0 
        py-4 md:pl-0 pl-7 md:opacity-100 
        ${menuIconState ? 'opacity-100' : 'opacity-0 absolute'}
        top-[-400px] transition-all ease-in duration-500
        `}    
        >
          <li className='mx-2 my-6 md:my-0'>
            <a href='#' className='hover:text-orange-500 transition-colors duration-200'>Home</a>
          </li>

          <li className='mx-2 my-6 md:my-0'>
            <a href='#' className='hover:text-orange-500 transition-colors duration-200'>Promoção</a>
          </li>

          <li className='mx-2 my-6 md:my-0'>
            <a href='#' className='hover:text-orange-500 transition-colors duration-200'>Cardapio</a>
          </li>

          <li className='mx-2 my-6 md:my-0'>
            <a href='#' className='hover:text-orange-500 transition-colors duration-200'>Comentario</a>
          </li>

          <li className='mx-2 my-6 md:my-0'>
            <a href='#' className='hover:text-orange-500 transition-colors duration-200'>Contato</a>
          </li>
        </ul>

      </nav>

      <div className='mt-5'>
        <div className='pl-7 lg:px-72'>
          <p className='font-bold'>O melhor da região!!</p>
          <h1 className='font-bold font-lilita text-4xl'>BAMBAM <span className='text-orange-600'>BURGER</span></h1>
          <button className='bg-red-500 p-3 rounded-lg text-white font-bold mt-3'>
            Comprar Agora!
          </button>
        </div>
      </div>
    </div>
  );
}