export interface CreateImageDTO {
    customer_id: string;
    base64: Buffer;
}

export interface GetImageDTO {
    id: string;
}
