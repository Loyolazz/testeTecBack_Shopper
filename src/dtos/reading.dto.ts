export interface CriarAnelDTO {
    nome: string;
    poder: string;
    portador: string;
    forjadoPor: string;
    imagem: string;
    portadorId: string;
}

export interface CreateReadingDTORequest {
    image: string;
    customer_code: string;
    measure_datetime: Date;
    measure_type: string;
}

export interface CreateReadingResponseDTO {
    image_url: string;
    measure_value: number;
    measure_uuid: string;
}

export interface AtualizarAnelDTO {
    nome: string;
    poder: string;
    portador: string;
    forjadoPor: string;
    imagem: string;
}

export interface DeletarAnelDTO {
    id: string;
    portadorId: string;
}