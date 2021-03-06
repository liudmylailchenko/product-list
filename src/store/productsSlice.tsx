import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { apiCall } from '../utils/apiCall';

interface IUser {
  id: number;
  username: string;
}

export interface IProduct {
  id: number;
  img: string;
  title: string;
  text: string;
}
export interface IReview {
  id: number;
  product: number;
  created_by: IUser;
  created_at: string;
  rate: number;
  text: string;
}

export interface INewReview {
  productId: number;
  review: Partial<IReview>;
}

export const getProducts = createAsyncThunk<Array<IProduct>>(
  'products/getProducts',
  async () => {
    try {
      const result = await apiCall.get('/api/products/');
      return result.data;
    } catch (err) {
      alert('Something went wrong...');
    }
  },
);

export const getReviewsByProductId = createAsyncThunk<Array<IReview>, number>(
  'products/getReviewsByProductId',
  async (productId) => {
    try {
      const result = await apiCall.get(`/api/reviews/${productId}`);
      return result.data;
    } catch (err) {
      alert('Something went wrong...');
    }
  },
);

export const postReviewByProductId = createAsyncThunk(
  'products/postReviewByProductId',
  async (payload: INewReview) => {
    try {
      await apiCall.post(`/api/reviews/${payload.productId}`, payload.review);
    } catch (err) {
      alert('Something went wrong...');
    }
  },
);

type SliceState = {
  list: IProduct[];
  reviews: Record<IProduct['id'], IReview[]>;
  loading: boolean;
};

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    list: [],
    reviews: {},
    loading: false,
  } as SliceState,
  reducers: {},
  extraReducers: {
    [`${getProducts.pending}`]: (state) => {
      state.loading = true;
    },
    [`${getProducts.fulfilled}`]: (state, { payload }) => {
      state.loading = false;
      state.list = payload;
    },
    [`${getProducts.rejected}`]: (state) => {
      state.loading = false;
    },
    [`${getReviewsByProductId.pending}`]: (state) => {
      state.loading = true;
    },
    [`${getReviewsByProductId.fulfilled}`]: (state, { payload }) => {
      state.loading = false;
      // Save reviews in store with product id
      state.reviews[payload[0].product] = payload;
    },
    [`${getReviewsByProductId.rejected}`]: (state) => {
      state.loading = false;
    },
  },
});

export const productsReducer = productsSlice.reducer;
