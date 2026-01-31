import { render, screen } from "@testing-library/react";
import BookingForm from "./BookingForm";
import { useNavigate, useOutletContext } from "react-router";

// Mock react-router hooks
jest.mock("react-router", () => ({
  ...jest.requireActual("react-router"),
  useNavigate: jest.fn(),
  useOutletContext: jest.fn(),
}));

describe("BookingForm", () => {
  beforeEach(() => {
    useNavigate.mockReturnValue(jest.fn());

    useOutletContext.mockReturnValue({
      formData: {
        name: "",
        email: "",
        date: "",
        time: "",
        guests: 1,
        occasion: ""
      },
      setFormData: jest.fn(),
      times: ["18:00", "18:30", "19:00"]
    });
  });

  test("renders the heading 'Book a Table'", () => {
    render(<BookingForm />);

    const heading = screen.getByRole("heading", {
      name: /book a table/i,
    });

    expect(heading).toBeInTheDocument();
  });
});
