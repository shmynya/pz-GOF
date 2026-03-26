class Firewall { protect() { console.log("Фаєрвол активовано"); } }
class DNSServer { start() { console.log("DNS запущено"); } }

class NetworkFacade {
    constructor(private fw = new Firewall(), private dns = new DNSServer()) {}
    startNetwork() {
        this.fw.protect();
        this.dns.start();
        console.log("Мережа готова до роботи");
    }
}

const net = new NetworkFacade();
net.startNetwork();