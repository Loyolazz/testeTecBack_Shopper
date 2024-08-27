export class ReadingEntity {
    id: string;
    customerCode: string;
    value: number;
    createdAt: Date;
    updatedAt: Date;

    constructor(id: string, customerCode: string, value: number, createdAt: Date, updatedAt: Date) {
        this.id = id;
        this.customerCode = customerCode;
        this.value = value;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }
}
