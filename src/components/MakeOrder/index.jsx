import { BsPhone } from 'react-icons/bs';

export const MakeOrder = () => {
  return(
    <div className='flex flex-col mx-6 justify-center items-center  bg-[#F43127] px-2 rounded-md mb-10'>
      <div className='rounded-full mt-4 text-white flex bg-[#1D060533] justify-center items-center text-center w-20 mb-5 h-20'>
        <BsPhone size={40} />
      </div>
      
      <div className='flex flex-col justify-center items-center border-t-2 border-[#1D060566]'>
        <h1 className='font-lilita text-xl pt-5'>
          Faça o seu pedido agora mesmo!
        </h1>
        <p className='font-lilita text-sm text-white text-center pt-5'>
          Venha saborear a melhor experiência de hambúrgueres e hotdogs do BamBam Burger!
        </p>

        <button className='bg-[#FAE4D0] w-full my-4 py-2'>
          <a href='https://www.foodbooking.com/ordering/restaurant/menu?company_uid=7cb711ec-96fe-405a-8bb8-9bd12f64aca7&restaurant_uid=c946edf6-2caa-4432-8329-8fb4f2e0ae14&facebook=true' className='font-lilita text-[16px] text-[#F43127] '>
            FAZER PEDIDO
          </a>
        </button>
      </div>
    </div>
  );
}
