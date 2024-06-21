import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// import { AWS_S3_REGION, S3_BUCKET_NAME } from "../../config";

interface DataProp {
  name : string
  width : number
  height : number
}
const initialState : {data : DataProp[]} = {
  data : [
    {
      name: "orange",
      width: 400,
      height: 200
    },
    {
      name: "mango",
      width: 200,
      height: 150
    },
    {
      name: "apple",
      width: 400,
      height: 200
    }
  ]
};

const slice = createSlice({
  name: "dnd",
  initialState,
  reducers: {
    setData: (state, action: PayloadAction<DataProp[]>) => {
      state.data = action.payload;
    },
  },
});

// Reducer
export const {setData} = slice.actions
export default slice.reducer;

// ----------------------------------------------------------------------

