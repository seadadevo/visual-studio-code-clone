import { useState } from "react";
import { fileTree } from "../data/fileTree";
import { IFile } from "../interfaces";
import FileComponent from "./FileComponent";
import FileIcon from "./SVG/File";
import RightArrowIcon from "./SVG/Right";
import FolderIcon from "./SVG/Folder";
import BottomArrowIcon from "./SVG/Bottom";
import RenderFileIcon from "./RenderFileIcon";

interface IProps {
  fileTree: IFile;
}

const RecursiveCom = ({ fileTree }: IProps) => {
    const { name, isFolder, children } = fileTree;
  const [isOpen, setIsOpen] = useState<boolean>(true);

//   Handler
    const toggle = () => setIsOpen((prev) => !prev);

  return (
    <div className="mb-2 ml-2 cursor-pointer">
      <div className="flex items-center mb-1" onClick={toggle}>
        {isFolder ? (
          <div className="flex items-center">
            <span className="mr-2">{isOpen ? <BottomArrowIcon /> : <RightArrowIcon />}</span>
           <RenderFileIcon  filename={name} isFolder isOpen ={isOpen}/>
            <span className="ml-1">{name}</span>
          </div>
        ) : (
          <span className="flex items-center ml-6">
             <RenderFileIcon  filename={name} />
            <span>{name}</span>
          </span>
        )}
    
      </div>

      {isOpen && children &&
        children.map((file, idx) => {
          return <RecursiveCom key={idx} fileTree={file} />;
        })}
    </div>
  );
};

export default RecursiveCom;
