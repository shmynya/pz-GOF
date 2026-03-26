class DatabaseConnection {
    private static instance: DatabaseConnection;

    private constructor() { } // Приватний конструктор

    public static getInstance(): DatabaseConnection {
        if (!DatabaseConnection.instance) {
            DatabaseConnection.instance = new DatabaseConnection();
        }
        return DatabaseConnection.instance;
    }

    public query(sql: string) {
        console.log(`Виконується запит: ${sql}`);
    }
}

// Перевірка
const s1 = DatabaseConnection.getInstance();
const s2 = DatabaseConnection.getInstance();
console.log("Singleton працює:", s1 === s2); // true