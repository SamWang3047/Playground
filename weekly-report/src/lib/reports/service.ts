import { findAllReports, insertReport } from "@/lib/reports/repository";
import type { WeeklyReport } from "@/lib/reports/types";

function byCreatedAtDesc(a: WeeklyReport, b: WeeklyReport) {
  return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
}

export async function getReportsForList(): Promise<WeeklyReport[]> {
  const reports = await findAllReports();
  return [...reports].sort(byCreatedAtDesc);
}

export async function getRecentReports(limit: number): Promise<WeeklyReport[]> {
  const reports = await getReportsForList();
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

export async function createWeeklyReport(input: { title: string; summary: string }): Promise<WeeklyReport> {
  const now = new Date();
  return insertReport({
    title: input.title,
    summary: input.summary,
    createdAt: now.toISOString().slice(0, 10),
    week: getISOWeek(now),
  });
}
