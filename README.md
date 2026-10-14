# El Ángel 👼 — Panadería mexicana (frontend demo, sin backend)

Demo moderna juvenil. Todo ejemplo. Sin pago real.

## Ver local
- `node server.js` → http://localhost:8080
- Tienda: `/index.html` · Admin: `/admin.html` (clave demo `angel123`)

## URL temporal celular (con datos)
- El túnel actual: https://smooth-hotels-jog.loca.lt
- Al abrirla en el celular te pedirá **Tunnel Password**: `99.108.72.187`
- Dura mientras mi PC esté encendida. Si caduca, dime y genero otra.

## Conectar backend después
Toda la data pasa por `js/api.js` (localStorage hoy):
- `getMenu/saveMenu`, `getCombos/saveCombos`, `getPromo`, `getOrders/saveOrders`, `getCfg`
- Cambia cada función por `fetch("https://tu-api/...")`. La tienda y el admin no cambian.
- Keys: `angel-menu, angel-combos, angel-promo, angel-orders, angel-cart, angel-cfg`

## Contenido ejemplo
Precios MXN, dirección Av. del Maíz 123, WA +52 000 000 0000, opiniones y promos inventados.
Fotos: Pixabay descargadas en `assets/` (~774KB), sin hotlinks.
