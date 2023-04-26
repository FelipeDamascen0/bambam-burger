import { useEffect, useState } from 'react';
import clients from './clients.json'
import{ RiStarFill } from 'react-icons/ri';

export const FeedBackClients = () => {
  const [feedBacks, setFeedBacks] = useState([]);

  useEffect(() => {
    setFeedBacks(clients['Bambam Burger'])
  }, [])

  return(
    <div className="mx-4 mt-7 mb-6">
      <div>
        <h1 className="font-lilita text-2xl text-[#1D0605E5]">Nossos Clientes</h1>
        <p className="text-[#1D0605B0] font-bold">A satisfação de nossos clientes em primeiro lugar!</p>
      </div>
      <div className='mt-4 max-w-full flex overflow-scroll'>
      {
        feedBacks.map((item) => {
          return(
            <div className='mr-10 w-full bg-white px-8 rounded-lg mb-4'>
              <div className='flex'>
                <div>
                  <p className='font-lilita text-[#1D0605E5] text-lg mt-4'>
                    {item.nome}
                  </p>
                  <p className='flex'>
                    <div className='flex text-yellow-500'>
                      <RiStarFill size={20} />
                      <RiStarFill size={20} />
                      <RiStarFill size={20} />
                      <RiStarFill size={20} />
                      <RiStarFill size={20} />
                    </div>
                    <p className='ml-4'>
                      {item.data}
                    </p>
                  </p>
                </div>
              </div> 
              <p className='mx-2 mt-4 mb-4'>
                {item.comentario}  
              </p>     
            </div>
          );
        })
      }
      </div>
    </div>
  );
}