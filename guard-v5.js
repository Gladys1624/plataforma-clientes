(()=>{'use strict';
const originalFetch=window.fetch.bind(window);
window.fetch=async function(input,init){
  try{
    const url=typeof input==='string'?input:(input?.url||'');
    if(init?.body && url.includes('/rest/v1/documents')){
      let body=init.body;
      if(typeof body==='string'){
        try{
          const data=JSON.parse(body);
          if(Array.isArray(data)) data.forEach(x=>{if(x&&typeof x==='object')delete x.code;});
          else if(data&&typeof data==='object') delete data.code;
          init={...init,body:JSON.stringify(data)};
        }catch(_){ }
      }
    }
  }catch(_){ }
  return originalFetch(input,init);
};
})();