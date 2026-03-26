interface EncryptionStrategy {
    encrypt(data: string): string;
}

class AESEncryption implements EncryptionStrategy {
    encrypt(data: string) { return `AES(${data})`; }
}

class DESEncryption implements EncryptionStrategy {
    encrypt(data: string) { return `DES(${data})`; }
}

class SafeCommunicator {
    constructor(private strategy: EncryptionStrategy) {}
    send(msg: string) { console.log("Надсилаю:", this.strategy.encrypt(msg)); }
}

const comm = new SafeCommunicator(new AESEncryption());
comm.send("Секретні дані");