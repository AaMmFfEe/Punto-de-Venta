const productos = [
    // Snacks and Sweets
    ["001", "Patatas Fritas Clásicas", 2.50],
    ["002", "Golosinas de Fruta", 1.99],
    ["003", "Chocolate Negro", 3.50],
    ["004", "Galletas de Mantequilla", 1.75],
    ["005", "Snack de Almendras", 4.20],
    ["006", "Bocaditos de Queso", 2.99],
    ["007", "Barritas de Cereal", 3.75],
    ["008", "Dulce de Leche", 3.10],
    ["009", "Frutos Secos Mixtos", 5.50],
    ["010", "Chocolates Artesanales", 4.99],

    // Beverages
    ["011", "Agua Mineral (500ml)", 1.50],
    ["012", "Refresco de Limón", 2.25],
    ["013", "Café Soluble", 4.50],
    ["014", "Té de Hierbas", 3.00],
    ["015", "Bebida Energética", 2.75],
    ["016", "Leche Entera (1L)", 2.80],
    ["017", "Zumo de Naranja", 3.99],
    ["018", "Refresco de Cola", 2.10],
    ["019", "Agua con Gas", 2.50],
    ["020", "Café Americano", 3.50],

    // Dairy and Refrigerated Items
    ["021", "Yogur Natural", 1.85],
    ["022", "Queso Fresco", 4.50],
    ["023", "Huevos (Docena)", 4.80],
    ["024", "Mantequilla", 3.20],
    ["025", "Leche Desnatada", 2.60],
    ["026", "Requesón", 2.50],
    ["027", "Queso Manchego", 6.80],
    ["028", "Mantequilla de Maní", 3.90],
    ["029", "Yogur de Frutas", 3.50],
    ["030", "Queso de Cabra", 7.50],

    // Packaged Foods and Prepared Meals
    ["031", "Pavo Cocido", 5.99],
    ["032", "Sándwich de Jamón", 4.75],
    ["033", "Tostadas de Aguacate", 3.50],
    ["034", "Tortilla de Patatas", 4.25],
    ["035", "Ensalada de Pasta", 5.25],
    ["036", "Sopa Preparada", 3.80],
    ["037", "Pescado en Lata", 3.50],
    ["038", "Atún en Aceite", 4.10],
    ["039", "Pan Integral", 2.99],
    ["040", "Fruta Fresca (Manzana)", 1.99],

    // Household and Cleaning Supplies
    ["041", "Papel Higiénico (Rollo)", 4.50],
    ["042", "Jabón de Manos", 1.25],
    ["043", "Detergente Líquido", 6.50],
    ["044", "Toallitas Húmedas", 2.00],
    ["045", "Detergente para Ropa", 10.99],
    ["046", "Bolsas de Basura", 3.75],
    ["047", "Papel de Cocina", 2.30],
    ["048", "Desinfectante Multiusos", 5.50],
    ["049", "Bolsas de Plástico", 1.40],
    ["050", "Bolsas de Basura Grandes", 8.99],

    // Personal Care and Grooming
    ["051", "Pasta de Dientes", 2.40],
    ["052", "Champú", 4.00],
    ["053", "Jabón Corporal", 3.10],
    ["054", "Desodorante", 3.80],
    ["055", "Cepillo de Dientes", 1.50],
    ["056", "Toallitas Húmedas (Baby)", 2.10],
    ["057", "Crema para Manos", 5.80],
    ["058", "Champú Seco", 3.50],
    ["059", "Maquinilla de Afeitar", 8.25],
    ["060", "Gel de Baño", 4.30],

    // Miscellaneous and Drinks
    ["061", "Batería AA", 3.99],
    ["062", "Pilhas AAA", 4.25],
    ["063", "Batería de Repuesto", 7.50],
    ["064", "Bolsa de Plástico Grande", 1.80],
    ["065", "Burbujas de Baño", 5.99],
    ["066", "Velas Aromáticas", 6.00],
    ["067", "Vaso de Vidrio", 2.50],
    ["068", "Bolsas de Bolsillo", 1.30],
    ["069", "Dulce de Frutas", 3.00],
    ["070", "Sal Fría", 1.10],

    // Expanding the list to ensure 100+ products (using repetition and variation)
    ["071", "Snack Salado Premium", 5.50],
    ["072", "Bebida Fría (Sprite)", 2.30],
    ["073", "Café Descafeinado", 3.60],
    ["074", "Queso Blanco", 4.10],
    ["075", "Aceite de Oliva", 8.50],
    ["076", "Azúcar", 2.15],
    ["077", "Café en Grano", 5.00],
    ["078", "Bolsa de Bolsillo (Set)", 2.50],
    ["079", "Jabón de Baño Grande", 6.99],
    ["080", "Toallitas Húmedas (Para Bebés)", 3.50],

    ["081", "Pan de Molde", 2.75],
    ["082", "Mermelada de Fresa", 3.30],
    ["083", "Aceitunas", 2.90],
    ["084", "Tomates en Lata", 2.80],
    ["085", "Pimienta Negra", 2.60],
    ["086", "Ajo", 1.50],
    ["087", "Salsa de Tomate", 3.10],
    ["088", "Aceitunas Aliñadas", 4.50],
    ["089", "Salsas de Picante", 4.80],
    ["090", "Miel", 5.30],

    ["091", "Bebida con Cítricos", 2.90],
    ["092", "Fruta Fresca (Plátano)", 1.75],
    ["093", "Fruta Fresca (Manzana)", 1.99],
    ["094", "Leche en Polvo", 4.00],
    ["095", "Harina de Trigo", 1.90],
    ["096", "Sal", 1.20],
    ["097", "Azúcar Morena", 2.20],
    ["098", "Mantequilla sin Sal", 3.40],
    ["099", "Leche de Coco", 3.80],
    ["100", "Mantequilla de Almendras", 4.90],

    ["101", "Champú para Cabello", 5.00],
    ["102", "Acondicionador", 4.50],
    ["103", "Desodorante Roll-on", 3.80],
    ["104", "Crema de Afeitar", 6.25],
    ["105", "Esencia para Lavandería", 7.00],
    ["106", "Limpiador Multiusos", 5.99],
    ["107", "Bolsas de Basura (Pequeñas)", 1.10],
    ["108", "Toallitas Húmedas (Adulto)", 2.40],
    ["109", "Jabón de Baño Sólido", 3.30],
    ["110", "Bolsas de Polietileno", 1.50],

    // Further variety for the 100+ requirement
    ["111", "Frutos Secos (Almendras)", 6.50],
    ["112", "Frutos Secos (Albaricoques)", 7.90],
    ["113", "Bebida con Cafeína", 3.25],
    ["114", "Snack de Queso", 3.99],
    ["115", "Tostadas de Pavo", 4.50],
    ["116", "Sopa de Tomate", 3.80],
    ["117", "Agua con Limón", 2.50],
    ["118", "Dulces de Frutas Secas", 4.60],
    ["119", "Champú para Bebés", 3.90],
    ["120", "Jabón de Lavavajillas", 5.75],
    
    ["121", "Café Descafeinado", 3.60],
    ["122", "Té Negro", 2.80],
    ["123", "Leche de Aveia", 4.40],
    ["124", "Mantequilla de Cacahuete", 4.10],
    ["125", "Pasta de Dientes (Grande)", 3.50],
    ["126", "Cepillo de Dientes", 1.50],
    ["127", "Pasta Dental (Mini)", 1.25],
    ["128", "Champú de Acondicionamiento", 4.20],
    ["129", "Crema de Manos (Grande)", 8.00],
    ["130", "Detergente para Ropa (Grande)", 12.50],

    ["131", "Galletas de Arroz", 1.60],
    ["132", "Snack de Frutos Secos (Mix)", 4.00],
    ["133", "Pavo en Lonchas", 5.50],
    ["134", "Jamón Serrano", 6.00],
    ["135", "Sándwich de Queso", 3.75],
    ["136", "Tomates Frescos", 2.50],
    ["137", "Lechuga", 1.50],
    ["138", "Limones", 1.80],
    ["139", "Aguacate", 3.00],
    ["140", "Aceite de Girasol", 6.50],
];

var total = 0;
var subtotal = 0;

function buscarProducto(Event){

    if(event.keyCode===13){

        var cantidad = 1;
        var codigo_producto = document.getElementById("codigo_producto").value;

        if (codigo_producto.indexOf("*") === -1){
            cantidad = 1;
        }else{
            cantidad = codigo_producto.split("*")[0];
            codigo_producto = codigo_producto.split("*")[1];
        }
        
        for (let i = 0; i < productos.length; i++) {

            if (productos[i][0] === codigo_producto) {
                alert(productos [i][1])

                var tabla =document.getElementById("cuerpo");

                var renglon = tabla.insertRow();

                celda1 = renglon.insertCell(0);
                celda2 = renglon.insertCell(1);
                celda3 = renglon.insertCell(2);
                celda4 = renglon.insertCell(3);

                celda1.setAttribute("style","text-align: center")
                celda2.setAttribute("style","text-align: center")
                celda3.setAttribute("style","text-align: center")
                celda4.setAttribute("style","text-align: center")

                celda1.innerHTML = cantidad
                celda2.innerHTML = productos[i][1]
                celda3.innerHTML = productos[i][2].toFixed(2)
                subtotalcantidad = parseInt(cantidad)*parseFloat(productos[i][2].toFixed(2))
                celda4.innerHTML = subtotalcantidad

                total += parseFloat(subtotalcantidad.toFixed(2));

                document.getElementById("total").innerHTML = "$" + total.toFixed(2).toString();
                subtotalcantidad = 0
                break;
            }
            
        }
        document.getElementById("codigo_producto").value = "";
    }
}

function cancelarVenta(event) {
    var resultado = confirm("¿Estas seguro de cancelar la venta?");
    if (resultado === true) {
        document.getElementById("cuerpo").innerHTML = "";
        total = 0;
        document.getElementById("total").innerHTML = "$0.00";
        document.getElementById("codigo_producto").value = "";
    }
}

function saldoCamion(event) {
    var saldo = prompt("Escriba el saldo del UNE:");
    var tabla = document.getElementById("cuerpo");
    var renglon = tabla.insertRow();
    var celda1 = renglon.insertCell(0);
    var celda2 = renglon.insertCell(1);
    var celda3 = renglon.insertCell(2);
    var celda4 = renglon.insertCell(3);
    celda1.setAttribute("style", "text-align: center");
    celda2.setAttribute("style", "text-align: center");
    celda3.setAttribute("style", "text-align: center");
    celda4.setAttribute("style", "text-align: center");
    celda1.innerHTML = "1";
    celda2.innerHTML = "Saldo camión";
    celda3.innerHTML = saldo;
    celda4.innerHTML = saldo;
    total += parseFloat(saldo);
    document.getElementById("total").innerHTML = "$" + total.toFixed(2).toString();
}

function transferencia(){
    let input;
let regex16Digitos = /^\d{16}$/; // Valida que sean exactamente 16 números

do {
    input = prompt("Por favor, ingresa un valor de exactamente 16 dígitos:");
    
    // Si el usuario presiona "Cancelar", input será null, salimos para evitar bucle infinito
    if (input === null) {
        break;
    }
    
    if (!regex16Digitos.test(input)) {
        alert("¡Error! Debes ingresar exactamente 16 números.");
    }
    
} while (!regex16Digitos.test(input));

if (input !== null) {
    alert("¡Dato válido ingresado correctamente!");
}

    var saldo = prompt("ingrese el monto a transferir");
    var tabla = document.getElementById('cuerpo');
    var renglon = tabla.insertRow();

    var celda1 = renglon.insertCell(0);
    var celda2 = renglon.insertCell(1);
    var celda3 = renglon.insertCell(2);
    var celda4 = renglon.insertCell(3);

    celda1.setAttribute("style", "text-align: center;");
    celda2.setAttribute("style", "text-align: center;");
    celda3.setAttribute("style", "text-align: center;");
    celda4.setAttribute("style", "text-align: center;");

    celda1.innerHTML = "1";
    celda2.innerHTML = input;
    celda3.innerHTML = saldo;
    celda4.innerHTML = saldo;

    total += parseFloat(saldo);
    document.getElementById("total").innerHTML = "$" + total.toFixed(2).toString();

}