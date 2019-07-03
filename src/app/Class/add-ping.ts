export class AddPing {
    constructor(
        public Type: string,
        public Name: string,
        public Description: string,
        public Amount: string,
        public PaymentDate: string,
        public RecurringType: string,
        public RecurringDate: string,
    ) { }
}
