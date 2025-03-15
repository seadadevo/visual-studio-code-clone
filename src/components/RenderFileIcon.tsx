import { extensionIconPaths } from "../constant";
import IconImg from "./IconImg";
import FileIcon from "./SVG/File";

interface IProps {
  filename: string;
  isFolder?: boolean;
  isOpen?: boolean;
}

const RenderFileIcon = ({ filename, isFolder, isOpen }: IProps) => {
  const extension = filename.split(".").pop();

  // ! Files
  if (
    extension &&
    Object.prototype.hasOwnProperty.call(extensionIconPaths, extension)
  ) {
    const iconPath = isFolder
      ? isOpen
        ? `${extensionIconPaths[extension]}-open.svg`
        : `${extensionIconPaths[extension]}.svg`
      : `${extensionIconPaths[extension]}.svg`;
    return <IconImg src={iconPath} />;
  }
  if (isFolder && isOpen)
    return <IconImg src={"/icons/folder-default-open.svg"} />;
  if (isFolder && !isOpen) return <IconImg src={"/icons/folder-default.svg"} />;
  return <FileIcon />;
};

export default RenderFileIcon;

  //   if (extension === "tsx") return <IconImg src={"/icons/react_ts.svg"} />;
  //   if (extension === "jsx") return <IconImg src={"/icons/react.svg"} />;
  //   if (extension === "html") return <IconImg src={"/icons/html.svg"} />;

  // ! Folders

  //   if (filename === "node_modules" && isFolder)
  //     return isOpen ? (
  //       <IconImg src={"/icons/folder-node-open.svg"} />
  //     ) : (
  //       <IconImg src={"/icons/folder-node.svg"} />
  //     );
  //   if (filename === "public" && isFolder)
  //     return isOpen ? (
  //       <IconImg src={"/icons/folder-public-open.svg"} />
  //     ) : (
  //       <IconImg src={"/icons/folder-public.svg"} />
  //     );
  //   if (filename === "src" && isFolder)
  //     return isOpen ? (
  //       <IconImg src={"/icons/folder-src-open.svg"} />
  //     ) : (
  //       <IconImg src={"/icons/folder-src.svg"} />
  //     );
  //   if (filename === "components" && isFolder)
  //     return isOpen ? (
  //       <IconImg src={"/icons/folder-components-open.svg"} />
  //     ) : (
  //       <IconImg src={"/icons/folder-components.svg"} />
  //     );