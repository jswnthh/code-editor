"use strict";var loadPyodide=(()=>{var ne=Object.create;var I=Object.defineProperty;var re=Object.getOwnPropertyDescriptor;var ie=Object.getOwnPropertyNames;var oe=Object.getPrototypeOf,ae=Object.prototype.hasOwnProperty;var s=(e,t)=>I(e,"name",{value:t,configurable:!0}),p=(e=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(e,{get:(t,i)=>(typeof require<"u"?require:t)[i]}):e)(function(e){if(typeof require<"u")return require.apply(this,arguments);throw new Error('Dynamic require of "'+e+'" is not supported')});var se=(e,t)=>{for(var i in t)I(e,i,{get:t[i],enumerable:!0})},$=(e,t,i,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let a of ie(t))!ae.call(e,a)&&a!==i&&I(e,a,{get:()=>t[a],enumerable:!(r=re(t,a))||r.enumerable});return e};var b=(e,t,i)=>(i=e!=null?ne(oe(e)):{},$(t||!e||!e.__esModule?I(i,"default",{value:e,enumerable:!0}):i,e)),ce=e=>$(I({},"__esModule",{value:!0}),e);var Ie={};se(Ie,{loadPyodide:()=>B,version:()=>x});function le(e){return!isNaN(parseFloat(e))&&isFinite(e)}s(le,"_isNumber");function w(e){return e.charAt(0).toUpperCase()+e.substring(1)}s(w,"_capitalize");function L(e){return function(){return this[e]}}s(L,"_getter");var _=["isConstructor","isEval","isNative","isToplevel"],F=["columnNumber","lineNumber"],R=["fileName","functionName","source"],de=["args"],ue=["evalOrigin"],k=_.concat(F,R,de,ue);function g(e){if(e)for(var t=0;t<k.length;t++)e[k[t]]!==void 0&&this["set"+w(k[t])](e[k[t]])}s(g,"StackFrame");g.prototype={getArgs:function(){return this.args},setArgs:function(e){if(Object.prototype.toString.call(e)!=="[object Array]")throw new TypeError("Args must be an Array");this.args=e},getEvalOrigin:function(){return this.evalOrigin},setEvalOrigin:function(e){if(e instanceof g)this.evalOrigin=e;else if(e instanceof Object)this.evalOrigin=new g(e);else throw new TypeError("Eval Origin must be an Object or StackFrame")},toString:function(){var e=this.getFileName()||"",t=this.getLineNumber()||"",i=this.getColumnNumber()||"",r=this.getFunctionName()||"";return this.getIsEval()?e?"[eval] ("+e+":"+t+":"+i+")":"[eval]:"+t+":"+i:r?r+" ("+e+":"+t+":"+i+")":e+":"+t+":"+i}};g.fromString=s(function(t){var i=t.indexOf("("),r=t.lastIndexOf(")"),a=t.substring(0,i),n=t.substring(i+1,r).split(","),o=t.substring(r+1);if(o.indexOf("@")===0)var c=/@(.+?)(?::(\d+))?(?::(\d+))?$/.exec(o,""),l=c[1],d=c[2],u=c[3];return new g({functionName:a,args:n||void 0,fileName:l,lineNumber:d||void 0,columnNumber:u||void 0})},"StackFrame$$fromString");for(h=0;h<_.length;h++)g.prototype["get"+w(_[h])]=L(_[h]),g.prototype["set"+w(_[h])]=function(e){return function(t){this[e]=!!t}}(_[h]);var h;for(E=0;E<F.length;E++)g.prototype["get"+w(F[E])]=L(F[E]),g.prototype["set"+w(F[E])]=function(e){return function(t){if(!le(t))throw new TypeError(e+" must be a Number");this[e]=Number(t)}}(F[E]);var E;for(S=0;S<R.length;S++)g.prototype["get"+w(R[S])]=L(R[S]),g.prototype["set"+w(R[S])]=function(e){return function(t){this[e]=String(t)}}(R[S]);var S,A=g;function fe(){var e=/^\s*at .*(\S+:\d+|\(native\))/m,t=/^(eval@)?(\[native code])?$/;return{parse:s(function(r){if(r.stack&&r.stack.match(e))return this.parseV8OrIE(r);if(r.stack)return this.parseFFOrSafari(r);throw new Error("Cannot parse given Error object")},"ErrorStackParser$$parse"),extractLocation:s(function(r){if(r.indexOf(":")===-1)return[r];var a=/(.+?)(?::(\d+))?(?::(\d+))?$/,n=a.exec(r.replace(/[()]/g,""));return[n[1],n[2]||void 0,n[3]||void 0]},"ErrorStackParser$$extractLocation"),parseV8OrIE:s(function(r){var a=r.stack.split(`
`).filter(function(n){return!!n.match(e)},this);return a.map(function(n){n.indexOf("(eval ")>-1&&(n=n.replace(/eval code/g,"eval").replace(/(\(eval at [^()]*)|(,.*$)/g,""));var o=n.replace(/^\s+/,"").replace(/\(eval code/g,"(").replace(/^.*?\s+/,""),c=o.match(/ (\(.+\)$)/);o=c?o.replace(c[0],""):o;var l=this.extractLocation(c?c[1]:o),d=c&&o||void 0,u=["eval","<anonymous>"].indexOf(l[0])>-1?void 0:l[0];return new A({functionName:d,fileName:u,lineNumber:l[1],columnNumber:l[2],source:n})},this)},"ErrorStackParser$$parseV8OrIE"),parseFFOrSafari:s(function(r){var a=r.stack.split(`
`).filter(function(n){return!n.match(t)},this);return a.map(function(n){if(n.indexOf(" > eval")>-1&&(n=n.replace(/ line (\d+)(?: > eval line \d+)* > eval:\d+:\d+/g,":$1")),n.indexOf("@")===-1&&n.indexOf(":")===-1)return new A({functionName:n});var o=/((.*".+"[^@]*)?[^@]*)(?:@)/,c=n.match(o),l=c&&c[1]?c[1]:void 0,d=this.extractLocation(n.replace(o,""));return new A({functionName:l,fileName:d[0],lineNumber:d[1],columnNumber:d[2],source:n})},this)},"ErrorStackParser$$parseFFOrSafari")}}s(fe,"ErrorStackParser");var me=new fe;var j=me;var y=typeof process=="object"&&typeof process.versions=="object"&&typeof process.versions.node=="string"&&!process.browser,T=y&&typeof module<"u"&&typeof module.exports<"u"&&typeof p<"u"&&typeof __dirname<"u",H=y&&!T,Le=typeof globalThis.Bun<"u",pe=typeof Deno<"u",z=!y&&!pe,V=z&&typeof window=="object"&&typeof document=="object"&&typeof document.createElement=="function"&&"sessionStorage"in window&&typeof importScripts!="function",q=z&&typeof importScripts=="function"&&typeof self=="object",Te=typeof navigator=="object"&&typeof navigator.userAgent=="string"&&navigator.userAgent.indexOf("Chrome")==-1&&navigator.userAgent.indexOf("Safari")>-1;var K,U,Y,J,M;async function C(){if(!y||(K=(await import(/* webpackIgnore */"node:url")).default,J=await import(/* webpackIgnore */"node:fs"),M=await import(/* webpackIgnore */"node:fs/promises"),Y=(await import(/* webpackIgnore */"node:vm")).default,U=await import(/* webpackIgnore */"node:path"),W=U.sep,typeof p<"u"))return;let e=J,t=await import(/* webpackIgnore */"node:crypto"),i=await import(/* webpackIgnore */"ws"),r=await import(/* webpackIgnore */"node:child_process"),a={fs:e,crypto:t,ws:i,child_process:r};globalThis.require=function(n){return a[n]}}s(C,"initNodeModules");function ge(e,t){return U.resolve(t||".",e)}s(ge,"node_resolvePath");function ye(e,t){return t===void 0&&(t=location),new URL(e,t).toString()}s(ye,"browser_resolvePath");var D;y?D=ge:D=ye;var W;y||(W="/");function be(e,t){return e.startsWith("file://")&&(e=e.slice(7)),e.includes("://")?{response:fetch(e)}:{binary:M.readFile(e).then(i=>new Uint8Array(i.buffer,i.byteOffset,i.byteLength))}}s(be,"node_getBinaryResponse");function ve(e,t){let i=new URL(e,location);return{response:fetch(i,t?{integrity:t}:{})}}s(ve,"browser_getBinaryResponse");var P;y?P=be:P=ve;async function G(e,t){let{response:i,binary:r}=P(e,t);if(r)return r;let a=await i;if(!a.ok)throw new Error(`Failed to load '${e}': request failed.`);return new Uint8Array(await a.arrayBuffer())}s(G,"loadBinaryFile");var O;if(V)O=s(async e=>await import(/* webpackIgnore */e),"loadScript");else if(q)O=s(async e=>{try{globalThis.importScripts(e)}catch(t){if(t instanceof TypeError)await import(/* webpackIgnore */e);else throw t}},"loadScript");else if(y)O=he;else throw new Error("Cannot determine runtime environment");async function he(e){e.startsWith("file://")&&(e=e.slice(7)),e.includes("://")?Y.runInThisContext(await(await fetch(e)).text()):await import(/* webpackIgnore */K.pathToFileURL(e).href)}s(he,"nodeLoadScript");async function X(e){if(y){await C();let t=await M.readFile(e,{encoding:"utf8"});return JSON.parse(t)}else return await(await fetch(e)).json()}s(X,"loadLockFile");async function Q(){if(T)return __dirname;let e;try{throw new Error}catch(r){e=r}let t=j.parse(e)[0].fileName;if(y&&!t.startsWith("file://")&&(t=`file://${t}`),H){let r=await import(/* webpackIgnore */"node:path");return(await import(/* webpackIgnore */"node:url")).fileURLToPath(r.dirname(t))}let i=t.lastIndexOf(W);if(i===-1)throw new Error("Could not extract indexURL path from pyodide module location");return t.slice(0,i)}s(Q,"calculateDirname");function Z(e){let t=e.FS,i=e.FS.filesystems.MEMFS,r=e.PATH,a={DIR_MODE:16895,FILE_MODE:33279,mount:function(n){if(!n.opts.fileSystemHandle)throw new Error("opts.fileSystemHandle is required");return i.mount.apply(null,arguments)},syncfs:async(n,o,c)=>{try{let l=a.getLocalSet(n),d=await a.getRemoteSet(n),u=o?d:l,m=o?l:d;await a.reconcile(n,u,m),c(null)}catch(l){c(l)}},getLocalSet:n=>{let o=Object.create(null);function c(u){return u!=="."&&u!==".."}s(c,"isRealDir");function l(u){return m=>r.join2(u,m)}s(l,"toAbsolute");let d=t.readdir(n.mountpoint).filter(c).map(l(n.mountpoint));for(;d.length;){let u=d.pop(),m=t.stat(u);t.isDir(m.mode)&&d.push.apply(d,t.readdir(u).filter(c).map(l(u))),o[u]={timestamp:m.mtime,mode:m.mode}}return{type:"local",entries:o}},getRemoteSet:async n=>{let o=Object.create(null),c=await Ee(n.opts.fileSystemHandle);for(let[l,d]of c)l!=="."&&(o[r.join2(n.mountpoint,l)]={timestamp:d.kind==="file"?(await d.getFile()).lastModifiedDate:new Date,mode:d.kind==="file"?a.FILE_MODE:a.DIR_MODE});return{type:"remote",entries:o,handles:c}},loadLocalEntry:n=>{let c=t.lookupPath(n).node,l=t.stat(n);if(t.isDir(l.mode))return{timestamp:l.mtime,mode:l.mode};if(t.isFile(l.mode))return c.contents=i.getFileDataAsTypedArray(c),{timestamp:l.mtime,mode:l.mode,contents:c.contents};throw new Error("node type not supported")},storeLocalEntry:(n,o)=>{if(t.isDir(o.mode))t.mkdirTree(n,o.mode);else if(t.isFile(o.mode))t.writeFile(n,o.contents,{canOwn:!0});else throw new Error("node type not supported");t.chmod(n,o.mode),t.utime(n,o.timestamp,o.timestamp)},removeLocalEntry:n=>{var o=t.stat(n);t.isDir(o.mode)?t.rmdir(n):t.isFile(o.mode)&&t.unlink(n)},loadRemoteEntry:async n=>{if(n.kind==="file"){let o=await n.getFile();return{contents:new Uint8Array(await o.arrayBuffer()),mode:a.FILE_MODE,timestamp:o.lastModifiedDate}}else{if(n.kind==="directory")return{mode:a.DIR_MODE,timestamp:new Date};throw new Error("unknown kind: "+n.kind)}},storeRemoteEntry:async(n,o,c)=>{let l=n.get(r.dirname(o)),d=t.isFile(c.mode)?await l.getFileHandle(r.basename(o),{create:!0}):await l.getDirectoryHandle(r.basename(o),{create:!0});if(d.kind==="file"){let u=await d.createWritable();await u.write(c.contents),await u.close()}n.set(o,d)},removeRemoteEntry:async(n,o)=>{await n.get(r.dirname(o)).removeEntry(r.basename(o)),n.delete(o)},reconcile:async(n,o,c)=>{let l=0,d=[];Object.keys(o.entries).forEach(function(f){let v=o.entries[f],N=c.entries[f];(!N||t.isFile(v.mode)&&v.timestamp.getTime()>N.timestamp.getTime())&&(d.push(f),l++)}),d.sort();let u=[];if(Object.keys(c.entries).forEach(function(f){o.entries[f]||(u.push(f),l++)}),u.sort().reverse(),!l)return;let m=o.type==="remote"?o.handles:c.handles;for(let f of d){let v=r.normalize(f.replace(n.mountpoint,"/")).substring(1);if(c.type==="local"){let N=m.get(v),te=await a.loadRemoteEntry(N);a.storeLocalEntry(f,te)}else{let N=a.loadLocalEntry(f);await a.storeRemoteEntry(m,v,N)}}for(let f of u)if(c.type==="local")a.removeLocalEntry(f);else{let v=r.normalize(f.replace(n.mountpoint,"/")).substring(1);await a.removeRemoteEntry(m,v)}}};e.FS.filesystems.NATIVEFS_ASYNC=a}s(Z,"initializeNativeFS");var Ee=s(async e=>{let t=[];async function i(a){for await(let n of a.values())t.push(n),n.kind==="directory"&&await i(n)}s(i,"collect"),await i(e);let r=new Map;r.set(".",e);for(let a of t){let n=(await e.resolve(a)).join("/");r.set(n,a)}return r},"getFsHandles");function ee(e){let t={noImageDecoding:!0,noAudioDecoding:!0,noWasmDecoding:!1,preRun:Fe(e),quit(i,r){throw t.exited={status:i,toThrow:r},r},print:e.stdout,printErr:e.stderr,arguments:e.args,API:{config:e},locateFile:i=>e.indexURL+i,instantiateWasm:Re(e.indexURL)};return t}s(ee,"createSettings");function Se(e){return function(t){let i="/";try{t.FS.mkdirTree(e)}catch(r){console.error(`Error occurred while making a home directory '${e}':`),console.error(r),console.error(`Using '${i}' for a home directory instead`),e=i}t.FS.chdir(e)}}s(Se,"createHomeDirectory");function we(e){return function(t){Object.assign(t.ENV,e)}}s(we,"setEnvironment");function Ne(e){return t=>{for(let i of e)t.FS.mkdirTree(i),t.FS.mount(t.FS.filesystems.NODEFS,{root:i},i)}}s(Ne,"mountLocalDirectories");function _e(e){let t=G(e);return i=>{let r=i._py_version_major(),a=i._py_version_minor();i.FS.mkdirTree("/lib"),i.FS.mkdirTree(`/lib/python${r}.${a}/site-packages`),i.addRunDependency("install-stdlib"),t.then(n=>{i.FS.writeFile(`/lib/python${r}${a}.zip`,n)}).catch(n=>{console.error("Error occurred while installing the standard library:"),console.error(n)}).finally(()=>{i.removeRunDependency("install-stdlib")})}}s(_e,"installStdlib");function Fe(e){let t;return e.stdLibURL!=null?t=e.stdLibURL:t=e.indexURL+"python_stdlib.zip",[_e(t),Se(e.env.HOME),we(e.env),Ne(e._node_mounts),Z]}s(Fe,"getFileSystemInitializationFuncs");function Re(e){if(typeof WasmOffsetConverter<"u")return;let{binary:t,response:i}=P(e+"pyodide.asm.wasm");return function(r,a){return async function(){try{let n;i?n=await WebAssembly.instantiateStreaming(i,r):n=await WebAssembly.instantiate(await t,r);let{instance:o,module:c}=n;a(o,c)}catch(n){console.warn("wasm instantiation failed!"),console.warn(n)}}(),{}}}s(Re,"getInstantiateWasmFunc");var x="0.27.2";async function B(e={}){var u,m;await C();let t=e.indexURL||await Q();t=D(t),t.endsWith("/")||(t+="/"),e.indexURL=t;let i={fullStdLib:!1,jsglobals:globalThis,stdin:globalThis.prompt?globalThis.prompt:void 0,lockFileURL:t+"pyodide-lock.json",args:[],_node_mounts:[],env:{},packageCacheDir:t,packages:[],enableRunUntilComplete:!1,checkAPIVersion:!0,BUILD_ID:"f88dc4abb40ec8e780c94a5f70bcef45ec9eb3c1aee1c99da527febfef1c6f3f"},r=Object.assign(i,e);(u=r.env).HOME??(u.HOME="/home/pyodide"),(m=r.env).PYTHONINSPECT??(m.PYTHONINSPECT="1");let a=ee(r),n=a.API;if(n.lockFilePromise=X(r.lockFileURL),typeof _createPyodideModule!="function"){let f=`${r.indexURL}pyodide.asm.js`;await O(f)}let o;if(e._loadSnapshot){let f=await e._loadSnapshot;ArrayBuffer.isView(f)?o=f:o=new Uint8Array(f),a.noInitialRun=!0,a.INITIAL_MEMORY=o.length}let c=await _createPyodideModule(a);if(a.exited)throw a.exited.toThrow;if(e.pyproxyToStringRepr&&n.setPyProxyToStringMethod(!0),n.version!==x&&r.checkAPIVersion)throw new Error(`Pyodide version does not match: '${x}' <==> '${n.version}'. If you updated the Pyodide version, make sure you also updated the 'indexURL' parameter passed to loadPyodide.`);c.locateFile=f=>{throw new Error("Didn't expect to load any more file_packager files!")};let l;o&&(l=n.restoreSnapshot(o));let d=n.finalizeBootstrap(l,e._snapshotDeserializer);return n.sys.path.insert(0,n.config.env.HOME),d.version.includes("dev")||n.setCdnUrl(`https://cdn.jsdelivr.net/pyodide/v${d.version}/full/`),n._pyodide.set_excepthook(),await n.packageIndexReady,n.initializeStreams(r.stdin,r.stdout,r.stderr),d}s(B,"loadPyodide");globalThis.loadPyodide=B;return ce(Ie);})();
try{Object.assign(exports,loadPyodide)}catch(_){}
globalThis.loadPyodide=loadPyodide.loadPyodide;
//# sourceMappingURL=pyodide.js.map