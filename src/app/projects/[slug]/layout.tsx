import { DATA, getProjectData } from "@/app/data";
import { Navbar } from "@/components/sections";
import { Metadata } from "next";

export const revalidate = 604800;

type LayoutProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: LayoutProps): Promise<Metadata> {
  const resolvedParams = await params;
  const project = getProjectData(resolvedParams.slug);

  if (!project || !project[1] || !project[1].DESCRIPTION) {
    return {
      title: "Project Not Found",
      description: "The requested project does not exist.",
    };
  }

  return {
    title: `${project[0]} | Roshan Razak`,
    description: project[1].DESCRIPTION[0] || "No description available.",
    openGraph: {
      title: project[0],
      description: project[1].DESCRIPTION[0] || "No description available.",
    },
  };
}

export function generateStaticParams() {
  return Object.values(DATA.PROJECTS).map((project) => ({
    slug: project.SLUG,
  }));
}

export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="site-shell">
      <Navbar />

      <main className="min-h-fit">{children}</main>
    </div>
  );
}
