import { createServerFn } from "@tanstack/react-start";
import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent, type DragEvent } from "react";
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

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers at Yesp Corporation — 100% Remote | Make Better Happen." },
      {
        name: "description",
        content:
          "Explore 100% Remote opportunities at Yesp Corporation in enterprise software development, AI automation engineering, growth, and business development.",
      },
      { name: "keywords", content: "Yesp Careers, Remote Jobs, Enterprise Software Jobs, AI Engineer Jobs, Growth Marketing Jobs" },
      { name: "geo.region", content: "IN-KA;IN-TN" },
      { name: "geo.placename", content: "Bengaluru, Coimbatore, Erode, India" },
      { name: "geo.position", content: "12.9716;77.5946" },
      { name: "ICBM", content: "12.9716, 77.5946" },
      { property: "og:title", content: "Careers at Yesp Corporation — 100% Remote" },
      {
        property: "og:description",
        content:
          "Join Yesp Corporation's remote workforce building enterprise software systems, AI agents, and automation for global clients from anywhere.",
      },
      { property: "og:image", content: "https://yespstudio.com/assets/founder-srinithin-somasundaram.jpg" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Careers at Yesp Corporation — 100% Remote" },
      { name: "twitter:description", content: "Build enterprise software & AI systems 100% Remote with Yesp Corporation." },
      { name: "twitter:image", content: "https://yespstudio.com/assets/founder-srinithin-somasundaram.jpg" },
    ],
    links: [{ rel: "canonical", href: "/careers" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Careers at Yesp Corporation",
          description: "100% Remote career opportunities at Yesp Corporation.",
          url: "https://yespstudio.com/careers",
          publisher: {
            "@type": "Corporation",
            name: "Yesp Corporation",
            slogan: "Make Better Happen.",
          },
        }),
      },
    ],
  }),
  component: CareersPage,
});

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
    team: "Marketing",
    type: "Full-time · 100% Remote",
    summary:
      "Run Yesp's content engine across LinkedIn, the company page and the website, and support founder content, case studies and search visibility remotely.",
    responsibilities: [
      "LinkedIn content and Yesp company page",
      "Founder content support and case studies",
      "Website content, SEO and GEO",
      "Pitch materials, lead and competitor research",
    ],
  },
  {
    title: "Software Engineer — Enterprise Applications",
    team: "Yesp Digital",
    type: "Full-time · 100% Remote",
    summary:
      "Build custom business applications, dashboards and integrations for enterprise clients remotely, from architecture through delivery.",
    responsibilities: [
      "Full-stack application development",
      "Enterprise system and API integration",
      "Data models, dashboards and reporting",
      "Working directly with client stakeholders",
    ],
  },
  {
    title: "AI / Automation Engineer",
    team: "Yesp AI Labs",
    type: "Full-time · 100% Remote",
    summary:
      "Design and ship AI agents, document intelligence and workflow automation that plug into real enterprise operations remotely.",
    responsibilities: [
      "AI agents and conversational workflows",
      "Document and process intelligence",
      "Workflow automation and orchestration",
      "Evaluation, guardrails and reliability",
    ],
  },
];

const principles = [
  { t: "100% Remote Work", d: "Work asynchronously with senior peers from wherever you are." },
  { t: "Business-first engineering", d: "We start with the business problem, not the tech stack." },
  { t: "Ownership over tickets", d: "You own outcomes end to end, with the client in the room." },
];

type CareerFormData = {
  role: string;
  name: string;
  email: string;
  phone: string;
  profile: string;
  message: string;
  resumeName?: string;
  resumeData?: string;
};

const sendCareerEmail = createServerFn({ method: "POST" })
  .validator((input: CareerFormData) => {
    const data = {
      role: input.role?.trim() ?? "",
      name: input.name?.trim() ?? "",
      email: input.email?.trim() ?? "",
      phone: input.phone?.trim() ?? "",
      profile: input.profile?.trim() ?? "",
      message: input.message?.trim() ?? "",
      resumeName: input.resumeName?.trim() ?? "",
      resumeData: input.resumeData?.trim() ?? "",
    };

    if (!data.role || !data.name || !data.email || !data.message) {
      throw new Error("Please fill in the role, name, email and message.");
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      throw new Error("Please enter a valid email address.");
    }

    return data;
  })
  .handler(async ({ data }) => {
    const targetInternalEmail = "srinithinoffl@gmail.com";

    const formattedRole = data.role === "Other" ? "General Application / Talent Network" : data.role;

    // 1. Send Internal Email Notification to srinithinoffl@gmail.com
    let internalSent = false;
    try {
      await sendWebsiteEmail({
        subject: `[YESP CAREERS] New Application: ${data.name} (${formattedRole})`,
        replyTo: data.email,
        to: targetInternalEmail,
        text: [
          "[YESP CAREERS] New Job Application Received",
          "==========================================",
          `• Position Applied: ${formattedRole}`,
          `• Work Environment: Virtual Mode (100% Remote)`,
          `• Candidate Name:   ${data.name}`,
          `• Candidate Email:  ${data.email}`,
          `• Contact Phone:    ${data.phone || "Not provided"}`,
          `• Resume File:      ${data.resumeName || "No file uploaded"}`,
          "",
          "Cover Note / Candidate Statement:",
          "----------------------------------------",
          data.message,
          "----------------------------------------",
          `Submission Timestamp: ${new Date().toLocaleString()}`,
        ].join("\n"),
        ...(data.resumeData && data.resumeName
          ? {
              attachments: [
                {
                  filename: data.resumeName,
                  content: data.resumeData.split(",")[1] ?? data.resumeData,
                  contentType: data.resumeName.endsWith(".pdf")
                    ? "application/pdf"
                    : "application/octet-stream",
                },
              ],
            }
          : {}),
      });
      internalSent = true;
    } catch (e) {
      console.warn("Internal career application email warning:", e);
    }

    // 2. Send Applicant Confirmation Email
    let confirmationSent = false;
    try {
      await sendWebsiteEmail({
        subject: `Application Received — ${formattedRole} | Yesp Corporation`,
        replyTo: targetInternalEmail,
        to: data.email,
        text: [
          `Dear ${data.name},`,
          "",
          `Thank you for submitting your application to Yesp Corporation.`,
          "",
          `We have successfully received your candidate profile and resume for the ${formattedRole} position (Virtual Mode).`,
          "",
          "Application Overview:",
          `• Candidate Name: ${data.name}`,
          `• Position Applied: ${formattedRole}`,
          `• Work Environment: Virtual Mode (100% Remote)`,
          `• Status: Application Received & In Review`,
          "",
          "Our Talent Acquisition Team is reviewing your submission against our current engineering and operational requirements. If your background aligns with our immediate openings, a member of our team will reach out to schedule an initial discussion.",
          "",
          "Thank you for your interest in building with Yesp Corporation.",
          "",
          "Sincerely,",
          "",
          "Talent Acquisition Team",
          "Yesp Corporation",
          "Make Better Happen.",
        ].join("\n"),
      });
      confirmationSent = true;
    } catch (e) {
      console.warn("Applicant confirmation career email warning:", e);
    }

    return { ok: true, internalSent, confirmationSent };
  });

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
            <div className="truncate">
              <p className="truncate font-semibold text-foreground">{file.name}</p>
              <p className="text-xs text-muted-foreground">
                {(file.size / (1024 * 1024)).toFixed(2)} MB
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={() => onFileChange(null)}
            className="ml-2 rounded-full p-1.5 text-muted-foreground transition-colors hover:bg-destructive/10 hover:text-destructive cursor-pointer"
            title="Remove resume"
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

function CareersPage() {
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
    setSelectedRole(roleTitle || roles[0].title);
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

    setStatus("sending");
    setStatusMessage("");

    try {
      await sendCareerEmail({
        data: {
          role,
          name,
          email,
          phone,
          profile,
          message,
          resumeName: resume?.name,
          resumeData: resume?.base64,
        },
      });
      form.reset();
      setResume(null);
      setSubmittedCandidate({ name, email, role: formattedRole });
      setStatus("sent");
    } catch (serverError) {
      console.warn("Server RPC failed, trying fallback career application email dispatch:", serverError);
      try {
        const targetInternalEmail = "srinithinoffl@gmail.com";
        await sendWebsiteEmail({
          subject: `[YESP CAREERS] New Application: ${name} (${formattedRole})`,
          replyTo: email,
          to: targetInternalEmail,
          text: [
            "[YESP CAREERS] New Job Application Received",
            "==========================================",
            `• Position Applied: ${formattedRole}`,
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

        form.reset();
        setResume(null);
        setSubmittedCandidate({ name, email, role: formattedRole });
        setStatus("sent");
      } catch (fallbackError) {
        setStatus("error");
        setStatusMessage(
          fallbackError instanceof Error ? fallbackError.message : "Could not send your application."
        );
      }
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <section className="border-b border-border/60">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              <Globe className="h-3.5 w-3.5 text-primary" />
              100% Remote Work
            </div>
            <h1 className="mt-5 max-w-3xl text-4xl font-extrabold leading-tight md:text-6xl">
              Build the systems businesses{" "}
              <span className="text-gradient-brand">actually run on.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
              Yesp operates 100% remote. We are a senior team building enterprise software,
              AI and automation. Work asynchronously from anywhere.
            </p>
            <div className="mt-8">
              <button
                type="button"
                onClick={() => handleOpenApply("Other")}
                className="rounded-full bg-brand px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-elevated transition-transform hover:-translate-y-0.5 cursor-pointer"
              >
                Apply to Yesp (100% Remote)
              </button>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid gap-6 md:grid-cols-3">
            {principles.map((p) => (
              <div key={p.t} className="rounded-2xl border border-border bg-card p-7 shadow-card">
                <h2 className="text-lg font-bold">{p.t}</h2>
                <p className="mt-2 text-sm text-muted-foreground">{p.d}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="border-t border-border/60 bg-secondary/40">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Remote Careers
                </p>
                <h2 className="mt-2 text-3xl font-bold md:text-4xl">Open Remote Roles</h2>
              </div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-accent px-3.5 py-1 text-xs font-semibold text-accent-foreground">
                <Laptop className="h-3.5 w-3.5" /> All positions 100% remote
              </span>
            </div>
            <div className="mt-10 space-y-5">
              {roles.map((r) => (
                <article
                  key={r.title}
                  className="rounded-2xl border border-border bg-card p-8 shadow-card"
                >
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-bold">{r.title}</h3>
                      <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        {r.team} · {r.type}
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleOpenApply(r.title)}
                      className="rounded-full bg-brand px-6 py-3 text-sm font-semibold text-primary-foreground shadow-elevated transition-transform hover:-translate-y-0.5 cursor-pointer"
                    >
                      Apply
                    </button>
                  </div>
                  <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted-foreground">
                    {r.summary}
                  </p>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {r.responsibilities.map((x) => (
                      <li
                        key={x}
                        className="rounded-full bg-accent px-3 py-1.5 text-xs font-semibold text-accent-foreground"
                      >
                        {x}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-20">
          <div className="flex flex-col items-start gap-6 rounded-3xl bg-brand p-10 text-primary-foreground md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-2xl font-bold">Don't see your specific role?</h2>
              <p className="mt-2 text-sm opacity-85">
                We're always looking for exceptional remote engineers, builders, and growth leaders.
              </p>
            </div>
            <button
              type="button"
              onClick={() => handleOpenApply("Other")}
              className="rounded-full bg-background px-7 py-3.5 text-sm font-semibold text-foreground transition-transform hover:-translate-y-0.5 cursor-pointer"
            >
              Apply to Yesp
            </button>
          </div>
        </section>
      </main>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-xl max-h-[92vh] overflow-y-auto rounded-3xl border-border bg-card p-6 sm:p-8">
          {status === "sent" ? (
            <div className="py-6 text-center space-y-4">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                <CheckCircle2 className="h-10 w-10 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-foreground">Application Received!</h2>
              <p className="text-sm leading-relaxed text-muted-foreground max-w-md mx-auto">
                Thank you, <strong className="text-foreground">{submittedCandidate?.name}</strong>. We have sent a confirmation email to <strong className="text-foreground">{submittedCandidate?.email}</strong>. Our Talent Acquisition Team will review your candidate profile and reach out if your experience matches our team requirements.
              </p>

              <div className="rounded-2xl border border-border bg-secondary/50 p-5 text-left text-xs text-muted-foreground space-y-2.5 mt-4">
                <p className="font-bold text-foreground text-sm border-b border-border/60 pb-2">
                  Application Summary
                </p>
                <div className="grid grid-cols-2 gap-2 pt-1">
                  <div>
                    <span className="text-[0.68rem] uppercase font-semibold text-muted-foreground">Position</span>
                    <p className="font-semibold text-foreground">
                      {submittedCandidate?.role === "Other"
                        ? "General Application"
                        : submittedCandidate?.role}
                    </p>
                  </div>
                  <div>
                    <span className="text-[0.68rem] uppercase font-semibold text-muted-foreground">Work Environment</span>
                    <p className="font-semibold text-foreground">100% Remote</p>
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={() => {
                  setIsOpen(false);
                  setStatus("idle");
                  setSubmittedCandidate(null);
                }}
                className="mt-6 w-full rounded-full bg-brand px-7 py-3 text-sm font-semibold text-primary-foreground shadow-elevated transition-transform hover:-translate-y-0.5 cursor-pointer"
              >
                Done
              </button>
            </div>
          ) : (
            <>
              <DialogHeader className="text-left">
                <div className="mb-2 inline-flex items-center gap-1.5 rounded-full bg-accent px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-wider text-accent-foreground w-fit">
                  <Globe className="h-3 w-3" /> 100% Remote
                </div>
                <DialogTitle className="text-2xl font-bold">
                  {selectedRole && selectedRole !== "Other"
                    ? `Apply for ${selectedRole}`
                    : "Apply to Yesp Corporation"}
                </DialogTitle>
                <DialogDescription className="text-sm text-muted-foreground">
                  Submit your application and resume to work with our distributed virtual team.
                </DialogDescription>
              </DialogHeader>

              <form className="mt-4 grid gap-5" onSubmit={handleSubmit}>
                <div>
                  <label
                    htmlFor="modal-role"
                    className="text-xs font-semibold uppercase tracking-wider text-muted-foreground"
                  >
                    Role
                  </label>
                  <select
                    id="modal-role"
                    name="role"
                    value={selectedRole}
                    onChange={(e) => setSelectedRole(e.target.value)}
                    required
                    className="mt-2 w-full rounded-lg border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary"
                  >
                    <option value="" disabled>
                      Select a role
                    </option>
                    {roles.map((role) => (
                      <option key={role.title} value={role.title}>
                        {role.title}
                      </option>
                    ))}
                    <option value="Other">Other / Open Application</option>
                  </select>
                </div>

                {[
                  { id: "name", label: "Name", type: "text", required: true },
                  { id: "email", label: "Email", type: "email", required: true },
                  { id: "phone", label: "Phone", type: "tel", required: false },
                ].map((f) => (
                  <div key={f.id}>
                    <label
                      htmlFor={`modal-${f.id}`}
                      className="text-xs font-semibold uppercase tracking-wider text-muted-foreground"
                    >
                      {f.label}
                    </label>
                    <input
                      id={`modal-${f.id}`}
                      name={f.id}
                      type={f.type}
                      required={f.required}
                      className="mt-2 w-full rounded-lg border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary"
                    />
                  </div>
                ))}

                <ResumeUploadInput file={resume} onFileChange={setResume} />

                <div>
                  <label
                    htmlFor="modal-message"
                    className="text-xs font-semibold uppercase tracking-wider text-muted-foreground"
                  >
                    Why this role?
                  </label>
                  <textarea
                    id="modal-message"
                    name="message"
                    rows={4}
                    required
                    placeholder="Tell us about your relevant experience, virtual work preferences, and why you want to build at Yesp..."
                    className="mt-2 w-full rounded-lg border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary"
                  />
                </div>

                <div className="flex flex-col gap-3 pt-2">
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="w-full rounded-full bg-brand px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-elevated transition-transform hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70 cursor-pointer"
                  >
                    {status === "sending" ? "Sending application..." : "Submit Application"}
                  </button>

                  {statusMessage && (
                    <p
                      className={`text-center text-sm font-semibold ${
                        status === "sent" ? "text-primary" : "text-destructive"
                      }`}
                    >
                      {statusMessage}
                    </p>
                  )}
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


