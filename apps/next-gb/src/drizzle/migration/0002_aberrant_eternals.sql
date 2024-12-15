DROP INDEX "users_ethereum_address_unique";--> statement-breakpoint
DROP INDEX "users_email_unique";--> statement-breakpoint
ALTER TABLE `users` ALTER COLUMN "player_name" TO "player_name" text;--> statement-breakpoint
CREATE UNIQUE INDEX `users_ethereum_address_unique` ON `users` (`ethereum_address`);--> statement-breakpoint
CREATE UNIQUE INDEX `users_email_unique` ON `users` (`email`);--> statement-breakpoint
ALTER TABLE `users` ALTER COLUMN "email" TO "email" text;--> statement-breakpoint
ALTER TABLE `users` DROP COLUMN `chain_id`;