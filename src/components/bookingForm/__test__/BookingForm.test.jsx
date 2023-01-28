import { describe, test, expect,beforeEach } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { BookingForm } from "../BookingForm";
import { vi } from 'vitest'
import { fetchAPI } from "../../utils/meta_api";
import * as router from 'react-router'
import {act} from 'react-dom/test-utils'

const navigate = vi.fn()

beforeEach(() => {
  vi.spyOn(router, 'useNavigate').mockImplementation(() => navigate)
})

test("initializeTimes use fetchApi should return times",()=>{
  //initializeTimes
  const times = fetchAPI(new Date)
  expect(times).toContain('17:00')
})

describe("valid inputs",()=>{

  describe("render inputs",()=>{
    test("should render all inputs", () => {
      render(<BookingForm />);
      const timeSelect = screen.getByTestId("time");
      const guestSelect = screen.getByTestId("guest");
      const occasionSelect = screen.getByTestId("occasion");
      const datePicker = screen.getByTestId("datepicker");
      const emailInput = screen.getByTestId("email");
    
      expect(timeSelect).to.exist;
      expect(guestSelect).to.exist;
      expect(occasionSelect).to.exist;
      expect(datePicker).to.exist;
      expect(emailInput).to.exist;
    });
  })

  describe("valid inputs",()=>{
    test("should valid data", async()=>{
      const timeSelect = screen.getByTestId("time");
      const guestSelect = screen.getByTestId("guest");
      const occasionSelect = screen.getByTestId("occasion");
      const emailInput = screen.getByTestId("email");

     await act( async()=>{
       fireEvent.change(timeSelect,{target:{value:'17:00'}})
       fireEvent.change(guestSelect,{target:{value:"2"}})
       fireEvent.change(occasionSelect,{target:{value:'Birthday'}})     
       fireEvent.change(emailInput,{target:{value:'pife00@gmail.com'}})
      })
      expect(timeSelect.value).toBe('17:00')
      expect(guestSelect.value).toBe("2")
      expect(occasionSelect.value).toBe('Birthday')
      expect(emailInput.value).toBe('pife00@gmail.com')
    })

  })

})



