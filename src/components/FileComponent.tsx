import FileIcon from "./SVG/File";
import RightArrowIcon from "./SVG/Right";

interface IProps {
  filename: string;
}

const FileComponent = ({ filename }: IProps) => {
  return (
    <div className="flex items-center">
      <RightArrowIcon />
      <span className="mr-2">
        <FileIcon />
      </span>
      <span>{filename}</span>
    </div>
  );
};

export default FileComponent;
