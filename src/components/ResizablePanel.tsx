import { ReactNode } from "react";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";

interface IProps {
  defaultLayout?: number[] | undefined;
  leftPanel: ReactNode;
  rightPanel: ReactNode;
  showLeftPanel: boolean;
}

const ResizablePanel = ({
  defaultLayout = [80, 20],
  leftPanel,
  rightPanel,
  showLeftPanel,
}: IProps) => {
  const onLayout = (sizes: number[]) => {
    document.cookie = `react-resizable-panels:layout=${JSON.stringify(sizes)}`;
  };
  return (
    <PanelGroup direction="horizontal" onLayout={onLayout} autoSaveId="condition">
      {showLeftPanel && (
        <>
          <Panel defaultSize={defaultLayout[0]} collapsible={true}>{leftPanel}</Panel>
          <PanelResizeHandle className="border-r-4 border-white" />
        </>
      )}

      <Panel defaultSize={defaultLayout[1]}>{rightPanel}</Panel>
    </PanelGroup>
  );
};

export default ResizablePanel;
// interface IProps {
//   defaultLayout?: number[] | undefined;
//   leftPanel: ReactNode;
//   rightPanel: ReactNode;
//   showLeftPanel: boolean;
// }

// const ResizablePanel = ({ defaultLayout = [33, 67], leftPanel, rightPanel, showLeftPanel }: IProps) => {
//   const onLayout = (sizes: number[]) => {
//     document.cookie = `react-resizable-panels:layout=${JSON.stringify(sizes)}`;
//   };

//   return (
//     <PanelGroup direction="horizontal" onLayout={onLayout} autoSaveId="condition">
//       {showLeftPanel && (
//         <>
//           <Panel defaultSize={defaultLayout[0]} collapsible>
//             {leftPanel}
//           </Panel>
//           <PanelResizeHandle className="border-r-2 border-[#ffffff1f]" />
//         </>
//       )}
//       <Panel defaultSize={defaultLayout[1]}>{rightPanel}</Panel>
//     </PanelGroup>
//   );
// };

// export default ResizablePanel;
