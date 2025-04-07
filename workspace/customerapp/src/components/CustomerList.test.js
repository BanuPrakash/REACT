import { fireEvent, render, screen } from '@testing-library/react'
import CustomerList from './CustomerList';

describe("testing <CustomerList/>", () => {
    it("renders <CustomerList />", () => {
        render(<CustomerList />);
        let btns = screen.getAllByRole('button');
        expect(btns.length).toBe(5);
    })

    it("delete a Customer from <CustomerList />", () => {
        render(<CustomerList />);
        let btns = screen.getAllByRole('button');
        fireEvent.click(btns[3]);
        btns = screen.getAllByRole('button');
        expect(btns.length).toBe(4);
    })

    it("filter Customers from <CustomerList />", () => {
        render(<CustomerList />);
        let txtBox = screen.getByPlaceholderText('search by name');
        fireEvent.change(txtBox, { "target": { "value": "Geller" } });
        let btns = screen.getAllByRole('button');
        screen.debug();
        expect(btns.length).toBe(2);
    })

});