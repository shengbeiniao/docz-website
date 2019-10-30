(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"./src/docs/documentation/references/components-api.mdx":function(e,n,a){"use strict";a.r(n),a.d(n,"default",function(){return g});var t=a("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),o=a("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),m=a("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js"),r=a("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js"),p=a("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js"),s=a("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js"),c=a("./node_modules/react/index.js"),i=a.n(c),l=a("./node_modules/@mdx-js/tag/dist/index.js"),g=function(e){function n(e){var a;return Object(o.a)(this,n),(a=Object(r.a)(this,Object(p.a)(n).call(this,e))).layout=null,a}return Object(s.a)(n,e),Object(m.a)(n,[{key:"render",value:function(){var e=this.props,n=e.components;Object(t.a)(e,["components"]);return i.a.createElement(l.MDXTag,{name:"wrapper",components:n},i.a.createElement(l.MDXTag,{name:"h1",components:n,props:{id:"components--hooks-api"}},"Components & Hooks API"),i.a.createElement(l.MDXTag,{name:"blockquote",components:n},i.a.createElement(l.MDXTag,{name:"h3",components:n,parentName:"blockquote",props:{id:"note"}},"Note"),i.a.createElement(l.MDXTag,{name:"p",components:n,parentName:"blockquote"},"By default, this components and hooks just works inside a Docz theme, because it needs a lot of data that just has in a Docz environment")),i.a.createElement(l.MDXTag,{name:"hr",components:n}),i.a.createElement(l.MDXTag,{name:"h2",components:n,props:{id:"componentsprovider"}},i.a.createElement(l.MDXTag,{name:"inlineCode",components:n,parentName:"h2"},"<ComponentsProvider>")),i.a.createElement(l.MDXTag,{name:"p",components:n},"Use this provider to pass your components to MDX use them inside it as a HTML tags."),i.a.createElement(l.MDXTag,{name:"pre",components:n},i.a.createElement(l.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-js"}},"import React from 'react'\nimport { ComponentsProvider, theme } from 'docz'\n\nimport MyCoolSidebar from './my-cool-sidebar'\nimport * as components from './my-component-list'\n\nconst map = {\n  page: components.Page,\n  h1: components.H1,\n  h2: components.H2,\n  pre: components.Pre,\n}\n\nconst Theme = theme(({ children }) => (\n  <div>\n    <MyCoolSidebar />\n    <ComponentsProvider components={map}>\n      {children}\n    </ComponentsProvider>\n  </div>\n))\n")),i.a.createElement(l.MDXTag,{name:"h3",components:n,props:{id:"properties"}},"Properties"),i.a.createElement(l.MDXTag,{name:"ul",components:n},i.a.createElement(l.MDXTag,{name:"li",components:n,parentName:"ul"},i.a.createElement(l.MDXTag,{name:"strong",components:n,parentName:"li"},"components:")," ",i.a.createElement(l.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"ComponentsMap"),i.a.createElement("br",null),"\nThis map is responsible to render components inside your compiled ",i.a.createElement(l.MDXTag,{name:"inlineCode",components:n,parentName:"li"},".mdx"))),i.a.createElement(l.MDXTag,{name:"h3",components:n,props:{id:"type-definitions"}},"Type Definitions"),i.a.createElement(l.MDXTag,{name:"pre",components:n},i.a.createElement(l.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-ts"}},"interface ComponentsMap {\n  loading?: CT\n  page?: CT<PageProps>\n  notFound?: CT<RouteComponentProps<any>>\n  playground?: PlaygroundComponent\n  h1?: CT<any> | string\n  h2?: CT<any> | string\n  h3?: CT<any> | string\n  h4?: CT<any> | string\n  h5?: CT<any> | string\n  h6?: CT<any> | string\n  span?: CT<any> | string\n  a?: CT<any> | string\n  ul?: CT<any> | string\n  table?: CT<any> | string\n  pre?: CT<any> | string\n  code?: CT<any> | string\n  inlineCode?: CT<any> | string\n  [key: string]: any\n}\n\ninterface ComponentsProviderProps = {\n  components: ComponentsMap\n}\n\nexport const ComponentsProvider: React.SFC<ComponentsProviderProps>\n")),i.a.createElement(l.MDXTag,{name:"hr",components:n}),i.a.createElement(l.MDXTag,{name:"h2",components:n,props:{id:"link"}},i.a.createElement(l.MDXTag,{name:"inlineCode",components:n,parentName:"h2"},"<Link>")),i.a.createElement(l.MDXTag,{name:"p",components:n},"Use this component to create links inside your theme."),i.a.createElement(l.MDXTag,{name:"pre",components:n},i.a.createElement(l.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-js"}},"import React from 'react'\nimport { Link } from 'docz'\n\nconst App = () => <Link to=\"/my-document-route\">Name</Link>\n")),i.a.createElement(l.MDXTag,{name:"h3",components:n,props:{id:"properties-1"}},"Properties"),i.a.createElement(l.MDXTag,{name:"ul",components:n},i.a.createElement(l.MDXTag,{name:"li",components:n,parentName:"ul"},"to: ",i.a.createElement(l.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"string"),i.a.createElement("br",null),"\nThe link path")),i.a.createElement(l.MDXTag,{name:"h3",components:n,props:{id:"type-definitions-1"}},"Type Definitions"),i.a.createElement(l.MDXTag,{name:"pre",components:n},i.a.createElement(l.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-ts"}},"import { LinkProps } from '@reach/router'\nexport const Link: React.SFC<LinkProps>\n")),i.a.createElement(l.MDXTag,{name:"hr",components:n}),i.a.createElement(l.MDXTag,{name:"h2",components:n,props:{id:"playground"}},i.a.createElement(l.MDXTag,{name:"inlineCode",components:n,parentName:"h2"},"<Playground>")),i.a.createElement(l.MDXTag,{name:"p",components:n},"Used to render your component inside a playground and showing the code used for that."),i.a.createElement(l.MDXTag,{name:"h3",components:n,props:{id:"properties-2"}},"Properties"),i.a.createElement(l.MDXTag,{name:"p",components:n},i.a.createElement(l.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"none")),i.a.createElement(l.MDXTag,{name:"h3",components:n,props:{id:"type-definitions-2"}},"Type Definitions"),i.a.createElement(l.MDXTag,{name:"pre",components:n},i.a.createElement(l.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-ts"}},"interface PlaygroundProps {\n  children: React.ReactNode | () => React.ReactNode\n}\n")),i.a.createElement(l.MDXTag,{name:"hr",components:n}),i.a.createElement(l.MDXTag,{name:"h2",components:n,props:{id:"props"}},i.a.createElement(l.MDXTag,{name:"inlineCode",components:n,parentName:"h2"},"<Props>")),i.a.createElement(l.MDXTag,{name:"p",components:n},"Component that takes a component and generates a table of properties based on your properties definitions."),i.a.createElement(l.MDXTag,{name:"pre",components:n},i.a.createElement(l.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-markdown"}},"---\nname: MyComponent\n---\n\nimport { Props } from 'docz'\nimport MyComponent from './MyComponent'\n\n<Props of={MyComponent} />\n")),i.a.createElement(l.MDXTag,{name:"h3",components:n,props:{id:"descriptions"}},"Descriptions"),i.a.createElement(l.MDXTag,{name:"p",components:n},"You can add descriptions for your props by adding a comment on the line above the prop. Note: Description comments must be in the format ",i.a.createElement(l.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"/** Description */"),"."),i.a.createElement(l.MDXTag,{name:"pre",components:n},i.a.createElement(l.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-js"}},"MyComponent.propTypes = {\n  /** The description for myProp */\n  myProp: PropTypes.string,\n}\n")),i.a.createElement(l.MDXTag,{name:"h3",components:n,props:{id:"properties-3"}},"Properties"),i.a.createElement(l.MDXTag,{name:"ul",components:n},i.a.createElement(l.MDXTag,{name:"li",components:n,parentName:"ul"},i.a.createElement(l.MDXTag,{name:"strong",components:n,parentName:"li"},"of:")," ",i.a.createElement(l.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"React.ComponentType<any>"))),i.a.createElement(l.MDXTag,{name:"hr",components:n}),i.a.createElement(l.MDXTag,{name:"h2",components:n,props:{id:"usecomponents"}},i.a.createElement(l.MDXTag,{name:"inlineCode",components:n,parentName:"h2"},"useComponents")),i.a.createElement(l.MDXTag,{name:"p",components:n},"Hook responsible for access the components map passed as a to the ",i.a.createElement(l.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"<ComponentsProvider>")," of your theme."),i.a.createElement(l.MDXTag,{name:"pre",components:n},i.a.createElement(l.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-js"}},"import { useComponents } from 'docz'\n\nconst App = () => {\n  const components = useComponents()\n  return /* ... */\n}\n")),i.a.createElement(l.MDXTag,{name:"h3",components:n,props:{id:"params"}},"Params"),i.a.createElement(l.MDXTag,{name:"p",components:n},i.a.createElement(l.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"none")),i.a.createElement(l.MDXTag,{name:"h3",components:n,props:{id:"return"}},"Return"),i.a.createElement(l.MDXTag,{name:"ul",components:n},i.a.createElement(l.MDXTag,{name:"li",components:n,parentName:"ul"},"components: ",i.a.createElement(l.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"ComponentsMap"))),i.a.createElement(l.MDXTag,{name:"hr",components:n}),i.a.createElement(l.MDXTag,{name:"h2",components:n,props:{id:"usedocs"}},i.a.createElement(l.MDXTag,{name:"inlineCode",components:n,parentName:"h2"},"useDocs")),i.a.createElement(l.MDXTag,{name:"p",components:n},"Use this hook to get the list of all parsed documents. It can be useful when you want to create something like a menu or a list."),i.a.createElement(l.MDXTag,{name:"pre",components:n},i.a.createElement(l.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-js"}},"import { useDocs, Link } from 'docz'\n\nconst App = () => {\n  const docs = useDocs()\n  return (\n    <MyMenu>\n      {docs.map(doc => (\n        <Link key={doc.id} to={doc.route}>\n          {doc.name}\n        </Link>\n      ))}\n    </MyMenu>\n  )\n}\n")),i.a.createElement(l.MDXTag,{name:"h3",components:n,props:{id:"params-1"}},"Params"),i.a.createElement(l.MDXTag,{name:"p",components:n},i.a.createElement(l.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"none")),i.a.createElement(l.MDXTag,{name:"h3",components:n,props:{id:"return-1"}},"Return"),i.a.createElement(l.MDXTag,{name:"ul",components:n},i.a.createElement(l.MDXTag,{name:"li",components:n,parentName:"ul"},"docs: ",i.a.createElement(l.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"Docs[]"),i.a.createElement("br",null),"\nAll documents parsed by docz")),i.a.createElement(l.MDXTag,{name:"h3",components:n,props:{id:"typings-definitions"}},"Typings Definitions"),i.a.createElement(l.MDXTag,{name:"pre",components:n},i.a.createElement(l.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-ts"}},"interface Docs {\n  id: string\n  filepath: string\n  link: string | null\n  slug: string\n  name: string\n  route: string\n  menu: string | null\n  headings: Heading[]\n  [key: string]: any\n}\n\nexport function useDocs(): Docs[]\n")),i.a.createElement(l.MDXTag,{name:"hr",components:n}),i.a.createElement(l.MDXTag,{name:"h2",components:n,props:{id:"usemenus"}},i.a.createElement(l.MDXTag,{name:"inlineCode",components:n,parentName:"h2"},"useMenus")),i.a.createElement(l.MDXTag,{name:"p",components:n},"This hook will return the menu built by Docz using your documents.\nUse this to get your menus easier or use ",i.a.createElement(l.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"useDocs")," if you want the documents ordered like the order in your project configuration."),i.a.createElement(l.MDXTag,{name:"pre",components:n},i.a.createElement(l.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-js"}},"import { useMenus } from 'docz'\n\nconst App = () => {\n  const menus = useMenus()\n  return /* ... */\n}\n")),i.a.createElement(l.MDXTag,{name:"h3",components:n,props:{id:"params-2"}},"Params"),i.a.createElement(l.MDXTag,{name:"ul",components:n},i.a.createElement(l.MDXTag,{name:"li",components:n,parentName:"ul"},i.a.createElement(l.MDXTag,{name:"strong",components:n,parentName:"li"},"options"),": ",i.a.createElement(l.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"Object"),i.a.createElement(l.MDXTag,{name:"ul",components:n,parentName:"li"},i.a.createElement(l.MDXTag,{name:"li",components:n,parentName:"ul"},i.a.createElement(l.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"query: String")," Use ",i.a.createElement(l.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"query")," to filter menu results. The query is matched against the menu headers, not page content.")))),i.a.createElement(l.MDXTag,{name:"h3",components:n,props:{id:"return-2"}},"Return"),i.a.createElement(l.MDXTag,{name:"ul",components:n},i.a.createElement(l.MDXTag,{name:"li",components:n,parentName:"ul"},i.a.createElement(l.MDXTag,{name:"strong",components:n,parentName:"li"},"menus:")," ",i.a.createElement(l.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"MenuItem[]"))),i.a.createElement(l.MDXTag,{name:"h3",components:n,props:{id:"type-definitions-3"}},"Type Definitions"),i.a.createElement(l.MDXTag,{name:"pre",components:n},i.a.createElement(l.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-ts"}},"export interface MenuItem {\n  id: string\n  name: string\n  route?: string\n  href?: string\n  menu?: MenuItem[]\n  order?: number\n  parent?: string\n}\n\nexport function useMenus(opts: UseMenuOpts): MenuItem[]\n")),i.a.createElement(l.MDXTag,{name:"hr",components:n}),i.a.createElement(l.MDXTag,{name:"h2",components:n,props:{id:"useconfig"}},i.a.createElement(l.MDXTag,{name:"inlineCode",components:n,parentName:"h2"},"useConfig")),i.a.createElement(l.MDXTag,{name:"p",components:n},"Retrieve the project config object passed on your project configuration.\nBy default, Docz merges your ",i.a.createElement(l.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"themeConfig")," object with the default theme config of each theme."),i.a.createElement(l.MDXTag,{name:"pre",components:n},i.a.createElement(l.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-js"}},"import React from 'react'\nimport { useConfig } from 'docz'\n\nconst MyDeepComponentInsideMyTheme = () => {\n  const config = useConfig()\n  return /* ... */\n}\n")),i.a.createElement(l.MDXTag,{name:"h3",components:n,props:{id:"properties-4"}},"Properties"),i.a.createElement(l.MDXTag,{name:"p",components:n},i.a.createElement(l.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"none")),i.a.createElement(l.MDXTag,{name:"h3",components:n,props:{id:"return-3"}},"Return"),i.a.createElement(l.MDXTag,{name:"ul",components:n},i.a.createElement(l.MDXTag,{name:"li",components:n,parentName:"ul"},i.a.createElement(l.MDXTag,{name:"strong",components:n,parentName:"li"},"config:")," ",i.a.createElement(l.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"Config"))),i.a.createElement(l.MDXTag,{name:"h3",components:n,props:{id:"type-definitions-4"}},"Type Definitions"),i.a.createElement(l.MDXTag,{name:"pre",components:n},i.a.createElement(l.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-ts"}},"export type ThemeConfig = Record<string, any>\nexport interface Config {\n  title: string\n  description: string\n  themeConfig: ThemeConfig\n  menu: MenuItem[]\n  version: string | null\n  repository: string | null\n  native: boolean\n  separator: string\n  codeSandbox: boolean\n  linkComponent?: React.ComponentType<any>\n}\n\nexport function useConfig(): Config\n")),i.a.createElement(l.MDXTag,{name:"hr",components:n}),i.a.createElement(l.MDXTag,{name:"h2",components:n,props:{id:"theme"}},i.a.createElement(l.MDXTag,{name:"inlineCode",components:n,parentName:"h2"},"theme()")),i.a.createElement(l.MDXTag,{name:"p",components:n},"If you want to create your custom theme you need to use ",i.a.createElement(l.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"theme()")," function. It's a High Order Component that\nreceives as the first parameter a ",i.a.createElement(l.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"config")," property and returns a function that receives your theme component as a parameter:"),i.a.createElement(l.MDXTag,{name:"pre",components:n},i.a.createElement(l.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-js"}},"import React from 'react'\nimport { theme, DocPreview } from 'docz'\n\nconst Theme = () => (\n  <div>\n    <MyCoolestSidebar />\n    <DocPreview />\n  </div>\n)\n\nconst themeConfig = {\n  /* ... */\n}\n\nexport default theme(themeConfig)(Theme)\n")),i.a.createElement(l.MDXTag,{name:"h3",components:n,props:{id:"type-definitions-5"}},"Type Definitions"),i.a.createElement(l.MDXTag,{name:"pre",components:n},i.a.createElement(l.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-ts"}},"import { ComponentType, ReactNode } from 'react'\n\ninterface ThemeConfig {\n  [key: string]: any\n}\n\nfunction theme(config: ThemeConfig): (Component: ComponentType) => ReactNode\n")))}}]),n}(i.a.Component);"undefined"!==typeof g&&g&&g===Object(g)&&Object.defineProperty(g,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/docs/documentation/references/components-api.mdx"}}),"undefined"!==typeof g&&g&&g===Object(g)&&Object.defineProperty(g,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/docs/documentation/references/components-api.mdx"}}),g.isMDXComponent=!0}}]);
//# sourceMappingURL=src-docs-documentation-references-components-api.8919602c98d135083ee9.js.map