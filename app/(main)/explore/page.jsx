import { getInterviewers } from "@/actions/explore";
import PageHeader from "@/components/reusables";
import ExploreGrid from "./_components/ExploreGrid";

export default async function ExplorePage() {
  const interviewers = await getInterviewers();

  return (
    <main className="relative min-h-screen">
  {/* Background image */}
  <div className="absolute inset-0 bg-[url('/explore_bg.png')] bg-contain bg-no-repeat bg-center" />

  {/* Overlay (controls intensity) */}
  <div className="absolute inset-0 bg-black/60" />

  {/* Content (NOT affected) */}
  <div className="relative z-10">
    <PageHeader
      label="Explore"
      gray="Find your"
      gold="expert interviewer"
      description="Browse senior engineers from top companies."
    />

    <div className="max-w-6xl mx-auto px-8 xl:px-0 py-10">
      <ExploreGrid interviewers={interviewers} />
    </div>
  </div>
</main>
  );
}