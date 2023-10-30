"use strict";(self.webpackChunksamurai_way=self.webpackChunksamurai_way||[]).push([[358],{7358:function(n,e,t){t.r(e),t.d(e,{ConnectUsers:function(){return $}});var r=t(364),o=t(3983),s=t(5671),a=t(3144),i=t(136),l=t(5716),u=t(2791),c=t(1766),p=t(3253),d=t(7152),h=t(2426);var f=t(181);function g(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var t=null==n?null:"undefined"!==typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=t){var r,o,s=[],a=!0,i=!1;try{for(t=t.call(n);!(a=(r=t.next()).done)&&(s.push(r.value),!e||s.length!==e);a=!0);}catch(l){i=!0,o=l}finally{try{a||null==t.return||t.return()}finally{if(i)throw o}}return s}}(n,e)||(0,f.Z)(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var m,x,b,w,v,P,j="pagination_wrapperPagination__OZ4Us",y="pagination_selectedPage__q1et8",C=t(184),Z=function(n){for(var e=n.pageSize,t=n.totalItemsCount,r=n.currentPage,o=n.changeCurrentPage,s=Math.ceil(t/e),a=[],i=1;i<=s;i++)a.push(i);var l=Math.ceil(s/10),c=g((0,u.useState)(1),2),p=c[0],d=c[1],h=10*(p-1)+1,f=10*p;return(0,C.jsxs)("div",{className:j,children:[(0,C.jsx)("button",{disabled:p<=1,onClick:function(){return d(p-1)},children:"-10"}),a.filter((function(n){return n>=h&&n<=f})).map((function(n){return(0,C.jsxs)("span",{onClick:function(){return o(n)},className:r===n?y:"",children:[" ",n," "]},n)})),(0,C.jsx)("button",{disabled:p>=l,onClick:function(){return d(p+1)},children:"+10"})]})},F=t(6444),S=t(6139),k=t(704),z=t(1272),I=(0,k.Z)({form:"userSearch"})((function(n){return(0,C.jsx)(U,{onSelect:n.handleSubmit,children:(0,C.jsx)(S.Z,{name:"value",placeholder:"search for user by name",type:"search",component:z.I})})})),U=F.ZP.form(m||(m=(0,c.Z)(["\n  padding-bottom: 10px;\n  border-bottom: 2px solid #fff;\n"]))),_=function(n){var e=function(e){return(0,C.jsx)("button",{disabled:(t=e.id,n.disableBtnFollow.some((function(n){return n===t}))),onClick:function(){return function(e,t){t?n.follow(e):n.unFollow(e)}(e.id,e.followed)},children:e.followed?"Unfollow":"Follow"});var t};return(0,C.jsxs)(B,{children:[(0,C.jsx)(I,{onSubmit:function(e){n.searchUser(e.value)}}),n.isFetching?(0,C.jsx)(d.$,{}):n.users.map((function(n){return(0,C.jsxs)(M,{isFollow:n.followed,children:[(0,C.jsxs)(N,{to:"/profile/".concat(n.id),children:[(0,C.jsx)("div",{children:(0,C.jsx)("img",{src:n.photos.small?n.photos.small:p,alt:"user photo"})}),(0,C.jsxs)(A,{children:[(0,C.jsxs)("div",{children:["name: ",(0,C.jsx)("b",{children:n.name})]}),(0,C.jsxs)("span",{children:["status: ",n.status?n.status:"empty status"]})]})]}),e(n)]},n.id)})),(0,C.jsx)(Z,{currentPage:n.currentPage,changeCurrentPage:n.changeCurrentPage,totalItemsCount:n.totalItemsCout,pageSize:n.pageSize})]})},Y=(0,F.F4)(x||(x=(0,c.Z)(["\n  0% {\n    transform: translateY(0);\n  }\n  30% {\n    transform: translateY(2px);\n  }\n  60% {\n    transform: translateY(-2px);\n  }\n  100% {\n    transform: translateY(0);\n  }\n"]))),B=F.ZP.div(b||(b=(0,c.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 10px\n"]))),M=F.ZP.div(w||(w=(0,c.Z)(["\n  display: grid;\n  grid-template-columns: auto auto;\n  align-items: center;\n  justify-content: space-between;\n  gap: 30px;\n\n  border-radius: 10px;\n  background-color: var(--bloks-color);\n  padding: 20px 40px;\n\n  & button {\n    cursor: pointer;\n    padding: 10px;\n    width: 100px;\n    border: none;\n    border-radius: 5px;\n    background-color: ",";\n    color: var(--bloks-color);\n    font-size: 1rem;\n    box-shadow: 2px 2px 5px #777575;\n    transition: all 0.2s;\n\n    &:hover {\n      transform: translateY(2px);\n      box-shadow: 1px 1px 1px #777575;\n    }\n\n    &:active {\n      transform: translateY(3px);\n      box-shadow: none;\n    }\n  }\n"])),(function(n){return n.isFollow?"#ffab00":"#2196f3;"})),N=(0,F.ZP)(h.OL)(v||(v=(0,c.Z)(["\n  display: flex;\n  gap: 20px;\n  align-items: center;\n  transition: all 0.1s;\n\n  & div:has(img) {\n    width: 80px;\n    height: 80px;\n  }\n\n  & img {\n    height: 100%;\n    width: 100%;\n    border-radius: 50%;\n    object-fit: cover;\n  }\n\n  &:hover {\n    animation: "," 0.5s ease-in-out;\n  }\n\n  &:active {\n    transform: scale(0.98);\n  }\n"])),Y),A=F.ZP.div(P||(P=(0,c.Z)(["\n  overflow: auto;\n\n  & div {\n    font-size: 1.2rem;\n  }\n\n  & span {\n    color: #939393;\n  }\n"]))),O=function(n){(0,i.Z)(t,n);var e=(0,l.Z)(t);function t(n){var r;return(0,s.Z)(this,t),(r=e.call(this,n)).changeCurrentPage=function(n){r.props.getUsers(n,r.props.pageSize)},r.searchUser=function(n){r.props.getUsers(r.props.currentPage,r.props.pageSize,n)},r}return(0,a.Z)(t,[{key:"componentDidMount",value:function(){this.props.getUsers(this.props.currentPage,this.props.pageSize)}},{key:"render",value:function(){return(0,C.jsx)(_,{changeCurrentPage:this.changeCurrentPage,totalItemsCout:this.props.totalItemsCout,pageSize:this.props.pageSize,currentPage:this.props.currentPage,users:this.props.users,isFetching:this.props.isFetching,disableBtnFollow:this.props.disableBtnFollow,follow:this.props.follow,unFollow:this.props.unFollow,searchUser:this.searchUser})}}]),t}(u.Component),$=(0,r.$j)((function(n){return{users:n.usersPage.users,pageSize:n.usersPage.pageSize,totalItemsCout:n.usersPage.totalItemsCount,currentPage:n.usersPage.currentPage,isFetching:n.usersPage.isFetching,disableBtnFollow:n.usersPage.disableBtnFollow}}),{getUsers:o.Zw,follow:o.ZN,unFollow:o.IJ})(O)}}]);
//# sourceMappingURL=358.1357ee5a.chunk.js.map