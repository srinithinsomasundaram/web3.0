import { useState, type FormEvent, type DragEvent } from "react";
import { Link } from "react-router-dom";
import { Upload, FileText, X, Globe, Laptop, CheckCircle2, Mail } from "lucide-react";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { sendWebsiteEmail } from "@/lib/smtp.server";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const roles = [
  {
    title: "Business Development Executive",
    team: "Sales",
    type: "Full-time · 100% Remote",
    summary:
      "Own prospect research, LinkedIn and email outreach, follow-ups, qualification and meeting booking in a 100% remote work environment.",
    responsibilities: [
      "Prospect research and target account building",
      "LinkedIn and email outreach",
      "Follow-ups and qualification",
      "Meeting booking and CRM hygiene",
    ],
  },
  {
    title: "Marketing / Growth Executive",
    team: "Growth",
    type: "Full-time · 100% Remote",
    summary:
      "Drive generative engine optimization (GEO), content distribution, LinkedIn campaigns, and growth experiments for enterprise tech clients.",
    responsibilities: [
      "Generative Engine Optimization (GEO) & SEO strategy",
      "Executive content crafting & article distribution",
      "Lead capture system optimization",
      "B2B growth experiment execution",
    ],
  },
  {
    title: "Software Engineer (Full-Stack / Core)",
    team: "Engineering",
    type: "Full-time · 100% Remote",
    summary:
      "Build high-performance custom enterprise backbones, API meshes, zero-latency database synchronization engines, and modern React interfaces.",
    responsibilities: [
      "TypeScript / Node.js microservices & API backbones",
      "Zero-latency ERP & database sync pipelines",
      "High-performance React / Tailwind user portals",
      "Automated CI/CD telemetry & testing infrastructure",
    ],
  },
  {
    title: "AI Automation Engineer",
    team: "AI Labs",
    type: "Full-time · 100% Remote",
    summary:
      "Engineer autonomous AI agent workflows, document intelligence parsers, LLM integrations, and background task automation pipelines for enterprises.",
    responsibilities: [
      "Autonomous agent workflow design & execution",
      "Document intelligence & optical parsing pipelines",
      "LLM API integration & deterministic fallback guardrails",
      "Real-time background queue automation engines",
    ],
  },
];

type ResumeFile = {
  name: string;
  size: number;
  base64: string;
};

function ResumeUploadInput({
  file,
  onFileChange,
}: {
  file: ResumeFile | null;
  onFileChange: (file: ResumeFile | null) => void;
}) {
  const [dragActive, setDragActive] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const processFile = (selectedFile: File) => {
    setError(null);
    if (selectedFile.size > 10 * 1024 * 1024) {
      setError("File size exceeds 10MB limit.");
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      onFileChange({
        name: selectedFile.name,
        size: selectedFile.size,
        base64: reader.result as string,
      });
    };
    reader.onerror = () => {
      setError("Could not read file. Please try another file.");
    };
    reader.readAsDataURL(selectedFile);
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      processFile(e.dataTransfer.files[0]);
    }
  };

  return (
    <div>
      <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground flex items-center justify-between">
        <span>Upload Resume / CV</span>
        <span className="text-[0.68rem] font-normal opacity-70">PDF, DOC, DOCX up to 10MB</span>
      </label>
      {file ? (
        <div className="mt-2 flex items-center justify-between rounded-xl border border-primary/40 bg-accent/30 px-4 py-3 text-sm shadow-sm">
          <div className="flex items-center gap-3 overflow-hidden">
            <FileText className="h-5 w-5 shrink-0 text-primary" />
            <div className="min-w-0">
              <p className="font-semibold text-foreground truncate">{file.name}</p>
              <p className="text-xs text-muted-foreground">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
            </div>
          </div>
          <button
            type="button"
            onClick={() => onFileChange(null)}
            className="p-1 rounded-full text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      ) : (
        <div
          onDragOver={(e) => {
            e.preventDefault();
            setDragActive(true);
          }}
          onDragLeave={() => setDragActive(false)}
          onDrop={handleDrop}
          className={`mt-2 flex flex-col items-center justify-center rounded-xl border-2 border-dashed px-4 py-5 text-center transition-colors cursor-pointer ${
            dragActive
              ? "border-primary bg-primary/5"
              : "border-input bg-background hover:border-primary/50 hover:bg-secondary/30"
          }`}
        >
          <input
            id="modal-resume-file"
            type="file"
            accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
            className="hidden"
            onChange={(e) => {
              if (e.target.files && e.target.files[0]) {
                processFile(e.target.files[0]);
              }
            }}
          />
          <label htmlFor="modal-resume-file" className="flex flex-col items-center cursor-pointer w-full">
            <Upload className="h-6 w-6 text-muted-foreground mb-1.5" />
            <p className="text-sm font-semibold text-foreground">
              Click to upload resume <span className="font-normal text-muted-foreground">or drag & drop</span>
            </p>
            <p className="mt-0.5 text-xs text-muted-foreground">PDF, DOC or DOCX</p>
          </label>
        </div>
      )}
      {error && <p className="mt-1.5 text-xs font-semibold text-destructive">{error}</p>}
    </div>
  );
}

export default function CareersPage() {
  const [selectedRole, setSelectedRole] = useState<string>("");
  const [isOpen, setIsOpen] = useState(false);
  const [resume, setResume] = useState<ResumeFile | null>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");
  const [submittedCandidate, setSubmittedCandidate] = useState<{
    name: string;
    email: string;
    role: string;
  } | null>(null);

  const handleOpenApply = (roleTitle?: string) => {
    setSelectedRole(roleTitle || (roles[0]?.title ?? "Other"));
    setResume(null);
    setStatus("idle");
    setStatusMessage("");
    setSubmittedCandidate(null);
    setIsOpen(true);
  };

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    const role = String(formData.get("role") ?? selectedRole ?? "").trim();
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const phone = String(formData.get("phone") ?? "").trim();
    const profile = String(formData.get("profile") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();

    const formattedRole = role === "Other" ? "General Application / Talent Network" : role;

    if (!role || !name || !email || !message) {
      setStatus("error");
      setStatusMessage("Please fill in your name, email, role, and message.");
      return;
    }

    setStatus("sending");
    setStatusMessage("");

    try {
      await sendWebsiteEmail({
        subject: `[YESP CAREERS] New Application: ${name} (${formattedRole})`,
        replyTo: email,
        to: "srinithinoffl@gmail.com",
        text: [
          "[YESP CAREERS] New Job Application Received",
          "==========================================",
          `• Position Applied: ${formattedRole}`,
          `• Work Environment: Virtual Mode (100% Remote)`,
          `• Candidate Name:   ${name}`,
          `• Candidate Email:  ${email}`,
          `• Contact Phone:    ${phone || "Not provided"}`,
          `• Profile / Link:   ${profile || "Not provided"}`,
          `• Resume File:      ${resume?.name || "No file uploaded"}`,
          "",
          "Cover Note / Candidate Statement:",
          "----------------------------------------",
          message,
          "----------------------------------------",
          `Submission Timestamp: ${new Date().toLocaleString()}`,
        ].join("\n"),
        ...(resume?.base64 && resume?.name
          ? {
              attachments: [
                {
                  filename: resume.name,
                  content: resume.base64.split(",")[1] ?? resume.base64,
                  contentType: resume.name.endsWith(".pdf")
                    ? "application/pdf"
                    : "application/octet-stream",
                },
              ],
            }
          : {}),
      });

      // Send confirmation to applicant
      sendWebsiteEmail({
        subject: `Application Received — ${formattedRole} | Yesp Corporation`,
        replyTo: "srinithinoffl@gmail.com",
        to: email,
        text: [
          `Dear ${name},`,
          "",
          `Thank you for submitting your application to Yesp Corporation.`,
          "",
          `We have successfully received your candidate profile for the ${formattedRole} position (Virtual Mode / 100% Remote).`,
          "",
          "Our Talent Acquisition Team is reviewing your submission. If your background aligns with our immediate openings, a team member will reach out to schedule an initial discussion.",
          "",
          "Thank you for your interest in building with Yesp Corporation.",
          "",
          "Sincerely,",
          "Talent Acquisition Team",
          "Yesp Corporation",
          "Make Better Happen.",
        ].join("\n"),
      }).catch((e) => console.warn("Applicant confirmation email warning:", e));

      form.reset();
      setResume(null);
      setSubmittedCandidate({ name, email, role: formattedRole });
      setStatus("sent");
    } catch (err) {
      setStatus("error");
      setStatusMessage(
        err instanceof Error ? err.message : "Failed to submit application. Please try again."
      );
    }
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <main className="mx-auto max-w-6xl px-4 sm:px-6 py-12 sm:py-20">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-accent px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent-foreground">
            <Globe className="h-3.5 w-3.5" /> 100% Remote Operations
          </div>
          <h1 className="text-3xl font-extrabold tracking-tight sm:text-5xl">
            Build Enterprise Systems & AI From Anywhere
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            Yesp Corporation operates with a 100% remote workforce. Join our high-autonomy engineering, AI, and growth teams building core software for global enterprises.
          </p>
        </div>

        {/* Culture & Virtual Environment Banner */}
        <div className="mt-12 sm:mt-16 grid gap-6 sm:grid-cols-3">
          <div className="rounded-2xl border border-border bg-card p-6 space-y-2 shadow-sm">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary mb-3">
              <Globe className="h-5 w-5" />
            </div>
            <h3 className="font-bold text-foreground">100% Virtual Mode</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Work asynchronously from wherever you are. No mandatory office commutes or regional location barriers.
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6 space-y-2 shadow-sm">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary mb-3">
              <Laptop className="h-5 w-5" />
            </div>
            <h3 className="font-bold text-foreground">High Autonomy & Ownership</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              We focus on outcomes and engineering standards, not tracked hours or micromgmt. You own features end-to-end.
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6 space-y-2 shadow-sm">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary mb-3">
              <CheckCircle2 className="h-5 w-5" />
            </div>
            <h3 className="font-bold text-foreground">Make Better Happen</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Our core standard: build clean, reliable systems that genuinely make client operations better every single day.
            </p>
          </div>
        </div>

        {/* Open Positions Grid */}
        <div className="mt-16 space-y-8">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold tracking-tight">Open Remote Positions</h2>
              <p className="text-xs text-muted-foreground mt-1">Select a position to review role requirements and apply.</p>
            </div>

            <button
              onClick={() => handleOpenApply("Other")}
              className="rounded-full border border-border bg-secondary px-4 py-2 text-xs font-semibold hover:bg-secondary/80 transition-colors"
            >
              General Application
            </button>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {roles.map((role) => (
              <div key={role.title} className="rounded-2xl border border-border bg-card p-6 sm:p-8 space-y-5 flex flex-col justify-between shadow-sm hover:border-primary/50 transition-colors">
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <span className="rounded-md bg-accent px-2.5 py-1 text-[0.68rem] font-bold uppercase tracking-wider text-accent-foreground">
                      {role.team}
                    </span>
                    <span className="text-xs font-semibold text-muted-foreground">{role.type}</span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{role.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{role.summary}</p>

                  <div className="pt-2 space-y-2">
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Key Focus:</p>
                    <ul className="space-y-1.5 text-xs text-muted-foreground">
                      {role.responsibilities.map((resp, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="h-3.5 w-3.5 text-primary shrink-0 mt-0.5" />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <button
                  onClick={() => handleOpenApply(role.title)}
                  className="mt-4 w-full rounded-full bg-brand px-5 py-3 text-xs font-bold text-primary-foreground shadow-elevated transition-transform hover:-translate-y-0.5 cursor-pointer"
                >
                  Apply for Position
                </button>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Application Dialog Modal */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-xl max-h-[90vh] overflow-y-auto p-6 sm:p-8">
          {submittedCandidate ? (
            <div className="py-8 text-center space-y-4">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/20 text-primary">
                <CheckCircle2 className="h-8 w-8" />
              </div>
              <DialogTitle className="text-2xl font-bold">Application Submitted!</DialogTitle>
              <DialogDescription className="text-sm text-muted-foreground max-w-md mx-auto leading-relaxed">
                Thank you <span className="font-semibold text-foreground">{submittedCandidate.name}</span>. Your application for <span className="font-semibold text-foreground">{submittedCandidate.role}</span> has been received. Our team will review your profile and contact you at <span className="font-semibold text-foreground">{submittedCandidate.email}</span>.
              </DialogDescription>
              <button
                onClick={() => {
                  setIsOpen(false);
                  setSubmittedCandidate(null);
                  setStatus("idle");
                }}
                className="mt-4 rounded-full bg-primary px-6 py-2.5 text-xs font-bold text-primary-foreground"
              >
                Close Window
              </button>
            </div>
          ) : (
            <>
              <DialogHeader className="text-left space-y-2">
                <div className="inline-flex items-center gap-1.5 rounded-full bg-accent px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-wider text-accent-foreground w-fit">
                  <Globe className="h-3 w-3" /> 100% Remote Position
                </div>
                <DialogTitle className="text-2xl font-bold">
                  {selectedRole ? `Apply for ${selectedRole}` : "Apply to Yesp Corporation"}
                </DialogTitle>
                <DialogDescription className="text-xs text-muted-foreground">
                  Complete the application form below to join our distributed engineering team.
                </DialogDescription>
              </DialogHeader>

              <form className="mt-4 space-y-4 text-left" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="modal-role" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground block mb-1">
                    Position Applied For
                  </label>
                  <select
                    id="modal-role"
                    name="role"
                    value={selectedRole}
                    onChange={(e) => setSelectedRole(e.target.value)}
                    required
                    className="w-full rounded-xl border border-input bg-background px-4 py-2.5 text-xs outline-none focus:border-primary"
                  >
                    {roles.map((r) => (
                      <option key={r.title} value={r.title}>
                        {r.title}
                      </option>
                    ))}
                    <option value="Other">Other / Talent Network</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="modal-name" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground block mb-1">
                    Your Name *
                  </label>
                  <input
                    id="modal-name"
                    name="name"
                    type="text"
                    required
                    placeholder="e.g. Priya Sundaram"
                    className="w-full rounded-xl border border-input bg-background px-4 py-2.5 text-xs outline-none focus:border-primary"
                  />
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="modal-email" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground block mb-1">
                      Email Address *
                    </label>
                    <input
                      id="modal-email"
                      name="email"
                      type="email"
                      required
                      placeholder="priya@example.com"
                      className="w-full rounded-xl border border-input bg-background px-4 py-2.5 text-xs outline-none focus:border-primary"
                    />
                  </div>
                  <div>
                    <label htmlFor="modal-phone" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground block mb-1">
                      Phone / WhatsApp
                    </label>
                    <input
                      id="modal-phone"
                      name="phone"
                      type="tel"
                      placeholder="+91 98765 43210"
                      className="w-full rounded-xl border border-input bg-background px-4 py-2.5 text-xs outline-none focus:border-primary"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="modal-profile" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground block mb-1">
                    LinkedIn Profile or GitHub URL
                  </label>
                  <input
                    id="modal-profile"
                    name="profile"
                    type="url"
                    placeholder="https://linkedin.com/in/username"
                    className="w-full rounded-xl border border-input bg-background px-4 py-2.5 text-xs outline-none focus:border-primary"
                  />
                </div>

                <ResumeUploadInput file={resume} onFileChange={setResume} />

                <div>
                  <label htmlFor="modal-message" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground block mb-1">
                    Why are you interested in this role? *
                  </label>
                  <textarea
                    id="modal-message"
                    name="message"
                    rows={4}
                    required
                    placeholder="Tell us about your relevant experience, technical background, and remote work preferences..."
                    className="w-full rounded-xl border border-input bg-background px-4 py-2.5 text-xs outline-none focus:border-primary resize-none"
                  />
                </div>

                {statusMessage && (
                  <p className="text-center text-xs font-semibold text-destructive">{statusMessage}</p>
                )}

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="w-full rounded-full bg-brand px-6 py-3 text-xs font-bold text-primary-foreground shadow-elevated transition-transform hover:-translate-y-0.5 disabled:opacity-50 cursor-pointer"
                  >
                    {status === "sending" ? "Submitting application..." : "Submit Candidate Application"}
                  </button>
                </div>
              </form>
            </>
          )}
        </DialogContent>
      </Dialog>

      <SiteFooter />
    </div>
  );
}
