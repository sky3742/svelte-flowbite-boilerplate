# Svelte Flowbite Boilerplate

This is a boilerplate project for creating web applications with Svelte and Flowbite. It provides a starting point with the basic setup for integrating Svelte and Flowbite, allowing you to quickly start building beautiful and responsive web interfaces.

## Features

- Integration of Svelte with Flowbite for easy and responsive UI development.
- Basic project structure and configuration.
- Development server with hot-reloading for a smooth development experience.
- Production build script for optimizing and bundling your application.

## Technologies Used

- SvelteKit
- TypeScript
- Flowbite
- Tailwind CSS
- Turso (SQLite)
- Drizzle Kit

## Getting Started

Follow these steps to get started with the Svelte Flowbite boilerplate:

### Prerequisites

- Node.js
- npm
- [Drizzle Kit](https://orm.drizzle.team/)
- [Turso](https://turso.tech/) (optional)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/sky3742/svelte-flowbite-boilerplate.git
   ```

2. **Navigate into the project directory**

   ```bash
   cd svelte-flowbite-boilerplate
   ```

3. **Install the dependencies**

   ```bash
   npm install
   ```

4. **Copy the `.env.example` to `.env`**

   ```bash
   cp .env.example .env
   ```

5. **Update the `.env` file with your db connection details**

   Update the following values in the `.env` file with your db connection details:

   ```bash
   TURSO_URL=your_turso_url
   TURSO_AUTH_TOKEN=your_turso_auth_token
   ```

6. **Start the development server**

   ```bash
   npm run dev
   ```

7. **Open your browser and navigate to** `http://localhost:5173` to see the application running.

## Migrating Database

To migrate your database, follow these steps:

1. **Generate SQL Migration Files**

   Run the following command to compare and generate the differences in the model schema into SQL files in the `drizzle` folder:

   ```bash
   npm run db-generate
   ```

2. **Run Migration**

   Once the SQL migration files are generated, run the following command to utilize the built-in `migrate` function from `libsql/migrator` to migrate the database using the SQL files in the `drizzle` folder:

   ```bash
   npm run db-migrate
   ```

3. **Open Database Viewer**

   To open the database viewer provided by Drizzle Kit, run the following command:

   ```bash
   npm run db-studio
   ```

4. **Verify Migration**

   After the migration is complete, verify that the migration was successful by checking your database schema and ensuring that your data is intact.

## Building for Production

To build the application for production, use the following command:

```bash
npm run build
```

This will create an optimized version of your application in the `.svelte-kit/output` directory, ready to be deployed to a web server.

## Demo

[https://svelte-flowbite-boilerplate.pages.dev/](https://svelte-flowbite-boilerplate.pages.dev/)

## Contributing

Contributions are welcome! If you have any ideas, suggestions, or improvements, feel free to open an issue or create a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
