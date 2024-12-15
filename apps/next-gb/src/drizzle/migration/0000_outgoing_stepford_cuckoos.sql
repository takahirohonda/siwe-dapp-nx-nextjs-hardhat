CREATE TABLE `users_table` (
	`id` text PRIMARY KEY NOT NULL,
	`created_at` text DEFAULT CURRENT_TIMESTAMP NOT NULL,
	`ethereum_address` text NOT NULL,
	`chain_id` integer NOT NULL,
	`player_name` text NOT NULL,
	`email` text NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `users_table_ethereum_address_unique` ON `users_table` (`ethereum_address`);--> statement-breakpoint
CREATE UNIQUE INDEX `users_table_email_unique` ON `users_table` (`email`);