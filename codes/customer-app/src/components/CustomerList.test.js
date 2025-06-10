import { fireEvent, render, screen } from '@testing-library/react'
import CustomerList from './CustomerList'

// Assemble
describe("testing <CustomerList />", () => {
    // test spec
    it("testing rendering <CustomerList />", () => {
        render(<CustomerList />); // in memory render of DOM
        // screen.debug();
        let btns = screen.getAllByRole('button');
        expect(btns.length).toBe(6);
    })
    it("testing delete action <CustomerList />", () => {
        render(<CustomerList />); // in memory render of DOM
        // screen.debug();
        let btns = screen.getAllByRole('button');
        fireEvent.click(btns[3]);
        btns = screen.getAllByRole('button');
        expect(btns.length).toBe(5);
    })

    it("testing filter action <CustomerList />", () => {
        render(<CustomerList />); // in memory render of DOM
        // screen.debug();
        let txtBox = screen.getByPlaceholderText(/search by name/);
        fireEvent.change(txtBox,{"target": {"value":"Geller"}});
        let btns = screen.getAllByRole('button');
        expect(btns.length).toBe(2);
    })
})