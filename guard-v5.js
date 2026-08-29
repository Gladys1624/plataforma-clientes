(()=>{'use strict';
const originalFetch=window.fetch.bind(window);
window.fetch=async function(input,init){
  try{
    let url=typeof input==='string'?input:(input?.url||'');
    if(url.includes('/rest/v1/documents')){
      const u=new URL(url,location.href);
      const select=u.searchParams.get('select');
      if(select){
        const clean=select.split(',').filter(x=>x.trim().toLowerCase()!=='code').join(',');
        u.searchParams.set('select',clean||'*');
        if(typeof input==='string') url=u.toString(); else input=new Request(u.toString(),input);
      }
      if(init?.body && typeof init.body==='string'){
        try{
          const data=JSON.parse(init.body);
          if(Array.isArray(data)) data.forEach(x=>{if(x&&typeof x==='object')delete x.code;});
          else if(data&&typeof data==='object') delete data.code;
          init={...init,body:JSON.stringify(data)};
        }catch(_){ }
      }
    }
    if(url.includes('/rest/v1/documents') && typeof input==='string') input=url;
  }catch(_){ }
  return originalFetch(input,init);
};
})();