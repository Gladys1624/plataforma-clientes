(()=>{'use strict';
// Compatibilidad: conserva la base local anterior (PC_DB_V2) mientras migramos a almacenamiento profesional.
const original=window.indexedDB;
const prox=new Proxy(original,{get(target,prop,receiver){if(prop==='open')return function(name,version){if(name==='PC_DB_V3')return target.open('PC_DB_V2',2);return target.open(name,version);};return Reflect.get(target,prop,receiver);}});
try{Object.defineProperty(window,'indexedDB',{value:prox,writable:false,configurable:false});}catch(e){window.indexedDB=prox;}
})();