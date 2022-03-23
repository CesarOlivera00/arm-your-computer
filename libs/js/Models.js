class BasicData {
    constructor (marca, modelo, precio, urlImagen) {
        this.marca = marca;
        this.modelo = modelo;
        this.precio = precio;
        this.urlImagen = urlImagen;
    }
}

class Computer {
    constructor(microprocessor, motherboard, videoCard, arrayStorageDisk, cooler, arrayRam, powerSupplay, computerCase, computerScreen) {
        this.microprocessor = microprocessor;
        this.motherboard = motherboard;
        this.videoCard = videoCard;
        this.arrayStorageDisk = arrayStorageDisk;
        this.cooler = cooler;
        this.arrayRam = arrayRam;
        this.powerSupplay = powerSupplay;
        this.computerCase = computerCase;
        this.computerScreen = computerScreen;
    }

    get precioTotal() {
        let total = this.microprocessor.precio + this.motherboard.precio + this.powerSupplay.precio + this.computerCase.precio;

        if (this.videoCard != null) total += this.videoCard.precio;
        if (this.cooler != null) total += this.cooler.precio;
        if (this.computerScreen != null) total += this.computerScreen.precio;

        this.arrayStorageDisk.forEach(item => {
            total += item.precio;
        });

        this.arrayRam.forEach(item => {
            total += item.precio;
        });

        return total;
    }
}

class Microprocessor extends BasicData {
    constructor (marca, modelo, precio, urlImagen, velocidad) {
        super(marca, modelo, precio, urlImagen);
        this.velocidad = velocidad;
    }
}

class Motherboard extends BasicData {
    constructor (marca, modelo, precio, urlImagen) {
        super(marca, modelo, precio, urlImagen);
    }
}

class VideoCard extends BasicData {
    constructor (marca, modelo, precio, urlImagen, velocidad) {
        super(marca, modelo, precio, urlImagen);
        this.velocidad = velocidad;
    }
}

class StorageDisk extends BasicData {
    constructor (marca, modelo, precio, urlImagen, capacidad) {
        super(marca, modelo, precio, urlImagen);
        this.capacidad = capacidad;
    }
}

class Cooler extends BasicData {
    constructor (marca, modelo, precio, urlImagen, liquido) {
        super(marca, modelo, precio, urlImagen);
        this.liquido = liquido;
    }
}

class Ram extends BasicData {
    constructor (marca, modelo, precio, urlImagen, velocidad) {
        super(marca, modelo, precio, urlImagen);
        this.velocidad = velocidad;
    }
}

class PowerSupply extends BasicData {
    constructor (marca, modelo, precio, urlImagen, potencia) {
        super(marca, modelo, precio, urlImagen);
        this.potencia = potencia;
    }
}

class ComputerCase extends BasicData {
    constructor (marca, modelo, precio, urlImagen, rgb) {
        super(marca, modelo, precio, urlImagen);
        this.rgb = rgb;
    }
}

class ComputerScreen extends BasicData {
    constructor (marca, modelo, precio, urlImagen, pulgadas, fps) {
        super(marca, modelo, precio, urlImagen);
        this.pulgadas = pulgadas;
        this.fps = fps;
    }
}