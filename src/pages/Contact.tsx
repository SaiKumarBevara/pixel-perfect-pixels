import { motion } from "framer-motion";
import { forwardRef, useState } from "react";
import { Copy } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { useToast } from "@/hooks/use-toast";

const Contact = forwardRef<HTMLDivElement>((_, ref) => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast({ title: "Please fill in all fields", variant: "destructive" });
      return;
    }
    setSending(true);
    // Simulate send
    setTimeout(() => {
      setSending(false);
      setForm({ name: "", email: "", message: "" });
      toast({ title: "Message sent!", description: "We'll get back to you soon." });
    }, 1000);
  };

  return (
    <Layout>
      {/* Header */}
      <section className="px-6 md:px-12 pt-12 pb-8">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-bold tracking-wider">YUYA</span>
          <span className="text-xs text-muted-foreground">::</span>
        </div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-6xl md:text-[7rem] lg:text-[9rem] font-black leading-[0.85] tracking-tighter uppercase"
        >
          SHOOT A
          <br />
          REQUEST
        </motion.h1>
      </section>

      {/* Form */}
      <section className="px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
              <span>hello@yume.com</span>
              <Copy size={12} className="cursor-pointer hover:text-foreground transition-colors" />
            </div>
          </div>

          <motion.form
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <input
              type="text"
              placeholder="Your Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full bg-secondary/50 border-0 px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-foreground"
            />
            <input
              type="email"
              placeholder="Your Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full bg-secondary/50 border-0 px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-foreground"
            />
            <textarea
              placeholder="Your Masterpiece Starts Here"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              rows={5}
              className="w-full bg-secondary/50 border-0 px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-foreground resize-none"
            />
            <button
              type="submit"
              disabled={sending}
              className="w-full bg-muted-foreground text-primary-foreground py-3 text-sm font-medium hover:bg-foreground transition-colors disabled:opacity-50"
            >
              {sending ? "Sending..." : "Send It!"}
            </button>
          </motion.form>
        </div>
      </section>
    </Layout>
  );
});

Contact.displayName = "Contact";

export default Contact;
