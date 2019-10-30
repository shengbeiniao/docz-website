(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"./src/docs/documentation/references/creating-themes.mdx":function(e,n,o){"use strict";o.r(n),o.d(n,"default",function(){return d});var t=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),a=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),m=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js"),r=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js"),s=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js"),c=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js"),p=o("./node_modules/react/index.js"),i=o.n(p),l=o("./node_modules/@mdx-js/tag/dist/index.js"),d=function(e){function n(e){var o;return Object(a.a)(this,n),(o=Object(r.a)(this,Object(s.a)(n).call(this,e))).layout=null,o}return Object(c.a)(n,e),Object(m.a)(n,[{key:"render",value:function(){var e=this.props,n=e.components;Object(t.a)(e,["components"]);return i.a.createElement(l.MDXTag,{name:"wrapper",components:n},i.a.createElement(l.MDXTag,{name:"h1",components:n,props:{id:"creating-themes"}},"Creating Themes"),i.a.createElement(l.MDXTag,{name:"p",components:n},"One of the main features of Docz is that you can create your own theme from scratch and just use data parsed from Docz.\nWe provide a bunch of components that can help you to create your own theme without pain."),i.a.createElement(l.MDXTag,{name:"p",components:n},"Let's use this project structure through the following examples:"),i.a.createElement(l.MDXTag,{name:"pre",components:n},i.a.createElement(l.MDXTag,{name:"code",components:n,parentName:"pre",props:{}},"pages/\n  hello-world.mdx\nsrc/\n  ui/\n    Page.js\n  theme.js\ndoczrc.js\npackage.json\n")),i.a.createElement(l.MDXTag,{name:"h2",components:n,props:{id:"setting-theme-filepath"}},"Setting theme filepath"),i.a.createElement(l.MDXTag,{name:"p",components:n},"First of all, you need to set the path of your theme in the ",i.a.createElement(l.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"/docs/project-configuration"}},"Project Configuration")," by changing the ",i.a.createElement(l.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"theme")," property."),i.a.createElement(l.MDXTag,{name:"pre",components:n},i.a.createElement(l.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-js"}},"// doczrc.js\nexport default {\n  theme: 'src/theme',\n}\n")),i.a.createElement(l.MDXTag,{name:"h2",components:n,props:{id:"creating-your-theme-component"}},"Creating your theme component"),i.a.createElement(l.MDXTag,{name:"p",components:n},"Then just create your component passing the ",i.a.createElement(l.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"children")," inside it and export it as default using the ",i.a.createElement(l.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"/docs/components-api"}},i.a.createElement(l.MDXTag,{name:"inlineCode",components:n,parentName:"a"},"theme()"))," high order component as an enhancer."),i.a.createElement(l.MDXTag,{name:"pre",components:n},i.a.createElement(l.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-js"}},"// src/theme.js\nimport React from 'react'\nimport { theme } from 'docz'\n\nconst Theme = ({ children }) => <div>{children}</div>\n\nexport default theme()(Theme)\n")),i.a.createElement(l.MDXTag,{name:"blockquote",components:n},i.a.createElement(l.MDXTag,{name:"p",components:n,parentName:"blockquote"},"It's required to pass the ",i.a.createElement(l.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"children")," property inside your theme in order to render Docz routes properly.")),i.a.createElement(l.MDXTag,{name:"p",components:n},"In fact, if you just create something like above you won't have nothing too much useful to show.\nSo, is important that you use the Docz ",i.a.createElement(l.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"/docs/components-api"}},"built-in components")," to help you to create beautiful documents\npages and use the parsed data from data for mount menus and other things."),i.a.createElement(l.MDXTag,{name:"h2",components:n,props:{id:"default-theme-configuration"}},"Default theme configuration"),i.a.createElement(l.MDXTag,{name:"p",components:n},"Each theme has your own default ",i.a.createElement(l.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"themeConfig")," object that define whatever you want to turn customizable.\nIt's very useful to set something like custom fonts, colors, spaces, some styles properties and other project global variables."),i.a.createElement(l.MDXTag,{name:"pre",components:n},i.a.createElement(l.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-js"}},"// src/theme.js\nimport React from 'react'\nimport { theme } from 'docz'\n\nconst Theme = ({ children }) => <div>{children}</div>\n\nconst themeConfig = {\n  colors: {\n    primary: 'tomato',\n    secondary: 'khaki',\n    gray: 'lightslategray',\n  },\n}\n\nexport default theme(themeConfig)(Theme)\n")),i.a.createElement(l.MDXTag,{name:"p",components:n},"By default, Docz will use this object as default configuration and merge it with the ",i.a.createElement(l.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"themeConfig")," setting in the project configuration.\nUsing together with ",i.a.createElement(l.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"useConfig")," hook you can do a lot of things, like use css-in-js theming or retrieve props from your ",i.a.createElement(l.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"themeConfig")," in a deep render component."),i.a.createElement(l.MDXTag,{name:"pre",components:n},i.a.createElement(l.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-js"}},"// src/theme.js\nimport React from 'react'\nimport { theme, useConfig } from 'docz'\nimport { ThemeProvider } from 'emotion-theming'\n\nconst Theme = () => {\n  const config = useConfig()\n  return (\n    <ThemeProvider theme={config}>\n      <div>My theme</div>\n    </ThemeProvider>\n  )\n}\n\nconst themeConfig = {\n  colors: {\n    primary: 'tomato',\n    secondary: 'khaki',\n    gray: 'lightslategray',\n  },\n}\n\nexport default theme(themeConfig)(Theme)\n")),i.a.createElement(l.MDXTag,{name:"h2",components:n,props:{id:"providing-components"}},"Providing Components"),i.a.createElement(l.MDXTag,{name:"p",components:n},"How we explain in the components API section, the ",i.a.createElement(l.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"<ComponentsProvider>")," is the component responsible to\nprovide for MDX and Docz each component that you want to render inside your documents. With these\ncomponents passed to the provider, you can easily change how your mdx file will be rendered and change default behaviors and styles."),i.a.createElement(l.MDXTag,{name:"pre",components:n},i.a.createElement(l.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-js"}},"// src/theme.js\nimport React from 'react'\nimport { theme, useConfig, ComponentsProvider } from 'docz'\nimport { ThemeProvider } from 'emotion-theming'\n\nimport * as components from './ui'\n\nconst map = {\n  page: components.Page,\n  notFound: components.NotFound,\n  render: components.Render,\n  h1: components.H1,\n  h2: components.H2,\n  h3: components.H3,\n  h4: components.H4,\n  h5: components.H5,\n  h6: components.H6,\n  ul: components.List,\n  loading: components.Loading,\n  table: components.Table,\n  pre: components.Pre,\n  inlineCode: components.Code,\n}\n\nconst Theme = ({ children }) => {\n  const config = useConfig()\n  return (\n    <ThemeProvider theme={config}>\n      <ComponentsProvider components={map}>\n        {children}\n      </ComponentsProvider>\n    </ThemeProvider>\n  )\n}\n\nconst themeConfig = {\n  colors: {\n    primary: 'tomato',\n    secondary: 'khaki',\n    gray: 'lightslategray',\n  },\n}\n\nexport default theme(themeConfig)(Theme)\n")),i.a.createElement(l.MDXTag,{name:"p",components:n},"This is powerful because it forces you to write base components and create a default style for each one that will be used along the entire documents without the need to repeat any of them."),i.a.createElement(l.MDXTag,{name:"h2",components:n,props:{id:"getting-data-from-documents"}},"Getting data from documents"),i.a.createElement(l.MDXTag,{name:"p",components:n},"So far you almost have an entire theme component. But just with the code above you will see just a document page without any link or\ninformation about all documents do you have. Create something like a menu with all documents is essential to create navigation."),i.a.createElement(l.MDXTag,{name:"p",components:n},"You can do this easily by using the ",i.a.createElement(l.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"useMenus")," and ",i.a.createElement(l.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"<Link>")," component."),i.a.createElement(l.MDXTag,{name:"p",components:n},"The first one will give you information about all menus parsed from Docz and the second one ability to navigate to them.\nFirst of all, create something like a ",i.a.createElement(l.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"<Menu />")," component (we using a menu just to illustrate here):"),i.a.createElement(l.MDXTag,{name:"pre",components:n},i.a.createElement(l.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-js"}},"// src/Menu.js\nimport React from 'react'\nimport { useMenus, Link } from 'docz'\n\nexport const Menu = () => {\n  const menus = useMenus()\n  return (\n    <ul>\n      {menus.map(menu => (\n        <li key={menu.id}>\n          <Link to={menu.route}>{menu.name}</Link>\n        </li>\n      ))}\n    </ul>\n  )\n}\n")),i.a.createElement(l.MDXTag,{name:"p",components:n},"Now you have a fully functional navigation to your documentation and you can simply use it your ",i.a.createElement(l.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"<Menu />")," component inside your theme:"),i.a.createElement(l.MDXTag,{name:"pre",components:n},i.a.createElement(l.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-js"}},"// src/theme.js\nimport React from 'react'\nimport { theme, useConfig, ComponentsProvider } from 'docz'\nimport { ThemeProvider } from 'emotion-theming'\n\nimport { Menu } from './Menu'\nimport * as components from './my-components'\n\nconst map = {\n  page: components.Page,\n  notFound: components.NotFound,\n  render: components.Render,\n  h1: components.H1,\n  h2: components.H2,\n  h3: components.H3,\n  h4: components.H4,\n  h5: components.H5,\n  h6: components.H6,\n  ul: components.List,\n  loading: components.Loading,\n  table: components.Table,\n  pre: components.Pre,\n  inlineCode: components.Code,\n}\n\nconst Theme = ({ children }) => {\n  const config = useConfig()\n  return (\n    <ThemeProvider theme={config}>\n      <Menu />\n      <ComponentsProvider components={map}>\n        {children}\n      </ComponentsProvider>\n    </ThemeProvider>\n  )\n}\n\nconst themeConfig = {\n  colors: {\n    primary: 'tomato',\n    secondary: 'khaki',\n    gray: 'lightslategray',\n  },\n}\n\nexport default theme(themeConfig)(Theme)\n")),i.a.createElement(l.MDXTag,{name:"p",components:n},"You can still use this component to create other things like a search component, some custom page or whatever came in your mind."),i.a.createElement(l.MDXTag,{name:"h2",components:n,props:{id:"using-documents-settings"}},"Using documents settings"),i.a.createElement(l.MDXTag,{name:"p",components:n},"Another really interesting thing that you can do when you're creating your own theme is using the component's map ",i.a.createElement(l.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"<Page>")," to customize the document preview depending on each document settings. Since each document can have your own settings defined in the top of ",i.a.createElement(l.MDXTag,{name:"inlineCode",components:n,parentName:"p"},".mdx")," and the ",i.a.createElement(l.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"Page")," component receive a prop called ",i.a.createElement(l.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"doc")," that's the current rendered doc, you can use these settings to create page variations, like that:"),i.a.createElement(l.MDXTag,{name:"p",components:n},"Let's suppose that some pages of your documentation should have a hero image, but some don't. You can give a ",i.a.createElement(l.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"hero")," property for your document, and base on that prop you'll show or not the hero:"),i.a.createElement(l.MDXTag,{name:"pre",components:n},i.a.createElement(l.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-markdown"}},"---\nname: Hello world\nhero: /my/hero/img.png\n---\n\n# Hello world\n\nThis is just a page!\n")),i.a.createElement(l.MDXTag,{name:"p",components:n},"After defining the hero page of your document, let's see how your ",i.a.createElement(l.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"Page")," component will look:"),i.a.createElement(l.MDXTag,{name:"pre",components:n},i.a.createElement(l.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-js"}},"// src/ui/Page.js\nimport React from 'react'\n\nimport MyCoolHero from './MyCoolHero'\n\nexport const Page = ({ doc, children }) => (\n  <div>\n    {doc.hero && <MyCoolHero img={doc.hero} />}\n    {children}\n  </div>\n)\n")),i.a.createElement(l.MDXTag,{name:"p",components:n},"Simple as that! Now you can create a lot of variations of your documents page."),i.a.createElement(l.MDXTag,{name:"p",components:n},"How I told you, without pain and a lot of work your you can have a custom and very functional theme for your documentation. So, let's create your own theme and share with the community!"),i.a.createElement(l.MDXTag,{name:"h2",components:n,props:{id:"examples"}},"Examples"),i.a.createElement(l.MDXTag,{name:"p",components:n},"If you wanna see an example of theme created, you can see the ",i.a.createElement(l.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://github.com/pedronauck/docz-website",target:"_blank",rel:["nofollow","noopener","noreferrer"]}},"source code")," of this website that was entire build using Docz or the ",i.a.createElement(l.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://github.com/pedronauck/docz/tree/master/core/docz-theme-default",target:"_blank",rel:["nofollow","noopener","noreferrer"]}},"source code")," of ",i.a.createElement(l.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"docz-theme-default"),"."))}}]),n}(i.a.Component);"undefined"!==typeof d&&d&&d===Object(d)&&Object.defineProperty(d,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/docs/documentation/references/creating-themes.mdx"}}),"undefined"!==typeof d&&d&&d===Object(d)&&Object.defineProperty(d,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/docs/documentation/references/creating-themes.mdx"}}),d.isMDXComponent=!0}}]);
//# sourceMappingURL=src-docs-documentation-references-creating-themes.8919602c98d135083ee9.js.map