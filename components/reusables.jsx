export const GrayTitle = ({ children }) => (
<span className="bg-linear-to-br from-stone-100 via-stone-300 to-stone-500 
                 bg-clip-text text-transparent">{children}</span>);

export const GoldTitle = ({ children }) => 
    (<span className="bg-linear-to-br from-purple-100 via-purple-300 to-purple-500 
                 bg-clip-text text-transparent">{children}</span>);

export const SectionLabel = ({ children }) => 
    (<p className="inline-flex items-center gap-2 text-xs font-semibold text-purple-400
    tracking-[0.14em] uppercase" >
        <span className="w-4 h-px bg-purple-400"/>
        {children}</p>);

export const SectionHeading = ({ gray,purple }) =>(
    <h2 className="text-[clamp(2rem,4vw,3rem)] leading-[1.2]
    tracking-[-0.025em]">
        <GrayTitle>{gray}</GrayTitle>
        <br />
        <GoldTitle>{purple}</GoldTitle>
    </h2>

);

export default function PageHeader({ label, gray, gold, description, right }) {
  return (
    <div className="border-b border-white/8 px-8 py-10">
      <div className="max-w-6xl mx-auto flex items-center justify-between gap-4">
        <div>
          {label && <SectionLabel>{label}</SectionLabel>}
          <h1 className=" text-5xl tracking-tight mt-1">
            {gray && <GrayTitle>{gray} </GrayTitle>}
            {gold && <GoldTitle>{gold}</GoldTitle>}
          </h1>
          {description && (
            <p className="text-sm text-stone-500 font-light mt-2">
              {description}
            </p>
          )}
        </div>
        {right && <div className="shrink-0">{right}</div>}
      </div>
    </div>
  );
}