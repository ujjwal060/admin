import{r,k as y,j as e,C as b}from"./index-D61s1Tjt.js";import{a as N}from"./axios-B4uVmeYG.js";import{l as k}from"./tlogo1-w0QlOMSf.js";import{b as v,c as d,a as w}from"./index.es-vXd0TMDy.js";import{C as S}from"./CRow-N44qJXZN.js";import{C as o}from"./CCol-B9bgIcnU.js";import{C as I}from"./CCardGroup--7AhYiJc.js";import{C as L,a as E}from"./CCardBody-BCTVJJ4q.js";import{C as P}from"./CForm-BmHEjoGd.js";import{C as p,a as x}from"./CInputGroupText-prhHSaDt.js";import{c as A}from"./cil-user-Ddrdy7PS.js";import{C as h}from"./CFormInput-DNacG-Xh.js";import{c as F}from"./cil-lock-locked-DmxpJbVL.js";const G="http://54.244.180.151:3002/api/admin/login",O=()=>{const[i,u]=r.useState(""),[l,g]=r.useState(""),[n,t]=r.useState(""),[c,m]=r.useState(!1),C=y(),j=async a=>{a.preventDefault(),m(!0);try{const s=await N.post(G,{email:i,password:l});if(s.status===200){const{token:f}=s.data;localStorage.setItem("token",f),C("/Dashboard")}else t(s.data.message||"Failed to login. Please check your credentials.")}catch(s){s.response&&s.response.data?t(s.response.data.message):t("Failed to login. Please check your credentials."),console.error("Admin Login Error:",s)}finally{m(!1)}};return e.jsx("div",{className:"bg-body-tertiary min-vh-100 d-flex flex-row align-items-center ",children:e.jsx(v,{children:e.jsx(S,{className:"justify-content-center",children:e.jsx(o,{style:{maxWidth:"37%"},children:e.jsx(I,{children:e.jsx(L,{className:"p-4 bg-dark-gray image",style:{backgroundColor:"rgba(0, 0, 0, 0.8)",color:"white"},children:e.jsxs(E,{className:"text-center",children:[e.jsx("div",{className:"mb-4",children:e.jsx("img",{src:k,alt:"Logo",style:{maxWidth:"45%",height:"auto"}})}),e.jsxs(P,{onSubmit:j,children:[e.jsx("h1",{className:"text-dark",children:"Welcome!"}),e.jsx("p",{className:"text-light",children:"Admin Sign In"}),n&&e.jsx("p",{className:"text-danger",children:n}),e.jsxs(p,{className:"mb-3",children:[e.jsx(x,{children:e.jsx(d,{icon:A})}),e.jsx(h,{type:"email",placeholder:"Email",autoComplete:"email",value:i,onChange:a=>u(a.target.value),required:!0})]}),e.jsxs(p,{className:"mb-4",children:[e.jsx(x,{children:e.jsx(d,{icon:F})}),e.jsx(h,{type:"password",placeholder:"Password",autoComplete:"current-password",value:l,onChange:a=>g(a.target.value),required:!0})]}),e.jsx(o,{children:e.jsx(o,{children:e.jsxs(w,{type:"submit",style:{backgroundColor:"rgba(0, 0, 0, 0.8)",color:"white"},className:"px-4",disabled:c,children:[c?e.jsx(b,{size:"sm"}):"Login"," "]})})})]})]})})})})})})})};export{O as default};
