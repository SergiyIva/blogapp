import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { ServerContext } from '../index';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
  Upload: any;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Delete one post */
  deletePost: Scalars['Boolean'];
  /** Publish new post */
  newPost: Post;
  /** Authorization event */
  signIn: Scalars['String'];
  /** Registration event */
  signUp: Scalars['String'];
  /** Update published post by user */
  updatePost: Post;
};


export type MutationDeletePostArgs = {
  id: Scalars['ID'];
};


export type MutationNewPostArgs = {
  content: Scalars['String'];
  file?: InputMaybe<Scalars['Upload']>;
  title: Scalars['String'];
};


export type MutationSignInArgs = {
  password: Scalars['String'];
  username: Scalars['String'];
};


export type MutationSignUpArgs = {
  password: Scalars['String'];
  username: Scalars['String'];
};


export type MutationUpdatePostArgs = {
  content?: InputMaybe<Scalars['String']>;
  file?: InputMaybe<Scalars['Upload']>;
  id: Scalars['ID'];
  title?: InputMaybe<Scalars['String']>;
};

/** Post object */
export type Post = {
  __typename?: 'Post';
  /** Author of the post */
  author: User;
  /** Text content of the post */
  content: Scalars['String'];
  /** Date of the creation */
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  /** Link for media data */
  media?: Maybe<Scalars['String']>;
  /** Post title */
  title: Scalars['String'];
  /** Date of the updating */
  updatedAt: Scalars['DateTime'];
};

/** Post's information for pagination */
export type PostFeed = {
  __typename?: 'PostFeed';
  /** Post's data array */
  posts: Array<Post>;
  /** Total count of all posts */
  totalPosts: Scalars['Int'];
};

export type Query = {
  __typename?: 'Query';
  /** Get current authorized user information */
  getMe?: Maybe<User>;
  /** Get post by id */
  getPost?: Maybe<Post>;
  /** Get feed of posts data */
  getPosts: PostFeed;
  /** Get information about some user */
  getUser?: Maybe<User>;
};


export type QueryGetPostArgs = {
  id: Scalars['ID'];
};


export type QueryGetPostsArgs = {
  cursor?: InputMaybe<Scalars['Int']>;
};


export type QueryGetUserArgs = {
  username: Scalars['String'];
};

/** User object */
export type User = {
  __typename?: 'User';
  id: Scalars['ID'];
  /** All of the comments wrote by this user */
  posts?: Maybe<Array<Post>>;
  /** The user's unique username */
  username: Scalars['String'];
};

export type AdditionalEntityFields = {
  path?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
};

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  DateTime: ResolverTypeWrapper<Scalars['DateTime']>;
  Mutation: ResolverTypeWrapper<{}>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  String: ResolverTypeWrapper<Scalars['String']>;
  Post: ResolverTypeWrapper<Post>;
  PostFeed: ResolverTypeWrapper<PostFeed>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Query: ResolverTypeWrapper<{}>;
  Upload: ResolverTypeWrapper<Scalars['Upload']>;
  User: ResolverTypeWrapper<User>;
  AdditionalEntityFields: AdditionalEntityFields;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  DateTime: Scalars['DateTime'];
  Mutation: {};
  Boolean: Scalars['Boolean'];
  ID: Scalars['ID'];
  String: Scalars['String'];
  Post: Post;
  PostFeed: PostFeed;
  Int: Scalars['Int'];
  Query: {};
  Upload: Scalars['Upload'];
  User: User;
  AdditionalEntityFields: AdditionalEntityFields;
}>;

export type UnionDirectiveArgs = {
  discriminatorField?: Maybe<Scalars['String']>;
  additionalFields?: Maybe<Array<Maybe<AdditionalEntityFields>>>;
};

export type UnionDirectiveResolver<Result, Parent, ContextType = ServerContext, Args = UnionDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type AbstractEntityDirectiveArgs = {
  discriminatorField: Scalars['String'];
  additionalFields?: Maybe<Array<Maybe<AdditionalEntityFields>>>;
};

export type AbstractEntityDirectiveResolver<Result, Parent, ContextType = ServerContext, Args = AbstractEntityDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type EntityDirectiveArgs = {
  embedded?: Maybe<Scalars['Boolean']>;
  additionalFields?: Maybe<Array<Maybe<AdditionalEntityFields>>>;
};

export type EntityDirectiveResolver<Result, Parent, ContextType = ServerContext, Args = EntityDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type ColumnDirectiveArgs = {
  overrideType?: Maybe<Scalars['String']>;
};

export type ColumnDirectiveResolver<Result, Parent, ContextType = ServerContext, Args = ColumnDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type IdDirectiveArgs = { };

export type IdDirectiveResolver<Result, Parent, ContextType = ServerContext, Args = IdDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type LinkDirectiveArgs = {
  overrideType?: Maybe<Scalars['String']>;
};

export type LinkDirectiveResolver<Result, Parent, ContextType = ServerContext, Args = LinkDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type EmbeddedDirectiveArgs = { };

export type EmbeddedDirectiveResolver<Result, Parent, ContextType = ServerContext, Args = EmbeddedDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type MapDirectiveArgs = {
  path: Scalars['String'];
};

export type MapDirectiveResolver<Result, Parent, ContextType = ServerContext, Args = MapDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export type MutationResolvers<ContextType = ServerContext, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  deletePost?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationDeletePostArgs, 'id'>>;
  newPost?: Resolver<ResolversTypes['Post'], ParentType, ContextType, RequireFields<MutationNewPostArgs, 'content' | 'title'>>;
  signIn?: Resolver<ResolversTypes['String'], ParentType, ContextType, RequireFields<MutationSignInArgs, 'password' | 'username'>>;
  signUp?: Resolver<ResolversTypes['String'], ParentType, ContextType, RequireFields<MutationSignUpArgs, 'password' | 'username'>>;
  updatePost?: Resolver<ResolversTypes['Post'], ParentType, ContextType, RequireFields<MutationUpdatePostArgs, 'id'>>;
}>;

export type PostResolvers<ContextType = ServerContext, ParentType extends ResolversParentTypes['Post'] = ResolversParentTypes['Post']> = ResolversObject<{
  author?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  content?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  media?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PostFeedResolvers<ContextType = ServerContext, ParentType extends ResolversParentTypes['PostFeed'] = ResolversParentTypes['PostFeed']> = ResolversObject<{
  posts?: Resolver<Array<ResolversTypes['Post']>, ParentType, ContextType>;
  totalPosts?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QueryResolvers<ContextType = ServerContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  getMe?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  getPost?: Resolver<Maybe<ResolversTypes['Post']>, ParentType, ContextType, RequireFields<QueryGetPostArgs, 'id'>>;
  getPosts?: Resolver<ResolversTypes['PostFeed'], ParentType, ContextType, Partial<QueryGetPostsArgs>>;
  getUser?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryGetUserArgs, 'username'>>;
}>;

export interface UploadScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Upload'], any> {
  name: 'Upload';
}

export type UserResolvers<ContextType = ServerContext, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  posts?: Resolver<Maybe<Array<ResolversTypes['Post']>>, ParentType, ContextType>;
  username?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = ServerContext> = ResolversObject<{
  DateTime?: GraphQLScalarType;
  Mutation?: MutationResolvers<ContextType>;
  Post?: PostResolvers<ContextType>;
  PostFeed?: PostFeedResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Upload?: GraphQLScalarType;
  User?: UserResolvers<ContextType>;
}>;

export type DirectiveResolvers<ContextType = ServerContext> = ResolversObject<{
  union?: UnionDirectiveResolver<any, any, ContextType>;
  abstractEntity?: AbstractEntityDirectiveResolver<any, any, ContextType>;
  entity?: EntityDirectiveResolver<any, any, ContextType>;
  column?: ColumnDirectiveResolver<any, any, ContextType>;
  id?: IdDirectiveResolver<any, any, ContextType>;
  link?: LinkDirectiveResolver<any, any, ContextType>;
  embedded?: EmbeddedDirectiveResolver<any, any, ContextType>;
  map?: MapDirectiveResolver<any, any, ContextType>;
}>;

import { ObjectId } from 'mongodb';