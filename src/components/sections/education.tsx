export function Education({ data }: { data: Record<string, string> }) {
    return (
      <div id="education" className="py-10">
        <h2 className="text-base font-medium text-primary/90">education.</h2>
  
        <p className="mt-4 flex flex-col gap-2 text-base text-justify font-normal text-muted-foreground">
          <span>
            {data.INTRO}{" "}
            <span className="hidden sm:inline">{data.EXPERTISE}</span>
          </span>
  
          {/* <span>{data.BLOG}</span> */}
        </p>
      </div>
    );
}