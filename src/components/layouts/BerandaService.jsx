import { services } from "../../data/layanan";
import Caraousel from "../fragments/Caraousel";
import CardLayanan from "../fragments/CardLayanan";

const BerandaService = () => {
  return (
    <div>
      <section className="py-4 md:py-8">
        {/* layanan tampilan tablet dan dekstop */}
        <div className="hidden  md:block">
          <Caraousel data={services} />
        </div>
        {/* layanan tampilan mobile */}
        <div className="block md:hidden">
          {services.map((service) => (
            <div key={service.id} className="flex flex-col items-center px-4">
              <CardLayanan {...service} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default BerandaService;
