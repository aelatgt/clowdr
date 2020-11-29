import { GraphQLClient } from 'graphql-request';
import { print } from 'graphql';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  json: any;
  jsonb: any;
  timestamptz: any;
  uuid: any;
};

/** expression to compare columns of type Boolean. All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: Maybe<Scalars['Boolean']>;
  _gt?: Maybe<Scalars['Boolean']>;
  _gte?: Maybe<Scalars['Boolean']>;
  _in?: Maybe<Array<Scalars['Boolean']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Boolean']>;
  _lte?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<Scalars['Boolean']>;
  _nin?: Maybe<Array<Scalars['Boolean']>>;
};

/** columns and relationships of "Channel" */
export type Channel = {
  __typename?: 'Channel';
  created_at: Scalars['timestamptz'];
  hls_uri?: Maybe<Scalars['String']>;
  id: Scalars['uuid'];
  name: Scalars['String'];
  updated_at: Scalars['timestamptz'];
  vonage_session_id: Scalars['String'];
};

/** aggregated selection of "Channel" */
export type Channel_Aggregate = {
  __typename?: 'Channel_aggregate';
  aggregate?: Maybe<Channel_Aggregate_Fields>;
  nodes: Array<Channel>;
};

/** aggregate fields of "Channel" */
export type Channel_Aggregate_Fields = {
  __typename?: 'Channel_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Channel_Max_Fields>;
  min?: Maybe<Channel_Min_Fields>;
};


/** aggregate fields of "Channel" */
export type Channel_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Channel_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "Channel" */
export type Channel_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Channel_Max_Order_By>;
  min?: Maybe<Channel_Min_Order_By>;
};

/** input type for inserting array relation for remote table "Channel" */
export type Channel_Arr_Rel_Insert_Input = {
  data: Array<Channel_Insert_Input>;
  on_conflict?: Maybe<Channel_On_Conflict>;
};

/** Boolean expression to filter rows from the table "Channel". All fields are combined with a logical 'AND'. */
export type Channel_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Channel_Bool_Exp>>>;
  _not?: Maybe<Channel_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Channel_Bool_Exp>>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  hls_uri?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  vonage_session_id?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "Channel" */
export enum Channel_Constraint {
  /** unique or primary key constraint */
  ChannelPkey = 'Channel_pkey'
}

/** input type for inserting data into table "Channel" */
export type Channel_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  hls_uri?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  vonage_session_id?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Channel_Max_Fields = {
  __typename?: 'Channel_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  hls_uri?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  vonage_session_id?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "Channel" */
export type Channel_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  hls_uri?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  vonage_session_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Channel_Min_Fields = {
  __typename?: 'Channel_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  hls_uri?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  vonage_session_id?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "Channel" */
export type Channel_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  hls_uri?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  vonage_session_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "Channel" */
export type Channel_Mutation_Response = {
  __typename?: 'Channel_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Channel>;
};

/** input type for inserting object relation for remote table "Channel" */
export type Channel_Obj_Rel_Insert_Input = {
  data: Channel_Insert_Input;
  on_conflict?: Maybe<Channel_On_Conflict>;
};

/** on conflict condition type for table "Channel" */
export type Channel_On_Conflict = {
  constraint: Channel_Constraint;
  update_columns: Array<Channel_Update_Column>;
  where?: Maybe<Channel_Bool_Exp>;
};

/** ordering options when selecting data from "Channel" */
export type Channel_Order_By = {
  created_at?: Maybe<Order_By>;
  hls_uri?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  vonage_session_id?: Maybe<Order_By>;
};

/** primary key columns input for table: "Channel" */
export type Channel_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "Channel" */
export enum Channel_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  HlsUri = 'hls_uri',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  VonageSessionId = 'vonage_session_id'
}

/** input type for updating data in table "Channel" */
export type Channel_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  hls_uri?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  vonage_session_id?: Maybe<Scalars['String']>;
};

/** update columns of table "Channel" */
export enum Channel_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  HlsUri = 'hls_uri',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  VonageSessionId = 'vonage_session_id'
}

/** columns and relationships of "Chat" */
export type Chat = {
  __typename?: 'Chat';
  createdAt: Scalars['timestamptz'];
  /** An object relationship */
  creator: User;
  creatorId: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  /** An array relationship */
  flaggedMessages: Array<FlaggedChatMessage>;
  /** An aggregated array relationship */
  flaggedMessages_aggregate: FlaggedChatMessage_Aggregate;
  id: Scalars['uuid'];
  isAutoNotify: Scalars['Boolean'];
  isAutoPin: Scalars['Boolean'];
  /** An array relationship */
  members: Array<ChatMember>;
  /** An aggregated array relationship */
  members_aggregate: ChatMember_Aggregate;
  /** An array relationship */
  messages: Array<ChatMessage>;
  /** An aggregated array relationship */
  messages_aggregate: ChatMessage_Aggregate;
  mode: Scalars['String'];
  /** An array relationship */
  moderators: Array<ChatModerator>;
  /** An aggregated array relationship */
  moderators_aggregate: ChatModerator_Aggregate;
  name: Scalars['String'];
  /** An array relationship */
  typers: Array<ChatTyper>;
  /** An aggregated array relationship */
  typers_aggregate: ChatTyper_Aggregate;
  updatedAt: Scalars['timestamptz'];
  /** An array relationship */
  viewers: Array<ChatViewer>;
  /** An aggregated array relationship */
  viewers_aggregate: ChatViewer_Aggregate;
};


/** columns and relationships of "Chat" */
export type ChatFlaggedMessagesArgs = {
  distinct_on?: Maybe<Array<FlaggedChatMessage_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<FlaggedChatMessage_Order_By>>;
  where?: Maybe<FlaggedChatMessage_Bool_Exp>;
};


/** columns and relationships of "Chat" */
export type ChatFlaggedMessages_AggregateArgs = {
  distinct_on?: Maybe<Array<FlaggedChatMessage_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<FlaggedChatMessage_Order_By>>;
  where?: Maybe<FlaggedChatMessage_Bool_Exp>;
};


/** columns and relationships of "Chat" */
export type ChatMembersArgs = {
  distinct_on?: Maybe<Array<ChatMember_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<ChatMember_Order_By>>;
  where?: Maybe<ChatMember_Bool_Exp>;
};


/** columns and relationships of "Chat" */
export type ChatMembers_AggregateArgs = {
  distinct_on?: Maybe<Array<ChatMember_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<ChatMember_Order_By>>;
  where?: Maybe<ChatMember_Bool_Exp>;
};


/** columns and relationships of "Chat" */
export type ChatMessagesArgs = {
  distinct_on?: Maybe<Array<ChatMessage_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<ChatMessage_Order_By>>;
  where?: Maybe<ChatMessage_Bool_Exp>;
};


/** columns and relationships of "Chat" */
export type ChatMessages_AggregateArgs = {
  distinct_on?: Maybe<Array<ChatMessage_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<ChatMessage_Order_By>>;
  where?: Maybe<ChatMessage_Bool_Exp>;
};


/** columns and relationships of "Chat" */
export type ChatModeratorsArgs = {
  distinct_on?: Maybe<Array<ChatModerator_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<ChatModerator_Order_By>>;
  where?: Maybe<ChatModerator_Bool_Exp>;
};


/** columns and relationships of "Chat" */
export type ChatModerators_AggregateArgs = {
  distinct_on?: Maybe<Array<ChatModerator_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<ChatModerator_Order_By>>;
  where?: Maybe<ChatModerator_Bool_Exp>;
};


/** columns and relationships of "Chat" */
export type ChatTypersArgs = {
  distinct_on?: Maybe<Array<ChatTyper_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<ChatTyper_Order_By>>;
  where?: Maybe<ChatTyper_Bool_Exp>;
};


/** columns and relationships of "Chat" */
export type ChatTypers_AggregateArgs = {
  distinct_on?: Maybe<Array<ChatTyper_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<ChatTyper_Order_By>>;
  where?: Maybe<ChatTyper_Bool_Exp>;
};


/** columns and relationships of "Chat" */
export type ChatViewersArgs = {
  distinct_on?: Maybe<Array<ChatViewer_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<ChatViewer_Order_By>>;
  where?: Maybe<ChatViewer_Bool_Exp>;
};


/** columns and relationships of "Chat" */
export type ChatViewers_AggregateArgs = {
  distinct_on?: Maybe<Array<ChatViewer_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<ChatViewer_Order_By>>;
  where?: Maybe<ChatViewer_Bool_Exp>;
};

/** columns and relationships of "ChatMember" */
export type ChatMember = {
  __typename?: 'ChatMember';
  /** An object relationship */
  chat: Chat;
  chatId: Scalars['uuid'];
  createdAt: Scalars['timestamptz'];
  id: Scalars['uuid'];
  invitationAcceptedAt?: Maybe<Scalars['timestamptz']>;
  updatedAt: Scalars['timestamptz'];
  /** An object relationship */
  user: User;
  userId: Scalars['String'];
};

/** aggregated selection of "ChatMember" */
export type ChatMember_Aggregate = {
  __typename?: 'ChatMember_aggregate';
  aggregate?: Maybe<ChatMember_Aggregate_Fields>;
  nodes: Array<ChatMember>;
};

/** aggregate fields of "ChatMember" */
export type ChatMember_Aggregate_Fields = {
  __typename?: 'ChatMember_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<ChatMember_Max_Fields>;
  min?: Maybe<ChatMember_Min_Fields>;
};


/** aggregate fields of "ChatMember" */
export type ChatMember_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<ChatMember_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "ChatMember" */
export type ChatMember_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<ChatMember_Max_Order_By>;
  min?: Maybe<ChatMember_Min_Order_By>;
};

/** input type for inserting array relation for remote table "ChatMember" */
export type ChatMember_Arr_Rel_Insert_Input = {
  data: Array<ChatMember_Insert_Input>;
  on_conflict?: Maybe<ChatMember_On_Conflict>;
};

/** Boolean expression to filter rows from the table "ChatMember". All fields are combined with a logical 'AND'. */
export type ChatMember_Bool_Exp = {
  _and?: Maybe<Array<Maybe<ChatMember_Bool_Exp>>>;
  _not?: Maybe<ChatMember_Bool_Exp>;
  _or?: Maybe<Array<Maybe<ChatMember_Bool_Exp>>>;
  chat?: Maybe<Chat_Bool_Exp>;
  chatId?: Maybe<Uuid_Comparison_Exp>;
  createdAt?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  invitationAcceptedAt?: Maybe<Timestamptz_Comparison_Exp>;
  updatedAt?: Maybe<Timestamptz_Comparison_Exp>;
  user?: Maybe<User_Bool_Exp>;
  userId?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "ChatMember" */
export enum ChatMember_Constraint {
  /** unique or primary key constraint */
  ChatMemberChatIdUserIdKey = 'ChatMember_chatId_userId_key',
  /** unique or primary key constraint */
  ChatMemberPkey = 'ChatMember_pkey'
}

/** input type for inserting data into table "ChatMember" */
export type ChatMember_Insert_Input = {
  chat?: Maybe<Chat_Obj_Rel_Insert_Input>;
  chatId?: Maybe<Scalars['uuid']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  invitationAcceptedAt?: Maybe<Scalars['timestamptz']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  user?: Maybe<User_Obj_Rel_Insert_Input>;
  userId?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type ChatMember_Max_Fields = {
  __typename?: 'ChatMember_max_fields';
  chatId?: Maybe<Scalars['uuid']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  invitationAcceptedAt?: Maybe<Scalars['timestamptz']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  userId?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "ChatMember" */
export type ChatMember_Max_Order_By = {
  chatId?: Maybe<Order_By>;
  createdAt?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  invitationAcceptedAt?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type ChatMember_Min_Fields = {
  __typename?: 'ChatMember_min_fields';
  chatId?: Maybe<Scalars['uuid']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  invitationAcceptedAt?: Maybe<Scalars['timestamptz']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  userId?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "ChatMember" */
export type ChatMember_Min_Order_By = {
  chatId?: Maybe<Order_By>;
  createdAt?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  invitationAcceptedAt?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

/** response of any mutation on the table "ChatMember" */
export type ChatMember_Mutation_Response = {
  __typename?: 'ChatMember_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<ChatMember>;
};

/** input type for inserting object relation for remote table "ChatMember" */
export type ChatMember_Obj_Rel_Insert_Input = {
  data: ChatMember_Insert_Input;
  on_conflict?: Maybe<ChatMember_On_Conflict>;
};

/** on conflict condition type for table "ChatMember" */
export type ChatMember_On_Conflict = {
  constraint: ChatMember_Constraint;
  update_columns: Array<ChatMember_Update_Column>;
  where?: Maybe<ChatMember_Bool_Exp>;
};

/** ordering options when selecting data from "ChatMember" */
export type ChatMember_Order_By = {
  chat?: Maybe<Chat_Order_By>;
  chatId?: Maybe<Order_By>;
  createdAt?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  invitationAcceptedAt?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
  user?: Maybe<User_Order_By>;
  userId?: Maybe<Order_By>;
};

/** primary key columns input for table: "ChatMember" */
export type ChatMember_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "ChatMember" */
export enum ChatMember_Select_Column {
  /** column name */
  ChatId = 'chatId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  InvitationAcceptedAt = 'invitationAcceptedAt',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UserId = 'userId'
}

/** input type for updating data in table "ChatMember" */
export type ChatMember_Set_Input = {
  chatId?: Maybe<Scalars['uuid']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  invitationAcceptedAt?: Maybe<Scalars['timestamptz']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  userId?: Maybe<Scalars['String']>;
};

/** update columns of table "ChatMember" */
export enum ChatMember_Update_Column {
  /** column name */
  ChatId = 'chatId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  InvitationAcceptedAt = 'invitationAcceptedAt',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UserId = 'userId'
}

/** columns and relationships of "ChatMessage" */
export type ChatMessage = {
  __typename?: 'ChatMessage';
  /** An object relationship */
  chat: Chat;
  chatId: Scalars['uuid'];
  content: Scalars['jsonb'];
  createdAt: Scalars['timestamptz'];
  /** An array relationship */
  flags: Array<FlaggedChatMessage>;
  /** An aggregated array relationship */
  flags_aggregate: FlaggedChatMessage_Aggregate;
  id: Scalars['uuid'];
  index: Scalars['Int'];
  isHighlighted: Scalars['Boolean'];
  /** An array relationship */
  reactions: Array<ChatReaction>;
  /** An aggregated array relationship */
  reactions_aggregate: ChatReaction_Aggregate;
  /** An object relationship */
  sender: User;
  senderId: Scalars['String'];
  updatedAt: Scalars['timestamptz'];
};


/** columns and relationships of "ChatMessage" */
export type ChatMessageContentArgs = {
  path?: Maybe<Scalars['String']>;
};


/** columns and relationships of "ChatMessage" */
export type ChatMessageFlagsArgs = {
  distinct_on?: Maybe<Array<FlaggedChatMessage_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<FlaggedChatMessage_Order_By>>;
  where?: Maybe<FlaggedChatMessage_Bool_Exp>;
};


/** columns and relationships of "ChatMessage" */
export type ChatMessageFlags_AggregateArgs = {
  distinct_on?: Maybe<Array<FlaggedChatMessage_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<FlaggedChatMessage_Order_By>>;
  where?: Maybe<FlaggedChatMessage_Bool_Exp>;
};


/** columns and relationships of "ChatMessage" */
export type ChatMessageReactionsArgs = {
  distinct_on?: Maybe<Array<ChatReaction_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<ChatReaction_Order_By>>;
  where?: Maybe<ChatReaction_Bool_Exp>;
};


/** columns and relationships of "ChatMessage" */
export type ChatMessageReactions_AggregateArgs = {
  distinct_on?: Maybe<Array<ChatReaction_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<ChatReaction_Order_By>>;
  where?: Maybe<ChatReaction_Bool_Exp>;
};

/** aggregated selection of "ChatMessage" */
export type ChatMessage_Aggregate = {
  __typename?: 'ChatMessage_aggregate';
  aggregate?: Maybe<ChatMessage_Aggregate_Fields>;
  nodes: Array<ChatMessage>;
};

/** aggregate fields of "ChatMessage" */
export type ChatMessage_Aggregate_Fields = {
  __typename?: 'ChatMessage_aggregate_fields';
  avg?: Maybe<ChatMessage_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<ChatMessage_Max_Fields>;
  min?: Maybe<ChatMessage_Min_Fields>;
  stddev?: Maybe<ChatMessage_Stddev_Fields>;
  stddev_pop?: Maybe<ChatMessage_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<ChatMessage_Stddev_Samp_Fields>;
  sum?: Maybe<ChatMessage_Sum_Fields>;
  var_pop?: Maybe<ChatMessage_Var_Pop_Fields>;
  var_samp?: Maybe<ChatMessage_Var_Samp_Fields>;
  variance?: Maybe<ChatMessage_Variance_Fields>;
};


/** aggregate fields of "ChatMessage" */
export type ChatMessage_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<ChatMessage_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "ChatMessage" */
export type ChatMessage_Aggregate_Order_By = {
  avg?: Maybe<ChatMessage_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<ChatMessage_Max_Order_By>;
  min?: Maybe<ChatMessage_Min_Order_By>;
  stddev?: Maybe<ChatMessage_Stddev_Order_By>;
  stddev_pop?: Maybe<ChatMessage_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<ChatMessage_Stddev_Samp_Order_By>;
  sum?: Maybe<ChatMessage_Sum_Order_By>;
  var_pop?: Maybe<ChatMessage_Var_Pop_Order_By>;
  var_samp?: Maybe<ChatMessage_Var_Samp_Order_By>;
  variance?: Maybe<ChatMessage_Variance_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type ChatMessage_Append_Input = {
  content?: Maybe<Scalars['jsonb']>;
};

/** input type for inserting array relation for remote table "ChatMessage" */
export type ChatMessage_Arr_Rel_Insert_Input = {
  data: Array<ChatMessage_Insert_Input>;
  on_conflict?: Maybe<ChatMessage_On_Conflict>;
};

/** aggregate avg on columns */
export type ChatMessage_Avg_Fields = {
  __typename?: 'ChatMessage_avg_fields';
  index?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "ChatMessage" */
export type ChatMessage_Avg_Order_By = {
  index?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "ChatMessage". All fields are combined with a logical 'AND'. */
export type ChatMessage_Bool_Exp = {
  _and?: Maybe<Array<Maybe<ChatMessage_Bool_Exp>>>;
  _not?: Maybe<ChatMessage_Bool_Exp>;
  _or?: Maybe<Array<Maybe<ChatMessage_Bool_Exp>>>;
  chat?: Maybe<Chat_Bool_Exp>;
  chatId?: Maybe<Uuid_Comparison_Exp>;
  content?: Maybe<Jsonb_Comparison_Exp>;
  createdAt?: Maybe<Timestamptz_Comparison_Exp>;
  flags?: Maybe<FlaggedChatMessage_Bool_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  index?: Maybe<Int_Comparison_Exp>;
  isHighlighted?: Maybe<Boolean_Comparison_Exp>;
  reactions?: Maybe<ChatReaction_Bool_Exp>;
  sender?: Maybe<User_Bool_Exp>;
  senderId?: Maybe<String_Comparison_Exp>;
  updatedAt?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "ChatMessage" */
export enum ChatMessage_Constraint {
  /** unique or primary key constraint */
  ChatMessageChatIdIndexKey = 'ChatMessage_chatId_index_key',
  /** unique or primary key constraint */
  ChatMessagePkey = 'ChatMessage_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type ChatMessage_Delete_At_Path_Input = {
  content?: Maybe<Array<Maybe<Scalars['String']>>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type ChatMessage_Delete_Elem_Input = {
  content?: Maybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type ChatMessage_Delete_Key_Input = {
  content?: Maybe<Scalars['String']>;
};

/** input type for incrementing integer column in table "ChatMessage" */
export type ChatMessage_Inc_Input = {
  index?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "ChatMessage" */
export type ChatMessage_Insert_Input = {
  chat?: Maybe<Chat_Obj_Rel_Insert_Input>;
  chatId?: Maybe<Scalars['uuid']>;
  content?: Maybe<Scalars['jsonb']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  flags?: Maybe<FlaggedChatMessage_Arr_Rel_Insert_Input>;
  id?: Maybe<Scalars['uuid']>;
  index?: Maybe<Scalars['Int']>;
  isHighlighted?: Maybe<Scalars['Boolean']>;
  reactions?: Maybe<ChatReaction_Arr_Rel_Insert_Input>;
  sender?: Maybe<User_Obj_Rel_Insert_Input>;
  senderId?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type ChatMessage_Max_Fields = {
  __typename?: 'ChatMessage_max_fields';
  chatId?: Maybe<Scalars['uuid']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  index?: Maybe<Scalars['Int']>;
  senderId?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "ChatMessage" */
export type ChatMessage_Max_Order_By = {
  chatId?: Maybe<Order_By>;
  createdAt?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  index?: Maybe<Order_By>;
  senderId?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type ChatMessage_Min_Fields = {
  __typename?: 'ChatMessage_min_fields';
  chatId?: Maybe<Scalars['uuid']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  index?: Maybe<Scalars['Int']>;
  senderId?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "ChatMessage" */
export type ChatMessage_Min_Order_By = {
  chatId?: Maybe<Order_By>;
  createdAt?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  index?: Maybe<Order_By>;
  senderId?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
};

/** response of any mutation on the table "ChatMessage" */
export type ChatMessage_Mutation_Response = {
  __typename?: 'ChatMessage_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<ChatMessage>;
};

/** input type for inserting object relation for remote table "ChatMessage" */
export type ChatMessage_Obj_Rel_Insert_Input = {
  data: ChatMessage_Insert_Input;
  on_conflict?: Maybe<ChatMessage_On_Conflict>;
};

/** on conflict condition type for table "ChatMessage" */
export type ChatMessage_On_Conflict = {
  constraint: ChatMessage_Constraint;
  update_columns: Array<ChatMessage_Update_Column>;
  where?: Maybe<ChatMessage_Bool_Exp>;
};

/** ordering options when selecting data from "ChatMessage" */
export type ChatMessage_Order_By = {
  chat?: Maybe<Chat_Order_By>;
  chatId?: Maybe<Order_By>;
  content?: Maybe<Order_By>;
  createdAt?: Maybe<Order_By>;
  flags_aggregate?: Maybe<FlaggedChatMessage_Aggregate_Order_By>;
  id?: Maybe<Order_By>;
  index?: Maybe<Order_By>;
  isHighlighted?: Maybe<Order_By>;
  reactions_aggregate?: Maybe<ChatReaction_Aggregate_Order_By>;
  sender?: Maybe<User_Order_By>;
  senderId?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
};

/** primary key columns input for table: "ChatMessage" */
export type ChatMessage_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type ChatMessage_Prepend_Input = {
  content?: Maybe<Scalars['jsonb']>;
};

/** select columns of table "ChatMessage" */
export enum ChatMessage_Select_Column {
  /** column name */
  ChatId = 'chatId',
  /** column name */
  Content = 'content',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Index = 'index',
  /** column name */
  IsHighlighted = 'isHighlighted',
  /** column name */
  SenderId = 'senderId',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "ChatMessage" */
export type ChatMessage_Set_Input = {
  chatId?: Maybe<Scalars['uuid']>;
  content?: Maybe<Scalars['jsonb']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  index?: Maybe<Scalars['Int']>;
  isHighlighted?: Maybe<Scalars['Boolean']>;
  senderId?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type ChatMessage_Stddev_Fields = {
  __typename?: 'ChatMessage_stddev_fields';
  index?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "ChatMessage" */
export type ChatMessage_Stddev_Order_By = {
  index?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type ChatMessage_Stddev_Pop_Fields = {
  __typename?: 'ChatMessage_stddev_pop_fields';
  index?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "ChatMessage" */
export type ChatMessage_Stddev_Pop_Order_By = {
  index?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type ChatMessage_Stddev_Samp_Fields = {
  __typename?: 'ChatMessage_stddev_samp_fields';
  index?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "ChatMessage" */
export type ChatMessage_Stddev_Samp_Order_By = {
  index?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type ChatMessage_Sum_Fields = {
  __typename?: 'ChatMessage_sum_fields';
  index?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "ChatMessage" */
export type ChatMessage_Sum_Order_By = {
  index?: Maybe<Order_By>;
};

/** update columns of table "ChatMessage" */
export enum ChatMessage_Update_Column {
  /** column name */
  ChatId = 'chatId',
  /** column name */
  Content = 'content',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Index = 'index',
  /** column name */
  IsHighlighted = 'isHighlighted',
  /** column name */
  SenderId = 'senderId',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** aggregate var_pop on columns */
export type ChatMessage_Var_Pop_Fields = {
  __typename?: 'ChatMessage_var_pop_fields';
  index?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "ChatMessage" */
export type ChatMessage_Var_Pop_Order_By = {
  index?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type ChatMessage_Var_Samp_Fields = {
  __typename?: 'ChatMessage_var_samp_fields';
  index?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "ChatMessage" */
export type ChatMessage_Var_Samp_Order_By = {
  index?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type ChatMessage_Variance_Fields = {
  __typename?: 'ChatMessage_variance_fields';
  index?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "ChatMessage" */
export type ChatMessage_Variance_Order_By = {
  index?: Maybe<Order_By>;
};

/** columns and relationships of "ChatModerator" */
export type ChatModerator = {
  __typename?: 'ChatModerator';
  /** An object relationship */
  chat: Chat;
  chatId: Scalars['uuid'];
  createdAt: Scalars['timestamptz'];
  id: Scalars['uuid'];
  /** An object relationship */
  user: User;
  userId: Scalars['String'];
};

/** aggregated selection of "ChatModerator" */
export type ChatModerator_Aggregate = {
  __typename?: 'ChatModerator_aggregate';
  aggregate?: Maybe<ChatModerator_Aggregate_Fields>;
  nodes: Array<ChatModerator>;
};

/** aggregate fields of "ChatModerator" */
export type ChatModerator_Aggregate_Fields = {
  __typename?: 'ChatModerator_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<ChatModerator_Max_Fields>;
  min?: Maybe<ChatModerator_Min_Fields>;
};


/** aggregate fields of "ChatModerator" */
export type ChatModerator_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<ChatModerator_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "ChatModerator" */
export type ChatModerator_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<ChatModerator_Max_Order_By>;
  min?: Maybe<ChatModerator_Min_Order_By>;
};

/** input type for inserting array relation for remote table "ChatModerator" */
export type ChatModerator_Arr_Rel_Insert_Input = {
  data: Array<ChatModerator_Insert_Input>;
  on_conflict?: Maybe<ChatModerator_On_Conflict>;
};

/** Boolean expression to filter rows from the table "ChatModerator". All fields are combined with a logical 'AND'. */
export type ChatModerator_Bool_Exp = {
  _and?: Maybe<Array<Maybe<ChatModerator_Bool_Exp>>>;
  _not?: Maybe<ChatModerator_Bool_Exp>;
  _or?: Maybe<Array<Maybe<ChatModerator_Bool_Exp>>>;
  chat?: Maybe<Chat_Bool_Exp>;
  chatId?: Maybe<Uuid_Comparison_Exp>;
  createdAt?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  user?: Maybe<User_Bool_Exp>;
  userId?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "ChatModerator" */
export enum ChatModerator_Constraint {
  /** unique or primary key constraint */
  ChatModeratorChatIdUserIdKey = 'ChatModerator_chatId_userId_key',
  /** unique or primary key constraint */
  ChatModeratorPkey = 'ChatModerator_pkey'
}

/** input type for inserting data into table "ChatModerator" */
export type ChatModerator_Insert_Input = {
  chat?: Maybe<Chat_Obj_Rel_Insert_Input>;
  chatId?: Maybe<Scalars['uuid']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  user?: Maybe<User_Obj_Rel_Insert_Input>;
  userId?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type ChatModerator_Max_Fields = {
  __typename?: 'ChatModerator_max_fields';
  chatId?: Maybe<Scalars['uuid']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  userId?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "ChatModerator" */
export type ChatModerator_Max_Order_By = {
  chatId?: Maybe<Order_By>;
  createdAt?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type ChatModerator_Min_Fields = {
  __typename?: 'ChatModerator_min_fields';
  chatId?: Maybe<Scalars['uuid']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  userId?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "ChatModerator" */
export type ChatModerator_Min_Order_By = {
  chatId?: Maybe<Order_By>;
  createdAt?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

/** response of any mutation on the table "ChatModerator" */
export type ChatModerator_Mutation_Response = {
  __typename?: 'ChatModerator_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<ChatModerator>;
};

/** input type for inserting object relation for remote table "ChatModerator" */
export type ChatModerator_Obj_Rel_Insert_Input = {
  data: ChatModerator_Insert_Input;
  on_conflict?: Maybe<ChatModerator_On_Conflict>;
};

/** on conflict condition type for table "ChatModerator" */
export type ChatModerator_On_Conflict = {
  constraint: ChatModerator_Constraint;
  update_columns: Array<ChatModerator_Update_Column>;
  where?: Maybe<ChatModerator_Bool_Exp>;
};

/** ordering options when selecting data from "ChatModerator" */
export type ChatModerator_Order_By = {
  chat?: Maybe<Chat_Order_By>;
  chatId?: Maybe<Order_By>;
  createdAt?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  user?: Maybe<User_Order_By>;
  userId?: Maybe<Order_By>;
};

/** primary key columns input for table: "ChatModerator" */
export type ChatModerator_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "ChatModerator" */
export enum ChatModerator_Select_Column {
  /** column name */
  ChatId = 'chatId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  UserId = 'userId'
}

/** input type for updating data in table "ChatModerator" */
export type ChatModerator_Set_Input = {
  chatId?: Maybe<Scalars['uuid']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  userId?: Maybe<Scalars['String']>;
};

/** update columns of table "ChatModerator" */
export enum ChatModerator_Update_Column {
  /** column name */
  ChatId = 'chatId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  UserId = 'userId'
}

/** columns and relationships of "ChatReaction" */
export type ChatReaction = {
  __typename?: 'ChatReaction';
  createdAt: Scalars['timestamptz'];
  id: Scalars['uuid'];
  /** An object relationship */
  message: ChatMessage;
  messageId: Scalars['uuid'];
  reaction: Scalars['String'];
  /** An object relationship */
  reactor: User;
  reactorId: Scalars['String'];
};

/** aggregated selection of "ChatReaction" */
export type ChatReaction_Aggregate = {
  __typename?: 'ChatReaction_aggregate';
  aggregate?: Maybe<ChatReaction_Aggregate_Fields>;
  nodes: Array<ChatReaction>;
};

/** aggregate fields of "ChatReaction" */
export type ChatReaction_Aggregate_Fields = {
  __typename?: 'ChatReaction_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<ChatReaction_Max_Fields>;
  min?: Maybe<ChatReaction_Min_Fields>;
};


/** aggregate fields of "ChatReaction" */
export type ChatReaction_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<ChatReaction_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "ChatReaction" */
export type ChatReaction_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<ChatReaction_Max_Order_By>;
  min?: Maybe<ChatReaction_Min_Order_By>;
};

/** input type for inserting array relation for remote table "ChatReaction" */
export type ChatReaction_Arr_Rel_Insert_Input = {
  data: Array<ChatReaction_Insert_Input>;
  on_conflict?: Maybe<ChatReaction_On_Conflict>;
};

/** Boolean expression to filter rows from the table "ChatReaction". All fields are combined with a logical 'AND'. */
export type ChatReaction_Bool_Exp = {
  _and?: Maybe<Array<Maybe<ChatReaction_Bool_Exp>>>;
  _not?: Maybe<ChatReaction_Bool_Exp>;
  _or?: Maybe<Array<Maybe<ChatReaction_Bool_Exp>>>;
  createdAt?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  message?: Maybe<ChatMessage_Bool_Exp>;
  messageId?: Maybe<Uuid_Comparison_Exp>;
  reaction?: Maybe<String_Comparison_Exp>;
  reactor?: Maybe<User_Bool_Exp>;
  reactorId?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "ChatReaction" */
export enum ChatReaction_Constraint {
  /** unique or primary key constraint */
  ChatReactionMessageIdReactorIdReactionKey = 'ChatReaction_messageId_reactorId_reaction_key',
  /** unique or primary key constraint */
  ChatReactionPkey = 'ChatReaction_pkey'
}

/** input type for inserting data into table "ChatReaction" */
export type ChatReaction_Insert_Input = {
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  message?: Maybe<ChatMessage_Obj_Rel_Insert_Input>;
  messageId?: Maybe<Scalars['uuid']>;
  reaction?: Maybe<Scalars['String']>;
  reactor?: Maybe<User_Obj_Rel_Insert_Input>;
  reactorId?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type ChatReaction_Max_Fields = {
  __typename?: 'ChatReaction_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  messageId?: Maybe<Scalars['uuid']>;
  reaction?: Maybe<Scalars['String']>;
  reactorId?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "ChatReaction" */
export type ChatReaction_Max_Order_By = {
  createdAt?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  messageId?: Maybe<Order_By>;
  reaction?: Maybe<Order_By>;
  reactorId?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type ChatReaction_Min_Fields = {
  __typename?: 'ChatReaction_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  messageId?: Maybe<Scalars['uuid']>;
  reaction?: Maybe<Scalars['String']>;
  reactorId?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "ChatReaction" */
export type ChatReaction_Min_Order_By = {
  createdAt?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  messageId?: Maybe<Order_By>;
  reaction?: Maybe<Order_By>;
  reactorId?: Maybe<Order_By>;
};

/** response of any mutation on the table "ChatReaction" */
export type ChatReaction_Mutation_Response = {
  __typename?: 'ChatReaction_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<ChatReaction>;
};

/** input type for inserting object relation for remote table "ChatReaction" */
export type ChatReaction_Obj_Rel_Insert_Input = {
  data: ChatReaction_Insert_Input;
  on_conflict?: Maybe<ChatReaction_On_Conflict>;
};

/** on conflict condition type for table "ChatReaction" */
export type ChatReaction_On_Conflict = {
  constraint: ChatReaction_Constraint;
  update_columns: Array<ChatReaction_Update_Column>;
  where?: Maybe<ChatReaction_Bool_Exp>;
};

/** ordering options when selecting data from "ChatReaction" */
export type ChatReaction_Order_By = {
  createdAt?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  message?: Maybe<ChatMessage_Order_By>;
  messageId?: Maybe<Order_By>;
  reaction?: Maybe<Order_By>;
  reactor?: Maybe<User_Order_By>;
  reactorId?: Maybe<Order_By>;
};

/** primary key columns input for table: "ChatReaction" */
export type ChatReaction_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "ChatReaction" */
export enum ChatReaction_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  MessageId = 'messageId',
  /** column name */
  Reaction = 'reaction',
  /** column name */
  ReactorId = 'reactorId'
}

/** input type for updating data in table "ChatReaction" */
export type ChatReaction_Set_Input = {
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  messageId?: Maybe<Scalars['uuid']>;
  reaction?: Maybe<Scalars['String']>;
  reactorId?: Maybe<Scalars['String']>;
};

/** update columns of table "ChatReaction" */
export enum ChatReaction_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  MessageId = 'messageId',
  /** column name */
  Reaction = 'reaction',
  /** column name */
  ReactorId = 'reactorId'
}

/** columns and relationships of "ChatTyper" */
export type ChatTyper = {
  __typename?: 'ChatTyper';
  /** An object relationship */
  chat: Chat;
  chatId: Scalars['uuid'];
  id: Scalars['uuid'];
  updatedAt: Scalars['timestamptz'];
  /** An object relationship */
  user: User;
  userId: Scalars['String'];
};

/** aggregated selection of "ChatTyper" */
export type ChatTyper_Aggregate = {
  __typename?: 'ChatTyper_aggregate';
  aggregate?: Maybe<ChatTyper_Aggregate_Fields>;
  nodes: Array<ChatTyper>;
};

/** aggregate fields of "ChatTyper" */
export type ChatTyper_Aggregate_Fields = {
  __typename?: 'ChatTyper_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<ChatTyper_Max_Fields>;
  min?: Maybe<ChatTyper_Min_Fields>;
};


/** aggregate fields of "ChatTyper" */
export type ChatTyper_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<ChatTyper_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "ChatTyper" */
export type ChatTyper_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<ChatTyper_Max_Order_By>;
  min?: Maybe<ChatTyper_Min_Order_By>;
};

/** input type for inserting array relation for remote table "ChatTyper" */
export type ChatTyper_Arr_Rel_Insert_Input = {
  data: Array<ChatTyper_Insert_Input>;
  on_conflict?: Maybe<ChatTyper_On_Conflict>;
};

/** Boolean expression to filter rows from the table "ChatTyper". All fields are combined with a logical 'AND'. */
export type ChatTyper_Bool_Exp = {
  _and?: Maybe<Array<Maybe<ChatTyper_Bool_Exp>>>;
  _not?: Maybe<ChatTyper_Bool_Exp>;
  _or?: Maybe<Array<Maybe<ChatTyper_Bool_Exp>>>;
  chat?: Maybe<Chat_Bool_Exp>;
  chatId?: Maybe<Uuid_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  updatedAt?: Maybe<Timestamptz_Comparison_Exp>;
  user?: Maybe<User_Bool_Exp>;
  userId?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "ChatTyper" */
export enum ChatTyper_Constraint {
  /** unique or primary key constraint */
  ChatTyperChatIdUserIdKey = 'ChatTyper_chatId_userId_key',
  /** unique or primary key constraint */
  ChatTypersPkey = 'ChatTypers_pkey'
}

/** input type for inserting data into table "ChatTyper" */
export type ChatTyper_Insert_Input = {
  chat?: Maybe<Chat_Obj_Rel_Insert_Input>;
  chatId?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  user?: Maybe<User_Obj_Rel_Insert_Input>;
  userId?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type ChatTyper_Max_Fields = {
  __typename?: 'ChatTyper_max_fields';
  chatId?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  userId?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "ChatTyper" */
export type ChatTyper_Max_Order_By = {
  chatId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type ChatTyper_Min_Fields = {
  __typename?: 'ChatTyper_min_fields';
  chatId?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  userId?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "ChatTyper" */
export type ChatTyper_Min_Order_By = {
  chatId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

/** response of any mutation on the table "ChatTyper" */
export type ChatTyper_Mutation_Response = {
  __typename?: 'ChatTyper_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<ChatTyper>;
};

/** input type for inserting object relation for remote table "ChatTyper" */
export type ChatTyper_Obj_Rel_Insert_Input = {
  data: ChatTyper_Insert_Input;
  on_conflict?: Maybe<ChatTyper_On_Conflict>;
};

/** on conflict condition type for table "ChatTyper" */
export type ChatTyper_On_Conflict = {
  constraint: ChatTyper_Constraint;
  update_columns: Array<ChatTyper_Update_Column>;
  where?: Maybe<ChatTyper_Bool_Exp>;
};

/** ordering options when selecting data from "ChatTyper" */
export type ChatTyper_Order_By = {
  chat?: Maybe<Chat_Order_By>;
  chatId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
  user?: Maybe<User_Order_By>;
  userId?: Maybe<Order_By>;
};

/** primary key columns input for table: "ChatTyper" */
export type ChatTyper_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "ChatTyper" */
export enum ChatTyper_Select_Column {
  /** column name */
  ChatId = 'chatId',
  /** column name */
  Id = 'id',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UserId = 'userId'
}

/** input type for updating data in table "ChatTyper" */
export type ChatTyper_Set_Input = {
  chatId?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  userId?: Maybe<Scalars['String']>;
};

/** update columns of table "ChatTyper" */
export enum ChatTyper_Update_Column {
  /** column name */
  ChatId = 'chatId',
  /** column name */
  Id = 'id',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UserId = 'userId'
}

/** columns and relationships of "ChatUnreadIndex" */
export type ChatUnreadIndex = {
  __typename?: 'ChatUnreadIndex';
  /** An object relationship */
  chat: Chat;
  chatId: Scalars['uuid'];
  id: Scalars['uuid'];
  index?: Maybe<Scalars['Int']>;
  /** An object relationship */
  user: User;
  userId: Scalars['String'];
};

/** aggregated selection of "ChatUnreadIndex" */
export type ChatUnreadIndex_Aggregate = {
  __typename?: 'ChatUnreadIndex_aggregate';
  aggregate?: Maybe<ChatUnreadIndex_Aggregate_Fields>;
  nodes: Array<ChatUnreadIndex>;
};

/** aggregate fields of "ChatUnreadIndex" */
export type ChatUnreadIndex_Aggregate_Fields = {
  __typename?: 'ChatUnreadIndex_aggregate_fields';
  avg?: Maybe<ChatUnreadIndex_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<ChatUnreadIndex_Max_Fields>;
  min?: Maybe<ChatUnreadIndex_Min_Fields>;
  stddev?: Maybe<ChatUnreadIndex_Stddev_Fields>;
  stddev_pop?: Maybe<ChatUnreadIndex_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<ChatUnreadIndex_Stddev_Samp_Fields>;
  sum?: Maybe<ChatUnreadIndex_Sum_Fields>;
  var_pop?: Maybe<ChatUnreadIndex_Var_Pop_Fields>;
  var_samp?: Maybe<ChatUnreadIndex_Var_Samp_Fields>;
  variance?: Maybe<ChatUnreadIndex_Variance_Fields>;
};


/** aggregate fields of "ChatUnreadIndex" */
export type ChatUnreadIndex_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<ChatUnreadIndex_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "ChatUnreadIndex" */
export type ChatUnreadIndex_Aggregate_Order_By = {
  avg?: Maybe<ChatUnreadIndex_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<ChatUnreadIndex_Max_Order_By>;
  min?: Maybe<ChatUnreadIndex_Min_Order_By>;
  stddev?: Maybe<ChatUnreadIndex_Stddev_Order_By>;
  stddev_pop?: Maybe<ChatUnreadIndex_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<ChatUnreadIndex_Stddev_Samp_Order_By>;
  sum?: Maybe<ChatUnreadIndex_Sum_Order_By>;
  var_pop?: Maybe<ChatUnreadIndex_Var_Pop_Order_By>;
  var_samp?: Maybe<ChatUnreadIndex_Var_Samp_Order_By>;
  variance?: Maybe<ChatUnreadIndex_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "ChatUnreadIndex" */
export type ChatUnreadIndex_Arr_Rel_Insert_Input = {
  data: Array<ChatUnreadIndex_Insert_Input>;
  on_conflict?: Maybe<ChatUnreadIndex_On_Conflict>;
};

/** aggregate avg on columns */
export type ChatUnreadIndex_Avg_Fields = {
  __typename?: 'ChatUnreadIndex_avg_fields';
  index?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "ChatUnreadIndex" */
export type ChatUnreadIndex_Avg_Order_By = {
  index?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "ChatUnreadIndex". All fields are combined with a logical 'AND'. */
export type ChatUnreadIndex_Bool_Exp = {
  _and?: Maybe<Array<Maybe<ChatUnreadIndex_Bool_Exp>>>;
  _not?: Maybe<ChatUnreadIndex_Bool_Exp>;
  _or?: Maybe<Array<Maybe<ChatUnreadIndex_Bool_Exp>>>;
  chat?: Maybe<Chat_Bool_Exp>;
  chatId?: Maybe<Uuid_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  index?: Maybe<Int_Comparison_Exp>;
  user?: Maybe<User_Bool_Exp>;
  userId?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "ChatUnreadIndex" */
export enum ChatUnreadIndex_Constraint {
  /** unique or primary key constraint */
  ChatUnreadIndexChatIdUserIdKey = 'ChatUnreadIndex_chatId_userId_key',
  /** unique or primary key constraint */
  ChatUnreadIndexPkey = 'ChatUnreadIndex_pkey'
}

/** input type for incrementing integer column in table "ChatUnreadIndex" */
export type ChatUnreadIndex_Inc_Input = {
  index?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "ChatUnreadIndex" */
export type ChatUnreadIndex_Insert_Input = {
  chat?: Maybe<Chat_Obj_Rel_Insert_Input>;
  chatId?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  index?: Maybe<Scalars['Int']>;
  user?: Maybe<User_Obj_Rel_Insert_Input>;
  userId?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type ChatUnreadIndex_Max_Fields = {
  __typename?: 'ChatUnreadIndex_max_fields';
  chatId?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  index?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "ChatUnreadIndex" */
export type ChatUnreadIndex_Max_Order_By = {
  chatId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  index?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type ChatUnreadIndex_Min_Fields = {
  __typename?: 'ChatUnreadIndex_min_fields';
  chatId?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  index?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "ChatUnreadIndex" */
export type ChatUnreadIndex_Min_Order_By = {
  chatId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  index?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

/** response of any mutation on the table "ChatUnreadIndex" */
export type ChatUnreadIndex_Mutation_Response = {
  __typename?: 'ChatUnreadIndex_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<ChatUnreadIndex>;
};

/** input type for inserting object relation for remote table "ChatUnreadIndex" */
export type ChatUnreadIndex_Obj_Rel_Insert_Input = {
  data: ChatUnreadIndex_Insert_Input;
  on_conflict?: Maybe<ChatUnreadIndex_On_Conflict>;
};

/** on conflict condition type for table "ChatUnreadIndex" */
export type ChatUnreadIndex_On_Conflict = {
  constraint: ChatUnreadIndex_Constraint;
  update_columns: Array<ChatUnreadIndex_Update_Column>;
  where?: Maybe<ChatUnreadIndex_Bool_Exp>;
};

/** ordering options when selecting data from "ChatUnreadIndex" */
export type ChatUnreadIndex_Order_By = {
  chat?: Maybe<Chat_Order_By>;
  chatId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  index?: Maybe<Order_By>;
  user?: Maybe<User_Order_By>;
  userId?: Maybe<Order_By>;
};

/** primary key columns input for table: "ChatUnreadIndex" */
export type ChatUnreadIndex_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "ChatUnreadIndex" */
export enum ChatUnreadIndex_Select_Column {
  /** column name */
  ChatId = 'chatId',
  /** column name */
  Id = 'id',
  /** column name */
  Index = 'index',
  /** column name */
  UserId = 'userId'
}

/** input type for updating data in table "ChatUnreadIndex" */
export type ChatUnreadIndex_Set_Input = {
  chatId?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  index?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type ChatUnreadIndex_Stddev_Fields = {
  __typename?: 'ChatUnreadIndex_stddev_fields';
  index?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "ChatUnreadIndex" */
export type ChatUnreadIndex_Stddev_Order_By = {
  index?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type ChatUnreadIndex_Stddev_Pop_Fields = {
  __typename?: 'ChatUnreadIndex_stddev_pop_fields';
  index?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "ChatUnreadIndex" */
export type ChatUnreadIndex_Stddev_Pop_Order_By = {
  index?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type ChatUnreadIndex_Stddev_Samp_Fields = {
  __typename?: 'ChatUnreadIndex_stddev_samp_fields';
  index?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "ChatUnreadIndex" */
export type ChatUnreadIndex_Stddev_Samp_Order_By = {
  index?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type ChatUnreadIndex_Sum_Fields = {
  __typename?: 'ChatUnreadIndex_sum_fields';
  index?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "ChatUnreadIndex" */
export type ChatUnreadIndex_Sum_Order_By = {
  index?: Maybe<Order_By>;
};

/** update columns of table "ChatUnreadIndex" */
export enum ChatUnreadIndex_Update_Column {
  /** column name */
  ChatId = 'chatId',
  /** column name */
  Id = 'id',
  /** column name */
  Index = 'index',
  /** column name */
  UserId = 'userId'
}

/** aggregate var_pop on columns */
export type ChatUnreadIndex_Var_Pop_Fields = {
  __typename?: 'ChatUnreadIndex_var_pop_fields';
  index?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "ChatUnreadIndex" */
export type ChatUnreadIndex_Var_Pop_Order_By = {
  index?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type ChatUnreadIndex_Var_Samp_Fields = {
  __typename?: 'ChatUnreadIndex_var_samp_fields';
  index?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "ChatUnreadIndex" */
export type ChatUnreadIndex_Var_Samp_Order_By = {
  index?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type ChatUnreadIndex_Variance_Fields = {
  __typename?: 'ChatUnreadIndex_variance_fields';
  index?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "ChatUnreadIndex" */
export type ChatUnreadIndex_Variance_Order_By = {
  index?: Maybe<Order_By>;
};

/** columns and relationships of "ChatViewer" */
export type ChatViewer = {
  __typename?: 'ChatViewer';
  /** An object relationship */
  chat: Chat;
  chatId: Scalars['uuid'];
  id: Scalars['uuid'];
  lastSeen: Scalars['timestamptz'];
  /** An object relationship */
  user: User;
  userId: Scalars['String'];
};

/** aggregated selection of "ChatViewer" */
export type ChatViewer_Aggregate = {
  __typename?: 'ChatViewer_aggregate';
  aggregate?: Maybe<ChatViewer_Aggregate_Fields>;
  nodes: Array<ChatViewer>;
};

/** aggregate fields of "ChatViewer" */
export type ChatViewer_Aggregate_Fields = {
  __typename?: 'ChatViewer_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<ChatViewer_Max_Fields>;
  min?: Maybe<ChatViewer_Min_Fields>;
};


/** aggregate fields of "ChatViewer" */
export type ChatViewer_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<ChatViewer_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "ChatViewer" */
export type ChatViewer_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<ChatViewer_Max_Order_By>;
  min?: Maybe<ChatViewer_Min_Order_By>;
};

/** input type for inserting array relation for remote table "ChatViewer" */
export type ChatViewer_Arr_Rel_Insert_Input = {
  data: Array<ChatViewer_Insert_Input>;
  on_conflict?: Maybe<ChatViewer_On_Conflict>;
};

/** Boolean expression to filter rows from the table "ChatViewer". All fields are combined with a logical 'AND'. */
export type ChatViewer_Bool_Exp = {
  _and?: Maybe<Array<Maybe<ChatViewer_Bool_Exp>>>;
  _not?: Maybe<ChatViewer_Bool_Exp>;
  _or?: Maybe<Array<Maybe<ChatViewer_Bool_Exp>>>;
  chat?: Maybe<Chat_Bool_Exp>;
  chatId?: Maybe<Uuid_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  lastSeen?: Maybe<Timestamptz_Comparison_Exp>;
  user?: Maybe<User_Bool_Exp>;
  userId?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "ChatViewer" */
export enum ChatViewer_Constraint {
  /** unique or primary key constraint */
  ChatViewerChatIdUserIdKey = 'ChatViewer_chatId_userId_key',
  /** unique or primary key constraint */
  ChatViewerPkey = 'ChatViewer_pkey'
}

/** input type for inserting data into table "ChatViewer" */
export type ChatViewer_Insert_Input = {
  chat?: Maybe<Chat_Obj_Rel_Insert_Input>;
  chatId?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  lastSeen?: Maybe<Scalars['timestamptz']>;
  user?: Maybe<User_Obj_Rel_Insert_Input>;
  userId?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type ChatViewer_Max_Fields = {
  __typename?: 'ChatViewer_max_fields';
  chatId?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  lastSeen?: Maybe<Scalars['timestamptz']>;
  userId?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "ChatViewer" */
export type ChatViewer_Max_Order_By = {
  chatId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  lastSeen?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type ChatViewer_Min_Fields = {
  __typename?: 'ChatViewer_min_fields';
  chatId?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  lastSeen?: Maybe<Scalars['timestamptz']>;
  userId?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "ChatViewer" */
export type ChatViewer_Min_Order_By = {
  chatId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  lastSeen?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

/** response of any mutation on the table "ChatViewer" */
export type ChatViewer_Mutation_Response = {
  __typename?: 'ChatViewer_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<ChatViewer>;
};

/** input type for inserting object relation for remote table "ChatViewer" */
export type ChatViewer_Obj_Rel_Insert_Input = {
  data: ChatViewer_Insert_Input;
  on_conflict?: Maybe<ChatViewer_On_Conflict>;
};

/** on conflict condition type for table "ChatViewer" */
export type ChatViewer_On_Conflict = {
  constraint: ChatViewer_Constraint;
  update_columns: Array<ChatViewer_Update_Column>;
  where?: Maybe<ChatViewer_Bool_Exp>;
};

/** ordering options when selecting data from "ChatViewer" */
export type ChatViewer_Order_By = {
  chat?: Maybe<Chat_Order_By>;
  chatId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  lastSeen?: Maybe<Order_By>;
  user?: Maybe<User_Order_By>;
  userId?: Maybe<Order_By>;
};

/** primary key columns input for table: "ChatViewer" */
export type ChatViewer_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "ChatViewer" */
export enum ChatViewer_Select_Column {
  /** column name */
  ChatId = 'chatId',
  /** column name */
  Id = 'id',
  /** column name */
  LastSeen = 'lastSeen',
  /** column name */
  UserId = 'userId'
}

/** input type for updating data in table "ChatViewer" */
export type ChatViewer_Set_Input = {
  chatId?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  lastSeen?: Maybe<Scalars['timestamptz']>;
  userId?: Maybe<Scalars['String']>;
};

/** update columns of table "ChatViewer" */
export enum ChatViewer_Update_Column {
  /** column name */
  ChatId = 'chatId',
  /** column name */
  Id = 'id',
  /** column name */
  LastSeen = 'lastSeen',
  /** column name */
  UserId = 'userId'
}

/** aggregated selection of "Chat" */
export type Chat_Aggregate = {
  __typename?: 'Chat_aggregate';
  aggregate?: Maybe<Chat_Aggregate_Fields>;
  nodes: Array<Chat>;
};

/** aggregate fields of "Chat" */
export type Chat_Aggregate_Fields = {
  __typename?: 'Chat_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Chat_Max_Fields>;
  min?: Maybe<Chat_Min_Fields>;
};


/** aggregate fields of "Chat" */
export type Chat_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Chat_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "Chat" */
export type Chat_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Chat_Max_Order_By>;
  min?: Maybe<Chat_Min_Order_By>;
};

/** input type for inserting array relation for remote table "Chat" */
export type Chat_Arr_Rel_Insert_Input = {
  data: Array<Chat_Insert_Input>;
  on_conflict?: Maybe<Chat_On_Conflict>;
};

/** Boolean expression to filter rows from the table "Chat". All fields are combined with a logical 'AND'. */
export type Chat_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Chat_Bool_Exp>>>;
  _not?: Maybe<Chat_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Chat_Bool_Exp>>>;
  createdAt?: Maybe<Timestamptz_Comparison_Exp>;
  creator?: Maybe<User_Bool_Exp>;
  creatorId?: Maybe<String_Comparison_Exp>;
  description?: Maybe<String_Comparison_Exp>;
  flaggedMessages?: Maybe<FlaggedChatMessage_Bool_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  isAutoNotify?: Maybe<Boolean_Comparison_Exp>;
  isAutoPin?: Maybe<Boolean_Comparison_Exp>;
  members?: Maybe<ChatMember_Bool_Exp>;
  messages?: Maybe<ChatMessage_Bool_Exp>;
  mode?: Maybe<String_Comparison_Exp>;
  moderators?: Maybe<ChatModerator_Bool_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  typers?: Maybe<ChatTyper_Bool_Exp>;
  updatedAt?: Maybe<Timestamptz_Comparison_Exp>;
  viewers?: Maybe<ChatViewer_Bool_Exp>;
};

/** unique or primary key constraints on table "Chat" */
export enum Chat_Constraint {
  /** unique or primary key constraint */
  ChatPkey = 'Chat_pkey'
}

/** input type for inserting data into table "Chat" */
export type Chat_Insert_Input = {
  createdAt?: Maybe<Scalars['timestamptz']>;
  creator?: Maybe<User_Obj_Rel_Insert_Input>;
  creatorId?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  flaggedMessages?: Maybe<FlaggedChatMessage_Arr_Rel_Insert_Input>;
  id?: Maybe<Scalars['uuid']>;
  isAutoNotify?: Maybe<Scalars['Boolean']>;
  isAutoPin?: Maybe<Scalars['Boolean']>;
  members?: Maybe<ChatMember_Arr_Rel_Insert_Input>;
  messages?: Maybe<ChatMessage_Arr_Rel_Insert_Input>;
  mode?: Maybe<Scalars['String']>;
  moderators?: Maybe<ChatModerator_Arr_Rel_Insert_Input>;
  name?: Maybe<Scalars['String']>;
  typers?: Maybe<ChatTyper_Arr_Rel_Insert_Input>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  viewers?: Maybe<ChatViewer_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Chat_Max_Fields = {
  __typename?: 'Chat_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  creatorId?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  mode?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "Chat" */
export type Chat_Max_Order_By = {
  createdAt?: Maybe<Order_By>;
  creatorId?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  mode?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Chat_Min_Fields = {
  __typename?: 'Chat_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  creatorId?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  mode?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "Chat" */
export type Chat_Min_Order_By = {
  createdAt?: Maybe<Order_By>;
  creatorId?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  mode?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
};

/** response of any mutation on the table "Chat" */
export type Chat_Mutation_Response = {
  __typename?: 'Chat_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Chat>;
};

/** input type for inserting object relation for remote table "Chat" */
export type Chat_Obj_Rel_Insert_Input = {
  data: Chat_Insert_Input;
  on_conflict?: Maybe<Chat_On_Conflict>;
};

/** on conflict condition type for table "Chat" */
export type Chat_On_Conflict = {
  constraint: Chat_Constraint;
  update_columns: Array<Chat_Update_Column>;
  where?: Maybe<Chat_Bool_Exp>;
};

/** ordering options when selecting data from "Chat" */
export type Chat_Order_By = {
  createdAt?: Maybe<Order_By>;
  creator?: Maybe<User_Order_By>;
  creatorId?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  flaggedMessages_aggregate?: Maybe<FlaggedChatMessage_Aggregate_Order_By>;
  id?: Maybe<Order_By>;
  isAutoNotify?: Maybe<Order_By>;
  isAutoPin?: Maybe<Order_By>;
  members_aggregate?: Maybe<ChatMember_Aggregate_Order_By>;
  messages_aggregate?: Maybe<ChatMessage_Aggregate_Order_By>;
  mode?: Maybe<Order_By>;
  moderators_aggregate?: Maybe<ChatModerator_Aggregate_Order_By>;
  name?: Maybe<Order_By>;
  typers_aggregate?: Maybe<ChatTyper_Aggregate_Order_By>;
  updatedAt?: Maybe<Order_By>;
  viewers_aggregate?: Maybe<ChatViewer_Aggregate_Order_By>;
};

/** primary key columns input for table: "Chat" */
export type Chat_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "Chat" */
export enum Chat_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  CreatorId = 'creatorId',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  IsAutoNotify = 'isAutoNotify',
  /** column name */
  IsAutoPin = 'isAutoPin',
  /** column name */
  Mode = 'mode',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "Chat" */
export type Chat_Set_Input = {
  createdAt?: Maybe<Scalars['timestamptz']>;
  creatorId?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  isAutoNotify?: Maybe<Scalars['Boolean']>;
  isAutoPin?: Maybe<Scalars['Boolean']>;
  mode?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** update columns of table "Chat" */
export enum Chat_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  CreatorId = 'creatorId',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  IsAutoNotify = 'isAutoNotify',
  /** column name */
  IsAutoPin = 'isAutoPin',
  /** column name */
  Mode = 'mode',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updatedAt'
}

export type CreateChannelOutput = {
  __typename?: 'CreateChannelOutput';
  channel?: Maybe<Channel>;
  id: Scalars['uuid'];
};

export type EchoInput = {
  message: Scalars['String'];
};

export type EchoOutput = {
  __typename?: 'EchoOutput';
  message: Scalars['String'];
};

/** columns and relationships of "FlaggedChatMessage" */
export type FlaggedChatMessage = {
  __typename?: 'FlaggedChatMessage';
  createdAt: Scalars['timestamptz'];
  /** An object relationship */
  flaggedBy: User;
  flaggedById: Scalars['String'];
  id: Scalars['uuid'];
  /** An object relationship */
  message: ChatMessage;
  messageId: Scalars['uuid'];
  /** An object relationship */
  moderationChat?: Maybe<Chat>;
  moderationChatId?: Maybe<Scalars['uuid']>;
  notes?: Maybe<Scalars['String']>;
  resolutionAction?: Maybe<Scalars['String']>;
  resolvedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregated selection of "FlaggedChatMessage" */
export type FlaggedChatMessage_Aggregate = {
  __typename?: 'FlaggedChatMessage_aggregate';
  aggregate?: Maybe<FlaggedChatMessage_Aggregate_Fields>;
  nodes: Array<FlaggedChatMessage>;
};

/** aggregate fields of "FlaggedChatMessage" */
export type FlaggedChatMessage_Aggregate_Fields = {
  __typename?: 'FlaggedChatMessage_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<FlaggedChatMessage_Max_Fields>;
  min?: Maybe<FlaggedChatMessage_Min_Fields>;
};


/** aggregate fields of "FlaggedChatMessage" */
export type FlaggedChatMessage_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<FlaggedChatMessage_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "FlaggedChatMessage" */
export type FlaggedChatMessage_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<FlaggedChatMessage_Max_Order_By>;
  min?: Maybe<FlaggedChatMessage_Min_Order_By>;
};

/** input type for inserting array relation for remote table "FlaggedChatMessage" */
export type FlaggedChatMessage_Arr_Rel_Insert_Input = {
  data: Array<FlaggedChatMessage_Insert_Input>;
  on_conflict?: Maybe<FlaggedChatMessage_On_Conflict>;
};

/** Boolean expression to filter rows from the table "FlaggedChatMessage". All fields are combined with a logical 'AND'. */
export type FlaggedChatMessage_Bool_Exp = {
  _and?: Maybe<Array<Maybe<FlaggedChatMessage_Bool_Exp>>>;
  _not?: Maybe<FlaggedChatMessage_Bool_Exp>;
  _or?: Maybe<Array<Maybe<FlaggedChatMessage_Bool_Exp>>>;
  createdAt?: Maybe<Timestamptz_Comparison_Exp>;
  flaggedBy?: Maybe<User_Bool_Exp>;
  flaggedById?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  message?: Maybe<ChatMessage_Bool_Exp>;
  messageId?: Maybe<Uuid_Comparison_Exp>;
  moderationChat?: Maybe<Chat_Bool_Exp>;
  moderationChatId?: Maybe<Uuid_Comparison_Exp>;
  notes?: Maybe<String_Comparison_Exp>;
  resolutionAction?: Maybe<String_Comparison_Exp>;
  resolvedAt?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "FlaggedChatMessage" */
export enum FlaggedChatMessage_Constraint {
  /** unique or primary key constraint */
  FlaggedChatMessageMessageIdFlaggedByIdKey = 'FlaggedChatMessage_messageId_flaggedById_key',
  /** unique or primary key constraint */
  FlaggedChatMessagePkey = 'FlaggedChatMessage_pkey'
}

/** input type for inserting data into table "FlaggedChatMessage" */
export type FlaggedChatMessage_Insert_Input = {
  createdAt?: Maybe<Scalars['timestamptz']>;
  flaggedBy?: Maybe<User_Obj_Rel_Insert_Input>;
  flaggedById?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  message?: Maybe<ChatMessage_Obj_Rel_Insert_Input>;
  messageId?: Maybe<Scalars['uuid']>;
  moderationChat?: Maybe<Chat_Obj_Rel_Insert_Input>;
  moderationChatId?: Maybe<Scalars['uuid']>;
  notes?: Maybe<Scalars['String']>;
  resolutionAction?: Maybe<Scalars['String']>;
  resolvedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type FlaggedChatMessage_Max_Fields = {
  __typename?: 'FlaggedChatMessage_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  flaggedById?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  messageId?: Maybe<Scalars['uuid']>;
  moderationChatId?: Maybe<Scalars['uuid']>;
  notes?: Maybe<Scalars['String']>;
  resolutionAction?: Maybe<Scalars['String']>;
  resolvedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "FlaggedChatMessage" */
export type FlaggedChatMessage_Max_Order_By = {
  createdAt?: Maybe<Order_By>;
  flaggedById?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  messageId?: Maybe<Order_By>;
  moderationChatId?: Maybe<Order_By>;
  notes?: Maybe<Order_By>;
  resolutionAction?: Maybe<Order_By>;
  resolvedAt?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type FlaggedChatMessage_Min_Fields = {
  __typename?: 'FlaggedChatMessage_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  flaggedById?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  messageId?: Maybe<Scalars['uuid']>;
  moderationChatId?: Maybe<Scalars['uuid']>;
  notes?: Maybe<Scalars['String']>;
  resolutionAction?: Maybe<Scalars['String']>;
  resolvedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "FlaggedChatMessage" */
export type FlaggedChatMessage_Min_Order_By = {
  createdAt?: Maybe<Order_By>;
  flaggedById?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  messageId?: Maybe<Order_By>;
  moderationChatId?: Maybe<Order_By>;
  notes?: Maybe<Order_By>;
  resolutionAction?: Maybe<Order_By>;
  resolvedAt?: Maybe<Order_By>;
};

/** response of any mutation on the table "FlaggedChatMessage" */
export type FlaggedChatMessage_Mutation_Response = {
  __typename?: 'FlaggedChatMessage_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<FlaggedChatMessage>;
};

/** input type for inserting object relation for remote table "FlaggedChatMessage" */
export type FlaggedChatMessage_Obj_Rel_Insert_Input = {
  data: FlaggedChatMessage_Insert_Input;
  on_conflict?: Maybe<FlaggedChatMessage_On_Conflict>;
};

/** on conflict condition type for table "FlaggedChatMessage" */
export type FlaggedChatMessage_On_Conflict = {
  constraint: FlaggedChatMessage_Constraint;
  update_columns: Array<FlaggedChatMessage_Update_Column>;
  where?: Maybe<FlaggedChatMessage_Bool_Exp>;
};

/** ordering options when selecting data from "FlaggedChatMessage" */
export type FlaggedChatMessage_Order_By = {
  createdAt?: Maybe<Order_By>;
  flaggedBy?: Maybe<User_Order_By>;
  flaggedById?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  message?: Maybe<ChatMessage_Order_By>;
  messageId?: Maybe<Order_By>;
  moderationChat?: Maybe<Chat_Order_By>;
  moderationChatId?: Maybe<Order_By>;
  notes?: Maybe<Order_By>;
  resolutionAction?: Maybe<Order_By>;
  resolvedAt?: Maybe<Order_By>;
};

/** primary key columns input for table: "FlaggedChatMessage" */
export type FlaggedChatMessage_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "FlaggedChatMessage" */
export enum FlaggedChatMessage_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  FlaggedById = 'flaggedById',
  /** column name */
  Id = 'id',
  /** column name */
  MessageId = 'messageId',
  /** column name */
  ModerationChatId = 'moderationChatId',
  /** column name */
  Notes = 'notes',
  /** column name */
  ResolutionAction = 'resolutionAction',
  /** column name */
  ResolvedAt = 'resolvedAt'
}

/** input type for updating data in table "FlaggedChatMessage" */
export type FlaggedChatMessage_Set_Input = {
  createdAt?: Maybe<Scalars['timestamptz']>;
  flaggedById?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  messageId?: Maybe<Scalars['uuid']>;
  moderationChatId?: Maybe<Scalars['uuid']>;
  notes?: Maybe<Scalars['String']>;
  resolutionAction?: Maybe<Scalars['String']>;
  resolvedAt?: Maybe<Scalars['timestamptz']>;
};

/** update columns of table "FlaggedChatMessage" */
export enum FlaggedChatMessage_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  FlaggedById = 'flaggedById',
  /** column name */
  Id = 'id',
  /** column name */
  MessageId = 'messageId',
  /** column name */
  ModerationChatId = 'moderationChatId',
  /** column name */
  Notes = 'notes',
  /** column name */
  ResolutionAction = 'resolutionAction',
  /** column name */
  ResolvedAt = 'resolvedAt'
}

/** columns and relationships of "FollowedChat" */
export type FollowedChat = {
  __typename?: 'FollowedChat';
  /** An object relationship */
  chat: Chat;
  chatId: Scalars['uuid'];
  id: Scalars['uuid'];
  manual: Scalars['Boolean'];
  /** An object relationship */
  user: User;
  userId: Scalars['String'];
};

/** aggregated selection of "FollowedChat" */
export type FollowedChat_Aggregate = {
  __typename?: 'FollowedChat_aggregate';
  aggregate?: Maybe<FollowedChat_Aggregate_Fields>;
  nodes: Array<FollowedChat>;
};

/** aggregate fields of "FollowedChat" */
export type FollowedChat_Aggregate_Fields = {
  __typename?: 'FollowedChat_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<FollowedChat_Max_Fields>;
  min?: Maybe<FollowedChat_Min_Fields>;
};


/** aggregate fields of "FollowedChat" */
export type FollowedChat_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<FollowedChat_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "FollowedChat" */
export type FollowedChat_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<FollowedChat_Max_Order_By>;
  min?: Maybe<FollowedChat_Min_Order_By>;
};

/** input type for inserting array relation for remote table "FollowedChat" */
export type FollowedChat_Arr_Rel_Insert_Input = {
  data: Array<FollowedChat_Insert_Input>;
  on_conflict?: Maybe<FollowedChat_On_Conflict>;
};

/** Boolean expression to filter rows from the table "FollowedChat". All fields are combined with a logical 'AND'. */
export type FollowedChat_Bool_Exp = {
  _and?: Maybe<Array<Maybe<FollowedChat_Bool_Exp>>>;
  _not?: Maybe<FollowedChat_Bool_Exp>;
  _or?: Maybe<Array<Maybe<FollowedChat_Bool_Exp>>>;
  chat?: Maybe<Chat_Bool_Exp>;
  chatId?: Maybe<Uuid_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  manual?: Maybe<Boolean_Comparison_Exp>;
  user?: Maybe<User_Bool_Exp>;
  userId?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "FollowedChat" */
export enum FollowedChat_Constraint {
  /** unique or primary key constraint */
  FollowedChatChatIdUserIdKey = 'FollowedChat_chatId_userId_key',
  /** unique or primary key constraint */
  FollowedChatPkey = 'FollowedChat_pkey'
}

/** input type for inserting data into table "FollowedChat" */
export type FollowedChat_Insert_Input = {
  chat?: Maybe<Chat_Obj_Rel_Insert_Input>;
  chatId?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  manual?: Maybe<Scalars['Boolean']>;
  user?: Maybe<User_Obj_Rel_Insert_Input>;
  userId?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type FollowedChat_Max_Fields = {
  __typename?: 'FollowedChat_max_fields';
  chatId?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  userId?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "FollowedChat" */
export type FollowedChat_Max_Order_By = {
  chatId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type FollowedChat_Min_Fields = {
  __typename?: 'FollowedChat_min_fields';
  chatId?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  userId?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "FollowedChat" */
export type FollowedChat_Min_Order_By = {
  chatId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

/** response of any mutation on the table "FollowedChat" */
export type FollowedChat_Mutation_Response = {
  __typename?: 'FollowedChat_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<FollowedChat>;
};

/** input type for inserting object relation for remote table "FollowedChat" */
export type FollowedChat_Obj_Rel_Insert_Input = {
  data: FollowedChat_Insert_Input;
  on_conflict?: Maybe<FollowedChat_On_Conflict>;
};

/** on conflict condition type for table "FollowedChat" */
export type FollowedChat_On_Conflict = {
  constraint: FollowedChat_Constraint;
  update_columns: Array<FollowedChat_Update_Column>;
  where?: Maybe<FollowedChat_Bool_Exp>;
};

/** ordering options when selecting data from "FollowedChat" */
export type FollowedChat_Order_By = {
  chat?: Maybe<Chat_Order_By>;
  chatId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  manual?: Maybe<Order_By>;
  user?: Maybe<User_Order_By>;
  userId?: Maybe<Order_By>;
};

/** primary key columns input for table: "FollowedChat" */
export type FollowedChat_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "FollowedChat" */
export enum FollowedChat_Select_Column {
  /** column name */
  ChatId = 'chatId',
  /** column name */
  Id = 'id',
  /** column name */
  Manual = 'manual',
  /** column name */
  UserId = 'userId'
}

/** input type for updating data in table "FollowedChat" */
export type FollowedChat_Set_Input = {
  chatId?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  manual?: Maybe<Scalars['Boolean']>;
  userId?: Maybe<Scalars['String']>;
};

/** update columns of table "FollowedChat" */
export enum FollowedChat_Update_Column {
  /** column name */
  ChatId = 'chatId',
  /** column name */
  Id = 'id',
  /** column name */
  Manual = 'manual',
  /** column name */
  UserId = 'userId'
}

export type GetChannelTokenInput = {
  channelId: Scalars['uuid'];
};

export type GetChannelTokenOutput = {
  __typename?: 'GetChannelTokenOutput';
  token: Scalars['String'];
};

/** expression to compare columns of type Int. All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: Maybe<Scalars['Int']>;
  _gt?: Maybe<Scalars['Int']>;
  _gte?: Maybe<Scalars['Int']>;
  _in?: Maybe<Array<Scalars['Int']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Int']>;
  _lte?: Maybe<Scalars['Int']>;
  _neq?: Maybe<Scalars['Int']>;
  _nin?: Maybe<Array<Scalars['Int']>>;
};

/** columns and relationships of "OnlineStatus" */
export type OnlineStatus = {
  __typename?: 'OnlineStatus';
  id: Scalars['uuid'];
  isIncognito: Scalars['Boolean'];
  lastSeen: Scalars['timestamptz'];
  /** An object relationship */
  user: User;
  userId: Scalars['String'];
};

/** aggregated selection of "OnlineStatus" */
export type OnlineStatus_Aggregate = {
  __typename?: 'OnlineStatus_aggregate';
  aggregate?: Maybe<OnlineStatus_Aggregate_Fields>;
  nodes: Array<OnlineStatus>;
};

/** aggregate fields of "OnlineStatus" */
export type OnlineStatus_Aggregate_Fields = {
  __typename?: 'OnlineStatus_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<OnlineStatus_Max_Fields>;
  min?: Maybe<OnlineStatus_Min_Fields>;
};


/** aggregate fields of "OnlineStatus" */
export type OnlineStatus_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<OnlineStatus_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "OnlineStatus" */
export type OnlineStatus_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<OnlineStatus_Max_Order_By>;
  min?: Maybe<OnlineStatus_Min_Order_By>;
};

/** input type for inserting array relation for remote table "OnlineStatus" */
export type OnlineStatus_Arr_Rel_Insert_Input = {
  data: Array<OnlineStatus_Insert_Input>;
  on_conflict?: Maybe<OnlineStatus_On_Conflict>;
};

/** Boolean expression to filter rows from the table "OnlineStatus". All fields are combined with a logical 'AND'. */
export type OnlineStatus_Bool_Exp = {
  _and?: Maybe<Array<Maybe<OnlineStatus_Bool_Exp>>>;
  _not?: Maybe<OnlineStatus_Bool_Exp>;
  _or?: Maybe<Array<Maybe<OnlineStatus_Bool_Exp>>>;
  id?: Maybe<Uuid_Comparison_Exp>;
  isIncognito?: Maybe<Boolean_Comparison_Exp>;
  lastSeen?: Maybe<Timestamptz_Comparison_Exp>;
  user?: Maybe<User_Bool_Exp>;
  userId?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "OnlineStatus" */
export enum OnlineStatus_Constraint {
  /** unique or primary key constraint */
  OnlineStatusPkey = 'OnlineStatus_pkey',
  /** unique or primary key constraint */
  OnlineStatusUserIdKey = 'OnlineStatus_userId_key'
}

/** input type for inserting data into table "OnlineStatus" */
export type OnlineStatus_Insert_Input = {
  id?: Maybe<Scalars['uuid']>;
  isIncognito?: Maybe<Scalars['Boolean']>;
  lastSeen?: Maybe<Scalars['timestamptz']>;
  user?: Maybe<User_Obj_Rel_Insert_Input>;
  userId?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type OnlineStatus_Max_Fields = {
  __typename?: 'OnlineStatus_max_fields';
  id?: Maybe<Scalars['uuid']>;
  lastSeen?: Maybe<Scalars['timestamptz']>;
  userId?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "OnlineStatus" */
export type OnlineStatus_Max_Order_By = {
  id?: Maybe<Order_By>;
  lastSeen?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type OnlineStatus_Min_Fields = {
  __typename?: 'OnlineStatus_min_fields';
  id?: Maybe<Scalars['uuid']>;
  lastSeen?: Maybe<Scalars['timestamptz']>;
  userId?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "OnlineStatus" */
export type OnlineStatus_Min_Order_By = {
  id?: Maybe<Order_By>;
  lastSeen?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

/** response of any mutation on the table "OnlineStatus" */
export type OnlineStatus_Mutation_Response = {
  __typename?: 'OnlineStatus_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<OnlineStatus>;
};

/** input type for inserting object relation for remote table "OnlineStatus" */
export type OnlineStatus_Obj_Rel_Insert_Input = {
  data: OnlineStatus_Insert_Input;
  on_conflict?: Maybe<OnlineStatus_On_Conflict>;
};

/** on conflict condition type for table "OnlineStatus" */
export type OnlineStatus_On_Conflict = {
  constraint: OnlineStatus_Constraint;
  update_columns: Array<OnlineStatus_Update_Column>;
  where?: Maybe<OnlineStatus_Bool_Exp>;
};

/** ordering options when selecting data from "OnlineStatus" */
export type OnlineStatus_Order_By = {
  id?: Maybe<Order_By>;
  isIncognito?: Maybe<Order_By>;
  lastSeen?: Maybe<Order_By>;
  user?: Maybe<User_Order_By>;
  userId?: Maybe<Order_By>;
};

/** primary key columns input for table: "OnlineStatus" */
export type OnlineStatus_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "OnlineStatus" */
export enum OnlineStatus_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  IsIncognito = 'isIncognito',
  /** column name */
  LastSeen = 'lastSeen',
  /** column name */
  UserId = 'userId'
}

/** input type for updating data in table "OnlineStatus" */
export type OnlineStatus_Set_Input = {
  id?: Maybe<Scalars['uuid']>;
  isIncognito?: Maybe<Scalars['Boolean']>;
  lastSeen?: Maybe<Scalars['timestamptz']>;
  userId?: Maybe<Scalars['String']>;
};

/** update columns of table "OnlineStatus" */
export enum OnlineStatus_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  IsIncognito = 'isIncognito',
  /** column name */
  LastSeen = 'lastSeen',
  /** column name */
  UserId = 'userId'
}

/** columns and relationships of "PinnedChat" */
export type PinnedChat = {
  __typename?: 'PinnedChat';
  /** An object relationship */
  chat: Chat;
  chatId: Scalars['uuid'];
  id: Scalars['uuid'];
  manual: Scalars['Boolean'];
  /** An object relationship */
  user: User;
  userId: Scalars['String'];
};

/** aggregated selection of "PinnedChat" */
export type PinnedChat_Aggregate = {
  __typename?: 'PinnedChat_aggregate';
  aggregate?: Maybe<PinnedChat_Aggregate_Fields>;
  nodes: Array<PinnedChat>;
};

/** aggregate fields of "PinnedChat" */
export type PinnedChat_Aggregate_Fields = {
  __typename?: 'PinnedChat_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<PinnedChat_Max_Fields>;
  min?: Maybe<PinnedChat_Min_Fields>;
};


/** aggregate fields of "PinnedChat" */
export type PinnedChat_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<PinnedChat_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "PinnedChat" */
export type PinnedChat_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<PinnedChat_Max_Order_By>;
  min?: Maybe<PinnedChat_Min_Order_By>;
};

/** input type for inserting array relation for remote table "PinnedChat" */
export type PinnedChat_Arr_Rel_Insert_Input = {
  data: Array<PinnedChat_Insert_Input>;
  on_conflict?: Maybe<PinnedChat_On_Conflict>;
};

/** Boolean expression to filter rows from the table "PinnedChat". All fields are combined with a logical 'AND'. */
export type PinnedChat_Bool_Exp = {
  _and?: Maybe<Array<Maybe<PinnedChat_Bool_Exp>>>;
  _not?: Maybe<PinnedChat_Bool_Exp>;
  _or?: Maybe<Array<Maybe<PinnedChat_Bool_Exp>>>;
  chat?: Maybe<Chat_Bool_Exp>;
  chatId?: Maybe<Uuid_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  manual?: Maybe<Boolean_Comparison_Exp>;
  user?: Maybe<User_Bool_Exp>;
  userId?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "PinnedChat" */
export enum PinnedChat_Constraint {
  /** unique or primary key constraint */
  PinnedChatChatIdUserIdKey = 'PinnedChat_chatId_userId_key',
  /** unique or primary key constraint */
  PinnedChatPkey = 'PinnedChat_pkey'
}

/** input type for inserting data into table "PinnedChat" */
export type PinnedChat_Insert_Input = {
  chat?: Maybe<Chat_Obj_Rel_Insert_Input>;
  chatId?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  manual?: Maybe<Scalars['Boolean']>;
  user?: Maybe<User_Obj_Rel_Insert_Input>;
  userId?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type PinnedChat_Max_Fields = {
  __typename?: 'PinnedChat_max_fields';
  chatId?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  userId?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "PinnedChat" */
export type PinnedChat_Max_Order_By = {
  chatId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type PinnedChat_Min_Fields = {
  __typename?: 'PinnedChat_min_fields';
  chatId?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  userId?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "PinnedChat" */
export type PinnedChat_Min_Order_By = {
  chatId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

/** response of any mutation on the table "PinnedChat" */
export type PinnedChat_Mutation_Response = {
  __typename?: 'PinnedChat_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<PinnedChat>;
};

/** input type for inserting object relation for remote table "PinnedChat" */
export type PinnedChat_Obj_Rel_Insert_Input = {
  data: PinnedChat_Insert_Input;
  on_conflict?: Maybe<PinnedChat_On_Conflict>;
};

/** on conflict condition type for table "PinnedChat" */
export type PinnedChat_On_Conflict = {
  constraint: PinnedChat_Constraint;
  update_columns: Array<PinnedChat_Update_Column>;
  where?: Maybe<PinnedChat_Bool_Exp>;
};

/** ordering options when selecting data from "PinnedChat" */
export type PinnedChat_Order_By = {
  chat?: Maybe<Chat_Order_By>;
  chatId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  manual?: Maybe<Order_By>;
  user?: Maybe<User_Order_By>;
  userId?: Maybe<Order_By>;
};

/** primary key columns input for table: "PinnedChat" */
export type PinnedChat_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "PinnedChat" */
export enum PinnedChat_Select_Column {
  /** column name */
  ChatId = 'chatId',
  /** column name */
  Id = 'id',
  /** column name */
  Manual = 'manual',
  /** column name */
  UserId = 'userId'
}

/** input type for updating data in table "PinnedChat" */
export type PinnedChat_Set_Input = {
  chatId?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  manual?: Maybe<Scalars['Boolean']>;
  userId?: Maybe<Scalars['String']>;
};

/** update columns of table "PinnedChat" */
export enum PinnedChat_Update_Column {
  /** column name */
  ChatId = 'chatId',
  /** column name */
  Id = 'id',
  /** column name */
  Manual = 'manual',
  /** column name */
  UserId = 'userId'
}

export type ProtectedEchoOutput = {
  __typename?: 'ProtectedEchoOutput';
  message: Scalars['String'];
};

export type SampleInput = {
  password: Scalars['String'];
  username: Scalars['String'];
};

export type SampleOutput = {
  __typename?: 'SampleOutput';
  accessToken: Scalars['String'];
};

/** expression to compare columns of type String. All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: Maybe<Scalars['String']>;
  _gt?: Maybe<Scalars['String']>;
  _gte?: Maybe<Scalars['String']>;
  _ilike?: Maybe<Scalars['String']>;
  _in?: Maybe<Array<Scalars['String']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _like?: Maybe<Scalars['String']>;
  _lt?: Maybe<Scalars['String']>;
  _lte?: Maybe<Scalars['String']>;
  _neq?: Maybe<Scalars['String']>;
  _nilike?: Maybe<Scalars['String']>;
  _nin?: Maybe<Array<Scalars['String']>>;
  _nlike?: Maybe<Scalars['String']>;
  _nsimilar?: Maybe<Scalars['String']>;
  _similar?: Maybe<Scalars['String']>;
};

/** columns and relationships of "User" */
export type User = {
  __typename?: 'User';
  /** An array relationship */
  chats: Array<Chat>;
  /** An aggregated array relationship */
  chats_aggregate: Chat_Aggregate;
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  firstName: Scalars['String'];
  /** An array relationship */
  flaggedMessages: Array<FlaggedChatMessage>;
  /** An aggregated array relationship */
  flaggedMessages_aggregate: FlaggedChatMessage_Aggregate;
  /** An array relationship */
  followedChats: Array<FollowedChat>;
  /** An aggregated array relationship */
  followedChats_aggregate: FollowedChat_Aggregate;
  id: Scalars['String'];
  lastLoggedInAt?: Maybe<Scalars['timestamptz']>;
  lastName: Scalars['String'];
  /** An array relationship */
  memberOfChats: Array<ChatMember>;
  /** An aggregated array relationship */
  memberOfChats_aggregate: ChatMember_Aggregate;
  /** An array relationship */
  moderatorOfChats: Array<ChatModerator>;
  /** An aggregated array relationship */
  moderatorOfChats_aggregate: ChatModerator_Aggregate;
  /** An object relationship */
  onlineStatus?: Maybe<OnlineStatus>;
  /** An array relationship */
  pinnedChats: Array<PinnedChat>;
  /** An aggregated array relationship */
  pinnedChats_aggregate: PinnedChat_Aggregate;
  /** An array relationship */
  reactions: Array<ChatReaction>;
  /** An aggregated array relationship */
  reactions_aggregate: ChatReaction_Aggregate;
  /** An array relationship */
  sentMessages: Array<ChatMessage>;
  /** An aggregated array relationship */
  sentMessages_aggregate: ChatMessage_Aggregate;
  status: Scalars['String'];
  /** An array relationship */
  typingInChats: Array<ChatTyper>;
  /** An aggregated array relationship */
  typingInChats_aggregate: ChatTyper_Aggregate;
  /** An array relationship */
  unreadIndices: Array<ChatUnreadIndex>;
  /** An aggregated array relationship */
  unreadIndices_aggregate: ChatUnreadIndex_Aggregate;
  updated_at?: Maybe<Scalars['timestamptz']>;
  /** An array relationship */
  viewingChats: Array<ChatViewer>;
  /** An aggregated array relationship */
  viewingChats_aggregate: ChatViewer_Aggregate;
};


/** columns and relationships of "User" */
export type UserChatsArgs = {
  distinct_on?: Maybe<Array<Chat_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Chat_Order_By>>;
  where?: Maybe<Chat_Bool_Exp>;
};


/** columns and relationships of "User" */
export type UserChats_AggregateArgs = {
  distinct_on?: Maybe<Array<Chat_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Chat_Order_By>>;
  where?: Maybe<Chat_Bool_Exp>;
};


/** columns and relationships of "User" */
export type UserFlaggedMessagesArgs = {
  distinct_on?: Maybe<Array<FlaggedChatMessage_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<FlaggedChatMessage_Order_By>>;
  where?: Maybe<FlaggedChatMessage_Bool_Exp>;
};


/** columns and relationships of "User" */
export type UserFlaggedMessages_AggregateArgs = {
  distinct_on?: Maybe<Array<FlaggedChatMessage_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<FlaggedChatMessage_Order_By>>;
  where?: Maybe<FlaggedChatMessage_Bool_Exp>;
};


/** columns and relationships of "User" */
export type UserFollowedChatsArgs = {
  distinct_on?: Maybe<Array<FollowedChat_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<FollowedChat_Order_By>>;
  where?: Maybe<FollowedChat_Bool_Exp>;
};


/** columns and relationships of "User" */
export type UserFollowedChats_AggregateArgs = {
  distinct_on?: Maybe<Array<FollowedChat_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<FollowedChat_Order_By>>;
  where?: Maybe<FollowedChat_Bool_Exp>;
};


/** columns and relationships of "User" */
export type UserMemberOfChatsArgs = {
  distinct_on?: Maybe<Array<ChatMember_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<ChatMember_Order_By>>;
  where?: Maybe<ChatMember_Bool_Exp>;
};


/** columns and relationships of "User" */
export type UserMemberOfChats_AggregateArgs = {
  distinct_on?: Maybe<Array<ChatMember_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<ChatMember_Order_By>>;
  where?: Maybe<ChatMember_Bool_Exp>;
};


/** columns and relationships of "User" */
export type UserModeratorOfChatsArgs = {
  distinct_on?: Maybe<Array<ChatModerator_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<ChatModerator_Order_By>>;
  where?: Maybe<ChatModerator_Bool_Exp>;
};


/** columns and relationships of "User" */
export type UserModeratorOfChats_AggregateArgs = {
  distinct_on?: Maybe<Array<ChatModerator_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<ChatModerator_Order_By>>;
  where?: Maybe<ChatModerator_Bool_Exp>;
};


/** columns and relationships of "User" */
export type UserPinnedChatsArgs = {
  distinct_on?: Maybe<Array<PinnedChat_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<PinnedChat_Order_By>>;
  where?: Maybe<PinnedChat_Bool_Exp>;
};


/** columns and relationships of "User" */
export type UserPinnedChats_AggregateArgs = {
  distinct_on?: Maybe<Array<PinnedChat_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<PinnedChat_Order_By>>;
  where?: Maybe<PinnedChat_Bool_Exp>;
};


/** columns and relationships of "User" */
export type UserReactionsArgs = {
  distinct_on?: Maybe<Array<ChatReaction_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<ChatReaction_Order_By>>;
  where?: Maybe<ChatReaction_Bool_Exp>;
};


/** columns and relationships of "User" */
export type UserReactions_AggregateArgs = {
  distinct_on?: Maybe<Array<ChatReaction_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<ChatReaction_Order_By>>;
  where?: Maybe<ChatReaction_Bool_Exp>;
};


/** columns and relationships of "User" */
export type UserSentMessagesArgs = {
  distinct_on?: Maybe<Array<ChatMessage_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<ChatMessage_Order_By>>;
  where?: Maybe<ChatMessage_Bool_Exp>;
};


/** columns and relationships of "User" */
export type UserSentMessages_AggregateArgs = {
  distinct_on?: Maybe<Array<ChatMessage_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<ChatMessage_Order_By>>;
  where?: Maybe<ChatMessage_Bool_Exp>;
};


/** columns and relationships of "User" */
export type UserTypingInChatsArgs = {
  distinct_on?: Maybe<Array<ChatTyper_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<ChatTyper_Order_By>>;
  where?: Maybe<ChatTyper_Bool_Exp>;
};


/** columns and relationships of "User" */
export type UserTypingInChats_AggregateArgs = {
  distinct_on?: Maybe<Array<ChatTyper_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<ChatTyper_Order_By>>;
  where?: Maybe<ChatTyper_Bool_Exp>;
};


/** columns and relationships of "User" */
export type UserUnreadIndicesArgs = {
  distinct_on?: Maybe<Array<ChatUnreadIndex_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<ChatUnreadIndex_Order_By>>;
  where?: Maybe<ChatUnreadIndex_Bool_Exp>;
};


/** columns and relationships of "User" */
export type UserUnreadIndices_AggregateArgs = {
  distinct_on?: Maybe<Array<ChatUnreadIndex_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<ChatUnreadIndex_Order_By>>;
  where?: Maybe<ChatUnreadIndex_Bool_Exp>;
};


/** columns and relationships of "User" */
export type UserViewingChatsArgs = {
  distinct_on?: Maybe<Array<ChatViewer_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<ChatViewer_Order_By>>;
  where?: Maybe<ChatViewer_Bool_Exp>;
};


/** columns and relationships of "User" */
export type UserViewingChats_AggregateArgs = {
  distinct_on?: Maybe<Array<ChatViewer_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<ChatViewer_Order_By>>;
  where?: Maybe<ChatViewer_Bool_Exp>;
};

/** aggregated selection of "User" */
export type User_Aggregate = {
  __typename?: 'User_aggregate';
  aggregate?: Maybe<User_Aggregate_Fields>;
  nodes: Array<User>;
};

/** aggregate fields of "User" */
export type User_Aggregate_Fields = {
  __typename?: 'User_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<User_Max_Fields>;
  min?: Maybe<User_Min_Fields>;
};


/** aggregate fields of "User" */
export type User_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<User_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "User" */
export type User_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<User_Max_Order_By>;
  min?: Maybe<User_Min_Order_By>;
};

/** input type for inserting array relation for remote table "User" */
export type User_Arr_Rel_Insert_Input = {
  data: Array<User_Insert_Input>;
  on_conflict?: Maybe<User_On_Conflict>;
};

/** Boolean expression to filter rows from the table "User". All fields are combined with a logical 'AND'. */
export type User_Bool_Exp = {
  _and?: Maybe<Array<Maybe<User_Bool_Exp>>>;
  _not?: Maybe<User_Bool_Exp>;
  _or?: Maybe<Array<Maybe<User_Bool_Exp>>>;
  chats?: Maybe<Chat_Bool_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  email?: Maybe<String_Comparison_Exp>;
  firstName?: Maybe<String_Comparison_Exp>;
  flaggedMessages?: Maybe<FlaggedChatMessage_Bool_Exp>;
  followedChats?: Maybe<FollowedChat_Bool_Exp>;
  id?: Maybe<String_Comparison_Exp>;
  lastLoggedInAt?: Maybe<Timestamptz_Comparison_Exp>;
  lastName?: Maybe<String_Comparison_Exp>;
  memberOfChats?: Maybe<ChatMember_Bool_Exp>;
  moderatorOfChats?: Maybe<ChatModerator_Bool_Exp>;
  onlineStatus?: Maybe<OnlineStatus_Bool_Exp>;
  pinnedChats?: Maybe<PinnedChat_Bool_Exp>;
  reactions?: Maybe<ChatReaction_Bool_Exp>;
  sentMessages?: Maybe<ChatMessage_Bool_Exp>;
  status?: Maybe<String_Comparison_Exp>;
  typingInChats?: Maybe<ChatTyper_Bool_Exp>;
  unreadIndices?: Maybe<ChatUnreadIndex_Bool_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  viewingChats?: Maybe<ChatViewer_Bool_Exp>;
};

/** unique or primary key constraints on table "User" */
export enum User_Constraint {
  /** unique or primary key constraint */
  UserEmailKey = 'user_email_key',
  /** unique or primary key constraint */
  UserPkey = 'user_pkey'
}

/** input type for inserting data into table "User" */
export type User_Insert_Input = {
  chats?: Maybe<Chat_Arr_Rel_Insert_Input>;
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  flaggedMessages?: Maybe<FlaggedChatMessage_Arr_Rel_Insert_Input>;
  followedChats?: Maybe<FollowedChat_Arr_Rel_Insert_Input>;
  id?: Maybe<Scalars['String']>;
  lastLoggedInAt?: Maybe<Scalars['timestamptz']>;
  lastName?: Maybe<Scalars['String']>;
  memberOfChats?: Maybe<ChatMember_Arr_Rel_Insert_Input>;
  moderatorOfChats?: Maybe<ChatModerator_Arr_Rel_Insert_Input>;
  onlineStatus?: Maybe<OnlineStatus_Obj_Rel_Insert_Input>;
  pinnedChats?: Maybe<PinnedChat_Arr_Rel_Insert_Input>;
  reactions?: Maybe<ChatReaction_Arr_Rel_Insert_Input>;
  sentMessages?: Maybe<ChatMessage_Arr_Rel_Insert_Input>;
  status?: Maybe<Scalars['String']>;
  typingInChats?: Maybe<ChatTyper_Arr_Rel_Insert_Input>;
  unreadIndices?: Maybe<ChatUnreadIndex_Arr_Rel_Insert_Input>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  viewingChats?: Maybe<ChatViewer_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type User_Max_Fields = {
  __typename?: 'User_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  lastLoggedInAt?: Maybe<Scalars['timestamptz']>;
  lastName?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "User" */
export type User_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  firstName?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  lastLoggedInAt?: Maybe<Order_By>;
  lastName?: Maybe<Order_By>;
  status?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type User_Min_Fields = {
  __typename?: 'User_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  lastLoggedInAt?: Maybe<Scalars['timestamptz']>;
  lastName?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "User" */
export type User_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  firstName?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  lastLoggedInAt?: Maybe<Order_By>;
  lastName?: Maybe<Order_By>;
  status?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** response of any mutation on the table "User" */
export type User_Mutation_Response = {
  __typename?: 'User_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<User>;
};

/** input type for inserting object relation for remote table "User" */
export type User_Obj_Rel_Insert_Input = {
  data: User_Insert_Input;
  on_conflict?: Maybe<User_On_Conflict>;
};

/** on conflict condition type for table "User" */
export type User_On_Conflict = {
  constraint: User_Constraint;
  update_columns: Array<User_Update_Column>;
  where?: Maybe<User_Bool_Exp>;
};

/** ordering options when selecting data from "User" */
export type User_Order_By = {
  chats_aggregate?: Maybe<Chat_Aggregate_Order_By>;
  created_at?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  firstName?: Maybe<Order_By>;
  flaggedMessages_aggregate?: Maybe<FlaggedChatMessage_Aggregate_Order_By>;
  followedChats_aggregate?: Maybe<FollowedChat_Aggregate_Order_By>;
  id?: Maybe<Order_By>;
  lastLoggedInAt?: Maybe<Order_By>;
  lastName?: Maybe<Order_By>;
  memberOfChats_aggregate?: Maybe<ChatMember_Aggregate_Order_By>;
  moderatorOfChats_aggregate?: Maybe<ChatModerator_Aggregate_Order_By>;
  onlineStatus?: Maybe<OnlineStatus_Order_By>;
  pinnedChats_aggregate?: Maybe<PinnedChat_Aggregate_Order_By>;
  reactions_aggregate?: Maybe<ChatReaction_Aggregate_Order_By>;
  sentMessages_aggregate?: Maybe<ChatMessage_Aggregate_Order_By>;
  status?: Maybe<Order_By>;
  typingInChats_aggregate?: Maybe<ChatTyper_Aggregate_Order_By>;
  unreadIndices_aggregate?: Maybe<ChatUnreadIndex_Aggregate_Order_By>;
  updated_at?: Maybe<Order_By>;
  viewingChats_aggregate?: Maybe<ChatViewer_Aggregate_Order_By>;
};

/** primary key columns input for table: "User" */
export type User_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** select columns of table "User" */
export enum User_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  FirstName = 'firstName',
  /** column name */
  Id = 'id',
  /** column name */
  LastLoggedInAt = 'lastLoggedInAt',
  /** column name */
  LastName = 'lastName',
  /** column name */
  Status = 'status',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "User" */
export type User_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  lastLoggedInAt?: Maybe<Scalars['timestamptz']>;
  lastName?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** update columns of table "User" */
export enum User_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  FirstName = 'firstName',
  /** column name */
  Id = 'id',
  /** column name */
  LastLoggedInAt = 'lastLoggedInAt',
  /** column name */
  LastName = 'lastName',
  /** column name */
  Status = 'status',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** fields of action: "createChannel" */
export type CreateChannel = {
  __typename?: 'createChannel';
  /** the time at which this action was created */
  created_at?: Maybe<Scalars['timestamptz']>;
  /** errors related to the invocation */
  errors?: Maybe<Scalars['json']>;
  /** the unique id of an action */
  id?: Maybe<Scalars['uuid']>;
  /** the output fields of this action */
  output?: Maybe<CreateChannelOutput>;
};


/** expression to compare columns of type json. All fields are combined with logical 'AND'. */
export type Json_Comparison_Exp = {
  _eq?: Maybe<Scalars['json']>;
  _gt?: Maybe<Scalars['json']>;
  _gte?: Maybe<Scalars['json']>;
  _in?: Maybe<Array<Scalars['json']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['json']>;
  _lte?: Maybe<Scalars['json']>;
  _neq?: Maybe<Scalars['json']>;
  _nin?: Maybe<Array<Scalars['json']>>;
};


/** expression to compare columns of type jsonb. All fields are combined with logical 'AND'. */
export type Jsonb_Comparison_Exp = {
  /** is the column contained in the given json value */
  _contained_in?: Maybe<Scalars['jsonb']>;
  /** does the column contain the given json value at the top level */
  _contains?: Maybe<Scalars['jsonb']>;
  _eq?: Maybe<Scalars['jsonb']>;
  _gt?: Maybe<Scalars['jsonb']>;
  _gte?: Maybe<Scalars['jsonb']>;
  /** does the string exist as a top-level key in the column */
  _has_key?: Maybe<Scalars['String']>;
  /** do all of these strings exist as top-level keys in the column */
  _has_keys_all?: Maybe<Array<Scalars['String']>>;
  /** do any of these strings exist as top-level keys in the column */
  _has_keys_any?: Maybe<Array<Scalars['String']>>;
  _in?: Maybe<Array<Scalars['jsonb']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['jsonb']>;
  _lte?: Maybe<Scalars['jsonb']>;
  _neq?: Maybe<Scalars['jsonb']>;
  _nin?: Maybe<Array<Scalars['jsonb']>>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** perform the action: "createChannel" */
  createChannel: Scalars['uuid'];
  /** delete data from the table: "Channel" */
  delete_Channel?: Maybe<Channel_Mutation_Response>;
  /** delete single row from the table: "Channel" */
  delete_Channel_by_pk?: Maybe<Channel>;
  /** delete data from the table: "Chat" */
  delete_Chat?: Maybe<Chat_Mutation_Response>;
  /** delete data from the table: "ChatMember" */
  delete_ChatMember?: Maybe<ChatMember_Mutation_Response>;
  /** delete single row from the table: "ChatMember" */
  delete_ChatMember_by_pk?: Maybe<ChatMember>;
  /** delete data from the table: "ChatMessage" */
  delete_ChatMessage?: Maybe<ChatMessage_Mutation_Response>;
  /** delete single row from the table: "ChatMessage" */
  delete_ChatMessage_by_pk?: Maybe<ChatMessage>;
  /** delete data from the table: "ChatModerator" */
  delete_ChatModerator?: Maybe<ChatModerator_Mutation_Response>;
  /** delete single row from the table: "ChatModerator" */
  delete_ChatModerator_by_pk?: Maybe<ChatModerator>;
  /** delete data from the table: "ChatReaction" */
  delete_ChatReaction?: Maybe<ChatReaction_Mutation_Response>;
  /** delete single row from the table: "ChatReaction" */
  delete_ChatReaction_by_pk?: Maybe<ChatReaction>;
  /** delete data from the table: "ChatTyper" */
  delete_ChatTyper?: Maybe<ChatTyper_Mutation_Response>;
  /** delete single row from the table: "ChatTyper" */
  delete_ChatTyper_by_pk?: Maybe<ChatTyper>;
  /** delete data from the table: "ChatUnreadIndex" */
  delete_ChatUnreadIndex?: Maybe<ChatUnreadIndex_Mutation_Response>;
  /** delete single row from the table: "ChatUnreadIndex" */
  delete_ChatUnreadIndex_by_pk?: Maybe<ChatUnreadIndex>;
  /** delete data from the table: "ChatViewer" */
  delete_ChatViewer?: Maybe<ChatViewer_Mutation_Response>;
  /** delete single row from the table: "ChatViewer" */
  delete_ChatViewer_by_pk?: Maybe<ChatViewer>;
  /** delete single row from the table: "Chat" */
  delete_Chat_by_pk?: Maybe<Chat>;
  /** delete data from the table: "FlaggedChatMessage" */
  delete_FlaggedChatMessage?: Maybe<FlaggedChatMessage_Mutation_Response>;
  /** delete single row from the table: "FlaggedChatMessage" */
  delete_FlaggedChatMessage_by_pk?: Maybe<FlaggedChatMessage>;
  /** delete data from the table: "FollowedChat" */
  delete_FollowedChat?: Maybe<FollowedChat_Mutation_Response>;
  /** delete single row from the table: "FollowedChat" */
  delete_FollowedChat_by_pk?: Maybe<FollowedChat>;
  /** delete data from the table: "OnlineStatus" */
  delete_OnlineStatus?: Maybe<OnlineStatus_Mutation_Response>;
  /** delete single row from the table: "OnlineStatus" */
  delete_OnlineStatus_by_pk?: Maybe<OnlineStatus>;
  /** delete data from the table: "PinnedChat" */
  delete_PinnedChat?: Maybe<PinnedChat_Mutation_Response>;
  /** delete single row from the table: "PinnedChat" */
  delete_PinnedChat_by_pk?: Maybe<PinnedChat>;
  /** delete data from the table: "User" */
  delete_User?: Maybe<User_Mutation_Response>;
  /** delete single row from the table: "User" */
  delete_User_by_pk?: Maybe<User>;
  /** insert data into the table: "Channel" */
  insert_Channel?: Maybe<Channel_Mutation_Response>;
  /** insert a single row into the table: "Channel" */
  insert_Channel_one?: Maybe<Channel>;
  /** insert data into the table: "Chat" */
  insert_Chat?: Maybe<Chat_Mutation_Response>;
  /** insert data into the table: "ChatMember" */
  insert_ChatMember?: Maybe<ChatMember_Mutation_Response>;
  /** insert a single row into the table: "ChatMember" */
  insert_ChatMember_one?: Maybe<ChatMember>;
  /** insert data into the table: "ChatMessage" */
  insert_ChatMessage?: Maybe<ChatMessage_Mutation_Response>;
  /** insert a single row into the table: "ChatMessage" */
  insert_ChatMessage_one?: Maybe<ChatMessage>;
  /** insert data into the table: "ChatModerator" */
  insert_ChatModerator?: Maybe<ChatModerator_Mutation_Response>;
  /** insert a single row into the table: "ChatModerator" */
  insert_ChatModerator_one?: Maybe<ChatModerator>;
  /** insert data into the table: "ChatReaction" */
  insert_ChatReaction?: Maybe<ChatReaction_Mutation_Response>;
  /** insert a single row into the table: "ChatReaction" */
  insert_ChatReaction_one?: Maybe<ChatReaction>;
  /** insert data into the table: "ChatTyper" */
  insert_ChatTyper?: Maybe<ChatTyper_Mutation_Response>;
  /** insert a single row into the table: "ChatTyper" */
  insert_ChatTyper_one?: Maybe<ChatTyper>;
  /** insert data into the table: "ChatUnreadIndex" */
  insert_ChatUnreadIndex?: Maybe<ChatUnreadIndex_Mutation_Response>;
  /** insert a single row into the table: "ChatUnreadIndex" */
  insert_ChatUnreadIndex_one?: Maybe<ChatUnreadIndex>;
  /** insert data into the table: "ChatViewer" */
  insert_ChatViewer?: Maybe<ChatViewer_Mutation_Response>;
  /** insert a single row into the table: "ChatViewer" */
  insert_ChatViewer_one?: Maybe<ChatViewer>;
  /** insert a single row into the table: "Chat" */
  insert_Chat_one?: Maybe<Chat>;
  /** insert data into the table: "FlaggedChatMessage" */
  insert_FlaggedChatMessage?: Maybe<FlaggedChatMessage_Mutation_Response>;
  /** insert a single row into the table: "FlaggedChatMessage" */
  insert_FlaggedChatMessage_one?: Maybe<FlaggedChatMessage>;
  /** insert data into the table: "FollowedChat" */
  insert_FollowedChat?: Maybe<FollowedChat_Mutation_Response>;
  /** insert a single row into the table: "FollowedChat" */
  insert_FollowedChat_one?: Maybe<FollowedChat>;
  /** insert data into the table: "OnlineStatus" */
  insert_OnlineStatus?: Maybe<OnlineStatus_Mutation_Response>;
  /** insert a single row into the table: "OnlineStatus" */
  insert_OnlineStatus_one?: Maybe<OnlineStatus>;
  /** insert data into the table: "PinnedChat" */
  insert_PinnedChat?: Maybe<PinnedChat_Mutation_Response>;
  /** insert a single row into the table: "PinnedChat" */
  insert_PinnedChat_one?: Maybe<PinnedChat>;
  /** insert data into the table: "User" */
  insert_User?: Maybe<User_Mutation_Response>;
  /** insert a single row into the table: "User" */
  insert_User_one?: Maybe<User>;
  /** update data of the table: "Channel" */
  update_Channel?: Maybe<Channel_Mutation_Response>;
  /** update single row of the table: "Channel" */
  update_Channel_by_pk?: Maybe<Channel>;
  /** update data of the table: "Chat" */
  update_Chat?: Maybe<Chat_Mutation_Response>;
  /** update data of the table: "ChatMember" */
  update_ChatMember?: Maybe<ChatMember_Mutation_Response>;
  /** update single row of the table: "ChatMember" */
  update_ChatMember_by_pk?: Maybe<ChatMember>;
  /** update data of the table: "ChatMessage" */
  update_ChatMessage?: Maybe<ChatMessage_Mutation_Response>;
  /** update single row of the table: "ChatMessage" */
  update_ChatMessage_by_pk?: Maybe<ChatMessage>;
  /** update data of the table: "ChatModerator" */
  update_ChatModerator?: Maybe<ChatModerator_Mutation_Response>;
  /** update single row of the table: "ChatModerator" */
  update_ChatModerator_by_pk?: Maybe<ChatModerator>;
  /** update data of the table: "ChatReaction" */
  update_ChatReaction?: Maybe<ChatReaction_Mutation_Response>;
  /** update single row of the table: "ChatReaction" */
  update_ChatReaction_by_pk?: Maybe<ChatReaction>;
  /** update data of the table: "ChatTyper" */
  update_ChatTyper?: Maybe<ChatTyper_Mutation_Response>;
  /** update single row of the table: "ChatTyper" */
  update_ChatTyper_by_pk?: Maybe<ChatTyper>;
  /** update data of the table: "ChatUnreadIndex" */
  update_ChatUnreadIndex?: Maybe<ChatUnreadIndex_Mutation_Response>;
  /** update single row of the table: "ChatUnreadIndex" */
  update_ChatUnreadIndex_by_pk?: Maybe<ChatUnreadIndex>;
  /** update data of the table: "ChatViewer" */
  update_ChatViewer?: Maybe<ChatViewer_Mutation_Response>;
  /** update single row of the table: "ChatViewer" */
  update_ChatViewer_by_pk?: Maybe<ChatViewer>;
  /** update single row of the table: "Chat" */
  update_Chat_by_pk?: Maybe<Chat>;
  /** update data of the table: "FlaggedChatMessage" */
  update_FlaggedChatMessage?: Maybe<FlaggedChatMessage_Mutation_Response>;
  /** update single row of the table: "FlaggedChatMessage" */
  update_FlaggedChatMessage_by_pk?: Maybe<FlaggedChatMessage>;
  /** update data of the table: "FollowedChat" */
  update_FollowedChat?: Maybe<FollowedChat_Mutation_Response>;
  /** update single row of the table: "FollowedChat" */
  update_FollowedChat_by_pk?: Maybe<FollowedChat>;
  /** update data of the table: "OnlineStatus" */
  update_OnlineStatus?: Maybe<OnlineStatus_Mutation_Response>;
  /** update single row of the table: "OnlineStatus" */
  update_OnlineStatus_by_pk?: Maybe<OnlineStatus>;
  /** update data of the table: "PinnedChat" */
  update_PinnedChat?: Maybe<PinnedChat_Mutation_Response>;
  /** update single row of the table: "PinnedChat" */
  update_PinnedChat_by_pk?: Maybe<PinnedChat>;
  /** update data of the table: "User" */
  update_User?: Maybe<User_Mutation_Response>;
  /** update single row of the table: "User" */
  update_User_by_pk?: Maybe<User>;
};


/** mutation root */
export type Mutation_RootCreateChannelArgs = {
  name: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_ChannelArgs = {
  where: Channel_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Channel_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_ChatArgs = {
  where: Chat_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_ChatMemberArgs = {
  where: ChatMember_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_ChatMember_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_ChatMessageArgs = {
  where: ChatMessage_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_ChatMessage_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_ChatModeratorArgs = {
  where: ChatModerator_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_ChatModerator_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_ChatReactionArgs = {
  where: ChatReaction_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_ChatReaction_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_ChatTyperArgs = {
  where: ChatTyper_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_ChatTyper_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_ChatUnreadIndexArgs = {
  where: ChatUnreadIndex_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_ChatUnreadIndex_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_ChatViewerArgs = {
  where: ChatViewer_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_ChatViewer_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Chat_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_FlaggedChatMessageArgs = {
  where: FlaggedChatMessage_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_FlaggedChatMessage_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_FollowedChatArgs = {
  where: FollowedChat_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_FollowedChat_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_OnlineStatusArgs = {
  where: OnlineStatus_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_OnlineStatus_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_PinnedChatArgs = {
  where: PinnedChat_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_PinnedChat_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_UserArgs = {
  where: User_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_User_By_PkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootInsert_ChannelArgs = {
  objects: Array<Channel_Insert_Input>;
  on_conflict?: Maybe<Channel_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Channel_OneArgs = {
  object: Channel_Insert_Input;
  on_conflict?: Maybe<Channel_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ChatArgs = {
  objects: Array<Chat_Insert_Input>;
  on_conflict?: Maybe<Chat_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ChatMemberArgs = {
  objects: Array<ChatMember_Insert_Input>;
  on_conflict?: Maybe<ChatMember_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ChatMember_OneArgs = {
  object: ChatMember_Insert_Input;
  on_conflict?: Maybe<ChatMember_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ChatMessageArgs = {
  objects: Array<ChatMessage_Insert_Input>;
  on_conflict?: Maybe<ChatMessage_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ChatMessage_OneArgs = {
  object: ChatMessage_Insert_Input;
  on_conflict?: Maybe<ChatMessage_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ChatModeratorArgs = {
  objects: Array<ChatModerator_Insert_Input>;
  on_conflict?: Maybe<ChatModerator_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ChatModerator_OneArgs = {
  object: ChatModerator_Insert_Input;
  on_conflict?: Maybe<ChatModerator_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ChatReactionArgs = {
  objects: Array<ChatReaction_Insert_Input>;
  on_conflict?: Maybe<ChatReaction_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ChatReaction_OneArgs = {
  object: ChatReaction_Insert_Input;
  on_conflict?: Maybe<ChatReaction_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ChatTyperArgs = {
  objects: Array<ChatTyper_Insert_Input>;
  on_conflict?: Maybe<ChatTyper_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ChatTyper_OneArgs = {
  object: ChatTyper_Insert_Input;
  on_conflict?: Maybe<ChatTyper_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ChatUnreadIndexArgs = {
  objects: Array<ChatUnreadIndex_Insert_Input>;
  on_conflict?: Maybe<ChatUnreadIndex_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ChatUnreadIndex_OneArgs = {
  object: ChatUnreadIndex_Insert_Input;
  on_conflict?: Maybe<ChatUnreadIndex_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ChatViewerArgs = {
  objects: Array<ChatViewer_Insert_Input>;
  on_conflict?: Maybe<ChatViewer_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ChatViewer_OneArgs = {
  object: ChatViewer_Insert_Input;
  on_conflict?: Maybe<ChatViewer_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Chat_OneArgs = {
  object: Chat_Insert_Input;
  on_conflict?: Maybe<Chat_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_FlaggedChatMessageArgs = {
  objects: Array<FlaggedChatMessage_Insert_Input>;
  on_conflict?: Maybe<FlaggedChatMessage_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_FlaggedChatMessage_OneArgs = {
  object: FlaggedChatMessage_Insert_Input;
  on_conflict?: Maybe<FlaggedChatMessage_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_FollowedChatArgs = {
  objects: Array<FollowedChat_Insert_Input>;
  on_conflict?: Maybe<FollowedChat_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_FollowedChat_OneArgs = {
  object: FollowedChat_Insert_Input;
  on_conflict?: Maybe<FollowedChat_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_OnlineStatusArgs = {
  objects: Array<OnlineStatus_Insert_Input>;
  on_conflict?: Maybe<OnlineStatus_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_OnlineStatus_OneArgs = {
  object: OnlineStatus_Insert_Input;
  on_conflict?: Maybe<OnlineStatus_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_PinnedChatArgs = {
  objects: Array<PinnedChat_Insert_Input>;
  on_conflict?: Maybe<PinnedChat_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_PinnedChat_OneArgs = {
  object: PinnedChat_Insert_Input;
  on_conflict?: Maybe<PinnedChat_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_UserArgs = {
  objects: Array<User_Insert_Input>;
  on_conflict?: Maybe<User_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_OneArgs = {
  object: User_Insert_Input;
  on_conflict?: Maybe<User_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_ChannelArgs = {
  _set?: Maybe<Channel_Set_Input>;
  where: Channel_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Channel_By_PkArgs = {
  _set?: Maybe<Channel_Set_Input>;
  pk_columns: Channel_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_ChatArgs = {
  _set?: Maybe<Chat_Set_Input>;
  where: Chat_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_ChatMemberArgs = {
  _set?: Maybe<ChatMember_Set_Input>;
  where: ChatMember_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_ChatMember_By_PkArgs = {
  _set?: Maybe<ChatMember_Set_Input>;
  pk_columns: ChatMember_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_ChatMessageArgs = {
  _append?: Maybe<ChatMessage_Append_Input>;
  _delete_at_path?: Maybe<ChatMessage_Delete_At_Path_Input>;
  _delete_elem?: Maybe<ChatMessage_Delete_Elem_Input>;
  _delete_key?: Maybe<ChatMessage_Delete_Key_Input>;
  _inc?: Maybe<ChatMessage_Inc_Input>;
  _prepend?: Maybe<ChatMessage_Prepend_Input>;
  _set?: Maybe<ChatMessage_Set_Input>;
  where: ChatMessage_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_ChatMessage_By_PkArgs = {
  _append?: Maybe<ChatMessage_Append_Input>;
  _delete_at_path?: Maybe<ChatMessage_Delete_At_Path_Input>;
  _delete_elem?: Maybe<ChatMessage_Delete_Elem_Input>;
  _delete_key?: Maybe<ChatMessage_Delete_Key_Input>;
  _inc?: Maybe<ChatMessage_Inc_Input>;
  _prepend?: Maybe<ChatMessage_Prepend_Input>;
  _set?: Maybe<ChatMessage_Set_Input>;
  pk_columns: ChatMessage_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_ChatModeratorArgs = {
  _set?: Maybe<ChatModerator_Set_Input>;
  where: ChatModerator_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_ChatModerator_By_PkArgs = {
  _set?: Maybe<ChatModerator_Set_Input>;
  pk_columns: ChatModerator_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_ChatReactionArgs = {
  _set?: Maybe<ChatReaction_Set_Input>;
  where: ChatReaction_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_ChatReaction_By_PkArgs = {
  _set?: Maybe<ChatReaction_Set_Input>;
  pk_columns: ChatReaction_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_ChatTyperArgs = {
  _set?: Maybe<ChatTyper_Set_Input>;
  where: ChatTyper_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_ChatTyper_By_PkArgs = {
  _set?: Maybe<ChatTyper_Set_Input>;
  pk_columns: ChatTyper_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_ChatUnreadIndexArgs = {
  _inc?: Maybe<ChatUnreadIndex_Inc_Input>;
  _set?: Maybe<ChatUnreadIndex_Set_Input>;
  where: ChatUnreadIndex_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_ChatUnreadIndex_By_PkArgs = {
  _inc?: Maybe<ChatUnreadIndex_Inc_Input>;
  _set?: Maybe<ChatUnreadIndex_Set_Input>;
  pk_columns: ChatUnreadIndex_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_ChatViewerArgs = {
  _set?: Maybe<ChatViewer_Set_Input>;
  where: ChatViewer_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_ChatViewer_By_PkArgs = {
  _set?: Maybe<ChatViewer_Set_Input>;
  pk_columns: ChatViewer_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Chat_By_PkArgs = {
  _set?: Maybe<Chat_Set_Input>;
  pk_columns: Chat_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_FlaggedChatMessageArgs = {
  _set?: Maybe<FlaggedChatMessage_Set_Input>;
  where: FlaggedChatMessage_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_FlaggedChatMessage_By_PkArgs = {
  _set?: Maybe<FlaggedChatMessage_Set_Input>;
  pk_columns: FlaggedChatMessage_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_FollowedChatArgs = {
  _set?: Maybe<FollowedChat_Set_Input>;
  where: FollowedChat_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_FollowedChat_By_PkArgs = {
  _set?: Maybe<FollowedChat_Set_Input>;
  pk_columns: FollowedChat_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_OnlineStatusArgs = {
  _set?: Maybe<OnlineStatus_Set_Input>;
  where: OnlineStatus_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_OnlineStatus_By_PkArgs = {
  _set?: Maybe<OnlineStatus_Set_Input>;
  pk_columns: OnlineStatus_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_PinnedChatArgs = {
  _set?: Maybe<PinnedChat_Set_Input>;
  where: PinnedChat_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_PinnedChat_By_PkArgs = {
  _set?: Maybe<PinnedChat_Set_Input>;
  pk_columns: PinnedChat_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_UserArgs = {
  _set?: Maybe<User_Set_Input>;
  where: User_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_User_By_PkArgs = {
  _set?: Maybe<User_Set_Input>;
  pk_columns: User_Pk_Columns_Input;
};

/** column ordering options */
export enum Order_By {
  /** in the ascending order, nulls last */
  Asc = 'asc',
  /** in the ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in the ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in the descending order, nulls first */
  Desc = 'desc',
  /** in the descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in the descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** query root */
export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "Channel" */
  Channel: Array<Channel>;
  /** fetch aggregated fields from the table: "Channel" */
  Channel_aggregate: Channel_Aggregate;
  /** fetch data from the table: "Channel" using primary key columns */
  Channel_by_pk?: Maybe<Channel>;
  /** fetch data from the table: "Chat" */
  Chat: Array<Chat>;
  /** fetch data from the table: "ChatMember" */
  ChatMember: Array<ChatMember>;
  /** fetch aggregated fields from the table: "ChatMember" */
  ChatMember_aggregate: ChatMember_Aggregate;
  /** fetch data from the table: "ChatMember" using primary key columns */
  ChatMember_by_pk?: Maybe<ChatMember>;
  /** fetch data from the table: "ChatMessage" */
  ChatMessage: Array<ChatMessage>;
  /** fetch aggregated fields from the table: "ChatMessage" */
  ChatMessage_aggregate: ChatMessage_Aggregate;
  /** fetch data from the table: "ChatMessage" using primary key columns */
  ChatMessage_by_pk?: Maybe<ChatMessage>;
  /** fetch data from the table: "ChatModerator" */
  ChatModerator: Array<ChatModerator>;
  /** fetch aggregated fields from the table: "ChatModerator" */
  ChatModerator_aggregate: ChatModerator_Aggregate;
  /** fetch data from the table: "ChatModerator" using primary key columns */
  ChatModerator_by_pk?: Maybe<ChatModerator>;
  /** fetch data from the table: "ChatReaction" */
  ChatReaction: Array<ChatReaction>;
  /** fetch aggregated fields from the table: "ChatReaction" */
  ChatReaction_aggregate: ChatReaction_Aggregate;
  /** fetch data from the table: "ChatReaction" using primary key columns */
  ChatReaction_by_pk?: Maybe<ChatReaction>;
  /** fetch data from the table: "ChatTyper" */
  ChatTyper: Array<ChatTyper>;
  /** fetch aggregated fields from the table: "ChatTyper" */
  ChatTyper_aggregate: ChatTyper_Aggregate;
  /** fetch data from the table: "ChatTyper" using primary key columns */
  ChatTyper_by_pk?: Maybe<ChatTyper>;
  /** fetch data from the table: "ChatUnreadIndex" */
  ChatUnreadIndex: Array<ChatUnreadIndex>;
  /** fetch aggregated fields from the table: "ChatUnreadIndex" */
  ChatUnreadIndex_aggregate: ChatUnreadIndex_Aggregate;
  /** fetch data from the table: "ChatUnreadIndex" using primary key columns */
  ChatUnreadIndex_by_pk?: Maybe<ChatUnreadIndex>;
  /** fetch data from the table: "ChatViewer" */
  ChatViewer: Array<ChatViewer>;
  /** fetch aggregated fields from the table: "ChatViewer" */
  ChatViewer_aggregate: ChatViewer_Aggregate;
  /** fetch data from the table: "ChatViewer" using primary key columns */
  ChatViewer_by_pk?: Maybe<ChatViewer>;
  /** fetch aggregated fields from the table: "Chat" */
  Chat_aggregate: Chat_Aggregate;
  /** fetch data from the table: "Chat" using primary key columns */
  Chat_by_pk?: Maybe<Chat>;
  /** fetch data from the table: "FlaggedChatMessage" */
  FlaggedChatMessage: Array<FlaggedChatMessage>;
  /** fetch aggregated fields from the table: "FlaggedChatMessage" */
  FlaggedChatMessage_aggregate: FlaggedChatMessage_Aggregate;
  /** fetch data from the table: "FlaggedChatMessage" using primary key columns */
  FlaggedChatMessage_by_pk?: Maybe<FlaggedChatMessage>;
  /** fetch data from the table: "FollowedChat" */
  FollowedChat: Array<FollowedChat>;
  /** fetch aggregated fields from the table: "FollowedChat" */
  FollowedChat_aggregate: FollowedChat_Aggregate;
  /** fetch data from the table: "FollowedChat" using primary key columns */
  FollowedChat_by_pk?: Maybe<FollowedChat>;
  /** fetch data from the table: "OnlineStatus" */
  OnlineStatus: Array<OnlineStatus>;
  /** fetch aggregated fields from the table: "OnlineStatus" */
  OnlineStatus_aggregate: OnlineStatus_Aggregate;
  /** fetch data from the table: "OnlineStatus" using primary key columns */
  OnlineStatus_by_pk?: Maybe<OnlineStatus>;
  /** fetch data from the table: "PinnedChat" */
  PinnedChat: Array<PinnedChat>;
  /** fetch aggregated fields from the table: "PinnedChat" */
  PinnedChat_aggregate: PinnedChat_Aggregate;
  /** fetch data from the table: "PinnedChat" using primary key columns */
  PinnedChat_by_pk?: Maybe<PinnedChat>;
  /** fetch data from the table: "User" */
  User: Array<User>;
  /** fetch aggregated fields from the table: "User" */
  User_aggregate: User_Aggregate;
  /** fetch data from the table: "User" using primary key columns */
  User_by_pk?: Maybe<User>;
  /** retrieve the result of action: "createChannel" */
  createChannel?: Maybe<CreateChannel>;
  /** perform the action: "echo" */
  echo?: Maybe<EchoOutput>;
  /** perform the action: "getChannelToken" */
  getChannelToken?: Maybe<GetChannelTokenOutput>;
  /** perform the action: "protectedEcho" */
  protectedEcho?: Maybe<ProtectedEchoOutput>;
};


/** query root */
export type Query_RootChannelArgs = {
  distinct_on?: Maybe<Array<Channel_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Channel_Order_By>>;
  where?: Maybe<Channel_Bool_Exp>;
};


/** query root */
export type Query_RootChannel_AggregateArgs = {
  distinct_on?: Maybe<Array<Channel_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Channel_Order_By>>;
  where?: Maybe<Channel_Bool_Exp>;
};


/** query root */
export type Query_RootChannel_By_PkArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type Query_RootChatArgs = {
  distinct_on?: Maybe<Array<Chat_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Chat_Order_By>>;
  where?: Maybe<Chat_Bool_Exp>;
};


/** query root */
export type Query_RootChatMemberArgs = {
  distinct_on?: Maybe<Array<ChatMember_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<ChatMember_Order_By>>;
  where?: Maybe<ChatMember_Bool_Exp>;
};


/** query root */
export type Query_RootChatMember_AggregateArgs = {
  distinct_on?: Maybe<Array<ChatMember_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<ChatMember_Order_By>>;
  where?: Maybe<ChatMember_Bool_Exp>;
};


/** query root */
export type Query_RootChatMember_By_PkArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type Query_RootChatMessageArgs = {
  distinct_on?: Maybe<Array<ChatMessage_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<ChatMessage_Order_By>>;
  where?: Maybe<ChatMessage_Bool_Exp>;
};


/** query root */
export type Query_RootChatMessage_AggregateArgs = {
  distinct_on?: Maybe<Array<ChatMessage_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<ChatMessage_Order_By>>;
  where?: Maybe<ChatMessage_Bool_Exp>;
};


/** query root */
export type Query_RootChatMessage_By_PkArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type Query_RootChatModeratorArgs = {
  distinct_on?: Maybe<Array<ChatModerator_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<ChatModerator_Order_By>>;
  where?: Maybe<ChatModerator_Bool_Exp>;
};


/** query root */
export type Query_RootChatModerator_AggregateArgs = {
  distinct_on?: Maybe<Array<ChatModerator_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<ChatModerator_Order_By>>;
  where?: Maybe<ChatModerator_Bool_Exp>;
};


/** query root */
export type Query_RootChatModerator_By_PkArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type Query_RootChatReactionArgs = {
  distinct_on?: Maybe<Array<ChatReaction_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<ChatReaction_Order_By>>;
  where?: Maybe<ChatReaction_Bool_Exp>;
};


/** query root */
export type Query_RootChatReaction_AggregateArgs = {
  distinct_on?: Maybe<Array<ChatReaction_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<ChatReaction_Order_By>>;
  where?: Maybe<ChatReaction_Bool_Exp>;
};


/** query root */
export type Query_RootChatReaction_By_PkArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type Query_RootChatTyperArgs = {
  distinct_on?: Maybe<Array<ChatTyper_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<ChatTyper_Order_By>>;
  where?: Maybe<ChatTyper_Bool_Exp>;
};


/** query root */
export type Query_RootChatTyper_AggregateArgs = {
  distinct_on?: Maybe<Array<ChatTyper_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<ChatTyper_Order_By>>;
  where?: Maybe<ChatTyper_Bool_Exp>;
};


/** query root */
export type Query_RootChatTyper_By_PkArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type Query_RootChatUnreadIndexArgs = {
  distinct_on?: Maybe<Array<ChatUnreadIndex_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<ChatUnreadIndex_Order_By>>;
  where?: Maybe<ChatUnreadIndex_Bool_Exp>;
};


/** query root */
export type Query_RootChatUnreadIndex_AggregateArgs = {
  distinct_on?: Maybe<Array<ChatUnreadIndex_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<ChatUnreadIndex_Order_By>>;
  where?: Maybe<ChatUnreadIndex_Bool_Exp>;
};


/** query root */
export type Query_RootChatUnreadIndex_By_PkArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type Query_RootChatViewerArgs = {
  distinct_on?: Maybe<Array<ChatViewer_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<ChatViewer_Order_By>>;
  where?: Maybe<ChatViewer_Bool_Exp>;
};


/** query root */
export type Query_RootChatViewer_AggregateArgs = {
  distinct_on?: Maybe<Array<ChatViewer_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<ChatViewer_Order_By>>;
  where?: Maybe<ChatViewer_Bool_Exp>;
};


/** query root */
export type Query_RootChatViewer_By_PkArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type Query_RootChat_AggregateArgs = {
  distinct_on?: Maybe<Array<Chat_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Chat_Order_By>>;
  where?: Maybe<Chat_Bool_Exp>;
};


/** query root */
export type Query_RootChat_By_PkArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type Query_RootFlaggedChatMessageArgs = {
  distinct_on?: Maybe<Array<FlaggedChatMessage_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<FlaggedChatMessage_Order_By>>;
  where?: Maybe<FlaggedChatMessage_Bool_Exp>;
};


/** query root */
export type Query_RootFlaggedChatMessage_AggregateArgs = {
  distinct_on?: Maybe<Array<FlaggedChatMessage_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<FlaggedChatMessage_Order_By>>;
  where?: Maybe<FlaggedChatMessage_Bool_Exp>;
};


/** query root */
export type Query_RootFlaggedChatMessage_By_PkArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type Query_RootFollowedChatArgs = {
  distinct_on?: Maybe<Array<FollowedChat_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<FollowedChat_Order_By>>;
  where?: Maybe<FollowedChat_Bool_Exp>;
};


/** query root */
export type Query_RootFollowedChat_AggregateArgs = {
  distinct_on?: Maybe<Array<FollowedChat_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<FollowedChat_Order_By>>;
  where?: Maybe<FollowedChat_Bool_Exp>;
};


/** query root */
export type Query_RootFollowedChat_By_PkArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type Query_RootOnlineStatusArgs = {
  distinct_on?: Maybe<Array<OnlineStatus_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<OnlineStatus_Order_By>>;
  where?: Maybe<OnlineStatus_Bool_Exp>;
};


/** query root */
export type Query_RootOnlineStatus_AggregateArgs = {
  distinct_on?: Maybe<Array<OnlineStatus_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<OnlineStatus_Order_By>>;
  where?: Maybe<OnlineStatus_Bool_Exp>;
};


/** query root */
export type Query_RootOnlineStatus_By_PkArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type Query_RootPinnedChatArgs = {
  distinct_on?: Maybe<Array<PinnedChat_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<PinnedChat_Order_By>>;
  where?: Maybe<PinnedChat_Bool_Exp>;
};


/** query root */
export type Query_RootPinnedChat_AggregateArgs = {
  distinct_on?: Maybe<Array<PinnedChat_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<PinnedChat_Order_By>>;
  where?: Maybe<PinnedChat_Bool_Exp>;
};


/** query root */
export type Query_RootPinnedChat_By_PkArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type Query_RootUserArgs = {
  distinct_on?: Maybe<Array<User_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Order_By>>;
  where?: Maybe<User_Bool_Exp>;
};


/** query root */
export type Query_RootUser_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Order_By>>;
  where?: Maybe<User_Bool_Exp>;
};


/** query root */
export type Query_RootUser_By_PkArgs = {
  id: Scalars['String'];
};


/** query root */
export type Query_RootCreateChannelArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type Query_RootEchoArgs = {
  message: Scalars['String'];
};


/** query root */
export type Query_RootGetChannelTokenArgs = {
  channelId: Scalars['uuid'];
};


/** query root */
export type Query_RootProtectedEchoArgs = {
  message: Scalars['String'];
};

/** subscription root */
export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "Channel" */
  Channel: Array<Channel>;
  /** fetch aggregated fields from the table: "Channel" */
  Channel_aggregate: Channel_Aggregate;
  /** fetch data from the table: "Channel" using primary key columns */
  Channel_by_pk?: Maybe<Channel>;
  /** fetch data from the table: "Chat" */
  Chat: Array<Chat>;
  /** fetch data from the table: "ChatMember" */
  ChatMember: Array<ChatMember>;
  /** fetch aggregated fields from the table: "ChatMember" */
  ChatMember_aggregate: ChatMember_Aggregate;
  /** fetch data from the table: "ChatMember" using primary key columns */
  ChatMember_by_pk?: Maybe<ChatMember>;
  /** fetch data from the table: "ChatMessage" */
  ChatMessage: Array<ChatMessage>;
  /** fetch aggregated fields from the table: "ChatMessage" */
  ChatMessage_aggregate: ChatMessage_Aggregate;
  /** fetch data from the table: "ChatMessage" using primary key columns */
  ChatMessage_by_pk?: Maybe<ChatMessage>;
  /** fetch data from the table: "ChatModerator" */
  ChatModerator: Array<ChatModerator>;
  /** fetch aggregated fields from the table: "ChatModerator" */
  ChatModerator_aggregate: ChatModerator_Aggregate;
  /** fetch data from the table: "ChatModerator" using primary key columns */
  ChatModerator_by_pk?: Maybe<ChatModerator>;
  /** fetch data from the table: "ChatReaction" */
  ChatReaction: Array<ChatReaction>;
  /** fetch aggregated fields from the table: "ChatReaction" */
  ChatReaction_aggregate: ChatReaction_Aggregate;
  /** fetch data from the table: "ChatReaction" using primary key columns */
  ChatReaction_by_pk?: Maybe<ChatReaction>;
  /** fetch data from the table: "ChatTyper" */
  ChatTyper: Array<ChatTyper>;
  /** fetch aggregated fields from the table: "ChatTyper" */
  ChatTyper_aggregate: ChatTyper_Aggregate;
  /** fetch data from the table: "ChatTyper" using primary key columns */
  ChatTyper_by_pk?: Maybe<ChatTyper>;
  /** fetch data from the table: "ChatUnreadIndex" */
  ChatUnreadIndex: Array<ChatUnreadIndex>;
  /** fetch aggregated fields from the table: "ChatUnreadIndex" */
  ChatUnreadIndex_aggregate: ChatUnreadIndex_Aggregate;
  /** fetch data from the table: "ChatUnreadIndex" using primary key columns */
  ChatUnreadIndex_by_pk?: Maybe<ChatUnreadIndex>;
  /** fetch data from the table: "ChatViewer" */
  ChatViewer: Array<ChatViewer>;
  /** fetch aggregated fields from the table: "ChatViewer" */
  ChatViewer_aggregate: ChatViewer_Aggregate;
  /** fetch data from the table: "ChatViewer" using primary key columns */
  ChatViewer_by_pk?: Maybe<ChatViewer>;
  /** fetch aggregated fields from the table: "Chat" */
  Chat_aggregate: Chat_Aggregate;
  /** fetch data from the table: "Chat" using primary key columns */
  Chat_by_pk?: Maybe<Chat>;
  /** fetch data from the table: "FlaggedChatMessage" */
  FlaggedChatMessage: Array<FlaggedChatMessage>;
  /** fetch aggregated fields from the table: "FlaggedChatMessage" */
  FlaggedChatMessage_aggregate: FlaggedChatMessage_Aggregate;
  /** fetch data from the table: "FlaggedChatMessage" using primary key columns */
  FlaggedChatMessage_by_pk?: Maybe<FlaggedChatMessage>;
  /** fetch data from the table: "FollowedChat" */
  FollowedChat: Array<FollowedChat>;
  /** fetch aggregated fields from the table: "FollowedChat" */
  FollowedChat_aggregate: FollowedChat_Aggregate;
  /** fetch data from the table: "FollowedChat" using primary key columns */
  FollowedChat_by_pk?: Maybe<FollowedChat>;
  /** fetch data from the table: "OnlineStatus" */
  OnlineStatus: Array<OnlineStatus>;
  /** fetch aggregated fields from the table: "OnlineStatus" */
  OnlineStatus_aggregate: OnlineStatus_Aggregate;
  /** fetch data from the table: "OnlineStatus" using primary key columns */
  OnlineStatus_by_pk?: Maybe<OnlineStatus>;
  /** fetch data from the table: "PinnedChat" */
  PinnedChat: Array<PinnedChat>;
  /** fetch aggregated fields from the table: "PinnedChat" */
  PinnedChat_aggregate: PinnedChat_Aggregate;
  /** fetch data from the table: "PinnedChat" using primary key columns */
  PinnedChat_by_pk?: Maybe<PinnedChat>;
  /** fetch data from the table: "User" */
  User: Array<User>;
  /** fetch aggregated fields from the table: "User" */
  User_aggregate: User_Aggregate;
  /** fetch data from the table: "User" using primary key columns */
  User_by_pk?: Maybe<User>;
  /** retrieve the result of action: "createChannel" */
  createChannel?: Maybe<CreateChannel>;
  /** perform the action: "echo" */
  echo?: Maybe<EchoOutput>;
  /** perform the action: "getChannelToken" */
  getChannelToken?: Maybe<GetChannelTokenOutput>;
  /** perform the action: "protectedEcho" */
  protectedEcho?: Maybe<ProtectedEchoOutput>;
};


/** subscription root */
export type Subscription_RootChannelArgs = {
  distinct_on?: Maybe<Array<Channel_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Channel_Order_By>>;
  where?: Maybe<Channel_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootChannel_AggregateArgs = {
  distinct_on?: Maybe<Array<Channel_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Channel_Order_By>>;
  where?: Maybe<Channel_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootChannel_By_PkArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootChatArgs = {
  distinct_on?: Maybe<Array<Chat_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Chat_Order_By>>;
  where?: Maybe<Chat_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootChatMemberArgs = {
  distinct_on?: Maybe<Array<ChatMember_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<ChatMember_Order_By>>;
  where?: Maybe<ChatMember_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootChatMember_AggregateArgs = {
  distinct_on?: Maybe<Array<ChatMember_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<ChatMember_Order_By>>;
  where?: Maybe<ChatMember_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootChatMember_By_PkArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootChatMessageArgs = {
  distinct_on?: Maybe<Array<ChatMessage_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<ChatMessage_Order_By>>;
  where?: Maybe<ChatMessage_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootChatMessage_AggregateArgs = {
  distinct_on?: Maybe<Array<ChatMessage_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<ChatMessage_Order_By>>;
  where?: Maybe<ChatMessage_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootChatMessage_By_PkArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootChatModeratorArgs = {
  distinct_on?: Maybe<Array<ChatModerator_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<ChatModerator_Order_By>>;
  where?: Maybe<ChatModerator_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootChatModerator_AggregateArgs = {
  distinct_on?: Maybe<Array<ChatModerator_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<ChatModerator_Order_By>>;
  where?: Maybe<ChatModerator_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootChatModerator_By_PkArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootChatReactionArgs = {
  distinct_on?: Maybe<Array<ChatReaction_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<ChatReaction_Order_By>>;
  where?: Maybe<ChatReaction_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootChatReaction_AggregateArgs = {
  distinct_on?: Maybe<Array<ChatReaction_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<ChatReaction_Order_By>>;
  where?: Maybe<ChatReaction_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootChatReaction_By_PkArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootChatTyperArgs = {
  distinct_on?: Maybe<Array<ChatTyper_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<ChatTyper_Order_By>>;
  where?: Maybe<ChatTyper_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootChatTyper_AggregateArgs = {
  distinct_on?: Maybe<Array<ChatTyper_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<ChatTyper_Order_By>>;
  where?: Maybe<ChatTyper_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootChatTyper_By_PkArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootChatUnreadIndexArgs = {
  distinct_on?: Maybe<Array<ChatUnreadIndex_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<ChatUnreadIndex_Order_By>>;
  where?: Maybe<ChatUnreadIndex_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootChatUnreadIndex_AggregateArgs = {
  distinct_on?: Maybe<Array<ChatUnreadIndex_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<ChatUnreadIndex_Order_By>>;
  where?: Maybe<ChatUnreadIndex_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootChatUnreadIndex_By_PkArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootChatViewerArgs = {
  distinct_on?: Maybe<Array<ChatViewer_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<ChatViewer_Order_By>>;
  where?: Maybe<ChatViewer_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootChatViewer_AggregateArgs = {
  distinct_on?: Maybe<Array<ChatViewer_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<ChatViewer_Order_By>>;
  where?: Maybe<ChatViewer_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootChatViewer_By_PkArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootChat_AggregateArgs = {
  distinct_on?: Maybe<Array<Chat_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Chat_Order_By>>;
  where?: Maybe<Chat_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootChat_By_PkArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootFlaggedChatMessageArgs = {
  distinct_on?: Maybe<Array<FlaggedChatMessage_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<FlaggedChatMessage_Order_By>>;
  where?: Maybe<FlaggedChatMessage_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootFlaggedChatMessage_AggregateArgs = {
  distinct_on?: Maybe<Array<FlaggedChatMessage_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<FlaggedChatMessage_Order_By>>;
  where?: Maybe<FlaggedChatMessage_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootFlaggedChatMessage_By_PkArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootFollowedChatArgs = {
  distinct_on?: Maybe<Array<FollowedChat_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<FollowedChat_Order_By>>;
  where?: Maybe<FollowedChat_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootFollowedChat_AggregateArgs = {
  distinct_on?: Maybe<Array<FollowedChat_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<FollowedChat_Order_By>>;
  where?: Maybe<FollowedChat_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootFollowedChat_By_PkArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootOnlineStatusArgs = {
  distinct_on?: Maybe<Array<OnlineStatus_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<OnlineStatus_Order_By>>;
  where?: Maybe<OnlineStatus_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootOnlineStatus_AggregateArgs = {
  distinct_on?: Maybe<Array<OnlineStatus_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<OnlineStatus_Order_By>>;
  where?: Maybe<OnlineStatus_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootOnlineStatus_By_PkArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootPinnedChatArgs = {
  distinct_on?: Maybe<Array<PinnedChat_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<PinnedChat_Order_By>>;
  where?: Maybe<PinnedChat_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootPinnedChat_AggregateArgs = {
  distinct_on?: Maybe<Array<PinnedChat_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<PinnedChat_Order_By>>;
  where?: Maybe<PinnedChat_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootPinnedChat_By_PkArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootUserArgs = {
  distinct_on?: Maybe<Array<User_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Order_By>>;
  where?: Maybe<User_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootUser_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Order_By>>;
  where?: Maybe<User_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootUser_By_PkArgs = {
  id: Scalars['String'];
};


/** subscription root */
export type Subscription_RootCreateChannelArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootEchoArgs = {
  message: Scalars['String'];
};


/** subscription root */
export type Subscription_RootGetChannelTokenArgs = {
  channelId: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootProtectedEchoArgs = {
  message: Scalars['String'];
};


/** expression to compare columns of type timestamptz. All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: Maybe<Scalars['timestamptz']>;
  _gt?: Maybe<Scalars['timestamptz']>;
  _gte?: Maybe<Scalars['timestamptz']>;
  _in?: Maybe<Array<Scalars['timestamptz']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['timestamptz']>;
  _lte?: Maybe<Scalars['timestamptz']>;
  _neq?: Maybe<Scalars['timestamptz']>;
  _nin?: Maybe<Array<Scalars['timestamptz']>>;
};


/** expression to compare columns of type uuid. All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: Maybe<Scalars['uuid']>;
  _gt?: Maybe<Scalars['uuid']>;
  _gte?: Maybe<Scalars['uuid']>;
  _in?: Maybe<Array<Scalars['uuid']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['uuid']>;
  _lte?: Maybe<Scalars['uuid']>;
  _neq?: Maybe<Scalars['uuid']>;
  _nin?: Maybe<Array<Scalars['uuid']>>;
};

export type CreateChannelMutationVariables = Exact<{
  name: Scalars['String'];
  vonage_session_id: Scalars['String'];
  hls_uri: Scalars['String'];
}>;


export type CreateChannelMutation = (
  { __typename?: 'mutation_root' }
  & { insert_Channel_one?: Maybe<(
    { __typename?: 'Channel' }
    & Pick<Channel, 'id'>
  )> }
);

export type GetChannelQueryVariables = Exact<{
  channelId: Scalars['uuid'];
}>;


export type GetChannelQuery = (
  { __typename?: 'query_root' }
  & { Channel: Array<(
    { __typename?: 'Channel' }
    & Pick<Channel, 'vonage_session_id'>
  )> }
);


export const CreateChannelDocument = gql`
    mutation createChannel($name: String!, $vonage_session_id: String!, $hls_uri: String!) {
  insert_Channel_one(
    object: {name: $name, vonage_session_id: $vonage_session_id, hls_uri: $hls_uri}
  ) {
    id
  }
}
    `;
export const GetChannelDocument = gql`
    query getChannel($channelId: uuid!) {
  Channel(where: {id: {_eq: $channelId}}) {
    vonage_session_id
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: () => Promise<T>) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = sdkFunction => sdkFunction();
export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    createChannel(variables: CreateChannelMutationVariables): Promise<CreateChannelMutation> {
      return withWrapper(() => client.request<CreateChannelMutation>(print(CreateChannelDocument), variables));
    },
    getChannel(variables: GetChannelQueryVariables): Promise<GetChannelQuery> {
      return withWrapper(() => client.request<GetChannelQuery>(print(GetChannelDocument), variables));
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;