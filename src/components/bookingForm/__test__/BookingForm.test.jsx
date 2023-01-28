import { describe, test, expect } from "vitest";
import { render, screen,fireEvent } from "@testing-library/react";
import { BookingForm } from "../BookingForm";

describe("BookingForm", () => {

  test("should render all inputs", () => {
    render(<BookingForm />);
    const timeSelect = screen.getByTestId('time')
    const guestSelect = screen.getByTestId('guest')
    const occasionSelect =screen. getByTestId('occasion')
    const datePicker = screen.getByTestId('datepicker')
    const emailInput = screen.getByTestId('email')

    expect(timeSelect).to.exist
    expect(guestSelect).to.exist
    expect(occasionSelect).to.exist
    expect(datePicker).to.exist
    expect(emailInput).to.exist

  });
});