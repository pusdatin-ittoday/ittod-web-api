
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.6.0
 * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
 */
Prisma.prismaVersion = {
  client: "6.6.0",
  engine: "f676762280b54cd07c770017ed3711ddde35f37a"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.CompetitionScalarFieldEnum = {
  id: 'id',
  title: 'title',
  description: 'description',
  max_team_member: 'max_team_member',
  guide_book_url: 'guide_book_url'
};

exports.Prisma.Competition_announcementScalarFieldEnum = {
  id: 'id',
  competition_id: 'competition_id',
  author_id: 'author_id',
  title: 'title',
  description: 'description',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Competition_submissionScalarFieldEnum = {
  team_id: 'team_id',
  competition_id: 'competition_id',
  media_id: 'media_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Competition_timelineScalarFieldEnum = {
  id: 'id',
  competition_id: 'competition_id',
  title: 'title',
  date: 'date'
};

exports.Prisma.MediaScalarFieldEnum = {
  id: 'id',
  uploader_id: 'uploader_id',
  name: 'name',
  grouping: 'grouping',
  type: 'type',
  url: 'url',
  created_at: 'created_at'
};

exports.Prisma.TeamScalarFieldEnum = {
  id: 'id',
  competition_id: 'competition_id',
  team_name: 'team_name',
  team_code: 'team_code',
  is_verified: 'is_verified',
  verification_error: 'verification_error',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Team_memberScalarFieldEnum = {
  user_id: 'user_id',
  team_id: 'team_id',
  role: 'role',
  kartu_media_id: 'kartu_media_id',
  twibbon_media_id: 'twibbon_media_id',
  payment_proof_media_id: 'payment_proof_media_id',
  is_verified: 'is_verified',
  verification_error: 'verification_error'
};

exports.Prisma.UserScalarFieldEnum = {
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

exports.Prisma.User_identityScalarFieldEnum = {
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

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.competitionOrderByRelevanceFieldEnum = {
  id: 'id',
  title: 'title',
  description: 'description',
  guide_book_url: 'guide_book_url'
};

exports.Prisma.competition_announcementOrderByRelevanceFieldEnum = {
  id: 'id',
  competition_id: 'competition_id',
  author_id: 'author_id',
  title: 'title',
  description: 'description'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};

exports.Prisma.competition_submissionOrderByRelevanceFieldEnum = {
  team_id: 'team_id',
  competition_id: 'competition_id',
  media_id: 'media_id'
};

exports.Prisma.competition_timelineOrderByRelevanceFieldEnum = {
  id: 'id',
  competition_id: 'competition_id',
  title: 'title'
};

exports.Prisma.mediaOrderByRelevanceFieldEnum = {
  id: 'id',
  uploader_id: 'uploader_id',
  name: 'name',
  url: 'url'
};

exports.Prisma.teamOrderByRelevanceFieldEnum = {
  id: 'id',
  competition_id: 'competition_id',
  team_name: 'team_name',
  team_code: 'team_code',
  verification_error: 'verification_error'
};

exports.Prisma.team_memberOrderByRelevanceFieldEnum = {
  user_id: 'user_id',
  team_id: 'team_id',
  kartu_media_id: 'kartu_media_id',
  twibbon_media_id: 'twibbon_media_id',
  payment_proof_media_id: 'payment_proof_media_id',
  verification_error: 'verification_error'
};

exports.Prisma.userOrderByRelevanceFieldEnum = {
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

exports.Prisma.user_identityOrderByRelevanceFieldEnum = {
  id: 'id',
  email: 'email',
  hash: 'hash',
  verification_token: 'verification_token',
  password_recovery_token: 'password_recovery_token',
  refresh_token: 'refresh_token'
};
exports.media_grouping_enum = exports.$Enums.media_grouping_enum = {
  payments: 'payments',
  dokum_tahun_lalu: 'dokum_tahun_lalu',
  competition_submission: 'competition_submission',
  twibbon: 'twibbon'
};

exports.media_type_enum = exports.$Enums.media_type_enum = {
  image: 'image',
  pdf: 'pdf'
};

exports.team_member_role_enum = exports.$Enums.team_member_role_enum = {
  leader: 'leader',
  member: 'member'
};

exports.education_enum = exports.$Enums.education_enum = {
  sma: 'sma',
  s1: 's1',
  d3: 'd3',
  d4: 'd4'
};

exports.user_identity_provider_enum = exports.$Enums.user_identity_provider_enum = {
  google: 'google',
  basic: 'basic',
  github: 'github'
};

exports.user_identity_role_enum = exports.$Enums.user_identity_role_enum = {
  admin: 'admin',
  user: 'user'
};

exports.Prisma.ModelName = {
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

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }

        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
