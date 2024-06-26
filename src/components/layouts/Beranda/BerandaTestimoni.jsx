import Caraousel from "../../fragments/Caraousel";
import {testimoni} from "../../../data/testimoni";
import SectionHead from "../../elements/sectionHead";
const BerandaTestimoni = () => {
  return (
    <div>
      <SectionHead
        customClassName="px-4 text-center  mt-4 lg:mt-0"
        content={[
          {
            title: "Testimoni ",
            classname: "font-bold lg:text-[32px]",
          },
        ]}
      />
      <section className="mt-20">
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
