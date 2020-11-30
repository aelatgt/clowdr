import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
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

/** columns and relationships of "ActiveGroup" */
export type ActiveGroup = {
  readonly __typename?: 'ActiveGroup';
  readonly accessEnd?: Maybe<Scalars['timestamptz']>;
  readonly accessStart?: Maybe<Scalars['timestamptz']>;
  /** An object relationship */
  readonly conference?: Maybe<Conference>;
  readonly conferenceId?: Maybe<Scalars['uuid']>;
  /** An array relationship */
  readonly groupAttendees: ReadonlyArray<GroupAttendee>;
  /** An aggregated array relationship */
  readonly groupAttendees_aggregate: GroupAttendee_Aggregate;
  /** An array relationship */
  readonly groupRoles: ReadonlyArray<GroupRole>;
  /** An aggregated array relationship */
  readonly groupRoles_aggregate: GroupRole_Aggregate;
  readonly id?: Maybe<Scalars['uuid']>;
  readonly includeUnauthenticated?: Maybe<Scalars['Boolean']>;
  readonly name?: Maybe<Scalars['String']>;
};


/** columns and relationships of "ActiveGroup" */
export type ActiveGroupGroupAttendeesArgs = {
  distinct_on?: Maybe<ReadonlyArray<GroupAttendee_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<GroupAttendee_Order_By>>;
  where?: Maybe<GroupAttendee_Bool_Exp>;
};


/** columns and relationships of "ActiveGroup" */
export type ActiveGroupGroupAttendees_AggregateArgs = {
  distinct_on?: Maybe<ReadonlyArray<GroupAttendee_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<GroupAttendee_Order_By>>;
  where?: Maybe<GroupAttendee_Bool_Exp>;
};


/** columns and relationships of "ActiveGroup" */
export type ActiveGroupGroupRolesArgs = {
  distinct_on?: Maybe<ReadonlyArray<GroupRole_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<GroupRole_Order_By>>;
  where?: Maybe<GroupRole_Bool_Exp>;
};


/** columns and relationships of "ActiveGroup" */
export type ActiveGroupGroupRoles_AggregateArgs = {
  distinct_on?: Maybe<ReadonlyArray<GroupRole_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<GroupRole_Order_By>>;
  where?: Maybe<GroupRole_Bool_Exp>;
};

/** aggregated selection of "ActiveGroup" */
export type ActiveGroup_Aggregate = {
  readonly __typename?: 'ActiveGroup_aggregate';
  readonly aggregate?: Maybe<ActiveGroup_Aggregate_Fields>;
  readonly nodes: ReadonlyArray<ActiveGroup>;
};

/** aggregate fields of "ActiveGroup" */
export type ActiveGroup_Aggregate_Fields = {
  readonly __typename?: 'ActiveGroup_aggregate_fields';
  readonly count?: Maybe<Scalars['Int']>;
  readonly max?: Maybe<ActiveGroup_Max_Fields>;
  readonly min?: Maybe<ActiveGroup_Min_Fields>;
};


/** aggregate fields of "ActiveGroup" */
export type ActiveGroup_Aggregate_FieldsCountArgs = {
  columns?: Maybe<ReadonlyArray<ActiveGroup_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "ActiveGroup" */
export type ActiveGroup_Aggregate_Order_By = {
  readonly count?: Maybe<Order_By>;
  readonly max?: Maybe<ActiveGroup_Max_Order_By>;
  readonly min?: Maybe<ActiveGroup_Min_Order_By>;
};

/** input type for inserting array relation for remote table "ActiveGroup" */
export type ActiveGroup_Arr_Rel_Insert_Input = {
  readonly data: ReadonlyArray<ActiveGroup_Insert_Input>;
};

/** Boolean expression to filter rows from the table "ActiveGroup". All fields are combined with a logical 'AND'. */
export type ActiveGroup_Bool_Exp = {
  readonly _and?: Maybe<ReadonlyArray<Maybe<ActiveGroup_Bool_Exp>>>;
  readonly _not?: Maybe<ActiveGroup_Bool_Exp>;
  readonly _or?: Maybe<ReadonlyArray<Maybe<ActiveGroup_Bool_Exp>>>;
  readonly accessEnd?: Maybe<Timestamptz_Comparison_Exp>;
  readonly accessStart?: Maybe<Timestamptz_Comparison_Exp>;
  readonly conference?: Maybe<Conference_Bool_Exp>;
  readonly conferenceId?: Maybe<Uuid_Comparison_Exp>;
  readonly groupAttendees?: Maybe<GroupAttendee_Bool_Exp>;
  readonly groupRoles?: Maybe<GroupRole_Bool_Exp>;
  readonly id?: Maybe<Uuid_Comparison_Exp>;
  readonly includeUnauthenticated?: Maybe<Boolean_Comparison_Exp>;
  readonly name?: Maybe<String_Comparison_Exp>;
};

/** input type for inserting data into table "ActiveGroup" */
export type ActiveGroup_Insert_Input = {
  readonly accessEnd?: Maybe<Scalars['timestamptz']>;
  readonly accessStart?: Maybe<Scalars['timestamptz']>;
  readonly conference?: Maybe<Conference_Obj_Rel_Insert_Input>;
  readonly conferenceId?: Maybe<Scalars['uuid']>;
  readonly groupAttendees?: Maybe<GroupAttendee_Arr_Rel_Insert_Input>;
  readonly groupRoles?: Maybe<GroupRole_Arr_Rel_Insert_Input>;
  readonly id?: Maybe<Scalars['uuid']>;
  readonly includeUnauthenticated?: Maybe<Scalars['Boolean']>;
  readonly name?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type ActiveGroup_Max_Fields = {
  readonly __typename?: 'ActiveGroup_max_fields';
  readonly accessEnd?: Maybe<Scalars['timestamptz']>;
  readonly accessStart?: Maybe<Scalars['timestamptz']>;
  readonly conferenceId?: Maybe<Scalars['uuid']>;
  readonly id?: Maybe<Scalars['uuid']>;
  readonly name?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "ActiveGroup" */
export type ActiveGroup_Max_Order_By = {
  readonly accessEnd?: Maybe<Order_By>;
  readonly accessStart?: Maybe<Order_By>;
  readonly conferenceId?: Maybe<Order_By>;
  readonly id?: Maybe<Order_By>;
  readonly name?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type ActiveGroup_Min_Fields = {
  readonly __typename?: 'ActiveGroup_min_fields';
  readonly accessEnd?: Maybe<Scalars['timestamptz']>;
  readonly accessStart?: Maybe<Scalars['timestamptz']>;
  readonly conferenceId?: Maybe<Scalars['uuid']>;
  readonly id?: Maybe<Scalars['uuid']>;
  readonly name?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "ActiveGroup" */
export type ActiveGroup_Min_Order_By = {
  readonly accessEnd?: Maybe<Order_By>;
  readonly accessStart?: Maybe<Order_By>;
  readonly conferenceId?: Maybe<Order_By>;
  readonly id?: Maybe<Order_By>;
  readonly name?: Maybe<Order_By>;
};

/** response of any mutation on the table "ActiveGroup" */
export type ActiveGroup_Mutation_Response = {
  readonly __typename?: 'ActiveGroup_mutation_response';
  /** number of affected rows by the mutation */
  readonly affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  readonly returning: ReadonlyArray<ActiveGroup>;
};

/** input type for inserting object relation for remote table "ActiveGroup" */
export type ActiveGroup_Obj_Rel_Insert_Input = {
  readonly data: ActiveGroup_Insert_Input;
};

/** ordering options when selecting data from "ActiveGroup" */
export type ActiveGroup_Order_By = {
  readonly accessEnd?: Maybe<Order_By>;
  readonly accessStart?: Maybe<Order_By>;
  readonly conference?: Maybe<Conference_Order_By>;
  readonly conferenceId?: Maybe<Order_By>;
  readonly groupAttendees_aggregate?: Maybe<GroupAttendee_Aggregate_Order_By>;
  readonly groupRoles_aggregate?: Maybe<GroupRole_Aggregate_Order_By>;
  readonly id?: Maybe<Order_By>;
  readonly includeUnauthenticated?: Maybe<Order_By>;
  readonly name?: Maybe<Order_By>;
};

/** select columns of table "ActiveGroup" */
export enum ActiveGroup_Select_Column {
  /** column name */
  AccessEnd = 'accessEnd',
  /** column name */
  AccessStart = 'accessStart',
  /** column name */
  ConferenceId = 'conferenceId',
  /** column name */
  Id = 'id',
  /** column name */
  IncludeUnauthenticated = 'includeUnauthenticated',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "ActiveGroup" */
export type ActiveGroup_Set_Input = {
  readonly accessEnd?: Maybe<Scalars['timestamptz']>;
  readonly accessStart?: Maybe<Scalars['timestamptz']>;
  readonly conferenceId?: Maybe<Scalars['uuid']>;
  readonly id?: Maybe<Scalars['uuid']>;
  readonly includeUnauthenticated?: Maybe<Scalars['Boolean']>;
  readonly name?: Maybe<Scalars['String']>;
};

/** columns and relationships of "Attendee" */
export type Attendee = {
  readonly __typename?: 'Attendee';
  /** An object relationship */
  readonly conference: Conference;
  readonly conferenceId: Scalars['uuid'];
  readonly displayName: Scalars['String'];
  /** An array relationship */
  readonly groupAttendees: ReadonlyArray<GroupAttendee>;
  /** An aggregated array relationship */
  readonly groupAttendees_aggregate: GroupAttendee_Aggregate;
  readonly id: Scalars['uuid'];
  /** An object relationship */
  readonly status: AttendeeStatus;
  readonly statusName: AttendeeStatus_Enum;
  /** An object relationship */
  readonly user?: Maybe<User>;
  readonly userId?: Maybe<Scalars['String']>;
};


/** columns and relationships of "Attendee" */
export type AttendeeGroupAttendeesArgs = {
  distinct_on?: Maybe<ReadonlyArray<GroupAttendee_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<GroupAttendee_Order_By>>;
  where?: Maybe<GroupAttendee_Bool_Exp>;
};


/** columns and relationships of "Attendee" */
export type AttendeeGroupAttendees_AggregateArgs = {
  distinct_on?: Maybe<ReadonlyArray<GroupAttendee_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<GroupAttendee_Order_By>>;
  where?: Maybe<GroupAttendee_Bool_Exp>;
};

/** columns and relationships of "AttendeeStatus" */
export type AttendeeStatus = {
  readonly __typename?: 'AttendeeStatus';
  readonly description: Scalars['String'];
  readonly name: Scalars['String'];
};

/** aggregated selection of "AttendeeStatus" */
export type AttendeeStatus_Aggregate = {
  readonly __typename?: 'AttendeeStatus_aggregate';
  readonly aggregate?: Maybe<AttendeeStatus_Aggregate_Fields>;
  readonly nodes: ReadonlyArray<AttendeeStatus>;
};

/** aggregate fields of "AttendeeStatus" */
export type AttendeeStatus_Aggregate_Fields = {
  readonly __typename?: 'AttendeeStatus_aggregate_fields';
  readonly count?: Maybe<Scalars['Int']>;
  readonly max?: Maybe<AttendeeStatus_Max_Fields>;
  readonly min?: Maybe<AttendeeStatus_Min_Fields>;
};


/** aggregate fields of "AttendeeStatus" */
export type AttendeeStatus_Aggregate_FieldsCountArgs = {
  columns?: Maybe<ReadonlyArray<AttendeeStatus_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "AttendeeStatus" */
export type AttendeeStatus_Aggregate_Order_By = {
  readonly count?: Maybe<Order_By>;
  readonly max?: Maybe<AttendeeStatus_Max_Order_By>;
  readonly min?: Maybe<AttendeeStatus_Min_Order_By>;
};

/** input type for inserting array relation for remote table "AttendeeStatus" */
export type AttendeeStatus_Arr_Rel_Insert_Input = {
  readonly data: ReadonlyArray<AttendeeStatus_Insert_Input>;
  readonly on_conflict?: Maybe<AttendeeStatus_On_Conflict>;
};

/** Boolean expression to filter rows from the table "AttendeeStatus". All fields are combined with a logical 'AND'. */
export type AttendeeStatus_Bool_Exp = {
  readonly _and?: Maybe<ReadonlyArray<Maybe<AttendeeStatus_Bool_Exp>>>;
  readonly _not?: Maybe<AttendeeStatus_Bool_Exp>;
  readonly _or?: Maybe<ReadonlyArray<Maybe<AttendeeStatus_Bool_Exp>>>;
  readonly description?: Maybe<String_Comparison_Exp>;
  readonly name?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "AttendeeStatus" */
export enum AttendeeStatus_Constraint {
  /** unique or primary key constraint */
  AttendeeStatusPkey = 'AttendeeStatus_pkey'
}

export enum AttendeeStatus_Enum {
  /** Active attendee. */
  Active = 'ACTIVE',
  /** User has been banned from the conference. */
  Banned = 'BANNED'
}

/** expression to compare columns of type AttendeeStatus_enum. All fields are combined with logical 'AND'. */
export type AttendeeStatus_Enum_Comparison_Exp = {
  readonly _eq?: Maybe<AttendeeStatus_Enum>;
  readonly _in?: Maybe<ReadonlyArray<AttendeeStatus_Enum>>;
  readonly _is_null?: Maybe<Scalars['Boolean']>;
  readonly _neq?: Maybe<AttendeeStatus_Enum>;
  readonly _nin?: Maybe<ReadonlyArray<AttendeeStatus_Enum>>;
};

/** input type for inserting data into table "AttendeeStatus" */
export type AttendeeStatus_Insert_Input = {
  readonly description?: Maybe<Scalars['String']>;
  readonly name?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type AttendeeStatus_Max_Fields = {
  readonly __typename?: 'AttendeeStatus_max_fields';
  readonly description?: Maybe<Scalars['String']>;
  readonly name?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "AttendeeStatus" */
export type AttendeeStatus_Max_Order_By = {
  readonly description?: Maybe<Order_By>;
  readonly name?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type AttendeeStatus_Min_Fields = {
  readonly __typename?: 'AttendeeStatus_min_fields';
  readonly description?: Maybe<Scalars['String']>;
  readonly name?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "AttendeeStatus" */
export type AttendeeStatus_Min_Order_By = {
  readonly description?: Maybe<Order_By>;
  readonly name?: Maybe<Order_By>;
};

/** response of any mutation on the table "AttendeeStatus" */
export type AttendeeStatus_Mutation_Response = {
  readonly __typename?: 'AttendeeStatus_mutation_response';
  /** number of affected rows by the mutation */
  readonly affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  readonly returning: ReadonlyArray<AttendeeStatus>;
};

/** input type for inserting object relation for remote table "AttendeeStatus" */
export type AttendeeStatus_Obj_Rel_Insert_Input = {
  readonly data: AttendeeStatus_Insert_Input;
  readonly on_conflict?: Maybe<AttendeeStatus_On_Conflict>;
};

/** on conflict condition type for table "AttendeeStatus" */
export type AttendeeStatus_On_Conflict = {
  readonly constraint: AttendeeStatus_Constraint;
  readonly update_columns: ReadonlyArray<AttendeeStatus_Update_Column>;
  readonly where?: Maybe<AttendeeStatus_Bool_Exp>;
};

/** ordering options when selecting data from "AttendeeStatus" */
export type AttendeeStatus_Order_By = {
  readonly description?: Maybe<Order_By>;
  readonly name?: Maybe<Order_By>;
};

/** primary key columns input for table: "AttendeeStatus" */
export type AttendeeStatus_Pk_Columns_Input = {
  readonly name: Scalars['String'];
};

/** select columns of table "AttendeeStatus" */
export enum AttendeeStatus_Select_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "AttendeeStatus" */
export type AttendeeStatus_Set_Input = {
  readonly description?: Maybe<Scalars['String']>;
  readonly name?: Maybe<Scalars['String']>;
};

/** update columns of table "AttendeeStatus" */
export enum AttendeeStatus_Update_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Name = 'name'
}

/** aggregated selection of "Attendee" */
export type Attendee_Aggregate = {
  readonly __typename?: 'Attendee_aggregate';
  readonly aggregate?: Maybe<Attendee_Aggregate_Fields>;
  readonly nodes: ReadonlyArray<Attendee>;
};

/** aggregate fields of "Attendee" */
export type Attendee_Aggregate_Fields = {
  readonly __typename?: 'Attendee_aggregate_fields';
  readonly count?: Maybe<Scalars['Int']>;
  readonly max?: Maybe<Attendee_Max_Fields>;
  readonly min?: Maybe<Attendee_Min_Fields>;
};


/** aggregate fields of "Attendee" */
export type Attendee_Aggregate_FieldsCountArgs = {
  columns?: Maybe<ReadonlyArray<Attendee_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "Attendee" */
export type Attendee_Aggregate_Order_By = {
  readonly count?: Maybe<Order_By>;
  readonly max?: Maybe<Attendee_Max_Order_By>;
  readonly min?: Maybe<Attendee_Min_Order_By>;
};

/** input type for inserting array relation for remote table "Attendee" */
export type Attendee_Arr_Rel_Insert_Input = {
  readonly data: ReadonlyArray<Attendee_Insert_Input>;
  readonly on_conflict?: Maybe<Attendee_On_Conflict>;
};

/** Boolean expression to filter rows from the table "Attendee". All fields are combined with a logical 'AND'. */
export type Attendee_Bool_Exp = {
  readonly _and?: Maybe<ReadonlyArray<Maybe<Attendee_Bool_Exp>>>;
  readonly _not?: Maybe<Attendee_Bool_Exp>;
  readonly _or?: Maybe<ReadonlyArray<Maybe<Attendee_Bool_Exp>>>;
  readonly conference?: Maybe<Conference_Bool_Exp>;
  readonly conferenceId?: Maybe<Uuid_Comparison_Exp>;
  readonly displayName?: Maybe<String_Comparison_Exp>;
  readonly groupAttendees?: Maybe<GroupAttendee_Bool_Exp>;
  readonly id?: Maybe<Uuid_Comparison_Exp>;
  readonly status?: Maybe<AttendeeStatus_Bool_Exp>;
  readonly statusName?: Maybe<AttendeeStatus_Enum_Comparison_Exp>;
  readonly user?: Maybe<User_Bool_Exp>;
  readonly userId?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "Attendee" */
export enum Attendee_Constraint {
  /** unique or primary key constraint */
  AttendeeConferenceIdUserIdKey = 'Attendee_conferenceId_userId_key',
  /** unique or primary key constraint */
  AttendeePkey = 'Attendee_pkey'
}

/** input type for inserting data into table "Attendee" */
export type Attendee_Insert_Input = {
  readonly conference?: Maybe<Conference_Obj_Rel_Insert_Input>;
  readonly conferenceId?: Maybe<Scalars['uuid']>;
  readonly displayName?: Maybe<Scalars['String']>;
  readonly groupAttendees?: Maybe<GroupAttendee_Arr_Rel_Insert_Input>;
  readonly id?: Maybe<Scalars['uuid']>;
  readonly status?: Maybe<AttendeeStatus_Obj_Rel_Insert_Input>;
  readonly statusName?: Maybe<AttendeeStatus_Enum>;
  readonly user?: Maybe<User_Obj_Rel_Insert_Input>;
  readonly userId?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Attendee_Max_Fields = {
  readonly __typename?: 'Attendee_max_fields';
  readonly conferenceId?: Maybe<Scalars['uuid']>;
  readonly displayName?: Maybe<Scalars['String']>;
  readonly id?: Maybe<Scalars['uuid']>;
  readonly userId?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "Attendee" */
export type Attendee_Max_Order_By = {
  readonly conferenceId?: Maybe<Order_By>;
  readonly displayName?: Maybe<Order_By>;
  readonly id?: Maybe<Order_By>;
  readonly userId?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Attendee_Min_Fields = {
  readonly __typename?: 'Attendee_min_fields';
  readonly conferenceId?: Maybe<Scalars['uuid']>;
  readonly displayName?: Maybe<Scalars['String']>;
  readonly id?: Maybe<Scalars['uuid']>;
  readonly userId?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "Attendee" */
export type Attendee_Min_Order_By = {
  readonly conferenceId?: Maybe<Order_By>;
  readonly displayName?: Maybe<Order_By>;
  readonly id?: Maybe<Order_By>;
  readonly userId?: Maybe<Order_By>;
};

/** response of any mutation on the table "Attendee" */
export type Attendee_Mutation_Response = {
  readonly __typename?: 'Attendee_mutation_response';
  /** number of affected rows by the mutation */
  readonly affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  readonly returning: ReadonlyArray<Attendee>;
};

/** input type for inserting object relation for remote table "Attendee" */
export type Attendee_Obj_Rel_Insert_Input = {
  readonly data: Attendee_Insert_Input;
  readonly on_conflict?: Maybe<Attendee_On_Conflict>;
};

/** on conflict condition type for table "Attendee" */
export type Attendee_On_Conflict = {
  readonly constraint: Attendee_Constraint;
  readonly update_columns: ReadonlyArray<Attendee_Update_Column>;
  readonly where?: Maybe<Attendee_Bool_Exp>;
};

/** ordering options when selecting data from "Attendee" */
export type Attendee_Order_By = {
  readonly conference?: Maybe<Conference_Order_By>;
  readonly conferenceId?: Maybe<Order_By>;
  readonly displayName?: Maybe<Order_By>;
  readonly groupAttendees_aggregate?: Maybe<GroupAttendee_Aggregate_Order_By>;
  readonly id?: Maybe<Order_By>;
  readonly status?: Maybe<AttendeeStatus_Order_By>;
  readonly statusName?: Maybe<Order_By>;
  readonly user?: Maybe<User_Order_By>;
  readonly userId?: Maybe<Order_By>;
};

/** primary key columns input for table: "Attendee" */
export type Attendee_Pk_Columns_Input = {
  readonly id: Scalars['uuid'];
};

/** select columns of table "Attendee" */
export enum Attendee_Select_Column {
  /** column name */
  ConferenceId = 'conferenceId',
  /** column name */
  DisplayName = 'displayName',
  /** column name */
  Id = 'id',
  /** column name */
  StatusName = 'statusName',
  /** column name */
  UserId = 'userId'
}

/** input type for updating data in table "Attendee" */
export type Attendee_Set_Input = {
  readonly conferenceId?: Maybe<Scalars['uuid']>;
  readonly displayName?: Maybe<Scalars['String']>;
  readonly id?: Maybe<Scalars['uuid']>;
  readonly statusName?: Maybe<AttendeeStatus_Enum>;
  readonly userId?: Maybe<Scalars['String']>;
};

/** update columns of table "Attendee" */
export enum Attendee_Update_Column {
  /** column name */
  ConferenceId = 'conferenceId',
  /** column name */
  DisplayName = 'displayName',
  /** column name */
  Id = 'id',
  /** column name */
  StatusName = 'statusName',
  /** column name */
  UserId = 'userId'
}

/** expression to compare columns of type Boolean. All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  readonly _eq?: Maybe<Scalars['Boolean']>;
  readonly _gt?: Maybe<Scalars['Boolean']>;
  readonly _gte?: Maybe<Scalars['Boolean']>;
  readonly _in?: Maybe<ReadonlyArray<Scalars['Boolean']>>;
  readonly _is_null?: Maybe<Scalars['Boolean']>;
  readonly _lt?: Maybe<Scalars['Boolean']>;
  readonly _lte?: Maybe<Scalars['Boolean']>;
  readonly _neq?: Maybe<Scalars['Boolean']>;
  readonly _nin?: Maybe<ReadonlyArray<Scalars['Boolean']>>;
};

/** columns and relationships of "Chat" */
export type Chat = {
  readonly __typename?: 'Chat';
  readonly createdAt: Scalars['timestamptz'];
  /** An object relationship */
  readonly creator: User;
  readonly creatorId: Scalars['String'];
  readonly description?: Maybe<Scalars['String']>;
  /** An array relationship */
  readonly flaggedMessages: ReadonlyArray<FlaggedChatMessage>;
  /** An aggregated array relationship */
  readonly flaggedMessages_aggregate: FlaggedChatMessage_Aggregate;
  readonly id: Scalars['uuid'];
  readonly isAutoNotify: Scalars['Boolean'];
  readonly isAutoPin: Scalars['Boolean'];
  /** An array relationship */
  readonly members: ReadonlyArray<ChatMember>;
  /** An aggregated array relationship */
  readonly members_aggregate: ChatMember_Aggregate;
  /** An array relationship */
  readonly messages: ReadonlyArray<ChatMessage>;
  /** An aggregated array relationship */
  readonly messages_aggregate: ChatMessage_Aggregate;
  readonly mode: Scalars['String'];
  /** An array relationship */
  readonly moderators: ReadonlyArray<ChatModerator>;
  /** An aggregated array relationship */
  readonly moderators_aggregate: ChatModerator_Aggregate;
  readonly name: Scalars['String'];
  /** An array relationship */
  readonly typers: ReadonlyArray<ChatTyper>;
  /** An aggregated array relationship */
  readonly typers_aggregate: ChatTyper_Aggregate;
  readonly updatedAt: Scalars['timestamptz'];
  /** An array relationship */
  readonly viewers: ReadonlyArray<ChatViewer>;
  /** An aggregated array relationship */
  readonly viewers_aggregate: ChatViewer_Aggregate;
};


/** columns and relationships of "Chat" */
export type ChatFlaggedMessagesArgs = {
  distinct_on?: Maybe<ReadonlyArray<FlaggedChatMessage_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<FlaggedChatMessage_Order_By>>;
  where?: Maybe<FlaggedChatMessage_Bool_Exp>;
};


/** columns and relationships of "Chat" */
export type ChatFlaggedMessages_AggregateArgs = {
  distinct_on?: Maybe<ReadonlyArray<FlaggedChatMessage_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<FlaggedChatMessage_Order_By>>;
  where?: Maybe<FlaggedChatMessage_Bool_Exp>;
};


/** columns and relationships of "Chat" */
export type ChatMembersArgs = {
  distinct_on?: Maybe<ReadonlyArray<ChatMember_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<ChatMember_Order_By>>;
  where?: Maybe<ChatMember_Bool_Exp>;
};


/** columns and relationships of "Chat" */
export type ChatMembers_AggregateArgs = {
  distinct_on?: Maybe<ReadonlyArray<ChatMember_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<ChatMember_Order_By>>;
  where?: Maybe<ChatMember_Bool_Exp>;
};


/** columns and relationships of "Chat" */
export type ChatMessagesArgs = {
  distinct_on?: Maybe<ReadonlyArray<ChatMessage_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<ChatMessage_Order_By>>;
  where?: Maybe<ChatMessage_Bool_Exp>;
};


/** columns and relationships of "Chat" */
export type ChatMessages_AggregateArgs = {
  distinct_on?: Maybe<ReadonlyArray<ChatMessage_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<ChatMessage_Order_By>>;
  where?: Maybe<ChatMessage_Bool_Exp>;
};


/** columns and relationships of "Chat" */
export type ChatModeratorsArgs = {
  distinct_on?: Maybe<ReadonlyArray<ChatModerator_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<ChatModerator_Order_By>>;
  where?: Maybe<ChatModerator_Bool_Exp>;
};


/** columns and relationships of "Chat" */
export type ChatModerators_AggregateArgs = {
  distinct_on?: Maybe<ReadonlyArray<ChatModerator_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<ChatModerator_Order_By>>;
  where?: Maybe<ChatModerator_Bool_Exp>;
};


/** columns and relationships of "Chat" */
export type ChatTypersArgs = {
  distinct_on?: Maybe<ReadonlyArray<ChatTyper_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<ChatTyper_Order_By>>;
  where?: Maybe<ChatTyper_Bool_Exp>;
};


/** columns and relationships of "Chat" */
export type ChatTypers_AggregateArgs = {
  distinct_on?: Maybe<ReadonlyArray<ChatTyper_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<ChatTyper_Order_By>>;
  where?: Maybe<ChatTyper_Bool_Exp>;
};


/** columns and relationships of "Chat" */
export type ChatViewersArgs = {
  distinct_on?: Maybe<ReadonlyArray<ChatViewer_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<ChatViewer_Order_By>>;
  where?: Maybe<ChatViewer_Bool_Exp>;
};


/** columns and relationships of "Chat" */
export type ChatViewers_AggregateArgs = {
  distinct_on?: Maybe<ReadonlyArray<ChatViewer_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<ChatViewer_Order_By>>;
  where?: Maybe<ChatViewer_Bool_Exp>;
};

/** columns and relationships of "ChatMember" */
export type ChatMember = {
  readonly __typename?: 'ChatMember';
  /** An object relationship */
  readonly chat: Chat;
  readonly chatId: Scalars['uuid'];
  readonly createdAt: Scalars['timestamptz'];
  readonly id: Scalars['uuid'];
  readonly invitationAcceptedAt?: Maybe<Scalars['timestamptz']>;
  readonly updatedAt: Scalars['timestamptz'];
  /** An object relationship */
  readonly user: User;
  readonly userId: Scalars['String'];
};

/** aggregated selection of "ChatMember" */
export type ChatMember_Aggregate = {
  readonly __typename?: 'ChatMember_aggregate';
  readonly aggregate?: Maybe<ChatMember_Aggregate_Fields>;
  readonly nodes: ReadonlyArray<ChatMember>;
};

/** aggregate fields of "ChatMember" */
export type ChatMember_Aggregate_Fields = {
  readonly __typename?: 'ChatMember_aggregate_fields';
  readonly count?: Maybe<Scalars['Int']>;
  readonly max?: Maybe<ChatMember_Max_Fields>;
  readonly min?: Maybe<ChatMember_Min_Fields>;
};


/** aggregate fields of "ChatMember" */
export type ChatMember_Aggregate_FieldsCountArgs = {
  columns?: Maybe<ReadonlyArray<ChatMember_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "ChatMember" */
export type ChatMember_Aggregate_Order_By = {
  readonly count?: Maybe<Order_By>;
  readonly max?: Maybe<ChatMember_Max_Order_By>;
  readonly min?: Maybe<ChatMember_Min_Order_By>;
};

/** input type for inserting array relation for remote table "ChatMember" */
export type ChatMember_Arr_Rel_Insert_Input = {
  readonly data: ReadonlyArray<ChatMember_Insert_Input>;
  readonly on_conflict?: Maybe<ChatMember_On_Conflict>;
};

/** Boolean expression to filter rows from the table "ChatMember". All fields are combined with a logical 'AND'. */
export type ChatMember_Bool_Exp = {
  readonly _and?: Maybe<ReadonlyArray<Maybe<ChatMember_Bool_Exp>>>;
  readonly _not?: Maybe<ChatMember_Bool_Exp>;
  readonly _or?: Maybe<ReadonlyArray<Maybe<ChatMember_Bool_Exp>>>;
  readonly chat?: Maybe<Chat_Bool_Exp>;
  readonly chatId?: Maybe<Uuid_Comparison_Exp>;
  readonly createdAt?: Maybe<Timestamptz_Comparison_Exp>;
  readonly id?: Maybe<Uuid_Comparison_Exp>;
  readonly invitationAcceptedAt?: Maybe<Timestamptz_Comparison_Exp>;
  readonly updatedAt?: Maybe<Timestamptz_Comparison_Exp>;
  readonly user?: Maybe<User_Bool_Exp>;
  readonly userId?: Maybe<String_Comparison_Exp>;
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
  readonly chat?: Maybe<Chat_Obj_Rel_Insert_Input>;
  readonly chatId?: Maybe<Scalars['uuid']>;
  readonly createdAt?: Maybe<Scalars['timestamptz']>;
  readonly id?: Maybe<Scalars['uuid']>;
  readonly invitationAcceptedAt?: Maybe<Scalars['timestamptz']>;
  readonly updatedAt?: Maybe<Scalars['timestamptz']>;
  readonly user?: Maybe<User_Obj_Rel_Insert_Input>;
  readonly userId?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type ChatMember_Max_Fields = {
  readonly __typename?: 'ChatMember_max_fields';
  readonly chatId?: Maybe<Scalars['uuid']>;
  readonly createdAt?: Maybe<Scalars['timestamptz']>;
  readonly id?: Maybe<Scalars['uuid']>;
  readonly invitationAcceptedAt?: Maybe<Scalars['timestamptz']>;
  readonly updatedAt?: Maybe<Scalars['timestamptz']>;
  readonly userId?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "ChatMember" */
export type ChatMember_Max_Order_By = {
  readonly chatId?: Maybe<Order_By>;
  readonly createdAt?: Maybe<Order_By>;
  readonly id?: Maybe<Order_By>;
  readonly invitationAcceptedAt?: Maybe<Order_By>;
  readonly updatedAt?: Maybe<Order_By>;
  readonly userId?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type ChatMember_Min_Fields = {
  readonly __typename?: 'ChatMember_min_fields';
  readonly chatId?: Maybe<Scalars['uuid']>;
  readonly createdAt?: Maybe<Scalars['timestamptz']>;
  readonly id?: Maybe<Scalars['uuid']>;
  readonly invitationAcceptedAt?: Maybe<Scalars['timestamptz']>;
  readonly updatedAt?: Maybe<Scalars['timestamptz']>;
  readonly userId?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "ChatMember" */
export type ChatMember_Min_Order_By = {
  readonly chatId?: Maybe<Order_By>;
  readonly createdAt?: Maybe<Order_By>;
  readonly id?: Maybe<Order_By>;
  readonly invitationAcceptedAt?: Maybe<Order_By>;
  readonly updatedAt?: Maybe<Order_By>;
  readonly userId?: Maybe<Order_By>;
};

/** response of any mutation on the table "ChatMember" */
export type ChatMember_Mutation_Response = {
  readonly __typename?: 'ChatMember_mutation_response';
  /** number of affected rows by the mutation */
  readonly affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  readonly returning: ReadonlyArray<ChatMember>;
};

/** input type for inserting object relation for remote table "ChatMember" */
export type ChatMember_Obj_Rel_Insert_Input = {
  readonly data: ChatMember_Insert_Input;
  readonly on_conflict?: Maybe<ChatMember_On_Conflict>;
};

/** on conflict condition type for table "ChatMember" */
export type ChatMember_On_Conflict = {
  readonly constraint: ChatMember_Constraint;
  readonly update_columns: ReadonlyArray<ChatMember_Update_Column>;
  readonly where?: Maybe<ChatMember_Bool_Exp>;
};

/** ordering options when selecting data from "ChatMember" */
export type ChatMember_Order_By = {
  readonly chat?: Maybe<Chat_Order_By>;
  readonly chatId?: Maybe<Order_By>;
  readonly createdAt?: Maybe<Order_By>;
  readonly id?: Maybe<Order_By>;
  readonly invitationAcceptedAt?: Maybe<Order_By>;
  readonly updatedAt?: Maybe<Order_By>;
  readonly user?: Maybe<User_Order_By>;
  readonly userId?: Maybe<Order_By>;
};

/** primary key columns input for table: "ChatMember" */
export type ChatMember_Pk_Columns_Input = {
  readonly id: Scalars['uuid'];
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
  readonly chatId?: Maybe<Scalars['uuid']>;
  readonly createdAt?: Maybe<Scalars['timestamptz']>;
  readonly id?: Maybe<Scalars['uuid']>;
  readonly invitationAcceptedAt?: Maybe<Scalars['timestamptz']>;
  readonly updatedAt?: Maybe<Scalars['timestamptz']>;
  readonly userId?: Maybe<Scalars['String']>;
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
  readonly __typename?: 'ChatMessage';
  /** An object relationship */
  readonly chat: Chat;
  readonly chatId: Scalars['uuid'];
  readonly content: Scalars['jsonb'];
  readonly createdAt: Scalars['timestamptz'];
  /** An array relationship */
  readonly flags: ReadonlyArray<FlaggedChatMessage>;
  /** An aggregated array relationship */
  readonly flags_aggregate: FlaggedChatMessage_Aggregate;
  readonly id: Scalars['uuid'];
  readonly index: Scalars['Int'];
  readonly isHighlighted: Scalars['Boolean'];
  /** An array relationship */
  readonly reactions: ReadonlyArray<ChatReaction>;
  /** An aggregated array relationship */
  readonly reactions_aggregate: ChatReaction_Aggregate;
  /** An object relationship */
  readonly sender: User;
  readonly senderId: Scalars['String'];
  readonly updatedAt: Scalars['timestamptz'];
};


/** columns and relationships of "ChatMessage" */
export type ChatMessageContentArgs = {
  path?: Maybe<Scalars['String']>;
};


/** columns and relationships of "ChatMessage" */
export type ChatMessageFlagsArgs = {
  distinct_on?: Maybe<ReadonlyArray<FlaggedChatMessage_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<FlaggedChatMessage_Order_By>>;
  where?: Maybe<FlaggedChatMessage_Bool_Exp>;
};


/** columns and relationships of "ChatMessage" */
export type ChatMessageFlags_AggregateArgs = {
  distinct_on?: Maybe<ReadonlyArray<FlaggedChatMessage_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<FlaggedChatMessage_Order_By>>;
  where?: Maybe<FlaggedChatMessage_Bool_Exp>;
};


/** columns and relationships of "ChatMessage" */
export type ChatMessageReactionsArgs = {
  distinct_on?: Maybe<ReadonlyArray<ChatReaction_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<ChatReaction_Order_By>>;
  where?: Maybe<ChatReaction_Bool_Exp>;
};


/** columns and relationships of "ChatMessage" */
export type ChatMessageReactions_AggregateArgs = {
  distinct_on?: Maybe<ReadonlyArray<ChatReaction_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<ChatReaction_Order_By>>;
  where?: Maybe<ChatReaction_Bool_Exp>;
};

/** aggregated selection of "ChatMessage" */
export type ChatMessage_Aggregate = {
  readonly __typename?: 'ChatMessage_aggregate';
  readonly aggregate?: Maybe<ChatMessage_Aggregate_Fields>;
  readonly nodes: ReadonlyArray<ChatMessage>;
};

/** aggregate fields of "ChatMessage" */
export type ChatMessage_Aggregate_Fields = {
  readonly __typename?: 'ChatMessage_aggregate_fields';
  readonly avg?: Maybe<ChatMessage_Avg_Fields>;
  readonly count?: Maybe<Scalars['Int']>;
  readonly max?: Maybe<ChatMessage_Max_Fields>;
  readonly min?: Maybe<ChatMessage_Min_Fields>;
  readonly stddev?: Maybe<ChatMessage_Stddev_Fields>;
  readonly stddev_pop?: Maybe<ChatMessage_Stddev_Pop_Fields>;
  readonly stddev_samp?: Maybe<ChatMessage_Stddev_Samp_Fields>;
  readonly sum?: Maybe<ChatMessage_Sum_Fields>;
  readonly var_pop?: Maybe<ChatMessage_Var_Pop_Fields>;
  readonly var_samp?: Maybe<ChatMessage_Var_Samp_Fields>;
  readonly variance?: Maybe<ChatMessage_Variance_Fields>;
};


/** aggregate fields of "ChatMessage" */
export type ChatMessage_Aggregate_FieldsCountArgs = {
  columns?: Maybe<ReadonlyArray<ChatMessage_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "ChatMessage" */
export type ChatMessage_Aggregate_Order_By = {
  readonly avg?: Maybe<ChatMessage_Avg_Order_By>;
  readonly count?: Maybe<Order_By>;
  readonly max?: Maybe<ChatMessage_Max_Order_By>;
  readonly min?: Maybe<ChatMessage_Min_Order_By>;
  readonly stddev?: Maybe<ChatMessage_Stddev_Order_By>;
  readonly stddev_pop?: Maybe<ChatMessage_Stddev_Pop_Order_By>;
  readonly stddev_samp?: Maybe<ChatMessage_Stddev_Samp_Order_By>;
  readonly sum?: Maybe<ChatMessage_Sum_Order_By>;
  readonly var_pop?: Maybe<ChatMessage_Var_Pop_Order_By>;
  readonly var_samp?: Maybe<ChatMessage_Var_Samp_Order_By>;
  readonly variance?: Maybe<ChatMessage_Variance_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type ChatMessage_Append_Input = {
  readonly content?: Maybe<Scalars['jsonb']>;
};

/** input type for inserting array relation for remote table "ChatMessage" */
export type ChatMessage_Arr_Rel_Insert_Input = {
  readonly data: ReadonlyArray<ChatMessage_Insert_Input>;
  readonly on_conflict?: Maybe<ChatMessage_On_Conflict>;
};

/** aggregate avg on columns */
export type ChatMessage_Avg_Fields = {
  readonly __typename?: 'ChatMessage_avg_fields';
  readonly index?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "ChatMessage" */
export type ChatMessage_Avg_Order_By = {
  readonly index?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "ChatMessage". All fields are combined with a logical 'AND'. */
export type ChatMessage_Bool_Exp = {
  readonly _and?: Maybe<ReadonlyArray<Maybe<ChatMessage_Bool_Exp>>>;
  readonly _not?: Maybe<ChatMessage_Bool_Exp>;
  readonly _or?: Maybe<ReadonlyArray<Maybe<ChatMessage_Bool_Exp>>>;
  readonly chat?: Maybe<Chat_Bool_Exp>;
  readonly chatId?: Maybe<Uuid_Comparison_Exp>;
  readonly content?: Maybe<Jsonb_Comparison_Exp>;
  readonly createdAt?: Maybe<Timestamptz_Comparison_Exp>;
  readonly flags?: Maybe<FlaggedChatMessage_Bool_Exp>;
  readonly id?: Maybe<Uuid_Comparison_Exp>;
  readonly index?: Maybe<Int_Comparison_Exp>;
  readonly isHighlighted?: Maybe<Boolean_Comparison_Exp>;
  readonly reactions?: Maybe<ChatReaction_Bool_Exp>;
  readonly sender?: Maybe<User_Bool_Exp>;
  readonly senderId?: Maybe<String_Comparison_Exp>;
  readonly updatedAt?: Maybe<Timestamptz_Comparison_Exp>;
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
  readonly content?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type ChatMessage_Delete_Elem_Input = {
  readonly content?: Maybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type ChatMessage_Delete_Key_Input = {
  readonly content?: Maybe<Scalars['String']>;
};

/** input type for incrementing integer column in table "ChatMessage" */
export type ChatMessage_Inc_Input = {
  readonly index?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "ChatMessage" */
export type ChatMessage_Insert_Input = {
  readonly chat?: Maybe<Chat_Obj_Rel_Insert_Input>;
  readonly chatId?: Maybe<Scalars['uuid']>;
  readonly content?: Maybe<Scalars['jsonb']>;
  readonly createdAt?: Maybe<Scalars['timestamptz']>;
  readonly flags?: Maybe<FlaggedChatMessage_Arr_Rel_Insert_Input>;
  readonly id?: Maybe<Scalars['uuid']>;
  readonly index?: Maybe<Scalars['Int']>;
  readonly isHighlighted?: Maybe<Scalars['Boolean']>;
  readonly reactions?: Maybe<ChatReaction_Arr_Rel_Insert_Input>;
  readonly sender?: Maybe<User_Obj_Rel_Insert_Input>;
  readonly senderId?: Maybe<Scalars['String']>;
  readonly updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type ChatMessage_Max_Fields = {
  readonly __typename?: 'ChatMessage_max_fields';
  readonly chatId?: Maybe<Scalars['uuid']>;
  readonly createdAt?: Maybe<Scalars['timestamptz']>;
  readonly id?: Maybe<Scalars['uuid']>;
  readonly index?: Maybe<Scalars['Int']>;
  readonly senderId?: Maybe<Scalars['String']>;
  readonly updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "ChatMessage" */
export type ChatMessage_Max_Order_By = {
  readonly chatId?: Maybe<Order_By>;
  readonly createdAt?: Maybe<Order_By>;
  readonly id?: Maybe<Order_By>;
  readonly index?: Maybe<Order_By>;
  readonly senderId?: Maybe<Order_By>;
  readonly updatedAt?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type ChatMessage_Min_Fields = {
  readonly __typename?: 'ChatMessage_min_fields';
  readonly chatId?: Maybe<Scalars['uuid']>;
  readonly createdAt?: Maybe<Scalars['timestamptz']>;
  readonly id?: Maybe<Scalars['uuid']>;
  readonly index?: Maybe<Scalars['Int']>;
  readonly senderId?: Maybe<Scalars['String']>;
  readonly updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "ChatMessage" */
export type ChatMessage_Min_Order_By = {
  readonly chatId?: Maybe<Order_By>;
  readonly createdAt?: Maybe<Order_By>;
  readonly id?: Maybe<Order_By>;
  readonly index?: Maybe<Order_By>;
  readonly senderId?: Maybe<Order_By>;
  readonly updatedAt?: Maybe<Order_By>;
};

/** response of any mutation on the table "ChatMessage" */
export type ChatMessage_Mutation_Response = {
  readonly __typename?: 'ChatMessage_mutation_response';
  /** number of affected rows by the mutation */
  readonly affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  readonly returning: ReadonlyArray<ChatMessage>;
};

/** input type for inserting object relation for remote table "ChatMessage" */
export type ChatMessage_Obj_Rel_Insert_Input = {
  readonly data: ChatMessage_Insert_Input;
  readonly on_conflict?: Maybe<ChatMessage_On_Conflict>;
};

/** on conflict condition type for table "ChatMessage" */
export type ChatMessage_On_Conflict = {
  readonly constraint: ChatMessage_Constraint;
  readonly update_columns: ReadonlyArray<ChatMessage_Update_Column>;
  readonly where?: Maybe<ChatMessage_Bool_Exp>;
};

/** ordering options when selecting data from "ChatMessage" */
export type ChatMessage_Order_By = {
  readonly chat?: Maybe<Chat_Order_By>;
  readonly chatId?: Maybe<Order_By>;
  readonly content?: Maybe<Order_By>;
  readonly createdAt?: Maybe<Order_By>;
  readonly flags_aggregate?: Maybe<FlaggedChatMessage_Aggregate_Order_By>;
  readonly id?: Maybe<Order_By>;
  readonly index?: Maybe<Order_By>;
  readonly isHighlighted?: Maybe<Order_By>;
  readonly reactions_aggregate?: Maybe<ChatReaction_Aggregate_Order_By>;
  readonly sender?: Maybe<User_Order_By>;
  readonly senderId?: Maybe<Order_By>;
  readonly updatedAt?: Maybe<Order_By>;
};

/** primary key columns input for table: "ChatMessage" */
export type ChatMessage_Pk_Columns_Input = {
  readonly id: Scalars['uuid'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type ChatMessage_Prepend_Input = {
  readonly content?: Maybe<Scalars['jsonb']>;
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
  readonly chatId?: Maybe<Scalars['uuid']>;
  readonly content?: Maybe<Scalars['jsonb']>;
  readonly createdAt?: Maybe<Scalars['timestamptz']>;
  readonly id?: Maybe<Scalars['uuid']>;
  readonly index?: Maybe<Scalars['Int']>;
  readonly isHighlighted?: Maybe<Scalars['Boolean']>;
  readonly senderId?: Maybe<Scalars['String']>;
  readonly updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type ChatMessage_Stddev_Fields = {
  readonly __typename?: 'ChatMessage_stddev_fields';
  readonly index?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "ChatMessage" */
export type ChatMessage_Stddev_Order_By = {
  readonly index?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type ChatMessage_Stddev_Pop_Fields = {
  readonly __typename?: 'ChatMessage_stddev_pop_fields';
  readonly index?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "ChatMessage" */
export type ChatMessage_Stddev_Pop_Order_By = {
  readonly index?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type ChatMessage_Stddev_Samp_Fields = {
  readonly __typename?: 'ChatMessage_stddev_samp_fields';
  readonly index?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "ChatMessage" */
export type ChatMessage_Stddev_Samp_Order_By = {
  readonly index?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type ChatMessage_Sum_Fields = {
  readonly __typename?: 'ChatMessage_sum_fields';
  readonly index?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "ChatMessage" */
export type ChatMessage_Sum_Order_By = {
  readonly index?: Maybe<Order_By>;
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
  readonly __typename?: 'ChatMessage_var_pop_fields';
  readonly index?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "ChatMessage" */
export type ChatMessage_Var_Pop_Order_By = {
  readonly index?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type ChatMessage_Var_Samp_Fields = {
  readonly __typename?: 'ChatMessage_var_samp_fields';
  readonly index?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "ChatMessage" */
export type ChatMessage_Var_Samp_Order_By = {
  readonly index?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type ChatMessage_Variance_Fields = {
  readonly __typename?: 'ChatMessage_variance_fields';
  readonly index?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "ChatMessage" */
export type ChatMessage_Variance_Order_By = {
  readonly index?: Maybe<Order_By>;
};

/** columns and relationships of "ChatModerator" */
export type ChatModerator = {
  readonly __typename?: 'ChatModerator';
  /** An object relationship */
  readonly chat: Chat;
  readonly chatId: Scalars['uuid'];
  readonly createdAt: Scalars['timestamptz'];
  readonly id: Scalars['uuid'];
  /** An object relationship */
  readonly user: User;
  readonly userId: Scalars['String'];
};

/** aggregated selection of "ChatModerator" */
export type ChatModerator_Aggregate = {
  readonly __typename?: 'ChatModerator_aggregate';
  readonly aggregate?: Maybe<ChatModerator_Aggregate_Fields>;
  readonly nodes: ReadonlyArray<ChatModerator>;
};

/** aggregate fields of "ChatModerator" */
export type ChatModerator_Aggregate_Fields = {
  readonly __typename?: 'ChatModerator_aggregate_fields';
  readonly count?: Maybe<Scalars['Int']>;
  readonly max?: Maybe<ChatModerator_Max_Fields>;
  readonly min?: Maybe<ChatModerator_Min_Fields>;
};


/** aggregate fields of "ChatModerator" */
export type ChatModerator_Aggregate_FieldsCountArgs = {
  columns?: Maybe<ReadonlyArray<ChatModerator_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "ChatModerator" */
export type ChatModerator_Aggregate_Order_By = {
  readonly count?: Maybe<Order_By>;
  readonly max?: Maybe<ChatModerator_Max_Order_By>;
  readonly min?: Maybe<ChatModerator_Min_Order_By>;
};

/** input type for inserting array relation for remote table "ChatModerator" */
export type ChatModerator_Arr_Rel_Insert_Input = {
  readonly data: ReadonlyArray<ChatModerator_Insert_Input>;
  readonly on_conflict?: Maybe<ChatModerator_On_Conflict>;
};

/** Boolean expression to filter rows from the table "ChatModerator". All fields are combined with a logical 'AND'. */
export type ChatModerator_Bool_Exp = {
  readonly _and?: Maybe<ReadonlyArray<Maybe<ChatModerator_Bool_Exp>>>;
  readonly _not?: Maybe<ChatModerator_Bool_Exp>;
  readonly _or?: Maybe<ReadonlyArray<Maybe<ChatModerator_Bool_Exp>>>;
  readonly chat?: Maybe<Chat_Bool_Exp>;
  readonly chatId?: Maybe<Uuid_Comparison_Exp>;
  readonly createdAt?: Maybe<Timestamptz_Comparison_Exp>;
  readonly id?: Maybe<Uuid_Comparison_Exp>;
  readonly user?: Maybe<User_Bool_Exp>;
  readonly userId?: Maybe<String_Comparison_Exp>;
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
  readonly chat?: Maybe<Chat_Obj_Rel_Insert_Input>;
  readonly chatId?: Maybe<Scalars['uuid']>;
  readonly createdAt?: Maybe<Scalars['timestamptz']>;
  readonly id?: Maybe<Scalars['uuid']>;
  readonly user?: Maybe<User_Obj_Rel_Insert_Input>;
  readonly userId?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type ChatModerator_Max_Fields = {
  readonly __typename?: 'ChatModerator_max_fields';
  readonly chatId?: Maybe<Scalars['uuid']>;
  readonly createdAt?: Maybe<Scalars['timestamptz']>;
  readonly id?: Maybe<Scalars['uuid']>;
  readonly userId?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "ChatModerator" */
export type ChatModerator_Max_Order_By = {
  readonly chatId?: Maybe<Order_By>;
  readonly createdAt?: Maybe<Order_By>;
  readonly id?: Maybe<Order_By>;
  readonly userId?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type ChatModerator_Min_Fields = {
  readonly __typename?: 'ChatModerator_min_fields';
  readonly chatId?: Maybe<Scalars['uuid']>;
  readonly createdAt?: Maybe<Scalars['timestamptz']>;
  readonly id?: Maybe<Scalars['uuid']>;
  readonly userId?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "ChatModerator" */
export type ChatModerator_Min_Order_By = {
  readonly chatId?: Maybe<Order_By>;
  readonly createdAt?: Maybe<Order_By>;
  readonly id?: Maybe<Order_By>;
  readonly userId?: Maybe<Order_By>;
};

/** response of any mutation on the table "ChatModerator" */
export type ChatModerator_Mutation_Response = {
  readonly __typename?: 'ChatModerator_mutation_response';
  /** number of affected rows by the mutation */
  readonly affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  readonly returning: ReadonlyArray<ChatModerator>;
};

/** input type for inserting object relation for remote table "ChatModerator" */
export type ChatModerator_Obj_Rel_Insert_Input = {
  readonly data: ChatModerator_Insert_Input;
  readonly on_conflict?: Maybe<ChatModerator_On_Conflict>;
};

/** on conflict condition type for table "ChatModerator" */
export type ChatModerator_On_Conflict = {
  readonly constraint: ChatModerator_Constraint;
  readonly update_columns: ReadonlyArray<ChatModerator_Update_Column>;
  readonly where?: Maybe<ChatModerator_Bool_Exp>;
};

/** ordering options when selecting data from "ChatModerator" */
export type ChatModerator_Order_By = {
  readonly chat?: Maybe<Chat_Order_By>;
  readonly chatId?: Maybe<Order_By>;
  readonly createdAt?: Maybe<Order_By>;
  readonly id?: Maybe<Order_By>;
  readonly user?: Maybe<User_Order_By>;
  readonly userId?: Maybe<Order_By>;
};

/** primary key columns input for table: "ChatModerator" */
export type ChatModerator_Pk_Columns_Input = {
  readonly id: Scalars['uuid'];
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
  readonly chatId?: Maybe<Scalars['uuid']>;
  readonly createdAt?: Maybe<Scalars['timestamptz']>;
  readonly id?: Maybe<Scalars['uuid']>;
  readonly userId?: Maybe<Scalars['String']>;
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
  readonly __typename?: 'ChatReaction';
  readonly createdAt: Scalars['timestamptz'];
  readonly id: Scalars['uuid'];
  /** An object relationship */
  readonly message: ChatMessage;
  readonly messageId: Scalars['uuid'];
  readonly reaction: Scalars['String'];
  /** An object relationship */
  readonly reactor: User;
  readonly reactorId: Scalars['String'];
};

/** aggregated selection of "ChatReaction" */
export type ChatReaction_Aggregate = {
  readonly __typename?: 'ChatReaction_aggregate';
  readonly aggregate?: Maybe<ChatReaction_Aggregate_Fields>;
  readonly nodes: ReadonlyArray<ChatReaction>;
};

/** aggregate fields of "ChatReaction" */
export type ChatReaction_Aggregate_Fields = {
  readonly __typename?: 'ChatReaction_aggregate_fields';
  readonly count?: Maybe<Scalars['Int']>;
  readonly max?: Maybe<ChatReaction_Max_Fields>;
  readonly min?: Maybe<ChatReaction_Min_Fields>;
};


/** aggregate fields of "ChatReaction" */
export type ChatReaction_Aggregate_FieldsCountArgs = {
  columns?: Maybe<ReadonlyArray<ChatReaction_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "ChatReaction" */
export type ChatReaction_Aggregate_Order_By = {
  readonly count?: Maybe<Order_By>;
  readonly max?: Maybe<ChatReaction_Max_Order_By>;
  readonly min?: Maybe<ChatReaction_Min_Order_By>;
};

/** input type for inserting array relation for remote table "ChatReaction" */
export type ChatReaction_Arr_Rel_Insert_Input = {
  readonly data: ReadonlyArray<ChatReaction_Insert_Input>;
  readonly on_conflict?: Maybe<ChatReaction_On_Conflict>;
};

/** Boolean expression to filter rows from the table "ChatReaction". All fields are combined with a logical 'AND'. */
export type ChatReaction_Bool_Exp = {
  readonly _and?: Maybe<ReadonlyArray<Maybe<ChatReaction_Bool_Exp>>>;
  readonly _not?: Maybe<ChatReaction_Bool_Exp>;
  readonly _or?: Maybe<ReadonlyArray<Maybe<ChatReaction_Bool_Exp>>>;
  readonly createdAt?: Maybe<Timestamptz_Comparison_Exp>;
  readonly id?: Maybe<Uuid_Comparison_Exp>;
  readonly message?: Maybe<ChatMessage_Bool_Exp>;
  readonly messageId?: Maybe<Uuid_Comparison_Exp>;
  readonly reaction?: Maybe<String_Comparison_Exp>;
  readonly reactor?: Maybe<User_Bool_Exp>;
  readonly reactorId?: Maybe<String_Comparison_Exp>;
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
  readonly createdAt?: Maybe<Scalars['timestamptz']>;
  readonly id?: Maybe<Scalars['uuid']>;
  readonly message?: Maybe<ChatMessage_Obj_Rel_Insert_Input>;
  readonly messageId?: Maybe<Scalars['uuid']>;
  readonly reaction?: Maybe<Scalars['String']>;
  readonly reactor?: Maybe<User_Obj_Rel_Insert_Input>;
  readonly reactorId?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type ChatReaction_Max_Fields = {
  readonly __typename?: 'ChatReaction_max_fields';
  readonly createdAt?: Maybe<Scalars['timestamptz']>;
  readonly id?: Maybe<Scalars['uuid']>;
  readonly messageId?: Maybe<Scalars['uuid']>;
  readonly reaction?: Maybe<Scalars['String']>;
  readonly reactorId?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "ChatReaction" */
export type ChatReaction_Max_Order_By = {
  readonly createdAt?: Maybe<Order_By>;
  readonly id?: Maybe<Order_By>;
  readonly messageId?: Maybe<Order_By>;
  readonly reaction?: Maybe<Order_By>;
  readonly reactorId?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type ChatReaction_Min_Fields = {
  readonly __typename?: 'ChatReaction_min_fields';
  readonly createdAt?: Maybe<Scalars['timestamptz']>;
  readonly id?: Maybe<Scalars['uuid']>;
  readonly messageId?: Maybe<Scalars['uuid']>;
  readonly reaction?: Maybe<Scalars['String']>;
  readonly reactorId?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "ChatReaction" */
export type ChatReaction_Min_Order_By = {
  readonly createdAt?: Maybe<Order_By>;
  readonly id?: Maybe<Order_By>;
  readonly messageId?: Maybe<Order_By>;
  readonly reaction?: Maybe<Order_By>;
  readonly reactorId?: Maybe<Order_By>;
};

/** response of any mutation on the table "ChatReaction" */
export type ChatReaction_Mutation_Response = {
  readonly __typename?: 'ChatReaction_mutation_response';
  /** number of affected rows by the mutation */
  readonly affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  readonly returning: ReadonlyArray<ChatReaction>;
};

/** input type for inserting object relation for remote table "ChatReaction" */
export type ChatReaction_Obj_Rel_Insert_Input = {
  readonly data: ChatReaction_Insert_Input;
  readonly on_conflict?: Maybe<ChatReaction_On_Conflict>;
};

/** on conflict condition type for table "ChatReaction" */
export type ChatReaction_On_Conflict = {
  readonly constraint: ChatReaction_Constraint;
  readonly update_columns: ReadonlyArray<ChatReaction_Update_Column>;
  readonly where?: Maybe<ChatReaction_Bool_Exp>;
};

/** ordering options when selecting data from "ChatReaction" */
export type ChatReaction_Order_By = {
  readonly createdAt?: Maybe<Order_By>;
  readonly id?: Maybe<Order_By>;
  readonly message?: Maybe<ChatMessage_Order_By>;
  readonly messageId?: Maybe<Order_By>;
  readonly reaction?: Maybe<Order_By>;
  readonly reactor?: Maybe<User_Order_By>;
  readonly reactorId?: Maybe<Order_By>;
};

/** primary key columns input for table: "ChatReaction" */
export type ChatReaction_Pk_Columns_Input = {
  readonly id: Scalars['uuid'];
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
  readonly createdAt?: Maybe<Scalars['timestamptz']>;
  readonly id?: Maybe<Scalars['uuid']>;
  readonly messageId?: Maybe<Scalars['uuid']>;
  readonly reaction?: Maybe<Scalars['String']>;
  readonly reactorId?: Maybe<Scalars['String']>;
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
  readonly __typename?: 'ChatTyper';
  /** An object relationship */
  readonly chat: Chat;
  readonly chatId: Scalars['uuid'];
  readonly id: Scalars['uuid'];
  readonly updatedAt: Scalars['timestamptz'];
  /** An object relationship */
  readonly user: User;
  readonly userId: Scalars['String'];
};

/** aggregated selection of "ChatTyper" */
export type ChatTyper_Aggregate = {
  readonly __typename?: 'ChatTyper_aggregate';
  readonly aggregate?: Maybe<ChatTyper_Aggregate_Fields>;
  readonly nodes: ReadonlyArray<ChatTyper>;
};

/** aggregate fields of "ChatTyper" */
export type ChatTyper_Aggregate_Fields = {
  readonly __typename?: 'ChatTyper_aggregate_fields';
  readonly count?: Maybe<Scalars['Int']>;
  readonly max?: Maybe<ChatTyper_Max_Fields>;
  readonly min?: Maybe<ChatTyper_Min_Fields>;
};


/** aggregate fields of "ChatTyper" */
export type ChatTyper_Aggregate_FieldsCountArgs = {
  columns?: Maybe<ReadonlyArray<ChatTyper_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "ChatTyper" */
export type ChatTyper_Aggregate_Order_By = {
  readonly count?: Maybe<Order_By>;
  readonly max?: Maybe<ChatTyper_Max_Order_By>;
  readonly min?: Maybe<ChatTyper_Min_Order_By>;
};

/** input type for inserting array relation for remote table "ChatTyper" */
export type ChatTyper_Arr_Rel_Insert_Input = {
  readonly data: ReadonlyArray<ChatTyper_Insert_Input>;
  readonly on_conflict?: Maybe<ChatTyper_On_Conflict>;
};

/** Boolean expression to filter rows from the table "ChatTyper". All fields are combined with a logical 'AND'. */
export type ChatTyper_Bool_Exp = {
  readonly _and?: Maybe<ReadonlyArray<Maybe<ChatTyper_Bool_Exp>>>;
  readonly _not?: Maybe<ChatTyper_Bool_Exp>;
  readonly _or?: Maybe<ReadonlyArray<Maybe<ChatTyper_Bool_Exp>>>;
  readonly chat?: Maybe<Chat_Bool_Exp>;
  readonly chatId?: Maybe<Uuid_Comparison_Exp>;
  readonly id?: Maybe<Uuid_Comparison_Exp>;
  readonly updatedAt?: Maybe<Timestamptz_Comparison_Exp>;
  readonly user?: Maybe<User_Bool_Exp>;
  readonly userId?: Maybe<String_Comparison_Exp>;
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
  readonly chat?: Maybe<Chat_Obj_Rel_Insert_Input>;
  readonly chatId?: Maybe<Scalars['uuid']>;
  readonly id?: Maybe<Scalars['uuid']>;
  readonly updatedAt?: Maybe<Scalars['timestamptz']>;
  readonly user?: Maybe<User_Obj_Rel_Insert_Input>;
  readonly userId?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type ChatTyper_Max_Fields = {
  readonly __typename?: 'ChatTyper_max_fields';
  readonly chatId?: Maybe<Scalars['uuid']>;
  readonly id?: Maybe<Scalars['uuid']>;
  readonly updatedAt?: Maybe<Scalars['timestamptz']>;
  readonly userId?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "ChatTyper" */
export type ChatTyper_Max_Order_By = {
  readonly chatId?: Maybe<Order_By>;
  readonly id?: Maybe<Order_By>;
  readonly updatedAt?: Maybe<Order_By>;
  readonly userId?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type ChatTyper_Min_Fields = {
  readonly __typename?: 'ChatTyper_min_fields';
  readonly chatId?: Maybe<Scalars['uuid']>;
  readonly id?: Maybe<Scalars['uuid']>;
  readonly updatedAt?: Maybe<Scalars['timestamptz']>;
  readonly userId?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "ChatTyper" */
export type ChatTyper_Min_Order_By = {
  readonly chatId?: Maybe<Order_By>;
  readonly id?: Maybe<Order_By>;
  readonly updatedAt?: Maybe<Order_By>;
  readonly userId?: Maybe<Order_By>;
};

/** response of any mutation on the table "ChatTyper" */
export type ChatTyper_Mutation_Response = {
  readonly __typename?: 'ChatTyper_mutation_response';
  /** number of affected rows by the mutation */
  readonly affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  readonly returning: ReadonlyArray<ChatTyper>;
};

/** input type for inserting object relation for remote table "ChatTyper" */
export type ChatTyper_Obj_Rel_Insert_Input = {
  readonly data: ChatTyper_Insert_Input;
  readonly on_conflict?: Maybe<ChatTyper_On_Conflict>;
};

/** on conflict condition type for table "ChatTyper" */
export type ChatTyper_On_Conflict = {
  readonly constraint: ChatTyper_Constraint;
  readonly update_columns: ReadonlyArray<ChatTyper_Update_Column>;
  readonly where?: Maybe<ChatTyper_Bool_Exp>;
};

/** ordering options when selecting data from "ChatTyper" */
export type ChatTyper_Order_By = {
  readonly chat?: Maybe<Chat_Order_By>;
  readonly chatId?: Maybe<Order_By>;
  readonly id?: Maybe<Order_By>;
  readonly updatedAt?: Maybe<Order_By>;
  readonly user?: Maybe<User_Order_By>;
  readonly userId?: Maybe<Order_By>;
};

/** primary key columns input for table: "ChatTyper" */
export type ChatTyper_Pk_Columns_Input = {
  readonly id: Scalars['uuid'];
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
  readonly chatId?: Maybe<Scalars['uuid']>;
  readonly id?: Maybe<Scalars['uuid']>;
  readonly updatedAt?: Maybe<Scalars['timestamptz']>;
  readonly userId?: Maybe<Scalars['String']>;
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
  readonly __typename?: 'ChatUnreadIndex';
  /** An object relationship */
  readonly chat: Chat;
  readonly chatId: Scalars['uuid'];
  readonly id: Scalars['uuid'];
  readonly index?: Maybe<Scalars['Int']>;
  /** An object relationship */
  readonly user: User;
  readonly userId: Scalars['String'];
};

/** aggregated selection of "ChatUnreadIndex" */
export type ChatUnreadIndex_Aggregate = {
  readonly __typename?: 'ChatUnreadIndex_aggregate';
  readonly aggregate?: Maybe<ChatUnreadIndex_Aggregate_Fields>;
  readonly nodes: ReadonlyArray<ChatUnreadIndex>;
};

/** aggregate fields of "ChatUnreadIndex" */
export type ChatUnreadIndex_Aggregate_Fields = {
  readonly __typename?: 'ChatUnreadIndex_aggregate_fields';
  readonly avg?: Maybe<ChatUnreadIndex_Avg_Fields>;
  readonly count?: Maybe<Scalars['Int']>;
  readonly max?: Maybe<ChatUnreadIndex_Max_Fields>;
  readonly min?: Maybe<ChatUnreadIndex_Min_Fields>;
  readonly stddev?: Maybe<ChatUnreadIndex_Stddev_Fields>;
  readonly stddev_pop?: Maybe<ChatUnreadIndex_Stddev_Pop_Fields>;
  readonly stddev_samp?: Maybe<ChatUnreadIndex_Stddev_Samp_Fields>;
  readonly sum?: Maybe<ChatUnreadIndex_Sum_Fields>;
  readonly var_pop?: Maybe<ChatUnreadIndex_Var_Pop_Fields>;
  readonly var_samp?: Maybe<ChatUnreadIndex_Var_Samp_Fields>;
  readonly variance?: Maybe<ChatUnreadIndex_Variance_Fields>;
};


/** aggregate fields of "ChatUnreadIndex" */
export type ChatUnreadIndex_Aggregate_FieldsCountArgs = {
  columns?: Maybe<ReadonlyArray<ChatUnreadIndex_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "ChatUnreadIndex" */
export type ChatUnreadIndex_Aggregate_Order_By = {
  readonly avg?: Maybe<ChatUnreadIndex_Avg_Order_By>;
  readonly count?: Maybe<Order_By>;
  readonly max?: Maybe<ChatUnreadIndex_Max_Order_By>;
  readonly min?: Maybe<ChatUnreadIndex_Min_Order_By>;
  readonly stddev?: Maybe<ChatUnreadIndex_Stddev_Order_By>;
  readonly stddev_pop?: Maybe<ChatUnreadIndex_Stddev_Pop_Order_By>;
  readonly stddev_samp?: Maybe<ChatUnreadIndex_Stddev_Samp_Order_By>;
  readonly sum?: Maybe<ChatUnreadIndex_Sum_Order_By>;
  readonly var_pop?: Maybe<ChatUnreadIndex_Var_Pop_Order_By>;
  readonly var_samp?: Maybe<ChatUnreadIndex_Var_Samp_Order_By>;
  readonly variance?: Maybe<ChatUnreadIndex_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "ChatUnreadIndex" */
export type ChatUnreadIndex_Arr_Rel_Insert_Input = {
  readonly data: ReadonlyArray<ChatUnreadIndex_Insert_Input>;
  readonly on_conflict?: Maybe<ChatUnreadIndex_On_Conflict>;
};

/** aggregate avg on columns */
export type ChatUnreadIndex_Avg_Fields = {
  readonly __typename?: 'ChatUnreadIndex_avg_fields';
  readonly index?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "ChatUnreadIndex" */
export type ChatUnreadIndex_Avg_Order_By = {
  readonly index?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "ChatUnreadIndex". All fields are combined with a logical 'AND'. */
export type ChatUnreadIndex_Bool_Exp = {
  readonly _and?: Maybe<ReadonlyArray<Maybe<ChatUnreadIndex_Bool_Exp>>>;
  readonly _not?: Maybe<ChatUnreadIndex_Bool_Exp>;
  readonly _or?: Maybe<ReadonlyArray<Maybe<ChatUnreadIndex_Bool_Exp>>>;
  readonly chat?: Maybe<Chat_Bool_Exp>;
  readonly chatId?: Maybe<Uuid_Comparison_Exp>;
  readonly id?: Maybe<Uuid_Comparison_Exp>;
  readonly index?: Maybe<Int_Comparison_Exp>;
  readonly user?: Maybe<User_Bool_Exp>;
  readonly userId?: Maybe<String_Comparison_Exp>;
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
  readonly index?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "ChatUnreadIndex" */
export type ChatUnreadIndex_Insert_Input = {
  readonly chat?: Maybe<Chat_Obj_Rel_Insert_Input>;
  readonly chatId?: Maybe<Scalars['uuid']>;
  readonly id?: Maybe<Scalars['uuid']>;
  readonly index?: Maybe<Scalars['Int']>;
  readonly user?: Maybe<User_Obj_Rel_Insert_Input>;
  readonly userId?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type ChatUnreadIndex_Max_Fields = {
  readonly __typename?: 'ChatUnreadIndex_max_fields';
  readonly chatId?: Maybe<Scalars['uuid']>;
  readonly id?: Maybe<Scalars['uuid']>;
  readonly index?: Maybe<Scalars['Int']>;
  readonly userId?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "ChatUnreadIndex" */
export type ChatUnreadIndex_Max_Order_By = {
  readonly chatId?: Maybe<Order_By>;
  readonly id?: Maybe<Order_By>;
  readonly index?: Maybe<Order_By>;
  readonly userId?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type ChatUnreadIndex_Min_Fields = {
  readonly __typename?: 'ChatUnreadIndex_min_fields';
  readonly chatId?: Maybe<Scalars['uuid']>;
  readonly id?: Maybe<Scalars['uuid']>;
  readonly index?: Maybe<Scalars['Int']>;
  readonly userId?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "ChatUnreadIndex" */
export type ChatUnreadIndex_Min_Order_By = {
  readonly chatId?: Maybe<Order_By>;
  readonly id?: Maybe<Order_By>;
  readonly index?: Maybe<Order_By>;
  readonly userId?: Maybe<Order_By>;
};

/** response of any mutation on the table "ChatUnreadIndex" */
export type ChatUnreadIndex_Mutation_Response = {
  readonly __typename?: 'ChatUnreadIndex_mutation_response';
  /** number of affected rows by the mutation */
  readonly affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  readonly returning: ReadonlyArray<ChatUnreadIndex>;
};

/** input type for inserting object relation for remote table "ChatUnreadIndex" */
export type ChatUnreadIndex_Obj_Rel_Insert_Input = {
  readonly data: ChatUnreadIndex_Insert_Input;
  readonly on_conflict?: Maybe<ChatUnreadIndex_On_Conflict>;
};

/** on conflict condition type for table "ChatUnreadIndex" */
export type ChatUnreadIndex_On_Conflict = {
  readonly constraint: ChatUnreadIndex_Constraint;
  readonly update_columns: ReadonlyArray<ChatUnreadIndex_Update_Column>;
  readonly where?: Maybe<ChatUnreadIndex_Bool_Exp>;
};

/** ordering options when selecting data from "ChatUnreadIndex" */
export type ChatUnreadIndex_Order_By = {
  readonly chat?: Maybe<Chat_Order_By>;
  readonly chatId?: Maybe<Order_By>;
  readonly id?: Maybe<Order_By>;
  readonly index?: Maybe<Order_By>;
  readonly user?: Maybe<User_Order_By>;
  readonly userId?: Maybe<Order_By>;
};

/** primary key columns input for table: "ChatUnreadIndex" */
export type ChatUnreadIndex_Pk_Columns_Input = {
  readonly id: Scalars['uuid'];
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
  readonly chatId?: Maybe<Scalars['uuid']>;
  readonly id?: Maybe<Scalars['uuid']>;
  readonly index?: Maybe<Scalars['Int']>;
  readonly userId?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type ChatUnreadIndex_Stddev_Fields = {
  readonly __typename?: 'ChatUnreadIndex_stddev_fields';
  readonly index?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "ChatUnreadIndex" */
export type ChatUnreadIndex_Stddev_Order_By = {
  readonly index?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type ChatUnreadIndex_Stddev_Pop_Fields = {
  readonly __typename?: 'ChatUnreadIndex_stddev_pop_fields';
  readonly index?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "ChatUnreadIndex" */
export type ChatUnreadIndex_Stddev_Pop_Order_By = {
  readonly index?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type ChatUnreadIndex_Stddev_Samp_Fields = {
  readonly __typename?: 'ChatUnreadIndex_stddev_samp_fields';
  readonly index?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "ChatUnreadIndex" */
export type ChatUnreadIndex_Stddev_Samp_Order_By = {
  readonly index?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type ChatUnreadIndex_Sum_Fields = {
  readonly __typename?: 'ChatUnreadIndex_sum_fields';
  readonly index?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "ChatUnreadIndex" */
export type ChatUnreadIndex_Sum_Order_By = {
  readonly index?: Maybe<Order_By>;
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
  readonly __typename?: 'ChatUnreadIndex_var_pop_fields';
  readonly index?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "ChatUnreadIndex" */
export type ChatUnreadIndex_Var_Pop_Order_By = {
  readonly index?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type ChatUnreadIndex_Var_Samp_Fields = {
  readonly __typename?: 'ChatUnreadIndex_var_samp_fields';
  readonly index?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "ChatUnreadIndex" */
export type ChatUnreadIndex_Var_Samp_Order_By = {
  readonly index?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type ChatUnreadIndex_Variance_Fields = {
  readonly __typename?: 'ChatUnreadIndex_variance_fields';
  readonly index?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "ChatUnreadIndex" */
export type ChatUnreadIndex_Variance_Order_By = {
  readonly index?: Maybe<Order_By>;
};

/** columns and relationships of "ChatViewer" */
export type ChatViewer = {
  readonly __typename?: 'ChatViewer';
  /** An object relationship */
  readonly chat: Chat;
  readonly chatId: Scalars['uuid'];
  readonly id: Scalars['uuid'];
  readonly lastSeen: Scalars['timestamptz'];
  /** An object relationship */
  readonly user: User;
  readonly userId: Scalars['String'];
};

/** aggregated selection of "ChatViewer" */
export type ChatViewer_Aggregate = {
  readonly __typename?: 'ChatViewer_aggregate';
  readonly aggregate?: Maybe<ChatViewer_Aggregate_Fields>;
  readonly nodes: ReadonlyArray<ChatViewer>;
};

/** aggregate fields of "ChatViewer" */
export type ChatViewer_Aggregate_Fields = {
  readonly __typename?: 'ChatViewer_aggregate_fields';
  readonly count?: Maybe<Scalars['Int']>;
  readonly max?: Maybe<ChatViewer_Max_Fields>;
  readonly min?: Maybe<ChatViewer_Min_Fields>;
};


/** aggregate fields of "ChatViewer" */
export type ChatViewer_Aggregate_FieldsCountArgs = {
  columns?: Maybe<ReadonlyArray<ChatViewer_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "ChatViewer" */
export type ChatViewer_Aggregate_Order_By = {
  readonly count?: Maybe<Order_By>;
  readonly max?: Maybe<ChatViewer_Max_Order_By>;
  readonly min?: Maybe<ChatViewer_Min_Order_By>;
};

/** input type for inserting array relation for remote table "ChatViewer" */
export type ChatViewer_Arr_Rel_Insert_Input = {
  readonly data: ReadonlyArray<ChatViewer_Insert_Input>;
  readonly on_conflict?: Maybe<ChatViewer_On_Conflict>;
};

/** Boolean expression to filter rows from the table "ChatViewer". All fields are combined with a logical 'AND'. */
export type ChatViewer_Bool_Exp = {
  readonly _and?: Maybe<ReadonlyArray<Maybe<ChatViewer_Bool_Exp>>>;
  readonly _not?: Maybe<ChatViewer_Bool_Exp>;
  readonly _or?: Maybe<ReadonlyArray<Maybe<ChatViewer_Bool_Exp>>>;
  readonly chat?: Maybe<Chat_Bool_Exp>;
  readonly chatId?: Maybe<Uuid_Comparison_Exp>;
  readonly id?: Maybe<Uuid_Comparison_Exp>;
  readonly lastSeen?: Maybe<Timestamptz_Comparison_Exp>;
  readonly user?: Maybe<User_Bool_Exp>;
  readonly userId?: Maybe<String_Comparison_Exp>;
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
  readonly chat?: Maybe<Chat_Obj_Rel_Insert_Input>;
  readonly chatId?: Maybe<Scalars['uuid']>;
  readonly id?: Maybe<Scalars['uuid']>;
  readonly lastSeen?: Maybe<Scalars['timestamptz']>;
  readonly user?: Maybe<User_Obj_Rel_Insert_Input>;
  readonly userId?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type ChatViewer_Max_Fields = {
  readonly __typename?: 'ChatViewer_max_fields';
  readonly chatId?: Maybe<Scalars['uuid']>;
  readonly id?: Maybe<Scalars['uuid']>;
  readonly lastSeen?: Maybe<Scalars['timestamptz']>;
  readonly userId?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "ChatViewer" */
export type ChatViewer_Max_Order_By = {
  readonly chatId?: Maybe<Order_By>;
  readonly id?: Maybe<Order_By>;
  readonly lastSeen?: Maybe<Order_By>;
  readonly userId?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type ChatViewer_Min_Fields = {
  readonly __typename?: 'ChatViewer_min_fields';
  readonly chatId?: Maybe<Scalars['uuid']>;
  readonly id?: Maybe<Scalars['uuid']>;
  readonly lastSeen?: Maybe<Scalars['timestamptz']>;
  readonly userId?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "ChatViewer" */
export type ChatViewer_Min_Order_By = {
  readonly chatId?: Maybe<Order_By>;
  readonly id?: Maybe<Order_By>;
  readonly lastSeen?: Maybe<Order_By>;
  readonly userId?: Maybe<Order_By>;
};

/** response of any mutation on the table "ChatViewer" */
export type ChatViewer_Mutation_Response = {
  readonly __typename?: 'ChatViewer_mutation_response';
  /** number of affected rows by the mutation */
  readonly affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  readonly returning: ReadonlyArray<ChatViewer>;
};

/** input type for inserting object relation for remote table "ChatViewer" */
export type ChatViewer_Obj_Rel_Insert_Input = {
  readonly data: ChatViewer_Insert_Input;
  readonly on_conflict?: Maybe<ChatViewer_On_Conflict>;
};

/** on conflict condition type for table "ChatViewer" */
export type ChatViewer_On_Conflict = {
  readonly constraint: ChatViewer_Constraint;
  readonly update_columns: ReadonlyArray<ChatViewer_Update_Column>;
  readonly where?: Maybe<ChatViewer_Bool_Exp>;
};

/** ordering options when selecting data from "ChatViewer" */
export type ChatViewer_Order_By = {
  readonly chat?: Maybe<Chat_Order_By>;
  readonly chatId?: Maybe<Order_By>;
  readonly id?: Maybe<Order_By>;
  readonly lastSeen?: Maybe<Order_By>;
  readonly user?: Maybe<User_Order_By>;
  readonly userId?: Maybe<Order_By>;
};

/** primary key columns input for table: "ChatViewer" */
export type ChatViewer_Pk_Columns_Input = {
  readonly id: Scalars['uuid'];
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
  readonly chatId?: Maybe<Scalars['uuid']>;
  readonly id?: Maybe<Scalars['uuid']>;
  readonly lastSeen?: Maybe<Scalars['timestamptz']>;
  readonly userId?: Maybe<Scalars['String']>;
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
  readonly __typename?: 'Chat_aggregate';
  readonly aggregate?: Maybe<Chat_Aggregate_Fields>;
  readonly nodes: ReadonlyArray<Chat>;
};

/** aggregate fields of "Chat" */
export type Chat_Aggregate_Fields = {
  readonly __typename?: 'Chat_aggregate_fields';
  readonly count?: Maybe<Scalars['Int']>;
  readonly max?: Maybe<Chat_Max_Fields>;
  readonly min?: Maybe<Chat_Min_Fields>;
};


/** aggregate fields of "Chat" */
export type Chat_Aggregate_FieldsCountArgs = {
  columns?: Maybe<ReadonlyArray<Chat_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "Chat" */
export type Chat_Aggregate_Order_By = {
  readonly count?: Maybe<Order_By>;
  readonly max?: Maybe<Chat_Max_Order_By>;
  readonly min?: Maybe<Chat_Min_Order_By>;
};

/** input type for inserting array relation for remote table "Chat" */
export type Chat_Arr_Rel_Insert_Input = {
  readonly data: ReadonlyArray<Chat_Insert_Input>;
  readonly on_conflict?: Maybe<Chat_On_Conflict>;
};

/** Boolean expression to filter rows from the table "Chat". All fields are combined with a logical 'AND'. */
export type Chat_Bool_Exp = {
  readonly _and?: Maybe<ReadonlyArray<Maybe<Chat_Bool_Exp>>>;
  readonly _not?: Maybe<Chat_Bool_Exp>;
  readonly _or?: Maybe<ReadonlyArray<Maybe<Chat_Bool_Exp>>>;
  readonly createdAt?: Maybe<Timestamptz_Comparison_Exp>;
  readonly creator?: Maybe<User_Bool_Exp>;
  readonly creatorId?: Maybe<String_Comparison_Exp>;
  readonly description?: Maybe<String_Comparison_Exp>;
  readonly flaggedMessages?: Maybe<FlaggedChatMessage_Bool_Exp>;
  readonly id?: Maybe<Uuid_Comparison_Exp>;
  readonly isAutoNotify?: Maybe<Boolean_Comparison_Exp>;
  readonly isAutoPin?: Maybe<Boolean_Comparison_Exp>;
  readonly members?: Maybe<ChatMember_Bool_Exp>;
  readonly messages?: Maybe<ChatMessage_Bool_Exp>;
  readonly mode?: Maybe<String_Comparison_Exp>;
  readonly moderators?: Maybe<ChatModerator_Bool_Exp>;
  readonly name?: Maybe<String_Comparison_Exp>;
  readonly typers?: Maybe<ChatTyper_Bool_Exp>;
  readonly updatedAt?: Maybe<Timestamptz_Comparison_Exp>;
  readonly viewers?: Maybe<ChatViewer_Bool_Exp>;
};

/** unique or primary key constraints on table "Chat" */
export enum Chat_Constraint {
  /** unique or primary key constraint */
  ChatPkey = 'Chat_pkey'
}

/** input type for inserting data into table "Chat" */
export type Chat_Insert_Input = {
  readonly createdAt?: Maybe<Scalars['timestamptz']>;
  readonly creator?: Maybe<User_Obj_Rel_Insert_Input>;
  readonly creatorId?: Maybe<Scalars['String']>;
  readonly description?: Maybe<Scalars['String']>;
  readonly flaggedMessages?: Maybe<FlaggedChatMessage_Arr_Rel_Insert_Input>;
  readonly id?: Maybe<Scalars['uuid']>;
  readonly isAutoNotify?: Maybe<Scalars['Boolean']>;
  readonly isAutoPin?: Maybe<Scalars['Boolean']>;
  readonly members?: Maybe<ChatMember_Arr_Rel_Insert_Input>;
  readonly messages?: Maybe<ChatMessage_Arr_Rel_Insert_Input>;
  readonly mode?: Maybe<Scalars['String']>;
  readonly moderators?: Maybe<ChatModerator_Arr_Rel_Insert_Input>;
  readonly name?: Maybe<Scalars['String']>;
  readonly typers?: Maybe<ChatTyper_Arr_Rel_Insert_Input>;
  readonly updatedAt?: Maybe<Scalars['timestamptz']>;
  readonly viewers?: Maybe<ChatViewer_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Chat_Max_Fields = {
  readonly __typename?: 'Chat_max_fields';
  readonly createdAt?: Maybe<Scalars['timestamptz']>;
  readonly creatorId?: Maybe<Scalars['String']>;
  readonly description?: Maybe<Scalars['String']>;
  readonly id?: Maybe<Scalars['uuid']>;
  readonly mode?: Maybe<Scalars['String']>;
  readonly name?: Maybe<Scalars['String']>;
  readonly updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "Chat" */
export type Chat_Max_Order_By = {
  readonly createdAt?: Maybe<Order_By>;
  readonly creatorId?: Maybe<Order_By>;
  readonly description?: Maybe<Order_By>;
  readonly id?: Maybe<Order_By>;
  readonly mode?: Maybe<Order_By>;
  readonly name?: Maybe<Order_By>;
  readonly updatedAt?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Chat_Min_Fields = {
  readonly __typename?: 'Chat_min_fields';
  readonly createdAt?: Maybe<Scalars['timestamptz']>;
  readonly creatorId?: Maybe<Scalars['String']>;
  readonly description?: Maybe<Scalars['String']>;
  readonly id?: Maybe<Scalars['uuid']>;
  readonly mode?: Maybe<Scalars['String']>;
  readonly name?: Maybe<Scalars['String']>;
  readonly updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "Chat" */
export type Chat_Min_Order_By = {
  readonly createdAt?: Maybe<Order_By>;
  readonly creatorId?: Maybe<Order_By>;
  readonly description?: Maybe<Order_By>;
  readonly id?: Maybe<Order_By>;
  readonly mode?: Maybe<Order_By>;
  readonly name?: Maybe<Order_By>;
  readonly updatedAt?: Maybe<Order_By>;
};

/** response of any mutation on the table "Chat" */
export type Chat_Mutation_Response = {
  readonly __typename?: 'Chat_mutation_response';
  /** number of affected rows by the mutation */
  readonly affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  readonly returning: ReadonlyArray<Chat>;
};

/** input type for inserting object relation for remote table "Chat" */
export type Chat_Obj_Rel_Insert_Input = {
  readonly data: Chat_Insert_Input;
  readonly on_conflict?: Maybe<Chat_On_Conflict>;
};

/** on conflict condition type for table "Chat" */
export type Chat_On_Conflict = {
  readonly constraint: Chat_Constraint;
  readonly update_columns: ReadonlyArray<Chat_Update_Column>;
  readonly where?: Maybe<Chat_Bool_Exp>;
};

/** ordering options when selecting data from "Chat" */
export type Chat_Order_By = {
  readonly createdAt?: Maybe<Order_By>;
  readonly creator?: Maybe<User_Order_By>;
  readonly creatorId?: Maybe<Order_By>;
  readonly description?: Maybe<Order_By>;
  readonly flaggedMessages_aggregate?: Maybe<FlaggedChatMessage_Aggregate_Order_By>;
  readonly id?: Maybe<Order_By>;
  readonly isAutoNotify?: Maybe<Order_By>;
  readonly isAutoPin?: Maybe<Order_By>;
  readonly members_aggregate?: Maybe<ChatMember_Aggregate_Order_By>;
  readonly messages_aggregate?: Maybe<ChatMessage_Aggregate_Order_By>;
  readonly mode?: Maybe<Order_By>;
  readonly moderators_aggregate?: Maybe<ChatModerator_Aggregate_Order_By>;
  readonly name?: Maybe<Order_By>;
  readonly typers_aggregate?: Maybe<ChatTyper_Aggregate_Order_By>;
  readonly updatedAt?: Maybe<Order_By>;
  readonly viewers_aggregate?: Maybe<ChatViewer_Aggregate_Order_By>;
};

/** primary key columns input for table: "Chat" */
export type Chat_Pk_Columns_Input = {
  readonly id: Scalars['uuid'];
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
  readonly createdAt?: Maybe<Scalars['timestamptz']>;
  readonly creatorId?: Maybe<Scalars['String']>;
  readonly description?: Maybe<Scalars['String']>;
  readonly id?: Maybe<Scalars['uuid']>;
  readonly isAutoNotify?: Maybe<Scalars['Boolean']>;
  readonly isAutoPin?: Maybe<Scalars['Boolean']>;
  readonly mode?: Maybe<Scalars['String']>;
  readonly name?: Maybe<Scalars['String']>;
  readonly updatedAt?: Maybe<Scalars['timestamptz']>;
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

/** columns and relationships of "Conference" */
export type Conference = {
  readonly __typename?: 'Conference';
  /** An array relationship */
  readonly activeGroups: ReadonlyArray<ActiveGroup>;
  /** An aggregated array relationship */
  readonly activeGroups_aggregate: ActiveGroup_Aggregate;
  /** An array relationship */
  readonly attendees: ReadonlyArray<Attendee>;
  /** An aggregated array relationship */
  readonly attendees_aggregate: Attendee_Aggregate;
  readonly createdAt: Scalars['timestamptz'];
  readonly createdBy: Scalars['String'];
  /** An object relationship */
  readonly creator: User;
  /** An object relationship */
  readonly demoCode: ConferenceDemoCode;
  readonly demoCodeId: Scalars['uuid'];
  /** An array relationship */
  readonly groups: ReadonlyArray<Group>;
  /** An aggregated array relationship */
  readonly groups_aggregate: Group_Aggregate;
  readonly id: Scalars['uuid'];
  readonly name: Scalars['String'];
  /** An array relationship */
  readonly roles: ReadonlyArray<Role>;
  /** An aggregated array relationship */
  readonly roles_aggregate: Role_Aggregate;
  readonly shortName: Scalars['String'];
  readonly slug: Scalars['String'];
  readonly updatedAt: Scalars['timestamptz'];
};


/** columns and relationships of "Conference" */
export type ConferenceActiveGroupsArgs = {
  distinct_on?: Maybe<ReadonlyArray<ActiveGroup_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<ActiveGroup_Order_By>>;
  where?: Maybe<ActiveGroup_Bool_Exp>;
};


/** columns and relationships of "Conference" */
export type ConferenceActiveGroups_AggregateArgs = {
  distinct_on?: Maybe<ReadonlyArray<ActiveGroup_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<ActiveGroup_Order_By>>;
  where?: Maybe<ActiveGroup_Bool_Exp>;
};


/** columns and relationships of "Conference" */
export type ConferenceAttendeesArgs = {
  distinct_on?: Maybe<ReadonlyArray<Attendee_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<Attendee_Order_By>>;
  where?: Maybe<Attendee_Bool_Exp>;
};


/** columns and relationships of "Conference" */
export type ConferenceAttendees_AggregateArgs = {
  distinct_on?: Maybe<ReadonlyArray<Attendee_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<Attendee_Order_By>>;
  where?: Maybe<Attendee_Bool_Exp>;
};


/** columns and relationships of "Conference" */
export type ConferenceGroupsArgs = {
  distinct_on?: Maybe<ReadonlyArray<Group_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<Group_Order_By>>;
  where?: Maybe<Group_Bool_Exp>;
};


/** columns and relationships of "Conference" */
export type ConferenceGroups_AggregateArgs = {
  distinct_on?: Maybe<ReadonlyArray<Group_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<Group_Order_By>>;
  where?: Maybe<Group_Bool_Exp>;
};


/** columns and relationships of "Conference" */
export type ConferenceRolesArgs = {
  distinct_on?: Maybe<ReadonlyArray<Role_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<Role_Order_By>>;
  where?: Maybe<Role_Bool_Exp>;
};


/** columns and relationships of "Conference" */
export type ConferenceRoles_AggregateArgs = {
  distinct_on?: Maybe<ReadonlyArray<Role_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<Role_Order_By>>;
  where?: Maybe<Role_Bool_Exp>;
};

/** columns and relationships of "ConferenceDemoCode" */
export type ConferenceDemoCode = {
  readonly __typename?: 'ConferenceDemoCode';
  /** An object relationship */
  readonly conference?: Maybe<Conference>;
  readonly createdAt: Scalars['timestamptz'];
  readonly id: Scalars['uuid'];
  readonly note?: Maybe<Scalars['String']>;
  readonly updatedAt: Scalars['timestamptz'];
  /** An object relationship */
  readonly usedBy?: Maybe<User>;
  readonly usedById?: Maybe<Scalars['String']>;
};

/** aggregated selection of "ConferenceDemoCode" */
export type ConferenceDemoCode_Aggregate = {
  readonly __typename?: 'ConferenceDemoCode_aggregate';
  readonly aggregate?: Maybe<ConferenceDemoCode_Aggregate_Fields>;
  readonly nodes: ReadonlyArray<ConferenceDemoCode>;
};

/** aggregate fields of "ConferenceDemoCode" */
export type ConferenceDemoCode_Aggregate_Fields = {
  readonly __typename?: 'ConferenceDemoCode_aggregate_fields';
  readonly count?: Maybe<Scalars['Int']>;
  readonly max?: Maybe<ConferenceDemoCode_Max_Fields>;
  readonly min?: Maybe<ConferenceDemoCode_Min_Fields>;
};


/** aggregate fields of "ConferenceDemoCode" */
export type ConferenceDemoCode_Aggregate_FieldsCountArgs = {
  columns?: Maybe<ReadonlyArray<ConferenceDemoCode_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "ConferenceDemoCode" */
export type ConferenceDemoCode_Aggregate_Order_By = {
  readonly count?: Maybe<Order_By>;
  readonly max?: Maybe<ConferenceDemoCode_Max_Order_By>;
  readonly min?: Maybe<ConferenceDemoCode_Min_Order_By>;
};

/** input type for inserting array relation for remote table "ConferenceDemoCode" */
export type ConferenceDemoCode_Arr_Rel_Insert_Input = {
  readonly data: ReadonlyArray<ConferenceDemoCode_Insert_Input>;
  readonly on_conflict?: Maybe<ConferenceDemoCode_On_Conflict>;
};

/** Boolean expression to filter rows from the table "ConferenceDemoCode". All fields are combined with a logical 'AND'. */
export type ConferenceDemoCode_Bool_Exp = {
  readonly _and?: Maybe<ReadonlyArray<Maybe<ConferenceDemoCode_Bool_Exp>>>;
  readonly _not?: Maybe<ConferenceDemoCode_Bool_Exp>;
  readonly _or?: Maybe<ReadonlyArray<Maybe<ConferenceDemoCode_Bool_Exp>>>;
  readonly conference?: Maybe<Conference_Bool_Exp>;
  readonly createdAt?: Maybe<Timestamptz_Comparison_Exp>;
  readonly id?: Maybe<Uuid_Comparison_Exp>;
  readonly note?: Maybe<String_Comparison_Exp>;
  readonly updatedAt?: Maybe<Timestamptz_Comparison_Exp>;
  readonly usedBy?: Maybe<User_Bool_Exp>;
  readonly usedById?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "ConferenceDemoCode" */
export enum ConferenceDemoCode_Constraint {
  /** unique or primary key constraint */
  ConferenceDemoCodesPkey = 'ConferenceDemoCodes_pkey'
}

/** input type for inserting data into table "ConferenceDemoCode" */
export type ConferenceDemoCode_Insert_Input = {
  readonly conference?: Maybe<Conference_Obj_Rel_Insert_Input>;
  readonly createdAt?: Maybe<Scalars['timestamptz']>;
  readonly id?: Maybe<Scalars['uuid']>;
  readonly note?: Maybe<Scalars['String']>;
  readonly updatedAt?: Maybe<Scalars['timestamptz']>;
  readonly usedBy?: Maybe<User_Obj_Rel_Insert_Input>;
  readonly usedById?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type ConferenceDemoCode_Max_Fields = {
  readonly __typename?: 'ConferenceDemoCode_max_fields';
  readonly createdAt?: Maybe<Scalars['timestamptz']>;
  readonly id?: Maybe<Scalars['uuid']>;
  readonly note?: Maybe<Scalars['String']>;
  readonly updatedAt?: Maybe<Scalars['timestamptz']>;
  readonly usedById?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "ConferenceDemoCode" */
export type ConferenceDemoCode_Max_Order_By = {
  readonly createdAt?: Maybe<Order_By>;
  readonly id?: Maybe<Order_By>;
  readonly note?: Maybe<Order_By>;
  readonly updatedAt?: Maybe<Order_By>;
  readonly usedById?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type ConferenceDemoCode_Min_Fields = {
  readonly __typename?: 'ConferenceDemoCode_min_fields';
  readonly createdAt?: Maybe<Scalars['timestamptz']>;
  readonly id?: Maybe<Scalars['uuid']>;
  readonly note?: Maybe<Scalars['String']>;
  readonly updatedAt?: Maybe<Scalars['timestamptz']>;
  readonly usedById?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "ConferenceDemoCode" */
export type ConferenceDemoCode_Min_Order_By = {
  readonly createdAt?: Maybe<Order_By>;
  readonly id?: Maybe<Order_By>;
  readonly note?: Maybe<Order_By>;
  readonly updatedAt?: Maybe<Order_By>;
  readonly usedById?: Maybe<Order_By>;
};

/** response of any mutation on the table "ConferenceDemoCode" */
export type ConferenceDemoCode_Mutation_Response = {
  readonly __typename?: 'ConferenceDemoCode_mutation_response';
  /** number of affected rows by the mutation */
  readonly affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  readonly returning: ReadonlyArray<ConferenceDemoCode>;
};

/** input type for inserting object relation for remote table "ConferenceDemoCode" */
export type ConferenceDemoCode_Obj_Rel_Insert_Input = {
  readonly data: ConferenceDemoCode_Insert_Input;
  readonly on_conflict?: Maybe<ConferenceDemoCode_On_Conflict>;
};

/** on conflict condition type for table "ConferenceDemoCode" */
export type ConferenceDemoCode_On_Conflict = {
  readonly constraint: ConferenceDemoCode_Constraint;
  readonly update_columns: ReadonlyArray<ConferenceDemoCode_Update_Column>;
  readonly where?: Maybe<ConferenceDemoCode_Bool_Exp>;
};

/** ordering options when selecting data from "ConferenceDemoCode" */
export type ConferenceDemoCode_Order_By = {
  readonly conference?: Maybe<Conference_Order_By>;
  readonly createdAt?: Maybe<Order_By>;
  readonly id?: Maybe<Order_By>;
  readonly note?: Maybe<Order_By>;
  readonly updatedAt?: Maybe<Order_By>;
  readonly usedBy?: Maybe<User_Order_By>;
  readonly usedById?: Maybe<Order_By>;
};

/** primary key columns input for table: "ConferenceDemoCode" */
export type ConferenceDemoCode_Pk_Columns_Input = {
  readonly id: Scalars['uuid'];
};

/** select columns of table "ConferenceDemoCode" */
export enum ConferenceDemoCode_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Note = 'note',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UsedById = 'usedById'
}

/** input type for updating data in table "ConferenceDemoCode" */
export type ConferenceDemoCode_Set_Input = {
  readonly createdAt?: Maybe<Scalars['timestamptz']>;
  readonly id?: Maybe<Scalars['uuid']>;
  readonly note?: Maybe<Scalars['String']>;
  readonly updatedAt?: Maybe<Scalars['timestamptz']>;
  readonly usedById?: Maybe<Scalars['String']>;
};

/** update columns of table "ConferenceDemoCode" */
export enum ConferenceDemoCode_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Note = 'note',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UsedById = 'usedById'
}

/** aggregated selection of "Conference" */
export type Conference_Aggregate = {
  readonly __typename?: 'Conference_aggregate';
  readonly aggregate?: Maybe<Conference_Aggregate_Fields>;
  readonly nodes: ReadonlyArray<Conference>;
};

/** aggregate fields of "Conference" */
export type Conference_Aggregate_Fields = {
  readonly __typename?: 'Conference_aggregate_fields';
  readonly count?: Maybe<Scalars['Int']>;
  readonly max?: Maybe<Conference_Max_Fields>;
  readonly min?: Maybe<Conference_Min_Fields>;
};


/** aggregate fields of "Conference" */
export type Conference_Aggregate_FieldsCountArgs = {
  columns?: Maybe<ReadonlyArray<Conference_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "Conference" */
export type Conference_Aggregate_Order_By = {
  readonly count?: Maybe<Order_By>;
  readonly max?: Maybe<Conference_Max_Order_By>;
  readonly min?: Maybe<Conference_Min_Order_By>;
};

/** input type for inserting array relation for remote table "Conference" */
export type Conference_Arr_Rel_Insert_Input = {
  readonly data: ReadonlyArray<Conference_Insert_Input>;
  readonly on_conflict?: Maybe<Conference_On_Conflict>;
};

/** Boolean expression to filter rows from the table "Conference". All fields are combined with a logical 'AND'. */
export type Conference_Bool_Exp = {
  readonly _and?: Maybe<ReadonlyArray<Maybe<Conference_Bool_Exp>>>;
  readonly _not?: Maybe<Conference_Bool_Exp>;
  readonly _or?: Maybe<ReadonlyArray<Maybe<Conference_Bool_Exp>>>;
  readonly activeGroups?: Maybe<ActiveGroup_Bool_Exp>;
  readonly attendees?: Maybe<Attendee_Bool_Exp>;
  readonly createdAt?: Maybe<Timestamptz_Comparison_Exp>;
  readonly createdBy?: Maybe<String_Comparison_Exp>;
  readonly creator?: Maybe<User_Bool_Exp>;
  readonly demoCode?: Maybe<ConferenceDemoCode_Bool_Exp>;
  readonly demoCodeId?: Maybe<Uuid_Comparison_Exp>;
  readonly groups?: Maybe<Group_Bool_Exp>;
  readonly id?: Maybe<Uuid_Comparison_Exp>;
  readonly name?: Maybe<String_Comparison_Exp>;
  readonly roles?: Maybe<Role_Bool_Exp>;
  readonly shortName?: Maybe<String_Comparison_Exp>;
  readonly slug?: Maybe<String_Comparison_Exp>;
  readonly updatedAt?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "Conference" */
export enum Conference_Constraint {
  /** unique or primary key constraint */
  ConferenceDemoCodeIdKey = 'Conference_demoCodeId_key',
  /** unique or primary key constraint */
  ConferenceNameKey = 'Conference_name_key',
  /** unique or primary key constraint */
  ConferencePkey = 'Conference_pkey',
  /** unique or primary key constraint */
  ConferenceShortNameKey = 'Conference_shortName_key',
  /** unique or primary key constraint */
  ConferenceSlugKey = 'Conference_slug_key'
}

/** input type for inserting data into table "Conference" */
export type Conference_Insert_Input = {
  readonly activeGroups?: Maybe<ActiveGroup_Arr_Rel_Insert_Input>;
  readonly attendees?: Maybe<Attendee_Arr_Rel_Insert_Input>;
  readonly createdAt?: Maybe<Scalars['timestamptz']>;
  readonly createdBy?: Maybe<Scalars['String']>;
  readonly creator?: Maybe<User_Obj_Rel_Insert_Input>;
  readonly demoCode?: Maybe<ConferenceDemoCode_Obj_Rel_Insert_Input>;
  readonly demoCodeId?: Maybe<Scalars['uuid']>;
  readonly groups?: Maybe<Group_Arr_Rel_Insert_Input>;
  readonly id?: Maybe<Scalars['uuid']>;
  readonly name?: Maybe<Scalars['String']>;
  readonly roles?: Maybe<Role_Arr_Rel_Insert_Input>;
  readonly shortName?: Maybe<Scalars['String']>;
  readonly slug?: Maybe<Scalars['String']>;
  readonly updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Conference_Max_Fields = {
  readonly __typename?: 'Conference_max_fields';
  readonly createdAt?: Maybe<Scalars['timestamptz']>;
  readonly createdBy?: Maybe<Scalars['String']>;
  readonly demoCodeId?: Maybe<Scalars['uuid']>;
  readonly id?: Maybe<Scalars['uuid']>;
  readonly name?: Maybe<Scalars['String']>;
  readonly shortName?: Maybe<Scalars['String']>;
  readonly slug?: Maybe<Scalars['String']>;
  readonly updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "Conference" */
export type Conference_Max_Order_By = {
  readonly createdAt?: Maybe<Order_By>;
  readonly createdBy?: Maybe<Order_By>;
  readonly demoCodeId?: Maybe<Order_By>;
  readonly id?: Maybe<Order_By>;
  readonly name?: Maybe<Order_By>;
  readonly shortName?: Maybe<Order_By>;
  readonly slug?: Maybe<Order_By>;
  readonly updatedAt?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Conference_Min_Fields = {
  readonly __typename?: 'Conference_min_fields';
  readonly createdAt?: Maybe<Scalars['timestamptz']>;
  readonly createdBy?: Maybe<Scalars['String']>;
  readonly demoCodeId?: Maybe<Scalars['uuid']>;
  readonly id?: Maybe<Scalars['uuid']>;
  readonly name?: Maybe<Scalars['String']>;
  readonly shortName?: Maybe<Scalars['String']>;
  readonly slug?: Maybe<Scalars['String']>;
  readonly updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "Conference" */
export type Conference_Min_Order_By = {
  readonly createdAt?: Maybe<Order_By>;
  readonly createdBy?: Maybe<Order_By>;
  readonly demoCodeId?: Maybe<Order_By>;
  readonly id?: Maybe<Order_By>;
  readonly name?: Maybe<Order_By>;
  readonly shortName?: Maybe<Order_By>;
  readonly slug?: Maybe<Order_By>;
  readonly updatedAt?: Maybe<Order_By>;
};

/** response of any mutation on the table "Conference" */
export type Conference_Mutation_Response = {
  readonly __typename?: 'Conference_mutation_response';
  /** number of affected rows by the mutation */
  readonly affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  readonly returning: ReadonlyArray<Conference>;
};

/** input type for inserting object relation for remote table "Conference" */
export type Conference_Obj_Rel_Insert_Input = {
  readonly data: Conference_Insert_Input;
  readonly on_conflict?: Maybe<Conference_On_Conflict>;
};

/** on conflict condition type for table "Conference" */
export type Conference_On_Conflict = {
  readonly constraint: Conference_Constraint;
  readonly update_columns: ReadonlyArray<Conference_Update_Column>;
  readonly where?: Maybe<Conference_Bool_Exp>;
};

/** ordering options when selecting data from "Conference" */
export type Conference_Order_By = {
  readonly activeGroups_aggregate?: Maybe<ActiveGroup_Aggregate_Order_By>;
  readonly attendees_aggregate?: Maybe<Attendee_Aggregate_Order_By>;
  readonly createdAt?: Maybe<Order_By>;
  readonly createdBy?: Maybe<Order_By>;
  readonly creator?: Maybe<User_Order_By>;
  readonly demoCode?: Maybe<ConferenceDemoCode_Order_By>;
  readonly demoCodeId?: Maybe<Order_By>;
  readonly groups_aggregate?: Maybe<Group_Aggregate_Order_By>;
  readonly id?: Maybe<Order_By>;
  readonly name?: Maybe<Order_By>;
  readonly roles_aggregate?: Maybe<Role_Aggregate_Order_By>;
  readonly shortName?: Maybe<Order_By>;
  readonly slug?: Maybe<Order_By>;
  readonly updatedAt?: Maybe<Order_By>;
};

/** primary key columns input for table: "Conference" */
export type Conference_Pk_Columns_Input = {
  readonly id: Scalars['uuid'];
};

/** select columns of table "Conference" */
export enum Conference_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  CreatedBy = 'createdBy',
  /** column name */
  DemoCodeId = 'demoCodeId',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  ShortName = 'shortName',
  /** column name */
  Slug = 'slug',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "Conference" */
export type Conference_Set_Input = {
  readonly createdAt?: Maybe<Scalars['timestamptz']>;
  readonly createdBy?: Maybe<Scalars['String']>;
  readonly demoCodeId?: Maybe<Scalars['uuid']>;
  readonly id?: Maybe<Scalars['uuid']>;
  readonly name?: Maybe<Scalars['String']>;
  readonly shortName?: Maybe<Scalars['String']>;
  readonly slug?: Maybe<Scalars['String']>;
  readonly updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** update columns of table "Conference" */
export enum Conference_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  CreatedBy = 'createdBy',
  /** column name */
  DemoCodeId = 'demoCodeId',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  ShortName = 'shortName',
  /** column name */
  Slug = 'slug',
  /** column name */
  UpdatedAt = 'updatedAt'
}

export type EchoInput = {
  readonly message: Scalars['String'];
};

export type EchoOutput = {
  readonly __typename?: 'EchoOutput';
  readonly message: Scalars['String'];
};

/** columns and relationships of "FlaggedChatMessage" */
export type FlaggedChatMessage = {
  readonly __typename?: 'FlaggedChatMessage';
  readonly createdAt: Scalars['timestamptz'];
  /** An object relationship */
  readonly flaggedBy: User;
  readonly flaggedById: Scalars['String'];
  readonly id: Scalars['uuid'];
  /** An object relationship */
  readonly message: ChatMessage;
  readonly messageId: Scalars['uuid'];
  /** An object relationship */
  readonly moderationChat?: Maybe<Chat>;
  readonly moderationChatId?: Maybe<Scalars['uuid']>;
  readonly notes?: Maybe<Scalars['String']>;
  readonly resolutionAction?: Maybe<Scalars['String']>;
  readonly resolvedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregated selection of "FlaggedChatMessage" */
export type FlaggedChatMessage_Aggregate = {
  readonly __typename?: 'FlaggedChatMessage_aggregate';
  readonly aggregate?: Maybe<FlaggedChatMessage_Aggregate_Fields>;
  readonly nodes: ReadonlyArray<FlaggedChatMessage>;
};

/** aggregate fields of "FlaggedChatMessage" */
export type FlaggedChatMessage_Aggregate_Fields = {
  readonly __typename?: 'FlaggedChatMessage_aggregate_fields';
  readonly count?: Maybe<Scalars['Int']>;
  readonly max?: Maybe<FlaggedChatMessage_Max_Fields>;
  readonly min?: Maybe<FlaggedChatMessage_Min_Fields>;
};


/** aggregate fields of "FlaggedChatMessage" */
export type FlaggedChatMessage_Aggregate_FieldsCountArgs = {
  columns?: Maybe<ReadonlyArray<FlaggedChatMessage_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "FlaggedChatMessage" */
export type FlaggedChatMessage_Aggregate_Order_By = {
  readonly count?: Maybe<Order_By>;
  readonly max?: Maybe<FlaggedChatMessage_Max_Order_By>;
  readonly min?: Maybe<FlaggedChatMessage_Min_Order_By>;
};

/** input type for inserting array relation for remote table "FlaggedChatMessage" */
export type FlaggedChatMessage_Arr_Rel_Insert_Input = {
  readonly data: ReadonlyArray<FlaggedChatMessage_Insert_Input>;
  readonly on_conflict?: Maybe<FlaggedChatMessage_On_Conflict>;
};

/** Boolean expression to filter rows from the table "FlaggedChatMessage". All fields are combined with a logical 'AND'. */
export type FlaggedChatMessage_Bool_Exp = {
  readonly _and?: Maybe<ReadonlyArray<Maybe<FlaggedChatMessage_Bool_Exp>>>;
  readonly _not?: Maybe<FlaggedChatMessage_Bool_Exp>;
  readonly _or?: Maybe<ReadonlyArray<Maybe<FlaggedChatMessage_Bool_Exp>>>;
  readonly createdAt?: Maybe<Timestamptz_Comparison_Exp>;
  readonly flaggedBy?: Maybe<User_Bool_Exp>;
  readonly flaggedById?: Maybe<String_Comparison_Exp>;
  readonly id?: Maybe<Uuid_Comparison_Exp>;
  readonly message?: Maybe<ChatMessage_Bool_Exp>;
  readonly messageId?: Maybe<Uuid_Comparison_Exp>;
  readonly moderationChat?: Maybe<Chat_Bool_Exp>;
  readonly moderationChatId?: Maybe<Uuid_Comparison_Exp>;
  readonly notes?: Maybe<String_Comparison_Exp>;
  readonly resolutionAction?: Maybe<String_Comparison_Exp>;
  readonly resolvedAt?: Maybe<Timestamptz_Comparison_Exp>;
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
  readonly createdAt?: Maybe<Scalars['timestamptz']>;
  readonly flaggedBy?: Maybe<User_Obj_Rel_Insert_Input>;
  readonly flaggedById?: Maybe<Scalars['String']>;
  readonly id?: Maybe<Scalars['uuid']>;
  readonly message?: Maybe<ChatMessage_Obj_Rel_Insert_Input>;
  readonly messageId?: Maybe<Scalars['uuid']>;
  readonly moderationChat?: Maybe<Chat_Obj_Rel_Insert_Input>;
  readonly moderationChatId?: Maybe<Scalars['uuid']>;
  readonly notes?: Maybe<Scalars['String']>;
  readonly resolutionAction?: Maybe<Scalars['String']>;
  readonly resolvedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type FlaggedChatMessage_Max_Fields = {
  readonly __typename?: 'FlaggedChatMessage_max_fields';
  readonly createdAt?: Maybe<Scalars['timestamptz']>;
  readonly flaggedById?: Maybe<Scalars['String']>;
  readonly id?: Maybe<Scalars['uuid']>;
  readonly messageId?: Maybe<Scalars['uuid']>;
  readonly moderationChatId?: Maybe<Scalars['uuid']>;
  readonly notes?: Maybe<Scalars['String']>;
  readonly resolutionAction?: Maybe<Scalars['String']>;
  readonly resolvedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "FlaggedChatMessage" */
export type FlaggedChatMessage_Max_Order_By = {
  readonly createdAt?: Maybe<Order_By>;
  readonly flaggedById?: Maybe<Order_By>;
  readonly id?: Maybe<Order_By>;
  readonly messageId?: Maybe<Order_By>;
  readonly moderationChatId?: Maybe<Order_By>;
  readonly notes?: Maybe<Order_By>;
  readonly resolutionAction?: Maybe<Order_By>;
  readonly resolvedAt?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type FlaggedChatMessage_Min_Fields = {
  readonly __typename?: 'FlaggedChatMessage_min_fields';
  readonly createdAt?: Maybe<Scalars['timestamptz']>;
  readonly flaggedById?: Maybe<Scalars['String']>;
  readonly id?: Maybe<Scalars['uuid']>;
  readonly messageId?: Maybe<Scalars['uuid']>;
  readonly moderationChatId?: Maybe<Scalars['uuid']>;
  readonly notes?: Maybe<Scalars['String']>;
  readonly resolutionAction?: Maybe<Scalars['String']>;
  readonly resolvedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "FlaggedChatMessage" */
export type FlaggedChatMessage_Min_Order_By = {
  readonly createdAt?: Maybe<Order_By>;
  readonly flaggedById?: Maybe<Order_By>;
  readonly id?: Maybe<Order_By>;
  readonly messageId?: Maybe<Order_By>;
  readonly moderationChatId?: Maybe<Order_By>;
  readonly notes?: Maybe<Order_By>;
  readonly resolutionAction?: Maybe<Order_By>;
  readonly resolvedAt?: Maybe<Order_By>;
};

/** response of any mutation on the table "FlaggedChatMessage" */
export type FlaggedChatMessage_Mutation_Response = {
  readonly __typename?: 'FlaggedChatMessage_mutation_response';
  /** number of affected rows by the mutation */
  readonly affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  readonly returning: ReadonlyArray<FlaggedChatMessage>;
};

/** input type for inserting object relation for remote table "FlaggedChatMessage" */
export type FlaggedChatMessage_Obj_Rel_Insert_Input = {
  readonly data: FlaggedChatMessage_Insert_Input;
  readonly on_conflict?: Maybe<FlaggedChatMessage_On_Conflict>;
};

/** on conflict condition type for table "FlaggedChatMessage" */
export type FlaggedChatMessage_On_Conflict = {
  readonly constraint: FlaggedChatMessage_Constraint;
  readonly update_columns: ReadonlyArray<FlaggedChatMessage_Update_Column>;
  readonly where?: Maybe<FlaggedChatMessage_Bool_Exp>;
};

/** ordering options when selecting data from "FlaggedChatMessage" */
export type FlaggedChatMessage_Order_By = {
  readonly createdAt?: Maybe<Order_By>;
  readonly flaggedBy?: Maybe<User_Order_By>;
  readonly flaggedById?: Maybe<Order_By>;
  readonly id?: Maybe<Order_By>;
  readonly message?: Maybe<ChatMessage_Order_By>;
  readonly messageId?: Maybe<Order_By>;
  readonly moderationChat?: Maybe<Chat_Order_By>;
  readonly moderationChatId?: Maybe<Order_By>;
  readonly notes?: Maybe<Order_By>;
  readonly resolutionAction?: Maybe<Order_By>;
  readonly resolvedAt?: Maybe<Order_By>;
};

/** primary key columns input for table: "FlaggedChatMessage" */
export type FlaggedChatMessage_Pk_Columns_Input = {
  readonly id: Scalars['uuid'];
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
  readonly createdAt?: Maybe<Scalars['timestamptz']>;
  readonly flaggedById?: Maybe<Scalars['String']>;
  readonly id?: Maybe<Scalars['uuid']>;
  readonly messageId?: Maybe<Scalars['uuid']>;
  readonly moderationChatId?: Maybe<Scalars['uuid']>;
  readonly notes?: Maybe<Scalars['String']>;
  readonly resolutionAction?: Maybe<Scalars['String']>;
  readonly resolvedAt?: Maybe<Scalars['timestamptz']>;
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
  readonly __typename?: 'FollowedChat';
  /** An object relationship */
  readonly chat: Chat;
  readonly chatId: Scalars['uuid'];
  readonly id: Scalars['uuid'];
  readonly manual: Scalars['Boolean'];
  /** An object relationship */
  readonly user: User;
  readonly userId: Scalars['String'];
};

/** aggregated selection of "FollowedChat" */
export type FollowedChat_Aggregate = {
  readonly __typename?: 'FollowedChat_aggregate';
  readonly aggregate?: Maybe<FollowedChat_Aggregate_Fields>;
  readonly nodes: ReadonlyArray<FollowedChat>;
};

/** aggregate fields of "FollowedChat" */
export type FollowedChat_Aggregate_Fields = {
  readonly __typename?: 'FollowedChat_aggregate_fields';
  readonly count?: Maybe<Scalars['Int']>;
  readonly max?: Maybe<FollowedChat_Max_Fields>;
  readonly min?: Maybe<FollowedChat_Min_Fields>;
};


/** aggregate fields of "FollowedChat" */
export type FollowedChat_Aggregate_FieldsCountArgs = {
  columns?: Maybe<ReadonlyArray<FollowedChat_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "FollowedChat" */
export type FollowedChat_Aggregate_Order_By = {
  readonly count?: Maybe<Order_By>;
  readonly max?: Maybe<FollowedChat_Max_Order_By>;
  readonly min?: Maybe<FollowedChat_Min_Order_By>;
};

/** input type for inserting array relation for remote table "FollowedChat" */
export type FollowedChat_Arr_Rel_Insert_Input = {
  readonly data: ReadonlyArray<FollowedChat_Insert_Input>;
  readonly on_conflict?: Maybe<FollowedChat_On_Conflict>;
};

/** Boolean expression to filter rows from the table "FollowedChat". All fields are combined with a logical 'AND'. */
export type FollowedChat_Bool_Exp = {
  readonly _and?: Maybe<ReadonlyArray<Maybe<FollowedChat_Bool_Exp>>>;
  readonly _not?: Maybe<FollowedChat_Bool_Exp>;
  readonly _or?: Maybe<ReadonlyArray<Maybe<FollowedChat_Bool_Exp>>>;
  readonly chat?: Maybe<Chat_Bool_Exp>;
  readonly chatId?: Maybe<Uuid_Comparison_Exp>;
  readonly id?: Maybe<Uuid_Comparison_Exp>;
  readonly manual?: Maybe<Boolean_Comparison_Exp>;
  readonly user?: Maybe<User_Bool_Exp>;
  readonly userId?: Maybe<String_Comparison_Exp>;
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
  readonly chat?: Maybe<Chat_Obj_Rel_Insert_Input>;
  readonly chatId?: Maybe<Scalars['uuid']>;
  readonly id?: Maybe<Scalars['uuid']>;
  readonly manual?: Maybe<Scalars['Boolean']>;
  readonly user?: Maybe<User_Obj_Rel_Insert_Input>;
  readonly userId?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type FollowedChat_Max_Fields = {
  readonly __typename?: 'FollowedChat_max_fields';
  readonly chatId?: Maybe<Scalars['uuid']>;
  readonly id?: Maybe<Scalars['uuid']>;
  readonly userId?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "FollowedChat" */
export type FollowedChat_Max_Order_By = {
  readonly chatId?: Maybe<Order_By>;
  readonly id?: Maybe<Order_By>;
  readonly userId?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type FollowedChat_Min_Fields = {
  readonly __typename?: 'FollowedChat_min_fields';
  readonly chatId?: Maybe<Scalars['uuid']>;
  readonly id?: Maybe<Scalars['uuid']>;
  readonly userId?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "FollowedChat" */
export type FollowedChat_Min_Order_By = {
  readonly chatId?: Maybe<Order_By>;
  readonly id?: Maybe<Order_By>;
  readonly userId?: Maybe<Order_By>;
};

/** response of any mutation on the table "FollowedChat" */
export type FollowedChat_Mutation_Response = {
  readonly __typename?: 'FollowedChat_mutation_response';
  /** number of affected rows by the mutation */
  readonly affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  readonly returning: ReadonlyArray<FollowedChat>;
};

/** input type for inserting object relation for remote table "FollowedChat" */
export type FollowedChat_Obj_Rel_Insert_Input = {
  readonly data: FollowedChat_Insert_Input;
  readonly on_conflict?: Maybe<FollowedChat_On_Conflict>;
};

/** on conflict condition type for table "FollowedChat" */
export type FollowedChat_On_Conflict = {
  readonly constraint: FollowedChat_Constraint;
  readonly update_columns: ReadonlyArray<FollowedChat_Update_Column>;
  readonly where?: Maybe<FollowedChat_Bool_Exp>;
};

/** ordering options when selecting data from "FollowedChat" */
export type FollowedChat_Order_By = {
  readonly chat?: Maybe<Chat_Order_By>;
  readonly chatId?: Maybe<Order_By>;
  readonly id?: Maybe<Order_By>;
  readonly manual?: Maybe<Order_By>;
  readonly user?: Maybe<User_Order_By>;
  readonly userId?: Maybe<Order_By>;
};

/** primary key columns input for table: "FollowedChat" */
export type FollowedChat_Pk_Columns_Input = {
  readonly id: Scalars['uuid'];
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
  readonly chatId?: Maybe<Scalars['uuid']>;
  readonly id?: Maybe<Scalars['uuid']>;
  readonly manual?: Maybe<Scalars['Boolean']>;
  readonly userId?: Maybe<Scalars['String']>;
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

export type GenerateVonageTokenOutput = {
  readonly __typename?: 'GenerateVonageTokenOutput';
  readonly token: Scalars['String'];
};

/** columns and relationships of "Group" */
export type Group = {
  readonly __typename?: 'Group';
  readonly accessEnd: Scalars['timestamptz'];
  readonly accessStart: Scalars['timestamptz'];
  /** An object relationship */
  readonly conference: Conference;
  readonly conferenceId: Scalars['uuid'];
  /** An array relationship */
  readonly groupAttendees: ReadonlyArray<GroupAttendee>;
  /** An aggregated array relationship */
  readonly groupAttendees_aggregate: GroupAttendee_Aggregate;
  /** An array relationship */
  readonly groupRoles: ReadonlyArray<GroupRole>;
  /** An aggregated array relationship */
  readonly groupRoles_aggregate: GroupRole_Aggregate;
  readonly id: Scalars['uuid'];
  readonly includeUnauthenticated: Scalars['Boolean'];
  readonly name: Scalars['String'];
};


/** columns and relationships of "Group" */
export type GroupGroupAttendeesArgs = {
  distinct_on?: Maybe<ReadonlyArray<GroupAttendee_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<GroupAttendee_Order_By>>;
  where?: Maybe<GroupAttendee_Bool_Exp>;
};


/** columns and relationships of "Group" */
export type GroupGroupAttendees_AggregateArgs = {
  distinct_on?: Maybe<ReadonlyArray<GroupAttendee_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<GroupAttendee_Order_By>>;
  where?: Maybe<GroupAttendee_Bool_Exp>;
};


/** columns and relationships of "Group" */
export type GroupGroupRolesArgs = {
  distinct_on?: Maybe<ReadonlyArray<GroupRole_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<GroupRole_Order_By>>;
  where?: Maybe<GroupRole_Bool_Exp>;
};


/** columns and relationships of "Group" */
export type GroupGroupRoles_AggregateArgs = {
  distinct_on?: Maybe<ReadonlyArray<GroupRole_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<GroupRole_Order_By>>;
  where?: Maybe<GroupRole_Bool_Exp>;
};

/** columns and relationships of "GroupAttendee" */
export type GroupAttendee = {
  readonly __typename?: 'GroupAttendee';
  /** An object relationship */
  readonly activeGroup?: Maybe<ActiveGroup>;
  /** An object relationship */
  readonly attendee: Attendee;
  readonly attendeeId: Scalars['uuid'];
  /** An object relationship */
  readonly group: Group;
  readonly groupId: Scalars['uuid'];
  readonly id: Scalars['uuid'];
};

/** aggregated selection of "GroupAttendee" */
export type GroupAttendee_Aggregate = {
  readonly __typename?: 'GroupAttendee_aggregate';
  readonly aggregate?: Maybe<GroupAttendee_Aggregate_Fields>;
  readonly nodes: ReadonlyArray<GroupAttendee>;
};

/** aggregate fields of "GroupAttendee" */
export type GroupAttendee_Aggregate_Fields = {
  readonly __typename?: 'GroupAttendee_aggregate_fields';
  readonly count?: Maybe<Scalars['Int']>;
  readonly max?: Maybe<GroupAttendee_Max_Fields>;
  readonly min?: Maybe<GroupAttendee_Min_Fields>;
};


/** aggregate fields of "GroupAttendee" */
export type GroupAttendee_Aggregate_FieldsCountArgs = {
  columns?: Maybe<ReadonlyArray<GroupAttendee_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "GroupAttendee" */
export type GroupAttendee_Aggregate_Order_By = {
  readonly count?: Maybe<Order_By>;
  readonly max?: Maybe<GroupAttendee_Max_Order_By>;
  readonly min?: Maybe<GroupAttendee_Min_Order_By>;
};

/** input type for inserting array relation for remote table "GroupAttendee" */
export type GroupAttendee_Arr_Rel_Insert_Input = {
  readonly data: ReadonlyArray<GroupAttendee_Insert_Input>;
  readonly on_conflict?: Maybe<GroupAttendee_On_Conflict>;
};

/** Boolean expression to filter rows from the table "GroupAttendee". All fields are combined with a logical 'AND'. */
export type GroupAttendee_Bool_Exp = {
  readonly _and?: Maybe<ReadonlyArray<Maybe<GroupAttendee_Bool_Exp>>>;
  readonly _not?: Maybe<GroupAttendee_Bool_Exp>;
  readonly _or?: Maybe<ReadonlyArray<Maybe<GroupAttendee_Bool_Exp>>>;
  readonly activeGroup?: Maybe<ActiveGroup_Bool_Exp>;
  readonly attendee?: Maybe<Attendee_Bool_Exp>;
  readonly attendeeId?: Maybe<Uuid_Comparison_Exp>;
  readonly group?: Maybe<Group_Bool_Exp>;
  readonly groupId?: Maybe<Uuid_Comparison_Exp>;
  readonly id?: Maybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "GroupAttendee" */
export enum GroupAttendee_Constraint {
  /** unique or primary key constraint */
  GroupAttendeeGroupIdAttendeeIdKey = 'GroupAttendee_groupId_attendeeId_key',
  /** unique or primary key constraint */
  GroupAttendeePkey = 'GroupAttendee_pkey'
}

/** input type for inserting data into table "GroupAttendee" */
export type GroupAttendee_Insert_Input = {
  readonly activeGroup?: Maybe<ActiveGroup_Obj_Rel_Insert_Input>;
  readonly attendee?: Maybe<Attendee_Obj_Rel_Insert_Input>;
  readonly attendeeId?: Maybe<Scalars['uuid']>;
  readonly group?: Maybe<Group_Obj_Rel_Insert_Input>;
  readonly groupId?: Maybe<Scalars['uuid']>;
  readonly id?: Maybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type GroupAttendee_Max_Fields = {
  readonly __typename?: 'GroupAttendee_max_fields';
  readonly attendeeId?: Maybe<Scalars['uuid']>;
  readonly groupId?: Maybe<Scalars['uuid']>;
  readonly id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "GroupAttendee" */
export type GroupAttendee_Max_Order_By = {
  readonly attendeeId?: Maybe<Order_By>;
  readonly groupId?: Maybe<Order_By>;
  readonly id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type GroupAttendee_Min_Fields = {
  readonly __typename?: 'GroupAttendee_min_fields';
  readonly attendeeId?: Maybe<Scalars['uuid']>;
  readonly groupId?: Maybe<Scalars['uuid']>;
  readonly id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "GroupAttendee" */
export type GroupAttendee_Min_Order_By = {
  readonly attendeeId?: Maybe<Order_By>;
  readonly groupId?: Maybe<Order_By>;
  readonly id?: Maybe<Order_By>;
};

/** response of any mutation on the table "GroupAttendee" */
export type GroupAttendee_Mutation_Response = {
  readonly __typename?: 'GroupAttendee_mutation_response';
  /** number of affected rows by the mutation */
  readonly affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  readonly returning: ReadonlyArray<GroupAttendee>;
};

/** input type for inserting object relation for remote table "GroupAttendee" */
export type GroupAttendee_Obj_Rel_Insert_Input = {
  readonly data: GroupAttendee_Insert_Input;
  readonly on_conflict?: Maybe<GroupAttendee_On_Conflict>;
};

/** on conflict condition type for table "GroupAttendee" */
export type GroupAttendee_On_Conflict = {
  readonly constraint: GroupAttendee_Constraint;
  readonly update_columns: ReadonlyArray<GroupAttendee_Update_Column>;
  readonly where?: Maybe<GroupAttendee_Bool_Exp>;
};

/** ordering options when selecting data from "GroupAttendee" */
export type GroupAttendee_Order_By = {
  readonly activeGroup?: Maybe<ActiveGroup_Order_By>;
  readonly attendee?: Maybe<Attendee_Order_By>;
  readonly attendeeId?: Maybe<Order_By>;
  readonly group?: Maybe<Group_Order_By>;
  readonly groupId?: Maybe<Order_By>;
  readonly id?: Maybe<Order_By>;
};

/** primary key columns input for table: "GroupAttendee" */
export type GroupAttendee_Pk_Columns_Input = {
  readonly id: Scalars['uuid'];
};

/** select columns of table "GroupAttendee" */
export enum GroupAttendee_Select_Column {
  /** column name */
  AttendeeId = 'attendeeId',
  /** column name */
  GroupId = 'groupId',
  /** column name */
  Id = 'id'
}

/** input type for updating data in table "GroupAttendee" */
export type GroupAttendee_Set_Input = {
  readonly attendeeId?: Maybe<Scalars['uuid']>;
  readonly groupId?: Maybe<Scalars['uuid']>;
  readonly id?: Maybe<Scalars['uuid']>;
};

/** update columns of table "GroupAttendee" */
export enum GroupAttendee_Update_Column {
  /** column name */
  AttendeeId = 'attendeeId',
  /** column name */
  GroupId = 'groupId',
  /** column name */
  Id = 'id'
}

/** columns and relationships of "GroupRole" */
export type GroupRole = {
  readonly __typename?: 'GroupRole';
  /** An object relationship */
  readonly group: Group;
  readonly groupId: Scalars['uuid'];
  readonly id: Scalars['uuid'];
  /** An object relationship */
  readonly role: Role;
  readonly roleId: Scalars['uuid'];
};

/** aggregated selection of "GroupRole" */
export type GroupRole_Aggregate = {
  readonly __typename?: 'GroupRole_aggregate';
  readonly aggregate?: Maybe<GroupRole_Aggregate_Fields>;
  readonly nodes: ReadonlyArray<GroupRole>;
};

/** aggregate fields of "GroupRole" */
export type GroupRole_Aggregate_Fields = {
  readonly __typename?: 'GroupRole_aggregate_fields';
  readonly count?: Maybe<Scalars['Int']>;
  readonly max?: Maybe<GroupRole_Max_Fields>;
  readonly min?: Maybe<GroupRole_Min_Fields>;
};


/** aggregate fields of "GroupRole" */
export type GroupRole_Aggregate_FieldsCountArgs = {
  columns?: Maybe<ReadonlyArray<GroupRole_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "GroupRole" */
export type GroupRole_Aggregate_Order_By = {
  readonly count?: Maybe<Order_By>;
  readonly max?: Maybe<GroupRole_Max_Order_By>;
  readonly min?: Maybe<GroupRole_Min_Order_By>;
};

/** input type for inserting array relation for remote table "GroupRole" */
export type GroupRole_Arr_Rel_Insert_Input = {
  readonly data: ReadonlyArray<GroupRole_Insert_Input>;
  readonly on_conflict?: Maybe<GroupRole_On_Conflict>;
};

/** Boolean expression to filter rows from the table "GroupRole". All fields are combined with a logical 'AND'. */
export type GroupRole_Bool_Exp = {
  readonly _and?: Maybe<ReadonlyArray<Maybe<GroupRole_Bool_Exp>>>;
  readonly _not?: Maybe<GroupRole_Bool_Exp>;
  readonly _or?: Maybe<ReadonlyArray<Maybe<GroupRole_Bool_Exp>>>;
  readonly group?: Maybe<Group_Bool_Exp>;
  readonly groupId?: Maybe<Uuid_Comparison_Exp>;
  readonly id?: Maybe<Uuid_Comparison_Exp>;
  readonly role?: Maybe<Role_Bool_Exp>;
  readonly roleId?: Maybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "GroupRole" */
export enum GroupRole_Constraint {
  /** unique or primary key constraint */
  GroupRoleGroupIdRoleIdKey = 'GroupRole_groupId_roleId_key',
  /** unique or primary key constraint */
  GroupRolePkey = 'GroupRole_pkey'
}

/** input type for inserting data into table "GroupRole" */
export type GroupRole_Insert_Input = {
  readonly group?: Maybe<Group_Obj_Rel_Insert_Input>;
  readonly groupId?: Maybe<Scalars['uuid']>;
  readonly id?: Maybe<Scalars['uuid']>;
  readonly role?: Maybe<Role_Obj_Rel_Insert_Input>;
  readonly roleId?: Maybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type GroupRole_Max_Fields = {
  readonly __typename?: 'GroupRole_max_fields';
  readonly groupId?: Maybe<Scalars['uuid']>;
  readonly id?: Maybe<Scalars['uuid']>;
  readonly roleId?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "GroupRole" */
export type GroupRole_Max_Order_By = {
  readonly groupId?: Maybe<Order_By>;
  readonly id?: Maybe<Order_By>;
  readonly roleId?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type GroupRole_Min_Fields = {
  readonly __typename?: 'GroupRole_min_fields';
  readonly groupId?: Maybe<Scalars['uuid']>;
  readonly id?: Maybe<Scalars['uuid']>;
  readonly roleId?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "GroupRole" */
export type GroupRole_Min_Order_By = {
  readonly groupId?: Maybe<Order_By>;
  readonly id?: Maybe<Order_By>;
  readonly roleId?: Maybe<Order_By>;
};

/** response of any mutation on the table "GroupRole" */
export type GroupRole_Mutation_Response = {
  readonly __typename?: 'GroupRole_mutation_response';
  /** number of affected rows by the mutation */
  readonly affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  readonly returning: ReadonlyArray<GroupRole>;
};

/** input type for inserting object relation for remote table "GroupRole" */
export type GroupRole_Obj_Rel_Insert_Input = {
  readonly data: GroupRole_Insert_Input;
  readonly on_conflict?: Maybe<GroupRole_On_Conflict>;
};

/** on conflict condition type for table "GroupRole" */
export type GroupRole_On_Conflict = {
  readonly constraint: GroupRole_Constraint;
  readonly update_columns: ReadonlyArray<GroupRole_Update_Column>;
  readonly where?: Maybe<GroupRole_Bool_Exp>;
};

/** ordering options when selecting data from "GroupRole" */
export type GroupRole_Order_By = {
  readonly group?: Maybe<Group_Order_By>;
  readonly groupId?: Maybe<Order_By>;
  readonly id?: Maybe<Order_By>;
  readonly role?: Maybe<Role_Order_By>;
  readonly roleId?: Maybe<Order_By>;
};

/** primary key columns input for table: "GroupRole" */
export type GroupRole_Pk_Columns_Input = {
  readonly id: Scalars['uuid'];
};

/** select columns of table "GroupRole" */
export enum GroupRole_Select_Column {
  /** column name */
  GroupId = 'groupId',
  /** column name */
  Id = 'id',
  /** column name */
  RoleId = 'roleId'
}

/** input type for updating data in table "GroupRole" */
export type GroupRole_Set_Input = {
  readonly groupId?: Maybe<Scalars['uuid']>;
  readonly id?: Maybe<Scalars['uuid']>;
  readonly roleId?: Maybe<Scalars['uuid']>;
};

/** update columns of table "GroupRole" */
export enum GroupRole_Update_Column {
  /** column name */
  GroupId = 'groupId',
  /** column name */
  Id = 'id',
  /** column name */
  RoleId = 'roleId'
}

/** aggregated selection of "Group" */
export type Group_Aggregate = {
  readonly __typename?: 'Group_aggregate';
  readonly aggregate?: Maybe<Group_Aggregate_Fields>;
  readonly nodes: ReadonlyArray<Group>;
};

/** aggregate fields of "Group" */
export type Group_Aggregate_Fields = {
  readonly __typename?: 'Group_aggregate_fields';
  readonly count?: Maybe<Scalars['Int']>;
  readonly max?: Maybe<Group_Max_Fields>;
  readonly min?: Maybe<Group_Min_Fields>;
};


/** aggregate fields of "Group" */
export type Group_Aggregate_FieldsCountArgs = {
  columns?: Maybe<ReadonlyArray<Group_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "Group" */
export type Group_Aggregate_Order_By = {
  readonly count?: Maybe<Order_By>;
  readonly max?: Maybe<Group_Max_Order_By>;
  readonly min?: Maybe<Group_Min_Order_By>;
};

/** input type for inserting array relation for remote table "Group" */
export type Group_Arr_Rel_Insert_Input = {
  readonly data: ReadonlyArray<Group_Insert_Input>;
  readonly on_conflict?: Maybe<Group_On_Conflict>;
};

/** Boolean expression to filter rows from the table "Group". All fields are combined with a logical 'AND'. */
export type Group_Bool_Exp = {
  readonly _and?: Maybe<ReadonlyArray<Maybe<Group_Bool_Exp>>>;
  readonly _not?: Maybe<Group_Bool_Exp>;
  readonly _or?: Maybe<ReadonlyArray<Maybe<Group_Bool_Exp>>>;
  readonly accessEnd?: Maybe<Timestamptz_Comparison_Exp>;
  readonly accessStart?: Maybe<Timestamptz_Comparison_Exp>;
  readonly conference?: Maybe<Conference_Bool_Exp>;
  readonly conferenceId?: Maybe<Uuid_Comparison_Exp>;
  readonly groupAttendees?: Maybe<GroupAttendee_Bool_Exp>;
  readonly groupRoles?: Maybe<GroupRole_Bool_Exp>;
  readonly id?: Maybe<Uuid_Comparison_Exp>;
  readonly includeUnauthenticated?: Maybe<Boolean_Comparison_Exp>;
  readonly name?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "Group" */
export enum Group_Constraint {
  /** unique or primary key constraint */
  GroupConferenceIdNameKey = 'Group_conferenceId_name_key',
  /** unique or primary key constraint */
  GroupPkey = 'Group_pkey'
}

/** input type for inserting data into table "Group" */
export type Group_Insert_Input = {
  readonly accessEnd?: Maybe<Scalars['timestamptz']>;
  readonly accessStart?: Maybe<Scalars['timestamptz']>;
  readonly conference?: Maybe<Conference_Obj_Rel_Insert_Input>;
  readonly conferenceId?: Maybe<Scalars['uuid']>;
  readonly groupAttendees?: Maybe<GroupAttendee_Arr_Rel_Insert_Input>;
  readonly groupRoles?: Maybe<GroupRole_Arr_Rel_Insert_Input>;
  readonly id?: Maybe<Scalars['uuid']>;
  readonly includeUnauthenticated?: Maybe<Scalars['Boolean']>;
  readonly name?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Group_Max_Fields = {
  readonly __typename?: 'Group_max_fields';
  readonly accessEnd?: Maybe<Scalars['timestamptz']>;
  readonly accessStart?: Maybe<Scalars['timestamptz']>;
  readonly conferenceId?: Maybe<Scalars['uuid']>;
  readonly id?: Maybe<Scalars['uuid']>;
  readonly name?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "Group" */
export type Group_Max_Order_By = {
  readonly accessEnd?: Maybe<Order_By>;
  readonly accessStart?: Maybe<Order_By>;
  readonly conferenceId?: Maybe<Order_By>;
  readonly id?: Maybe<Order_By>;
  readonly name?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Group_Min_Fields = {
  readonly __typename?: 'Group_min_fields';
  readonly accessEnd?: Maybe<Scalars['timestamptz']>;
  readonly accessStart?: Maybe<Scalars['timestamptz']>;
  readonly conferenceId?: Maybe<Scalars['uuid']>;
  readonly id?: Maybe<Scalars['uuid']>;
  readonly name?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "Group" */
export type Group_Min_Order_By = {
  readonly accessEnd?: Maybe<Order_By>;
  readonly accessStart?: Maybe<Order_By>;
  readonly conferenceId?: Maybe<Order_By>;
  readonly id?: Maybe<Order_By>;
  readonly name?: Maybe<Order_By>;
};

/** response of any mutation on the table "Group" */
export type Group_Mutation_Response = {
  readonly __typename?: 'Group_mutation_response';
  /** number of affected rows by the mutation */
  readonly affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  readonly returning: ReadonlyArray<Group>;
};

/** input type for inserting object relation for remote table "Group" */
export type Group_Obj_Rel_Insert_Input = {
  readonly data: Group_Insert_Input;
  readonly on_conflict?: Maybe<Group_On_Conflict>;
};

/** on conflict condition type for table "Group" */
export type Group_On_Conflict = {
  readonly constraint: Group_Constraint;
  readonly update_columns: ReadonlyArray<Group_Update_Column>;
  readonly where?: Maybe<Group_Bool_Exp>;
};

/** ordering options when selecting data from "Group" */
export type Group_Order_By = {
  readonly accessEnd?: Maybe<Order_By>;
  readonly accessStart?: Maybe<Order_By>;
  readonly conference?: Maybe<Conference_Order_By>;
  readonly conferenceId?: Maybe<Order_By>;
  readonly groupAttendees_aggregate?: Maybe<GroupAttendee_Aggregate_Order_By>;
  readonly groupRoles_aggregate?: Maybe<GroupRole_Aggregate_Order_By>;
  readonly id?: Maybe<Order_By>;
  readonly includeUnauthenticated?: Maybe<Order_By>;
  readonly name?: Maybe<Order_By>;
};

/** primary key columns input for table: "Group" */
export type Group_Pk_Columns_Input = {
  readonly id: Scalars['uuid'];
};

/** select columns of table "Group" */
export enum Group_Select_Column {
  /** column name */
  AccessEnd = 'accessEnd',
  /** column name */
  AccessStart = 'accessStart',
  /** column name */
  ConferenceId = 'conferenceId',
  /** column name */
  Id = 'id',
  /** column name */
  IncludeUnauthenticated = 'includeUnauthenticated',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "Group" */
export type Group_Set_Input = {
  readonly accessEnd?: Maybe<Scalars['timestamptz']>;
  readonly accessStart?: Maybe<Scalars['timestamptz']>;
  readonly conferenceId?: Maybe<Scalars['uuid']>;
  readonly id?: Maybe<Scalars['uuid']>;
  readonly includeUnauthenticated?: Maybe<Scalars['Boolean']>;
  readonly name?: Maybe<Scalars['String']>;
};

/** update columns of table "Group" */
export enum Group_Update_Column {
  /** column name */
  AccessEnd = 'accessEnd',
  /** column name */
  AccessStart = 'accessStart',
  /** column name */
  ConferenceId = 'conferenceId',
  /** column name */
  Id = 'id',
  /** column name */
  IncludeUnauthenticated = 'includeUnauthenticated',
  /** column name */
  Name = 'name'
}

/** expression to compare columns of type Int. All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  readonly _eq?: Maybe<Scalars['Int']>;
  readonly _gt?: Maybe<Scalars['Int']>;
  readonly _gte?: Maybe<Scalars['Int']>;
  readonly _in?: Maybe<ReadonlyArray<Scalars['Int']>>;
  readonly _is_null?: Maybe<Scalars['Boolean']>;
  readonly _lt?: Maybe<Scalars['Int']>;
  readonly _lte?: Maybe<Scalars['Int']>;
  readonly _neq?: Maybe<Scalars['Int']>;
  readonly _nin?: Maybe<ReadonlyArray<Scalars['Int']>>;
};

/** columns and relationships of "OnlineStatus" */
export type OnlineStatus = {
  readonly __typename?: 'OnlineStatus';
  readonly id: Scalars['uuid'];
  readonly isIncognito: Scalars['Boolean'];
  readonly lastSeen: Scalars['timestamptz'];
  /** An object relationship */
  readonly user: User;
  readonly userId: Scalars['String'];
};

/** aggregated selection of "OnlineStatus" */
export type OnlineStatus_Aggregate = {
  readonly __typename?: 'OnlineStatus_aggregate';
  readonly aggregate?: Maybe<OnlineStatus_Aggregate_Fields>;
  readonly nodes: ReadonlyArray<OnlineStatus>;
};

/** aggregate fields of "OnlineStatus" */
export type OnlineStatus_Aggregate_Fields = {
  readonly __typename?: 'OnlineStatus_aggregate_fields';
  readonly count?: Maybe<Scalars['Int']>;
  readonly max?: Maybe<OnlineStatus_Max_Fields>;
  readonly min?: Maybe<OnlineStatus_Min_Fields>;
};


/** aggregate fields of "OnlineStatus" */
export type OnlineStatus_Aggregate_FieldsCountArgs = {
  columns?: Maybe<ReadonlyArray<OnlineStatus_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "OnlineStatus" */
export type OnlineStatus_Aggregate_Order_By = {
  readonly count?: Maybe<Order_By>;
  readonly max?: Maybe<OnlineStatus_Max_Order_By>;
  readonly min?: Maybe<OnlineStatus_Min_Order_By>;
};

/** input type for inserting array relation for remote table "OnlineStatus" */
export type OnlineStatus_Arr_Rel_Insert_Input = {
  readonly data: ReadonlyArray<OnlineStatus_Insert_Input>;
  readonly on_conflict?: Maybe<OnlineStatus_On_Conflict>;
};

/** Boolean expression to filter rows from the table "OnlineStatus". All fields are combined with a logical 'AND'. */
export type OnlineStatus_Bool_Exp = {
  readonly _and?: Maybe<ReadonlyArray<Maybe<OnlineStatus_Bool_Exp>>>;
  readonly _not?: Maybe<OnlineStatus_Bool_Exp>;
  readonly _or?: Maybe<ReadonlyArray<Maybe<OnlineStatus_Bool_Exp>>>;
  readonly id?: Maybe<Uuid_Comparison_Exp>;
  readonly isIncognito?: Maybe<Boolean_Comparison_Exp>;
  readonly lastSeen?: Maybe<Timestamptz_Comparison_Exp>;
  readonly user?: Maybe<User_Bool_Exp>;
  readonly userId?: Maybe<String_Comparison_Exp>;
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
  readonly id?: Maybe<Scalars['uuid']>;
  readonly isIncognito?: Maybe<Scalars['Boolean']>;
  readonly lastSeen?: Maybe<Scalars['timestamptz']>;
  readonly user?: Maybe<User_Obj_Rel_Insert_Input>;
  readonly userId?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type OnlineStatus_Max_Fields = {
  readonly __typename?: 'OnlineStatus_max_fields';
  readonly id?: Maybe<Scalars['uuid']>;
  readonly lastSeen?: Maybe<Scalars['timestamptz']>;
  readonly userId?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "OnlineStatus" */
export type OnlineStatus_Max_Order_By = {
  readonly id?: Maybe<Order_By>;
  readonly lastSeen?: Maybe<Order_By>;
  readonly userId?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type OnlineStatus_Min_Fields = {
  readonly __typename?: 'OnlineStatus_min_fields';
  readonly id?: Maybe<Scalars['uuid']>;
  readonly lastSeen?: Maybe<Scalars['timestamptz']>;
  readonly userId?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "OnlineStatus" */
export type OnlineStatus_Min_Order_By = {
  readonly id?: Maybe<Order_By>;
  readonly lastSeen?: Maybe<Order_By>;
  readonly userId?: Maybe<Order_By>;
};

/** response of any mutation on the table "OnlineStatus" */
export type OnlineStatus_Mutation_Response = {
  readonly __typename?: 'OnlineStatus_mutation_response';
  /** number of affected rows by the mutation */
  readonly affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  readonly returning: ReadonlyArray<OnlineStatus>;
};

/** input type for inserting object relation for remote table "OnlineStatus" */
export type OnlineStatus_Obj_Rel_Insert_Input = {
  readonly data: OnlineStatus_Insert_Input;
  readonly on_conflict?: Maybe<OnlineStatus_On_Conflict>;
};

/** on conflict condition type for table "OnlineStatus" */
export type OnlineStatus_On_Conflict = {
  readonly constraint: OnlineStatus_Constraint;
  readonly update_columns: ReadonlyArray<OnlineStatus_Update_Column>;
  readonly where?: Maybe<OnlineStatus_Bool_Exp>;
};

/** ordering options when selecting data from "OnlineStatus" */
export type OnlineStatus_Order_By = {
  readonly id?: Maybe<Order_By>;
  readonly isIncognito?: Maybe<Order_By>;
  readonly lastSeen?: Maybe<Order_By>;
  readonly user?: Maybe<User_Order_By>;
  readonly userId?: Maybe<Order_By>;
};

/** primary key columns input for table: "OnlineStatus" */
export type OnlineStatus_Pk_Columns_Input = {
  readonly id: Scalars['uuid'];
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
  readonly id?: Maybe<Scalars['uuid']>;
  readonly isIncognito?: Maybe<Scalars['Boolean']>;
  readonly lastSeen?: Maybe<Scalars['timestamptz']>;
  readonly userId?: Maybe<Scalars['String']>;
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

/** columns and relationships of "Permission" */
export type Permission = {
  readonly __typename?: 'Permission';
  readonly description: Scalars['String'];
  readonly name: Scalars['String'];
  /** An array relationship */
  readonly rolePermissions: ReadonlyArray<RolePermission>;
  /** An aggregated array relationship */
  readonly rolePermissions_aggregate: RolePermission_Aggregate;
};


/** columns and relationships of "Permission" */
export type PermissionRolePermissionsArgs = {
  distinct_on?: Maybe<ReadonlyArray<RolePermission_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<RolePermission_Order_By>>;
  where?: Maybe<RolePermission_Bool_Exp>;
};


/** columns and relationships of "Permission" */
export type PermissionRolePermissions_AggregateArgs = {
  distinct_on?: Maybe<ReadonlyArray<RolePermission_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<RolePermission_Order_By>>;
  where?: Maybe<RolePermission_Bool_Exp>;
};

/** aggregated selection of "Permission" */
export type Permission_Aggregate = {
  readonly __typename?: 'Permission_aggregate';
  readonly aggregate?: Maybe<Permission_Aggregate_Fields>;
  readonly nodes: ReadonlyArray<Permission>;
};

/** aggregate fields of "Permission" */
export type Permission_Aggregate_Fields = {
  readonly __typename?: 'Permission_aggregate_fields';
  readonly count?: Maybe<Scalars['Int']>;
  readonly max?: Maybe<Permission_Max_Fields>;
  readonly min?: Maybe<Permission_Min_Fields>;
};


/** aggregate fields of "Permission" */
export type Permission_Aggregate_FieldsCountArgs = {
  columns?: Maybe<ReadonlyArray<Permission_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "Permission" */
export type Permission_Aggregate_Order_By = {
  readonly count?: Maybe<Order_By>;
  readonly max?: Maybe<Permission_Max_Order_By>;
  readonly min?: Maybe<Permission_Min_Order_By>;
};

/** input type for inserting array relation for remote table "Permission" */
export type Permission_Arr_Rel_Insert_Input = {
  readonly data: ReadonlyArray<Permission_Insert_Input>;
  readonly on_conflict?: Maybe<Permission_On_Conflict>;
};

/** Boolean expression to filter rows from the table "Permission". All fields are combined with a logical 'AND'. */
export type Permission_Bool_Exp = {
  readonly _and?: Maybe<ReadonlyArray<Maybe<Permission_Bool_Exp>>>;
  readonly _not?: Maybe<Permission_Bool_Exp>;
  readonly _or?: Maybe<ReadonlyArray<Maybe<Permission_Bool_Exp>>>;
  readonly description?: Maybe<String_Comparison_Exp>;
  readonly name?: Maybe<String_Comparison_Exp>;
  readonly rolePermissions?: Maybe<RolePermission_Bool_Exp>;
};

/** unique or primary key constraints on table "Permission" */
export enum Permission_Constraint {
  /** unique or primary key constraint */
  PermissionPkey = 'Permission_pkey'
}

export enum Permission_Enum {
  /** Manage (create/update/delete) conference attendees. */
  ConferenceManageAttendees = 'CONFERENCE_MANAGE_ATTENDEES',
  /** Manage groups of a conference. */
  ConferenceManageGroups = 'CONFERENCE_MANAGE_GROUPS',
  /** Manage (update only) conference name, short name and slug. */
  ConferenceManageName = 'CONFERENCE_MANAGE_NAME',
  /** Manage roles of a conference. */
  ConferenceManageRoles = 'CONFERENCE_MANAGE_ROLES',
  /** Moderate (update only) conference attendees. */
  ConferenceModerateAttendees = 'CONFERENCE_MODERATE_ATTENDEES',
  /** View the conference. */
  ConferenceView = 'CONFERENCE_VIEW',
  /** View conference active attendees. */
  ConferenceViewActiveAttendees = 'CONFERENCE_VIEW_ACTIVE_ATTENDEES',
  /** View conference banned attendees. */
  ConferenceViewBannedAttendees = 'CONFERENCE_VIEW_BANNED_ATTENDEES'
}

/** expression to compare columns of type Permission_enum. All fields are combined with logical 'AND'. */
export type Permission_Enum_Comparison_Exp = {
  readonly _eq?: Maybe<Permission_Enum>;
  readonly _in?: Maybe<ReadonlyArray<Permission_Enum>>;
  readonly _is_null?: Maybe<Scalars['Boolean']>;
  readonly _neq?: Maybe<Permission_Enum>;
  readonly _nin?: Maybe<ReadonlyArray<Permission_Enum>>;
};

/** input type for inserting data into table "Permission" */
export type Permission_Insert_Input = {
  readonly description?: Maybe<Scalars['String']>;
  readonly name?: Maybe<Scalars['String']>;
  readonly rolePermissions?: Maybe<RolePermission_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Permission_Max_Fields = {
  readonly __typename?: 'Permission_max_fields';
  readonly description?: Maybe<Scalars['String']>;
  readonly name?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "Permission" */
export type Permission_Max_Order_By = {
  readonly description?: Maybe<Order_By>;
  readonly name?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Permission_Min_Fields = {
  readonly __typename?: 'Permission_min_fields';
  readonly description?: Maybe<Scalars['String']>;
  readonly name?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "Permission" */
export type Permission_Min_Order_By = {
  readonly description?: Maybe<Order_By>;
  readonly name?: Maybe<Order_By>;
};

/** response of any mutation on the table "Permission" */
export type Permission_Mutation_Response = {
  readonly __typename?: 'Permission_mutation_response';
  /** number of affected rows by the mutation */
  readonly affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  readonly returning: ReadonlyArray<Permission>;
};

/** input type for inserting object relation for remote table "Permission" */
export type Permission_Obj_Rel_Insert_Input = {
  readonly data: Permission_Insert_Input;
  readonly on_conflict?: Maybe<Permission_On_Conflict>;
};

/** on conflict condition type for table "Permission" */
export type Permission_On_Conflict = {
  readonly constraint: Permission_Constraint;
  readonly update_columns: ReadonlyArray<Permission_Update_Column>;
  readonly where?: Maybe<Permission_Bool_Exp>;
};

/** ordering options when selecting data from "Permission" */
export type Permission_Order_By = {
  readonly description?: Maybe<Order_By>;
  readonly name?: Maybe<Order_By>;
  readonly rolePermissions_aggregate?: Maybe<RolePermission_Aggregate_Order_By>;
};

/** primary key columns input for table: "Permission" */
export type Permission_Pk_Columns_Input = {
  readonly name: Scalars['String'];
};

/** select columns of table "Permission" */
export enum Permission_Select_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "Permission" */
export type Permission_Set_Input = {
  readonly description?: Maybe<Scalars['String']>;
  readonly name?: Maybe<Scalars['String']>;
};

/** update columns of table "Permission" */
export enum Permission_Update_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Name = 'name'
}

/** columns and relationships of "PinnedChat" */
export type PinnedChat = {
  readonly __typename?: 'PinnedChat';
  /** An object relationship */
  readonly chat: Chat;
  readonly chatId: Scalars['uuid'];
  readonly id: Scalars['uuid'];
  readonly manual: Scalars['Boolean'];
  /** An object relationship */
  readonly user: User;
  readonly userId: Scalars['String'];
};

/** aggregated selection of "PinnedChat" */
export type PinnedChat_Aggregate = {
  readonly __typename?: 'PinnedChat_aggregate';
  readonly aggregate?: Maybe<PinnedChat_Aggregate_Fields>;
  readonly nodes: ReadonlyArray<PinnedChat>;
};

/** aggregate fields of "PinnedChat" */
export type PinnedChat_Aggregate_Fields = {
  readonly __typename?: 'PinnedChat_aggregate_fields';
  readonly count?: Maybe<Scalars['Int']>;
  readonly max?: Maybe<PinnedChat_Max_Fields>;
  readonly min?: Maybe<PinnedChat_Min_Fields>;
};


/** aggregate fields of "PinnedChat" */
export type PinnedChat_Aggregate_FieldsCountArgs = {
  columns?: Maybe<ReadonlyArray<PinnedChat_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "PinnedChat" */
export type PinnedChat_Aggregate_Order_By = {
  readonly count?: Maybe<Order_By>;
  readonly max?: Maybe<PinnedChat_Max_Order_By>;
  readonly min?: Maybe<PinnedChat_Min_Order_By>;
};

/** input type for inserting array relation for remote table "PinnedChat" */
export type PinnedChat_Arr_Rel_Insert_Input = {
  readonly data: ReadonlyArray<PinnedChat_Insert_Input>;
  readonly on_conflict?: Maybe<PinnedChat_On_Conflict>;
};

/** Boolean expression to filter rows from the table "PinnedChat". All fields are combined with a logical 'AND'. */
export type PinnedChat_Bool_Exp = {
  readonly _and?: Maybe<ReadonlyArray<Maybe<PinnedChat_Bool_Exp>>>;
  readonly _not?: Maybe<PinnedChat_Bool_Exp>;
  readonly _or?: Maybe<ReadonlyArray<Maybe<PinnedChat_Bool_Exp>>>;
  readonly chat?: Maybe<Chat_Bool_Exp>;
  readonly chatId?: Maybe<Uuid_Comparison_Exp>;
  readonly id?: Maybe<Uuid_Comparison_Exp>;
  readonly manual?: Maybe<Boolean_Comparison_Exp>;
  readonly user?: Maybe<User_Bool_Exp>;
  readonly userId?: Maybe<String_Comparison_Exp>;
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
  readonly chat?: Maybe<Chat_Obj_Rel_Insert_Input>;
  readonly chatId?: Maybe<Scalars['uuid']>;
  readonly id?: Maybe<Scalars['uuid']>;
  readonly manual?: Maybe<Scalars['Boolean']>;
  readonly user?: Maybe<User_Obj_Rel_Insert_Input>;
  readonly userId?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type PinnedChat_Max_Fields = {
  readonly __typename?: 'PinnedChat_max_fields';
  readonly chatId?: Maybe<Scalars['uuid']>;
  readonly id?: Maybe<Scalars['uuid']>;
  readonly userId?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "PinnedChat" */
export type PinnedChat_Max_Order_By = {
  readonly chatId?: Maybe<Order_By>;
  readonly id?: Maybe<Order_By>;
  readonly userId?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type PinnedChat_Min_Fields = {
  readonly __typename?: 'PinnedChat_min_fields';
  readonly chatId?: Maybe<Scalars['uuid']>;
  readonly id?: Maybe<Scalars['uuid']>;
  readonly userId?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "PinnedChat" */
export type PinnedChat_Min_Order_By = {
  readonly chatId?: Maybe<Order_By>;
  readonly id?: Maybe<Order_By>;
  readonly userId?: Maybe<Order_By>;
};

/** response of any mutation on the table "PinnedChat" */
export type PinnedChat_Mutation_Response = {
  readonly __typename?: 'PinnedChat_mutation_response';
  /** number of affected rows by the mutation */
  readonly affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  readonly returning: ReadonlyArray<PinnedChat>;
};

/** input type for inserting object relation for remote table "PinnedChat" */
export type PinnedChat_Obj_Rel_Insert_Input = {
  readonly data: PinnedChat_Insert_Input;
  readonly on_conflict?: Maybe<PinnedChat_On_Conflict>;
};

/** on conflict condition type for table "PinnedChat" */
export type PinnedChat_On_Conflict = {
  readonly constraint: PinnedChat_Constraint;
  readonly update_columns: ReadonlyArray<PinnedChat_Update_Column>;
  readonly where?: Maybe<PinnedChat_Bool_Exp>;
};

/** ordering options when selecting data from "PinnedChat" */
export type PinnedChat_Order_By = {
  readonly chat?: Maybe<Chat_Order_By>;
  readonly chatId?: Maybe<Order_By>;
  readonly id?: Maybe<Order_By>;
  readonly manual?: Maybe<Order_By>;
  readonly user?: Maybe<User_Order_By>;
  readonly userId?: Maybe<Order_By>;
};

/** primary key columns input for table: "PinnedChat" */
export type PinnedChat_Pk_Columns_Input = {
  readonly id: Scalars['uuid'];
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
  readonly chatId?: Maybe<Scalars['uuid']>;
  readonly id?: Maybe<Scalars['uuid']>;
  readonly manual?: Maybe<Scalars['Boolean']>;
  readonly userId?: Maybe<Scalars['String']>;
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
  readonly __typename?: 'ProtectedEchoOutput';
  readonly message: Scalars['String'];
};

/** columns and relationships of "Role" */
export type Role = {
  readonly __typename?: 'Role';
  /** An object relationship */
  readonly conference: Conference;
  readonly conferenceId: Scalars['uuid'];
  /** An array relationship */
  readonly groupRoles: ReadonlyArray<GroupRole>;
  /** An aggregated array relationship */
  readonly groupRoles_aggregate: GroupRole_Aggregate;
  readonly id: Scalars['uuid'];
  readonly name: Scalars['String'];
  /** An array relationship */
  readonly rolePermissions: ReadonlyArray<RolePermission>;
  /** An aggregated array relationship */
  readonly rolePermissions_aggregate: RolePermission_Aggregate;
};


/** columns and relationships of "Role" */
export type RoleGroupRolesArgs = {
  distinct_on?: Maybe<ReadonlyArray<GroupRole_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<GroupRole_Order_By>>;
  where?: Maybe<GroupRole_Bool_Exp>;
};


/** columns and relationships of "Role" */
export type RoleGroupRoles_AggregateArgs = {
  distinct_on?: Maybe<ReadonlyArray<GroupRole_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<GroupRole_Order_By>>;
  where?: Maybe<GroupRole_Bool_Exp>;
};


/** columns and relationships of "Role" */
export type RoleRolePermissionsArgs = {
  distinct_on?: Maybe<ReadonlyArray<RolePermission_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<RolePermission_Order_By>>;
  where?: Maybe<RolePermission_Bool_Exp>;
};


/** columns and relationships of "Role" */
export type RoleRolePermissions_AggregateArgs = {
  distinct_on?: Maybe<ReadonlyArray<RolePermission_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<RolePermission_Order_By>>;
  where?: Maybe<RolePermission_Bool_Exp>;
};

/** columns and relationships of "RolePermission" */
export type RolePermission = {
  readonly __typename?: 'RolePermission';
  readonly id: Scalars['uuid'];
  /** An object relationship */
  readonly permission: Permission;
  readonly permissionName: Permission_Enum;
  /** An object relationship */
  readonly role: Role;
  readonly roleId: Scalars['uuid'];
};

/** aggregated selection of "RolePermission" */
export type RolePermission_Aggregate = {
  readonly __typename?: 'RolePermission_aggregate';
  readonly aggregate?: Maybe<RolePermission_Aggregate_Fields>;
  readonly nodes: ReadonlyArray<RolePermission>;
};

/** aggregate fields of "RolePermission" */
export type RolePermission_Aggregate_Fields = {
  readonly __typename?: 'RolePermission_aggregate_fields';
  readonly count?: Maybe<Scalars['Int']>;
  readonly max?: Maybe<RolePermission_Max_Fields>;
  readonly min?: Maybe<RolePermission_Min_Fields>;
};


/** aggregate fields of "RolePermission" */
export type RolePermission_Aggregate_FieldsCountArgs = {
  columns?: Maybe<ReadonlyArray<RolePermission_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "RolePermission" */
export type RolePermission_Aggregate_Order_By = {
  readonly count?: Maybe<Order_By>;
  readonly max?: Maybe<RolePermission_Max_Order_By>;
  readonly min?: Maybe<RolePermission_Min_Order_By>;
};

/** input type for inserting array relation for remote table "RolePermission" */
export type RolePermission_Arr_Rel_Insert_Input = {
  readonly data: ReadonlyArray<RolePermission_Insert_Input>;
  readonly on_conflict?: Maybe<RolePermission_On_Conflict>;
};

/** Boolean expression to filter rows from the table "RolePermission". All fields are combined with a logical 'AND'. */
export type RolePermission_Bool_Exp = {
  readonly _and?: Maybe<ReadonlyArray<Maybe<RolePermission_Bool_Exp>>>;
  readonly _not?: Maybe<RolePermission_Bool_Exp>;
  readonly _or?: Maybe<ReadonlyArray<Maybe<RolePermission_Bool_Exp>>>;
  readonly id?: Maybe<Uuid_Comparison_Exp>;
  readonly permission?: Maybe<Permission_Bool_Exp>;
  readonly permissionName?: Maybe<Permission_Enum_Comparison_Exp>;
  readonly role?: Maybe<Role_Bool_Exp>;
  readonly roleId?: Maybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "RolePermission" */
export enum RolePermission_Constraint {
  /** unique or primary key constraint */
  RolePermissionPkey = 'RolePermission_pkey',
  /** unique or primary key constraint */
  RolePermissionRoleIdPermissionKey = 'RolePermission_roleId_permission_key'
}

/** input type for inserting data into table "RolePermission" */
export type RolePermission_Insert_Input = {
  readonly id?: Maybe<Scalars['uuid']>;
  readonly permission?: Maybe<Permission_Obj_Rel_Insert_Input>;
  readonly permissionName?: Maybe<Permission_Enum>;
  readonly role?: Maybe<Role_Obj_Rel_Insert_Input>;
  readonly roleId?: Maybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type RolePermission_Max_Fields = {
  readonly __typename?: 'RolePermission_max_fields';
  readonly id?: Maybe<Scalars['uuid']>;
  readonly roleId?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "RolePermission" */
export type RolePermission_Max_Order_By = {
  readonly id?: Maybe<Order_By>;
  readonly roleId?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type RolePermission_Min_Fields = {
  readonly __typename?: 'RolePermission_min_fields';
  readonly id?: Maybe<Scalars['uuid']>;
  readonly roleId?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "RolePermission" */
export type RolePermission_Min_Order_By = {
  readonly id?: Maybe<Order_By>;
  readonly roleId?: Maybe<Order_By>;
};

/** response of any mutation on the table "RolePermission" */
export type RolePermission_Mutation_Response = {
  readonly __typename?: 'RolePermission_mutation_response';
  /** number of affected rows by the mutation */
  readonly affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  readonly returning: ReadonlyArray<RolePermission>;
};

/** input type for inserting object relation for remote table "RolePermission" */
export type RolePermission_Obj_Rel_Insert_Input = {
  readonly data: RolePermission_Insert_Input;
  readonly on_conflict?: Maybe<RolePermission_On_Conflict>;
};

/** on conflict condition type for table "RolePermission" */
export type RolePermission_On_Conflict = {
  readonly constraint: RolePermission_Constraint;
  readonly update_columns: ReadonlyArray<RolePermission_Update_Column>;
  readonly where?: Maybe<RolePermission_Bool_Exp>;
};

/** ordering options when selecting data from "RolePermission" */
export type RolePermission_Order_By = {
  readonly id?: Maybe<Order_By>;
  readonly permission?: Maybe<Permission_Order_By>;
  readonly permissionName?: Maybe<Order_By>;
  readonly role?: Maybe<Role_Order_By>;
  readonly roleId?: Maybe<Order_By>;
};

/** primary key columns input for table: "RolePermission" */
export type RolePermission_Pk_Columns_Input = {
  readonly id: Scalars['uuid'];
};

/** select columns of table "RolePermission" */
export enum RolePermission_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  PermissionName = 'permissionName',
  /** column name */
  RoleId = 'roleId'
}

/** input type for updating data in table "RolePermission" */
export type RolePermission_Set_Input = {
  readonly id?: Maybe<Scalars['uuid']>;
  readonly permissionName?: Maybe<Permission_Enum>;
  readonly roleId?: Maybe<Scalars['uuid']>;
};

/** update columns of table "RolePermission" */
export enum RolePermission_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  PermissionName = 'permissionName',
  /** column name */
  RoleId = 'roleId'
}

/** aggregated selection of "Role" */
export type Role_Aggregate = {
  readonly __typename?: 'Role_aggregate';
  readonly aggregate?: Maybe<Role_Aggregate_Fields>;
  readonly nodes: ReadonlyArray<Role>;
};

/** aggregate fields of "Role" */
export type Role_Aggregate_Fields = {
  readonly __typename?: 'Role_aggregate_fields';
  readonly count?: Maybe<Scalars['Int']>;
  readonly max?: Maybe<Role_Max_Fields>;
  readonly min?: Maybe<Role_Min_Fields>;
};


/** aggregate fields of "Role" */
export type Role_Aggregate_FieldsCountArgs = {
  columns?: Maybe<ReadonlyArray<Role_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "Role" */
export type Role_Aggregate_Order_By = {
  readonly count?: Maybe<Order_By>;
  readonly max?: Maybe<Role_Max_Order_By>;
  readonly min?: Maybe<Role_Min_Order_By>;
};

/** input type for inserting array relation for remote table "Role" */
export type Role_Arr_Rel_Insert_Input = {
  readonly data: ReadonlyArray<Role_Insert_Input>;
  readonly on_conflict?: Maybe<Role_On_Conflict>;
};

/** Boolean expression to filter rows from the table "Role". All fields are combined with a logical 'AND'. */
export type Role_Bool_Exp = {
  readonly _and?: Maybe<ReadonlyArray<Maybe<Role_Bool_Exp>>>;
  readonly _not?: Maybe<Role_Bool_Exp>;
  readonly _or?: Maybe<ReadonlyArray<Maybe<Role_Bool_Exp>>>;
  readonly conference?: Maybe<Conference_Bool_Exp>;
  readonly conferenceId?: Maybe<Uuid_Comparison_Exp>;
  readonly groupRoles?: Maybe<GroupRole_Bool_Exp>;
  readonly id?: Maybe<Uuid_Comparison_Exp>;
  readonly name?: Maybe<String_Comparison_Exp>;
  readonly rolePermissions?: Maybe<RolePermission_Bool_Exp>;
};

/** unique or primary key constraints on table "Role" */
export enum Role_Constraint {
  /** unique or primary key constraint */
  RoleConferenceNameKey = 'Role_conference_name_key',
  /** unique or primary key constraint */
  RolePkey = 'Role_pkey'
}

/** input type for inserting data into table "Role" */
export type Role_Insert_Input = {
  readonly conference?: Maybe<Conference_Obj_Rel_Insert_Input>;
  readonly conferenceId?: Maybe<Scalars['uuid']>;
  readonly groupRoles?: Maybe<GroupRole_Arr_Rel_Insert_Input>;
  readonly id?: Maybe<Scalars['uuid']>;
  readonly name?: Maybe<Scalars['String']>;
  readonly rolePermissions?: Maybe<RolePermission_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Role_Max_Fields = {
  readonly __typename?: 'Role_max_fields';
  readonly conferenceId?: Maybe<Scalars['uuid']>;
  readonly id?: Maybe<Scalars['uuid']>;
  readonly name?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "Role" */
export type Role_Max_Order_By = {
  readonly conferenceId?: Maybe<Order_By>;
  readonly id?: Maybe<Order_By>;
  readonly name?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Role_Min_Fields = {
  readonly __typename?: 'Role_min_fields';
  readonly conferenceId?: Maybe<Scalars['uuid']>;
  readonly id?: Maybe<Scalars['uuid']>;
  readonly name?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "Role" */
export type Role_Min_Order_By = {
  readonly conferenceId?: Maybe<Order_By>;
  readonly id?: Maybe<Order_By>;
  readonly name?: Maybe<Order_By>;
};

/** response of any mutation on the table "Role" */
export type Role_Mutation_Response = {
  readonly __typename?: 'Role_mutation_response';
  /** number of affected rows by the mutation */
  readonly affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  readonly returning: ReadonlyArray<Role>;
};

/** input type for inserting object relation for remote table "Role" */
export type Role_Obj_Rel_Insert_Input = {
  readonly data: Role_Insert_Input;
  readonly on_conflict?: Maybe<Role_On_Conflict>;
};

/** on conflict condition type for table "Role" */
export type Role_On_Conflict = {
  readonly constraint: Role_Constraint;
  readonly update_columns: ReadonlyArray<Role_Update_Column>;
  readonly where?: Maybe<Role_Bool_Exp>;
};

/** ordering options when selecting data from "Role" */
export type Role_Order_By = {
  readonly conference?: Maybe<Conference_Order_By>;
  readonly conferenceId?: Maybe<Order_By>;
  readonly groupRoles_aggregate?: Maybe<GroupRole_Aggregate_Order_By>;
  readonly id?: Maybe<Order_By>;
  readonly name?: Maybe<Order_By>;
  readonly rolePermissions_aggregate?: Maybe<RolePermission_Aggregate_Order_By>;
};

/** primary key columns input for table: "Role" */
export type Role_Pk_Columns_Input = {
  readonly id: Scalars['uuid'];
};

/** select columns of table "Role" */
export enum Role_Select_Column {
  /** column name */
  ConferenceId = 'conferenceId',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "Role" */
export type Role_Set_Input = {
  readonly conferenceId?: Maybe<Scalars['uuid']>;
  readonly id?: Maybe<Scalars['uuid']>;
  readonly name?: Maybe<Scalars['String']>;
};

/** update columns of table "Role" */
export enum Role_Update_Column {
  /** column name */
  ConferenceId = 'conferenceId',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** columns and relationships of "Room" */
export type Room = {
  readonly __typename?: 'Room';
  readonly cloudfrontDistributionId?: Maybe<Scalars['String']>;
  readonly createdAt: Scalars['timestamptz'];
  readonly hlsUri?: Maybe<Scalars['String']>;
  readonly id: Scalars['uuid'];
  readonly mediaLiveChannelId?: Maybe<Scalars['String']>;
  readonly mediaPackageChannelId?: Maybe<Scalars['String']>;
  readonly name: Scalars['String'];
  readonly rtmpUri?: Maybe<Scalars['String']>;
  readonly updatedAt: Scalars['timestamptz'];
  readonly vonageSessionId?: Maybe<Scalars['String']>;
};

/** aggregated selection of "Room" */
export type Room_Aggregate = {
  readonly __typename?: 'Room_aggregate';
  readonly aggregate?: Maybe<Room_Aggregate_Fields>;
  readonly nodes: ReadonlyArray<Room>;
};

/** aggregate fields of "Room" */
export type Room_Aggregate_Fields = {
  readonly __typename?: 'Room_aggregate_fields';
  readonly count?: Maybe<Scalars['Int']>;
  readonly max?: Maybe<Room_Max_Fields>;
  readonly min?: Maybe<Room_Min_Fields>;
};


/** aggregate fields of "Room" */
export type Room_Aggregate_FieldsCountArgs = {
  columns?: Maybe<ReadonlyArray<Room_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "Room" */
export type Room_Aggregate_Order_By = {
  readonly count?: Maybe<Order_By>;
  readonly max?: Maybe<Room_Max_Order_By>;
  readonly min?: Maybe<Room_Min_Order_By>;
};

/** input type for inserting array relation for remote table "Room" */
export type Room_Arr_Rel_Insert_Input = {
  readonly data: ReadonlyArray<Room_Insert_Input>;
  readonly on_conflict?: Maybe<Room_On_Conflict>;
};

/** Boolean expression to filter rows from the table "Room". All fields are combined with a logical 'AND'. */
export type Room_Bool_Exp = {
  readonly _and?: Maybe<ReadonlyArray<Maybe<Room_Bool_Exp>>>;
  readonly _not?: Maybe<Room_Bool_Exp>;
  readonly _or?: Maybe<ReadonlyArray<Maybe<Room_Bool_Exp>>>;
  readonly cloudfrontDistributionId?: Maybe<String_Comparison_Exp>;
  readonly createdAt?: Maybe<Timestamptz_Comparison_Exp>;
  readonly hlsUri?: Maybe<String_Comparison_Exp>;
  readonly id?: Maybe<Uuid_Comparison_Exp>;
  readonly mediaLiveChannelId?: Maybe<String_Comparison_Exp>;
  readonly mediaPackageChannelId?: Maybe<String_Comparison_Exp>;
  readonly name?: Maybe<String_Comparison_Exp>;
  readonly rtmpUri?: Maybe<String_Comparison_Exp>;
  readonly updatedAt?: Maybe<Timestamptz_Comparison_Exp>;
  readonly vonageSessionId?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "Room" */
export enum Room_Constraint {
  /** unique or primary key constraint */
  RoomPkey = 'Room_pkey'
}

/** input type for inserting data into table "Room" */
export type Room_Insert_Input = {
  readonly cloudfrontDistributionId?: Maybe<Scalars['String']>;
  readonly createdAt?: Maybe<Scalars['timestamptz']>;
  readonly hlsUri?: Maybe<Scalars['String']>;
  readonly id?: Maybe<Scalars['uuid']>;
  readonly mediaLiveChannelId?: Maybe<Scalars['String']>;
  readonly mediaPackageChannelId?: Maybe<Scalars['String']>;
  readonly name?: Maybe<Scalars['String']>;
  readonly rtmpUri?: Maybe<Scalars['String']>;
  readonly updatedAt?: Maybe<Scalars['timestamptz']>;
  readonly vonageSessionId?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Room_Max_Fields = {
  readonly __typename?: 'Room_max_fields';
  readonly cloudfrontDistributionId?: Maybe<Scalars['String']>;
  readonly createdAt?: Maybe<Scalars['timestamptz']>;
  readonly hlsUri?: Maybe<Scalars['String']>;
  readonly id?: Maybe<Scalars['uuid']>;
  readonly mediaLiveChannelId?: Maybe<Scalars['String']>;
  readonly mediaPackageChannelId?: Maybe<Scalars['String']>;
  readonly name?: Maybe<Scalars['String']>;
  readonly rtmpUri?: Maybe<Scalars['String']>;
  readonly updatedAt?: Maybe<Scalars['timestamptz']>;
  readonly vonageSessionId?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "Room" */
export type Room_Max_Order_By = {
  readonly cloudfrontDistributionId?: Maybe<Order_By>;
  readonly createdAt?: Maybe<Order_By>;
  readonly hlsUri?: Maybe<Order_By>;
  readonly id?: Maybe<Order_By>;
  readonly mediaLiveChannelId?: Maybe<Order_By>;
  readonly mediaPackageChannelId?: Maybe<Order_By>;
  readonly name?: Maybe<Order_By>;
  readonly rtmpUri?: Maybe<Order_By>;
  readonly updatedAt?: Maybe<Order_By>;
  readonly vonageSessionId?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Room_Min_Fields = {
  readonly __typename?: 'Room_min_fields';
  readonly cloudfrontDistributionId?: Maybe<Scalars['String']>;
  readonly createdAt?: Maybe<Scalars['timestamptz']>;
  readonly hlsUri?: Maybe<Scalars['String']>;
  readonly id?: Maybe<Scalars['uuid']>;
  readonly mediaLiveChannelId?: Maybe<Scalars['String']>;
  readonly mediaPackageChannelId?: Maybe<Scalars['String']>;
  readonly name?: Maybe<Scalars['String']>;
  readonly rtmpUri?: Maybe<Scalars['String']>;
  readonly updatedAt?: Maybe<Scalars['timestamptz']>;
  readonly vonageSessionId?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "Room" */
export type Room_Min_Order_By = {
  readonly cloudfrontDistributionId?: Maybe<Order_By>;
  readonly createdAt?: Maybe<Order_By>;
  readonly hlsUri?: Maybe<Order_By>;
  readonly id?: Maybe<Order_By>;
  readonly mediaLiveChannelId?: Maybe<Order_By>;
  readonly mediaPackageChannelId?: Maybe<Order_By>;
  readonly name?: Maybe<Order_By>;
  readonly rtmpUri?: Maybe<Order_By>;
  readonly updatedAt?: Maybe<Order_By>;
  readonly vonageSessionId?: Maybe<Order_By>;
};

/** response of any mutation on the table "Room" */
export type Room_Mutation_Response = {
  readonly __typename?: 'Room_mutation_response';
  /** number of affected rows by the mutation */
  readonly affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  readonly returning: ReadonlyArray<Room>;
};

/** input type for inserting object relation for remote table "Room" */
export type Room_Obj_Rel_Insert_Input = {
  readonly data: Room_Insert_Input;
  readonly on_conflict?: Maybe<Room_On_Conflict>;
};

/** on conflict condition type for table "Room" */
export type Room_On_Conflict = {
  readonly constraint: Room_Constraint;
  readonly update_columns: ReadonlyArray<Room_Update_Column>;
  readonly where?: Maybe<Room_Bool_Exp>;
};

/** ordering options when selecting data from "Room" */
export type Room_Order_By = {
  readonly cloudfrontDistributionId?: Maybe<Order_By>;
  readonly createdAt?: Maybe<Order_By>;
  readonly hlsUri?: Maybe<Order_By>;
  readonly id?: Maybe<Order_By>;
  readonly mediaLiveChannelId?: Maybe<Order_By>;
  readonly mediaPackageChannelId?: Maybe<Order_By>;
  readonly name?: Maybe<Order_By>;
  readonly rtmpUri?: Maybe<Order_By>;
  readonly updatedAt?: Maybe<Order_By>;
  readonly vonageSessionId?: Maybe<Order_By>;
};

/** primary key columns input for table: "Room" */
export type Room_Pk_Columns_Input = {
  readonly id: Scalars['uuid'];
};

/** select columns of table "Room" */
export enum Room_Select_Column {
  /** column name */
  CloudfrontDistributionId = 'cloudfrontDistributionId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  HlsUri = 'hlsUri',
  /** column name */
  Id = 'id',
  /** column name */
  MediaLiveChannelId = 'mediaLiveChannelId',
  /** column name */
  MediaPackageChannelId = 'mediaPackageChannelId',
  /** column name */
  Name = 'name',
  /** column name */
  RtmpUri = 'rtmpUri',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  VonageSessionId = 'vonageSessionId'
}

/** input type for updating data in table "Room" */
export type Room_Set_Input = {
  readonly cloudfrontDistributionId?: Maybe<Scalars['String']>;
  readonly createdAt?: Maybe<Scalars['timestamptz']>;
  readonly hlsUri?: Maybe<Scalars['String']>;
  readonly id?: Maybe<Scalars['uuid']>;
  readonly mediaLiveChannelId?: Maybe<Scalars['String']>;
  readonly mediaPackageChannelId?: Maybe<Scalars['String']>;
  readonly name?: Maybe<Scalars['String']>;
  readonly rtmpUri?: Maybe<Scalars['String']>;
  readonly updatedAt?: Maybe<Scalars['timestamptz']>;
  readonly vonageSessionId?: Maybe<Scalars['String']>;
};

/** update columns of table "Room" */
export enum Room_Update_Column {
  /** column name */
  CloudfrontDistributionId = 'cloudfrontDistributionId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  HlsUri = 'hlsUri',
  /** column name */
  Id = 'id',
  /** column name */
  MediaLiveChannelId = 'mediaLiveChannelId',
  /** column name */
  MediaPackageChannelId = 'mediaPackageChannelId',
  /** column name */
  Name = 'name',
  /** column name */
  RtmpUri = 'rtmpUri',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  VonageSessionId = 'vonageSessionId'
}

export type SampleInput = {
  readonly password: Scalars['String'];
  readonly username: Scalars['String'];
};

export type SampleOutput = {
  readonly __typename?: 'SampleOutput';
  readonly accessToken: Scalars['String'];
};

/** expression to compare columns of type String. All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  readonly _eq?: Maybe<Scalars['String']>;
  readonly _gt?: Maybe<Scalars['String']>;
  readonly _gte?: Maybe<Scalars['String']>;
  readonly _ilike?: Maybe<Scalars['String']>;
  readonly _in?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly _is_null?: Maybe<Scalars['Boolean']>;
  readonly _like?: Maybe<Scalars['String']>;
  readonly _lt?: Maybe<Scalars['String']>;
  readonly _lte?: Maybe<Scalars['String']>;
  readonly _neq?: Maybe<Scalars['String']>;
  readonly _nilike?: Maybe<Scalars['String']>;
  readonly _nin?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly _nlike?: Maybe<Scalars['String']>;
  readonly _nsimilar?: Maybe<Scalars['String']>;
  readonly _similar?: Maybe<Scalars['String']>;
};

/** columns and relationships of "User" */
export type User = {
  readonly __typename?: 'User';
  /** An array relationship */
  readonly attendees: ReadonlyArray<Attendee>;
  /** An aggregated array relationship */
  readonly attendees_aggregate: Attendee_Aggregate;
  /** An array relationship */
  readonly chats: ReadonlyArray<Chat>;
  /** An aggregated array relationship */
  readonly chats_aggregate: Chat_Aggregate;
  /** An array relationship */
  readonly conferencesCreated: ReadonlyArray<Conference>;
  /** An aggregated array relationship */
  readonly conferencesCreated_aggregate: Conference_Aggregate;
  readonly created_at?: Maybe<Scalars['timestamptz']>;
  readonly email?: Maybe<Scalars['String']>;
  readonly firstName: Scalars['String'];
  /** An array relationship */
  readonly flaggedMessages: ReadonlyArray<FlaggedChatMessage>;
  /** An aggregated array relationship */
  readonly flaggedMessages_aggregate: FlaggedChatMessage_Aggregate;
  /** An array relationship */
  readonly followedChats: ReadonlyArray<FollowedChat>;
  /** An aggregated array relationship */
  readonly followedChats_aggregate: FollowedChat_Aggregate;
  readonly id: Scalars['String'];
  readonly lastLoggedInAt?: Maybe<Scalars['timestamptz']>;
  readonly lastName: Scalars['String'];
  /** An array relationship */
  readonly memberOfChats: ReadonlyArray<ChatMember>;
  /** An aggregated array relationship */
  readonly memberOfChats_aggregate: ChatMember_Aggregate;
  /** An array relationship */
  readonly moderatorOfChats: ReadonlyArray<ChatModerator>;
  /** An aggregated array relationship */
  readonly moderatorOfChats_aggregate: ChatModerator_Aggregate;
  /** An object relationship */
  readonly onlineStatus?: Maybe<OnlineStatus>;
  /** An array relationship */
  readonly pinnedChats: ReadonlyArray<PinnedChat>;
  /** An aggregated array relationship */
  readonly pinnedChats_aggregate: PinnedChat_Aggregate;
  /** An array relationship */
  readonly reactions: ReadonlyArray<ChatReaction>;
  /** An aggregated array relationship */
  readonly reactions_aggregate: ChatReaction_Aggregate;
  /** An array relationship */
  readonly sentMessages: ReadonlyArray<ChatMessage>;
  /** An aggregated array relationship */
  readonly sentMessages_aggregate: ChatMessage_Aggregate;
  /** An array relationship */
  readonly typingInChats: ReadonlyArray<ChatTyper>;
  /** An aggregated array relationship */
  readonly typingInChats_aggregate: ChatTyper_Aggregate;
  /** An array relationship */
  readonly unreadIndices: ReadonlyArray<ChatUnreadIndex>;
  /** An aggregated array relationship */
  readonly unreadIndices_aggregate: ChatUnreadIndex_Aggregate;
  readonly updated_at?: Maybe<Scalars['timestamptz']>;
  /** An array relationship */
  readonly viewingChats: ReadonlyArray<ChatViewer>;
  /** An aggregated array relationship */
  readonly viewingChats_aggregate: ChatViewer_Aggregate;
};


/** columns and relationships of "User" */
export type UserAttendeesArgs = {
  distinct_on?: Maybe<ReadonlyArray<Attendee_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<Attendee_Order_By>>;
  where?: Maybe<Attendee_Bool_Exp>;
};


/** columns and relationships of "User" */
export type UserAttendees_AggregateArgs = {
  distinct_on?: Maybe<ReadonlyArray<Attendee_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<Attendee_Order_By>>;
  where?: Maybe<Attendee_Bool_Exp>;
};


/** columns and relationships of "User" */
export type UserChatsArgs = {
  distinct_on?: Maybe<ReadonlyArray<Chat_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<Chat_Order_By>>;
  where?: Maybe<Chat_Bool_Exp>;
};


/** columns and relationships of "User" */
export type UserChats_AggregateArgs = {
  distinct_on?: Maybe<ReadonlyArray<Chat_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<Chat_Order_By>>;
  where?: Maybe<Chat_Bool_Exp>;
};


/** columns and relationships of "User" */
export type UserConferencesCreatedArgs = {
  distinct_on?: Maybe<ReadonlyArray<Conference_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<Conference_Order_By>>;
  where?: Maybe<Conference_Bool_Exp>;
};


/** columns and relationships of "User" */
export type UserConferencesCreated_AggregateArgs = {
  distinct_on?: Maybe<ReadonlyArray<Conference_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<Conference_Order_By>>;
  where?: Maybe<Conference_Bool_Exp>;
};


/** columns and relationships of "User" */
export type UserFlaggedMessagesArgs = {
  distinct_on?: Maybe<ReadonlyArray<FlaggedChatMessage_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<FlaggedChatMessage_Order_By>>;
  where?: Maybe<FlaggedChatMessage_Bool_Exp>;
};


/** columns and relationships of "User" */
export type UserFlaggedMessages_AggregateArgs = {
  distinct_on?: Maybe<ReadonlyArray<FlaggedChatMessage_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<FlaggedChatMessage_Order_By>>;
  where?: Maybe<FlaggedChatMessage_Bool_Exp>;
};


/** columns and relationships of "User" */
export type UserFollowedChatsArgs = {
  distinct_on?: Maybe<ReadonlyArray<FollowedChat_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<FollowedChat_Order_By>>;
  where?: Maybe<FollowedChat_Bool_Exp>;
};


/** columns and relationships of "User" */
export type UserFollowedChats_AggregateArgs = {
  distinct_on?: Maybe<ReadonlyArray<FollowedChat_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<FollowedChat_Order_By>>;
  where?: Maybe<FollowedChat_Bool_Exp>;
};


/** columns and relationships of "User" */
export type UserMemberOfChatsArgs = {
  distinct_on?: Maybe<ReadonlyArray<ChatMember_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<ChatMember_Order_By>>;
  where?: Maybe<ChatMember_Bool_Exp>;
};


/** columns and relationships of "User" */
export type UserMemberOfChats_AggregateArgs = {
  distinct_on?: Maybe<ReadonlyArray<ChatMember_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<ChatMember_Order_By>>;
  where?: Maybe<ChatMember_Bool_Exp>;
};


/** columns and relationships of "User" */
export type UserModeratorOfChatsArgs = {
  distinct_on?: Maybe<ReadonlyArray<ChatModerator_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<ChatModerator_Order_By>>;
  where?: Maybe<ChatModerator_Bool_Exp>;
};


/** columns and relationships of "User" */
export type UserModeratorOfChats_AggregateArgs = {
  distinct_on?: Maybe<ReadonlyArray<ChatModerator_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<ChatModerator_Order_By>>;
  where?: Maybe<ChatModerator_Bool_Exp>;
};


/** columns and relationships of "User" */
export type UserPinnedChatsArgs = {
  distinct_on?: Maybe<ReadonlyArray<PinnedChat_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<PinnedChat_Order_By>>;
  where?: Maybe<PinnedChat_Bool_Exp>;
};


/** columns and relationships of "User" */
export type UserPinnedChats_AggregateArgs = {
  distinct_on?: Maybe<ReadonlyArray<PinnedChat_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<PinnedChat_Order_By>>;
  where?: Maybe<PinnedChat_Bool_Exp>;
};


/** columns and relationships of "User" */
export type UserReactionsArgs = {
  distinct_on?: Maybe<ReadonlyArray<ChatReaction_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<ChatReaction_Order_By>>;
  where?: Maybe<ChatReaction_Bool_Exp>;
};


/** columns and relationships of "User" */
export type UserReactions_AggregateArgs = {
  distinct_on?: Maybe<ReadonlyArray<ChatReaction_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<ChatReaction_Order_By>>;
  where?: Maybe<ChatReaction_Bool_Exp>;
};


/** columns and relationships of "User" */
export type UserSentMessagesArgs = {
  distinct_on?: Maybe<ReadonlyArray<ChatMessage_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<ChatMessage_Order_By>>;
  where?: Maybe<ChatMessage_Bool_Exp>;
};


/** columns and relationships of "User" */
export type UserSentMessages_AggregateArgs = {
  distinct_on?: Maybe<ReadonlyArray<ChatMessage_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<ChatMessage_Order_By>>;
  where?: Maybe<ChatMessage_Bool_Exp>;
};


/** columns and relationships of "User" */
export type UserTypingInChatsArgs = {
  distinct_on?: Maybe<ReadonlyArray<ChatTyper_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<ChatTyper_Order_By>>;
  where?: Maybe<ChatTyper_Bool_Exp>;
};


/** columns and relationships of "User" */
export type UserTypingInChats_AggregateArgs = {
  distinct_on?: Maybe<ReadonlyArray<ChatTyper_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<ChatTyper_Order_By>>;
  where?: Maybe<ChatTyper_Bool_Exp>;
};


/** columns and relationships of "User" */
export type UserUnreadIndicesArgs = {
  distinct_on?: Maybe<ReadonlyArray<ChatUnreadIndex_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<ChatUnreadIndex_Order_By>>;
  where?: Maybe<ChatUnreadIndex_Bool_Exp>;
};


/** columns and relationships of "User" */
export type UserUnreadIndices_AggregateArgs = {
  distinct_on?: Maybe<ReadonlyArray<ChatUnreadIndex_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<ChatUnreadIndex_Order_By>>;
  where?: Maybe<ChatUnreadIndex_Bool_Exp>;
};


/** columns and relationships of "User" */
export type UserViewingChatsArgs = {
  distinct_on?: Maybe<ReadonlyArray<ChatViewer_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<ChatViewer_Order_By>>;
  where?: Maybe<ChatViewer_Bool_Exp>;
};


/** columns and relationships of "User" */
export type UserViewingChats_AggregateArgs = {
  distinct_on?: Maybe<ReadonlyArray<ChatViewer_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<ChatViewer_Order_By>>;
  where?: Maybe<ChatViewer_Bool_Exp>;
};

/** aggregated selection of "User" */
export type User_Aggregate = {
  readonly __typename?: 'User_aggregate';
  readonly aggregate?: Maybe<User_Aggregate_Fields>;
  readonly nodes: ReadonlyArray<User>;
};

/** aggregate fields of "User" */
export type User_Aggregate_Fields = {
  readonly __typename?: 'User_aggregate_fields';
  readonly count?: Maybe<Scalars['Int']>;
  readonly max?: Maybe<User_Max_Fields>;
  readonly min?: Maybe<User_Min_Fields>;
};


/** aggregate fields of "User" */
export type User_Aggregate_FieldsCountArgs = {
  columns?: Maybe<ReadonlyArray<User_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "User" */
export type User_Aggregate_Order_By = {
  readonly count?: Maybe<Order_By>;
  readonly max?: Maybe<User_Max_Order_By>;
  readonly min?: Maybe<User_Min_Order_By>;
};

/** input type for inserting array relation for remote table "User" */
export type User_Arr_Rel_Insert_Input = {
  readonly data: ReadonlyArray<User_Insert_Input>;
  readonly on_conflict?: Maybe<User_On_Conflict>;
};

/** Boolean expression to filter rows from the table "User". All fields are combined with a logical 'AND'. */
export type User_Bool_Exp = {
  readonly _and?: Maybe<ReadonlyArray<Maybe<User_Bool_Exp>>>;
  readonly _not?: Maybe<User_Bool_Exp>;
  readonly _or?: Maybe<ReadonlyArray<Maybe<User_Bool_Exp>>>;
  readonly attendees?: Maybe<Attendee_Bool_Exp>;
  readonly chats?: Maybe<Chat_Bool_Exp>;
  readonly conferencesCreated?: Maybe<Conference_Bool_Exp>;
  readonly created_at?: Maybe<Timestamptz_Comparison_Exp>;
  readonly email?: Maybe<String_Comparison_Exp>;
  readonly firstName?: Maybe<String_Comparison_Exp>;
  readonly flaggedMessages?: Maybe<FlaggedChatMessage_Bool_Exp>;
  readonly followedChats?: Maybe<FollowedChat_Bool_Exp>;
  readonly id?: Maybe<String_Comparison_Exp>;
  readonly lastLoggedInAt?: Maybe<Timestamptz_Comparison_Exp>;
  readonly lastName?: Maybe<String_Comparison_Exp>;
  readonly memberOfChats?: Maybe<ChatMember_Bool_Exp>;
  readonly moderatorOfChats?: Maybe<ChatModerator_Bool_Exp>;
  readonly onlineStatus?: Maybe<OnlineStatus_Bool_Exp>;
  readonly pinnedChats?: Maybe<PinnedChat_Bool_Exp>;
  readonly reactions?: Maybe<ChatReaction_Bool_Exp>;
  readonly sentMessages?: Maybe<ChatMessage_Bool_Exp>;
  readonly typingInChats?: Maybe<ChatTyper_Bool_Exp>;
  readonly unreadIndices?: Maybe<ChatUnreadIndex_Bool_Exp>;
  readonly updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  readonly viewingChats?: Maybe<ChatViewer_Bool_Exp>;
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
  readonly attendees?: Maybe<Attendee_Arr_Rel_Insert_Input>;
  readonly chats?: Maybe<Chat_Arr_Rel_Insert_Input>;
  readonly conferencesCreated?: Maybe<Conference_Arr_Rel_Insert_Input>;
  readonly created_at?: Maybe<Scalars['timestamptz']>;
  readonly email?: Maybe<Scalars['String']>;
  readonly firstName?: Maybe<Scalars['String']>;
  readonly flaggedMessages?: Maybe<FlaggedChatMessage_Arr_Rel_Insert_Input>;
  readonly followedChats?: Maybe<FollowedChat_Arr_Rel_Insert_Input>;
  readonly id?: Maybe<Scalars['String']>;
  readonly lastLoggedInAt?: Maybe<Scalars['timestamptz']>;
  readonly lastName?: Maybe<Scalars['String']>;
  readonly memberOfChats?: Maybe<ChatMember_Arr_Rel_Insert_Input>;
  readonly moderatorOfChats?: Maybe<ChatModerator_Arr_Rel_Insert_Input>;
  readonly onlineStatus?: Maybe<OnlineStatus_Obj_Rel_Insert_Input>;
  readonly pinnedChats?: Maybe<PinnedChat_Arr_Rel_Insert_Input>;
  readonly reactions?: Maybe<ChatReaction_Arr_Rel_Insert_Input>;
  readonly sentMessages?: Maybe<ChatMessage_Arr_Rel_Insert_Input>;
  readonly typingInChats?: Maybe<ChatTyper_Arr_Rel_Insert_Input>;
  readonly unreadIndices?: Maybe<ChatUnreadIndex_Arr_Rel_Insert_Input>;
  readonly updated_at?: Maybe<Scalars['timestamptz']>;
  readonly viewingChats?: Maybe<ChatViewer_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type User_Max_Fields = {
  readonly __typename?: 'User_max_fields';
  readonly created_at?: Maybe<Scalars['timestamptz']>;
  readonly email?: Maybe<Scalars['String']>;
  readonly firstName?: Maybe<Scalars['String']>;
  readonly id?: Maybe<Scalars['String']>;
  readonly lastLoggedInAt?: Maybe<Scalars['timestamptz']>;
  readonly lastName?: Maybe<Scalars['String']>;
  readonly updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "User" */
export type User_Max_Order_By = {
  readonly created_at?: Maybe<Order_By>;
  readonly email?: Maybe<Order_By>;
  readonly firstName?: Maybe<Order_By>;
  readonly id?: Maybe<Order_By>;
  readonly lastLoggedInAt?: Maybe<Order_By>;
  readonly lastName?: Maybe<Order_By>;
  readonly updated_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type User_Min_Fields = {
  readonly __typename?: 'User_min_fields';
  readonly created_at?: Maybe<Scalars['timestamptz']>;
  readonly email?: Maybe<Scalars['String']>;
  readonly firstName?: Maybe<Scalars['String']>;
  readonly id?: Maybe<Scalars['String']>;
  readonly lastLoggedInAt?: Maybe<Scalars['timestamptz']>;
  readonly lastName?: Maybe<Scalars['String']>;
  readonly updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "User" */
export type User_Min_Order_By = {
  readonly created_at?: Maybe<Order_By>;
  readonly email?: Maybe<Order_By>;
  readonly firstName?: Maybe<Order_By>;
  readonly id?: Maybe<Order_By>;
  readonly lastLoggedInAt?: Maybe<Order_By>;
  readonly lastName?: Maybe<Order_By>;
  readonly updated_at?: Maybe<Order_By>;
};

/** response of any mutation on the table "User" */
export type User_Mutation_Response = {
  readonly __typename?: 'User_mutation_response';
  /** number of affected rows by the mutation */
  readonly affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  readonly returning: ReadonlyArray<User>;
};

/** input type for inserting object relation for remote table "User" */
export type User_Obj_Rel_Insert_Input = {
  readonly data: User_Insert_Input;
  readonly on_conflict?: Maybe<User_On_Conflict>;
};

/** on conflict condition type for table "User" */
export type User_On_Conflict = {
  readonly constraint: User_Constraint;
  readonly update_columns: ReadonlyArray<User_Update_Column>;
  readonly where?: Maybe<User_Bool_Exp>;
};

/** ordering options when selecting data from "User" */
export type User_Order_By = {
  readonly attendees_aggregate?: Maybe<Attendee_Aggregate_Order_By>;
  readonly chats_aggregate?: Maybe<Chat_Aggregate_Order_By>;
  readonly conferencesCreated_aggregate?: Maybe<Conference_Aggregate_Order_By>;
  readonly created_at?: Maybe<Order_By>;
  readonly email?: Maybe<Order_By>;
  readonly firstName?: Maybe<Order_By>;
  readonly flaggedMessages_aggregate?: Maybe<FlaggedChatMessage_Aggregate_Order_By>;
  readonly followedChats_aggregate?: Maybe<FollowedChat_Aggregate_Order_By>;
  readonly id?: Maybe<Order_By>;
  readonly lastLoggedInAt?: Maybe<Order_By>;
  readonly lastName?: Maybe<Order_By>;
  readonly memberOfChats_aggregate?: Maybe<ChatMember_Aggregate_Order_By>;
  readonly moderatorOfChats_aggregate?: Maybe<ChatModerator_Aggregate_Order_By>;
  readonly onlineStatus?: Maybe<OnlineStatus_Order_By>;
  readonly pinnedChats_aggregate?: Maybe<PinnedChat_Aggregate_Order_By>;
  readonly reactions_aggregate?: Maybe<ChatReaction_Aggregate_Order_By>;
  readonly sentMessages_aggregate?: Maybe<ChatMessage_Aggregate_Order_By>;
  readonly typingInChats_aggregate?: Maybe<ChatTyper_Aggregate_Order_By>;
  readonly unreadIndices_aggregate?: Maybe<ChatUnreadIndex_Aggregate_Order_By>;
  readonly updated_at?: Maybe<Order_By>;
  readonly viewingChats_aggregate?: Maybe<ChatViewer_Aggregate_Order_By>;
};

/** primary key columns input for table: "User" */
export type User_Pk_Columns_Input = {
  readonly id: Scalars['String'];
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
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "User" */
export type User_Set_Input = {
  readonly created_at?: Maybe<Scalars['timestamptz']>;
  readonly email?: Maybe<Scalars['String']>;
  readonly firstName?: Maybe<Scalars['String']>;
  readonly id?: Maybe<Scalars['String']>;
  readonly lastLoggedInAt?: Maybe<Scalars['timestamptz']>;
  readonly lastName?: Maybe<Scalars['String']>;
  readonly updated_at?: Maybe<Scalars['timestamptz']>;
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
  UpdatedAt = 'updated_at'
}


/** expression to compare columns of type json. All fields are combined with logical 'AND'. */
export type Json_Comparison_Exp = {
  readonly _eq?: Maybe<Scalars['json']>;
  readonly _gt?: Maybe<Scalars['json']>;
  readonly _gte?: Maybe<Scalars['json']>;
  readonly _in?: Maybe<ReadonlyArray<Scalars['json']>>;
  readonly _is_null?: Maybe<Scalars['Boolean']>;
  readonly _lt?: Maybe<Scalars['json']>;
  readonly _lte?: Maybe<Scalars['json']>;
  readonly _neq?: Maybe<Scalars['json']>;
  readonly _nin?: Maybe<ReadonlyArray<Scalars['json']>>;
};


/** expression to compare columns of type jsonb. All fields are combined with logical 'AND'. */
export type Jsonb_Comparison_Exp = {
  /** is the column contained in the given json value */
  readonly _contained_in?: Maybe<Scalars['jsonb']>;
  /** does the column contain the given json value at the top level */
  readonly _contains?: Maybe<Scalars['jsonb']>;
  readonly _eq?: Maybe<Scalars['jsonb']>;
  readonly _gt?: Maybe<Scalars['jsonb']>;
  readonly _gte?: Maybe<Scalars['jsonb']>;
  /** does the string exist as a top-level key in the column */
  readonly _has_key?: Maybe<Scalars['String']>;
  /** do all of these strings exist as top-level keys in the column */
  readonly _has_keys_all?: Maybe<ReadonlyArray<Scalars['String']>>;
  /** do any of these strings exist as top-level keys in the column */
  readonly _has_keys_any?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly _in?: Maybe<ReadonlyArray<Scalars['jsonb']>>;
  readonly _is_null?: Maybe<Scalars['Boolean']>;
  readonly _lt?: Maybe<Scalars['jsonb']>;
  readonly _lte?: Maybe<Scalars['jsonb']>;
  readonly _neq?: Maybe<Scalars['jsonb']>;
  readonly _nin?: Maybe<ReadonlyArray<Scalars['jsonb']>>;
};

/** mutation root */
export type Mutation_Root = {
  readonly __typename?: 'mutation_root';
  /** delete data from the table: "ActiveGroup" */
  readonly delete_ActiveGroup?: Maybe<ActiveGroup_Mutation_Response>;
  /** delete data from the table: "Attendee" */
  readonly delete_Attendee?: Maybe<Attendee_Mutation_Response>;
  /** delete data from the table: "AttendeeStatus" */
  readonly delete_AttendeeStatus?: Maybe<AttendeeStatus_Mutation_Response>;
  /** delete single row from the table: "AttendeeStatus" */
  readonly delete_AttendeeStatus_by_pk?: Maybe<AttendeeStatus>;
  /** delete single row from the table: "Attendee" */
  readonly delete_Attendee_by_pk?: Maybe<Attendee>;
  /** delete data from the table: "Chat" */
  readonly delete_Chat?: Maybe<Chat_Mutation_Response>;
  /** delete data from the table: "ChatMember" */
  readonly delete_ChatMember?: Maybe<ChatMember_Mutation_Response>;
  /** delete single row from the table: "ChatMember" */
  readonly delete_ChatMember_by_pk?: Maybe<ChatMember>;
  /** delete data from the table: "ChatMessage" */
  readonly delete_ChatMessage?: Maybe<ChatMessage_Mutation_Response>;
  /** delete single row from the table: "ChatMessage" */
  readonly delete_ChatMessage_by_pk?: Maybe<ChatMessage>;
  /** delete data from the table: "ChatModerator" */
  readonly delete_ChatModerator?: Maybe<ChatModerator_Mutation_Response>;
  /** delete single row from the table: "ChatModerator" */
  readonly delete_ChatModerator_by_pk?: Maybe<ChatModerator>;
  /** delete data from the table: "ChatReaction" */
  readonly delete_ChatReaction?: Maybe<ChatReaction_Mutation_Response>;
  /** delete single row from the table: "ChatReaction" */
  readonly delete_ChatReaction_by_pk?: Maybe<ChatReaction>;
  /** delete data from the table: "ChatTyper" */
  readonly delete_ChatTyper?: Maybe<ChatTyper_Mutation_Response>;
  /** delete single row from the table: "ChatTyper" */
  readonly delete_ChatTyper_by_pk?: Maybe<ChatTyper>;
  /** delete data from the table: "ChatUnreadIndex" */
  readonly delete_ChatUnreadIndex?: Maybe<ChatUnreadIndex_Mutation_Response>;
  /** delete single row from the table: "ChatUnreadIndex" */
  readonly delete_ChatUnreadIndex_by_pk?: Maybe<ChatUnreadIndex>;
  /** delete data from the table: "ChatViewer" */
  readonly delete_ChatViewer?: Maybe<ChatViewer_Mutation_Response>;
  /** delete single row from the table: "ChatViewer" */
  readonly delete_ChatViewer_by_pk?: Maybe<ChatViewer>;
  /** delete single row from the table: "Chat" */
  readonly delete_Chat_by_pk?: Maybe<Chat>;
  /** delete data from the table: "Conference" */
  readonly delete_Conference?: Maybe<Conference_Mutation_Response>;
  /** delete data from the table: "ConferenceDemoCode" */
  readonly delete_ConferenceDemoCode?: Maybe<ConferenceDemoCode_Mutation_Response>;
  /** delete single row from the table: "ConferenceDemoCode" */
  readonly delete_ConferenceDemoCode_by_pk?: Maybe<ConferenceDemoCode>;
  /** delete single row from the table: "Conference" */
  readonly delete_Conference_by_pk?: Maybe<Conference>;
  /** delete data from the table: "FlaggedChatMessage" */
  readonly delete_FlaggedChatMessage?: Maybe<FlaggedChatMessage_Mutation_Response>;
  /** delete single row from the table: "FlaggedChatMessage" */
  readonly delete_FlaggedChatMessage_by_pk?: Maybe<FlaggedChatMessage>;
  /** delete data from the table: "FollowedChat" */
  readonly delete_FollowedChat?: Maybe<FollowedChat_Mutation_Response>;
  /** delete single row from the table: "FollowedChat" */
  readonly delete_FollowedChat_by_pk?: Maybe<FollowedChat>;
  /** delete data from the table: "Group" */
  readonly delete_Group?: Maybe<Group_Mutation_Response>;
  /** delete data from the table: "GroupAttendee" */
  readonly delete_GroupAttendee?: Maybe<GroupAttendee_Mutation_Response>;
  /** delete single row from the table: "GroupAttendee" */
  readonly delete_GroupAttendee_by_pk?: Maybe<GroupAttendee>;
  /** delete data from the table: "GroupRole" */
  readonly delete_GroupRole?: Maybe<GroupRole_Mutation_Response>;
  /** delete single row from the table: "GroupRole" */
  readonly delete_GroupRole_by_pk?: Maybe<GroupRole>;
  /** delete single row from the table: "Group" */
  readonly delete_Group_by_pk?: Maybe<Group>;
  /** delete data from the table: "OnlineStatus" */
  readonly delete_OnlineStatus?: Maybe<OnlineStatus_Mutation_Response>;
  /** delete single row from the table: "OnlineStatus" */
  readonly delete_OnlineStatus_by_pk?: Maybe<OnlineStatus>;
  /** delete data from the table: "Permission" */
  readonly delete_Permission?: Maybe<Permission_Mutation_Response>;
  /** delete single row from the table: "Permission" */
  readonly delete_Permission_by_pk?: Maybe<Permission>;
  /** delete data from the table: "PinnedChat" */
  readonly delete_PinnedChat?: Maybe<PinnedChat_Mutation_Response>;
  /** delete single row from the table: "PinnedChat" */
  readonly delete_PinnedChat_by_pk?: Maybe<PinnedChat>;
  /** delete data from the table: "Role" */
  readonly delete_Role?: Maybe<Role_Mutation_Response>;
  /** delete data from the table: "RolePermission" */
  readonly delete_RolePermission?: Maybe<RolePermission_Mutation_Response>;
  /** delete single row from the table: "RolePermission" */
  readonly delete_RolePermission_by_pk?: Maybe<RolePermission>;
  /** delete single row from the table: "Role" */
  readonly delete_Role_by_pk?: Maybe<Role>;
  /** delete data from the table: "Room" */
  readonly delete_Room?: Maybe<Room_Mutation_Response>;
  /** delete single row from the table: "Room" */
  readonly delete_Room_by_pk?: Maybe<Room>;
  /** delete data from the table: "User" */
  readonly delete_User?: Maybe<User_Mutation_Response>;
  /** delete single row from the table: "User" */
  readonly delete_User_by_pk?: Maybe<User>;
  /** perform the action: "generateVonageToken" */
  readonly generateVonageToken?: Maybe<GenerateVonageTokenOutput>;
  /** insert data into the table: "ActiveGroup" */
  readonly insert_ActiveGroup?: Maybe<ActiveGroup_Mutation_Response>;
  /** insert a single row into the table: "ActiveGroup" */
  readonly insert_ActiveGroup_one?: Maybe<ActiveGroup>;
  /** insert data into the table: "Attendee" */
  readonly insert_Attendee?: Maybe<Attendee_Mutation_Response>;
  /** insert data into the table: "AttendeeStatus" */
  readonly insert_AttendeeStatus?: Maybe<AttendeeStatus_Mutation_Response>;
  /** insert a single row into the table: "AttendeeStatus" */
  readonly insert_AttendeeStatus_one?: Maybe<AttendeeStatus>;
  /** insert a single row into the table: "Attendee" */
  readonly insert_Attendee_one?: Maybe<Attendee>;
  /** insert data into the table: "Chat" */
  readonly insert_Chat?: Maybe<Chat_Mutation_Response>;
  /** insert data into the table: "ChatMember" */
  readonly insert_ChatMember?: Maybe<ChatMember_Mutation_Response>;
  /** insert a single row into the table: "ChatMember" */
  readonly insert_ChatMember_one?: Maybe<ChatMember>;
  /** insert data into the table: "ChatMessage" */
  readonly insert_ChatMessage?: Maybe<ChatMessage_Mutation_Response>;
  /** insert a single row into the table: "ChatMessage" */
  readonly insert_ChatMessage_one?: Maybe<ChatMessage>;
  /** insert data into the table: "ChatModerator" */
  readonly insert_ChatModerator?: Maybe<ChatModerator_Mutation_Response>;
  /** insert a single row into the table: "ChatModerator" */
  readonly insert_ChatModerator_one?: Maybe<ChatModerator>;
  /** insert data into the table: "ChatReaction" */
  readonly insert_ChatReaction?: Maybe<ChatReaction_Mutation_Response>;
  /** insert a single row into the table: "ChatReaction" */
  readonly insert_ChatReaction_one?: Maybe<ChatReaction>;
  /** insert data into the table: "ChatTyper" */
  readonly insert_ChatTyper?: Maybe<ChatTyper_Mutation_Response>;
  /** insert a single row into the table: "ChatTyper" */
  readonly insert_ChatTyper_one?: Maybe<ChatTyper>;
  /** insert data into the table: "ChatUnreadIndex" */
  readonly insert_ChatUnreadIndex?: Maybe<ChatUnreadIndex_Mutation_Response>;
  /** insert a single row into the table: "ChatUnreadIndex" */
  readonly insert_ChatUnreadIndex_one?: Maybe<ChatUnreadIndex>;
  /** insert data into the table: "ChatViewer" */
  readonly insert_ChatViewer?: Maybe<ChatViewer_Mutation_Response>;
  /** insert a single row into the table: "ChatViewer" */
  readonly insert_ChatViewer_one?: Maybe<ChatViewer>;
  /** insert a single row into the table: "Chat" */
  readonly insert_Chat_one?: Maybe<Chat>;
  /** insert data into the table: "Conference" */
  readonly insert_Conference?: Maybe<Conference_Mutation_Response>;
  /** insert data into the table: "ConferenceDemoCode" */
  readonly insert_ConferenceDemoCode?: Maybe<ConferenceDemoCode_Mutation_Response>;
  /** insert a single row into the table: "ConferenceDemoCode" */
  readonly insert_ConferenceDemoCode_one?: Maybe<ConferenceDemoCode>;
  /** insert a single row into the table: "Conference" */
  readonly insert_Conference_one?: Maybe<Conference>;
  /** insert data into the table: "FlaggedChatMessage" */
  readonly insert_FlaggedChatMessage?: Maybe<FlaggedChatMessage_Mutation_Response>;
  /** insert a single row into the table: "FlaggedChatMessage" */
  readonly insert_FlaggedChatMessage_one?: Maybe<FlaggedChatMessage>;
  /** insert data into the table: "FollowedChat" */
  readonly insert_FollowedChat?: Maybe<FollowedChat_Mutation_Response>;
  /** insert a single row into the table: "FollowedChat" */
  readonly insert_FollowedChat_one?: Maybe<FollowedChat>;
  /** insert data into the table: "Group" */
  readonly insert_Group?: Maybe<Group_Mutation_Response>;
  /** insert data into the table: "GroupAttendee" */
  readonly insert_GroupAttendee?: Maybe<GroupAttendee_Mutation_Response>;
  /** insert a single row into the table: "GroupAttendee" */
  readonly insert_GroupAttendee_one?: Maybe<GroupAttendee>;
  /** insert data into the table: "GroupRole" */
  readonly insert_GroupRole?: Maybe<GroupRole_Mutation_Response>;
  /** insert a single row into the table: "GroupRole" */
  readonly insert_GroupRole_one?: Maybe<GroupRole>;
  /** insert a single row into the table: "Group" */
  readonly insert_Group_one?: Maybe<Group>;
  /** insert data into the table: "OnlineStatus" */
  readonly insert_OnlineStatus?: Maybe<OnlineStatus_Mutation_Response>;
  /** insert a single row into the table: "OnlineStatus" */
  readonly insert_OnlineStatus_one?: Maybe<OnlineStatus>;
  /** insert data into the table: "Permission" */
  readonly insert_Permission?: Maybe<Permission_Mutation_Response>;
  /** insert a single row into the table: "Permission" */
  readonly insert_Permission_one?: Maybe<Permission>;
  /** insert data into the table: "PinnedChat" */
  readonly insert_PinnedChat?: Maybe<PinnedChat_Mutation_Response>;
  /** insert a single row into the table: "PinnedChat" */
  readonly insert_PinnedChat_one?: Maybe<PinnedChat>;
  /** insert data into the table: "Role" */
  readonly insert_Role?: Maybe<Role_Mutation_Response>;
  /** insert data into the table: "RolePermission" */
  readonly insert_RolePermission?: Maybe<RolePermission_Mutation_Response>;
  /** insert a single row into the table: "RolePermission" */
  readonly insert_RolePermission_one?: Maybe<RolePermission>;
  /** insert a single row into the table: "Role" */
  readonly insert_Role_one?: Maybe<Role>;
  /** insert data into the table: "Room" */
  readonly insert_Room?: Maybe<Room_Mutation_Response>;
  /** insert a single row into the table: "Room" */
  readonly insert_Room_one?: Maybe<Room>;
  /** insert data into the table: "User" */
  readonly insert_User?: Maybe<User_Mutation_Response>;
  /** insert a single row into the table: "User" */
  readonly insert_User_one?: Maybe<User>;
  /** update data of the table: "ActiveGroup" */
  readonly update_ActiveGroup?: Maybe<ActiveGroup_Mutation_Response>;
  /** update data of the table: "Attendee" */
  readonly update_Attendee?: Maybe<Attendee_Mutation_Response>;
  /** update data of the table: "AttendeeStatus" */
  readonly update_AttendeeStatus?: Maybe<AttendeeStatus_Mutation_Response>;
  /** update single row of the table: "AttendeeStatus" */
  readonly update_AttendeeStatus_by_pk?: Maybe<AttendeeStatus>;
  /** update single row of the table: "Attendee" */
  readonly update_Attendee_by_pk?: Maybe<Attendee>;
  /** update data of the table: "Chat" */
  readonly update_Chat?: Maybe<Chat_Mutation_Response>;
  /** update data of the table: "ChatMember" */
  readonly update_ChatMember?: Maybe<ChatMember_Mutation_Response>;
  /** update single row of the table: "ChatMember" */
  readonly update_ChatMember_by_pk?: Maybe<ChatMember>;
  /** update data of the table: "ChatMessage" */
  readonly update_ChatMessage?: Maybe<ChatMessage_Mutation_Response>;
  /** update single row of the table: "ChatMessage" */
  readonly update_ChatMessage_by_pk?: Maybe<ChatMessage>;
  /** update data of the table: "ChatModerator" */
  readonly update_ChatModerator?: Maybe<ChatModerator_Mutation_Response>;
  /** update single row of the table: "ChatModerator" */
  readonly update_ChatModerator_by_pk?: Maybe<ChatModerator>;
  /** update data of the table: "ChatReaction" */
  readonly update_ChatReaction?: Maybe<ChatReaction_Mutation_Response>;
  /** update single row of the table: "ChatReaction" */
  readonly update_ChatReaction_by_pk?: Maybe<ChatReaction>;
  /** update data of the table: "ChatTyper" */
  readonly update_ChatTyper?: Maybe<ChatTyper_Mutation_Response>;
  /** update single row of the table: "ChatTyper" */
  readonly update_ChatTyper_by_pk?: Maybe<ChatTyper>;
  /** update data of the table: "ChatUnreadIndex" */
  readonly update_ChatUnreadIndex?: Maybe<ChatUnreadIndex_Mutation_Response>;
  /** update single row of the table: "ChatUnreadIndex" */
  readonly update_ChatUnreadIndex_by_pk?: Maybe<ChatUnreadIndex>;
  /** update data of the table: "ChatViewer" */
  readonly update_ChatViewer?: Maybe<ChatViewer_Mutation_Response>;
  /** update single row of the table: "ChatViewer" */
  readonly update_ChatViewer_by_pk?: Maybe<ChatViewer>;
  /** update single row of the table: "Chat" */
  readonly update_Chat_by_pk?: Maybe<Chat>;
  /** update data of the table: "Conference" */
  readonly update_Conference?: Maybe<Conference_Mutation_Response>;
  /** update data of the table: "ConferenceDemoCode" */
  readonly update_ConferenceDemoCode?: Maybe<ConferenceDemoCode_Mutation_Response>;
  /** update single row of the table: "ConferenceDemoCode" */
  readonly update_ConferenceDemoCode_by_pk?: Maybe<ConferenceDemoCode>;
  /** update single row of the table: "Conference" */
  readonly update_Conference_by_pk?: Maybe<Conference>;
  /** update data of the table: "FlaggedChatMessage" */
  readonly update_FlaggedChatMessage?: Maybe<FlaggedChatMessage_Mutation_Response>;
  /** update single row of the table: "FlaggedChatMessage" */
  readonly update_FlaggedChatMessage_by_pk?: Maybe<FlaggedChatMessage>;
  /** update data of the table: "FollowedChat" */
  readonly update_FollowedChat?: Maybe<FollowedChat_Mutation_Response>;
  /** update single row of the table: "FollowedChat" */
  readonly update_FollowedChat_by_pk?: Maybe<FollowedChat>;
  /** update data of the table: "Group" */
  readonly update_Group?: Maybe<Group_Mutation_Response>;
  /** update data of the table: "GroupAttendee" */
  readonly update_GroupAttendee?: Maybe<GroupAttendee_Mutation_Response>;
  /** update single row of the table: "GroupAttendee" */
  readonly update_GroupAttendee_by_pk?: Maybe<GroupAttendee>;
  /** update data of the table: "GroupRole" */
  readonly update_GroupRole?: Maybe<GroupRole_Mutation_Response>;
  /** update single row of the table: "GroupRole" */
  readonly update_GroupRole_by_pk?: Maybe<GroupRole>;
  /** update single row of the table: "Group" */
  readonly update_Group_by_pk?: Maybe<Group>;
  /** update data of the table: "OnlineStatus" */
  readonly update_OnlineStatus?: Maybe<OnlineStatus_Mutation_Response>;
  /** update single row of the table: "OnlineStatus" */
  readonly update_OnlineStatus_by_pk?: Maybe<OnlineStatus>;
  /** update data of the table: "Permission" */
  readonly update_Permission?: Maybe<Permission_Mutation_Response>;
  /** update single row of the table: "Permission" */
  readonly update_Permission_by_pk?: Maybe<Permission>;
  /** update data of the table: "PinnedChat" */
  readonly update_PinnedChat?: Maybe<PinnedChat_Mutation_Response>;
  /** update single row of the table: "PinnedChat" */
  readonly update_PinnedChat_by_pk?: Maybe<PinnedChat>;
  /** update data of the table: "Role" */
  readonly update_Role?: Maybe<Role_Mutation_Response>;
  /** update data of the table: "RolePermission" */
  readonly update_RolePermission?: Maybe<RolePermission_Mutation_Response>;
  /** update single row of the table: "RolePermission" */
  readonly update_RolePermission_by_pk?: Maybe<RolePermission>;
  /** update single row of the table: "Role" */
  readonly update_Role_by_pk?: Maybe<Role>;
  /** update data of the table: "Room" */
  readonly update_Room?: Maybe<Room_Mutation_Response>;
  /** update single row of the table: "Room" */
  readonly update_Room_by_pk?: Maybe<Room>;
  /** update data of the table: "User" */
  readonly update_User?: Maybe<User_Mutation_Response>;
  /** update single row of the table: "User" */
  readonly update_User_by_pk?: Maybe<User>;
};


/** mutation root */
export type Mutation_RootDelete_ActiveGroupArgs = {
  where: ActiveGroup_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_AttendeeArgs = {
  where: Attendee_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_AttendeeStatusArgs = {
  where: AttendeeStatus_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_AttendeeStatus_By_PkArgs = {
  name: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Attendee_By_PkArgs = {
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
export type Mutation_RootDelete_ConferenceArgs = {
  where: Conference_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_ConferenceDemoCodeArgs = {
  where: ConferenceDemoCode_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_ConferenceDemoCode_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Conference_By_PkArgs = {
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
export type Mutation_RootDelete_GroupArgs = {
  where: Group_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_GroupAttendeeArgs = {
  where: GroupAttendee_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_GroupAttendee_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_GroupRoleArgs = {
  where: GroupRole_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_GroupRole_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Group_By_PkArgs = {
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
export type Mutation_RootDelete_PermissionArgs = {
  where: Permission_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Permission_By_PkArgs = {
  name: Scalars['String'];
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
export type Mutation_RootDelete_RoleArgs = {
  where: Role_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_RolePermissionArgs = {
  where: RolePermission_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_RolePermission_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Role_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_RoomArgs = {
  where: Room_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Room_By_PkArgs = {
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
export type Mutation_RootGenerateVonageTokenArgs = {
  roomId: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootInsert_ActiveGroupArgs = {
  objects: ReadonlyArray<ActiveGroup_Insert_Input>;
};


/** mutation root */
export type Mutation_RootInsert_ActiveGroup_OneArgs = {
  object: ActiveGroup_Insert_Input;
};


/** mutation root */
export type Mutation_RootInsert_AttendeeArgs = {
  objects: ReadonlyArray<Attendee_Insert_Input>;
  on_conflict?: Maybe<Attendee_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_AttendeeStatusArgs = {
  objects: ReadonlyArray<AttendeeStatus_Insert_Input>;
  on_conflict?: Maybe<AttendeeStatus_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_AttendeeStatus_OneArgs = {
  object: AttendeeStatus_Insert_Input;
  on_conflict?: Maybe<AttendeeStatus_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Attendee_OneArgs = {
  object: Attendee_Insert_Input;
  on_conflict?: Maybe<Attendee_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ChatArgs = {
  objects: ReadonlyArray<Chat_Insert_Input>;
  on_conflict?: Maybe<Chat_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ChatMemberArgs = {
  objects: ReadonlyArray<ChatMember_Insert_Input>;
  on_conflict?: Maybe<ChatMember_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ChatMember_OneArgs = {
  object: ChatMember_Insert_Input;
  on_conflict?: Maybe<ChatMember_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ChatMessageArgs = {
  objects: ReadonlyArray<ChatMessage_Insert_Input>;
  on_conflict?: Maybe<ChatMessage_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ChatMessage_OneArgs = {
  object: ChatMessage_Insert_Input;
  on_conflict?: Maybe<ChatMessage_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ChatModeratorArgs = {
  objects: ReadonlyArray<ChatModerator_Insert_Input>;
  on_conflict?: Maybe<ChatModerator_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ChatModerator_OneArgs = {
  object: ChatModerator_Insert_Input;
  on_conflict?: Maybe<ChatModerator_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ChatReactionArgs = {
  objects: ReadonlyArray<ChatReaction_Insert_Input>;
  on_conflict?: Maybe<ChatReaction_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ChatReaction_OneArgs = {
  object: ChatReaction_Insert_Input;
  on_conflict?: Maybe<ChatReaction_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ChatTyperArgs = {
  objects: ReadonlyArray<ChatTyper_Insert_Input>;
  on_conflict?: Maybe<ChatTyper_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ChatTyper_OneArgs = {
  object: ChatTyper_Insert_Input;
  on_conflict?: Maybe<ChatTyper_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ChatUnreadIndexArgs = {
  objects: ReadonlyArray<ChatUnreadIndex_Insert_Input>;
  on_conflict?: Maybe<ChatUnreadIndex_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ChatUnreadIndex_OneArgs = {
  object: ChatUnreadIndex_Insert_Input;
  on_conflict?: Maybe<ChatUnreadIndex_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ChatViewerArgs = {
  objects: ReadonlyArray<ChatViewer_Insert_Input>;
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
export type Mutation_RootInsert_ConferenceArgs = {
  objects: ReadonlyArray<Conference_Insert_Input>;
  on_conflict?: Maybe<Conference_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ConferenceDemoCodeArgs = {
  objects: ReadonlyArray<ConferenceDemoCode_Insert_Input>;
  on_conflict?: Maybe<ConferenceDemoCode_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ConferenceDemoCode_OneArgs = {
  object: ConferenceDemoCode_Insert_Input;
  on_conflict?: Maybe<ConferenceDemoCode_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Conference_OneArgs = {
  object: Conference_Insert_Input;
  on_conflict?: Maybe<Conference_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_FlaggedChatMessageArgs = {
  objects: ReadonlyArray<FlaggedChatMessage_Insert_Input>;
  on_conflict?: Maybe<FlaggedChatMessage_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_FlaggedChatMessage_OneArgs = {
  object: FlaggedChatMessage_Insert_Input;
  on_conflict?: Maybe<FlaggedChatMessage_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_FollowedChatArgs = {
  objects: ReadonlyArray<FollowedChat_Insert_Input>;
  on_conflict?: Maybe<FollowedChat_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_FollowedChat_OneArgs = {
  object: FollowedChat_Insert_Input;
  on_conflict?: Maybe<FollowedChat_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_GroupArgs = {
  objects: ReadonlyArray<Group_Insert_Input>;
  on_conflict?: Maybe<Group_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_GroupAttendeeArgs = {
  objects: ReadonlyArray<GroupAttendee_Insert_Input>;
  on_conflict?: Maybe<GroupAttendee_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_GroupAttendee_OneArgs = {
  object: GroupAttendee_Insert_Input;
  on_conflict?: Maybe<GroupAttendee_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_GroupRoleArgs = {
  objects: ReadonlyArray<GroupRole_Insert_Input>;
  on_conflict?: Maybe<GroupRole_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_GroupRole_OneArgs = {
  object: GroupRole_Insert_Input;
  on_conflict?: Maybe<GroupRole_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Group_OneArgs = {
  object: Group_Insert_Input;
  on_conflict?: Maybe<Group_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_OnlineStatusArgs = {
  objects: ReadonlyArray<OnlineStatus_Insert_Input>;
  on_conflict?: Maybe<OnlineStatus_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_OnlineStatus_OneArgs = {
  object: OnlineStatus_Insert_Input;
  on_conflict?: Maybe<OnlineStatus_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_PermissionArgs = {
  objects: ReadonlyArray<Permission_Insert_Input>;
  on_conflict?: Maybe<Permission_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Permission_OneArgs = {
  object: Permission_Insert_Input;
  on_conflict?: Maybe<Permission_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_PinnedChatArgs = {
  objects: ReadonlyArray<PinnedChat_Insert_Input>;
  on_conflict?: Maybe<PinnedChat_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_PinnedChat_OneArgs = {
  object: PinnedChat_Insert_Input;
  on_conflict?: Maybe<PinnedChat_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_RoleArgs = {
  objects: ReadonlyArray<Role_Insert_Input>;
  on_conflict?: Maybe<Role_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_RolePermissionArgs = {
  objects: ReadonlyArray<RolePermission_Insert_Input>;
  on_conflict?: Maybe<RolePermission_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_RolePermission_OneArgs = {
  object: RolePermission_Insert_Input;
  on_conflict?: Maybe<RolePermission_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Role_OneArgs = {
  object: Role_Insert_Input;
  on_conflict?: Maybe<Role_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_RoomArgs = {
  objects: ReadonlyArray<Room_Insert_Input>;
  on_conflict?: Maybe<Room_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Room_OneArgs = {
  object: Room_Insert_Input;
  on_conflict?: Maybe<Room_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_UserArgs = {
  objects: ReadonlyArray<User_Insert_Input>;
  on_conflict?: Maybe<User_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_OneArgs = {
  object: User_Insert_Input;
  on_conflict?: Maybe<User_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_ActiveGroupArgs = {
  _set?: Maybe<ActiveGroup_Set_Input>;
  where: ActiveGroup_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_AttendeeArgs = {
  _set?: Maybe<Attendee_Set_Input>;
  where: Attendee_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_AttendeeStatusArgs = {
  _set?: Maybe<AttendeeStatus_Set_Input>;
  where: AttendeeStatus_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_AttendeeStatus_By_PkArgs = {
  _set?: Maybe<AttendeeStatus_Set_Input>;
  pk_columns: AttendeeStatus_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Attendee_By_PkArgs = {
  _set?: Maybe<Attendee_Set_Input>;
  pk_columns: Attendee_Pk_Columns_Input;
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
export type Mutation_RootUpdate_ConferenceArgs = {
  _set?: Maybe<Conference_Set_Input>;
  where: Conference_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_ConferenceDemoCodeArgs = {
  _set?: Maybe<ConferenceDemoCode_Set_Input>;
  where: ConferenceDemoCode_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_ConferenceDemoCode_By_PkArgs = {
  _set?: Maybe<ConferenceDemoCode_Set_Input>;
  pk_columns: ConferenceDemoCode_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Conference_By_PkArgs = {
  _set?: Maybe<Conference_Set_Input>;
  pk_columns: Conference_Pk_Columns_Input;
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
export type Mutation_RootUpdate_GroupArgs = {
  _set?: Maybe<Group_Set_Input>;
  where: Group_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_GroupAttendeeArgs = {
  _set?: Maybe<GroupAttendee_Set_Input>;
  where: GroupAttendee_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_GroupAttendee_By_PkArgs = {
  _set?: Maybe<GroupAttendee_Set_Input>;
  pk_columns: GroupAttendee_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_GroupRoleArgs = {
  _set?: Maybe<GroupRole_Set_Input>;
  where: GroupRole_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_GroupRole_By_PkArgs = {
  _set?: Maybe<GroupRole_Set_Input>;
  pk_columns: GroupRole_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Group_By_PkArgs = {
  _set?: Maybe<Group_Set_Input>;
  pk_columns: Group_Pk_Columns_Input;
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
export type Mutation_RootUpdate_PermissionArgs = {
  _set?: Maybe<Permission_Set_Input>;
  where: Permission_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Permission_By_PkArgs = {
  _set?: Maybe<Permission_Set_Input>;
  pk_columns: Permission_Pk_Columns_Input;
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
export type Mutation_RootUpdate_RoleArgs = {
  _set?: Maybe<Role_Set_Input>;
  where: Role_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_RolePermissionArgs = {
  _set?: Maybe<RolePermission_Set_Input>;
  where: RolePermission_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_RolePermission_By_PkArgs = {
  _set?: Maybe<RolePermission_Set_Input>;
  pk_columns: RolePermission_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Role_By_PkArgs = {
  _set?: Maybe<Role_Set_Input>;
  pk_columns: Role_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_RoomArgs = {
  _set?: Maybe<Room_Set_Input>;
  where: Room_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Room_By_PkArgs = {
  _set?: Maybe<Room_Set_Input>;
  pk_columns: Room_Pk_Columns_Input;
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
  readonly __typename?: 'query_root';
  /** fetch data from the table: "ActiveGroup" */
  readonly ActiveGroup: ReadonlyArray<ActiveGroup>;
  /** fetch aggregated fields from the table: "ActiveGroup" */
  readonly ActiveGroup_aggregate: ActiveGroup_Aggregate;
  /** fetch data from the table: "Attendee" */
  readonly Attendee: ReadonlyArray<Attendee>;
  /** fetch data from the table: "AttendeeStatus" */
  readonly AttendeeStatus: ReadonlyArray<AttendeeStatus>;
  /** fetch aggregated fields from the table: "AttendeeStatus" */
  readonly AttendeeStatus_aggregate: AttendeeStatus_Aggregate;
  /** fetch data from the table: "AttendeeStatus" using primary key columns */
  readonly AttendeeStatus_by_pk?: Maybe<AttendeeStatus>;
  /** fetch aggregated fields from the table: "Attendee" */
  readonly Attendee_aggregate: Attendee_Aggregate;
  /** fetch data from the table: "Attendee" using primary key columns */
  readonly Attendee_by_pk?: Maybe<Attendee>;
  /** fetch data from the table: "Chat" */
  readonly Chat: ReadonlyArray<Chat>;
  /** fetch data from the table: "ChatMember" */
  readonly ChatMember: ReadonlyArray<ChatMember>;
  /** fetch aggregated fields from the table: "ChatMember" */
  readonly ChatMember_aggregate: ChatMember_Aggregate;
  /** fetch data from the table: "ChatMember" using primary key columns */
  readonly ChatMember_by_pk?: Maybe<ChatMember>;
  /** fetch data from the table: "ChatMessage" */
  readonly ChatMessage: ReadonlyArray<ChatMessage>;
  /** fetch aggregated fields from the table: "ChatMessage" */
  readonly ChatMessage_aggregate: ChatMessage_Aggregate;
  /** fetch data from the table: "ChatMessage" using primary key columns */
  readonly ChatMessage_by_pk?: Maybe<ChatMessage>;
  /** fetch data from the table: "ChatModerator" */
  readonly ChatModerator: ReadonlyArray<ChatModerator>;
  /** fetch aggregated fields from the table: "ChatModerator" */
  readonly ChatModerator_aggregate: ChatModerator_Aggregate;
  /** fetch data from the table: "ChatModerator" using primary key columns */
  readonly ChatModerator_by_pk?: Maybe<ChatModerator>;
  /** fetch data from the table: "ChatReaction" */
  readonly ChatReaction: ReadonlyArray<ChatReaction>;
  /** fetch aggregated fields from the table: "ChatReaction" */
  readonly ChatReaction_aggregate: ChatReaction_Aggregate;
  /** fetch data from the table: "ChatReaction" using primary key columns */
  readonly ChatReaction_by_pk?: Maybe<ChatReaction>;
  /** fetch data from the table: "ChatTyper" */
  readonly ChatTyper: ReadonlyArray<ChatTyper>;
  /** fetch aggregated fields from the table: "ChatTyper" */
  readonly ChatTyper_aggregate: ChatTyper_Aggregate;
  /** fetch data from the table: "ChatTyper" using primary key columns */
  readonly ChatTyper_by_pk?: Maybe<ChatTyper>;
  /** fetch data from the table: "ChatUnreadIndex" */
  readonly ChatUnreadIndex: ReadonlyArray<ChatUnreadIndex>;
  /** fetch aggregated fields from the table: "ChatUnreadIndex" */
  readonly ChatUnreadIndex_aggregate: ChatUnreadIndex_Aggregate;
  /** fetch data from the table: "ChatUnreadIndex" using primary key columns */
  readonly ChatUnreadIndex_by_pk?: Maybe<ChatUnreadIndex>;
  /** fetch data from the table: "ChatViewer" */
  readonly ChatViewer: ReadonlyArray<ChatViewer>;
  /** fetch aggregated fields from the table: "ChatViewer" */
  readonly ChatViewer_aggregate: ChatViewer_Aggregate;
  /** fetch data from the table: "ChatViewer" using primary key columns */
  readonly ChatViewer_by_pk?: Maybe<ChatViewer>;
  /** fetch aggregated fields from the table: "Chat" */
  readonly Chat_aggregate: Chat_Aggregate;
  /** fetch data from the table: "Chat" using primary key columns */
  readonly Chat_by_pk?: Maybe<Chat>;
  /** fetch data from the table: "Conference" */
  readonly Conference: ReadonlyArray<Conference>;
  /** fetch data from the table: "ConferenceDemoCode" */
  readonly ConferenceDemoCode: ReadonlyArray<ConferenceDemoCode>;
  /** fetch aggregated fields from the table: "ConferenceDemoCode" */
  readonly ConferenceDemoCode_aggregate: ConferenceDemoCode_Aggregate;
  /** fetch data from the table: "ConferenceDemoCode" using primary key columns */
  readonly ConferenceDemoCode_by_pk?: Maybe<ConferenceDemoCode>;
  /** fetch aggregated fields from the table: "Conference" */
  readonly Conference_aggregate: Conference_Aggregate;
  /** fetch data from the table: "Conference" using primary key columns */
  readonly Conference_by_pk?: Maybe<Conference>;
  /** fetch data from the table: "FlaggedChatMessage" */
  readonly FlaggedChatMessage: ReadonlyArray<FlaggedChatMessage>;
  /** fetch aggregated fields from the table: "FlaggedChatMessage" */
  readonly FlaggedChatMessage_aggregate: FlaggedChatMessage_Aggregate;
  /** fetch data from the table: "FlaggedChatMessage" using primary key columns */
  readonly FlaggedChatMessage_by_pk?: Maybe<FlaggedChatMessage>;
  /** fetch data from the table: "FollowedChat" */
  readonly FollowedChat: ReadonlyArray<FollowedChat>;
  /** fetch aggregated fields from the table: "FollowedChat" */
  readonly FollowedChat_aggregate: FollowedChat_Aggregate;
  /** fetch data from the table: "FollowedChat" using primary key columns */
  readonly FollowedChat_by_pk?: Maybe<FollowedChat>;
  /** fetch data from the table: "Group" */
  readonly Group: ReadonlyArray<Group>;
  /** fetch data from the table: "GroupAttendee" */
  readonly GroupAttendee: ReadonlyArray<GroupAttendee>;
  /** fetch aggregated fields from the table: "GroupAttendee" */
  readonly GroupAttendee_aggregate: GroupAttendee_Aggregate;
  /** fetch data from the table: "GroupAttendee" using primary key columns */
  readonly GroupAttendee_by_pk?: Maybe<GroupAttendee>;
  /** fetch data from the table: "GroupRole" */
  readonly GroupRole: ReadonlyArray<GroupRole>;
  /** fetch aggregated fields from the table: "GroupRole" */
  readonly GroupRole_aggregate: GroupRole_Aggregate;
  /** fetch data from the table: "GroupRole" using primary key columns */
  readonly GroupRole_by_pk?: Maybe<GroupRole>;
  /** fetch aggregated fields from the table: "Group" */
  readonly Group_aggregate: Group_Aggregate;
  /** fetch data from the table: "Group" using primary key columns */
  readonly Group_by_pk?: Maybe<Group>;
  /** fetch data from the table: "OnlineStatus" */
  readonly OnlineStatus: ReadonlyArray<OnlineStatus>;
  /** fetch aggregated fields from the table: "OnlineStatus" */
  readonly OnlineStatus_aggregate: OnlineStatus_Aggregate;
  /** fetch data from the table: "OnlineStatus" using primary key columns */
  readonly OnlineStatus_by_pk?: Maybe<OnlineStatus>;
  /** fetch data from the table: "Permission" */
  readonly Permission: ReadonlyArray<Permission>;
  /** fetch aggregated fields from the table: "Permission" */
  readonly Permission_aggregate: Permission_Aggregate;
  /** fetch data from the table: "Permission" using primary key columns */
  readonly Permission_by_pk?: Maybe<Permission>;
  /** fetch data from the table: "PinnedChat" */
  readonly PinnedChat: ReadonlyArray<PinnedChat>;
  /** fetch aggregated fields from the table: "PinnedChat" */
  readonly PinnedChat_aggregate: PinnedChat_Aggregate;
  /** fetch data from the table: "PinnedChat" using primary key columns */
  readonly PinnedChat_by_pk?: Maybe<PinnedChat>;
  /** fetch data from the table: "Role" */
  readonly Role: ReadonlyArray<Role>;
  /** fetch data from the table: "RolePermission" */
  readonly RolePermission: ReadonlyArray<RolePermission>;
  /** fetch aggregated fields from the table: "RolePermission" */
  readonly RolePermission_aggregate: RolePermission_Aggregate;
  /** fetch data from the table: "RolePermission" using primary key columns */
  readonly RolePermission_by_pk?: Maybe<RolePermission>;
  /** fetch aggregated fields from the table: "Role" */
  readonly Role_aggregate: Role_Aggregate;
  /** fetch data from the table: "Role" using primary key columns */
  readonly Role_by_pk?: Maybe<Role>;
  /** fetch data from the table: "Room" */
  readonly Room: ReadonlyArray<Room>;
  /** fetch aggregated fields from the table: "Room" */
  readonly Room_aggregate: Room_Aggregate;
  /** fetch data from the table: "Room" using primary key columns */
  readonly Room_by_pk?: Maybe<Room>;
  /** fetch data from the table: "User" */
  readonly User: ReadonlyArray<User>;
  /** fetch aggregated fields from the table: "User" */
  readonly User_aggregate: User_Aggregate;
  /** fetch data from the table: "User" using primary key columns */
  readonly User_by_pk?: Maybe<User>;
  /** perform the action: "echo" */
  readonly echo?: Maybe<EchoOutput>;
  /** perform the action: "protectedEcho" */
  readonly protectedEcho?: Maybe<ProtectedEchoOutput>;
};


/** query root */
export type Query_RootActiveGroupArgs = {
  distinct_on?: Maybe<ReadonlyArray<ActiveGroup_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<ActiveGroup_Order_By>>;
  where?: Maybe<ActiveGroup_Bool_Exp>;
};


/** query root */
export type Query_RootActiveGroup_AggregateArgs = {
  distinct_on?: Maybe<ReadonlyArray<ActiveGroup_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<ActiveGroup_Order_By>>;
  where?: Maybe<ActiveGroup_Bool_Exp>;
};


/** query root */
export type Query_RootAttendeeArgs = {
  distinct_on?: Maybe<ReadonlyArray<Attendee_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<Attendee_Order_By>>;
  where?: Maybe<Attendee_Bool_Exp>;
};


/** query root */
export type Query_RootAttendeeStatusArgs = {
  distinct_on?: Maybe<ReadonlyArray<AttendeeStatus_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<AttendeeStatus_Order_By>>;
  where?: Maybe<AttendeeStatus_Bool_Exp>;
};


/** query root */
export type Query_RootAttendeeStatus_AggregateArgs = {
  distinct_on?: Maybe<ReadonlyArray<AttendeeStatus_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<AttendeeStatus_Order_By>>;
  where?: Maybe<AttendeeStatus_Bool_Exp>;
};


/** query root */
export type Query_RootAttendeeStatus_By_PkArgs = {
  name: Scalars['String'];
};


/** query root */
export type Query_RootAttendee_AggregateArgs = {
  distinct_on?: Maybe<ReadonlyArray<Attendee_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<Attendee_Order_By>>;
  where?: Maybe<Attendee_Bool_Exp>;
};


/** query root */
export type Query_RootAttendee_By_PkArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type Query_RootChatArgs = {
  distinct_on?: Maybe<ReadonlyArray<Chat_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<Chat_Order_By>>;
  where?: Maybe<Chat_Bool_Exp>;
};


/** query root */
export type Query_RootChatMemberArgs = {
  distinct_on?: Maybe<ReadonlyArray<ChatMember_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<ChatMember_Order_By>>;
  where?: Maybe<ChatMember_Bool_Exp>;
};


/** query root */
export type Query_RootChatMember_AggregateArgs = {
  distinct_on?: Maybe<ReadonlyArray<ChatMember_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<ChatMember_Order_By>>;
  where?: Maybe<ChatMember_Bool_Exp>;
};


/** query root */
export type Query_RootChatMember_By_PkArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type Query_RootChatMessageArgs = {
  distinct_on?: Maybe<ReadonlyArray<ChatMessage_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<ChatMessage_Order_By>>;
  where?: Maybe<ChatMessage_Bool_Exp>;
};


/** query root */
export type Query_RootChatMessage_AggregateArgs = {
  distinct_on?: Maybe<ReadonlyArray<ChatMessage_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<ChatMessage_Order_By>>;
  where?: Maybe<ChatMessage_Bool_Exp>;
};


/** query root */
export type Query_RootChatMessage_By_PkArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type Query_RootChatModeratorArgs = {
  distinct_on?: Maybe<ReadonlyArray<ChatModerator_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<ChatModerator_Order_By>>;
  where?: Maybe<ChatModerator_Bool_Exp>;
};


/** query root */
export type Query_RootChatModerator_AggregateArgs = {
  distinct_on?: Maybe<ReadonlyArray<ChatModerator_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<ChatModerator_Order_By>>;
  where?: Maybe<ChatModerator_Bool_Exp>;
};


/** query root */
export type Query_RootChatModerator_By_PkArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type Query_RootChatReactionArgs = {
  distinct_on?: Maybe<ReadonlyArray<ChatReaction_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<ChatReaction_Order_By>>;
  where?: Maybe<ChatReaction_Bool_Exp>;
};


/** query root */
export type Query_RootChatReaction_AggregateArgs = {
  distinct_on?: Maybe<ReadonlyArray<ChatReaction_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<ChatReaction_Order_By>>;
  where?: Maybe<ChatReaction_Bool_Exp>;
};


/** query root */
export type Query_RootChatReaction_By_PkArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type Query_RootChatTyperArgs = {
  distinct_on?: Maybe<ReadonlyArray<ChatTyper_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<ChatTyper_Order_By>>;
  where?: Maybe<ChatTyper_Bool_Exp>;
};


/** query root */
export type Query_RootChatTyper_AggregateArgs = {
  distinct_on?: Maybe<ReadonlyArray<ChatTyper_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<ChatTyper_Order_By>>;
  where?: Maybe<ChatTyper_Bool_Exp>;
};


/** query root */
export type Query_RootChatTyper_By_PkArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type Query_RootChatUnreadIndexArgs = {
  distinct_on?: Maybe<ReadonlyArray<ChatUnreadIndex_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<ChatUnreadIndex_Order_By>>;
  where?: Maybe<ChatUnreadIndex_Bool_Exp>;
};


/** query root */
export type Query_RootChatUnreadIndex_AggregateArgs = {
  distinct_on?: Maybe<ReadonlyArray<ChatUnreadIndex_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<ChatUnreadIndex_Order_By>>;
  where?: Maybe<ChatUnreadIndex_Bool_Exp>;
};


/** query root */
export type Query_RootChatUnreadIndex_By_PkArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type Query_RootChatViewerArgs = {
  distinct_on?: Maybe<ReadonlyArray<ChatViewer_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<ChatViewer_Order_By>>;
  where?: Maybe<ChatViewer_Bool_Exp>;
};


/** query root */
export type Query_RootChatViewer_AggregateArgs = {
  distinct_on?: Maybe<ReadonlyArray<ChatViewer_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<ChatViewer_Order_By>>;
  where?: Maybe<ChatViewer_Bool_Exp>;
};


/** query root */
export type Query_RootChatViewer_By_PkArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type Query_RootChat_AggregateArgs = {
  distinct_on?: Maybe<ReadonlyArray<Chat_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<Chat_Order_By>>;
  where?: Maybe<Chat_Bool_Exp>;
};


/** query root */
export type Query_RootChat_By_PkArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type Query_RootConferenceArgs = {
  distinct_on?: Maybe<ReadonlyArray<Conference_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<Conference_Order_By>>;
  where?: Maybe<Conference_Bool_Exp>;
};


/** query root */
export type Query_RootConferenceDemoCodeArgs = {
  distinct_on?: Maybe<ReadonlyArray<ConferenceDemoCode_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<ConferenceDemoCode_Order_By>>;
  where?: Maybe<ConferenceDemoCode_Bool_Exp>;
};


/** query root */
export type Query_RootConferenceDemoCode_AggregateArgs = {
  distinct_on?: Maybe<ReadonlyArray<ConferenceDemoCode_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<ConferenceDemoCode_Order_By>>;
  where?: Maybe<ConferenceDemoCode_Bool_Exp>;
};


/** query root */
export type Query_RootConferenceDemoCode_By_PkArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type Query_RootConference_AggregateArgs = {
  distinct_on?: Maybe<ReadonlyArray<Conference_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<Conference_Order_By>>;
  where?: Maybe<Conference_Bool_Exp>;
};


/** query root */
export type Query_RootConference_By_PkArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type Query_RootFlaggedChatMessageArgs = {
  distinct_on?: Maybe<ReadonlyArray<FlaggedChatMessage_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<FlaggedChatMessage_Order_By>>;
  where?: Maybe<FlaggedChatMessage_Bool_Exp>;
};


/** query root */
export type Query_RootFlaggedChatMessage_AggregateArgs = {
  distinct_on?: Maybe<ReadonlyArray<FlaggedChatMessage_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<FlaggedChatMessage_Order_By>>;
  where?: Maybe<FlaggedChatMessage_Bool_Exp>;
};


/** query root */
export type Query_RootFlaggedChatMessage_By_PkArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type Query_RootFollowedChatArgs = {
  distinct_on?: Maybe<ReadonlyArray<FollowedChat_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<FollowedChat_Order_By>>;
  where?: Maybe<FollowedChat_Bool_Exp>;
};


/** query root */
export type Query_RootFollowedChat_AggregateArgs = {
  distinct_on?: Maybe<ReadonlyArray<FollowedChat_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<FollowedChat_Order_By>>;
  where?: Maybe<FollowedChat_Bool_Exp>;
};


/** query root */
export type Query_RootFollowedChat_By_PkArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type Query_RootGroupArgs = {
  distinct_on?: Maybe<ReadonlyArray<Group_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<Group_Order_By>>;
  where?: Maybe<Group_Bool_Exp>;
};


/** query root */
export type Query_RootGroupAttendeeArgs = {
  distinct_on?: Maybe<ReadonlyArray<GroupAttendee_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<GroupAttendee_Order_By>>;
  where?: Maybe<GroupAttendee_Bool_Exp>;
};


/** query root */
export type Query_RootGroupAttendee_AggregateArgs = {
  distinct_on?: Maybe<ReadonlyArray<GroupAttendee_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<GroupAttendee_Order_By>>;
  where?: Maybe<GroupAttendee_Bool_Exp>;
};


/** query root */
export type Query_RootGroupAttendee_By_PkArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type Query_RootGroupRoleArgs = {
  distinct_on?: Maybe<ReadonlyArray<GroupRole_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<GroupRole_Order_By>>;
  where?: Maybe<GroupRole_Bool_Exp>;
};


/** query root */
export type Query_RootGroupRole_AggregateArgs = {
  distinct_on?: Maybe<ReadonlyArray<GroupRole_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<GroupRole_Order_By>>;
  where?: Maybe<GroupRole_Bool_Exp>;
};


/** query root */
export type Query_RootGroupRole_By_PkArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type Query_RootGroup_AggregateArgs = {
  distinct_on?: Maybe<ReadonlyArray<Group_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<Group_Order_By>>;
  where?: Maybe<Group_Bool_Exp>;
};


/** query root */
export type Query_RootGroup_By_PkArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type Query_RootOnlineStatusArgs = {
  distinct_on?: Maybe<ReadonlyArray<OnlineStatus_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<OnlineStatus_Order_By>>;
  where?: Maybe<OnlineStatus_Bool_Exp>;
};


/** query root */
export type Query_RootOnlineStatus_AggregateArgs = {
  distinct_on?: Maybe<ReadonlyArray<OnlineStatus_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<OnlineStatus_Order_By>>;
  where?: Maybe<OnlineStatus_Bool_Exp>;
};


/** query root */
export type Query_RootOnlineStatus_By_PkArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type Query_RootPermissionArgs = {
  distinct_on?: Maybe<ReadonlyArray<Permission_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<Permission_Order_By>>;
  where?: Maybe<Permission_Bool_Exp>;
};


/** query root */
export type Query_RootPermission_AggregateArgs = {
  distinct_on?: Maybe<ReadonlyArray<Permission_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<Permission_Order_By>>;
  where?: Maybe<Permission_Bool_Exp>;
};


/** query root */
export type Query_RootPermission_By_PkArgs = {
  name: Scalars['String'];
};


/** query root */
export type Query_RootPinnedChatArgs = {
  distinct_on?: Maybe<ReadonlyArray<PinnedChat_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<PinnedChat_Order_By>>;
  where?: Maybe<PinnedChat_Bool_Exp>;
};


/** query root */
export type Query_RootPinnedChat_AggregateArgs = {
  distinct_on?: Maybe<ReadonlyArray<PinnedChat_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<PinnedChat_Order_By>>;
  where?: Maybe<PinnedChat_Bool_Exp>;
};


/** query root */
export type Query_RootPinnedChat_By_PkArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type Query_RootRoleArgs = {
  distinct_on?: Maybe<ReadonlyArray<Role_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<Role_Order_By>>;
  where?: Maybe<Role_Bool_Exp>;
};


/** query root */
export type Query_RootRolePermissionArgs = {
  distinct_on?: Maybe<ReadonlyArray<RolePermission_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<RolePermission_Order_By>>;
  where?: Maybe<RolePermission_Bool_Exp>;
};


/** query root */
export type Query_RootRolePermission_AggregateArgs = {
  distinct_on?: Maybe<ReadonlyArray<RolePermission_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<RolePermission_Order_By>>;
  where?: Maybe<RolePermission_Bool_Exp>;
};


/** query root */
export type Query_RootRolePermission_By_PkArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type Query_RootRole_AggregateArgs = {
  distinct_on?: Maybe<ReadonlyArray<Role_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<Role_Order_By>>;
  where?: Maybe<Role_Bool_Exp>;
};


/** query root */
export type Query_RootRole_By_PkArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type Query_RootRoomArgs = {
  distinct_on?: Maybe<ReadonlyArray<Room_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<Room_Order_By>>;
  where?: Maybe<Room_Bool_Exp>;
};


/** query root */
export type Query_RootRoom_AggregateArgs = {
  distinct_on?: Maybe<ReadonlyArray<Room_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<Room_Order_By>>;
  where?: Maybe<Room_Bool_Exp>;
};


/** query root */
export type Query_RootRoom_By_PkArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type Query_RootUserArgs = {
  distinct_on?: Maybe<ReadonlyArray<User_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<User_Order_By>>;
  where?: Maybe<User_Bool_Exp>;
};


/** query root */
export type Query_RootUser_AggregateArgs = {
  distinct_on?: Maybe<ReadonlyArray<User_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<User_Order_By>>;
  where?: Maybe<User_Bool_Exp>;
};


/** query root */
export type Query_RootUser_By_PkArgs = {
  id: Scalars['String'];
};


/** query root */
export type Query_RootEchoArgs = {
  message: Scalars['String'];
};


/** query root */
export type Query_RootProtectedEchoArgs = {
  message: Scalars['String'];
};

/** subscription root */
export type Subscription_Root = {
  readonly __typename?: 'subscription_root';
  /** fetch data from the table: "ActiveGroup" */
  readonly ActiveGroup: ReadonlyArray<ActiveGroup>;
  /** fetch aggregated fields from the table: "ActiveGroup" */
  readonly ActiveGroup_aggregate: ActiveGroup_Aggregate;
  /** fetch data from the table: "Attendee" */
  readonly Attendee: ReadonlyArray<Attendee>;
  /** fetch data from the table: "AttendeeStatus" */
  readonly AttendeeStatus: ReadonlyArray<AttendeeStatus>;
  /** fetch aggregated fields from the table: "AttendeeStatus" */
  readonly AttendeeStatus_aggregate: AttendeeStatus_Aggregate;
  /** fetch data from the table: "AttendeeStatus" using primary key columns */
  readonly AttendeeStatus_by_pk?: Maybe<AttendeeStatus>;
  /** fetch aggregated fields from the table: "Attendee" */
  readonly Attendee_aggregate: Attendee_Aggregate;
  /** fetch data from the table: "Attendee" using primary key columns */
  readonly Attendee_by_pk?: Maybe<Attendee>;
  /** fetch data from the table: "Chat" */
  readonly Chat: ReadonlyArray<Chat>;
  /** fetch data from the table: "ChatMember" */
  readonly ChatMember: ReadonlyArray<ChatMember>;
  /** fetch aggregated fields from the table: "ChatMember" */
  readonly ChatMember_aggregate: ChatMember_Aggregate;
  /** fetch data from the table: "ChatMember" using primary key columns */
  readonly ChatMember_by_pk?: Maybe<ChatMember>;
  /** fetch data from the table: "ChatMessage" */
  readonly ChatMessage: ReadonlyArray<ChatMessage>;
  /** fetch aggregated fields from the table: "ChatMessage" */
  readonly ChatMessage_aggregate: ChatMessage_Aggregate;
  /** fetch data from the table: "ChatMessage" using primary key columns */
  readonly ChatMessage_by_pk?: Maybe<ChatMessage>;
  /** fetch data from the table: "ChatModerator" */
  readonly ChatModerator: ReadonlyArray<ChatModerator>;
  /** fetch aggregated fields from the table: "ChatModerator" */
  readonly ChatModerator_aggregate: ChatModerator_Aggregate;
  /** fetch data from the table: "ChatModerator" using primary key columns */
  readonly ChatModerator_by_pk?: Maybe<ChatModerator>;
  /** fetch data from the table: "ChatReaction" */
  readonly ChatReaction: ReadonlyArray<ChatReaction>;
  /** fetch aggregated fields from the table: "ChatReaction" */
  readonly ChatReaction_aggregate: ChatReaction_Aggregate;
  /** fetch data from the table: "ChatReaction" using primary key columns */
  readonly ChatReaction_by_pk?: Maybe<ChatReaction>;
  /** fetch data from the table: "ChatTyper" */
  readonly ChatTyper: ReadonlyArray<ChatTyper>;
  /** fetch aggregated fields from the table: "ChatTyper" */
  readonly ChatTyper_aggregate: ChatTyper_Aggregate;
  /** fetch data from the table: "ChatTyper" using primary key columns */
  readonly ChatTyper_by_pk?: Maybe<ChatTyper>;
  /** fetch data from the table: "ChatUnreadIndex" */
  readonly ChatUnreadIndex: ReadonlyArray<ChatUnreadIndex>;
  /** fetch aggregated fields from the table: "ChatUnreadIndex" */
  readonly ChatUnreadIndex_aggregate: ChatUnreadIndex_Aggregate;
  /** fetch data from the table: "ChatUnreadIndex" using primary key columns */
  readonly ChatUnreadIndex_by_pk?: Maybe<ChatUnreadIndex>;
  /** fetch data from the table: "ChatViewer" */
  readonly ChatViewer: ReadonlyArray<ChatViewer>;
  /** fetch aggregated fields from the table: "ChatViewer" */
  readonly ChatViewer_aggregate: ChatViewer_Aggregate;
  /** fetch data from the table: "ChatViewer" using primary key columns */
  readonly ChatViewer_by_pk?: Maybe<ChatViewer>;
  /** fetch aggregated fields from the table: "Chat" */
  readonly Chat_aggregate: Chat_Aggregate;
  /** fetch data from the table: "Chat" using primary key columns */
  readonly Chat_by_pk?: Maybe<Chat>;
  /** fetch data from the table: "Conference" */
  readonly Conference: ReadonlyArray<Conference>;
  /** fetch data from the table: "ConferenceDemoCode" */
  readonly ConferenceDemoCode: ReadonlyArray<ConferenceDemoCode>;
  /** fetch aggregated fields from the table: "ConferenceDemoCode" */
  readonly ConferenceDemoCode_aggregate: ConferenceDemoCode_Aggregate;
  /** fetch data from the table: "ConferenceDemoCode" using primary key columns */
  readonly ConferenceDemoCode_by_pk?: Maybe<ConferenceDemoCode>;
  /** fetch aggregated fields from the table: "Conference" */
  readonly Conference_aggregate: Conference_Aggregate;
  /** fetch data from the table: "Conference" using primary key columns */
  readonly Conference_by_pk?: Maybe<Conference>;
  /** fetch data from the table: "FlaggedChatMessage" */
  readonly FlaggedChatMessage: ReadonlyArray<FlaggedChatMessage>;
  /** fetch aggregated fields from the table: "FlaggedChatMessage" */
  readonly FlaggedChatMessage_aggregate: FlaggedChatMessage_Aggregate;
  /** fetch data from the table: "FlaggedChatMessage" using primary key columns */
  readonly FlaggedChatMessage_by_pk?: Maybe<FlaggedChatMessage>;
  /** fetch data from the table: "FollowedChat" */
  readonly FollowedChat: ReadonlyArray<FollowedChat>;
  /** fetch aggregated fields from the table: "FollowedChat" */
  readonly FollowedChat_aggregate: FollowedChat_Aggregate;
  /** fetch data from the table: "FollowedChat" using primary key columns */
  readonly FollowedChat_by_pk?: Maybe<FollowedChat>;
  /** fetch data from the table: "Group" */
  readonly Group: ReadonlyArray<Group>;
  /** fetch data from the table: "GroupAttendee" */
  readonly GroupAttendee: ReadonlyArray<GroupAttendee>;
  /** fetch aggregated fields from the table: "GroupAttendee" */
  readonly GroupAttendee_aggregate: GroupAttendee_Aggregate;
  /** fetch data from the table: "GroupAttendee" using primary key columns */
  readonly GroupAttendee_by_pk?: Maybe<GroupAttendee>;
  /** fetch data from the table: "GroupRole" */
  readonly GroupRole: ReadonlyArray<GroupRole>;
  /** fetch aggregated fields from the table: "GroupRole" */
  readonly GroupRole_aggregate: GroupRole_Aggregate;
  /** fetch data from the table: "GroupRole" using primary key columns */
  readonly GroupRole_by_pk?: Maybe<GroupRole>;
  /** fetch aggregated fields from the table: "Group" */
  readonly Group_aggregate: Group_Aggregate;
  /** fetch data from the table: "Group" using primary key columns */
  readonly Group_by_pk?: Maybe<Group>;
  /** fetch data from the table: "OnlineStatus" */
  readonly OnlineStatus: ReadonlyArray<OnlineStatus>;
  /** fetch aggregated fields from the table: "OnlineStatus" */
  readonly OnlineStatus_aggregate: OnlineStatus_Aggregate;
  /** fetch data from the table: "OnlineStatus" using primary key columns */
  readonly OnlineStatus_by_pk?: Maybe<OnlineStatus>;
  /** fetch data from the table: "Permission" */
  readonly Permission: ReadonlyArray<Permission>;
  /** fetch aggregated fields from the table: "Permission" */
  readonly Permission_aggregate: Permission_Aggregate;
  /** fetch data from the table: "Permission" using primary key columns */
  readonly Permission_by_pk?: Maybe<Permission>;
  /** fetch data from the table: "PinnedChat" */
  readonly PinnedChat: ReadonlyArray<PinnedChat>;
  /** fetch aggregated fields from the table: "PinnedChat" */
  readonly PinnedChat_aggregate: PinnedChat_Aggregate;
  /** fetch data from the table: "PinnedChat" using primary key columns */
  readonly PinnedChat_by_pk?: Maybe<PinnedChat>;
  /** fetch data from the table: "Role" */
  readonly Role: ReadonlyArray<Role>;
  /** fetch data from the table: "RolePermission" */
  readonly RolePermission: ReadonlyArray<RolePermission>;
  /** fetch aggregated fields from the table: "RolePermission" */
  readonly RolePermission_aggregate: RolePermission_Aggregate;
  /** fetch data from the table: "RolePermission" using primary key columns */
  readonly RolePermission_by_pk?: Maybe<RolePermission>;
  /** fetch aggregated fields from the table: "Role" */
  readonly Role_aggregate: Role_Aggregate;
  /** fetch data from the table: "Role" using primary key columns */
  readonly Role_by_pk?: Maybe<Role>;
  /** fetch data from the table: "Room" */
  readonly Room: ReadonlyArray<Room>;
  /** fetch aggregated fields from the table: "Room" */
  readonly Room_aggregate: Room_Aggregate;
  /** fetch data from the table: "Room" using primary key columns */
  readonly Room_by_pk?: Maybe<Room>;
  /** fetch data from the table: "User" */
  readonly User: ReadonlyArray<User>;
  /** fetch aggregated fields from the table: "User" */
  readonly User_aggregate: User_Aggregate;
  /** fetch data from the table: "User" using primary key columns */
  readonly User_by_pk?: Maybe<User>;
  /** perform the action: "echo" */
  readonly echo?: Maybe<EchoOutput>;
  /** perform the action: "protectedEcho" */
  readonly protectedEcho?: Maybe<ProtectedEchoOutput>;
};


/** subscription root */
export type Subscription_RootActiveGroupArgs = {
  distinct_on?: Maybe<ReadonlyArray<ActiveGroup_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<ActiveGroup_Order_By>>;
  where?: Maybe<ActiveGroup_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootActiveGroup_AggregateArgs = {
  distinct_on?: Maybe<ReadonlyArray<ActiveGroup_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<ActiveGroup_Order_By>>;
  where?: Maybe<ActiveGroup_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootAttendeeArgs = {
  distinct_on?: Maybe<ReadonlyArray<Attendee_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<Attendee_Order_By>>;
  where?: Maybe<Attendee_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootAttendeeStatusArgs = {
  distinct_on?: Maybe<ReadonlyArray<AttendeeStatus_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<AttendeeStatus_Order_By>>;
  where?: Maybe<AttendeeStatus_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootAttendeeStatus_AggregateArgs = {
  distinct_on?: Maybe<ReadonlyArray<AttendeeStatus_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<AttendeeStatus_Order_By>>;
  where?: Maybe<AttendeeStatus_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootAttendeeStatus_By_PkArgs = {
  name: Scalars['String'];
};


/** subscription root */
export type Subscription_RootAttendee_AggregateArgs = {
  distinct_on?: Maybe<ReadonlyArray<Attendee_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<Attendee_Order_By>>;
  where?: Maybe<Attendee_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootAttendee_By_PkArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootChatArgs = {
  distinct_on?: Maybe<ReadonlyArray<Chat_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<Chat_Order_By>>;
  where?: Maybe<Chat_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootChatMemberArgs = {
  distinct_on?: Maybe<ReadonlyArray<ChatMember_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<ChatMember_Order_By>>;
  where?: Maybe<ChatMember_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootChatMember_AggregateArgs = {
  distinct_on?: Maybe<ReadonlyArray<ChatMember_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<ChatMember_Order_By>>;
  where?: Maybe<ChatMember_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootChatMember_By_PkArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootChatMessageArgs = {
  distinct_on?: Maybe<ReadonlyArray<ChatMessage_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<ChatMessage_Order_By>>;
  where?: Maybe<ChatMessage_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootChatMessage_AggregateArgs = {
  distinct_on?: Maybe<ReadonlyArray<ChatMessage_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<ChatMessage_Order_By>>;
  where?: Maybe<ChatMessage_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootChatMessage_By_PkArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootChatModeratorArgs = {
  distinct_on?: Maybe<ReadonlyArray<ChatModerator_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<ChatModerator_Order_By>>;
  where?: Maybe<ChatModerator_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootChatModerator_AggregateArgs = {
  distinct_on?: Maybe<ReadonlyArray<ChatModerator_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<ChatModerator_Order_By>>;
  where?: Maybe<ChatModerator_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootChatModerator_By_PkArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootChatReactionArgs = {
  distinct_on?: Maybe<ReadonlyArray<ChatReaction_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<ChatReaction_Order_By>>;
  where?: Maybe<ChatReaction_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootChatReaction_AggregateArgs = {
  distinct_on?: Maybe<ReadonlyArray<ChatReaction_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<ChatReaction_Order_By>>;
  where?: Maybe<ChatReaction_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootChatReaction_By_PkArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootChatTyperArgs = {
  distinct_on?: Maybe<ReadonlyArray<ChatTyper_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<ChatTyper_Order_By>>;
  where?: Maybe<ChatTyper_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootChatTyper_AggregateArgs = {
  distinct_on?: Maybe<ReadonlyArray<ChatTyper_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<ChatTyper_Order_By>>;
  where?: Maybe<ChatTyper_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootChatTyper_By_PkArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootChatUnreadIndexArgs = {
  distinct_on?: Maybe<ReadonlyArray<ChatUnreadIndex_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<ChatUnreadIndex_Order_By>>;
  where?: Maybe<ChatUnreadIndex_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootChatUnreadIndex_AggregateArgs = {
  distinct_on?: Maybe<ReadonlyArray<ChatUnreadIndex_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<ChatUnreadIndex_Order_By>>;
  where?: Maybe<ChatUnreadIndex_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootChatUnreadIndex_By_PkArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootChatViewerArgs = {
  distinct_on?: Maybe<ReadonlyArray<ChatViewer_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<ChatViewer_Order_By>>;
  where?: Maybe<ChatViewer_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootChatViewer_AggregateArgs = {
  distinct_on?: Maybe<ReadonlyArray<ChatViewer_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<ChatViewer_Order_By>>;
  where?: Maybe<ChatViewer_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootChatViewer_By_PkArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootChat_AggregateArgs = {
  distinct_on?: Maybe<ReadonlyArray<Chat_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<Chat_Order_By>>;
  where?: Maybe<Chat_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootChat_By_PkArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootConferenceArgs = {
  distinct_on?: Maybe<ReadonlyArray<Conference_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<Conference_Order_By>>;
  where?: Maybe<Conference_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootConferenceDemoCodeArgs = {
  distinct_on?: Maybe<ReadonlyArray<ConferenceDemoCode_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<ConferenceDemoCode_Order_By>>;
  where?: Maybe<ConferenceDemoCode_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootConferenceDemoCode_AggregateArgs = {
  distinct_on?: Maybe<ReadonlyArray<ConferenceDemoCode_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<ConferenceDemoCode_Order_By>>;
  where?: Maybe<ConferenceDemoCode_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootConferenceDemoCode_By_PkArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootConference_AggregateArgs = {
  distinct_on?: Maybe<ReadonlyArray<Conference_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<Conference_Order_By>>;
  where?: Maybe<Conference_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootConference_By_PkArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootFlaggedChatMessageArgs = {
  distinct_on?: Maybe<ReadonlyArray<FlaggedChatMessage_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<FlaggedChatMessage_Order_By>>;
  where?: Maybe<FlaggedChatMessage_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootFlaggedChatMessage_AggregateArgs = {
  distinct_on?: Maybe<ReadonlyArray<FlaggedChatMessage_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<FlaggedChatMessage_Order_By>>;
  where?: Maybe<FlaggedChatMessage_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootFlaggedChatMessage_By_PkArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootFollowedChatArgs = {
  distinct_on?: Maybe<ReadonlyArray<FollowedChat_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<FollowedChat_Order_By>>;
  where?: Maybe<FollowedChat_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootFollowedChat_AggregateArgs = {
  distinct_on?: Maybe<ReadonlyArray<FollowedChat_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<FollowedChat_Order_By>>;
  where?: Maybe<FollowedChat_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootFollowedChat_By_PkArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootGroupArgs = {
  distinct_on?: Maybe<ReadonlyArray<Group_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<Group_Order_By>>;
  where?: Maybe<Group_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootGroupAttendeeArgs = {
  distinct_on?: Maybe<ReadonlyArray<GroupAttendee_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<GroupAttendee_Order_By>>;
  where?: Maybe<GroupAttendee_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootGroupAttendee_AggregateArgs = {
  distinct_on?: Maybe<ReadonlyArray<GroupAttendee_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<GroupAttendee_Order_By>>;
  where?: Maybe<GroupAttendee_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootGroupAttendee_By_PkArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootGroupRoleArgs = {
  distinct_on?: Maybe<ReadonlyArray<GroupRole_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<GroupRole_Order_By>>;
  where?: Maybe<GroupRole_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootGroupRole_AggregateArgs = {
  distinct_on?: Maybe<ReadonlyArray<GroupRole_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<GroupRole_Order_By>>;
  where?: Maybe<GroupRole_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootGroupRole_By_PkArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootGroup_AggregateArgs = {
  distinct_on?: Maybe<ReadonlyArray<Group_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<Group_Order_By>>;
  where?: Maybe<Group_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootGroup_By_PkArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootOnlineStatusArgs = {
  distinct_on?: Maybe<ReadonlyArray<OnlineStatus_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<OnlineStatus_Order_By>>;
  where?: Maybe<OnlineStatus_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootOnlineStatus_AggregateArgs = {
  distinct_on?: Maybe<ReadonlyArray<OnlineStatus_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<OnlineStatus_Order_By>>;
  where?: Maybe<OnlineStatus_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootOnlineStatus_By_PkArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootPermissionArgs = {
  distinct_on?: Maybe<ReadonlyArray<Permission_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<Permission_Order_By>>;
  where?: Maybe<Permission_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootPermission_AggregateArgs = {
  distinct_on?: Maybe<ReadonlyArray<Permission_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<Permission_Order_By>>;
  where?: Maybe<Permission_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootPermission_By_PkArgs = {
  name: Scalars['String'];
};


/** subscription root */
export type Subscription_RootPinnedChatArgs = {
  distinct_on?: Maybe<ReadonlyArray<PinnedChat_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<PinnedChat_Order_By>>;
  where?: Maybe<PinnedChat_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootPinnedChat_AggregateArgs = {
  distinct_on?: Maybe<ReadonlyArray<PinnedChat_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<PinnedChat_Order_By>>;
  where?: Maybe<PinnedChat_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootPinnedChat_By_PkArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootRoleArgs = {
  distinct_on?: Maybe<ReadonlyArray<Role_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<Role_Order_By>>;
  where?: Maybe<Role_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootRolePermissionArgs = {
  distinct_on?: Maybe<ReadonlyArray<RolePermission_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<RolePermission_Order_By>>;
  where?: Maybe<RolePermission_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootRolePermission_AggregateArgs = {
  distinct_on?: Maybe<ReadonlyArray<RolePermission_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<RolePermission_Order_By>>;
  where?: Maybe<RolePermission_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootRolePermission_By_PkArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootRole_AggregateArgs = {
  distinct_on?: Maybe<ReadonlyArray<Role_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<Role_Order_By>>;
  where?: Maybe<Role_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootRole_By_PkArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootRoomArgs = {
  distinct_on?: Maybe<ReadonlyArray<Room_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<Room_Order_By>>;
  where?: Maybe<Room_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootRoom_AggregateArgs = {
  distinct_on?: Maybe<ReadonlyArray<Room_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<Room_Order_By>>;
  where?: Maybe<Room_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootRoom_By_PkArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootUserArgs = {
  distinct_on?: Maybe<ReadonlyArray<User_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<User_Order_By>>;
  where?: Maybe<User_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootUser_AggregateArgs = {
  distinct_on?: Maybe<ReadonlyArray<User_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<ReadonlyArray<User_Order_By>>;
  where?: Maybe<User_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootUser_By_PkArgs = {
  id: Scalars['String'];
};


/** subscription root */
export type Subscription_RootEchoArgs = {
  message: Scalars['String'];
};


/** subscription root */
export type Subscription_RootProtectedEchoArgs = {
  message: Scalars['String'];
};


/** expression to compare columns of type timestamptz. All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  readonly _eq?: Maybe<Scalars['timestamptz']>;
  readonly _gt?: Maybe<Scalars['timestamptz']>;
  readonly _gte?: Maybe<Scalars['timestamptz']>;
  readonly _in?: Maybe<ReadonlyArray<Scalars['timestamptz']>>;
  readonly _is_null?: Maybe<Scalars['Boolean']>;
  readonly _lt?: Maybe<Scalars['timestamptz']>;
  readonly _lte?: Maybe<Scalars['timestamptz']>;
  readonly _neq?: Maybe<Scalars['timestamptz']>;
  readonly _nin?: Maybe<ReadonlyArray<Scalars['timestamptz']>>;
};


/** expression to compare columns of type uuid. All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  readonly _eq?: Maybe<Scalars['uuid']>;
  readonly _gt?: Maybe<Scalars['uuid']>;
  readonly _gte?: Maybe<Scalars['uuid']>;
  readonly _in?: Maybe<ReadonlyArray<Scalars['uuid']>>;
  readonly _is_null?: Maybe<Scalars['Boolean']>;
  readonly _lt?: Maybe<Scalars['uuid']>;
  readonly _lte?: Maybe<Scalars['uuid']>;
  readonly _neq?: Maybe<Scalars['uuid']>;
  readonly _nin?: Maybe<ReadonlyArray<Scalars['uuid']>>;
};

export type CreateChatMutationVariables = Exact<{
  description: Scalars['String'];
  name: Scalars['String'];
}>;


export type CreateChatMutation = { readonly __typename?: 'mutation_root', readonly insert_Chat?: Maybe<{ readonly __typename?: 'Chat_mutation_response', readonly returning: ReadonlyArray<{ readonly __typename?: 'Chat', readonly id: any }> }> };

export type SelectChatsQueryVariables = Exact<{ [key: string]: never; }>;


export type SelectChatsQuery = { readonly __typename?: 'query_root', readonly Chat: ReadonlyArray<{ readonly __typename?: 'Chat', readonly id: any, readonly name: string, readonly description?: Maybe<string>, readonly mode: string, readonly members: ReadonlyArray<{ readonly __typename?: 'ChatMember', readonly userId: string }>, readonly viewers: ReadonlyArray<{ readonly __typename?: 'ChatViewer', readonly id: any, readonly lastSeen: any, readonly userId: string }> }> };

export type SelectChatQueryVariables = Exact<{
  chatId: Scalars['uuid'];
}>;


export type SelectChatQuery = { readonly __typename?: 'query_root', readonly Chat: ReadonlyArray<{ readonly __typename?: 'Chat', readonly description?: Maybe<string>, readonly creatorId: string, readonly createdAt: any, readonly mode: string, readonly name: string, readonly isAutoNotify: boolean, readonly isAutoPin: boolean, readonly id: any, readonly updatedAt: any, readonly moderators: ReadonlyArray<{ readonly __typename?: 'ChatModerator', readonly id: any, readonly createdAt: any, readonly userId: string }>, readonly members: ReadonlyArray<{ readonly __typename?: 'ChatMember', readonly userId: string, readonly id: any, readonly invitationAcceptedAt?: Maybe<any>, readonly updatedAt: any, readonly createdAt: any }>, readonly creator: { readonly __typename?: 'User', readonly firstName: string, readonly lastName: string, readonly id: string } }> };

export type InsertMessageMutationVariables = Exact<{
  chatId: Scalars['uuid'];
  content: Scalars['jsonb'];
  index: Scalars['Int'];
}>;


export type InsertMessageMutation = { readonly __typename?: 'mutation_root', readonly insert_ChatMessage?: Maybe<{ readonly __typename?: 'ChatMessage_mutation_response', readonly affected_rows: number }> };

export type LiveChatSubscriptionVariables = Exact<{
  chatId: Scalars['uuid'];
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
}>;


export type LiveChatSubscription = { readonly __typename?: 'subscription_root', readonly Chat: ReadonlyArray<{ readonly __typename?: 'Chat', readonly id: any, readonly typers: ReadonlyArray<{ readonly __typename?: 'ChatTyper', readonly id: any, readonly userId: string, readonly updatedAt: any }>, readonly messages: ReadonlyArray<{ readonly __typename?: 'ChatMessage', readonly content: any, readonly createdAt: any, readonly id: any, readonly index: number, readonly isHighlighted: boolean, readonly senderId: string, readonly updatedAt: any, readonly reactions: ReadonlyArray<{ readonly __typename?: 'ChatReaction', readonly id: any, readonly createdAt: any, readonly reaction: string, readonly reactorId: string }> }>, readonly viewers: ReadonlyArray<{ readonly __typename?: 'ChatViewer', readonly id: any, readonly lastSeen: any, readonly userId: string }> }> };

export type UpsertIsTypingMutationVariables = Exact<{
  chatId: Scalars['uuid'];
  updatedAt: Scalars['timestamptz'];
}>;


export type UpsertIsTypingMutation = { readonly __typename?: 'mutation_root', readonly insert_ChatTyper?: Maybe<{ readonly __typename?: 'ChatTyper_mutation_response', readonly returning: ReadonlyArray<{ readonly __typename?: 'ChatTyper', readonly id: any, readonly updatedAt: any, readonly chatId: any, readonly userId: string }> }> };

export type DeleteIsTypingMutationVariables = Exact<{
  chatId: Scalars['uuid'];
  userId: Scalars['String'];
}>;


export type DeleteIsTypingMutation = { readonly __typename?: 'mutation_root', readonly delete_ChatTyper?: Maybe<{ readonly __typename?: 'ChatTyper_mutation_response', readonly returning: ReadonlyArray<{ readonly __typename?: 'ChatTyper', readonly id: any }> }> };

export type UpdateConferenceMutationVariables = Exact<{
  id: Scalars['uuid'];
  name?: Maybe<Scalars['String']>;
  shortName?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
}>;


export type UpdateConferenceMutation = { readonly __typename?: 'mutation_root', readonly update_Conference?: Maybe<{ readonly __typename?: 'Conference_mutation_response', readonly returning: ReadonlyArray<{ readonly __typename?: 'Conference', readonly id: any, readonly name: string, readonly shortName: string, readonly slug: string }> }> };

export type ConferenceTakenQueryVariables = Exact<{
  name: Scalars['String'];
  shortName: Scalars['String'];
  slug: Scalars['String'];
}>;


export type ConferenceTakenQuery = { readonly __typename?: 'query_root', readonly Conference: ReadonlyArray<{ readonly __typename?: 'Conference', readonly id: any, readonly name: string, readonly shortName: string, readonly slug: string }> };

export type CreateConferenceMutationVariables = Exact<{
  name: Scalars['String'];
  shortName: Scalars['String'];
  slug: Scalars['String'];
  demoCode: Scalars['uuid'];
}>;


export type CreateConferenceMutation = { readonly __typename?: 'mutation_root', readonly insert_Conference?: Maybe<{ readonly __typename?: 'Conference_mutation_response', readonly returning: ReadonlyArray<{ readonly __typename?: 'Conference', readonly id: any, readonly slug: string }> }>, readonly update_ConferenceDemoCode?: Maybe<{ readonly __typename?: 'ConferenceDemoCode_mutation_response', readonly affected_rows: number }> };

export type CreateNewConferenceMetaStructureMutationVariables = Exact<{
  conferenceId: Scalars['uuid'];
  attendeeDisplayName: Scalars['String'];
  userId: Scalars['String'];
  accessStart: Scalars['timestamptz'];
  accessEnd: Scalars['timestamptz'];
}>;


export type CreateNewConferenceMetaStructureMutation = { readonly __typename?: 'mutation_root', readonly insert_Attendee?: Maybe<{ readonly __typename?: 'Attendee_mutation_response', readonly affected_rows: number }> };

export type ConferenceBySlugQueryVariables = Exact<{
  slug: Scalars['String'];
}>;


export type ConferenceBySlugQuery = { readonly __typename?: 'query_root', readonly Conference: ReadonlyArray<{ readonly __typename?: 'Conference', readonly createdBy: string, readonly id: any, readonly name: string, readonly shortName: string, readonly slug: string, readonly updatedAt: any, readonly createdAt: any }> };

export type CurrentUserGroupsRolesPermissionsQueryVariables = Exact<{
  userId: Scalars['String'];
  conferenceId: Scalars['uuid'];
}>;


export type CurrentUserGroupsRolesPermissionsQuery = { readonly __typename?: 'query_root', readonly User: ReadonlyArray<{ readonly __typename?: 'User', readonly id: string, readonly attendees: ReadonlyArray<{ readonly __typename?: 'Attendee', readonly id: any, readonly userId?: Maybe<string>, readonly conferenceId: any, readonly displayName: string, readonly groupAttendees: ReadonlyArray<{ readonly __typename?: 'GroupAttendee', readonly id: any, readonly groupId: any, readonly attendeeId: any, readonly group: { readonly __typename?: 'Group', readonly accessStart: any, readonly accessEnd: any, readonly id: any, readonly includeUnauthenticated: boolean, readonly name: string, readonly conferenceId: any, readonly groupRoles: ReadonlyArray<{ readonly __typename?: 'GroupRole', readonly id: any, readonly roleId: any, readonly groupId: any, readonly role: { readonly __typename?: 'Role', readonly id: any, readonly name: string, readonly conferenceId: any, readonly rolePermissions: ReadonlyArray<{ readonly __typename?: 'RolePermission', readonly permissionName: Permission_Enum, readonly id: any, readonly roleId: any }> } }> } }> }> }> };

export type EchoQueryVariables = Exact<{
  message: Scalars['String'];
}>;


export type EchoQuery = { readonly __typename?: 'query_root', readonly echo?: Maybe<{ readonly __typename?: 'EchoOutput', readonly message: string }> };

export type ProtectedEchoQueryVariables = Exact<{
  message: Scalars['String'];
}>;


export type ProtectedEchoQuery = { readonly __typename?: 'query_root', readonly protectedEcho?: Maybe<{ readonly __typename?: 'ProtectedEchoOutput', readonly message: string }> };

export type AllRoomsSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type AllRoomsSubscription = { readonly __typename?: 'subscription_root', readonly Room: ReadonlyArray<(
    { readonly __typename?: 'Room' }
    & RoomFieldsFragment
  )> };

export type RoomFieldsFragment = { readonly __typename?: 'Room', readonly id: any, readonly hlsUri?: Maybe<string>, readonly name: string, readonly vonageSessionId?: Maybe<string> };

export type GenerateVonageTokenMutationVariables = Exact<{
  roomId: Scalars['uuid'];
}>;


export type GenerateVonageTokenMutation = { readonly __typename?: 'mutation_root', readonly generateVonageToken?: Maybe<{ readonly __typename?: 'GenerateVonageTokenOutput', readonly token: string }> };

export type SelectUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type SelectUsersQuery = { readonly __typename?: 'query_root', readonly User: ReadonlyArray<{ readonly __typename?: 'User', readonly id: string, readonly lastName: string, readonly firstName: string, readonly onlineStatus?: Maybe<{ readonly __typename?: 'OnlineStatus', readonly id: any, readonly lastSeen: any, readonly isIncognito: boolean }> }> };

export type SelectCurrentUserQueryVariables = Exact<{
  userId: Scalars['String'];
}>;


export type SelectCurrentUserQuery = { readonly __typename?: 'query_root', readonly User: ReadonlyArray<{ readonly __typename?: 'User', readonly id: string, readonly lastName: string, readonly firstName: string, readonly onlineStatus?: Maybe<{ readonly __typename?: 'OnlineStatus', readonly id: any, readonly lastSeen: any, readonly isIncognito: boolean }>, readonly pinnedChats: ReadonlyArray<{ readonly __typename?: 'PinnedChat', readonly id: any, readonly chatId: any }>, readonly followedChats: ReadonlyArray<{ readonly __typename?: 'FollowedChat', readonly id: any, readonly chatId: any }>, readonly unreadIndices: ReadonlyArray<{ readonly __typename?: 'ChatUnreadIndex', readonly id: any, readonly chatId: any, readonly index?: Maybe<number> }> }> };

export type GetCurrentUserIsIncognitoQueryVariables = Exact<{
  userId: Scalars['String'];
}>;


export type GetCurrentUserIsIncognitoQuery = { readonly __typename?: 'query_root', readonly OnlineStatus: ReadonlyArray<{ readonly __typename?: 'OnlineStatus', readonly id: any, readonly isIncognito: boolean }> };

export type UpdateCurrentUserIsIncognitoMutationVariables = Exact<{
  userId: Scalars['String'];
  isIncognito?: Maybe<Scalars['Boolean']>;
}>;


export type UpdateCurrentUserIsIncognitoMutation = { readonly __typename?: 'mutation_root', readonly update_OnlineStatus?: Maybe<{ readonly __typename?: 'OnlineStatus_mutation_response', readonly returning: ReadonlyArray<{ readonly __typename?: 'OnlineStatus', readonly id: any, readonly isIncognito: boolean }> }> };

export type GetCurrentUserLastSeenQueryVariables = Exact<{
  userId: Scalars['String'];
}>;


export type GetCurrentUserLastSeenQuery = { readonly __typename?: 'query_root', readonly OnlineStatus: ReadonlyArray<{ readonly __typename?: 'OnlineStatus', readonly id: any, readonly lastSeen: any }> };

export type InsertCurrentUserOnlineStatusMutationVariables = Exact<{
  userId: Scalars['String'];
}>;


export type InsertCurrentUserOnlineStatusMutation = { readonly __typename?: 'mutation_root', readonly insert_OnlineStatus?: Maybe<{ readonly __typename?: 'OnlineStatus_mutation_response', readonly returning: ReadonlyArray<{ readonly __typename?: 'OnlineStatus', readonly id: any, readonly isIncognito: boolean, readonly lastSeen: any, readonly userId: string }> }> };

export type UpdateCurrentUserLastSeenMutationVariables = Exact<{
  userId: Scalars['String'];
  lastSeen?: Maybe<Scalars['timestamptz']>;
}>;


export type UpdateCurrentUserLastSeenMutation = { readonly __typename?: 'mutation_root', readonly update_OnlineStatus?: Maybe<{ readonly __typename?: 'OnlineStatus_mutation_response', readonly returning: ReadonlyArray<{ readonly __typename?: 'OnlineStatus', readonly id: any, readonly lastSeen: any }> }> };

export const RoomFieldsFragmentDoc = gql`
    fragment RoomFields on Room {
  id
  hlsUri
  name
  vonageSessionId
}
    `;
export const CreateChatDocument = gql`
    mutation createChat($description: String!, $name: String!) {
  insert_Chat(objects: {description: $description, name: $name}) {
    returning {
      id
    }
  }
}
    `;
export type CreateChatMutationFn = Apollo.MutationFunction<CreateChatMutation, CreateChatMutationVariables>;

/**
 * __useCreateChatMutation__
 *
 * To run a mutation, you first call `useCreateChatMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateChatMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createChatMutation, { data, loading, error }] = useCreateChatMutation({
 *   variables: {
 *      description: // value for 'description'
 *      name: // value for 'name'
 *   },
 * });
 */
export function useCreateChatMutation(baseOptions?: Apollo.MutationHookOptions<CreateChatMutation, CreateChatMutationVariables>) {
        return Apollo.useMutation<CreateChatMutation, CreateChatMutationVariables>(CreateChatDocument, baseOptions);
      }
export type CreateChatMutationHookResult = ReturnType<typeof useCreateChatMutation>;
export type CreateChatMutationResult = Apollo.MutationResult<CreateChatMutation>;
export type CreateChatMutationOptions = Apollo.BaseMutationOptions<CreateChatMutation, CreateChatMutationVariables>;
export const SelectChatsDocument = gql`
    query selectChats {
  Chat {
    id
    name
    description
    mode
    members {
      userId
    }
    viewers {
      id
      lastSeen
      userId
    }
  }
}
    `;

/**
 * __useSelectChatsQuery__
 *
 * To run a query within a React component, call `useSelectChatsQuery` and pass it any options that fit your needs.
 * When your component renders, `useSelectChatsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSelectChatsQuery({
 *   variables: {
 *   },
 * });
 */
export function useSelectChatsQuery(baseOptions?: Apollo.QueryHookOptions<SelectChatsQuery, SelectChatsQueryVariables>) {
        return Apollo.useQuery<SelectChatsQuery, SelectChatsQueryVariables>(SelectChatsDocument, baseOptions);
      }
export function useSelectChatsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SelectChatsQuery, SelectChatsQueryVariables>) {
          return Apollo.useLazyQuery<SelectChatsQuery, SelectChatsQueryVariables>(SelectChatsDocument, baseOptions);
        }
export type SelectChatsQueryHookResult = ReturnType<typeof useSelectChatsQuery>;
export type SelectChatsLazyQueryHookResult = ReturnType<typeof useSelectChatsLazyQuery>;
export type SelectChatsQueryResult = Apollo.QueryResult<SelectChatsQuery, SelectChatsQueryVariables>;
export const SelectChatDocument = gql`
    query SelectChat($chatId: uuid!) {
  Chat(where: {id: {_eq: $chatId}}) {
    description
    creatorId
    createdAt
    mode
    name
    isAutoNotify
    isAutoPin
    id
    updatedAt
    moderators {
      id
      createdAt
      userId
    }
    members {
      userId
      id
      invitationAcceptedAt
      updatedAt
      createdAt
    }
    creator {
      firstName
      lastName
      id
    }
  }
}
    `;

/**
 * __useSelectChatQuery__
 *
 * To run a query within a React component, call `useSelectChatQuery` and pass it any options that fit your needs.
 * When your component renders, `useSelectChatQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSelectChatQuery({
 *   variables: {
 *      chatId: // value for 'chatId'
 *   },
 * });
 */
export function useSelectChatQuery(baseOptions: Apollo.QueryHookOptions<SelectChatQuery, SelectChatQueryVariables>) {
        return Apollo.useQuery<SelectChatQuery, SelectChatQueryVariables>(SelectChatDocument, baseOptions);
      }
export function useSelectChatLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SelectChatQuery, SelectChatQueryVariables>) {
          return Apollo.useLazyQuery<SelectChatQuery, SelectChatQueryVariables>(SelectChatDocument, baseOptions);
        }
export type SelectChatQueryHookResult = ReturnType<typeof useSelectChatQuery>;
export type SelectChatLazyQueryHookResult = ReturnType<typeof useSelectChatLazyQuery>;
export type SelectChatQueryResult = Apollo.QueryResult<SelectChatQuery, SelectChatQueryVariables>;
export const InsertMessageDocument = gql`
    mutation InsertMessage($chatId: uuid!, $content: jsonb!, $index: Int!) {
  insert_ChatMessage(objects: {chatId: $chatId, content: $content, index: $index}) {
    affected_rows
  }
}
    `;
export type InsertMessageMutationFn = Apollo.MutationFunction<InsertMessageMutation, InsertMessageMutationVariables>;

/**
 * __useInsertMessageMutation__
 *
 * To run a mutation, you first call `useInsertMessageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertMessageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertMessageMutation, { data, loading, error }] = useInsertMessageMutation({
 *   variables: {
 *      chatId: // value for 'chatId'
 *      content: // value for 'content'
 *      index: // value for 'index'
 *   },
 * });
 */
export function useInsertMessageMutation(baseOptions?: Apollo.MutationHookOptions<InsertMessageMutation, InsertMessageMutationVariables>) {
        return Apollo.useMutation<InsertMessageMutation, InsertMessageMutationVariables>(InsertMessageDocument, baseOptions);
      }
export type InsertMessageMutationHookResult = ReturnType<typeof useInsertMessageMutation>;
export type InsertMessageMutationResult = Apollo.MutationResult<InsertMessageMutation>;
export type InsertMessageMutationOptions = Apollo.BaseMutationOptions<InsertMessageMutation, InsertMessageMutationVariables>;
export const LiveChatDocument = gql`
    subscription LiveChat($chatId: uuid!, $limit: Int = 20, $offset: Int = 0) {
  Chat(where: {id: {_eq: $chatId}}) {
    id
    typers {
      id
      userId
      updatedAt
    }
    messages(order_by: {index: desc}, limit: $limit, offset: $offset) {
      content
      createdAt
      id
      index
      isHighlighted
      senderId
      updatedAt
      reactions {
        id
        createdAt
        reaction
        reactorId
      }
    }
    viewers {
      id
      lastSeen
      userId
    }
  }
}
    `;

/**
 * __useLiveChatSubscription__
 *
 * To run a query within a React component, call `useLiveChatSubscription` and pass it any options that fit your needs.
 * When your component renders, `useLiveChatSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLiveChatSubscription({
 *   variables: {
 *      chatId: // value for 'chatId'
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *   },
 * });
 */
export function useLiveChatSubscription(baseOptions: Apollo.SubscriptionHookOptions<LiveChatSubscription, LiveChatSubscriptionVariables>) {
        return Apollo.useSubscription<LiveChatSubscription, LiveChatSubscriptionVariables>(LiveChatDocument, baseOptions);
      }
export type LiveChatSubscriptionHookResult = ReturnType<typeof useLiveChatSubscription>;
export type LiveChatSubscriptionResult = Apollo.SubscriptionResult<LiveChatSubscription>;
export const UpsertIsTypingDocument = gql`
    mutation UpsertIsTyping($chatId: uuid!, $updatedAt: timestamptz!) {
  insert_ChatTyper(
    objects: {chatId: $chatId, updatedAt: $updatedAt}
    on_conflict: {constraint: ChatTyper_chatId_userId_key, update_columns: updatedAt}
  ) {
    returning {
      id
      updatedAt
      chatId
      userId
    }
  }
}
    `;
export type UpsertIsTypingMutationFn = Apollo.MutationFunction<UpsertIsTypingMutation, UpsertIsTypingMutationVariables>;

/**
 * __useUpsertIsTypingMutation__
 *
 * To run a mutation, you first call `useUpsertIsTypingMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpsertIsTypingMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [upsertIsTypingMutation, { data, loading, error }] = useUpsertIsTypingMutation({
 *   variables: {
 *      chatId: // value for 'chatId'
 *      updatedAt: // value for 'updatedAt'
 *   },
 * });
 */
export function useUpsertIsTypingMutation(baseOptions?: Apollo.MutationHookOptions<UpsertIsTypingMutation, UpsertIsTypingMutationVariables>) {
        return Apollo.useMutation<UpsertIsTypingMutation, UpsertIsTypingMutationVariables>(UpsertIsTypingDocument, baseOptions);
      }
export type UpsertIsTypingMutationHookResult = ReturnType<typeof useUpsertIsTypingMutation>;
export type UpsertIsTypingMutationResult = Apollo.MutationResult<UpsertIsTypingMutation>;
export type UpsertIsTypingMutationOptions = Apollo.BaseMutationOptions<UpsertIsTypingMutation, UpsertIsTypingMutationVariables>;
export const DeleteIsTypingDocument = gql`
    mutation DeleteIsTyping($chatId: uuid!, $userId: String!) {
  delete_ChatTyper(where: {chatId: {_eq: $chatId}, userId: {_eq: $userId}}) {
    returning {
      id
    }
  }
}
    `;
export type DeleteIsTypingMutationFn = Apollo.MutationFunction<DeleteIsTypingMutation, DeleteIsTypingMutationVariables>;

/**
 * __useDeleteIsTypingMutation__
 *
 * To run a mutation, you first call `useDeleteIsTypingMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteIsTypingMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteIsTypingMutation, { data, loading, error }] = useDeleteIsTypingMutation({
 *   variables: {
 *      chatId: // value for 'chatId'
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useDeleteIsTypingMutation(baseOptions?: Apollo.MutationHookOptions<DeleteIsTypingMutation, DeleteIsTypingMutationVariables>) {
        return Apollo.useMutation<DeleteIsTypingMutation, DeleteIsTypingMutationVariables>(DeleteIsTypingDocument, baseOptions);
      }
export type DeleteIsTypingMutationHookResult = ReturnType<typeof useDeleteIsTypingMutation>;
export type DeleteIsTypingMutationResult = Apollo.MutationResult<DeleteIsTypingMutation>;
export type DeleteIsTypingMutationOptions = Apollo.BaseMutationOptions<DeleteIsTypingMutation, DeleteIsTypingMutationVariables>;
export const UpdateConferenceDocument = gql`
    mutation UpdateConference($id: uuid!, $name: String = "", $shortName: String = "", $slug: String = "") {
  update_Conference(
    where: {id: {_eq: $id}}
    _set: {name: $name, shortName: $shortName, slug: $slug}
  ) {
    returning {
      id
      name
      shortName
      slug
    }
  }
}
    `;
export type UpdateConferenceMutationFn = Apollo.MutationFunction<UpdateConferenceMutation, UpdateConferenceMutationVariables>;

/**
 * __useUpdateConferenceMutation__
 *
 * To run a mutation, you first call `useUpdateConferenceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateConferenceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateConferenceMutation, { data, loading, error }] = useUpdateConferenceMutation({
 *   variables: {
 *      id: // value for 'id'
 *      name: // value for 'name'
 *      shortName: // value for 'shortName'
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useUpdateConferenceMutation(baseOptions?: Apollo.MutationHookOptions<UpdateConferenceMutation, UpdateConferenceMutationVariables>) {
        return Apollo.useMutation<UpdateConferenceMutation, UpdateConferenceMutationVariables>(UpdateConferenceDocument, baseOptions);
      }
export type UpdateConferenceMutationHookResult = ReturnType<typeof useUpdateConferenceMutation>;
export type UpdateConferenceMutationResult = Apollo.MutationResult<UpdateConferenceMutation>;
export type UpdateConferenceMutationOptions = Apollo.BaseMutationOptions<UpdateConferenceMutation, UpdateConferenceMutationVariables>;
export const ConferenceTakenDocument = gql`
    query ConferenceTaken($name: String!, $shortName: String!, $slug: String!) {
  Conference(
    where: {_or: [{name: {_eq: $name}}, {shortName: {_eq: $shortName}}, {slug: {_eq: $slug}}]}
    limit: 1
  ) {
    id
    name
    shortName
    slug
  }
}
    `;

/**
 * __useConferenceTakenQuery__
 *
 * To run a query within a React component, call `useConferenceTakenQuery` and pass it any options that fit your needs.
 * When your component renders, `useConferenceTakenQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useConferenceTakenQuery({
 *   variables: {
 *      name: // value for 'name'
 *      shortName: // value for 'shortName'
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useConferenceTakenQuery(baseOptions: Apollo.QueryHookOptions<ConferenceTakenQuery, ConferenceTakenQueryVariables>) {
        return Apollo.useQuery<ConferenceTakenQuery, ConferenceTakenQueryVariables>(ConferenceTakenDocument, baseOptions);
      }
export function useConferenceTakenLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ConferenceTakenQuery, ConferenceTakenQueryVariables>) {
          return Apollo.useLazyQuery<ConferenceTakenQuery, ConferenceTakenQueryVariables>(ConferenceTakenDocument, baseOptions);
        }
export type ConferenceTakenQueryHookResult = ReturnType<typeof useConferenceTakenQuery>;
export type ConferenceTakenLazyQueryHookResult = ReturnType<typeof useConferenceTakenLazyQuery>;
export type ConferenceTakenQueryResult = Apollo.QueryResult<ConferenceTakenQuery, ConferenceTakenQueryVariables>;
export const CreateConferenceDocument = gql`
    mutation CreateConference($name: String!, $shortName: String!, $slug: String!, $demoCode: uuid!) {
  insert_Conference(
    objects: [{name: $name, shortName: $shortName, slug: $slug, demoCodeId: $demoCode}]
  ) {
    returning {
      id
      slug
    }
  }
  update_ConferenceDemoCode(
    where: {id: {_eq: $demoCode}}
    _set: {note: "Code has been used."}
  ) {
    affected_rows
  }
}
    `;
export type CreateConferenceMutationFn = Apollo.MutationFunction<CreateConferenceMutation, CreateConferenceMutationVariables>;

/**
 * __useCreateConferenceMutation__
 *
 * To run a mutation, you first call `useCreateConferenceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateConferenceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createConferenceMutation, { data, loading, error }] = useCreateConferenceMutation({
 *   variables: {
 *      name: // value for 'name'
 *      shortName: // value for 'shortName'
 *      slug: // value for 'slug'
 *      demoCode: // value for 'demoCode'
 *   },
 * });
 */
export function useCreateConferenceMutation(baseOptions?: Apollo.MutationHookOptions<CreateConferenceMutation, CreateConferenceMutationVariables>) {
        return Apollo.useMutation<CreateConferenceMutation, CreateConferenceMutationVariables>(CreateConferenceDocument, baseOptions);
      }
export type CreateConferenceMutationHookResult = ReturnType<typeof useCreateConferenceMutation>;
export type CreateConferenceMutationResult = Apollo.MutationResult<CreateConferenceMutation>;
export type CreateConferenceMutationOptions = Apollo.BaseMutationOptions<CreateConferenceMutation, CreateConferenceMutationVariables>;
export const CreateNewConferenceMetaStructureDocument = gql`
    mutation CreateNewConferenceMetaStructure($conferenceId: uuid!, $attendeeDisplayName: String!, $userId: String!, $accessStart: timestamptz!, $accessEnd: timestamptz!) {
  insert_Attendee(
    objects: [{displayName: $attendeeDisplayName, userId: $userId, conferenceId: $conferenceId, groupAttendees: {data: {group: {data: {conferenceId: $conferenceId, accessStart: $accessStart, accessEnd: $accessEnd, includeUnauthenticated: false, name: "Organisers", groupRoles: {data: {role: {data: {conferenceId: $conferenceId, name: "Organiser", rolePermissions: {data: [{permissionName: CONFERENCE_MANAGE_NAME}, {permissionName: CONFERENCE_MANAGE_ATTENDEES}, {permissionName: CONFERENCE_MODERATE_ATTENDEES}, {permissionName: CONFERENCE_VIEW_ACTIVE_ATTENDEES}, {permissionName: CONFERENCE_VIEW_BANNED_ATTENDEES}, {permissionName: CONFERENCE_VIEW}, {permissionName: CONFERENCE_MANAGE_ROLES}, {permissionName: CONFERENCE_MANAGE_GROUPS}]}}}}}}}}}}]
  ) {
    affected_rows
  }
}
    `;
export type CreateNewConferenceMetaStructureMutationFn = Apollo.MutationFunction<CreateNewConferenceMetaStructureMutation, CreateNewConferenceMetaStructureMutationVariables>;

/**
 * __useCreateNewConferenceMetaStructureMutation__
 *
 * To run a mutation, you first call `useCreateNewConferenceMetaStructureMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateNewConferenceMetaStructureMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createNewConferenceMetaStructureMutation, { data, loading, error }] = useCreateNewConferenceMetaStructureMutation({
 *   variables: {
 *      conferenceId: // value for 'conferenceId'
 *      attendeeDisplayName: // value for 'attendeeDisplayName'
 *      userId: // value for 'userId'
 *      accessStart: // value for 'accessStart'
 *      accessEnd: // value for 'accessEnd'
 *   },
 * });
 */
export function useCreateNewConferenceMetaStructureMutation(baseOptions?: Apollo.MutationHookOptions<CreateNewConferenceMetaStructureMutation, CreateNewConferenceMetaStructureMutationVariables>) {
        return Apollo.useMutation<CreateNewConferenceMetaStructureMutation, CreateNewConferenceMetaStructureMutationVariables>(CreateNewConferenceMetaStructureDocument, baseOptions);
      }
export type CreateNewConferenceMetaStructureMutationHookResult = ReturnType<typeof useCreateNewConferenceMetaStructureMutation>;
export type CreateNewConferenceMetaStructureMutationResult = Apollo.MutationResult<CreateNewConferenceMetaStructureMutation>;
export type CreateNewConferenceMetaStructureMutationOptions = Apollo.BaseMutationOptions<CreateNewConferenceMetaStructureMutation, CreateNewConferenceMetaStructureMutationVariables>;
export const ConferenceBySlugDocument = gql`
    query ConferenceBySlug($slug: String!) {
  Conference(where: {slug: {_eq: $slug}}, limit: 1) {
    createdBy
    id
    name
    shortName
    slug
    updatedAt
    createdAt
  }
}
    `;

/**
 * __useConferenceBySlugQuery__
 *
 * To run a query within a React component, call `useConferenceBySlugQuery` and pass it any options that fit your needs.
 * When your component renders, `useConferenceBySlugQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useConferenceBySlugQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useConferenceBySlugQuery(baseOptions: Apollo.QueryHookOptions<ConferenceBySlugQuery, ConferenceBySlugQueryVariables>) {
        return Apollo.useQuery<ConferenceBySlugQuery, ConferenceBySlugQueryVariables>(ConferenceBySlugDocument, baseOptions);
      }
export function useConferenceBySlugLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ConferenceBySlugQuery, ConferenceBySlugQueryVariables>) {
          return Apollo.useLazyQuery<ConferenceBySlugQuery, ConferenceBySlugQueryVariables>(ConferenceBySlugDocument, baseOptions);
        }
export type ConferenceBySlugQueryHookResult = ReturnType<typeof useConferenceBySlugQuery>;
export type ConferenceBySlugLazyQueryHookResult = ReturnType<typeof useConferenceBySlugLazyQuery>;
export type ConferenceBySlugQueryResult = Apollo.QueryResult<ConferenceBySlugQuery, ConferenceBySlugQueryVariables>;
export const CurrentUserGroupsRolesPermissionsDocument = gql`
    query CurrentUserGroupsRolesPermissions($userId: String!, $conferenceId: uuid!) {
  User(where: {id: {_eq: $userId}}) {
    attendees(where: {conferenceId: {_eq: $conferenceId}}) {
      groupAttendees {
        group {
          groupRoles {
            role {
              rolePermissions {
                permissionName
                id
                roleId
              }
              id
              name
              conferenceId
            }
            id
            roleId
            groupId
          }
          accessStart
          accessEnd
          id
          includeUnauthenticated
          name
          conferenceId
        }
        id
        groupId
        attendeeId
      }
      id
      userId
      conferenceId
      displayName
    }
    id
  }
}
    `;

/**
 * __useCurrentUserGroupsRolesPermissionsQuery__
 *
 * To run a query within a React component, call `useCurrentUserGroupsRolesPermissionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCurrentUserGroupsRolesPermissionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCurrentUserGroupsRolesPermissionsQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *      conferenceId: // value for 'conferenceId'
 *   },
 * });
 */
export function useCurrentUserGroupsRolesPermissionsQuery(baseOptions: Apollo.QueryHookOptions<CurrentUserGroupsRolesPermissionsQuery, CurrentUserGroupsRolesPermissionsQueryVariables>) {
        return Apollo.useQuery<CurrentUserGroupsRolesPermissionsQuery, CurrentUserGroupsRolesPermissionsQueryVariables>(CurrentUserGroupsRolesPermissionsDocument, baseOptions);
      }
export function useCurrentUserGroupsRolesPermissionsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CurrentUserGroupsRolesPermissionsQuery, CurrentUserGroupsRolesPermissionsQueryVariables>) {
          return Apollo.useLazyQuery<CurrentUserGroupsRolesPermissionsQuery, CurrentUserGroupsRolesPermissionsQueryVariables>(CurrentUserGroupsRolesPermissionsDocument, baseOptions);
        }
export type CurrentUserGroupsRolesPermissionsQueryHookResult = ReturnType<typeof useCurrentUserGroupsRolesPermissionsQuery>;
export type CurrentUserGroupsRolesPermissionsLazyQueryHookResult = ReturnType<typeof useCurrentUserGroupsRolesPermissionsLazyQuery>;
export type CurrentUserGroupsRolesPermissionsQueryResult = Apollo.QueryResult<CurrentUserGroupsRolesPermissionsQuery, CurrentUserGroupsRolesPermissionsQueryVariables>;
export const EchoDocument = gql`
    query Echo($message: String!) {
  echo(message: $message) {
    message
  }
}
    `;

/**
 * __useEchoQuery__
 *
 * To run a query within a React component, call `useEchoQuery` and pass it any options that fit your needs.
 * When your component renders, `useEchoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useEchoQuery({
 *   variables: {
 *      message: // value for 'message'
 *   },
 * });
 */
export function useEchoQuery(baseOptions: Apollo.QueryHookOptions<EchoQuery, EchoQueryVariables>) {
        return Apollo.useQuery<EchoQuery, EchoQueryVariables>(EchoDocument, baseOptions);
      }
export function useEchoLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<EchoQuery, EchoQueryVariables>) {
          return Apollo.useLazyQuery<EchoQuery, EchoQueryVariables>(EchoDocument, baseOptions);
        }
export type EchoQueryHookResult = ReturnType<typeof useEchoQuery>;
export type EchoLazyQueryHookResult = ReturnType<typeof useEchoLazyQuery>;
export type EchoQueryResult = Apollo.QueryResult<EchoQuery, EchoQueryVariables>;
export const ProtectedEchoDocument = gql`
    query ProtectedEcho($message: String!) {
  protectedEcho(message: $message) {
    message
  }
}
    `;

/**
 * __useProtectedEchoQuery__
 *
 * To run a query within a React component, call `useProtectedEchoQuery` and pass it any options that fit your needs.
 * When your component renders, `useProtectedEchoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProtectedEchoQuery({
 *   variables: {
 *      message: // value for 'message'
 *   },
 * });
 */
export function useProtectedEchoQuery(baseOptions: Apollo.QueryHookOptions<ProtectedEchoQuery, ProtectedEchoQueryVariables>) {
        return Apollo.useQuery<ProtectedEchoQuery, ProtectedEchoQueryVariables>(ProtectedEchoDocument, baseOptions);
      }
export function useProtectedEchoLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProtectedEchoQuery, ProtectedEchoQueryVariables>) {
          return Apollo.useLazyQuery<ProtectedEchoQuery, ProtectedEchoQueryVariables>(ProtectedEchoDocument, baseOptions);
        }
export type ProtectedEchoQueryHookResult = ReturnType<typeof useProtectedEchoQuery>;
export type ProtectedEchoLazyQueryHookResult = ReturnType<typeof useProtectedEchoLazyQuery>;
export type ProtectedEchoQueryResult = Apollo.QueryResult<ProtectedEchoQuery, ProtectedEchoQueryVariables>;
export const AllRoomsDocument = gql`
    subscription AllRooms {
  Room {
    ...RoomFields
  }
}
    ${RoomFieldsFragmentDoc}`;

/**
 * __useAllRoomsSubscription__
 *
 * To run a query within a React component, call `useAllRoomsSubscription` and pass it any options that fit your needs.
 * When your component renders, `useAllRoomsSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllRoomsSubscription({
 *   variables: {
 *   },
 * });
 */
export function useAllRoomsSubscription(baseOptions?: Apollo.SubscriptionHookOptions<AllRoomsSubscription, AllRoomsSubscriptionVariables>) {
        return Apollo.useSubscription<AllRoomsSubscription, AllRoomsSubscriptionVariables>(AllRoomsDocument, baseOptions);
      }
export type AllRoomsSubscriptionHookResult = ReturnType<typeof useAllRoomsSubscription>;
export type AllRoomsSubscriptionResult = Apollo.SubscriptionResult<AllRoomsSubscription>;
export const GenerateVonageTokenDocument = gql`
    mutation GenerateVonageToken($roomId: uuid!) {
  generateVonageToken(roomId: $roomId) {
    token
  }
}
    `;
export type GenerateVonageTokenMutationFn = Apollo.MutationFunction<GenerateVonageTokenMutation, GenerateVonageTokenMutationVariables>;

/**
 * __useGenerateVonageTokenMutation__
 *
 * To run a mutation, you first call `useGenerateVonageTokenMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useGenerateVonageTokenMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [generateVonageTokenMutation, { data, loading, error }] = useGenerateVonageTokenMutation({
 *   variables: {
 *      roomId: // value for 'roomId'
 *   },
 * });
 */
export function useGenerateVonageTokenMutation(baseOptions?: Apollo.MutationHookOptions<GenerateVonageTokenMutation, GenerateVonageTokenMutationVariables>) {
        return Apollo.useMutation<GenerateVonageTokenMutation, GenerateVonageTokenMutationVariables>(GenerateVonageTokenDocument, baseOptions);
      }
export type GenerateVonageTokenMutationHookResult = ReturnType<typeof useGenerateVonageTokenMutation>;
export type GenerateVonageTokenMutationResult = Apollo.MutationResult<GenerateVonageTokenMutation>;
export type GenerateVonageTokenMutationOptions = Apollo.BaseMutationOptions<GenerateVonageTokenMutation, GenerateVonageTokenMutationVariables>;
export const SelectUsersDocument = gql`
    query selectUsers {
  User {
    id
    lastName
    firstName
    onlineStatus {
      id
      lastSeen
      isIncognito
    }
  }
}
    `;

/**
 * __useSelectUsersQuery__
 *
 * To run a query within a React component, call `useSelectUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useSelectUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSelectUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useSelectUsersQuery(baseOptions?: Apollo.QueryHookOptions<SelectUsersQuery, SelectUsersQueryVariables>) {
        return Apollo.useQuery<SelectUsersQuery, SelectUsersQueryVariables>(SelectUsersDocument, baseOptions);
      }
export function useSelectUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SelectUsersQuery, SelectUsersQueryVariables>) {
          return Apollo.useLazyQuery<SelectUsersQuery, SelectUsersQueryVariables>(SelectUsersDocument, baseOptions);
        }
export type SelectUsersQueryHookResult = ReturnType<typeof useSelectUsersQuery>;
export type SelectUsersLazyQueryHookResult = ReturnType<typeof useSelectUsersLazyQuery>;
export type SelectUsersQueryResult = Apollo.QueryResult<SelectUsersQuery, SelectUsersQueryVariables>;
export const SelectCurrentUserDocument = gql`
    query selectCurrentUser($userId: String!) {
  User(where: {id: {_eq: $userId}}) {
    id
    lastName
    firstName
    onlineStatus {
      id
      lastSeen
      isIncognito
    }
    pinnedChats {
      id
      chatId
    }
    followedChats {
      id
      chatId
    }
    unreadIndices {
      id
      chatId
      index
    }
  }
}
    `;

/**
 * __useSelectCurrentUserQuery__
 *
 * To run a query within a React component, call `useSelectCurrentUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useSelectCurrentUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSelectCurrentUserQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useSelectCurrentUserQuery(baseOptions: Apollo.QueryHookOptions<SelectCurrentUserQuery, SelectCurrentUserQueryVariables>) {
        return Apollo.useQuery<SelectCurrentUserQuery, SelectCurrentUserQueryVariables>(SelectCurrentUserDocument, baseOptions);
      }
export function useSelectCurrentUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SelectCurrentUserQuery, SelectCurrentUserQueryVariables>) {
          return Apollo.useLazyQuery<SelectCurrentUserQuery, SelectCurrentUserQueryVariables>(SelectCurrentUserDocument, baseOptions);
        }
export type SelectCurrentUserQueryHookResult = ReturnType<typeof useSelectCurrentUserQuery>;
export type SelectCurrentUserLazyQueryHookResult = ReturnType<typeof useSelectCurrentUserLazyQuery>;
export type SelectCurrentUserQueryResult = Apollo.QueryResult<SelectCurrentUserQuery, SelectCurrentUserQueryVariables>;
export const GetCurrentUserIsIncognitoDocument = gql`
    query getCurrentUserIsIncognito($userId: String!) {
  OnlineStatus(where: {userId: {_eq: $userId}}) {
    id
    isIncognito
  }
}
    `;

/**
 * __useGetCurrentUserIsIncognitoQuery__
 *
 * To run a query within a React component, call `useGetCurrentUserIsIncognitoQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCurrentUserIsIncognitoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCurrentUserIsIncognitoQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useGetCurrentUserIsIncognitoQuery(baseOptions: Apollo.QueryHookOptions<GetCurrentUserIsIncognitoQuery, GetCurrentUserIsIncognitoQueryVariables>) {
        return Apollo.useQuery<GetCurrentUserIsIncognitoQuery, GetCurrentUserIsIncognitoQueryVariables>(GetCurrentUserIsIncognitoDocument, baseOptions);
      }
export function useGetCurrentUserIsIncognitoLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCurrentUserIsIncognitoQuery, GetCurrentUserIsIncognitoQueryVariables>) {
          return Apollo.useLazyQuery<GetCurrentUserIsIncognitoQuery, GetCurrentUserIsIncognitoQueryVariables>(GetCurrentUserIsIncognitoDocument, baseOptions);
        }
export type GetCurrentUserIsIncognitoQueryHookResult = ReturnType<typeof useGetCurrentUserIsIncognitoQuery>;
export type GetCurrentUserIsIncognitoLazyQueryHookResult = ReturnType<typeof useGetCurrentUserIsIncognitoLazyQuery>;
export type GetCurrentUserIsIncognitoQueryResult = Apollo.QueryResult<GetCurrentUserIsIncognitoQuery, GetCurrentUserIsIncognitoQueryVariables>;
export const UpdateCurrentUserIsIncognitoDocument = gql`
    mutation updateCurrentUserIsIncognito($userId: String!, $isIncognito: Boolean = false) {
  update_OnlineStatus(
    _set: {isIncognito: $isIncognito}
    where: {userId: {_eq: $userId}}
  ) {
    returning {
      id
      isIncognito
    }
  }
}
    `;
export type UpdateCurrentUserIsIncognitoMutationFn = Apollo.MutationFunction<UpdateCurrentUserIsIncognitoMutation, UpdateCurrentUserIsIncognitoMutationVariables>;

/**
 * __useUpdateCurrentUserIsIncognitoMutation__
 *
 * To run a mutation, you first call `useUpdateCurrentUserIsIncognitoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateCurrentUserIsIncognitoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateCurrentUserIsIncognitoMutation, { data, loading, error }] = useUpdateCurrentUserIsIncognitoMutation({
 *   variables: {
 *      userId: // value for 'userId'
 *      isIncognito: // value for 'isIncognito'
 *   },
 * });
 */
export function useUpdateCurrentUserIsIncognitoMutation(baseOptions?: Apollo.MutationHookOptions<UpdateCurrentUserIsIncognitoMutation, UpdateCurrentUserIsIncognitoMutationVariables>) {
        return Apollo.useMutation<UpdateCurrentUserIsIncognitoMutation, UpdateCurrentUserIsIncognitoMutationVariables>(UpdateCurrentUserIsIncognitoDocument, baseOptions);
      }
export type UpdateCurrentUserIsIncognitoMutationHookResult = ReturnType<typeof useUpdateCurrentUserIsIncognitoMutation>;
export type UpdateCurrentUserIsIncognitoMutationResult = Apollo.MutationResult<UpdateCurrentUserIsIncognitoMutation>;
export type UpdateCurrentUserIsIncognitoMutationOptions = Apollo.BaseMutationOptions<UpdateCurrentUserIsIncognitoMutation, UpdateCurrentUserIsIncognitoMutationVariables>;
export const GetCurrentUserLastSeenDocument = gql`
    query getCurrentUserLastSeen($userId: String!) {
  OnlineStatus(where: {userId: {_eq: $userId}}) {
    id
    lastSeen
  }
}
    `;

/**
 * __useGetCurrentUserLastSeenQuery__
 *
 * To run a query within a React component, call `useGetCurrentUserLastSeenQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCurrentUserLastSeenQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCurrentUserLastSeenQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useGetCurrentUserLastSeenQuery(baseOptions: Apollo.QueryHookOptions<GetCurrentUserLastSeenQuery, GetCurrentUserLastSeenQueryVariables>) {
        return Apollo.useQuery<GetCurrentUserLastSeenQuery, GetCurrentUserLastSeenQueryVariables>(GetCurrentUserLastSeenDocument, baseOptions);
      }
export function useGetCurrentUserLastSeenLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCurrentUserLastSeenQuery, GetCurrentUserLastSeenQueryVariables>) {
          return Apollo.useLazyQuery<GetCurrentUserLastSeenQuery, GetCurrentUserLastSeenQueryVariables>(GetCurrentUserLastSeenDocument, baseOptions);
        }
export type GetCurrentUserLastSeenQueryHookResult = ReturnType<typeof useGetCurrentUserLastSeenQuery>;
export type GetCurrentUserLastSeenLazyQueryHookResult = ReturnType<typeof useGetCurrentUserLastSeenLazyQuery>;
export type GetCurrentUserLastSeenQueryResult = Apollo.QueryResult<GetCurrentUserLastSeenQuery, GetCurrentUserLastSeenQueryVariables>;
export const InsertCurrentUserOnlineStatusDocument = gql`
    mutation insertCurrentUserOnlineStatus($userId: String!) {
  insert_OnlineStatus(objects: {userId: $userId, isIncognito: false}) {
    returning {
      id
      isIncognito
      lastSeen
      userId
    }
  }
}
    `;
export type InsertCurrentUserOnlineStatusMutationFn = Apollo.MutationFunction<InsertCurrentUserOnlineStatusMutation, InsertCurrentUserOnlineStatusMutationVariables>;

/**
 * __useInsertCurrentUserOnlineStatusMutation__
 *
 * To run a mutation, you first call `useInsertCurrentUserOnlineStatusMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertCurrentUserOnlineStatusMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertCurrentUserOnlineStatusMutation, { data, loading, error }] = useInsertCurrentUserOnlineStatusMutation({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useInsertCurrentUserOnlineStatusMutation(baseOptions?: Apollo.MutationHookOptions<InsertCurrentUserOnlineStatusMutation, InsertCurrentUserOnlineStatusMutationVariables>) {
        return Apollo.useMutation<InsertCurrentUserOnlineStatusMutation, InsertCurrentUserOnlineStatusMutationVariables>(InsertCurrentUserOnlineStatusDocument, baseOptions);
      }
export type InsertCurrentUserOnlineStatusMutationHookResult = ReturnType<typeof useInsertCurrentUserOnlineStatusMutation>;
export type InsertCurrentUserOnlineStatusMutationResult = Apollo.MutationResult<InsertCurrentUserOnlineStatusMutation>;
export type InsertCurrentUserOnlineStatusMutationOptions = Apollo.BaseMutationOptions<InsertCurrentUserOnlineStatusMutation, InsertCurrentUserOnlineStatusMutationVariables>;
export const UpdateCurrentUserLastSeenDocument = gql`
    mutation updateCurrentUserLastSeen($userId: String!, $lastSeen: timestamptz) {
  update_OnlineStatus(
    _set: {lastSeen: $lastSeen}
    where: {userId: {_eq: $userId}}
  ) {
    returning {
      id
      lastSeen
    }
  }
}
    `;
export type UpdateCurrentUserLastSeenMutationFn = Apollo.MutationFunction<UpdateCurrentUserLastSeenMutation, UpdateCurrentUserLastSeenMutationVariables>;

/**
 * __useUpdateCurrentUserLastSeenMutation__
 *
 * To run a mutation, you first call `useUpdateCurrentUserLastSeenMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateCurrentUserLastSeenMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateCurrentUserLastSeenMutation, { data, loading, error }] = useUpdateCurrentUserLastSeenMutation({
 *   variables: {
 *      userId: // value for 'userId'
 *      lastSeen: // value for 'lastSeen'
 *   },
 * });
 */
export function useUpdateCurrentUserLastSeenMutation(baseOptions?: Apollo.MutationHookOptions<UpdateCurrentUserLastSeenMutation, UpdateCurrentUserLastSeenMutationVariables>) {
        return Apollo.useMutation<UpdateCurrentUserLastSeenMutation, UpdateCurrentUserLastSeenMutationVariables>(UpdateCurrentUserLastSeenDocument, baseOptions);
      }
export type UpdateCurrentUserLastSeenMutationHookResult = ReturnType<typeof useUpdateCurrentUserLastSeenMutation>;
export type UpdateCurrentUserLastSeenMutationResult = Apollo.MutationResult<UpdateCurrentUserLastSeenMutation>;
export type UpdateCurrentUserLastSeenMutationOptions = Apollo.BaseMutationOptions<UpdateCurrentUserLastSeenMutation, UpdateCurrentUserLastSeenMutationVariables>;