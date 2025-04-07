import { fireEvent, render, screen } from '@testing-library/react'
import CustomerRow from './CustomerRow';

//for <CustomerRow> props [customer and delEvent] are dependencies 
// coming from CustomerList

describe("testing <CustomerRow/> in isolation", () => {
    let mockCustomer = {
        "id": 14,
        "firstName": "Harry",
        "lastName": "Potter"
    }

    let callback = jest.fn(); // mock callback instead of deleteCustomer() from CustomerList

    it("render <CustomerRow />", () => {
        render(<CustomerRow customer={mockCustomer} delEvent={callback} />);

        let elem = screen.getByText(/Harry/);
        screen.debug();
        expect(elem).toBeInTheDocument();
    })

    it("delete a Customer <CustomerRow />", () => {
        render(<CustomerRow customer={mockCustomer} delEvent={callback} />);

        let btn = screen.getByRole('button');
        fireEvent.click(btn);
        expect(callback).toBeCalledTimes(1);
        expect(callback).toBeCalledWith(14);
    })
});