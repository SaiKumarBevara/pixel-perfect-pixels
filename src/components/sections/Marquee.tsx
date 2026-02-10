import { clients } from "@/lib/data";

const icons = ["✦", "❋", "☀", "■", "◆", "⚡"];

const Marquee = () => {
  const items = [...clients, ...clients, ...clients, ...clients];

  return (
    <div className="overflow-hidden border-y border-border py-4">
      <div className="animate-marquee flex whitespace-nowrap">
        {items.map((client, i) => (
          <span key={i} className="mx-6 text-sm font-medium text-muted-foreground flex items-center gap-2">
            <span className="text-accent">{icons[i % icons.length]}</span>
            {client}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
