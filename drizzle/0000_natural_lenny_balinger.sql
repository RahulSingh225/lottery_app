-- Current sql file was generated after introspecting the database
-- If you want to run this migration please uncomment this code before executing migrations
/*
CREATE TABLE IF NOT EXISTS "users" (
	"id" integer PRIMARY KEY NOT NULL,
	"username" varchar,
	"mobile" varchar,
	"password" varchar,
	"status" varchar,
	"sales" double precision,
	"winnings" double precision,
	"losses" double precision,
	"balance" double precision,
	"role" varchar,
	"created_at" timestamp DEFAULT '2024-10-15 15:41:08.574256',
	"name" varchar,
	"fcm_token" varchar,
	CONSTRAINT "users_mobile_key" UNIQUE("mobile")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "transactions" (
	"txn_id" integer PRIMARY KEY NOT NULL,
	"ticket_no" integer,
	"created_at" timestamp DEFAULT '2024-10-15 15:41:08.574256',
	"value" integer,
	"buyer" integer,
	"status" varchar,
	"closed" boolean
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "settlements" (
	"id" integer PRIMARY KEY NOT NULL,
	"settlement_id" varchar,
	"value" double precision,
	"requester" integer,
	"status" varchar,
	"created_at" timestamp DEFAULT '2024-10-15 15:41:08.574256',
	CONSTRAINT "settlements_settlement_id_key" UNIQUE("settlement_id")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "system_logs" (
	"id" integer PRIMARY KEY NOT NULL,
	"created_at" timestamp DEFAULT '2024-10-15 15:41:08.574256',
	"event_name" varchar,
	"data" json,
	"trigger_by" integer
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "tickets" (
	"id" integer PRIMARY KEY NOT NULL,
	"ticket_no" integer,
	"ticket_value" double precision,
	"buyer" integer,
	"created_at" timestamp DEFAULT '2024-10-15 15:41:08.574256',
	"closed" boolean,
	"updated_at" timestamp DEFAULT '2024-10-15 15:41:08.574256',
	CONSTRAINT "tickets_ticket_no_key" UNIQUE("ticket_no")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "statements" (
	"id" integer PRIMARY KEY NOT NULL,
	"created_at" timestamp DEFAULT '2024-10-15 15:41:08.574256',
	"txn_type" varchar,
	"value" double precision,
	"user" integer,
	"opening_balance" double precision,
	"closing_balance" double precision
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "transactions" ADD CONSTRAINT "transactions_buyer_fkey" FOREIGN KEY ("buyer") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "transactions" ADD CONSTRAINT "transactions_ticket_no_fkey" FOREIGN KEY ("ticket_no") REFERENCES "public"."tickets"("ticket_no") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "settlements" ADD CONSTRAINT "settlements_requester_fkey" FOREIGN KEY ("requester") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "system_logs" ADD CONSTRAINT "system_logs_trigger_by_fkey" FOREIGN KEY ("trigger_by") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "tickets" ADD CONSTRAINT "tickets_buyer_fkey" FOREIGN KEY ("buyer") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "statements" ADD CONSTRAINT "statements_user_fkey" FOREIGN KEY ("user") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

*/