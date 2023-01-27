import { useState, useEffect } from "react";
import Datepicker from "react-tailwindcss-datepicker";

type Props = {
  sendDate: (value: date) => void;
};

interface date {
  startDate: "";
  endDate: "";
}

export const DatePickerComponent: React.FC<Props> = ({ sendDate }) => {
  const [value, setValue] = useState<date>();

  useEffect(()=>{
    sendDate(value!)
  },[])

  const handleValueChange = (newValue: any) => {
    setValue(newValue);
    sendDate(newValue);
  };

  return (
    <Datepicker
      useRange={false}
      asSingle={true}
      value={value!}
      onChange={handleValueChange}
    />
  );
};
