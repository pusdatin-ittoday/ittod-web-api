
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model competition
 * 
 */
export type competition = $Result.DefaultSelection<Prisma.$competitionPayload>
/**
 * Model competition_announcement
 * 
 */
export type competition_announcement = $Result.DefaultSelection<Prisma.$competition_announcementPayload>
/**
 * Model competition_submission
 * 
 */
export type competition_submission = $Result.DefaultSelection<Prisma.$competition_submissionPayload>
/**
 * Model competition_timeline
 * 
 */
export type competition_timeline = $Result.DefaultSelection<Prisma.$competition_timelinePayload>
/**
 * Model media
 * 
 */
export type media = $Result.DefaultSelection<Prisma.$mediaPayload>
/**
 * Model team
 * 
 */
export type team = $Result.DefaultSelection<Prisma.$teamPayload>
/**
 * Model team_member
 * 
 */
export type team_member = $Result.DefaultSelection<Prisma.$team_memberPayload>
/**
 * Model user
 * 
 */
export type user = $Result.DefaultSelection<Prisma.$userPayload>
/**
 * Model user_identity
 * 
 */
export type user_identity = $Result.DefaultSelection<Prisma.$user_identityPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const education_enum: {
  sma: 'sma',
  s1: 's1',
  d3: 'd3',
  d4: 'd4'
};

export type education_enum = (typeof education_enum)[keyof typeof education_enum]


export const team_member_role_enum: {
  leader: 'leader',
  member: 'member'
};

export type team_member_role_enum = (typeof team_member_role_enum)[keyof typeof team_member_role_enum]


export const user_identity_provider_enum: {
  google: 'google',
  basic: 'basic',
  github: 'github'
};

export type user_identity_provider_enum = (typeof user_identity_provider_enum)[keyof typeof user_identity_provider_enum]


export const user_identity_role_enum: {
  admin: 'admin',
  user: 'user'
};

export type user_identity_role_enum = (typeof user_identity_role_enum)[keyof typeof user_identity_role_enum]


export const media_grouping_enum: {
  payments: 'payments',
  dokum_tahun_lalu: 'dokum_tahun_lalu',
  competition_submission: 'competition_submission',
  twibbon: 'twibbon'
};

export type media_grouping_enum = (typeof media_grouping_enum)[keyof typeof media_grouping_enum]


export const media_type_enum: {
  image: 'image',
  pdf: 'pdf'
};

export type media_type_enum = (typeof media_type_enum)[keyof typeof media_type_enum]

}

export type education_enum = $Enums.education_enum

export const education_enum: typeof $Enums.education_enum

export type team_member_role_enum = $Enums.team_member_role_enum

export const team_member_role_enum: typeof $Enums.team_member_role_enum

export type user_identity_provider_enum = $Enums.user_identity_provider_enum

export const user_identity_provider_enum: typeof $Enums.user_identity_provider_enum

export type user_identity_role_enum = $Enums.user_identity_role_enum

export const user_identity_role_enum: typeof $Enums.user_identity_role_enum

export type media_grouping_enum = $Enums.media_grouping_enum

export const media_grouping_enum: typeof $Enums.media_grouping_enum

export type media_type_enum = $Enums.media_type_enum

export const media_type_enum: typeof $Enums.media_type_enum

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Competitions
 * const competitions = await prisma.competition.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Competitions
   * const competitions = await prisma.competition.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.competition`: Exposes CRUD operations for the **competition** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Competitions
    * const competitions = await prisma.competition.findMany()
    * ```
    */
  get competition(): Prisma.competitionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.competition_announcement`: Exposes CRUD operations for the **competition_announcement** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Competition_announcements
    * const competition_announcements = await prisma.competition_announcement.findMany()
    * ```
    */
  get competition_announcement(): Prisma.competition_announcementDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.competition_submission`: Exposes CRUD operations for the **competition_submission** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Competition_submissions
    * const competition_submissions = await prisma.competition_submission.findMany()
    * ```
    */
  get competition_submission(): Prisma.competition_submissionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.competition_timeline`: Exposes CRUD operations for the **competition_timeline** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Competition_timelines
    * const competition_timelines = await prisma.competition_timeline.findMany()
    * ```
    */
  get competition_timeline(): Prisma.competition_timelineDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.media`: Exposes CRUD operations for the **media** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Media
    * const media = await prisma.media.findMany()
    * ```
    */
  get media(): Prisma.mediaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.team`: Exposes CRUD operations for the **team** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Teams
    * const teams = await prisma.team.findMany()
    * ```
    */
  get team(): Prisma.teamDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.team_member`: Exposes CRUD operations for the **team_member** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Team_members
    * const team_members = await prisma.team_member.findMany()
    * ```
    */
  get team_member(): Prisma.team_memberDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **user** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.userDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user_identity`: Exposes CRUD operations for the **user_identity** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more User_identities
    * const user_identities = await prisma.user_identity.findMany()
    * ```
    */
  get user_identity(): Prisma.user_identityDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    competition: 'competition',
    competition_announcement: 'competition_announcement',
    competition_submission: 'competition_submission',
    competition_timeline: 'competition_timeline',
    media: 'media',
    team: 'team',
    team_member: 'team_member',
    user: 'user',
    user_identity: 'user_identity'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "competition" | "competition_announcement" | "competition_submission" | "competition_timeline" | "media" | "team" | "team_member" | "user" | "user_identity"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      competition: {
        payload: Prisma.$competitionPayload<ExtArgs>
        fields: Prisma.competitionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.competitionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$competitionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.competitionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$competitionPayload>
          }
          findFirst: {
            args: Prisma.competitionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$competitionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.competitionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$competitionPayload>
          }
          findMany: {
            args: Prisma.competitionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$competitionPayload>[]
          }
          create: {
            args: Prisma.competitionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$competitionPayload>
          }
          createMany: {
            args: Prisma.competitionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.competitionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$competitionPayload>
          }
          update: {
            args: Prisma.competitionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$competitionPayload>
          }
          deleteMany: {
            args: Prisma.competitionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.competitionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.competitionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$competitionPayload>
          }
          aggregate: {
            args: Prisma.CompetitionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCompetition>
          }
          groupBy: {
            args: Prisma.competitionGroupByArgs<ExtArgs>
            result: $Utils.Optional<CompetitionGroupByOutputType>[]
          }
          count: {
            args: Prisma.competitionCountArgs<ExtArgs>
            result: $Utils.Optional<CompetitionCountAggregateOutputType> | number
          }
        }
      }
      competition_announcement: {
        payload: Prisma.$competition_announcementPayload<ExtArgs>
        fields: Prisma.competition_announcementFieldRefs
        operations: {
          findUnique: {
            args: Prisma.competition_announcementFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$competition_announcementPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.competition_announcementFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$competition_announcementPayload>
          }
          findFirst: {
            args: Prisma.competition_announcementFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$competition_announcementPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.competition_announcementFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$competition_announcementPayload>
          }
          findMany: {
            args: Prisma.competition_announcementFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$competition_announcementPayload>[]
          }
          create: {
            args: Prisma.competition_announcementCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$competition_announcementPayload>
          }
          createMany: {
            args: Prisma.competition_announcementCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.competition_announcementDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$competition_announcementPayload>
          }
          update: {
            args: Prisma.competition_announcementUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$competition_announcementPayload>
          }
          deleteMany: {
            args: Prisma.competition_announcementDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.competition_announcementUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.competition_announcementUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$competition_announcementPayload>
          }
          aggregate: {
            args: Prisma.Competition_announcementAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCompetition_announcement>
          }
          groupBy: {
            args: Prisma.competition_announcementGroupByArgs<ExtArgs>
            result: $Utils.Optional<Competition_announcementGroupByOutputType>[]
          }
          count: {
            args: Prisma.competition_announcementCountArgs<ExtArgs>
            result: $Utils.Optional<Competition_announcementCountAggregateOutputType> | number
          }
        }
      }
      competition_submission: {
        payload: Prisma.$competition_submissionPayload<ExtArgs>
        fields: Prisma.competition_submissionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.competition_submissionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$competition_submissionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.competition_submissionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$competition_submissionPayload>
          }
          findFirst: {
            args: Prisma.competition_submissionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$competition_submissionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.competition_submissionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$competition_submissionPayload>
          }
          findMany: {
            args: Prisma.competition_submissionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$competition_submissionPayload>[]
          }
          create: {
            args: Prisma.competition_submissionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$competition_submissionPayload>
          }
          createMany: {
            args: Prisma.competition_submissionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.competition_submissionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$competition_submissionPayload>
          }
          update: {
            args: Prisma.competition_submissionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$competition_submissionPayload>
          }
          deleteMany: {
            args: Prisma.competition_submissionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.competition_submissionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.competition_submissionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$competition_submissionPayload>
          }
          aggregate: {
            args: Prisma.Competition_submissionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCompetition_submission>
          }
          groupBy: {
            args: Prisma.competition_submissionGroupByArgs<ExtArgs>
            result: $Utils.Optional<Competition_submissionGroupByOutputType>[]
          }
          count: {
            args: Prisma.competition_submissionCountArgs<ExtArgs>
            result: $Utils.Optional<Competition_submissionCountAggregateOutputType> | number
          }
        }
      }
      competition_timeline: {
        payload: Prisma.$competition_timelinePayload<ExtArgs>
        fields: Prisma.competition_timelineFieldRefs
        operations: {
          findUnique: {
            args: Prisma.competition_timelineFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$competition_timelinePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.competition_timelineFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$competition_timelinePayload>
          }
          findFirst: {
            args: Prisma.competition_timelineFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$competition_timelinePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.competition_timelineFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$competition_timelinePayload>
          }
          findMany: {
            args: Prisma.competition_timelineFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$competition_timelinePayload>[]
          }
          create: {
            args: Prisma.competition_timelineCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$competition_timelinePayload>
          }
          createMany: {
            args: Prisma.competition_timelineCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.competition_timelineDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$competition_timelinePayload>
          }
          update: {
            args: Prisma.competition_timelineUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$competition_timelinePayload>
          }
          deleteMany: {
            args: Prisma.competition_timelineDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.competition_timelineUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.competition_timelineUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$competition_timelinePayload>
          }
          aggregate: {
            args: Prisma.Competition_timelineAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCompetition_timeline>
          }
          groupBy: {
            args: Prisma.competition_timelineGroupByArgs<ExtArgs>
            result: $Utils.Optional<Competition_timelineGroupByOutputType>[]
          }
          count: {
            args: Prisma.competition_timelineCountArgs<ExtArgs>
            result: $Utils.Optional<Competition_timelineCountAggregateOutputType> | number
          }
        }
      }
      media: {
        payload: Prisma.$mediaPayload<ExtArgs>
        fields: Prisma.mediaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.mediaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mediaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.mediaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mediaPayload>
          }
          findFirst: {
            args: Prisma.mediaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mediaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.mediaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mediaPayload>
          }
          findMany: {
            args: Prisma.mediaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mediaPayload>[]
          }
          create: {
            args: Prisma.mediaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mediaPayload>
          }
          createMany: {
            args: Prisma.mediaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.mediaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mediaPayload>
          }
          update: {
            args: Prisma.mediaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mediaPayload>
          }
          deleteMany: {
            args: Prisma.mediaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.mediaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.mediaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mediaPayload>
          }
          aggregate: {
            args: Prisma.MediaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMedia>
          }
          groupBy: {
            args: Prisma.mediaGroupByArgs<ExtArgs>
            result: $Utils.Optional<MediaGroupByOutputType>[]
          }
          count: {
            args: Prisma.mediaCountArgs<ExtArgs>
            result: $Utils.Optional<MediaCountAggregateOutputType> | number
          }
        }
      }
      team: {
        payload: Prisma.$teamPayload<ExtArgs>
        fields: Prisma.teamFieldRefs
        operations: {
          findUnique: {
            args: Prisma.teamFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$teamPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.teamFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$teamPayload>
          }
          findFirst: {
            args: Prisma.teamFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$teamPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.teamFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$teamPayload>
          }
          findMany: {
            args: Prisma.teamFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$teamPayload>[]
          }
          create: {
            args: Prisma.teamCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$teamPayload>
          }
          createMany: {
            args: Prisma.teamCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.teamDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$teamPayload>
          }
          update: {
            args: Prisma.teamUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$teamPayload>
          }
          deleteMany: {
            args: Prisma.teamDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.teamUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.teamUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$teamPayload>
          }
          aggregate: {
            args: Prisma.TeamAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTeam>
          }
          groupBy: {
            args: Prisma.teamGroupByArgs<ExtArgs>
            result: $Utils.Optional<TeamGroupByOutputType>[]
          }
          count: {
            args: Prisma.teamCountArgs<ExtArgs>
            result: $Utils.Optional<TeamCountAggregateOutputType> | number
          }
        }
      }
      team_member: {
        payload: Prisma.$team_memberPayload<ExtArgs>
        fields: Prisma.team_memberFieldRefs
        operations: {
          findUnique: {
            args: Prisma.team_memberFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$team_memberPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.team_memberFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$team_memberPayload>
          }
          findFirst: {
            args: Prisma.team_memberFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$team_memberPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.team_memberFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$team_memberPayload>
          }
          findMany: {
            args: Prisma.team_memberFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$team_memberPayload>[]
          }
          create: {
            args: Prisma.team_memberCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$team_memberPayload>
          }
          createMany: {
            args: Prisma.team_memberCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.team_memberDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$team_memberPayload>
          }
          update: {
            args: Prisma.team_memberUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$team_memberPayload>
          }
          deleteMany: {
            args: Prisma.team_memberDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.team_memberUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.team_memberUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$team_memberPayload>
          }
          aggregate: {
            args: Prisma.Team_memberAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTeam_member>
          }
          groupBy: {
            args: Prisma.team_memberGroupByArgs<ExtArgs>
            result: $Utils.Optional<Team_memberGroupByOutputType>[]
          }
          count: {
            args: Prisma.team_memberCountArgs<ExtArgs>
            result: $Utils.Optional<Team_memberCountAggregateOutputType> | number
          }
        }
      }
      user: {
        payload: Prisma.$userPayload<ExtArgs>
        fields: Prisma.userFieldRefs
        operations: {
          findUnique: {
            args: Prisma.userFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.userFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findFirst: {
            args: Prisma.userFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.userFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findMany: {
            args: Prisma.userFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          create: {
            args: Prisma.userCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          createMany: {
            args: Prisma.userCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.userDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          update: {
            args: Prisma.userUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          deleteMany: {
            args: Prisma.userDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.userUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.userUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.userGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.userCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      user_identity: {
        payload: Prisma.$user_identityPayload<ExtArgs>
        fields: Prisma.user_identityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.user_identityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_identityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.user_identityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_identityPayload>
          }
          findFirst: {
            args: Prisma.user_identityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_identityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.user_identityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_identityPayload>
          }
          findMany: {
            args: Prisma.user_identityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_identityPayload>[]
          }
          create: {
            args: Prisma.user_identityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_identityPayload>
          }
          createMany: {
            args: Prisma.user_identityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.user_identityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_identityPayload>
          }
          update: {
            args: Prisma.user_identityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_identityPayload>
          }
          deleteMany: {
            args: Prisma.user_identityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.user_identityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.user_identityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_identityPayload>
          }
          aggregate: {
            args: Prisma.User_identityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser_identity>
          }
          groupBy: {
            args: Prisma.user_identityGroupByArgs<ExtArgs>
            result: $Utils.Optional<User_identityGroupByOutputType>[]
          }
          count: {
            args: Prisma.user_identityCountArgs<ExtArgs>
            result: $Utils.Optional<User_identityCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    competition?: competitionOmit
    competition_announcement?: competition_announcementOmit
    competition_submission?: competition_submissionOmit
    competition_timeline?: competition_timelineOmit
    media?: mediaOmit
    team?: teamOmit
    team_member?: team_memberOmit
    user?: userOmit
    user_identity?: user_identityOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type CompetitionCountOutputType
   */

  export type CompetitionCountOutputType = {
    announcements: number
    submissions: number
    timelines: number
    teams: number
  }

  export type CompetitionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    announcements?: boolean | CompetitionCountOutputTypeCountAnnouncementsArgs
    submissions?: boolean | CompetitionCountOutputTypeCountSubmissionsArgs
    timelines?: boolean | CompetitionCountOutputTypeCountTimelinesArgs
    teams?: boolean | CompetitionCountOutputTypeCountTeamsArgs
  }

  // Custom InputTypes
  /**
   * CompetitionCountOutputType without action
   */
  export type CompetitionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompetitionCountOutputType
     */
    select?: CompetitionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CompetitionCountOutputType without action
   */
  export type CompetitionCountOutputTypeCountAnnouncementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: competition_announcementWhereInput
  }

  /**
   * CompetitionCountOutputType without action
   */
  export type CompetitionCountOutputTypeCountSubmissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: competition_submissionWhereInput
  }

  /**
   * CompetitionCountOutputType without action
   */
  export type CompetitionCountOutputTypeCountTimelinesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: competition_timelineWhereInput
  }

  /**
   * CompetitionCountOutputType without action
   */
  export type CompetitionCountOutputTypeCountTeamsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: teamWhereInput
  }


  /**
   * Count Type TeamCountOutputType
   */

  export type TeamCountOutputType = {
    members: number
    submission: number
  }

  export type TeamCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    members?: boolean | TeamCountOutputTypeCountMembersArgs
    submission?: boolean | TeamCountOutputTypeCountSubmissionArgs
  }

  // Custom InputTypes
  /**
   * TeamCountOutputType without action
   */
  export type TeamCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamCountOutputType
     */
    select?: TeamCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TeamCountOutputType without action
   */
  export type TeamCountOutputTypeCountMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: team_memberWhereInput
  }

  /**
   * TeamCountOutputType without action
   */
  export type TeamCountOutputTypeCountSubmissionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: competition_submissionWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    uploaded: number
    announcements: number
    member: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    uploaded?: boolean | UserCountOutputTypeCountUploadedArgs
    announcements?: boolean | UserCountOutputTypeCountAnnouncementsArgs
    member?: boolean | UserCountOutputTypeCountMemberArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUploadedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: mediaWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAnnouncementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: competition_announcementWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMemberArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: team_memberWhereInput
  }


  /**
   * Models
   */

  /**
   * Model competition
   */

  export type AggregateCompetition = {
    _count: CompetitionCountAggregateOutputType | null
    _avg: CompetitionAvgAggregateOutputType | null
    _sum: CompetitionSumAggregateOutputType | null
    _min: CompetitionMinAggregateOutputType | null
    _max: CompetitionMaxAggregateOutputType | null
  }

  export type CompetitionAvgAggregateOutputType = {
    max_team_member: number | null
  }

  export type CompetitionSumAggregateOutputType = {
    max_team_member: number | null
  }

  export type CompetitionMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    max_team_member: number | null
    guide_book_url: string | null
  }

  export type CompetitionMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    max_team_member: number | null
    guide_book_url: string | null
  }

  export type CompetitionCountAggregateOutputType = {
    id: number
    title: number
    description: number
    max_team_member: number
    guide_book_url: number
    _all: number
  }


  export type CompetitionAvgAggregateInputType = {
    max_team_member?: true
  }

  export type CompetitionSumAggregateInputType = {
    max_team_member?: true
  }

  export type CompetitionMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    max_team_member?: true
    guide_book_url?: true
  }

  export type CompetitionMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    max_team_member?: true
    guide_book_url?: true
  }

  export type CompetitionCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    max_team_member?: true
    guide_book_url?: true
    _all?: true
  }

  export type CompetitionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which competition to aggregate.
     */
    where?: competitionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of competitions to fetch.
     */
    orderBy?: competitionOrderByWithRelationInput | competitionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: competitionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` competitions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` competitions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned competitions
    **/
    _count?: true | CompetitionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CompetitionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CompetitionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CompetitionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CompetitionMaxAggregateInputType
  }

  export type GetCompetitionAggregateType<T extends CompetitionAggregateArgs> = {
        [P in keyof T & keyof AggregateCompetition]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompetition[P]>
      : GetScalarType<T[P], AggregateCompetition[P]>
  }




  export type competitionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: competitionWhereInput
    orderBy?: competitionOrderByWithAggregationInput | competitionOrderByWithAggregationInput[]
    by: CompetitionScalarFieldEnum[] | CompetitionScalarFieldEnum
    having?: competitionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CompetitionCountAggregateInputType | true
    _avg?: CompetitionAvgAggregateInputType
    _sum?: CompetitionSumAggregateInputType
    _min?: CompetitionMinAggregateInputType
    _max?: CompetitionMaxAggregateInputType
  }

  export type CompetitionGroupByOutputType = {
    id: string
    title: string
    description: string
    max_team_member: number
    guide_book_url: string
    _count: CompetitionCountAggregateOutputType | null
    _avg: CompetitionAvgAggregateOutputType | null
    _sum: CompetitionSumAggregateOutputType | null
    _min: CompetitionMinAggregateOutputType | null
    _max: CompetitionMaxAggregateOutputType | null
  }

  type GetCompetitionGroupByPayload<T extends competitionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CompetitionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CompetitionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CompetitionGroupByOutputType[P]>
            : GetScalarType<T[P], CompetitionGroupByOutputType[P]>
        }
      >
    >


  export type competitionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    max_team_member?: boolean
    guide_book_url?: boolean
    announcements?: boolean | competition$announcementsArgs<ExtArgs>
    submissions?: boolean | competition$submissionsArgs<ExtArgs>
    timelines?: boolean | competition$timelinesArgs<ExtArgs>
    teams?: boolean | competition$teamsArgs<ExtArgs>
    _count?: boolean | CompetitionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["competition"]>



  export type competitionSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    max_team_member?: boolean
    guide_book_url?: boolean
  }

  export type competitionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "max_team_member" | "guide_book_url", ExtArgs["result"]["competition"]>
  export type competitionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    announcements?: boolean | competition$announcementsArgs<ExtArgs>
    submissions?: boolean | competition$submissionsArgs<ExtArgs>
    timelines?: boolean | competition$timelinesArgs<ExtArgs>
    teams?: boolean | competition$teamsArgs<ExtArgs>
    _count?: boolean | CompetitionCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $competitionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "competition"
    objects: {
      announcements: Prisma.$competition_announcementPayload<ExtArgs>[]
      submissions: Prisma.$competition_submissionPayload<ExtArgs>[]
      timelines: Prisma.$competition_timelinePayload<ExtArgs>[]
      teams: Prisma.$teamPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string
      max_team_member: number
      guide_book_url: string
    }, ExtArgs["result"]["competition"]>
    composites: {}
  }

  type competitionGetPayload<S extends boolean | null | undefined | competitionDefaultArgs> = $Result.GetResult<Prisma.$competitionPayload, S>

  type competitionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<competitionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CompetitionCountAggregateInputType | true
    }

  export interface competitionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['competition'], meta: { name: 'competition' } }
    /**
     * Find zero or one Competition that matches the filter.
     * @param {competitionFindUniqueArgs} args - Arguments to find a Competition
     * @example
     * // Get one Competition
     * const competition = await prisma.competition.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends competitionFindUniqueArgs>(args: SelectSubset<T, competitionFindUniqueArgs<ExtArgs>>): Prisma__competitionClient<$Result.GetResult<Prisma.$competitionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Competition that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {competitionFindUniqueOrThrowArgs} args - Arguments to find a Competition
     * @example
     * // Get one Competition
     * const competition = await prisma.competition.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends competitionFindUniqueOrThrowArgs>(args: SelectSubset<T, competitionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__competitionClient<$Result.GetResult<Prisma.$competitionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Competition that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {competitionFindFirstArgs} args - Arguments to find a Competition
     * @example
     * // Get one Competition
     * const competition = await prisma.competition.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends competitionFindFirstArgs>(args?: SelectSubset<T, competitionFindFirstArgs<ExtArgs>>): Prisma__competitionClient<$Result.GetResult<Prisma.$competitionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Competition that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {competitionFindFirstOrThrowArgs} args - Arguments to find a Competition
     * @example
     * // Get one Competition
     * const competition = await prisma.competition.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends competitionFindFirstOrThrowArgs>(args?: SelectSubset<T, competitionFindFirstOrThrowArgs<ExtArgs>>): Prisma__competitionClient<$Result.GetResult<Prisma.$competitionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Competitions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {competitionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Competitions
     * const competitions = await prisma.competition.findMany()
     * 
     * // Get first 10 Competitions
     * const competitions = await prisma.competition.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const competitionWithIdOnly = await prisma.competition.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends competitionFindManyArgs>(args?: SelectSubset<T, competitionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$competitionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Competition.
     * @param {competitionCreateArgs} args - Arguments to create a Competition.
     * @example
     * // Create one Competition
     * const Competition = await prisma.competition.create({
     *   data: {
     *     // ... data to create a Competition
     *   }
     * })
     * 
     */
    create<T extends competitionCreateArgs>(args: SelectSubset<T, competitionCreateArgs<ExtArgs>>): Prisma__competitionClient<$Result.GetResult<Prisma.$competitionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Competitions.
     * @param {competitionCreateManyArgs} args - Arguments to create many Competitions.
     * @example
     * // Create many Competitions
     * const competition = await prisma.competition.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends competitionCreateManyArgs>(args?: SelectSubset<T, competitionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Competition.
     * @param {competitionDeleteArgs} args - Arguments to delete one Competition.
     * @example
     * // Delete one Competition
     * const Competition = await prisma.competition.delete({
     *   where: {
     *     // ... filter to delete one Competition
     *   }
     * })
     * 
     */
    delete<T extends competitionDeleteArgs>(args: SelectSubset<T, competitionDeleteArgs<ExtArgs>>): Prisma__competitionClient<$Result.GetResult<Prisma.$competitionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Competition.
     * @param {competitionUpdateArgs} args - Arguments to update one Competition.
     * @example
     * // Update one Competition
     * const competition = await prisma.competition.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends competitionUpdateArgs>(args: SelectSubset<T, competitionUpdateArgs<ExtArgs>>): Prisma__competitionClient<$Result.GetResult<Prisma.$competitionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Competitions.
     * @param {competitionDeleteManyArgs} args - Arguments to filter Competitions to delete.
     * @example
     * // Delete a few Competitions
     * const { count } = await prisma.competition.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends competitionDeleteManyArgs>(args?: SelectSubset<T, competitionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Competitions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {competitionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Competitions
     * const competition = await prisma.competition.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends competitionUpdateManyArgs>(args: SelectSubset<T, competitionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Competition.
     * @param {competitionUpsertArgs} args - Arguments to update or create a Competition.
     * @example
     * // Update or create a Competition
     * const competition = await prisma.competition.upsert({
     *   create: {
     *     // ... data to create a Competition
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Competition we want to update
     *   }
     * })
     */
    upsert<T extends competitionUpsertArgs>(args: SelectSubset<T, competitionUpsertArgs<ExtArgs>>): Prisma__competitionClient<$Result.GetResult<Prisma.$competitionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Competitions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {competitionCountArgs} args - Arguments to filter Competitions to count.
     * @example
     * // Count the number of Competitions
     * const count = await prisma.competition.count({
     *   where: {
     *     // ... the filter for the Competitions we want to count
     *   }
     * })
    **/
    count<T extends competitionCountArgs>(
      args?: Subset<T, competitionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompetitionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Competition.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompetitionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CompetitionAggregateArgs>(args: Subset<T, CompetitionAggregateArgs>): Prisma.PrismaPromise<GetCompetitionAggregateType<T>>

    /**
     * Group by Competition.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {competitionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends competitionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: competitionGroupByArgs['orderBy'] }
        : { orderBy?: competitionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, competitionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCompetitionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the competition model
   */
  readonly fields: competitionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for competition.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__competitionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    announcements<T extends competition$announcementsArgs<ExtArgs> = {}>(args?: Subset<T, competition$announcementsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$competition_announcementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    submissions<T extends competition$submissionsArgs<ExtArgs> = {}>(args?: Subset<T, competition$submissionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$competition_submissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    timelines<T extends competition$timelinesArgs<ExtArgs> = {}>(args?: Subset<T, competition$timelinesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$competition_timelinePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    teams<T extends competition$teamsArgs<ExtArgs> = {}>(args?: Subset<T, competition$teamsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$teamPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the competition model
   */
  interface competitionFieldRefs {
    readonly id: FieldRef<"competition", 'String'>
    readonly title: FieldRef<"competition", 'String'>
    readonly description: FieldRef<"competition", 'String'>
    readonly max_team_member: FieldRef<"competition", 'Int'>
    readonly guide_book_url: FieldRef<"competition", 'String'>
  }
    

  // Custom InputTypes
  /**
   * competition findUnique
   */
  export type competitionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the competition
     */
    select?: competitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the competition
     */
    omit?: competitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: competitionInclude<ExtArgs> | null
    /**
     * Filter, which competition to fetch.
     */
    where: competitionWhereUniqueInput
  }

  /**
   * competition findUniqueOrThrow
   */
  export type competitionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the competition
     */
    select?: competitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the competition
     */
    omit?: competitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: competitionInclude<ExtArgs> | null
    /**
     * Filter, which competition to fetch.
     */
    where: competitionWhereUniqueInput
  }

  /**
   * competition findFirst
   */
  export type competitionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the competition
     */
    select?: competitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the competition
     */
    omit?: competitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: competitionInclude<ExtArgs> | null
    /**
     * Filter, which competition to fetch.
     */
    where?: competitionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of competitions to fetch.
     */
    orderBy?: competitionOrderByWithRelationInput | competitionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for competitions.
     */
    cursor?: competitionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` competitions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` competitions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of competitions.
     */
    distinct?: CompetitionScalarFieldEnum | CompetitionScalarFieldEnum[]
  }

  /**
   * competition findFirstOrThrow
   */
  export type competitionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the competition
     */
    select?: competitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the competition
     */
    omit?: competitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: competitionInclude<ExtArgs> | null
    /**
     * Filter, which competition to fetch.
     */
    where?: competitionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of competitions to fetch.
     */
    orderBy?: competitionOrderByWithRelationInput | competitionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for competitions.
     */
    cursor?: competitionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` competitions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` competitions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of competitions.
     */
    distinct?: CompetitionScalarFieldEnum | CompetitionScalarFieldEnum[]
  }

  /**
   * competition findMany
   */
  export type competitionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the competition
     */
    select?: competitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the competition
     */
    omit?: competitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: competitionInclude<ExtArgs> | null
    /**
     * Filter, which competitions to fetch.
     */
    where?: competitionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of competitions to fetch.
     */
    orderBy?: competitionOrderByWithRelationInput | competitionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing competitions.
     */
    cursor?: competitionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` competitions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` competitions.
     */
    skip?: number
    distinct?: CompetitionScalarFieldEnum | CompetitionScalarFieldEnum[]
  }

  /**
   * competition create
   */
  export type competitionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the competition
     */
    select?: competitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the competition
     */
    omit?: competitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: competitionInclude<ExtArgs> | null
    /**
     * The data needed to create a competition.
     */
    data: XOR<competitionCreateInput, competitionUncheckedCreateInput>
  }

  /**
   * competition createMany
   */
  export type competitionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many competitions.
     */
    data: competitionCreateManyInput | competitionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * competition update
   */
  export type competitionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the competition
     */
    select?: competitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the competition
     */
    omit?: competitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: competitionInclude<ExtArgs> | null
    /**
     * The data needed to update a competition.
     */
    data: XOR<competitionUpdateInput, competitionUncheckedUpdateInput>
    /**
     * Choose, which competition to update.
     */
    where: competitionWhereUniqueInput
  }

  /**
   * competition updateMany
   */
  export type competitionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update competitions.
     */
    data: XOR<competitionUpdateManyMutationInput, competitionUncheckedUpdateManyInput>
    /**
     * Filter which competitions to update
     */
    where?: competitionWhereInput
    /**
     * Limit how many competitions to update.
     */
    limit?: number
  }

  /**
   * competition upsert
   */
  export type competitionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the competition
     */
    select?: competitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the competition
     */
    omit?: competitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: competitionInclude<ExtArgs> | null
    /**
     * The filter to search for the competition to update in case it exists.
     */
    where: competitionWhereUniqueInput
    /**
     * In case the competition found by the `where` argument doesn't exist, create a new competition with this data.
     */
    create: XOR<competitionCreateInput, competitionUncheckedCreateInput>
    /**
     * In case the competition was found with the provided `where` argument, update it with this data.
     */
    update: XOR<competitionUpdateInput, competitionUncheckedUpdateInput>
  }

  /**
   * competition delete
   */
  export type competitionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the competition
     */
    select?: competitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the competition
     */
    omit?: competitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: competitionInclude<ExtArgs> | null
    /**
     * Filter which competition to delete.
     */
    where: competitionWhereUniqueInput
  }

  /**
   * competition deleteMany
   */
  export type competitionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which competitions to delete
     */
    where?: competitionWhereInput
    /**
     * Limit how many competitions to delete.
     */
    limit?: number
  }

  /**
   * competition.announcements
   */
  export type competition$announcementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the competition_announcement
     */
    select?: competition_announcementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the competition_announcement
     */
    omit?: competition_announcementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: competition_announcementInclude<ExtArgs> | null
    where?: competition_announcementWhereInput
    orderBy?: competition_announcementOrderByWithRelationInput | competition_announcementOrderByWithRelationInput[]
    cursor?: competition_announcementWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Competition_announcementScalarFieldEnum | Competition_announcementScalarFieldEnum[]
  }

  /**
   * competition.submissions
   */
  export type competition$submissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the competition_submission
     */
    select?: competition_submissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the competition_submission
     */
    omit?: competition_submissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: competition_submissionInclude<ExtArgs> | null
    where?: competition_submissionWhereInput
    orderBy?: competition_submissionOrderByWithRelationInput | competition_submissionOrderByWithRelationInput[]
    cursor?: competition_submissionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Competition_submissionScalarFieldEnum | Competition_submissionScalarFieldEnum[]
  }

  /**
   * competition.timelines
   */
  export type competition$timelinesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the competition_timeline
     */
    select?: competition_timelineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the competition_timeline
     */
    omit?: competition_timelineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: competition_timelineInclude<ExtArgs> | null
    where?: competition_timelineWhereInput
    orderBy?: competition_timelineOrderByWithRelationInput | competition_timelineOrderByWithRelationInput[]
    cursor?: competition_timelineWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Competition_timelineScalarFieldEnum | Competition_timelineScalarFieldEnum[]
  }

  /**
   * competition.teams
   */
  export type competition$teamsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team
     */
    select?: teamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the team
     */
    omit?: teamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: teamInclude<ExtArgs> | null
    where?: teamWhereInput
    orderBy?: teamOrderByWithRelationInput | teamOrderByWithRelationInput[]
    cursor?: teamWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TeamScalarFieldEnum | TeamScalarFieldEnum[]
  }

  /**
   * competition without action
   */
  export type competitionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the competition
     */
    select?: competitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the competition
     */
    omit?: competitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: competitionInclude<ExtArgs> | null
  }


  /**
   * Model competition_announcement
   */

  export type AggregateCompetition_announcement = {
    _count: Competition_announcementCountAggregateOutputType | null
    _min: Competition_announcementMinAggregateOutputType | null
    _max: Competition_announcementMaxAggregateOutputType | null
  }

  export type Competition_announcementMinAggregateOutputType = {
    id: string | null
    competition_id: string | null
    author_id: string | null
    title: string | null
    description: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Competition_announcementMaxAggregateOutputType = {
    id: string | null
    competition_id: string | null
    author_id: string | null
    title: string | null
    description: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Competition_announcementCountAggregateOutputType = {
    id: number
    competition_id: number
    author_id: number
    title: number
    description: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type Competition_announcementMinAggregateInputType = {
    id?: true
    competition_id?: true
    author_id?: true
    title?: true
    description?: true
    created_at?: true
    updated_at?: true
  }

  export type Competition_announcementMaxAggregateInputType = {
    id?: true
    competition_id?: true
    author_id?: true
    title?: true
    description?: true
    created_at?: true
    updated_at?: true
  }

  export type Competition_announcementCountAggregateInputType = {
    id?: true
    competition_id?: true
    author_id?: true
    title?: true
    description?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type Competition_announcementAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which competition_announcement to aggregate.
     */
    where?: competition_announcementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of competition_announcements to fetch.
     */
    orderBy?: competition_announcementOrderByWithRelationInput | competition_announcementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: competition_announcementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` competition_announcements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` competition_announcements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned competition_announcements
    **/
    _count?: true | Competition_announcementCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Competition_announcementMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Competition_announcementMaxAggregateInputType
  }

  export type GetCompetition_announcementAggregateType<T extends Competition_announcementAggregateArgs> = {
        [P in keyof T & keyof AggregateCompetition_announcement]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompetition_announcement[P]>
      : GetScalarType<T[P], AggregateCompetition_announcement[P]>
  }




  export type competition_announcementGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: competition_announcementWhereInput
    orderBy?: competition_announcementOrderByWithAggregationInput | competition_announcementOrderByWithAggregationInput[]
    by: Competition_announcementScalarFieldEnum[] | Competition_announcementScalarFieldEnum
    having?: competition_announcementScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Competition_announcementCountAggregateInputType | true
    _min?: Competition_announcementMinAggregateInputType
    _max?: Competition_announcementMaxAggregateInputType
  }

  export type Competition_announcementGroupByOutputType = {
    id: string
    competition_id: string
    author_id: string
    title: string
    description: string
    created_at: Date
    updated_at: Date
    _count: Competition_announcementCountAggregateOutputType | null
    _min: Competition_announcementMinAggregateOutputType | null
    _max: Competition_announcementMaxAggregateOutputType | null
  }

  type GetCompetition_announcementGroupByPayload<T extends competition_announcementGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Competition_announcementGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Competition_announcementGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Competition_announcementGroupByOutputType[P]>
            : GetScalarType<T[P], Competition_announcementGroupByOutputType[P]>
        }
      >
    >


  export type competition_announcementSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    competition_id?: boolean
    author_id?: boolean
    title?: boolean
    description?: boolean
    created_at?: boolean
    updated_at?: boolean
    competition?: boolean | competitionDefaultArgs<ExtArgs>
    author?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["competition_announcement"]>



  export type competition_announcementSelectScalar = {
    id?: boolean
    competition_id?: boolean
    author_id?: boolean
    title?: boolean
    description?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type competition_announcementOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "competition_id" | "author_id" | "title" | "description" | "created_at" | "updated_at", ExtArgs["result"]["competition_announcement"]>
  export type competition_announcementInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    competition?: boolean | competitionDefaultArgs<ExtArgs>
    author?: boolean | userDefaultArgs<ExtArgs>
  }

  export type $competition_announcementPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "competition_announcement"
    objects: {
      competition: Prisma.$competitionPayload<ExtArgs>
      author: Prisma.$userPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      competition_id: string
      author_id: string
      title: string
      description: string
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["competition_announcement"]>
    composites: {}
  }

  type competition_announcementGetPayload<S extends boolean | null | undefined | competition_announcementDefaultArgs> = $Result.GetResult<Prisma.$competition_announcementPayload, S>

  type competition_announcementCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<competition_announcementFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Competition_announcementCountAggregateInputType | true
    }

  export interface competition_announcementDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['competition_announcement'], meta: { name: 'competition_announcement' } }
    /**
     * Find zero or one Competition_announcement that matches the filter.
     * @param {competition_announcementFindUniqueArgs} args - Arguments to find a Competition_announcement
     * @example
     * // Get one Competition_announcement
     * const competition_announcement = await prisma.competition_announcement.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends competition_announcementFindUniqueArgs>(args: SelectSubset<T, competition_announcementFindUniqueArgs<ExtArgs>>): Prisma__competition_announcementClient<$Result.GetResult<Prisma.$competition_announcementPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Competition_announcement that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {competition_announcementFindUniqueOrThrowArgs} args - Arguments to find a Competition_announcement
     * @example
     * // Get one Competition_announcement
     * const competition_announcement = await prisma.competition_announcement.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends competition_announcementFindUniqueOrThrowArgs>(args: SelectSubset<T, competition_announcementFindUniqueOrThrowArgs<ExtArgs>>): Prisma__competition_announcementClient<$Result.GetResult<Prisma.$competition_announcementPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Competition_announcement that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {competition_announcementFindFirstArgs} args - Arguments to find a Competition_announcement
     * @example
     * // Get one Competition_announcement
     * const competition_announcement = await prisma.competition_announcement.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends competition_announcementFindFirstArgs>(args?: SelectSubset<T, competition_announcementFindFirstArgs<ExtArgs>>): Prisma__competition_announcementClient<$Result.GetResult<Prisma.$competition_announcementPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Competition_announcement that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {competition_announcementFindFirstOrThrowArgs} args - Arguments to find a Competition_announcement
     * @example
     * // Get one Competition_announcement
     * const competition_announcement = await prisma.competition_announcement.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends competition_announcementFindFirstOrThrowArgs>(args?: SelectSubset<T, competition_announcementFindFirstOrThrowArgs<ExtArgs>>): Prisma__competition_announcementClient<$Result.GetResult<Prisma.$competition_announcementPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Competition_announcements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {competition_announcementFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Competition_announcements
     * const competition_announcements = await prisma.competition_announcement.findMany()
     * 
     * // Get first 10 Competition_announcements
     * const competition_announcements = await prisma.competition_announcement.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const competition_announcementWithIdOnly = await prisma.competition_announcement.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends competition_announcementFindManyArgs>(args?: SelectSubset<T, competition_announcementFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$competition_announcementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Competition_announcement.
     * @param {competition_announcementCreateArgs} args - Arguments to create a Competition_announcement.
     * @example
     * // Create one Competition_announcement
     * const Competition_announcement = await prisma.competition_announcement.create({
     *   data: {
     *     // ... data to create a Competition_announcement
     *   }
     * })
     * 
     */
    create<T extends competition_announcementCreateArgs>(args: SelectSubset<T, competition_announcementCreateArgs<ExtArgs>>): Prisma__competition_announcementClient<$Result.GetResult<Prisma.$competition_announcementPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Competition_announcements.
     * @param {competition_announcementCreateManyArgs} args - Arguments to create many Competition_announcements.
     * @example
     * // Create many Competition_announcements
     * const competition_announcement = await prisma.competition_announcement.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends competition_announcementCreateManyArgs>(args?: SelectSubset<T, competition_announcementCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Competition_announcement.
     * @param {competition_announcementDeleteArgs} args - Arguments to delete one Competition_announcement.
     * @example
     * // Delete one Competition_announcement
     * const Competition_announcement = await prisma.competition_announcement.delete({
     *   where: {
     *     // ... filter to delete one Competition_announcement
     *   }
     * })
     * 
     */
    delete<T extends competition_announcementDeleteArgs>(args: SelectSubset<T, competition_announcementDeleteArgs<ExtArgs>>): Prisma__competition_announcementClient<$Result.GetResult<Prisma.$competition_announcementPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Competition_announcement.
     * @param {competition_announcementUpdateArgs} args - Arguments to update one Competition_announcement.
     * @example
     * // Update one Competition_announcement
     * const competition_announcement = await prisma.competition_announcement.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends competition_announcementUpdateArgs>(args: SelectSubset<T, competition_announcementUpdateArgs<ExtArgs>>): Prisma__competition_announcementClient<$Result.GetResult<Prisma.$competition_announcementPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Competition_announcements.
     * @param {competition_announcementDeleteManyArgs} args - Arguments to filter Competition_announcements to delete.
     * @example
     * // Delete a few Competition_announcements
     * const { count } = await prisma.competition_announcement.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends competition_announcementDeleteManyArgs>(args?: SelectSubset<T, competition_announcementDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Competition_announcements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {competition_announcementUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Competition_announcements
     * const competition_announcement = await prisma.competition_announcement.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends competition_announcementUpdateManyArgs>(args: SelectSubset<T, competition_announcementUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Competition_announcement.
     * @param {competition_announcementUpsertArgs} args - Arguments to update or create a Competition_announcement.
     * @example
     * // Update or create a Competition_announcement
     * const competition_announcement = await prisma.competition_announcement.upsert({
     *   create: {
     *     // ... data to create a Competition_announcement
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Competition_announcement we want to update
     *   }
     * })
     */
    upsert<T extends competition_announcementUpsertArgs>(args: SelectSubset<T, competition_announcementUpsertArgs<ExtArgs>>): Prisma__competition_announcementClient<$Result.GetResult<Prisma.$competition_announcementPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Competition_announcements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {competition_announcementCountArgs} args - Arguments to filter Competition_announcements to count.
     * @example
     * // Count the number of Competition_announcements
     * const count = await prisma.competition_announcement.count({
     *   where: {
     *     // ... the filter for the Competition_announcements we want to count
     *   }
     * })
    **/
    count<T extends competition_announcementCountArgs>(
      args?: Subset<T, competition_announcementCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Competition_announcementCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Competition_announcement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Competition_announcementAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Competition_announcementAggregateArgs>(args: Subset<T, Competition_announcementAggregateArgs>): Prisma.PrismaPromise<GetCompetition_announcementAggregateType<T>>

    /**
     * Group by Competition_announcement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {competition_announcementGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends competition_announcementGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: competition_announcementGroupByArgs['orderBy'] }
        : { orderBy?: competition_announcementGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, competition_announcementGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCompetition_announcementGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the competition_announcement model
   */
  readonly fields: competition_announcementFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for competition_announcement.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__competition_announcementClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    competition<T extends competitionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, competitionDefaultArgs<ExtArgs>>): Prisma__competitionClient<$Result.GetResult<Prisma.$competitionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    author<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the competition_announcement model
   */
  interface competition_announcementFieldRefs {
    readonly id: FieldRef<"competition_announcement", 'String'>
    readonly competition_id: FieldRef<"competition_announcement", 'String'>
    readonly author_id: FieldRef<"competition_announcement", 'String'>
    readonly title: FieldRef<"competition_announcement", 'String'>
    readonly description: FieldRef<"competition_announcement", 'String'>
    readonly created_at: FieldRef<"competition_announcement", 'DateTime'>
    readonly updated_at: FieldRef<"competition_announcement", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * competition_announcement findUnique
   */
  export type competition_announcementFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the competition_announcement
     */
    select?: competition_announcementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the competition_announcement
     */
    omit?: competition_announcementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: competition_announcementInclude<ExtArgs> | null
    /**
     * Filter, which competition_announcement to fetch.
     */
    where: competition_announcementWhereUniqueInput
  }

  /**
   * competition_announcement findUniqueOrThrow
   */
  export type competition_announcementFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the competition_announcement
     */
    select?: competition_announcementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the competition_announcement
     */
    omit?: competition_announcementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: competition_announcementInclude<ExtArgs> | null
    /**
     * Filter, which competition_announcement to fetch.
     */
    where: competition_announcementWhereUniqueInput
  }

  /**
   * competition_announcement findFirst
   */
  export type competition_announcementFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the competition_announcement
     */
    select?: competition_announcementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the competition_announcement
     */
    omit?: competition_announcementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: competition_announcementInclude<ExtArgs> | null
    /**
     * Filter, which competition_announcement to fetch.
     */
    where?: competition_announcementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of competition_announcements to fetch.
     */
    orderBy?: competition_announcementOrderByWithRelationInput | competition_announcementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for competition_announcements.
     */
    cursor?: competition_announcementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` competition_announcements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` competition_announcements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of competition_announcements.
     */
    distinct?: Competition_announcementScalarFieldEnum | Competition_announcementScalarFieldEnum[]
  }

  /**
   * competition_announcement findFirstOrThrow
   */
  export type competition_announcementFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the competition_announcement
     */
    select?: competition_announcementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the competition_announcement
     */
    omit?: competition_announcementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: competition_announcementInclude<ExtArgs> | null
    /**
     * Filter, which competition_announcement to fetch.
     */
    where?: competition_announcementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of competition_announcements to fetch.
     */
    orderBy?: competition_announcementOrderByWithRelationInput | competition_announcementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for competition_announcements.
     */
    cursor?: competition_announcementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` competition_announcements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` competition_announcements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of competition_announcements.
     */
    distinct?: Competition_announcementScalarFieldEnum | Competition_announcementScalarFieldEnum[]
  }

  /**
   * competition_announcement findMany
   */
  export type competition_announcementFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the competition_announcement
     */
    select?: competition_announcementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the competition_announcement
     */
    omit?: competition_announcementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: competition_announcementInclude<ExtArgs> | null
    /**
     * Filter, which competition_announcements to fetch.
     */
    where?: competition_announcementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of competition_announcements to fetch.
     */
    orderBy?: competition_announcementOrderByWithRelationInput | competition_announcementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing competition_announcements.
     */
    cursor?: competition_announcementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` competition_announcements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` competition_announcements.
     */
    skip?: number
    distinct?: Competition_announcementScalarFieldEnum | Competition_announcementScalarFieldEnum[]
  }

  /**
   * competition_announcement create
   */
  export type competition_announcementCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the competition_announcement
     */
    select?: competition_announcementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the competition_announcement
     */
    omit?: competition_announcementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: competition_announcementInclude<ExtArgs> | null
    /**
     * The data needed to create a competition_announcement.
     */
    data: XOR<competition_announcementCreateInput, competition_announcementUncheckedCreateInput>
  }

  /**
   * competition_announcement createMany
   */
  export type competition_announcementCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many competition_announcements.
     */
    data: competition_announcementCreateManyInput | competition_announcementCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * competition_announcement update
   */
  export type competition_announcementUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the competition_announcement
     */
    select?: competition_announcementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the competition_announcement
     */
    omit?: competition_announcementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: competition_announcementInclude<ExtArgs> | null
    /**
     * The data needed to update a competition_announcement.
     */
    data: XOR<competition_announcementUpdateInput, competition_announcementUncheckedUpdateInput>
    /**
     * Choose, which competition_announcement to update.
     */
    where: competition_announcementWhereUniqueInput
  }

  /**
   * competition_announcement updateMany
   */
  export type competition_announcementUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update competition_announcements.
     */
    data: XOR<competition_announcementUpdateManyMutationInput, competition_announcementUncheckedUpdateManyInput>
    /**
     * Filter which competition_announcements to update
     */
    where?: competition_announcementWhereInput
    /**
     * Limit how many competition_announcements to update.
     */
    limit?: number
  }

  /**
   * competition_announcement upsert
   */
  export type competition_announcementUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the competition_announcement
     */
    select?: competition_announcementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the competition_announcement
     */
    omit?: competition_announcementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: competition_announcementInclude<ExtArgs> | null
    /**
     * The filter to search for the competition_announcement to update in case it exists.
     */
    where: competition_announcementWhereUniqueInput
    /**
     * In case the competition_announcement found by the `where` argument doesn't exist, create a new competition_announcement with this data.
     */
    create: XOR<competition_announcementCreateInput, competition_announcementUncheckedCreateInput>
    /**
     * In case the competition_announcement was found with the provided `where` argument, update it with this data.
     */
    update: XOR<competition_announcementUpdateInput, competition_announcementUncheckedUpdateInput>
  }

  /**
   * competition_announcement delete
   */
  export type competition_announcementDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the competition_announcement
     */
    select?: competition_announcementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the competition_announcement
     */
    omit?: competition_announcementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: competition_announcementInclude<ExtArgs> | null
    /**
     * Filter which competition_announcement to delete.
     */
    where: competition_announcementWhereUniqueInput
  }

  /**
   * competition_announcement deleteMany
   */
  export type competition_announcementDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which competition_announcements to delete
     */
    where?: competition_announcementWhereInput
    /**
     * Limit how many competition_announcements to delete.
     */
    limit?: number
  }

  /**
   * competition_announcement without action
   */
  export type competition_announcementDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the competition_announcement
     */
    select?: competition_announcementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the competition_announcement
     */
    omit?: competition_announcementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: competition_announcementInclude<ExtArgs> | null
  }


  /**
   * Model competition_submission
   */

  export type AggregateCompetition_submission = {
    _count: Competition_submissionCountAggregateOutputType | null
    _min: Competition_submissionMinAggregateOutputType | null
    _max: Competition_submissionMaxAggregateOutputType | null
  }

  export type Competition_submissionMinAggregateOutputType = {
    team_id: string | null
    competition_id: string | null
    media_id: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Competition_submissionMaxAggregateOutputType = {
    team_id: string | null
    competition_id: string | null
    media_id: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Competition_submissionCountAggregateOutputType = {
    team_id: number
    competition_id: number
    media_id: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type Competition_submissionMinAggregateInputType = {
    team_id?: true
    competition_id?: true
    media_id?: true
    created_at?: true
    updated_at?: true
  }

  export type Competition_submissionMaxAggregateInputType = {
    team_id?: true
    competition_id?: true
    media_id?: true
    created_at?: true
    updated_at?: true
  }

  export type Competition_submissionCountAggregateInputType = {
    team_id?: true
    competition_id?: true
    media_id?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type Competition_submissionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which competition_submission to aggregate.
     */
    where?: competition_submissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of competition_submissions to fetch.
     */
    orderBy?: competition_submissionOrderByWithRelationInput | competition_submissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: competition_submissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` competition_submissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` competition_submissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned competition_submissions
    **/
    _count?: true | Competition_submissionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Competition_submissionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Competition_submissionMaxAggregateInputType
  }

  export type GetCompetition_submissionAggregateType<T extends Competition_submissionAggregateArgs> = {
        [P in keyof T & keyof AggregateCompetition_submission]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompetition_submission[P]>
      : GetScalarType<T[P], AggregateCompetition_submission[P]>
  }




  export type competition_submissionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: competition_submissionWhereInput
    orderBy?: competition_submissionOrderByWithAggregationInput | competition_submissionOrderByWithAggregationInput[]
    by: Competition_submissionScalarFieldEnum[] | Competition_submissionScalarFieldEnum
    having?: competition_submissionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Competition_submissionCountAggregateInputType | true
    _min?: Competition_submissionMinAggregateInputType
    _max?: Competition_submissionMaxAggregateInputType
  }

  export type Competition_submissionGroupByOutputType = {
    team_id: string
    competition_id: string
    media_id: string
    created_at: Date
    updated_at: Date | null
    _count: Competition_submissionCountAggregateOutputType | null
    _min: Competition_submissionMinAggregateOutputType | null
    _max: Competition_submissionMaxAggregateOutputType | null
  }

  type GetCompetition_submissionGroupByPayload<T extends competition_submissionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Competition_submissionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Competition_submissionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Competition_submissionGroupByOutputType[P]>
            : GetScalarType<T[P], Competition_submissionGroupByOutputType[P]>
        }
      >
    >


  export type competition_submissionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    team_id?: boolean
    competition_id?: boolean
    media_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    team?: boolean | teamDefaultArgs<ExtArgs>
    competition?: boolean | competitionDefaultArgs<ExtArgs>
    media?: boolean | mediaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["competition_submission"]>



  export type competition_submissionSelectScalar = {
    team_id?: boolean
    competition_id?: boolean
    media_id?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type competition_submissionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"team_id" | "competition_id" | "media_id" | "created_at" | "updated_at", ExtArgs["result"]["competition_submission"]>
  export type competition_submissionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    team?: boolean | teamDefaultArgs<ExtArgs>
    competition?: boolean | competitionDefaultArgs<ExtArgs>
    media?: boolean | mediaDefaultArgs<ExtArgs>
  }

  export type $competition_submissionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "competition_submission"
    objects: {
      team: Prisma.$teamPayload<ExtArgs>
      competition: Prisma.$competitionPayload<ExtArgs>
      media: Prisma.$mediaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      team_id: string
      competition_id: string
      media_id: string
      created_at: Date
      updated_at: Date | null
    }, ExtArgs["result"]["competition_submission"]>
    composites: {}
  }

  type competition_submissionGetPayload<S extends boolean | null | undefined | competition_submissionDefaultArgs> = $Result.GetResult<Prisma.$competition_submissionPayload, S>

  type competition_submissionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<competition_submissionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Competition_submissionCountAggregateInputType | true
    }

  export interface competition_submissionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['competition_submission'], meta: { name: 'competition_submission' } }
    /**
     * Find zero or one Competition_submission that matches the filter.
     * @param {competition_submissionFindUniqueArgs} args - Arguments to find a Competition_submission
     * @example
     * // Get one Competition_submission
     * const competition_submission = await prisma.competition_submission.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends competition_submissionFindUniqueArgs>(args: SelectSubset<T, competition_submissionFindUniqueArgs<ExtArgs>>): Prisma__competition_submissionClient<$Result.GetResult<Prisma.$competition_submissionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Competition_submission that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {competition_submissionFindUniqueOrThrowArgs} args - Arguments to find a Competition_submission
     * @example
     * // Get one Competition_submission
     * const competition_submission = await prisma.competition_submission.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends competition_submissionFindUniqueOrThrowArgs>(args: SelectSubset<T, competition_submissionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__competition_submissionClient<$Result.GetResult<Prisma.$competition_submissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Competition_submission that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {competition_submissionFindFirstArgs} args - Arguments to find a Competition_submission
     * @example
     * // Get one Competition_submission
     * const competition_submission = await prisma.competition_submission.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends competition_submissionFindFirstArgs>(args?: SelectSubset<T, competition_submissionFindFirstArgs<ExtArgs>>): Prisma__competition_submissionClient<$Result.GetResult<Prisma.$competition_submissionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Competition_submission that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {competition_submissionFindFirstOrThrowArgs} args - Arguments to find a Competition_submission
     * @example
     * // Get one Competition_submission
     * const competition_submission = await prisma.competition_submission.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends competition_submissionFindFirstOrThrowArgs>(args?: SelectSubset<T, competition_submissionFindFirstOrThrowArgs<ExtArgs>>): Prisma__competition_submissionClient<$Result.GetResult<Prisma.$competition_submissionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Competition_submissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {competition_submissionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Competition_submissions
     * const competition_submissions = await prisma.competition_submission.findMany()
     * 
     * // Get first 10 Competition_submissions
     * const competition_submissions = await prisma.competition_submission.findMany({ take: 10 })
     * 
     * // Only select the `team_id`
     * const competition_submissionWithTeam_idOnly = await prisma.competition_submission.findMany({ select: { team_id: true } })
     * 
     */
    findMany<T extends competition_submissionFindManyArgs>(args?: SelectSubset<T, competition_submissionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$competition_submissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Competition_submission.
     * @param {competition_submissionCreateArgs} args - Arguments to create a Competition_submission.
     * @example
     * // Create one Competition_submission
     * const Competition_submission = await prisma.competition_submission.create({
     *   data: {
     *     // ... data to create a Competition_submission
     *   }
     * })
     * 
     */
    create<T extends competition_submissionCreateArgs>(args: SelectSubset<T, competition_submissionCreateArgs<ExtArgs>>): Prisma__competition_submissionClient<$Result.GetResult<Prisma.$competition_submissionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Competition_submissions.
     * @param {competition_submissionCreateManyArgs} args - Arguments to create many Competition_submissions.
     * @example
     * // Create many Competition_submissions
     * const competition_submission = await prisma.competition_submission.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends competition_submissionCreateManyArgs>(args?: SelectSubset<T, competition_submissionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Competition_submission.
     * @param {competition_submissionDeleteArgs} args - Arguments to delete one Competition_submission.
     * @example
     * // Delete one Competition_submission
     * const Competition_submission = await prisma.competition_submission.delete({
     *   where: {
     *     // ... filter to delete one Competition_submission
     *   }
     * })
     * 
     */
    delete<T extends competition_submissionDeleteArgs>(args: SelectSubset<T, competition_submissionDeleteArgs<ExtArgs>>): Prisma__competition_submissionClient<$Result.GetResult<Prisma.$competition_submissionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Competition_submission.
     * @param {competition_submissionUpdateArgs} args - Arguments to update one Competition_submission.
     * @example
     * // Update one Competition_submission
     * const competition_submission = await prisma.competition_submission.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends competition_submissionUpdateArgs>(args: SelectSubset<T, competition_submissionUpdateArgs<ExtArgs>>): Prisma__competition_submissionClient<$Result.GetResult<Prisma.$competition_submissionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Competition_submissions.
     * @param {competition_submissionDeleteManyArgs} args - Arguments to filter Competition_submissions to delete.
     * @example
     * // Delete a few Competition_submissions
     * const { count } = await prisma.competition_submission.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends competition_submissionDeleteManyArgs>(args?: SelectSubset<T, competition_submissionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Competition_submissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {competition_submissionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Competition_submissions
     * const competition_submission = await prisma.competition_submission.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends competition_submissionUpdateManyArgs>(args: SelectSubset<T, competition_submissionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Competition_submission.
     * @param {competition_submissionUpsertArgs} args - Arguments to update or create a Competition_submission.
     * @example
     * // Update or create a Competition_submission
     * const competition_submission = await prisma.competition_submission.upsert({
     *   create: {
     *     // ... data to create a Competition_submission
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Competition_submission we want to update
     *   }
     * })
     */
    upsert<T extends competition_submissionUpsertArgs>(args: SelectSubset<T, competition_submissionUpsertArgs<ExtArgs>>): Prisma__competition_submissionClient<$Result.GetResult<Prisma.$competition_submissionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Competition_submissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {competition_submissionCountArgs} args - Arguments to filter Competition_submissions to count.
     * @example
     * // Count the number of Competition_submissions
     * const count = await prisma.competition_submission.count({
     *   where: {
     *     // ... the filter for the Competition_submissions we want to count
     *   }
     * })
    **/
    count<T extends competition_submissionCountArgs>(
      args?: Subset<T, competition_submissionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Competition_submissionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Competition_submission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Competition_submissionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Competition_submissionAggregateArgs>(args: Subset<T, Competition_submissionAggregateArgs>): Prisma.PrismaPromise<GetCompetition_submissionAggregateType<T>>

    /**
     * Group by Competition_submission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {competition_submissionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends competition_submissionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: competition_submissionGroupByArgs['orderBy'] }
        : { orderBy?: competition_submissionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, competition_submissionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCompetition_submissionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the competition_submission model
   */
  readonly fields: competition_submissionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for competition_submission.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__competition_submissionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    team<T extends teamDefaultArgs<ExtArgs> = {}>(args?: Subset<T, teamDefaultArgs<ExtArgs>>): Prisma__teamClient<$Result.GetResult<Prisma.$teamPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    competition<T extends competitionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, competitionDefaultArgs<ExtArgs>>): Prisma__competitionClient<$Result.GetResult<Prisma.$competitionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    media<T extends mediaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, mediaDefaultArgs<ExtArgs>>): Prisma__mediaClient<$Result.GetResult<Prisma.$mediaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the competition_submission model
   */
  interface competition_submissionFieldRefs {
    readonly team_id: FieldRef<"competition_submission", 'String'>
    readonly competition_id: FieldRef<"competition_submission", 'String'>
    readonly media_id: FieldRef<"competition_submission", 'String'>
    readonly created_at: FieldRef<"competition_submission", 'DateTime'>
    readonly updated_at: FieldRef<"competition_submission", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * competition_submission findUnique
   */
  export type competition_submissionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the competition_submission
     */
    select?: competition_submissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the competition_submission
     */
    omit?: competition_submissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: competition_submissionInclude<ExtArgs> | null
    /**
     * Filter, which competition_submission to fetch.
     */
    where: competition_submissionWhereUniqueInput
  }

  /**
   * competition_submission findUniqueOrThrow
   */
  export type competition_submissionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the competition_submission
     */
    select?: competition_submissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the competition_submission
     */
    omit?: competition_submissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: competition_submissionInclude<ExtArgs> | null
    /**
     * Filter, which competition_submission to fetch.
     */
    where: competition_submissionWhereUniqueInput
  }

  /**
   * competition_submission findFirst
   */
  export type competition_submissionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the competition_submission
     */
    select?: competition_submissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the competition_submission
     */
    omit?: competition_submissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: competition_submissionInclude<ExtArgs> | null
    /**
     * Filter, which competition_submission to fetch.
     */
    where?: competition_submissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of competition_submissions to fetch.
     */
    orderBy?: competition_submissionOrderByWithRelationInput | competition_submissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for competition_submissions.
     */
    cursor?: competition_submissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` competition_submissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` competition_submissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of competition_submissions.
     */
    distinct?: Competition_submissionScalarFieldEnum | Competition_submissionScalarFieldEnum[]
  }

  /**
   * competition_submission findFirstOrThrow
   */
  export type competition_submissionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the competition_submission
     */
    select?: competition_submissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the competition_submission
     */
    omit?: competition_submissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: competition_submissionInclude<ExtArgs> | null
    /**
     * Filter, which competition_submission to fetch.
     */
    where?: competition_submissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of competition_submissions to fetch.
     */
    orderBy?: competition_submissionOrderByWithRelationInput | competition_submissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for competition_submissions.
     */
    cursor?: competition_submissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` competition_submissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` competition_submissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of competition_submissions.
     */
    distinct?: Competition_submissionScalarFieldEnum | Competition_submissionScalarFieldEnum[]
  }

  /**
   * competition_submission findMany
   */
  export type competition_submissionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the competition_submission
     */
    select?: competition_submissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the competition_submission
     */
    omit?: competition_submissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: competition_submissionInclude<ExtArgs> | null
    /**
     * Filter, which competition_submissions to fetch.
     */
    where?: competition_submissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of competition_submissions to fetch.
     */
    orderBy?: competition_submissionOrderByWithRelationInput | competition_submissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing competition_submissions.
     */
    cursor?: competition_submissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` competition_submissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` competition_submissions.
     */
    skip?: number
    distinct?: Competition_submissionScalarFieldEnum | Competition_submissionScalarFieldEnum[]
  }

  /**
   * competition_submission create
   */
  export type competition_submissionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the competition_submission
     */
    select?: competition_submissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the competition_submission
     */
    omit?: competition_submissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: competition_submissionInclude<ExtArgs> | null
    /**
     * The data needed to create a competition_submission.
     */
    data: XOR<competition_submissionCreateInput, competition_submissionUncheckedCreateInput>
  }

  /**
   * competition_submission createMany
   */
  export type competition_submissionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many competition_submissions.
     */
    data: competition_submissionCreateManyInput | competition_submissionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * competition_submission update
   */
  export type competition_submissionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the competition_submission
     */
    select?: competition_submissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the competition_submission
     */
    omit?: competition_submissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: competition_submissionInclude<ExtArgs> | null
    /**
     * The data needed to update a competition_submission.
     */
    data: XOR<competition_submissionUpdateInput, competition_submissionUncheckedUpdateInput>
    /**
     * Choose, which competition_submission to update.
     */
    where: competition_submissionWhereUniqueInput
  }

  /**
   * competition_submission updateMany
   */
  export type competition_submissionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update competition_submissions.
     */
    data: XOR<competition_submissionUpdateManyMutationInput, competition_submissionUncheckedUpdateManyInput>
    /**
     * Filter which competition_submissions to update
     */
    where?: competition_submissionWhereInput
    /**
     * Limit how many competition_submissions to update.
     */
    limit?: number
  }

  /**
   * competition_submission upsert
   */
  export type competition_submissionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the competition_submission
     */
    select?: competition_submissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the competition_submission
     */
    omit?: competition_submissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: competition_submissionInclude<ExtArgs> | null
    /**
     * The filter to search for the competition_submission to update in case it exists.
     */
    where: competition_submissionWhereUniqueInput
    /**
     * In case the competition_submission found by the `where` argument doesn't exist, create a new competition_submission with this data.
     */
    create: XOR<competition_submissionCreateInput, competition_submissionUncheckedCreateInput>
    /**
     * In case the competition_submission was found with the provided `where` argument, update it with this data.
     */
    update: XOR<competition_submissionUpdateInput, competition_submissionUncheckedUpdateInput>
  }

  /**
   * competition_submission delete
   */
  export type competition_submissionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the competition_submission
     */
    select?: competition_submissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the competition_submission
     */
    omit?: competition_submissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: competition_submissionInclude<ExtArgs> | null
    /**
     * Filter which competition_submission to delete.
     */
    where: competition_submissionWhereUniqueInput
  }

  /**
   * competition_submission deleteMany
   */
  export type competition_submissionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which competition_submissions to delete
     */
    where?: competition_submissionWhereInput
    /**
     * Limit how many competition_submissions to delete.
     */
    limit?: number
  }

  /**
   * competition_submission without action
   */
  export type competition_submissionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the competition_submission
     */
    select?: competition_submissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the competition_submission
     */
    omit?: competition_submissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: competition_submissionInclude<ExtArgs> | null
  }


  /**
   * Model competition_timeline
   */

  export type AggregateCompetition_timeline = {
    _count: Competition_timelineCountAggregateOutputType | null
    _min: Competition_timelineMinAggregateOutputType | null
    _max: Competition_timelineMaxAggregateOutputType | null
  }

  export type Competition_timelineMinAggregateOutputType = {
    id: string | null
    competition_id: string | null
    title: string | null
    date: Date | null
  }

  export type Competition_timelineMaxAggregateOutputType = {
    id: string | null
    competition_id: string | null
    title: string | null
    date: Date | null
  }

  export type Competition_timelineCountAggregateOutputType = {
    id: number
    competition_id: number
    title: number
    date: number
    _all: number
  }


  export type Competition_timelineMinAggregateInputType = {
    id?: true
    competition_id?: true
    title?: true
    date?: true
  }

  export type Competition_timelineMaxAggregateInputType = {
    id?: true
    competition_id?: true
    title?: true
    date?: true
  }

  export type Competition_timelineCountAggregateInputType = {
    id?: true
    competition_id?: true
    title?: true
    date?: true
    _all?: true
  }

  export type Competition_timelineAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which competition_timeline to aggregate.
     */
    where?: competition_timelineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of competition_timelines to fetch.
     */
    orderBy?: competition_timelineOrderByWithRelationInput | competition_timelineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: competition_timelineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` competition_timelines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` competition_timelines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned competition_timelines
    **/
    _count?: true | Competition_timelineCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Competition_timelineMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Competition_timelineMaxAggregateInputType
  }

  export type GetCompetition_timelineAggregateType<T extends Competition_timelineAggregateArgs> = {
        [P in keyof T & keyof AggregateCompetition_timeline]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompetition_timeline[P]>
      : GetScalarType<T[P], AggregateCompetition_timeline[P]>
  }




  export type competition_timelineGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: competition_timelineWhereInput
    orderBy?: competition_timelineOrderByWithAggregationInput | competition_timelineOrderByWithAggregationInput[]
    by: Competition_timelineScalarFieldEnum[] | Competition_timelineScalarFieldEnum
    having?: competition_timelineScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Competition_timelineCountAggregateInputType | true
    _min?: Competition_timelineMinAggregateInputType
    _max?: Competition_timelineMaxAggregateInputType
  }

  export type Competition_timelineGroupByOutputType = {
    id: string
    competition_id: string
    title: string
    date: Date
    _count: Competition_timelineCountAggregateOutputType | null
    _min: Competition_timelineMinAggregateOutputType | null
    _max: Competition_timelineMaxAggregateOutputType | null
  }

  type GetCompetition_timelineGroupByPayload<T extends competition_timelineGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Competition_timelineGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Competition_timelineGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Competition_timelineGroupByOutputType[P]>
            : GetScalarType<T[P], Competition_timelineGroupByOutputType[P]>
        }
      >
    >


  export type competition_timelineSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    competition_id?: boolean
    title?: boolean
    date?: boolean
    competition?: boolean | competitionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["competition_timeline"]>



  export type competition_timelineSelectScalar = {
    id?: boolean
    competition_id?: boolean
    title?: boolean
    date?: boolean
  }

  export type competition_timelineOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "competition_id" | "title" | "date", ExtArgs["result"]["competition_timeline"]>
  export type competition_timelineInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    competition?: boolean | competitionDefaultArgs<ExtArgs>
  }

  export type $competition_timelinePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "competition_timeline"
    objects: {
      competition: Prisma.$competitionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      competition_id: string
      title: string
      date: Date
    }, ExtArgs["result"]["competition_timeline"]>
    composites: {}
  }

  type competition_timelineGetPayload<S extends boolean | null | undefined | competition_timelineDefaultArgs> = $Result.GetResult<Prisma.$competition_timelinePayload, S>

  type competition_timelineCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<competition_timelineFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Competition_timelineCountAggregateInputType | true
    }

  export interface competition_timelineDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['competition_timeline'], meta: { name: 'competition_timeline' } }
    /**
     * Find zero or one Competition_timeline that matches the filter.
     * @param {competition_timelineFindUniqueArgs} args - Arguments to find a Competition_timeline
     * @example
     * // Get one Competition_timeline
     * const competition_timeline = await prisma.competition_timeline.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends competition_timelineFindUniqueArgs>(args: SelectSubset<T, competition_timelineFindUniqueArgs<ExtArgs>>): Prisma__competition_timelineClient<$Result.GetResult<Prisma.$competition_timelinePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Competition_timeline that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {competition_timelineFindUniqueOrThrowArgs} args - Arguments to find a Competition_timeline
     * @example
     * // Get one Competition_timeline
     * const competition_timeline = await prisma.competition_timeline.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends competition_timelineFindUniqueOrThrowArgs>(args: SelectSubset<T, competition_timelineFindUniqueOrThrowArgs<ExtArgs>>): Prisma__competition_timelineClient<$Result.GetResult<Prisma.$competition_timelinePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Competition_timeline that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {competition_timelineFindFirstArgs} args - Arguments to find a Competition_timeline
     * @example
     * // Get one Competition_timeline
     * const competition_timeline = await prisma.competition_timeline.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends competition_timelineFindFirstArgs>(args?: SelectSubset<T, competition_timelineFindFirstArgs<ExtArgs>>): Prisma__competition_timelineClient<$Result.GetResult<Prisma.$competition_timelinePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Competition_timeline that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {competition_timelineFindFirstOrThrowArgs} args - Arguments to find a Competition_timeline
     * @example
     * // Get one Competition_timeline
     * const competition_timeline = await prisma.competition_timeline.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends competition_timelineFindFirstOrThrowArgs>(args?: SelectSubset<T, competition_timelineFindFirstOrThrowArgs<ExtArgs>>): Prisma__competition_timelineClient<$Result.GetResult<Prisma.$competition_timelinePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Competition_timelines that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {competition_timelineFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Competition_timelines
     * const competition_timelines = await prisma.competition_timeline.findMany()
     * 
     * // Get first 10 Competition_timelines
     * const competition_timelines = await prisma.competition_timeline.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const competition_timelineWithIdOnly = await prisma.competition_timeline.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends competition_timelineFindManyArgs>(args?: SelectSubset<T, competition_timelineFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$competition_timelinePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Competition_timeline.
     * @param {competition_timelineCreateArgs} args - Arguments to create a Competition_timeline.
     * @example
     * // Create one Competition_timeline
     * const Competition_timeline = await prisma.competition_timeline.create({
     *   data: {
     *     // ... data to create a Competition_timeline
     *   }
     * })
     * 
     */
    create<T extends competition_timelineCreateArgs>(args: SelectSubset<T, competition_timelineCreateArgs<ExtArgs>>): Prisma__competition_timelineClient<$Result.GetResult<Prisma.$competition_timelinePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Competition_timelines.
     * @param {competition_timelineCreateManyArgs} args - Arguments to create many Competition_timelines.
     * @example
     * // Create many Competition_timelines
     * const competition_timeline = await prisma.competition_timeline.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends competition_timelineCreateManyArgs>(args?: SelectSubset<T, competition_timelineCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Competition_timeline.
     * @param {competition_timelineDeleteArgs} args - Arguments to delete one Competition_timeline.
     * @example
     * // Delete one Competition_timeline
     * const Competition_timeline = await prisma.competition_timeline.delete({
     *   where: {
     *     // ... filter to delete one Competition_timeline
     *   }
     * })
     * 
     */
    delete<T extends competition_timelineDeleteArgs>(args: SelectSubset<T, competition_timelineDeleteArgs<ExtArgs>>): Prisma__competition_timelineClient<$Result.GetResult<Prisma.$competition_timelinePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Competition_timeline.
     * @param {competition_timelineUpdateArgs} args - Arguments to update one Competition_timeline.
     * @example
     * // Update one Competition_timeline
     * const competition_timeline = await prisma.competition_timeline.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends competition_timelineUpdateArgs>(args: SelectSubset<T, competition_timelineUpdateArgs<ExtArgs>>): Prisma__competition_timelineClient<$Result.GetResult<Prisma.$competition_timelinePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Competition_timelines.
     * @param {competition_timelineDeleteManyArgs} args - Arguments to filter Competition_timelines to delete.
     * @example
     * // Delete a few Competition_timelines
     * const { count } = await prisma.competition_timeline.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends competition_timelineDeleteManyArgs>(args?: SelectSubset<T, competition_timelineDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Competition_timelines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {competition_timelineUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Competition_timelines
     * const competition_timeline = await prisma.competition_timeline.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends competition_timelineUpdateManyArgs>(args: SelectSubset<T, competition_timelineUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Competition_timeline.
     * @param {competition_timelineUpsertArgs} args - Arguments to update or create a Competition_timeline.
     * @example
     * // Update or create a Competition_timeline
     * const competition_timeline = await prisma.competition_timeline.upsert({
     *   create: {
     *     // ... data to create a Competition_timeline
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Competition_timeline we want to update
     *   }
     * })
     */
    upsert<T extends competition_timelineUpsertArgs>(args: SelectSubset<T, competition_timelineUpsertArgs<ExtArgs>>): Prisma__competition_timelineClient<$Result.GetResult<Prisma.$competition_timelinePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Competition_timelines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {competition_timelineCountArgs} args - Arguments to filter Competition_timelines to count.
     * @example
     * // Count the number of Competition_timelines
     * const count = await prisma.competition_timeline.count({
     *   where: {
     *     // ... the filter for the Competition_timelines we want to count
     *   }
     * })
    **/
    count<T extends competition_timelineCountArgs>(
      args?: Subset<T, competition_timelineCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Competition_timelineCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Competition_timeline.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Competition_timelineAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Competition_timelineAggregateArgs>(args: Subset<T, Competition_timelineAggregateArgs>): Prisma.PrismaPromise<GetCompetition_timelineAggregateType<T>>

    /**
     * Group by Competition_timeline.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {competition_timelineGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends competition_timelineGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: competition_timelineGroupByArgs['orderBy'] }
        : { orderBy?: competition_timelineGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, competition_timelineGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCompetition_timelineGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the competition_timeline model
   */
  readonly fields: competition_timelineFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for competition_timeline.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__competition_timelineClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    competition<T extends competitionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, competitionDefaultArgs<ExtArgs>>): Prisma__competitionClient<$Result.GetResult<Prisma.$competitionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the competition_timeline model
   */
  interface competition_timelineFieldRefs {
    readonly id: FieldRef<"competition_timeline", 'String'>
    readonly competition_id: FieldRef<"competition_timeline", 'String'>
    readonly title: FieldRef<"competition_timeline", 'String'>
    readonly date: FieldRef<"competition_timeline", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * competition_timeline findUnique
   */
  export type competition_timelineFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the competition_timeline
     */
    select?: competition_timelineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the competition_timeline
     */
    omit?: competition_timelineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: competition_timelineInclude<ExtArgs> | null
    /**
     * Filter, which competition_timeline to fetch.
     */
    where: competition_timelineWhereUniqueInput
  }

  /**
   * competition_timeline findUniqueOrThrow
   */
  export type competition_timelineFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the competition_timeline
     */
    select?: competition_timelineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the competition_timeline
     */
    omit?: competition_timelineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: competition_timelineInclude<ExtArgs> | null
    /**
     * Filter, which competition_timeline to fetch.
     */
    where: competition_timelineWhereUniqueInput
  }

  /**
   * competition_timeline findFirst
   */
  export type competition_timelineFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the competition_timeline
     */
    select?: competition_timelineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the competition_timeline
     */
    omit?: competition_timelineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: competition_timelineInclude<ExtArgs> | null
    /**
     * Filter, which competition_timeline to fetch.
     */
    where?: competition_timelineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of competition_timelines to fetch.
     */
    orderBy?: competition_timelineOrderByWithRelationInput | competition_timelineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for competition_timelines.
     */
    cursor?: competition_timelineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` competition_timelines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` competition_timelines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of competition_timelines.
     */
    distinct?: Competition_timelineScalarFieldEnum | Competition_timelineScalarFieldEnum[]
  }

  /**
   * competition_timeline findFirstOrThrow
   */
  export type competition_timelineFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the competition_timeline
     */
    select?: competition_timelineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the competition_timeline
     */
    omit?: competition_timelineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: competition_timelineInclude<ExtArgs> | null
    /**
     * Filter, which competition_timeline to fetch.
     */
    where?: competition_timelineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of competition_timelines to fetch.
     */
    orderBy?: competition_timelineOrderByWithRelationInput | competition_timelineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for competition_timelines.
     */
    cursor?: competition_timelineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` competition_timelines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` competition_timelines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of competition_timelines.
     */
    distinct?: Competition_timelineScalarFieldEnum | Competition_timelineScalarFieldEnum[]
  }

  /**
   * competition_timeline findMany
   */
  export type competition_timelineFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the competition_timeline
     */
    select?: competition_timelineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the competition_timeline
     */
    omit?: competition_timelineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: competition_timelineInclude<ExtArgs> | null
    /**
     * Filter, which competition_timelines to fetch.
     */
    where?: competition_timelineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of competition_timelines to fetch.
     */
    orderBy?: competition_timelineOrderByWithRelationInput | competition_timelineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing competition_timelines.
     */
    cursor?: competition_timelineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` competition_timelines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` competition_timelines.
     */
    skip?: number
    distinct?: Competition_timelineScalarFieldEnum | Competition_timelineScalarFieldEnum[]
  }

  /**
   * competition_timeline create
   */
  export type competition_timelineCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the competition_timeline
     */
    select?: competition_timelineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the competition_timeline
     */
    omit?: competition_timelineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: competition_timelineInclude<ExtArgs> | null
    /**
     * The data needed to create a competition_timeline.
     */
    data: XOR<competition_timelineCreateInput, competition_timelineUncheckedCreateInput>
  }

  /**
   * competition_timeline createMany
   */
  export type competition_timelineCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many competition_timelines.
     */
    data: competition_timelineCreateManyInput | competition_timelineCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * competition_timeline update
   */
  export type competition_timelineUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the competition_timeline
     */
    select?: competition_timelineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the competition_timeline
     */
    omit?: competition_timelineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: competition_timelineInclude<ExtArgs> | null
    /**
     * The data needed to update a competition_timeline.
     */
    data: XOR<competition_timelineUpdateInput, competition_timelineUncheckedUpdateInput>
    /**
     * Choose, which competition_timeline to update.
     */
    where: competition_timelineWhereUniqueInput
  }

  /**
   * competition_timeline updateMany
   */
  export type competition_timelineUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update competition_timelines.
     */
    data: XOR<competition_timelineUpdateManyMutationInput, competition_timelineUncheckedUpdateManyInput>
    /**
     * Filter which competition_timelines to update
     */
    where?: competition_timelineWhereInput
    /**
     * Limit how many competition_timelines to update.
     */
    limit?: number
  }

  /**
   * competition_timeline upsert
   */
  export type competition_timelineUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the competition_timeline
     */
    select?: competition_timelineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the competition_timeline
     */
    omit?: competition_timelineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: competition_timelineInclude<ExtArgs> | null
    /**
     * The filter to search for the competition_timeline to update in case it exists.
     */
    where: competition_timelineWhereUniqueInput
    /**
     * In case the competition_timeline found by the `where` argument doesn't exist, create a new competition_timeline with this data.
     */
    create: XOR<competition_timelineCreateInput, competition_timelineUncheckedCreateInput>
    /**
     * In case the competition_timeline was found with the provided `where` argument, update it with this data.
     */
    update: XOR<competition_timelineUpdateInput, competition_timelineUncheckedUpdateInput>
  }

  /**
   * competition_timeline delete
   */
  export type competition_timelineDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the competition_timeline
     */
    select?: competition_timelineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the competition_timeline
     */
    omit?: competition_timelineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: competition_timelineInclude<ExtArgs> | null
    /**
     * Filter which competition_timeline to delete.
     */
    where: competition_timelineWhereUniqueInput
  }

  /**
   * competition_timeline deleteMany
   */
  export type competition_timelineDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which competition_timelines to delete
     */
    where?: competition_timelineWhereInput
    /**
     * Limit how many competition_timelines to delete.
     */
    limit?: number
  }

  /**
   * competition_timeline without action
   */
  export type competition_timelineDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the competition_timeline
     */
    select?: competition_timelineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the competition_timeline
     */
    omit?: competition_timelineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: competition_timelineInclude<ExtArgs> | null
  }


  /**
   * Model media
   */

  export type AggregateMedia = {
    _count: MediaCountAggregateOutputType | null
    _min: MediaMinAggregateOutputType | null
    _max: MediaMaxAggregateOutputType | null
  }

  export type MediaMinAggregateOutputType = {
    id: string | null
    uploader_id: string | null
    name: string | null
    grouping: $Enums.media_grouping_enum | null
    type: $Enums.media_type_enum | null
    url: string | null
    created_at: Date | null
  }

  export type MediaMaxAggregateOutputType = {
    id: string | null
    uploader_id: string | null
    name: string | null
    grouping: $Enums.media_grouping_enum | null
    type: $Enums.media_type_enum | null
    url: string | null
    created_at: Date | null
  }

  export type MediaCountAggregateOutputType = {
    id: number
    uploader_id: number
    name: number
    grouping: number
    type: number
    url: number
    created_at: number
    _all: number
  }


  export type MediaMinAggregateInputType = {
    id?: true
    uploader_id?: true
    name?: true
    grouping?: true
    type?: true
    url?: true
    created_at?: true
  }

  export type MediaMaxAggregateInputType = {
    id?: true
    uploader_id?: true
    name?: true
    grouping?: true
    type?: true
    url?: true
    created_at?: true
  }

  export type MediaCountAggregateInputType = {
    id?: true
    uploader_id?: true
    name?: true
    grouping?: true
    type?: true
    url?: true
    created_at?: true
    _all?: true
  }

  export type MediaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which media to aggregate.
     */
    where?: mediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of media to fetch.
     */
    orderBy?: mediaOrderByWithRelationInput | mediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: mediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` media from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` media.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned media
    **/
    _count?: true | MediaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MediaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MediaMaxAggregateInputType
  }

  export type GetMediaAggregateType<T extends MediaAggregateArgs> = {
        [P in keyof T & keyof AggregateMedia]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMedia[P]>
      : GetScalarType<T[P], AggregateMedia[P]>
  }




  export type mediaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: mediaWhereInput
    orderBy?: mediaOrderByWithAggregationInput | mediaOrderByWithAggregationInput[]
    by: MediaScalarFieldEnum[] | MediaScalarFieldEnum
    having?: mediaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MediaCountAggregateInputType | true
    _min?: MediaMinAggregateInputType
    _max?: MediaMaxAggregateInputType
  }

  export type MediaGroupByOutputType = {
    id: string
    uploader_id: string
    name: string
    grouping: $Enums.media_grouping_enum | null
    type: $Enums.media_type_enum
    url: string
    created_at: Date
    _count: MediaCountAggregateOutputType | null
    _min: MediaMinAggregateOutputType | null
    _max: MediaMaxAggregateOutputType | null
  }

  type GetMediaGroupByPayload<T extends mediaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MediaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MediaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MediaGroupByOutputType[P]>
            : GetScalarType<T[P], MediaGroupByOutputType[P]>
        }
      >
    >


  export type mediaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    uploader_id?: boolean
    name?: boolean
    grouping?: boolean
    type?: boolean
    url?: boolean
    created_at?: boolean
    uploader?: boolean | userDefaultArgs<ExtArgs>
    paymentproof?: boolean | media$paymentproofArgs<ExtArgs>
    twibbon?: boolean | media$twibbonArgs<ExtArgs>
    kartu?: boolean | media$kartuArgs<ExtArgs>
    submission?: boolean | media$submissionArgs<ExtArgs>
  }, ExtArgs["result"]["media"]>



  export type mediaSelectScalar = {
    id?: boolean
    uploader_id?: boolean
    name?: boolean
    grouping?: boolean
    type?: boolean
    url?: boolean
    created_at?: boolean
  }

  export type mediaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "uploader_id" | "name" | "grouping" | "type" | "url" | "created_at", ExtArgs["result"]["media"]>
  export type mediaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    uploader?: boolean | userDefaultArgs<ExtArgs>
    paymentproof?: boolean | media$paymentproofArgs<ExtArgs>
    twibbon?: boolean | media$twibbonArgs<ExtArgs>
    kartu?: boolean | media$kartuArgs<ExtArgs>
    submission?: boolean | media$submissionArgs<ExtArgs>
  }

  export type $mediaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "media"
    objects: {
      uploader: Prisma.$userPayload<ExtArgs>
      paymentproof: Prisma.$team_memberPayload<ExtArgs> | null
      twibbon: Prisma.$team_memberPayload<ExtArgs> | null
      kartu: Prisma.$team_memberPayload<ExtArgs> | null
      submission: Prisma.$competition_submissionPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      uploader_id: string
      name: string
      grouping: $Enums.media_grouping_enum | null
      type: $Enums.media_type_enum
      url: string
      created_at: Date
    }, ExtArgs["result"]["media"]>
    composites: {}
  }

  type mediaGetPayload<S extends boolean | null | undefined | mediaDefaultArgs> = $Result.GetResult<Prisma.$mediaPayload, S>

  type mediaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<mediaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MediaCountAggregateInputType | true
    }

  export interface mediaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['media'], meta: { name: 'media' } }
    /**
     * Find zero or one Media that matches the filter.
     * @param {mediaFindUniqueArgs} args - Arguments to find a Media
     * @example
     * // Get one Media
     * const media = await prisma.media.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends mediaFindUniqueArgs>(args: SelectSubset<T, mediaFindUniqueArgs<ExtArgs>>): Prisma__mediaClient<$Result.GetResult<Prisma.$mediaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Media that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {mediaFindUniqueOrThrowArgs} args - Arguments to find a Media
     * @example
     * // Get one Media
     * const media = await prisma.media.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends mediaFindUniqueOrThrowArgs>(args: SelectSubset<T, mediaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__mediaClient<$Result.GetResult<Prisma.$mediaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Media that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mediaFindFirstArgs} args - Arguments to find a Media
     * @example
     * // Get one Media
     * const media = await prisma.media.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends mediaFindFirstArgs>(args?: SelectSubset<T, mediaFindFirstArgs<ExtArgs>>): Prisma__mediaClient<$Result.GetResult<Prisma.$mediaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Media that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mediaFindFirstOrThrowArgs} args - Arguments to find a Media
     * @example
     * // Get one Media
     * const media = await prisma.media.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends mediaFindFirstOrThrowArgs>(args?: SelectSubset<T, mediaFindFirstOrThrowArgs<ExtArgs>>): Prisma__mediaClient<$Result.GetResult<Prisma.$mediaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Media that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mediaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Media
     * const media = await prisma.media.findMany()
     * 
     * // Get first 10 Media
     * const media = await prisma.media.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mediaWithIdOnly = await prisma.media.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends mediaFindManyArgs>(args?: SelectSubset<T, mediaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$mediaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Media.
     * @param {mediaCreateArgs} args - Arguments to create a Media.
     * @example
     * // Create one Media
     * const Media = await prisma.media.create({
     *   data: {
     *     // ... data to create a Media
     *   }
     * })
     * 
     */
    create<T extends mediaCreateArgs>(args: SelectSubset<T, mediaCreateArgs<ExtArgs>>): Prisma__mediaClient<$Result.GetResult<Prisma.$mediaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Media.
     * @param {mediaCreateManyArgs} args - Arguments to create many Media.
     * @example
     * // Create many Media
     * const media = await prisma.media.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends mediaCreateManyArgs>(args?: SelectSubset<T, mediaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Media.
     * @param {mediaDeleteArgs} args - Arguments to delete one Media.
     * @example
     * // Delete one Media
     * const Media = await prisma.media.delete({
     *   where: {
     *     // ... filter to delete one Media
     *   }
     * })
     * 
     */
    delete<T extends mediaDeleteArgs>(args: SelectSubset<T, mediaDeleteArgs<ExtArgs>>): Prisma__mediaClient<$Result.GetResult<Prisma.$mediaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Media.
     * @param {mediaUpdateArgs} args - Arguments to update one Media.
     * @example
     * // Update one Media
     * const media = await prisma.media.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends mediaUpdateArgs>(args: SelectSubset<T, mediaUpdateArgs<ExtArgs>>): Prisma__mediaClient<$Result.GetResult<Prisma.$mediaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Media.
     * @param {mediaDeleteManyArgs} args - Arguments to filter Media to delete.
     * @example
     * // Delete a few Media
     * const { count } = await prisma.media.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends mediaDeleteManyArgs>(args?: SelectSubset<T, mediaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Media.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mediaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Media
     * const media = await prisma.media.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends mediaUpdateManyArgs>(args: SelectSubset<T, mediaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Media.
     * @param {mediaUpsertArgs} args - Arguments to update or create a Media.
     * @example
     * // Update or create a Media
     * const media = await prisma.media.upsert({
     *   create: {
     *     // ... data to create a Media
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Media we want to update
     *   }
     * })
     */
    upsert<T extends mediaUpsertArgs>(args: SelectSubset<T, mediaUpsertArgs<ExtArgs>>): Prisma__mediaClient<$Result.GetResult<Prisma.$mediaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Media.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mediaCountArgs} args - Arguments to filter Media to count.
     * @example
     * // Count the number of Media
     * const count = await prisma.media.count({
     *   where: {
     *     // ... the filter for the Media we want to count
     *   }
     * })
    **/
    count<T extends mediaCountArgs>(
      args?: Subset<T, mediaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MediaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Media.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MediaAggregateArgs>(args: Subset<T, MediaAggregateArgs>): Prisma.PrismaPromise<GetMediaAggregateType<T>>

    /**
     * Group by Media.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mediaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends mediaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: mediaGroupByArgs['orderBy'] }
        : { orderBy?: mediaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, mediaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMediaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the media model
   */
  readonly fields: mediaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for media.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__mediaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    uploader<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    paymentproof<T extends media$paymentproofArgs<ExtArgs> = {}>(args?: Subset<T, media$paymentproofArgs<ExtArgs>>): Prisma__team_memberClient<$Result.GetResult<Prisma.$team_memberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    twibbon<T extends media$twibbonArgs<ExtArgs> = {}>(args?: Subset<T, media$twibbonArgs<ExtArgs>>): Prisma__team_memberClient<$Result.GetResult<Prisma.$team_memberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    kartu<T extends media$kartuArgs<ExtArgs> = {}>(args?: Subset<T, media$kartuArgs<ExtArgs>>): Prisma__team_memberClient<$Result.GetResult<Prisma.$team_memberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    submission<T extends media$submissionArgs<ExtArgs> = {}>(args?: Subset<T, media$submissionArgs<ExtArgs>>): Prisma__competition_submissionClient<$Result.GetResult<Prisma.$competition_submissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the media model
   */
  interface mediaFieldRefs {
    readonly id: FieldRef<"media", 'String'>
    readonly uploader_id: FieldRef<"media", 'String'>
    readonly name: FieldRef<"media", 'String'>
    readonly grouping: FieldRef<"media", 'media_grouping_enum'>
    readonly type: FieldRef<"media", 'media_type_enum'>
    readonly url: FieldRef<"media", 'String'>
    readonly created_at: FieldRef<"media", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * media findUnique
   */
  export type mediaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the media
     */
    select?: mediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the media
     */
    omit?: mediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mediaInclude<ExtArgs> | null
    /**
     * Filter, which media to fetch.
     */
    where: mediaWhereUniqueInput
  }

  /**
   * media findUniqueOrThrow
   */
  export type mediaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the media
     */
    select?: mediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the media
     */
    omit?: mediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mediaInclude<ExtArgs> | null
    /**
     * Filter, which media to fetch.
     */
    where: mediaWhereUniqueInput
  }

  /**
   * media findFirst
   */
  export type mediaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the media
     */
    select?: mediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the media
     */
    omit?: mediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mediaInclude<ExtArgs> | null
    /**
     * Filter, which media to fetch.
     */
    where?: mediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of media to fetch.
     */
    orderBy?: mediaOrderByWithRelationInput | mediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for media.
     */
    cursor?: mediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` media from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` media.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of media.
     */
    distinct?: MediaScalarFieldEnum | MediaScalarFieldEnum[]
  }

  /**
   * media findFirstOrThrow
   */
  export type mediaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the media
     */
    select?: mediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the media
     */
    omit?: mediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mediaInclude<ExtArgs> | null
    /**
     * Filter, which media to fetch.
     */
    where?: mediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of media to fetch.
     */
    orderBy?: mediaOrderByWithRelationInput | mediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for media.
     */
    cursor?: mediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` media from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` media.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of media.
     */
    distinct?: MediaScalarFieldEnum | MediaScalarFieldEnum[]
  }

  /**
   * media findMany
   */
  export type mediaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the media
     */
    select?: mediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the media
     */
    omit?: mediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mediaInclude<ExtArgs> | null
    /**
     * Filter, which media to fetch.
     */
    where?: mediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of media to fetch.
     */
    orderBy?: mediaOrderByWithRelationInput | mediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing media.
     */
    cursor?: mediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` media from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` media.
     */
    skip?: number
    distinct?: MediaScalarFieldEnum | MediaScalarFieldEnum[]
  }

  /**
   * media create
   */
  export type mediaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the media
     */
    select?: mediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the media
     */
    omit?: mediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mediaInclude<ExtArgs> | null
    /**
     * The data needed to create a media.
     */
    data: XOR<mediaCreateInput, mediaUncheckedCreateInput>
  }

  /**
   * media createMany
   */
  export type mediaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many media.
     */
    data: mediaCreateManyInput | mediaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * media update
   */
  export type mediaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the media
     */
    select?: mediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the media
     */
    omit?: mediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mediaInclude<ExtArgs> | null
    /**
     * The data needed to update a media.
     */
    data: XOR<mediaUpdateInput, mediaUncheckedUpdateInput>
    /**
     * Choose, which media to update.
     */
    where: mediaWhereUniqueInput
  }

  /**
   * media updateMany
   */
  export type mediaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update media.
     */
    data: XOR<mediaUpdateManyMutationInput, mediaUncheckedUpdateManyInput>
    /**
     * Filter which media to update
     */
    where?: mediaWhereInput
    /**
     * Limit how many media to update.
     */
    limit?: number
  }

  /**
   * media upsert
   */
  export type mediaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the media
     */
    select?: mediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the media
     */
    omit?: mediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mediaInclude<ExtArgs> | null
    /**
     * The filter to search for the media to update in case it exists.
     */
    where: mediaWhereUniqueInput
    /**
     * In case the media found by the `where` argument doesn't exist, create a new media with this data.
     */
    create: XOR<mediaCreateInput, mediaUncheckedCreateInput>
    /**
     * In case the media was found with the provided `where` argument, update it with this data.
     */
    update: XOR<mediaUpdateInput, mediaUncheckedUpdateInput>
  }

  /**
   * media delete
   */
  export type mediaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the media
     */
    select?: mediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the media
     */
    omit?: mediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mediaInclude<ExtArgs> | null
    /**
     * Filter which media to delete.
     */
    where: mediaWhereUniqueInput
  }

  /**
   * media deleteMany
   */
  export type mediaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which media to delete
     */
    where?: mediaWhereInput
    /**
     * Limit how many media to delete.
     */
    limit?: number
  }

  /**
   * media.paymentproof
   */
  export type media$paymentproofArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team_member
     */
    select?: team_memberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the team_member
     */
    omit?: team_memberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: team_memberInclude<ExtArgs> | null
    where?: team_memberWhereInput
  }

  /**
   * media.twibbon
   */
  export type media$twibbonArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team_member
     */
    select?: team_memberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the team_member
     */
    omit?: team_memberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: team_memberInclude<ExtArgs> | null
    where?: team_memberWhereInput
  }

  /**
   * media.kartu
   */
  export type media$kartuArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team_member
     */
    select?: team_memberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the team_member
     */
    omit?: team_memberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: team_memberInclude<ExtArgs> | null
    where?: team_memberWhereInput
  }

  /**
   * media.submission
   */
  export type media$submissionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the competition_submission
     */
    select?: competition_submissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the competition_submission
     */
    omit?: competition_submissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: competition_submissionInclude<ExtArgs> | null
    where?: competition_submissionWhereInput
  }

  /**
   * media without action
   */
  export type mediaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the media
     */
    select?: mediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the media
     */
    omit?: mediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mediaInclude<ExtArgs> | null
  }


  /**
   * Model team
   */

  export type AggregateTeam = {
    _count: TeamCountAggregateOutputType | null
    _min: TeamMinAggregateOutputType | null
    _max: TeamMaxAggregateOutputType | null
  }

  export type TeamMinAggregateOutputType = {
    id: string | null
    competition_id: string | null
    team_name: string | null
    team_code: string | null
    is_verified: boolean | null
    verification_error: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type TeamMaxAggregateOutputType = {
    id: string | null
    competition_id: string | null
    team_name: string | null
    team_code: string | null
    is_verified: boolean | null
    verification_error: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type TeamCountAggregateOutputType = {
    id: number
    competition_id: number
    team_name: number
    team_code: number
    is_verified: number
    verification_error: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type TeamMinAggregateInputType = {
    id?: true
    competition_id?: true
    team_name?: true
    team_code?: true
    is_verified?: true
    verification_error?: true
    created_at?: true
    updated_at?: true
  }

  export type TeamMaxAggregateInputType = {
    id?: true
    competition_id?: true
    team_name?: true
    team_code?: true
    is_verified?: true
    verification_error?: true
    created_at?: true
    updated_at?: true
  }

  export type TeamCountAggregateInputType = {
    id?: true
    competition_id?: true
    team_name?: true
    team_code?: true
    is_verified?: true
    verification_error?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type TeamAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which team to aggregate.
     */
    where?: teamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of teams to fetch.
     */
    orderBy?: teamOrderByWithRelationInput | teamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: teamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` teams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned teams
    **/
    _count?: true | TeamCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TeamMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TeamMaxAggregateInputType
  }

  export type GetTeamAggregateType<T extends TeamAggregateArgs> = {
        [P in keyof T & keyof AggregateTeam]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTeam[P]>
      : GetScalarType<T[P], AggregateTeam[P]>
  }




  export type teamGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: teamWhereInput
    orderBy?: teamOrderByWithAggregationInput | teamOrderByWithAggregationInput[]
    by: TeamScalarFieldEnum[] | TeamScalarFieldEnum
    having?: teamScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TeamCountAggregateInputType | true
    _min?: TeamMinAggregateInputType
    _max?: TeamMaxAggregateInputType
  }

  export type TeamGroupByOutputType = {
    id: string
    competition_id: string
    team_name: string
    team_code: string
    is_verified: boolean
    verification_error: string | null
    created_at: Date
    updated_at: Date | null
    _count: TeamCountAggregateOutputType | null
    _min: TeamMinAggregateOutputType | null
    _max: TeamMaxAggregateOutputType | null
  }

  type GetTeamGroupByPayload<T extends teamGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TeamGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TeamGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TeamGroupByOutputType[P]>
            : GetScalarType<T[P], TeamGroupByOutputType[P]>
        }
      >
    >


  export type teamSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    competition_id?: boolean
    team_name?: boolean
    team_code?: boolean
    is_verified?: boolean
    verification_error?: boolean
    created_at?: boolean
    updated_at?: boolean
    competition?: boolean | competitionDefaultArgs<ExtArgs>
    members?: boolean | team$membersArgs<ExtArgs>
    submission?: boolean | team$submissionArgs<ExtArgs>
    _count?: boolean | TeamCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["team"]>



  export type teamSelectScalar = {
    id?: boolean
    competition_id?: boolean
    team_name?: boolean
    team_code?: boolean
    is_verified?: boolean
    verification_error?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type teamOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "competition_id" | "team_name" | "team_code" | "is_verified" | "verification_error" | "created_at" | "updated_at", ExtArgs["result"]["team"]>
  export type teamInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    competition?: boolean | competitionDefaultArgs<ExtArgs>
    members?: boolean | team$membersArgs<ExtArgs>
    submission?: boolean | team$submissionArgs<ExtArgs>
    _count?: boolean | TeamCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $teamPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "team"
    objects: {
      competition: Prisma.$competitionPayload<ExtArgs>
      members: Prisma.$team_memberPayload<ExtArgs>[]
      submission: Prisma.$competition_submissionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      competition_id: string
      team_name: string
      team_code: string
      is_verified: boolean
      verification_error: string | null
      created_at: Date
      updated_at: Date | null
    }, ExtArgs["result"]["team"]>
    composites: {}
  }

  type teamGetPayload<S extends boolean | null | undefined | teamDefaultArgs> = $Result.GetResult<Prisma.$teamPayload, S>

  type teamCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<teamFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TeamCountAggregateInputType | true
    }

  export interface teamDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['team'], meta: { name: 'team' } }
    /**
     * Find zero or one Team that matches the filter.
     * @param {teamFindUniqueArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends teamFindUniqueArgs>(args: SelectSubset<T, teamFindUniqueArgs<ExtArgs>>): Prisma__teamClient<$Result.GetResult<Prisma.$teamPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Team that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {teamFindUniqueOrThrowArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends teamFindUniqueOrThrowArgs>(args: SelectSubset<T, teamFindUniqueOrThrowArgs<ExtArgs>>): Prisma__teamClient<$Result.GetResult<Prisma.$teamPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Team that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {teamFindFirstArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends teamFindFirstArgs>(args?: SelectSubset<T, teamFindFirstArgs<ExtArgs>>): Prisma__teamClient<$Result.GetResult<Prisma.$teamPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Team that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {teamFindFirstOrThrowArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends teamFindFirstOrThrowArgs>(args?: SelectSubset<T, teamFindFirstOrThrowArgs<ExtArgs>>): Prisma__teamClient<$Result.GetResult<Prisma.$teamPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Teams that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {teamFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Teams
     * const teams = await prisma.team.findMany()
     * 
     * // Get first 10 Teams
     * const teams = await prisma.team.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const teamWithIdOnly = await prisma.team.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends teamFindManyArgs>(args?: SelectSubset<T, teamFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$teamPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Team.
     * @param {teamCreateArgs} args - Arguments to create a Team.
     * @example
     * // Create one Team
     * const Team = await prisma.team.create({
     *   data: {
     *     // ... data to create a Team
     *   }
     * })
     * 
     */
    create<T extends teamCreateArgs>(args: SelectSubset<T, teamCreateArgs<ExtArgs>>): Prisma__teamClient<$Result.GetResult<Prisma.$teamPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Teams.
     * @param {teamCreateManyArgs} args - Arguments to create many Teams.
     * @example
     * // Create many Teams
     * const team = await prisma.team.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends teamCreateManyArgs>(args?: SelectSubset<T, teamCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Team.
     * @param {teamDeleteArgs} args - Arguments to delete one Team.
     * @example
     * // Delete one Team
     * const Team = await prisma.team.delete({
     *   where: {
     *     // ... filter to delete one Team
     *   }
     * })
     * 
     */
    delete<T extends teamDeleteArgs>(args: SelectSubset<T, teamDeleteArgs<ExtArgs>>): Prisma__teamClient<$Result.GetResult<Prisma.$teamPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Team.
     * @param {teamUpdateArgs} args - Arguments to update one Team.
     * @example
     * // Update one Team
     * const team = await prisma.team.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends teamUpdateArgs>(args: SelectSubset<T, teamUpdateArgs<ExtArgs>>): Prisma__teamClient<$Result.GetResult<Prisma.$teamPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Teams.
     * @param {teamDeleteManyArgs} args - Arguments to filter Teams to delete.
     * @example
     * // Delete a few Teams
     * const { count } = await prisma.team.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends teamDeleteManyArgs>(args?: SelectSubset<T, teamDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Teams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {teamUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Teams
     * const team = await prisma.team.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends teamUpdateManyArgs>(args: SelectSubset<T, teamUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Team.
     * @param {teamUpsertArgs} args - Arguments to update or create a Team.
     * @example
     * // Update or create a Team
     * const team = await prisma.team.upsert({
     *   create: {
     *     // ... data to create a Team
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Team we want to update
     *   }
     * })
     */
    upsert<T extends teamUpsertArgs>(args: SelectSubset<T, teamUpsertArgs<ExtArgs>>): Prisma__teamClient<$Result.GetResult<Prisma.$teamPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Teams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {teamCountArgs} args - Arguments to filter Teams to count.
     * @example
     * // Count the number of Teams
     * const count = await prisma.team.count({
     *   where: {
     *     // ... the filter for the Teams we want to count
     *   }
     * })
    **/
    count<T extends teamCountArgs>(
      args?: Subset<T, teamCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TeamCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Team.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TeamAggregateArgs>(args: Subset<T, TeamAggregateArgs>): Prisma.PrismaPromise<GetTeamAggregateType<T>>

    /**
     * Group by Team.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {teamGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends teamGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: teamGroupByArgs['orderBy'] }
        : { orderBy?: teamGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, teamGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTeamGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the team model
   */
  readonly fields: teamFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for team.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__teamClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    competition<T extends competitionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, competitionDefaultArgs<ExtArgs>>): Prisma__competitionClient<$Result.GetResult<Prisma.$competitionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    members<T extends team$membersArgs<ExtArgs> = {}>(args?: Subset<T, team$membersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$team_memberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    submission<T extends team$submissionArgs<ExtArgs> = {}>(args?: Subset<T, team$submissionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$competition_submissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the team model
   */
  interface teamFieldRefs {
    readonly id: FieldRef<"team", 'String'>
    readonly competition_id: FieldRef<"team", 'String'>
    readonly team_name: FieldRef<"team", 'String'>
    readonly team_code: FieldRef<"team", 'String'>
    readonly is_verified: FieldRef<"team", 'Boolean'>
    readonly verification_error: FieldRef<"team", 'String'>
    readonly created_at: FieldRef<"team", 'DateTime'>
    readonly updated_at: FieldRef<"team", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * team findUnique
   */
  export type teamFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team
     */
    select?: teamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the team
     */
    omit?: teamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: teamInclude<ExtArgs> | null
    /**
     * Filter, which team to fetch.
     */
    where: teamWhereUniqueInput
  }

  /**
   * team findUniqueOrThrow
   */
  export type teamFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team
     */
    select?: teamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the team
     */
    omit?: teamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: teamInclude<ExtArgs> | null
    /**
     * Filter, which team to fetch.
     */
    where: teamWhereUniqueInput
  }

  /**
   * team findFirst
   */
  export type teamFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team
     */
    select?: teamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the team
     */
    omit?: teamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: teamInclude<ExtArgs> | null
    /**
     * Filter, which team to fetch.
     */
    where?: teamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of teams to fetch.
     */
    orderBy?: teamOrderByWithRelationInput | teamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for teams.
     */
    cursor?: teamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` teams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of teams.
     */
    distinct?: TeamScalarFieldEnum | TeamScalarFieldEnum[]
  }

  /**
   * team findFirstOrThrow
   */
  export type teamFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team
     */
    select?: teamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the team
     */
    omit?: teamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: teamInclude<ExtArgs> | null
    /**
     * Filter, which team to fetch.
     */
    where?: teamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of teams to fetch.
     */
    orderBy?: teamOrderByWithRelationInput | teamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for teams.
     */
    cursor?: teamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` teams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of teams.
     */
    distinct?: TeamScalarFieldEnum | TeamScalarFieldEnum[]
  }

  /**
   * team findMany
   */
  export type teamFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team
     */
    select?: teamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the team
     */
    omit?: teamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: teamInclude<ExtArgs> | null
    /**
     * Filter, which teams to fetch.
     */
    where?: teamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of teams to fetch.
     */
    orderBy?: teamOrderByWithRelationInput | teamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing teams.
     */
    cursor?: teamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` teams.
     */
    skip?: number
    distinct?: TeamScalarFieldEnum | TeamScalarFieldEnum[]
  }

  /**
   * team create
   */
  export type teamCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team
     */
    select?: teamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the team
     */
    omit?: teamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: teamInclude<ExtArgs> | null
    /**
     * The data needed to create a team.
     */
    data: XOR<teamCreateInput, teamUncheckedCreateInput>
  }

  /**
   * team createMany
   */
  export type teamCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many teams.
     */
    data: teamCreateManyInput | teamCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * team update
   */
  export type teamUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team
     */
    select?: teamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the team
     */
    omit?: teamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: teamInclude<ExtArgs> | null
    /**
     * The data needed to update a team.
     */
    data: XOR<teamUpdateInput, teamUncheckedUpdateInput>
    /**
     * Choose, which team to update.
     */
    where: teamWhereUniqueInput
  }

  /**
   * team updateMany
   */
  export type teamUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update teams.
     */
    data: XOR<teamUpdateManyMutationInput, teamUncheckedUpdateManyInput>
    /**
     * Filter which teams to update
     */
    where?: teamWhereInput
    /**
     * Limit how many teams to update.
     */
    limit?: number
  }

  /**
   * team upsert
   */
  export type teamUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team
     */
    select?: teamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the team
     */
    omit?: teamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: teamInclude<ExtArgs> | null
    /**
     * The filter to search for the team to update in case it exists.
     */
    where: teamWhereUniqueInput
    /**
     * In case the team found by the `where` argument doesn't exist, create a new team with this data.
     */
    create: XOR<teamCreateInput, teamUncheckedCreateInput>
    /**
     * In case the team was found with the provided `where` argument, update it with this data.
     */
    update: XOR<teamUpdateInput, teamUncheckedUpdateInput>
  }

  /**
   * team delete
   */
  export type teamDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team
     */
    select?: teamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the team
     */
    omit?: teamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: teamInclude<ExtArgs> | null
    /**
     * Filter which team to delete.
     */
    where: teamWhereUniqueInput
  }

  /**
   * team deleteMany
   */
  export type teamDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which teams to delete
     */
    where?: teamWhereInput
    /**
     * Limit how many teams to delete.
     */
    limit?: number
  }

  /**
   * team.members
   */
  export type team$membersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team_member
     */
    select?: team_memberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the team_member
     */
    omit?: team_memberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: team_memberInclude<ExtArgs> | null
    where?: team_memberWhereInput
    orderBy?: team_memberOrderByWithRelationInput | team_memberOrderByWithRelationInput[]
    cursor?: team_memberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Team_memberScalarFieldEnum | Team_memberScalarFieldEnum[]
  }

  /**
   * team.submission
   */
  export type team$submissionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the competition_submission
     */
    select?: competition_submissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the competition_submission
     */
    omit?: competition_submissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: competition_submissionInclude<ExtArgs> | null
    where?: competition_submissionWhereInput
    orderBy?: competition_submissionOrderByWithRelationInput | competition_submissionOrderByWithRelationInput[]
    cursor?: competition_submissionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Competition_submissionScalarFieldEnum | Competition_submissionScalarFieldEnum[]
  }

  /**
   * team without action
   */
  export type teamDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team
     */
    select?: teamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the team
     */
    omit?: teamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: teamInclude<ExtArgs> | null
  }


  /**
   * Model team_member
   */

  export type AggregateTeam_member = {
    _count: Team_memberCountAggregateOutputType | null
    _min: Team_memberMinAggregateOutputType | null
    _max: Team_memberMaxAggregateOutputType | null
  }

  export type Team_memberMinAggregateOutputType = {
    user_id: string | null
    team_id: string | null
    role: $Enums.team_member_role_enum | null
    kartu_media_id: string | null
    twibbon_media_id: string | null
    payment_proof_media_id: string | null
    is_verified: boolean | null
    verification_error: string | null
  }

  export type Team_memberMaxAggregateOutputType = {
    user_id: string | null
    team_id: string | null
    role: $Enums.team_member_role_enum | null
    kartu_media_id: string | null
    twibbon_media_id: string | null
    payment_proof_media_id: string | null
    is_verified: boolean | null
    verification_error: string | null
  }

  export type Team_memberCountAggregateOutputType = {
    user_id: number
    team_id: number
    role: number
    kartu_media_id: number
    twibbon_media_id: number
    payment_proof_media_id: number
    is_verified: number
    verification_error: number
    _all: number
  }


  export type Team_memberMinAggregateInputType = {
    user_id?: true
    team_id?: true
    role?: true
    kartu_media_id?: true
    twibbon_media_id?: true
    payment_proof_media_id?: true
    is_verified?: true
    verification_error?: true
  }

  export type Team_memberMaxAggregateInputType = {
    user_id?: true
    team_id?: true
    role?: true
    kartu_media_id?: true
    twibbon_media_id?: true
    payment_proof_media_id?: true
    is_verified?: true
    verification_error?: true
  }

  export type Team_memberCountAggregateInputType = {
    user_id?: true
    team_id?: true
    role?: true
    kartu_media_id?: true
    twibbon_media_id?: true
    payment_proof_media_id?: true
    is_verified?: true
    verification_error?: true
    _all?: true
  }

  export type Team_memberAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which team_member to aggregate.
     */
    where?: team_memberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of team_members to fetch.
     */
    orderBy?: team_memberOrderByWithRelationInput | team_memberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: team_memberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` team_members from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` team_members.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned team_members
    **/
    _count?: true | Team_memberCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Team_memberMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Team_memberMaxAggregateInputType
  }

  export type GetTeam_memberAggregateType<T extends Team_memberAggregateArgs> = {
        [P in keyof T & keyof AggregateTeam_member]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTeam_member[P]>
      : GetScalarType<T[P], AggregateTeam_member[P]>
  }




  export type team_memberGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: team_memberWhereInput
    orderBy?: team_memberOrderByWithAggregationInput | team_memberOrderByWithAggregationInput[]
    by: Team_memberScalarFieldEnum[] | Team_memberScalarFieldEnum
    having?: team_memberScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Team_memberCountAggregateInputType | true
    _min?: Team_memberMinAggregateInputType
    _max?: Team_memberMaxAggregateInputType
  }

  export type Team_memberGroupByOutputType = {
    user_id: string
    team_id: string
    role: $Enums.team_member_role_enum
    kartu_media_id: string | null
    twibbon_media_id: string | null
    payment_proof_media_id: string | null
    is_verified: boolean
    verification_error: string | null
    _count: Team_memberCountAggregateOutputType | null
    _min: Team_memberMinAggregateOutputType | null
    _max: Team_memberMaxAggregateOutputType | null
  }

  type GetTeam_memberGroupByPayload<T extends team_memberGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Team_memberGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Team_memberGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Team_memberGroupByOutputType[P]>
            : GetScalarType<T[P], Team_memberGroupByOutputType[P]>
        }
      >
    >


  export type team_memberSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    team_id?: boolean
    role?: boolean
    kartu_media_id?: boolean
    twibbon_media_id?: boolean
    payment_proof_media_id?: boolean
    is_verified?: boolean
    verification_error?: boolean
    paymentProof?: boolean | team_member$paymentProofArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
    team?: boolean | teamDefaultArgs<ExtArgs>
    twibbon?: boolean | team_member$twibbonArgs<ExtArgs>
    kartu?: boolean | team_member$kartuArgs<ExtArgs>
  }, ExtArgs["result"]["team_member"]>



  export type team_memberSelectScalar = {
    user_id?: boolean
    team_id?: boolean
    role?: boolean
    kartu_media_id?: boolean
    twibbon_media_id?: boolean
    payment_proof_media_id?: boolean
    is_verified?: boolean
    verification_error?: boolean
  }

  export type team_memberOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"user_id" | "team_id" | "role" | "kartu_media_id" | "twibbon_media_id" | "payment_proof_media_id" | "is_verified" | "verification_error", ExtArgs["result"]["team_member"]>
  export type team_memberInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    paymentProof?: boolean | team_member$paymentProofArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
    team?: boolean | teamDefaultArgs<ExtArgs>
    twibbon?: boolean | team_member$twibbonArgs<ExtArgs>
    kartu?: boolean | team_member$kartuArgs<ExtArgs>
  }

  export type $team_memberPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "team_member"
    objects: {
      paymentProof: Prisma.$mediaPayload<ExtArgs> | null
      user: Prisma.$userPayload<ExtArgs>
      team: Prisma.$teamPayload<ExtArgs>
      twibbon: Prisma.$mediaPayload<ExtArgs> | null
      kartu: Prisma.$mediaPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      user_id: string
      team_id: string
      role: $Enums.team_member_role_enum
      kartu_media_id: string | null
      twibbon_media_id: string | null
      payment_proof_media_id: string | null
      is_verified: boolean
      verification_error: string | null
    }, ExtArgs["result"]["team_member"]>
    composites: {}
  }

  type team_memberGetPayload<S extends boolean | null | undefined | team_memberDefaultArgs> = $Result.GetResult<Prisma.$team_memberPayload, S>

  type team_memberCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<team_memberFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Team_memberCountAggregateInputType | true
    }

  export interface team_memberDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['team_member'], meta: { name: 'team_member' } }
    /**
     * Find zero or one Team_member that matches the filter.
     * @param {team_memberFindUniqueArgs} args - Arguments to find a Team_member
     * @example
     * // Get one Team_member
     * const team_member = await prisma.team_member.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends team_memberFindUniqueArgs>(args: SelectSubset<T, team_memberFindUniqueArgs<ExtArgs>>): Prisma__team_memberClient<$Result.GetResult<Prisma.$team_memberPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Team_member that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {team_memberFindUniqueOrThrowArgs} args - Arguments to find a Team_member
     * @example
     * // Get one Team_member
     * const team_member = await prisma.team_member.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends team_memberFindUniqueOrThrowArgs>(args: SelectSubset<T, team_memberFindUniqueOrThrowArgs<ExtArgs>>): Prisma__team_memberClient<$Result.GetResult<Prisma.$team_memberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Team_member that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {team_memberFindFirstArgs} args - Arguments to find a Team_member
     * @example
     * // Get one Team_member
     * const team_member = await prisma.team_member.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends team_memberFindFirstArgs>(args?: SelectSubset<T, team_memberFindFirstArgs<ExtArgs>>): Prisma__team_memberClient<$Result.GetResult<Prisma.$team_memberPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Team_member that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {team_memberFindFirstOrThrowArgs} args - Arguments to find a Team_member
     * @example
     * // Get one Team_member
     * const team_member = await prisma.team_member.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends team_memberFindFirstOrThrowArgs>(args?: SelectSubset<T, team_memberFindFirstOrThrowArgs<ExtArgs>>): Prisma__team_memberClient<$Result.GetResult<Prisma.$team_memberPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Team_members that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {team_memberFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Team_members
     * const team_members = await prisma.team_member.findMany()
     * 
     * // Get first 10 Team_members
     * const team_members = await prisma.team_member.findMany({ take: 10 })
     * 
     * // Only select the `user_id`
     * const team_memberWithUser_idOnly = await prisma.team_member.findMany({ select: { user_id: true } })
     * 
     */
    findMany<T extends team_memberFindManyArgs>(args?: SelectSubset<T, team_memberFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$team_memberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Team_member.
     * @param {team_memberCreateArgs} args - Arguments to create a Team_member.
     * @example
     * // Create one Team_member
     * const Team_member = await prisma.team_member.create({
     *   data: {
     *     // ... data to create a Team_member
     *   }
     * })
     * 
     */
    create<T extends team_memberCreateArgs>(args: SelectSubset<T, team_memberCreateArgs<ExtArgs>>): Prisma__team_memberClient<$Result.GetResult<Prisma.$team_memberPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Team_members.
     * @param {team_memberCreateManyArgs} args - Arguments to create many Team_members.
     * @example
     * // Create many Team_members
     * const team_member = await prisma.team_member.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends team_memberCreateManyArgs>(args?: SelectSubset<T, team_memberCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Team_member.
     * @param {team_memberDeleteArgs} args - Arguments to delete one Team_member.
     * @example
     * // Delete one Team_member
     * const Team_member = await prisma.team_member.delete({
     *   where: {
     *     // ... filter to delete one Team_member
     *   }
     * })
     * 
     */
    delete<T extends team_memberDeleteArgs>(args: SelectSubset<T, team_memberDeleteArgs<ExtArgs>>): Prisma__team_memberClient<$Result.GetResult<Prisma.$team_memberPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Team_member.
     * @param {team_memberUpdateArgs} args - Arguments to update one Team_member.
     * @example
     * // Update one Team_member
     * const team_member = await prisma.team_member.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends team_memberUpdateArgs>(args: SelectSubset<T, team_memberUpdateArgs<ExtArgs>>): Prisma__team_memberClient<$Result.GetResult<Prisma.$team_memberPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Team_members.
     * @param {team_memberDeleteManyArgs} args - Arguments to filter Team_members to delete.
     * @example
     * // Delete a few Team_members
     * const { count } = await prisma.team_member.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends team_memberDeleteManyArgs>(args?: SelectSubset<T, team_memberDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Team_members.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {team_memberUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Team_members
     * const team_member = await prisma.team_member.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends team_memberUpdateManyArgs>(args: SelectSubset<T, team_memberUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Team_member.
     * @param {team_memberUpsertArgs} args - Arguments to update or create a Team_member.
     * @example
     * // Update or create a Team_member
     * const team_member = await prisma.team_member.upsert({
     *   create: {
     *     // ... data to create a Team_member
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Team_member we want to update
     *   }
     * })
     */
    upsert<T extends team_memberUpsertArgs>(args: SelectSubset<T, team_memberUpsertArgs<ExtArgs>>): Prisma__team_memberClient<$Result.GetResult<Prisma.$team_memberPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Team_members.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {team_memberCountArgs} args - Arguments to filter Team_members to count.
     * @example
     * // Count the number of Team_members
     * const count = await prisma.team_member.count({
     *   where: {
     *     // ... the filter for the Team_members we want to count
     *   }
     * })
    **/
    count<T extends team_memberCountArgs>(
      args?: Subset<T, team_memberCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Team_memberCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Team_member.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Team_memberAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Team_memberAggregateArgs>(args: Subset<T, Team_memberAggregateArgs>): Prisma.PrismaPromise<GetTeam_memberAggregateType<T>>

    /**
     * Group by Team_member.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {team_memberGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends team_memberGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: team_memberGroupByArgs['orderBy'] }
        : { orderBy?: team_memberGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, team_memberGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTeam_memberGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the team_member model
   */
  readonly fields: team_memberFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for team_member.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__team_memberClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    paymentProof<T extends team_member$paymentProofArgs<ExtArgs> = {}>(args?: Subset<T, team_member$paymentProofArgs<ExtArgs>>): Prisma__mediaClient<$Result.GetResult<Prisma.$mediaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    user<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    team<T extends teamDefaultArgs<ExtArgs> = {}>(args?: Subset<T, teamDefaultArgs<ExtArgs>>): Prisma__teamClient<$Result.GetResult<Prisma.$teamPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    twibbon<T extends team_member$twibbonArgs<ExtArgs> = {}>(args?: Subset<T, team_member$twibbonArgs<ExtArgs>>): Prisma__mediaClient<$Result.GetResult<Prisma.$mediaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    kartu<T extends team_member$kartuArgs<ExtArgs> = {}>(args?: Subset<T, team_member$kartuArgs<ExtArgs>>): Prisma__mediaClient<$Result.GetResult<Prisma.$mediaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the team_member model
   */
  interface team_memberFieldRefs {
    readonly user_id: FieldRef<"team_member", 'String'>
    readonly team_id: FieldRef<"team_member", 'String'>
    readonly role: FieldRef<"team_member", 'team_member_role_enum'>
    readonly kartu_media_id: FieldRef<"team_member", 'String'>
    readonly twibbon_media_id: FieldRef<"team_member", 'String'>
    readonly payment_proof_media_id: FieldRef<"team_member", 'String'>
    readonly is_verified: FieldRef<"team_member", 'Boolean'>
    readonly verification_error: FieldRef<"team_member", 'String'>
  }
    

  // Custom InputTypes
  /**
   * team_member findUnique
   */
  export type team_memberFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team_member
     */
    select?: team_memberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the team_member
     */
    omit?: team_memberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: team_memberInclude<ExtArgs> | null
    /**
     * Filter, which team_member to fetch.
     */
    where: team_memberWhereUniqueInput
  }

  /**
   * team_member findUniqueOrThrow
   */
  export type team_memberFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team_member
     */
    select?: team_memberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the team_member
     */
    omit?: team_memberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: team_memberInclude<ExtArgs> | null
    /**
     * Filter, which team_member to fetch.
     */
    where: team_memberWhereUniqueInput
  }

  /**
   * team_member findFirst
   */
  export type team_memberFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team_member
     */
    select?: team_memberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the team_member
     */
    omit?: team_memberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: team_memberInclude<ExtArgs> | null
    /**
     * Filter, which team_member to fetch.
     */
    where?: team_memberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of team_members to fetch.
     */
    orderBy?: team_memberOrderByWithRelationInput | team_memberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for team_members.
     */
    cursor?: team_memberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` team_members from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` team_members.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of team_members.
     */
    distinct?: Team_memberScalarFieldEnum | Team_memberScalarFieldEnum[]
  }

  /**
   * team_member findFirstOrThrow
   */
  export type team_memberFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team_member
     */
    select?: team_memberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the team_member
     */
    omit?: team_memberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: team_memberInclude<ExtArgs> | null
    /**
     * Filter, which team_member to fetch.
     */
    where?: team_memberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of team_members to fetch.
     */
    orderBy?: team_memberOrderByWithRelationInput | team_memberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for team_members.
     */
    cursor?: team_memberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` team_members from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` team_members.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of team_members.
     */
    distinct?: Team_memberScalarFieldEnum | Team_memberScalarFieldEnum[]
  }

  /**
   * team_member findMany
   */
  export type team_memberFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team_member
     */
    select?: team_memberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the team_member
     */
    omit?: team_memberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: team_memberInclude<ExtArgs> | null
    /**
     * Filter, which team_members to fetch.
     */
    where?: team_memberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of team_members to fetch.
     */
    orderBy?: team_memberOrderByWithRelationInput | team_memberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing team_members.
     */
    cursor?: team_memberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` team_members from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` team_members.
     */
    skip?: number
    distinct?: Team_memberScalarFieldEnum | Team_memberScalarFieldEnum[]
  }

  /**
   * team_member create
   */
  export type team_memberCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team_member
     */
    select?: team_memberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the team_member
     */
    omit?: team_memberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: team_memberInclude<ExtArgs> | null
    /**
     * The data needed to create a team_member.
     */
    data: XOR<team_memberCreateInput, team_memberUncheckedCreateInput>
  }

  /**
   * team_member createMany
   */
  export type team_memberCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many team_members.
     */
    data: team_memberCreateManyInput | team_memberCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * team_member update
   */
  export type team_memberUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team_member
     */
    select?: team_memberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the team_member
     */
    omit?: team_memberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: team_memberInclude<ExtArgs> | null
    /**
     * The data needed to update a team_member.
     */
    data: XOR<team_memberUpdateInput, team_memberUncheckedUpdateInput>
    /**
     * Choose, which team_member to update.
     */
    where: team_memberWhereUniqueInput
  }

  /**
   * team_member updateMany
   */
  export type team_memberUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update team_members.
     */
    data: XOR<team_memberUpdateManyMutationInput, team_memberUncheckedUpdateManyInput>
    /**
     * Filter which team_members to update
     */
    where?: team_memberWhereInput
    /**
     * Limit how many team_members to update.
     */
    limit?: number
  }

  /**
   * team_member upsert
   */
  export type team_memberUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team_member
     */
    select?: team_memberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the team_member
     */
    omit?: team_memberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: team_memberInclude<ExtArgs> | null
    /**
     * The filter to search for the team_member to update in case it exists.
     */
    where: team_memberWhereUniqueInput
    /**
     * In case the team_member found by the `where` argument doesn't exist, create a new team_member with this data.
     */
    create: XOR<team_memberCreateInput, team_memberUncheckedCreateInput>
    /**
     * In case the team_member was found with the provided `where` argument, update it with this data.
     */
    update: XOR<team_memberUpdateInput, team_memberUncheckedUpdateInput>
  }

  /**
   * team_member delete
   */
  export type team_memberDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team_member
     */
    select?: team_memberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the team_member
     */
    omit?: team_memberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: team_memberInclude<ExtArgs> | null
    /**
     * Filter which team_member to delete.
     */
    where: team_memberWhereUniqueInput
  }

  /**
   * team_member deleteMany
   */
  export type team_memberDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which team_members to delete
     */
    where?: team_memberWhereInput
    /**
     * Limit how many team_members to delete.
     */
    limit?: number
  }

  /**
   * team_member.paymentProof
   */
  export type team_member$paymentProofArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the media
     */
    select?: mediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the media
     */
    omit?: mediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mediaInclude<ExtArgs> | null
    where?: mediaWhereInput
  }

  /**
   * team_member.twibbon
   */
  export type team_member$twibbonArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the media
     */
    select?: mediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the media
     */
    omit?: mediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mediaInclude<ExtArgs> | null
    where?: mediaWhereInput
  }

  /**
   * team_member.kartu
   */
  export type team_member$kartuArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the media
     */
    select?: mediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the media
     */
    omit?: mediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mediaInclude<ExtArgs> | null
    where?: mediaWhereInput
  }

  /**
   * team_member without action
   */
  export type team_memberDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team_member
     */
    select?: team_memberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the team_member
     */
    omit?: team_memberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: team_memberInclude<ExtArgs> | null
  }


  /**
   * Model user
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    full_name: string | null
    birth_date: Date | null
    pendidikan: $Enums.education_enum | null
    nama_sekolah: string | null
    entry_source: string | null
    phone_number: string | null
    id_line: string | null
    id_discord: string | null
    id_instagram: string | null
    consent: boolean | null
    is_registration_complete: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    full_name: string | null
    birth_date: Date | null
    pendidikan: $Enums.education_enum | null
    nama_sekolah: string | null
    entry_source: string | null
    phone_number: string | null
    id_line: string | null
    id_discord: string | null
    id_instagram: string | null
    consent: boolean | null
    is_registration_complete: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    full_name: number
    birth_date: number
    pendidikan: number
    nama_sekolah: number
    entry_source: number
    phone_number: number
    id_line: number
    id_discord: number
    id_instagram: number
    consent: number
    is_registration_complete: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    full_name?: true
    birth_date?: true
    pendidikan?: true
    nama_sekolah?: true
    entry_source?: true
    phone_number?: true
    id_line?: true
    id_discord?: true
    id_instagram?: true
    consent?: true
    is_registration_complete?: true
    created_at?: true
    updated_at?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    full_name?: true
    birth_date?: true
    pendidikan?: true
    nama_sekolah?: true
    entry_source?: true
    phone_number?: true
    id_line?: true
    id_discord?: true
    id_instagram?: true
    consent?: true
    is_registration_complete?: true
    created_at?: true
    updated_at?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    full_name?: true
    birth_date?: true
    pendidikan?: true
    nama_sekolah?: true
    entry_source?: true
    phone_number?: true
    id_line?: true
    id_discord?: true
    id_instagram?: true
    consent?: true
    is_registration_complete?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user to aggregate.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type userGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userWhereInput
    orderBy?: userOrderByWithAggregationInput | userOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: userScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    full_name: string | null
    birth_date: Date | null
    pendidikan: $Enums.education_enum | null
    nama_sekolah: string | null
    entry_source: string | null
    phone_number: string | null
    id_line: string | null
    id_discord: string | null
    id_instagram: string | null
    consent: boolean
    is_registration_complete: boolean
    created_at: Date
    updated_at: Date | null
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends userGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type userSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    full_name?: boolean
    birth_date?: boolean
    pendidikan?: boolean
    nama_sekolah?: boolean
    entry_source?: boolean
    phone_number?: boolean
    id_line?: boolean
    id_discord?: boolean
    id_instagram?: boolean
    consent?: boolean
    is_registration_complete?: boolean
    created_at?: boolean
    updated_at?: boolean
    uploaded?: boolean | user$uploadedArgs<ExtArgs>
    identity?: boolean | user$identityArgs<ExtArgs>
    announcements?: boolean | user$announcementsArgs<ExtArgs>
    member?: boolean | user$memberArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type userSelectScalar = {
    id?: boolean
    email?: boolean
    full_name?: boolean
    birth_date?: boolean
    pendidikan?: boolean
    nama_sekolah?: boolean
    entry_source?: boolean
    phone_number?: boolean
    id_line?: boolean
    id_discord?: boolean
    id_instagram?: boolean
    consent?: boolean
    is_registration_complete?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type userOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "full_name" | "birth_date" | "pendidikan" | "nama_sekolah" | "entry_source" | "phone_number" | "id_line" | "id_discord" | "id_instagram" | "consent" | "is_registration_complete" | "created_at" | "updated_at", ExtArgs["result"]["user"]>
  export type userInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    uploaded?: boolean | user$uploadedArgs<ExtArgs>
    identity?: boolean | user$identityArgs<ExtArgs>
    announcements?: boolean | user$announcementsArgs<ExtArgs>
    member?: boolean | user$memberArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $userPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "user"
    objects: {
      uploaded: Prisma.$mediaPayload<ExtArgs>[]
      identity: Prisma.$user_identityPayload<ExtArgs> | null
      announcements: Prisma.$competition_announcementPayload<ExtArgs>[]
      member: Prisma.$team_memberPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      full_name: string | null
      birth_date: Date | null
      pendidikan: $Enums.education_enum | null
      nama_sekolah: string | null
      entry_source: string | null
      phone_number: string | null
      id_line: string | null
      id_discord: string | null
      id_instagram: string | null
      consent: boolean
      is_registration_complete: boolean
      created_at: Date
      updated_at: Date | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type userGetPayload<S extends boolean | null | undefined | userDefaultArgs> = $Result.GetResult<Prisma.$userPayload, S>

  type userCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<userFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface userDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user'], meta: { name: 'user' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {userFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends userFindUniqueArgs>(args: SelectSubset<T, userFindUniqueArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {userFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends userFindUniqueOrThrowArgs>(args: SelectSubset<T, userFindUniqueOrThrowArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends userFindFirstArgs>(args?: SelectSubset<T, userFindFirstArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends userFindFirstOrThrowArgs>(args?: SelectSubset<T, userFindFirstOrThrowArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends userFindManyArgs>(args?: SelectSubset<T, userFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {userCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends userCreateArgs>(args: SelectSubset<T, userCreateArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {userCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends userCreateManyArgs>(args?: SelectSubset<T, userCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {userDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends userDeleteArgs>(args: SelectSubset<T, userDeleteArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {userUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends userUpdateArgs>(args: SelectSubset<T, userUpdateArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {userDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends userDeleteManyArgs>(args?: SelectSubset<T, userDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends userUpdateManyArgs>(args: SelectSubset<T, userUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {userUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends userUpsertArgs>(args: SelectSubset<T, userUpsertArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends userCountArgs>(
      args?: Subset<T, userCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends userGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: userGroupByArgs['orderBy'] }
        : { orderBy?: userGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, userGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the user model
   */
  readonly fields: userFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__userClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    uploaded<T extends user$uploadedArgs<ExtArgs> = {}>(args?: Subset<T, user$uploadedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$mediaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    identity<T extends user$identityArgs<ExtArgs> = {}>(args?: Subset<T, user$identityArgs<ExtArgs>>): Prisma__user_identityClient<$Result.GetResult<Prisma.$user_identityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    announcements<T extends user$announcementsArgs<ExtArgs> = {}>(args?: Subset<T, user$announcementsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$competition_announcementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    member<T extends user$memberArgs<ExtArgs> = {}>(args?: Subset<T, user$memberArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$team_memberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the user model
   */
  interface userFieldRefs {
    readonly id: FieldRef<"user", 'String'>
    readonly email: FieldRef<"user", 'String'>
    readonly full_name: FieldRef<"user", 'String'>
    readonly birth_date: FieldRef<"user", 'DateTime'>
    readonly pendidikan: FieldRef<"user", 'education_enum'>
    readonly nama_sekolah: FieldRef<"user", 'String'>
    readonly entry_source: FieldRef<"user", 'String'>
    readonly phone_number: FieldRef<"user", 'String'>
    readonly id_line: FieldRef<"user", 'String'>
    readonly id_discord: FieldRef<"user", 'String'>
    readonly id_instagram: FieldRef<"user", 'String'>
    readonly consent: FieldRef<"user", 'Boolean'>
    readonly is_registration_complete: FieldRef<"user", 'Boolean'>
    readonly created_at: FieldRef<"user", 'DateTime'>
    readonly updated_at: FieldRef<"user", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * user findUnique
   */
  export type userFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }

  /**
   * user findUniqueOrThrow
   */
  export type userFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }

  /**
   * user findFirst
   */
  export type userFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user findFirstOrThrow
   */
  export type userFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user findMany
   */
  export type userFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user create
   */
  export type userCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The data needed to create a user.
     */
    data: XOR<userCreateInput, userUncheckedCreateInput>
  }

  /**
   * user createMany
   */
  export type userCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user update
   */
  export type userUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The data needed to update a user.
     */
    data: XOR<userUpdateInput, userUncheckedUpdateInput>
    /**
     * Choose, which user to update.
     */
    where: userWhereUniqueInput
  }

  /**
   * user updateMany
   */
  export type userUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: userWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * user upsert
   */
  export type userUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The filter to search for the user to update in case it exists.
     */
    where: userWhereUniqueInput
    /**
     * In case the user found by the `where` argument doesn't exist, create a new user with this data.
     */
    create: XOR<userCreateInput, userUncheckedCreateInput>
    /**
     * In case the user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userUpdateInput, userUncheckedUpdateInput>
  }

  /**
   * user delete
   */
  export type userDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter which user to delete.
     */
    where: userWhereUniqueInput
  }

  /**
   * user deleteMany
   */
  export type userDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: userWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * user.uploaded
   */
  export type user$uploadedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the media
     */
    select?: mediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the media
     */
    omit?: mediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mediaInclude<ExtArgs> | null
    where?: mediaWhereInput
    orderBy?: mediaOrderByWithRelationInput | mediaOrderByWithRelationInput[]
    cursor?: mediaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MediaScalarFieldEnum | MediaScalarFieldEnum[]
  }

  /**
   * user.identity
   */
  export type user$identityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_identity
     */
    select?: user_identitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_identity
     */
    omit?: user_identityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_identityInclude<ExtArgs> | null
    where?: user_identityWhereInput
  }

  /**
   * user.announcements
   */
  export type user$announcementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the competition_announcement
     */
    select?: competition_announcementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the competition_announcement
     */
    omit?: competition_announcementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: competition_announcementInclude<ExtArgs> | null
    where?: competition_announcementWhereInput
    orderBy?: competition_announcementOrderByWithRelationInput | competition_announcementOrderByWithRelationInput[]
    cursor?: competition_announcementWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Competition_announcementScalarFieldEnum | Competition_announcementScalarFieldEnum[]
  }

  /**
   * user.member
   */
  export type user$memberArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team_member
     */
    select?: team_memberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the team_member
     */
    omit?: team_memberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: team_memberInclude<ExtArgs> | null
    where?: team_memberWhereInput
    orderBy?: team_memberOrderByWithRelationInput | team_memberOrderByWithRelationInput[]
    cursor?: team_memberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Team_memberScalarFieldEnum | Team_memberScalarFieldEnum[]
  }

  /**
   * user without action
   */
  export type userDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
  }


  /**
   * Model user_identity
   */

  export type AggregateUser_identity = {
    _count: User_identityCountAggregateOutputType | null
    _min: User_identityMinAggregateOutputType | null
    _max: User_identityMaxAggregateOutputType | null
  }

  export type User_identityMinAggregateOutputType = {
    id: string | null
    email: string | null
    provider: $Enums.user_identity_provider_enum | null
    hash: string | null
    is_verified: boolean | null
    verification_token: string | null
    verification_token_expiration: Date | null
    password_recovery_token: string | null
    password_recovery_token_expiration: Date | null
    refresh_token: string | null
    role: $Enums.user_identity_role_enum | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type User_identityMaxAggregateOutputType = {
    id: string | null
    email: string | null
    provider: $Enums.user_identity_provider_enum | null
    hash: string | null
    is_verified: boolean | null
    verification_token: string | null
    verification_token_expiration: Date | null
    password_recovery_token: string | null
    password_recovery_token_expiration: Date | null
    refresh_token: string | null
    role: $Enums.user_identity_role_enum | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type User_identityCountAggregateOutputType = {
    id: number
    email: number
    provider: number
    hash: number
    is_verified: number
    verification_token: number
    verification_token_expiration: number
    password_recovery_token: number
    password_recovery_token_expiration: number
    refresh_token: number
    role: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type User_identityMinAggregateInputType = {
    id?: true
    email?: true
    provider?: true
    hash?: true
    is_verified?: true
    verification_token?: true
    verification_token_expiration?: true
    password_recovery_token?: true
    password_recovery_token_expiration?: true
    refresh_token?: true
    role?: true
    created_at?: true
    updated_at?: true
  }

  export type User_identityMaxAggregateInputType = {
    id?: true
    email?: true
    provider?: true
    hash?: true
    is_verified?: true
    verification_token?: true
    verification_token_expiration?: true
    password_recovery_token?: true
    password_recovery_token_expiration?: true
    refresh_token?: true
    role?: true
    created_at?: true
    updated_at?: true
  }

  export type User_identityCountAggregateInputType = {
    id?: true
    email?: true
    provider?: true
    hash?: true
    is_verified?: true
    verification_token?: true
    verification_token_expiration?: true
    password_recovery_token?: true
    password_recovery_token_expiration?: true
    refresh_token?: true
    role?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type User_identityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user_identity to aggregate.
     */
    where?: user_identityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_identities to fetch.
     */
    orderBy?: user_identityOrderByWithRelationInput | user_identityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: user_identityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_identities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_identities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned user_identities
    **/
    _count?: true | User_identityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: User_identityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: User_identityMaxAggregateInputType
  }

  export type GetUser_identityAggregateType<T extends User_identityAggregateArgs> = {
        [P in keyof T & keyof AggregateUser_identity]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser_identity[P]>
      : GetScalarType<T[P], AggregateUser_identity[P]>
  }




  export type user_identityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_identityWhereInput
    orderBy?: user_identityOrderByWithAggregationInput | user_identityOrderByWithAggregationInput[]
    by: User_identityScalarFieldEnum[] | User_identityScalarFieldEnum
    having?: user_identityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: User_identityCountAggregateInputType | true
    _min?: User_identityMinAggregateInputType
    _max?: User_identityMaxAggregateInputType
  }

  export type User_identityGroupByOutputType = {
    id: string
    email: string
    provider: $Enums.user_identity_provider_enum
    hash: string
    is_verified: boolean
    verification_token: string
    verification_token_expiration: Date
    password_recovery_token: string | null
    password_recovery_token_expiration: Date | null
    refresh_token: string | null
    role: $Enums.user_identity_role_enum | null
    created_at: Date
    updated_at: Date | null
    _count: User_identityCountAggregateOutputType | null
    _min: User_identityMinAggregateOutputType | null
    _max: User_identityMaxAggregateOutputType | null
  }

  type GetUser_identityGroupByPayload<T extends user_identityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<User_identityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof User_identityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], User_identityGroupByOutputType[P]>
            : GetScalarType<T[P], User_identityGroupByOutputType[P]>
        }
      >
    >


  export type user_identitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    provider?: boolean
    hash?: boolean
    is_verified?: boolean
    verification_token?: boolean
    verification_token_expiration?: boolean
    password_recovery_token?: boolean
    password_recovery_token_expiration?: boolean
    refresh_token?: boolean
    role?: boolean
    created_at?: boolean
    updated_at?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user_identity"]>



  export type user_identitySelectScalar = {
    id?: boolean
    email?: boolean
    provider?: boolean
    hash?: boolean
    is_verified?: boolean
    verification_token?: boolean
    verification_token_expiration?: boolean
    password_recovery_token?: boolean
    password_recovery_token_expiration?: boolean
    refresh_token?: boolean
    role?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type user_identityOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "provider" | "hash" | "is_verified" | "verification_token" | "verification_token_expiration" | "password_recovery_token" | "password_recovery_token_expiration" | "refresh_token" | "role" | "created_at" | "updated_at", ExtArgs["result"]["user_identity"]>
  export type user_identityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
  }

  export type $user_identityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "user_identity"
    objects: {
      user: Prisma.$userPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      provider: $Enums.user_identity_provider_enum
      hash: string
      is_verified: boolean
      verification_token: string
      verification_token_expiration: Date
      password_recovery_token: string | null
      password_recovery_token_expiration: Date | null
      refresh_token: string | null
      role: $Enums.user_identity_role_enum | null
      created_at: Date
      updated_at: Date | null
    }, ExtArgs["result"]["user_identity"]>
    composites: {}
  }

  type user_identityGetPayload<S extends boolean | null | undefined | user_identityDefaultArgs> = $Result.GetResult<Prisma.$user_identityPayload, S>

  type user_identityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<user_identityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: User_identityCountAggregateInputType | true
    }

  export interface user_identityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user_identity'], meta: { name: 'user_identity' } }
    /**
     * Find zero or one User_identity that matches the filter.
     * @param {user_identityFindUniqueArgs} args - Arguments to find a User_identity
     * @example
     * // Get one User_identity
     * const user_identity = await prisma.user_identity.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends user_identityFindUniqueArgs>(args: SelectSubset<T, user_identityFindUniqueArgs<ExtArgs>>): Prisma__user_identityClient<$Result.GetResult<Prisma.$user_identityPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User_identity that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {user_identityFindUniqueOrThrowArgs} args - Arguments to find a User_identity
     * @example
     * // Get one User_identity
     * const user_identity = await prisma.user_identity.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends user_identityFindUniqueOrThrowArgs>(args: SelectSubset<T, user_identityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__user_identityClient<$Result.GetResult<Prisma.$user_identityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User_identity that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_identityFindFirstArgs} args - Arguments to find a User_identity
     * @example
     * // Get one User_identity
     * const user_identity = await prisma.user_identity.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends user_identityFindFirstArgs>(args?: SelectSubset<T, user_identityFindFirstArgs<ExtArgs>>): Prisma__user_identityClient<$Result.GetResult<Prisma.$user_identityPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User_identity that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_identityFindFirstOrThrowArgs} args - Arguments to find a User_identity
     * @example
     * // Get one User_identity
     * const user_identity = await prisma.user_identity.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends user_identityFindFirstOrThrowArgs>(args?: SelectSubset<T, user_identityFindFirstOrThrowArgs<ExtArgs>>): Prisma__user_identityClient<$Result.GetResult<Prisma.$user_identityPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more User_identities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_identityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all User_identities
     * const user_identities = await prisma.user_identity.findMany()
     * 
     * // Get first 10 User_identities
     * const user_identities = await prisma.user_identity.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const user_identityWithIdOnly = await prisma.user_identity.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends user_identityFindManyArgs>(args?: SelectSubset<T, user_identityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_identityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User_identity.
     * @param {user_identityCreateArgs} args - Arguments to create a User_identity.
     * @example
     * // Create one User_identity
     * const User_identity = await prisma.user_identity.create({
     *   data: {
     *     // ... data to create a User_identity
     *   }
     * })
     * 
     */
    create<T extends user_identityCreateArgs>(args: SelectSubset<T, user_identityCreateArgs<ExtArgs>>): Prisma__user_identityClient<$Result.GetResult<Prisma.$user_identityPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many User_identities.
     * @param {user_identityCreateManyArgs} args - Arguments to create many User_identities.
     * @example
     * // Create many User_identities
     * const user_identity = await prisma.user_identity.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends user_identityCreateManyArgs>(args?: SelectSubset<T, user_identityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User_identity.
     * @param {user_identityDeleteArgs} args - Arguments to delete one User_identity.
     * @example
     * // Delete one User_identity
     * const User_identity = await prisma.user_identity.delete({
     *   where: {
     *     // ... filter to delete one User_identity
     *   }
     * })
     * 
     */
    delete<T extends user_identityDeleteArgs>(args: SelectSubset<T, user_identityDeleteArgs<ExtArgs>>): Prisma__user_identityClient<$Result.GetResult<Prisma.$user_identityPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User_identity.
     * @param {user_identityUpdateArgs} args - Arguments to update one User_identity.
     * @example
     * // Update one User_identity
     * const user_identity = await prisma.user_identity.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends user_identityUpdateArgs>(args: SelectSubset<T, user_identityUpdateArgs<ExtArgs>>): Prisma__user_identityClient<$Result.GetResult<Prisma.$user_identityPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more User_identities.
     * @param {user_identityDeleteManyArgs} args - Arguments to filter User_identities to delete.
     * @example
     * // Delete a few User_identities
     * const { count } = await prisma.user_identity.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends user_identityDeleteManyArgs>(args?: SelectSubset<T, user_identityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more User_identities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_identityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many User_identities
     * const user_identity = await prisma.user_identity.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends user_identityUpdateManyArgs>(args: SelectSubset<T, user_identityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User_identity.
     * @param {user_identityUpsertArgs} args - Arguments to update or create a User_identity.
     * @example
     * // Update or create a User_identity
     * const user_identity = await prisma.user_identity.upsert({
     *   create: {
     *     // ... data to create a User_identity
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User_identity we want to update
     *   }
     * })
     */
    upsert<T extends user_identityUpsertArgs>(args: SelectSubset<T, user_identityUpsertArgs<ExtArgs>>): Prisma__user_identityClient<$Result.GetResult<Prisma.$user_identityPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of User_identities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_identityCountArgs} args - Arguments to filter User_identities to count.
     * @example
     * // Count the number of User_identities
     * const count = await prisma.user_identity.count({
     *   where: {
     *     // ... the filter for the User_identities we want to count
     *   }
     * })
    **/
    count<T extends user_identityCountArgs>(
      args?: Subset<T, user_identityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], User_identityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User_identity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_identityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends User_identityAggregateArgs>(args: Subset<T, User_identityAggregateArgs>): Prisma.PrismaPromise<GetUser_identityAggregateType<T>>

    /**
     * Group by User_identity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_identityGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends user_identityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: user_identityGroupByArgs['orderBy'] }
        : { orderBy?: user_identityGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, user_identityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUser_identityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the user_identity model
   */
  readonly fields: user_identityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user_identity.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__user_identityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the user_identity model
   */
  interface user_identityFieldRefs {
    readonly id: FieldRef<"user_identity", 'String'>
    readonly email: FieldRef<"user_identity", 'String'>
    readonly provider: FieldRef<"user_identity", 'user_identity_provider_enum'>
    readonly hash: FieldRef<"user_identity", 'String'>
    readonly is_verified: FieldRef<"user_identity", 'Boolean'>
    readonly verification_token: FieldRef<"user_identity", 'String'>
    readonly verification_token_expiration: FieldRef<"user_identity", 'DateTime'>
    readonly password_recovery_token: FieldRef<"user_identity", 'String'>
    readonly password_recovery_token_expiration: FieldRef<"user_identity", 'DateTime'>
    readonly refresh_token: FieldRef<"user_identity", 'String'>
    readonly role: FieldRef<"user_identity", 'user_identity_role_enum'>
    readonly created_at: FieldRef<"user_identity", 'DateTime'>
    readonly updated_at: FieldRef<"user_identity", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * user_identity findUnique
   */
  export type user_identityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_identity
     */
    select?: user_identitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_identity
     */
    omit?: user_identityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_identityInclude<ExtArgs> | null
    /**
     * Filter, which user_identity to fetch.
     */
    where: user_identityWhereUniqueInput
  }

  /**
   * user_identity findUniqueOrThrow
   */
  export type user_identityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_identity
     */
    select?: user_identitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_identity
     */
    omit?: user_identityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_identityInclude<ExtArgs> | null
    /**
     * Filter, which user_identity to fetch.
     */
    where: user_identityWhereUniqueInput
  }

  /**
   * user_identity findFirst
   */
  export type user_identityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_identity
     */
    select?: user_identitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_identity
     */
    omit?: user_identityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_identityInclude<ExtArgs> | null
    /**
     * Filter, which user_identity to fetch.
     */
    where?: user_identityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_identities to fetch.
     */
    orderBy?: user_identityOrderByWithRelationInput | user_identityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for user_identities.
     */
    cursor?: user_identityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_identities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_identities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of user_identities.
     */
    distinct?: User_identityScalarFieldEnum | User_identityScalarFieldEnum[]
  }

  /**
   * user_identity findFirstOrThrow
   */
  export type user_identityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_identity
     */
    select?: user_identitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_identity
     */
    omit?: user_identityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_identityInclude<ExtArgs> | null
    /**
     * Filter, which user_identity to fetch.
     */
    where?: user_identityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_identities to fetch.
     */
    orderBy?: user_identityOrderByWithRelationInput | user_identityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for user_identities.
     */
    cursor?: user_identityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_identities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_identities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of user_identities.
     */
    distinct?: User_identityScalarFieldEnum | User_identityScalarFieldEnum[]
  }

  /**
   * user_identity findMany
   */
  export type user_identityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_identity
     */
    select?: user_identitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_identity
     */
    omit?: user_identityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_identityInclude<ExtArgs> | null
    /**
     * Filter, which user_identities to fetch.
     */
    where?: user_identityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_identities to fetch.
     */
    orderBy?: user_identityOrderByWithRelationInput | user_identityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing user_identities.
     */
    cursor?: user_identityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_identities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_identities.
     */
    skip?: number
    distinct?: User_identityScalarFieldEnum | User_identityScalarFieldEnum[]
  }

  /**
   * user_identity create
   */
  export type user_identityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_identity
     */
    select?: user_identitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_identity
     */
    omit?: user_identityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_identityInclude<ExtArgs> | null
    /**
     * The data needed to create a user_identity.
     */
    data: XOR<user_identityCreateInput, user_identityUncheckedCreateInput>
  }

  /**
   * user_identity createMany
   */
  export type user_identityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many user_identities.
     */
    data: user_identityCreateManyInput | user_identityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user_identity update
   */
  export type user_identityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_identity
     */
    select?: user_identitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_identity
     */
    omit?: user_identityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_identityInclude<ExtArgs> | null
    /**
     * The data needed to update a user_identity.
     */
    data: XOR<user_identityUpdateInput, user_identityUncheckedUpdateInput>
    /**
     * Choose, which user_identity to update.
     */
    where: user_identityWhereUniqueInput
  }

  /**
   * user_identity updateMany
   */
  export type user_identityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update user_identities.
     */
    data: XOR<user_identityUpdateManyMutationInput, user_identityUncheckedUpdateManyInput>
    /**
     * Filter which user_identities to update
     */
    where?: user_identityWhereInput
    /**
     * Limit how many user_identities to update.
     */
    limit?: number
  }

  /**
   * user_identity upsert
   */
  export type user_identityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_identity
     */
    select?: user_identitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_identity
     */
    omit?: user_identityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_identityInclude<ExtArgs> | null
    /**
     * The filter to search for the user_identity to update in case it exists.
     */
    where: user_identityWhereUniqueInput
    /**
     * In case the user_identity found by the `where` argument doesn't exist, create a new user_identity with this data.
     */
    create: XOR<user_identityCreateInput, user_identityUncheckedCreateInput>
    /**
     * In case the user_identity was found with the provided `where` argument, update it with this data.
     */
    update: XOR<user_identityUpdateInput, user_identityUncheckedUpdateInput>
  }

  /**
   * user_identity delete
   */
  export type user_identityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_identity
     */
    select?: user_identitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_identity
     */
    omit?: user_identityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_identityInclude<ExtArgs> | null
    /**
     * Filter which user_identity to delete.
     */
    where: user_identityWhereUniqueInput
  }

  /**
   * user_identity deleteMany
   */
  export type user_identityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user_identities to delete
     */
    where?: user_identityWhereInput
    /**
     * Limit how many user_identities to delete.
     */
    limit?: number
  }

  /**
   * user_identity without action
   */
  export type user_identityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_identity
     */
    select?: user_identitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_identity
     */
    omit?: user_identityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_identityInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const CompetitionScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    max_team_member: 'max_team_member',
    guide_book_url: 'guide_book_url'
  };

  export type CompetitionScalarFieldEnum = (typeof CompetitionScalarFieldEnum)[keyof typeof CompetitionScalarFieldEnum]


  export const Competition_announcementScalarFieldEnum: {
    id: 'id',
    competition_id: 'competition_id',
    author_id: 'author_id',
    title: 'title',
    description: 'description',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type Competition_announcementScalarFieldEnum = (typeof Competition_announcementScalarFieldEnum)[keyof typeof Competition_announcementScalarFieldEnum]


  export const Competition_submissionScalarFieldEnum: {
    team_id: 'team_id',
    competition_id: 'competition_id',
    media_id: 'media_id',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type Competition_submissionScalarFieldEnum = (typeof Competition_submissionScalarFieldEnum)[keyof typeof Competition_submissionScalarFieldEnum]


  export const Competition_timelineScalarFieldEnum: {
    id: 'id',
    competition_id: 'competition_id',
    title: 'title',
    date: 'date'
  };

  export type Competition_timelineScalarFieldEnum = (typeof Competition_timelineScalarFieldEnum)[keyof typeof Competition_timelineScalarFieldEnum]


  export const MediaScalarFieldEnum: {
    id: 'id',
    uploader_id: 'uploader_id',
    name: 'name',
    grouping: 'grouping',
    type: 'type',
    url: 'url',
    created_at: 'created_at'
  };

  export type MediaScalarFieldEnum = (typeof MediaScalarFieldEnum)[keyof typeof MediaScalarFieldEnum]


  export const TeamScalarFieldEnum: {
    id: 'id',
    competition_id: 'competition_id',
    team_name: 'team_name',
    team_code: 'team_code',
    is_verified: 'is_verified',
    verification_error: 'verification_error',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type TeamScalarFieldEnum = (typeof TeamScalarFieldEnum)[keyof typeof TeamScalarFieldEnum]


  export const Team_memberScalarFieldEnum: {
    user_id: 'user_id',
    team_id: 'team_id',
    role: 'role',
    kartu_media_id: 'kartu_media_id',
    twibbon_media_id: 'twibbon_media_id',
    payment_proof_media_id: 'payment_proof_media_id',
    is_verified: 'is_verified',
    verification_error: 'verification_error'
  };

  export type Team_memberScalarFieldEnum = (typeof Team_memberScalarFieldEnum)[keyof typeof Team_memberScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    full_name: 'full_name',
    birth_date: 'birth_date',
    pendidikan: 'pendidikan',
    nama_sekolah: 'nama_sekolah',
    entry_source: 'entry_source',
    phone_number: 'phone_number',
    id_line: 'id_line',
    id_discord: 'id_discord',
    id_instagram: 'id_instagram',
    consent: 'consent',
    is_registration_complete: 'is_registration_complete',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const User_identityScalarFieldEnum: {
    id: 'id',
    email: 'email',
    provider: 'provider',
    hash: 'hash',
    is_verified: 'is_verified',
    verification_token: 'verification_token',
    verification_token_expiration: 'verification_token_expiration',
    password_recovery_token: 'password_recovery_token',
    password_recovery_token_expiration: 'password_recovery_token_expiration',
    refresh_token: 'refresh_token',
    role: 'role',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type User_identityScalarFieldEnum = (typeof User_identityScalarFieldEnum)[keyof typeof User_identityScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const competitionOrderByRelevanceFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    guide_book_url: 'guide_book_url'
  };

  export type competitionOrderByRelevanceFieldEnum = (typeof competitionOrderByRelevanceFieldEnum)[keyof typeof competitionOrderByRelevanceFieldEnum]


  export const competition_announcementOrderByRelevanceFieldEnum: {
    id: 'id',
    competition_id: 'competition_id',
    author_id: 'author_id',
    title: 'title',
    description: 'description'
  };

  export type competition_announcementOrderByRelevanceFieldEnum = (typeof competition_announcementOrderByRelevanceFieldEnum)[keyof typeof competition_announcementOrderByRelevanceFieldEnum]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const competition_submissionOrderByRelevanceFieldEnum: {
    team_id: 'team_id',
    competition_id: 'competition_id',
    media_id: 'media_id'
  };

  export type competition_submissionOrderByRelevanceFieldEnum = (typeof competition_submissionOrderByRelevanceFieldEnum)[keyof typeof competition_submissionOrderByRelevanceFieldEnum]


  export const competition_timelineOrderByRelevanceFieldEnum: {
    id: 'id',
    competition_id: 'competition_id',
    title: 'title'
  };

  export type competition_timelineOrderByRelevanceFieldEnum = (typeof competition_timelineOrderByRelevanceFieldEnum)[keyof typeof competition_timelineOrderByRelevanceFieldEnum]


  export const mediaOrderByRelevanceFieldEnum: {
    id: 'id',
    uploader_id: 'uploader_id',
    name: 'name',
    url: 'url'
  };

  export type mediaOrderByRelevanceFieldEnum = (typeof mediaOrderByRelevanceFieldEnum)[keyof typeof mediaOrderByRelevanceFieldEnum]


  export const teamOrderByRelevanceFieldEnum: {
    id: 'id',
    competition_id: 'competition_id',
    team_name: 'team_name',
    team_code: 'team_code',
    verification_error: 'verification_error'
  };

  export type teamOrderByRelevanceFieldEnum = (typeof teamOrderByRelevanceFieldEnum)[keyof typeof teamOrderByRelevanceFieldEnum]


  export const team_memberOrderByRelevanceFieldEnum: {
    user_id: 'user_id',
    team_id: 'team_id',
    kartu_media_id: 'kartu_media_id',
    twibbon_media_id: 'twibbon_media_id',
    payment_proof_media_id: 'payment_proof_media_id',
    verification_error: 'verification_error'
  };

  export type team_memberOrderByRelevanceFieldEnum = (typeof team_memberOrderByRelevanceFieldEnum)[keyof typeof team_memberOrderByRelevanceFieldEnum]


  export const userOrderByRelevanceFieldEnum: {
    id: 'id',
    email: 'email',
    full_name: 'full_name',
    nama_sekolah: 'nama_sekolah',
    entry_source: 'entry_source',
    phone_number: 'phone_number',
    id_line: 'id_line',
    id_discord: 'id_discord',
    id_instagram: 'id_instagram'
  };

  export type userOrderByRelevanceFieldEnum = (typeof userOrderByRelevanceFieldEnum)[keyof typeof userOrderByRelevanceFieldEnum]


  export const user_identityOrderByRelevanceFieldEnum: {
    id: 'id',
    email: 'email',
    hash: 'hash',
    verification_token: 'verification_token',
    password_recovery_token: 'password_recovery_token',
    refresh_token: 'refresh_token'
  };

  export type user_identityOrderByRelevanceFieldEnum = (typeof user_identityOrderByRelevanceFieldEnum)[keyof typeof user_identityOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'media_grouping_enum'
   */
  export type Enummedia_grouping_enumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'media_grouping_enum'>
    


  /**
   * Reference to a field of type 'media_type_enum'
   */
  export type Enummedia_type_enumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'media_type_enum'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'team_member_role_enum'
   */
  export type Enumteam_member_role_enumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'team_member_role_enum'>
    


  /**
   * Reference to a field of type 'education_enum'
   */
  export type Enumeducation_enumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'education_enum'>
    


  /**
   * Reference to a field of type 'user_identity_provider_enum'
   */
  export type Enumuser_identity_provider_enumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'user_identity_provider_enum'>
    


  /**
   * Reference to a field of type 'user_identity_role_enum'
   */
  export type Enumuser_identity_role_enumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'user_identity_role_enum'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type competitionWhereInput = {
    AND?: competitionWhereInput | competitionWhereInput[]
    OR?: competitionWhereInput[]
    NOT?: competitionWhereInput | competitionWhereInput[]
    id?: StringFilter<"competition"> | string
    title?: StringFilter<"competition"> | string
    description?: StringFilter<"competition"> | string
    max_team_member?: IntFilter<"competition"> | number
    guide_book_url?: StringFilter<"competition"> | string
    announcements?: Competition_announcementListRelationFilter
    submissions?: Competition_submissionListRelationFilter
    timelines?: Competition_timelineListRelationFilter
    teams?: TeamListRelationFilter
  }

  export type competitionOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    max_team_member?: SortOrder
    guide_book_url?: SortOrder
    announcements?: competition_announcementOrderByRelationAggregateInput
    submissions?: competition_submissionOrderByRelationAggregateInput
    timelines?: competition_timelineOrderByRelationAggregateInput
    teams?: teamOrderByRelationAggregateInput
    _relevance?: competitionOrderByRelevanceInput
  }

  export type competitionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: competitionWhereInput | competitionWhereInput[]
    OR?: competitionWhereInput[]
    NOT?: competitionWhereInput | competitionWhereInput[]
    title?: StringFilter<"competition"> | string
    description?: StringFilter<"competition"> | string
    max_team_member?: IntFilter<"competition"> | number
    guide_book_url?: StringFilter<"competition"> | string
    announcements?: Competition_announcementListRelationFilter
    submissions?: Competition_submissionListRelationFilter
    timelines?: Competition_timelineListRelationFilter
    teams?: TeamListRelationFilter
  }, "id">

  export type competitionOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    max_team_member?: SortOrder
    guide_book_url?: SortOrder
    _count?: competitionCountOrderByAggregateInput
    _avg?: competitionAvgOrderByAggregateInput
    _max?: competitionMaxOrderByAggregateInput
    _min?: competitionMinOrderByAggregateInput
    _sum?: competitionSumOrderByAggregateInput
  }

  export type competitionScalarWhereWithAggregatesInput = {
    AND?: competitionScalarWhereWithAggregatesInput | competitionScalarWhereWithAggregatesInput[]
    OR?: competitionScalarWhereWithAggregatesInput[]
    NOT?: competitionScalarWhereWithAggregatesInput | competitionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"competition"> | string
    title?: StringWithAggregatesFilter<"competition"> | string
    description?: StringWithAggregatesFilter<"competition"> | string
    max_team_member?: IntWithAggregatesFilter<"competition"> | number
    guide_book_url?: StringWithAggregatesFilter<"competition"> | string
  }

  export type competition_announcementWhereInput = {
    AND?: competition_announcementWhereInput | competition_announcementWhereInput[]
    OR?: competition_announcementWhereInput[]
    NOT?: competition_announcementWhereInput | competition_announcementWhereInput[]
    id?: StringFilter<"competition_announcement"> | string
    competition_id?: StringFilter<"competition_announcement"> | string
    author_id?: StringFilter<"competition_announcement"> | string
    title?: StringFilter<"competition_announcement"> | string
    description?: StringFilter<"competition_announcement"> | string
    created_at?: DateTimeFilter<"competition_announcement"> | Date | string
    updated_at?: DateTimeFilter<"competition_announcement"> | Date | string
    competition?: XOR<CompetitionScalarRelationFilter, competitionWhereInput>
    author?: XOR<UserScalarRelationFilter, userWhereInput>
  }

  export type competition_announcementOrderByWithRelationInput = {
    id?: SortOrder
    competition_id?: SortOrder
    author_id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    competition?: competitionOrderByWithRelationInput
    author?: userOrderByWithRelationInput
    _relevance?: competition_announcementOrderByRelevanceInput
  }

  export type competition_announcementWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: competition_announcementWhereInput | competition_announcementWhereInput[]
    OR?: competition_announcementWhereInput[]
    NOT?: competition_announcementWhereInput | competition_announcementWhereInput[]
    competition_id?: StringFilter<"competition_announcement"> | string
    author_id?: StringFilter<"competition_announcement"> | string
    title?: StringFilter<"competition_announcement"> | string
    description?: StringFilter<"competition_announcement"> | string
    created_at?: DateTimeFilter<"competition_announcement"> | Date | string
    updated_at?: DateTimeFilter<"competition_announcement"> | Date | string
    competition?: XOR<CompetitionScalarRelationFilter, competitionWhereInput>
    author?: XOR<UserScalarRelationFilter, userWhereInput>
  }, "id">

  export type competition_announcementOrderByWithAggregationInput = {
    id?: SortOrder
    competition_id?: SortOrder
    author_id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: competition_announcementCountOrderByAggregateInput
    _max?: competition_announcementMaxOrderByAggregateInput
    _min?: competition_announcementMinOrderByAggregateInput
  }

  export type competition_announcementScalarWhereWithAggregatesInput = {
    AND?: competition_announcementScalarWhereWithAggregatesInput | competition_announcementScalarWhereWithAggregatesInput[]
    OR?: competition_announcementScalarWhereWithAggregatesInput[]
    NOT?: competition_announcementScalarWhereWithAggregatesInput | competition_announcementScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"competition_announcement"> | string
    competition_id?: StringWithAggregatesFilter<"competition_announcement"> | string
    author_id?: StringWithAggregatesFilter<"competition_announcement"> | string
    title?: StringWithAggregatesFilter<"competition_announcement"> | string
    description?: StringWithAggregatesFilter<"competition_announcement"> | string
    created_at?: DateTimeWithAggregatesFilter<"competition_announcement"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"competition_announcement"> | Date | string
  }

  export type competition_submissionWhereInput = {
    AND?: competition_submissionWhereInput | competition_submissionWhereInput[]
    OR?: competition_submissionWhereInput[]
    NOT?: competition_submissionWhereInput | competition_submissionWhereInput[]
    team_id?: StringFilter<"competition_submission"> | string
    competition_id?: StringFilter<"competition_submission"> | string
    media_id?: StringFilter<"competition_submission"> | string
    created_at?: DateTimeFilter<"competition_submission"> | Date | string
    updated_at?: DateTimeNullableFilter<"competition_submission"> | Date | string | null
    team?: XOR<TeamScalarRelationFilter, teamWhereInput>
    competition?: XOR<CompetitionScalarRelationFilter, competitionWhereInput>
    media?: XOR<MediaScalarRelationFilter, mediaWhereInput>
  }

  export type competition_submissionOrderByWithRelationInput = {
    team_id?: SortOrder
    competition_id?: SortOrder
    media_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrderInput | SortOrder
    team?: teamOrderByWithRelationInput
    competition?: competitionOrderByWithRelationInput
    media?: mediaOrderByWithRelationInput
    _relevance?: competition_submissionOrderByRelevanceInput
  }

  export type competition_submissionWhereUniqueInput = Prisma.AtLeast<{
    media_id?: string
    team_id_competition_id?: competition_submissionTeam_idCompetition_idCompoundUniqueInput
    AND?: competition_submissionWhereInput | competition_submissionWhereInput[]
    OR?: competition_submissionWhereInput[]
    NOT?: competition_submissionWhereInput | competition_submissionWhereInput[]
    team_id?: StringFilter<"competition_submission"> | string
    competition_id?: StringFilter<"competition_submission"> | string
    created_at?: DateTimeFilter<"competition_submission"> | Date | string
    updated_at?: DateTimeNullableFilter<"competition_submission"> | Date | string | null
    team?: XOR<TeamScalarRelationFilter, teamWhereInput>
    competition?: XOR<CompetitionScalarRelationFilter, competitionWhereInput>
    media?: XOR<MediaScalarRelationFilter, mediaWhereInput>
  }, "team_id_competition_id" | "media_id">

  export type competition_submissionOrderByWithAggregationInput = {
    team_id?: SortOrder
    competition_id?: SortOrder
    media_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: competition_submissionCountOrderByAggregateInput
    _max?: competition_submissionMaxOrderByAggregateInput
    _min?: competition_submissionMinOrderByAggregateInput
  }

  export type competition_submissionScalarWhereWithAggregatesInput = {
    AND?: competition_submissionScalarWhereWithAggregatesInput | competition_submissionScalarWhereWithAggregatesInput[]
    OR?: competition_submissionScalarWhereWithAggregatesInput[]
    NOT?: competition_submissionScalarWhereWithAggregatesInput | competition_submissionScalarWhereWithAggregatesInput[]
    team_id?: StringWithAggregatesFilter<"competition_submission"> | string
    competition_id?: StringWithAggregatesFilter<"competition_submission"> | string
    media_id?: StringWithAggregatesFilter<"competition_submission"> | string
    created_at?: DateTimeWithAggregatesFilter<"competition_submission"> | Date | string
    updated_at?: DateTimeNullableWithAggregatesFilter<"competition_submission"> | Date | string | null
  }

  export type competition_timelineWhereInput = {
    AND?: competition_timelineWhereInput | competition_timelineWhereInput[]
    OR?: competition_timelineWhereInput[]
    NOT?: competition_timelineWhereInput | competition_timelineWhereInput[]
    id?: StringFilter<"competition_timeline"> | string
    competition_id?: StringFilter<"competition_timeline"> | string
    title?: StringFilter<"competition_timeline"> | string
    date?: DateTimeFilter<"competition_timeline"> | Date | string
    competition?: XOR<CompetitionScalarRelationFilter, competitionWhereInput>
  }

  export type competition_timelineOrderByWithRelationInput = {
    id?: SortOrder
    competition_id?: SortOrder
    title?: SortOrder
    date?: SortOrder
    competition?: competitionOrderByWithRelationInput
    _relevance?: competition_timelineOrderByRelevanceInput
  }

  export type competition_timelineWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: competition_timelineWhereInput | competition_timelineWhereInput[]
    OR?: competition_timelineWhereInput[]
    NOT?: competition_timelineWhereInput | competition_timelineWhereInput[]
    competition_id?: StringFilter<"competition_timeline"> | string
    title?: StringFilter<"competition_timeline"> | string
    date?: DateTimeFilter<"competition_timeline"> | Date | string
    competition?: XOR<CompetitionScalarRelationFilter, competitionWhereInput>
  }, "id">

  export type competition_timelineOrderByWithAggregationInput = {
    id?: SortOrder
    competition_id?: SortOrder
    title?: SortOrder
    date?: SortOrder
    _count?: competition_timelineCountOrderByAggregateInput
    _max?: competition_timelineMaxOrderByAggregateInput
    _min?: competition_timelineMinOrderByAggregateInput
  }

  export type competition_timelineScalarWhereWithAggregatesInput = {
    AND?: competition_timelineScalarWhereWithAggregatesInput | competition_timelineScalarWhereWithAggregatesInput[]
    OR?: competition_timelineScalarWhereWithAggregatesInput[]
    NOT?: competition_timelineScalarWhereWithAggregatesInput | competition_timelineScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"competition_timeline"> | string
    competition_id?: StringWithAggregatesFilter<"competition_timeline"> | string
    title?: StringWithAggregatesFilter<"competition_timeline"> | string
    date?: DateTimeWithAggregatesFilter<"competition_timeline"> | Date | string
  }

  export type mediaWhereInput = {
    AND?: mediaWhereInput | mediaWhereInput[]
    OR?: mediaWhereInput[]
    NOT?: mediaWhereInput | mediaWhereInput[]
    id?: StringFilter<"media"> | string
    uploader_id?: StringFilter<"media"> | string
    name?: StringFilter<"media"> | string
    grouping?: Enummedia_grouping_enumNullableFilter<"media"> | $Enums.media_grouping_enum | null
    type?: Enummedia_type_enumFilter<"media"> | $Enums.media_type_enum
    url?: StringFilter<"media"> | string
    created_at?: DateTimeFilter<"media"> | Date | string
    uploader?: XOR<UserScalarRelationFilter, userWhereInput>
    paymentproof?: XOR<Team_memberNullableScalarRelationFilter, team_memberWhereInput> | null
    twibbon?: XOR<Team_memberNullableScalarRelationFilter, team_memberWhereInput> | null
    kartu?: XOR<Team_memberNullableScalarRelationFilter, team_memberWhereInput> | null
    submission?: XOR<Competition_submissionNullableScalarRelationFilter, competition_submissionWhereInput> | null
  }

  export type mediaOrderByWithRelationInput = {
    id?: SortOrder
    uploader_id?: SortOrder
    name?: SortOrder
    grouping?: SortOrderInput | SortOrder
    type?: SortOrder
    url?: SortOrder
    created_at?: SortOrder
    uploader?: userOrderByWithRelationInput
    paymentproof?: team_memberOrderByWithRelationInput
    twibbon?: team_memberOrderByWithRelationInput
    kartu?: team_memberOrderByWithRelationInput
    submission?: competition_submissionOrderByWithRelationInput
    _relevance?: mediaOrderByRelevanceInput
  }

  export type mediaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: mediaWhereInput | mediaWhereInput[]
    OR?: mediaWhereInput[]
    NOT?: mediaWhereInput | mediaWhereInput[]
    uploader_id?: StringFilter<"media"> | string
    grouping?: Enummedia_grouping_enumNullableFilter<"media"> | $Enums.media_grouping_enum | null
    type?: Enummedia_type_enumFilter<"media"> | $Enums.media_type_enum
    url?: StringFilter<"media"> | string
    created_at?: DateTimeFilter<"media"> | Date | string
    uploader?: XOR<UserScalarRelationFilter, userWhereInput>
    paymentproof?: XOR<Team_memberNullableScalarRelationFilter, team_memberWhereInput> | null
    twibbon?: XOR<Team_memberNullableScalarRelationFilter, team_memberWhereInput> | null
    kartu?: XOR<Team_memberNullableScalarRelationFilter, team_memberWhereInput> | null
    submission?: XOR<Competition_submissionNullableScalarRelationFilter, competition_submissionWhereInput> | null
  }, "id" | "name">

  export type mediaOrderByWithAggregationInput = {
    id?: SortOrder
    uploader_id?: SortOrder
    name?: SortOrder
    grouping?: SortOrderInput | SortOrder
    type?: SortOrder
    url?: SortOrder
    created_at?: SortOrder
    _count?: mediaCountOrderByAggregateInput
    _max?: mediaMaxOrderByAggregateInput
    _min?: mediaMinOrderByAggregateInput
  }

  export type mediaScalarWhereWithAggregatesInput = {
    AND?: mediaScalarWhereWithAggregatesInput | mediaScalarWhereWithAggregatesInput[]
    OR?: mediaScalarWhereWithAggregatesInput[]
    NOT?: mediaScalarWhereWithAggregatesInput | mediaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"media"> | string
    uploader_id?: StringWithAggregatesFilter<"media"> | string
    name?: StringWithAggregatesFilter<"media"> | string
    grouping?: Enummedia_grouping_enumNullableWithAggregatesFilter<"media"> | $Enums.media_grouping_enum | null
    type?: Enummedia_type_enumWithAggregatesFilter<"media"> | $Enums.media_type_enum
    url?: StringWithAggregatesFilter<"media"> | string
    created_at?: DateTimeWithAggregatesFilter<"media"> | Date | string
  }

  export type teamWhereInput = {
    AND?: teamWhereInput | teamWhereInput[]
    OR?: teamWhereInput[]
    NOT?: teamWhereInput | teamWhereInput[]
    id?: StringFilter<"team"> | string
    competition_id?: StringFilter<"team"> | string
    team_name?: StringFilter<"team"> | string
    team_code?: StringFilter<"team"> | string
    is_verified?: BoolFilter<"team"> | boolean
    verification_error?: StringNullableFilter<"team"> | string | null
    created_at?: DateTimeFilter<"team"> | Date | string
    updated_at?: DateTimeNullableFilter<"team"> | Date | string | null
    competition?: XOR<CompetitionScalarRelationFilter, competitionWhereInput>
    members?: Team_memberListRelationFilter
    submission?: Competition_submissionListRelationFilter
  }

  export type teamOrderByWithRelationInput = {
    id?: SortOrder
    competition_id?: SortOrder
    team_name?: SortOrder
    team_code?: SortOrder
    is_verified?: SortOrder
    verification_error?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrderInput | SortOrder
    competition?: competitionOrderByWithRelationInput
    members?: team_memberOrderByRelationAggregateInput
    submission?: competition_submissionOrderByRelationAggregateInput
    _relevance?: teamOrderByRelevanceInput
  }

  export type teamWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    team_code?: string
    AND?: teamWhereInput | teamWhereInput[]
    OR?: teamWhereInput[]
    NOT?: teamWhereInput | teamWhereInput[]
    competition_id?: StringFilter<"team"> | string
    team_name?: StringFilter<"team"> | string
    is_verified?: BoolFilter<"team"> | boolean
    verification_error?: StringNullableFilter<"team"> | string | null
    created_at?: DateTimeFilter<"team"> | Date | string
    updated_at?: DateTimeNullableFilter<"team"> | Date | string | null
    competition?: XOR<CompetitionScalarRelationFilter, competitionWhereInput>
    members?: Team_memberListRelationFilter
    submission?: Competition_submissionListRelationFilter
  }, "id" | "team_code">

  export type teamOrderByWithAggregationInput = {
    id?: SortOrder
    competition_id?: SortOrder
    team_name?: SortOrder
    team_code?: SortOrder
    is_verified?: SortOrder
    verification_error?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: teamCountOrderByAggregateInput
    _max?: teamMaxOrderByAggregateInput
    _min?: teamMinOrderByAggregateInput
  }

  export type teamScalarWhereWithAggregatesInput = {
    AND?: teamScalarWhereWithAggregatesInput | teamScalarWhereWithAggregatesInput[]
    OR?: teamScalarWhereWithAggregatesInput[]
    NOT?: teamScalarWhereWithAggregatesInput | teamScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"team"> | string
    competition_id?: StringWithAggregatesFilter<"team"> | string
    team_name?: StringWithAggregatesFilter<"team"> | string
    team_code?: StringWithAggregatesFilter<"team"> | string
    is_verified?: BoolWithAggregatesFilter<"team"> | boolean
    verification_error?: StringNullableWithAggregatesFilter<"team"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"team"> | Date | string
    updated_at?: DateTimeNullableWithAggregatesFilter<"team"> | Date | string | null
  }

  export type team_memberWhereInput = {
    AND?: team_memberWhereInput | team_memberWhereInput[]
    OR?: team_memberWhereInput[]
    NOT?: team_memberWhereInput | team_memberWhereInput[]
    user_id?: StringFilter<"team_member"> | string
    team_id?: StringFilter<"team_member"> | string
    role?: Enumteam_member_role_enumFilter<"team_member"> | $Enums.team_member_role_enum
    kartu_media_id?: StringNullableFilter<"team_member"> | string | null
    twibbon_media_id?: StringNullableFilter<"team_member"> | string | null
    payment_proof_media_id?: StringNullableFilter<"team_member"> | string | null
    is_verified?: BoolFilter<"team_member"> | boolean
    verification_error?: StringNullableFilter<"team_member"> | string | null
    paymentProof?: XOR<MediaNullableScalarRelationFilter, mediaWhereInput> | null
    user?: XOR<UserScalarRelationFilter, userWhereInput>
    team?: XOR<TeamScalarRelationFilter, teamWhereInput>
    twibbon?: XOR<MediaNullableScalarRelationFilter, mediaWhereInput> | null
    kartu?: XOR<MediaNullableScalarRelationFilter, mediaWhereInput> | null
  }

  export type team_memberOrderByWithRelationInput = {
    user_id?: SortOrder
    team_id?: SortOrder
    role?: SortOrder
    kartu_media_id?: SortOrderInput | SortOrder
    twibbon_media_id?: SortOrderInput | SortOrder
    payment_proof_media_id?: SortOrderInput | SortOrder
    is_verified?: SortOrder
    verification_error?: SortOrderInput | SortOrder
    paymentProof?: mediaOrderByWithRelationInput
    user?: userOrderByWithRelationInput
    team?: teamOrderByWithRelationInput
    twibbon?: mediaOrderByWithRelationInput
    kartu?: mediaOrderByWithRelationInput
    _relevance?: team_memberOrderByRelevanceInput
  }

  export type team_memberWhereUniqueInput = Prisma.AtLeast<{
    kartu_media_id?: string
    twibbon_media_id?: string
    payment_proof_media_id?: string
    user_id_team_id?: team_memberUser_idTeam_idCompoundUniqueInput
    AND?: team_memberWhereInput | team_memberWhereInput[]
    OR?: team_memberWhereInput[]
    NOT?: team_memberWhereInput | team_memberWhereInput[]
    user_id?: StringFilter<"team_member"> | string
    team_id?: StringFilter<"team_member"> | string
    role?: Enumteam_member_role_enumFilter<"team_member"> | $Enums.team_member_role_enum
    is_verified?: BoolFilter<"team_member"> | boolean
    verification_error?: StringNullableFilter<"team_member"> | string | null
    paymentProof?: XOR<MediaNullableScalarRelationFilter, mediaWhereInput> | null
    user?: XOR<UserScalarRelationFilter, userWhereInput>
    team?: XOR<TeamScalarRelationFilter, teamWhereInput>
    twibbon?: XOR<MediaNullableScalarRelationFilter, mediaWhereInput> | null
    kartu?: XOR<MediaNullableScalarRelationFilter, mediaWhereInput> | null
  }, "user_id_team_id" | "kartu_media_id" | "twibbon_media_id" | "payment_proof_media_id">

  export type team_memberOrderByWithAggregationInput = {
    user_id?: SortOrder
    team_id?: SortOrder
    role?: SortOrder
    kartu_media_id?: SortOrderInput | SortOrder
    twibbon_media_id?: SortOrderInput | SortOrder
    payment_proof_media_id?: SortOrderInput | SortOrder
    is_verified?: SortOrder
    verification_error?: SortOrderInput | SortOrder
    _count?: team_memberCountOrderByAggregateInput
    _max?: team_memberMaxOrderByAggregateInput
    _min?: team_memberMinOrderByAggregateInput
  }

  export type team_memberScalarWhereWithAggregatesInput = {
    AND?: team_memberScalarWhereWithAggregatesInput | team_memberScalarWhereWithAggregatesInput[]
    OR?: team_memberScalarWhereWithAggregatesInput[]
    NOT?: team_memberScalarWhereWithAggregatesInput | team_memberScalarWhereWithAggregatesInput[]
    user_id?: StringWithAggregatesFilter<"team_member"> | string
    team_id?: StringWithAggregatesFilter<"team_member"> | string
    role?: Enumteam_member_role_enumWithAggregatesFilter<"team_member"> | $Enums.team_member_role_enum
    kartu_media_id?: StringNullableWithAggregatesFilter<"team_member"> | string | null
    twibbon_media_id?: StringNullableWithAggregatesFilter<"team_member"> | string | null
    payment_proof_media_id?: StringNullableWithAggregatesFilter<"team_member"> | string | null
    is_verified?: BoolWithAggregatesFilter<"team_member"> | boolean
    verification_error?: StringNullableWithAggregatesFilter<"team_member"> | string | null
  }

  export type userWhereInput = {
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    id?: StringFilter<"user"> | string
    email?: StringFilter<"user"> | string
    full_name?: StringNullableFilter<"user"> | string | null
    birth_date?: DateTimeNullableFilter<"user"> | Date | string | null
    pendidikan?: Enumeducation_enumNullableFilter<"user"> | $Enums.education_enum | null
    nama_sekolah?: StringNullableFilter<"user"> | string | null
    entry_source?: StringNullableFilter<"user"> | string | null
    phone_number?: StringNullableFilter<"user"> | string | null
    id_line?: StringNullableFilter<"user"> | string | null
    id_discord?: StringNullableFilter<"user"> | string | null
    id_instagram?: StringNullableFilter<"user"> | string | null
    consent?: BoolFilter<"user"> | boolean
    is_registration_complete?: BoolFilter<"user"> | boolean
    created_at?: DateTimeFilter<"user"> | Date | string
    updated_at?: DateTimeNullableFilter<"user"> | Date | string | null
    uploaded?: MediaListRelationFilter
    identity?: XOR<User_identityNullableScalarRelationFilter, user_identityWhereInput> | null
    announcements?: Competition_announcementListRelationFilter
    member?: Team_memberListRelationFilter
  }

  export type userOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    full_name?: SortOrderInput | SortOrder
    birth_date?: SortOrderInput | SortOrder
    pendidikan?: SortOrderInput | SortOrder
    nama_sekolah?: SortOrderInput | SortOrder
    entry_source?: SortOrderInput | SortOrder
    phone_number?: SortOrderInput | SortOrder
    id_line?: SortOrderInput | SortOrder
    id_discord?: SortOrderInput | SortOrder
    id_instagram?: SortOrderInput | SortOrder
    consent?: SortOrder
    is_registration_complete?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrderInput | SortOrder
    uploaded?: mediaOrderByRelationAggregateInput
    identity?: user_identityOrderByWithRelationInput
    announcements?: competition_announcementOrderByRelationAggregateInput
    member?: team_memberOrderByRelationAggregateInput
    _relevance?: userOrderByRelevanceInput
  }

  export type userWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    full_name?: StringNullableFilter<"user"> | string | null
    birth_date?: DateTimeNullableFilter<"user"> | Date | string | null
    pendidikan?: Enumeducation_enumNullableFilter<"user"> | $Enums.education_enum | null
    nama_sekolah?: StringNullableFilter<"user"> | string | null
    entry_source?: StringNullableFilter<"user"> | string | null
    phone_number?: StringNullableFilter<"user"> | string | null
    id_line?: StringNullableFilter<"user"> | string | null
    id_discord?: StringNullableFilter<"user"> | string | null
    id_instagram?: StringNullableFilter<"user"> | string | null
    consent?: BoolFilter<"user"> | boolean
    is_registration_complete?: BoolFilter<"user"> | boolean
    created_at?: DateTimeFilter<"user"> | Date | string
    updated_at?: DateTimeNullableFilter<"user"> | Date | string | null
    uploaded?: MediaListRelationFilter
    identity?: XOR<User_identityNullableScalarRelationFilter, user_identityWhereInput> | null
    announcements?: Competition_announcementListRelationFilter
    member?: Team_memberListRelationFilter
  }, "id" | "email">

  export type userOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    full_name?: SortOrderInput | SortOrder
    birth_date?: SortOrderInput | SortOrder
    pendidikan?: SortOrderInput | SortOrder
    nama_sekolah?: SortOrderInput | SortOrder
    entry_source?: SortOrderInput | SortOrder
    phone_number?: SortOrderInput | SortOrder
    id_line?: SortOrderInput | SortOrder
    id_discord?: SortOrderInput | SortOrder
    id_instagram?: SortOrderInput | SortOrder
    consent?: SortOrder
    is_registration_complete?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: userCountOrderByAggregateInput
    _max?: userMaxOrderByAggregateInput
    _min?: userMinOrderByAggregateInput
  }

  export type userScalarWhereWithAggregatesInput = {
    AND?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    OR?: userScalarWhereWithAggregatesInput[]
    NOT?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"user"> | string
    email?: StringWithAggregatesFilter<"user"> | string
    full_name?: StringNullableWithAggregatesFilter<"user"> | string | null
    birth_date?: DateTimeNullableWithAggregatesFilter<"user"> | Date | string | null
    pendidikan?: Enumeducation_enumNullableWithAggregatesFilter<"user"> | $Enums.education_enum | null
    nama_sekolah?: StringNullableWithAggregatesFilter<"user"> | string | null
    entry_source?: StringNullableWithAggregatesFilter<"user"> | string | null
    phone_number?: StringNullableWithAggregatesFilter<"user"> | string | null
    id_line?: StringNullableWithAggregatesFilter<"user"> | string | null
    id_discord?: StringNullableWithAggregatesFilter<"user"> | string | null
    id_instagram?: StringNullableWithAggregatesFilter<"user"> | string | null
    consent?: BoolWithAggregatesFilter<"user"> | boolean
    is_registration_complete?: BoolWithAggregatesFilter<"user"> | boolean
    created_at?: DateTimeWithAggregatesFilter<"user"> | Date | string
    updated_at?: DateTimeNullableWithAggregatesFilter<"user"> | Date | string | null
  }

  export type user_identityWhereInput = {
    AND?: user_identityWhereInput | user_identityWhereInput[]
    OR?: user_identityWhereInput[]
    NOT?: user_identityWhereInput | user_identityWhereInput[]
    id?: StringFilter<"user_identity"> | string
    email?: StringFilter<"user_identity"> | string
    provider?: Enumuser_identity_provider_enumFilter<"user_identity"> | $Enums.user_identity_provider_enum
    hash?: StringFilter<"user_identity"> | string
    is_verified?: BoolFilter<"user_identity"> | boolean
    verification_token?: StringFilter<"user_identity"> | string
    verification_token_expiration?: DateTimeFilter<"user_identity"> | Date | string
    password_recovery_token?: StringNullableFilter<"user_identity"> | string | null
    password_recovery_token_expiration?: DateTimeNullableFilter<"user_identity"> | Date | string | null
    refresh_token?: StringNullableFilter<"user_identity"> | string | null
    role?: Enumuser_identity_role_enumNullableFilter<"user_identity"> | $Enums.user_identity_role_enum | null
    created_at?: DateTimeFilter<"user_identity"> | Date | string
    updated_at?: DateTimeNullableFilter<"user_identity"> | Date | string | null
    user?: XOR<UserScalarRelationFilter, userWhereInput>
  }

  export type user_identityOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    provider?: SortOrder
    hash?: SortOrder
    is_verified?: SortOrder
    verification_token?: SortOrder
    verification_token_expiration?: SortOrder
    password_recovery_token?: SortOrderInput | SortOrder
    password_recovery_token_expiration?: SortOrderInput | SortOrder
    refresh_token?: SortOrderInput | SortOrder
    role?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrderInput | SortOrder
    user?: userOrderByWithRelationInput
    _relevance?: user_identityOrderByRelevanceInput
  }

  export type user_identityWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: user_identityWhereInput | user_identityWhereInput[]
    OR?: user_identityWhereInput[]
    NOT?: user_identityWhereInput | user_identityWhereInput[]
    provider?: Enumuser_identity_provider_enumFilter<"user_identity"> | $Enums.user_identity_provider_enum
    hash?: StringFilter<"user_identity"> | string
    is_verified?: BoolFilter<"user_identity"> | boolean
    verification_token?: StringFilter<"user_identity"> | string
    verification_token_expiration?: DateTimeFilter<"user_identity"> | Date | string
    password_recovery_token?: StringNullableFilter<"user_identity"> | string | null
    password_recovery_token_expiration?: DateTimeNullableFilter<"user_identity"> | Date | string | null
    refresh_token?: StringNullableFilter<"user_identity"> | string | null
    role?: Enumuser_identity_role_enumNullableFilter<"user_identity"> | $Enums.user_identity_role_enum | null
    created_at?: DateTimeFilter<"user_identity"> | Date | string
    updated_at?: DateTimeNullableFilter<"user_identity"> | Date | string | null
    user?: XOR<UserScalarRelationFilter, userWhereInput>
  }, "id" | "email">

  export type user_identityOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    provider?: SortOrder
    hash?: SortOrder
    is_verified?: SortOrder
    verification_token?: SortOrder
    verification_token_expiration?: SortOrder
    password_recovery_token?: SortOrderInput | SortOrder
    password_recovery_token_expiration?: SortOrderInput | SortOrder
    refresh_token?: SortOrderInput | SortOrder
    role?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: user_identityCountOrderByAggregateInput
    _max?: user_identityMaxOrderByAggregateInput
    _min?: user_identityMinOrderByAggregateInput
  }

  export type user_identityScalarWhereWithAggregatesInput = {
    AND?: user_identityScalarWhereWithAggregatesInput | user_identityScalarWhereWithAggregatesInput[]
    OR?: user_identityScalarWhereWithAggregatesInput[]
    NOT?: user_identityScalarWhereWithAggregatesInput | user_identityScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"user_identity"> | string
    email?: StringWithAggregatesFilter<"user_identity"> | string
    provider?: Enumuser_identity_provider_enumWithAggregatesFilter<"user_identity"> | $Enums.user_identity_provider_enum
    hash?: StringWithAggregatesFilter<"user_identity"> | string
    is_verified?: BoolWithAggregatesFilter<"user_identity"> | boolean
    verification_token?: StringWithAggregatesFilter<"user_identity"> | string
    verification_token_expiration?: DateTimeWithAggregatesFilter<"user_identity"> | Date | string
    password_recovery_token?: StringNullableWithAggregatesFilter<"user_identity"> | string | null
    password_recovery_token_expiration?: DateTimeNullableWithAggregatesFilter<"user_identity"> | Date | string | null
    refresh_token?: StringNullableWithAggregatesFilter<"user_identity"> | string | null
    role?: Enumuser_identity_role_enumNullableWithAggregatesFilter<"user_identity"> | $Enums.user_identity_role_enum | null
    created_at?: DateTimeWithAggregatesFilter<"user_identity"> | Date | string
    updated_at?: DateTimeNullableWithAggregatesFilter<"user_identity"> | Date | string | null
  }

  export type competitionCreateInput = {
    id: string
    title: string
    description: string
    max_team_member?: number
    guide_book_url: string
    announcements?: competition_announcementCreateNestedManyWithoutCompetitionInput
    submissions?: competition_submissionCreateNestedManyWithoutCompetitionInput
    timelines?: competition_timelineCreateNestedManyWithoutCompetitionInput
    teams?: teamCreateNestedManyWithoutCompetitionInput
  }

  export type competitionUncheckedCreateInput = {
    id: string
    title: string
    description: string
    max_team_member?: number
    guide_book_url: string
    announcements?: competition_announcementUncheckedCreateNestedManyWithoutCompetitionInput
    submissions?: competition_submissionUncheckedCreateNestedManyWithoutCompetitionInput
    timelines?: competition_timelineUncheckedCreateNestedManyWithoutCompetitionInput
    teams?: teamUncheckedCreateNestedManyWithoutCompetitionInput
  }

  export type competitionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    max_team_member?: IntFieldUpdateOperationsInput | number
    guide_book_url?: StringFieldUpdateOperationsInput | string
    announcements?: competition_announcementUpdateManyWithoutCompetitionNestedInput
    submissions?: competition_submissionUpdateManyWithoutCompetitionNestedInput
    timelines?: competition_timelineUpdateManyWithoutCompetitionNestedInput
    teams?: teamUpdateManyWithoutCompetitionNestedInput
  }

  export type competitionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    max_team_member?: IntFieldUpdateOperationsInput | number
    guide_book_url?: StringFieldUpdateOperationsInput | string
    announcements?: competition_announcementUncheckedUpdateManyWithoutCompetitionNestedInput
    submissions?: competition_submissionUncheckedUpdateManyWithoutCompetitionNestedInput
    timelines?: competition_timelineUncheckedUpdateManyWithoutCompetitionNestedInput
    teams?: teamUncheckedUpdateManyWithoutCompetitionNestedInput
  }

  export type competitionCreateManyInput = {
    id: string
    title: string
    description: string
    max_team_member?: number
    guide_book_url: string
  }

  export type competitionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    max_team_member?: IntFieldUpdateOperationsInput | number
    guide_book_url?: StringFieldUpdateOperationsInput | string
  }

  export type competitionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    max_team_member?: IntFieldUpdateOperationsInput | number
    guide_book_url?: StringFieldUpdateOperationsInput | string
  }

  export type competition_announcementCreateInput = {
    id: string
    title: string
    description: string
    created_at?: Date | string
    updated_at?: Date | string
    competition: competitionCreateNestedOneWithoutAnnouncementsInput
    author: userCreateNestedOneWithoutAnnouncementsInput
  }

  export type competition_announcementUncheckedCreateInput = {
    id: string
    competition_id: string
    author_id: string
    title: string
    description: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type competition_announcementUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    competition?: competitionUpdateOneRequiredWithoutAnnouncementsNestedInput
    author?: userUpdateOneRequiredWithoutAnnouncementsNestedInput
  }

  export type competition_announcementUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    competition_id?: StringFieldUpdateOperationsInput | string
    author_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type competition_announcementCreateManyInput = {
    id: string
    competition_id: string
    author_id: string
    title: string
    description: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type competition_announcementUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type competition_announcementUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    competition_id?: StringFieldUpdateOperationsInput | string
    author_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type competition_submissionCreateInput = {
    created_at?: Date | string
    updated_at?: Date | string | null
    team: teamCreateNestedOneWithoutSubmissionInput
    competition: competitionCreateNestedOneWithoutSubmissionsInput
    media: mediaCreateNestedOneWithoutSubmissionInput
  }

  export type competition_submissionUncheckedCreateInput = {
    team_id: string
    competition_id: string
    media_id: string
    created_at?: Date | string
    updated_at?: Date | string | null
  }

  export type competition_submissionUpdateInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    team?: teamUpdateOneRequiredWithoutSubmissionNestedInput
    competition?: competitionUpdateOneRequiredWithoutSubmissionsNestedInput
    media?: mediaUpdateOneRequiredWithoutSubmissionNestedInput
  }

  export type competition_submissionUncheckedUpdateInput = {
    team_id?: StringFieldUpdateOperationsInput | string
    competition_id?: StringFieldUpdateOperationsInput | string
    media_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type competition_submissionCreateManyInput = {
    team_id: string
    competition_id: string
    media_id: string
    created_at?: Date | string
    updated_at?: Date | string | null
  }

  export type competition_submissionUpdateManyMutationInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type competition_submissionUncheckedUpdateManyInput = {
    team_id?: StringFieldUpdateOperationsInput | string
    competition_id?: StringFieldUpdateOperationsInput | string
    media_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type competition_timelineCreateInput = {
    id: string
    title: string
    date: Date | string
    competition: competitionCreateNestedOneWithoutTimelinesInput
  }

  export type competition_timelineUncheckedCreateInput = {
    id: string
    competition_id: string
    title: string
    date: Date | string
  }

  export type competition_timelineUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    competition?: competitionUpdateOneRequiredWithoutTimelinesNestedInput
  }

  export type competition_timelineUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    competition_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type competition_timelineCreateManyInput = {
    id: string
    competition_id: string
    title: string
    date: Date | string
  }

  export type competition_timelineUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type competition_timelineUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    competition_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type mediaCreateInput = {
    id: string
    name: string
    grouping?: $Enums.media_grouping_enum | null
    type: $Enums.media_type_enum
    url: string
    created_at?: Date | string
    uploader: userCreateNestedOneWithoutUploadedInput
    paymentproof?: team_memberCreateNestedOneWithoutPaymentProofInput
    twibbon?: team_memberCreateNestedOneWithoutTwibbonInput
    kartu?: team_memberCreateNestedOneWithoutKartuInput
    submission?: competition_submissionCreateNestedOneWithoutMediaInput
  }

  export type mediaUncheckedCreateInput = {
    id: string
    uploader_id: string
    name: string
    grouping?: $Enums.media_grouping_enum | null
    type: $Enums.media_type_enum
    url: string
    created_at?: Date | string
    paymentproof?: team_memberUncheckedCreateNestedOneWithoutPaymentProofInput
    twibbon?: team_memberUncheckedCreateNestedOneWithoutTwibbonInput
    kartu?: team_memberUncheckedCreateNestedOneWithoutKartuInput
    submission?: competition_submissionUncheckedCreateNestedOneWithoutMediaInput
  }

  export type mediaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    grouping?: NullableEnummedia_grouping_enumFieldUpdateOperationsInput | $Enums.media_grouping_enum | null
    type?: Enummedia_type_enumFieldUpdateOperationsInput | $Enums.media_type_enum
    url?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    uploader?: userUpdateOneRequiredWithoutUploadedNestedInput
    paymentproof?: team_memberUpdateOneWithoutPaymentProofNestedInput
    twibbon?: team_memberUpdateOneWithoutTwibbonNestedInput
    kartu?: team_memberUpdateOneWithoutKartuNestedInput
    submission?: competition_submissionUpdateOneWithoutMediaNestedInput
  }

  export type mediaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    uploader_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    grouping?: NullableEnummedia_grouping_enumFieldUpdateOperationsInput | $Enums.media_grouping_enum | null
    type?: Enummedia_type_enumFieldUpdateOperationsInput | $Enums.media_type_enum
    url?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentproof?: team_memberUncheckedUpdateOneWithoutPaymentProofNestedInput
    twibbon?: team_memberUncheckedUpdateOneWithoutTwibbonNestedInput
    kartu?: team_memberUncheckedUpdateOneWithoutKartuNestedInput
    submission?: competition_submissionUncheckedUpdateOneWithoutMediaNestedInput
  }

  export type mediaCreateManyInput = {
    id: string
    uploader_id: string
    name: string
    grouping?: $Enums.media_grouping_enum | null
    type: $Enums.media_type_enum
    url: string
    created_at?: Date | string
  }

  export type mediaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    grouping?: NullableEnummedia_grouping_enumFieldUpdateOperationsInput | $Enums.media_grouping_enum | null
    type?: Enummedia_type_enumFieldUpdateOperationsInput | $Enums.media_type_enum
    url?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type mediaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    uploader_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    grouping?: NullableEnummedia_grouping_enumFieldUpdateOperationsInput | $Enums.media_grouping_enum | null
    type?: Enummedia_type_enumFieldUpdateOperationsInput | $Enums.media_type_enum
    url?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type teamCreateInput = {
    id: string
    team_name: string
    team_code: string
    is_verified?: boolean
    verification_error?: string | null
    created_at?: Date | string
    updated_at?: Date | string | null
    competition: competitionCreateNestedOneWithoutTeamsInput
    members?: team_memberCreateNestedManyWithoutTeamInput
    submission?: competition_submissionCreateNestedManyWithoutTeamInput
  }

  export type teamUncheckedCreateInput = {
    id: string
    competition_id: string
    team_name: string
    team_code: string
    is_verified?: boolean
    verification_error?: string | null
    created_at?: Date | string
    updated_at?: Date | string | null
    members?: team_memberUncheckedCreateNestedManyWithoutTeamInput
    submission?: competition_submissionUncheckedCreateNestedManyWithoutTeamInput
  }

  export type teamUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    team_name?: StringFieldUpdateOperationsInput | string
    team_code?: StringFieldUpdateOperationsInput | string
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    verification_error?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    competition?: competitionUpdateOneRequiredWithoutTeamsNestedInput
    members?: team_memberUpdateManyWithoutTeamNestedInput
    submission?: competition_submissionUpdateManyWithoutTeamNestedInput
  }

  export type teamUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    competition_id?: StringFieldUpdateOperationsInput | string
    team_name?: StringFieldUpdateOperationsInput | string
    team_code?: StringFieldUpdateOperationsInput | string
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    verification_error?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    members?: team_memberUncheckedUpdateManyWithoutTeamNestedInput
    submission?: competition_submissionUncheckedUpdateManyWithoutTeamNestedInput
  }

  export type teamCreateManyInput = {
    id: string
    competition_id: string
    team_name: string
    team_code: string
    is_verified?: boolean
    verification_error?: string | null
    created_at?: Date | string
    updated_at?: Date | string | null
  }

  export type teamUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    team_name?: StringFieldUpdateOperationsInput | string
    team_code?: StringFieldUpdateOperationsInput | string
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    verification_error?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type teamUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    competition_id?: StringFieldUpdateOperationsInput | string
    team_name?: StringFieldUpdateOperationsInput | string
    team_code?: StringFieldUpdateOperationsInput | string
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    verification_error?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type team_memberCreateInput = {
    role: $Enums.team_member_role_enum
    is_verified?: boolean
    verification_error?: string | null
    paymentProof?: mediaCreateNestedOneWithoutPaymentproofInput
    user: userCreateNestedOneWithoutMemberInput
    team: teamCreateNestedOneWithoutMembersInput
    twibbon?: mediaCreateNestedOneWithoutTwibbonInput
    kartu?: mediaCreateNestedOneWithoutKartuInput
  }

  export type team_memberUncheckedCreateInput = {
    user_id: string
    team_id: string
    role: $Enums.team_member_role_enum
    kartu_media_id?: string | null
    twibbon_media_id?: string | null
    payment_proof_media_id?: string | null
    is_verified?: boolean
    verification_error?: string | null
  }

  export type team_memberUpdateInput = {
    role?: Enumteam_member_role_enumFieldUpdateOperationsInput | $Enums.team_member_role_enum
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    verification_error?: NullableStringFieldUpdateOperationsInput | string | null
    paymentProof?: mediaUpdateOneWithoutPaymentproofNestedInput
    user?: userUpdateOneRequiredWithoutMemberNestedInput
    team?: teamUpdateOneRequiredWithoutMembersNestedInput
    twibbon?: mediaUpdateOneWithoutTwibbonNestedInput
    kartu?: mediaUpdateOneWithoutKartuNestedInput
  }

  export type team_memberUncheckedUpdateInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    team_id?: StringFieldUpdateOperationsInput | string
    role?: Enumteam_member_role_enumFieldUpdateOperationsInput | $Enums.team_member_role_enum
    kartu_media_id?: NullableStringFieldUpdateOperationsInput | string | null
    twibbon_media_id?: NullableStringFieldUpdateOperationsInput | string | null
    payment_proof_media_id?: NullableStringFieldUpdateOperationsInput | string | null
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    verification_error?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type team_memberCreateManyInput = {
    user_id: string
    team_id: string
    role: $Enums.team_member_role_enum
    kartu_media_id?: string | null
    twibbon_media_id?: string | null
    payment_proof_media_id?: string | null
    is_verified?: boolean
    verification_error?: string | null
  }

  export type team_memberUpdateManyMutationInput = {
    role?: Enumteam_member_role_enumFieldUpdateOperationsInput | $Enums.team_member_role_enum
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    verification_error?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type team_memberUncheckedUpdateManyInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    team_id?: StringFieldUpdateOperationsInput | string
    role?: Enumteam_member_role_enumFieldUpdateOperationsInput | $Enums.team_member_role_enum
    kartu_media_id?: NullableStringFieldUpdateOperationsInput | string | null
    twibbon_media_id?: NullableStringFieldUpdateOperationsInput | string | null
    payment_proof_media_id?: NullableStringFieldUpdateOperationsInput | string | null
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    verification_error?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type userCreateInput = {
    id: string
    email: string
    full_name?: string | null
    birth_date?: Date | string | null
    pendidikan?: $Enums.education_enum | null
    nama_sekolah?: string | null
    entry_source?: string | null
    phone_number?: string | null
    id_line?: string | null
    id_discord?: string | null
    id_instagram?: string | null
    consent?: boolean
    is_registration_complete?: boolean
    created_at?: Date | string
    updated_at?: Date | string | null
    uploaded?: mediaCreateNestedManyWithoutUploaderInput
    identity?: user_identityCreateNestedOneWithoutUserInput
    announcements?: competition_announcementCreateNestedManyWithoutAuthorInput
    member?: team_memberCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateInput = {
    id: string
    email: string
    full_name?: string | null
    birth_date?: Date | string | null
    pendidikan?: $Enums.education_enum | null
    nama_sekolah?: string | null
    entry_source?: string | null
    phone_number?: string | null
    id_line?: string | null
    id_discord?: string | null
    id_instagram?: string | null
    consent?: boolean
    is_registration_complete?: boolean
    created_at?: Date | string
    updated_at?: Date | string | null
    uploaded?: mediaUncheckedCreateNestedManyWithoutUploaderInput
    identity?: user_identityUncheckedCreateNestedOneWithoutUserInput
    announcements?: competition_announcementUncheckedCreateNestedManyWithoutAuthorInput
    member?: team_memberUncheckedCreateNestedManyWithoutUserInput
  }

  export type userUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    full_name?: NullableStringFieldUpdateOperationsInput | string | null
    birth_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pendidikan?: NullableEnumeducation_enumFieldUpdateOperationsInput | $Enums.education_enum | null
    nama_sekolah?: NullableStringFieldUpdateOperationsInput | string | null
    entry_source?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    id_line?: NullableStringFieldUpdateOperationsInput | string | null
    id_discord?: NullableStringFieldUpdateOperationsInput | string | null
    id_instagram?: NullableStringFieldUpdateOperationsInput | string | null
    consent?: BoolFieldUpdateOperationsInput | boolean
    is_registration_complete?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    uploaded?: mediaUpdateManyWithoutUploaderNestedInput
    identity?: user_identityUpdateOneWithoutUserNestedInput
    announcements?: competition_announcementUpdateManyWithoutAuthorNestedInput
    member?: team_memberUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    full_name?: NullableStringFieldUpdateOperationsInput | string | null
    birth_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pendidikan?: NullableEnumeducation_enumFieldUpdateOperationsInput | $Enums.education_enum | null
    nama_sekolah?: NullableStringFieldUpdateOperationsInput | string | null
    entry_source?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    id_line?: NullableStringFieldUpdateOperationsInput | string | null
    id_discord?: NullableStringFieldUpdateOperationsInput | string | null
    id_instagram?: NullableStringFieldUpdateOperationsInput | string | null
    consent?: BoolFieldUpdateOperationsInput | boolean
    is_registration_complete?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    uploaded?: mediaUncheckedUpdateManyWithoutUploaderNestedInput
    identity?: user_identityUncheckedUpdateOneWithoutUserNestedInput
    announcements?: competition_announcementUncheckedUpdateManyWithoutAuthorNestedInput
    member?: team_memberUncheckedUpdateManyWithoutUserNestedInput
  }

  export type userCreateManyInput = {
    id: string
    email: string
    full_name?: string | null
    birth_date?: Date | string | null
    pendidikan?: $Enums.education_enum | null
    nama_sekolah?: string | null
    entry_source?: string | null
    phone_number?: string | null
    id_line?: string | null
    id_discord?: string | null
    id_instagram?: string | null
    consent?: boolean
    is_registration_complete?: boolean
    created_at?: Date | string
    updated_at?: Date | string | null
  }

  export type userUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    full_name?: NullableStringFieldUpdateOperationsInput | string | null
    birth_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pendidikan?: NullableEnumeducation_enumFieldUpdateOperationsInput | $Enums.education_enum | null
    nama_sekolah?: NullableStringFieldUpdateOperationsInput | string | null
    entry_source?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    id_line?: NullableStringFieldUpdateOperationsInput | string | null
    id_discord?: NullableStringFieldUpdateOperationsInput | string | null
    id_instagram?: NullableStringFieldUpdateOperationsInput | string | null
    consent?: BoolFieldUpdateOperationsInput | boolean
    is_registration_complete?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type userUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    full_name?: NullableStringFieldUpdateOperationsInput | string | null
    birth_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pendidikan?: NullableEnumeducation_enumFieldUpdateOperationsInput | $Enums.education_enum | null
    nama_sekolah?: NullableStringFieldUpdateOperationsInput | string | null
    entry_source?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    id_line?: NullableStringFieldUpdateOperationsInput | string | null
    id_discord?: NullableStringFieldUpdateOperationsInput | string | null
    id_instagram?: NullableStringFieldUpdateOperationsInput | string | null
    consent?: BoolFieldUpdateOperationsInput | boolean
    is_registration_complete?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type user_identityCreateInput = {
    email: string
    provider: $Enums.user_identity_provider_enum
    hash: string
    is_verified?: boolean
    verification_token: string
    verification_token_expiration: Date | string
    password_recovery_token?: string | null
    password_recovery_token_expiration?: Date | string | null
    refresh_token?: string | null
    role?: $Enums.user_identity_role_enum | null
    created_at?: Date | string
    updated_at?: Date | string | null
    user: userCreateNestedOneWithoutIdentityInput
  }

  export type user_identityUncheckedCreateInput = {
    id: string
    email: string
    provider: $Enums.user_identity_provider_enum
    hash: string
    is_verified?: boolean
    verification_token: string
    verification_token_expiration: Date | string
    password_recovery_token?: string | null
    password_recovery_token_expiration?: Date | string | null
    refresh_token?: string | null
    role?: $Enums.user_identity_role_enum | null
    created_at?: Date | string
    updated_at?: Date | string | null
  }

  export type user_identityUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    provider?: Enumuser_identity_provider_enumFieldUpdateOperationsInput | $Enums.user_identity_provider_enum
    hash?: StringFieldUpdateOperationsInput | string
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    verification_token?: StringFieldUpdateOperationsInput | string
    verification_token_expiration?: DateTimeFieldUpdateOperationsInput | Date | string
    password_recovery_token?: NullableStringFieldUpdateOperationsInput | string | null
    password_recovery_token_expiration?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableEnumuser_identity_role_enumFieldUpdateOperationsInput | $Enums.user_identity_role_enum | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: userUpdateOneRequiredWithoutIdentityNestedInput
  }

  export type user_identityUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    provider?: Enumuser_identity_provider_enumFieldUpdateOperationsInput | $Enums.user_identity_provider_enum
    hash?: StringFieldUpdateOperationsInput | string
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    verification_token?: StringFieldUpdateOperationsInput | string
    verification_token_expiration?: DateTimeFieldUpdateOperationsInput | Date | string
    password_recovery_token?: NullableStringFieldUpdateOperationsInput | string | null
    password_recovery_token_expiration?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableEnumuser_identity_role_enumFieldUpdateOperationsInput | $Enums.user_identity_role_enum | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type user_identityCreateManyInput = {
    id: string
    email: string
    provider: $Enums.user_identity_provider_enum
    hash: string
    is_verified?: boolean
    verification_token: string
    verification_token_expiration: Date | string
    password_recovery_token?: string | null
    password_recovery_token_expiration?: Date | string | null
    refresh_token?: string | null
    role?: $Enums.user_identity_role_enum | null
    created_at?: Date | string
    updated_at?: Date | string | null
  }

  export type user_identityUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    provider?: Enumuser_identity_provider_enumFieldUpdateOperationsInput | $Enums.user_identity_provider_enum
    hash?: StringFieldUpdateOperationsInput | string
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    verification_token?: StringFieldUpdateOperationsInput | string
    verification_token_expiration?: DateTimeFieldUpdateOperationsInput | Date | string
    password_recovery_token?: NullableStringFieldUpdateOperationsInput | string | null
    password_recovery_token_expiration?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableEnumuser_identity_role_enumFieldUpdateOperationsInput | $Enums.user_identity_role_enum | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type user_identityUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    provider?: Enumuser_identity_provider_enumFieldUpdateOperationsInput | $Enums.user_identity_provider_enum
    hash?: StringFieldUpdateOperationsInput | string
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    verification_token?: StringFieldUpdateOperationsInput | string
    verification_token_expiration?: DateTimeFieldUpdateOperationsInput | Date | string
    password_recovery_token?: NullableStringFieldUpdateOperationsInput | string | null
    password_recovery_token_expiration?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableEnumuser_identity_role_enumFieldUpdateOperationsInput | $Enums.user_identity_role_enum | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type Competition_announcementListRelationFilter = {
    every?: competition_announcementWhereInput
    some?: competition_announcementWhereInput
    none?: competition_announcementWhereInput
  }

  export type Competition_submissionListRelationFilter = {
    every?: competition_submissionWhereInput
    some?: competition_submissionWhereInput
    none?: competition_submissionWhereInput
  }

  export type Competition_timelineListRelationFilter = {
    every?: competition_timelineWhereInput
    some?: competition_timelineWhereInput
    none?: competition_timelineWhereInput
  }

  export type TeamListRelationFilter = {
    every?: teamWhereInput
    some?: teamWhereInput
    none?: teamWhereInput
  }

  export type competition_announcementOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type competition_submissionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type competition_timelineOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type teamOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type competitionOrderByRelevanceInput = {
    fields: competitionOrderByRelevanceFieldEnum | competitionOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type competitionCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    max_team_member?: SortOrder
    guide_book_url?: SortOrder
  }

  export type competitionAvgOrderByAggregateInput = {
    max_team_member?: SortOrder
  }

  export type competitionMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    max_team_member?: SortOrder
    guide_book_url?: SortOrder
  }

  export type competitionMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    max_team_member?: SortOrder
    guide_book_url?: SortOrder
  }

  export type competitionSumOrderByAggregateInput = {
    max_team_member?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type CompetitionScalarRelationFilter = {
    is?: competitionWhereInput
    isNot?: competitionWhereInput
  }

  export type UserScalarRelationFilter = {
    is?: userWhereInput
    isNot?: userWhereInput
  }

  export type competition_announcementOrderByRelevanceInput = {
    fields: competition_announcementOrderByRelevanceFieldEnum | competition_announcementOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type competition_announcementCountOrderByAggregateInput = {
    id?: SortOrder
    competition_id?: SortOrder
    author_id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type competition_announcementMaxOrderByAggregateInput = {
    id?: SortOrder
    competition_id?: SortOrder
    author_id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type competition_announcementMinOrderByAggregateInput = {
    id?: SortOrder
    competition_id?: SortOrder
    author_id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type TeamScalarRelationFilter = {
    is?: teamWhereInput
    isNot?: teamWhereInput
  }

  export type MediaScalarRelationFilter = {
    is?: mediaWhereInput
    isNot?: mediaWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type competition_submissionOrderByRelevanceInput = {
    fields: competition_submissionOrderByRelevanceFieldEnum | competition_submissionOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type competition_submissionTeam_idCompetition_idCompoundUniqueInput = {
    team_id: string
    competition_id: string
  }

  export type competition_submissionCountOrderByAggregateInput = {
    team_id?: SortOrder
    competition_id?: SortOrder
    media_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type competition_submissionMaxOrderByAggregateInput = {
    team_id?: SortOrder
    competition_id?: SortOrder
    media_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type competition_submissionMinOrderByAggregateInput = {
    team_id?: SortOrder
    competition_id?: SortOrder
    media_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type competition_timelineOrderByRelevanceInput = {
    fields: competition_timelineOrderByRelevanceFieldEnum | competition_timelineOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type competition_timelineCountOrderByAggregateInput = {
    id?: SortOrder
    competition_id?: SortOrder
    title?: SortOrder
    date?: SortOrder
  }

  export type competition_timelineMaxOrderByAggregateInput = {
    id?: SortOrder
    competition_id?: SortOrder
    title?: SortOrder
    date?: SortOrder
  }

  export type competition_timelineMinOrderByAggregateInput = {
    id?: SortOrder
    competition_id?: SortOrder
    title?: SortOrder
    date?: SortOrder
  }

  export type Enummedia_grouping_enumNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.media_grouping_enum | Enummedia_grouping_enumFieldRefInput<$PrismaModel> | null
    in?: $Enums.media_grouping_enum[] | null
    notIn?: $Enums.media_grouping_enum[] | null
    not?: NestedEnummedia_grouping_enumNullableFilter<$PrismaModel> | $Enums.media_grouping_enum | null
  }

  export type Enummedia_type_enumFilter<$PrismaModel = never> = {
    equals?: $Enums.media_type_enum | Enummedia_type_enumFieldRefInput<$PrismaModel>
    in?: $Enums.media_type_enum[]
    notIn?: $Enums.media_type_enum[]
    not?: NestedEnummedia_type_enumFilter<$PrismaModel> | $Enums.media_type_enum
  }

  export type Team_memberNullableScalarRelationFilter = {
    is?: team_memberWhereInput | null
    isNot?: team_memberWhereInput | null
  }

  export type Competition_submissionNullableScalarRelationFilter = {
    is?: competition_submissionWhereInput | null
    isNot?: competition_submissionWhereInput | null
  }

  export type mediaOrderByRelevanceInput = {
    fields: mediaOrderByRelevanceFieldEnum | mediaOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type mediaCountOrderByAggregateInput = {
    id?: SortOrder
    uploader_id?: SortOrder
    name?: SortOrder
    grouping?: SortOrder
    type?: SortOrder
    url?: SortOrder
    created_at?: SortOrder
  }

  export type mediaMaxOrderByAggregateInput = {
    id?: SortOrder
    uploader_id?: SortOrder
    name?: SortOrder
    grouping?: SortOrder
    type?: SortOrder
    url?: SortOrder
    created_at?: SortOrder
  }

  export type mediaMinOrderByAggregateInput = {
    id?: SortOrder
    uploader_id?: SortOrder
    name?: SortOrder
    grouping?: SortOrder
    type?: SortOrder
    url?: SortOrder
    created_at?: SortOrder
  }

  export type Enummedia_grouping_enumNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.media_grouping_enum | Enummedia_grouping_enumFieldRefInput<$PrismaModel> | null
    in?: $Enums.media_grouping_enum[] | null
    notIn?: $Enums.media_grouping_enum[] | null
    not?: NestedEnummedia_grouping_enumNullableWithAggregatesFilter<$PrismaModel> | $Enums.media_grouping_enum | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnummedia_grouping_enumNullableFilter<$PrismaModel>
    _max?: NestedEnummedia_grouping_enumNullableFilter<$PrismaModel>
  }

  export type Enummedia_type_enumWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.media_type_enum | Enummedia_type_enumFieldRefInput<$PrismaModel>
    in?: $Enums.media_type_enum[]
    notIn?: $Enums.media_type_enum[]
    not?: NestedEnummedia_type_enumWithAggregatesFilter<$PrismaModel> | $Enums.media_type_enum
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnummedia_type_enumFilter<$PrismaModel>
    _max?: NestedEnummedia_type_enumFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type Team_memberListRelationFilter = {
    every?: team_memberWhereInput
    some?: team_memberWhereInput
    none?: team_memberWhereInput
  }

  export type team_memberOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type teamOrderByRelevanceInput = {
    fields: teamOrderByRelevanceFieldEnum | teamOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type teamCountOrderByAggregateInput = {
    id?: SortOrder
    competition_id?: SortOrder
    team_name?: SortOrder
    team_code?: SortOrder
    is_verified?: SortOrder
    verification_error?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type teamMaxOrderByAggregateInput = {
    id?: SortOrder
    competition_id?: SortOrder
    team_name?: SortOrder
    team_code?: SortOrder
    is_verified?: SortOrder
    verification_error?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type teamMinOrderByAggregateInput = {
    id?: SortOrder
    competition_id?: SortOrder
    team_name?: SortOrder
    team_code?: SortOrder
    is_verified?: SortOrder
    verification_error?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type Enumteam_member_role_enumFilter<$PrismaModel = never> = {
    equals?: $Enums.team_member_role_enum | Enumteam_member_role_enumFieldRefInput<$PrismaModel>
    in?: $Enums.team_member_role_enum[]
    notIn?: $Enums.team_member_role_enum[]
    not?: NestedEnumteam_member_role_enumFilter<$PrismaModel> | $Enums.team_member_role_enum
  }

  export type MediaNullableScalarRelationFilter = {
    is?: mediaWhereInput | null
    isNot?: mediaWhereInput | null
  }

  export type team_memberOrderByRelevanceInput = {
    fields: team_memberOrderByRelevanceFieldEnum | team_memberOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type team_memberUser_idTeam_idCompoundUniqueInput = {
    user_id: string
    team_id: string
  }

  export type team_memberCountOrderByAggregateInput = {
    user_id?: SortOrder
    team_id?: SortOrder
    role?: SortOrder
    kartu_media_id?: SortOrder
    twibbon_media_id?: SortOrder
    payment_proof_media_id?: SortOrder
    is_verified?: SortOrder
    verification_error?: SortOrder
  }

  export type team_memberMaxOrderByAggregateInput = {
    user_id?: SortOrder
    team_id?: SortOrder
    role?: SortOrder
    kartu_media_id?: SortOrder
    twibbon_media_id?: SortOrder
    payment_proof_media_id?: SortOrder
    is_verified?: SortOrder
    verification_error?: SortOrder
  }

  export type team_memberMinOrderByAggregateInput = {
    user_id?: SortOrder
    team_id?: SortOrder
    role?: SortOrder
    kartu_media_id?: SortOrder
    twibbon_media_id?: SortOrder
    payment_proof_media_id?: SortOrder
    is_verified?: SortOrder
    verification_error?: SortOrder
  }

  export type Enumteam_member_role_enumWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.team_member_role_enum | Enumteam_member_role_enumFieldRefInput<$PrismaModel>
    in?: $Enums.team_member_role_enum[]
    notIn?: $Enums.team_member_role_enum[]
    not?: NestedEnumteam_member_role_enumWithAggregatesFilter<$PrismaModel> | $Enums.team_member_role_enum
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumteam_member_role_enumFilter<$PrismaModel>
    _max?: NestedEnumteam_member_role_enumFilter<$PrismaModel>
  }

  export type Enumeducation_enumNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.education_enum | Enumeducation_enumFieldRefInput<$PrismaModel> | null
    in?: $Enums.education_enum[] | null
    notIn?: $Enums.education_enum[] | null
    not?: NestedEnumeducation_enumNullableFilter<$PrismaModel> | $Enums.education_enum | null
  }

  export type MediaListRelationFilter = {
    every?: mediaWhereInput
    some?: mediaWhereInput
    none?: mediaWhereInput
  }

  export type User_identityNullableScalarRelationFilter = {
    is?: user_identityWhereInput | null
    isNot?: user_identityWhereInput | null
  }

  export type mediaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type userOrderByRelevanceInput = {
    fields: userOrderByRelevanceFieldEnum | userOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type userCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    full_name?: SortOrder
    birth_date?: SortOrder
    pendidikan?: SortOrder
    nama_sekolah?: SortOrder
    entry_source?: SortOrder
    phone_number?: SortOrder
    id_line?: SortOrder
    id_discord?: SortOrder
    id_instagram?: SortOrder
    consent?: SortOrder
    is_registration_complete?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type userMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    full_name?: SortOrder
    birth_date?: SortOrder
    pendidikan?: SortOrder
    nama_sekolah?: SortOrder
    entry_source?: SortOrder
    phone_number?: SortOrder
    id_line?: SortOrder
    id_discord?: SortOrder
    id_instagram?: SortOrder
    consent?: SortOrder
    is_registration_complete?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type userMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    full_name?: SortOrder
    birth_date?: SortOrder
    pendidikan?: SortOrder
    nama_sekolah?: SortOrder
    entry_source?: SortOrder
    phone_number?: SortOrder
    id_line?: SortOrder
    id_discord?: SortOrder
    id_instagram?: SortOrder
    consent?: SortOrder
    is_registration_complete?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type Enumeducation_enumNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.education_enum | Enumeducation_enumFieldRefInput<$PrismaModel> | null
    in?: $Enums.education_enum[] | null
    notIn?: $Enums.education_enum[] | null
    not?: NestedEnumeducation_enumNullableWithAggregatesFilter<$PrismaModel> | $Enums.education_enum | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumeducation_enumNullableFilter<$PrismaModel>
    _max?: NestedEnumeducation_enumNullableFilter<$PrismaModel>
  }

  export type Enumuser_identity_provider_enumFilter<$PrismaModel = never> = {
    equals?: $Enums.user_identity_provider_enum | Enumuser_identity_provider_enumFieldRefInput<$PrismaModel>
    in?: $Enums.user_identity_provider_enum[]
    notIn?: $Enums.user_identity_provider_enum[]
    not?: NestedEnumuser_identity_provider_enumFilter<$PrismaModel> | $Enums.user_identity_provider_enum
  }

  export type Enumuser_identity_role_enumNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.user_identity_role_enum | Enumuser_identity_role_enumFieldRefInput<$PrismaModel> | null
    in?: $Enums.user_identity_role_enum[] | null
    notIn?: $Enums.user_identity_role_enum[] | null
    not?: NestedEnumuser_identity_role_enumNullableFilter<$PrismaModel> | $Enums.user_identity_role_enum | null
  }

  export type user_identityOrderByRelevanceInput = {
    fields: user_identityOrderByRelevanceFieldEnum | user_identityOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type user_identityCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    provider?: SortOrder
    hash?: SortOrder
    is_verified?: SortOrder
    verification_token?: SortOrder
    verification_token_expiration?: SortOrder
    password_recovery_token?: SortOrder
    password_recovery_token_expiration?: SortOrder
    refresh_token?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type user_identityMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    provider?: SortOrder
    hash?: SortOrder
    is_verified?: SortOrder
    verification_token?: SortOrder
    verification_token_expiration?: SortOrder
    password_recovery_token?: SortOrder
    password_recovery_token_expiration?: SortOrder
    refresh_token?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type user_identityMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    provider?: SortOrder
    hash?: SortOrder
    is_verified?: SortOrder
    verification_token?: SortOrder
    verification_token_expiration?: SortOrder
    password_recovery_token?: SortOrder
    password_recovery_token_expiration?: SortOrder
    refresh_token?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type Enumuser_identity_provider_enumWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.user_identity_provider_enum | Enumuser_identity_provider_enumFieldRefInput<$PrismaModel>
    in?: $Enums.user_identity_provider_enum[]
    notIn?: $Enums.user_identity_provider_enum[]
    not?: NestedEnumuser_identity_provider_enumWithAggregatesFilter<$PrismaModel> | $Enums.user_identity_provider_enum
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumuser_identity_provider_enumFilter<$PrismaModel>
    _max?: NestedEnumuser_identity_provider_enumFilter<$PrismaModel>
  }

  export type Enumuser_identity_role_enumNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.user_identity_role_enum | Enumuser_identity_role_enumFieldRefInput<$PrismaModel> | null
    in?: $Enums.user_identity_role_enum[] | null
    notIn?: $Enums.user_identity_role_enum[] | null
    not?: NestedEnumuser_identity_role_enumNullableWithAggregatesFilter<$PrismaModel> | $Enums.user_identity_role_enum | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumuser_identity_role_enumNullableFilter<$PrismaModel>
    _max?: NestedEnumuser_identity_role_enumNullableFilter<$PrismaModel>
  }

  export type competition_announcementCreateNestedManyWithoutCompetitionInput = {
    create?: XOR<competition_announcementCreateWithoutCompetitionInput, competition_announcementUncheckedCreateWithoutCompetitionInput> | competition_announcementCreateWithoutCompetitionInput[] | competition_announcementUncheckedCreateWithoutCompetitionInput[]
    connectOrCreate?: competition_announcementCreateOrConnectWithoutCompetitionInput | competition_announcementCreateOrConnectWithoutCompetitionInput[]
    createMany?: competition_announcementCreateManyCompetitionInputEnvelope
    connect?: competition_announcementWhereUniqueInput | competition_announcementWhereUniqueInput[]
  }

  export type competition_submissionCreateNestedManyWithoutCompetitionInput = {
    create?: XOR<competition_submissionCreateWithoutCompetitionInput, competition_submissionUncheckedCreateWithoutCompetitionInput> | competition_submissionCreateWithoutCompetitionInput[] | competition_submissionUncheckedCreateWithoutCompetitionInput[]
    connectOrCreate?: competition_submissionCreateOrConnectWithoutCompetitionInput | competition_submissionCreateOrConnectWithoutCompetitionInput[]
    createMany?: competition_submissionCreateManyCompetitionInputEnvelope
    connect?: competition_submissionWhereUniqueInput | competition_submissionWhereUniqueInput[]
  }

  export type competition_timelineCreateNestedManyWithoutCompetitionInput = {
    create?: XOR<competition_timelineCreateWithoutCompetitionInput, competition_timelineUncheckedCreateWithoutCompetitionInput> | competition_timelineCreateWithoutCompetitionInput[] | competition_timelineUncheckedCreateWithoutCompetitionInput[]
    connectOrCreate?: competition_timelineCreateOrConnectWithoutCompetitionInput | competition_timelineCreateOrConnectWithoutCompetitionInput[]
    createMany?: competition_timelineCreateManyCompetitionInputEnvelope
    connect?: competition_timelineWhereUniqueInput | competition_timelineWhereUniqueInput[]
  }

  export type teamCreateNestedManyWithoutCompetitionInput = {
    create?: XOR<teamCreateWithoutCompetitionInput, teamUncheckedCreateWithoutCompetitionInput> | teamCreateWithoutCompetitionInput[] | teamUncheckedCreateWithoutCompetitionInput[]
    connectOrCreate?: teamCreateOrConnectWithoutCompetitionInput | teamCreateOrConnectWithoutCompetitionInput[]
    createMany?: teamCreateManyCompetitionInputEnvelope
    connect?: teamWhereUniqueInput | teamWhereUniqueInput[]
  }

  export type competition_announcementUncheckedCreateNestedManyWithoutCompetitionInput = {
    create?: XOR<competition_announcementCreateWithoutCompetitionInput, competition_announcementUncheckedCreateWithoutCompetitionInput> | competition_announcementCreateWithoutCompetitionInput[] | competition_announcementUncheckedCreateWithoutCompetitionInput[]
    connectOrCreate?: competition_announcementCreateOrConnectWithoutCompetitionInput | competition_announcementCreateOrConnectWithoutCompetitionInput[]
    createMany?: competition_announcementCreateManyCompetitionInputEnvelope
    connect?: competition_announcementWhereUniqueInput | competition_announcementWhereUniqueInput[]
  }

  export type competition_submissionUncheckedCreateNestedManyWithoutCompetitionInput = {
    create?: XOR<competition_submissionCreateWithoutCompetitionInput, competition_submissionUncheckedCreateWithoutCompetitionInput> | competition_submissionCreateWithoutCompetitionInput[] | competition_submissionUncheckedCreateWithoutCompetitionInput[]
    connectOrCreate?: competition_submissionCreateOrConnectWithoutCompetitionInput | competition_submissionCreateOrConnectWithoutCompetitionInput[]
    createMany?: competition_submissionCreateManyCompetitionInputEnvelope
    connect?: competition_submissionWhereUniqueInput | competition_submissionWhereUniqueInput[]
  }

  export type competition_timelineUncheckedCreateNestedManyWithoutCompetitionInput = {
    create?: XOR<competition_timelineCreateWithoutCompetitionInput, competition_timelineUncheckedCreateWithoutCompetitionInput> | competition_timelineCreateWithoutCompetitionInput[] | competition_timelineUncheckedCreateWithoutCompetitionInput[]
    connectOrCreate?: competition_timelineCreateOrConnectWithoutCompetitionInput | competition_timelineCreateOrConnectWithoutCompetitionInput[]
    createMany?: competition_timelineCreateManyCompetitionInputEnvelope
    connect?: competition_timelineWhereUniqueInput | competition_timelineWhereUniqueInput[]
  }

  export type teamUncheckedCreateNestedManyWithoutCompetitionInput = {
    create?: XOR<teamCreateWithoutCompetitionInput, teamUncheckedCreateWithoutCompetitionInput> | teamCreateWithoutCompetitionInput[] | teamUncheckedCreateWithoutCompetitionInput[]
    connectOrCreate?: teamCreateOrConnectWithoutCompetitionInput | teamCreateOrConnectWithoutCompetitionInput[]
    createMany?: teamCreateManyCompetitionInputEnvelope
    connect?: teamWhereUniqueInput | teamWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type competition_announcementUpdateManyWithoutCompetitionNestedInput = {
    create?: XOR<competition_announcementCreateWithoutCompetitionInput, competition_announcementUncheckedCreateWithoutCompetitionInput> | competition_announcementCreateWithoutCompetitionInput[] | competition_announcementUncheckedCreateWithoutCompetitionInput[]
    connectOrCreate?: competition_announcementCreateOrConnectWithoutCompetitionInput | competition_announcementCreateOrConnectWithoutCompetitionInput[]
    upsert?: competition_announcementUpsertWithWhereUniqueWithoutCompetitionInput | competition_announcementUpsertWithWhereUniqueWithoutCompetitionInput[]
    createMany?: competition_announcementCreateManyCompetitionInputEnvelope
    set?: competition_announcementWhereUniqueInput | competition_announcementWhereUniqueInput[]
    disconnect?: competition_announcementWhereUniqueInput | competition_announcementWhereUniqueInput[]
    delete?: competition_announcementWhereUniqueInput | competition_announcementWhereUniqueInput[]
    connect?: competition_announcementWhereUniqueInput | competition_announcementWhereUniqueInput[]
    update?: competition_announcementUpdateWithWhereUniqueWithoutCompetitionInput | competition_announcementUpdateWithWhereUniqueWithoutCompetitionInput[]
    updateMany?: competition_announcementUpdateManyWithWhereWithoutCompetitionInput | competition_announcementUpdateManyWithWhereWithoutCompetitionInput[]
    deleteMany?: competition_announcementScalarWhereInput | competition_announcementScalarWhereInput[]
  }

  export type competition_submissionUpdateManyWithoutCompetitionNestedInput = {
    create?: XOR<competition_submissionCreateWithoutCompetitionInput, competition_submissionUncheckedCreateWithoutCompetitionInput> | competition_submissionCreateWithoutCompetitionInput[] | competition_submissionUncheckedCreateWithoutCompetitionInput[]
    connectOrCreate?: competition_submissionCreateOrConnectWithoutCompetitionInput | competition_submissionCreateOrConnectWithoutCompetitionInput[]
    upsert?: competition_submissionUpsertWithWhereUniqueWithoutCompetitionInput | competition_submissionUpsertWithWhereUniqueWithoutCompetitionInput[]
    createMany?: competition_submissionCreateManyCompetitionInputEnvelope
    set?: competition_submissionWhereUniqueInput | competition_submissionWhereUniqueInput[]
    disconnect?: competition_submissionWhereUniqueInput | competition_submissionWhereUniqueInput[]
    delete?: competition_submissionWhereUniqueInput | competition_submissionWhereUniqueInput[]
    connect?: competition_submissionWhereUniqueInput | competition_submissionWhereUniqueInput[]
    update?: competition_submissionUpdateWithWhereUniqueWithoutCompetitionInput | competition_submissionUpdateWithWhereUniqueWithoutCompetitionInput[]
    updateMany?: competition_submissionUpdateManyWithWhereWithoutCompetitionInput | competition_submissionUpdateManyWithWhereWithoutCompetitionInput[]
    deleteMany?: competition_submissionScalarWhereInput | competition_submissionScalarWhereInput[]
  }

  export type competition_timelineUpdateManyWithoutCompetitionNestedInput = {
    create?: XOR<competition_timelineCreateWithoutCompetitionInput, competition_timelineUncheckedCreateWithoutCompetitionInput> | competition_timelineCreateWithoutCompetitionInput[] | competition_timelineUncheckedCreateWithoutCompetitionInput[]
    connectOrCreate?: competition_timelineCreateOrConnectWithoutCompetitionInput | competition_timelineCreateOrConnectWithoutCompetitionInput[]
    upsert?: competition_timelineUpsertWithWhereUniqueWithoutCompetitionInput | competition_timelineUpsertWithWhereUniqueWithoutCompetitionInput[]
    createMany?: competition_timelineCreateManyCompetitionInputEnvelope
    set?: competition_timelineWhereUniqueInput | competition_timelineWhereUniqueInput[]
    disconnect?: competition_timelineWhereUniqueInput | competition_timelineWhereUniqueInput[]
    delete?: competition_timelineWhereUniqueInput | competition_timelineWhereUniqueInput[]
    connect?: competition_timelineWhereUniqueInput | competition_timelineWhereUniqueInput[]
    update?: competition_timelineUpdateWithWhereUniqueWithoutCompetitionInput | competition_timelineUpdateWithWhereUniqueWithoutCompetitionInput[]
    updateMany?: competition_timelineUpdateManyWithWhereWithoutCompetitionInput | competition_timelineUpdateManyWithWhereWithoutCompetitionInput[]
    deleteMany?: competition_timelineScalarWhereInput | competition_timelineScalarWhereInput[]
  }

  export type teamUpdateManyWithoutCompetitionNestedInput = {
    create?: XOR<teamCreateWithoutCompetitionInput, teamUncheckedCreateWithoutCompetitionInput> | teamCreateWithoutCompetitionInput[] | teamUncheckedCreateWithoutCompetitionInput[]
    connectOrCreate?: teamCreateOrConnectWithoutCompetitionInput | teamCreateOrConnectWithoutCompetitionInput[]
    upsert?: teamUpsertWithWhereUniqueWithoutCompetitionInput | teamUpsertWithWhereUniqueWithoutCompetitionInput[]
    createMany?: teamCreateManyCompetitionInputEnvelope
    set?: teamWhereUniqueInput | teamWhereUniqueInput[]
    disconnect?: teamWhereUniqueInput | teamWhereUniqueInput[]
    delete?: teamWhereUniqueInput | teamWhereUniqueInput[]
    connect?: teamWhereUniqueInput | teamWhereUniqueInput[]
    update?: teamUpdateWithWhereUniqueWithoutCompetitionInput | teamUpdateWithWhereUniqueWithoutCompetitionInput[]
    updateMany?: teamUpdateManyWithWhereWithoutCompetitionInput | teamUpdateManyWithWhereWithoutCompetitionInput[]
    deleteMany?: teamScalarWhereInput | teamScalarWhereInput[]
  }

  export type competition_announcementUncheckedUpdateManyWithoutCompetitionNestedInput = {
    create?: XOR<competition_announcementCreateWithoutCompetitionInput, competition_announcementUncheckedCreateWithoutCompetitionInput> | competition_announcementCreateWithoutCompetitionInput[] | competition_announcementUncheckedCreateWithoutCompetitionInput[]
    connectOrCreate?: competition_announcementCreateOrConnectWithoutCompetitionInput | competition_announcementCreateOrConnectWithoutCompetitionInput[]
    upsert?: competition_announcementUpsertWithWhereUniqueWithoutCompetitionInput | competition_announcementUpsertWithWhereUniqueWithoutCompetitionInput[]
    createMany?: competition_announcementCreateManyCompetitionInputEnvelope
    set?: competition_announcementWhereUniqueInput | competition_announcementWhereUniqueInput[]
    disconnect?: competition_announcementWhereUniqueInput | competition_announcementWhereUniqueInput[]
    delete?: competition_announcementWhereUniqueInput | competition_announcementWhereUniqueInput[]
    connect?: competition_announcementWhereUniqueInput | competition_announcementWhereUniqueInput[]
    update?: competition_announcementUpdateWithWhereUniqueWithoutCompetitionInput | competition_announcementUpdateWithWhereUniqueWithoutCompetitionInput[]
    updateMany?: competition_announcementUpdateManyWithWhereWithoutCompetitionInput | competition_announcementUpdateManyWithWhereWithoutCompetitionInput[]
    deleteMany?: competition_announcementScalarWhereInput | competition_announcementScalarWhereInput[]
  }

  export type competition_submissionUncheckedUpdateManyWithoutCompetitionNestedInput = {
    create?: XOR<competition_submissionCreateWithoutCompetitionInput, competition_submissionUncheckedCreateWithoutCompetitionInput> | competition_submissionCreateWithoutCompetitionInput[] | competition_submissionUncheckedCreateWithoutCompetitionInput[]
    connectOrCreate?: competition_submissionCreateOrConnectWithoutCompetitionInput | competition_submissionCreateOrConnectWithoutCompetitionInput[]
    upsert?: competition_submissionUpsertWithWhereUniqueWithoutCompetitionInput | competition_submissionUpsertWithWhereUniqueWithoutCompetitionInput[]
    createMany?: competition_submissionCreateManyCompetitionInputEnvelope
    set?: competition_submissionWhereUniqueInput | competition_submissionWhereUniqueInput[]
    disconnect?: competition_submissionWhereUniqueInput | competition_submissionWhereUniqueInput[]
    delete?: competition_submissionWhereUniqueInput | competition_submissionWhereUniqueInput[]
    connect?: competition_submissionWhereUniqueInput | competition_submissionWhereUniqueInput[]
    update?: competition_submissionUpdateWithWhereUniqueWithoutCompetitionInput | competition_submissionUpdateWithWhereUniqueWithoutCompetitionInput[]
    updateMany?: competition_submissionUpdateManyWithWhereWithoutCompetitionInput | competition_submissionUpdateManyWithWhereWithoutCompetitionInput[]
    deleteMany?: competition_submissionScalarWhereInput | competition_submissionScalarWhereInput[]
  }

  export type competition_timelineUncheckedUpdateManyWithoutCompetitionNestedInput = {
    create?: XOR<competition_timelineCreateWithoutCompetitionInput, competition_timelineUncheckedCreateWithoutCompetitionInput> | competition_timelineCreateWithoutCompetitionInput[] | competition_timelineUncheckedCreateWithoutCompetitionInput[]
    connectOrCreate?: competition_timelineCreateOrConnectWithoutCompetitionInput | competition_timelineCreateOrConnectWithoutCompetitionInput[]
    upsert?: competition_timelineUpsertWithWhereUniqueWithoutCompetitionInput | competition_timelineUpsertWithWhereUniqueWithoutCompetitionInput[]
    createMany?: competition_timelineCreateManyCompetitionInputEnvelope
    set?: competition_timelineWhereUniqueInput | competition_timelineWhereUniqueInput[]
    disconnect?: competition_timelineWhereUniqueInput | competition_timelineWhereUniqueInput[]
    delete?: competition_timelineWhereUniqueInput | competition_timelineWhereUniqueInput[]
    connect?: competition_timelineWhereUniqueInput | competition_timelineWhereUniqueInput[]
    update?: competition_timelineUpdateWithWhereUniqueWithoutCompetitionInput | competition_timelineUpdateWithWhereUniqueWithoutCompetitionInput[]
    updateMany?: competition_timelineUpdateManyWithWhereWithoutCompetitionInput | competition_timelineUpdateManyWithWhereWithoutCompetitionInput[]
    deleteMany?: competition_timelineScalarWhereInput | competition_timelineScalarWhereInput[]
  }

  export type teamUncheckedUpdateManyWithoutCompetitionNestedInput = {
    create?: XOR<teamCreateWithoutCompetitionInput, teamUncheckedCreateWithoutCompetitionInput> | teamCreateWithoutCompetitionInput[] | teamUncheckedCreateWithoutCompetitionInput[]
    connectOrCreate?: teamCreateOrConnectWithoutCompetitionInput | teamCreateOrConnectWithoutCompetitionInput[]
    upsert?: teamUpsertWithWhereUniqueWithoutCompetitionInput | teamUpsertWithWhereUniqueWithoutCompetitionInput[]
    createMany?: teamCreateManyCompetitionInputEnvelope
    set?: teamWhereUniqueInput | teamWhereUniqueInput[]
    disconnect?: teamWhereUniqueInput | teamWhereUniqueInput[]
    delete?: teamWhereUniqueInput | teamWhereUniqueInput[]
    connect?: teamWhereUniqueInput | teamWhereUniqueInput[]
    update?: teamUpdateWithWhereUniqueWithoutCompetitionInput | teamUpdateWithWhereUniqueWithoutCompetitionInput[]
    updateMany?: teamUpdateManyWithWhereWithoutCompetitionInput | teamUpdateManyWithWhereWithoutCompetitionInput[]
    deleteMany?: teamScalarWhereInput | teamScalarWhereInput[]
  }

  export type competitionCreateNestedOneWithoutAnnouncementsInput = {
    create?: XOR<competitionCreateWithoutAnnouncementsInput, competitionUncheckedCreateWithoutAnnouncementsInput>
    connectOrCreate?: competitionCreateOrConnectWithoutAnnouncementsInput
    connect?: competitionWhereUniqueInput
  }

  export type userCreateNestedOneWithoutAnnouncementsInput = {
    create?: XOR<userCreateWithoutAnnouncementsInput, userUncheckedCreateWithoutAnnouncementsInput>
    connectOrCreate?: userCreateOrConnectWithoutAnnouncementsInput
    connect?: userWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type competitionUpdateOneRequiredWithoutAnnouncementsNestedInput = {
    create?: XOR<competitionCreateWithoutAnnouncementsInput, competitionUncheckedCreateWithoutAnnouncementsInput>
    connectOrCreate?: competitionCreateOrConnectWithoutAnnouncementsInput
    upsert?: competitionUpsertWithoutAnnouncementsInput
    connect?: competitionWhereUniqueInput
    update?: XOR<XOR<competitionUpdateToOneWithWhereWithoutAnnouncementsInput, competitionUpdateWithoutAnnouncementsInput>, competitionUncheckedUpdateWithoutAnnouncementsInput>
  }

  export type userUpdateOneRequiredWithoutAnnouncementsNestedInput = {
    create?: XOR<userCreateWithoutAnnouncementsInput, userUncheckedCreateWithoutAnnouncementsInput>
    connectOrCreate?: userCreateOrConnectWithoutAnnouncementsInput
    upsert?: userUpsertWithoutAnnouncementsInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutAnnouncementsInput, userUpdateWithoutAnnouncementsInput>, userUncheckedUpdateWithoutAnnouncementsInput>
  }

  export type teamCreateNestedOneWithoutSubmissionInput = {
    create?: XOR<teamCreateWithoutSubmissionInput, teamUncheckedCreateWithoutSubmissionInput>
    connectOrCreate?: teamCreateOrConnectWithoutSubmissionInput
    connect?: teamWhereUniqueInput
  }

  export type competitionCreateNestedOneWithoutSubmissionsInput = {
    create?: XOR<competitionCreateWithoutSubmissionsInput, competitionUncheckedCreateWithoutSubmissionsInput>
    connectOrCreate?: competitionCreateOrConnectWithoutSubmissionsInput
    connect?: competitionWhereUniqueInput
  }

  export type mediaCreateNestedOneWithoutSubmissionInput = {
    create?: XOR<mediaCreateWithoutSubmissionInput, mediaUncheckedCreateWithoutSubmissionInput>
    connectOrCreate?: mediaCreateOrConnectWithoutSubmissionInput
    connect?: mediaWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type teamUpdateOneRequiredWithoutSubmissionNestedInput = {
    create?: XOR<teamCreateWithoutSubmissionInput, teamUncheckedCreateWithoutSubmissionInput>
    connectOrCreate?: teamCreateOrConnectWithoutSubmissionInput
    upsert?: teamUpsertWithoutSubmissionInput
    connect?: teamWhereUniqueInput
    update?: XOR<XOR<teamUpdateToOneWithWhereWithoutSubmissionInput, teamUpdateWithoutSubmissionInput>, teamUncheckedUpdateWithoutSubmissionInput>
  }

  export type competitionUpdateOneRequiredWithoutSubmissionsNestedInput = {
    create?: XOR<competitionCreateWithoutSubmissionsInput, competitionUncheckedCreateWithoutSubmissionsInput>
    connectOrCreate?: competitionCreateOrConnectWithoutSubmissionsInput
    upsert?: competitionUpsertWithoutSubmissionsInput
    connect?: competitionWhereUniqueInput
    update?: XOR<XOR<competitionUpdateToOneWithWhereWithoutSubmissionsInput, competitionUpdateWithoutSubmissionsInput>, competitionUncheckedUpdateWithoutSubmissionsInput>
  }

  export type mediaUpdateOneRequiredWithoutSubmissionNestedInput = {
    create?: XOR<mediaCreateWithoutSubmissionInput, mediaUncheckedCreateWithoutSubmissionInput>
    connectOrCreate?: mediaCreateOrConnectWithoutSubmissionInput
    upsert?: mediaUpsertWithoutSubmissionInput
    connect?: mediaWhereUniqueInput
    update?: XOR<XOR<mediaUpdateToOneWithWhereWithoutSubmissionInput, mediaUpdateWithoutSubmissionInput>, mediaUncheckedUpdateWithoutSubmissionInput>
  }

  export type competitionCreateNestedOneWithoutTimelinesInput = {
    create?: XOR<competitionCreateWithoutTimelinesInput, competitionUncheckedCreateWithoutTimelinesInput>
    connectOrCreate?: competitionCreateOrConnectWithoutTimelinesInput
    connect?: competitionWhereUniqueInput
  }

  export type competitionUpdateOneRequiredWithoutTimelinesNestedInput = {
    create?: XOR<competitionCreateWithoutTimelinesInput, competitionUncheckedCreateWithoutTimelinesInput>
    connectOrCreate?: competitionCreateOrConnectWithoutTimelinesInput
    upsert?: competitionUpsertWithoutTimelinesInput
    connect?: competitionWhereUniqueInput
    update?: XOR<XOR<competitionUpdateToOneWithWhereWithoutTimelinesInput, competitionUpdateWithoutTimelinesInput>, competitionUncheckedUpdateWithoutTimelinesInput>
  }

  export type userCreateNestedOneWithoutUploadedInput = {
    create?: XOR<userCreateWithoutUploadedInput, userUncheckedCreateWithoutUploadedInput>
    connectOrCreate?: userCreateOrConnectWithoutUploadedInput
    connect?: userWhereUniqueInput
  }

  export type team_memberCreateNestedOneWithoutPaymentProofInput = {
    create?: XOR<team_memberCreateWithoutPaymentProofInput, team_memberUncheckedCreateWithoutPaymentProofInput>
    connectOrCreate?: team_memberCreateOrConnectWithoutPaymentProofInput
    connect?: team_memberWhereUniqueInput
  }

  export type team_memberCreateNestedOneWithoutTwibbonInput = {
    create?: XOR<team_memberCreateWithoutTwibbonInput, team_memberUncheckedCreateWithoutTwibbonInput>
    connectOrCreate?: team_memberCreateOrConnectWithoutTwibbonInput
    connect?: team_memberWhereUniqueInput
  }

  export type team_memberCreateNestedOneWithoutKartuInput = {
    create?: XOR<team_memberCreateWithoutKartuInput, team_memberUncheckedCreateWithoutKartuInput>
    connectOrCreate?: team_memberCreateOrConnectWithoutKartuInput
    connect?: team_memberWhereUniqueInput
  }

  export type competition_submissionCreateNestedOneWithoutMediaInput = {
    create?: XOR<competition_submissionCreateWithoutMediaInput, competition_submissionUncheckedCreateWithoutMediaInput>
    connectOrCreate?: competition_submissionCreateOrConnectWithoutMediaInput
    connect?: competition_submissionWhereUniqueInput
  }

  export type team_memberUncheckedCreateNestedOneWithoutPaymentProofInput = {
    create?: XOR<team_memberCreateWithoutPaymentProofInput, team_memberUncheckedCreateWithoutPaymentProofInput>
    connectOrCreate?: team_memberCreateOrConnectWithoutPaymentProofInput
    connect?: team_memberWhereUniqueInput
  }

  export type team_memberUncheckedCreateNestedOneWithoutTwibbonInput = {
    create?: XOR<team_memberCreateWithoutTwibbonInput, team_memberUncheckedCreateWithoutTwibbonInput>
    connectOrCreate?: team_memberCreateOrConnectWithoutTwibbonInput
    connect?: team_memberWhereUniqueInput
  }

  export type team_memberUncheckedCreateNestedOneWithoutKartuInput = {
    create?: XOR<team_memberCreateWithoutKartuInput, team_memberUncheckedCreateWithoutKartuInput>
    connectOrCreate?: team_memberCreateOrConnectWithoutKartuInput
    connect?: team_memberWhereUniqueInput
  }

  export type competition_submissionUncheckedCreateNestedOneWithoutMediaInput = {
    create?: XOR<competition_submissionCreateWithoutMediaInput, competition_submissionUncheckedCreateWithoutMediaInput>
    connectOrCreate?: competition_submissionCreateOrConnectWithoutMediaInput
    connect?: competition_submissionWhereUniqueInput
  }

  export type NullableEnummedia_grouping_enumFieldUpdateOperationsInput = {
    set?: $Enums.media_grouping_enum | null
  }

  export type Enummedia_type_enumFieldUpdateOperationsInput = {
    set?: $Enums.media_type_enum
  }

  export type userUpdateOneRequiredWithoutUploadedNestedInput = {
    create?: XOR<userCreateWithoutUploadedInput, userUncheckedCreateWithoutUploadedInput>
    connectOrCreate?: userCreateOrConnectWithoutUploadedInput
    upsert?: userUpsertWithoutUploadedInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutUploadedInput, userUpdateWithoutUploadedInput>, userUncheckedUpdateWithoutUploadedInput>
  }

  export type team_memberUpdateOneWithoutPaymentProofNestedInput = {
    create?: XOR<team_memberCreateWithoutPaymentProofInput, team_memberUncheckedCreateWithoutPaymentProofInput>
    connectOrCreate?: team_memberCreateOrConnectWithoutPaymentProofInput
    upsert?: team_memberUpsertWithoutPaymentProofInput
    disconnect?: team_memberWhereInput | boolean
    delete?: team_memberWhereInput | boolean
    connect?: team_memberWhereUniqueInput
    update?: XOR<XOR<team_memberUpdateToOneWithWhereWithoutPaymentProofInput, team_memberUpdateWithoutPaymentProofInput>, team_memberUncheckedUpdateWithoutPaymentProofInput>
  }

  export type team_memberUpdateOneWithoutTwibbonNestedInput = {
    create?: XOR<team_memberCreateWithoutTwibbonInput, team_memberUncheckedCreateWithoutTwibbonInput>
    connectOrCreate?: team_memberCreateOrConnectWithoutTwibbonInput
    upsert?: team_memberUpsertWithoutTwibbonInput
    disconnect?: team_memberWhereInput | boolean
    delete?: team_memberWhereInput | boolean
    connect?: team_memberWhereUniqueInput
    update?: XOR<XOR<team_memberUpdateToOneWithWhereWithoutTwibbonInput, team_memberUpdateWithoutTwibbonInput>, team_memberUncheckedUpdateWithoutTwibbonInput>
  }

  export type team_memberUpdateOneWithoutKartuNestedInput = {
    create?: XOR<team_memberCreateWithoutKartuInput, team_memberUncheckedCreateWithoutKartuInput>
    connectOrCreate?: team_memberCreateOrConnectWithoutKartuInput
    upsert?: team_memberUpsertWithoutKartuInput
    disconnect?: team_memberWhereInput | boolean
    delete?: team_memberWhereInput | boolean
    connect?: team_memberWhereUniqueInput
    update?: XOR<XOR<team_memberUpdateToOneWithWhereWithoutKartuInput, team_memberUpdateWithoutKartuInput>, team_memberUncheckedUpdateWithoutKartuInput>
  }

  export type competition_submissionUpdateOneWithoutMediaNestedInput = {
    create?: XOR<competition_submissionCreateWithoutMediaInput, competition_submissionUncheckedCreateWithoutMediaInput>
    connectOrCreate?: competition_submissionCreateOrConnectWithoutMediaInput
    upsert?: competition_submissionUpsertWithoutMediaInput
    disconnect?: competition_submissionWhereInput | boolean
    delete?: competition_submissionWhereInput | boolean
    connect?: competition_submissionWhereUniqueInput
    update?: XOR<XOR<competition_submissionUpdateToOneWithWhereWithoutMediaInput, competition_submissionUpdateWithoutMediaInput>, competition_submissionUncheckedUpdateWithoutMediaInput>
  }

  export type team_memberUncheckedUpdateOneWithoutPaymentProofNestedInput = {
    create?: XOR<team_memberCreateWithoutPaymentProofInput, team_memberUncheckedCreateWithoutPaymentProofInput>
    connectOrCreate?: team_memberCreateOrConnectWithoutPaymentProofInput
    upsert?: team_memberUpsertWithoutPaymentProofInput
    disconnect?: team_memberWhereInput | boolean
    delete?: team_memberWhereInput | boolean
    connect?: team_memberWhereUniqueInput
    update?: XOR<XOR<team_memberUpdateToOneWithWhereWithoutPaymentProofInput, team_memberUpdateWithoutPaymentProofInput>, team_memberUncheckedUpdateWithoutPaymentProofInput>
  }

  export type team_memberUncheckedUpdateOneWithoutTwibbonNestedInput = {
    create?: XOR<team_memberCreateWithoutTwibbonInput, team_memberUncheckedCreateWithoutTwibbonInput>
    connectOrCreate?: team_memberCreateOrConnectWithoutTwibbonInput
    upsert?: team_memberUpsertWithoutTwibbonInput
    disconnect?: team_memberWhereInput | boolean
    delete?: team_memberWhereInput | boolean
    connect?: team_memberWhereUniqueInput
    update?: XOR<XOR<team_memberUpdateToOneWithWhereWithoutTwibbonInput, team_memberUpdateWithoutTwibbonInput>, team_memberUncheckedUpdateWithoutTwibbonInput>
  }

  export type team_memberUncheckedUpdateOneWithoutKartuNestedInput = {
    create?: XOR<team_memberCreateWithoutKartuInput, team_memberUncheckedCreateWithoutKartuInput>
    connectOrCreate?: team_memberCreateOrConnectWithoutKartuInput
    upsert?: team_memberUpsertWithoutKartuInput
    disconnect?: team_memberWhereInput | boolean
    delete?: team_memberWhereInput | boolean
    connect?: team_memberWhereUniqueInput
    update?: XOR<XOR<team_memberUpdateToOneWithWhereWithoutKartuInput, team_memberUpdateWithoutKartuInput>, team_memberUncheckedUpdateWithoutKartuInput>
  }

  export type competition_submissionUncheckedUpdateOneWithoutMediaNestedInput = {
    create?: XOR<competition_submissionCreateWithoutMediaInput, competition_submissionUncheckedCreateWithoutMediaInput>
    connectOrCreate?: competition_submissionCreateOrConnectWithoutMediaInput
    upsert?: competition_submissionUpsertWithoutMediaInput
    disconnect?: competition_submissionWhereInput | boolean
    delete?: competition_submissionWhereInput | boolean
    connect?: competition_submissionWhereUniqueInput
    update?: XOR<XOR<competition_submissionUpdateToOneWithWhereWithoutMediaInput, competition_submissionUpdateWithoutMediaInput>, competition_submissionUncheckedUpdateWithoutMediaInput>
  }

  export type competitionCreateNestedOneWithoutTeamsInput = {
    create?: XOR<competitionCreateWithoutTeamsInput, competitionUncheckedCreateWithoutTeamsInput>
    connectOrCreate?: competitionCreateOrConnectWithoutTeamsInput
    connect?: competitionWhereUniqueInput
  }

  export type team_memberCreateNestedManyWithoutTeamInput = {
    create?: XOR<team_memberCreateWithoutTeamInput, team_memberUncheckedCreateWithoutTeamInput> | team_memberCreateWithoutTeamInput[] | team_memberUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: team_memberCreateOrConnectWithoutTeamInput | team_memberCreateOrConnectWithoutTeamInput[]
    createMany?: team_memberCreateManyTeamInputEnvelope
    connect?: team_memberWhereUniqueInput | team_memberWhereUniqueInput[]
  }

  export type competition_submissionCreateNestedManyWithoutTeamInput = {
    create?: XOR<competition_submissionCreateWithoutTeamInput, competition_submissionUncheckedCreateWithoutTeamInput> | competition_submissionCreateWithoutTeamInput[] | competition_submissionUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: competition_submissionCreateOrConnectWithoutTeamInput | competition_submissionCreateOrConnectWithoutTeamInput[]
    createMany?: competition_submissionCreateManyTeamInputEnvelope
    connect?: competition_submissionWhereUniqueInput | competition_submissionWhereUniqueInput[]
  }

  export type team_memberUncheckedCreateNestedManyWithoutTeamInput = {
    create?: XOR<team_memberCreateWithoutTeamInput, team_memberUncheckedCreateWithoutTeamInput> | team_memberCreateWithoutTeamInput[] | team_memberUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: team_memberCreateOrConnectWithoutTeamInput | team_memberCreateOrConnectWithoutTeamInput[]
    createMany?: team_memberCreateManyTeamInputEnvelope
    connect?: team_memberWhereUniqueInput | team_memberWhereUniqueInput[]
  }

  export type competition_submissionUncheckedCreateNestedManyWithoutTeamInput = {
    create?: XOR<competition_submissionCreateWithoutTeamInput, competition_submissionUncheckedCreateWithoutTeamInput> | competition_submissionCreateWithoutTeamInput[] | competition_submissionUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: competition_submissionCreateOrConnectWithoutTeamInput | competition_submissionCreateOrConnectWithoutTeamInput[]
    createMany?: competition_submissionCreateManyTeamInputEnvelope
    connect?: competition_submissionWhereUniqueInput | competition_submissionWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type competitionUpdateOneRequiredWithoutTeamsNestedInput = {
    create?: XOR<competitionCreateWithoutTeamsInput, competitionUncheckedCreateWithoutTeamsInput>
    connectOrCreate?: competitionCreateOrConnectWithoutTeamsInput
    upsert?: competitionUpsertWithoutTeamsInput
    connect?: competitionWhereUniqueInput
    update?: XOR<XOR<competitionUpdateToOneWithWhereWithoutTeamsInput, competitionUpdateWithoutTeamsInput>, competitionUncheckedUpdateWithoutTeamsInput>
  }

  export type team_memberUpdateManyWithoutTeamNestedInput = {
    create?: XOR<team_memberCreateWithoutTeamInput, team_memberUncheckedCreateWithoutTeamInput> | team_memberCreateWithoutTeamInput[] | team_memberUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: team_memberCreateOrConnectWithoutTeamInput | team_memberCreateOrConnectWithoutTeamInput[]
    upsert?: team_memberUpsertWithWhereUniqueWithoutTeamInput | team_memberUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: team_memberCreateManyTeamInputEnvelope
    set?: team_memberWhereUniqueInput | team_memberWhereUniqueInput[]
    disconnect?: team_memberWhereUniqueInput | team_memberWhereUniqueInput[]
    delete?: team_memberWhereUniqueInput | team_memberWhereUniqueInput[]
    connect?: team_memberWhereUniqueInput | team_memberWhereUniqueInput[]
    update?: team_memberUpdateWithWhereUniqueWithoutTeamInput | team_memberUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: team_memberUpdateManyWithWhereWithoutTeamInput | team_memberUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: team_memberScalarWhereInput | team_memberScalarWhereInput[]
  }

  export type competition_submissionUpdateManyWithoutTeamNestedInput = {
    create?: XOR<competition_submissionCreateWithoutTeamInput, competition_submissionUncheckedCreateWithoutTeamInput> | competition_submissionCreateWithoutTeamInput[] | competition_submissionUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: competition_submissionCreateOrConnectWithoutTeamInput | competition_submissionCreateOrConnectWithoutTeamInput[]
    upsert?: competition_submissionUpsertWithWhereUniqueWithoutTeamInput | competition_submissionUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: competition_submissionCreateManyTeamInputEnvelope
    set?: competition_submissionWhereUniqueInput | competition_submissionWhereUniqueInput[]
    disconnect?: competition_submissionWhereUniqueInput | competition_submissionWhereUniqueInput[]
    delete?: competition_submissionWhereUniqueInput | competition_submissionWhereUniqueInput[]
    connect?: competition_submissionWhereUniqueInput | competition_submissionWhereUniqueInput[]
    update?: competition_submissionUpdateWithWhereUniqueWithoutTeamInput | competition_submissionUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: competition_submissionUpdateManyWithWhereWithoutTeamInput | competition_submissionUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: competition_submissionScalarWhereInput | competition_submissionScalarWhereInput[]
  }

  export type team_memberUncheckedUpdateManyWithoutTeamNestedInput = {
    create?: XOR<team_memberCreateWithoutTeamInput, team_memberUncheckedCreateWithoutTeamInput> | team_memberCreateWithoutTeamInput[] | team_memberUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: team_memberCreateOrConnectWithoutTeamInput | team_memberCreateOrConnectWithoutTeamInput[]
    upsert?: team_memberUpsertWithWhereUniqueWithoutTeamInput | team_memberUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: team_memberCreateManyTeamInputEnvelope
    set?: team_memberWhereUniqueInput | team_memberWhereUniqueInput[]
    disconnect?: team_memberWhereUniqueInput | team_memberWhereUniqueInput[]
    delete?: team_memberWhereUniqueInput | team_memberWhereUniqueInput[]
    connect?: team_memberWhereUniqueInput | team_memberWhereUniqueInput[]
    update?: team_memberUpdateWithWhereUniqueWithoutTeamInput | team_memberUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: team_memberUpdateManyWithWhereWithoutTeamInput | team_memberUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: team_memberScalarWhereInput | team_memberScalarWhereInput[]
  }

  export type competition_submissionUncheckedUpdateManyWithoutTeamNestedInput = {
    create?: XOR<competition_submissionCreateWithoutTeamInput, competition_submissionUncheckedCreateWithoutTeamInput> | competition_submissionCreateWithoutTeamInput[] | competition_submissionUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: competition_submissionCreateOrConnectWithoutTeamInput | competition_submissionCreateOrConnectWithoutTeamInput[]
    upsert?: competition_submissionUpsertWithWhereUniqueWithoutTeamInput | competition_submissionUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: competition_submissionCreateManyTeamInputEnvelope
    set?: competition_submissionWhereUniqueInput | competition_submissionWhereUniqueInput[]
    disconnect?: competition_submissionWhereUniqueInput | competition_submissionWhereUniqueInput[]
    delete?: competition_submissionWhereUniqueInput | competition_submissionWhereUniqueInput[]
    connect?: competition_submissionWhereUniqueInput | competition_submissionWhereUniqueInput[]
    update?: competition_submissionUpdateWithWhereUniqueWithoutTeamInput | competition_submissionUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: competition_submissionUpdateManyWithWhereWithoutTeamInput | competition_submissionUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: competition_submissionScalarWhereInput | competition_submissionScalarWhereInput[]
  }

  export type mediaCreateNestedOneWithoutPaymentproofInput = {
    create?: XOR<mediaCreateWithoutPaymentproofInput, mediaUncheckedCreateWithoutPaymentproofInput>
    connectOrCreate?: mediaCreateOrConnectWithoutPaymentproofInput
    connect?: mediaWhereUniqueInput
  }

  export type userCreateNestedOneWithoutMemberInput = {
    create?: XOR<userCreateWithoutMemberInput, userUncheckedCreateWithoutMemberInput>
    connectOrCreate?: userCreateOrConnectWithoutMemberInput
    connect?: userWhereUniqueInput
  }

  export type teamCreateNestedOneWithoutMembersInput = {
    create?: XOR<teamCreateWithoutMembersInput, teamUncheckedCreateWithoutMembersInput>
    connectOrCreate?: teamCreateOrConnectWithoutMembersInput
    connect?: teamWhereUniqueInput
  }

  export type mediaCreateNestedOneWithoutTwibbonInput = {
    create?: XOR<mediaCreateWithoutTwibbonInput, mediaUncheckedCreateWithoutTwibbonInput>
    connectOrCreate?: mediaCreateOrConnectWithoutTwibbonInput
    connect?: mediaWhereUniqueInput
  }

  export type mediaCreateNestedOneWithoutKartuInput = {
    create?: XOR<mediaCreateWithoutKartuInput, mediaUncheckedCreateWithoutKartuInput>
    connectOrCreate?: mediaCreateOrConnectWithoutKartuInput
    connect?: mediaWhereUniqueInput
  }

  export type Enumteam_member_role_enumFieldUpdateOperationsInput = {
    set?: $Enums.team_member_role_enum
  }

  export type mediaUpdateOneWithoutPaymentproofNestedInput = {
    create?: XOR<mediaCreateWithoutPaymentproofInput, mediaUncheckedCreateWithoutPaymentproofInput>
    connectOrCreate?: mediaCreateOrConnectWithoutPaymentproofInput
    upsert?: mediaUpsertWithoutPaymentproofInput
    disconnect?: mediaWhereInput | boolean
    delete?: mediaWhereInput | boolean
    connect?: mediaWhereUniqueInput
    update?: XOR<XOR<mediaUpdateToOneWithWhereWithoutPaymentproofInput, mediaUpdateWithoutPaymentproofInput>, mediaUncheckedUpdateWithoutPaymentproofInput>
  }

  export type userUpdateOneRequiredWithoutMemberNestedInput = {
    create?: XOR<userCreateWithoutMemberInput, userUncheckedCreateWithoutMemberInput>
    connectOrCreate?: userCreateOrConnectWithoutMemberInput
    upsert?: userUpsertWithoutMemberInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutMemberInput, userUpdateWithoutMemberInput>, userUncheckedUpdateWithoutMemberInput>
  }

  export type teamUpdateOneRequiredWithoutMembersNestedInput = {
    create?: XOR<teamCreateWithoutMembersInput, teamUncheckedCreateWithoutMembersInput>
    connectOrCreate?: teamCreateOrConnectWithoutMembersInput
    upsert?: teamUpsertWithoutMembersInput
    connect?: teamWhereUniqueInput
    update?: XOR<XOR<teamUpdateToOneWithWhereWithoutMembersInput, teamUpdateWithoutMembersInput>, teamUncheckedUpdateWithoutMembersInput>
  }

  export type mediaUpdateOneWithoutTwibbonNestedInput = {
    create?: XOR<mediaCreateWithoutTwibbonInput, mediaUncheckedCreateWithoutTwibbonInput>
    connectOrCreate?: mediaCreateOrConnectWithoutTwibbonInput
    upsert?: mediaUpsertWithoutTwibbonInput
    disconnect?: mediaWhereInput | boolean
    delete?: mediaWhereInput | boolean
    connect?: mediaWhereUniqueInput
    update?: XOR<XOR<mediaUpdateToOneWithWhereWithoutTwibbonInput, mediaUpdateWithoutTwibbonInput>, mediaUncheckedUpdateWithoutTwibbonInput>
  }

  export type mediaUpdateOneWithoutKartuNestedInput = {
    create?: XOR<mediaCreateWithoutKartuInput, mediaUncheckedCreateWithoutKartuInput>
    connectOrCreate?: mediaCreateOrConnectWithoutKartuInput
    upsert?: mediaUpsertWithoutKartuInput
    disconnect?: mediaWhereInput | boolean
    delete?: mediaWhereInput | boolean
    connect?: mediaWhereUniqueInput
    update?: XOR<XOR<mediaUpdateToOneWithWhereWithoutKartuInput, mediaUpdateWithoutKartuInput>, mediaUncheckedUpdateWithoutKartuInput>
  }

  export type mediaCreateNestedManyWithoutUploaderInput = {
    create?: XOR<mediaCreateWithoutUploaderInput, mediaUncheckedCreateWithoutUploaderInput> | mediaCreateWithoutUploaderInput[] | mediaUncheckedCreateWithoutUploaderInput[]
    connectOrCreate?: mediaCreateOrConnectWithoutUploaderInput | mediaCreateOrConnectWithoutUploaderInput[]
    createMany?: mediaCreateManyUploaderInputEnvelope
    connect?: mediaWhereUniqueInput | mediaWhereUniqueInput[]
  }

  export type user_identityCreateNestedOneWithoutUserInput = {
    create?: XOR<user_identityCreateWithoutUserInput, user_identityUncheckedCreateWithoutUserInput>
    connectOrCreate?: user_identityCreateOrConnectWithoutUserInput
    connect?: user_identityWhereUniqueInput
  }

  export type competition_announcementCreateNestedManyWithoutAuthorInput = {
    create?: XOR<competition_announcementCreateWithoutAuthorInput, competition_announcementUncheckedCreateWithoutAuthorInput> | competition_announcementCreateWithoutAuthorInput[] | competition_announcementUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: competition_announcementCreateOrConnectWithoutAuthorInput | competition_announcementCreateOrConnectWithoutAuthorInput[]
    createMany?: competition_announcementCreateManyAuthorInputEnvelope
    connect?: competition_announcementWhereUniqueInput | competition_announcementWhereUniqueInput[]
  }

  export type team_memberCreateNestedManyWithoutUserInput = {
    create?: XOR<team_memberCreateWithoutUserInput, team_memberUncheckedCreateWithoutUserInput> | team_memberCreateWithoutUserInput[] | team_memberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: team_memberCreateOrConnectWithoutUserInput | team_memberCreateOrConnectWithoutUserInput[]
    createMany?: team_memberCreateManyUserInputEnvelope
    connect?: team_memberWhereUniqueInput | team_memberWhereUniqueInput[]
  }

  export type mediaUncheckedCreateNestedManyWithoutUploaderInput = {
    create?: XOR<mediaCreateWithoutUploaderInput, mediaUncheckedCreateWithoutUploaderInput> | mediaCreateWithoutUploaderInput[] | mediaUncheckedCreateWithoutUploaderInput[]
    connectOrCreate?: mediaCreateOrConnectWithoutUploaderInput | mediaCreateOrConnectWithoutUploaderInput[]
    createMany?: mediaCreateManyUploaderInputEnvelope
    connect?: mediaWhereUniqueInput | mediaWhereUniqueInput[]
  }

  export type user_identityUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<user_identityCreateWithoutUserInput, user_identityUncheckedCreateWithoutUserInput>
    connectOrCreate?: user_identityCreateOrConnectWithoutUserInput
    connect?: user_identityWhereUniqueInput
  }

  export type competition_announcementUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<competition_announcementCreateWithoutAuthorInput, competition_announcementUncheckedCreateWithoutAuthorInput> | competition_announcementCreateWithoutAuthorInput[] | competition_announcementUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: competition_announcementCreateOrConnectWithoutAuthorInput | competition_announcementCreateOrConnectWithoutAuthorInput[]
    createMany?: competition_announcementCreateManyAuthorInputEnvelope
    connect?: competition_announcementWhereUniqueInput | competition_announcementWhereUniqueInput[]
  }

  export type team_memberUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<team_memberCreateWithoutUserInput, team_memberUncheckedCreateWithoutUserInput> | team_memberCreateWithoutUserInput[] | team_memberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: team_memberCreateOrConnectWithoutUserInput | team_memberCreateOrConnectWithoutUserInput[]
    createMany?: team_memberCreateManyUserInputEnvelope
    connect?: team_memberWhereUniqueInput | team_memberWhereUniqueInput[]
  }

  export type NullableEnumeducation_enumFieldUpdateOperationsInput = {
    set?: $Enums.education_enum | null
  }

  export type mediaUpdateManyWithoutUploaderNestedInput = {
    create?: XOR<mediaCreateWithoutUploaderInput, mediaUncheckedCreateWithoutUploaderInput> | mediaCreateWithoutUploaderInput[] | mediaUncheckedCreateWithoutUploaderInput[]
    connectOrCreate?: mediaCreateOrConnectWithoutUploaderInput | mediaCreateOrConnectWithoutUploaderInput[]
    upsert?: mediaUpsertWithWhereUniqueWithoutUploaderInput | mediaUpsertWithWhereUniqueWithoutUploaderInput[]
    createMany?: mediaCreateManyUploaderInputEnvelope
    set?: mediaWhereUniqueInput | mediaWhereUniqueInput[]
    disconnect?: mediaWhereUniqueInput | mediaWhereUniqueInput[]
    delete?: mediaWhereUniqueInput | mediaWhereUniqueInput[]
    connect?: mediaWhereUniqueInput | mediaWhereUniqueInput[]
    update?: mediaUpdateWithWhereUniqueWithoutUploaderInput | mediaUpdateWithWhereUniqueWithoutUploaderInput[]
    updateMany?: mediaUpdateManyWithWhereWithoutUploaderInput | mediaUpdateManyWithWhereWithoutUploaderInput[]
    deleteMany?: mediaScalarWhereInput | mediaScalarWhereInput[]
  }

  export type user_identityUpdateOneWithoutUserNestedInput = {
    create?: XOR<user_identityCreateWithoutUserInput, user_identityUncheckedCreateWithoutUserInput>
    connectOrCreate?: user_identityCreateOrConnectWithoutUserInput
    upsert?: user_identityUpsertWithoutUserInput
    disconnect?: user_identityWhereInput | boolean
    delete?: user_identityWhereInput | boolean
    connect?: user_identityWhereUniqueInput
    update?: XOR<XOR<user_identityUpdateToOneWithWhereWithoutUserInput, user_identityUpdateWithoutUserInput>, user_identityUncheckedUpdateWithoutUserInput>
  }

  export type competition_announcementUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<competition_announcementCreateWithoutAuthorInput, competition_announcementUncheckedCreateWithoutAuthorInput> | competition_announcementCreateWithoutAuthorInput[] | competition_announcementUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: competition_announcementCreateOrConnectWithoutAuthorInput | competition_announcementCreateOrConnectWithoutAuthorInput[]
    upsert?: competition_announcementUpsertWithWhereUniqueWithoutAuthorInput | competition_announcementUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: competition_announcementCreateManyAuthorInputEnvelope
    set?: competition_announcementWhereUniqueInput | competition_announcementWhereUniqueInput[]
    disconnect?: competition_announcementWhereUniqueInput | competition_announcementWhereUniqueInput[]
    delete?: competition_announcementWhereUniqueInput | competition_announcementWhereUniqueInput[]
    connect?: competition_announcementWhereUniqueInput | competition_announcementWhereUniqueInput[]
    update?: competition_announcementUpdateWithWhereUniqueWithoutAuthorInput | competition_announcementUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: competition_announcementUpdateManyWithWhereWithoutAuthorInput | competition_announcementUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: competition_announcementScalarWhereInput | competition_announcementScalarWhereInput[]
  }

  export type team_memberUpdateManyWithoutUserNestedInput = {
    create?: XOR<team_memberCreateWithoutUserInput, team_memberUncheckedCreateWithoutUserInput> | team_memberCreateWithoutUserInput[] | team_memberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: team_memberCreateOrConnectWithoutUserInput | team_memberCreateOrConnectWithoutUserInput[]
    upsert?: team_memberUpsertWithWhereUniqueWithoutUserInput | team_memberUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: team_memberCreateManyUserInputEnvelope
    set?: team_memberWhereUniqueInput | team_memberWhereUniqueInput[]
    disconnect?: team_memberWhereUniqueInput | team_memberWhereUniqueInput[]
    delete?: team_memberWhereUniqueInput | team_memberWhereUniqueInput[]
    connect?: team_memberWhereUniqueInput | team_memberWhereUniqueInput[]
    update?: team_memberUpdateWithWhereUniqueWithoutUserInput | team_memberUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: team_memberUpdateManyWithWhereWithoutUserInput | team_memberUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: team_memberScalarWhereInput | team_memberScalarWhereInput[]
  }

  export type mediaUncheckedUpdateManyWithoutUploaderNestedInput = {
    create?: XOR<mediaCreateWithoutUploaderInput, mediaUncheckedCreateWithoutUploaderInput> | mediaCreateWithoutUploaderInput[] | mediaUncheckedCreateWithoutUploaderInput[]
    connectOrCreate?: mediaCreateOrConnectWithoutUploaderInput | mediaCreateOrConnectWithoutUploaderInput[]
    upsert?: mediaUpsertWithWhereUniqueWithoutUploaderInput | mediaUpsertWithWhereUniqueWithoutUploaderInput[]
    createMany?: mediaCreateManyUploaderInputEnvelope
    set?: mediaWhereUniqueInput | mediaWhereUniqueInput[]
    disconnect?: mediaWhereUniqueInput | mediaWhereUniqueInput[]
    delete?: mediaWhereUniqueInput | mediaWhereUniqueInput[]
    connect?: mediaWhereUniqueInput | mediaWhereUniqueInput[]
    update?: mediaUpdateWithWhereUniqueWithoutUploaderInput | mediaUpdateWithWhereUniqueWithoutUploaderInput[]
    updateMany?: mediaUpdateManyWithWhereWithoutUploaderInput | mediaUpdateManyWithWhereWithoutUploaderInput[]
    deleteMany?: mediaScalarWhereInput | mediaScalarWhereInput[]
  }

  export type user_identityUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<user_identityCreateWithoutUserInput, user_identityUncheckedCreateWithoutUserInput>
    connectOrCreate?: user_identityCreateOrConnectWithoutUserInput
    upsert?: user_identityUpsertWithoutUserInput
    disconnect?: user_identityWhereInput | boolean
    delete?: user_identityWhereInput | boolean
    connect?: user_identityWhereUniqueInput
    update?: XOR<XOR<user_identityUpdateToOneWithWhereWithoutUserInput, user_identityUpdateWithoutUserInput>, user_identityUncheckedUpdateWithoutUserInput>
  }

  export type competition_announcementUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<competition_announcementCreateWithoutAuthorInput, competition_announcementUncheckedCreateWithoutAuthorInput> | competition_announcementCreateWithoutAuthorInput[] | competition_announcementUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: competition_announcementCreateOrConnectWithoutAuthorInput | competition_announcementCreateOrConnectWithoutAuthorInput[]
    upsert?: competition_announcementUpsertWithWhereUniqueWithoutAuthorInput | competition_announcementUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: competition_announcementCreateManyAuthorInputEnvelope
    set?: competition_announcementWhereUniqueInput | competition_announcementWhereUniqueInput[]
    disconnect?: competition_announcementWhereUniqueInput | competition_announcementWhereUniqueInput[]
    delete?: competition_announcementWhereUniqueInput | competition_announcementWhereUniqueInput[]
    connect?: competition_announcementWhereUniqueInput | competition_announcementWhereUniqueInput[]
    update?: competition_announcementUpdateWithWhereUniqueWithoutAuthorInput | competition_announcementUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: competition_announcementUpdateManyWithWhereWithoutAuthorInput | competition_announcementUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: competition_announcementScalarWhereInput | competition_announcementScalarWhereInput[]
  }

  export type team_memberUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<team_memberCreateWithoutUserInput, team_memberUncheckedCreateWithoutUserInput> | team_memberCreateWithoutUserInput[] | team_memberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: team_memberCreateOrConnectWithoutUserInput | team_memberCreateOrConnectWithoutUserInput[]
    upsert?: team_memberUpsertWithWhereUniqueWithoutUserInput | team_memberUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: team_memberCreateManyUserInputEnvelope
    set?: team_memberWhereUniqueInput | team_memberWhereUniqueInput[]
    disconnect?: team_memberWhereUniqueInput | team_memberWhereUniqueInput[]
    delete?: team_memberWhereUniqueInput | team_memberWhereUniqueInput[]
    connect?: team_memberWhereUniqueInput | team_memberWhereUniqueInput[]
    update?: team_memberUpdateWithWhereUniqueWithoutUserInput | team_memberUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: team_memberUpdateManyWithWhereWithoutUserInput | team_memberUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: team_memberScalarWhereInput | team_memberScalarWhereInput[]
  }

  export type userCreateNestedOneWithoutIdentityInput = {
    create?: XOR<userCreateWithoutIdentityInput, userUncheckedCreateWithoutIdentityInput>
    connectOrCreate?: userCreateOrConnectWithoutIdentityInput
    connect?: userWhereUniqueInput
  }

  export type Enumuser_identity_provider_enumFieldUpdateOperationsInput = {
    set?: $Enums.user_identity_provider_enum
  }

  export type NullableEnumuser_identity_role_enumFieldUpdateOperationsInput = {
    set?: $Enums.user_identity_role_enum | null
  }

  export type userUpdateOneRequiredWithoutIdentityNestedInput = {
    create?: XOR<userCreateWithoutIdentityInput, userUncheckedCreateWithoutIdentityInput>
    connectOrCreate?: userCreateOrConnectWithoutIdentityInput
    upsert?: userUpsertWithoutIdentityInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutIdentityInput, userUpdateWithoutIdentityInput>, userUncheckedUpdateWithoutIdentityInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnummedia_grouping_enumNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.media_grouping_enum | Enummedia_grouping_enumFieldRefInput<$PrismaModel> | null
    in?: $Enums.media_grouping_enum[] | null
    notIn?: $Enums.media_grouping_enum[] | null
    not?: NestedEnummedia_grouping_enumNullableFilter<$PrismaModel> | $Enums.media_grouping_enum | null
  }

  export type NestedEnummedia_type_enumFilter<$PrismaModel = never> = {
    equals?: $Enums.media_type_enum | Enummedia_type_enumFieldRefInput<$PrismaModel>
    in?: $Enums.media_type_enum[]
    notIn?: $Enums.media_type_enum[]
    not?: NestedEnummedia_type_enumFilter<$PrismaModel> | $Enums.media_type_enum
  }

  export type NestedEnummedia_grouping_enumNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.media_grouping_enum | Enummedia_grouping_enumFieldRefInput<$PrismaModel> | null
    in?: $Enums.media_grouping_enum[] | null
    notIn?: $Enums.media_grouping_enum[] | null
    not?: NestedEnummedia_grouping_enumNullableWithAggregatesFilter<$PrismaModel> | $Enums.media_grouping_enum | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnummedia_grouping_enumNullableFilter<$PrismaModel>
    _max?: NestedEnummedia_grouping_enumNullableFilter<$PrismaModel>
  }

  export type NestedEnummedia_type_enumWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.media_type_enum | Enummedia_type_enumFieldRefInput<$PrismaModel>
    in?: $Enums.media_type_enum[]
    notIn?: $Enums.media_type_enum[]
    not?: NestedEnummedia_type_enumWithAggregatesFilter<$PrismaModel> | $Enums.media_type_enum
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnummedia_type_enumFilter<$PrismaModel>
    _max?: NestedEnummedia_type_enumFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedEnumteam_member_role_enumFilter<$PrismaModel = never> = {
    equals?: $Enums.team_member_role_enum | Enumteam_member_role_enumFieldRefInput<$PrismaModel>
    in?: $Enums.team_member_role_enum[]
    notIn?: $Enums.team_member_role_enum[]
    not?: NestedEnumteam_member_role_enumFilter<$PrismaModel> | $Enums.team_member_role_enum
  }

  export type NestedEnumteam_member_role_enumWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.team_member_role_enum | Enumteam_member_role_enumFieldRefInput<$PrismaModel>
    in?: $Enums.team_member_role_enum[]
    notIn?: $Enums.team_member_role_enum[]
    not?: NestedEnumteam_member_role_enumWithAggregatesFilter<$PrismaModel> | $Enums.team_member_role_enum
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumteam_member_role_enumFilter<$PrismaModel>
    _max?: NestedEnumteam_member_role_enumFilter<$PrismaModel>
  }

  export type NestedEnumeducation_enumNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.education_enum | Enumeducation_enumFieldRefInput<$PrismaModel> | null
    in?: $Enums.education_enum[] | null
    notIn?: $Enums.education_enum[] | null
    not?: NestedEnumeducation_enumNullableFilter<$PrismaModel> | $Enums.education_enum | null
  }

  export type NestedEnumeducation_enumNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.education_enum | Enumeducation_enumFieldRefInput<$PrismaModel> | null
    in?: $Enums.education_enum[] | null
    notIn?: $Enums.education_enum[] | null
    not?: NestedEnumeducation_enumNullableWithAggregatesFilter<$PrismaModel> | $Enums.education_enum | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumeducation_enumNullableFilter<$PrismaModel>
    _max?: NestedEnumeducation_enumNullableFilter<$PrismaModel>
  }

  export type NestedEnumuser_identity_provider_enumFilter<$PrismaModel = never> = {
    equals?: $Enums.user_identity_provider_enum | Enumuser_identity_provider_enumFieldRefInput<$PrismaModel>
    in?: $Enums.user_identity_provider_enum[]
    notIn?: $Enums.user_identity_provider_enum[]
    not?: NestedEnumuser_identity_provider_enumFilter<$PrismaModel> | $Enums.user_identity_provider_enum
  }

  export type NestedEnumuser_identity_role_enumNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.user_identity_role_enum | Enumuser_identity_role_enumFieldRefInput<$PrismaModel> | null
    in?: $Enums.user_identity_role_enum[] | null
    notIn?: $Enums.user_identity_role_enum[] | null
    not?: NestedEnumuser_identity_role_enumNullableFilter<$PrismaModel> | $Enums.user_identity_role_enum | null
  }

  export type NestedEnumuser_identity_provider_enumWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.user_identity_provider_enum | Enumuser_identity_provider_enumFieldRefInput<$PrismaModel>
    in?: $Enums.user_identity_provider_enum[]
    notIn?: $Enums.user_identity_provider_enum[]
    not?: NestedEnumuser_identity_provider_enumWithAggregatesFilter<$PrismaModel> | $Enums.user_identity_provider_enum
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumuser_identity_provider_enumFilter<$PrismaModel>
    _max?: NestedEnumuser_identity_provider_enumFilter<$PrismaModel>
  }

  export type NestedEnumuser_identity_role_enumNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.user_identity_role_enum | Enumuser_identity_role_enumFieldRefInput<$PrismaModel> | null
    in?: $Enums.user_identity_role_enum[] | null
    notIn?: $Enums.user_identity_role_enum[] | null
    not?: NestedEnumuser_identity_role_enumNullableWithAggregatesFilter<$PrismaModel> | $Enums.user_identity_role_enum | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumuser_identity_role_enumNullableFilter<$PrismaModel>
    _max?: NestedEnumuser_identity_role_enumNullableFilter<$PrismaModel>
  }

  export type competition_announcementCreateWithoutCompetitionInput = {
    id: string
    title: string
    description: string
    created_at?: Date | string
    updated_at?: Date | string
    author: userCreateNestedOneWithoutAnnouncementsInput
  }

  export type competition_announcementUncheckedCreateWithoutCompetitionInput = {
    id: string
    author_id: string
    title: string
    description: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type competition_announcementCreateOrConnectWithoutCompetitionInput = {
    where: competition_announcementWhereUniqueInput
    create: XOR<competition_announcementCreateWithoutCompetitionInput, competition_announcementUncheckedCreateWithoutCompetitionInput>
  }

  export type competition_announcementCreateManyCompetitionInputEnvelope = {
    data: competition_announcementCreateManyCompetitionInput | competition_announcementCreateManyCompetitionInput[]
    skipDuplicates?: boolean
  }

  export type competition_submissionCreateWithoutCompetitionInput = {
    created_at?: Date | string
    updated_at?: Date | string | null
    team: teamCreateNestedOneWithoutSubmissionInput
    media: mediaCreateNestedOneWithoutSubmissionInput
  }

  export type competition_submissionUncheckedCreateWithoutCompetitionInput = {
    team_id: string
    media_id: string
    created_at?: Date | string
    updated_at?: Date | string | null
  }

  export type competition_submissionCreateOrConnectWithoutCompetitionInput = {
    where: competition_submissionWhereUniqueInput
    create: XOR<competition_submissionCreateWithoutCompetitionInput, competition_submissionUncheckedCreateWithoutCompetitionInput>
  }

  export type competition_submissionCreateManyCompetitionInputEnvelope = {
    data: competition_submissionCreateManyCompetitionInput | competition_submissionCreateManyCompetitionInput[]
    skipDuplicates?: boolean
  }

  export type competition_timelineCreateWithoutCompetitionInput = {
    id: string
    title: string
    date: Date | string
  }

  export type competition_timelineUncheckedCreateWithoutCompetitionInput = {
    id: string
    title: string
    date: Date | string
  }

  export type competition_timelineCreateOrConnectWithoutCompetitionInput = {
    where: competition_timelineWhereUniqueInput
    create: XOR<competition_timelineCreateWithoutCompetitionInput, competition_timelineUncheckedCreateWithoutCompetitionInput>
  }

  export type competition_timelineCreateManyCompetitionInputEnvelope = {
    data: competition_timelineCreateManyCompetitionInput | competition_timelineCreateManyCompetitionInput[]
    skipDuplicates?: boolean
  }

  export type teamCreateWithoutCompetitionInput = {
    id: string
    team_name: string
    team_code: string
    is_verified?: boolean
    verification_error?: string | null
    created_at?: Date | string
    updated_at?: Date | string | null
    members?: team_memberCreateNestedManyWithoutTeamInput
    submission?: competition_submissionCreateNestedManyWithoutTeamInput
  }

  export type teamUncheckedCreateWithoutCompetitionInput = {
    id: string
    team_name: string
    team_code: string
    is_verified?: boolean
    verification_error?: string | null
    created_at?: Date | string
    updated_at?: Date | string | null
    members?: team_memberUncheckedCreateNestedManyWithoutTeamInput
    submission?: competition_submissionUncheckedCreateNestedManyWithoutTeamInput
  }

  export type teamCreateOrConnectWithoutCompetitionInput = {
    where: teamWhereUniqueInput
    create: XOR<teamCreateWithoutCompetitionInput, teamUncheckedCreateWithoutCompetitionInput>
  }

  export type teamCreateManyCompetitionInputEnvelope = {
    data: teamCreateManyCompetitionInput | teamCreateManyCompetitionInput[]
    skipDuplicates?: boolean
  }

  export type competition_announcementUpsertWithWhereUniqueWithoutCompetitionInput = {
    where: competition_announcementWhereUniqueInput
    update: XOR<competition_announcementUpdateWithoutCompetitionInput, competition_announcementUncheckedUpdateWithoutCompetitionInput>
    create: XOR<competition_announcementCreateWithoutCompetitionInput, competition_announcementUncheckedCreateWithoutCompetitionInput>
  }

  export type competition_announcementUpdateWithWhereUniqueWithoutCompetitionInput = {
    where: competition_announcementWhereUniqueInput
    data: XOR<competition_announcementUpdateWithoutCompetitionInput, competition_announcementUncheckedUpdateWithoutCompetitionInput>
  }

  export type competition_announcementUpdateManyWithWhereWithoutCompetitionInput = {
    where: competition_announcementScalarWhereInput
    data: XOR<competition_announcementUpdateManyMutationInput, competition_announcementUncheckedUpdateManyWithoutCompetitionInput>
  }

  export type competition_announcementScalarWhereInput = {
    AND?: competition_announcementScalarWhereInput | competition_announcementScalarWhereInput[]
    OR?: competition_announcementScalarWhereInput[]
    NOT?: competition_announcementScalarWhereInput | competition_announcementScalarWhereInput[]
    id?: StringFilter<"competition_announcement"> | string
    competition_id?: StringFilter<"competition_announcement"> | string
    author_id?: StringFilter<"competition_announcement"> | string
    title?: StringFilter<"competition_announcement"> | string
    description?: StringFilter<"competition_announcement"> | string
    created_at?: DateTimeFilter<"competition_announcement"> | Date | string
    updated_at?: DateTimeFilter<"competition_announcement"> | Date | string
  }

  export type competition_submissionUpsertWithWhereUniqueWithoutCompetitionInput = {
    where: competition_submissionWhereUniqueInput
    update: XOR<competition_submissionUpdateWithoutCompetitionInput, competition_submissionUncheckedUpdateWithoutCompetitionInput>
    create: XOR<competition_submissionCreateWithoutCompetitionInput, competition_submissionUncheckedCreateWithoutCompetitionInput>
  }

  export type competition_submissionUpdateWithWhereUniqueWithoutCompetitionInput = {
    where: competition_submissionWhereUniqueInput
    data: XOR<competition_submissionUpdateWithoutCompetitionInput, competition_submissionUncheckedUpdateWithoutCompetitionInput>
  }

  export type competition_submissionUpdateManyWithWhereWithoutCompetitionInput = {
    where: competition_submissionScalarWhereInput
    data: XOR<competition_submissionUpdateManyMutationInput, competition_submissionUncheckedUpdateManyWithoutCompetitionInput>
  }

  export type competition_submissionScalarWhereInput = {
    AND?: competition_submissionScalarWhereInput | competition_submissionScalarWhereInput[]
    OR?: competition_submissionScalarWhereInput[]
    NOT?: competition_submissionScalarWhereInput | competition_submissionScalarWhereInput[]
    team_id?: StringFilter<"competition_submission"> | string
    competition_id?: StringFilter<"competition_submission"> | string
    media_id?: StringFilter<"competition_submission"> | string
    created_at?: DateTimeFilter<"competition_submission"> | Date | string
    updated_at?: DateTimeNullableFilter<"competition_submission"> | Date | string | null
  }

  export type competition_timelineUpsertWithWhereUniqueWithoutCompetitionInput = {
    where: competition_timelineWhereUniqueInput
    update: XOR<competition_timelineUpdateWithoutCompetitionInput, competition_timelineUncheckedUpdateWithoutCompetitionInput>
    create: XOR<competition_timelineCreateWithoutCompetitionInput, competition_timelineUncheckedCreateWithoutCompetitionInput>
  }

  export type competition_timelineUpdateWithWhereUniqueWithoutCompetitionInput = {
    where: competition_timelineWhereUniqueInput
    data: XOR<competition_timelineUpdateWithoutCompetitionInput, competition_timelineUncheckedUpdateWithoutCompetitionInput>
  }

  export type competition_timelineUpdateManyWithWhereWithoutCompetitionInput = {
    where: competition_timelineScalarWhereInput
    data: XOR<competition_timelineUpdateManyMutationInput, competition_timelineUncheckedUpdateManyWithoutCompetitionInput>
  }

  export type competition_timelineScalarWhereInput = {
    AND?: competition_timelineScalarWhereInput | competition_timelineScalarWhereInput[]
    OR?: competition_timelineScalarWhereInput[]
    NOT?: competition_timelineScalarWhereInput | competition_timelineScalarWhereInput[]
    id?: StringFilter<"competition_timeline"> | string
    competition_id?: StringFilter<"competition_timeline"> | string
    title?: StringFilter<"competition_timeline"> | string
    date?: DateTimeFilter<"competition_timeline"> | Date | string
  }

  export type teamUpsertWithWhereUniqueWithoutCompetitionInput = {
    where: teamWhereUniqueInput
    update: XOR<teamUpdateWithoutCompetitionInput, teamUncheckedUpdateWithoutCompetitionInput>
    create: XOR<teamCreateWithoutCompetitionInput, teamUncheckedCreateWithoutCompetitionInput>
  }

  export type teamUpdateWithWhereUniqueWithoutCompetitionInput = {
    where: teamWhereUniqueInput
    data: XOR<teamUpdateWithoutCompetitionInput, teamUncheckedUpdateWithoutCompetitionInput>
  }

  export type teamUpdateManyWithWhereWithoutCompetitionInput = {
    where: teamScalarWhereInput
    data: XOR<teamUpdateManyMutationInput, teamUncheckedUpdateManyWithoutCompetitionInput>
  }

  export type teamScalarWhereInput = {
    AND?: teamScalarWhereInput | teamScalarWhereInput[]
    OR?: teamScalarWhereInput[]
    NOT?: teamScalarWhereInput | teamScalarWhereInput[]
    id?: StringFilter<"team"> | string
    competition_id?: StringFilter<"team"> | string
    team_name?: StringFilter<"team"> | string
    team_code?: StringFilter<"team"> | string
    is_verified?: BoolFilter<"team"> | boolean
    verification_error?: StringNullableFilter<"team"> | string | null
    created_at?: DateTimeFilter<"team"> | Date | string
    updated_at?: DateTimeNullableFilter<"team"> | Date | string | null
  }

  export type competitionCreateWithoutAnnouncementsInput = {
    id: string
    title: string
    description: string
    max_team_member?: number
    guide_book_url: string
    submissions?: competition_submissionCreateNestedManyWithoutCompetitionInput
    timelines?: competition_timelineCreateNestedManyWithoutCompetitionInput
    teams?: teamCreateNestedManyWithoutCompetitionInput
  }

  export type competitionUncheckedCreateWithoutAnnouncementsInput = {
    id: string
    title: string
    description: string
    max_team_member?: number
    guide_book_url: string
    submissions?: competition_submissionUncheckedCreateNestedManyWithoutCompetitionInput
    timelines?: competition_timelineUncheckedCreateNestedManyWithoutCompetitionInput
    teams?: teamUncheckedCreateNestedManyWithoutCompetitionInput
  }

  export type competitionCreateOrConnectWithoutAnnouncementsInput = {
    where: competitionWhereUniqueInput
    create: XOR<competitionCreateWithoutAnnouncementsInput, competitionUncheckedCreateWithoutAnnouncementsInput>
  }

  export type userCreateWithoutAnnouncementsInput = {
    id: string
    email: string
    full_name?: string | null
    birth_date?: Date | string | null
    pendidikan?: $Enums.education_enum | null
    nama_sekolah?: string | null
    entry_source?: string | null
    phone_number?: string | null
    id_line?: string | null
    id_discord?: string | null
    id_instagram?: string | null
    consent?: boolean
    is_registration_complete?: boolean
    created_at?: Date | string
    updated_at?: Date | string | null
    uploaded?: mediaCreateNestedManyWithoutUploaderInput
    identity?: user_identityCreateNestedOneWithoutUserInput
    member?: team_memberCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateWithoutAnnouncementsInput = {
    id: string
    email: string
    full_name?: string | null
    birth_date?: Date | string | null
    pendidikan?: $Enums.education_enum | null
    nama_sekolah?: string | null
    entry_source?: string | null
    phone_number?: string | null
    id_line?: string | null
    id_discord?: string | null
    id_instagram?: string | null
    consent?: boolean
    is_registration_complete?: boolean
    created_at?: Date | string
    updated_at?: Date | string | null
    uploaded?: mediaUncheckedCreateNestedManyWithoutUploaderInput
    identity?: user_identityUncheckedCreateNestedOneWithoutUserInput
    member?: team_memberUncheckedCreateNestedManyWithoutUserInput
  }

  export type userCreateOrConnectWithoutAnnouncementsInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutAnnouncementsInput, userUncheckedCreateWithoutAnnouncementsInput>
  }

  export type competitionUpsertWithoutAnnouncementsInput = {
    update: XOR<competitionUpdateWithoutAnnouncementsInput, competitionUncheckedUpdateWithoutAnnouncementsInput>
    create: XOR<competitionCreateWithoutAnnouncementsInput, competitionUncheckedCreateWithoutAnnouncementsInput>
    where?: competitionWhereInput
  }

  export type competitionUpdateToOneWithWhereWithoutAnnouncementsInput = {
    where?: competitionWhereInput
    data: XOR<competitionUpdateWithoutAnnouncementsInput, competitionUncheckedUpdateWithoutAnnouncementsInput>
  }

  export type competitionUpdateWithoutAnnouncementsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    max_team_member?: IntFieldUpdateOperationsInput | number
    guide_book_url?: StringFieldUpdateOperationsInput | string
    submissions?: competition_submissionUpdateManyWithoutCompetitionNestedInput
    timelines?: competition_timelineUpdateManyWithoutCompetitionNestedInput
    teams?: teamUpdateManyWithoutCompetitionNestedInput
  }

  export type competitionUncheckedUpdateWithoutAnnouncementsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    max_team_member?: IntFieldUpdateOperationsInput | number
    guide_book_url?: StringFieldUpdateOperationsInput | string
    submissions?: competition_submissionUncheckedUpdateManyWithoutCompetitionNestedInput
    timelines?: competition_timelineUncheckedUpdateManyWithoutCompetitionNestedInput
    teams?: teamUncheckedUpdateManyWithoutCompetitionNestedInput
  }

  export type userUpsertWithoutAnnouncementsInput = {
    update: XOR<userUpdateWithoutAnnouncementsInput, userUncheckedUpdateWithoutAnnouncementsInput>
    create: XOR<userCreateWithoutAnnouncementsInput, userUncheckedCreateWithoutAnnouncementsInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutAnnouncementsInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutAnnouncementsInput, userUncheckedUpdateWithoutAnnouncementsInput>
  }

  export type userUpdateWithoutAnnouncementsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    full_name?: NullableStringFieldUpdateOperationsInput | string | null
    birth_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pendidikan?: NullableEnumeducation_enumFieldUpdateOperationsInput | $Enums.education_enum | null
    nama_sekolah?: NullableStringFieldUpdateOperationsInput | string | null
    entry_source?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    id_line?: NullableStringFieldUpdateOperationsInput | string | null
    id_discord?: NullableStringFieldUpdateOperationsInput | string | null
    id_instagram?: NullableStringFieldUpdateOperationsInput | string | null
    consent?: BoolFieldUpdateOperationsInput | boolean
    is_registration_complete?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    uploaded?: mediaUpdateManyWithoutUploaderNestedInput
    identity?: user_identityUpdateOneWithoutUserNestedInput
    member?: team_memberUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutAnnouncementsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    full_name?: NullableStringFieldUpdateOperationsInput | string | null
    birth_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pendidikan?: NullableEnumeducation_enumFieldUpdateOperationsInput | $Enums.education_enum | null
    nama_sekolah?: NullableStringFieldUpdateOperationsInput | string | null
    entry_source?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    id_line?: NullableStringFieldUpdateOperationsInput | string | null
    id_discord?: NullableStringFieldUpdateOperationsInput | string | null
    id_instagram?: NullableStringFieldUpdateOperationsInput | string | null
    consent?: BoolFieldUpdateOperationsInput | boolean
    is_registration_complete?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    uploaded?: mediaUncheckedUpdateManyWithoutUploaderNestedInput
    identity?: user_identityUncheckedUpdateOneWithoutUserNestedInput
    member?: team_memberUncheckedUpdateManyWithoutUserNestedInput
  }

  export type teamCreateWithoutSubmissionInput = {
    id: string
    team_name: string
    team_code: string
    is_verified?: boolean
    verification_error?: string | null
    created_at?: Date | string
    updated_at?: Date | string | null
    competition: competitionCreateNestedOneWithoutTeamsInput
    members?: team_memberCreateNestedManyWithoutTeamInput
  }

  export type teamUncheckedCreateWithoutSubmissionInput = {
    id: string
    competition_id: string
    team_name: string
    team_code: string
    is_verified?: boolean
    verification_error?: string | null
    created_at?: Date | string
    updated_at?: Date | string | null
    members?: team_memberUncheckedCreateNestedManyWithoutTeamInput
  }

  export type teamCreateOrConnectWithoutSubmissionInput = {
    where: teamWhereUniqueInput
    create: XOR<teamCreateWithoutSubmissionInput, teamUncheckedCreateWithoutSubmissionInput>
  }

  export type competitionCreateWithoutSubmissionsInput = {
    id: string
    title: string
    description: string
    max_team_member?: number
    guide_book_url: string
    announcements?: competition_announcementCreateNestedManyWithoutCompetitionInput
    timelines?: competition_timelineCreateNestedManyWithoutCompetitionInput
    teams?: teamCreateNestedManyWithoutCompetitionInput
  }

  export type competitionUncheckedCreateWithoutSubmissionsInput = {
    id: string
    title: string
    description: string
    max_team_member?: number
    guide_book_url: string
    announcements?: competition_announcementUncheckedCreateNestedManyWithoutCompetitionInput
    timelines?: competition_timelineUncheckedCreateNestedManyWithoutCompetitionInput
    teams?: teamUncheckedCreateNestedManyWithoutCompetitionInput
  }

  export type competitionCreateOrConnectWithoutSubmissionsInput = {
    where: competitionWhereUniqueInput
    create: XOR<competitionCreateWithoutSubmissionsInput, competitionUncheckedCreateWithoutSubmissionsInput>
  }

  export type mediaCreateWithoutSubmissionInput = {
    id: string
    name: string
    grouping?: $Enums.media_grouping_enum | null
    type: $Enums.media_type_enum
    url: string
    created_at?: Date | string
    uploader: userCreateNestedOneWithoutUploadedInput
    paymentproof?: team_memberCreateNestedOneWithoutPaymentProofInput
    twibbon?: team_memberCreateNestedOneWithoutTwibbonInput
    kartu?: team_memberCreateNestedOneWithoutKartuInput
  }

  export type mediaUncheckedCreateWithoutSubmissionInput = {
    id: string
    uploader_id: string
    name: string
    grouping?: $Enums.media_grouping_enum | null
    type: $Enums.media_type_enum
    url: string
    created_at?: Date | string
    paymentproof?: team_memberUncheckedCreateNestedOneWithoutPaymentProofInput
    twibbon?: team_memberUncheckedCreateNestedOneWithoutTwibbonInput
    kartu?: team_memberUncheckedCreateNestedOneWithoutKartuInput
  }

  export type mediaCreateOrConnectWithoutSubmissionInput = {
    where: mediaWhereUniqueInput
    create: XOR<mediaCreateWithoutSubmissionInput, mediaUncheckedCreateWithoutSubmissionInput>
  }

  export type teamUpsertWithoutSubmissionInput = {
    update: XOR<teamUpdateWithoutSubmissionInput, teamUncheckedUpdateWithoutSubmissionInput>
    create: XOR<teamCreateWithoutSubmissionInput, teamUncheckedCreateWithoutSubmissionInput>
    where?: teamWhereInput
  }

  export type teamUpdateToOneWithWhereWithoutSubmissionInput = {
    where?: teamWhereInput
    data: XOR<teamUpdateWithoutSubmissionInput, teamUncheckedUpdateWithoutSubmissionInput>
  }

  export type teamUpdateWithoutSubmissionInput = {
    id?: StringFieldUpdateOperationsInput | string
    team_name?: StringFieldUpdateOperationsInput | string
    team_code?: StringFieldUpdateOperationsInput | string
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    verification_error?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    competition?: competitionUpdateOneRequiredWithoutTeamsNestedInput
    members?: team_memberUpdateManyWithoutTeamNestedInput
  }

  export type teamUncheckedUpdateWithoutSubmissionInput = {
    id?: StringFieldUpdateOperationsInput | string
    competition_id?: StringFieldUpdateOperationsInput | string
    team_name?: StringFieldUpdateOperationsInput | string
    team_code?: StringFieldUpdateOperationsInput | string
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    verification_error?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    members?: team_memberUncheckedUpdateManyWithoutTeamNestedInput
  }

  export type competitionUpsertWithoutSubmissionsInput = {
    update: XOR<competitionUpdateWithoutSubmissionsInput, competitionUncheckedUpdateWithoutSubmissionsInput>
    create: XOR<competitionCreateWithoutSubmissionsInput, competitionUncheckedCreateWithoutSubmissionsInput>
    where?: competitionWhereInput
  }

  export type competitionUpdateToOneWithWhereWithoutSubmissionsInput = {
    where?: competitionWhereInput
    data: XOR<competitionUpdateWithoutSubmissionsInput, competitionUncheckedUpdateWithoutSubmissionsInput>
  }

  export type competitionUpdateWithoutSubmissionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    max_team_member?: IntFieldUpdateOperationsInput | number
    guide_book_url?: StringFieldUpdateOperationsInput | string
    announcements?: competition_announcementUpdateManyWithoutCompetitionNestedInput
    timelines?: competition_timelineUpdateManyWithoutCompetitionNestedInput
    teams?: teamUpdateManyWithoutCompetitionNestedInput
  }

  export type competitionUncheckedUpdateWithoutSubmissionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    max_team_member?: IntFieldUpdateOperationsInput | number
    guide_book_url?: StringFieldUpdateOperationsInput | string
    announcements?: competition_announcementUncheckedUpdateManyWithoutCompetitionNestedInput
    timelines?: competition_timelineUncheckedUpdateManyWithoutCompetitionNestedInput
    teams?: teamUncheckedUpdateManyWithoutCompetitionNestedInput
  }

  export type mediaUpsertWithoutSubmissionInput = {
    update: XOR<mediaUpdateWithoutSubmissionInput, mediaUncheckedUpdateWithoutSubmissionInput>
    create: XOR<mediaCreateWithoutSubmissionInput, mediaUncheckedCreateWithoutSubmissionInput>
    where?: mediaWhereInput
  }

  export type mediaUpdateToOneWithWhereWithoutSubmissionInput = {
    where?: mediaWhereInput
    data: XOR<mediaUpdateWithoutSubmissionInput, mediaUncheckedUpdateWithoutSubmissionInput>
  }

  export type mediaUpdateWithoutSubmissionInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    grouping?: NullableEnummedia_grouping_enumFieldUpdateOperationsInput | $Enums.media_grouping_enum | null
    type?: Enummedia_type_enumFieldUpdateOperationsInput | $Enums.media_type_enum
    url?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    uploader?: userUpdateOneRequiredWithoutUploadedNestedInput
    paymentproof?: team_memberUpdateOneWithoutPaymentProofNestedInput
    twibbon?: team_memberUpdateOneWithoutTwibbonNestedInput
    kartu?: team_memberUpdateOneWithoutKartuNestedInput
  }

  export type mediaUncheckedUpdateWithoutSubmissionInput = {
    id?: StringFieldUpdateOperationsInput | string
    uploader_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    grouping?: NullableEnummedia_grouping_enumFieldUpdateOperationsInput | $Enums.media_grouping_enum | null
    type?: Enummedia_type_enumFieldUpdateOperationsInput | $Enums.media_type_enum
    url?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentproof?: team_memberUncheckedUpdateOneWithoutPaymentProofNestedInput
    twibbon?: team_memberUncheckedUpdateOneWithoutTwibbonNestedInput
    kartu?: team_memberUncheckedUpdateOneWithoutKartuNestedInput
  }

  export type competitionCreateWithoutTimelinesInput = {
    id: string
    title: string
    description: string
    max_team_member?: number
    guide_book_url: string
    announcements?: competition_announcementCreateNestedManyWithoutCompetitionInput
    submissions?: competition_submissionCreateNestedManyWithoutCompetitionInput
    teams?: teamCreateNestedManyWithoutCompetitionInput
  }

  export type competitionUncheckedCreateWithoutTimelinesInput = {
    id: string
    title: string
    description: string
    max_team_member?: number
    guide_book_url: string
    announcements?: competition_announcementUncheckedCreateNestedManyWithoutCompetitionInput
    submissions?: competition_submissionUncheckedCreateNestedManyWithoutCompetitionInput
    teams?: teamUncheckedCreateNestedManyWithoutCompetitionInput
  }

  export type competitionCreateOrConnectWithoutTimelinesInput = {
    where: competitionWhereUniqueInput
    create: XOR<competitionCreateWithoutTimelinesInput, competitionUncheckedCreateWithoutTimelinesInput>
  }

  export type competitionUpsertWithoutTimelinesInput = {
    update: XOR<competitionUpdateWithoutTimelinesInput, competitionUncheckedUpdateWithoutTimelinesInput>
    create: XOR<competitionCreateWithoutTimelinesInput, competitionUncheckedCreateWithoutTimelinesInput>
    where?: competitionWhereInput
  }

  export type competitionUpdateToOneWithWhereWithoutTimelinesInput = {
    where?: competitionWhereInput
    data: XOR<competitionUpdateWithoutTimelinesInput, competitionUncheckedUpdateWithoutTimelinesInput>
  }

  export type competitionUpdateWithoutTimelinesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    max_team_member?: IntFieldUpdateOperationsInput | number
    guide_book_url?: StringFieldUpdateOperationsInput | string
    announcements?: competition_announcementUpdateManyWithoutCompetitionNestedInput
    submissions?: competition_submissionUpdateManyWithoutCompetitionNestedInput
    teams?: teamUpdateManyWithoutCompetitionNestedInput
  }

  export type competitionUncheckedUpdateWithoutTimelinesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    max_team_member?: IntFieldUpdateOperationsInput | number
    guide_book_url?: StringFieldUpdateOperationsInput | string
    announcements?: competition_announcementUncheckedUpdateManyWithoutCompetitionNestedInput
    submissions?: competition_submissionUncheckedUpdateManyWithoutCompetitionNestedInput
    teams?: teamUncheckedUpdateManyWithoutCompetitionNestedInput
  }

  export type userCreateWithoutUploadedInput = {
    id: string
    email: string
    full_name?: string | null
    birth_date?: Date | string | null
    pendidikan?: $Enums.education_enum | null
    nama_sekolah?: string | null
    entry_source?: string | null
    phone_number?: string | null
    id_line?: string | null
    id_discord?: string | null
    id_instagram?: string | null
    consent?: boolean
    is_registration_complete?: boolean
    created_at?: Date | string
    updated_at?: Date | string | null
    identity?: user_identityCreateNestedOneWithoutUserInput
    announcements?: competition_announcementCreateNestedManyWithoutAuthorInput
    member?: team_memberCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateWithoutUploadedInput = {
    id: string
    email: string
    full_name?: string | null
    birth_date?: Date | string | null
    pendidikan?: $Enums.education_enum | null
    nama_sekolah?: string | null
    entry_source?: string | null
    phone_number?: string | null
    id_line?: string | null
    id_discord?: string | null
    id_instagram?: string | null
    consent?: boolean
    is_registration_complete?: boolean
    created_at?: Date | string
    updated_at?: Date | string | null
    identity?: user_identityUncheckedCreateNestedOneWithoutUserInput
    announcements?: competition_announcementUncheckedCreateNestedManyWithoutAuthorInput
    member?: team_memberUncheckedCreateNestedManyWithoutUserInput
  }

  export type userCreateOrConnectWithoutUploadedInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutUploadedInput, userUncheckedCreateWithoutUploadedInput>
  }

  export type team_memberCreateWithoutPaymentProofInput = {
    role: $Enums.team_member_role_enum
    is_verified?: boolean
    verification_error?: string | null
    user: userCreateNestedOneWithoutMemberInput
    team: teamCreateNestedOneWithoutMembersInput
    twibbon?: mediaCreateNestedOneWithoutTwibbonInput
    kartu?: mediaCreateNestedOneWithoutKartuInput
  }

  export type team_memberUncheckedCreateWithoutPaymentProofInput = {
    user_id: string
    team_id: string
    role: $Enums.team_member_role_enum
    kartu_media_id?: string | null
    twibbon_media_id?: string | null
    is_verified?: boolean
    verification_error?: string | null
  }

  export type team_memberCreateOrConnectWithoutPaymentProofInput = {
    where: team_memberWhereUniqueInput
    create: XOR<team_memberCreateWithoutPaymentProofInput, team_memberUncheckedCreateWithoutPaymentProofInput>
  }

  export type team_memberCreateWithoutTwibbonInput = {
    role: $Enums.team_member_role_enum
    is_verified?: boolean
    verification_error?: string | null
    paymentProof?: mediaCreateNestedOneWithoutPaymentproofInput
    user: userCreateNestedOneWithoutMemberInput
    team: teamCreateNestedOneWithoutMembersInput
    kartu?: mediaCreateNestedOneWithoutKartuInput
  }

  export type team_memberUncheckedCreateWithoutTwibbonInput = {
    user_id: string
    team_id: string
    role: $Enums.team_member_role_enum
    kartu_media_id?: string | null
    payment_proof_media_id?: string | null
    is_verified?: boolean
    verification_error?: string | null
  }

  export type team_memberCreateOrConnectWithoutTwibbonInput = {
    where: team_memberWhereUniqueInput
    create: XOR<team_memberCreateWithoutTwibbonInput, team_memberUncheckedCreateWithoutTwibbonInput>
  }

  export type team_memberCreateWithoutKartuInput = {
    role: $Enums.team_member_role_enum
    is_verified?: boolean
    verification_error?: string | null
    paymentProof?: mediaCreateNestedOneWithoutPaymentproofInput
    user: userCreateNestedOneWithoutMemberInput
    team: teamCreateNestedOneWithoutMembersInput
    twibbon?: mediaCreateNestedOneWithoutTwibbonInput
  }

  export type team_memberUncheckedCreateWithoutKartuInput = {
    user_id: string
    team_id: string
    role: $Enums.team_member_role_enum
    twibbon_media_id?: string | null
    payment_proof_media_id?: string | null
    is_verified?: boolean
    verification_error?: string | null
  }

  export type team_memberCreateOrConnectWithoutKartuInput = {
    where: team_memberWhereUniqueInput
    create: XOR<team_memberCreateWithoutKartuInput, team_memberUncheckedCreateWithoutKartuInput>
  }

  export type competition_submissionCreateWithoutMediaInput = {
    created_at?: Date | string
    updated_at?: Date | string | null
    team: teamCreateNestedOneWithoutSubmissionInput
    competition: competitionCreateNestedOneWithoutSubmissionsInput
  }

  export type competition_submissionUncheckedCreateWithoutMediaInput = {
    team_id: string
    competition_id: string
    created_at?: Date | string
    updated_at?: Date | string | null
  }

  export type competition_submissionCreateOrConnectWithoutMediaInput = {
    where: competition_submissionWhereUniqueInput
    create: XOR<competition_submissionCreateWithoutMediaInput, competition_submissionUncheckedCreateWithoutMediaInput>
  }

  export type userUpsertWithoutUploadedInput = {
    update: XOR<userUpdateWithoutUploadedInput, userUncheckedUpdateWithoutUploadedInput>
    create: XOR<userCreateWithoutUploadedInput, userUncheckedCreateWithoutUploadedInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutUploadedInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutUploadedInput, userUncheckedUpdateWithoutUploadedInput>
  }

  export type userUpdateWithoutUploadedInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    full_name?: NullableStringFieldUpdateOperationsInput | string | null
    birth_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pendidikan?: NullableEnumeducation_enumFieldUpdateOperationsInput | $Enums.education_enum | null
    nama_sekolah?: NullableStringFieldUpdateOperationsInput | string | null
    entry_source?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    id_line?: NullableStringFieldUpdateOperationsInput | string | null
    id_discord?: NullableStringFieldUpdateOperationsInput | string | null
    id_instagram?: NullableStringFieldUpdateOperationsInput | string | null
    consent?: BoolFieldUpdateOperationsInput | boolean
    is_registration_complete?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    identity?: user_identityUpdateOneWithoutUserNestedInput
    announcements?: competition_announcementUpdateManyWithoutAuthorNestedInput
    member?: team_memberUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutUploadedInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    full_name?: NullableStringFieldUpdateOperationsInput | string | null
    birth_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pendidikan?: NullableEnumeducation_enumFieldUpdateOperationsInput | $Enums.education_enum | null
    nama_sekolah?: NullableStringFieldUpdateOperationsInput | string | null
    entry_source?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    id_line?: NullableStringFieldUpdateOperationsInput | string | null
    id_discord?: NullableStringFieldUpdateOperationsInput | string | null
    id_instagram?: NullableStringFieldUpdateOperationsInput | string | null
    consent?: BoolFieldUpdateOperationsInput | boolean
    is_registration_complete?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    identity?: user_identityUncheckedUpdateOneWithoutUserNestedInput
    announcements?: competition_announcementUncheckedUpdateManyWithoutAuthorNestedInput
    member?: team_memberUncheckedUpdateManyWithoutUserNestedInput
  }

  export type team_memberUpsertWithoutPaymentProofInput = {
    update: XOR<team_memberUpdateWithoutPaymentProofInput, team_memberUncheckedUpdateWithoutPaymentProofInput>
    create: XOR<team_memberCreateWithoutPaymentProofInput, team_memberUncheckedCreateWithoutPaymentProofInput>
    where?: team_memberWhereInput
  }

  export type team_memberUpdateToOneWithWhereWithoutPaymentProofInput = {
    where?: team_memberWhereInput
    data: XOR<team_memberUpdateWithoutPaymentProofInput, team_memberUncheckedUpdateWithoutPaymentProofInput>
  }

  export type team_memberUpdateWithoutPaymentProofInput = {
    role?: Enumteam_member_role_enumFieldUpdateOperationsInput | $Enums.team_member_role_enum
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    verification_error?: NullableStringFieldUpdateOperationsInput | string | null
    user?: userUpdateOneRequiredWithoutMemberNestedInput
    team?: teamUpdateOneRequiredWithoutMembersNestedInput
    twibbon?: mediaUpdateOneWithoutTwibbonNestedInput
    kartu?: mediaUpdateOneWithoutKartuNestedInput
  }

  export type team_memberUncheckedUpdateWithoutPaymentProofInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    team_id?: StringFieldUpdateOperationsInput | string
    role?: Enumteam_member_role_enumFieldUpdateOperationsInput | $Enums.team_member_role_enum
    kartu_media_id?: NullableStringFieldUpdateOperationsInput | string | null
    twibbon_media_id?: NullableStringFieldUpdateOperationsInput | string | null
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    verification_error?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type team_memberUpsertWithoutTwibbonInput = {
    update: XOR<team_memberUpdateWithoutTwibbonInput, team_memberUncheckedUpdateWithoutTwibbonInput>
    create: XOR<team_memberCreateWithoutTwibbonInput, team_memberUncheckedCreateWithoutTwibbonInput>
    where?: team_memberWhereInput
  }

  export type team_memberUpdateToOneWithWhereWithoutTwibbonInput = {
    where?: team_memberWhereInput
    data: XOR<team_memberUpdateWithoutTwibbonInput, team_memberUncheckedUpdateWithoutTwibbonInput>
  }

  export type team_memberUpdateWithoutTwibbonInput = {
    role?: Enumteam_member_role_enumFieldUpdateOperationsInput | $Enums.team_member_role_enum
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    verification_error?: NullableStringFieldUpdateOperationsInput | string | null
    paymentProof?: mediaUpdateOneWithoutPaymentproofNestedInput
    user?: userUpdateOneRequiredWithoutMemberNestedInput
    team?: teamUpdateOneRequiredWithoutMembersNestedInput
    kartu?: mediaUpdateOneWithoutKartuNestedInput
  }

  export type team_memberUncheckedUpdateWithoutTwibbonInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    team_id?: StringFieldUpdateOperationsInput | string
    role?: Enumteam_member_role_enumFieldUpdateOperationsInput | $Enums.team_member_role_enum
    kartu_media_id?: NullableStringFieldUpdateOperationsInput | string | null
    payment_proof_media_id?: NullableStringFieldUpdateOperationsInput | string | null
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    verification_error?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type team_memberUpsertWithoutKartuInput = {
    update: XOR<team_memberUpdateWithoutKartuInput, team_memberUncheckedUpdateWithoutKartuInput>
    create: XOR<team_memberCreateWithoutKartuInput, team_memberUncheckedCreateWithoutKartuInput>
    where?: team_memberWhereInput
  }

  export type team_memberUpdateToOneWithWhereWithoutKartuInput = {
    where?: team_memberWhereInput
    data: XOR<team_memberUpdateWithoutKartuInput, team_memberUncheckedUpdateWithoutKartuInput>
  }

  export type team_memberUpdateWithoutKartuInput = {
    role?: Enumteam_member_role_enumFieldUpdateOperationsInput | $Enums.team_member_role_enum
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    verification_error?: NullableStringFieldUpdateOperationsInput | string | null
    paymentProof?: mediaUpdateOneWithoutPaymentproofNestedInput
    user?: userUpdateOneRequiredWithoutMemberNestedInput
    team?: teamUpdateOneRequiredWithoutMembersNestedInput
    twibbon?: mediaUpdateOneWithoutTwibbonNestedInput
  }

  export type team_memberUncheckedUpdateWithoutKartuInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    team_id?: StringFieldUpdateOperationsInput | string
    role?: Enumteam_member_role_enumFieldUpdateOperationsInput | $Enums.team_member_role_enum
    twibbon_media_id?: NullableStringFieldUpdateOperationsInput | string | null
    payment_proof_media_id?: NullableStringFieldUpdateOperationsInput | string | null
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    verification_error?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type competition_submissionUpsertWithoutMediaInput = {
    update: XOR<competition_submissionUpdateWithoutMediaInput, competition_submissionUncheckedUpdateWithoutMediaInput>
    create: XOR<competition_submissionCreateWithoutMediaInput, competition_submissionUncheckedCreateWithoutMediaInput>
    where?: competition_submissionWhereInput
  }

  export type competition_submissionUpdateToOneWithWhereWithoutMediaInput = {
    where?: competition_submissionWhereInput
    data: XOR<competition_submissionUpdateWithoutMediaInput, competition_submissionUncheckedUpdateWithoutMediaInput>
  }

  export type competition_submissionUpdateWithoutMediaInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    team?: teamUpdateOneRequiredWithoutSubmissionNestedInput
    competition?: competitionUpdateOneRequiredWithoutSubmissionsNestedInput
  }

  export type competition_submissionUncheckedUpdateWithoutMediaInput = {
    team_id?: StringFieldUpdateOperationsInput | string
    competition_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type competitionCreateWithoutTeamsInput = {
    id: string
    title: string
    description: string
    max_team_member?: number
    guide_book_url: string
    announcements?: competition_announcementCreateNestedManyWithoutCompetitionInput
    submissions?: competition_submissionCreateNestedManyWithoutCompetitionInput
    timelines?: competition_timelineCreateNestedManyWithoutCompetitionInput
  }

  export type competitionUncheckedCreateWithoutTeamsInput = {
    id: string
    title: string
    description: string
    max_team_member?: number
    guide_book_url: string
    announcements?: competition_announcementUncheckedCreateNestedManyWithoutCompetitionInput
    submissions?: competition_submissionUncheckedCreateNestedManyWithoutCompetitionInput
    timelines?: competition_timelineUncheckedCreateNestedManyWithoutCompetitionInput
  }

  export type competitionCreateOrConnectWithoutTeamsInput = {
    where: competitionWhereUniqueInput
    create: XOR<competitionCreateWithoutTeamsInput, competitionUncheckedCreateWithoutTeamsInput>
  }

  export type team_memberCreateWithoutTeamInput = {
    role: $Enums.team_member_role_enum
    is_verified?: boolean
    verification_error?: string | null
    paymentProof?: mediaCreateNestedOneWithoutPaymentproofInput
    user: userCreateNestedOneWithoutMemberInput
    twibbon?: mediaCreateNestedOneWithoutTwibbonInput
    kartu?: mediaCreateNestedOneWithoutKartuInput
  }

  export type team_memberUncheckedCreateWithoutTeamInput = {
    user_id: string
    role: $Enums.team_member_role_enum
    kartu_media_id?: string | null
    twibbon_media_id?: string | null
    payment_proof_media_id?: string | null
    is_verified?: boolean
    verification_error?: string | null
  }

  export type team_memberCreateOrConnectWithoutTeamInput = {
    where: team_memberWhereUniqueInput
    create: XOR<team_memberCreateWithoutTeamInput, team_memberUncheckedCreateWithoutTeamInput>
  }

  export type team_memberCreateManyTeamInputEnvelope = {
    data: team_memberCreateManyTeamInput | team_memberCreateManyTeamInput[]
    skipDuplicates?: boolean
  }

  export type competition_submissionCreateWithoutTeamInput = {
    created_at?: Date | string
    updated_at?: Date | string | null
    competition: competitionCreateNestedOneWithoutSubmissionsInput
    media: mediaCreateNestedOneWithoutSubmissionInput
  }

  export type competition_submissionUncheckedCreateWithoutTeamInput = {
    competition_id: string
    media_id: string
    created_at?: Date | string
    updated_at?: Date | string | null
  }

  export type competition_submissionCreateOrConnectWithoutTeamInput = {
    where: competition_submissionWhereUniqueInput
    create: XOR<competition_submissionCreateWithoutTeamInput, competition_submissionUncheckedCreateWithoutTeamInput>
  }

  export type competition_submissionCreateManyTeamInputEnvelope = {
    data: competition_submissionCreateManyTeamInput | competition_submissionCreateManyTeamInput[]
    skipDuplicates?: boolean
  }

  export type competitionUpsertWithoutTeamsInput = {
    update: XOR<competitionUpdateWithoutTeamsInput, competitionUncheckedUpdateWithoutTeamsInput>
    create: XOR<competitionCreateWithoutTeamsInput, competitionUncheckedCreateWithoutTeamsInput>
    where?: competitionWhereInput
  }

  export type competitionUpdateToOneWithWhereWithoutTeamsInput = {
    where?: competitionWhereInput
    data: XOR<competitionUpdateWithoutTeamsInput, competitionUncheckedUpdateWithoutTeamsInput>
  }

  export type competitionUpdateWithoutTeamsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    max_team_member?: IntFieldUpdateOperationsInput | number
    guide_book_url?: StringFieldUpdateOperationsInput | string
    announcements?: competition_announcementUpdateManyWithoutCompetitionNestedInput
    submissions?: competition_submissionUpdateManyWithoutCompetitionNestedInput
    timelines?: competition_timelineUpdateManyWithoutCompetitionNestedInput
  }

  export type competitionUncheckedUpdateWithoutTeamsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    max_team_member?: IntFieldUpdateOperationsInput | number
    guide_book_url?: StringFieldUpdateOperationsInput | string
    announcements?: competition_announcementUncheckedUpdateManyWithoutCompetitionNestedInput
    submissions?: competition_submissionUncheckedUpdateManyWithoutCompetitionNestedInput
    timelines?: competition_timelineUncheckedUpdateManyWithoutCompetitionNestedInput
  }

  export type team_memberUpsertWithWhereUniqueWithoutTeamInput = {
    where: team_memberWhereUniqueInput
    update: XOR<team_memberUpdateWithoutTeamInput, team_memberUncheckedUpdateWithoutTeamInput>
    create: XOR<team_memberCreateWithoutTeamInput, team_memberUncheckedCreateWithoutTeamInput>
  }

  export type team_memberUpdateWithWhereUniqueWithoutTeamInput = {
    where: team_memberWhereUniqueInput
    data: XOR<team_memberUpdateWithoutTeamInput, team_memberUncheckedUpdateWithoutTeamInput>
  }

  export type team_memberUpdateManyWithWhereWithoutTeamInput = {
    where: team_memberScalarWhereInput
    data: XOR<team_memberUpdateManyMutationInput, team_memberUncheckedUpdateManyWithoutTeamInput>
  }

  export type team_memberScalarWhereInput = {
    AND?: team_memberScalarWhereInput | team_memberScalarWhereInput[]
    OR?: team_memberScalarWhereInput[]
    NOT?: team_memberScalarWhereInput | team_memberScalarWhereInput[]
    user_id?: StringFilter<"team_member"> | string
    team_id?: StringFilter<"team_member"> | string
    role?: Enumteam_member_role_enumFilter<"team_member"> | $Enums.team_member_role_enum
    kartu_media_id?: StringNullableFilter<"team_member"> | string | null
    twibbon_media_id?: StringNullableFilter<"team_member"> | string | null
    payment_proof_media_id?: StringNullableFilter<"team_member"> | string | null
    is_verified?: BoolFilter<"team_member"> | boolean
    verification_error?: StringNullableFilter<"team_member"> | string | null
  }

  export type competition_submissionUpsertWithWhereUniqueWithoutTeamInput = {
    where: competition_submissionWhereUniqueInput
    update: XOR<competition_submissionUpdateWithoutTeamInput, competition_submissionUncheckedUpdateWithoutTeamInput>
    create: XOR<competition_submissionCreateWithoutTeamInput, competition_submissionUncheckedCreateWithoutTeamInput>
  }

  export type competition_submissionUpdateWithWhereUniqueWithoutTeamInput = {
    where: competition_submissionWhereUniqueInput
    data: XOR<competition_submissionUpdateWithoutTeamInput, competition_submissionUncheckedUpdateWithoutTeamInput>
  }

  export type competition_submissionUpdateManyWithWhereWithoutTeamInput = {
    where: competition_submissionScalarWhereInput
    data: XOR<competition_submissionUpdateManyMutationInput, competition_submissionUncheckedUpdateManyWithoutTeamInput>
  }

  export type mediaCreateWithoutPaymentproofInput = {
    id: string
    name: string
    grouping?: $Enums.media_grouping_enum | null
    type: $Enums.media_type_enum
    url: string
    created_at?: Date | string
    uploader: userCreateNestedOneWithoutUploadedInput
    twibbon?: team_memberCreateNestedOneWithoutTwibbonInput
    kartu?: team_memberCreateNestedOneWithoutKartuInput
    submission?: competition_submissionCreateNestedOneWithoutMediaInput
  }

  export type mediaUncheckedCreateWithoutPaymentproofInput = {
    id: string
    uploader_id: string
    name: string
    grouping?: $Enums.media_grouping_enum | null
    type: $Enums.media_type_enum
    url: string
    created_at?: Date | string
    twibbon?: team_memberUncheckedCreateNestedOneWithoutTwibbonInput
    kartu?: team_memberUncheckedCreateNestedOneWithoutKartuInput
    submission?: competition_submissionUncheckedCreateNestedOneWithoutMediaInput
  }

  export type mediaCreateOrConnectWithoutPaymentproofInput = {
    where: mediaWhereUniqueInput
    create: XOR<mediaCreateWithoutPaymentproofInput, mediaUncheckedCreateWithoutPaymentproofInput>
  }

  export type userCreateWithoutMemberInput = {
    id: string
    email: string
    full_name?: string | null
    birth_date?: Date | string | null
    pendidikan?: $Enums.education_enum | null
    nama_sekolah?: string | null
    entry_source?: string | null
    phone_number?: string | null
    id_line?: string | null
    id_discord?: string | null
    id_instagram?: string | null
    consent?: boolean
    is_registration_complete?: boolean
    created_at?: Date | string
    updated_at?: Date | string | null
    uploaded?: mediaCreateNestedManyWithoutUploaderInput
    identity?: user_identityCreateNestedOneWithoutUserInput
    announcements?: competition_announcementCreateNestedManyWithoutAuthorInput
  }

  export type userUncheckedCreateWithoutMemberInput = {
    id: string
    email: string
    full_name?: string | null
    birth_date?: Date | string | null
    pendidikan?: $Enums.education_enum | null
    nama_sekolah?: string | null
    entry_source?: string | null
    phone_number?: string | null
    id_line?: string | null
    id_discord?: string | null
    id_instagram?: string | null
    consent?: boolean
    is_registration_complete?: boolean
    created_at?: Date | string
    updated_at?: Date | string | null
    uploaded?: mediaUncheckedCreateNestedManyWithoutUploaderInput
    identity?: user_identityUncheckedCreateNestedOneWithoutUserInput
    announcements?: competition_announcementUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type userCreateOrConnectWithoutMemberInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutMemberInput, userUncheckedCreateWithoutMemberInput>
  }

  export type teamCreateWithoutMembersInput = {
    id: string
    team_name: string
    team_code: string
    is_verified?: boolean
    verification_error?: string | null
    created_at?: Date | string
    updated_at?: Date | string | null
    competition: competitionCreateNestedOneWithoutTeamsInput
    submission?: competition_submissionCreateNestedManyWithoutTeamInput
  }

  export type teamUncheckedCreateWithoutMembersInput = {
    id: string
    competition_id: string
    team_name: string
    team_code: string
    is_verified?: boolean
    verification_error?: string | null
    created_at?: Date | string
    updated_at?: Date | string | null
    submission?: competition_submissionUncheckedCreateNestedManyWithoutTeamInput
  }

  export type teamCreateOrConnectWithoutMembersInput = {
    where: teamWhereUniqueInput
    create: XOR<teamCreateWithoutMembersInput, teamUncheckedCreateWithoutMembersInput>
  }

  export type mediaCreateWithoutTwibbonInput = {
    id: string
    name: string
    grouping?: $Enums.media_grouping_enum | null
    type: $Enums.media_type_enum
    url: string
    created_at?: Date | string
    uploader: userCreateNestedOneWithoutUploadedInput
    paymentproof?: team_memberCreateNestedOneWithoutPaymentProofInput
    kartu?: team_memberCreateNestedOneWithoutKartuInput
    submission?: competition_submissionCreateNestedOneWithoutMediaInput
  }

  export type mediaUncheckedCreateWithoutTwibbonInput = {
    id: string
    uploader_id: string
    name: string
    grouping?: $Enums.media_grouping_enum | null
    type: $Enums.media_type_enum
    url: string
    created_at?: Date | string
    paymentproof?: team_memberUncheckedCreateNestedOneWithoutPaymentProofInput
    kartu?: team_memberUncheckedCreateNestedOneWithoutKartuInput
    submission?: competition_submissionUncheckedCreateNestedOneWithoutMediaInput
  }

  export type mediaCreateOrConnectWithoutTwibbonInput = {
    where: mediaWhereUniqueInput
    create: XOR<mediaCreateWithoutTwibbonInput, mediaUncheckedCreateWithoutTwibbonInput>
  }

  export type mediaCreateWithoutKartuInput = {
    id: string
    name: string
    grouping?: $Enums.media_grouping_enum | null
    type: $Enums.media_type_enum
    url: string
    created_at?: Date | string
    uploader: userCreateNestedOneWithoutUploadedInput
    paymentproof?: team_memberCreateNestedOneWithoutPaymentProofInput
    twibbon?: team_memberCreateNestedOneWithoutTwibbonInput
    submission?: competition_submissionCreateNestedOneWithoutMediaInput
  }

  export type mediaUncheckedCreateWithoutKartuInput = {
    id: string
    uploader_id: string
    name: string
    grouping?: $Enums.media_grouping_enum | null
    type: $Enums.media_type_enum
    url: string
    created_at?: Date | string
    paymentproof?: team_memberUncheckedCreateNestedOneWithoutPaymentProofInput
    twibbon?: team_memberUncheckedCreateNestedOneWithoutTwibbonInput
    submission?: competition_submissionUncheckedCreateNestedOneWithoutMediaInput
  }

  export type mediaCreateOrConnectWithoutKartuInput = {
    where: mediaWhereUniqueInput
    create: XOR<mediaCreateWithoutKartuInput, mediaUncheckedCreateWithoutKartuInput>
  }

  export type mediaUpsertWithoutPaymentproofInput = {
    update: XOR<mediaUpdateWithoutPaymentproofInput, mediaUncheckedUpdateWithoutPaymentproofInput>
    create: XOR<mediaCreateWithoutPaymentproofInput, mediaUncheckedCreateWithoutPaymentproofInput>
    where?: mediaWhereInput
  }

  export type mediaUpdateToOneWithWhereWithoutPaymentproofInput = {
    where?: mediaWhereInput
    data: XOR<mediaUpdateWithoutPaymentproofInput, mediaUncheckedUpdateWithoutPaymentproofInput>
  }

  export type mediaUpdateWithoutPaymentproofInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    grouping?: NullableEnummedia_grouping_enumFieldUpdateOperationsInput | $Enums.media_grouping_enum | null
    type?: Enummedia_type_enumFieldUpdateOperationsInput | $Enums.media_type_enum
    url?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    uploader?: userUpdateOneRequiredWithoutUploadedNestedInput
    twibbon?: team_memberUpdateOneWithoutTwibbonNestedInput
    kartu?: team_memberUpdateOneWithoutKartuNestedInput
    submission?: competition_submissionUpdateOneWithoutMediaNestedInput
  }

  export type mediaUncheckedUpdateWithoutPaymentproofInput = {
    id?: StringFieldUpdateOperationsInput | string
    uploader_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    grouping?: NullableEnummedia_grouping_enumFieldUpdateOperationsInput | $Enums.media_grouping_enum | null
    type?: Enummedia_type_enumFieldUpdateOperationsInput | $Enums.media_type_enum
    url?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    twibbon?: team_memberUncheckedUpdateOneWithoutTwibbonNestedInput
    kartu?: team_memberUncheckedUpdateOneWithoutKartuNestedInput
    submission?: competition_submissionUncheckedUpdateOneWithoutMediaNestedInput
  }

  export type userUpsertWithoutMemberInput = {
    update: XOR<userUpdateWithoutMemberInput, userUncheckedUpdateWithoutMemberInput>
    create: XOR<userCreateWithoutMemberInput, userUncheckedCreateWithoutMemberInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutMemberInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutMemberInput, userUncheckedUpdateWithoutMemberInput>
  }

  export type userUpdateWithoutMemberInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    full_name?: NullableStringFieldUpdateOperationsInput | string | null
    birth_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pendidikan?: NullableEnumeducation_enumFieldUpdateOperationsInput | $Enums.education_enum | null
    nama_sekolah?: NullableStringFieldUpdateOperationsInput | string | null
    entry_source?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    id_line?: NullableStringFieldUpdateOperationsInput | string | null
    id_discord?: NullableStringFieldUpdateOperationsInput | string | null
    id_instagram?: NullableStringFieldUpdateOperationsInput | string | null
    consent?: BoolFieldUpdateOperationsInput | boolean
    is_registration_complete?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    uploaded?: mediaUpdateManyWithoutUploaderNestedInput
    identity?: user_identityUpdateOneWithoutUserNestedInput
    announcements?: competition_announcementUpdateManyWithoutAuthorNestedInput
  }

  export type userUncheckedUpdateWithoutMemberInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    full_name?: NullableStringFieldUpdateOperationsInput | string | null
    birth_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pendidikan?: NullableEnumeducation_enumFieldUpdateOperationsInput | $Enums.education_enum | null
    nama_sekolah?: NullableStringFieldUpdateOperationsInput | string | null
    entry_source?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    id_line?: NullableStringFieldUpdateOperationsInput | string | null
    id_discord?: NullableStringFieldUpdateOperationsInput | string | null
    id_instagram?: NullableStringFieldUpdateOperationsInput | string | null
    consent?: BoolFieldUpdateOperationsInput | boolean
    is_registration_complete?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    uploaded?: mediaUncheckedUpdateManyWithoutUploaderNestedInput
    identity?: user_identityUncheckedUpdateOneWithoutUserNestedInput
    announcements?: competition_announcementUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type teamUpsertWithoutMembersInput = {
    update: XOR<teamUpdateWithoutMembersInput, teamUncheckedUpdateWithoutMembersInput>
    create: XOR<teamCreateWithoutMembersInput, teamUncheckedCreateWithoutMembersInput>
    where?: teamWhereInput
  }

  export type teamUpdateToOneWithWhereWithoutMembersInput = {
    where?: teamWhereInput
    data: XOR<teamUpdateWithoutMembersInput, teamUncheckedUpdateWithoutMembersInput>
  }

  export type teamUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    team_name?: StringFieldUpdateOperationsInput | string
    team_code?: StringFieldUpdateOperationsInput | string
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    verification_error?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    competition?: competitionUpdateOneRequiredWithoutTeamsNestedInput
    submission?: competition_submissionUpdateManyWithoutTeamNestedInput
  }

  export type teamUncheckedUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    competition_id?: StringFieldUpdateOperationsInput | string
    team_name?: StringFieldUpdateOperationsInput | string
    team_code?: StringFieldUpdateOperationsInput | string
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    verification_error?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    submission?: competition_submissionUncheckedUpdateManyWithoutTeamNestedInput
  }

  export type mediaUpsertWithoutTwibbonInput = {
    update: XOR<mediaUpdateWithoutTwibbonInput, mediaUncheckedUpdateWithoutTwibbonInput>
    create: XOR<mediaCreateWithoutTwibbonInput, mediaUncheckedCreateWithoutTwibbonInput>
    where?: mediaWhereInput
  }

  export type mediaUpdateToOneWithWhereWithoutTwibbonInput = {
    where?: mediaWhereInput
    data: XOR<mediaUpdateWithoutTwibbonInput, mediaUncheckedUpdateWithoutTwibbonInput>
  }

  export type mediaUpdateWithoutTwibbonInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    grouping?: NullableEnummedia_grouping_enumFieldUpdateOperationsInput | $Enums.media_grouping_enum | null
    type?: Enummedia_type_enumFieldUpdateOperationsInput | $Enums.media_type_enum
    url?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    uploader?: userUpdateOneRequiredWithoutUploadedNestedInput
    paymentproof?: team_memberUpdateOneWithoutPaymentProofNestedInput
    kartu?: team_memberUpdateOneWithoutKartuNestedInput
    submission?: competition_submissionUpdateOneWithoutMediaNestedInput
  }

  export type mediaUncheckedUpdateWithoutTwibbonInput = {
    id?: StringFieldUpdateOperationsInput | string
    uploader_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    grouping?: NullableEnummedia_grouping_enumFieldUpdateOperationsInput | $Enums.media_grouping_enum | null
    type?: Enummedia_type_enumFieldUpdateOperationsInput | $Enums.media_type_enum
    url?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentproof?: team_memberUncheckedUpdateOneWithoutPaymentProofNestedInput
    kartu?: team_memberUncheckedUpdateOneWithoutKartuNestedInput
    submission?: competition_submissionUncheckedUpdateOneWithoutMediaNestedInput
  }

  export type mediaUpsertWithoutKartuInput = {
    update: XOR<mediaUpdateWithoutKartuInput, mediaUncheckedUpdateWithoutKartuInput>
    create: XOR<mediaCreateWithoutKartuInput, mediaUncheckedCreateWithoutKartuInput>
    where?: mediaWhereInput
  }

  export type mediaUpdateToOneWithWhereWithoutKartuInput = {
    where?: mediaWhereInput
    data: XOR<mediaUpdateWithoutKartuInput, mediaUncheckedUpdateWithoutKartuInput>
  }

  export type mediaUpdateWithoutKartuInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    grouping?: NullableEnummedia_grouping_enumFieldUpdateOperationsInput | $Enums.media_grouping_enum | null
    type?: Enummedia_type_enumFieldUpdateOperationsInput | $Enums.media_type_enum
    url?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    uploader?: userUpdateOneRequiredWithoutUploadedNestedInput
    paymentproof?: team_memberUpdateOneWithoutPaymentProofNestedInput
    twibbon?: team_memberUpdateOneWithoutTwibbonNestedInput
    submission?: competition_submissionUpdateOneWithoutMediaNestedInput
  }

  export type mediaUncheckedUpdateWithoutKartuInput = {
    id?: StringFieldUpdateOperationsInput | string
    uploader_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    grouping?: NullableEnummedia_grouping_enumFieldUpdateOperationsInput | $Enums.media_grouping_enum | null
    type?: Enummedia_type_enumFieldUpdateOperationsInput | $Enums.media_type_enum
    url?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentproof?: team_memberUncheckedUpdateOneWithoutPaymentProofNestedInput
    twibbon?: team_memberUncheckedUpdateOneWithoutTwibbonNestedInput
    submission?: competition_submissionUncheckedUpdateOneWithoutMediaNestedInput
  }

  export type mediaCreateWithoutUploaderInput = {
    id: string
    name: string
    grouping?: $Enums.media_grouping_enum | null
    type: $Enums.media_type_enum
    url: string
    created_at?: Date | string
    paymentproof?: team_memberCreateNestedOneWithoutPaymentProofInput
    twibbon?: team_memberCreateNestedOneWithoutTwibbonInput
    kartu?: team_memberCreateNestedOneWithoutKartuInput
    submission?: competition_submissionCreateNestedOneWithoutMediaInput
  }

  export type mediaUncheckedCreateWithoutUploaderInput = {
    id: string
    name: string
    grouping?: $Enums.media_grouping_enum | null
    type: $Enums.media_type_enum
    url: string
    created_at?: Date | string
    paymentproof?: team_memberUncheckedCreateNestedOneWithoutPaymentProofInput
    twibbon?: team_memberUncheckedCreateNestedOneWithoutTwibbonInput
    kartu?: team_memberUncheckedCreateNestedOneWithoutKartuInput
    submission?: competition_submissionUncheckedCreateNestedOneWithoutMediaInput
  }

  export type mediaCreateOrConnectWithoutUploaderInput = {
    where: mediaWhereUniqueInput
    create: XOR<mediaCreateWithoutUploaderInput, mediaUncheckedCreateWithoutUploaderInput>
  }

  export type mediaCreateManyUploaderInputEnvelope = {
    data: mediaCreateManyUploaderInput | mediaCreateManyUploaderInput[]
    skipDuplicates?: boolean
  }

  export type user_identityCreateWithoutUserInput = {
    email: string
    provider: $Enums.user_identity_provider_enum
    hash: string
    is_verified?: boolean
    verification_token: string
    verification_token_expiration: Date | string
    password_recovery_token?: string | null
    password_recovery_token_expiration?: Date | string | null
    refresh_token?: string | null
    role?: $Enums.user_identity_role_enum | null
    created_at?: Date | string
    updated_at?: Date | string | null
  }

  export type user_identityUncheckedCreateWithoutUserInput = {
    email: string
    provider: $Enums.user_identity_provider_enum
    hash: string
    is_verified?: boolean
    verification_token: string
    verification_token_expiration: Date | string
    password_recovery_token?: string | null
    password_recovery_token_expiration?: Date | string | null
    refresh_token?: string | null
    role?: $Enums.user_identity_role_enum | null
    created_at?: Date | string
    updated_at?: Date | string | null
  }

  export type user_identityCreateOrConnectWithoutUserInput = {
    where: user_identityWhereUniqueInput
    create: XOR<user_identityCreateWithoutUserInput, user_identityUncheckedCreateWithoutUserInput>
  }

  export type competition_announcementCreateWithoutAuthorInput = {
    id: string
    title: string
    description: string
    created_at?: Date | string
    updated_at?: Date | string
    competition: competitionCreateNestedOneWithoutAnnouncementsInput
  }

  export type competition_announcementUncheckedCreateWithoutAuthorInput = {
    id: string
    competition_id: string
    title: string
    description: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type competition_announcementCreateOrConnectWithoutAuthorInput = {
    where: competition_announcementWhereUniqueInput
    create: XOR<competition_announcementCreateWithoutAuthorInput, competition_announcementUncheckedCreateWithoutAuthorInput>
  }

  export type competition_announcementCreateManyAuthorInputEnvelope = {
    data: competition_announcementCreateManyAuthorInput | competition_announcementCreateManyAuthorInput[]
    skipDuplicates?: boolean
  }

  export type team_memberCreateWithoutUserInput = {
    role: $Enums.team_member_role_enum
    is_verified?: boolean
    verification_error?: string | null
    paymentProof?: mediaCreateNestedOneWithoutPaymentproofInput
    team: teamCreateNestedOneWithoutMembersInput
    twibbon?: mediaCreateNestedOneWithoutTwibbonInput
    kartu?: mediaCreateNestedOneWithoutKartuInput
  }

  export type team_memberUncheckedCreateWithoutUserInput = {
    team_id: string
    role: $Enums.team_member_role_enum
    kartu_media_id?: string | null
    twibbon_media_id?: string | null
    payment_proof_media_id?: string | null
    is_verified?: boolean
    verification_error?: string | null
  }

  export type team_memberCreateOrConnectWithoutUserInput = {
    where: team_memberWhereUniqueInput
    create: XOR<team_memberCreateWithoutUserInput, team_memberUncheckedCreateWithoutUserInput>
  }

  export type team_memberCreateManyUserInputEnvelope = {
    data: team_memberCreateManyUserInput | team_memberCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type mediaUpsertWithWhereUniqueWithoutUploaderInput = {
    where: mediaWhereUniqueInput
    update: XOR<mediaUpdateWithoutUploaderInput, mediaUncheckedUpdateWithoutUploaderInput>
    create: XOR<mediaCreateWithoutUploaderInput, mediaUncheckedCreateWithoutUploaderInput>
  }

  export type mediaUpdateWithWhereUniqueWithoutUploaderInput = {
    where: mediaWhereUniqueInput
    data: XOR<mediaUpdateWithoutUploaderInput, mediaUncheckedUpdateWithoutUploaderInput>
  }

  export type mediaUpdateManyWithWhereWithoutUploaderInput = {
    where: mediaScalarWhereInput
    data: XOR<mediaUpdateManyMutationInput, mediaUncheckedUpdateManyWithoutUploaderInput>
  }

  export type mediaScalarWhereInput = {
    AND?: mediaScalarWhereInput | mediaScalarWhereInput[]
    OR?: mediaScalarWhereInput[]
    NOT?: mediaScalarWhereInput | mediaScalarWhereInput[]
    id?: StringFilter<"media"> | string
    uploader_id?: StringFilter<"media"> | string
    name?: StringFilter<"media"> | string
    grouping?: Enummedia_grouping_enumNullableFilter<"media"> | $Enums.media_grouping_enum | null
    type?: Enummedia_type_enumFilter<"media"> | $Enums.media_type_enum
    url?: StringFilter<"media"> | string
    created_at?: DateTimeFilter<"media"> | Date | string
  }

  export type user_identityUpsertWithoutUserInput = {
    update: XOR<user_identityUpdateWithoutUserInput, user_identityUncheckedUpdateWithoutUserInput>
    create: XOR<user_identityCreateWithoutUserInput, user_identityUncheckedCreateWithoutUserInput>
    where?: user_identityWhereInput
  }

  export type user_identityUpdateToOneWithWhereWithoutUserInput = {
    where?: user_identityWhereInput
    data: XOR<user_identityUpdateWithoutUserInput, user_identityUncheckedUpdateWithoutUserInput>
  }

  export type user_identityUpdateWithoutUserInput = {
    email?: StringFieldUpdateOperationsInput | string
    provider?: Enumuser_identity_provider_enumFieldUpdateOperationsInput | $Enums.user_identity_provider_enum
    hash?: StringFieldUpdateOperationsInput | string
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    verification_token?: StringFieldUpdateOperationsInput | string
    verification_token_expiration?: DateTimeFieldUpdateOperationsInput | Date | string
    password_recovery_token?: NullableStringFieldUpdateOperationsInput | string | null
    password_recovery_token_expiration?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableEnumuser_identity_role_enumFieldUpdateOperationsInput | $Enums.user_identity_role_enum | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type user_identityUncheckedUpdateWithoutUserInput = {
    email?: StringFieldUpdateOperationsInput | string
    provider?: Enumuser_identity_provider_enumFieldUpdateOperationsInput | $Enums.user_identity_provider_enum
    hash?: StringFieldUpdateOperationsInput | string
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    verification_token?: StringFieldUpdateOperationsInput | string
    verification_token_expiration?: DateTimeFieldUpdateOperationsInput | Date | string
    password_recovery_token?: NullableStringFieldUpdateOperationsInput | string | null
    password_recovery_token_expiration?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableEnumuser_identity_role_enumFieldUpdateOperationsInput | $Enums.user_identity_role_enum | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type competition_announcementUpsertWithWhereUniqueWithoutAuthorInput = {
    where: competition_announcementWhereUniqueInput
    update: XOR<competition_announcementUpdateWithoutAuthorInput, competition_announcementUncheckedUpdateWithoutAuthorInput>
    create: XOR<competition_announcementCreateWithoutAuthorInput, competition_announcementUncheckedCreateWithoutAuthorInput>
  }

  export type competition_announcementUpdateWithWhereUniqueWithoutAuthorInput = {
    where: competition_announcementWhereUniqueInput
    data: XOR<competition_announcementUpdateWithoutAuthorInput, competition_announcementUncheckedUpdateWithoutAuthorInput>
  }

  export type competition_announcementUpdateManyWithWhereWithoutAuthorInput = {
    where: competition_announcementScalarWhereInput
    data: XOR<competition_announcementUpdateManyMutationInput, competition_announcementUncheckedUpdateManyWithoutAuthorInput>
  }

  export type team_memberUpsertWithWhereUniqueWithoutUserInput = {
    where: team_memberWhereUniqueInput
    update: XOR<team_memberUpdateWithoutUserInput, team_memberUncheckedUpdateWithoutUserInput>
    create: XOR<team_memberCreateWithoutUserInput, team_memberUncheckedCreateWithoutUserInput>
  }

  export type team_memberUpdateWithWhereUniqueWithoutUserInput = {
    where: team_memberWhereUniqueInput
    data: XOR<team_memberUpdateWithoutUserInput, team_memberUncheckedUpdateWithoutUserInput>
  }

  export type team_memberUpdateManyWithWhereWithoutUserInput = {
    where: team_memberScalarWhereInput
    data: XOR<team_memberUpdateManyMutationInput, team_memberUncheckedUpdateManyWithoutUserInput>
  }

  export type userCreateWithoutIdentityInput = {
    id: string
    email: string
    full_name?: string | null
    birth_date?: Date | string | null
    pendidikan?: $Enums.education_enum | null
    nama_sekolah?: string | null
    entry_source?: string | null
    phone_number?: string | null
    id_line?: string | null
    id_discord?: string | null
    id_instagram?: string | null
    consent?: boolean
    is_registration_complete?: boolean
    created_at?: Date | string
    updated_at?: Date | string | null
    uploaded?: mediaCreateNestedManyWithoutUploaderInput
    announcements?: competition_announcementCreateNestedManyWithoutAuthorInput
    member?: team_memberCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateWithoutIdentityInput = {
    id: string
    email: string
    full_name?: string | null
    birth_date?: Date | string | null
    pendidikan?: $Enums.education_enum | null
    nama_sekolah?: string | null
    entry_source?: string | null
    phone_number?: string | null
    id_line?: string | null
    id_discord?: string | null
    id_instagram?: string | null
    consent?: boolean
    is_registration_complete?: boolean
    created_at?: Date | string
    updated_at?: Date | string | null
    uploaded?: mediaUncheckedCreateNestedManyWithoutUploaderInput
    announcements?: competition_announcementUncheckedCreateNestedManyWithoutAuthorInput
    member?: team_memberUncheckedCreateNestedManyWithoutUserInput
  }

  export type userCreateOrConnectWithoutIdentityInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutIdentityInput, userUncheckedCreateWithoutIdentityInput>
  }

  export type userUpsertWithoutIdentityInput = {
    update: XOR<userUpdateWithoutIdentityInput, userUncheckedUpdateWithoutIdentityInput>
    create: XOR<userCreateWithoutIdentityInput, userUncheckedCreateWithoutIdentityInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutIdentityInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutIdentityInput, userUncheckedUpdateWithoutIdentityInput>
  }

  export type userUpdateWithoutIdentityInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    full_name?: NullableStringFieldUpdateOperationsInput | string | null
    birth_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pendidikan?: NullableEnumeducation_enumFieldUpdateOperationsInput | $Enums.education_enum | null
    nama_sekolah?: NullableStringFieldUpdateOperationsInput | string | null
    entry_source?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    id_line?: NullableStringFieldUpdateOperationsInput | string | null
    id_discord?: NullableStringFieldUpdateOperationsInput | string | null
    id_instagram?: NullableStringFieldUpdateOperationsInput | string | null
    consent?: BoolFieldUpdateOperationsInput | boolean
    is_registration_complete?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    uploaded?: mediaUpdateManyWithoutUploaderNestedInput
    announcements?: competition_announcementUpdateManyWithoutAuthorNestedInput
    member?: team_memberUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutIdentityInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    full_name?: NullableStringFieldUpdateOperationsInput | string | null
    birth_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pendidikan?: NullableEnumeducation_enumFieldUpdateOperationsInput | $Enums.education_enum | null
    nama_sekolah?: NullableStringFieldUpdateOperationsInput | string | null
    entry_source?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    id_line?: NullableStringFieldUpdateOperationsInput | string | null
    id_discord?: NullableStringFieldUpdateOperationsInput | string | null
    id_instagram?: NullableStringFieldUpdateOperationsInput | string | null
    consent?: BoolFieldUpdateOperationsInput | boolean
    is_registration_complete?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    uploaded?: mediaUncheckedUpdateManyWithoutUploaderNestedInput
    announcements?: competition_announcementUncheckedUpdateManyWithoutAuthorNestedInput
    member?: team_memberUncheckedUpdateManyWithoutUserNestedInput
  }

  export type competition_announcementCreateManyCompetitionInput = {
    id: string
    author_id: string
    title: string
    description: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type competition_submissionCreateManyCompetitionInput = {
    team_id: string
    media_id: string
    created_at?: Date | string
    updated_at?: Date | string | null
  }

  export type competition_timelineCreateManyCompetitionInput = {
    id: string
    title: string
    date: Date | string
  }

  export type teamCreateManyCompetitionInput = {
    id: string
    team_name: string
    team_code: string
    is_verified?: boolean
    verification_error?: string | null
    created_at?: Date | string
    updated_at?: Date | string | null
  }

  export type competition_announcementUpdateWithoutCompetitionInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: userUpdateOneRequiredWithoutAnnouncementsNestedInput
  }

  export type competition_announcementUncheckedUpdateWithoutCompetitionInput = {
    id?: StringFieldUpdateOperationsInput | string
    author_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type competition_announcementUncheckedUpdateManyWithoutCompetitionInput = {
    id?: StringFieldUpdateOperationsInput | string
    author_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type competition_submissionUpdateWithoutCompetitionInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    team?: teamUpdateOneRequiredWithoutSubmissionNestedInput
    media?: mediaUpdateOneRequiredWithoutSubmissionNestedInput
  }

  export type competition_submissionUncheckedUpdateWithoutCompetitionInput = {
    team_id?: StringFieldUpdateOperationsInput | string
    media_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type competition_submissionUncheckedUpdateManyWithoutCompetitionInput = {
    team_id?: StringFieldUpdateOperationsInput | string
    media_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type competition_timelineUpdateWithoutCompetitionInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type competition_timelineUncheckedUpdateWithoutCompetitionInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type competition_timelineUncheckedUpdateManyWithoutCompetitionInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type teamUpdateWithoutCompetitionInput = {
    id?: StringFieldUpdateOperationsInput | string
    team_name?: StringFieldUpdateOperationsInput | string
    team_code?: StringFieldUpdateOperationsInput | string
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    verification_error?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    members?: team_memberUpdateManyWithoutTeamNestedInput
    submission?: competition_submissionUpdateManyWithoutTeamNestedInput
  }

  export type teamUncheckedUpdateWithoutCompetitionInput = {
    id?: StringFieldUpdateOperationsInput | string
    team_name?: StringFieldUpdateOperationsInput | string
    team_code?: StringFieldUpdateOperationsInput | string
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    verification_error?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    members?: team_memberUncheckedUpdateManyWithoutTeamNestedInput
    submission?: competition_submissionUncheckedUpdateManyWithoutTeamNestedInput
  }

  export type teamUncheckedUpdateManyWithoutCompetitionInput = {
    id?: StringFieldUpdateOperationsInput | string
    team_name?: StringFieldUpdateOperationsInput | string
    team_code?: StringFieldUpdateOperationsInput | string
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    verification_error?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type team_memberCreateManyTeamInput = {
    user_id: string
    role: $Enums.team_member_role_enum
    kartu_media_id?: string | null
    twibbon_media_id?: string | null
    payment_proof_media_id?: string | null
    is_verified?: boolean
    verification_error?: string | null
  }

  export type competition_submissionCreateManyTeamInput = {
    competition_id: string
    media_id: string
    created_at?: Date | string
    updated_at?: Date | string | null
  }

  export type team_memberUpdateWithoutTeamInput = {
    role?: Enumteam_member_role_enumFieldUpdateOperationsInput | $Enums.team_member_role_enum
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    verification_error?: NullableStringFieldUpdateOperationsInput | string | null
    paymentProof?: mediaUpdateOneWithoutPaymentproofNestedInput
    user?: userUpdateOneRequiredWithoutMemberNestedInput
    twibbon?: mediaUpdateOneWithoutTwibbonNestedInput
    kartu?: mediaUpdateOneWithoutKartuNestedInput
  }

  export type team_memberUncheckedUpdateWithoutTeamInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    role?: Enumteam_member_role_enumFieldUpdateOperationsInput | $Enums.team_member_role_enum
    kartu_media_id?: NullableStringFieldUpdateOperationsInput | string | null
    twibbon_media_id?: NullableStringFieldUpdateOperationsInput | string | null
    payment_proof_media_id?: NullableStringFieldUpdateOperationsInput | string | null
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    verification_error?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type team_memberUncheckedUpdateManyWithoutTeamInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    role?: Enumteam_member_role_enumFieldUpdateOperationsInput | $Enums.team_member_role_enum
    kartu_media_id?: NullableStringFieldUpdateOperationsInput | string | null
    twibbon_media_id?: NullableStringFieldUpdateOperationsInput | string | null
    payment_proof_media_id?: NullableStringFieldUpdateOperationsInput | string | null
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    verification_error?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type competition_submissionUpdateWithoutTeamInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    competition?: competitionUpdateOneRequiredWithoutSubmissionsNestedInput
    media?: mediaUpdateOneRequiredWithoutSubmissionNestedInput
  }

  export type competition_submissionUncheckedUpdateWithoutTeamInput = {
    competition_id?: StringFieldUpdateOperationsInput | string
    media_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type competition_submissionUncheckedUpdateManyWithoutTeamInput = {
    competition_id?: StringFieldUpdateOperationsInput | string
    media_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type mediaCreateManyUploaderInput = {
    id: string
    name: string
    grouping?: $Enums.media_grouping_enum | null
    type: $Enums.media_type_enum
    url: string
    created_at?: Date | string
  }

  export type competition_announcementCreateManyAuthorInput = {
    id: string
    competition_id: string
    title: string
    description: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type team_memberCreateManyUserInput = {
    team_id: string
    role: $Enums.team_member_role_enum
    kartu_media_id?: string | null
    twibbon_media_id?: string | null
    payment_proof_media_id?: string | null
    is_verified?: boolean
    verification_error?: string | null
  }

  export type mediaUpdateWithoutUploaderInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    grouping?: NullableEnummedia_grouping_enumFieldUpdateOperationsInput | $Enums.media_grouping_enum | null
    type?: Enummedia_type_enumFieldUpdateOperationsInput | $Enums.media_type_enum
    url?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentproof?: team_memberUpdateOneWithoutPaymentProofNestedInput
    twibbon?: team_memberUpdateOneWithoutTwibbonNestedInput
    kartu?: team_memberUpdateOneWithoutKartuNestedInput
    submission?: competition_submissionUpdateOneWithoutMediaNestedInput
  }

  export type mediaUncheckedUpdateWithoutUploaderInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    grouping?: NullableEnummedia_grouping_enumFieldUpdateOperationsInput | $Enums.media_grouping_enum | null
    type?: Enummedia_type_enumFieldUpdateOperationsInput | $Enums.media_type_enum
    url?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentproof?: team_memberUncheckedUpdateOneWithoutPaymentProofNestedInput
    twibbon?: team_memberUncheckedUpdateOneWithoutTwibbonNestedInput
    kartu?: team_memberUncheckedUpdateOneWithoutKartuNestedInput
    submission?: competition_submissionUncheckedUpdateOneWithoutMediaNestedInput
  }

  export type mediaUncheckedUpdateManyWithoutUploaderInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    grouping?: NullableEnummedia_grouping_enumFieldUpdateOperationsInput | $Enums.media_grouping_enum | null
    type?: Enummedia_type_enumFieldUpdateOperationsInput | $Enums.media_type_enum
    url?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type competition_announcementUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    competition?: competitionUpdateOneRequiredWithoutAnnouncementsNestedInput
  }

  export type competition_announcementUncheckedUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    competition_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type competition_announcementUncheckedUpdateManyWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    competition_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type team_memberUpdateWithoutUserInput = {
    role?: Enumteam_member_role_enumFieldUpdateOperationsInput | $Enums.team_member_role_enum
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    verification_error?: NullableStringFieldUpdateOperationsInput | string | null
    paymentProof?: mediaUpdateOneWithoutPaymentproofNestedInput
    team?: teamUpdateOneRequiredWithoutMembersNestedInput
    twibbon?: mediaUpdateOneWithoutTwibbonNestedInput
    kartu?: mediaUpdateOneWithoutKartuNestedInput
  }

  export type team_memberUncheckedUpdateWithoutUserInput = {
    team_id?: StringFieldUpdateOperationsInput | string
    role?: Enumteam_member_role_enumFieldUpdateOperationsInput | $Enums.team_member_role_enum
    kartu_media_id?: NullableStringFieldUpdateOperationsInput | string | null
    twibbon_media_id?: NullableStringFieldUpdateOperationsInput | string | null
    payment_proof_media_id?: NullableStringFieldUpdateOperationsInput | string | null
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    verification_error?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type team_memberUncheckedUpdateManyWithoutUserInput = {
    team_id?: StringFieldUpdateOperationsInput | string
    role?: Enumteam_member_role_enumFieldUpdateOperationsInput | $Enums.team_member_role_enum
    kartu_media_id?: NullableStringFieldUpdateOperationsInput | string | null
    twibbon_media_id?: NullableStringFieldUpdateOperationsInput | string | null
    payment_proof_media_id?: NullableStringFieldUpdateOperationsInput | string | null
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    verification_error?: NullableStringFieldUpdateOperationsInput | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}