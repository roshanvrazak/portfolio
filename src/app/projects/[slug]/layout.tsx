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

  if (!project || !project[1] || !project[1].DESCRIPTION || !project[1].IMAGE) {
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
    <div className="bg-background text-foreground mx-auto px-4 w-full lg:w-2/3 xl:w-1/2 pt-6 sm:pt-12">
      <Navbar />

      <main className="min-h-fit px-4">{children}</main>
    </div>
  );
}

