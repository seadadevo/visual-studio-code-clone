import { useSelector } from "react-redux";
import { RootState } from "./app/store";
import Preview from "./components/Preview";
import RecursiveComponent from "./components/RecursiveComponent";
import ResizablePanel from "./components/ResizablePanel";
import WelcomeTab from "./components/WelcomeTab";
import { fileTree } from "./data/fileTree";
import FolderIcon from "./components/SVG/Folder";
import FileIcon from "./components/SVG/File";
import FileComponent from "./components/FileComponent";
import RecursiveCom from "./components/RecursiveCom";


const App = () => {
  // const { openedFiles } = useSelector(({ tree }: RootState) => tree);
  {/* <div className="flex h-screen">
    <ResizablePanel
      showLeftPanel
      leftPanel={
        <div className="w-64 p-2">
          <RecursiveComponent fileTree={fileTree} />
        </div>
      }
      rightPanel={openedFiles.length ? <Preview /> : <WelcomeTab />}
    />
  </div> */}
  
  console.log(fileTree.children);
  return (
    <div className="m-5">
    
    <RecursiveCom fileTree={fileTree}/>
    
    </div>
  );
};

export default App;
