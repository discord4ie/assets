(window.webpackJsonp=window.webpackJsonp||[]).push([[199],{1284:function(e,t,r){"use strict";t.__esModule=!0,t.default=void 0;var a,n=b(r(1)),o=r(83),i=h(r(15)),l=b(r(430)),u=h(r(182)),d=h(r(85)),s=r(444),f=h(r(442)),c=h(r(183)),p=h(r(447)),v=h(r(1752)),m=r(4),y=r(21);function h(e){return e&&e.__esModule?e:{default:e}}function b(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var a=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};a.get||a.set?Object.defineProperty(t,r,a):t[r]=e[r]}return t.default=e,t}function _(e,t,r,n){a||(a="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var o=e&&e.defaultProps,i=arguments.length-3;if(t||0===i||(t={children:void 0}),t&&o)for(var l in o)void 0===t[l]&&(t[l]=o[l]);else t||(t=o||{});if(1===i)t.children=n;else if(i>1){for(var u=new Array(i),d=0;d<i;d++)u[d]=arguments[d+3];t.children=u}return{$$typeof:a,type:e,key:void 0===r?null:""+r,ref:null,props:t,_owner:null}}var O=(0,s.makeLazyWithLoadingIndicator)(function(){return Promise.all([r.e(0),r.e(6),r.e(197)]).then(r.t.bind(null,2602,7))}),S=(0,s.makeLazyWithLoadingIndicator)(function(){return Promise.all([r.e(0),r.e(198)]).then(r.t.bind(null,2607,7))}),N=_(c.default,{}),g=function(e){var t,r;function a(){for(var t,r=arguments.length,a=new Array(r),n=0;n<r;n++)a[n]=arguments[n];return(t=e.call.apply(e,[this].concat(a))||this).state={isLoading:!0},t}r=e,(t=a).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r;var i=a.prototype;return i.componentDidMount=function(){var e=this;l.fetchTeams().catch(m.NOOP).then(function(){return e.setState({isLoading:!1})})},i.renderOwnerOnlyRoutes=function(){var e=this.props,t=e.team,r=e.user;return null==t||null==r?null:t.owner_user_id!==r.id?_(o.Redirect,{to:m.Routes.TEAM_INFORMATION(t.id)}):_(o.Route,{path:m.Routes.TEAM_PAYOUT_SETTINGS(m.TEAM_ID_ROUTE_PARAMETER),component:S})},i.render=function(){var e=this.props,t=e.match,r=e.team;return this.state.isLoading?N:null==r?_(p.default,{heading:y.Messages.Common.TEAM_NOT_FOUND_HEADING,errorMessage:y.Messages.Common.TEAM_NOT_FOUND_BODY.format({teamId:t.params.teamId})}):_(n.Fragment,{},void 0,_(o.Route,{path:m.Routes.EDIT_TEAM(m.TEAM_ID_ROUTE_PARAMETER),render:function(e){return n.createElement(v.default,e)}}),_(f.default,{},void 0,_(o.Switch,{},void 0,_(o.Route,{exact:!0,path:m.Routes.EDIT_TEAM(m.TEAM_ID_ROUTE_PARAMETER),render:function(e){return _(o.Redirect,{to:m.Routes.TEAM_INFORMATION(e.match.params.teamId)})}}),_(o.Route,{exact:!0,path:m.Routes.TEAM_INFORMATION(m.TEAM_ID_ROUTE_PARAMETER),render:function(e){return n.createElement(O,e)}}),this.renderOwnerOnlyRoutes())))},a}(n.Component);g.displayName="TeamSettingsContainer";var T=i.default.connectStores([u.default,d.default],function(e){return{team:u.default.getTeam(e.match.params.teamId),user:d.default.user}})((0,o.withRouter)(g));t.default=T},1422:function(e,t,r){"use strict";t.__esModule=!0,t.default=void 0;!function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var a=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};a.get||a.set?Object.defineProperty(t,r,a):t[r]=e[r]}t.default=e}(r(1));var a,n=l(r(9)),o=l(r(25)),i=l(r(1256));function l(e){return e&&e.__esModule?e:{default:e}}var u=function(e){var t,r=e.children,l=e.className,u=e.isFlush,d=void 0!==u&&u,s=e.tag,f=void 0===s?"p":s;return function(e,t,r,n){a||(a="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var o=e&&e.defaultProps,i=arguments.length-3;if(t||0===i||(t={children:void 0}),t&&o)for(var l in o)void 0===t[l]&&(t[l]=o[l]);else t||(t=o||{});if(1===i)t.children=n;else if(i>1){for(var u=new Array(i),d=0;d<i;d++)u[d]=arguments[d+3];t.children=u}return{$$typeof:a,type:e,key:void 0===r?null:""+r,ref:null,props:t,_owner:null}}(o.default,{className:(0,n.default)(i.default.heading,(t={},t[i.default.flush]=d,t),l),color:o.default.Colors.PRIMARY_200,size:o.default.Sizes.SMALL,tag:f,textCase:o.default.Cases.UPPERCASE,weight:o.default.Weights.SEMIBOLD},void 0,r)};u.displayName="SidebarSectionHeading";var d=u;t.default=d},1438:function(e,t,r){"use strict";t.__esModule=!0,t.SubNavParent=t.SubNavList=t.SubNavLink=t.SidebarNavList=t.SidebarLink=void 0;var a,n=c(r(1)),o=f(r(9)),i=f(r(69)),l=f(r(131)),u=f(r(428)),d=c(r(420)),s=f(r(1255));function f(e){return e&&e.__esModule?e:{default:e}}function c(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var a=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};a.get||a.set?Object.defineProperty(t,r,a):t[r]=e[r]}return t.default=e,t}function p(e,t,r,n){a||(a="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var o=e&&e.defaultProps,i=arguments.length-3;if(t||0===i||(t={children:void 0}),t&&o)for(var l in o)void 0===t[l]&&(t[l]=o[l]);else t||(t=o||{});if(1===i)t.children=n;else if(i>1){for(var u=new Array(i),d=0;d<i;d++)u[d]=arguments[d+3];t.children=u}return{$$typeof:a,type:e,key:void 0===r?null:""+r,ref:null,props:t,_owner:null}}function v(){return(v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}var m=function(e){return n.createElement(d.default,v({name:d.IconNames.ARROW_CORNER},e))};m.displayName="ArrowCorner";var y=function(e){return n.createElement(d.default,v({name:d.IconNames.ARROW_RIGHT},e))};y.displayName="ArrowRight";var h=(0,i.default)({SMALL:null,MEDIUM:null}),b=function(e){var t,r=e.activeClassName,a=void 0===r?s.default.activeLink:r,n=e.children,i=e.className,d=void 0===i?s.default.navLink:i,f=e.from,c=void 0===f?"sidebar":f,v=e.Icon,m=e.isNavLink,y=void 0===m||m,b=e.pathname,_=e.size,O=void 0===_?h.MEDIUM:_,S=e.to,N=e.onClick;return p(u.default,{onClick:N,tag:"li"},void 0,p(l.default,{activeClassName:a,className:(0,o.default)(d,(t={},t[s.default.navLinkSmall]=O===h.SMALL,t[s.default.navLinkMedium]=O===h.MEDIUM,t)),pathname:b,to:S,isNavLink:y,from:c},void 0,v&&p(v,{className:s.default.icon,width:24,height:24}),n))};t.SidebarLink=b,b.displayName="SidebarLink",b.Size=h;var _=function(e){var t=e.children;return p("ul",{className:s.default.mainList},void 0,t)};t.SidebarNavList=_,_.displayName="SidebarNavList";var O=function(e){var t=e.to,r=e.children;return p(b,{Icon:m,activeClassName:s.default.subLinkActive,to:t,className:s.default.subNav},void 0,r)};t.SubNavLink=O,O.displayName="SubNavLink";var S=function(e){var t=e.children;return p("ul",{className:s.default.subList},void 0,t)};t.SubNavList=S,S.displayName="SubNavList";var N=function(e){var t=e.Icon,r=e.to,a=e.label;return p(b,{Icon:t,activeClassName:s.default.activeLinkSubParent,exact:!1,to:r},void 0,a,p(y,{className:s.default.arrowRight}))};t.SubNavParent=N,N.displayName="SubNavParent"},1549:function(e,t,r){"use strict";t.__esModule=!0,t.SidebarSelect=t.SidebarBackTo=void 0;!function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var a=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};a.get||a.set?Object.defineProperty(t,r,a):t[r]=e[r]}t.default=e}(r(1));var a,n=l(r(1550)),o=l(r(425)),i=l(r(1266));function l(e){return e&&e.__esModule?e:{default:e}}function u(e,t,r,n){a||(a="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var o=e&&e.defaultProps,i=arguments.length-3;if(t||0===i||(t={children:void 0}),t&&o)for(var l in o)void 0===t[l]&&(t[l]=o[l]);else t||(t=o||{});if(1===i)t.children=n;else if(i>1){for(var u=new Array(i),d=0;d<i;d++)u[d]=arguments[d+3];t.children=u}return{$$typeof:a,type:e,key:void 0===r?null:""+r,ref:null,props:t,_owner:null}}var d=function(e){var t=e.children,r=e.to;return u(n.default,{className:i.default.backToLink,to:r},void 0,t)};t.SidebarBackTo=d,d.displayName="SidebarBackTo";var s=function(e){var t=e.options,r=e.valueRenderer,a=e.optionRenderer,n=e.value,l=e.onChange;return u(o.default,{className:i.default.select,searchable:!1,clearable:!1,options:t,valueRenderer:r,optionRenderer:a,value:n,onChange:l})};t.SidebarSelect=s,s.displayName="SidebarSelect"},1550:function(e,t,r){"use strict";t.__esModule=!0,t.default=void 0;var a,n=c(r(1)),o=f(r(9)),i=r(83),l=f(r(40)),u=c(r(420)),d=f(r(25)),s=f(r(1265));function f(e){return e&&e.__esModule?e:{default:e}}function c(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var a=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};a.get||a.set?Object.defineProperty(t,r,a):t[r]=e[r]}return t.default=e,t}function p(e,t,r,n){a||(a="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var o=e&&e.defaultProps,i=arguments.length-3;if(t||0===i||(t={children:void 0}),t&&o)for(var l in o)void 0===t[l]&&(t[l]=o[l]);else t||(t=o||{});if(1===i)t.children=n;else if(i>1){for(var u=new Array(i),d=0;d<i;d++)u[d]=arguments[d+3];t.children=u}return{$$typeof:a,type:e,key:void 0===r?null:""+r,ref:null,props:t,_owner:null}}var v=function(e){var t,r;function a(){return e.apply(this,arguments)||this}return r=e,(t=a).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,a.prototype.render=function(){var e=this.props,t=e.children,r=e.className,a=e.to;return p(i.Link,{className:(0,o.default)(s.default.wrapper,r),to:a},void 0,p(l.default,{align:l.default.Align.CENTER},void 0,p(l.default.Child,{className:s.default.arrow,grow:0,shrink:0},void 0,p(u.default,{name:u.IconNames.BACK_ARROW,height:16,width:16})),p(l.default.Child,{grow:1,shrink:1},void 0,p(d.default,{size:d.default.Sizes.SMALL},void 0,t))))},a}(n.Component);t.default=v,v.displayName="BackTo"},1752:function(e,t,r){"use strict";t.__esModule=!0,t.default=void 0;var a,n=_(r(1)),o=b(r(15)),i=b(r(182)),l=b(r(85)),u=_(r(420)),d=r(1438),s=r(453),f=b(r(446)),c=b(r(441)),p=b(r(187)),v=b(r(1422)),m=r(1549),y=r(4),h=r(21);function b(e){return e&&e.__esModule?e:{default:e}}function _(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var a=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};a.get||a.set?Object.defineProperty(t,r,a):t[r]=e[r]}return t.default=e,t}function O(e,t,r,n){a||(a="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var o=e&&e.defaultProps,i=arguments.length-3;if(t||0===i||(t={children:void 0}),t&&o)for(var l in o)void 0===t[l]&&(t[l]=o[l]);else t||(t=o||{});if(1===i)t.children=n;else if(i>1){for(var u=new Array(i),d=0;d<i;d++)u[d]=arguments[d+3];t.children=u}return{$$typeof:a,type:e,key:void 0===r?null:""+r,ref:null,props:t,_owner:null}}function S(){return(S=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}var N=function(e){return n.createElement(u.default,S({name:u.IconNames.TEAM},e))};N.displayName="TeamIcon";var g=function(e){return n.createElement(u.default,S({name:u.IconNames.PAYOUT_SETTINGS},e))};g.displayName="PayoutIcon";var T=function(e){var t,r;function a(){for(var t,r=arguments.length,a=new Array(r),n=0;n<r;n++)a[n]=arguments[n];return(t=e.call.apply(e,[this].concat(a))||this).handleTeamChange=function(e){var r=e.value;t.props.history.push(y.Routes.EDIT_TEAM(r))},t}r=e,(t=a).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r;var n=a.prototype;return n.renderTeamSettings=function(){var e=this.props,t=e.match,r=e.team,a=e.user,n=t.params.teamId;return null==r||null==a?null:O(p.default,{isFlush:!0},void 0,O(v.default,{},void 0,h.Messages.Navigation.SETTINGS),O(d.SidebarNavList,{},void 0,O(d.SidebarLink,{Icon:N,to:y.Routes.TEAM_INFORMATION(n)},"Team information",h.Messages.Navigation.TEAM),r.owner_user_id===a.id?O(d.SidebarLink,{Icon:g,to:y.Routes.TEAM_PAYOUT_SETTINGS(n)},"Payout information",h.Messages.Navigation.PAYOUT_SETTINGS):null))},n.renderTeamSelectOptions=function(e){return O(f.default,{option:e})},n.renderTeamSelectValue=function(e){return O(f.default,{option:e,isValue:!0})},n.render=function(){var e=this.props.match.params.teamId;return O(c.default,{},void 0,O(m.SidebarBackTo,{to:y.Routes.TEAMS},void 0,h.Messages.Navigation.BACK_TO_TEAMS),O(p.default,{},void 0,O(v.default,{},void 0,h.Messages.Navigation.SELECTED_TEAM),O(m.SidebarSelect,{options:(0,s.getTeamSelectOptions)(this.props.teams),valueRenderer:this.renderTeamSelectValue,optionRenderer:this.renderTeamSelectOptions,value:e,onChange:this.handleTeamChange})),this.renderTeamSettings())},a}(n.Component);T.displayName="TeamManagementSidebar";var M=o.default.connectStores([i.default,l.default],function(e){var t=e.match.params.teamId;return{team:i.default.getTeam(t),teams:i.default.teamsMap,user:l.default.user}})(T);t.default=M}}]);
//# sourceMappingURL=0e4e69c287c6f6fcc073.js.map