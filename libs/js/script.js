window.onload = Load;

var marca_mp;

var myComputer = new Computer();

var arrayMicroprocessor = [];
var arrayCooler = [];
var arrayMotherBoard = [];
var arrayStorageDisk = [];
var arrayRam = [];
var arrayVideoCard = [];
var arrayPowerSupply = [];
var arrayComputerCase = [];
var arrayComputerScreen = [];

var PASO = 1;
var precioTotal = 0;

function Load(){
    document.getElementById("btn_select_intel").addEventListener('click', function () { SelectMarcaMP("INTEL"); });
    document.getElementById("btn_select_amd").addEventListener('click', function () { SelectMarcaMP("AMD"); });
    document.getElementById("btn_continuar_seleccion").addEventListener('click', ContinuarSeleccion);

    arrayMicroprocessor.push(new Microprocessor("AMD", "Ryzen 5", 37999, "./images/microprocessor/mc_amd_0001.jpg", 4.5));
    arrayMicroprocessor.push(new Microprocessor("AMD", "Ryzen 7", 54999, "./images/microprocessor/mc_amd_0002.jpg", 5.0));
    arrayMicroprocessor.push(new Microprocessor("AMD", "Ryzen 9", 119999, "./images/microprocessor/mc_amd_0003.jpg", 5.7));
    arrayMicroprocessor.push(new Microprocessor("INTEL", "i3", 13999, "./images/microprocessor/mc_intel_0001.png", 4.5));
    arrayMicroprocessor.push(new Microprocessor("INTEL", "i5", 27999, "./images/microprocessor/mc_intel_0002.jpg", 5.0));
    arrayMicroprocessor.push(new Microprocessor("INTEL", "i7", 49999, "./images/microprocessor/mc_intel_0003.jpg", 5.7));

    arrayCooler.push(new Cooler("Aerocool", "Verkho 2", 2699, "./images/cooler/cooler_0001.png", false));
    arrayCooler.push(new Cooler("Aerocool", "Air Frost 2 FRGB", 3299, "./images/cooler/cooler_0002.jpg", false));
    arrayCooler.push(new Cooler("Master", "ML120L V2 RGB", 13999, "./images/cooler/cooler_0003.jpg", true));

    arrayMotherBoard.push(new Motherboard("Asus Prime", "A320M-K AM4", 7999, "./images/motherboard/mb_0001.jpg"));
    arrayMotherBoard.push(new Motherboard("Asrock", "A520M-HVS AM4", 10999, "./images/motherboard/mb_0002.jpg"));
    arrayMotherBoard.push(new Motherboard("Gigabyte", "B550M AORUS PRO AM4", 29999, "./images/motherboard/mb_0003.png"));

    arrayStorageDisk.push(new StorageDisk("WD Blue", "Rigido 1TB", 6499, "./images/storage/st_0001.png", 1024));
    arrayStorageDisk.push(new StorageDisk("Gigabyte", "SSD 480GB", 10699, "./images/storage/st_0002.jpg", 1024));
    arrayStorageDisk.push(new StorageDisk("ADATA", "SSD M2 500GB", 6499, "./images/storage/st_0003.jpg", 1024));

    arrayRam.push(new Motherboard("Kingston", "Fury Beast 4GB", 4299, "./images/ram/ram_0001.jpg"));
    arrayRam.push(new Motherboard("Kingston", "Fury Beast 8GB", 8199, "./images/ram/ram_0002.jpg"));
    arrayRam.push(new Motherboard("Kingston", "Fury Beast 8GB RGB", 9499, "./images/ram/ram_0003.png"));

    arrayVideoCard.push(new VideoCard("NVIDIA", "GeForce GT 730", 11999, "./images/videocard/vc_0001.png", 2));
    arrayVideoCard.push(new VideoCard("NVIDIA", "GeForce RTX 2060", 139999, "./images/videocard/vc_0002.png", 8));
    arrayVideoCard.push(new VideoCard("NVIDIA", "GeForce RTX 3080 TI", 309999, "./images/videocard/vc_0003.jpg", 12));

    arrayPowerSupply.push(new PowerSupply("Gigabyte", "P450B Plus Bronce", 5899, "./images/powersupply/ps_0001.png", 450));
    arrayPowerSupply.push(new PowerSupply("Aerocool", "Cylon 80 Plus Bronce", 6299, "./images/powersupply/ps_0002.jpg", 500));
    arrayPowerSupply.push(new PowerSupply("Gigabyte", "P750GM 80 Plus Gold", 19499, "./images/powersupply/ps_0003.jpg", 750));

    arrayComputerCase.push(new ComputerCase("AZZA", "Luminus 110F", 5299, "./images/computercase/cc_0001.jpg", false));
    arrayComputerCase.push(new ComputerCase("MasterBox", "K501L", 7299, "./images/computercase/cc_0002.jpg", true));
    arrayComputerCase.push(new ComputerCase("Thermaltake", "H550 TG ARGB", 12999, "./images/computercase/cc_0003.jpg", true));

    arrayComputerScreen.push(new ComputerScreen("LG", "20MK400H-B VGA/HDMI", 26999, "./images/computerscreen/cs_0001.jpg", 20, 60));
    arrayComputerScreen.push(new ComputerScreen("IC3", "2200DFE IPS HDMI", 28999, "./images/computerscreen/cs_0002.png", 22, 60));
    arrayComputerScreen.push(new ComputerScreen("ViewSonic", "VX3268-2KPC-MHD", 86999, "./images/computerscreen/cs_0003.jpg", 32, 144));

    if (sessionStorage.getItem("paso") != null) {
        PASO = parseInt(sessionStorage.getItem("paso"));
        marca_mp = sessionStorage.getItem("marca_mp").toString();

        objComputerAux = JSON.parse(sessionStorage.getItem("myComputer"));
        myComputer.microprocessor = objComputerAux.microprocessor;
        myComputer.motherboard = objComputerAux.motherboard;
        myComputer.videoCard = objComputerAux.videoCard;
        myComputer.arrayStorageDisk = objComputerAux.arrayStorageDisk;
        myComputer.cooler = objComputerAux.cooler;
        myComputer.arrayRam = objComputerAux.arrayRam;
        myComputer.powerSupplay = objComputerAux.powerSupplay;
        myComputer.computerCase = objComputerAux.computerCase;
        myComputer.computerScreen = objComputerAux.computerScreen;

        SelectMarcaMP(marca_mp);
    }
}

function SelectMarcaMP(marca) {
    marca_mp = marca;

    document.getElementById("content_logos_mp").classList.add("hidden");
    document.getElementById("wrapper_components").classList.remove("hidden");

    SelectComponent();
}

function SelectComponent() {
    sessionStorage.setItem("paso", PASO);
    sessionStorage.setItem("marca_mp", marca_mp);
    sessionStorage.setItem("myComputer", JSON.stringify(myComputer));

    document.getElementById("content_components").innerHTML = "";

    let btn_continuar_seleccion = document.getElementById("btn_continuar_seleccion");
    btn_continuar_seleccion.setAttribute("disabled", "");

    switch (PASO) {
        case 1: SelectMicroprocessor(); break;
        case 2: SelectCooler(); btn_continuar_seleccion.removeAttribute("disabled"); break;
        case 3: SelectMotherBoard(); break;
        case 4: SelectStorageDisk(); break;
        case 5: SelectRam(); break;
        case 6: SelectVideoCard(); btn_continuar_seleccion.removeAttribute("disabled"); break;
        case 7: SelectPowerSupply(); break;
        case 8: SelectComputerCase(); break;
        case 9: SelectComputerScreen(); btn_continuar_seleccion.removeAttribute("disabled"); break;
        default: ViewResumen(); break;
    }
}

function ContinuarSeleccion() {
    PASO++;
    SelectComponent();
}

function ViewResumen() {
    document.getElementById("wrapper_components").classList.add("hidden");
    document.getElementById("content_resumen").classList.remove("hidden");

    console.log(myComputer);

    document.getElementById("lbl_precio_total").innerText = "Precio Total $" + myComputer.precioTotal.toString();
}

function SelectMicroprocessor() {
    document.getElementById("h3_title_component").innerText = "Microprocesador";
    arrayMicroprocessor.forEach(item => {
        if (item.marca == marca_mp) {
            let descripcion = item.marca + " " + item.modelo;
            let box_component = CreateBoxComponent("microprocessor", descripcion, item);

            document.getElementById("content_components").appendChild(box_component);
        }
    });
}

function SelectCooler() {
    document.getElementById("h3_title_component").innerText = "Cooler";
    arrayCooler.forEach(item => {
        let descripcion = item.marca + " " + item.modelo;
        let box_component = CreateBoxComponent("cooler", descripcion, item);

        document.getElementById("content_components").appendChild(box_component);
    });
}

function SelectMotherBoard() {
    document.getElementById("h3_title_component").innerText = "Placa Madre";
    arrayMotherBoard.forEach(item => {
        let descripcion = item.marca + " " + item.modelo;
        let box_component = CreateBoxComponent("motherboard", descripcion, item);

        document.getElementById("content_components").appendChild(box_component);
    });
}

function SelectStorageDisk() {
    document.getElementById("h3_title_component").innerText = "Almacenamiento";
    arrayStorageDisk.forEach(item => {
        let descripcion = item.marca + " " + item.modelo;
        let box_component = CreateBoxComponent("arrayStorageDisk", descripcion, item, true, 4);

        document.getElementById("content_components").appendChild(box_component);
    });
}

function SelectRam() {
    document.getElementById("h3_title_component").innerText = "Ram";
    arrayRam.forEach(item => {
        let descripcion = item.marca + " " + item.modelo;
        let box_component = CreateBoxComponent("arrayRam", descripcion, item, true, 4);

        document.getElementById("content_components").appendChild(box_component);
    });
}

function SelectVideoCard() {
    document.getElementById("h3_title_component").innerText = "Placa de Video";
    arrayVideoCard.forEach(item => {
        let descripcion = item.marca + " " + item.modelo;
        let box_component = CreateBoxComponent("videoCard", descripcion, item);

        document.getElementById("content_components").appendChild(box_component);
    });
}

function SelectPowerSupply() {
    document.getElementById("h3_title_component").innerText = "Fuente";
    arrayPowerSupply.forEach(item => {
        let descripcion = item.marca + " " + item.modelo;
        let box_component = CreateBoxComponent("powerSupplay", descripcion, item);

        document.getElementById("content_components").appendChild(box_component);
    });
}

function SelectComputerCase() {
    document.getElementById("h3_title_component").innerText = "Gabinete";
    arrayComputerCase.forEach(item => {
        let descripcion = item.marca + " " + item.modelo;
        let box_component = CreateBoxComponent("computerCase", descripcion, item);

        document.getElementById("content_components").appendChild(box_component);
    });
}

function SelectComputerScreen() {
    document.getElementById("h3_title_component").innerText = "Monitor";
    arrayComputerScreen.forEach(item => {
        let descripcion = item.marca + " " + item.modelo;
        let box_component = CreateBoxComponent("computerScreen", descripcion, item);

        document.getElementById("content_components").appendChild(box_component);
    });
}

function CreateBoxComponent(nameComponent, description, objComponet, multiple = false, limit = 1){
    let box_component = document.createElement("a");
    box_component.classList.add("box-component");

    let lbl_cantidad_components = document.createElement("label");
    lbl_cantidad_components.classList.add("cantidad-components");
    lbl_cantidad_components.innerText = "0";

    box_component.appendChild(lbl_cantidad_components);

    if (multiple) {
        box_component.addEventListener("click",
            function () {
                if (myComputer[nameComponent] == null) {
                    myComputer[nameComponent] = [];
                }

                myComputer[nameComponent].push(objComponet);
                lbl_cantidad_components.innerText = myComputer[nameComponent].length.toString();
                
                if (myComputer[nameComponent].length == limit) {
                    precioTotal += objComponet.precio;
                    PASO++;
                    SelectComponent();
                } else {
                    document.getElementById("btn_continuar_seleccion").removeAttribute("disabled");
                }
            }
        );
    } else {
        lbl_cantidad_components.classList.add("hidden");
        box_component.addEventListener("click",
            function () {
                myComputer[nameComponent] = objComponet;
                precioTotal += objComponet.precio;
                PASO++;
                SelectComponent();
            }
        );
    }

    let content_imagen = document.createElement("div");
    content_imagen.classList.add("imagen");

    let img = document.createElement("img");
    img.setAttribute("src", objComponet.urlImagen);

    content_imagen.appendChild(img);
    
    let content_descripcion = document.createElement("div");
    content_descripcion.classList.add("descripcion");

    let lblDescripcion = document.createElement("label");
    lblDescripcion.innerText = description;

    content_descripcion.appendChild(lblDescripcion);
    
    let content_precio = document.createElement("div");
    content_precio.classList.add("precio");

    let lblPrecio = document.createElement("label");
    lblPrecio.innerText = "$" + objComponet.precio.toString();

    content_precio.appendChild(lblPrecio);

    box_component.appendChild(content_imagen);
    box_component.appendChild(content_descripcion);
    box_component.appendChild(content_precio);

    return box_component;
}