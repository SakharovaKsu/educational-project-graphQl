import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A valid datetime value */
  Date: { input: any; output: any; }
  /** The `Upload` scalar type represents a file upload. */
  Upload: { input: any; output: any; }
};

export enum CacheControlScope {
  Private = 'PRIVATE',
  Public = 'PUBLIC'
}

/** A `Cat` is a small, carnivorous mammal who is usually sleeping. */
export type Cat = Pet & {
  __typename?: 'Cat';
  /** A Boolean describing whether or not this `Cat` is curious. This is almost always `true`. */
  curious?: Maybe<Scalars['Boolean']['output']>;
  /** If this cat is checked out (status: CHECKEDOUT), this field will return a date string describing when the cat is due back. Always return cats on time. */
  dueDate?: Maybe<Scalars['Date']['output']>;
  /** A unique identifier for each `Cat`. */
  id: Scalars['ID']['output'];
  /** If this pet is checked out (status: CHECKEDOUT), this field will return the `Customer` who checked this `Cat` out and is responsible for is security and overall happiness. */
  inCareOf?: Maybe<Customer>;
  /** The cat's given name */
  name: Scalars['String']['output'];
  /** A `Photo` type. The `Photo` type is an object containing `thumb` and `full` for thumbnail and fullsize image links. */
  photo?: Maybe<Photo>;
  /** The number of hours a cat sleeps per day. */
  sleepAmount?: Maybe<Scalars['Int']['output']>;
  /** The current checkout status of the cat. Must one of the values of the `PetStatus` enumerator: AVAILABLE or CHECKEDOUT. */
  status?: Maybe<PetStatus>;
  /** The weight (in pounds) of the cat in question. */
  weight?: Maybe<Scalars['Float']['output']>;
};

/** Checking out a `Pet` is a dream come true for many people. Receiving `customer`, `pet`, and `checkoutDate` back as an object from the `checkOut` mutation is a dream come true for a pet librarian and a GraphQL enthusiast. */
export type CheckOutPayload = {
  __typename?: 'CheckOutPayload';
  /** The date that this `Pet` was checked out. This is used to calculate the due date. */
  checkOutDate?: Maybe<Scalars['Date']['output']>;
  /** The entire `Customer` object for the customer who just checked out a pet. */
  customer?: Maybe<Customer>;
  /** The entire `Pet` object for the pet who was just checked out. */
  pet?: Maybe<Pet>;
};

/** Every time a `Pet` is checked out, a record of that `Checkout` is logged. This provides information about the pet, when the pet was checked out and in, and whether or not the pet was late. If you want to find out if a `Customer` is a delinquent, look for the `Checkout` type. */
export type Checkout = {
  __typename?: 'Checkout';
  /** The date that this `Pet` was checked out. This is used to calculate the dueDate. */
  checkInDate: Scalars['Date']['output'];
  /** The date that this `Pet` was checked out. This is used to calculate the dueDate. */
  checkOutDate: Scalars['Date']['output'];
  /** A boolean flag to indicate whether the `Pet` was checked in late. If this value is true, this means that you blocked another person from checking out a `Pet`. You can do better than that. */
  late?: Maybe<Scalars['Boolean']['output']>;
  /** The entire `Pet` object for the pet who was just checked out. */
  pet?: Maybe<Pet>;
};

/** When a user creates an account, they must send `name`, `username`, and `password` to the `createAccount` mutation. This input type wraps those fields into one fancy object. */
export type CreateAccountInput = {
  /** A `Customer`'s full name. */
  name: Scalars['String']['input'];
  /** A `Customer`'s password. */
  password: Scalars['String']['input'];
  /** A `Customer`'s unique user name. */
  username: Scalars['ID']['input'];
};

/** When a new customer creates an account, this object will be returned from the `createAccount` mutation. */
export type CreateAccountPayload = {
  __typename?: 'CreateAccountPayload';
  /** The entire `Customer` object for the recently registered individual. */
  customer?: Maybe<Customer>;
  /** A welcome message to the new `Customer` encouraging them to log in. */
  message?: Maybe<Scalars['String']['output']>;
};

/** Anyone who has created an account at the Pet Library is a `Customer`. Customers can login and checkout/checkin pets to the Pet Library. */
export type Customer = {
  __typename?: 'Customer';
  /** Returns a list of `Checkout`s, objects that describe a pet checkout transaction. If the `Customer` has never checked out a pet, this value will be an empty array. */
  checkoutHistory: Array<Checkout>;
  /** Returns a list of `Pet` objects that the `Customer` currently has checked out. If the `Customer` does not have any pets checked out, this value will be an empty array. */
  currentPets: Array<Pet>;
  /** The date that this `Customer` was created (whenever the `createAccount` mutation was sent). */
  dateCreated?: Maybe<Scalars['Date']['output']>;
  /** The `Customer`'s name as a string. */
  name: Scalars['String']['output'];
  /** A unique username for the `Customer`. */
  username: Scalars['ID']['output'];
};

/** A `Dog` is a wolf descendant that you can dress in a little jacket. */
export type Dog = Pet & {
  __typename?: 'Dog';
  /** If this dog is checked out (status: CHECKEDOUT), this field will return a date string describing when the dog is due back. Always return dogs on time. */
  dueDate?: Maybe<Scalars['Date']['output']>;
  /** A Boolean describing whether or not this `Dog` is a good dog. This is almost always `true`. */
  good?: Maybe<Scalars['Boolean']['output']>;
  /** A unique identifier for each `Dog`. */
  id: Scalars['ID']['output'];
  /** If this dog is checked out (status: CHECKEDOUT), this field will return the `Customer` who checked this `Dog` out and is responsible for is security and overall happiness. */
  inCareOf?: Maybe<Customer>;
  /** The dog's given name. */
  name: Scalars['String']['output'];
  /** A `Photo` type. The `Photo` type is an object containing `thumb` and `full` for thumbnail and fullsize image links. */
  photo?: Maybe<Photo>;
  /** The current checkout status of the dog. Must one of the values of the `PetStatus` enumerator: AVAILABLE or CHECKEDOUT. */
  status?: Maybe<PetStatus>;
  /** The weight (in pounds) of the dog in question. */
  weight?: Maybe<Scalars['Float']['output']>;
};

/** `ExoticPet` is a union type which means that either a `Rabbit` or `Stingray` could be returned for each `ExoticPet`. */
export type ExoticPet = Rabbit | Stingray;

/** `FamilyPet` is a union type which means that either a `Cat` or `Dog` could be returned for each `FamilyPet`. */
export type FamilyPet = Cat | Dog;

/** When a `Customer` logs in to the Pet Library, they can get their token and customer information from the `LogInPayload` type. This is how user authentication is handled at the library. */
export type LogInPayload = {
  __typename?: 'LogInPayload';
  /** The entire `Customer` object for the recently logged in individual. */
  customer?: Maybe<Customer>;
  /** The authorization token that can be used to run queries and mutations that require login. */
  token: Scalars['String']['output'];
};

/** All of the Pet Library's root mutation types can be found in the `Mutation`. Any types of data changes you want to make can be found here. */
export type Mutation = {
  __typename?: 'Mutation';
  /** A mutation used to check a `Pet` back in to the Pet Library. */
  checkIn: Checkout;
  /** A mutation used to check out a `Pet`. Once you check out a `Pet`, that pet is in your care, even the stingrays. */
  checkOut: CheckOutPayload;
  /** When you need to create an account at the Pet Library, you'll need to send this mutation. Your name + username + password is all you need to be given dominion over cats, dogs, rabbits, and/or stingrays. */
  createAccount?: Maybe<Customer>;
  /** A mutation used to log in a registered user. If you haven't created an account yet, start with the `createAccount` mutation. */
  logIn: LogInPayload;
};


/** All of the Pet Library's root mutation types can be found in the `Mutation`. Any types of data changes you want to make can be found here. */
export type MutationCheckInArgs = {
  id: Scalars['ID']['input'];
};


/** All of the Pet Library's root mutation types can be found in the `Mutation`. Any types of data changes you want to make can be found here. */
export type MutationCheckOutArgs = {
  id: Scalars['ID']['input'];
};


/** All of the Pet Library's root mutation types can be found in the `Mutation`. Any types of data changes you want to make can be found here. */
export type MutationCreateAccountArgs = {
  input: CreateAccountInput;
};


/** All of the Pet Library's root mutation types can be found in the `Mutation`. Any types of data changes you want to make can be found here. */
export type MutationLogInArgs = {
  password: Scalars['String']['input'];
  username: Scalars['ID']['input'];
};

/** The Pet Library would not be the Pet Library without a `Pet`. The `Pet` type describes an animal that is part of the pet database. Once a `Pet` has been added to the Pet Library, the pet can be checked in and checked out of the library. */
export type Pet = {
  /** If this pet is checked out (status: CHECKEDOUT), this field will return a date string describing when the pet is due back. Always return pets on time. */
  dueDate?: Maybe<Scalars['Date']['output']>;
  /** A unique identifier for each `Pet`. This value also serves as a lookup for the `petById` query. */
  id: Scalars['ID']['output'];
  /** If this pet is checked out (status: CHECKEDOUT), this field will return the `Customer` who checked this `Pet` out and is responsible for is security and overall happiness. */
  inCareOf?: Maybe<Customer>;
  /** The pet's given name */
  name: Scalars['String']['output'];
  /** A `Photo` type. The `Photo` type is an object containing `thumb` and `full` for thumbnail and fullsize image links. */
  photo?: Maybe<Photo>;
  /** The current checkout status of the pet. Must one of the values of the `PetStatus` enumerator: AVAILABLE or CHECKEDOUT. */
  status?: Maybe<PetStatus>;
  /** The weight (in pounds) of the pet in question. */
  weight?: Maybe<Scalars['Float']['output']>;
};

/** This enumeration type tells us whether or not a pet is checked out. If `AVAILABLE`, a `Customer` can take this pet home. If `CHECKEDOUT`, a `Customer` has to wait for the pet to be returned. */
export enum PetStatus {
  /** A `Pet` with this status can be checked out. */
  Available = 'AVAILABLE',
  /** A `Pet` with this status has already been checked out and is unavailable. */
  Checkedout = 'CHECKEDOUT'
}

/** Each `Pet` has a `Photo`, and this object describes the structure of that `Photo`: a fullsize and thumbnail version of the same `Pet` photo. */
export type Photo = {
  __typename?: 'Photo';
  /** The url for a fullsize photo of a `Pet`. */
  full?: Maybe<Scalars['String']['output']>;
  /** The url for a thumbnail photo of a `Pet`. */
  thumb?: Maybe<Scalars['String']['output']>;
};

/** All of the Pet Library's root query types can be found in the `Query`. This list defines all of the data you can ask for with a query. */
export type Query = {
  __typename?: 'Query';
  /** This query returns data about the `Pet`s who are currently available and not checked out. */
  allAvailablePets: Array<Pet>;
  /** This query returns data about the `Pet`s who are currently checked out and are not available. */
  allCheckedOutPets: Array<Pet>;
  /** This query returns all of the data about the customers. This is a list of `Customer` objects that are members of the Pet Library. */
  allCustomers: Array<Customer>;
  /** This query returns all of the data about the `Pet`s. This is a list of `Pet` objects that are part of the Pet Library. */
  allPets: Array<Pet>;
  /** This query returns the number of `Pet`s that are available for checkout. */
  availablePets: Scalars['Int']['output'];
  /** This query returns the number of `Pet`s that have been checked out and are not available. */
  checkedOutPets: Scalars['Int']['output'];
  /** This query will return a list of all of the customers who currently have pets checked out. */
  customersWithPets: Array<Customer>;
  /** This query returns a list of Exotic Pets, either a `Rabbit` or `Stingray`. */
  exoticPets: Array<ExoticPet>;
  /** This query returns a list of Family Pets, either a `Cat` or `Dog`. */
  familyPets: Array<FamilyPet>;
  /** When a `Customer` is logged in and has a valid authorization token, they can send the `me` query to return data about themselves. `me` will return `null` if a `Customer` is not logged in. */
  me?: Maybe<Customer>;
  /** Use this query to return one `Pet` by ID. If you're not sure what the ID is, send an `allPets` query to find the pet you want to view. */
  petById: Pet;
  /** This query returns the total number of customers that are Pet Library members. */
  totalCustomers: Scalars['Int']['output'];
  /** This query returns the total number of `Pet`s that are part of the Pet Library. */
  totalPets: Scalars['Int']['output'];
};


/** All of the Pet Library's root query types can be found in the `Query`. This list defines all of the data you can ask for with a query. */
export type QueryPetByIdArgs = {
  id: Scalars['ID']['input'];
};

/** A `Rabbit` hops and flops around. */
export type Rabbit = Pet & {
  __typename?: 'Rabbit';
  /** If this rabbit is checked out (status: CHECKEDOUT), this field will return a date string describing when the rabbit is due back. Always return rabbits on time. */
  dueDate?: Maybe<Scalars['Date']['output']>;
  /** This field will describe the favorite food of this particular rabbit. Don't assume it's always carrots. Rabbits contain multitudes. */
  favoriteFood?: Maybe<Scalars['String']['output']>;
  /** This field describes, on a scale of 1-10 how floppy this particular rabbit is. */
  floppy?: Maybe<Scalars['Int']['output']>;
  /** A unique identifier for each `Rabbit`. */
  id: Scalars['ID']['output'];
  /** If this rabbit is checked out (status: CHECKEDOUT), this field will return the `Customer` who checked this `Rabbit` out and is responsible for is security and overall happiness. */
  inCareOf?: Maybe<Customer>;
  /** The rabbit's given name. */
  name: Scalars['String']['output'];
  /** A `Photo` type. The `Photo` type is an object containing `thumb` and `full` for thumbnail and fullsize image links. */
  photo?: Maybe<Photo>;
  /** The current checkout status of the rabbit. Must one of the values of the `PetStatus` enumerator: AVAILABLE or CHECKEDOUT. */
  status?: Maybe<PetStatus>;
  /** The weight (in pounds) of the rabbit in question. */
  weight?: Maybe<Scalars['Float']['output']>;
};

/** A `Stingray` is a cartilaginous fish related to sharks common to coastal tropical and subtropical waters that the Pet Library will let you take home for some reason. */
export type Stingray = Pet & {
  __typename?: 'Stingray';
  /** Is this stingray chill? This will tell you how chill on a scale of 1 (least chill) - 10 (most chill). */
  chill?: Maybe<Scalars['Int']['output']>;
  /** If this stingray is checked out (status: CHECKEDOUT), this field will return a date string describing when the stingray is due back. Always return stingrays on time. */
  dueDate?: Maybe<Scalars['Date']['output']>;
  /** Is this stingray fast? If so, this field will return `true`. */
  fast?: Maybe<Scalars['Boolean']['output']>;
  /** A unique identifier for each `Stingray`. */
  id: Scalars['ID']['output'];
  /** If this stingray is checked out (status: CHECKEDOUT), this field will return the `Customer` who checked this `Stingray` out and is responsible for is security and overall happiness */
  inCareOf?: Maybe<Customer>;
  /** The stingray's given name. */
  name: Scalars['String']['output'];
  /** A `Photo` type. The `Photo` type is an object containing `thumb` and `full` for thumbnail and fullsize image links. */
  photo?: Maybe<Photo>;
  /** The current checkout status of the stingray. Must one of the values of the `PetStatus` enumerator: AVAILABLE or CHECKEDOUT. */
  status?: Maybe<PetStatus>;
  /** The weight (in pounds) of the stingray in question. */
  weight?: Maybe<Scalars['Float']['output']>;
};

export type Subscription = {
  __typename?: 'Subscription';
  petReturned?: Maybe<Checkout>;
};

export type CheckinInMutationVariables = Exact<{
  checkInId: Scalars['ID']['input'];
}>;


export type CheckinInMutation = { __typename?: 'Mutation', checkIn: { __typename?: 'Checkout', pet?: { __typename?: 'Cat', name: string, id: string } | { __typename?: 'Dog', name: string, id: string } | { __typename?: 'Rabbit', name: string, id: string } | { __typename?: 'Stingray', name: string, id: string } | null } };

export type CreateAccountMutationVariables = Exact<{
  account: CreateAccountInput;
}>;


export type CreateAccountMutation = { __typename?: 'Mutation', createAccount?: { __typename?: 'Customer', name: string } | null };

export type LogInMutationVariables = Exact<{
  username: Scalars['ID']['input'];
  password: Scalars['String']['input'];
}>;


export type LogInMutation = { __typename?: 'Mutation', logIn: { __typename?: 'LogInPayload', token: string, customer?: { __typename?: 'Customer', username: string, name: string } | null } };

export type AllAvailablePetsQueryVariables = Exact<{ [key: string]: never; }>;


export type AllAvailablePetsQuery = { __typename?: 'Query', allAvailablePets: Array<{ __typename?: 'Cat', id: string, name: string } | { __typename?: 'Dog', id: string, name: string } | { __typename?: 'Rabbit', id: string, name: string } | { __typename?: 'Stingray', id: string, name: string }> };

export type ExampleQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type ExampleQueryQuery = { __typename?: 'Query', allPets: Array<{ __typename?: 'Cat', id: string, name: string, weight?: number | null } | { __typename?: 'Dog', id: string, name: string, weight?: number | null } | { __typename?: 'Rabbit', id: string, name: string, weight?: number | null } | { __typename?: 'Stingray', id: string, name: string, weight?: number | null }> };

export type AvailablePetsQueryVariables = Exact<{ [key: string]: never; }>;


export type AvailablePetsQuery = { __typename?: 'Query', availablePets: number };

export type PetByIdQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type PetByIdQuery = { __typename?: 'Query', petById: { __typename?: 'Cat', id: string, name: string } | { __typename?: 'Dog', id: string, name: string } | { __typename?: 'Rabbit', id: string, name: string } | { __typename?: 'Stingray', id: string, name: string } };


export const CheckinInDocument = gql`
    mutation checkinIn($checkInId: ID!) {
  checkIn(id: $checkInId) {
    pet {
      name
      id
    }
  }
}
    `;
export type CheckinInMutationFn = Apollo.MutationFunction<CheckinInMutation, CheckinInMutationVariables>;

/**
 * __useCheckinInMutation__
 *
 * To run a mutation, you first call `useCheckinInMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCheckinInMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [checkinInMutation, { data, loading, error }] = useCheckinInMutation({
 *   variables: {
 *      checkInId: // value for 'checkInId'
 *   },
 * });
 */
export function useCheckinInMutation(baseOptions?: Apollo.MutationHookOptions<CheckinInMutation, CheckinInMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CheckinInMutation, CheckinInMutationVariables>(CheckinInDocument, options);
      }
export type CheckinInMutationHookResult = ReturnType<typeof useCheckinInMutation>;
export type CheckinInMutationResult = Apollo.MutationResult<CheckinInMutation>;
export type CheckinInMutationOptions = Apollo.BaseMutationOptions<CheckinInMutation, CheckinInMutationVariables>;
export const CreateAccountDocument = gql`
    mutation createAccount($account: CreateAccountInput!) {
  createAccount(input: $account) {
    name
  }
}
    `;
export type CreateAccountMutationFn = Apollo.MutationFunction<CreateAccountMutation, CreateAccountMutationVariables>;

/**
 * __useCreateAccountMutation__
 *
 * To run a mutation, you first call `useCreateAccountMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateAccountMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createAccountMutation, { data, loading, error }] = useCreateAccountMutation({
 *   variables: {
 *      account: // value for 'account'
 *   },
 * });
 */
export function useCreateAccountMutation(baseOptions?: Apollo.MutationHookOptions<CreateAccountMutation, CreateAccountMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateAccountMutation, CreateAccountMutationVariables>(CreateAccountDocument, options);
      }
export type CreateAccountMutationHookResult = ReturnType<typeof useCreateAccountMutation>;
export type CreateAccountMutationResult = Apollo.MutationResult<CreateAccountMutation>;
export type CreateAccountMutationOptions = Apollo.BaseMutationOptions<CreateAccountMutation, CreateAccountMutationVariables>;
export const LogInDocument = gql`
    mutation logIn($username: ID!, $password: String!) {
  logIn(username: $username, password: $password) {
    token
    customer {
      username
      name
    }
  }
}
    `;
export type LogInMutationFn = Apollo.MutationFunction<LogInMutation, LogInMutationVariables>;

/**
 * __useLogInMutation__
 *
 * To run a mutation, you first call `useLogInMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogInMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logInMutation, { data, loading, error }] = useLogInMutation({
 *   variables: {
 *      username: // value for 'username'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLogInMutation(baseOptions?: Apollo.MutationHookOptions<LogInMutation, LogInMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LogInMutation, LogInMutationVariables>(LogInDocument, options);
      }
export type LogInMutationHookResult = ReturnType<typeof useLogInMutation>;
export type LogInMutationResult = Apollo.MutationResult<LogInMutation>;
export type LogInMutationOptions = Apollo.BaseMutationOptions<LogInMutation, LogInMutationVariables>;
export const AllAvailablePetsDocument = gql`
    query allAvailablePets {
  allAvailablePets {
    id
    name
  }
}
    `;

/**
 * __useAllAvailablePetsQuery__
 *
 * To run a query within a React component, call `useAllAvailablePetsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllAvailablePetsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllAvailablePetsQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllAvailablePetsQuery(baseOptions?: Apollo.QueryHookOptions<AllAvailablePetsQuery, AllAvailablePetsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AllAvailablePetsQuery, AllAvailablePetsQueryVariables>(AllAvailablePetsDocument, options);
      }
export function useAllAvailablePetsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllAvailablePetsQuery, AllAvailablePetsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AllAvailablePetsQuery, AllAvailablePetsQueryVariables>(AllAvailablePetsDocument, options);
        }
export function useAllAvailablePetsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<AllAvailablePetsQuery, AllAvailablePetsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<AllAvailablePetsQuery, AllAvailablePetsQueryVariables>(AllAvailablePetsDocument, options);
        }
export type AllAvailablePetsQueryHookResult = ReturnType<typeof useAllAvailablePetsQuery>;
export type AllAvailablePetsLazyQueryHookResult = ReturnType<typeof useAllAvailablePetsLazyQuery>;
export type AllAvailablePetsSuspenseQueryHookResult = ReturnType<typeof useAllAvailablePetsSuspenseQuery>;
export type AllAvailablePetsQueryResult = Apollo.QueryResult<AllAvailablePetsQuery, AllAvailablePetsQueryVariables>;
export const ExampleQueryDocument = gql`
    query ExampleQuery {
  allPets {
    id
    name
    weight
  }
}
    `;

/**
 * __useExampleQueryQuery__
 *
 * To run a query within a React component, call `useExampleQueryQuery` and pass it any options that fit your needs.
 * When your component renders, `useExampleQueryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useExampleQueryQuery({
 *   variables: {
 *   },
 * });
 */
export function useExampleQueryQuery(baseOptions?: Apollo.QueryHookOptions<ExampleQueryQuery, ExampleQueryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ExampleQueryQuery, ExampleQueryQueryVariables>(ExampleQueryDocument, options);
      }
export function useExampleQueryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ExampleQueryQuery, ExampleQueryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ExampleQueryQuery, ExampleQueryQueryVariables>(ExampleQueryDocument, options);
        }
export function useExampleQuerySuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<ExampleQueryQuery, ExampleQueryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<ExampleQueryQuery, ExampleQueryQueryVariables>(ExampleQueryDocument, options);
        }
export type ExampleQueryQueryHookResult = ReturnType<typeof useExampleQueryQuery>;
export type ExampleQueryLazyQueryHookResult = ReturnType<typeof useExampleQueryLazyQuery>;
export type ExampleQuerySuspenseQueryHookResult = ReturnType<typeof useExampleQuerySuspenseQuery>;
export type ExampleQueryQueryResult = Apollo.QueryResult<ExampleQueryQuery, ExampleQueryQueryVariables>;
export const AvailablePetsDocument = gql`
    query availablePets {
  availablePets
}
    `;

/**
 * __useAvailablePetsQuery__
 *
 * To run a query within a React component, call `useAvailablePetsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAvailablePetsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAvailablePetsQuery({
 *   variables: {
 *   },
 * });
 */
export function useAvailablePetsQuery(baseOptions?: Apollo.QueryHookOptions<AvailablePetsQuery, AvailablePetsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AvailablePetsQuery, AvailablePetsQueryVariables>(AvailablePetsDocument, options);
      }
export function useAvailablePetsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AvailablePetsQuery, AvailablePetsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AvailablePetsQuery, AvailablePetsQueryVariables>(AvailablePetsDocument, options);
        }
export function useAvailablePetsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<AvailablePetsQuery, AvailablePetsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<AvailablePetsQuery, AvailablePetsQueryVariables>(AvailablePetsDocument, options);
        }
export type AvailablePetsQueryHookResult = ReturnType<typeof useAvailablePetsQuery>;
export type AvailablePetsLazyQueryHookResult = ReturnType<typeof useAvailablePetsLazyQuery>;
export type AvailablePetsSuspenseQueryHookResult = ReturnType<typeof useAvailablePetsSuspenseQuery>;
export type AvailablePetsQueryResult = Apollo.QueryResult<AvailablePetsQuery, AvailablePetsQueryVariables>;
export const PetByIdDocument = gql`
    query petById($id: ID!) {
  petById(id: $id) {
    id
    name
  }
}
    `;

/**
 * __usePetByIdQuery__
 *
 * To run a query within a React component, call `usePetByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `usePetByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePetByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function usePetByIdQuery(baseOptions: Apollo.QueryHookOptions<PetByIdQuery, PetByIdQueryVariables> & ({ variables: PetByIdQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PetByIdQuery, PetByIdQueryVariables>(PetByIdDocument, options);
      }
export function usePetByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PetByIdQuery, PetByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PetByIdQuery, PetByIdQueryVariables>(PetByIdDocument, options);
        }
export function usePetByIdSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<PetByIdQuery, PetByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<PetByIdQuery, PetByIdQueryVariables>(PetByIdDocument, options);
        }
export type PetByIdQueryHookResult = ReturnType<typeof usePetByIdQuery>;
export type PetByIdLazyQueryHookResult = ReturnType<typeof usePetByIdLazyQuery>;
export type PetByIdSuspenseQueryHookResult = ReturnType<typeof usePetByIdSuspenseQuery>;
export type PetByIdQueryResult = Apollo.QueryResult<PetByIdQuery, PetByIdQueryVariables>;