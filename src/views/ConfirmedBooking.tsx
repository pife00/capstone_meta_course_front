import { Card, Label } from "flowbite-react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { CenterPage } from "../components/center/CenterPage";

export const ConfirmedBooking = () => {
  const { state } = useLocation();
  const { time, guest, occasion, date } = useParams();
  const { email } = state;
  return (
    <>
      <div className="bg-myGreen text-center py-16 ">
        <div className="flex justify-center">
          <svg
            className="h-48 w-48 text-myYellow"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <h1
          className="text-myYellow leading-none tracking-tight 
            font-extrabold font-Markazi
            md:text-3xl
            lg:text-5xl
            text-2xl "
        >
          Thanks for choosing us! <br /> Your booking is confirmed
        </h1>
      </div>
      <CenterPage>
        <div className="-mt-8 ">
          <Card>
            <h1
              className="text-xl md:text-xl 
                lg:text-4xl 
                font-semibold font-Markazi"
            >
              Order Confirmed N. {Math.floor(Math.random() * 100000)}{" "}
            </h1>
            <div>
            <p className="text-lg font-semibold">{email} </p>
            <p className="" >{date} - {time} </p>
            <p className="" >{occasion} - {guest} guest </p>
            </div>
          </Card>
        </div>
      </CenterPage>
    </>
  );
};
