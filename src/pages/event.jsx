import UnderDevelopment from "../components/fragments/UnderDevelopment";
import { Link } from "react-router-dom";
import ButtonCustom from "../components/elements/buttonCustom";

const Event = () => {
  return (
    <div className="w-full h-screen flex flex-col items-center">
      <UnderDevelopment />
      <section className="w-[140px] mt-14">
        <Link className="mt-4 md:mt-8 lg:mt-12" to="/">
          <ButtonCustom customClass="relative z-10 bg-primary text-white duration-300 hover:shadow-primary hover:bg-silverTree">
            Beranda →
          </ButtonCustom>
        </Link>
      </section>
    </div>
  );
};

export default Event;
