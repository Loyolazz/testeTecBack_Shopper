import bcrypt from "bcrypt";
import { SignJWT } from "jose";
import { LoginDTO } from "../dtos/auth.dto";
import { CustomerRepository } from "../repositories/customer.repository";

const jwtSecret = process.env.JWT_SECRET;
const customerRepository = new CustomerRepository();

export class AuthService {
    async login(credentials: LoginDTO) {
        const customer = await customerRepository.findByEmail(credentials.email);
        if (!customer || !customer.password_hash) {
            throw new Error("Usuário não encontrado");
        }

        const authorized = bcrypt.compare(credentials.password, customer.password_hash);
        if (!authorized) {
            throw new Error("Não autorizado");
        }

        const jwt = await new SignJWT({ id: customer.id, name: customer.name, email: customer.email })
            .setProtectedHeader({ alg: "HS256" })
            .setExpirationTime("1h")
            .sign(new TextEncoder().encode(jwtSecret));

        return jwt;
    }
}
