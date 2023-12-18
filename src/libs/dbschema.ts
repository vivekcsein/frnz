
// model User {
//   userID    String @id @default (uuid())
//   email     String @unique
//   // profile   Profile?
//   profile   Profile ? @relation(fields: [userID], references: [profileID])
//   createdAt DateTime @default (now())
//   updateUt  DateTime @updatedAt
//   Post      Post ?
//         Comment   Comment ?
// }

// model Profile {
//   profileID  String @id @default (uuid())
//   username   String @unique
//   fullname   String
//   gender     Gender @default (UNSPECIFIED)
//   password   String
//   roles      Role[]
//   User       User @relation(fields: [userUserID], references: [userID])
//   createdAt  DateTime @default (now())
//   updateUt   DateTime @updatedAt
//   userUserID String
// }

// model Role {
//   id        String @id @default (uuid())
//   rolename  String ?
//         Roles     UserRole @default (DEFAULT)
//   Profile   Profile ? @relation(fields: [roleID], references: [profileID])
//   roleID    String
//   createdAt DateTime @default (now())
//   updateUt  DateTime @updatedAt
// }

// model Post {
//   postID        String @id @default (uuid())
//   title         String
//   content       String ?
//         publishedDate DateTime @default (now())
//   updateUt      DateTime @updatedAt
//   authorUser    User @relation(fields: [authorUserID], references: [userID])
//   authorUserID  String @unique
//   viewsCount    Int @default (0)
//   likesCount    Int @default (0)
//   rating        Float
//   comments      Comment[]
//   tags          Tag[]
// }

// model Comment {
//   commentID    String @id @default (uuid())
//   text         String
//   postedDate   DateTime @default (now())
//   authorUser   User @relation(fields: [authorUserID], references: [userID])
//   authorUserID String @unique
//   post         Post @relation(fields: [postID], references: [postID])
//   postID       String
// }

// model Tag {
//   tagID String @id @default (uuid())
//   name  String @unique
//   posts Post[]
// }


// model User {
//   id        String   @id @default(uuid())
//   email     String   @unique
//   createdAt DateTime @default(now())
//   updatedAt DateTime @updatedAt
//   Profile   Profile?
// }

// model Profile {
//   id        String   @id @default(uuid())
//   username  String   @unique
//   password  String
//   createdAt DateTime @default(now())
//   updatedAt DateTime @updatedAt
//   User      User     @relation(fields: [userId], references: [id])
//   userId    String   @unique
// }