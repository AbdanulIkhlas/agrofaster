import ButtonCustom from "../elements/buttonCustom";
import { Link } from "react-router-dom";

const BerandaCustomerService = () => {
  return (
    <div className="w-full my-20 flex flex-col items-center justify-center lg:flex-row-reverse lg:h-[500px] bg-sky-100">
      <section className="w-full h-full lg:w-[50%] lg:justify-center lg:items-center">
        <img
          src="./images/customer-service.png"
          alt="customer service image"
          className="w-full h-full"
        />
      </section>
      <section
        className="w-full h-full flex flex-col bg-primary py-10 text-center rounded-xl
      md:p-16 lg:p-8 lg:w-[50%] lg:justify-center lg:items-center"
      >
        <h1
          className="text-center px-4 font-black text-3xl text-[#ffffff] 
        md:text-[40px] md:leading-10"
        >
          Jika kamu memiliki pertanyaan atau keluhan bisa hubungi kami di bawah
          ini
        </h1>
        <p className="mt-8 px-8 text-slate-100 md:text-[20px]">
          Kamu dapat menghubungi kami di bawah ini dengan menekan tombol yang
          tersedia, kami siap melayani segala bentuk pertanyaan yang kamu ajukan
          kepada kami dengan senang hati
        </p>
        <div className="flex justify-center mt-6">
          <Link className="mt-4 md:mt-8 lg:mt-12" to="/blog">
            <ButtonCustom
              customClass="relative z-10 bg-[#197939] text-slate-200 duration-300 hover:text-white hover:bg-[#0B7616] hover:shadow-white
            md:text-[20px] md:p-3"
            >
              Hubungi Kami
            </ButtonCustom>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default BerandaCustomerService;
