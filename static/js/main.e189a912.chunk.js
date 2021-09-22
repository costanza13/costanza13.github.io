(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],[,,,,,,function(e){e.exports=JSON.parse('{"frontEnd":["HTML5","CSS","responsive design","Bootstrap","JavaScript","jQuery","Handlebars","React","IndexedDB","Progressive Web Applications"],"backEnd":["PHP","Node","Express","Web Sockets / Socket.io","MySQL, Sequelize","MongoDB, Mongoose","REST","GraphQL"]}')},,function(e){e.exports=JSON.parse('[{"name":"The Kara-OK Corral","url":"https://the-kara-ok-corral.herokuapp.com","github":"https://github.com/costanza13/kara-ok-corral","blurb":"Be prepared for your next karaoke showdown with your posse.","description":"The Kara-OK Corral is a web application, built on the MERN stack, that gives users the ability to buiild playlists, to link to lyrics, karaoke videos and their own performance videos, and to share and interact with their karaoke friends. The front end is implemented using React and Apollo Client, for interfacing with a GraphQL API, which is powered by Node, Express and Apollo Server. The server uses Mongoose for MongoDB object modeling, and JSON Web Tokens for authentication.","technologies":["MERN Stack","GraphQL"]},{"name":"Techdirt","url":"https://www.techdirt.com","github":"","blurb":"A blog about innovation, economics, policy and rights in the digital age.","description":"Techdirt is an online publication that serves approximately 500,000 unique visitors each month. In addition to being a publishing platform and content management system, the site offers community engagement features such as commenting, comment rating, and story submissions, which are available to all visitors. Users can also register to enable additional features, and purchase membership subscriptions to access premium perks like early access to unpublished posts and a chat that connects them directly to the staff and other subscibers. Most features are built leveraging technologies like vanilla JavaScript, jQuery, and REST APIs, with a PHP/MySQL back end. As Techdirt\\"s primary (and often sole) software developer, I have been responsible for building and maintaining nearly all of the pieces of the custom platform on which Techdirt runs.","technologies":["LAMP Stack","jQuery","Responsive CSS"]},{"name":"Cool California","url":"https://cool-california.herokuapp.com/","github":"https://github.com/costanza13/cool-california","blurb":"A social network for California Adventurers","description":"Cool California was created to help California adventurers discover incredible places in California. The current version of the application is intended to serve as the basis for a social network to let people with similar interests share descriptions, tips & tricks, and useful information about the places they love. The app provides like/dislike functionality, tagging (of both places and the users themselves), and filters to help users zero in on destinations they may enjoy visiting. I was able to apply my prior experience with MySQL to structure the database, and used Express to handle and route requests made to the server. The app leverages the MVC pattern, using Handlebars for the views, and Sequelize (ORM) for the models.","technologies":["Express","Sequelize","Handlebars"]},{"name":"Should I Go?","url":"https://costanza13.github.io/should-i-go/","github":"https://github.com/costanza13/should-i-go","blurb":"An app to help baseball fans choose an upcoming MLB game to attend","description":"An app to help baseball fans decide whether to buy a ticket for an upcoming game. The app fetches and displays MLB team home game schedules from the MLB Stats API and corresponding weather information from OpenWeather\\"s One Call API. This app was built with vanilla JavaScript, leveraging the MaterializeCSS framework and Flexbox for the layout and structure. The app consumes data from two JSON REST APIs and utilized Day.js to manage date values.","technologies":["MaterializeCSS","Day.js","JSON REST APIs"]},{"name":"Budget Tracker","url":"https://budget-tracker-12hundred.herokuapp.com/","github":"https://github.com/costanza13/budget-tracker/","blurb":"Track your cash flow - on the go!","description":"Budget Tracker was designed with the world traveler in mind, allowing them to keep track of debits and credits while on the go. The app uses IndexedDB and local storage to permit its continued use, even when the connection to the internet is unreliable. Budget Tracker is implemented as a progressive web application and can be installed onto the user\\"s mobile device. It uses Node,Express, Mongoose and MongoDB on the server side, as well as Chart.js on the client side to visualize the budget data","technologies":["Express","MongoDB","IndexedDB","PWA"]},{"name":"Note Taker","url":"https://note-taker-12hundred.herokuapp.com/","github":"https://github.com/costanza13/note-taker","blurb":"The Express-way to note-taking.","description":"Note Taker is an application built to demonstrate the use of Express routes to power a basic API. In addition, I also used Bootstrap for the layout and styles.","technologies":["Node","Express"]}]')},,,,,,function(e,t,a){},function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var s=a(1),n=a.n(s),i=a(7),r=a.n(i),c=(a(14),a(2)),o=(a(15),a(0)),l=function(e){var t=e.setCurrentSection,a=e.currentSection;return Object(o.jsx)("nav",{children:Object(o.jsxs)("ul",{children:[Object(o.jsx)("li",{className:"".concat("about"===a?"selected":""),children:Object(o.jsx)("a",{href:"#about",onClick:function(){return t("about")},children:"About"})}),Object(o.jsx)("li",{className:"".concat("portfolio"===a?"selected":""),children:Object(o.jsx)("a",{href:"#portfolio",onClick:function(){return t("portfolio")},children:"Portfolio"})}),Object(o.jsx)("li",{className:"".concat("contact"===a?"selected":""),children:Object(o.jsx)("a",{href:"#contact",onClick:function(){return t("contact")},children:"Contact"})}),Object(o.jsx)("li",{className:"".concat("resume"===a?"selected":""),children:Object(o.jsx)("a",{href:"#resume",onClick:function(){return t("resume")},children:"Resum\xe9"})})]})})},d=(a(17),function(e){var t=e.setCurrentSection,a=e.currentSection;return Object(o.jsxs)("header",{children:[Object(o.jsx)("h1",{children:Object(o.jsx)("a",{href:"",children:"Michael Costanza"})}),Object(o.jsx)(l,{setCurrentSection:t,currentSection:a})]})}),h=a(3),u=function(e){var t=e.details,a=e.setSpotlightProject,s=!0,n=function(){s&&a(t)},i=t.github?Object(o.jsx)("a",{href:t.github,title:"View the ".concat(t.name," GitHub repository"),rel:"noreferrer",target:"_blank",children:Object(o.jsx)("i",{className:"fab fa-github"})}):"";return Object(o.jsxs)("div",{className:"project project".concat(t.idx),children:[Object(o.jsx)("div",{className:"screenshot",children:Object(o.jsx)("div",{className:"expand-modal",children:Object(o.jsxs)("div",{className:"expand-button",onClick:n,children:[Object(o.jsx)("i",{className:"fas fa-info-circle fa-3x"}),Object(o.jsx)("br",{}),"More Info"]})})}),Object(o.jsxs)("div",{className:"project-label",children:[Object(o.jsxs)("div",{className:"project-links",children:[Object(o.jsx)("i",{className:"fas fa-info-circle fa",onClick:n}),Object(o.jsx)("a",{href:t.url,title:"Visit ".concat(t.name),rel:"noreferrer",target:"_blank",children:Object(o.jsx)("i",{className:"fas fa-external-link-alt"})}),i]}),Object(o.jsx)("h3",{children:Object(o.jsx)("a",{href:t.url,title:t.blurb,onMouseEnter:function(){s=!1},onMouseOut:function(){s=!0},rel:"noreferrer",target:"_blank",children:t.name})}),Object(o.jsx)("p",{children:t.technologies.join(" / ")})]})]})},b=function(e){var t=e.details,a=e.setSpotlightProject;n.a.useEffect((function(){var e=function(e){e.target.closest(".project-spotlight")||a(null)};return window.addEventListener("click",e),function(){window.removeEventListener("click",e)}}),[a]);var s=t.github?Object(o.jsxs)("a",{href:t.github,title:"".concat(t.name,": ").concat(t.blurb),rel:"noreferrer",target:"_blank",children:[" GitHub Repo ",Object(o.jsx)("i",{className:"fas fa-external-link-alt"})]}):"";return Object(o.jsxs)("div",{className:"project-spotlight",children:[Object(o.jsx)("div",{className:"close-modal",children:Object(o.jsx)("i",{className:"far fa-times-circle fa-2x",onClick:function(){return a(null)}})}),Object(o.jsx)("a",{href:t.url,title:t.blurb,rel:"noreferrer",target:"_blank",children:Object(o.jsx)("div",{className:"screenshot project".concat(t.idx," lg")})}),Object(o.jsxs)("div",{className:"project-info",children:[Object(o.jsx)("h2",{children:t.name}),Object(o.jsx)("h3",{children:t.technologies.join(" / ")}),Object(o.jsx)("p",{children:t.description}),Object(o.jsxs)("ul",{className:"links",children:[Object(o.jsx)("li",{children:Object(o.jsxs)("a",{href:t.url,title:"".concat(t.name,": ").concat(t.blurb),rel:"noreferrer",target:"_blank",children:[t.name+" ",Object(o.jsx)("i",{className:"fas fa-external-link-alt"})]})}),s?Object(o.jsx)("li",{children:s}):""]})]})]})},j=a(8);var m=function(){var e=Object(s.useState)(),t=Object(c.a)(e,2),a=t[0],n=t[1],i=a?Object(o.jsx)(b,{details:a,setSpotlightProject:n}):"";return Object(o.jsxs)("section",{className:"portfolio",children:[i,Object(o.jsx)("div",{className:"section-heading",children:Object(o.jsx)("h2",{children:"Portfolio"})}),Object(o.jsx)("div",{id:"projects",className:"section-content",children:j.map((function(e,t){return Object(o.jsx)(u,{details:Object(h.a)({idx:t+1},e),setSpotlightProject:n},t)}))})]})},p=a(4);function f(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())}var g=a(9),x=(a(18),function(){var e=Object(s.useState)({name:"",email:"",message:""}),t=Object(c.a)(e,2),a=t[0],n=t[1],i=a.name,r=a.email,l=a.message,d=Object(s.useState)(""),u=Object(c.a)(d,2),b=u[0],j=u[1],m=Object(s.useState)(""),x=Object(c.a)(m,2),O=x[0],v=x[1],k=function(e){"email"===e.target.name?f(e.target.value)&&j(""):e.target.value.length&&j("")};function w(e){"email"===e.target.name&&e.target.value.length&&n(Object(h.a)(Object(h.a)({},a),{},Object(p.a)({},e.target.name,e.target.value)))}return Object(o.jsxs)("section",{className:"contact",children:[Object(o.jsx)("div",{className:"section-heading",children:Object(o.jsx)("h2",{children:"Contact Me"})}),Object(o.jsxs)("div",{className:"form-wrap",children:[Object(o.jsxs)("form",{id:"contact-form",onSubmit:function(e){e.preventDefault(),console.log(a),f(a.email)&&a.name.length&&a.message.length?(g.a.sendForm("service_6e222ss","template_i9srjpv",e.target,"user_ISdsVNn0uWxvdh90GMxtZ").then((function(e){console.log(e.text),v("Thank you! Your message was sent."),setTimeout((function(){return v("")}),5e3)}),(function(e){console.log(e.text)})),n({name:"",email:"",message:""}),e.target.reset()):j("Name, Message and valid Email address are required.")},children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("label",{htmlFor:"name",children:"Name:"}),Object(o.jsx)("br",{}),Object(o.jsx)("input",{type:"text",defaultValue:i,onChange:w,onKeyUp:k,name:"name"})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("label",{htmlFor:"email",children:"Email address:"}),Object(o.jsx)("br",{}),Object(o.jsx)("input",{type:"email",defaultValue:r,onChange:w,onKeyUp:k,name:"email"})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("label",{htmlFor:"message",children:"Message:"}),Object(o.jsx)("br",{}),Object(o.jsx)("textarea",{name:"message",defaultValue:l,onChange:w,rows:"5"})]}),Object(o.jsx)("button",{type:"submit","data-testid":"contact-submit",children:"Submit"}),Object(o.jsx)("p",{className:"message",children:b&&Object(o.jsx)("span",{className:"error-text",children:b})||O&&Object(o.jsx)("span",{className:"success-text",children:O})||Object(o.jsx)("span",{children:"\xa0"})})]}),Object(o.jsxs)("ul",{className:"links",children:[Object(o.jsxs)("li",{children:["Phone: ",Object(o.jsx)("a",{href:"tel:646-770-2622",children:"646-770-2622"})]}),Object(o.jsxs)("li",{children:["Email: ",Object(o.jsx)("a",{href:"mailto:costanza@gmail.com",children:"costanza@gmail.com"})]})]})]})]})}),O=a.p+"static/media/mcc-20200827.bdf3252f.jpeg";var v=function(){return Object(o.jsxs)("section",{className:"about-me",children:[Object(o.jsx)("div",{className:"section-heading",children:Object(o.jsx)("h2",{children:"About\xa0Me"})}),Object(o.jsxs)("div",{children:[Object(o.jsx)("div",{className:"profile-photo",children:Object(o.jsx)("img",{src:O,alt:"Michael Costanza"})}),Object(o.jsx)("p",{children:"I'm a full stack web application developer with a backround in Physics and Electrical Engineering. I grew up and went to college on the east coast, but currently reside in the San Franciso Bay Area with my family. I have experience with a variety of web-related technologies, including JavaScript, PHP, Perl, JSP, Java, MySQL, HTML5 and CSS3, and I've worked with several common software engineering tools, including GitHub/Git, Subversion, CVS, Bugzilla, VS Code, Coda, Intellij IDEA, and more. I got my first taste of real software development in college, writing programs to process data and simulate systems, first in BASIC, then Pascal and later in C \u2013 even using assembly language to create instruction sets for custom-designed systems. I'm a problem solver, and like digging in on software challenges as well as figuring out how to best addess the needs of my business partners and team members."}),Object(o.jsx)("p",{children:"Outside of work, I enjoy coaching my kids' baseball and soccer teams, tutoring middle and high school students in math and science, participating in Tough Mudder obstacle courses and having fun with my family and my two mini-dachshunds, Vienna (Sausage) and Pepper(oni)."})]})]})},k=a(6);a(19);var w=function(){var e=k.frontEnd.map((function(e,t){return Object(o.jsx)("li",{children:e},t)})),t=k.backEnd.map((function(e,t){return Object(o.jsx)("li",{children:e},t)}));return Object(o.jsxs)("section",{className:"resume",children:[Object(o.jsx)("div",{className:"section-heading",children:Object(o.jsx)("h2",{children:"Resum\xe9"})}),Object(o.jsxs)("div",{id:"skills",className:"section-content",children:[Object(o.jsxs)("div",{className:"skills-list",children:[Object(o.jsx)("h3",{children:"Front-End Skills"}),Object(o.jsx)("ul",{children:e})]}),Object(o.jsxs)("div",{className:"skills-list",children:[Object(o.jsx)("h3",{children:"Back-End Skills"}),Object(o.jsx)("ul",{children:t})]}),Object(o.jsx)("div",{className:"resume-wrap",children:Object(o.jsx)("embed",{title:"Michael C Costanza's Resum\xe9",src:"/assets/MichaelCCostanza.pdf#toolbar=0&statusbar=0&navpanes=0",type:"application/pdf",width:"100%",height:"100%"})}),Object(o.jsx)("p",{className:"links",children:Object(o.jsxs)("a",{href:"/assets/MichaelCCostanza.pdf",target:"_blank",rel:"noreferrer",children:["Click here to view/download a PDF of my resum\xe9. ",Object(o.jsx)("i",{className:"fas fa-file-download"})]})})]})]})};a(20);var S=function(){return Object(o.jsx)("footer",{children:Object(o.jsxs)("p",{children:[Object(o.jsx)("a",{href:"https://www.linkedin.com/in/costanza/",rel:"noreferrer",target:"_blank",children:Object(o.jsx)("i",{className:"fab fa-linkedin fa-2x"})}),Object(o.jsx)("a",{href:"https://github.com/costanza13",rel:"noreferrer",target:"_blank",children:Object(o.jsx)("i",{className:"fab fa-github fa-2x"})}),Object(o.jsx)("a",{href:"https://www.facebook.com/michael.costanza",rel:"noreferrer",target:"_blank",children:Object(o.jsx)("i",{className:"fab fa-facebook-square fa-2x"})})]})})};a(21);var y=function(){var e,t=document.location.href.split("#")[1],a=t||"about",n=Object(s.useState)(a),i=Object(c.a)(n,2),r=i[0],l=i[1];switch(r){case"portfolio":e=Object(o.jsx)(m,{});break;case"contact":e=Object(o.jsx)(x,{});break;case"resume":e=Object(o.jsx)(w,{});break;case"about":default:e=Object(o.jsx)(v,{})}return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(d,{currentSection:r,setCurrentSection:l}),Object(o.jsx)("main",{children:e}),Object(o.jsx)(S,{})]})},N=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,23)).then((function(t){var a=t.getCLS,s=t.getFID,n=t.getFCP,i=t.getLCP,r=t.getTTFB;a(e),s(e),n(e),i(e),r(e)}))};r.a.render(Object(o.jsx)(n.a.StrictMode,{children:Object(o.jsx)(y,{})}),document.getElementById("root")),N()}],[[22,1,2]]]);
//# sourceMappingURL=main.e189a912.chunk.js.map