import{j as k}from"./jsx-runtime-CkxqCPlQ.js";import{r as N}from"./index-DJO9vBfz.js";import{c as P}from"./clsx-B-dksMZM.js";const S="_button_1xgdw_1",B="_primary_1xgdw_11",F="_sun_1xgdw_11",L="_secondary_1xgdw_33",R="_fullWidth_1xgdw_50",j="_outlined_1xgdw_58",E="_text_1xgdw_71",n={button:S,primary:B,sun:F,secondary:L,fullWidth:R,outlined:j,text:E},_=(x,v)=>{const{as:b="button",className:T,fullWidth:W,variant:q="primary",...w}=x;return k.jsx(b,{className:P(n.button,n[q],W&&n.fullWidth,T),ref:v,...w})},g=N.forwardRef(_);_.__docgenInfo={description:"",methods:[],displayName:"ButtonPolymorph",props:{as:{required:!1,tsType:{name:"T"},description:""},children:{required:!1,tsType:{name:"ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},fullWidth:{required:!1,tsType:{name:"boolean"},description:""},variant:{required:!1,tsType:{name:"union",raw:"'outlined' | 'primary' | 'secondary' | 'text'",elements:[{name:"literal",value:"'outlined'"},{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'text'"}]},description:""}}};g.__docgenInfo={description:"",methods:[],displayName:"Button",props:{as:{required:!1,tsType:{name:"T"},description:""},children:{required:!1,tsType:{name:"ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},fullWidth:{required:!1,tsType:{name:"boolean"},description:""},variant:{required:!1,tsType:{name:"union",raw:"'outlined' | 'primary' | 'secondary' | 'text'",elements:[{name:"literal",value:"'outlined'"},{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'text'"}]},description:""}}};const O={argTypes:{variant:{control:{type:"radio"},options:["primary","secondary"]}},component:g,tags:["autodocs"],title:"Components/Button"},e={args:{children:"Primary",disabled:!1,variant:"primary"}},r={args:{children:"Secondary",disabled:!1,variant:"secondary"}},a={args:{children:"Full Width Primary Button",disabled:!1,fullWidth:!0,variant:"primary"}},t={args:{as:"a",children:"Link that looks like a button",variant:"primary"}};var s,o,i;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    children: 'Primary',
    disabled: false,
    variant: 'primary'
  }
}`,...(i=(o=e.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};var l,d,c;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    children: 'Secondary',
    disabled: false,
    variant: 'secondary'
  }
}`,...(c=(d=r.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var m,u,p;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    children: 'Full Width Primary Button',
    disabled: false,
    fullWidth: true,
    variant: 'primary'
  }
}`,...(p=(u=a.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var y,f,h;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    as: 'a',
    children: 'Link that looks like a button',
    variant: 'primary'
  }
}`,...(h=(f=t.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};const z=["Primary","Secondary","FullWidth","AsLink"];export{t as AsLink,a as FullWidth,e as Primary,r as Secondary,z as __namedExportsOrder,O as default};
