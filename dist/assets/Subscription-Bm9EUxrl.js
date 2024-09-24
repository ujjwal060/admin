import{r as n,j as e}from"./index-D61s1Tjt.js";import{a as o}from"./axios-B4uVmeYG.js";import{C as P}from"./CRow-N44qJXZN.js";import{C as q}from"./CCol-B9bgIcnU.js";import{C as S,a as A}from"./CCardBody-BCTVJJ4q.js";import{C as M}from"./CCardHeader-D9bYJMT6.js";import{a as c}from"./index.es-vXd0TMDy.js";import{C as w,a as E,b as f,c as s,d as D}from"./CTable-B6fphQoh.js";import{C as N,a as T}from"./CModalHeader-CKcM1eys.js";import{C as B}from"./CModalTitle-DFgpSJeL.js";import{C as I}from"./CModalBody--9TayEQU.js";import{C as H}from"./CForm-BmHEjoGd.js";import{C as h}from"./CFormInput-DNacG-Xh.js";import{C as b}from"./CFormSelect-BRwWCeng.js";import{C as _}from"./CFormTextarea-CZLFhNVW.js";import"./DefaultLayout-CU_RidXn.js";import"./cil-lock-locked-DmxpJbVL.js";import"./tlogo1-w0QlOMSf.js";import"./cil-user-Ddrdy7PS.js";const se=()=>{const[y,l]=n.useState(!1),[u,g]=n.useState(!1),[d,m]=n.useState([]),[t,x]=n.useState({name:"",price:"",billingFrequency:"Monthly",description:"",features:"",status:"Active"});n.useEffect(()=>{(async()=>{try{const a=await o.get("http://54.244.180.151:3002/api/subscription");m(a.data.data)}catch(a){console.error("Failed to fetch plans:",a.message)}})()},[]);const j=()=>{x({name:"",price:"",billingFrequency:"Monthly",description:"",features:"",status:"Active"})},i=r=>{const{name:a,value:p}=r.target;x({...t,[a]:p})},C=async r=>{r.preventDefault();try{if(u)await o.put(`http://54.244.180.151:3002/api/subscription/${t._id}`,{...t,features:t.features.split(",").map(a=>a.trim())});else{const a=await o.post("http://54.244.180.151:3002/api/subscription",{...t,features:t.features.split(",").map(p=>p.trim())});m([...d,a.data.plan])}l(!1),j()}catch(a){console.error("Failed to save plan:",a.message)}},v=async r=>{try{await o.delete(`http://54.244.180.151:3002/api/subscription/${r}`),m(d.filter(a=>a._id!==r)),C()}catch(a){console.error("Failed to delete plan:",a.message)}},F=()=>{j(),g(!1),l(!0)};return e.jsxs(P,{children:[e.jsx(q,{children:e.jsxs(S,{children:[e.jsxs(M,{children:[e.jsx("h5",{children:"Subscription Plans"}),e.jsx("div",{className:"text-right",children:e.jsx(c,{color:"primary",onClick:F,children:"Add New Plan"})})]}),e.jsx(A,{children:e.jsxs(w,{children:[e.jsx(E,{children:e.jsxs(f,{children:[e.jsx(s,{children:"Plan Name"}),e.jsx(s,{children:"Price"}),e.jsx(s,{children:"Billing Frequency"}),e.jsx(s,{children:"Description"}),e.jsx(s,{children:"Features"}),e.jsx(s,{children:"Status"}),e.jsx(s,{children:"Actions"})]})}),e.jsx(D,{children:d.map(r=>e.jsxs(f,{children:[e.jsx(s,{children:r.name}),e.jsx(s,{children:r.price}),e.jsx(s,{children:r.billingFrequency}),e.jsx(s,{children:r.description}),e.jsx(s,{children:r.features.join(", ")}),e.jsx(s,{children:r.status}),e.jsx(s,{children:e.jsx(c,{color:"danger",onClick:()=>v(r._id),children:"Delete"})})]},r._id))})]})})]})}),e.jsxs(N,{visible:y,onClose:()=>l(!1),children:[e.jsxs(T,{children:[e.jsx(B,{children:u?"Edit Plan":"Add New Plan"}),e.jsx(c,{className:"btn-close",onClick:()=>l(!1),"aria-label":"Close"})]}),e.jsx(I,{children:e.jsxs(H,{onSubmit:C,children:[e.jsx(h,{label:"Plan Name",name:"name",value:t.name,onChange:i,placeholder:"Enter plan name",required:!0}),e.jsx(h,{type:"number",label:"Price",name:"price",value:t.price,onChange:i,placeholder:"Enter price",required:!0}),e.jsxs(b,{label:"Billing Frequency",name:"billingFrequency",value:t.billingFrequency,onChange:i,required:!0,children:[e.jsx("option",{value:"Monthly",children:"Monthly"}),e.jsx("option",{value:"Yearly",children:"Yearly"})]}),e.jsx(_,{label:"Description",name:"description",value:t.description,onChange:i,placeholder:"Enter description",required:!0}),e.jsx(h,{label:"Features",name:"features",value:t.features,onChange:i,placeholder:"Enter features separated by commas",required:!0}),e.jsxs(b,{label:"Status",name:"status",value:t.status,onChange:i,required:!0,children:[e.jsx("option",{value:"Active",children:"Active"}),e.jsx("option",{value:"Inactive",children:"Inactive"})]}),e.jsx(c,{type:"submit",color:"primary",className:"mt-3",children:"Save"})]})})]})]})};export{se as default};
