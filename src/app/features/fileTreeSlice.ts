// import { PayloadAction, createSlice } from "@reduxjs/toolkit";
// import { IFile } from "../../interfaces";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IFile } from "../../interfaces";

// interface IClickedFile {
//   activeTabId: string | null;
//   filename: string;
//   fileContent: string | undefined;
// }

// interface IInitialState {
//   openedFiles: IFile[];
//   clickedFile: IClickedFile;
//   tabIdToRemove: string | null;
// }

// const initialState: IInitialState = {
//   openedFiles: [],
//   clickedFile: {
//     activeTabId: null,
//     filename: "",
//     fileContent: "",
//   },
//   tabIdToRemove: null,
// };

// const fileTreeSlice = createSlice({
//   name: "fileTree",
//   initialState,
//   reducers: {
//     setOpenedFilesAction: (state, action: PayloadAction<IFile[]>) => {
//       state.openedFiles = action.payload;
//     },
//     setClickedFileAction: (state, action: PayloadAction<IClickedFile>) => {
//       state.clickedFile = action.payload;
//     },
//     setTabIdToRemoveAction: (state, action: PayloadAction<string | null>) => {
//       state.tabIdToRemove = action.payload;
//     },
//   },
// });

// export const { setOpenedFilesAction, setClickedFileAction, setTabIdToRemoveAction } = fileTreeSlice.actions;

// export default fileTreeSlice.reducer;

interface IClickedFile {
  activeTabId: string | null;
  filename: string;
  fileContent: string | undefined;
}
interface IInitialState {
  openedFiles: IFile[];
  clickedFile: IClickedFile;
  tabIdToRemove: string | null;
}

const initialState: IInitialState = {
  openedFiles: [],
  clickedFile: {
    activeTabId: null,
    filename: "",
    fileContent: "",
  },
  tabIdToRemove: null,
};

const fileTreeSlice = createSlice({
  name: "fileTree",
  initialState,
  reducers: {
    setOpenedFiles: (state, action: PayloadAction<IFile[]>) => {
      state.openedFiles = action.payload
    },
    setClickedFile:(state, action: PayloadAction<IClickedFile>) => {
      state.clickedFile = action.payload
  },
  setRemoveFile:(state, action: PayloadAction<string | null>) => {
      state.tabIdToRemove = action.payload
  },

}});

export const {setOpenedFiles, setClickedFile, setRemoveFile} = fileTreeSlice.actions

export default fileTreeSlice.reducer;
