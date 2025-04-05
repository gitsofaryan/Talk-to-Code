"use client";

import { useGitIngest } from "@/context/git-ingest-context";

export default function SummaryPanel() {
  const { repoData } = useGitIngest();

  return (
    <textarea 
      className="bg-cream-50 border-2 border-gray-800 rounded-md p-4 w-full lg:w-1/2 h-[200px] overflow-auto shadow-inner text-sm font-mono"
      defaultValue={`Repository: ${repoData.repoName || ""}
Files analyzed: ${repoData.filesAnalyzed || "65"}

Estimated tokens: ${repoData.estimatedTokens || "56.2k"}`}
      readOnly
    />
  );
}
