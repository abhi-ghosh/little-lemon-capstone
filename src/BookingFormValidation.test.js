import { render, screen, cleanup } from "@testing-library/react";
import BookingForm from "./BookingForm";
import { useNavigate, useOutletContext } from "react-router";

jest.mock("react-router", () => ({
  ...jest.requireActual("react-router"),
  useNavigate: jest.fn(),
  useOutletContext: jest.fn(),
}));

describe("BookingForm validation", () => {
  beforeEach(() => {
    useNavigate.mockReturnValue(jest.fn());
  });

  afterEach(() => {
    cleanup();
    jest.clearAllMocks();
  });

  test("enables Next button only when form data is valid", () => {
    // INVALID FORM
    useOutletContext.mockReturnValue({
      formData: {
        name: "",
        email: "bademail",
        phone: "",
        date: "",
        time: "",
        guests: 10,
        occasion: ""
      },
      setFormData: jest.fn(),
      times: ["18:00"]
    });

    render(<BookingForm />);

    expect(
      screen.getByRole("button", { name: /next/i })
    ).toBeDisabled();

    // 🧹 Unmount first render
    cleanup();

    // VALID FORM
    useOutletContext.mockReturnValue({
      formData: {
        name: "Abhi",
        email: "abhi@test.com",
        phone: "9999999999",
        date: "2026-02-14",
        time: "18:00",
        guests: 2,
        occasion: ""
      },
      setFormData: jest.fn(),
      times: ["18:00"]
    });

    render(<BookingForm />);

    expect(
      screen.getByRole("button", { name: /next/i })
    ).toBeEnabled();
  });
});
