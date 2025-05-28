
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../store";
import type { Source } from "../../SourceList";

interface SourceListState {
  selected: Source | undefined;
}

const emptyState: SourceListState = {
  selected: undefined,
};

export const sourcelistSlice = createSlice({
  name: "sourcelist",
  initialState: emptyState,
  reducers: {
    clear: () => emptyState,
    set: (_state, action: PayloadAction<SourceListState>) => action.payload,
  },
});

export type { SourceListState };
export const { clear, set } = sourcelistSlice.actions;
export const getSourceListState = (state: RootState) => state.sourcelist;
export default sourcelistSlice.reducer;
