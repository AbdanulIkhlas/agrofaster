import Caraousel from "../../fragments/Caraousel";
import Trusted from "../../fragments/Trusted";
import { poweredBy } from "../../../data/poweredBy";
import { trusted } from "../../../data/trusted";
import SectionHead from "../../elements/sectionHead";

const BerandaPoweredBy = () => {
  return (
    <div className="w-full mt-10 pt-10 pb-16 bg-emerald-100 min-h-40">
      {/* SECTION POWERED BY */}
      <section>
        <SectionHead
          customClassName="px-4 text-center mt-4 lg:mt-0"
          content={[
            {
              title: "Powered ",
              classname: "font-bold lg:text-[32px]",
            },
            {
              title: "By ",
              classname: "text-primary font-bold lg:text-[32px]",
            },
          ]}
        />
        <section className="mt-8">
          <Caraousel
            data={poweredBy}
            srcLeftButtonPath={`../../svg/green-left-arrow.svg`}
            srcRightButtonPath={`../../svg/green-right-arrow.svg`}
            chooseFragment="poweredBy"
          />
        </section>
      </section>
      {/* SECTION TRUSTED */}
      <section className="mt-16">
        <h1 className="text-center font-bold text-lg text-[#2C946C] lg:text-2xl">
          Dipercaya oleh banyak Petani FastTani, Mitra Saprodi, Mitra Pasar
        </h1>
        <section
          className="flex flex-col items-center gap-6 mt-8
        md:flex-row md:px-8 md:justify-center lg:gap-12"
        >
          {trusted.map((item) => {
            return (
              <Trusted
                key={item.id}
                image={item.image}
                content={item.content}
                total={item.total}
              />
            );
          })}
        </section>
      </section>
    </div>
  );
};

export default BerandaPoweredBy;
