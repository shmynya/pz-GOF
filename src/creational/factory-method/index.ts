interface Logger {
    log(message: string): void;
}

class ConsoleLogger implements Logger {
    log(message: string) { console.log(`[Console]: ${message}`); }
}

class FileLogger implements Logger {
    log(message: string) { console.log(`[File]: Запис у файл: ${message}`); }
}

abstract class LoggerCreator {
    abstract createLogger(): Logger;
    render(msg: string) {
        const logger = this.createLogger();
        logger.log(msg);
    }
}

class ConsoleLoggerCreator extends LoggerCreator {
    createLogger() { return new ConsoleLogger(); }
}

// Використання
const creator = new ConsoleLoggerCreator();
creator.render("Система запущена");