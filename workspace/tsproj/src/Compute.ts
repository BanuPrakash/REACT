
import memoize from "./decorator/memoize";
export default class Compute {

    @memoize()
    fibanocci(no: number): number {
        return (no == 0 || no == 1 ) ? no : this.fibanocci(no - 1) + this.fibanocci(no -2);
    }

    @memoize()
    getProduct(id: number, category:string) {
        fetch("...");
    }
}