import { motion } from "framer-motion";
import { forwardRef, useState } from "react";
import { Copy } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { useToast } from "@/hooks/use-toast";

const Contact = forwardRef<HTMLDivElement>((_, ref) => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});
  const [sending, setSending] = useState(false);
  const { toast } = useToast();

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText("hello@yume.com");
      toast({ title: "Email copied to clipboard!" });
    } catch {
      toast({ title: "Failed to copy", variant: "destructive" });
    }
  };

  const validate = () => {
    const newErrors: typeof errors = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    else if (form.name.trim().length < 2) newErrors.name = "Name must be at least 2 characters";

    if (!form.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) newErrors.email = "Please enter a valid email";

    if (!form.message.trim()) newErrors.message = "Message is required";
    else if (form.message.trim().length < 10) newErrors.message = "Message must be at least 10 characters";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setSending(true);
    setTimeout(() => {
      setSending(false);
      setForm({ name: "", email: "", message: "" });
      setErrors({});
      toast({ title: "Message sent!", description: "We'll get back to you soon." });
    }, 1000);
  };

  return (
    <Layout>
      <section className="px-6 md:px-12 pt-24 pb-8">

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
            <button
              onClick={copyEmail}
              className="flex items-center gap-2 text-sm text-muted-foreground mb-6 hover:text-foreground transition-colors"
            >
              <span>hello@yume.com</span>
              <Copy size={12} />
            </button>
          </div>

          <motion.form
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div>
              <input
                type="text"
                placeholder="Your Name"
                value={form.name}
                onChange={(e) => { setForm({ ...form, name: e.target.value }); setErrors((p) => ({ ...p, name: undefined })); }}
                className={`w-full bg-secondary/50 border px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-foreground ${errors.name ? "border-destructive" : "border-transparent"}`}
              />
              {errors.name && <p className="text-xs text-destructive mt-1">{errors.name}</p>}
            </div>
            <div>
              <input
                type="email"
                placeholder="Your Email"
                value={form.email}
                onChange={(e) => { setForm({ ...form, email: e.target.value }); setErrors((p) => ({ ...p, email: undefined })); }}
                className={`w-full bg-secondary/50 border px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-foreground ${errors.email ? "border-destructive" : "border-transparent"}`}
              />
              {errors.email && <p className="text-xs text-destructive mt-1">{errors.email}</p>}
            </div>
            <div>
              <textarea
                placeholder="Your Masterpiece Starts Here"
                value={form.message}
                onChange={(e) => { setForm({ ...form, message: e.target.value }); setErrors((p) => ({ ...p, message: undefined })); }}
                rows={5}
                className={`w-full bg-secondary/50 border px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-foreground resize-none ${errors.message ? "border-destructive" : "border-transparent"}`}
              />
              {errors.message && <p className="text-xs text-destructive mt-1">{errors.message}</p>}
            </div>
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
