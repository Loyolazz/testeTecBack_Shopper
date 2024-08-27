export class ReadingEntity {
    id: string;
    customerCode: string;
    value: number;
    measureType: string | null;
    measureUuid: string;
    measureDatetime: Date;
    createdAt: Date;
    updatedAt: Date;

    constructor(
        id: string,
        customerCode: string,
        value: number,
        measureType: string | null,
        measureUuid: string,
        measureDatetime: Date,
        createdAt: Date,
        updatedAt: Date
    ) {
        this.id = id;
        this.customerCode = customerCode;
        this.value = value;
        this.measureType = measureType;
        this.measureUuid = measureUuid;
        this.measureDatetime = measureDatetime;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }
}