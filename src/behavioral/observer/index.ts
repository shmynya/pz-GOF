interface Observer {
    update(event: string): void;
}

class SecurityConsole implements Observer {
    update(event: string) { console.log(`[Security Console] Отримано сигнал: ${event}`); }
}

class NetworkMonitor {
    private observers: Observer[] = [];
    subscribe(o: Observer) { this.observers.push(o); }
    notify(event: string) { this.observers.forEach(o => o.update(event)); }
}

const monitor = new NetworkMonitor();
monitor.subscribe(new SecurityConsole());
monitor.notify("Спроба несанкціонованого доступу!");