
export const Offers = () => {
  return(
    <div className="bg-orange-100 sm:flex justify-center items-center mt-4">
      <div className="p-4 sm:h-full bg-orange-800 w-full">
        <h1 className='font-bold text-xl font-lilita text-white'>
          ESCOLHA SEU COMBO!<br/>
          <p className="text-orange-500 rounded-md">PEÇA AGORA!</p>
        </h1>
        <p className="text-white">
          Temos vários tipos de pratos para a nossa realeza,
          fique esperto porque temos sempre  promoção!
        </p>
        <button className='bg-red-500 p-3 rounded-lg text-white font-bold mt-3' href="https://bambamburger.saipos.com/home">
          Ver Cardápio Completo
        </button>
      </div>

      <div className="m-5 p-2">
        <h1 className='font-bold text-xl font-lilita'>
          CARDÁPIO
          <p className="text-orange-500 rounded-md">BAMBAM BURGUER</p>
        </h1>
        <p className="mt-2 font-bold">
          Betty ......................................... <span className="font-bold">R$21,90</span>
        </p>
        <p>
           Pão Brioche ou Australiano 50g, molho especial, Hambúrguer artesanal 120g, queijo, bacon, Alface e tomate.
        </p>

        <p className="mt-2 font-bold">
          Dino ......................................... <span className="font-bold">22,90</span>
        </p>
        <p>
          Pão brioche, maionese defumada, hambúrguer artesanal 120g,, queijo, bacon, alface, tomate e cebola roxa.
        </p>

        <p className="mt-2 font-bold">
          Fred ......................................... <span className="font-bold">23,90</span>
        </p>
        <p>
          Pão Brioche ou Australiano 50g, molho especial, Hambúrguer artesanal 120g, queijo, bacon, cebola caramelizada, barbecue, alface e tomate.
        </p>

        <p className="mt-2 font-bold">
          Wilma ......................................... <span className="font-bold">R$19,90</span>
        </p>
        <p>
           Pão Brioche ou Australiano 50g, molho especial, Hambúrguer artesanal 120g, queijo, Alface e tomate.
        </p>
       
      </div>

      
    </div>
  );
}

{
  /*
    <div>
        <h1 className='font-bold text-xl font-lilita'>
          CARDÁPIO BAMBAM BURGUER
        </h1> 
        <p>Classic burger .........................................................................</p>
      </div>
  */
}
