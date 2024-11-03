import { relations } from "drizzle-orm/relations";
import { users, transactions, tickets, settlements, systemLogs, statements } from "./schema";

export const transactionsRelations = relations(transactions, ({one}) => ({
	user: one(users, {
		fields: [transactions.buyer],
		references: [users.id]
	}),
	ticket: one(tickets, {
		fields: [transactions.ticketNo],
		references: [tickets.ticketNo]
	}),
}));

export const usersRelations = relations(users, ({many}) => ({
	transactions: many(transactions),
	settlements: many(settlements),
	systemLogs: many(systemLogs),
	tickets: many(tickets),
	statements: many(statements),
}));

export const ticketsRelations = relations(tickets, ({one, many}) => ({
	transactions: many(transactions),
	user: one(users, {
		fields: [tickets.buyer],
		references: [users.id]
	}),
}));

export const settlementsRelations = relations(settlements, ({one}) => ({
	user: one(users, {
		fields: [settlements.requester],
		references: [users.id]
	}),
}));

export const systemLogsRelations = relations(systemLogs, ({one}) => ({
	user: one(users, {
		fields: [systemLogs.triggerBy],
		references: [users.id]
	}),
}));

export const statementsRelations = relations(statements, ({one}) => ({
	user: one(users, {
		fields: [statements.user],
		references: [users.id]
	}),
}));