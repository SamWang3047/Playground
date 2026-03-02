import { findAllReports } from "@/lib/reports/repository";
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
