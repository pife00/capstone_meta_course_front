import { Button, Card, Checkbox, Label, TextInput } from "flowbite-react";
import { useEffect, useState } from "react";
import { DatePickerComponent } from "../datepicker/DatePickerComponent";
import { useForm, SubmitHandler } from "react-hook-form";
import { submitAPI, fetchAPI } from "../utils/meta_api";
import { useNavigate } from "react-router-dom";
import { userInputs, date } from "../../models/BookingForm";

export const BookingForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<userInputs>();

  const [date, setDate] = useState<date | undefined>();
  const [timesDate, setTimesDate] = useState<string[]>();
  const navigate = useNavigate();

  useEffect(() => {
    const data = fetchAPI(new Date());
    setTimesDate(data);
  }, []);
  const onSubmit: SubmitHandler<userInputs> = (data) => {
    console.log("Hello");
    const userInfo = {
      ...data,
      ...date,
    };
    submitAPI(userInfo);
    navigate(
      `/confirmed-booking/${userInfo.time}/${userInfo.occasion}/${userInfo.guest}/${userInfo.startDate}`,
      { state: { email: userInfo.email } }
    );
    //reset();
  };

  const recieveData = (data: date) => {
    setDate(data);
  };

  return (
    <>
      <div className="px-4">
        <Card>
          <form
            role="form"
            aria-label="booking information"
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-4 "
          >
            <div>
              <div className="mb-2 block">
                <Label htmlFor="time" value="Time" />
              </div>

              <select
                data-testid="time"
                {...register("time", { required: true })}
                defaultValue={""}
                id="time "
              >
                <option value="" disabled>
                  {" "}
                  choose time{" "}
                </option>
                {timesDate?.map((el) => (
                  <option key={el} value={el}>
                    {el}
                  </option>
                ))}
              </select>
              {errors.time && (
                <p className="text-red-500">This field is required</p>
              )}
            </div>

            <div>
              <div className="mb-2 block">
                <Label htmlFor="guest" value="Number of Guest" />
              </div>

              <select
                data-testid="guest"
                {...register("guest", { required: true })}
                id="guest"
                defaultValue={""}
              >
                <option value="" disabled>
                  number of guests ...
                </option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="6">6</option>
              </select>
              {errors.guest && (
                <p className="text-red-500">This field is required</p>
              )}
            </div>

            <div>
              <div className="mb-2 block">
                <Label htmlFor="occasion" value="Occasions" />
              </div>

              <select
                data-testid="occasion"
                id="occasion"
                {...register("occasion", { required: true })}
                defaultValue={""}
              >
                <option value="" disabled>
                  Choose a occasion ...
                </option>
                <option value="Birthday">Birthday</option>
                <option value="Anniversary">Anniversary</option>
              </select>
              {errors.occasion && (
                <p className="text-red-500">This field is required</p>
              )}
            </div>

            <div>
              <div className="mb-2 block">
                <Label htmlFor="date" value="Date" />
              </div>
              <div id="date" data-testid="datepicker">
                <DatePickerComponent sendDate={recieveData} />
              </div>
              {date == undefined ? (
                <p className="text-red-500">This field is required</p>
              ) : (
                <p></p>
              )}
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email" value="Your email" />
              </div>
              <TextInput
                data-testid="email"
               
                {...register("email", {
                  required: "Email Address is required",
                })}
                id="email"
                type="email"
                placeholder="your@email.com"
              />
              {errors.email && (
                <p
                  data-testid="email-error"
                  className="text-red-500"
                  role="alert"
                >
                  Email Address is required
                </p>
              )}
            </div>

            <Button data-testid="submitButton" type="submit">
              Submit
            </Button>
          </form>
        </Card>
      </div>
    </>
  );
};
