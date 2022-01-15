### Pasos para crear el proyecto
### Primera Parte:
-Limpiar la plantilla instalada por defecto con react y redux

-trabajamos en APP.js - creando los primeros componentes siguiendo los detalles de FIGMA
-Cree los componentes:
        <Header />
        <Home /> 
        <Search /> 
        <Footer />
-Instalar la libreria Routes con npm install react-router-dom para crear las rutas entre las distintas vistas

-Crear rutas con Router:
    Importar en App.js react-router-dom BrowserRouter as Router, Routes, Route
-dentro de <Router>(Encargado de formar las vistas) ingresar los elementos, las <Routes>(Seleccionador de Rutas) y dentro de <Routes> incorporar cada <Route>(Paginas que van a ir cambiando)
Instalar npm install @material-ui/core para ejecutar las vistas mobile
Instalar npm install @material-ui/icons para instalar iconos
Creando Header mobileFirst() y desktop() usando const[mobile, setMobile] en Header.js
Función para crear vistas mobile mobile ? displayMobile() : displayDesktop()
escribir para crear las funciones y clases: 
        const classes
        const displayMobile
        const displayDesktop
Crear Toolbar (elemento heredado de Material UI)
Crear const UseStyle = makeStyles((theme) para darle los efectos visuales.

Creando el header para desktop en Header.js 10:13