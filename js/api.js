/* El Ángel — capa de datos mock.
   Hoy usa localStorage. Para conectar tu backend después,
   cambia cada función por fetch('https://tu-api/...') sin tocar el resto. */
(function (w) {
  var K = { menu: "angel-menu", combos: "angel-combos", promo: "angel-promo", orders: "angel-orders", cart: "angel-cart", cfg: "angel-cfg", auth: "angel-auth" };
  function leer(k, fb) { try { var v = JSON.parse(localStorage.getItem(k)); return v == null ? fb : v; } catch (e) { return fb; } }
  function guardar(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} }
  var SEED_MENU = [
    { id: "concha", cat: "Dulce", nombre: "Concha (vainilla/chocolate)", desc: "Clásica, azúcar crujiente.", precio: 14, img: "assets/pan-concha.jpg" },
    { id: "churro", cat: "Dulce", nombre: "Churros (3 pzas)", desc: "Azúcar y canela.", precio: 25, img: "assets/pan-churros.jpg" },
    { id: "rosca", cat: "Temporada", nombre: "Rosca (porción)", desc: "Fruta y azúcar.", precio: 35, img: "assets/pan-rosca.jpg" },
    { id: "surtido", cat: "Dulce", nombre: "Surtido (6 pzas)", desc: "Para compartir.", precio: 70, img: "assets/pan-surtido.jpg" },
    { id: "bolillo", cat: "Salado", nombre: "Bolillo (4 pzas)", desc: "Crujiente.", precio: 20, img: "assets/pan-bolillo.jpg" },
    { id: "canela", cat: "Dulce", nombre: "Rol de canela", desc: "Glaseado dulce.", precio: 28, img: "assets/pan-canela.jpg" },
    { id: "croissant", cat: "Salado", nombre: "Croissant mantequilla", desc: "Hojaldre suave.", precio: 26, img: "assets/pan-croissant.jpg" }
  ];
  var SEED_COMBOS = [
    { id: "c1", nombre: "Paquete Desayuno", desc: "6 conchas + 4 bolillos.", precio: 99, activo: true, vigencia: "Hoy" },
    { id: "c2", nombre: "Fiesta Ángel", desc: "12 surtidas + rosca.", precio: 149, activo: true, vigencia: "Fin de semana" }
  ];
  // TODO backend: sustituir leer/guardar por fetch. Ej:
  // async function getMenu(){ const r = await fetch(API+'/productos'); return r.json(); }
  w.AngelApi = {
    keys: K,
    getMenu: function () { var v = leer(K.menu, null); if (!v) { guardar(K.menu, SEED_MENU); return SEED_MENU.slice(); } return v; },
    saveMenu: function (m) { guardar(K.menu, m); },
    getCombos: function () { var v = leer(K.combos, null); if (!v) { guardar(K.combos, SEED_COMBOS); return SEED_COMBOS.slice(); } return v; },
    saveCombos: function (c) { guardar(K.combos, c); },
    getPromo: function () { var v = leer(K.promo, null); if (!v) { v = { activo: true, texto: "2x1 en conchas hoy — demo" }; guardar(K.promo, v); } return v; },
    savePromo: function (p) { guardar(K.promo, p); },
    getOrders: function () { return leer(K.orders, []); },
    saveOrders: function (o) { guardar(K.orders, o); },
    getCart: function () { return leer(K.cart, []); },
    saveCart: function (c) { guardar(K.cart, c); },
    getCfg: function () { var v = leer(K.cfg, null); if (!v) { v = { wa: "520000000000", clave: "angel123" }; guardar(K.cfg, v); } return v; },
    saveCfg: function (c) { guardar(K.cfg, c); }
  };
})(window);
