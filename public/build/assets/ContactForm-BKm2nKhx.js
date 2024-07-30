import{y as I,r as g,z as R,A as U,B as C,C as E,D,E as z,o as B,G as A,c as M,w as S,d as G,H,f as y,s as $,I as K,a as L,g as w,j as t,J as u,K as _,k as x,L as h,t as b,M as O,l as T,u as F,N as k,F as Y,q as J,O as Q,P as W}from"./app-CyQCNHYi.js";var N=(l=>(l.Init="init",l.Verified="verified",l.Expired="expired",l.Error="error",l))(N||{});function X({root:l=g(),options:c={}}){const r=I(),n=g(),i=R(),d=E(),e=E(),f=E(),v=U(l),p=g("init");return C(v,async V=>{const a=await i.render(V,{...c,sitekey:r,callback:d.trigger,"expired-callback":e.trigger,"error-callback":f.trigger});n.value=a}),d.on(()=>{p.value="verified"}),e.on(()=>{p.value="expired"}),f.on(()=>{p.value="error"}),{root:v,widgetID:n,execute(){typeof n.value<"u"&&i.execute(n.value)},reset(){p.value="init",typeof n.value<"u"&&i.reset(n.value)},state:p,onVerify:d.on,onExpired:e.on,onError:f.on}}function Z(){const l=D();l.scriptInjected?z("`useRecaptchaProvider` is used multiple time"):(l.scriptInjected=!0,l.useScriptProvider(),B(()=>{A()}))}function ee(l,c,r){const{root:n,state:i,widgetID:d,onError:e,onExpired:f,onVerify:v,reset:p,execute:V}=X({options:l||{}}),a=M(()=>i.value===N.Expired),s=M(()=>i.value===N.Error),o=M(()=>i.value===N.Verified);return C(d,m=>{r("load",m),r("update:widgetId",m)}),S(c,(m,j)=>{!m&&j&&!a.value&&q()}),f(()=>{r("update:modelValue",null),r("expired",d.value)}),e(m=>{r("error",m)}),v(m=>{r("success",m),r("update:modelValue",m)}),{root:n,widgetID:d,state:i,isError:s,isExpired:a,isVerified:o,reset:q,execute:V};function q(){p(),P()}function P(){r("update:modelValue",null)}}const ae=G({__name:"Checkbox",props:{as:{default:"div"},widgetId:{},size:{default:"normal"},theme:{default:"light"},tabindex:{},modelValue:{}},emits:["load","error","expired","success","update:widgetId","update:modelValue"],setup(l,{emit:c}){const r=l,n=c,{root:i}=ee({theme:r.theme,size:r.size,tabindex:r.tabindex},H(r,"modelValue"),n);return(d,e)=>(y(),$(K(d.as),{ref_key:"root",ref:i},null,512))}}),te={id:"contact-form",class:"flex flex-wrap justify-between w-11/12 gap-6 mx-auto lg:gap-3 2xl:w-8/12 lg:w-10/12"},se=t("div",{class:"w-full lg:w-6/12"},[t("h1",{class:"font-[200] text-accent1 2xl:text-6xl lg:text-5xl md:text-4xl text-[30px] uppercase mb-6"},"Contact Us"),t("p",{class:"tracking-wide text-accent2 font-[200] max-sm:text-[14px] text-justify"},"Have questions or inquiries? Contact us today to learn more about our software solutions, digital services, and how we can help your business succeed. Our team is here to assist you every step of the way.")],-1),oe={class:"w-full col-span-2 sm:col-span-1"},re=["required"],le={class:"w-full col-span-2 sm:col-span-1"},ne=["required"],ie={class:"w-full col-span-2 sm:col-span-1"},de=["required"],ue={class:"w-full col-span-2 sm:col-span-1"},ce=["required"],pe={class:"w-full col-span-2 mb-3"},me=["required"],be=t("option",{class:"text-black",selected:""},"General Inquiries",-1),fe=t("option",{class:"text-black"},"Sales and Support",-1),ge=[be,fe],ve={class:"w-full col-span-2"},xe=["required"],he={class:"w-full col-span-2"},ye={class:"flex flex-wrap items-center w-full gap-2"},Ve={"aria-label":"send your message",class:"cursor-pointer w-fit relative z-[2] col-span-2 px-4 py-3 text-accent1 font-[400] text-center rounded-[20px] shadow-sm bg-bg2 hover:brightness-125"},we={key:0,class:"text-green-500"},_e={key:0,class:"p-4 list-disc bg-red-200 border-b-red-600 border-b-s-4 marker:text-red-600",role:"list"},Ne={__name:"ContactForm",setup(l){Z();const c=g(!1),r=g(!1),n=g(null);console.log("hasErrorMessages",r);const i={NameRequired:"Name is required.",EmailRequired:"Email is required.",EmailInvalid:"Please specify a real email.",CompanyNameRequired:"Company Name is required.",PhoneRequired:"Phone Number is required.",PhoneInvalid:"Phone Number should be numeric.",SubjectRequired:"Subject is required.",SubjectInvalid:"Invalid subject. Please select either General Inquiries or Sales and Support.",MessageRequired:"Please enter your message."},d=g({name:"",email:"",phone:"",company_name:"",subject:"",message:""});console.log("ErrorMessages",d);const e=L({data:{Name:{name:"Name",value:"",isValid:null,validationMessage:"",required:!0},Phone:{name:"Phone",value:"",isValid:null,validationMessage:"",required:!0},Email:{name:"Email",value:"",isValid:null,validationMessage:"",required:!0},CompanyName:{name:"CompanyName",value:"",isValid:null,validationMessage:"",required:!0},Subject:{name:"Subject",value:"General Inquiries",isValid:!0,validationMessage:"",required:!1},Message:{name:"Message",value:"",isValid:null,validationMessage:"",required:!0}},isValid:!1});console.log("formData",e),console.log("formData.isValid",e.isValid);const f=a=>{a.required&&!a.value?(a.isValid=!1,a.validationMessage=i[`${a.name}Required`]):a.name==="Email"&&a.value&&!v(a.value)?(a.isValid=!1,a.validationMessage=i.EmailInvalid):a.name==="Phone"&&a.value&&!p(a.value)?(a.isValid=!1,a.validationMessage=i.PhoneInvalid):(a.isValid=!0,a.validationMessage="")},v=a=>/\S+@\S+\.\S+/.test(a),p=a=>/^[0-9]+$/.test(a);S(e,a=>{let s=!0;for(const o in a.data)f(a.data[o]),a.data[o].isValid||(s=!1);e.isValid=s,e.value=a.value,console.log("watcher data",e)},{deep:!0});const V=()=>{if(!c.value){console.log("ReCaptcha is invalid");return}if(n.value=!0,e.isValid){const a={name:e.data.Name.value,email:e.data.Email.value,phone:e.data.Phone.value,company_name:e.data.CompanyName.value,subject:e.data.Subject.value,message:e.data.Message.value};W.post("http://localhost:8000/api/v1/contact_submissions",a,{headers:{"Access-Control-Allow-Origin":"*"}}).then(s=>{console.log("Data submitted:",s.data),e.data.value={Name:"",Email:"",Phone:"",CompanyName:"",Subject:"",Message:""},n.value=!1}).catch(s=>{console.error("Errors:",s.response.data.errors),r.value=!0,d.value=s.response.data.errors,n.value=!1})}};return(a,s)=>(y(),w("div",te,[se,t("form",{class:"grid w-full h-full grid-cols-2 gap-3 lg:w-5/12",onSubmit:Q(V,["prevent"])},[t("div",oe,[u(t("input",{type:"text",id:"Name",name:"Name",placeholder:"Your Name","aria-label":"Enter your name","onUpdate:modelValue":s[0]||(s[0]=o=>e.data.Name.value=o),required:e.data.Name.required,class:x(["block px-4 py-3 bg-gradient-to-r from-accent1/10 to-accent1/20 backdrop-blur-[16px] w-full rounded-[16px] text-accent1 bg-transparent border border-accent2 appearance-none focus:outline-none focus:ring-0 focus:border-bg2",{"border-red-500 focus:border-red-500":e.data.Name.isValid===!1}])},null,10,re),[[_,e.data.Name.value]]),u(t("p",{className:"ms-2 mb-2 font-[700] text-[12px] text-red-500"},b(e.data.Name.validationMessage),513),[[h,!e.data.Name.isValid]])]),t("div",le,[u(t("input",{type:"text",id:"Email",name:"Email","aria-label":"Enter your email",placeholder:"example@gmail.com","onUpdate:modelValue":s[1]||(s[1]=o=>e.data.Email.value=o),required:e.data.Email.required,class:x(["block px-4 py-3 bg-gradient-to-r from-accent1/10 to-accent1/20 backdrop-blur-[16px] w-full rounded-[16px] text-accent1 bg-transparent border border-accent2 appearance-none focus:outline-none focus:ring-0 focus:border-bg2 peer",{"border-red-500 focus:border-red-500":e.data.Email.isValid===!1}])},null,10,ne),[[_,e.data.Email.value]]),u(t("p",{className:"ms-2 mb-2 font-[700] text-[12px] text-red-500"},b(e.data.Email.validationMessage),513),[[h,!e.data.Email.isValid]])]),t("div",ie,[u(t("input",{type:"text",id:"Phone",name:"Phone","aria-label":"Enter your phone",placeholder:"00961 71 654 231","onUpdate:modelValue":s[2]||(s[2]=o=>e.data.Phone.value=o),required:e.data.Phone.required,class:x(["block px-4 py-3 bg-gradient-to-r from-accent1/10 to-accent1/20 backdrop-blur-[16px] w-full rounded-[16px] text-accent1 bg-transparent border border-accent2 appearance-none focus:outline-none focus:ring-0 focus:border-bg2 peer",{"border-red-500 focus:border-red-500":e.data.Phone.isValid===!1}])},null,10,de),[[_,e.data.Phone.value]]),u(t("p",{className:"ms-2 mb-2 font-[700] text-[12px] text-red-500"},b(e.data.Phone.validationMessage),513),[[h,!e.data.Phone.isValid]])]),t("div",ue,[u(t("input",{type:"text",id:"CompanyName",name:"CompanyName","aria-label":"Enter your company's name",placeholder:"Your Company's Name","onUpdate:modelValue":s[3]||(s[3]=o=>e.data.CompanyName.value=o),required:e.data.CompanyName.required,class:x(["block px-4 py-3 bg-gradient-to-r from-accent1/10 to-accent1/20 backdrop-blur-[16px] w-full rounded-[16px] text-accent1 bg-transparent border border-accent2 appearance-none focus:outline-none focus:ring-0 focus:border-bg2 peer",{"border-red-500 focus:border-red-500":e.data.CompanyName.isValid===!1}])},null,10,ce),[[_,e.data.CompanyName.value]]),u(t("p",{className:"ms-2 mb-2 font-[700] text-[12px] text-red-500"},b(e.data.CompanyName.validationMessage),513),[[h,!e.data.CompanyName.isValid]])]),t("div",pe,[u(t("select",{id:"Subject",name:"Subject","aria-label":"select a subject for your message","onUpdate:modelValue":s[4]||(s[4]=o=>e.data.Subject.value=o),required:e.data.Subject.required,class:x(["block px-4 py-3 bg-gradient-to-r from-accent1/10 to-accent1/20 backdrop-blur-[16px] w-full rounded-[16px] text-accent1/50 bg-transparent border border-accent2 appearance-none focus:outline-none focus:ring-0 focus:border-bg2 peer",{"border-red-500 focus:border-red-500":e.data.Subject.isValid===!1}])},ge,10,me),[[O,e.data.Subject.value]]),u(t("p",{className:"ms-2 mb-2 font-[700] text-[12px] text-red-500"},b(e.data.Subject.validationMessage),513),[[h,!e.data.Subject.isValid]])]),t("div",ve,[u(t("textarea",{id:"Message",name:"Message",rows:"5","aria-label":"Type out your message",placeholder:"Briefly tell us about your project and your current goals. How can we help you?","onUpdate:modelValue":s[5]||(s[5]=o=>e.data.Message.value=o),required:e.data.Message.required,style:{"min-height":"60px"},class:x(["block px-4 py-3 bg-gradient-to-r from-accent1/10 to-accent1/20 backdrop-blur-[16px] w-full rounded-[16px] text-accent1 bg-transparent border border-accent2 appearance-none focus:outline-none focus:ring-0 focus:border-bg2 peer",{"border-red-500 focus:border-red-500":e.data.Message.isValid===!1}])},null,10,xe),[[_,e.data.Message.value]]),u(t("p",{className:"ms-2 mb-2 font-[700] text-[12px] text-red-500"},b(e.data.Message.validationMessage),513),[[h,!e.data.Message.isValid]])]),t("div",he,[T(F(ae),{modelValue:c.value,"onUpdate:modelValue":s[6]||(s[6]=o=>c.value=o),theme:"dark"},null,8,["modelValue"])]),t("div",ye,[t("button",Ve,b(n.value===!0?"Sending...":"Send Message"),1),n.value===!1?(y(),w("p",we,"Thank you for your message, we'll get back to you soon.")):k("",!0)]),r.value===!0?(y(),w("ul",_e,[(y(!0),w(Y,null,J(d.value,(o,q)=>(y(),w("li",{key:q,className:"list-item mx-2"},b(o[0]),1))),128))])):k("",!0)],32)]))}};export{Ne as default};