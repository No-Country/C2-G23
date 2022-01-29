
import resto from "../img/rest.jpg";
import standard from "../img/habitacion1.jpg";
import executive from "../img/ejecutiva.jpg";
import conBalcon from "../img/conbalcon.jpg";
import juniorsuite from "../img/habitacion3.jpg";
import suite from "../img/habitacion2.jpg";

const mockData = [
    {
        src:resto,
        title:"Restaurante",
        description:"Gastronomía exclusiva de la mano de nuestros chefs",
    },
    {
        src: standard,
        title: "Habitación Standard",
        description: "Habitaciones con todas las comodidades a precios accesibles",
        cat: "room",
        price: 3000,
        stock: 15,
        notAvailablestart: new Date(2022, 1, 10).getTime(),
        notAvailableend: new Date(2022, 10, 10).getTime(),
    },
    {
        src:executive,
        title:"Habitación Ejecutiva",
        description: "Cuentan con escritorios y sillas ergonómicas",
        cat: "room",
        price: 4500,
        stock: 8,
        notAvailablestart: new Date(2022, 4, 10).getTime(),
        notAvailableend: new Date(2022, 11, 10).getTime(),
    },
    {
        src: conBalcon,
        title: "Habitación con Balcón",
        description: "Habitaciones con vistas exclusivas a la ciudad",
        cat:"room",
        price: 6000,
        stock: 15,
        notAvailablestart: new Date(2022, 1, 10).getTime(),
        notAvailableend: new Date(2022, 5, 10).getTime(),
    },
    {
        src: juniorsuite,
        title: "Habitación amplia con Kitchenette",
        description: "Son perfectas para familias",
        cat: "room",
        price: 9500,
        stock: 10,
        notAvailablestart: new Date(2022, 1, 10).getTime(),
        notAvailableend: new Date(2022, 3, 10).getTime(),
    },
    {
        src: suite,
        title:"Nuestra Suite Exclusiva",
        description: "Discreta y Lujosa",
        cat:"room",
        price: 8000,
        stock:4,
        notAvailablestart: new Date(2022, 1, 10).getTime(),
        notAvailableend: new Date(2022, 4, 20).getTime(),
    },
];

export const chips = [
    { key: 0 , label: "Cancellation Flexibility" },
    { key: 1 , label: "Standard Room" },
    { key: 2 , label: "Executive Room" },
    { key: 3 , label: "Access to Lounge" },
    { key: 4 , label: "more filters" },
];
export default mockData;