import { findReportsByUserId, insertReport } from "@/lib/reports/repository";
import type { WeeklyReport } from "@/lib/reports/types";

export async function getReportsForList(userId: string): Promise<WeeklyReport[]> {
  return findReportsByUserId(userId);
}

export async function getRecentReports(userId: string, limit: number): Promise<WeeklyReport[]> {
  const reports = await getReportsForList(userId);
  return reports.slice(0, limit);
}

function getISOWeek(date: Date): string {
  const value = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
  const dayNum = value.getUTCDay() || 7;
  value.setUTCDate(value.getUTCDate() + 4 - dayNum);
  const yearStart = new Date(Date.UTC(value.getUTCFullYear(), 0, 1));
  const weekNo = Math.ceil((((value.getTime() - yearStart.getTime()) / 86400000) + 1) / 7);
  return `${value.getUTCFullYear()}-W${String(weekNo).padStart(2, "0")}`;
}

export async function createWeeklyReport(userId: string, input: { title: string; summary: string }): Promise<WeeklyReport> {
  const now = new Date();
  return insertReport({
    userId,
    title: input.title,
    summary: input.summary,
    week: getISOWeek(now),
  });
}
