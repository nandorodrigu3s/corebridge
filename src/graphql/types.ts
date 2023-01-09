export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
};

export type Auth = {
  password: Scalars['String'];
  username: Scalars['String'];
};

export type AuthData = {
  __typename?: 'AuthData';
  token: Scalars['String'];
  user: User;
};

export type Cart = {
  __typename?: 'Cart';
  /** Uma lista de NFTs adicionados ao carrinho */
  nfts: Array<Maybe<NftData>>;
};

export type CreateCartInput = {
  /** Uma lista de NFTs para serem adicionadas ao carrinho */
  nfts: Array<InputMaybe<NftDataInput>>;
};

export type CreateOrderInput = {
  discount?: InputMaybe<PriceInput>;
  nfts: Array<NftDataInput>;
  totalPayment: PriceInput;
};

export type CreateUserInput = {
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createCart?: Maybe<Cart>;
  createOrder?: Maybe<Order>;
  createUser?: Maybe<User>;
  deleteCart: Scalars['Boolean'];
  login?: Maybe<AuthData>;
  updateCart?: Maybe<Cart>;
};


export type MutationCreateCartArgs = {
  createCartInput: CreateCartInput;
};


export type MutationCreateOrderArgs = {
  createOrderInput: CreateOrderInput;
};


export type MutationCreateUserArgs = {
  createUserInput: CreateUserInput;
};


export type MutationLoginArgs = {
  authInput: Auth;
};


export type MutationUpdateCartArgs = {
  updateCartInput: UpdateCartInput;
};

export type NftCollection = {
  __typename?: 'NFTCollection';
  created_date: Scalars['DateTime'];
  name: Scalars['String'];
};

export type NftCollectionInput = {
  created_date: Scalars['DateTime'];
  name: Scalars['String'];
};

export type NftData = {
  __typename?: 'NFTData';
  category: Scalars['String'];
  collection: NftCollection;
  description: Scalars['String'];
  external_link: Scalars['String'];
  id: Scalars['Int'];
  image_url: Scalars['String'];
  name: Scalars['String'];
  num_sales: Scalars['Int'];
  permalink: Scalars['String'];
  price?: Maybe<Price>;
  token_id: Scalars['String'];
};

export type NftDataInput = {
  category: Scalars['String'];
  collection: NftCollectionInput;
  description: Scalars['String'];
  external_link: Scalars['String'];
  id: Scalars['Int'];
  image_url: Scalars['String'];
  name: Scalars['String'];
  num_sales: Scalars['Int'];
  permalink: Scalars['String'];
  price: PriceInput;
  token_id: Scalars['String'];
};

export type Order = {
  __typename?: 'Order';
  canceledAt?: Maybe<Scalars['DateTime']>;
  discount?: Maybe<Price>;
  nfts: Array<NftData>;
  orderId: Scalars['String'];
  status: OrderStatusType;
  totalPayment: Price;
};

export enum OrderStatusType {
  Canceled = 'CANCELED',
  Complete = 'COMPLETE',
  Failed = 'FAILED',
  Pending = 'PENDING'
}

export type Price = {
  __typename?: 'Price';
  label: Scalars['String'];
  value: Scalars['Float'];
};

export type PriceInput = {
  label: Scalars['String'];
  value: Scalars['Float'];
};

export type Query = {
  __typename?: 'Query';
  getByUsername?: Maybe<User>;
  getCart?: Maybe<Cart>;
  getUser?: Maybe<User>;
};


export type QueryGetByUsernameArgs = {
  username: Scalars['String'];
};

export type UpdateCartInput = {
  /** Um NFT para ser atualizado no carrinho */
  nft?: InputMaybe<NftDataInput>;
  type: UpdateCartType;
};

export enum UpdateCartType {
  Add = 'ADD',
  Remove = 'REMOVE'
}

export type User = {
  __typename?: 'User';
  countAssets?: Maybe<Scalars['Int']>;
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  wallet: Array<Maybe<NftData>>;
};
