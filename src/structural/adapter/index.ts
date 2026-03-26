class OldNetworkSystem {
    oldRequest() { return "Дані у старому форматі XML"; }
}

interface NewSystem {
    request(): string;
}

class NetworkAdapter implements NewSystem {
    constructor(private oldSystem: OldNetworkSystem) {}
    request() {
        const data = this.oldSystem.oldRequest();
        return `Adapter: Конвертовано "${data}" у JSON`;
    }
}

const adapter = new NetworkAdapter(new OldNetworkSystem());
console.log(adapter.request());