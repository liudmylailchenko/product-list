import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { ROUTES } from '../constants/routes';
import { apiCall } from '../utils/apiCall';
import { history } from '../utils/history';
import { setStorageItem } from '../utils/storage';

export interface IAuthFormValues {
  username: string;
  password: string;
}

type TAuthorizedPayload = {
  type: 'login' | 'register';
  values: IAuthFormValues;
};

export const authorize = createAsyncThunk<void, TAuthorizedPayload>(
  'auth/authorize',
  async (payload) => {
    try {
      const result = await apiCall.post(
        `/api/${payload.type}/`,
        payload.values,
      );

      if (!result.data.success) {
        throw new Error(result.data.message);
      }
      setStorageItem('accessToken', result.data.token);
      history.push(ROUTES.PRODUCTS);
    } catch (err) {
      alert(err || 'Something went wrong...');
    }
  },
);

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: {
    [`${authorize.pending}`]: (state) => {
      state.loading = true;
    },
    [`${authorize.fulfilled}`]: (state) => {
      state.loading = false;
    },
    [`${authorize.rejected}`]: (state) => {
      state.loading = false;
    },
  },
});

export const authReducer = authSlice.reducer;
