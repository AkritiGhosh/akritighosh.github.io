export const techmentPortfolio = [
  <span key={"techPt" + 1}>
    Built customizable digital fliers and microsites for major universities and
    hospitals (Stanford, Harvard, UBC) to boost donor engagement. Think of it as
    a dynamic CMS but tailored for non-profits.
  </span>,
  <span key={"techPt" + 2}>
    Created analytics reports using Google Charts to visualize fundraising
    trends and donor behavior, making reports more insightful.
  </span>,
  <span key={"techPt" + 3}>
    Developed a fully responsive, dynamic template CMS that allowed clients to
    generate webpages with unique URL and download high-quality PDFs of
    promotional materials.
  </span>,
  <span key={"techPt" + 4}>
    Took ownership of the reports and analytics section, improving performance
    and making data insights more intuitive and accessible.
  </span>,
  <span key={"techPt" + 5}>
    Documented onboarding processes for new developers and clients, which became
    the go-to playbook for every new team member. Conducted code reviews and
    helped onboard new developers, ensuring clean and maintainable code.
  </span>,
  <span key={"techPt" + 6}>
    Worked in a fast-paced Agile environment with daily scrums and quick
    iterative development based on client feedback.
  </span>,
];

export const sproutsPortfolio = [
  <span key={1}>
    Built a powerful AI-driven hiring platform from the ground up—think LinkedIn
    meets an AI-powered ATS that matches candidates to jobs based on resumes and
    job descriptions.
  </span>,
  <span key={2}>
    Created an interactive job search experience, where candidates could
    auto-fill profiles via resume parsing, get AI-generated match scores, and
    apply directly.
  </span>,
  <span key={3}>
    Developed an advanced hiring dashboard for recruiters, generated customised
    reports integrating real-time analytics, job compatibility, and candidate
    assessments in one place.
  </span>,
  <span key={4}>
    Engineered AI-powered interview assistance, where an AI bot joined
    interviews, transcribed responses in real-time, and suggested follow-up
    questions to recruiters.
  </span>,
  <span key={5}>
    Designed data-driven hiring insights using D3.js, giving recruiters clear
    visual reports on job performance, candidate pipeline, and team efficiency.
  </span>,
  <span key={7}>
    Managed hiring for the engineering team, conducting interviews, onboarding
    developers, and scaling the team from 4 to 12 members.
  </span>,
  <span key={8}>
    Took on Scrum Master & Project Management responsibilities, leading sprint
    planning, managing tasks in Jira, and ensuring smooth development cycles.
  </span>,
  <span key={9}>
    Integrated third-party tools like Twilio (for messaging & calls) and Sentry
    (for error tracking) to enhance the product’s functionality.
  </span>,
];

export const sharboPortfolio = [
  <span key={"sharbo" + 1}>
    Helped launch Sharbo.io, an AI-powered competitor analysis tool that helps
    businesses compare products, track competition, and make data-driven
    decisions.
  </span>,
  <span key={"sharbo" + 6}>
    Delivered the final product within deadline, which ranked #3 on Product Hunt
    during its launch! 🚀
  </span>,
  <span key={"sharbo" + 2}>
    Developed the core competitor analysis module, where users could generate
    AI-driven reports, compare product features, and track industry trends.
  </span>,
  <span key={"sharbo" + 3}>
    Built an interactive AI-powered report builder, allowing users to edit,
    regenerate, and download PDF reports with insights tailored to their
    business.
  </span>,
  <span key={"sharbo" + 4}>
    Refactored the legacy codebase, fixing major performance issues and making
    the UI faster and smoother.
  </span>,
  <span key={"sharbo" + 5}>
    Integrated Sentry (for error tracking), Clerk (for authentication), and
    Pendo (for user analytics & session replay) to enhance stability and user
    experience.
  </span>,
  <span key={"sharbo" + 7}>
    Contributed to the next-gen version of the product, adding new features with
    a smaller but highly efficient team.
  </span>,
];

export const techmentImgs = [
  "techment/techment_logo.jpg",
  "techment/techment-nextwealth.jpg",
  "techment/techment_team.jpg",
  "techment/techment-office.jpg",
];

export const sproutsFeatureCards = [
  {
    id: "Auth",
    title: "Authentication and Authorization",
    imgSrc: "Auth2.png",
    tags: ["JWT", "OAuth", "SSO", "RBAC"],
  },
  {
    id: "PDFParsing",
    title: "Parsing PDF Documents",
    imgSrc: "Parsing.png",
    description: (
      <span key={1}>
        Parsing PDF documents to extract text information, helping users avoid
        repetitive filling personal information.
      </span>
    ),
  },
  {
    id: "RealTimeCall",
    title: "Real time Video Conferencing",
    imgSrc: "Zoom.png",
    tags: ["Zoom Integration", "WebRTC", "Socket.io"],
    description: (
      <span key={1}>
        Integrated Zoom SDK to enable real-time video conferencing and other
        features to conduct interviews.
      </span>
    ),
  },
  {
    id: "Transcription",
    title: "Real time Call Transcription and Summarization",
    imgSrc: null,
    tags: [
      "Socket.io",
      "Speech-to-text",
      "Natural Language Processing",
      "AI Bot",
    ],
    description: (
      <span key={1}>
        Used AI to transcribe real-time calls and summarize the conversation,
        helping recruiters focus on the interview.
      </span>
    ),
  },
  {
    id: "Analytics",
    title: "Dynamic & Responsive custom Analytics",
    imgSrc: "D3JS.svg",
    tags: ["D3.js", "Data Visualization", "Dynamic Reports"],
    description: (
      <span key={1}>
        Built custom analytics using D3.js for custom spider charts, combined
        charts, timelines.
      </span>
    ),
  },
];

export const sharboScreenshots = [
  "sharbo.jpg",
  "sharbo_analysis.png",
  "sharbo_form.png",
  "sharbo_charts.png",
];
