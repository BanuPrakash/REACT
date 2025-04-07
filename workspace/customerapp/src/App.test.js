import {render, screen} from '@testing-library/react'
import App from './App'
// assemble
 describe("testing <App/>", () => {
    // test spec
    it("should render <App/>", () => {
        render(<App/>); // not ReactDOM.render --> in memory DOM
        // screen.debug();
        const h1Comp = screen.getByText(/Customer List/i);
        expect(h1Comp).toBeInTheDocument();
    })
 })