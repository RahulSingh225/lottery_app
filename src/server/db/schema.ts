import { pgTable, unique, integer, varchar, doublePrecision, timestamp, foreignKey, boolean, json } from "drizzle-orm/pg-core"
import { sql } from "drizzle-orm"



export const users = pgTable("users", {
	id: integer().primaryKey().notNull(),
	username: varchar(),
	mobile: varchar(),
	password: varchar(),
	status: varchar(),
	sales: doublePrecision(),
	winnings: doublePrecision(),
	losses: doublePrecision(),
	balance: doublePrecision(),
	role: varchar(),
	createdAt: timestamp("created_at", { mode: 'string' }).default('2024-10-15 15:41:08.574256'),
	name: varchar(),
	fcmToken: varchar("fcm_token"),
}, (table) => {
	return {
		usersMobileKey: unique("users_mobile_key").on(table.mobile),
	}
});

export const transactions = pgTable("transactions", {
	txnId: integer("txn_id").primaryKey().notNull(),
	ticketNo: integer("ticket_no"),
	createdAt: timestamp("created_at", { mode: 'string' }).default('2024-10-15 15:41:08.574256'),
	value: integer(),
	buyer: integer(),
	status: varchar(),
	closed: boolean(),
}, (table) => {
	return {
		transactionsBuyerFkey: foreignKey({
			columns: [table.buyer],
			foreignColumns: [users.id],
			name: "transactions_buyer_fkey"
		}),
		transactionsTicketNoFkey: foreignKey({
			columns: [table.ticketNo],
			foreignColumns: [tickets.ticketNo],
			name: "transactions_ticket_no_fkey"
		}),
	}
});

export const settlements = pgTable("settlements", {
	id: integer().primaryKey().notNull(),
	settlementId: varchar("settlement_id"),
	value: doublePrecision(),
	requester: integer(),
	status: varchar(),
	createdAt: timestamp("created_at", { mode: 'string' }).default('2024-10-15 15:41:08.574256'),
}, (table) => {
	return {
		settlementsRequesterFkey: foreignKey({
			columns: [table.requester],
			foreignColumns: [users.id],
			name: "settlements_requester_fkey"
		}),
		settlementsSettlementIdKey: unique("settlements_settlement_id_key").on(table.settlementId),
	}
});

export const systemLogs = pgTable("system_logs", {
	id: integer().primaryKey().notNull(),
	createdAt: timestamp("created_at", { mode: 'string' }).default('2024-10-15 15:41:08.574256'),
	eventName: varchar("event_name"),
	data: json(),
	triggerBy: integer("trigger_by"),
}, (table) => {
	return {
		systemLogsTriggerByFkey: foreignKey({
			columns: [table.triggerBy],
			foreignColumns: [users.id],
			name: "system_logs_trigger_by_fkey"
		}),
	}
});

export const tickets = pgTable("tickets", {
	id: integer().primaryKey().notNull(),
	ticketNo: integer("ticket_no"),
	ticketValue: doublePrecision("ticket_value"),
	buyer: integer(),
	createdAt: timestamp("created_at", { mode: 'string' }).default('2024-10-15 15:41:08.574256'),
	closed: boolean(),
	updatedAt: timestamp("updated_at", { mode: 'string' }).default('2024-10-15 15:41:08.574256'),
}, (table) => {
	return {
		ticketsBuyerFkey: foreignKey({
			columns: [table.buyer],
			foreignColumns: [users.id],
			name: "tickets_buyer_fkey"
		}),
		ticketsTicketNoKey: unique("tickets_ticket_no_key").on(table.ticketNo),
	}
});

export const statements = pgTable("statements", {
	id: integer().primaryKey().notNull(),
	createdAt: timestamp("created_at", { mode: 'string' }).default('2024-10-15 15:41:08.574256'),
	txnType: varchar("txn_type"),
	value: doublePrecision(),
	user: integer(),
	openingBalance: doublePrecision("opening_balance"),
	closingBalance: doublePrecision("closing_balance"),
}, (table) => {
	return {
		statementsUserFkey: foreignKey({
			columns: [table.user],
			foreignColumns: [users.id],
			name: "statements_user_fkey"
		}),
	}
});
