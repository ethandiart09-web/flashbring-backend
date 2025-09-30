
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
 * Model deliveries
 * 
 */
export type deliveries = $Result.DefaultSelection<Prisma.$deliveriesPayload>
/**
 * Model drivers
 * 
 */
export type drivers = $Result.DefaultSelection<Prisma.$driversPayload>
/**
 * Model order_items
 * 
 */
export type order_items = $Result.DefaultSelection<Prisma.$order_itemsPayload>
/**
 * Model orders
 * 
 */
export type orders = $Result.DefaultSelection<Prisma.$ordersPayload>
/**
 * Model products
 * 
 */
export type products = $Result.DefaultSelection<Prisma.$productsPayload>
/**
 * Model stores
 * 
 */
export type stores = $Result.DefaultSelection<Prisma.$storesPayload>
/**
 * Model users
 * 
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Deliveries
 * const deliveries = await prisma.deliveries.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Deliveries
   * const deliveries = await prisma.deliveries.findMany()
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
   * `prisma.deliveries`: Exposes CRUD operations for the **deliveries** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Deliveries
    * const deliveries = await prisma.deliveries.findMany()
    * ```
    */
  get deliveries(): Prisma.deliveriesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.drivers`: Exposes CRUD operations for the **drivers** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Drivers
    * const drivers = await prisma.drivers.findMany()
    * ```
    */
  get drivers(): Prisma.driversDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.order_items`: Exposes CRUD operations for the **order_items** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Order_items
    * const order_items = await prisma.order_items.findMany()
    * ```
    */
  get order_items(): Prisma.order_itemsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.orders`: Exposes CRUD operations for the **orders** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Orders
    * const orders = await prisma.orders.findMany()
    * ```
    */
  get orders(): Prisma.ordersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.products`: Exposes CRUD operations for the **products** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.products.findMany()
    * ```
    */
  get products(): Prisma.productsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.stores`: Exposes CRUD operations for the **stores** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Stores
    * const stores = await prisma.stores.findMany()
    * ```
    */
  get stores(): Prisma.storesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.14.0
   * Query Engine version: 717184b7b35ea05dfa71a3236b7af656013e1e49
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
    deliveries: 'deliveries',
    drivers: 'drivers',
    order_items: 'order_items',
    orders: 'orders',
    products: 'products',
    stores: 'stores',
    users: 'users'
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
      modelProps: "deliveries" | "drivers" | "order_items" | "orders" | "products" | "stores" | "users"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      deliveries: {
        payload: Prisma.$deliveriesPayload<ExtArgs>
        fields: Prisma.deliveriesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.deliveriesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$deliveriesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.deliveriesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$deliveriesPayload>
          }
          findFirst: {
            args: Prisma.deliveriesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$deliveriesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.deliveriesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$deliveriesPayload>
          }
          findMany: {
            args: Prisma.deliveriesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$deliveriesPayload>[]
          }
          create: {
            args: Prisma.deliveriesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$deliveriesPayload>
          }
          createMany: {
            args: Prisma.deliveriesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.deliveriesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$deliveriesPayload>[]
          }
          delete: {
            args: Prisma.deliveriesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$deliveriesPayload>
          }
          update: {
            args: Prisma.deliveriesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$deliveriesPayload>
          }
          deleteMany: {
            args: Prisma.deliveriesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.deliveriesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.deliveriesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$deliveriesPayload>[]
          }
          upsert: {
            args: Prisma.deliveriesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$deliveriesPayload>
          }
          aggregate: {
            args: Prisma.DeliveriesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDeliveries>
          }
          groupBy: {
            args: Prisma.deliveriesGroupByArgs<ExtArgs>
            result: $Utils.Optional<DeliveriesGroupByOutputType>[]
          }
          count: {
            args: Prisma.deliveriesCountArgs<ExtArgs>
            result: $Utils.Optional<DeliveriesCountAggregateOutputType> | number
          }
        }
      }
      drivers: {
        payload: Prisma.$driversPayload<ExtArgs>
        fields: Prisma.driversFieldRefs
        operations: {
          findUnique: {
            args: Prisma.driversFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$driversPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.driversFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$driversPayload>
          }
          findFirst: {
            args: Prisma.driversFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$driversPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.driversFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$driversPayload>
          }
          findMany: {
            args: Prisma.driversFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$driversPayload>[]
          }
          create: {
            args: Prisma.driversCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$driversPayload>
          }
          createMany: {
            args: Prisma.driversCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.driversCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$driversPayload>[]
          }
          delete: {
            args: Prisma.driversDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$driversPayload>
          }
          update: {
            args: Prisma.driversUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$driversPayload>
          }
          deleteMany: {
            args: Prisma.driversDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.driversUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.driversUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$driversPayload>[]
          }
          upsert: {
            args: Prisma.driversUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$driversPayload>
          }
          aggregate: {
            args: Prisma.DriversAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDrivers>
          }
          groupBy: {
            args: Prisma.driversGroupByArgs<ExtArgs>
            result: $Utils.Optional<DriversGroupByOutputType>[]
          }
          count: {
            args: Prisma.driversCountArgs<ExtArgs>
            result: $Utils.Optional<DriversCountAggregateOutputType> | number
          }
        }
      }
      order_items: {
        payload: Prisma.$order_itemsPayload<ExtArgs>
        fields: Prisma.order_itemsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.order_itemsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_itemsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.order_itemsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_itemsPayload>
          }
          findFirst: {
            args: Prisma.order_itemsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_itemsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.order_itemsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_itemsPayload>
          }
          findMany: {
            args: Prisma.order_itemsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_itemsPayload>[]
          }
          create: {
            args: Prisma.order_itemsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_itemsPayload>
          }
          createMany: {
            args: Prisma.order_itemsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.order_itemsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_itemsPayload>[]
          }
          delete: {
            args: Prisma.order_itemsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_itemsPayload>
          }
          update: {
            args: Prisma.order_itemsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_itemsPayload>
          }
          deleteMany: {
            args: Prisma.order_itemsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.order_itemsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.order_itemsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_itemsPayload>[]
          }
          upsert: {
            args: Prisma.order_itemsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_itemsPayload>
          }
          aggregate: {
            args: Prisma.Order_itemsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrder_items>
          }
          groupBy: {
            args: Prisma.order_itemsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Order_itemsGroupByOutputType>[]
          }
          count: {
            args: Prisma.order_itemsCountArgs<ExtArgs>
            result: $Utils.Optional<Order_itemsCountAggregateOutputType> | number
          }
        }
      }
      orders: {
        payload: Prisma.$ordersPayload<ExtArgs>
        fields: Prisma.ordersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ordersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ordersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>
          }
          findFirst: {
            args: Prisma.ordersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ordersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>
          }
          findMany: {
            args: Prisma.ordersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>[]
          }
          create: {
            args: Prisma.ordersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>
          }
          createMany: {
            args: Prisma.ordersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ordersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>[]
          }
          delete: {
            args: Prisma.ordersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>
          }
          update: {
            args: Prisma.ordersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>
          }
          deleteMany: {
            args: Prisma.ordersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ordersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ordersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>[]
          }
          upsert: {
            args: Prisma.ordersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>
          }
          aggregate: {
            args: Prisma.OrdersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrders>
          }
          groupBy: {
            args: Prisma.ordersGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrdersGroupByOutputType>[]
          }
          count: {
            args: Prisma.ordersCountArgs<ExtArgs>
            result: $Utils.Optional<OrdersCountAggregateOutputType> | number
          }
        }
      }
      products: {
        payload: Prisma.$productsPayload<ExtArgs>
        fields: Prisma.productsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.productsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.productsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>
          }
          findFirst: {
            args: Prisma.productsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.productsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>
          }
          findMany: {
            args: Prisma.productsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>[]
          }
          create: {
            args: Prisma.productsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>
          }
          createMany: {
            args: Prisma.productsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.productsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>[]
          }
          delete: {
            args: Prisma.productsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>
          }
          update: {
            args: Prisma.productsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>
          }
          deleteMany: {
            args: Prisma.productsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.productsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.productsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>[]
          }
          upsert: {
            args: Prisma.productsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>
          }
          aggregate: {
            args: Prisma.ProductsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProducts>
          }
          groupBy: {
            args: Prisma.productsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductsGroupByOutputType>[]
          }
          count: {
            args: Prisma.productsCountArgs<ExtArgs>
            result: $Utils.Optional<ProductsCountAggregateOutputType> | number
          }
        }
      }
      stores: {
        payload: Prisma.$storesPayload<ExtArgs>
        fields: Prisma.storesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.storesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$storesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.storesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$storesPayload>
          }
          findFirst: {
            args: Prisma.storesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$storesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.storesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$storesPayload>
          }
          findMany: {
            args: Prisma.storesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$storesPayload>[]
          }
          create: {
            args: Prisma.storesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$storesPayload>
          }
          createMany: {
            args: Prisma.storesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.storesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$storesPayload>[]
          }
          delete: {
            args: Prisma.storesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$storesPayload>
          }
          update: {
            args: Prisma.storesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$storesPayload>
          }
          deleteMany: {
            args: Prisma.storesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.storesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.storesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$storesPayload>[]
          }
          upsert: {
            args: Prisma.storesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$storesPayload>
          }
          aggregate: {
            args: Prisma.StoresAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStores>
          }
          groupBy: {
            args: Prisma.storesGroupByArgs<ExtArgs>
            result: $Utils.Optional<StoresGroupByOutputType>[]
          }
          count: {
            args: Prisma.storesCountArgs<ExtArgs>
            result: $Utils.Optional<StoresCountAggregateOutputType> | number
          }
        }
      }
      users: {
        payload: Prisma.$usersPayload<ExtArgs>
        fields: Prisma.usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findFirst: {
            args: Prisma.usersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findMany: {
            args: Prisma.usersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          create: {
            args: Prisma.usersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          createMany: {
            args: Prisma.usersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.usersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          delete: {
            args: Prisma.usersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          update: {
            args: Prisma.usersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          deleteMany: {
            args: Prisma.usersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.usersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          upsert: {
            args: Prisma.usersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.usersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.usersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
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
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
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
    deliveries?: deliveriesOmit
    drivers?: driversOmit
    order_items?: order_itemsOmit
    orders?: ordersOmit
    products?: productsOmit
    stores?: storesOmit
    users?: usersOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type DriversCountOutputType
   */

  export type DriversCountOutputType = {
    deliveries: number
  }

  export type DriversCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    deliveries?: boolean | DriversCountOutputTypeCountDeliveriesArgs
  }

  // Custom InputTypes
  /**
   * DriversCountOutputType without action
   */
  export type DriversCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DriversCountOutputType
     */
    select?: DriversCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DriversCountOutputType without action
   */
  export type DriversCountOutputTypeCountDeliveriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: deliveriesWhereInput
  }


  /**
   * Count Type OrdersCountOutputType
   */

  export type OrdersCountOutputType = {
    deliveries: number
    order_items: number
  }

  export type OrdersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    deliveries?: boolean | OrdersCountOutputTypeCountDeliveriesArgs
    order_items?: boolean | OrdersCountOutputTypeCountOrder_itemsArgs
  }

  // Custom InputTypes
  /**
   * OrdersCountOutputType without action
   */
  export type OrdersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrdersCountOutputType
     */
    select?: OrdersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OrdersCountOutputType without action
   */
  export type OrdersCountOutputTypeCountDeliveriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: deliveriesWhereInput
  }

  /**
   * OrdersCountOutputType without action
   */
  export type OrdersCountOutputTypeCountOrder_itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: order_itemsWhereInput
  }


  /**
   * Count Type ProductsCountOutputType
   */

  export type ProductsCountOutputType = {
    order_items: number
  }

  export type ProductsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order_items?: boolean | ProductsCountOutputTypeCountOrder_itemsArgs
  }

  // Custom InputTypes
  /**
   * ProductsCountOutputType without action
   */
  export type ProductsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductsCountOutputType
     */
    select?: ProductsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductsCountOutputType without action
   */
  export type ProductsCountOutputTypeCountOrder_itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: order_itemsWhereInput
  }


  /**
   * Count Type StoresCountOutputType
   */

  export type StoresCountOutputType = {
    orders: number
    products: number
  }

  export type StoresCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | StoresCountOutputTypeCountOrdersArgs
    products?: boolean | StoresCountOutputTypeCountProductsArgs
  }

  // Custom InputTypes
  /**
   * StoresCountOutputType without action
   */
  export type StoresCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoresCountOutputType
     */
    select?: StoresCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StoresCountOutputType without action
   */
  export type StoresCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ordersWhereInput
  }

  /**
   * StoresCountOutputType without action
   */
  export type StoresCountOutputTypeCountProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: productsWhereInput
  }


  /**
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    orders: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | UsersCountOutputTypeCountOrdersArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ordersWhereInput
  }


  /**
   * Models
   */

  /**
   * Model deliveries
   */

  export type AggregateDeliveries = {
    _count: DeliveriesCountAggregateOutputType | null
    _avg: DeliveriesAvgAggregateOutputType | null
    _sum: DeliveriesSumAggregateOutputType | null
    _min: DeliveriesMinAggregateOutputType | null
    _max: DeliveriesMaxAggregateOutputType | null
  }

  export type DeliveriesAvgAggregateOutputType = {
    id: number | null
    order_id: number | null
    driver_id: number | null
  }

  export type DeliveriesSumAggregateOutputType = {
    id: number | null
    order_id: number | null
    driver_id: number | null
  }

  export type DeliveriesMinAggregateOutputType = {
    id: number | null
    order_id: number | null
    driver_id: number | null
    status: string | null
    created_at: Date | null
  }

  export type DeliveriesMaxAggregateOutputType = {
    id: number | null
    order_id: number | null
    driver_id: number | null
    status: string | null
    created_at: Date | null
  }

  export type DeliveriesCountAggregateOutputType = {
    id: number
    order_id: number
    driver_id: number
    status: number
    created_at: number
    _all: number
  }


  export type DeliveriesAvgAggregateInputType = {
    id?: true
    order_id?: true
    driver_id?: true
  }

  export type DeliveriesSumAggregateInputType = {
    id?: true
    order_id?: true
    driver_id?: true
  }

  export type DeliveriesMinAggregateInputType = {
    id?: true
    order_id?: true
    driver_id?: true
    status?: true
    created_at?: true
  }

  export type DeliveriesMaxAggregateInputType = {
    id?: true
    order_id?: true
    driver_id?: true
    status?: true
    created_at?: true
  }

  export type DeliveriesCountAggregateInputType = {
    id?: true
    order_id?: true
    driver_id?: true
    status?: true
    created_at?: true
    _all?: true
  }

  export type DeliveriesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which deliveries to aggregate.
     */
    where?: deliveriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of deliveries to fetch.
     */
    orderBy?: deliveriesOrderByWithRelationInput | deliveriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: deliveriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` deliveries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` deliveries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned deliveries
    **/
    _count?: true | DeliveriesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DeliveriesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DeliveriesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DeliveriesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DeliveriesMaxAggregateInputType
  }

  export type GetDeliveriesAggregateType<T extends DeliveriesAggregateArgs> = {
        [P in keyof T & keyof AggregateDeliveries]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDeliveries[P]>
      : GetScalarType<T[P], AggregateDeliveries[P]>
  }




  export type deliveriesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: deliveriesWhereInput
    orderBy?: deliveriesOrderByWithAggregationInput | deliveriesOrderByWithAggregationInput[]
    by: DeliveriesScalarFieldEnum[] | DeliveriesScalarFieldEnum
    having?: deliveriesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DeliveriesCountAggregateInputType | true
    _avg?: DeliveriesAvgAggregateInputType
    _sum?: DeliveriesSumAggregateInputType
    _min?: DeliveriesMinAggregateInputType
    _max?: DeliveriesMaxAggregateInputType
  }

  export type DeliveriesGroupByOutputType = {
    id: number
    order_id: number | null
    driver_id: number | null
    status: string | null
    created_at: Date | null
    _count: DeliveriesCountAggregateOutputType | null
    _avg: DeliveriesAvgAggregateOutputType | null
    _sum: DeliveriesSumAggregateOutputType | null
    _min: DeliveriesMinAggregateOutputType | null
    _max: DeliveriesMaxAggregateOutputType | null
  }

  type GetDeliveriesGroupByPayload<T extends deliveriesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DeliveriesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DeliveriesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DeliveriesGroupByOutputType[P]>
            : GetScalarType<T[P], DeliveriesGroupByOutputType[P]>
        }
      >
    >


  export type deliveriesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    order_id?: boolean
    driver_id?: boolean
    status?: boolean
    created_at?: boolean
    drivers?: boolean | deliveries$driversArgs<ExtArgs>
    orders?: boolean | deliveries$ordersArgs<ExtArgs>
  }, ExtArgs["result"]["deliveries"]>

  export type deliveriesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    order_id?: boolean
    driver_id?: boolean
    status?: boolean
    created_at?: boolean
    drivers?: boolean | deliveries$driversArgs<ExtArgs>
    orders?: boolean | deliveries$ordersArgs<ExtArgs>
  }, ExtArgs["result"]["deliveries"]>

  export type deliveriesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    order_id?: boolean
    driver_id?: boolean
    status?: boolean
    created_at?: boolean
    drivers?: boolean | deliveries$driversArgs<ExtArgs>
    orders?: boolean | deliveries$ordersArgs<ExtArgs>
  }, ExtArgs["result"]["deliveries"]>

  export type deliveriesSelectScalar = {
    id?: boolean
    order_id?: boolean
    driver_id?: boolean
    status?: boolean
    created_at?: boolean
  }

  export type deliveriesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "order_id" | "driver_id" | "status" | "created_at", ExtArgs["result"]["deliveries"]>
  export type deliveriesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    drivers?: boolean | deliveries$driversArgs<ExtArgs>
    orders?: boolean | deliveries$ordersArgs<ExtArgs>
  }
  export type deliveriesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    drivers?: boolean | deliveries$driversArgs<ExtArgs>
    orders?: boolean | deliveries$ordersArgs<ExtArgs>
  }
  export type deliveriesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    drivers?: boolean | deliveries$driversArgs<ExtArgs>
    orders?: boolean | deliveries$ordersArgs<ExtArgs>
  }

  export type $deliveriesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "deliveries"
    objects: {
      drivers: Prisma.$driversPayload<ExtArgs> | null
      orders: Prisma.$ordersPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      order_id: number | null
      driver_id: number | null
      status: string | null
      created_at: Date | null
    }, ExtArgs["result"]["deliveries"]>
    composites: {}
  }

  type deliveriesGetPayload<S extends boolean | null | undefined | deliveriesDefaultArgs> = $Result.GetResult<Prisma.$deliveriesPayload, S>

  type deliveriesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<deliveriesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DeliveriesCountAggregateInputType | true
    }

  export interface deliveriesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['deliveries'], meta: { name: 'deliveries' } }
    /**
     * Find zero or one Deliveries that matches the filter.
     * @param {deliveriesFindUniqueArgs} args - Arguments to find a Deliveries
     * @example
     * // Get one Deliveries
     * const deliveries = await prisma.deliveries.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends deliveriesFindUniqueArgs>(args: SelectSubset<T, deliveriesFindUniqueArgs<ExtArgs>>): Prisma__deliveriesClient<$Result.GetResult<Prisma.$deliveriesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Deliveries that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {deliveriesFindUniqueOrThrowArgs} args - Arguments to find a Deliveries
     * @example
     * // Get one Deliveries
     * const deliveries = await prisma.deliveries.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends deliveriesFindUniqueOrThrowArgs>(args: SelectSubset<T, deliveriesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__deliveriesClient<$Result.GetResult<Prisma.$deliveriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Deliveries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {deliveriesFindFirstArgs} args - Arguments to find a Deliveries
     * @example
     * // Get one Deliveries
     * const deliveries = await prisma.deliveries.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends deliveriesFindFirstArgs>(args?: SelectSubset<T, deliveriesFindFirstArgs<ExtArgs>>): Prisma__deliveriesClient<$Result.GetResult<Prisma.$deliveriesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Deliveries that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {deliveriesFindFirstOrThrowArgs} args - Arguments to find a Deliveries
     * @example
     * // Get one Deliveries
     * const deliveries = await prisma.deliveries.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends deliveriesFindFirstOrThrowArgs>(args?: SelectSubset<T, deliveriesFindFirstOrThrowArgs<ExtArgs>>): Prisma__deliveriesClient<$Result.GetResult<Prisma.$deliveriesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Deliveries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {deliveriesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Deliveries
     * const deliveries = await prisma.deliveries.findMany()
     * 
     * // Get first 10 Deliveries
     * const deliveries = await prisma.deliveries.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const deliveriesWithIdOnly = await prisma.deliveries.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends deliveriesFindManyArgs>(args?: SelectSubset<T, deliveriesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$deliveriesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Deliveries.
     * @param {deliveriesCreateArgs} args - Arguments to create a Deliveries.
     * @example
     * // Create one Deliveries
     * const Deliveries = await prisma.deliveries.create({
     *   data: {
     *     // ... data to create a Deliveries
     *   }
     * })
     * 
     */
    create<T extends deliveriesCreateArgs>(args: SelectSubset<T, deliveriesCreateArgs<ExtArgs>>): Prisma__deliveriesClient<$Result.GetResult<Prisma.$deliveriesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Deliveries.
     * @param {deliveriesCreateManyArgs} args - Arguments to create many Deliveries.
     * @example
     * // Create many Deliveries
     * const deliveries = await prisma.deliveries.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends deliveriesCreateManyArgs>(args?: SelectSubset<T, deliveriesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Deliveries and returns the data saved in the database.
     * @param {deliveriesCreateManyAndReturnArgs} args - Arguments to create many Deliveries.
     * @example
     * // Create many Deliveries
     * const deliveries = await prisma.deliveries.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Deliveries and only return the `id`
     * const deliveriesWithIdOnly = await prisma.deliveries.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends deliveriesCreateManyAndReturnArgs>(args?: SelectSubset<T, deliveriesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$deliveriesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Deliveries.
     * @param {deliveriesDeleteArgs} args - Arguments to delete one Deliveries.
     * @example
     * // Delete one Deliveries
     * const Deliveries = await prisma.deliveries.delete({
     *   where: {
     *     // ... filter to delete one Deliveries
     *   }
     * })
     * 
     */
    delete<T extends deliveriesDeleteArgs>(args: SelectSubset<T, deliveriesDeleteArgs<ExtArgs>>): Prisma__deliveriesClient<$Result.GetResult<Prisma.$deliveriesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Deliveries.
     * @param {deliveriesUpdateArgs} args - Arguments to update one Deliveries.
     * @example
     * // Update one Deliveries
     * const deliveries = await prisma.deliveries.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends deliveriesUpdateArgs>(args: SelectSubset<T, deliveriesUpdateArgs<ExtArgs>>): Prisma__deliveriesClient<$Result.GetResult<Prisma.$deliveriesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Deliveries.
     * @param {deliveriesDeleteManyArgs} args - Arguments to filter Deliveries to delete.
     * @example
     * // Delete a few Deliveries
     * const { count } = await prisma.deliveries.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends deliveriesDeleteManyArgs>(args?: SelectSubset<T, deliveriesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Deliveries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {deliveriesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Deliveries
     * const deliveries = await prisma.deliveries.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends deliveriesUpdateManyArgs>(args: SelectSubset<T, deliveriesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Deliveries and returns the data updated in the database.
     * @param {deliveriesUpdateManyAndReturnArgs} args - Arguments to update many Deliveries.
     * @example
     * // Update many Deliveries
     * const deliveries = await prisma.deliveries.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Deliveries and only return the `id`
     * const deliveriesWithIdOnly = await prisma.deliveries.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends deliveriesUpdateManyAndReturnArgs>(args: SelectSubset<T, deliveriesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$deliveriesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Deliveries.
     * @param {deliveriesUpsertArgs} args - Arguments to update or create a Deliveries.
     * @example
     * // Update or create a Deliveries
     * const deliveries = await prisma.deliveries.upsert({
     *   create: {
     *     // ... data to create a Deliveries
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Deliveries we want to update
     *   }
     * })
     */
    upsert<T extends deliveriesUpsertArgs>(args: SelectSubset<T, deliveriesUpsertArgs<ExtArgs>>): Prisma__deliveriesClient<$Result.GetResult<Prisma.$deliveriesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Deliveries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {deliveriesCountArgs} args - Arguments to filter Deliveries to count.
     * @example
     * // Count the number of Deliveries
     * const count = await prisma.deliveries.count({
     *   where: {
     *     // ... the filter for the Deliveries we want to count
     *   }
     * })
    **/
    count<T extends deliveriesCountArgs>(
      args?: Subset<T, deliveriesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DeliveriesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Deliveries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeliveriesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DeliveriesAggregateArgs>(args: Subset<T, DeliveriesAggregateArgs>): Prisma.PrismaPromise<GetDeliveriesAggregateType<T>>

    /**
     * Group by Deliveries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {deliveriesGroupByArgs} args - Group by arguments.
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
      T extends deliveriesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: deliveriesGroupByArgs['orderBy'] }
        : { orderBy?: deliveriesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, deliveriesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDeliveriesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the deliveries model
   */
  readonly fields: deliveriesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for deliveries.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__deliveriesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    drivers<T extends deliveries$driversArgs<ExtArgs> = {}>(args?: Subset<T, deliveries$driversArgs<ExtArgs>>): Prisma__driversClient<$Result.GetResult<Prisma.$driversPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    orders<T extends deliveries$ordersArgs<ExtArgs> = {}>(args?: Subset<T, deliveries$ordersArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the deliveries model
   */
  interface deliveriesFieldRefs {
    readonly id: FieldRef<"deliveries", 'Int'>
    readonly order_id: FieldRef<"deliveries", 'Int'>
    readonly driver_id: FieldRef<"deliveries", 'Int'>
    readonly status: FieldRef<"deliveries", 'String'>
    readonly created_at: FieldRef<"deliveries", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * deliveries findUnique
   */
  export type deliveriesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the deliveries
     */
    select?: deliveriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the deliveries
     */
    omit?: deliveriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: deliveriesInclude<ExtArgs> | null
    /**
     * Filter, which deliveries to fetch.
     */
    where: deliveriesWhereUniqueInput
  }

  /**
   * deliveries findUniqueOrThrow
   */
  export type deliveriesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the deliveries
     */
    select?: deliveriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the deliveries
     */
    omit?: deliveriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: deliveriesInclude<ExtArgs> | null
    /**
     * Filter, which deliveries to fetch.
     */
    where: deliveriesWhereUniqueInput
  }

  /**
   * deliveries findFirst
   */
  export type deliveriesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the deliveries
     */
    select?: deliveriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the deliveries
     */
    omit?: deliveriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: deliveriesInclude<ExtArgs> | null
    /**
     * Filter, which deliveries to fetch.
     */
    where?: deliveriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of deliveries to fetch.
     */
    orderBy?: deliveriesOrderByWithRelationInput | deliveriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for deliveries.
     */
    cursor?: deliveriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` deliveries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` deliveries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of deliveries.
     */
    distinct?: DeliveriesScalarFieldEnum | DeliveriesScalarFieldEnum[]
  }

  /**
   * deliveries findFirstOrThrow
   */
  export type deliveriesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the deliveries
     */
    select?: deliveriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the deliveries
     */
    omit?: deliveriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: deliveriesInclude<ExtArgs> | null
    /**
     * Filter, which deliveries to fetch.
     */
    where?: deliveriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of deliveries to fetch.
     */
    orderBy?: deliveriesOrderByWithRelationInput | deliveriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for deliveries.
     */
    cursor?: deliveriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` deliveries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` deliveries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of deliveries.
     */
    distinct?: DeliveriesScalarFieldEnum | DeliveriesScalarFieldEnum[]
  }

  /**
   * deliveries findMany
   */
  export type deliveriesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the deliveries
     */
    select?: deliveriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the deliveries
     */
    omit?: deliveriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: deliveriesInclude<ExtArgs> | null
    /**
     * Filter, which deliveries to fetch.
     */
    where?: deliveriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of deliveries to fetch.
     */
    orderBy?: deliveriesOrderByWithRelationInput | deliveriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing deliveries.
     */
    cursor?: deliveriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` deliveries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` deliveries.
     */
    skip?: number
    distinct?: DeliveriesScalarFieldEnum | DeliveriesScalarFieldEnum[]
  }

  /**
   * deliveries create
   */
  export type deliveriesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the deliveries
     */
    select?: deliveriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the deliveries
     */
    omit?: deliveriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: deliveriesInclude<ExtArgs> | null
    /**
     * The data needed to create a deliveries.
     */
    data?: XOR<deliveriesCreateInput, deliveriesUncheckedCreateInput>
  }

  /**
   * deliveries createMany
   */
  export type deliveriesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many deliveries.
     */
    data: deliveriesCreateManyInput | deliveriesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * deliveries createManyAndReturn
   */
  export type deliveriesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the deliveries
     */
    select?: deliveriesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the deliveries
     */
    omit?: deliveriesOmit<ExtArgs> | null
    /**
     * The data used to create many deliveries.
     */
    data: deliveriesCreateManyInput | deliveriesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: deliveriesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * deliveries update
   */
  export type deliveriesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the deliveries
     */
    select?: deliveriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the deliveries
     */
    omit?: deliveriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: deliveriesInclude<ExtArgs> | null
    /**
     * The data needed to update a deliveries.
     */
    data: XOR<deliveriesUpdateInput, deliveriesUncheckedUpdateInput>
    /**
     * Choose, which deliveries to update.
     */
    where: deliveriesWhereUniqueInput
  }

  /**
   * deliveries updateMany
   */
  export type deliveriesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update deliveries.
     */
    data: XOR<deliveriesUpdateManyMutationInput, deliveriesUncheckedUpdateManyInput>
    /**
     * Filter which deliveries to update
     */
    where?: deliveriesWhereInput
    /**
     * Limit how many deliveries to update.
     */
    limit?: number
  }

  /**
   * deliveries updateManyAndReturn
   */
  export type deliveriesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the deliveries
     */
    select?: deliveriesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the deliveries
     */
    omit?: deliveriesOmit<ExtArgs> | null
    /**
     * The data used to update deliveries.
     */
    data: XOR<deliveriesUpdateManyMutationInput, deliveriesUncheckedUpdateManyInput>
    /**
     * Filter which deliveries to update
     */
    where?: deliveriesWhereInput
    /**
     * Limit how many deliveries to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: deliveriesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * deliveries upsert
   */
  export type deliveriesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the deliveries
     */
    select?: deliveriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the deliveries
     */
    omit?: deliveriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: deliveriesInclude<ExtArgs> | null
    /**
     * The filter to search for the deliveries to update in case it exists.
     */
    where: deliveriesWhereUniqueInput
    /**
     * In case the deliveries found by the `where` argument doesn't exist, create a new deliveries with this data.
     */
    create: XOR<deliveriesCreateInput, deliveriesUncheckedCreateInput>
    /**
     * In case the deliveries was found with the provided `where` argument, update it with this data.
     */
    update: XOR<deliveriesUpdateInput, deliveriesUncheckedUpdateInput>
  }

  /**
   * deliveries delete
   */
  export type deliveriesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the deliveries
     */
    select?: deliveriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the deliveries
     */
    omit?: deliveriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: deliveriesInclude<ExtArgs> | null
    /**
     * Filter which deliveries to delete.
     */
    where: deliveriesWhereUniqueInput
  }

  /**
   * deliveries deleteMany
   */
  export type deliveriesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which deliveries to delete
     */
    where?: deliveriesWhereInput
    /**
     * Limit how many deliveries to delete.
     */
    limit?: number
  }

  /**
   * deliveries.drivers
   */
  export type deliveries$driversArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the drivers
     */
    select?: driversSelect<ExtArgs> | null
    /**
     * Omit specific fields from the drivers
     */
    omit?: driversOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: driversInclude<ExtArgs> | null
    where?: driversWhereInput
  }

  /**
   * deliveries.orders
   */
  export type deliveries$ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    where?: ordersWhereInput
  }

  /**
   * deliveries without action
   */
  export type deliveriesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the deliveries
     */
    select?: deliveriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the deliveries
     */
    omit?: deliveriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: deliveriesInclude<ExtArgs> | null
  }


  /**
   * Model drivers
   */

  export type AggregateDrivers = {
    _count: DriversCountAggregateOutputType | null
    _avg: DriversAvgAggregateOutputType | null
    _sum: DriversSumAggregateOutputType | null
    _min: DriversMinAggregateOutputType | null
    _max: DriversMaxAggregateOutputType | null
  }

  export type DriversAvgAggregateOutputType = {
    id: number | null
  }

  export type DriversSumAggregateOutputType = {
    id: number | null
  }

  export type DriversMinAggregateOutputType = {
    id: number | null
    name: string | null
    phone: string | null
    vehicle_type: string | null
    created_at: Date | null
    is_available: boolean | null
  }

  export type DriversMaxAggregateOutputType = {
    id: number | null
    name: string | null
    phone: string | null
    vehicle_type: string | null
    created_at: Date | null
    is_available: boolean | null
  }

  export type DriversCountAggregateOutputType = {
    id: number
    name: number
    phone: number
    vehicle_type: number
    created_at: number
    is_available: number
    _all: number
  }


  export type DriversAvgAggregateInputType = {
    id?: true
  }

  export type DriversSumAggregateInputType = {
    id?: true
  }

  export type DriversMinAggregateInputType = {
    id?: true
    name?: true
    phone?: true
    vehicle_type?: true
    created_at?: true
    is_available?: true
  }

  export type DriversMaxAggregateInputType = {
    id?: true
    name?: true
    phone?: true
    vehicle_type?: true
    created_at?: true
    is_available?: true
  }

  export type DriversCountAggregateInputType = {
    id?: true
    name?: true
    phone?: true
    vehicle_type?: true
    created_at?: true
    is_available?: true
    _all?: true
  }

  export type DriversAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which drivers to aggregate.
     */
    where?: driversWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of drivers to fetch.
     */
    orderBy?: driversOrderByWithRelationInput | driversOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: driversWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` drivers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` drivers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned drivers
    **/
    _count?: true | DriversCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DriversAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DriversSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DriversMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DriversMaxAggregateInputType
  }

  export type GetDriversAggregateType<T extends DriversAggregateArgs> = {
        [P in keyof T & keyof AggregateDrivers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDrivers[P]>
      : GetScalarType<T[P], AggregateDrivers[P]>
  }




  export type driversGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: driversWhereInput
    orderBy?: driversOrderByWithAggregationInput | driversOrderByWithAggregationInput[]
    by: DriversScalarFieldEnum[] | DriversScalarFieldEnum
    having?: driversScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DriversCountAggregateInputType | true
    _avg?: DriversAvgAggregateInputType
    _sum?: DriversSumAggregateInputType
    _min?: DriversMinAggregateInputType
    _max?: DriversMaxAggregateInputType
  }

  export type DriversGroupByOutputType = {
    id: number
    name: string
    phone: string
    vehicle_type: string | null
    created_at: Date | null
    is_available: boolean | null
    _count: DriversCountAggregateOutputType | null
    _avg: DriversAvgAggregateOutputType | null
    _sum: DriversSumAggregateOutputType | null
    _min: DriversMinAggregateOutputType | null
    _max: DriversMaxAggregateOutputType | null
  }

  type GetDriversGroupByPayload<T extends driversGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DriversGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DriversGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DriversGroupByOutputType[P]>
            : GetScalarType<T[P], DriversGroupByOutputType[P]>
        }
      >
    >


  export type driversSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    phone?: boolean
    vehicle_type?: boolean
    created_at?: boolean
    is_available?: boolean
    deliveries?: boolean | drivers$deliveriesArgs<ExtArgs>
    _count?: boolean | DriversCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["drivers"]>

  export type driversSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    phone?: boolean
    vehicle_type?: boolean
    created_at?: boolean
    is_available?: boolean
  }, ExtArgs["result"]["drivers"]>

  export type driversSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    phone?: boolean
    vehicle_type?: boolean
    created_at?: boolean
    is_available?: boolean
  }, ExtArgs["result"]["drivers"]>

  export type driversSelectScalar = {
    id?: boolean
    name?: boolean
    phone?: boolean
    vehicle_type?: boolean
    created_at?: boolean
    is_available?: boolean
  }

  export type driversOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "phone" | "vehicle_type" | "created_at" | "is_available", ExtArgs["result"]["drivers"]>
  export type driversInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    deliveries?: boolean | drivers$deliveriesArgs<ExtArgs>
    _count?: boolean | DriversCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type driversIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type driversIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $driversPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "drivers"
    objects: {
      deliveries: Prisma.$deliveriesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      phone: string
      vehicle_type: string | null
      created_at: Date | null
      is_available: boolean | null
    }, ExtArgs["result"]["drivers"]>
    composites: {}
  }

  type driversGetPayload<S extends boolean | null | undefined | driversDefaultArgs> = $Result.GetResult<Prisma.$driversPayload, S>

  type driversCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<driversFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DriversCountAggregateInputType | true
    }

  export interface driversDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['drivers'], meta: { name: 'drivers' } }
    /**
     * Find zero or one Drivers that matches the filter.
     * @param {driversFindUniqueArgs} args - Arguments to find a Drivers
     * @example
     * // Get one Drivers
     * const drivers = await prisma.drivers.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends driversFindUniqueArgs>(args: SelectSubset<T, driversFindUniqueArgs<ExtArgs>>): Prisma__driversClient<$Result.GetResult<Prisma.$driversPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Drivers that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {driversFindUniqueOrThrowArgs} args - Arguments to find a Drivers
     * @example
     * // Get one Drivers
     * const drivers = await prisma.drivers.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends driversFindUniqueOrThrowArgs>(args: SelectSubset<T, driversFindUniqueOrThrowArgs<ExtArgs>>): Prisma__driversClient<$Result.GetResult<Prisma.$driversPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Drivers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {driversFindFirstArgs} args - Arguments to find a Drivers
     * @example
     * // Get one Drivers
     * const drivers = await prisma.drivers.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends driversFindFirstArgs>(args?: SelectSubset<T, driversFindFirstArgs<ExtArgs>>): Prisma__driversClient<$Result.GetResult<Prisma.$driversPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Drivers that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {driversFindFirstOrThrowArgs} args - Arguments to find a Drivers
     * @example
     * // Get one Drivers
     * const drivers = await prisma.drivers.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends driversFindFirstOrThrowArgs>(args?: SelectSubset<T, driversFindFirstOrThrowArgs<ExtArgs>>): Prisma__driversClient<$Result.GetResult<Prisma.$driversPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Drivers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {driversFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Drivers
     * const drivers = await prisma.drivers.findMany()
     * 
     * // Get first 10 Drivers
     * const drivers = await prisma.drivers.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const driversWithIdOnly = await prisma.drivers.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends driversFindManyArgs>(args?: SelectSubset<T, driversFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$driversPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Drivers.
     * @param {driversCreateArgs} args - Arguments to create a Drivers.
     * @example
     * // Create one Drivers
     * const Drivers = await prisma.drivers.create({
     *   data: {
     *     // ... data to create a Drivers
     *   }
     * })
     * 
     */
    create<T extends driversCreateArgs>(args: SelectSubset<T, driversCreateArgs<ExtArgs>>): Prisma__driversClient<$Result.GetResult<Prisma.$driversPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Drivers.
     * @param {driversCreateManyArgs} args - Arguments to create many Drivers.
     * @example
     * // Create many Drivers
     * const drivers = await prisma.drivers.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends driversCreateManyArgs>(args?: SelectSubset<T, driversCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Drivers and returns the data saved in the database.
     * @param {driversCreateManyAndReturnArgs} args - Arguments to create many Drivers.
     * @example
     * // Create many Drivers
     * const drivers = await prisma.drivers.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Drivers and only return the `id`
     * const driversWithIdOnly = await prisma.drivers.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends driversCreateManyAndReturnArgs>(args?: SelectSubset<T, driversCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$driversPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Drivers.
     * @param {driversDeleteArgs} args - Arguments to delete one Drivers.
     * @example
     * // Delete one Drivers
     * const Drivers = await prisma.drivers.delete({
     *   where: {
     *     // ... filter to delete one Drivers
     *   }
     * })
     * 
     */
    delete<T extends driversDeleteArgs>(args: SelectSubset<T, driversDeleteArgs<ExtArgs>>): Prisma__driversClient<$Result.GetResult<Prisma.$driversPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Drivers.
     * @param {driversUpdateArgs} args - Arguments to update one Drivers.
     * @example
     * // Update one Drivers
     * const drivers = await prisma.drivers.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends driversUpdateArgs>(args: SelectSubset<T, driversUpdateArgs<ExtArgs>>): Prisma__driversClient<$Result.GetResult<Prisma.$driversPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Drivers.
     * @param {driversDeleteManyArgs} args - Arguments to filter Drivers to delete.
     * @example
     * // Delete a few Drivers
     * const { count } = await prisma.drivers.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends driversDeleteManyArgs>(args?: SelectSubset<T, driversDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Drivers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {driversUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Drivers
     * const drivers = await prisma.drivers.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends driversUpdateManyArgs>(args: SelectSubset<T, driversUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Drivers and returns the data updated in the database.
     * @param {driversUpdateManyAndReturnArgs} args - Arguments to update many Drivers.
     * @example
     * // Update many Drivers
     * const drivers = await prisma.drivers.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Drivers and only return the `id`
     * const driversWithIdOnly = await prisma.drivers.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends driversUpdateManyAndReturnArgs>(args: SelectSubset<T, driversUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$driversPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Drivers.
     * @param {driversUpsertArgs} args - Arguments to update or create a Drivers.
     * @example
     * // Update or create a Drivers
     * const drivers = await prisma.drivers.upsert({
     *   create: {
     *     // ... data to create a Drivers
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Drivers we want to update
     *   }
     * })
     */
    upsert<T extends driversUpsertArgs>(args: SelectSubset<T, driversUpsertArgs<ExtArgs>>): Prisma__driversClient<$Result.GetResult<Prisma.$driversPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Drivers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {driversCountArgs} args - Arguments to filter Drivers to count.
     * @example
     * // Count the number of Drivers
     * const count = await prisma.drivers.count({
     *   where: {
     *     // ... the filter for the Drivers we want to count
     *   }
     * })
    **/
    count<T extends driversCountArgs>(
      args?: Subset<T, driversCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DriversCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Drivers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DriversAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DriversAggregateArgs>(args: Subset<T, DriversAggregateArgs>): Prisma.PrismaPromise<GetDriversAggregateType<T>>

    /**
     * Group by Drivers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {driversGroupByArgs} args - Group by arguments.
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
      T extends driversGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: driversGroupByArgs['orderBy'] }
        : { orderBy?: driversGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, driversGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDriversGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the drivers model
   */
  readonly fields: driversFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for drivers.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__driversClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    deliveries<T extends drivers$deliveriesArgs<ExtArgs> = {}>(args?: Subset<T, drivers$deliveriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$deliveriesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the drivers model
   */
  interface driversFieldRefs {
    readonly id: FieldRef<"drivers", 'Int'>
    readonly name: FieldRef<"drivers", 'String'>
    readonly phone: FieldRef<"drivers", 'String'>
    readonly vehicle_type: FieldRef<"drivers", 'String'>
    readonly created_at: FieldRef<"drivers", 'DateTime'>
    readonly is_available: FieldRef<"drivers", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * drivers findUnique
   */
  export type driversFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the drivers
     */
    select?: driversSelect<ExtArgs> | null
    /**
     * Omit specific fields from the drivers
     */
    omit?: driversOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: driversInclude<ExtArgs> | null
    /**
     * Filter, which drivers to fetch.
     */
    where: driversWhereUniqueInput
  }

  /**
   * drivers findUniqueOrThrow
   */
  export type driversFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the drivers
     */
    select?: driversSelect<ExtArgs> | null
    /**
     * Omit specific fields from the drivers
     */
    omit?: driversOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: driversInclude<ExtArgs> | null
    /**
     * Filter, which drivers to fetch.
     */
    where: driversWhereUniqueInput
  }

  /**
   * drivers findFirst
   */
  export type driversFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the drivers
     */
    select?: driversSelect<ExtArgs> | null
    /**
     * Omit specific fields from the drivers
     */
    omit?: driversOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: driversInclude<ExtArgs> | null
    /**
     * Filter, which drivers to fetch.
     */
    where?: driversWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of drivers to fetch.
     */
    orderBy?: driversOrderByWithRelationInput | driversOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for drivers.
     */
    cursor?: driversWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` drivers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` drivers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of drivers.
     */
    distinct?: DriversScalarFieldEnum | DriversScalarFieldEnum[]
  }

  /**
   * drivers findFirstOrThrow
   */
  export type driversFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the drivers
     */
    select?: driversSelect<ExtArgs> | null
    /**
     * Omit specific fields from the drivers
     */
    omit?: driversOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: driversInclude<ExtArgs> | null
    /**
     * Filter, which drivers to fetch.
     */
    where?: driversWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of drivers to fetch.
     */
    orderBy?: driversOrderByWithRelationInput | driversOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for drivers.
     */
    cursor?: driversWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` drivers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` drivers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of drivers.
     */
    distinct?: DriversScalarFieldEnum | DriversScalarFieldEnum[]
  }

  /**
   * drivers findMany
   */
  export type driversFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the drivers
     */
    select?: driversSelect<ExtArgs> | null
    /**
     * Omit specific fields from the drivers
     */
    omit?: driversOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: driversInclude<ExtArgs> | null
    /**
     * Filter, which drivers to fetch.
     */
    where?: driversWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of drivers to fetch.
     */
    orderBy?: driversOrderByWithRelationInput | driversOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing drivers.
     */
    cursor?: driversWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` drivers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` drivers.
     */
    skip?: number
    distinct?: DriversScalarFieldEnum | DriversScalarFieldEnum[]
  }

  /**
   * drivers create
   */
  export type driversCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the drivers
     */
    select?: driversSelect<ExtArgs> | null
    /**
     * Omit specific fields from the drivers
     */
    omit?: driversOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: driversInclude<ExtArgs> | null
    /**
     * The data needed to create a drivers.
     */
    data: XOR<driversCreateInput, driversUncheckedCreateInput>
  }

  /**
   * drivers createMany
   */
  export type driversCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many drivers.
     */
    data: driversCreateManyInput | driversCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * drivers createManyAndReturn
   */
  export type driversCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the drivers
     */
    select?: driversSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the drivers
     */
    omit?: driversOmit<ExtArgs> | null
    /**
     * The data used to create many drivers.
     */
    data: driversCreateManyInput | driversCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * drivers update
   */
  export type driversUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the drivers
     */
    select?: driversSelect<ExtArgs> | null
    /**
     * Omit specific fields from the drivers
     */
    omit?: driversOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: driversInclude<ExtArgs> | null
    /**
     * The data needed to update a drivers.
     */
    data: XOR<driversUpdateInput, driversUncheckedUpdateInput>
    /**
     * Choose, which drivers to update.
     */
    where: driversWhereUniqueInput
  }

  /**
   * drivers updateMany
   */
  export type driversUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update drivers.
     */
    data: XOR<driversUpdateManyMutationInput, driversUncheckedUpdateManyInput>
    /**
     * Filter which drivers to update
     */
    where?: driversWhereInput
    /**
     * Limit how many drivers to update.
     */
    limit?: number
  }

  /**
   * drivers updateManyAndReturn
   */
  export type driversUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the drivers
     */
    select?: driversSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the drivers
     */
    omit?: driversOmit<ExtArgs> | null
    /**
     * The data used to update drivers.
     */
    data: XOR<driversUpdateManyMutationInput, driversUncheckedUpdateManyInput>
    /**
     * Filter which drivers to update
     */
    where?: driversWhereInput
    /**
     * Limit how many drivers to update.
     */
    limit?: number
  }

  /**
   * drivers upsert
   */
  export type driversUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the drivers
     */
    select?: driversSelect<ExtArgs> | null
    /**
     * Omit specific fields from the drivers
     */
    omit?: driversOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: driversInclude<ExtArgs> | null
    /**
     * The filter to search for the drivers to update in case it exists.
     */
    where: driversWhereUniqueInput
    /**
     * In case the drivers found by the `where` argument doesn't exist, create a new drivers with this data.
     */
    create: XOR<driversCreateInput, driversUncheckedCreateInput>
    /**
     * In case the drivers was found with the provided `where` argument, update it with this data.
     */
    update: XOR<driversUpdateInput, driversUncheckedUpdateInput>
  }

  /**
   * drivers delete
   */
  export type driversDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the drivers
     */
    select?: driversSelect<ExtArgs> | null
    /**
     * Omit specific fields from the drivers
     */
    omit?: driversOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: driversInclude<ExtArgs> | null
    /**
     * Filter which drivers to delete.
     */
    where: driversWhereUniqueInput
  }

  /**
   * drivers deleteMany
   */
  export type driversDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which drivers to delete
     */
    where?: driversWhereInput
    /**
     * Limit how many drivers to delete.
     */
    limit?: number
  }

  /**
   * drivers.deliveries
   */
  export type drivers$deliveriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the deliveries
     */
    select?: deliveriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the deliveries
     */
    omit?: deliveriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: deliveriesInclude<ExtArgs> | null
    where?: deliveriesWhereInput
    orderBy?: deliveriesOrderByWithRelationInput | deliveriesOrderByWithRelationInput[]
    cursor?: deliveriesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DeliveriesScalarFieldEnum | DeliveriesScalarFieldEnum[]
  }

  /**
   * drivers without action
   */
  export type driversDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the drivers
     */
    select?: driversSelect<ExtArgs> | null
    /**
     * Omit specific fields from the drivers
     */
    omit?: driversOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: driversInclude<ExtArgs> | null
  }


  /**
   * Model order_items
   */

  export type AggregateOrder_items = {
    _count: Order_itemsCountAggregateOutputType | null
    _avg: Order_itemsAvgAggregateOutputType | null
    _sum: Order_itemsSumAggregateOutputType | null
    _min: Order_itemsMinAggregateOutputType | null
    _max: Order_itemsMaxAggregateOutputType | null
  }

  export type Order_itemsAvgAggregateOutputType = {
    id: number | null
    order_id: number | null
    product_id: number | null
    quantity: number | null
    price: Decimal | null
  }

  export type Order_itemsSumAggregateOutputType = {
    id: number | null
    order_id: number | null
    product_id: number | null
    quantity: number | null
    price: Decimal | null
  }

  export type Order_itemsMinAggregateOutputType = {
    id: number | null
    order_id: number | null
    product_id: number | null
    quantity: number | null
    price: Decimal | null
  }

  export type Order_itemsMaxAggregateOutputType = {
    id: number | null
    order_id: number | null
    product_id: number | null
    quantity: number | null
    price: Decimal | null
  }

  export type Order_itemsCountAggregateOutputType = {
    id: number
    order_id: number
    product_id: number
    quantity: number
    price: number
    _all: number
  }


  export type Order_itemsAvgAggregateInputType = {
    id?: true
    order_id?: true
    product_id?: true
    quantity?: true
    price?: true
  }

  export type Order_itemsSumAggregateInputType = {
    id?: true
    order_id?: true
    product_id?: true
    quantity?: true
    price?: true
  }

  export type Order_itemsMinAggregateInputType = {
    id?: true
    order_id?: true
    product_id?: true
    quantity?: true
    price?: true
  }

  export type Order_itemsMaxAggregateInputType = {
    id?: true
    order_id?: true
    product_id?: true
    quantity?: true
    price?: true
  }

  export type Order_itemsCountAggregateInputType = {
    id?: true
    order_id?: true
    product_id?: true
    quantity?: true
    price?: true
    _all?: true
  }

  export type Order_itemsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which order_items to aggregate.
     */
    where?: order_itemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of order_items to fetch.
     */
    orderBy?: order_itemsOrderByWithRelationInput | order_itemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: order_itemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` order_items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` order_items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned order_items
    **/
    _count?: true | Order_itemsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Order_itemsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Order_itemsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Order_itemsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Order_itemsMaxAggregateInputType
  }

  export type GetOrder_itemsAggregateType<T extends Order_itemsAggregateArgs> = {
        [P in keyof T & keyof AggregateOrder_items]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrder_items[P]>
      : GetScalarType<T[P], AggregateOrder_items[P]>
  }




  export type order_itemsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: order_itemsWhereInput
    orderBy?: order_itemsOrderByWithAggregationInput | order_itemsOrderByWithAggregationInput[]
    by: Order_itemsScalarFieldEnum[] | Order_itemsScalarFieldEnum
    having?: order_itemsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Order_itemsCountAggregateInputType | true
    _avg?: Order_itemsAvgAggregateInputType
    _sum?: Order_itemsSumAggregateInputType
    _min?: Order_itemsMinAggregateInputType
    _max?: Order_itemsMaxAggregateInputType
  }

  export type Order_itemsGroupByOutputType = {
    id: number
    order_id: number | null
    product_id: number | null
    quantity: number
    price: Decimal
    _count: Order_itemsCountAggregateOutputType | null
    _avg: Order_itemsAvgAggregateOutputType | null
    _sum: Order_itemsSumAggregateOutputType | null
    _min: Order_itemsMinAggregateOutputType | null
    _max: Order_itemsMaxAggregateOutputType | null
  }

  type GetOrder_itemsGroupByPayload<T extends order_itemsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Order_itemsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Order_itemsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Order_itemsGroupByOutputType[P]>
            : GetScalarType<T[P], Order_itemsGroupByOutputType[P]>
        }
      >
    >


  export type order_itemsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    order_id?: boolean
    product_id?: boolean
    quantity?: boolean
    price?: boolean
    orders?: boolean | order_items$ordersArgs<ExtArgs>
    products?: boolean | order_items$productsArgs<ExtArgs>
  }, ExtArgs["result"]["order_items"]>

  export type order_itemsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    order_id?: boolean
    product_id?: boolean
    quantity?: boolean
    price?: boolean
    orders?: boolean | order_items$ordersArgs<ExtArgs>
    products?: boolean | order_items$productsArgs<ExtArgs>
  }, ExtArgs["result"]["order_items"]>

  export type order_itemsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    order_id?: boolean
    product_id?: boolean
    quantity?: boolean
    price?: boolean
    orders?: boolean | order_items$ordersArgs<ExtArgs>
    products?: boolean | order_items$productsArgs<ExtArgs>
  }, ExtArgs["result"]["order_items"]>

  export type order_itemsSelectScalar = {
    id?: boolean
    order_id?: boolean
    product_id?: boolean
    quantity?: boolean
    price?: boolean
  }

  export type order_itemsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "order_id" | "product_id" | "quantity" | "price", ExtArgs["result"]["order_items"]>
  export type order_itemsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | order_items$ordersArgs<ExtArgs>
    products?: boolean | order_items$productsArgs<ExtArgs>
  }
  export type order_itemsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | order_items$ordersArgs<ExtArgs>
    products?: boolean | order_items$productsArgs<ExtArgs>
  }
  export type order_itemsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | order_items$ordersArgs<ExtArgs>
    products?: boolean | order_items$productsArgs<ExtArgs>
  }

  export type $order_itemsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "order_items"
    objects: {
      orders: Prisma.$ordersPayload<ExtArgs> | null
      products: Prisma.$productsPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      order_id: number | null
      product_id: number | null
      quantity: number
      price: Prisma.Decimal
    }, ExtArgs["result"]["order_items"]>
    composites: {}
  }

  type order_itemsGetPayload<S extends boolean | null | undefined | order_itemsDefaultArgs> = $Result.GetResult<Prisma.$order_itemsPayload, S>

  type order_itemsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<order_itemsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Order_itemsCountAggregateInputType | true
    }

  export interface order_itemsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['order_items'], meta: { name: 'order_items' } }
    /**
     * Find zero or one Order_items that matches the filter.
     * @param {order_itemsFindUniqueArgs} args - Arguments to find a Order_items
     * @example
     * // Get one Order_items
     * const order_items = await prisma.order_items.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends order_itemsFindUniqueArgs>(args: SelectSubset<T, order_itemsFindUniqueArgs<ExtArgs>>): Prisma__order_itemsClient<$Result.GetResult<Prisma.$order_itemsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Order_items that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {order_itemsFindUniqueOrThrowArgs} args - Arguments to find a Order_items
     * @example
     * // Get one Order_items
     * const order_items = await prisma.order_items.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends order_itemsFindUniqueOrThrowArgs>(args: SelectSubset<T, order_itemsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__order_itemsClient<$Result.GetResult<Prisma.$order_itemsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Order_items that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {order_itemsFindFirstArgs} args - Arguments to find a Order_items
     * @example
     * // Get one Order_items
     * const order_items = await prisma.order_items.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends order_itemsFindFirstArgs>(args?: SelectSubset<T, order_itemsFindFirstArgs<ExtArgs>>): Prisma__order_itemsClient<$Result.GetResult<Prisma.$order_itemsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Order_items that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {order_itemsFindFirstOrThrowArgs} args - Arguments to find a Order_items
     * @example
     * // Get one Order_items
     * const order_items = await prisma.order_items.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends order_itemsFindFirstOrThrowArgs>(args?: SelectSubset<T, order_itemsFindFirstOrThrowArgs<ExtArgs>>): Prisma__order_itemsClient<$Result.GetResult<Prisma.$order_itemsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Order_items that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {order_itemsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Order_items
     * const order_items = await prisma.order_items.findMany()
     * 
     * // Get first 10 Order_items
     * const order_items = await prisma.order_items.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const order_itemsWithIdOnly = await prisma.order_items.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends order_itemsFindManyArgs>(args?: SelectSubset<T, order_itemsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$order_itemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Order_items.
     * @param {order_itemsCreateArgs} args - Arguments to create a Order_items.
     * @example
     * // Create one Order_items
     * const Order_items = await prisma.order_items.create({
     *   data: {
     *     // ... data to create a Order_items
     *   }
     * })
     * 
     */
    create<T extends order_itemsCreateArgs>(args: SelectSubset<T, order_itemsCreateArgs<ExtArgs>>): Prisma__order_itemsClient<$Result.GetResult<Prisma.$order_itemsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Order_items.
     * @param {order_itemsCreateManyArgs} args - Arguments to create many Order_items.
     * @example
     * // Create many Order_items
     * const order_items = await prisma.order_items.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends order_itemsCreateManyArgs>(args?: SelectSubset<T, order_itemsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Order_items and returns the data saved in the database.
     * @param {order_itemsCreateManyAndReturnArgs} args - Arguments to create many Order_items.
     * @example
     * // Create many Order_items
     * const order_items = await prisma.order_items.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Order_items and only return the `id`
     * const order_itemsWithIdOnly = await prisma.order_items.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends order_itemsCreateManyAndReturnArgs>(args?: SelectSubset<T, order_itemsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$order_itemsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Order_items.
     * @param {order_itemsDeleteArgs} args - Arguments to delete one Order_items.
     * @example
     * // Delete one Order_items
     * const Order_items = await prisma.order_items.delete({
     *   where: {
     *     // ... filter to delete one Order_items
     *   }
     * })
     * 
     */
    delete<T extends order_itemsDeleteArgs>(args: SelectSubset<T, order_itemsDeleteArgs<ExtArgs>>): Prisma__order_itemsClient<$Result.GetResult<Prisma.$order_itemsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Order_items.
     * @param {order_itemsUpdateArgs} args - Arguments to update one Order_items.
     * @example
     * // Update one Order_items
     * const order_items = await prisma.order_items.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends order_itemsUpdateArgs>(args: SelectSubset<T, order_itemsUpdateArgs<ExtArgs>>): Prisma__order_itemsClient<$Result.GetResult<Prisma.$order_itemsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Order_items.
     * @param {order_itemsDeleteManyArgs} args - Arguments to filter Order_items to delete.
     * @example
     * // Delete a few Order_items
     * const { count } = await prisma.order_items.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends order_itemsDeleteManyArgs>(args?: SelectSubset<T, order_itemsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Order_items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {order_itemsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Order_items
     * const order_items = await prisma.order_items.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends order_itemsUpdateManyArgs>(args: SelectSubset<T, order_itemsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Order_items and returns the data updated in the database.
     * @param {order_itemsUpdateManyAndReturnArgs} args - Arguments to update many Order_items.
     * @example
     * // Update many Order_items
     * const order_items = await prisma.order_items.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Order_items and only return the `id`
     * const order_itemsWithIdOnly = await prisma.order_items.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends order_itemsUpdateManyAndReturnArgs>(args: SelectSubset<T, order_itemsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$order_itemsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Order_items.
     * @param {order_itemsUpsertArgs} args - Arguments to update or create a Order_items.
     * @example
     * // Update or create a Order_items
     * const order_items = await prisma.order_items.upsert({
     *   create: {
     *     // ... data to create a Order_items
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Order_items we want to update
     *   }
     * })
     */
    upsert<T extends order_itemsUpsertArgs>(args: SelectSubset<T, order_itemsUpsertArgs<ExtArgs>>): Prisma__order_itemsClient<$Result.GetResult<Prisma.$order_itemsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Order_items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {order_itemsCountArgs} args - Arguments to filter Order_items to count.
     * @example
     * // Count the number of Order_items
     * const count = await prisma.order_items.count({
     *   where: {
     *     // ... the filter for the Order_items we want to count
     *   }
     * })
    **/
    count<T extends order_itemsCountArgs>(
      args?: Subset<T, order_itemsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Order_itemsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Order_items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Order_itemsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Order_itemsAggregateArgs>(args: Subset<T, Order_itemsAggregateArgs>): Prisma.PrismaPromise<GetOrder_itemsAggregateType<T>>

    /**
     * Group by Order_items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {order_itemsGroupByArgs} args - Group by arguments.
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
      T extends order_itemsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: order_itemsGroupByArgs['orderBy'] }
        : { orderBy?: order_itemsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, order_itemsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrder_itemsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the order_items model
   */
  readonly fields: order_itemsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for order_items.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__order_itemsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    orders<T extends order_items$ordersArgs<ExtArgs> = {}>(args?: Subset<T, order_items$ordersArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    products<T extends order_items$productsArgs<ExtArgs> = {}>(args?: Subset<T, order_items$productsArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the order_items model
   */
  interface order_itemsFieldRefs {
    readonly id: FieldRef<"order_items", 'Int'>
    readonly order_id: FieldRef<"order_items", 'Int'>
    readonly product_id: FieldRef<"order_items", 'Int'>
    readonly quantity: FieldRef<"order_items", 'Int'>
    readonly price: FieldRef<"order_items", 'Decimal'>
  }
    

  // Custom InputTypes
  /**
   * order_items findUnique
   */
  export type order_itemsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_items
     */
    select?: order_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_items
     */
    omit?: order_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_itemsInclude<ExtArgs> | null
    /**
     * Filter, which order_items to fetch.
     */
    where: order_itemsWhereUniqueInput
  }

  /**
   * order_items findUniqueOrThrow
   */
  export type order_itemsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_items
     */
    select?: order_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_items
     */
    omit?: order_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_itemsInclude<ExtArgs> | null
    /**
     * Filter, which order_items to fetch.
     */
    where: order_itemsWhereUniqueInput
  }

  /**
   * order_items findFirst
   */
  export type order_itemsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_items
     */
    select?: order_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_items
     */
    omit?: order_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_itemsInclude<ExtArgs> | null
    /**
     * Filter, which order_items to fetch.
     */
    where?: order_itemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of order_items to fetch.
     */
    orderBy?: order_itemsOrderByWithRelationInput | order_itemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for order_items.
     */
    cursor?: order_itemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` order_items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` order_items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of order_items.
     */
    distinct?: Order_itemsScalarFieldEnum | Order_itemsScalarFieldEnum[]
  }

  /**
   * order_items findFirstOrThrow
   */
  export type order_itemsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_items
     */
    select?: order_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_items
     */
    omit?: order_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_itemsInclude<ExtArgs> | null
    /**
     * Filter, which order_items to fetch.
     */
    where?: order_itemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of order_items to fetch.
     */
    orderBy?: order_itemsOrderByWithRelationInput | order_itemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for order_items.
     */
    cursor?: order_itemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` order_items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` order_items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of order_items.
     */
    distinct?: Order_itemsScalarFieldEnum | Order_itemsScalarFieldEnum[]
  }

  /**
   * order_items findMany
   */
  export type order_itemsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_items
     */
    select?: order_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_items
     */
    omit?: order_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_itemsInclude<ExtArgs> | null
    /**
     * Filter, which order_items to fetch.
     */
    where?: order_itemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of order_items to fetch.
     */
    orderBy?: order_itemsOrderByWithRelationInput | order_itemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing order_items.
     */
    cursor?: order_itemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` order_items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` order_items.
     */
    skip?: number
    distinct?: Order_itemsScalarFieldEnum | Order_itemsScalarFieldEnum[]
  }

  /**
   * order_items create
   */
  export type order_itemsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_items
     */
    select?: order_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_items
     */
    omit?: order_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_itemsInclude<ExtArgs> | null
    /**
     * The data needed to create a order_items.
     */
    data: XOR<order_itemsCreateInput, order_itemsUncheckedCreateInput>
  }

  /**
   * order_items createMany
   */
  export type order_itemsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many order_items.
     */
    data: order_itemsCreateManyInput | order_itemsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * order_items createManyAndReturn
   */
  export type order_itemsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_items
     */
    select?: order_itemsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the order_items
     */
    omit?: order_itemsOmit<ExtArgs> | null
    /**
     * The data used to create many order_items.
     */
    data: order_itemsCreateManyInput | order_itemsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_itemsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * order_items update
   */
  export type order_itemsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_items
     */
    select?: order_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_items
     */
    omit?: order_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_itemsInclude<ExtArgs> | null
    /**
     * The data needed to update a order_items.
     */
    data: XOR<order_itemsUpdateInput, order_itemsUncheckedUpdateInput>
    /**
     * Choose, which order_items to update.
     */
    where: order_itemsWhereUniqueInput
  }

  /**
   * order_items updateMany
   */
  export type order_itemsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update order_items.
     */
    data: XOR<order_itemsUpdateManyMutationInput, order_itemsUncheckedUpdateManyInput>
    /**
     * Filter which order_items to update
     */
    where?: order_itemsWhereInput
    /**
     * Limit how many order_items to update.
     */
    limit?: number
  }

  /**
   * order_items updateManyAndReturn
   */
  export type order_itemsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_items
     */
    select?: order_itemsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the order_items
     */
    omit?: order_itemsOmit<ExtArgs> | null
    /**
     * The data used to update order_items.
     */
    data: XOR<order_itemsUpdateManyMutationInput, order_itemsUncheckedUpdateManyInput>
    /**
     * Filter which order_items to update
     */
    where?: order_itemsWhereInput
    /**
     * Limit how many order_items to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_itemsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * order_items upsert
   */
  export type order_itemsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_items
     */
    select?: order_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_items
     */
    omit?: order_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_itemsInclude<ExtArgs> | null
    /**
     * The filter to search for the order_items to update in case it exists.
     */
    where: order_itemsWhereUniqueInput
    /**
     * In case the order_items found by the `where` argument doesn't exist, create a new order_items with this data.
     */
    create: XOR<order_itemsCreateInput, order_itemsUncheckedCreateInput>
    /**
     * In case the order_items was found with the provided `where` argument, update it with this data.
     */
    update: XOR<order_itemsUpdateInput, order_itemsUncheckedUpdateInput>
  }

  /**
   * order_items delete
   */
  export type order_itemsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_items
     */
    select?: order_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_items
     */
    omit?: order_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_itemsInclude<ExtArgs> | null
    /**
     * Filter which order_items to delete.
     */
    where: order_itemsWhereUniqueInput
  }

  /**
   * order_items deleteMany
   */
  export type order_itemsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which order_items to delete
     */
    where?: order_itemsWhereInput
    /**
     * Limit how many order_items to delete.
     */
    limit?: number
  }

  /**
   * order_items.orders
   */
  export type order_items$ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    where?: ordersWhereInput
  }

  /**
   * order_items.products
   */
  export type order_items$productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    where?: productsWhereInput
  }

  /**
   * order_items without action
   */
  export type order_itemsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_items
     */
    select?: order_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_items
     */
    omit?: order_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_itemsInclude<ExtArgs> | null
  }


  /**
   * Model orders
   */

  export type AggregateOrders = {
    _count: OrdersCountAggregateOutputType | null
    _avg: OrdersAvgAggregateOutputType | null
    _sum: OrdersSumAggregateOutputType | null
    _min: OrdersMinAggregateOutputType | null
    _max: OrdersMaxAggregateOutputType | null
  }

  export type OrdersAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
    store_id: number | null
    total: Decimal | null
  }

  export type OrdersSumAggregateOutputType = {
    id: number | null
    user_id: number | null
    store_id: number | null
    total: Decimal | null
  }

  export type OrdersMinAggregateOutputType = {
    id: number | null
    user_id: number | null
    store_id: number | null
    status: string | null
    total: Decimal | null
    created_at: Date | null
  }

  export type OrdersMaxAggregateOutputType = {
    id: number | null
    user_id: number | null
    store_id: number | null
    status: string | null
    total: Decimal | null
    created_at: Date | null
  }

  export type OrdersCountAggregateOutputType = {
    id: number
    user_id: number
    store_id: number
    status: number
    total: number
    created_at: number
    _all: number
  }


  export type OrdersAvgAggregateInputType = {
    id?: true
    user_id?: true
    store_id?: true
    total?: true
  }

  export type OrdersSumAggregateInputType = {
    id?: true
    user_id?: true
    store_id?: true
    total?: true
  }

  export type OrdersMinAggregateInputType = {
    id?: true
    user_id?: true
    store_id?: true
    status?: true
    total?: true
    created_at?: true
  }

  export type OrdersMaxAggregateInputType = {
    id?: true
    user_id?: true
    store_id?: true
    status?: true
    total?: true
    created_at?: true
  }

  export type OrdersCountAggregateInputType = {
    id?: true
    user_id?: true
    store_id?: true
    status?: true
    total?: true
    created_at?: true
    _all?: true
  }

  export type OrdersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which orders to aggregate.
     */
    where?: ordersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orders to fetch.
     */
    orderBy?: ordersOrderByWithRelationInput | ordersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ordersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned orders
    **/
    _count?: true | OrdersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrdersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrdersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrdersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrdersMaxAggregateInputType
  }

  export type GetOrdersAggregateType<T extends OrdersAggregateArgs> = {
        [P in keyof T & keyof AggregateOrders]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrders[P]>
      : GetScalarType<T[P], AggregateOrders[P]>
  }




  export type ordersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ordersWhereInput
    orderBy?: ordersOrderByWithAggregationInput | ordersOrderByWithAggregationInput[]
    by: OrdersScalarFieldEnum[] | OrdersScalarFieldEnum
    having?: ordersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrdersCountAggregateInputType | true
    _avg?: OrdersAvgAggregateInputType
    _sum?: OrdersSumAggregateInputType
    _min?: OrdersMinAggregateInputType
    _max?: OrdersMaxAggregateInputType
  }

  export type OrdersGroupByOutputType = {
    id: number
    user_id: number | null
    store_id: number | null
    status: string | null
    total: Decimal
    created_at: Date | null
    _count: OrdersCountAggregateOutputType | null
    _avg: OrdersAvgAggregateOutputType | null
    _sum: OrdersSumAggregateOutputType | null
    _min: OrdersMinAggregateOutputType | null
    _max: OrdersMaxAggregateOutputType | null
  }

  type GetOrdersGroupByPayload<T extends ordersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrdersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrdersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrdersGroupByOutputType[P]>
            : GetScalarType<T[P], OrdersGroupByOutputType[P]>
        }
      >
    >


  export type ordersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    store_id?: boolean
    status?: boolean
    total?: boolean
    created_at?: boolean
    deliveries?: boolean | orders$deliveriesArgs<ExtArgs>
    order_items?: boolean | orders$order_itemsArgs<ExtArgs>
    stores?: boolean | orders$storesArgs<ExtArgs>
    users?: boolean | orders$usersArgs<ExtArgs>
    _count?: boolean | OrdersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orders"]>

  export type ordersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    store_id?: boolean
    status?: boolean
    total?: boolean
    created_at?: boolean
    stores?: boolean | orders$storesArgs<ExtArgs>
    users?: boolean | orders$usersArgs<ExtArgs>
  }, ExtArgs["result"]["orders"]>

  export type ordersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    store_id?: boolean
    status?: boolean
    total?: boolean
    created_at?: boolean
    stores?: boolean | orders$storesArgs<ExtArgs>
    users?: boolean | orders$usersArgs<ExtArgs>
  }, ExtArgs["result"]["orders"]>

  export type ordersSelectScalar = {
    id?: boolean
    user_id?: boolean
    store_id?: boolean
    status?: boolean
    total?: boolean
    created_at?: boolean
  }

  export type ordersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "store_id" | "status" | "total" | "created_at", ExtArgs["result"]["orders"]>
  export type ordersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    deliveries?: boolean | orders$deliveriesArgs<ExtArgs>
    order_items?: boolean | orders$order_itemsArgs<ExtArgs>
    stores?: boolean | orders$storesArgs<ExtArgs>
    users?: boolean | orders$usersArgs<ExtArgs>
    _count?: boolean | OrdersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ordersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    stores?: boolean | orders$storesArgs<ExtArgs>
    users?: boolean | orders$usersArgs<ExtArgs>
  }
  export type ordersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    stores?: boolean | orders$storesArgs<ExtArgs>
    users?: boolean | orders$usersArgs<ExtArgs>
  }

  export type $ordersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "orders"
    objects: {
      deliveries: Prisma.$deliveriesPayload<ExtArgs>[]
      order_items: Prisma.$order_itemsPayload<ExtArgs>[]
      stores: Prisma.$storesPayload<ExtArgs> | null
      users: Prisma.$usersPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: number | null
      store_id: number | null
      status: string | null
      total: Prisma.Decimal
      created_at: Date | null
    }, ExtArgs["result"]["orders"]>
    composites: {}
  }

  type ordersGetPayload<S extends boolean | null | undefined | ordersDefaultArgs> = $Result.GetResult<Prisma.$ordersPayload, S>

  type ordersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ordersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrdersCountAggregateInputType | true
    }

  export interface ordersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['orders'], meta: { name: 'orders' } }
    /**
     * Find zero or one Orders that matches the filter.
     * @param {ordersFindUniqueArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ordersFindUniqueArgs>(args: SelectSubset<T, ordersFindUniqueArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Orders that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ordersFindUniqueOrThrowArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ordersFindUniqueOrThrowArgs>(args: SelectSubset<T, ordersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ordersFindFirstArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ordersFindFirstArgs>(args?: SelectSubset<T, ordersFindFirstArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Orders that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ordersFindFirstOrThrowArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ordersFindFirstOrThrowArgs>(args?: SelectSubset<T, ordersFindFirstOrThrowArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ordersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Orders
     * const orders = await prisma.orders.findMany()
     * 
     * // Get first 10 Orders
     * const orders = await prisma.orders.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ordersWithIdOnly = await prisma.orders.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ordersFindManyArgs>(args?: SelectSubset<T, ordersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Orders.
     * @param {ordersCreateArgs} args - Arguments to create a Orders.
     * @example
     * // Create one Orders
     * const Orders = await prisma.orders.create({
     *   data: {
     *     // ... data to create a Orders
     *   }
     * })
     * 
     */
    create<T extends ordersCreateArgs>(args: SelectSubset<T, ordersCreateArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Orders.
     * @param {ordersCreateManyArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const orders = await prisma.orders.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ordersCreateManyArgs>(args?: SelectSubset<T, ordersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Orders and returns the data saved in the database.
     * @param {ordersCreateManyAndReturnArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const orders = await prisma.orders.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Orders and only return the `id`
     * const ordersWithIdOnly = await prisma.orders.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ordersCreateManyAndReturnArgs>(args?: SelectSubset<T, ordersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Orders.
     * @param {ordersDeleteArgs} args - Arguments to delete one Orders.
     * @example
     * // Delete one Orders
     * const Orders = await prisma.orders.delete({
     *   where: {
     *     // ... filter to delete one Orders
     *   }
     * })
     * 
     */
    delete<T extends ordersDeleteArgs>(args: SelectSubset<T, ordersDeleteArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Orders.
     * @param {ordersUpdateArgs} args - Arguments to update one Orders.
     * @example
     * // Update one Orders
     * const orders = await prisma.orders.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ordersUpdateArgs>(args: SelectSubset<T, ordersUpdateArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Orders.
     * @param {ordersDeleteManyArgs} args - Arguments to filter Orders to delete.
     * @example
     * // Delete a few Orders
     * const { count } = await prisma.orders.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ordersDeleteManyArgs>(args?: SelectSubset<T, ordersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ordersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Orders
     * const orders = await prisma.orders.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ordersUpdateManyArgs>(args: SelectSubset<T, ordersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders and returns the data updated in the database.
     * @param {ordersUpdateManyAndReturnArgs} args - Arguments to update many Orders.
     * @example
     * // Update many Orders
     * const orders = await prisma.orders.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Orders and only return the `id`
     * const ordersWithIdOnly = await prisma.orders.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ordersUpdateManyAndReturnArgs>(args: SelectSubset<T, ordersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Orders.
     * @param {ordersUpsertArgs} args - Arguments to update or create a Orders.
     * @example
     * // Update or create a Orders
     * const orders = await prisma.orders.upsert({
     *   create: {
     *     // ... data to create a Orders
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Orders we want to update
     *   }
     * })
     */
    upsert<T extends ordersUpsertArgs>(args: SelectSubset<T, ordersUpsertArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ordersCountArgs} args - Arguments to filter Orders to count.
     * @example
     * // Count the number of Orders
     * const count = await prisma.orders.count({
     *   where: {
     *     // ... the filter for the Orders we want to count
     *   }
     * })
    **/
    count<T extends ordersCountArgs>(
      args?: Subset<T, ordersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrdersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OrdersAggregateArgs>(args: Subset<T, OrdersAggregateArgs>): Prisma.PrismaPromise<GetOrdersAggregateType<T>>

    /**
     * Group by Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ordersGroupByArgs} args - Group by arguments.
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
      T extends ordersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ordersGroupByArgs['orderBy'] }
        : { orderBy?: ordersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ordersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrdersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the orders model
   */
  readonly fields: ordersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for orders.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ordersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    deliveries<T extends orders$deliveriesArgs<ExtArgs> = {}>(args?: Subset<T, orders$deliveriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$deliveriesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    order_items<T extends orders$order_itemsArgs<ExtArgs> = {}>(args?: Subset<T, orders$order_itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$order_itemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    stores<T extends orders$storesArgs<ExtArgs> = {}>(args?: Subset<T, orders$storesArgs<ExtArgs>>): Prisma__storesClient<$Result.GetResult<Prisma.$storesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    users<T extends orders$usersArgs<ExtArgs> = {}>(args?: Subset<T, orders$usersArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the orders model
   */
  interface ordersFieldRefs {
    readonly id: FieldRef<"orders", 'Int'>
    readonly user_id: FieldRef<"orders", 'Int'>
    readonly store_id: FieldRef<"orders", 'Int'>
    readonly status: FieldRef<"orders", 'String'>
    readonly total: FieldRef<"orders", 'Decimal'>
    readonly created_at: FieldRef<"orders", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * orders findUnique
   */
  export type ordersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * Filter, which orders to fetch.
     */
    where: ordersWhereUniqueInput
  }

  /**
   * orders findUniqueOrThrow
   */
  export type ordersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * Filter, which orders to fetch.
     */
    where: ordersWhereUniqueInput
  }

  /**
   * orders findFirst
   */
  export type ordersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * Filter, which orders to fetch.
     */
    where?: ordersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orders to fetch.
     */
    orderBy?: ordersOrderByWithRelationInput | ordersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for orders.
     */
    cursor?: ordersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of orders.
     */
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }

  /**
   * orders findFirstOrThrow
   */
  export type ordersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * Filter, which orders to fetch.
     */
    where?: ordersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orders to fetch.
     */
    orderBy?: ordersOrderByWithRelationInput | ordersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for orders.
     */
    cursor?: ordersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of orders.
     */
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }

  /**
   * orders findMany
   */
  export type ordersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * Filter, which orders to fetch.
     */
    where?: ordersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orders to fetch.
     */
    orderBy?: ordersOrderByWithRelationInput | ordersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing orders.
     */
    cursor?: ordersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orders.
     */
    skip?: number
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }

  /**
   * orders create
   */
  export type ordersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * The data needed to create a orders.
     */
    data: XOR<ordersCreateInput, ordersUncheckedCreateInput>
  }

  /**
   * orders createMany
   */
  export type ordersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many orders.
     */
    data: ordersCreateManyInput | ordersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * orders createManyAndReturn
   */
  export type ordersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * The data used to create many orders.
     */
    data: ordersCreateManyInput | ordersCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * orders update
   */
  export type ordersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * The data needed to update a orders.
     */
    data: XOR<ordersUpdateInput, ordersUncheckedUpdateInput>
    /**
     * Choose, which orders to update.
     */
    where: ordersWhereUniqueInput
  }

  /**
   * orders updateMany
   */
  export type ordersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update orders.
     */
    data: XOR<ordersUpdateManyMutationInput, ordersUncheckedUpdateManyInput>
    /**
     * Filter which orders to update
     */
    where?: ordersWhereInput
    /**
     * Limit how many orders to update.
     */
    limit?: number
  }

  /**
   * orders updateManyAndReturn
   */
  export type ordersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * The data used to update orders.
     */
    data: XOR<ordersUpdateManyMutationInput, ordersUncheckedUpdateManyInput>
    /**
     * Filter which orders to update
     */
    where?: ordersWhereInput
    /**
     * Limit how many orders to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * orders upsert
   */
  export type ordersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * The filter to search for the orders to update in case it exists.
     */
    where: ordersWhereUniqueInput
    /**
     * In case the orders found by the `where` argument doesn't exist, create a new orders with this data.
     */
    create: XOR<ordersCreateInput, ordersUncheckedCreateInput>
    /**
     * In case the orders was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ordersUpdateInput, ordersUncheckedUpdateInput>
  }

  /**
   * orders delete
   */
  export type ordersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * Filter which orders to delete.
     */
    where: ordersWhereUniqueInput
  }

  /**
   * orders deleteMany
   */
  export type ordersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which orders to delete
     */
    where?: ordersWhereInput
    /**
     * Limit how many orders to delete.
     */
    limit?: number
  }

  /**
   * orders.deliveries
   */
  export type orders$deliveriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the deliveries
     */
    select?: deliveriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the deliveries
     */
    omit?: deliveriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: deliveriesInclude<ExtArgs> | null
    where?: deliveriesWhereInput
    orderBy?: deliveriesOrderByWithRelationInput | deliveriesOrderByWithRelationInput[]
    cursor?: deliveriesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DeliveriesScalarFieldEnum | DeliveriesScalarFieldEnum[]
  }

  /**
   * orders.order_items
   */
  export type orders$order_itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_items
     */
    select?: order_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_items
     */
    omit?: order_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_itemsInclude<ExtArgs> | null
    where?: order_itemsWhereInput
    orderBy?: order_itemsOrderByWithRelationInput | order_itemsOrderByWithRelationInput[]
    cursor?: order_itemsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Order_itemsScalarFieldEnum | Order_itemsScalarFieldEnum[]
  }

  /**
   * orders.stores
   */
  export type orders$storesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stores
     */
    select?: storesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stores
     */
    omit?: storesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: storesInclude<ExtArgs> | null
    where?: storesWhereInput
  }

  /**
   * orders.users
   */
  export type orders$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
  }

  /**
   * orders without action
   */
  export type ordersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
  }


  /**
   * Model products
   */

  export type AggregateProducts = {
    _count: ProductsCountAggregateOutputType | null
    _avg: ProductsAvgAggregateOutputType | null
    _sum: ProductsSumAggregateOutputType | null
    _min: ProductsMinAggregateOutputType | null
    _max: ProductsMaxAggregateOutputType | null
  }

  export type ProductsAvgAggregateOutputType = {
    id: number | null
    store_id: number | null
    price: Decimal | null
    stock: number | null
  }

  export type ProductsSumAggregateOutputType = {
    id: number | null
    store_id: number | null
    price: Decimal | null
    stock: number | null
  }

  export type ProductsMinAggregateOutputType = {
    id: number | null
    store_id: number | null
    name: string | null
    description: string | null
    price: Decimal | null
    stock: number | null
    created_at: Date | null
  }

  export type ProductsMaxAggregateOutputType = {
    id: number | null
    store_id: number | null
    name: string | null
    description: string | null
    price: Decimal | null
    stock: number | null
    created_at: Date | null
  }

  export type ProductsCountAggregateOutputType = {
    id: number
    store_id: number
    name: number
    description: number
    price: number
    stock: number
    created_at: number
    _all: number
  }


  export type ProductsAvgAggregateInputType = {
    id?: true
    store_id?: true
    price?: true
    stock?: true
  }

  export type ProductsSumAggregateInputType = {
    id?: true
    store_id?: true
    price?: true
    stock?: true
  }

  export type ProductsMinAggregateInputType = {
    id?: true
    store_id?: true
    name?: true
    description?: true
    price?: true
    stock?: true
    created_at?: true
  }

  export type ProductsMaxAggregateInputType = {
    id?: true
    store_id?: true
    name?: true
    description?: true
    price?: true
    stock?: true
    created_at?: true
  }

  export type ProductsCountAggregateInputType = {
    id?: true
    store_id?: true
    name?: true
    description?: true
    price?: true
    stock?: true
    created_at?: true
    _all?: true
  }

  export type ProductsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which products to aggregate.
     */
    where?: productsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of products to fetch.
     */
    orderBy?: productsOrderByWithRelationInput | productsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: productsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned products
    **/
    _count?: true | ProductsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductsMaxAggregateInputType
  }

  export type GetProductsAggregateType<T extends ProductsAggregateArgs> = {
        [P in keyof T & keyof AggregateProducts]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProducts[P]>
      : GetScalarType<T[P], AggregateProducts[P]>
  }




  export type productsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: productsWhereInput
    orderBy?: productsOrderByWithAggregationInput | productsOrderByWithAggregationInput[]
    by: ProductsScalarFieldEnum[] | ProductsScalarFieldEnum
    having?: productsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductsCountAggregateInputType | true
    _avg?: ProductsAvgAggregateInputType
    _sum?: ProductsSumAggregateInputType
    _min?: ProductsMinAggregateInputType
    _max?: ProductsMaxAggregateInputType
  }

  export type ProductsGroupByOutputType = {
    id: number
    store_id: number | null
    name: string
    description: string | null
    price: Decimal
    stock: number | null
    created_at: Date | null
    _count: ProductsCountAggregateOutputType | null
    _avg: ProductsAvgAggregateOutputType | null
    _sum: ProductsSumAggregateOutputType | null
    _min: ProductsMinAggregateOutputType | null
    _max: ProductsMaxAggregateOutputType | null
  }

  type GetProductsGroupByPayload<T extends productsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductsGroupByOutputType[P]>
            : GetScalarType<T[P], ProductsGroupByOutputType[P]>
        }
      >
    >


  export type productsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    store_id?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    stock?: boolean
    created_at?: boolean
    order_items?: boolean | products$order_itemsArgs<ExtArgs>
    stores?: boolean | products$storesArgs<ExtArgs>
    _count?: boolean | ProductsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["products"]>

  export type productsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    store_id?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    stock?: boolean
    created_at?: boolean
    stores?: boolean | products$storesArgs<ExtArgs>
  }, ExtArgs["result"]["products"]>

  export type productsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    store_id?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    stock?: boolean
    created_at?: boolean
    stores?: boolean | products$storesArgs<ExtArgs>
  }, ExtArgs["result"]["products"]>

  export type productsSelectScalar = {
    id?: boolean
    store_id?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    stock?: boolean
    created_at?: boolean
  }

  export type productsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "store_id" | "name" | "description" | "price" | "stock" | "created_at", ExtArgs["result"]["products"]>
  export type productsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order_items?: boolean | products$order_itemsArgs<ExtArgs>
    stores?: boolean | products$storesArgs<ExtArgs>
    _count?: boolean | ProductsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type productsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    stores?: boolean | products$storesArgs<ExtArgs>
  }
  export type productsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    stores?: boolean | products$storesArgs<ExtArgs>
  }

  export type $productsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "products"
    objects: {
      order_items: Prisma.$order_itemsPayload<ExtArgs>[]
      stores: Prisma.$storesPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      store_id: number | null
      name: string
      description: string | null
      price: Prisma.Decimal
      stock: number | null
      created_at: Date | null
    }, ExtArgs["result"]["products"]>
    composites: {}
  }

  type productsGetPayload<S extends boolean | null | undefined | productsDefaultArgs> = $Result.GetResult<Prisma.$productsPayload, S>

  type productsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<productsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductsCountAggregateInputType | true
    }

  export interface productsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['products'], meta: { name: 'products' } }
    /**
     * Find zero or one Products that matches the filter.
     * @param {productsFindUniqueArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends productsFindUniqueArgs>(args: SelectSubset<T, productsFindUniqueArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Products that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {productsFindUniqueOrThrowArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends productsFindUniqueOrThrowArgs>(args: SelectSubset<T, productsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsFindFirstArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends productsFindFirstArgs>(args?: SelectSubset<T, productsFindFirstArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Products that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsFindFirstOrThrowArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends productsFindFirstOrThrowArgs>(args?: SelectSubset<T, productsFindFirstOrThrowArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.products.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.products.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productsWithIdOnly = await prisma.products.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends productsFindManyArgs>(args?: SelectSubset<T, productsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Products.
     * @param {productsCreateArgs} args - Arguments to create a Products.
     * @example
     * // Create one Products
     * const Products = await prisma.products.create({
     *   data: {
     *     // ... data to create a Products
     *   }
     * })
     * 
     */
    create<T extends productsCreateArgs>(args: SelectSubset<T, productsCreateArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Products.
     * @param {productsCreateManyArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const products = await prisma.products.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends productsCreateManyArgs>(args?: SelectSubset<T, productsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Products and returns the data saved in the database.
     * @param {productsCreateManyAndReturnArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const products = await prisma.products.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Products and only return the `id`
     * const productsWithIdOnly = await prisma.products.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends productsCreateManyAndReturnArgs>(args?: SelectSubset<T, productsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Products.
     * @param {productsDeleteArgs} args - Arguments to delete one Products.
     * @example
     * // Delete one Products
     * const Products = await prisma.products.delete({
     *   where: {
     *     // ... filter to delete one Products
     *   }
     * })
     * 
     */
    delete<T extends productsDeleteArgs>(args: SelectSubset<T, productsDeleteArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Products.
     * @param {productsUpdateArgs} args - Arguments to update one Products.
     * @example
     * // Update one Products
     * const products = await prisma.products.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends productsUpdateArgs>(args: SelectSubset<T, productsUpdateArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Products.
     * @param {productsDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.products.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends productsDeleteManyArgs>(args?: SelectSubset<T, productsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const products = await prisma.products.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends productsUpdateManyArgs>(args: SelectSubset<T, productsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products and returns the data updated in the database.
     * @param {productsUpdateManyAndReturnArgs} args - Arguments to update many Products.
     * @example
     * // Update many Products
     * const products = await prisma.products.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Products and only return the `id`
     * const productsWithIdOnly = await prisma.products.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends productsUpdateManyAndReturnArgs>(args: SelectSubset<T, productsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Products.
     * @param {productsUpsertArgs} args - Arguments to update or create a Products.
     * @example
     * // Update or create a Products
     * const products = await prisma.products.upsert({
     *   create: {
     *     // ... data to create a Products
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Products we want to update
     *   }
     * })
     */
    upsert<T extends productsUpsertArgs>(args: SelectSubset<T, productsUpsertArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.products.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends productsCountArgs>(
      args?: Subset<T, productsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductsAggregateArgs>(args: Subset<T, ProductsAggregateArgs>): Prisma.PrismaPromise<GetProductsAggregateType<T>>

    /**
     * Group by Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsGroupByArgs} args - Group by arguments.
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
      T extends productsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: productsGroupByArgs['orderBy'] }
        : { orderBy?: productsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, productsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the products model
   */
  readonly fields: productsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for products.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__productsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    order_items<T extends products$order_itemsArgs<ExtArgs> = {}>(args?: Subset<T, products$order_itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$order_itemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    stores<T extends products$storesArgs<ExtArgs> = {}>(args?: Subset<T, products$storesArgs<ExtArgs>>): Prisma__storesClient<$Result.GetResult<Prisma.$storesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the products model
   */
  interface productsFieldRefs {
    readonly id: FieldRef<"products", 'Int'>
    readonly store_id: FieldRef<"products", 'Int'>
    readonly name: FieldRef<"products", 'String'>
    readonly description: FieldRef<"products", 'String'>
    readonly price: FieldRef<"products", 'Decimal'>
    readonly stock: FieldRef<"products", 'Int'>
    readonly created_at: FieldRef<"products", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * products findUnique
   */
  export type productsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * Filter, which products to fetch.
     */
    where: productsWhereUniqueInput
  }

  /**
   * products findUniqueOrThrow
   */
  export type productsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * Filter, which products to fetch.
     */
    where: productsWhereUniqueInput
  }

  /**
   * products findFirst
   */
  export type productsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * Filter, which products to fetch.
     */
    where?: productsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of products to fetch.
     */
    orderBy?: productsOrderByWithRelationInput | productsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for products.
     */
    cursor?: productsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of products.
     */
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[]
  }

  /**
   * products findFirstOrThrow
   */
  export type productsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * Filter, which products to fetch.
     */
    where?: productsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of products to fetch.
     */
    orderBy?: productsOrderByWithRelationInput | productsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for products.
     */
    cursor?: productsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of products.
     */
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[]
  }

  /**
   * products findMany
   */
  export type productsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * Filter, which products to fetch.
     */
    where?: productsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of products to fetch.
     */
    orderBy?: productsOrderByWithRelationInput | productsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing products.
     */
    cursor?: productsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` products.
     */
    skip?: number
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[]
  }

  /**
   * products create
   */
  export type productsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * The data needed to create a products.
     */
    data: XOR<productsCreateInput, productsUncheckedCreateInput>
  }

  /**
   * products createMany
   */
  export type productsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many products.
     */
    data: productsCreateManyInput | productsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * products createManyAndReturn
   */
  export type productsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * The data used to create many products.
     */
    data: productsCreateManyInput | productsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * products update
   */
  export type productsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * The data needed to update a products.
     */
    data: XOR<productsUpdateInput, productsUncheckedUpdateInput>
    /**
     * Choose, which products to update.
     */
    where: productsWhereUniqueInput
  }

  /**
   * products updateMany
   */
  export type productsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update products.
     */
    data: XOR<productsUpdateManyMutationInput, productsUncheckedUpdateManyInput>
    /**
     * Filter which products to update
     */
    where?: productsWhereInput
    /**
     * Limit how many products to update.
     */
    limit?: number
  }

  /**
   * products updateManyAndReturn
   */
  export type productsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * The data used to update products.
     */
    data: XOR<productsUpdateManyMutationInput, productsUncheckedUpdateManyInput>
    /**
     * Filter which products to update
     */
    where?: productsWhereInput
    /**
     * Limit how many products to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * products upsert
   */
  export type productsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * The filter to search for the products to update in case it exists.
     */
    where: productsWhereUniqueInput
    /**
     * In case the products found by the `where` argument doesn't exist, create a new products with this data.
     */
    create: XOR<productsCreateInput, productsUncheckedCreateInput>
    /**
     * In case the products was found with the provided `where` argument, update it with this data.
     */
    update: XOR<productsUpdateInput, productsUncheckedUpdateInput>
  }

  /**
   * products delete
   */
  export type productsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * Filter which products to delete.
     */
    where: productsWhereUniqueInput
  }

  /**
   * products deleteMany
   */
  export type productsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which products to delete
     */
    where?: productsWhereInput
    /**
     * Limit how many products to delete.
     */
    limit?: number
  }

  /**
   * products.order_items
   */
  export type products$order_itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_items
     */
    select?: order_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_items
     */
    omit?: order_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_itemsInclude<ExtArgs> | null
    where?: order_itemsWhereInput
    orderBy?: order_itemsOrderByWithRelationInput | order_itemsOrderByWithRelationInput[]
    cursor?: order_itemsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Order_itemsScalarFieldEnum | Order_itemsScalarFieldEnum[]
  }

  /**
   * products.stores
   */
  export type products$storesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stores
     */
    select?: storesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stores
     */
    omit?: storesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: storesInclude<ExtArgs> | null
    where?: storesWhereInput
  }

  /**
   * products without action
   */
  export type productsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
  }


  /**
   * Model stores
   */

  export type AggregateStores = {
    _count: StoresCountAggregateOutputType | null
    _avg: StoresAvgAggregateOutputType | null
    _sum: StoresSumAggregateOutputType | null
    _min: StoresMinAggregateOutputType | null
    _max: StoresMaxAggregateOutputType | null
  }

  export type StoresAvgAggregateOutputType = {
    id: number | null
  }

  export type StoresSumAggregateOutputType = {
    id: number | null
  }

  export type StoresMinAggregateOutputType = {
    id: number | null
    name: string | null
    address: string | null
    phone: string | null
    created_at: Date | null
  }

  export type StoresMaxAggregateOutputType = {
    id: number | null
    name: string | null
    address: string | null
    phone: string | null
    created_at: Date | null
  }

  export type StoresCountAggregateOutputType = {
    id: number
    name: number
    address: number
    phone: number
    created_at: number
    _all: number
  }


  export type StoresAvgAggregateInputType = {
    id?: true
  }

  export type StoresSumAggregateInputType = {
    id?: true
  }

  export type StoresMinAggregateInputType = {
    id?: true
    name?: true
    address?: true
    phone?: true
    created_at?: true
  }

  export type StoresMaxAggregateInputType = {
    id?: true
    name?: true
    address?: true
    phone?: true
    created_at?: true
  }

  export type StoresCountAggregateInputType = {
    id?: true
    name?: true
    address?: true
    phone?: true
    created_at?: true
    _all?: true
  }

  export type StoresAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which stores to aggregate.
     */
    where?: storesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of stores to fetch.
     */
    orderBy?: storesOrderByWithRelationInput | storesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: storesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` stores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` stores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned stores
    **/
    _count?: true | StoresCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StoresAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StoresSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StoresMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StoresMaxAggregateInputType
  }

  export type GetStoresAggregateType<T extends StoresAggregateArgs> = {
        [P in keyof T & keyof AggregateStores]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStores[P]>
      : GetScalarType<T[P], AggregateStores[P]>
  }




  export type storesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: storesWhereInput
    orderBy?: storesOrderByWithAggregationInput | storesOrderByWithAggregationInput[]
    by: StoresScalarFieldEnum[] | StoresScalarFieldEnum
    having?: storesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StoresCountAggregateInputType | true
    _avg?: StoresAvgAggregateInputType
    _sum?: StoresSumAggregateInputType
    _min?: StoresMinAggregateInputType
    _max?: StoresMaxAggregateInputType
  }

  export type StoresGroupByOutputType = {
    id: number
    name: string
    address: string | null
    phone: string | null
    created_at: Date | null
    _count: StoresCountAggregateOutputType | null
    _avg: StoresAvgAggregateOutputType | null
    _sum: StoresSumAggregateOutputType | null
    _min: StoresMinAggregateOutputType | null
    _max: StoresMaxAggregateOutputType | null
  }

  type GetStoresGroupByPayload<T extends storesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StoresGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StoresGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StoresGroupByOutputType[P]>
            : GetScalarType<T[P], StoresGroupByOutputType[P]>
        }
      >
    >


  export type storesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address?: boolean
    phone?: boolean
    created_at?: boolean
    orders?: boolean | stores$ordersArgs<ExtArgs>
    products?: boolean | stores$productsArgs<ExtArgs>
    _count?: boolean | StoresCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stores"]>

  export type storesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address?: boolean
    phone?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["stores"]>

  export type storesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address?: boolean
    phone?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["stores"]>

  export type storesSelectScalar = {
    id?: boolean
    name?: boolean
    address?: boolean
    phone?: boolean
    created_at?: boolean
  }

  export type storesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "address" | "phone" | "created_at", ExtArgs["result"]["stores"]>
  export type storesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | stores$ordersArgs<ExtArgs>
    products?: boolean | stores$productsArgs<ExtArgs>
    _count?: boolean | StoresCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type storesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type storesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $storesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "stores"
    objects: {
      orders: Prisma.$ordersPayload<ExtArgs>[]
      products: Prisma.$productsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      address: string | null
      phone: string | null
      created_at: Date | null
    }, ExtArgs["result"]["stores"]>
    composites: {}
  }

  type storesGetPayload<S extends boolean | null | undefined | storesDefaultArgs> = $Result.GetResult<Prisma.$storesPayload, S>

  type storesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<storesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StoresCountAggregateInputType | true
    }

  export interface storesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['stores'], meta: { name: 'stores' } }
    /**
     * Find zero or one Stores that matches the filter.
     * @param {storesFindUniqueArgs} args - Arguments to find a Stores
     * @example
     * // Get one Stores
     * const stores = await prisma.stores.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends storesFindUniqueArgs>(args: SelectSubset<T, storesFindUniqueArgs<ExtArgs>>): Prisma__storesClient<$Result.GetResult<Prisma.$storesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Stores that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {storesFindUniqueOrThrowArgs} args - Arguments to find a Stores
     * @example
     * // Get one Stores
     * const stores = await prisma.stores.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends storesFindUniqueOrThrowArgs>(args: SelectSubset<T, storesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__storesClient<$Result.GetResult<Prisma.$storesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Stores that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {storesFindFirstArgs} args - Arguments to find a Stores
     * @example
     * // Get one Stores
     * const stores = await prisma.stores.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends storesFindFirstArgs>(args?: SelectSubset<T, storesFindFirstArgs<ExtArgs>>): Prisma__storesClient<$Result.GetResult<Prisma.$storesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Stores that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {storesFindFirstOrThrowArgs} args - Arguments to find a Stores
     * @example
     * // Get one Stores
     * const stores = await prisma.stores.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends storesFindFirstOrThrowArgs>(args?: SelectSubset<T, storesFindFirstOrThrowArgs<ExtArgs>>): Prisma__storesClient<$Result.GetResult<Prisma.$storesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Stores that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {storesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Stores
     * const stores = await prisma.stores.findMany()
     * 
     * // Get first 10 Stores
     * const stores = await prisma.stores.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const storesWithIdOnly = await prisma.stores.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends storesFindManyArgs>(args?: SelectSubset<T, storesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$storesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Stores.
     * @param {storesCreateArgs} args - Arguments to create a Stores.
     * @example
     * // Create one Stores
     * const Stores = await prisma.stores.create({
     *   data: {
     *     // ... data to create a Stores
     *   }
     * })
     * 
     */
    create<T extends storesCreateArgs>(args: SelectSubset<T, storesCreateArgs<ExtArgs>>): Prisma__storesClient<$Result.GetResult<Prisma.$storesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Stores.
     * @param {storesCreateManyArgs} args - Arguments to create many Stores.
     * @example
     * // Create many Stores
     * const stores = await prisma.stores.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends storesCreateManyArgs>(args?: SelectSubset<T, storesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Stores and returns the data saved in the database.
     * @param {storesCreateManyAndReturnArgs} args - Arguments to create many Stores.
     * @example
     * // Create many Stores
     * const stores = await prisma.stores.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Stores and only return the `id`
     * const storesWithIdOnly = await prisma.stores.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends storesCreateManyAndReturnArgs>(args?: SelectSubset<T, storesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$storesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Stores.
     * @param {storesDeleteArgs} args - Arguments to delete one Stores.
     * @example
     * // Delete one Stores
     * const Stores = await prisma.stores.delete({
     *   where: {
     *     // ... filter to delete one Stores
     *   }
     * })
     * 
     */
    delete<T extends storesDeleteArgs>(args: SelectSubset<T, storesDeleteArgs<ExtArgs>>): Prisma__storesClient<$Result.GetResult<Prisma.$storesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Stores.
     * @param {storesUpdateArgs} args - Arguments to update one Stores.
     * @example
     * // Update one Stores
     * const stores = await prisma.stores.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends storesUpdateArgs>(args: SelectSubset<T, storesUpdateArgs<ExtArgs>>): Prisma__storesClient<$Result.GetResult<Prisma.$storesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Stores.
     * @param {storesDeleteManyArgs} args - Arguments to filter Stores to delete.
     * @example
     * // Delete a few Stores
     * const { count } = await prisma.stores.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends storesDeleteManyArgs>(args?: SelectSubset<T, storesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Stores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {storesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Stores
     * const stores = await prisma.stores.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends storesUpdateManyArgs>(args: SelectSubset<T, storesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Stores and returns the data updated in the database.
     * @param {storesUpdateManyAndReturnArgs} args - Arguments to update many Stores.
     * @example
     * // Update many Stores
     * const stores = await prisma.stores.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Stores and only return the `id`
     * const storesWithIdOnly = await prisma.stores.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends storesUpdateManyAndReturnArgs>(args: SelectSubset<T, storesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$storesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Stores.
     * @param {storesUpsertArgs} args - Arguments to update or create a Stores.
     * @example
     * // Update or create a Stores
     * const stores = await prisma.stores.upsert({
     *   create: {
     *     // ... data to create a Stores
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Stores we want to update
     *   }
     * })
     */
    upsert<T extends storesUpsertArgs>(args: SelectSubset<T, storesUpsertArgs<ExtArgs>>): Prisma__storesClient<$Result.GetResult<Prisma.$storesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Stores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {storesCountArgs} args - Arguments to filter Stores to count.
     * @example
     * // Count the number of Stores
     * const count = await prisma.stores.count({
     *   where: {
     *     // ... the filter for the Stores we want to count
     *   }
     * })
    **/
    count<T extends storesCountArgs>(
      args?: Subset<T, storesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StoresCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Stores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoresAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StoresAggregateArgs>(args: Subset<T, StoresAggregateArgs>): Prisma.PrismaPromise<GetStoresAggregateType<T>>

    /**
     * Group by Stores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {storesGroupByArgs} args - Group by arguments.
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
      T extends storesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: storesGroupByArgs['orderBy'] }
        : { orderBy?: storesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, storesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStoresGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the stores model
   */
  readonly fields: storesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for stores.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__storesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    orders<T extends stores$ordersArgs<ExtArgs> = {}>(args?: Subset<T, stores$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    products<T extends stores$productsArgs<ExtArgs> = {}>(args?: Subset<T, stores$productsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the stores model
   */
  interface storesFieldRefs {
    readonly id: FieldRef<"stores", 'Int'>
    readonly name: FieldRef<"stores", 'String'>
    readonly address: FieldRef<"stores", 'String'>
    readonly phone: FieldRef<"stores", 'String'>
    readonly created_at: FieldRef<"stores", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * stores findUnique
   */
  export type storesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stores
     */
    select?: storesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stores
     */
    omit?: storesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: storesInclude<ExtArgs> | null
    /**
     * Filter, which stores to fetch.
     */
    where: storesWhereUniqueInput
  }

  /**
   * stores findUniqueOrThrow
   */
  export type storesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stores
     */
    select?: storesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stores
     */
    omit?: storesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: storesInclude<ExtArgs> | null
    /**
     * Filter, which stores to fetch.
     */
    where: storesWhereUniqueInput
  }

  /**
   * stores findFirst
   */
  export type storesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stores
     */
    select?: storesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stores
     */
    omit?: storesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: storesInclude<ExtArgs> | null
    /**
     * Filter, which stores to fetch.
     */
    where?: storesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of stores to fetch.
     */
    orderBy?: storesOrderByWithRelationInput | storesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for stores.
     */
    cursor?: storesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` stores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` stores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of stores.
     */
    distinct?: StoresScalarFieldEnum | StoresScalarFieldEnum[]
  }

  /**
   * stores findFirstOrThrow
   */
  export type storesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stores
     */
    select?: storesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stores
     */
    omit?: storesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: storesInclude<ExtArgs> | null
    /**
     * Filter, which stores to fetch.
     */
    where?: storesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of stores to fetch.
     */
    orderBy?: storesOrderByWithRelationInput | storesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for stores.
     */
    cursor?: storesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` stores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` stores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of stores.
     */
    distinct?: StoresScalarFieldEnum | StoresScalarFieldEnum[]
  }

  /**
   * stores findMany
   */
  export type storesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stores
     */
    select?: storesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stores
     */
    omit?: storesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: storesInclude<ExtArgs> | null
    /**
     * Filter, which stores to fetch.
     */
    where?: storesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of stores to fetch.
     */
    orderBy?: storesOrderByWithRelationInput | storesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing stores.
     */
    cursor?: storesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` stores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` stores.
     */
    skip?: number
    distinct?: StoresScalarFieldEnum | StoresScalarFieldEnum[]
  }

  /**
   * stores create
   */
  export type storesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stores
     */
    select?: storesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stores
     */
    omit?: storesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: storesInclude<ExtArgs> | null
    /**
     * The data needed to create a stores.
     */
    data: XOR<storesCreateInput, storesUncheckedCreateInput>
  }

  /**
   * stores createMany
   */
  export type storesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many stores.
     */
    data: storesCreateManyInput | storesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * stores createManyAndReturn
   */
  export type storesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stores
     */
    select?: storesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the stores
     */
    omit?: storesOmit<ExtArgs> | null
    /**
     * The data used to create many stores.
     */
    data: storesCreateManyInput | storesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * stores update
   */
  export type storesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stores
     */
    select?: storesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stores
     */
    omit?: storesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: storesInclude<ExtArgs> | null
    /**
     * The data needed to update a stores.
     */
    data: XOR<storesUpdateInput, storesUncheckedUpdateInput>
    /**
     * Choose, which stores to update.
     */
    where: storesWhereUniqueInput
  }

  /**
   * stores updateMany
   */
  export type storesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update stores.
     */
    data: XOR<storesUpdateManyMutationInput, storesUncheckedUpdateManyInput>
    /**
     * Filter which stores to update
     */
    where?: storesWhereInput
    /**
     * Limit how many stores to update.
     */
    limit?: number
  }

  /**
   * stores updateManyAndReturn
   */
  export type storesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stores
     */
    select?: storesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the stores
     */
    omit?: storesOmit<ExtArgs> | null
    /**
     * The data used to update stores.
     */
    data: XOR<storesUpdateManyMutationInput, storesUncheckedUpdateManyInput>
    /**
     * Filter which stores to update
     */
    where?: storesWhereInput
    /**
     * Limit how many stores to update.
     */
    limit?: number
  }

  /**
   * stores upsert
   */
  export type storesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stores
     */
    select?: storesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stores
     */
    omit?: storesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: storesInclude<ExtArgs> | null
    /**
     * The filter to search for the stores to update in case it exists.
     */
    where: storesWhereUniqueInput
    /**
     * In case the stores found by the `where` argument doesn't exist, create a new stores with this data.
     */
    create: XOR<storesCreateInput, storesUncheckedCreateInput>
    /**
     * In case the stores was found with the provided `where` argument, update it with this data.
     */
    update: XOR<storesUpdateInput, storesUncheckedUpdateInput>
  }

  /**
   * stores delete
   */
  export type storesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stores
     */
    select?: storesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stores
     */
    omit?: storesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: storesInclude<ExtArgs> | null
    /**
     * Filter which stores to delete.
     */
    where: storesWhereUniqueInput
  }

  /**
   * stores deleteMany
   */
  export type storesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which stores to delete
     */
    where?: storesWhereInput
    /**
     * Limit how many stores to delete.
     */
    limit?: number
  }

  /**
   * stores.orders
   */
  export type stores$ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    where?: ordersWhereInput
    orderBy?: ordersOrderByWithRelationInput | ordersOrderByWithRelationInput[]
    cursor?: ordersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }

  /**
   * stores.products
   */
  export type stores$productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    where?: productsWhereInput
    orderBy?: productsOrderByWithRelationInput | productsOrderByWithRelationInput[]
    cursor?: productsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[]
  }

  /**
   * stores without action
   */
  export type storesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stores
     */
    select?: storesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stores
     */
    omit?: storesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: storesInclude<ExtArgs> | null
  }


  /**
   * Model users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    id: number | null
  }

  export type UsersSumAggregateOutputType = {
    id: number | null
  }

  export type UsersMinAggregateOutputType = {
    id: number | null
    email: string | null
    password_hash: string | null
    created_at: Date | null
    firstname: string | null
    lastname: string | null
    street: string | null
    city: string | null
    postal: string | null
    stripe_customer_id: string | null
    refresh_token: string | null
  }

  export type UsersMaxAggregateOutputType = {
    id: number | null
    email: string | null
    password_hash: string | null
    created_at: Date | null
    firstname: string | null
    lastname: string | null
    street: string | null
    city: string | null
    postal: string | null
    stripe_customer_id: string | null
    refresh_token: string | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    email: number
    password_hash: number
    created_at: number
    firstname: number
    lastname: number
    street: number
    city: number
    postal: number
    stripe_customer_id: number
    refresh_token: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    id?: true
  }

  export type UsersSumAggregateInputType = {
    id?: true
  }

  export type UsersMinAggregateInputType = {
    id?: true
    email?: true
    password_hash?: true
    created_at?: true
    firstname?: true
    lastname?: true
    street?: true
    city?: true
    postal?: true
    stripe_customer_id?: true
    refresh_token?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    email?: true
    password_hash?: true
    created_at?: true
    firstname?: true
    lastname?: true
    street?: true
    city?: true
    postal?: true
    stripe_customer_id?: true
    refresh_token?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    email?: true
    password_hash?: true
    created_at?: true
    firstname?: true
    lastname?: true
    street?: true
    city?: true
    postal?: true
    stripe_customer_id?: true
    refresh_token?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to aggregate.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usersWhereUniqueInput
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
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
    orderBy?: usersOrderByWithAggregationInput | usersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: number
    email: string
    password_hash: string
    created_at: Date | null
    firstname: string | null
    lastname: string | null
    street: string | null
    city: string | null
    postal: string | null
    stripe_customer_id: string | null
    refresh_token: string | null
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password_hash?: boolean
    created_at?: boolean
    firstname?: boolean
    lastname?: boolean
    street?: boolean
    city?: boolean
    postal?: boolean
    stripe_customer_id?: boolean
    refresh_token?: boolean
    orders?: boolean | users$ordersArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type usersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password_hash?: boolean
    created_at?: boolean
    firstname?: boolean
    lastname?: boolean
    street?: boolean
    city?: boolean
    postal?: boolean
    stripe_customer_id?: boolean
    refresh_token?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password_hash?: boolean
    created_at?: boolean
    firstname?: boolean
    lastname?: boolean
    street?: boolean
    city?: boolean
    postal?: boolean
    stripe_customer_id?: boolean
    refresh_token?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectScalar = {
    id?: boolean
    email?: boolean
    password_hash?: boolean
    created_at?: boolean
    firstname?: boolean
    lastname?: boolean
    street?: boolean
    city?: boolean
    postal?: boolean
    stripe_customer_id?: boolean
    refresh_token?: boolean
  }

  export type usersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password_hash" | "created_at" | "firstname" | "lastname" | "street" | "city" | "postal" | "stripe_customer_id" | "refresh_token", ExtArgs["result"]["users"]>
  export type usersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | users$ordersArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type usersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type usersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {
      orders: Prisma.$ordersPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      password_hash: string
      created_at: Date | null
      firstname: string | null
      lastname: string | null
      street: string | null
      city: string | null
      postal: string | null
      stripe_customer_id: string | null
      refresh_token: string | null
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = $Result.GetResult<Prisma.$usersPayload, S>

  type usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['users'], meta: { name: 'users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usersFindUniqueArgs>(args: SelectSubset<T, usersFindUniqueArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs>(args: SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usersFindFirstArgs>(args?: SelectSubset<T, usersFindFirstArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs>(args?: SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends usersFindManyArgs>(args?: SelectSubset<T, usersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends usersCreateArgs>(args: SelectSubset<T, usersCreateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {usersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usersCreateManyArgs>(args?: SelectSubset<T, usersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {usersCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends usersCreateManyAndReturnArgs>(args?: SelectSubset<T, usersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends usersDeleteArgs>(args: SelectSubset<T, usersDeleteArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usersUpdateArgs>(args: SelectSubset<T, usersUpdateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usersDeleteManyArgs>(args?: SelectSubset<T, usersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usersUpdateManyArgs>(args: SelectSubset<T, usersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {usersUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends usersUpdateManyAndReturnArgs>(args: SelectSubset<T, usersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends usersUpsertArgs>(args: SelectSubset<T, usersUpsertArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersGroupByArgs} args - Group by arguments.
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
      T extends usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usersGroupByArgs['orderBy'] }
        : { orderBy?: usersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the users model
   */
  readonly fields: usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    orders<T extends users$ordersArgs<ExtArgs> = {}>(args?: Subset<T, users$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the users model
   */
  interface usersFieldRefs {
    readonly id: FieldRef<"users", 'Int'>
    readonly email: FieldRef<"users", 'String'>
    readonly password_hash: FieldRef<"users", 'String'>
    readonly created_at: FieldRef<"users", 'DateTime'>
    readonly firstname: FieldRef<"users", 'String'>
    readonly lastname: FieldRef<"users", 'String'>
    readonly street: FieldRef<"users", 'String'>
    readonly city: FieldRef<"users", 'String'>
    readonly postal: FieldRef<"users", 'String'>
    readonly stripe_customer_id: FieldRef<"users", 'String'>
    readonly refresh_token: FieldRef<"users", 'String'>
  }
    

  // Custom InputTypes
  /**
   * users findUnique
   */
  export type usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findFirst
   */
  export type usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
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
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
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
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findMany
   */
  export type usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: usersWhereUniqueInput
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
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users create
   */
  export type usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to create a users.
     */
    data: XOR<usersCreateInput, usersUncheckedCreateInput>
  }

  /**
   * users createMany
   */
  export type usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users createManyAndReturn
   */
  export type usersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users update
   */
  export type usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to update a users.
     */
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users updateMany
   */
  export type usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users updateManyAndReturn
   */
  export type usersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users upsert
   */
  export type usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The filter to search for the users to update in case it exists.
     */
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     */
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }

  /**
   * users delete
   */
  export type usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter which users to delete.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: usersWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * users.orders
   */
  export type users$ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    where?: ordersWhereInput
    orderBy?: ordersOrderByWithRelationInput | ordersOrderByWithRelationInput[]
    cursor?: ordersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }

  /**
   * users without action
   */
  export type usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
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


  export const DeliveriesScalarFieldEnum: {
    id: 'id',
    order_id: 'order_id',
    driver_id: 'driver_id',
    status: 'status',
    created_at: 'created_at'
  };

  export type DeliveriesScalarFieldEnum = (typeof DeliveriesScalarFieldEnum)[keyof typeof DeliveriesScalarFieldEnum]


  export const DriversScalarFieldEnum: {
    id: 'id',
    name: 'name',
    phone: 'phone',
    vehicle_type: 'vehicle_type',
    created_at: 'created_at',
    is_available: 'is_available'
  };

  export type DriversScalarFieldEnum = (typeof DriversScalarFieldEnum)[keyof typeof DriversScalarFieldEnum]


  export const Order_itemsScalarFieldEnum: {
    id: 'id',
    order_id: 'order_id',
    product_id: 'product_id',
    quantity: 'quantity',
    price: 'price'
  };

  export type Order_itemsScalarFieldEnum = (typeof Order_itemsScalarFieldEnum)[keyof typeof Order_itemsScalarFieldEnum]


  export const OrdersScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    store_id: 'store_id',
    status: 'status',
    total: 'total',
    created_at: 'created_at'
  };

  export type OrdersScalarFieldEnum = (typeof OrdersScalarFieldEnum)[keyof typeof OrdersScalarFieldEnum]


  export const ProductsScalarFieldEnum: {
    id: 'id',
    store_id: 'store_id',
    name: 'name',
    description: 'description',
    price: 'price',
    stock: 'stock',
    created_at: 'created_at'
  };

  export type ProductsScalarFieldEnum = (typeof ProductsScalarFieldEnum)[keyof typeof ProductsScalarFieldEnum]


  export const StoresScalarFieldEnum: {
    id: 'id',
    name: 'name',
    address: 'address',
    phone: 'phone',
    created_at: 'created_at'
  };

  export type StoresScalarFieldEnum = (typeof StoresScalarFieldEnum)[keyof typeof StoresScalarFieldEnum]


  export const UsersScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password_hash: 'password_hash',
    created_at: 'created_at',
    firstname: 'firstname',
    lastname: 'lastname',
    street: 'street',
    city: 'city',
    postal: 'postal',
    stripe_customer_id: 'stripe_customer_id',
    refresh_token: 'refresh_token'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type deliveriesWhereInput = {
    AND?: deliveriesWhereInput | deliveriesWhereInput[]
    OR?: deliveriesWhereInput[]
    NOT?: deliveriesWhereInput | deliveriesWhereInput[]
    id?: IntFilter<"deliveries"> | number
    order_id?: IntNullableFilter<"deliveries"> | number | null
    driver_id?: IntNullableFilter<"deliveries"> | number | null
    status?: StringNullableFilter<"deliveries"> | string | null
    created_at?: DateTimeNullableFilter<"deliveries"> | Date | string | null
    drivers?: XOR<DriversNullableScalarRelationFilter, driversWhereInput> | null
    orders?: XOR<OrdersNullableScalarRelationFilter, ordersWhereInput> | null
  }

  export type deliveriesOrderByWithRelationInput = {
    id?: SortOrder
    order_id?: SortOrderInput | SortOrder
    driver_id?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    drivers?: driversOrderByWithRelationInput
    orders?: ordersOrderByWithRelationInput
  }

  export type deliveriesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: deliveriesWhereInput | deliveriesWhereInput[]
    OR?: deliveriesWhereInput[]
    NOT?: deliveriesWhereInput | deliveriesWhereInput[]
    order_id?: IntNullableFilter<"deliveries"> | number | null
    driver_id?: IntNullableFilter<"deliveries"> | number | null
    status?: StringNullableFilter<"deliveries"> | string | null
    created_at?: DateTimeNullableFilter<"deliveries"> | Date | string | null
    drivers?: XOR<DriversNullableScalarRelationFilter, driversWhereInput> | null
    orders?: XOR<OrdersNullableScalarRelationFilter, ordersWhereInput> | null
  }, "id">

  export type deliveriesOrderByWithAggregationInput = {
    id?: SortOrder
    order_id?: SortOrderInput | SortOrder
    driver_id?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: deliveriesCountOrderByAggregateInput
    _avg?: deliveriesAvgOrderByAggregateInput
    _max?: deliveriesMaxOrderByAggregateInput
    _min?: deliveriesMinOrderByAggregateInput
    _sum?: deliveriesSumOrderByAggregateInput
  }

  export type deliveriesScalarWhereWithAggregatesInput = {
    AND?: deliveriesScalarWhereWithAggregatesInput | deliveriesScalarWhereWithAggregatesInput[]
    OR?: deliveriesScalarWhereWithAggregatesInput[]
    NOT?: deliveriesScalarWhereWithAggregatesInput | deliveriesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"deliveries"> | number
    order_id?: IntNullableWithAggregatesFilter<"deliveries"> | number | null
    driver_id?: IntNullableWithAggregatesFilter<"deliveries"> | number | null
    status?: StringNullableWithAggregatesFilter<"deliveries"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"deliveries"> | Date | string | null
  }

  export type driversWhereInput = {
    AND?: driversWhereInput | driversWhereInput[]
    OR?: driversWhereInput[]
    NOT?: driversWhereInput | driversWhereInput[]
    id?: IntFilter<"drivers"> | number
    name?: StringFilter<"drivers"> | string
    phone?: StringFilter<"drivers"> | string
    vehicle_type?: StringNullableFilter<"drivers"> | string | null
    created_at?: DateTimeNullableFilter<"drivers"> | Date | string | null
    is_available?: BoolNullableFilter<"drivers"> | boolean | null
    deliveries?: DeliveriesListRelationFilter
  }

  export type driversOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    vehicle_type?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    is_available?: SortOrderInput | SortOrder
    deliveries?: deliveriesOrderByRelationAggregateInput
  }

  export type driversWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    phone?: string
    AND?: driversWhereInput | driversWhereInput[]
    OR?: driversWhereInput[]
    NOT?: driversWhereInput | driversWhereInput[]
    name?: StringFilter<"drivers"> | string
    vehicle_type?: StringNullableFilter<"drivers"> | string | null
    created_at?: DateTimeNullableFilter<"drivers"> | Date | string | null
    is_available?: BoolNullableFilter<"drivers"> | boolean | null
    deliveries?: DeliveriesListRelationFilter
  }, "id" | "phone">

  export type driversOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    vehicle_type?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    is_available?: SortOrderInput | SortOrder
    _count?: driversCountOrderByAggregateInput
    _avg?: driversAvgOrderByAggregateInput
    _max?: driversMaxOrderByAggregateInput
    _min?: driversMinOrderByAggregateInput
    _sum?: driversSumOrderByAggregateInput
  }

  export type driversScalarWhereWithAggregatesInput = {
    AND?: driversScalarWhereWithAggregatesInput | driversScalarWhereWithAggregatesInput[]
    OR?: driversScalarWhereWithAggregatesInput[]
    NOT?: driversScalarWhereWithAggregatesInput | driversScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"drivers"> | number
    name?: StringWithAggregatesFilter<"drivers"> | string
    phone?: StringWithAggregatesFilter<"drivers"> | string
    vehicle_type?: StringNullableWithAggregatesFilter<"drivers"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"drivers"> | Date | string | null
    is_available?: BoolNullableWithAggregatesFilter<"drivers"> | boolean | null
  }

  export type order_itemsWhereInput = {
    AND?: order_itemsWhereInput | order_itemsWhereInput[]
    OR?: order_itemsWhereInput[]
    NOT?: order_itemsWhereInput | order_itemsWhereInput[]
    id?: IntFilter<"order_items"> | number
    order_id?: IntNullableFilter<"order_items"> | number | null
    product_id?: IntNullableFilter<"order_items"> | number | null
    quantity?: IntFilter<"order_items"> | number
    price?: DecimalFilter<"order_items"> | Decimal | DecimalJsLike | number | string
    orders?: XOR<OrdersNullableScalarRelationFilter, ordersWhereInput> | null
    products?: XOR<ProductsNullableScalarRelationFilter, productsWhereInput> | null
  }

  export type order_itemsOrderByWithRelationInput = {
    id?: SortOrder
    order_id?: SortOrderInput | SortOrder
    product_id?: SortOrderInput | SortOrder
    quantity?: SortOrder
    price?: SortOrder
    orders?: ordersOrderByWithRelationInput
    products?: productsOrderByWithRelationInput
  }

  export type order_itemsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: order_itemsWhereInput | order_itemsWhereInput[]
    OR?: order_itemsWhereInput[]
    NOT?: order_itemsWhereInput | order_itemsWhereInput[]
    order_id?: IntNullableFilter<"order_items"> | number | null
    product_id?: IntNullableFilter<"order_items"> | number | null
    quantity?: IntFilter<"order_items"> | number
    price?: DecimalFilter<"order_items"> | Decimal | DecimalJsLike | number | string
    orders?: XOR<OrdersNullableScalarRelationFilter, ordersWhereInput> | null
    products?: XOR<ProductsNullableScalarRelationFilter, productsWhereInput> | null
  }, "id">

  export type order_itemsOrderByWithAggregationInput = {
    id?: SortOrder
    order_id?: SortOrderInput | SortOrder
    product_id?: SortOrderInput | SortOrder
    quantity?: SortOrder
    price?: SortOrder
    _count?: order_itemsCountOrderByAggregateInput
    _avg?: order_itemsAvgOrderByAggregateInput
    _max?: order_itemsMaxOrderByAggregateInput
    _min?: order_itemsMinOrderByAggregateInput
    _sum?: order_itemsSumOrderByAggregateInput
  }

  export type order_itemsScalarWhereWithAggregatesInput = {
    AND?: order_itemsScalarWhereWithAggregatesInput | order_itemsScalarWhereWithAggregatesInput[]
    OR?: order_itemsScalarWhereWithAggregatesInput[]
    NOT?: order_itemsScalarWhereWithAggregatesInput | order_itemsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"order_items"> | number
    order_id?: IntNullableWithAggregatesFilter<"order_items"> | number | null
    product_id?: IntNullableWithAggregatesFilter<"order_items"> | number | null
    quantity?: IntWithAggregatesFilter<"order_items"> | number
    price?: DecimalWithAggregatesFilter<"order_items"> | Decimal | DecimalJsLike | number | string
  }

  export type ordersWhereInput = {
    AND?: ordersWhereInput | ordersWhereInput[]
    OR?: ordersWhereInput[]
    NOT?: ordersWhereInput | ordersWhereInput[]
    id?: IntFilter<"orders"> | number
    user_id?: IntNullableFilter<"orders"> | number | null
    store_id?: IntNullableFilter<"orders"> | number | null
    status?: StringNullableFilter<"orders"> | string | null
    total?: DecimalFilter<"orders"> | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeNullableFilter<"orders"> | Date | string | null
    deliveries?: DeliveriesListRelationFilter
    order_items?: Order_itemsListRelationFilter
    stores?: XOR<StoresNullableScalarRelationFilter, storesWhereInput> | null
    users?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
  }

  export type ordersOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrderInput | SortOrder
    store_id?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    total?: SortOrder
    created_at?: SortOrderInput | SortOrder
    deliveries?: deliveriesOrderByRelationAggregateInput
    order_items?: order_itemsOrderByRelationAggregateInput
    stores?: storesOrderByWithRelationInput
    users?: usersOrderByWithRelationInput
  }

  export type ordersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ordersWhereInput | ordersWhereInput[]
    OR?: ordersWhereInput[]
    NOT?: ordersWhereInput | ordersWhereInput[]
    user_id?: IntNullableFilter<"orders"> | number | null
    store_id?: IntNullableFilter<"orders"> | number | null
    status?: StringNullableFilter<"orders"> | string | null
    total?: DecimalFilter<"orders"> | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeNullableFilter<"orders"> | Date | string | null
    deliveries?: DeliveriesListRelationFilter
    order_items?: Order_itemsListRelationFilter
    stores?: XOR<StoresNullableScalarRelationFilter, storesWhereInput> | null
    users?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
  }, "id">

  export type ordersOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrderInput | SortOrder
    store_id?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    total?: SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: ordersCountOrderByAggregateInput
    _avg?: ordersAvgOrderByAggregateInput
    _max?: ordersMaxOrderByAggregateInput
    _min?: ordersMinOrderByAggregateInput
    _sum?: ordersSumOrderByAggregateInput
  }

  export type ordersScalarWhereWithAggregatesInput = {
    AND?: ordersScalarWhereWithAggregatesInput | ordersScalarWhereWithAggregatesInput[]
    OR?: ordersScalarWhereWithAggregatesInput[]
    NOT?: ordersScalarWhereWithAggregatesInput | ordersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"orders"> | number
    user_id?: IntNullableWithAggregatesFilter<"orders"> | number | null
    store_id?: IntNullableWithAggregatesFilter<"orders"> | number | null
    status?: StringNullableWithAggregatesFilter<"orders"> | string | null
    total?: DecimalWithAggregatesFilter<"orders"> | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeNullableWithAggregatesFilter<"orders"> | Date | string | null
  }

  export type productsWhereInput = {
    AND?: productsWhereInput | productsWhereInput[]
    OR?: productsWhereInput[]
    NOT?: productsWhereInput | productsWhereInput[]
    id?: IntFilter<"products"> | number
    store_id?: IntNullableFilter<"products"> | number | null
    name?: StringFilter<"products"> | string
    description?: StringNullableFilter<"products"> | string | null
    price?: DecimalFilter<"products"> | Decimal | DecimalJsLike | number | string
    stock?: IntNullableFilter<"products"> | number | null
    created_at?: DateTimeNullableFilter<"products"> | Date | string | null
    order_items?: Order_itemsListRelationFilter
    stores?: XOR<StoresNullableScalarRelationFilter, storesWhereInput> | null
  }

  export type productsOrderByWithRelationInput = {
    id?: SortOrder
    store_id?: SortOrderInput | SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    price?: SortOrder
    stock?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    order_items?: order_itemsOrderByRelationAggregateInput
    stores?: storesOrderByWithRelationInput
  }

  export type productsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: productsWhereInput | productsWhereInput[]
    OR?: productsWhereInput[]
    NOT?: productsWhereInput | productsWhereInput[]
    store_id?: IntNullableFilter<"products"> | number | null
    name?: StringFilter<"products"> | string
    description?: StringNullableFilter<"products"> | string | null
    price?: DecimalFilter<"products"> | Decimal | DecimalJsLike | number | string
    stock?: IntNullableFilter<"products"> | number | null
    created_at?: DateTimeNullableFilter<"products"> | Date | string | null
    order_items?: Order_itemsListRelationFilter
    stores?: XOR<StoresNullableScalarRelationFilter, storesWhereInput> | null
  }, "id">

  export type productsOrderByWithAggregationInput = {
    id?: SortOrder
    store_id?: SortOrderInput | SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    price?: SortOrder
    stock?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: productsCountOrderByAggregateInput
    _avg?: productsAvgOrderByAggregateInput
    _max?: productsMaxOrderByAggregateInput
    _min?: productsMinOrderByAggregateInput
    _sum?: productsSumOrderByAggregateInput
  }

  export type productsScalarWhereWithAggregatesInput = {
    AND?: productsScalarWhereWithAggregatesInput | productsScalarWhereWithAggregatesInput[]
    OR?: productsScalarWhereWithAggregatesInput[]
    NOT?: productsScalarWhereWithAggregatesInput | productsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"products"> | number
    store_id?: IntNullableWithAggregatesFilter<"products"> | number | null
    name?: StringWithAggregatesFilter<"products"> | string
    description?: StringNullableWithAggregatesFilter<"products"> | string | null
    price?: DecimalWithAggregatesFilter<"products"> | Decimal | DecimalJsLike | number | string
    stock?: IntNullableWithAggregatesFilter<"products"> | number | null
    created_at?: DateTimeNullableWithAggregatesFilter<"products"> | Date | string | null
  }

  export type storesWhereInput = {
    AND?: storesWhereInput | storesWhereInput[]
    OR?: storesWhereInput[]
    NOT?: storesWhereInput | storesWhereInput[]
    id?: IntFilter<"stores"> | number
    name?: StringFilter<"stores"> | string
    address?: StringNullableFilter<"stores"> | string | null
    phone?: StringNullableFilter<"stores"> | string | null
    created_at?: DateTimeNullableFilter<"stores"> | Date | string | null
    orders?: OrdersListRelationFilter
    products?: ProductsListRelationFilter
  }

  export type storesOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    orders?: ordersOrderByRelationAggregateInput
    products?: productsOrderByRelationAggregateInput
  }

  export type storesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: storesWhereInput | storesWhereInput[]
    OR?: storesWhereInput[]
    NOT?: storesWhereInput | storesWhereInput[]
    name?: StringFilter<"stores"> | string
    address?: StringNullableFilter<"stores"> | string | null
    phone?: StringNullableFilter<"stores"> | string | null
    created_at?: DateTimeNullableFilter<"stores"> | Date | string | null
    orders?: OrdersListRelationFilter
    products?: ProductsListRelationFilter
  }, "id">

  export type storesOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: storesCountOrderByAggregateInput
    _avg?: storesAvgOrderByAggregateInput
    _max?: storesMaxOrderByAggregateInput
    _min?: storesMinOrderByAggregateInput
    _sum?: storesSumOrderByAggregateInput
  }

  export type storesScalarWhereWithAggregatesInput = {
    AND?: storesScalarWhereWithAggregatesInput | storesScalarWhereWithAggregatesInput[]
    OR?: storesScalarWhereWithAggregatesInput[]
    NOT?: storesScalarWhereWithAggregatesInput | storesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"stores"> | number
    name?: StringWithAggregatesFilter<"stores"> | string
    address?: StringNullableWithAggregatesFilter<"stores"> | string | null
    phone?: StringNullableWithAggregatesFilter<"stores"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"stores"> | Date | string | null
  }

  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    id?: IntFilter<"users"> | number
    email?: StringFilter<"users"> | string
    password_hash?: StringFilter<"users"> | string
    created_at?: DateTimeNullableFilter<"users"> | Date | string | null
    firstname?: StringNullableFilter<"users"> | string | null
    lastname?: StringNullableFilter<"users"> | string | null
    street?: StringNullableFilter<"users"> | string | null
    city?: StringNullableFilter<"users"> | string | null
    postal?: StringNullableFilter<"users"> | string | null
    stripe_customer_id?: StringNullableFilter<"users"> | string | null
    refresh_token?: StringNullableFilter<"users"> | string | null
    orders?: OrdersListRelationFilter
  }

  export type usersOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    created_at?: SortOrderInput | SortOrder
    firstname?: SortOrderInput | SortOrder
    lastname?: SortOrderInput | SortOrder
    street?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    postal?: SortOrderInput | SortOrder
    stripe_customer_id?: SortOrderInput | SortOrder
    refresh_token?: SortOrderInput | SortOrder
    orders?: ordersOrderByRelationAggregateInput
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    password_hash?: StringFilter<"users"> | string
    created_at?: DateTimeNullableFilter<"users"> | Date | string | null
    firstname?: StringNullableFilter<"users"> | string | null
    lastname?: StringNullableFilter<"users"> | string | null
    street?: StringNullableFilter<"users"> | string | null
    city?: StringNullableFilter<"users"> | string | null
    postal?: StringNullableFilter<"users"> | string | null
    stripe_customer_id?: StringNullableFilter<"users"> | string | null
    refresh_token?: StringNullableFilter<"users"> | string | null
    orders?: OrdersListRelationFilter
  }, "id" | "email">

  export type usersOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    created_at?: SortOrderInput | SortOrder
    firstname?: SortOrderInput | SortOrder
    lastname?: SortOrderInput | SortOrder
    street?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    postal?: SortOrderInput | SortOrder
    stripe_customer_id?: SortOrderInput | SortOrder
    refresh_token?: SortOrderInput | SortOrder
    _count?: usersCountOrderByAggregateInput
    _avg?: usersAvgOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
    _sum?: usersSumOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    OR?: usersScalarWhereWithAggregatesInput[]
    NOT?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"users"> | number
    email?: StringWithAggregatesFilter<"users"> | string
    password_hash?: StringWithAggregatesFilter<"users"> | string
    created_at?: DateTimeNullableWithAggregatesFilter<"users"> | Date | string | null
    firstname?: StringNullableWithAggregatesFilter<"users"> | string | null
    lastname?: StringNullableWithAggregatesFilter<"users"> | string | null
    street?: StringNullableWithAggregatesFilter<"users"> | string | null
    city?: StringNullableWithAggregatesFilter<"users"> | string | null
    postal?: StringNullableWithAggregatesFilter<"users"> | string | null
    stripe_customer_id?: StringNullableWithAggregatesFilter<"users"> | string | null
    refresh_token?: StringNullableWithAggregatesFilter<"users"> | string | null
  }

  export type deliveriesCreateInput = {
    status?: string | null
    created_at?: Date | string | null
    drivers?: driversCreateNestedOneWithoutDeliveriesInput
    orders?: ordersCreateNestedOneWithoutDeliveriesInput
  }

  export type deliveriesUncheckedCreateInput = {
    id?: number
    order_id?: number | null
    driver_id?: number | null
    status?: string | null
    created_at?: Date | string | null
  }

  export type deliveriesUpdateInput = {
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    drivers?: driversUpdateOneWithoutDeliveriesNestedInput
    orders?: ordersUpdateOneWithoutDeliveriesNestedInput
  }

  export type deliveriesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    order_id?: NullableIntFieldUpdateOperationsInput | number | null
    driver_id?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type deliveriesCreateManyInput = {
    id?: number
    order_id?: number | null
    driver_id?: number | null
    status?: string | null
    created_at?: Date | string | null
  }

  export type deliveriesUpdateManyMutationInput = {
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type deliveriesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    order_id?: NullableIntFieldUpdateOperationsInput | number | null
    driver_id?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type driversCreateInput = {
    name: string
    phone: string
    vehicle_type?: string | null
    created_at?: Date | string | null
    is_available?: boolean | null
    deliveries?: deliveriesCreateNestedManyWithoutDriversInput
  }

  export type driversUncheckedCreateInput = {
    id?: number
    name: string
    phone: string
    vehicle_type?: string | null
    created_at?: Date | string | null
    is_available?: boolean | null
    deliveries?: deliveriesUncheckedCreateNestedManyWithoutDriversInput
  }

  export type driversUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    vehicle_type?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_available?: NullableBoolFieldUpdateOperationsInput | boolean | null
    deliveries?: deliveriesUpdateManyWithoutDriversNestedInput
  }

  export type driversUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    vehicle_type?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_available?: NullableBoolFieldUpdateOperationsInput | boolean | null
    deliveries?: deliveriesUncheckedUpdateManyWithoutDriversNestedInput
  }

  export type driversCreateManyInput = {
    id?: number
    name: string
    phone: string
    vehicle_type?: string | null
    created_at?: Date | string | null
    is_available?: boolean | null
  }

  export type driversUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    vehicle_type?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_available?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type driversUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    vehicle_type?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_available?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type order_itemsCreateInput = {
    quantity: number
    price: Decimal | DecimalJsLike | number | string
    orders?: ordersCreateNestedOneWithoutOrder_itemsInput
    products?: productsCreateNestedOneWithoutOrder_itemsInput
  }

  export type order_itemsUncheckedCreateInput = {
    id?: number
    order_id?: number | null
    product_id?: number | null
    quantity: number
    price: Decimal | DecimalJsLike | number | string
  }

  export type order_itemsUpdateInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    orders?: ordersUpdateOneWithoutOrder_itemsNestedInput
    products?: productsUpdateOneWithoutOrder_itemsNestedInput
  }

  export type order_itemsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    order_id?: NullableIntFieldUpdateOperationsInput | number | null
    product_id?: NullableIntFieldUpdateOperationsInput | number | null
    quantity?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type order_itemsCreateManyInput = {
    id?: number
    order_id?: number | null
    product_id?: number | null
    quantity: number
    price: Decimal | DecimalJsLike | number | string
  }

  export type order_itemsUpdateManyMutationInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type order_itemsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    order_id?: NullableIntFieldUpdateOperationsInput | number | null
    product_id?: NullableIntFieldUpdateOperationsInput | number | null
    quantity?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type ordersCreateInput = {
    status?: string | null
    total: Decimal | DecimalJsLike | number | string
    created_at?: Date | string | null
    deliveries?: deliveriesCreateNestedManyWithoutOrdersInput
    order_items?: order_itemsCreateNestedManyWithoutOrdersInput
    stores?: storesCreateNestedOneWithoutOrdersInput
    users?: usersCreateNestedOneWithoutOrdersInput
  }

  export type ordersUncheckedCreateInput = {
    id?: number
    user_id?: number | null
    store_id?: number | null
    status?: string | null
    total: Decimal | DecimalJsLike | number | string
    created_at?: Date | string | null
    deliveries?: deliveriesUncheckedCreateNestedManyWithoutOrdersInput
    order_items?: order_itemsUncheckedCreateNestedManyWithoutOrdersInput
  }

  export type ordersUpdateInput = {
    status?: NullableStringFieldUpdateOperationsInput | string | null
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deliveries?: deliveriesUpdateManyWithoutOrdersNestedInput
    order_items?: order_itemsUpdateManyWithoutOrdersNestedInput
    stores?: storesUpdateOneWithoutOrdersNestedInput
    users?: usersUpdateOneWithoutOrdersNestedInput
  }

  export type ordersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    store_id?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deliveries?: deliveriesUncheckedUpdateManyWithoutOrdersNestedInput
    order_items?: order_itemsUncheckedUpdateManyWithoutOrdersNestedInput
  }

  export type ordersCreateManyInput = {
    id?: number
    user_id?: number | null
    store_id?: number | null
    status?: string | null
    total: Decimal | DecimalJsLike | number | string
    created_at?: Date | string | null
  }

  export type ordersUpdateManyMutationInput = {
    status?: NullableStringFieldUpdateOperationsInput | string | null
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ordersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    store_id?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type productsCreateInput = {
    name: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    stock?: number | null
    created_at?: Date | string | null
    order_items?: order_itemsCreateNestedManyWithoutProductsInput
    stores?: storesCreateNestedOneWithoutProductsInput
  }

  export type productsUncheckedCreateInput = {
    id?: number
    store_id?: number | null
    name: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    stock?: number | null
    created_at?: Date | string | null
    order_items?: order_itemsUncheckedCreateNestedManyWithoutProductsInput
  }

  export type productsUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stock?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    order_items?: order_itemsUpdateManyWithoutProductsNestedInput
    stores?: storesUpdateOneWithoutProductsNestedInput
  }

  export type productsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    store_id?: NullableIntFieldUpdateOperationsInput | number | null
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stock?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    order_items?: order_itemsUncheckedUpdateManyWithoutProductsNestedInput
  }

  export type productsCreateManyInput = {
    id?: number
    store_id?: number | null
    name: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    stock?: number | null
    created_at?: Date | string | null
  }

  export type productsUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stock?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type productsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    store_id?: NullableIntFieldUpdateOperationsInput | number | null
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stock?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type storesCreateInput = {
    name: string
    address?: string | null
    phone?: string | null
    created_at?: Date | string | null
    orders?: ordersCreateNestedManyWithoutStoresInput
    products?: productsCreateNestedManyWithoutStoresInput
  }

  export type storesUncheckedCreateInput = {
    id?: number
    name: string
    address?: string | null
    phone?: string | null
    created_at?: Date | string | null
    orders?: ordersUncheckedCreateNestedManyWithoutStoresInput
    products?: productsUncheckedCreateNestedManyWithoutStoresInput
  }

  export type storesUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    orders?: ordersUpdateManyWithoutStoresNestedInput
    products?: productsUpdateManyWithoutStoresNestedInput
  }

  export type storesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    orders?: ordersUncheckedUpdateManyWithoutStoresNestedInput
    products?: productsUncheckedUpdateManyWithoutStoresNestedInput
  }

  export type storesCreateManyInput = {
    id?: number
    name: string
    address?: string | null
    phone?: string | null
    created_at?: Date | string | null
  }

  export type storesUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type storesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type usersCreateInput = {
    email: string
    password_hash: string
    created_at?: Date | string | null
    firstname?: string | null
    lastname?: string | null
    street?: string | null
    city?: string | null
    postal?: string | null
    stripe_customer_id?: string | null
    refresh_token?: string | null
    orders?: ordersCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateInput = {
    id?: number
    email: string
    password_hash: string
    created_at?: Date | string | null
    firstname?: string | null
    lastname?: string | null
    street?: string | null
    city?: string | null
    postal?: string | null
    stripe_customer_id?: string | null
    refresh_token?: string | null
    orders?: ordersUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    firstname?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    street?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    postal?: NullableStringFieldUpdateOperationsInput | string | null
    stripe_customer_id?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    orders?: ordersUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    firstname?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    street?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    postal?: NullableStringFieldUpdateOperationsInput | string | null
    stripe_customer_id?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    orders?: ordersUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type usersCreateManyInput = {
    id?: number
    email: string
    password_hash: string
    created_at?: Date | string | null
    firstname?: string | null
    lastname?: string | null
    street?: string | null
    city?: string | null
    postal?: string | null
    stripe_customer_id?: string | null
    refresh_token?: string | null
  }

  export type usersUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    firstname?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    street?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    postal?: NullableStringFieldUpdateOperationsInput | string | null
    stripe_customer_id?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type usersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    firstname?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    street?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    postal?: NullableStringFieldUpdateOperationsInput | string | null
    stripe_customer_id?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type DriversNullableScalarRelationFilter = {
    is?: driversWhereInput | null
    isNot?: driversWhereInput | null
  }

  export type OrdersNullableScalarRelationFilter = {
    is?: ordersWhereInput | null
    isNot?: ordersWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type deliveriesCountOrderByAggregateInput = {
    id?: SortOrder
    order_id?: SortOrder
    driver_id?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
  }

  export type deliveriesAvgOrderByAggregateInput = {
    id?: SortOrder
    order_id?: SortOrder
    driver_id?: SortOrder
  }

  export type deliveriesMaxOrderByAggregateInput = {
    id?: SortOrder
    order_id?: SortOrder
    driver_id?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
  }

  export type deliveriesMinOrderByAggregateInput = {
    id?: SortOrder
    order_id?: SortOrder
    driver_id?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
  }

  export type deliveriesSumOrderByAggregateInput = {
    id?: SortOrder
    order_id?: SortOrder
    driver_id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type DeliveriesListRelationFilter = {
    every?: deliveriesWhereInput
    some?: deliveriesWhereInput
    none?: deliveriesWhereInput
  }

  export type deliveriesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type driversCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    vehicle_type?: SortOrder
    created_at?: SortOrder
    is_available?: SortOrder
  }

  export type driversAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type driversMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    vehicle_type?: SortOrder
    created_at?: SortOrder
    is_available?: SortOrder
  }

  export type driversMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    vehicle_type?: SortOrder
    created_at?: SortOrder
    is_available?: SortOrder
  }

  export type driversSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type ProductsNullableScalarRelationFilter = {
    is?: productsWhereInput | null
    isNot?: productsWhereInput | null
  }

  export type order_itemsCountOrderByAggregateInput = {
    id?: SortOrder
    order_id?: SortOrder
    product_id?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
  }

  export type order_itemsAvgOrderByAggregateInput = {
    id?: SortOrder
    order_id?: SortOrder
    product_id?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
  }

  export type order_itemsMaxOrderByAggregateInput = {
    id?: SortOrder
    order_id?: SortOrder
    product_id?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
  }

  export type order_itemsMinOrderByAggregateInput = {
    id?: SortOrder
    order_id?: SortOrder
    product_id?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
  }

  export type order_itemsSumOrderByAggregateInput = {
    id?: SortOrder
    order_id?: SortOrder
    product_id?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type Order_itemsListRelationFilter = {
    every?: order_itemsWhereInput
    some?: order_itemsWhereInput
    none?: order_itemsWhereInput
  }

  export type StoresNullableScalarRelationFilter = {
    is?: storesWhereInput | null
    isNot?: storesWhereInput | null
  }

  export type UsersNullableScalarRelationFilter = {
    is?: usersWhereInput | null
    isNot?: usersWhereInput | null
  }

  export type order_itemsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ordersCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    store_id?: SortOrder
    status?: SortOrder
    total?: SortOrder
    created_at?: SortOrder
  }

  export type ordersAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    store_id?: SortOrder
    total?: SortOrder
  }

  export type ordersMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    store_id?: SortOrder
    status?: SortOrder
    total?: SortOrder
    created_at?: SortOrder
  }

  export type ordersMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    store_id?: SortOrder
    status?: SortOrder
    total?: SortOrder
    created_at?: SortOrder
  }

  export type ordersSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    store_id?: SortOrder
    total?: SortOrder
  }

  export type productsCountOrderByAggregateInput = {
    id?: SortOrder
    store_id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    stock?: SortOrder
    created_at?: SortOrder
  }

  export type productsAvgOrderByAggregateInput = {
    id?: SortOrder
    store_id?: SortOrder
    price?: SortOrder
    stock?: SortOrder
  }

  export type productsMaxOrderByAggregateInput = {
    id?: SortOrder
    store_id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    stock?: SortOrder
    created_at?: SortOrder
  }

  export type productsMinOrderByAggregateInput = {
    id?: SortOrder
    store_id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    stock?: SortOrder
    created_at?: SortOrder
  }

  export type productsSumOrderByAggregateInput = {
    id?: SortOrder
    store_id?: SortOrder
    price?: SortOrder
    stock?: SortOrder
  }

  export type OrdersListRelationFilter = {
    every?: ordersWhereInput
    some?: ordersWhereInput
    none?: ordersWhereInput
  }

  export type ProductsListRelationFilter = {
    every?: productsWhereInput
    some?: productsWhereInput
    none?: productsWhereInput
  }

  export type ordersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type productsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type storesCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    phone?: SortOrder
    created_at?: SortOrder
  }

  export type storesAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type storesMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    phone?: SortOrder
    created_at?: SortOrder
  }

  export type storesMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    phone?: SortOrder
    created_at?: SortOrder
  }

  export type storesSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type usersCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    created_at?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    street?: SortOrder
    city?: SortOrder
    postal?: SortOrder
    stripe_customer_id?: SortOrder
    refresh_token?: SortOrder
  }

  export type usersAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    created_at?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    street?: SortOrder
    city?: SortOrder
    postal?: SortOrder
    stripe_customer_id?: SortOrder
    refresh_token?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    created_at?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    street?: SortOrder
    city?: SortOrder
    postal?: SortOrder
    stripe_customer_id?: SortOrder
    refresh_token?: SortOrder
  }

  export type usersSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type driversCreateNestedOneWithoutDeliveriesInput = {
    create?: XOR<driversCreateWithoutDeliveriesInput, driversUncheckedCreateWithoutDeliveriesInput>
    connectOrCreate?: driversCreateOrConnectWithoutDeliveriesInput
    connect?: driversWhereUniqueInput
  }

  export type ordersCreateNestedOneWithoutDeliveriesInput = {
    create?: XOR<ordersCreateWithoutDeliveriesInput, ordersUncheckedCreateWithoutDeliveriesInput>
    connectOrCreate?: ordersCreateOrConnectWithoutDeliveriesInput
    connect?: ordersWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type driversUpdateOneWithoutDeliveriesNestedInput = {
    create?: XOR<driversCreateWithoutDeliveriesInput, driversUncheckedCreateWithoutDeliveriesInput>
    connectOrCreate?: driversCreateOrConnectWithoutDeliveriesInput
    upsert?: driversUpsertWithoutDeliveriesInput
    disconnect?: driversWhereInput | boolean
    delete?: driversWhereInput | boolean
    connect?: driversWhereUniqueInput
    update?: XOR<XOR<driversUpdateToOneWithWhereWithoutDeliveriesInput, driversUpdateWithoutDeliveriesInput>, driversUncheckedUpdateWithoutDeliveriesInput>
  }

  export type ordersUpdateOneWithoutDeliveriesNestedInput = {
    create?: XOR<ordersCreateWithoutDeliveriesInput, ordersUncheckedCreateWithoutDeliveriesInput>
    connectOrCreate?: ordersCreateOrConnectWithoutDeliveriesInput
    upsert?: ordersUpsertWithoutDeliveriesInput
    disconnect?: ordersWhereInput | boolean
    delete?: ordersWhereInput | boolean
    connect?: ordersWhereUniqueInput
    update?: XOR<XOR<ordersUpdateToOneWithWhereWithoutDeliveriesInput, ordersUpdateWithoutDeliveriesInput>, ordersUncheckedUpdateWithoutDeliveriesInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type deliveriesCreateNestedManyWithoutDriversInput = {
    create?: XOR<deliveriesCreateWithoutDriversInput, deliveriesUncheckedCreateWithoutDriversInput> | deliveriesCreateWithoutDriversInput[] | deliveriesUncheckedCreateWithoutDriversInput[]
    connectOrCreate?: deliveriesCreateOrConnectWithoutDriversInput | deliveriesCreateOrConnectWithoutDriversInput[]
    createMany?: deliveriesCreateManyDriversInputEnvelope
    connect?: deliveriesWhereUniqueInput | deliveriesWhereUniqueInput[]
  }

  export type deliveriesUncheckedCreateNestedManyWithoutDriversInput = {
    create?: XOR<deliveriesCreateWithoutDriversInput, deliveriesUncheckedCreateWithoutDriversInput> | deliveriesCreateWithoutDriversInput[] | deliveriesUncheckedCreateWithoutDriversInput[]
    connectOrCreate?: deliveriesCreateOrConnectWithoutDriversInput | deliveriesCreateOrConnectWithoutDriversInput[]
    createMany?: deliveriesCreateManyDriversInputEnvelope
    connect?: deliveriesWhereUniqueInput | deliveriesWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type deliveriesUpdateManyWithoutDriversNestedInput = {
    create?: XOR<deliveriesCreateWithoutDriversInput, deliveriesUncheckedCreateWithoutDriversInput> | deliveriesCreateWithoutDriversInput[] | deliveriesUncheckedCreateWithoutDriversInput[]
    connectOrCreate?: deliveriesCreateOrConnectWithoutDriversInput | deliveriesCreateOrConnectWithoutDriversInput[]
    upsert?: deliveriesUpsertWithWhereUniqueWithoutDriversInput | deliveriesUpsertWithWhereUniqueWithoutDriversInput[]
    createMany?: deliveriesCreateManyDriversInputEnvelope
    set?: deliveriesWhereUniqueInput | deliveriesWhereUniqueInput[]
    disconnect?: deliveriesWhereUniqueInput | deliveriesWhereUniqueInput[]
    delete?: deliveriesWhereUniqueInput | deliveriesWhereUniqueInput[]
    connect?: deliveriesWhereUniqueInput | deliveriesWhereUniqueInput[]
    update?: deliveriesUpdateWithWhereUniqueWithoutDriversInput | deliveriesUpdateWithWhereUniqueWithoutDriversInput[]
    updateMany?: deliveriesUpdateManyWithWhereWithoutDriversInput | deliveriesUpdateManyWithWhereWithoutDriversInput[]
    deleteMany?: deliveriesScalarWhereInput | deliveriesScalarWhereInput[]
  }

  export type deliveriesUncheckedUpdateManyWithoutDriversNestedInput = {
    create?: XOR<deliveriesCreateWithoutDriversInput, deliveriesUncheckedCreateWithoutDriversInput> | deliveriesCreateWithoutDriversInput[] | deliveriesUncheckedCreateWithoutDriversInput[]
    connectOrCreate?: deliveriesCreateOrConnectWithoutDriversInput | deliveriesCreateOrConnectWithoutDriversInput[]
    upsert?: deliveriesUpsertWithWhereUniqueWithoutDriversInput | deliveriesUpsertWithWhereUniqueWithoutDriversInput[]
    createMany?: deliveriesCreateManyDriversInputEnvelope
    set?: deliveriesWhereUniqueInput | deliveriesWhereUniqueInput[]
    disconnect?: deliveriesWhereUniqueInput | deliveriesWhereUniqueInput[]
    delete?: deliveriesWhereUniqueInput | deliveriesWhereUniqueInput[]
    connect?: deliveriesWhereUniqueInput | deliveriesWhereUniqueInput[]
    update?: deliveriesUpdateWithWhereUniqueWithoutDriversInput | deliveriesUpdateWithWhereUniqueWithoutDriversInput[]
    updateMany?: deliveriesUpdateManyWithWhereWithoutDriversInput | deliveriesUpdateManyWithWhereWithoutDriversInput[]
    deleteMany?: deliveriesScalarWhereInput | deliveriesScalarWhereInput[]
  }

  export type ordersCreateNestedOneWithoutOrder_itemsInput = {
    create?: XOR<ordersCreateWithoutOrder_itemsInput, ordersUncheckedCreateWithoutOrder_itemsInput>
    connectOrCreate?: ordersCreateOrConnectWithoutOrder_itemsInput
    connect?: ordersWhereUniqueInput
  }

  export type productsCreateNestedOneWithoutOrder_itemsInput = {
    create?: XOR<productsCreateWithoutOrder_itemsInput, productsUncheckedCreateWithoutOrder_itemsInput>
    connectOrCreate?: productsCreateOrConnectWithoutOrder_itemsInput
    connect?: productsWhereUniqueInput
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type ordersUpdateOneWithoutOrder_itemsNestedInput = {
    create?: XOR<ordersCreateWithoutOrder_itemsInput, ordersUncheckedCreateWithoutOrder_itemsInput>
    connectOrCreate?: ordersCreateOrConnectWithoutOrder_itemsInput
    upsert?: ordersUpsertWithoutOrder_itemsInput
    disconnect?: ordersWhereInput | boolean
    delete?: ordersWhereInput | boolean
    connect?: ordersWhereUniqueInput
    update?: XOR<XOR<ordersUpdateToOneWithWhereWithoutOrder_itemsInput, ordersUpdateWithoutOrder_itemsInput>, ordersUncheckedUpdateWithoutOrder_itemsInput>
  }

  export type productsUpdateOneWithoutOrder_itemsNestedInput = {
    create?: XOR<productsCreateWithoutOrder_itemsInput, productsUncheckedCreateWithoutOrder_itemsInput>
    connectOrCreate?: productsCreateOrConnectWithoutOrder_itemsInput
    upsert?: productsUpsertWithoutOrder_itemsInput
    disconnect?: productsWhereInput | boolean
    delete?: productsWhereInput | boolean
    connect?: productsWhereUniqueInput
    update?: XOR<XOR<productsUpdateToOneWithWhereWithoutOrder_itemsInput, productsUpdateWithoutOrder_itemsInput>, productsUncheckedUpdateWithoutOrder_itemsInput>
  }

  export type deliveriesCreateNestedManyWithoutOrdersInput = {
    create?: XOR<deliveriesCreateWithoutOrdersInput, deliveriesUncheckedCreateWithoutOrdersInput> | deliveriesCreateWithoutOrdersInput[] | deliveriesUncheckedCreateWithoutOrdersInput[]
    connectOrCreate?: deliveriesCreateOrConnectWithoutOrdersInput | deliveriesCreateOrConnectWithoutOrdersInput[]
    createMany?: deliveriesCreateManyOrdersInputEnvelope
    connect?: deliveriesWhereUniqueInput | deliveriesWhereUniqueInput[]
  }

  export type order_itemsCreateNestedManyWithoutOrdersInput = {
    create?: XOR<order_itemsCreateWithoutOrdersInput, order_itemsUncheckedCreateWithoutOrdersInput> | order_itemsCreateWithoutOrdersInput[] | order_itemsUncheckedCreateWithoutOrdersInput[]
    connectOrCreate?: order_itemsCreateOrConnectWithoutOrdersInput | order_itemsCreateOrConnectWithoutOrdersInput[]
    createMany?: order_itemsCreateManyOrdersInputEnvelope
    connect?: order_itemsWhereUniqueInput | order_itemsWhereUniqueInput[]
  }

  export type storesCreateNestedOneWithoutOrdersInput = {
    create?: XOR<storesCreateWithoutOrdersInput, storesUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: storesCreateOrConnectWithoutOrdersInput
    connect?: storesWhereUniqueInput
  }

  export type usersCreateNestedOneWithoutOrdersInput = {
    create?: XOR<usersCreateWithoutOrdersInput, usersUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: usersCreateOrConnectWithoutOrdersInput
    connect?: usersWhereUniqueInput
  }

  export type deliveriesUncheckedCreateNestedManyWithoutOrdersInput = {
    create?: XOR<deliveriesCreateWithoutOrdersInput, deliveriesUncheckedCreateWithoutOrdersInput> | deliveriesCreateWithoutOrdersInput[] | deliveriesUncheckedCreateWithoutOrdersInput[]
    connectOrCreate?: deliveriesCreateOrConnectWithoutOrdersInput | deliveriesCreateOrConnectWithoutOrdersInput[]
    createMany?: deliveriesCreateManyOrdersInputEnvelope
    connect?: deliveriesWhereUniqueInput | deliveriesWhereUniqueInput[]
  }

  export type order_itemsUncheckedCreateNestedManyWithoutOrdersInput = {
    create?: XOR<order_itemsCreateWithoutOrdersInput, order_itemsUncheckedCreateWithoutOrdersInput> | order_itemsCreateWithoutOrdersInput[] | order_itemsUncheckedCreateWithoutOrdersInput[]
    connectOrCreate?: order_itemsCreateOrConnectWithoutOrdersInput | order_itemsCreateOrConnectWithoutOrdersInput[]
    createMany?: order_itemsCreateManyOrdersInputEnvelope
    connect?: order_itemsWhereUniqueInput | order_itemsWhereUniqueInput[]
  }

  export type deliveriesUpdateManyWithoutOrdersNestedInput = {
    create?: XOR<deliveriesCreateWithoutOrdersInput, deliveriesUncheckedCreateWithoutOrdersInput> | deliveriesCreateWithoutOrdersInput[] | deliveriesUncheckedCreateWithoutOrdersInput[]
    connectOrCreate?: deliveriesCreateOrConnectWithoutOrdersInput | deliveriesCreateOrConnectWithoutOrdersInput[]
    upsert?: deliveriesUpsertWithWhereUniqueWithoutOrdersInput | deliveriesUpsertWithWhereUniqueWithoutOrdersInput[]
    createMany?: deliveriesCreateManyOrdersInputEnvelope
    set?: deliveriesWhereUniqueInput | deliveriesWhereUniqueInput[]
    disconnect?: deliveriesWhereUniqueInput | deliveriesWhereUniqueInput[]
    delete?: deliveriesWhereUniqueInput | deliveriesWhereUniqueInput[]
    connect?: deliveriesWhereUniqueInput | deliveriesWhereUniqueInput[]
    update?: deliveriesUpdateWithWhereUniqueWithoutOrdersInput | deliveriesUpdateWithWhereUniqueWithoutOrdersInput[]
    updateMany?: deliveriesUpdateManyWithWhereWithoutOrdersInput | deliveriesUpdateManyWithWhereWithoutOrdersInput[]
    deleteMany?: deliveriesScalarWhereInput | deliveriesScalarWhereInput[]
  }

  export type order_itemsUpdateManyWithoutOrdersNestedInput = {
    create?: XOR<order_itemsCreateWithoutOrdersInput, order_itemsUncheckedCreateWithoutOrdersInput> | order_itemsCreateWithoutOrdersInput[] | order_itemsUncheckedCreateWithoutOrdersInput[]
    connectOrCreate?: order_itemsCreateOrConnectWithoutOrdersInput | order_itemsCreateOrConnectWithoutOrdersInput[]
    upsert?: order_itemsUpsertWithWhereUniqueWithoutOrdersInput | order_itemsUpsertWithWhereUniqueWithoutOrdersInput[]
    createMany?: order_itemsCreateManyOrdersInputEnvelope
    set?: order_itemsWhereUniqueInput | order_itemsWhereUniqueInput[]
    disconnect?: order_itemsWhereUniqueInput | order_itemsWhereUniqueInput[]
    delete?: order_itemsWhereUniqueInput | order_itemsWhereUniqueInput[]
    connect?: order_itemsWhereUniqueInput | order_itemsWhereUniqueInput[]
    update?: order_itemsUpdateWithWhereUniqueWithoutOrdersInput | order_itemsUpdateWithWhereUniqueWithoutOrdersInput[]
    updateMany?: order_itemsUpdateManyWithWhereWithoutOrdersInput | order_itemsUpdateManyWithWhereWithoutOrdersInput[]
    deleteMany?: order_itemsScalarWhereInput | order_itemsScalarWhereInput[]
  }

  export type storesUpdateOneWithoutOrdersNestedInput = {
    create?: XOR<storesCreateWithoutOrdersInput, storesUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: storesCreateOrConnectWithoutOrdersInput
    upsert?: storesUpsertWithoutOrdersInput
    disconnect?: storesWhereInput | boolean
    delete?: storesWhereInput | boolean
    connect?: storesWhereUniqueInput
    update?: XOR<XOR<storesUpdateToOneWithWhereWithoutOrdersInput, storesUpdateWithoutOrdersInput>, storesUncheckedUpdateWithoutOrdersInput>
  }

  export type usersUpdateOneWithoutOrdersNestedInput = {
    create?: XOR<usersCreateWithoutOrdersInput, usersUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: usersCreateOrConnectWithoutOrdersInput
    upsert?: usersUpsertWithoutOrdersInput
    disconnect?: usersWhereInput | boolean
    delete?: usersWhereInput | boolean
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutOrdersInput, usersUpdateWithoutOrdersInput>, usersUncheckedUpdateWithoutOrdersInput>
  }

  export type deliveriesUncheckedUpdateManyWithoutOrdersNestedInput = {
    create?: XOR<deliveriesCreateWithoutOrdersInput, deliveriesUncheckedCreateWithoutOrdersInput> | deliveriesCreateWithoutOrdersInput[] | deliveriesUncheckedCreateWithoutOrdersInput[]
    connectOrCreate?: deliveriesCreateOrConnectWithoutOrdersInput | deliveriesCreateOrConnectWithoutOrdersInput[]
    upsert?: deliveriesUpsertWithWhereUniqueWithoutOrdersInput | deliveriesUpsertWithWhereUniqueWithoutOrdersInput[]
    createMany?: deliveriesCreateManyOrdersInputEnvelope
    set?: deliveriesWhereUniqueInput | deliveriesWhereUniqueInput[]
    disconnect?: deliveriesWhereUniqueInput | deliveriesWhereUniqueInput[]
    delete?: deliveriesWhereUniqueInput | deliveriesWhereUniqueInput[]
    connect?: deliveriesWhereUniqueInput | deliveriesWhereUniqueInput[]
    update?: deliveriesUpdateWithWhereUniqueWithoutOrdersInput | deliveriesUpdateWithWhereUniqueWithoutOrdersInput[]
    updateMany?: deliveriesUpdateManyWithWhereWithoutOrdersInput | deliveriesUpdateManyWithWhereWithoutOrdersInput[]
    deleteMany?: deliveriesScalarWhereInput | deliveriesScalarWhereInput[]
  }

  export type order_itemsUncheckedUpdateManyWithoutOrdersNestedInput = {
    create?: XOR<order_itemsCreateWithoutOrdersInput, order_itemsUncheckedCreateWithoutOrdersInput> | order_itemsCreateWithoutOrdersInput[] | order_itemsUncheckedCreateWithoutOrdersInput[]
    connectOrCreate?: order_itemsCreateOrConnectWithoutOrdersInput | order_itemsCreateOrConnectWithoutOrdersInput[]
    upsert?: order_itemsUpsertWithWhereUniqueWithoutOrdersInput | order_itemsUpsertWithWhereUniqueWithoutOrdersInput[]
    createMany?: order_itemsCreateManyOrdersInputEnvelope
    set?: order_itemsWhereUniqueInput | order_itemsWhereUniqueInput[]
    disconnect?: order_itemsWhereUniqueInput | order_itemsWhereUniqueInput[]
    delete?: order_itemsWhereUniqueInput | order_itemsWhereUniqueInput[]
    connect?: order_itemsWhereUniqueInput | order_itemsWhereUniqueInput[]
    update?: order_itemsUpdateWithWhereUniqueWithoutOrdersInput | order_itemsUpdateWithWhereUniqueWithoutOrdersInput[]
    updateMany?: order_itemsUpdateManyWithWhereWithoutOrdersInput | order_itemsUpdateManyWithWhereWithoutOrdersInput[]
    deleteMany?: order_itemsScalarWhereInput | order_itemsScalarWhereInput[]
  }

  export type order_itemsCreateNestedManyWithoutProductsInput = {
    create?: XOR<order_itemsCreateWithoutProductsInput, order_itemsUncheckedCreateWithoutProductsInput> | order_itemsCreateWithoutProductsInput[] | order_itemsUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: order_itemsCreateOrConnectWithoutProductsInput | order_itemsCreateOrConnectWithoutProductsInput[]
    createMany?: order_itemsCreateManyProductsInputEnvelope
    connect?: order_itemsWhereUniqueInput | order_itemsWhereUniqueInput[]
  }

  export type storesCreateNestedOneWithoutProductsInput = {
    create?: XOR<storesCreateWithoutProductsInput, storesUncheckedCreateWithoutProductsInput>
    connectOrCreate?: storesCreateOrConnectWithoutProductsInput
    connect?: storesWhereUniqueInput
  }

  export type order_itemsUncheckedCreateNestedManyWithoutProductsInput = {
    create?: XOR<order_itemsCreateWithoutProductsInput, order_itemsUncheckedCreateWithoutProductsInput> | order_itemsCreateWithoutProductsInput[] | order_itemsUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: order_itemsCreateOrConnectWithoutProductsInput | order_itemsCreateOrConnectWithoutProductsInput[]
    createMany?: order_itemsCreateManyProductsInputEnvelope
    connect?: order_itemsWhereUniqueInput | order_itemsWhereUniqueInput[]
  }

  export type order_itemsUpdateManyWithoutProductsNestedInput = {
    create?: XOR<order_itemsCreateWithoutProductsInput, order_itemsUncheckedCreateWithoutProductsInput> | order_itemsCreateWithoutProductsInput[] | order_itemsUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: order_itemsCreateOrConnectWithoutProductsInput | order_itemsCreateOrConnectWithoutProductsInput[]
    upsert?: order_itemsUpsertWithWhereUniqueWithoutProductsInput | order_itemsUpsertWithWhereUniqueWithoutProductsInput[]
    createMany?: order_itemsCreateManyProductsInputEnvelope
    set?: order_itemsWhereUniqueInput | order_itemsWhereUniqueInput[]
    disconnect?: order_itemsWhereUniqueInput | order_itemsWhereUniqueInput[]
    delete?: order_itemsWhereUniqueInput | order_itemsWhereUniqueInput[]
    connect?: order_itemsWhereUniqueInput | order_itemsWhereUniqueInput[]
    update?: order_itemsUpdateWithWhereUniqueWithoutProductsInput | order_itemsUpdateWithWhereUniqueWithoutProductsInput[]
    updateMany?: order_itemsUpdateManyWithWhereWithoutProductsInput | order_itemsUpdateManyWithWhereWithoutProductsInput[]
    deleteMany?: order_itemsScalarWhereInput | order_itemsScalarWhereInput[]
  }

  export type storesUpdateOneWithoutProductsNestedInput = {
    create?: XOR<storesCreateWithoutProductsInput, storesUncheckedCreateWithoutProductsInput>
    connectOrCreate?: storesCreateOrConnectWithoutProductsInput
    upsert?: storesUpsertWithoutProductsInput
    disconnect?: storesWhereInput | boolean
    delete?: storesWhereInput | boolean
    connect?: storesWhereUniqueInput
    update?: XOR<XOR<storesUpdateToOneWithWhereWithoutProductsInput, storesUpdateWithoutProductsInput>, storesUncheckedUpdateWithoutProductsInput>
  }

  export type order_itemsUncheckedUpdateManyWithoutProductsNestedInput = {
    create?: XOR<order_itemsCreateWithoutProductsInput, order_itemsUncheckedCreateWithoutProductsInput> | order_itemsCreateWithoutProductsInput[] | order_itemsUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: order_itemsCreateOrConnectWithoutProductsInput | order_itemsCreateOrConnectWithoutProductsInput[]
    upsert?: order_itemsUpsertWithWhereUniqueWithoutProductsInput | order_itemsUpsertWithWhereUniqueWithoutProductsInput[]
    createMany?: order_itemsCreateManyProductsInputEnvelope
    set?: order_itemsWhereUniqueInput | order_itemsWhereUniqueInput[]
    disconnect?: order_itemsWhereUniqueInput | order_itemsWhereUniqueInput[]
    delete?: order_itemsWhereUniqueInput | order_itemsWhereUniqueInput[]
    connect?: order_itemsWhereUniqueInput | order_itemsWhereUniqueInput[]
    update?: order_itemsUpdateWithWhereUniqueWithoutProductsInput | order_itemsUpdateWithWhereUniqueWithoutProductsInput[]
    updateMany?: order_itemsUpdateManyWithWhereWithoutProductsInput | order_itemsUpdateManyWithWhereWithoutProductsInput[]
    deleteMany?: order_itemsScalarWhereInput | order_itemsScalarWhereInput[]
  }

  export type ordersCreateNestedManyWithoutStoresInput = {
    create?: XOR<ordersCreateWithoutStoresInput, ordersUncheckedCreateWithoutStoresInput> | ordersCreateWithoutStoresInput[] | ordersUncheckedCreateWithoutStoresInput[]
    connectOrCreate?: ordersCreateOrConnectWithoutStoresInput | ordersCreateOrConnectWithoutStoresInput[]
    createMany?: ordersCreateManyStoresInputEnvelope
    connect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
  }

  export type productsCreateNestedManyWithoutStoresInput = {
    create?: XOR<productsCreateWithoutStoresInput, productsUncheckedCreateWithoutStoresInput> | productsCreateWithoutStoresInput[] | productsUncheckedCreateWithoutStoresInput[]
    connectOrCreate?: productsCreateOrConnectWithoutStoresInput | productsCreateOrConnectWithoutStoresInput[]
    createMany?: productsCreateManyStoresInputEnvelope
    connect?: productsWhereUniqueInput | productsWhereUniqueInput[]
  }

  export type ordersUncheckedCreateNestedManyWithoutStoresInput = {
    create?: XOR<ordersCreateWithoutStoresInput, ordersUncheckedCreateWithoutStoresInput> | ordersCreateWithoutStoresInput[] | ordersUncheckedCreateWithoutStoresInput[]
    connectOrCreate?: ordersCreateOrConnectWithoutStoresInput | ordersCreateOrConnectWithoutStoresInput[]
    createMany?: ordersCreateManyStoresInputEnvelope
    connect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
  }

  export type productsUncheckedCreateNestedManyWithoutStoresInput = {
    create?: XOR<productsCreateWithoutStoresInput, productsUncheckedCreateWithoutStoresInput> | productsCreateWithoutStoresInput[] | productsUncheckedCreateWithoutStoresInput[]
    connectOrCreate?: productsCreateOrConnectWithoutStoresInput | productsCreateOrConnectWithoutStoresInput[]
    createMany?: productsCreateManyStoresInputEnvelope
    connect?: productsWhereUniqueInput | productsWhereUniqueInput[]
  }

  export type ordersUpdateManyWithoutStoresNestedInput = {
    create?: XOR<ordersCreateWithoutStoresInput, ordersUncheckedCreateWithoutStoresInput> | ordersCreateWithoutStoresInput[] | ordersUncheckedCreateWithoutStoresInput[]
    connectOrCreate?: ordersCreateOrConnectWithoutStoresInput | ordersCreateOrConnectWithoutStoresInput[]
    upsert?: ordersUpsertWithWhereUniqueWithoutStoresInput | ordersUpsertWithWhereUniqueWithoutStoresInput[]
    createMany?: ordersCreateManyStoresInputEnvelope
    set?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    disconnect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    delete?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    connect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    update?: ordersUpdateWithWhereUniqueWithoutStoresInput | ordersUpdateWithWhereUniqueWithoutStoresInput[]
    updateMany?: ordersUpdateManyWithWhereWithoutStoresInput | ordersUpdateManyWithWhereWithoutStoresInput[]
    deleteMany?: ordersScalarWhereInput | ordersScalarWhereInput[]
  }

  export type productsUpdateManyWithoutStoresNestedInput = {
    create?: XOR<productsCreateWithoutStoresInput, productsUncheckedCreateWithoutStoresInput> | productsCreateWithoutStoresInput[] | productsUncheckedCreateWithoutStoresInput[]
    connectOrCreate?: productsCreateOrConnectWithoutStoresInput | productsCreateOrConnectWithoutStoresInput[]
    upsert?: productsUpsertWithWhereUniqueWithoutStoresInput | productsUpsertWithWhereUniqueWithoutStoresInput[]
    createMany?: productsCreateManyStoresInputEnvelope
    set?: productsWhereUniqueInput | productsWhereUniqueInput[]
    disconnect?: productsWhereUniqueInput | productsWhereUniqueInput[]
    delete?: productsWhereUniqueInput | productsWhereUniqueInput[]
    connect?: productsWhereUniqueInput | productsWhereUniqueInput[]
    update?: productsUpdateWithWhereUniqueWithoutStoresInput | productsUpdateWithWhereUniqueWithoutStoresInput[]
    updateMany?: productsUpdateManyWithWhereWithoutStoresInput | productsUpdateManyWithWhereWithoutStoresInput[]
    deleteMany?: productsScalarWhereInput | productsScalarWhereInput[]
  }

  export type ordersUncheckedUpdateManyWithoutStoresNestedInput = {
    create?: XOR<ordersCreateWithoutStoresInput, ordersUncheckedCreateWithoutStoresInput> | ordersCreateWithoutStoresInput[] | ordersUncheckedCreateWithoutStoresInput[]
    connectOrCreate?: ordersCreateOrConnectWithoutStoresInput | ordersCreateOrConnectWithoutStoresInput[]
    upsert?: ordersUpsertWithWhereUniqueWithoutStoresInput | ordersUpsertWithWhereUniqueWithoutStoresInput[]
    createMany?: ordersCreateManyStoresInputEnvelope
    set?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    disconnect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    delete?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    connect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    update?: ordersUpdateWithWhereUniqueWithoutStoresInput | ordersUpdateWithWhereUniqueWithoutStoresInput[]
    updateMany?: ordersUpdateManyWithWhereWithoutStoresInput | ordersUpdateManyWithWhereWithoutStoresInput[]
    deleteMany?: ordersScalarWhereInput | ordersScalarWhereInput[]
  }

  export type productsUncheckedUpdateManyWithoutStoresNestedInput = {
    create?: XOR<productsCreateWithoutStoresInput, productsUncheckedCreateWithoutStoresInput> | productsCreateWithoutStoresInput[] | productsUncheckedCreateWithoutStoresInput[]
    connectOrCreate?: productsCreateOrConnectWithoutStoresInput | productsCreateOrConnectWithoutStoresInput[]
    upsert?: productsUpsertWithWhereUniqueWithoutStoresInput | productsUpsertWithWhereUniqueWithoutStoresInput[]
    createMany?: productsCreateManyStoresInputEnvelope
    set?: productsWhereUniqueInput | productsWhereUniqueInput[]
    disconnect?: productsWhereUniqueInput | productsWhereUniqueInput[]
    delete?: productsWhereUniqueInput | productsWhereUniqueInput[]
    connect?: productsWhereUniqueInput | productsWhereUniqueInput[]
    update?: productsUpdateWithWhereUniqueWithoutStoresInput | productsUpdateWithWhereUniqueWithoutStoresInput[]
    updateMany?: productsUpdateManyWithWhereWithoutStoresInput | productsUpdateManyWithWhereWithoutStoresInput[]
    deleteMany?: productsScalarWhereInput | productsScalarWhereInput[]
  }

  export type ordersCreateNestedManyWithoutUsersInput = {
    create?: XOR<ordersCreateWithoutUsersInput, ordersUncheckedCreateWithoutUsersInput> | ordersCreateWithoutUsersInput[] | ordersUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: ordersCreateOrConnectWithoutUsersInput | ordersCreateOrConnectWithoutUsersInput[]
    createMany?: ordersCreateManyUsersInputEnvelope
    connect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
  }

  export type ordersUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<ordersCreateWithoutUsersInput, ordersUncheckedCreateWithoutUsersInput> | ordersCreateWithoutUsersInput[] | ordersUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: ordersCreateOrConnectWithoutUsersInput | ordersCreateOrConnectWithoutUsersInput[]
    createMany?: ordersCreateManyUsersInputEnvelope
    connect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
  }

  export type ordersUpdateManyWithoutUsersNestedInput = {
    create?: XOR<ordersCreateWithoutUsersInput, ordersUncheckedCreateWithoutUsersInput> | ordersCreateWithoutUsersInput[] | ordersUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: ordersCreateOrConnectWithoutUsersInput | ordersCreateOrConnectWithoutUsersInput[]
    upsert?: ordersUpsertWithWhereUniqueWithoutUsersInput | ordersUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: ordersCreateManyUsersInputEnvelope
    set?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    disconnect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    delete?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    connect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    update?: ordersUpdateWithWhereUniqueWithoutUsersInput | ordersUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: ordersUpdateManyWithWhereWithoutUsersInput | ordersUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: ordersScalarWhereInput | ordersScalarWhereInput[]
  }

  export type ordersUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<ordersCreateWithoutUsersInput, ordersUncheckedCreateWithoutUsersInput> | ordersCreateWithoutUsersInput[] | ordersUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: ordersCreateOrConnectWithoutUsersInput | ordersCreateOrConnectWithoutUsersInput[]
    upsert?: ordersUpsertWithWhereUniqueWithoutUsersInput | ordersUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: ordersCreateManyUsersInputEnvelope
    set?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    disconnect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    delete?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    connect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    update?: ordersUpdateWithWhereUniqueWithoutUsersInput | ordersUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: ordersUpdateManyWithWhereWithoutUsersInput | ordersUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: ordersScalarWhereInput | ordersScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type driversCreateWithoutDeliveriesInput = {
    name: string
    phone: string
    vehicle_type?: string | null
    created_at?: Date | string | null
    is_available?: boolean | null
  }

  export type driversUncheckedCreateWithoutDeliveriesInput = {
    id?: number
    name: string
    phone: string
    vehicle_type?: string | null
    created_at?: Date | string | null
    is_available?: boolean | null
  }

  export type driversCreateOrConnectWithoutDeliveriesInput = {
    where: driversWhereUniqueInput
    create: XOR<driversCreateWithoutDeliveriesInput, driversUncheckedCreateWithoutDeliveriesInput>
  }

  export type ordersCreateWithoutDeliveriesInput = {
    status?: string | null
    total: Decimal | DecimalJsLike | number | string
    created_at?: Date | string | null
    order_items?: order_itemsCreateNestedManyWithoutOrdersInput
    stores?: storesCreateNestedOneWithoutOrdersInput
    users?: usersCreateNestedOneWithoutOrdersInput
  }

  export type ordersUncheckedCreateWithoutDeliveriesInput = {
    id?: number
    user_id?: number | null
    store_id?: number | null
    status?: string | null
    total: Decimal | DecimalJsLike | number | string
    created_at?: Date | string | null
    order_items?: order_itemsUncheckedCreateNestedManyWithoutOrdersInput
  }

  export type ordersCreateOrConnectWithoutDeliveriesInput = {
    where: ordersWhereUniqueInput
    create: XOR<ordersCreateWithoutDeliveriesInput, ordersUncheckedCreateWithoutDeliveriesInput>
  }

  export type driversUpsertWithoutDeliveriesInput = {
    update: XOR<driversUpdateWithoutDeliveriesInput, driversUncheckedUpdateWithoutDeliveriesInput>
    create: XOR<driversCreateWithoutDeliveriesInput, driversUncheckedCreateWithoutDeliveriesInput>
    where?: driversWhereInput
  }

  export type driversUpdateToOneWithWhereWithoutDeliveriesInput = {
    where?: driversWhereInput
    data: XOR<driversUpdateWithoutDeliveriesInput, driversUncheckedUpdateWithoutDeliveriesInput>
  }

  export type driversUpdateWithoutDeliveriesInput = {
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    vehicle_type?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_available?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type driversUncheckedUpdateWithoutDeliveriesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    vehicle_type?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_available?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type ordersUpsertWithoutDeliveriesInput = {
    update: XOR<ordersUpdateWithoutDeliveriesInput, ordersUncheckedUpdateWithoutDeliveriesInput>
    create: XOR<ordersCreateWithoutDeliveriesInput, ordersUncheckedCreateWithoutDeliveriesInput>
    where?: ordersWhereInput
  }

  export type ordersUpdateToOneWithWhereWithoutDeliveriesInput = {
    where?: ordersWhereInput
    data: XOR<ordersUpdateWithoutDeliveriesInput, ordersUncheckedUpdateWithoutDeliveriesInput>
  }

  export type ordersUpdateWithoutDeliveriesInput = {
    status?: NullableStringFieldUpdateOperationsInput | string | null
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    order_items?: order_itemsUpdateManyWithoutOrdersNestedInput
    stores?: storesUpdateOneWithoutOrdersNestedInput
    users?: usersUpdateOneWithoutOrdersNestedInput
  }

  export type ordersUncheckedUpdateWithoutDeliveriesInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    store_id?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    order_items?: order_itemsUncheckedUpdateManyWithoutOrdersNestedInput
  }

  export type deliveriesCreateWithoutDriversInput = {
    status?: string | null
    created_at?: Date | string | null
    orders?: ordersCreateNestedOneWithoutDeliveriesInput
  }

  export type deliveriesUncheckedCreateWithoutDriversInput = {
    id?: number
    order_id?: number | null
    status?: string | null
    created_at?: Date | string | null
  }

  export type deliveriesCreateOrConnectWithoutDriversInput = {
    where: deliveriesWhereUniqueInput
    create: XOR<deliveriesCreateWithoutDriversInput, deliveriesUncheckedCreateWithoutDriversInput>
  }

  export type deliveriesCreateManyDriversInputEnvelope = {
    data: deliveriesCreateManyDriversInput | deliveriesCreateManyDriversInput[]
    skipDuplicates?: boolean
  }

  export type deliveriesUpsertWithWhereUniqueWithoutDriversInput = {
    where: deliveriesWhereUniqueInput
    update: XOR<deliveriesUpdateWithoutDriversInput, deliveriesUncheckedUpdateWithoutDriversInput>
    create: XOR<deliveriesCreateWithoutDriversInput, deliveriesUncheckedCreateWithoutDriversInput>
  }

  export type deliveriesUpdateWithWhereUniqueWithoutDriversInput = {
    where: deliveriesWhereUniqueInput
    data: XOR<deliveriesUpdateWithoutDriversInput, deliveriesUncheckedUpdateWithoutDriversInput>
  }

  export type deliveriesUpdateManyWithWhereWithoutDriversInput = {
    where: deliveriesScalarWhereInput
    data: XOR<deliveriesUpdateManyMutationInput, deliveriesUncheckedUpdateManyWithoutDriversInput>
  }

  export type deliveriesScalarWhereInput = {
    AND?: deliveriesScalarWhereInput | deliveriesScalarWhereInput[]
    OR?: deliveriesScalarWhereInput[]
    NOT?: deliveriesScalarWhereInput | deliveriesScalarWhereInput[]
    id?: IntFilter<"deliveries"> | number
    order_id?: IntNullableFilter<"deliveries"> | number | null
    driver_id?: IntNullableFilter<"deliveries"> | number | null
    status?: StringNullableFilter<"deliveries"> | string | null
    created_at?: DateTimeNullableFilter<"deliveries"> | Date | string | null
  }

  export type ordersCreateWithoutOrder_itemsInput = {
    status?: string | null
    total: Decimal | DecimalJsLike | number | string
    created_at?: Date | string | null
    deliveries?: deliveriesCreateNestedManyWithoutOrdersInput
    stores?: storesCreateNestedOneWithoutOrdersInput
    users?: usersCreateNestedOneWithoutOrdersInput
  }

  export type ordersUncheckedCreateWithoutOrder_itemsInput = {
    id?: number
    user_id?: number | null
    store_id?: number | null
    status?: string | null
    total: Decimal | DecimalJsLike | number | string
    created_at?: Date | string | null
    deliveries?: deliveriesUncheckedCreateNestedManyWithoutOrdersInput
  }

  export type ordersCreateOrConnectWithoutOrder_itemsInput = {
    where: ordersWhereUniqueInput
    create: XOR<ordersCreateWithoutOrder_itemsInput, ordersUncheckedCreateWithoutOrder_itemsInput>
  }

  export type productsCreateWithoutOrder_itemsInput = {
    name: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    stock?: number | null
    created_at?: Date | string | null
    stores?: storesCreateNestedOneWithoutProductsInput
  }

  export type productsUncheckedCreateWithoutOrder_itemsInput = {
    id?: number
    store_id?: number | null
    name: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    stock?: number | null
    created_at?: Date | string | null
  }

  export type productsCreateOrConnectWithoutOrder_itemsInput = {
    where: productsWhereUniqueInput
    create: XOR<productsCreateWithoutOrder_itemsInput, productsUncheckedCreateWithoutOrder_itemsInput>
  }

  export type ordersUpsertWithoutOrder_itemsInput = {
    update: XOR<ordersUpdateWithoutOrder_itemsInput, ordersUncheckedUpdateWithoutOrder_itemsInput>
    create: XOR<ordersCreateWithoutOrder_itemsInput, ordersUncheckedCreateWithoutOrder_itemsInput>
    where?: ordersWhereInput
  }

  export type ordersUpdateToOneWithWhereWithoutOrder_itemsInput = {
    where?: ordersWhereInput
    data: XOR<ordersUpdateWithoutOrder_itemsInput, ordersUncheckedUpdateWithoutOrder_itemsInput>
  }

  export type ordersUpdateWithoutOrder_itemsInput = {
    status?: NullableStringFieldUpdateOperationsInput | string | null
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deliveries?: deliveriesUpdateManyWithoutOrdersNestedInput
    stores?: storesUpdateOneWithoutOrdersNestedInput
    users?: usersUpdateOneWithoutOrdersNestedInput
  }

  export type ordersUncheckedUpdateWithoutOrder_itemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    store_id?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deliveries?: deliveriesUncheckedUpdateManyWithoutOrdersNestedInput
  }

  export type productsUpsertWithoutOrder_itemsInput = {
    update: XOR<productsUpdateWithoutOrder_itemsInput, productsUncheckedUpdateWithoutOrder_itemsInput>
    create: XOR<productsCreateWithoutOrder_itemsInput, productsUncheckedCreateWithoutOrder_itemsInput>
    where?: productsWhereInput
  }

  export type productsUpdateToOneWithWhereWithoutOrder_itemsInput = {
    where?: productsWhereInput
    data: XOR<productsUpdateWithoutOrder_itemsInput, productsUncheckedUpdateWithoutOrder_itemsInput>
  }

  export type productsUpdateWithoutOrder_itemsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stock?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    stores?: storesUpdateOneWithoutProductsNestedInput
  }

  export type productsUncheckedUpdateWithoutOrder_itemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    store_id?: NullableIntFieldUpdateOperationsInput | number | null
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stock?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type deliveriesCreateWithoutOrdersInput = {
    status?: string | null
    created_at?: Date | string | null
    drivers?: driversCreateNestedOneWithoutDeliveriesInput
  }

  export type deliveriesUncheckedCreateWithoutOrdersInput = {
    id?: number
    driver_id?: number | null
    status?: string | null
    created_at?: Date | string | null
  }

  export type deliveriesCreateOrConnectWithoutOrdersInput = {
    where: deliveriesWhereUniqueInput
    create: XOR<deliveriesCreateWithoutOrdersInput, deliveriesUncheckedCreateWithoutOrdersInput>
  }

  export type deliveriesCreateManyOrdersInputEnvelope = {
    data: deliveriesCreateManyOrdersInput | deliveriesCreateManyOrdersInput[]
    skipDuplicates?: boolean
  }

  export type order_itemsCreateWithoutOrdersInput = {
    quantity: number
    price: Decimal | DecimalJsLike | number | string
    products?: productsCreateNestedOneWithoutOrder_itemsInput
  }

  export type order_itemsUncheckedCreateWithoutOrdersInput = {
    id?: number
    product_id?: number | null
    quantity: number
    price: Decimal | DecimalJsLike | number | string
  }

  export type order_itemsCreateOrConnectWithoutOrdersInput = {
    where: order_itemsWhereUniqueInput
    create: XOR<order_itemsCreateWithoutOrdersInput, order_itemsUncheckedCreateWithoutOrdersInput>
  }

  export type order_itemsCreateManyOrdersInputEnvelope = {
    data: order_itemsCreateManyOrdersInput | order_itemsCreateManyOrdersInput[]
    skipDuplicates?: boolean
  }

  export type storesCreateWithoutOrdersInput = {
    name: string
    address?: string | null
    phone?: string | null
    created_at?: Date | string | null
    products?: productsCreateNestedManyWithoutStoresInput
  }

  export type storesUncheckedCreateWithoutOrdersInput = {
    id?: number
    name: string
    address?: string | null
    phone?: string | null
    created_at?: Date | string | null
    products?: productsUncheckedCreateNestedManyWithoutStoresInput
  }

  export type storesCreateOrConnectWithoutOrdersInput = {
    where: storesWhereUniqueInput
    create: XOR<storesCreateWithoutOrdersInput, storesUncheckedCreateWithoutOrdersInput>
  }

  export type usersCreateWithoutOrdersInput = {
    email: string
    password_hash: string
    created_at?: Date | string | null
    firstname?: string | null
    lastname?: string | null
    street?: string | null
    city?: string | null
    postal?: string | null
    stripe_customer_id?: string | null
    refresh_token?: string | null
  }

  export type usersUncheckedCreateWithoutOrdersInput = {
    id?: number
    email: string
    password_hash: string
    created_at?: Date | string | null
    firstname?: string | null
    lastname?: string | null
    street?: string | null
    city?: string | null
    postal?: string | null
    stripe_customer_id?: string | null
    refresh_token?: string | null
  }

  export type usersCreateOrConnectWithoutOrdersInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutOrdersInput, usersUncheckedCreateWithoutOrdersInput>
  }

  export type deliveriesUpsertWithWhereUniqueWithoutOrdersInput = {
    where: deliveriesWhereUniqueInput
    update: XOR<deliveriesUpdateWithoutOrdersInput, deliveriesUncheckedUpdateWithoutOrdersInput>
    create: XOR<deliveriesCreateWithoutOrdersInput, deliveriesUncheckedCreateWithoutOrdersInput>
  }

  export type deliveriesUpdateWithWhereUniqueWithoutOrdersInput = {
    where: deliveriesWhereUniqueInput
    data: XOR<deliveriesUpdateWithoutOrdersInput, deliveriesUncheckedUpdateWithoutOrdersInput>
  }

  export type deliveriesUpdateManyWithWhereWithoutOrdersInput = {
    where: deliveriesScalarWhereInput
    data: XOR<deliveriesUpdateManyMutationInput, deliveriesUncheckedUpdateManyWithoutOrdersInput>
  }

  export type order_itemsUpsertWithWhereUniqueWithoutOrdersInput = {
    where: order_itemsWhereUniqueInput
    update: XOR<order_itemsUpdateWithoutOrdersInput, order_itemsUncheckedUpdateWithoutOrdersInput>
    create: XOR<order_itemsCreateWithoutOrdersInput, order_itemsUncheckedCreateWithoutOrdersInput>
  }

  export type order_itemsUpdateWithWhereUniqueWithoutOrdersInput = {
    where: order_itemsWhereUniqueInput
    data: XOR<order_itemsUpdateWithoutOrdersInput, order_itemsUncheckedUpdateWithoutOrdersInput>
  }

  export type order_itemsUpdateManyWithWhereWithoutOrdersInput = {
    where: order_itemsScalarWhereInput
    data: XOR<order_itemsUpdateManyMutationInput, order_itemsUncheckedUpdateManyWithoutOrdersInput>
  }

  export type order_itemsScalarWhereInput = {
    AND?: order_itemsScalarWhereInput | order_itemsScalarWhereInput[]
    OR?: order_itemsScalarWhereInput[]
    NOT?: order_itemsScalarWhereInput | order_itemsScalarWhereInput[]
    id?: IntFilter<"order_items"> | number
    order_id?: IntNullableFilter<"order_items"> | number | null
    product_id?: IntNullableFilter<"order_items"> | number | null
    quantity?: IntFilter<"order_items"> | number
    price?: DecimalFilter<"order_items"> | Decimal | DecimalJsLike | number | string
  }

  export type storesUpsertWithoutOrdersInput = {
    update: XOR<storesUpdateWithoutOrdersInput, storesUncheckedUpdateWithoutOrdersInput>
    create: XOR<storesCreateWithoutOrdersInput, storesUncheckedCreateWithoutOrdersInput>
    where?: storesWhereInput
  }

  export type storesUpdateToOneWithWhereWithoutOrdersInput = {
    where?: storesWhereInput
    data: XOR<storesUpdateWithoutOrdersInput, storesUncheckedUpdateWithoutOrdersInput>
  }

  export type storesUpdateWithoutOrdersInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    products?: productsUpdateManyWithoutStoresNestedInput
  }

  export type storesUncheckedUpdateWithoutOrdersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    products?: productsUncheckedUpdateManyWithoutStoresNestedInput
  }

  export type usersUpsertWithoutOrdersInput = {
    update: XOR<usersUpdateWithoutOrdersInput, usersUncheckedUpdateWithoutOrdersInput>
    create: XOR<usersCreateWithoutOrdersInput, usersUncheckedCreateWithoutOrdersInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutOrdersInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutOrdersInput, usersUncheckedUpdateWithoutOrdersInput>
  }

  export type usersUpdateWithoutOrdersInput = {
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    firstname?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    street?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    postal?: NullableStringFieldUpdateOperationsInput | string | null
    stripe_customer_id?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type usersUncheckedUpdateWithoutOrdersInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    firstname?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    street?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    postal?: NullableStringFieldUpdateOperationsInput | string | null
    stripe_customer_id?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type order_itemsCreateWithoutProductsInput = {
    quantity: number
    price: Decimal | DecimalJsLike | number | string
    orders?: ordersCreateNestedOneWithoutOrder_itemsInput
  }

  export type order_itemsUncheckedCreateWithoutProductsInput = {
    id?: number
    order_id?: number | null
    quantity: number
    price: Decimal | DecimalJsLike | number | string
  }

  export type order_itemsCreateOrConnectWithoutProductsInput = {
    where: order_itemsWhereUniqueInput
    create: XOR<order_itemsCreateWithoutProductsInput, order_itemsUncheckedCreateWithoutProductsInput>
  }

  export type order_itemsCreateManyProductsInputEnvelope = {
    data: order_itemsCreateManyProductsInput | order_itemsCreateManyProductsInput[]
    skipDuplicates?: boolean
  }

  export type storesCreateWithoutProductsInput = {
    name: string
    address?: string | null
    phone?: string | null
    created_at?: Date | string | null
    orders?: ordersCreateNestedManyWithoutStoresInput
  }

  export type storesUncheckedCreateWithoutProductsInput = {
    id?: number
    name: string
    address?: string | null
    phone?: string | null
    created_at?: Date | string | null
    orders?: ordersUncheckedCreateNestedManyWithoutStoresInput
  }

  export type storesCreateOrConnectWithoutProductsInput = {
    where: storesWhereUniqueInput
    create: XOR<storesCreateWithoutProductsInput, storesUncheckedCreateWithoutProductsInput>
  }

  export type order_itemsUpsertWithWhereUniqueWithoutProductsInput = {
    where: order_itemsWhereUniqueInput
    update: XOR<order_itemsUpdateWithoutProductsInput, order_itemsUncheckedUpdateWithoutProductsInput>
    create: XOR<order_itemsCreateWithoutProductsInput, order_itemsUncheckedCreateWithoutProductsInput>
  }

  export type order_itemsUpdateWithWhereUniqueWithoutProductsInput = {
    where: order_itemsWhereUniqueInput
    data: XOR<order_itemsUpdateWithoutProductsInput, order_itemsUncheckedUpdateWithoutProductsInput>
  }

  export type order_itemsUpdateManyWithWhereWithoutProductsInput = {
    where: order_itemsScalarWhereInput
    data: XOR<order_itemsUpdateManyMutationInput, order_itemsUncheckedUpdateManyWithoutProductsInput>
  }

  export type storesUpsertWithoutProductsInput = {
    update: XOR<storesUpdateWithoutProductsInput, storesUncheckedUpdateWithoutProductsInput>
    create: XOR<storesCreateWithoutProductsInput, storesUncheckedCreateWithoutProductsInput>
    where?: storesWhereInput
  }

  export type storesUpdateToOneWithWhereWithoutProductsInput = {
    where?: storesWhereInput
    data: XOR<storesUpdateWithoutProductsInput, storesUncheckedUpdateWithoutProductsInput>
  }

  export type storesUpdateWithoutProductsInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    orders?: ordersUpdateManyWithoutStoresNestedInput
  }

  export type storesUncheckedUpdateWithoutProductsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    orders?: ordersUncheckedUpdateManyWithoutStoresNestedInput
  }

  export type ordersCreateWithoutStoresInput = {
    status?: string | null
    total: Decimal | DecimalJsLike | number | string
    created_at?: Date | string | null
    deliveries?: deliveriesCreateNestedManyWithoutOrdersInput
    order_items?: order_itemsCreateNestedManyWithoutOrdersInput
    users?: usersCreateNestedOneWithoutOrdersInput
  }

  export type ordersUncheckedCreateWithoutStoresInput = {
    id?: number
    user_id?: number | null
    status?: string | null
    total: Decimal | DecimalJsLike | number | string
    created_at?: Date | string | null
    deliveries?: deliveriesUncheckedCreateNestedManyWithoutOrdersInput
    order_items?: order_itemsUncheckedCreateNestedManyWithoutOrdersInput
  }

  export type ordersCreateOrConnectWithoutStoresInput = {
    where: ordersWhereUniqueInput
    create: XOR<ordersCreateWithoutStoresInput, ordersUncheckedCreateWithoutStoresInput>
  }

  export type ordersCreateManyStoresInputEnvelope = {
    data: ordersCreateManyStoresInput | ordersCreateManyStoresInput[]
    skipDuplicates?: boolean
  }

  export type productsCreateWithoutStoresInput = {
    name: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    stock?: number | null
    created_at?: Date | string | null
    order_items?: order_itemsCreateNestedManyWithoutProductsInput
  }

  export type productsUncheckedCreateWithoutStoresInput = {
    id?: number
    name: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    stock?: number | null
    created_at?: Date | string | null
    order_items?: order_itemsUncheckedCreateNestedManyWithoutProductsInput
  }

  export type productsCreateOrConnectWithoutStoresInput = {
    where: productsWhereUniqueInput
    create: XOR<productsCreateWithoutStoresInput, productsUncheckedCreateWithoutStoresInput>
  }

  export type productsCreateManyStoresInputEnvelope = {
    data: productsCreateManyStoresInput | productsCreateManyStoresInput[]
    skipDuplicates?: boolean
  }

  export type ordersUpsertWithWhereUniqueWithoutStoresInput = {
    where: ordersWhereUniqueInput
    update: XOR<ordersUpdateWithoutStoresInput, ordersUncheckedUpdateWithoutStoresInput>
    create: XOR<ordersCreateWithoutStoresInput, ordersUncheckedCreateWithoutStoresInput>
  }

  export type ordersUpdateWithWhereUniqueWithoutStoresInput = {
    where: ordersWhereUniqueInput
    data: XOR<ordersUpdateWithoutStoresInput, ordersUncheckedUpdateWithoutStoresInput>
  }

  export type ordersUpdateManyWithWhereWithoutStoresInput = {
    where: ordersScalarWhereInput
    data: XOR<ordersUpdateManyMutationInput, ordersUncheckedUpdateManyWithoutStoresInput>
  }

  export type ordersScalarWhereInput = {
    AND?: ordersScalarWhereInput | ordersScalarWhereInput[]
    OR?: ordersScalarWhereInput[]
    NOT?: ordersScalarWhereInput | ordersScalarWhereInput[]
    id?: IntFilter<"orders"> | number
    user_id?: IntNullableFilter<"orders"> | number | null
    store_id?: IntNullableFilter<"orders"> | number | null
    status?: StringNullableFilter<"orders"> | string | null
    total?: DecimalFilter<"orders"> | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeNullableFilter<"orders"> | Date | string | null
  }

  export type productsUpsertWithWhereUniqueWithoutStoresInput = {
    where: productsWhereUniqueInput
    update: XOR<productsUpdateWithoutStoresInput, productsUncheckedUpdateWithoutStoresInput>
    create: XOR<productsCreateWithoutStoresInput, productsUncheckedCreateWithoutStoresInput>
  }

  export type productsUpdateWithWhereUniqueWithoutStoresInput = {
    where: productsWhereUniqueInput
    data: XOR<productsUpdateWithoutStoresInput, productsUncheckedUpdateWithoutStoresInput>
  }

  export type productsUpdateManyWithWhereWithoutStoresInput = {
    where: productsScalarWhereInput
    data: XOR<productsUpdateManyMutationInput, productsUncheckedUpdateManyWithoutStoresInput>
  }

  export type productsScalarWhereInput = {
    AND?: productsScalarWhereInput | productsScalarWhereInput[]
    OR?: productsScalarWhereInput[]
    NOT?: productsScalarWhereInput | productsScalarWhereInput[]
    id?: IntFilter<"products"> | number
    store_id?: IntNullableFilter<"products"> | number | null
    name?: StringFilter<"products"> | string
    description?: StringNullableFilter<"products"> | string | null
    price?: DecimalFilter<"products"> | Decimal | DecimalJsLike | number | string
    stock?: IntNullableFilter<"products"> | number | null
    created_at?: DateTimeNullableFilter<"products"> | Date | string | null
  }

  export type ordersCreateWithoutUsersInput = {
    status?: string | null
    total: Decimal | DecimalJsLike | number | string
    created_at?: Date | string | null
    deliveries?: deliveriesCreateNestedManyWithoutOrdersInput
    order_items?: order_itemsCreateNestedManyWithoutOrdersInput
    stores?: storesCreateNestedOneWithoutOrdersInput
  }

  export type ordersUncheckedCreateWithoutUsersInput = {
    id?: number
    store_id?: number | null
    status?: string | null
    total: Decimal | DecimalJsLike | number | string
    created_at?: Date | string | null
    deliveries?: deliveriesUncheckedCreateNestedManyWithoutOrdersInput
    order_items?: order_itemsUncheckedCreateNestedManyWithoutOrdersInput
  }

  export type ordersCreateOrConnectWithoutUsersInput = {
    where: ordersWhereUniqueInput
    create: XOR<ordersCreateWithoutUsersInput, ordersUncheckedCreateWithoutUsersInput>
  }

  export type ordersCreateManyUsersInputEnvelope = {
    data: ordersCreateManyUsersInput | ordersCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type ordersUpsertWithWhereUniqueWithoutUsersInput = {
    where: ordersWhereUniqueInput
    update: XOR<ordersUpdateWithoutUsersInput, ordersUncheckedUpdateWithoutUsersInput>
    create: XOR<ordersCreateWithoutUsersInput, ordersUncheckedCreateWithoutUsersInput>
  }

  export type ordersUpdateWithWhereUniqueWithoutUsersInput = {
    where: ordersWhereUniqueInput
    data: XOR<ordersUpdateWithoutUsersInput, ordersUncheckedUpdateWithoutUsersInput>
  }

  export type ordersUpdateManyWithWhereWithoutUsersInput = {
    where: ordersScalarWhereInput
    data: XOR<ordersUpdateManyMutationInput, ordersUncheckedUpdateManyWithoutUsersInput>
  }

  export type deliveriesCreateManyDriversInput = {
    id?: number
    order_id?: number | null
    status?: string | null
    created_at?: Date | string | null
  }

  export type deliveriesUpdateWithoutDriversInput = {
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    orders?: ordersUpdateOneWithoutDeliveriesNestedInput
  }

  export type deliveriesUncheckedUpdateWithoutDriversInput = {
    id?: IntFieldUpdateOperationsInput | number
    order_id?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type deliveriesUncheckedUpdateManyWithoutDriversInput = {
    id?: IntFieldUpdateOperationsInput | number
    order_id?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type deliveriesCreateManyOrdersInput = {
    id?: number
    driver_id?: number | null
    status?: string | null
    created_at?: Date | string | null
  }

  export type order_itemsCreateManyOrdersInput = {
    id?: number
    product_id?: number | null
    quantity: number
    price: Decimal | DecimalJsLike | number | string
  }

  export type deliveriesUpdateWithoutOrdersInput = {
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    drivers?: driversUpdateOneWithoutDeliveriesNestedInput
  }

  export type deliveriesUncheckedUpdateWithoutOrdersInput = {
    id?: IntFieldUpdateOperationsInput | number
    driver_id?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type deliveriesUncheckedUpdateManyWithoutOrdersInput = {
    id?: IntFieldUpdateOperationsInput | number
    driver_id?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type order_itemsUpdateWithoutOrdersInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    products?: productsUpdateOneWithoutOrder_itemsNestedInput
  }

  export type order_itemsUncheckedUpdateWithoutOrdersInput = {
    id?: IntFieldUpdateOperationsInput | number
    product_id?: NullableIntFieldUpdateOperationsInput | number | null
    quantity?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type order_itemsUncheckedUpdateManyWithoutOrdersInput = {
    id?: IntFieldUpdateOperationsInput | number
    product_id?: NullableIntFieldUpdateOperationsInput | number | null
    quantity?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type order_itemsCreateManyProductsInput = {
    id?: number
    order_id?: number | null
    quantity: number
    price: Decimal | DecimalJsLike | number | string
  }

  export type order_itemsUpdateWithoutProductsInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    orders?: ordersUpdateOneWithoutOrder_itemsNestedInput
  }

  export type order_itemsUncheckedUpdateWithoutProductsInput = {
    id?: IntFieldUpdateOperationsInput | number
    order_id?: NullableIntFieldUpdateOperationsInput | number | null
    quantity?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type order_itemsUncheckedUpdateManyWithoutProductsInput = {
    id?: IntFieldUpdateOperationsInput | number
    order_id?: NullableIntFieldUpdateOperationsInput | number | null
    quantity?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type ordersCreateManyStoresInput = {
    id?: number
    user_id?: number | null
    status?: string | null
    total: Decimal | DecimalJsLike | number | string
    created_at?: Date | string | null
  }

  export type productsCreateManyStoresInput = {
    id?: number
    name: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    stock?: number | null
    created_at?: Date | string | null
  }

  export type ordersUpdateWithoutStoresInput = {
    status?: NullableStringFieldUpdateOperationsInput | string | null
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deliveries?: deliveriesUpdateManyWithoutOrdersNestedInput
    order_items?: order_itemsUpdateManyWithoutOrdersNestedInput
    users?: usersUpdateOneWithoutOrdersNestedInput
  }

  export type ordersUncheckedUpdateWithoutStoresInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deliveries?: deliveriesUncheckedUpdateManyWithoutOrdersNestedInput
    order_items?: order_itemsUncheckedUpdateManyWithoutOrdersNestedInput
  }

  export type ordersUncheckedUpdateManyWithoutStoresInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type productsUpdateWithoutStoresInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stock?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    order_items?: order_itemsUpdateManyWithoutProductsNestedInput
  }

  export type productsUncheckedUpdateWithoutStoresInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stock?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    order_items?: order_itemsUncheckedUpdateManyWithoutProductsNestedInput
  }

  export type productsUncheckedUpdateManyWithoutStoresInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stock?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ordersCreateManyUsersInput = {
    id?: number
    store_id?: number | null
    status?: string | null
    total: Decimal | DecimalJsLike | number | string
    created_at?: Date | string | null
  }

  export type ordersUpdateWithoutUsersInput = {
    status?: NullableStringFieldUpdateOperationsInput | string | null
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deliveries?: deliveriesUpdateManyWithoutOrdersNestedInput
    order_items?: order_itemsUpdateManyWithoutOrdersNestedInput
    stores?: storesUpdateOneWithoutOrdersNestedInput
  }

  export type ordersUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    store_id?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deliveries?: deliveriesUncheckedUpdateManyWithoutOrdersNestedInput
    order_items?: order_itemsUncheckedUpdateManyWithoutOrdersNestedInput
  }

  export type ordersUncheckedUpdateManyWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    store_id?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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