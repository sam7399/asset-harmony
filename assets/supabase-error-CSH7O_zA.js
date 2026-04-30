import{c as a}from"./index-DnGZQCVb.js";/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i=a("Pencil",[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c=a("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);function d(o){if(!o)return"An unknown error occurred";const r=o,t=(r==null?void 0:r.code)??"",e=(r==null?void 0:r.message)??String(o),n={23505:"A record with this code or name already exists",23503:"Cannot delete — this record is referenced by other data",23514:"Value violates a database constraint (check allowed values)",42501:"Permission denied — your account may need approval or a higher role",PGRST116:"Record not found",PGRST301:"Request timed out — please try again",PGRST204:"Nothing was updated — record may not exist"};return n[t]?n[t]:e.includes("duplicate key")?"A record with this code or name already exists":e.includes("violates foreign key")?"Cannot delete — this record is in use elsewhere":e.includes("violates row-level security")?"Permission denied — ensure your account is approved and has the correct role":e.includes("JWT expired")?"Your session has expired — please sign in again":e.includes("Failed to fetch")||e.includes("NetworkError")?"Network error — check your connection":e}export{i as P,c as T,d as p};
