import { CenterPage } from "../components/center/CenterPage";
import chefs from "../assets/icons_assets/Mario and Adrian A.jpg";
import { BookingForm } from "../components/bookingForm/BookingForm";
export const BookingView = () => {
  return (
    <>
      <div className="flex">
        <div className=" hidden lg:block basis-2/3 rounded-lg ">
          <img src={chefs} alt="" />
        </div>

        <div className="lg:basis-2/5 w-full ">
          <BookingForm />
        </div>
      </div>
    </>
  );
};
