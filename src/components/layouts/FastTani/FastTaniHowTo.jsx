import { pesanSaprodi, jualHasilPanen } from "../../../data/howTo";
import StepByStep from "../../fragments/StepByStep";

const FastTaniHowTo = () => {
  return (
    <div className="w-full bg-white  p-6 font-jakartaSans">
      {/* SECTION Memesan Kebutuhan Saprodi */}
      <section className="mb-4 lg:px-20 lg:flex lg:gap-10 ">
        <img
          src="../images/kebutuhan-saprodi.png"
          alt=""
          className="hidden lg:block lg:w-[30%] lg:rounded-lg"
        />
        <div>
          <h1 className="font-semibold mb-2 lg:text-3xl lg:font-bold lg:mb-6 lg:mt-4">
            Bagaimana Cara Memesan Kebutuhan Saprodi?
          </h1>
          {pesanSaprodi.map((item) => {
            return (
              <StepByStep
                key={item.id}
                no={item.no}
                title={item.title}
                desctiption={item.description}
              />
            );
          })}
        </div>
      </section>
      {/* SECTION Jual Hasil Panen */}
      <section className="mb-4 lg:px-20 lg:flex lg:gap-10 lg:mt-8 ">
        <div>
          <h1 className="font-semibold mb-2 lg:text-4xl lg:font-bold lg:mb-6 lg:mt-4">
            Bagaimana Cara Menjual Hasil Panen di Agrofaster?
          </h1>
          {jualHasilPanen.map((item) => {
            return (
              <StepByStep
                key={item.id}
                no={item.no}
                title={item.title}
                desctiption={item.description}
              />
            );
          })}
        </div>
        <img
          src="../images/jual-hasil-panen.png"
          alt=""
          className="hidden lg:block lg:w-[30%] lg:rounded-lg"
        />
      </section>
    </div>
  );
};

export default FastTaniHowTo;
