import { v4 as uuid } from "uuid";
// import { IFile } from "../interfaces";

import { IFile } from "../interfaces";

// export const fileTree: IFile = {
//   id: uuid(),
//   name: "VS Code Clone",
//   isFolder: true,
//   children: [
//     {
//       id: uuid(),
//       name: "node_modules",
//       isFolder: true,
//       children: [],
//     },
//     {
//       id: uuid(),
//       name: "src",
//       isFolder: true,
//       children: [
//         {
//           id: uuid(),
//           name: "components",
//           isFolder: true,
//           children: [
//             {
//               id: uuid(),
//               name: "Button.tsx",
//               isFolder: false,
//               content: `interface IProps {

// }

export const fileTree: IFile = {
  id: uuid(),
  name: "VS Code",
  isFolder: true,
  children: [
    {
      id: uuid(),
      name: "node_modules",
      isFolder: true,
      children: [
        {
          id: uuid(),
          name: ".vite",
          isFolder: true,
          children: [{ id: uuid(), name: "react.jsx", isFolder: false }],
        },
      ],
    },
    {
      id: uuid(),
      name: "public",
      isFolder: true,
      children: [
        {
          id: uuid(),
          name: "index.html",
          isFolder: false,
          content: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta name="description" content="MyApp - A Modern React Application" />
    <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
    <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
    <title>MyApp</title>
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
  </body>
</html>
        `,
        },
      ],
    },
    {
      id: uuid(),
      name: "src",
      isFolder: true,
      children: [
        {
          id: uuid(),
          name: "components",
          isFolder: true,
          children: [
            {
              id: uuid(),
              name: "Button.tsx",
              isFolder: false,
              content: `import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import '../styles/App.css';

const Button: React.FC = () => {
  return (
    <div className="button">
      <Header />
      <main className="main-content">
        <h1>Welcome to Our Application</h1>
        <p>This is the main content area.</p>
      </main>
      <Footer />
    </div>
  );
};

export default Button;`,
            },
            {
              id: uuid(),
              name: "Button.tsx",
              isFolder: false,
              content: "Button Component Content2",
            },
          ],
        },
      ],
    },
  ],
};

// const Button = ({}: IProps) => {
//   return (
//     <button>Click me!</button>
//   )
// }

// export default Button`,
//             },
//           ],
//         },
//       ],
//     },
//     {
//       name: "public",
//       id: uuid(),
//       isFolder: true,
//       children: [
//         {
//           id: uuid(),
//           name: "index.html",
//           isFolder: false,
//           content: `<!DOCTYPE html>
// <html lang="en">
//   <head>
//     <meta charset="UTF-8" />
//     <link rel="icon" type="image/svg+xml" href="/vite.svg" />
//     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//     <title>Vite + React + TS</title>
//   </head>
//   <body>
//     <div id="root"></div>
//     <script type="module" src="/src/main.tsx"></script>
//   </body>
// </html>
// `,
//         },
//       ],
//     },
//   ],
// };
