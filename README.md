# Teste Técnico Back-End - Shopper - Web Full-Stack Júnior

# Teste Técnico Back-End

This project is a backend service built with Node.js and TypeScript to manage water and gas consumption readings, with integration to the Google Gemini API for image processing.

## Getting Started

### Prerequisites

- Node.js v18.x
- Docker & Docker Compose
- PostgreSQL

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/yourproject.git
   cd yourproject

2. Install dependencies:
   ```sh
   npm install

3. Set up environment variables:
   ```sh
   cp .env.example .env
   
4. Build and start the Docker containers:
   ```sh
   docker-compose up --build

5. Entrar no Container
   ```sh
   docker exec -it testetecback_shopper-app-1 /bin/sh

6. Running the Project
To start the server:
   ```sh
   npm run start

The server will run on http://localhost:3000.

7. Running Tests
   ```sh
   npm run dev

## Project Structure