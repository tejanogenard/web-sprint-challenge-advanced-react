import React from "react";
import { render, fireEvent} from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    //rendering the CheckoutForm Component
    const { getByText } = render(<CheckoutForm />)
    //querying for the form header "Checkout Form"
    const headerForm = getByText(/checkout form/i)
    //asserting that the form header is rendered
    expect(headerForm).toBeInTheDocument()

});















test("form shows success message on submit with form details", () => {
    //rendering the CheckoutForm Component
    const { getByTestId } = render(<CheckoutForm/>)
    
    //querying for the submit button 
    const submitButton = getByTestId(/checkout/i)
    //simulating a button click
    fireEvent.click(submitButton)
    //asserting the success message is being rendered
    const successMessage = getByTestId(/successMessage/i)
    expect(successMessage).toBeInTheDocument()

}); 
