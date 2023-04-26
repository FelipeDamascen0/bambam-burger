import iconBurguer from '../../assets/iconBurguer.svg';
import iconDelivery from '../../assets/iconDelivery.svg';
import iconAttendance from '../../assets/iconAttendance.svg';

export const Information = () => {
  return(
    <div className="-mt-24 flex justify-center items-center sm:-mt-10 p-5">
      <div className='bg-white sm:flex justify-center rounded-xl shadow-lg shadow-black items-center'>
        <div className='icon border-b-2 mx-5  border-gray-500 sm:border-none'>
          <img src={iconBurguer} className='mr-5'/>
          <div>
            <h1 className='font-bold text-xl font-lilita'>ARTESANAL</h1>
            <p>
              Nossas Receitas são feitas <br/> com todo cuidado.
            </p>
          </div>
        </div>

        <div className=' sm:border-x-gray-500 sm:border-x-2 icon mx-5 '>
          <img src={iconAttendance} className='mx-5' />
          <div>
            <h1 className='font-bold text-xl font-lilita mr-5'>ATENDIMENTO</h1>
            <p className='mr-5'>
              Totalmente personalizado.
            </p>
          </div>
        </div>

        <div className='icon m-5 border-t-2 border-gray-500 sm:mr-5 sm:border-none'>
          <img src={iconDelivery} className='mr-5' />
          <div>
            <h1 className='font-bold text-xl font-lilita'>DELIVERY</h1>
            <p>
              Entregamos em menos de<br/>
              45 minutos
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}