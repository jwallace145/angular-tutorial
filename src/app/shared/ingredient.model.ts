export class Ingredient {

    public name: string;

    public amount: number;

    constructor (name: string, amount: number) {
        this.name = name;
        this.amount = amount;
    }

    // if you add an accessor before argument names in constructors - this
    // is shorthand for creating accessor level fields that are assigned upon
    // instantiation of an object of this class
    // constructor(public name: string, public amount: number) {}
}
