import Caraousel from "../../fragments/Caraousel";
import {testimoni} from "../../../data/testimoni";
const BerandaTestimoni = () => {
  return (
    <div>
      <h1 className="text-center font-black text-2xl lg:text-4xl text-[#2C946C] ">
        Testimoni
      </h1>
      <section className="mt-6">
        <Caraousel
          data={testimoni}
          srcLeftButtonPath={`../../svg/green-left-arrow.svg`}
          srcRightButtonPath={`../../svg/green-right-arrow.svg`}
          chooseFragment="testimoni"
        />
      </section>
    </div>
  );
};

export default BerandaTestimoni;
