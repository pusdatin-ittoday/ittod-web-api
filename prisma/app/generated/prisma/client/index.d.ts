
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
  export const user_identity_provider: {
  email: 'email',
  google: 'google',
  github: 'github'
};

export type user_identity_provider = (typeof user_identity_provider)[keyof typeof user_identity_provider]


export const user_education: {
  SMA: 'SMA',
  D3: 'D3',
  S1: 'S1',
  S2: 'S2',
  S3: 'S3',
  Lainnya: 'Lainnya'
};

export type user_education = (typeof user_education)[keyof typeof user_education]


export const user_identity_role: {
  user: 'user',
  admin: 'admin',
  superadmin: 'superadmin'
};

export type user_identity_role = (typeof user_identity_role)[keyof typeof user_identity_role]

}

export type user_identity_provider = $Enums.user_identity_provider

export const user_identity_provider: typeof $Enums.user_identity_provider

export type user_education = $Enums.user_education

export const user_education: typeof $Enums.user_education

export type user_identity_role = $Enums.user_identity_role

export const user_identity_role: typeof $Enums.user_identity_role

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
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
      modelProps: "user" | "user_identity"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
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
   * Models
   */

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
    education: $Enums.user_education | null
    entry_source: string | null
    instance: string | null
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
    education: $Enums.user_education | null
    entry_source: string | null
    instance: string | null
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
    education: number
    entry_source: number
    instance: number
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
    education?: true
    entry_source?: true
    instance?: true
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
    education?: true
    entry_source?: true
    instance?: true
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
    education?: true
    entry_source?: true
    instance?: true
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
    education: $Enums.user_education | null
    entry_source: string | null
    instance: string | null
    phone_number: string | null
    id_line: string | null
    id_discord: string | null
    id_instagram: string | null
    consent: boolean
    is_registration_complete: boolean
    created_at: Date | null
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
    education?: boolean
    entry_source?: boolean
    instance?: boolean
    phone_number?: boolean
    id_line?: boolean
    id_discord?: boolean
    id_instagram?: boolean
    consent?: boolean
    is_registration_complete?: boolean
    created_at?: boolean
    updated_at?: boolean
    user_identity?: boolean | user$user_identityArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type userSelectScalar = {
    id?: boolean
    email?: boolean
    full_name?: boolean
    birth_date?: boolean
    education?: boolean
    entry_source?: boolean
    instance?: boolean
    phone_number?: boolean
    id_line?: boolean
    id_discord?: boolean
    id_instagram?: boolean
    consent?: boolean
    is_registration_complete?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type userOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "full_name" | "birth_date" | "education" | "entry_source" | "instance" | "phone_number" | "id_line" | "id_discord" | "id_instagram" | "consent" | "is_registration_complete" | "created_at" | "updated_at", ExtArgs["result"]["user"]>
  export type userInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user_identity?: boolean | user$user_identityArgs<ExtArgs>
  }

  export type $userPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "user"
    objects: {
      user_identity: Prisma.$user_identityPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      full_name: string | null
      birth_date: Date | null
      education: $Enums.user_education | null
      entry_source: string | null
      instance: string | null
      phone_number: string | null
      id_line: string | null
      id_discord: string | null
      id_instagram: string | null
      consent: boolean
      is_registration_complete: boolean
      created_at: Date | null
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
    user_identity<T extends user$user_identityArgs<ExtArgs> = {}>(args?: Subset<T, user$user_identityArgs<ExtArgs>>): Prisma__user_identityClient<$Result.GetResult<Prisma.$user_identityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
    readonly education: FieldRef<"user", 'user_education'>
    readonly entry_source: FieldRef<"user", 'String'>
    readonly instance: FieldRef<"user", 'String'>
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
   * user.user_identity
   */
  export type user$user_identityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    provider: $Enums.user_identity_provider | null
    hash: string | null
    is_verified: boolean | null
    verification_token: string | null
    verification_token_expiration: Date | null
    password_recovery_token: string | null
    password_recovery_token_expiration: Date | null
    refresh_token: string | null
    role: $Enums.user_identity_role | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type User_identityMaxAggregateOutputType = {
    id: string | null
    email: string | null
    provider: $Enums.user_identity_provider | null
    hash: string | null
    is_verified: boolean | null
    verification_token: string | null
    verification_token_expiration: Date | null
    password_recovery_token: string | null
    password_recovery_token_expiration: Date | null
    refresh_token: string | null
    role: $Enums.user_identity_role | null
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
    provider: $Enums.user_identity_provider
    hash: string | null
    is_verified: boolean
    verification_token: string | null
    verification_token_expiration: Date | null
    password_recovery_token: string | null
    password_recovery_token_expiration: Date | null
    refresh_token: string | null
    role: $Enums.user_identity_role
    created_at: Date | null
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
      provider: $Enums.user_identity_provider
      hash: string | null
      is_verified: boolean
      verification_token: string | null
      verification_token_expiration: Date | null
      password_recovery_token: string | null
      password_recovery_token_expiration: Date | null
      refresh_token: string | null
      role: $Enums.user_identity_role
      created_at: Date | null
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
    readonly provider: FieldRef<"user_identity", 'user_identity_provider'>
    readonly hash: FieldRef<"user_identity", 'String'>
    readonly is_verified: FieldRef<"user_identity", 'Boolean'>
    readonly verification_token: FieldRef<"user_identity", 'String'>
    readonly verification_token_expiration: FieldRef<"user_identity", 'DateTime'>
    readonly password_recovery_token: FieldRef<"user_identity", 'String'>
    readonly password_recovery_token_expiration: FieldRef<"user_identity", 'DateTime'>
    readonly refresh_token: FieldRef<"user_identity", 'String'>
    readonly role: FieldRef<"user_identity", 'user_identity_role'>
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


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    full_name: 'full_name',
    birth_date: 'birth_date',
    education: 'education',
    entry_source: 'entry_source',
    instance: 'instance',
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


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const userOrderByRelevanceFieldEnum: {
    id: 'id',
    email: 'email',
    full_name: 'full_name',
    entry_source: 'entry_source',
    instance: 'instance',
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
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'user_education'
   */
  export type Enumuser_educationFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'user_education'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'user_identity_provider'
   */
  export type Enumuser_identity_providerFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'user_identity_provider'>
    


  /**
   * Reference to a field of type 'user_identity_role'
   */
  export type Enumuser_identity_roleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'user_identity_role'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    
  /**
   * Deep Input Types
   */


  export type userWhereInput = {
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    id?: StringFilter<"user"> | string
    email?: StringFilter<"user"> | string
    full_name?: StringNullableFilter<"user"> | string | null
    birth_date?: DateTimeNullableFilter<"user"> | Date | string | null
    education?: Enumuser_educationNullableFilter<"user"> | $Enums.user_education | null
    entry_source?: StringNullableFilter<"user"> | string | null
    instance?: StringNullableFilter<"user"> | string | null
    phone_number?: StringNullableFilter<"user"> | string | null
    id_line?: StringNullableFilter<"user"> | string | null
    id_discord?: StringNullableFilter<"user"> | string | null
    id_instagram?: StringNullableFilter<"user"> | string | null
    consent?: BoolFilter<"user"> | boolean
    is_registration_complete?: BoolFilter<"user"> | boolean
    created_at?: DateTimeNullableFilter<"user"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"user"> | Date | string | null
    user_identity?: XOR<User_identityNullableScalarRelationFilter, user_identityWhereInput> | null
  }

  export type userOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    full_name?: SortOrderInput | SortOrder
    birth_date?: SortOrderInput | SortOrder
    education?: SortOrderInput | SortOrder
    entry_source?: SortOrderInput | SortOrder
    instance?: SortOrderInput | SortOrder
    phone_number?: SortOrderInput | SortOrder
    id_line?: SortOrderInput | SortOrder
    id_discord?: SortOrderInput | SortOrder
    id_instagram?: SortOrderInput | SortOrder
    consent?: SortOrder
    is_registration_complete?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    user_identity?: user_identityOrderByWithRelationInput
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
    education?: Enumuser_educationNullableFilter<"user"> | $Enums.user_education | null
    entry_source?: StringNullableFilter<"user"> | string | null
    instance?: StringNullableFilter<"user"> | string | null
    phone_number?: StringNullableFilter<"user"> | string | null
    id_line?: StringNullableFilter<"user"> | string | null
    id_discord?: StringNullableFilter<"user"> | string | null
    id_instagram?: StringNullableFilter<"user"> | string | null
    consent?: BoolFilter<"user"> | boolean
    is_registration_complete?: BoolFilter<"user"> | boolean
    created_at?: DateTimeNullableFilter<"user"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"user"> | Date | string | null
    user_identity?: XOR<User_identityNullableScalarRelationFilter, user_identityWhereInput> | null
  }, "id" | "email">

  export type userOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    full_name?: SortOrderInput | SortOrder
    birth_date?: SortOrderInput | SortOrder
    education?: SortOrderInput | SortOrder
    entry_source?: SortOrderInput | SortOrder
    instance?: SortOrderInput | SortOrder
    phone_number?: SortOrderInput | SortOrder
    id_line?: SortOrderInput | SortOrder
    id_discord?: SortOrderInput | SortOrder
    id_instagram?: SortOrderInput | SortOrder
    consent?: SortOrder
    is_registration_complete?: SortOrder
    created_at?: SortOrderInput | SortOrder
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
    education?: Enumuser_educationNullableWithAggregatesFilter<"user"> | $Enums.user_education | null
    entry_source?: StringNullableWithAggregatesFilter<"user"> | string | null
    instance?: StringNullableWithAggregatesFilter<"user"> | string | null
    phone_number?: StringNullableWithAggregatesFilter<"user"> | string | null
    id_line?: StringNullableWithAggregatesFilter<"user"> | string | null
    id_discord?: StringNullableWithAggregatesFilter<"user"> | string | null
    id_instagram?: StringNullableWithAggregatesFilter<"user"> | string | null
    consent?: BoolWithAggregatesFilter<"user"> | boolean
    is_registration_complete?: BoolWithAggregatesFilter<"user"> | boolean
    created_at?: DateTimeNullableWithAggregatesFilter<"user"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"user"> | Date | string | null
  }

  export type user_identityWhereInput = {
    AND?: user_identityWhereInput | user_identityWhereInput[]
    OR?: user_identityWhereInput[]
    NOT?: user_identityWhereInput | user_identityWhereInput[]
    id?: StringFilter<"user_identity"> | string
    email?: StringFilter<"user_identity"> | string
    provider?: Enumuser_identity_providerFilter<"user_identity"> | $Enums.user_identity_provider
    hash?: StringNullableFilter<"user_identity"> | string | null
    is_verified?: BoolFilter<"user_identity"> | boolean
    verification_token?: StringNullableFilter<"user_identity"> | string | null
    verification_token_expiration?: DateTimeNullableFilter<"user_identity"> | Date | string | null
    password_recovery_token?: StringNullableFilter<"user_identity"> | string | null
    password_recovery_token_expiration?: DateTimeNullableFilter<"user_identity"> | Date | string | null
    refresh_token?: StringNullableFilter<"user_identity"> | string | null
    role?: Enumuser_identity_roleFilter<"user_identity"> | $Enums.user_identity_role
    created_at?: DateTimeNullableFilter<"user_identity"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"user_identity"> | Date | string | null
    user?: XOR<UserScalarRelationFilter, userWhereInput>
  }

  export type user_identityOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    provider?: SortOrder
    hash?: SortOrderInput | SortOrder
    is_verified?: SortOrder
    verification_token?: SortOrderInput | SortOrder
    verification_token_expiration?: SortOrderInput | SortOrder
    password_recovery_token?: SortOrderInput | SortOrder
    password_recovery_token_expiration?: SortOrderInput | SortOrder
    refresh_token?: SortOrderInput | SortOrder
    role?: SortOrder
    created_at?: SortOrderInput | SortOrder
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
    provider?: Enumuser_identity_providerFilter<"user_identity"> | $Enums.user_identity_provider
    hash?: StringNullableFilter<"user_identity"> | string | null
    is_verified?: BoolFilter<"user_identity"> | boolean
    verification_token?: StringNullableFilter<"user_identity"> | string | null
    verification_token_expiration?: DateTimeNullableFilter<"user_identity"> | Date | string | null
    password_recovery_token?: StringNullableFilter<"user_identity"> | string | null
    password_recovery_token_expiration?: DateTimeNullableFilter<"user_identity"> | Date | string | null
    refresh_token?: StringNullableFilter<"user_identity"> | string | null
    role?: Enumuser_identity_roleFilter<"user_identity"> | $Enums.user_identity_role
    created_at?: DateTimeNullableFilter<"user_identity"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"user_identity"> | Date | string | null
    user?: XOR<UserScalarRelationFilter, userWhereInput>
  }, "id" | "email">

  export type user_identityOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    provider?: SortOrder
    hash?: SortOrderInput | SortOrder
    is_verified?: SortOrder
    verification_token?: SortOrderInput | SortOrder
    verification_token_expiration?: SortOrderInput | SortOrder
    password_recovery_token?: SortOrderInput | SortOrder
    password_recovery_token_expiration?: SortOrderInput | SortOrder
    refresh_token?: SortOrderInput | SortOrder
    role?: SortOrder
    created_at?: SortOrderInput | SortOrder
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
    provider?: Enumuser_identity_providerWithAggregatesFilter<"user_identity"> | $Enums.user_identity_provider
    hash?: StringNullableWithAggregatesFilter<"user_identity"> | string | null
    is_verified?: BoolWithAggregatesFilter<"user_identity"> | boolean
    verification_token?: StringNullableWithAggregatesFilter<"user_identity"> | string | null
    verification_token_expiration?: DateTimeNullableWithAggregatesFilter<"user_identity"> | Date | string | null
    password_recovery_token?: StringNullableWithAggregatesFilter<"user_identity"> | string | null
    password_recovery_token_expiration?: DateTimeNullableWithAggregatesFilter<"user_identity"> | Date | string | null
    refresh_token?: StringNullableWithAggregatesFilter<"user_identity"> | string | null
    role?: Enumuser_identity_roleWithAggregatesFilter<"user_identity"> | $Enums.user_identity_role
    created_at?: DateTimeNullableWithAggregatesFilter<"user_identity"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"user_identity"> | Date | string | null
  }

  export type userCreateInput = {
    id: string
    email: string
    full_name?: string | null
    birth_date?: Date | string | null
    education?: $Enums.user_education | null
    entry_source?: string | null
    instance?: string | null
    phone_number?: string | null
    id_line?: string | null
    id_discord?: string | null
    id_instagram?: string | null
    consent?: boolean
    is_registration_complete?: boolean
    created_at?: Date | string | null
    updated_at?: Date | string | null
    user_identity?: user_identityCreateNestedOneWithoutUserInput
  }

  export type userUncheckedCreateInput = {
    id: string
    email: string
    full_name?: string | null
    birth_date?: Date | string | null
    education?: $Enums.user_education | null
    entry_source?: string | null
    instance?: string | null
    phone_number?: string | null
    id_line?: string | null
    id_discord?: string | null
    id_instagram?: string | null
    consent?: boolean
    is_registration_complete?: boolean
    created_at?: Date | string | null
    updated_at?: Date | string | null
    user_identity?: user_identityUncheckedCreateNestedOneWithoutUserInput
  }

  export type userUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    full_name?: NullableStringFieldUpdateOperationsInput | string | null
    birth_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    education?: NullableEnumuser_educationFieldUpdateOperationsInput | $Enums.user_education | null
    entry_source?: NullableStringFieldUpdateOperationsInput | string | null
    instance?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    id_line?: NullableStringFieldUpdateOperationsInput | string | null
    id_discord?: NullableStringFieldUpdateOperationsInput | string | null
    id_instagram?: NullableStringFieldUpdateOperationsInput | string | null
    consent?: BoolFieldUpdateOperationsInput | boolean
    is_registration_complete?: BoolFieldUpdateOperationsInput | boolean
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_identity?: user_identityUpdateOneWithoutUserNestedInput
  }

  export type userUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    full_name?: NullableStringFieldUpdateOperationsInput | string | null
    birth_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    education?: NullableEnumuser_educationFieldUpdateOperationsInput | $Enums.user_education | null
    entry_source?: NullableStringFieldUpdateOperationsInput | string | null
    instance?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    id_line?: NullableStringFieldUpdateOperationsInput | string | null
    id_discord?: NullableStringFieldUpdateOperationsInput | string | null
    id_instagram?: NullableStringFieldUpdateOperationsInput | string | null
    consent?: BoolFieldUpdateOperationsInput | boolean
    is_registration_complete?: BoolFieldUpdateOperationsInput | boolean
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_identity?: user_identityUncheckedUpdateOneWithoutUserNestedInput
  }

  export type userCreateManyInput = {
    id: string
    email: string
    full_name?: string | null
    birth_date?: Date | string | null
    education?: $Enums.user_education | null
    entry_source?: string | null
    instance?: string | null
    phone_number?: string | null
    id_line?: string | null
    id_discord?: string | null
    id_instagram?: string | null
    consent?: boolean
    is_registration_complete?: boolean
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type userUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    full_name?: NullableStringFieldUpdateOperationsInput | string | null
    birth_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    education?: NullableEnumuser_educationFieldUpdateOperationsInput | $Enums.user_education | null
    entry_source?: NullableStringFieldUpdateOperationsInput | string | null
    instance?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    id_line?: NullableStringFieldUpdateOperationsInput | string | null
    id_discord?: NullableStringFieldUpdateOperationsInput | string | null
    id_instagram?: NullableStringFieldUpdateOperationsInput | string | null
    consent?: BoolFieldUpdateOperationsInput | boolean
    is_registration_complete?: BoolFieldUpdateOperationsInput | boolean
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type userUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    full_name?: NullableStringFieldUpdateOperationsInput | string | null
    birth_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    education?: NullableEnumuser_educationFieldUpdateOperationsInput | $Enums.user_education | null
    entry_source?: NullableStringFieldUpdateOperationsInput | string | null
    instance?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    id_line?: NullableStringFieldUpdateOperationsInput | string | null
    id_discord?: NullableStringFieldUpdateOperationsInput | string | null
    id_instagram?: NullableStringFieldUpdateOperationsInput | string | null
    consent?: BoolFieldUpdateOperationsInput | boolean
    is_registration_complete?: BoolFieldUpdateOperationsInput | boolean
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type user_identityCreateInput = {
    email: string
    provider: $Enums.user_identity_provider
    hash?: string | null
    is_verified?: boolean
    verification_token?: string | null
    verification_token_expiration?: Date | string | null
    password_recovery_token?: string | null
    password_recovery_token_expiration?: Date | string | null
    refresh_token?: string | null
    role?: $Enums.user_identity_role
    created_at?: Date | string | null
    updated_at?: Date | string | null
    user: userCreateNestedOneWithoutUser_identityInput
  }

  export type user_identityUncheckedCreateInput = {
    id: string
    email: string
    provider: $Enums.user_identity_provider
    hash?: string | null
    is_verified?: boolean
    verification_token?: string | null
    verification_token_expiration?: Date | string | null
    password_recovery_token?: string | null
    password_recovery_token_expiration?: Date | string | null
    refresh_token?: string | null
    role?: $Enums.user_identity_role
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type user_identityUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    provider?: Enumuser_identity_providerFieldUpdateOperationsInput | $Enums.user_identity_provider
    hash?: NullableStringFieldUpdateOperationsInput | string | null
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    verification_token?: NullableStringFieldUpdateOperationsInput | string | null
    verification_token_expiration?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password_recovery_token?: NullableStringFieldUpdateOperationsInput | string | null
    password_recovery_token_expiration?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    role?: Enumuser_identity_roleFieldUpdateOperationsInput | $Enums.user_identity_role
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: userUpdateOneRequiredWithoutUser_identityNestedInput
  }

  export type user_identityUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    provider?: Enumuser_identity_providerFieldUpdateOperationsInput | $Enums.user_identity_provider
    hash?: NullableStringFieldUpdateOperationsInput | string | null
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    verification_token?: NullableStringFieldUpdateOperationsInput | string | null
    verification_token_expiration?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password_recovery_token?: NullableStringFieldUpdateOperationsInput | string | null
    password_recovery_token_expiration?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    role?: Enumuser_identity_roleFieldUpdateOperationsInput | $Enums.user_identity_role
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type user_identityCreateManyInput = {
    id: string
    email: string
    provider: $Enums.user_identity_provider
    hash?: string | null
    is_verified?: boolean
    verification_token?: string | null
    verification_token_expiration?: Date | string | null
    password_recovery_token?: string | null
    password_recovery_token_expiration?: Date | string | null
    refresh_token?: string | null
    role?: $Enums.user_identity_role
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type user_identityUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    provider?: Enumuser_identity_providerFieldUpdateOperationsInput | $Enums.user_identity_provider
    hash?: NullableStringFieldUpdateOperationsInput | string | null
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    verification_token?: NullableStringFieldUpdateOperationsInput | string | null
    verification_token_expiration?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password_recovery_token?: NullableStringFieldUpdateOperationsInput | string | null
    password_recovery_token_expiration?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    role?: Enumuser_identity_roleFieldUpdateOperationsInput | $Enums.user_identity_role
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type user_identityUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    provider?: Enumuser_identity_providerFieldUpdateOperationsInput | $Enums.user_identity_provider
    hash?: NullableStringFieldUpdateOperationsInput | string | null
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    verification_token?: NullableStringFieldUpdateOperationsInput | string | null
    verification_token_expiration?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password_recovery_token?: NullableStringFieldUpdateOperationsInput | string | null
    password_recovery_token_expiration?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    role?: Enumuser_identity_roleFieldUpdateOperationsInput | $Enums.user_identity_role
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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

  export type Enumuser_educationNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.user_education | Enumuser_educationFieldRefInput<$PrismaModel> | null
    in?: $Enums.user_education[] | null
    notIn?: $Enums.user_education[] | null
    not?: NestedEnumuser_educationNullableFilter<$PrismaModel> | $Enums.user_education | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type User_identityNullableScalarRelationFilter = {
    is?: user_identityWhereInput | null
    isNot?: user_identityWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
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
    education?: SortOrder
    entry_source?: SortOrder
    instance?: SortOrder
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
    education?: SortOrder
    entry_source?: SortOrder
    instance?: SortOrder
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
    education?: SortOrder
    entry_source?: SortOrder
    instance?: SortOrder
    phone_number?: SortOrder
    id_line?: SortOrder
    id_discord?: SortOrder
    id_instagram?: SortOrder
    consent?: SortOrder
    is_registration_complete?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
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

  export type Enumuser_educationNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.user_education | Enumuser_educationFieldRefInput<$PrismaModel> | null
    in?: $Enums.user_education[] | null
    notIn?: $Enums.user_education[] | null
    not?: NestedEnumuser_educationNullableWithAggregatesFilter<$PrismaModel> | $Enums.user_education | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumuser_educationNullableFilter<$PrismaModel>
    _max?: NestedEnumuser_educationNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type Enumuser_identity_providerFilter<$PrismaModel = never> = {
    equals?: $Enums.user_identity_provider | Enumuser_identity_providerFieldRefInput<$PrismaModel>
    in?: $Enums.user_identity_provider[]
    notIn?: $Enums.user_identity_provider[]
    not?: NestedEnumuser_identity_providerFilter<$PrismaModel> | $Enums.user_identity_provider
  }

  export type Enumuser_identity_roleFilter<$PrismaModel = never> = {
    equals?: $Enums.user_identity_role | Enumuser_identity_roleFieldRefInput<$PrismaModel>
    in?: $Enums.user_identity_role[]
    notIn?: $Enums.user_identity_role[]
    not?: NestedEnumuser_identity_roleFilter<$PrismaModel> | $Enums.user_identity_role
  }

  export type UserScalarRelationFilter = {
    is?: userWhereInput
    isNot?: userWhereInput
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

  export type Enumuser_identity_providerWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.user_identity_provider | Enumuser_identity_providerFieldRefInput<$PrismaModel>
    in?: $Enums.user_identity_provider[]
    notIn?: $Enums.user_identity_provider[]
    not?: NestedEnumuser_identity_providerWithAggregatesFilter<$PrismaModel> | $Enums.user_identity_provider
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumuser_identity_providerFilter<$PrismaModel>
    _max?: NestedEnumuser_identity_providerFilter<$PrismaModel>
  }

  export type Enumuser_identity_roleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.user_identity_role | Enumuser_identity_roleFieldRefInput<$PrismaModel>
    in?: $Enums.user_identity_role[]
    notIn?: $Enums.user_identity_role[]
    not?: NestedEnumuser_identity_roleWithAggregatesFilter<$PrismaModel> | $Enums.user_identity_role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumuser_identity_roleFilter<$PrismaModel>
    _max?: NestedEnumuser_identity_roleFilter<$PrismaModel>
  }

  export type user_identityCreateNestedOneWithoutUserInput = {
    create?: XOR<user_identityCreateWithoutUserInput, user_identityUncheckedCreateWithoutUserInput>
    connectOrCreate?: user_identityCreateOrConnectWithoutUserInput
    connect?: user_identityWhereUniqueInput
  }

  export type user_identityUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<user_identityCreateWithoutUserInput, user_identityUncheckedCreateWithoutUserInput>
    connectOrCreate?: user_identityCreateOrConnectWithoutUserInput
    connect?: user_identityWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableEnumuser_educationFieldUpdateOperationsInput = {
    set?: $Enums.user_education | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
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

  export type user_identityUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<user_identityCreateWithoutUserInput, user_identityUncheckedCreateWithoutUserInput>
    connectOrCreate?: user_identityCreateOrConnectWithoutUserInput
    upsert?: user_identityUpsertWithoutUserInput
    disconnect?: user_identityWhereInput | boolean
    delete?: user_identityWhereInput | boolean
    connect?: user_identityWhereUniqueInput
    update?: XOR<XOR<user_identityUpdateToOneWithWhereWithoutUserInput, user_identityUpdateWithoutUserInput>, user_identityUncheckedUpdateWithoutUserInput>
  }

  export type userCreateNestedOneWithoutUser_identityInput = {
    create?: XOR<userCreateWithoutUser_identityInput, userUncheckedCreateWithoutUser_identityInput>
    connectOrCreate?: userCreateOrConnectWithoutUser_identityInput
    connect?: userWhereUniqueInput
  }

  export type Enumuser_identity_providerFieldUpdateOperationsInput = {
    set?: $Enums.user_identity_provider
  }

  export type Enumuser_identity_roleFieldUpdateOperationsInput = {
    set?: $Enums.user_identity_role
  }

  export type userUpdateOneRequiredWithoutUser_identityNestedInput = {
    create?: XOR<userCreateWithoutUser_identityInput, userUncheckedCreateWithoutUser_identityInput>
    connectOrCreate?: userCreateOrConnectWithoutUser_identityInput
    upsert?: userUpsertWithoutUser_identityInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutUser_identityInput, userUpdateWithoutUser_identityInput>, userUncheckedUpdateWithoutUser_identityInput>
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

  export type NestedEnumuser_educationNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.user_education | Enumuser_educationFieldRefInput<$PrismaModel> | null
    in?: $Enums.user_education[] | null
    notIn?: $Enums.user_education[] | null
    not?: NestedEnumuser_educationNullableFilter<$PrismaModel> | $Enums.user_education | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedEnumuser_educationNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.user_education | Enumuser_educationFieldRefInput<$PrismaModel> | null
    in?: $Enums.user_education[] | null
    notIn?: $Enums.user_education[] | null
    not?: NestedEnumuser_educationNullableWithAggregatesFilter<$PrismaModel> | $Enums.user_education | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumuser_educationNullableFilter<$PrismaModel>
    _max?: NestedEnumuser_educationNullableFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumuser_identity_providerFilter<$PrismaModel = never> = {
    equals?: $Enums.user_identity_provider | Enumuser_identity_providerFieldRefInput<$PrismaModel>
    in?: $Enums.user_identity_provider[]
    notIn?: $Enums.user_identity_provider[]
    not?: NestedEnumuser_identity_providerFilter<$PrismaModel> | $Enums.user_identity_provider
  }

  export type NestedEnumuser_identity_roleFilter<$PrismaModel = never> = {
    equals?: $Enums.user_identity_role | Enumuser_identity_roleFieldRefInput<$PrismaModel>
    in?: $Enums.user_identity_role[]
    notIn?: $Enums.user_identity_role[]
    not?: NestedEnumuser_identity_roleFilter<$PrismaModel> | $Enums.user_identity_role
  }

  export type NestedEnumuser_identity_providerWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.user_identity_provider | Enumuser_identity_providerFieldRefInput<$PrismaModel>
    in?: $Enums.user_identity_provider[]
    notIn?: $Enums.user_identity_provider[]
    not?: NestedEnumuser_identity_providerWithAggregatesFilter<$PrismaModel> | $Enums.user_identity_provider
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumuser_identity_providerFilter<$PrismaModel>
    _max?: NestedEnumuser_identity_providerFilter<$PrismaModel>
  }

  export type NestedEnumuser_identity_roleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.user_identity_role | Enumuser_identity_roleFieldRefInput<$PrismaModel>
    in?: $Enums.user_identity_role[]
    notIn?: $Enums.user_identity_role[]
    not?: NestedEnumuser_identity_roleWithAggregatesFilter<$PrismaModel> | $Enums.user_identity_role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumuser_identity_roleFilter<$PrismaModel>
    _max?: NestedEnumuser_identity_roleFilter<$PrismaModel>
  }

  export type user_identityCreateWithoutUserInput = {
    email: string
    provider: $Enums.user_identity_provider
    hash?: string | null
    is_verified?: boolean
    verification_token?: string | null
    verification_token_expiration?: Date | string | null
    password_recovery_token?: string | null
    password_recovery_token_expiration?: Date | string | null
    refresh_token?: string | null
    role?: $Enums.user_identity_role
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type user_identityUncheckedCreateWithoutUserInput = {
    email: string
    provider: $Enums.user_identity_provider
    hash?: string | null
    is_verified?: boolean
    verification_token?: string | null
    verification_token_expiration?: Date | string | null
    password_recovery_token?: string | null
    password_recovery_token_expiration?: Date | string | null
    refresh_token?: string | null
    role?: $Enums.user_identity_role
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type user_identityCreateOrConnectWithoutUserInput = {
    where: user_identityWhereUniqueInput
    create: XOR<user_identityCreateWithoutUserInput, user_identityUncheckedCreateWithoutUserInput>
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
    provider?: Enumuser_identity_providerFieldUpdateOperationsInput | $Enums.user_identity_provider
    hash?: NullableStringFieldUpdateOperationsInput | string | null
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    verification_token?: NullableStringFieldUpdateOperationsInput | string | null
    verification_token_expiration?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password_recovery_token?: NullableStringFieldUpdateOperationsInput | string | null
    password_recovery_token_expiration?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    role?: Enumuser_identity_roleFieldUpdateOperationsInput | $Enums.user_identity_role
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type user_identityUncheckedUpdateWithoutUserInput = {
    email?: StringFieldUpdateOperationsInput | string
    provider?: Enumuser_identity_providerFieldUpdateOperationsInput | $Enums.user_identity_provider
    hash?: NullableStringFieldUpdateOperationsInput | string | null
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    verification_token?: NullableStringFieldUpdateOperationsInput | string | null
    verification_token_expiration?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password_recovery_token?: NullableStringFieldUpdateOperationsInput | string | null
    password_recovery_token_expiration?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    role?: Enumuser_identity_roleFieldUpdateOperationsInput | $Enums.user_identity_role
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type userCreateWithoutUser_identityInput = {
    id: string
    email: string
    full_name?: string | null
    birth_date?: Date | string | null
    education?: $Enums.user_education | null
    entry_source?: string | null
    instance?: string | null
    phone_number?: string | null
    id_line?: string | null
    id_discord?: string | null
    id_instagram?: string | null
    consent?: boolean
    is_registration_complete?: boolean
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type userUncheckedCreateWithoutUser_identityInput = {
    id: string
    email: string
    full_name?: string | null
    birth_date?: Date | string | null
    education?: $Enums.user_education | null
    entry_source?: string | null
    instance?: string | null
    phone_number?: string | null
    id_line?: string | null
    id_discord?: string | null
    id_instagram?: string | null
    consent?: boolean
    is_registration_complete?: boolean
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type userCreateOrConnectWithoutUser_identityInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutUser_identityInput, userUncheckedCreateWithoutUser_identityInput>
  }

  export type userUpsertWithoutUser_identityInput = {
    update: XOR<userUpdateWithoutUser_identityInput, userUncheckedUpdateWithoutUser_identityInput>
    create: XOR<userCreateWithoutUser_identityInput, userUncheckedCreateWithoutUser_identityInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutUser_identityInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutUser_identityInput, userUncheckedUpdateWithoutUser_identityInput>
  }

  export type userUpdateWithoutUser_identityInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    full_name?: NullableStringFieldUpdateOperationsInput | string | null
    birth_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    education?: NullableEnumuser_educationFieldUpdateOperationsInput | $Enums.user_education | null
    entry_source?: NullableStringFieldUpdateOperationsInput | string | null
    instance?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    id_line?: NullableStringFieldUpdateOperationsInput | string | null
    id_discord?: NullableStringFieldUpdateOperationsInput | string | null
    id_instagram?: NullableStringFieldUpdateOperationsInput | string | null
    consent?: BoolFieldUpdateOperationsInput | boolean
    is_registration_complete?: BoolFieldUpdateOperationsInput | boolean
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type userUncheckedUpdateWithoutUser_identityInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    full_name?: NullableStringFieldUpdateOperationsInput | string | null
    birth_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    education?: NullableEnumuser_educationFieldUpdateOperationsInput | $Enums.user_education | null
    entry_source?: NullableStringFieldUpdateOperationsInput | string | null
    instance?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    id_line?: NullableStringFieldUpdateOperationsInput | string | null
    id_discord?: NullableStringFieldUpdateOperationsInput | string | null
    id_instagram?: NullableStringFieldUpdateOperationsInput | string | null
    consent?: BoolFieldUpdateOperationsInput | boolean
    is_registration_complete?: BoolFieldUpdateOperationsInput | boolean
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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