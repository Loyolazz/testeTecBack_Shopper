export interface CreateCustomerDTO {
    name: string;
    email: string;
    password: string;
}

export interface GetAllReadings {
    customer_id: string;
    measure_type: string;
}