import { Button, Card, Checkbox, Label, TextInput } from "flowbite-react";
import { useState } from "react";
import { DatePickerComponent } from "../datepicker/DatePickerComponent";
import { useForm, SubmitHandler } from "react-hook-form";

type userInputs = {
  email: string;
  occasion: string;
  time: string;
  guest: string;
};

interface date{
  startDate:'',
  endDate:''
}


export const BookingForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<userInputs>();

  const [date, setDate] = useState<date|undefined>()
  const onSubmit: SubmitHandler<userInputs> = (data) => {
    const userInfo = {
      ...data,
      ...date,
    }
    console.log(userInfo)
    reset()
  };

  const recieveData = (data:date) =>{
    setDate(data)
  }

  return (
    <>
      <div className="px-4">
        <Card>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-4 "
          >
            <div>
              <div className="mb-2 block">
                <Label htmlFor="guest" value="Time" />
              </div>

              <select
                {...register("time", { required: true })}
                defaultValue={""}
                id="res-time "
              >
                <option value="" disabled>
                  {" "}
                  choose time{" "}
                </option>
                <option value="17:00">17:00</option>
                <option value="18:00">18:00</option>
                <option value="19:00">19:00</option>
                <option value="20:00">20:00</option>
                <option value="21:00">21:00</option>
                <option value="22:00">22:00</option>
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
                {...register("guest", { required: true })}
                id="guests"
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
                <Label htmlFor="" value="Occasions" />
              </div>

              <select
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

              <DatePickerComponent sendDate={recieveData} />
              {date == undefined 
              ? <p className="text-red-500">This field is required</p>
              :<p></p>
              }

            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email1" value="Your email" />
              </div>
              <TextInput
                {...register("email", {
                  required: "Email Address is required",
                })}
                id="email1"
                type="email"
                placeholder="your@email.com"
              />
              {errors.email && (
                <p className="text-red-500" role="alert">
                  {errors.email?.message}
                </p>
              )}
            </div>

            <Button type="submit">Submit</Button>
          </form>
        </Card>
      </div>
    </>
  );
};
