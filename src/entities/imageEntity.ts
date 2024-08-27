export class ImageEntity {
    id: string;
    customerCode: string;
    imageUrl: string;
    createdAt: Date;
    updatedAt: Date;

    constructor(
        id: string,
        customerCode: string,
        imageUrl: string,
        createdAt: Date,
        updatedAt: Date
    ) {
        this.id = id;
        this.customerCode = customerCode;
        this.imageUrl = imageUrl;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }
}
