import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const splitSql = (sql: string) => {
  return sql.split(';').filter(content => content.trim() !== '')
}

async function main() {
  const sql = `

INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "password") VALUES ('a9df49b1-cdb4-43ce-8c44-466b5f0abeda', '1Dixie.Emard@gmail.com', 'Alice Jones', 'https://i.imgur.com/YfJQV5z.png?id=3', 'inv44556', 'pending', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "password") VALUES ('1378e21b-6c74-452e-96e0-b20ebaaca969', '8Rhoda_Grimes@yahoo.com', 'Bob Brown', 'https://i.imgur.com/YfJQV5z.png?id=10', 'inv44556', 'suspended', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "password") VALUES ('3a7de920-263b-44d2-99a4-2c62412453f1', '15Kayleigh78@yahoo.com', 'Bob Brown', 'https://i.imgur.com/YfJQV5z.png?id=17', 'inv78901', 'suspended', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "password") VALUES ('f2ac773d-9062-441f-8b0b-59bce4c1993e', '22Daron.Quigley86@hotmail.com', 'Bob Brown', 'https://i.imgur.com/YfJQV5z.png?id=24', 'inv78901', 'inactive', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "password") VALUES ('230f37a8-f657-4749-83c5-f87b467bd232', '29Reta64@hotmail.com', 'Alice Jones', 'https://i.imgur.com/YfJQV5z.png?id=31', 'inv67890', 'pending', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "password") VALUES ('18d575dc-313b-4f2f-ae91-c2265bb61d97', '43Juvenal.Kunde44@gmail.com', 'Bob Brown', 'https://i.imgur.com/YfJQV5z.png?id=45', 'inv11223', 'pending', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "password") VALUES ('96c87644-5598-4521-9ee4-a5a7650dca6d', '50Coty60@yahoo.com', 'Alice Jones', 'https://i.imgur.com/YfJQV5z.png?id=52', 'inv12345', 'inactive', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "password") VALUES ('23b8c78a-eebb-467b-93f6-ab056f0da7a4', '57Aileen86@hotmail.com', 'Jane Smith', 'https://i.imgur.com/YfJQV5z.png?id=59', 'inv67890', 'pending', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "password") VALUES ('f2dc43b2-9405-4616-86e5-01c59c679d03', '64Dangelo72@hotmail.com', 'Alice Jones', 'https://i.imgur.com/YfJQV5z.png?id=66', 'inv12345', 'deleted', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');

INSERT INTO "RagVector" ("id", "key", "tags") VALUES ('8d95c28d-59ba-4e3d-8f9b-589952f186c7', 'a1b2c3d4e5f6g7h8i9j0', '{"damnatio":"claustrum","abstergo":"pauper","victoria":"tolero","templum":"beneficium","speculum":"auctus"}'::jsonb);
INSERT INTO "RagVector" ("id", "key", "tags") VALUES ('14333dbb-2c7e-40ea-899e-16e814c4c903', 'p0o9i8u7y6t5r4e3w2q1', '{"denuncio":"dapifer","verus":"verbera","temeritas":"commodo"}'::jsonb);
INSERT INTO "RagVector" ("id", "key", "tags") VALUES ('b316461e-cb99-4148-a9f6-43867b57cdba', 'm1n2b3v4c5x6z7a8s9d0', '{"defaeco":"adulescens","cupressus":"textor","degero":"aestivus","amplitudo":"claudeo","atrocitas":"unus"}'::jsonb);
INSERT INTO "RagVector" ("id", "key", "tags") VALUES ('548f8ef8-0809-4c77-8f90-48de1fdd236f', 'z9y8x7w6v5u4t3s2r1q0', '{"cura":"clam","tamisium":"torqueo","unde":"tamen","temporibus":"aduro"}'::jsonb);
INSERT INTO "RagVector" ("id", "key", "tags") VALUES ('eb5ab877-bdc0-4841-bd1f-bb4ad6ce96f7', 'm1n2b3v4c5x6z7a8s9d0', '{"testimonium":"quaerat","ipsam":"peccatus","umbra":"eum","ultra":"thorax","vulnero":"amet"}'::jsonb);
INSERT INTO "RagVector" ("id", "key", "tags") VALUES ('8a9eb80c-2ca9-41ba-81a0-1be5d17e407f', 'a1b2c3d4e5f6g7h8i9j0', '{"vulgo":"expedita","dignissimos":"vulgivagus","tricesimus":"tyrannus","suus":"basium","amo":"absque"}'::jsonb);
INSERT INTO "RagVector" ("id", "key", "tags") VALUES ('d3774bf9-fb1b-45e2-9004-0799418021a9', 'm1n2b3v4c5x6z7a8s9d0', '{"temporibus":"angustus","ipsum":"cupio","defungo":"arcus"}'::jsonb);
INSERT INTO "RagVector" ("id", "key", "tags") VALUES ('1e3e2925-0b1f-42c1-a79e-e122442dbc31', 'z9y8x7w6v5u4t3s2r1q0', '{"usus":"arma","ante":"tamquam","congregatio":"ait","laudantium":"triduana"}'::jsonb);
INSERT INTO "RagVector" ("id", "key", "tags") VALUES ('e0edde06-0c25-426b-a25f-7c5b879feade', 'z9y8x7w6v5u4t3s2r1q0', '{"sequi":"aestivus","dens":"bestia","carus":"suppono","succurro":"comprehendo","aqua":"crudelis"}'::jsonb);
INSERT INTO "RagVector" ("id", "key", "tags") VALUES ('0ab3e0f0-2d29-4382-b5a0-454145da1a6f', 'k1l2j3h4g5f6d7s8a9z0', '{"velum":"aegrotatio","ater":"solio","mollitia":"textus","asper":"aliqua"}'::jsonb);

INSERT INTO "Organization" ("id", "name", "pictureUrl") VALUES ('21e46d11-1018-4f6d-8c3a-ed06f764fbfb', 'Tech Innovators Inc.', 'https://i.imgur.com/YfJQV5z.png?id=102');
INSERT INTO "Organization" ("id", "name", "pictureUrl") VALUES ('d95db92e-0dcc-4a08-8a0a-cb24f4353645', 'Future Enterprises', 'https://i.imgur.com/YfJQV5z.png?id=105');
INSERT INTO "Organization" ("id", "name", "pictureUrl") VALUES ('83516f48-115a-480f-9c24-e886c4480e6f', 'Future Enterprises', 'https://i.imgur.com/YfJQV5z.png?id=108');
INSERT INTO "Organization" ("id", "name", "pictureUrl") VALUES ('09a7d4c0-455b-4a42-b46b-2627c9766cb1', 'Creative Minds Co.', 'https://i.imgur.com/YfJQV5z.png?id=111');
INSERT INTO "Organization" ("id", "name", "pictureUrl") VALUES ('8af3c75d-9128-4108-a169-a60439fa3557', 'Tech Innovators Inc.', 'https://i.imgur.com/YfJQV5z.png?id=114');
INSERT INTO "Organization" ("id", "name", "pictureUrl") VALUES ('e64bee64-f44a-43ad-9aee-d007eb3c7554', 'Green Solutions LLC', 'https://i.imgur.com/YfJQV5z.png?id=117');
INSERT INTO "Organization" ("id", "name", "pictureUrl") VALUES ('ef1e3129-017b-40e6-a7c7-5f4502db8d35', 'Global Ventures Ltd.', 'https://i.imgur.com/YfJQV5z.png?id=120');
INSERT INTO "Organization" ("id", "name", "pictureUrl") VALUES ('4510e605-93dd-403f-a96c-3f37d550e0dc', 'Global Ventures Ltd.', 'https://i.imgur.com/YfJQV5z.png?id=123');
INSERT INTO "Organization" ("id", "name", "pictureUrl") VALUES ('fd543cd6-d37c-4db4-886c-c16fa9bbb277', 'Green Solutions LLC', 'https://i.imgur.com/YfJQV5z.png?id=126');
INSERT INTO "Organization" ("id", "name", "pictureUrl") VALUES ('6c46983b-752a-4721-8039-c251269899a6', 'Green Solutions LLC', 'https://i.imgur.com/YfJQV5z.png?id=129');

INSERT INTO "OrganizationRole" ("id", "name", "userId", "organizationId") VALUES ('0ac2debd-0680-45a5-8ca8-52709e4d8a8a', 'Viewer', 'a9df49b1-cdb4-43ce-8c44-466b5f0abeda', '6c46983b-752a-4721-8039-c251269899a6');
INSERT INTO "OrganizationRole" ("id", "name", "userId", "organizationId") VALUES ('829ea23b-7f97-45ed-a50b-251f9018117a', 'Contributor', '18d575dc-313b-4f2f-ae91-c2265bb61d97', 'ef1e3129-017b-40e6-a7c7-5f4502db8d35');
INSERT INTO "OrganizationRole" ("id", "name", "userId", "organizationId") VALUES ('6c15cb30-f898-4d7a-a3d0-e046ae1ddeda', 'Viewer', '23b8c78a-eebb-467b-93f6-ab056f0da7a4', '8af3c75d-9128-4108-a169-a60439fa3557');
INSERT INTO "OrganizationRole" ("id", "name", "userId", "organizationId") VALUES ('e792c6f0-4f20-4eaa-bbad-d415a82a8666', 'Contributor', 'a9df49b1-cdb4-43ce-8c44-466b5f0abeda', 'd95db92e-0dcc-4a08-8a0a-cb24f4353645');
INSERT INTO "OrganizationRole" ("id", "name", "userId", "organizationId") VALUES ('b1d89c1b-669c-47d2-977f-bce0a22fa39c', 'Administrator', '96c87644-5598-4521-9ee4-a5a7650dca6d', 'e64bee64-f44a-43ad-9aee-d007eb3c7554');
INSERT INTO "OrganizationRole" ("id", "name", "userId", "organizationId") VALUES ('36ad7799-fdb5-4079-9308-063bf058d3da', 'Administrator', 'f2ac773d-9062-441f-8b0b-59bce4c1993e', '6c46983b-752a-4721-8039-c251269899a6');
INSERT INTO "OrganizationRole" ("id", "name", "userId", "organizationId") VALUES ('b9c6206e-f3c2-437c-8528-a9138b2f21b1', 'Contributor', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', 'fd543cd6-d37c-4db4-886c-c16fa9bbb277');
INSERT INTO "OrganizationRole" ("id", "name", "userId", "organizationId") VALUES ('195e36ac-d37b-4e2d-b680-e93ce958c646', 'Editor', 'a9df49b1-cdb4-43ce-8c44-466b5f0abeda', '8af3c75d-9128-4108-a169-a60439fa3557');
INSERT INTO "OrganizationRole" ("id", "name", "userId", "organizationId") VALUES ('efdca1f6-393a-49ad-9152-c123b30250ff', 'Editor', '96c87644-5598-4521-9ee4-a5a7650dca6d', 'e64bee64-f44a-43ad-9aee-d007eb3c7554');
INSERT INTO "OrganizationRole" ("id", "name", "userId", "organizationId") VALUES ('ac8d82e3-9aaa-42ea-b6d0-ec4c32936621', 'Editor', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', 'ef1e3129-017b-40e6-a7c7-5f4502db8d35');

INSERT INTO "EmailTemplate" ("id", "name", "subject", "body", "userId") VALUES ('ddbc4f4f-3f68-4b8c-a3ca-9dec3da41ada', 'Newsletter Template', 'Thank You for Attending', 'Thank you for attending our event. We hope you had a great time', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "EmailTemplate" ("id", "name", "subject", "body", "userId") VALUES ('0176d7b4-c6ee-4446-82a2-4d53cff78503', 'Event Invitation Template', 'Youre Invited to Our Special Event', 'Stay updated with our latest news and updates in this months newsletter.', '230f37a8-f657-4749-83c5-f87b467bd232');
INSERT INTO "EmailTemplate" ("id", "name", "subject", "body", "userId") VALUES ('91d0d266-d857-4b8a-957b-040176825160', 'Event Invitation Template', 'Youre Invited to Our Special Event', 'Hello and welcome to our service Were excited to have you on board.', '18d575dc-313b-4f2f-ae91-c2265bb61d97');
INSERT INTO "EmailTemplate" ("id", "name", "subject", "body", "userId") VALUES ('47bcf1e3-da03-46d7-a535-c6e4b8bba7b3', 'Newsletter Template', 'Welcome to Our Service', 'Hello and welcome to our service Were excited to have you on board.', '3a7de920-263b-44d2-99a4-2c62412453f1');
INSERT INTO "EmailTemplate" ("id", "name", "subject", "body", "userId") VALUES ('b14dacc3-c55d-45f2-9b18-6f11f776d346', 'Welcome Template', 'Welcome to Our Service', 'Stay updated with our latest news and updates in this months newsletter.', 'f2dc43b2-9405-4616-86e5-01c59c679d03');
INSERT INTO "EmailTemplate" ("id", "name", "subject", "body", "userId") VALUES ('cffbdcf1-1dcc-454a-9d42-e15765de8e7f', 'Event Invitation Template', 'Monthly Newsletter  Stay Updated', 'Hello and welcome to our service Were excited to have you on board.', '230f37a8-f657-4749-83c5-f87b467bd232');
INSERT INTO "EmailTemplate" ("id", "name", "subject", "body", "userId") VALUES ('5867d394-3efe-429e-9418-a810812f081c', 'Welcome Template', 'Monthly Newsletter  Stay Updated', 'Join us for a special event. We look forward to seeing you there', 'f2dc43b2-9405-4616-86e5-01c59c679d03');
INSERT INTO "EmailTemplate" ("id", "name", "subject", "body", "userId") VALUES ('274684bc-d80b-4c8d-b5b6-af68952c2304', 'Promotion Template', 'Thank You for Attending', 'Dont miss out on our exclusive promotion. Act now and save big', '3a7de920-263b-44d2-99a4-2c62412453f1');
INSERT INTO "EmailTemplate" ("id", "name", "subject", "body", "userId") VALUES ('4968aaea-faac-4644-b005-e6ad78dbe54e', 'Promotion Template', 'Exclusive Promotion Just for You', 'Stay updated with our latest news and updates in this months newsletter.', '96c87644-5598-4521-9ee4-a5a7650dca6d');
INSERT INTO "EmailTemplate" ("id", "name", "subject", "body", "userId") VALUES ('f6fb182f-19d5-4f0d-8c3a-6fbd7de94589', 'Event Invitation Template', 'Exclusive Promotion Just for You', 'Stay updated with our latest news and updates in this months newsletter.', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');

INSERT INTO "Email" ("id", "subject", "body", "senderId", "templateId") VALUES ('2c5c80eb-f76c-4d82-88a5-58d6d6c5a7a7', 'Upcoming Event Notification', 'Dear user this is a reminder for our upcoming meeting scheduled for tomorrow at 10 AM.', 'f2ac773d-9062-441f-8b0b-59bce4c1993e', '91d0d266-d857-4b8a-957b-040176825160');
INSERT INTO "Email" ("id", "subject", "body", "senderId", "templateId") VALUES ('2ff58191-2c88-4ccb-811e-419da39d4140', 'Upcoming Event Notification', 'To reset your password please click on the following link and follow the instructions.', '23b8c78a-eebb-467b-93f6-ab056f0da7a4', '5867d394-3efe-429e-9418-a810812f081c');
INSERT INTO "Email" ("id", "subject", "body", "senderId", "templateId") VALUES ('1585725a-1c76-4461-89f7-9a5228838b9b', 'Upcoming Event Notification', 'Your invoice for the recent purchase is now ready. Please find the attached document for details.', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', 'b14dacc3-c55d-45f2-9b18-6f11f776d346');
INSERT INTO "Email" ("id", "subject", "body", "senderId", "templateId") VALUES ('cd932ca2-c1dd-4959-b11d-f919ef96b3ca', 'Your Invoice is Ready', 'Dear user this is a reminder for our upcoming meeting scheduled for tomorrow at 10 AM.', '3a7de920-263b-44d2-99a4-2c62412453f1', 'cffbdcf1-1dcc-454a-9d42-e15765de8e7f');
INSERT INTO "Email" ("id", "subject", "body", "senderId", "templateId") VALUES ('29271cd4-e7b9-4fea-a03d-c92f0466acff', 'Meeting Reminder', 'Your invoice for the recent purchase is now ready. Please find the attached document for details.', '1378e21b-6c74-452e-96e0-b20ebaaca969', '5867d394-3efe-429e-9418-a810812f081c');
INSERT INTO "Email" ("id", "subject", "body", "senderId", "templateId") VALUES ('4c60de22-fbe1-493b-be50-0797c90744d6', 'Your Invoice is Ready', 'Hello and welcome We are thrilled to have you on board. Let us know if you need any assistance.', 'a9df49b1-cdb4-43ce-8c44-466b5f0abeda', '91d0d266-d857-4b8a-957b-040176825160');
INSERT INTO "Email" ("id", "subject", "body", "senderId", "templateId") VALUES ('f93a5ce4-47fd-4180-80c9-23431699708c', 'Your Invoice is Ready', 'Dear user this is a reminder for our upcoming meeting scheduled for tomorrow at 10 AM.', '3a7de920-263b-44d2-99a4-2c62412453f1', 'cffbdcf1-1dcc-454a-9d42-e15765de8e7f');
INSERT INTO "Email" ("id", "subject", "body", "senderId", "templateId") VALUES ('db521955-c8dd-40a5-8eed-fe9ea6a15cd8', 'Upcoming Event Notification', 'To reset your password please click on the following link and follow the instructions.', '18d575dc-313b-4f2f-ae91-c2265bb61d97', 'f6fb182f-19d5-4f0d-8c3a-6fbd7de94589');
INSERT INTO "Email" ("id", "subject", "body", "senderId", "templateId") VALUES ('bafdbbcc-8831-442e-a209-72003c36097c', 'Welcome to Our Service', 'To reset your password please click on the following link and follow the instructions.', 'f2dc43b2-9405-4616-86e5-01c59c679d03', '47bcf1e3-da03-46d7-a535-c6e4b8bba7b3');
INSERT INTO "Email" ("id", "subject", "body", "senderId", "templateId") VALUES ('6d2882d6-c6e8-438e-9e0b-365687149eef', 'Your Invoice is Ready', 'Dear user this is a reminder for our upcoming meeting scheduled for tomorrow at 10 AM.', 'f2dc43b2-9405-4616-86e5-01c59c679d03', '4968aaea-faac-4644-b005-e6ad78dbe54e');

INSERT INTO "EmailRecipient" ("id", "recipientEmail", "status", "emailId") VALUES ('99bdc7bc-36c3-45d1-899e-7d0f6b01ad71', '221Zetta29@gmail.com', 'sent', '6d2882d6-c6e8-438e-9e0b-365687149eef');
INSERT INTO "EmailRecipient" ("id", "recipientEmail", "status", "emailId") VALUES ('76176f79-5cc3-4d90-8f37-81f6ca012c1f', '224Daryl.Witting72@hotmail.com', 'delivered', '2c5c80eb-f76c-4d82-88a5-58d6d6c5a7a7');
INSERT INTO "EmailRecipient" ("id", "recipientEmail", "status", "emailId") VALUES ('e1ba5fb4-2c50-45b2-aef6-2422bc4d1de4', '227Michele_Gutmann@yahoo.com', 'pending', '29271cd4-e7b9-4fea-a03d-c92f0466acff');
INSERT INTO "EmailRecipient" ("id", "recipientEmail", "status", "emailId") VALUES ('2c2830c8-fa84-4693-9912-87ddcd9cff4a', '230Marian_Howe76@hotmail.com', 'failed', '1585725a-1c76-4461-89f7-9a5228838b9b');
INSERT INTO "EmailRecipient" ("id", "recipientEmail", "status", "emailId") VALUES ('c2ae7130-bca6-4f74-9aa6-b0aae6c39d4f', '233America_Orn0@yahoo.com', 'pending', 'cd932ca2-c1dd-4959-b11d-f919ef96b3ca');
INSERT INTO "EmailRecipient" ("id", "recipientEmail", "status", "emailId") VALUES ('d056871e-bd6c-4c56-ab4d-13baf78af416', '236Estella55@gmail.com', 'bounced', '2c5c80eb-f76c-4d82-88a5-58d6d6c5a7a7');
INSERT INTO "EmailRecipient" ("id", "recipientEmail", "status", "emailId") VALUES ('fb9c3c0a-7526-4269-b8d0-b946abe90aaa', '239Adolf_Hoppe79@hotmail.com', 'bounced', '29271cd4-e7b9-4fea-a03d-c92f0466acff');
INSERT INTO "EmailRecipient" ("id", "recipientEmail", "status", "emailId") VALUES ('3547ee09-5286-46d7-8570-47c4bc6982ec', '242Janiya.Cremin@hotmail.com', 'sent', '2ff58191-2c88-4ccb-811e-419da39d4140');
INSERT INTO "EmailRecipient" ("id", "recipientEmail", "status", "emailId") VALUES ('1d214290-1e02-493b-b68b-111e61a93664', '245Gregorio33@yahoo.com', 'pending', '6d2882d6-c6e8-438e-9e0b-365687149eef');
INSERT INTO "EmailRecipient" ("id", "recipientEmail", "status", "emailId") VALUES ('a9624fe4-24dd-44f8-9457-d16a8455c50f', '248Carolyn_Cormier50@yahoo.com', 'pending', '2ff58191-2c88-4ccb-811e-419da39d4140');

INSERT INTO "UserSetting" ("id", "settingKey", "settingValue", "userId") VALUES ('fc787167-c5b8-47bf-9f79-9be527252b02', 'signature', 'userexample.com', '96c87644-5598-4521-9ee4-a5a7650dca6d');
INSERT INTO "UserSetting" ("id", "settingKey", "settingValue", "userId") VALUES ('d6bb93f9-f5ce-4f44-88f2-cb1a3e3e8774', 'defaultEmail', 'dark', '23b8c78a-eebb-467b-93f6-ab056f0da7a4');
INSERT INTO "UserSetting" ("id", "settingKey", "settingValue", "userId") VALUES ('11f211e4-d27e-4e38-9938-2276a7688f7d', 'signature', 'Best regards User', '96c87644-5598-4521-9ee4-a5a7650dca6d');
INSERT INTO "UserSetting" ("id", "settingKey", "settingValue", "userId") VALUES ('ac312156-d9c3-4c83-90d1-de41391ddbdf', 'notificationPreference', 'Best regards User', '3a7de920-263b-44d2-99a4-2c62412453f1');
INSERT INTO "UserSetting" ("id", "settingKey", "settingValue", "userId") VALUES ('43271a3e-bc67-441d-b12e-72312e86e013', 'theme', 'daily', '1378e21b-6c74-452e-96e0-b20ebaaca969');
INSERT INTO "UserSetting" ("id", "settingKey", "settingValue", "userId") VALUES ('ad2cbbc6-77e3-4bc0-92b2-e112d0fd3757', 'signature', 'Best regards User', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "UserSetting" ("id", "settingKey", "settingValue", "userId") VALUES ('43352f1d-0124-4638-a9ab-c0b3e73c681d', 'notificationPreference', 'UTC0', '96c87644-5598-4521-9ee4-a5a7650dca6d');
INSERT INTO "UserSetting" ("id", "settingKey", "settingValue", "userId") VALUES ('6f5714bf-4966-4170-9b4f-23ce00e66c6e', 'defaultEmail', 'userexample.com', '3a7de920-263b-44d2-99a4-2c62412453f1');
INSERT INTO "UserSetting" ("id", "settingKey", "settingValue", "userId") VALUES ('f3fddfdb-42a1-4271-aa60-3ff0f9d60e57', 'notificationPreference', 'Best regards User', 'f2dc43b2-9405-4616-86e5-01c59c679d03');
INSERT INTO "UserSetting" ("id", "settingKey", "settingValue", "userId") VALUES ('31c348b4-c7f4-46cd-a28e-eb0b432dee63', 'notificationPreference', 'Best regards User', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');

  `

  const sqls = splitSql(sql)

  for (const sql of sqls) {
    try {
      await prisma.$executeRawUnsafe(`${sql}`)
    } catch (error) {
      console.log(`Could not insert SQL: ${error.message}`)
    }
  }
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async error => {
    console.error(error)
    await prisma.$disconnect()
    process.exit(1)
  })
