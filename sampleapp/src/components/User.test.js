import { fireEvent, render, screen } from '@testing-library/react';
import User from './User';

let mockUser = {
    id: 23,
    firstName: 'Harry',
    lastName: 'Potter'
}

let callback = jest.fn(); // Mock function
it("testing <User /> render()", () => {
    render(<User customer={mockUser} delEvent={(id) => callback(id)} />);
    let elem = screen.queryByText(/Harry/);
    // screen.debug();
    expect(elem).toBeInTheDocument();
});

it("delete <User />", () => {
    render(<User key={mockUser.id} customer={mockUser} delEvent={(id) => callback(id)} />);
    let btn = screen.getByRole('button');
    fireEvent.click(btn);
    expect(callback).toHaveBeenCalledTimes(1);
    expect(callback).toHaveBeenCalledWith(23);
})