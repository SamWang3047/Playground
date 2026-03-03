import { prisma } from "@/lib/prisma";
import type { WeeklyReport } from "@/lib/reports/types";

type InsertWeeklyReportInput = {
  userId: string;
  week: string;
  title: string;
  summary: string;
};

function mapReportEntityToDTO(entity: {
  id: string;
  week: string;
  title: string;
  summary: string;
  createdAt: Date;
}): WeeklyReport {
  return {
    id: entity.id,
    week: entity.week,
    title: entity.title,
    summary: entity.summary,
    createdAt: entity.createdAt.toISOString().slice(0, 10),
  };
}

export async function findReportsByUserId(userId: string): Promise<WeeklyReport[]> {
  const reports = await prisma.report.findMany({
    where: { authorId: userId },
    orderBy: { createdAt: "desc" },
    select: {
      id: true,
      week: true,
      title: true,
      summary: true,
      createdAt: true,
    },
  });

  return reports.map(mapReportEntityToDTO);
}

export async function insertReport(input: InsertWeeklyReportInput): Promise<WeeklyReport> {
  const report = await prisma.report.create({
    data: {
      week: input.week,
      title: input.title,
      summary: input.summary,
      authorId: input.userId,
    },
    select: {
      id: true,
      week: true,
      title: true,
      summary: true,
      createdAt: true,
    },
  });

  return mapReportEntityToDTO(report);
}
