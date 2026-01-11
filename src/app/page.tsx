export default function Home() {
  const steps = [
    {
      title: "Connect your calendar",
      description:
        "Sync Google, Outlook, or your CRM calendar in minutes. No manual import or spreadsheet cleanup.",
    },
    {
      title: "AI confirms, reminds, reschedules",
      description:
        "SchedulAI sends confirmations, smart reminders, and auto-reschedules based on client replies.",
    },
    {
      title: "You get more completed appointments",
      description:
        "Show rates improve without extra admin time, so teams focus on service delivery.",
    },
  ];

  const features = [
    {
      title: "Smart reminders",
      description:
        "Message timing adapts to client behavior, reducing last-minute cancellations.",
    },
    {
      title: "No-show prediction",
      description:
        "Flags risky appointments early so you can reinforce or backfill time slots.",
    },
    {
      title: "Lead qualification",
      description:
        "Collects intent and details before booking to keep your calendar clean.",
    },
    {
      title: "Time-zone handling",
      description:
        "Auto-detects location and prevents cross-time-zone scheduling errors.",
    },
    {
      title: "CRM & calendar integrations",
      description:
        "Connects to the systems you already use with clean, reliable sync.",
    },
    {
      title: "Analytics-ready",
      description:
        "Exports clean activity data for your BI or reporting stack.",
    },
  ];

  const testimonials = [
    {
      quote:
        "We trimmed admin time and saw fewer late cancellations within the first month.",
      role: "Operations Manager",
    },
    {
      quote:
        "It filters low-intent leads before they ever hit our calendar.",
      role: "Agency Lead",
    },
    {
      quote:
        "Clients get reminded automatically and we stay fully booked.",
      role: "Clinic Coordinator",
    },
  ];

  const plans = [
    {
      name: "Starter",
      price: "$49",
      description: "For small teams starting to automate scheduling.",
      highlights: [
        "Up to 2 team calendars",
        "AI confirmations + reminders",
        "Basic lead qualification",
        "Email support",
      ],
    },
    {
      name: "Pro",
      price: "$129",
      description: "For growing service teams that need deeper automation.",
      highlights: [
        "Up to 10 team calendars",
        "No-show prediction",
        "CRM + calendar integrations",
        "Priority support",
      ],
      featured: true,
    },
    {
      name: "Business",
      price: "$299",
      description: "For multi-location teams and complex scheduling flows.",
      highlights: [
        "Unlimited calendars",
        "Custom qualification flows",
        "Advanced routing rules",
        "Dedicated success manager",
      ],
    },
  ];

  return (
    <div className="bg-slate-50 text-slate-900">
      <main className="mx-auto flex w-full max-w-6xl flex-col gap-24 px-6 pb-24 pt-10 lg:px-10">
        <header className="flex items-center justify-between text-sm font-medium text-slate-600">
          <span className="tracking-[0.2em] text-slate-500 uppercase">
            SchedulAI
          </span>
          <span className="hidden items-center gap-3 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs text-slate-500 md:flex">
            AI Appointment & Lead Automation
          </span>
        </header>

        <section className="relative overflow-hidden rounded-3xl border border-slate-200 bg-[linear-gradient(135deg,#ffffff_0%,#f8fafc_55%,#ecfeff_100%)] px-6 py-16 shadow-sm lg:px-12">
          <div className="absolute right-6 top-6 hidden h-32 w-32 rounded-full border border-emerald-200/60 bg-white/60 md:block" />
          <div className="absolute bottom-6 left-8 hidden h-14 w-14 rounded-full bg-emerald-200/70 md:block" />
          <div className="relative z-10 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="space-y-6">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-emerald-700">
                AI scheduling for service businesses
              </p>
              <h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
                Reduce no-shows by up to 42% with AI-powered scheduling.
              </h1>
              <p className="text-lg leading-8 text-slate-600">
                Built for clinics, agencies, consultants, and service teams that
                can&apos;t afford empty time slots. SchedulAI automates
                confirmations, reminders, and lead qualification before a
                booking ever hits your calendar.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <a
                  className="inline-flex h-12 items-center justify-center rounded-full bg-emerald-600 px-6 text-sm font-semibold text-white shadow-sm hover:bg-emerald-700"
                  href="#pricing"
                >
                  Start Free Trial
                </a>
                <a
                  className="inline-flex h-12 items-center justify-center rounded-full border border-slate-300 bg-white px-6 text-sm font-semibold text-slate-700 hover:border-slate-400"
                  href="#final-cta"
                >
                  Book a Demo
                </a>
              </div>
              <div className="flex flex-wrap items-center gap-3 text-sm text-slate-500">
                <span>Used by service teams worldwide</span>
                <span className="hidden h-1 w-1 rounded-full bg-slate-400 sm:inline-flex" />
                <span>No credit card required</span>
              </div>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="space-y-5">
                <div className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                    Today&apos;s schedule
                  </p>
                  <div className="mt-4 space-y-3 text-sm text-slate-600">
                    <div className="flex items-center justify-between rounded-lg bg-white px-3 py-2 shadow-sm">
                      <span>Client intake call</span>
                      <span className="text-emerald-600">Confirmed</span>
                    </div>
                    <div className="flex items-center justify-between rounded-lg bg-white px-3 py-2 shadow-sm">
                      <span>Therapy session</span>
                      <span className="text-emerald-600">Reminder sent</span>
                    </div>
                    <div className="flex items-center justify-between rounded-lg bg-white px-3 py-2 shadow-sm">
                      <span>Consultation</span>
                      <span className="text-amber-600">Rescheduled</span>
                    </div>
                  </div>
                </div>
                <div className="grid gap-4 text-sm text-slate-600">
                  <div className="flex items-center justify-between rounded-lg border border-slate-200 bg-white px-4 py-3">
                    <span>Auto-qualified leads</span>
                    <span className="font-semibold text-slate-900">34</span>
                  </div>
                  <div className="flex items-center justify-between rounded-lg border border-slate-200 bg-white px-4 py-3">
                    <span>No-show risk flagged</span>
                    <span className="font-semibold text-slate-900">6</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-8 lg:grid-cols-[1fr_1fr]">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">
              Manual scheduling leaks revenue.
            </h2>
            <p className="text-base leading-7 text-slate-600">
              Teams rely on manual confirmations, untracked follow-ups, and
              inconsistent reminders. Every missed appointment costs time,
              payroll, and lost opportunity.
            </p>
            <p className="text-base leading-7 text-slate-600">
              No-shows compound fast for clinics and service businesses. When
              your calendar slips, you lose forecasting accuracy and staff
              confidence.
            </p>
          </div>
          <div className="space-y-4 rounded-2xl border border-emerald-100 bg-emerald-50/60 p-6">
            <h3 className="text-xl font-semibold text-slate-900">
              SchedulAI fixes it with automation.
            </h3>
            <p className="text-base leading-7 text-slate-700">
              AI handles confirmations, reminders, and rescheduling in real
              time. It also qualifies leads before they book, ensuring your
              calendar is reserved for high-intent clients.
            </p>
            <p className="text-base leading-7 text-slate-700">
              The result: fewer no-shows, stronger show rates, and less admin
              overhead for your team.
            </p>
          </div>
        </section>

        <section className="space-y-10">
          <div className="space-y-3">
            <h2 className="text-2xl font-semibold text-slate-900">
              How it works
            </h2>
            <p className="text-base text-slate-600">
              A simple, three-step workflow that starts working the same day.
            </p>
            <p className="text-sm text-slate-500">
              AI reviews response timing, engagement patterns, and booking history to predict no-show risk before it happens.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 text-sm font-semibold text-emerald-700">
                  0{index + 1}
                </div>
                <h3 className="mt-4 text-lg font-semibold text-slate-900">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-10">
          <div className="space-y-3">
            <h2 className="text-2xl font-semibold text-slate-900">
              Key features built for busy teams
            </h2>
            <p className="text-base text-slate-600">
              Everything you need to reduce no-shows and keep calendars full.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <h3 className="text-lg font-semibold text-slate-900">
                  {feature.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-10">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-2xl font-semibold text-slate-900">
                Trusted by service-focused teams
              </h2>
              <p className="mt-2 text-base text-slate-600">
                Teams rely on SchedulAI to protect revenue and reduce admin.
              </p>
            </div>
            <div className="text-sm text-slate-500">
              Logo placeholders for production use
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {["Northpeak Health", "Brightline Agency", "Elevate Care", "Summit Studio"].map(
              (logo) => (
                <div
                  key={logo}
                  className="flex items-center justify-center rounded-xl border border-slate-200 bg-white px-4 py-5 text-sm font-semibold text-slate-500"
                >
                  {logo}
                </div>
              )
            )}
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <figure
                key={testimonial.quote}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <blockquote className="text-sm leading-6 text-slate-600">
                  &quot;{testimonial.quote}&quot;
                </blockquote>
                <figcaption className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                  {testimonial.role}
                </figcaption>
              </figure>
            ))}
          </div>
          <p className="text-xs text-slate-500">
            Sample testimonial content for demo purposes.
          </p>
        </section>

        <section id="pricing" className="space-y-10">
          <div className="space-y-3">
            <h2 className="text-2xl font-semibold text-slate-900">Pricing</h2>
            <p className="text-base text-slate-600">
              Example pricing for demo purposes. Choose the plan that fits your
              scheduling volume.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`flex h-full flex-col rounded-2xl border bg-white p-6 shadow-sm ${
                  plan.featured
                    ? "border-emerald-400 ring-2 ring-emerald-200"
                    : "border-slate-200"
                }`}
              >
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-slate-900">
                    {plan.name}
                  </h3>
                  <p className="text-sm text-slate-600">{plan.description}</p>
                </div>
                <div className="mt-6 flex items-baseline gap-2">
                  <span className="text-4xl font-semibold text-slate-900">
                    {plan.price}
                  </span>
                  <span className="text-sm text-slate-500">/ month</span>
                </div>
                <ul className="mt-6 flex flex-1 flex-col gap-3 text-sm text-slate-600">
                  {plan.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full bg-emerald-500" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
                <a
                  className={`mt-8 inline-flex h-11 items-center justify-center rounded-full px-5 text-sm font-semibold ${
                    plan.featured
                      ? "bg-emerald-600 text-white hover:bg-emerald-700"
                      : "border border-slate-300 bg-white text-slate-700 hover:border-slate-400"
                  }`}
                  href="#final-cta"
                >
                  {plan.featured ? "Start Free Trial" : "Choose Plan"}
                </a>
              </div>
            ))}
          </div>
        </section>

        <section
          id="final-cta"
          className="rounded-3xl border border-slate-200 bg-slate-900 px-6 py-14 text-white shadow-sm lg:px-12"
        >
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="space-y-3">
              <h2 className="text-3xl font-semibold">
                See how AI scheduling keeps your calendar full.
              </h2>
              <p className="text-base text-slate-200">
                Reduce no-shows, qualify leads, and keep your calendar full with
                SchedulAI.
              </p>
            </div>
            <a
              className="inline-flex h-12 items-center justify-center rounded-full bg-white px-6 text-sm font-semibold text-slate-900 hover:bg-slate-100"
              href="#pricing"
            >
              Start Free Trial
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-6 py-10 text-sm text-slate-500 lg:flex-row lg:items-center lg:justify-between lg:px-10">
          <span className="font-semibold text-slate-700">SchedulAI</span>
          <div className="flex flex-wrap items-center gap-4">
            <span>Privacy / Terms</span>
            <span>Demo SaaS landing page built for portfolio purposes.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
