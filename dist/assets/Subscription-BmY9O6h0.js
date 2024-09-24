import{r as c,_ as w,R as k,b as E,c as S,P as y,j as e}from"./index-DMQZN-YT.js";import{a as C}from"./axios-B4uVmeYG.js";import{C as A}from"./CRow-WkUoOd6G.js";import{C as M}from"./CCol-C5GETTd3.js";import{C as I,a as D}from"./CCardBody-DJt4bdLB.js";import{C as B}from"./CCardHeader-DaPF9maz.js";import{a as u}from"./index.es-Dr928r4n.js";import{C as R,a as H,b as N,c as l,d as L}from"./CTable-CMobc8GF.js";import{C as V,a as Y}from"./CModalHeader-D0deP1c3.js";import{C as $}from"./CModalTitle-eDClRaYZ.js";import{C as W}from"./CModalBody-cu4JkqK7.js";import{C as z}from"./CForm-BCH59H3k.js";import{b as q,C as F}from"./CFormInput-BBxsUJtP.js";import{C as T}from"./CFormSelect-_km6Euae.js";import"./DefaultLayout-DUEFxvKU.js";import"./cil-user-Ddrdy7PS.js";import"./cil-lock-locked-DmxpJbVL.js";var P=c.forwardRef(function(r,n){var h=r.children,f=r.className,d=r.feedback,p=r.feedbackInvalid,t=r.feedbackValid,m=r.floatingClassName,x=r.floatingLabel,i=r.id,b=r.invalid,j=r.label,v=r.plainText,g=r.text,a=r.tooltipFeedback,s=r.valid,o=w(r,["children","className","feedback","feedbackInvalid","feedbackValid","floatingClassName","floatingLabel","id","invalid","label","plainText","text","tooltipFeedback","valid"]);return k.createElement(q,{describedby:o["aria-describedby"],feedback:d,feedbackInvalid:p,feedbackValid:t,floatingClassName:m,floatingLabel:x,id:i,invalid:b,label:j,text:g,tooltipFeedback:a,valid:s},k.createElement("textarea",E({className:S(v?"form-control-plaintext":"form-control",{"is-invalid":b,"is-valid":s},f),id:i},o,{ref:n}),h))});P.propTypes=E({className:y.string,id:y.string,plainText:y.bool},q.propTypes);P.displayName="CFormTextarea";const oe=()=>{const[r,n]=c.useState(!1),[h,f]=c.useState(!1),[d,p]=c.useState([]),[t,m]=c.useState({name:"",price:"",billingFrequency:"Monthly",description:"",features:"",status:"Active"});c.useEffect(()=>{(async()=>{try{const s=await C.get("www.taxidermyadmin.hunt30.com/api/subscription");p(s.data.data)}catch(s){console.error("Failed to fetch plans:",s.message)}})()},[]);const x=()=>{m({name:"",price:"",billingFrequency:"Monthly",description:"",features:"",status:"Active"})},i=a=>{const{name:s,value:o}=a.target;m({...t,[s]:o})},b=async a=>{a.preventDefault();try{if(h)await C.put(`www.taxidermyadmin.hunt30.com/api/subscription/${t._id}`,{...t,features:t.features.split(",").map(s=>s.trim())});else{const s=await C.post("www.taxidermyadmin.hunt30.com/api/subscription",{...t,features:t.features.split(",").map(o=>o.trim())});p([...d,s.data.plan])}n(!1),x()}catch(s){console.error("Failed to save plan:",s.message)}},j=a=>{f(!0),m({...a,features:a.features.join(", ")}),n(!0)},v=async a=>{try{await C.delete(`www.taxidermyadmin.hunt30.com/api/subscription/${a}`),p(d.filter(s=>s._id!==a))}catch(s){console.error("Failed to delete plan:",s.message)}},g=()=>{x(),f(!1),n(!0)};return e.jsxs(A,{children:[e.jsx(M,{children:e.jsxs(I,{children:[e.jsxs(B,{children:[e.jsx("h5",{children:"Subscription Plans"}),e.jsx("div",{className:"text-right",children:e.jsx(u,{color:"primary",onClick:g,children:"Add New Plan"})})]}),e.jsx(D,{children:e.jsxs(R,{children:[e.jsx(H,{children:e.jsxs(N,{children:[e.jsx(l,{children:"Plan Name"}),e.jsx(l,{children:"Price"}),e.jsx(l,{children:"Billing Frequency"}),e.jsx(l,{children:"Description"}),e.jsx(l,{children:"Features"}),e.jsx(l,{children:"Status"}),e.jsx(l,{children:"Actions"})]})}),e.jsx(L,{children:d.map(a=>e.jsxs(N,{children:[e.jsx(l,{children:a.name}),e.jsx(l,{children:a.price}),e.jsx(l,{children:a.billingFrequency}),e.jsx(l,{children:a.description}),e.jsx(l,{children:a.features.join(", ")}),e.jsx(l,{children:a.status}),e.jsxs(l,{children:[e.jsx(u,{color:"warning",onClick:()=>j(a),children:"Edit"}),e.jsx(u,{color:"danger",onClick:()=>v(a._id),children:"Delete"})]})]},a._id))})]})})]})}),e.jsxs(V,{visible:r,onClose:()=>n(!1),children:[e.jsxs(Y,{children:[e.jsx($,{children:h?"Edit Plan":"Add New Plan"}),e.jsx(u,{className:"btn-close",onClick:()=>n(!1),"aria-label":"Close"})]}),e.jsx(W,{children:e.jsxs(z,{onSubmit:b,children:[e.jsx(F,{label:"Plan Name",name:"name",value:t.name,onChange:i,placeholder:"Enter plan name",required:!0}),e.jsx(F,{type:"number",label:"Price",name:"price",value:t.price,onChange:i,placeholder:"Enter price",required:!0}),e.jsxs(T,{label:"Billing Frequency",name:"billingFrequency",value:t.billingFrequency,onChange:i,required:!0,children:[e.jsx("option",{value:"Monthly",children:"Monthly"}),e.jsx("option",{value:"Yearly",children:"Yearly"})]}),e.jsx(P,{label:"Description",name:"description",value:t.description,onChange:i,placeholder:"Enter description",required:!0}),e.jsx(F,{label:"Features",name:"features",value:t.features,onChange:i,placeholder:"Enter features separated by commas",required:!0}),e.jsxs(T,{label:"Status",name:"status",value:t.status,onChange:i,required:!0,children:[e.jsx("option",{value:"Active",children:"Active"}),e.jsx("option",{value:"Inactive",children:"Inactive"})]}),e.jsx(u,{type:"submit",color:"primary",className:"mt-3",children:"Save"})]})})]})]})};export{oe as default};
