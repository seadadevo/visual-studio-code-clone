// import { v4 as uuid } from "uuid";
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
  name: "VS Code",
  isFolder: true,
  children: [
    {
      name: "node_modules",
      isFolder: true,
      children: [
        {
          name: ".vite",
          isFolder: true,
          children: [
            { name: "react.jsx", isFolder: false },
          ],
        },
      ],
    },
    {
      name: "public",
      isFolder: true,
      children: [
        {
          name: "index.html",
          isFolder: false,
        },
      ],
    },
    {
      name: "src",
      isFolder: true,
      children: [
        {
          name: "components",
          isFolder: true,
          children: [{name: "Button.tsx", isFolder: false}]
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
