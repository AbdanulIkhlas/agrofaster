import Caraousel from "../../fragments/Caraousel";
import { partner } from "../../../data/partner";

const FastTaniPartner = () => {
  return (
    <div className="w-full py-8 bg-white min-h-40 lg:py-2">
      {/* SECTION POWERED BY */}
      <section>
        <section className="mt-8">
          <Caraousel
            data={partner}
            srcLeftButtonPath={`../../svg/green-left-arrow.svg`}
            srcRightButtonPath={`../../svg/green-right-arrow.svg`}
            chooseFragment="poweredBy"
          />
        </section>
      </section>
    </div>
  );
};

export default FastTaniPartner;
