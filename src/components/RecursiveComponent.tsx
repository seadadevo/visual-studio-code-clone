import { useState } from "react";
import { IFile } from "../interfaces";
import RightArrowIcon from "./SVG/Right";
import BottomArrowIcon from "./SVG/Bottom";
import RenderFileIcon from "./RenderFileIcon";
import { useDispatch, useSelector } from "react-redux";
import { setOpenedFiles } from "../app/features/fileTreeSlice";
import { RootState } from "../app/store";
import { doesFileObjectExist } from "../utils/functions";

interface IProps {
  fileTree: IFile;
}

const RecursiveComponent = ({ fileTree }: IProps) => {
  const { id, name, isFolder, children } = fileTree;
  const { openedFiles } = useSelector((state: RootState) => state.tree);
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState<boolean>(true);

  //   Handler
  const toggle = () => setIsOpen((prev) => !prev);
  const onFileClicked = () => {
    dispatch(setOpenedFiles(openedFiles));
    const exists = doesFileObjectExist(openedFiles, id);
    if (exists) return;
    dispatch(setOpenedFiles([...openedFiles, fileTree]))
  };
  return (
    <div className="mb-2 ml-2 cursor-pointer">
      <div className="flex items-center mb-1" onClick={toggle}>
        {isFolder ? (
          <div className="flex items-center">
            <span className="mr-2">
              {isOpen ? <BottomArrowIcon /> : <RightArrowIcon />}
            </span>
            <RenderFileIcon filename={name} isFolder isOpen={isOpen} />
            <span className="ml-1">{name}</span>
          </div>
        ) : (
          <span className="flex items-center ml-6" onClick={onFileClicked}>
            <RenderFileIcon filename={name} />
            <span>{name}</span>
          </span>
        )}
      </div>

      {isOpen &&
        children &&
        children.map((file, idx) => {
          return <RecursiveComponent key={idx} fileTree={file} />;
        })}
    </div>
  );
};

export default RecursiveComponent;
