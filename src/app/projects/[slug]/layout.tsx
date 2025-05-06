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

DATA.PROJECTS["Smart Access Control System"] = {
  SLUG: "smart-access-control",
  DESCRIPTION: [
    "Proposed a smart access control system integrating ID card access with facial recognition for enhanced security.",
    "Designed multi-factor authentication using Amazon Rekognition and managed user access with AWS Cognito.",
    "Implemented secure data storage (Amazon S3, DynamoDB) and serverless processing with AWS Lambda.",
  ],
  TECH_STACK: ["AWS", "Amazon Rekognition", "AWS Cognito", "Lambda"],
  HIDDEN: false,
};
