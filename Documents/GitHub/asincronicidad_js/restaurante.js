const print = console.log;

function taco(carne, orden) {
    print("Orden "+orden+", taco de "+carne+" listo");
}

function torta(carne, orden) {
    for (let i = 0; 1<20000; i++) {
    print("orden "+orden+", torta de "+carne+"listo")
    }}
    /*setTimeout(function() {
    print("Orden "+orden+", torta de "+carne+" listo");
    }),200000}*/
function agua(orden) {
    print("orden"+orden+", agua lista");
}
function tostada(carne, orden, agua){
    agua(orden);
    print("orden"+orden+"tostada de "+carne+", lista");
}

taco("asada",1)
taco("asada",2)
taco("machaca",3, agua)
taco("machaca",4)
taco("asada",5)

setTimeout(function(){
    console.log("Hola Mundo");
}, 2000);

console.log("setTimeout() Ejemplo...");