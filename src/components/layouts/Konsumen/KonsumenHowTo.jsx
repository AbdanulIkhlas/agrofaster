import { beliHasilPanen } from "../../../data/howTo";
import StepByStep from "../../fragments/StepByStep";

const KonsumenHowTo = () => {
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
            Bagaimana cara membeli hasil panen di agrofaster ?
          </h1>
          {beliHasilPanen.map((item) => {
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
    </div>
  );
};

export default KonsumenHowTo;
