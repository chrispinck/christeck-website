import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Learn how CHRISTECK collects, uses, stores and protects personal information when you visit our website or submit an engineering enquiry.",
  alternates: {
    canonical: "/privacy",
  },
  robots: {
    index: false,
    follow: false,
  },
};

const sections = [
  {
    title: "1. Introduction",
    content: (
      <p>
        CHRISTECK – Electrical Engineering Solutions
        ("CHRISTECK", "we", "our" or "us") respects your
        privacy and is committed to handling personal
        information responsibly. This Privacy Policy explains
        what information we collect through our website, why
        we collect it, how it is processed and the choices
        available to you.
      </p>
    ),
  },
  {
    title: "2. Information We Collect",
    content: (
      <>
        <h3 className="font-semibold text-slate-800">
          Information you provide
        </h3>

        <p className="mt-3">
          When you submit an enquiry through our contact form,
          we may collect:
        </p>

        <ul className="mt-3 list-disc space-y-2 pl-6">
          <li>Your name.</li>
          <li>Your company or organisation name.</li>
          <li>Your email address.</li>
          <li>Your phone number.</li>
          <li>The engineering service you are enquiring about.</li>
          <li>Your message and project-related details.</li>
        </ul>

        <h3 className="mt-6 font-semibold text-slate-800">
          Website and technical information
        </h3>

        <p className="mt-3">
          When you use our website, certain technical and
          interaction information may be processed, including:
        </p>

        <ul className="mt-3 list-disc space-y-2 pl-6">
          <li>Pages visited and website interactions.</li>
          <li>Browser and device information.</li>
          <li>Referring website or page information.</li>
          <li>Traffic source and campaign information.</li>
          <li>
            Information needed for website security and abuse
            prevention.
          </li>
        </ul>

        <p className="mt-4">
          Our contact form also records the page from which
          an enquiry was submitted and may capture campaign
          parameters used to understand how visitors found us.
        </p>
      </>
    ),
  },
  {
    title: "3. How We Use Your Information",
    content: (
      <>
        <p>We may use collected information to:</p>

        <ul className="mt-3 list-disc space-y-2 pl-6">
          <li>Respond to enquiries and technical questions.</li>
          <li>Understand your engineering requirements.</li>
          <li>Prepare quotations and discuss potential projects.</li>
          <li>Provide requested engineering services.</li>
          <li>Maintain and improve website functionality.</li>
          <li>
            Understand website traffic where analytics consent
            is provided.
          </li>
          <li>
            Protect our website against spam, misuse and
            unauthorised activity.
          </li>
          <li>
            Meet applicable legal and regulatory obligations.
          </li>
        </ul>

        <p className="mt-4">
          We do not sell personal information to third parties.
        </p>
      </>
    ),
  },
  {
    title: "4. Cookies, Local Storage and Analytics",
    content: (
      <>
        <p>
          Our website uses a privacy preference mechanism
          that allows visitors to accept or reject analytics
          tracking.
        </p>

        <p className="mt-4">
          Your consent preference is saved in your browser's
          local storage so that we can remember your choice
          on subsequent visits. This preference mechanism
          uses browser local storage to remember your decision.
        </p>

        <p className="mt-4">
          Google Analytics 4 is activated only after you
          accept analytics tracking through our consent
          banner. If you reject analytics tracking, our
          website does not intentionally load the Google
          Analytics tracking component.
        </p>

        <p className="mt-4">
          If you previously accepted analytics tracking and
          subsequently withdraw your consent, the website
          updates the analytics consent status and reloads
          the page to stop loading the analytics component.
        </p>

        <p className="mt-4">
          Advertising-related consent signals remain denied.
          We do not use this consent mechanism to obtain
          advertising consent.
        </p>

        <p className="mt-4">
          You can change your analytics preference at any
          time by selecting the Cookie Preferences option
          in the website footer.
        </p>
      </>
    ),
  },
  {
    title: "5. Third-Party Services",
    content: (
      <>
        <p>
          We use third-party providers to support the
          operation and functionality of our website:
        </p>

        <ul className="mt-3 list-disc space-y-3 pl-6">
          <li>
            <strong>Cloudflare:</strong> Website hosting,
            content delivery and related infrastructure
            services.
          </li>

          <li>
            <strong>Supabase:</strong> Processing and handling
            enquiries submitted through our contact form,
            including database and backend services.
          </li>

          <li>
            <strong>Google Analytics 4:</strong> Website usage
            measurement and visitor interaction analysis,
            activated only after analytics consent.
          </li>
        </ul>

        <p className="mt-4">
          These providers may process information necessary
          to deliver their services. Their processing is also
          subject to their respective terms and privacy
          practices.
        </p>
      </>
    ),
  },
  {
    title: "6. Data Sharing",
    content: (
      <p>
        We do not sell, rent or trade personal information.
        Information may be shared with service providers
        supporting our website, enquiry processing, security
        and business operations. We may also disclose
        information where required by law or where necessary
        to protect our legitimate rights and interests.
      </p>
    ),
  },
  {
    title: "7. Data Retention and Security",
    content: (
      <>
        <p>
          Enquiry records are scheduled for automatic
          deletion from our active database once they are
          more than 24 months old. The retention period is
          calculated from the original enquiry submission
          date.
        </p>

        <p className="mt-4">
          This automated retention schedule applies to the
          active enquiry database. Separately created
          exports or backups, if any, are managed separately
          and are not automatically removed by this database
          retention process.
        </p>

        <p className="mt-4">
          Where information must be retained for a longer
          period to meet applicable legal obligations or
          address legal claims, the relevant retention
          requirements may apply.
        </p>

        <p className="mt-4">
          We also process certain technical information for
          website security and rate-limiting purposes. This
          may include processing an IP address and using a
          hashed identifier to help prevent repeated
          automated or abusive submissions.
        </p>

        <p className="mt-4">
          We take reasonable technical and organisational
          measures to protect information against
          unauthorised access, loss, misuse or disclosure.
          However, no method of electronic storage or
          internet transmission can be guaranteed to be
          completely secure.
        </p>
      </>
    ),
  },
  {
    title: "8. Your Privacy Choices and Rights",
    content: (
      <>
        <p>
          Depending on the laws applicable to you, you may
          have the right to:
        </p>

        <ul className="mt-3 list-disc space-y-2 pl-6">
          <li>
            Request access to personal information we hold
            about you.
          </li>
          <li>
            Request correction of inaccurate information.
          </li>
          <li>
            Request deletion of personal information where
            legally permitted.
          </li>
          <li>
            Withdraw consent for analytics tracking.
          </li>
          <li>
            Raise concerns about how your information is
            handled.
          </li>
        </ul>

        <p className="mt-4">
          To make a privacy-related request, please contact
          us using the email address provided in the Contact
          Us section.
        </p>
      </>
    ),
  },
  {
    title: "9. International Visitors",
    content: (
      <p>
        CHRISTECK operates from India and may receive enquiries
        from visitors in other countries, including Australia
        and New Zealand. Information may be processed by
        third-party service providers in locations outside
        your country of residence. We aim to handle personal
        information in accordance with applicable privacy
        requirements.
      </p>
    ),
  },
  {
    title: "10. Children's Privacy",
    content: (
      <p>
        Our website is intended primarily for business and
        professional audiences. We do not knowingly collect
        personal information from children for business or
        marketing purposes.
      </p>
    ),
  },
  {
    title: "11. Changes to This Privacy Policy",
    content: (
      <p>
        We may update this Privacy Policy to reflect changes
        in our website, services, technology or applicable
        legal requirements. The latest version will be
        published on this page with an updated revision date.
      </p>
    ),
  },
  {
    title: "12. Contact Us",
    content: (
      <>
        <p>
          For questions, privacy requests or concerns relating
          to this Privacy Policy, please contact us:
        </p>

        <div className="mt-5 rounded-xl border border-slate-200 bg-slate-50 p-5">
          <p className="font-bold text-slate-900">
            CHRISTECK – Electrical Engineering Solutions
          </p>

          <p className="mt-3">
            Email:{" "}
            <a
              href="mailto:sales@christeck.in"
              className="font-semibold text-[#176C73] hover:underline"
            >
              sales@christeck.in
            </a>
          </p>

          <p className="mt-2">
            Location: Bengaluru, Karnataka, India
          </p>

          <p className="mt-2">
            Website: christeck.in
          </p>
        </div>
      </>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <main>
      <section className="relative overflow-hidden bg-slate-950 py-20 text-white md:py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-[#176C73]/40 via-transparent to-[#2BA9B5]/10" />

        <Container>
          <div className="relative mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#70D6DE]">
              CHRISTECK
            </p>

            <h1 className="mt-5 text-4xl font-bold md:text-6xl">
              Privacy Policy
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Your privacy matters to us. Learn how we
              collect, use and protect information when
              you visit our website or contact our
              engineering team.
            </p>

            <p className="mt-5 text-sm text-slate-400">
              Draft – pending privacy and legal verification
            </p>
          </div>
        </Container>
      </section>

      <Section spacing="lg">
        <Container>
          <div className="mx-auto max-w-4xl">
            <div className="mb-10 rounded-xl border border-[#2BA9B5]/30 bg-[#2BA9B5]/5 p-5">
              <p className="text-sm leading-7 text-slate-700">
                <strong>Draft notice:</strong> This policy
                is subject to final review of CHRISTECK's
                legal ownership, data-controller details,
                third-party processing arrangements and
                applicable privacy requirements before
                publication.
              </p>
            </div>

            <div className="space-y-10">
              {sections.map((section) => (
                <section
                  key={section.title}
                  className="border-b border-slate-200 pb-8 last:border-0"
                >
                  <h2 className="text-xl font-bold text-slate-900 md:text-2xl">
                    {section.title}
                  </h2>

                  <div className="mt-4 text-[15px] leading-8 text-slate-600">
                    {section.content}
                  </div>
                </section>
              ))}
            </div>

            <p className="mt-8 text-sm text-slate-400">
              Revision date: 19 November 2026
            </p>
          </div>
        </Container>
      </Section>
    </main>
  );
}