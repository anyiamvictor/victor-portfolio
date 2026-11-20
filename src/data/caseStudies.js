export const caseStudies = {
  mealflow: {
    name: "MealFlow",
    subtitle: "Bringing structure to corporate meal ordering.",
    intro: "A two-sided B2B SaaS product connecting restaurants with companies and their employees for organised daily meal ordering.",
    stage: "MVP built · Early-stage product",
    tabs: [
      { id: "overview", label: "Overview", heading: "The opportunity",
        intro: "Corporate meal ordering was often coordinated through WhatsApp messages, phone calls and handwritten lists. That made everyday changes difficult to track and meal quantities easy to get wrong.",
        cards: [
          { title: "The problem", body: "Companies and restaurants needed a dependable way to coordinate daily menus, employee choices, order cutoffs and kitchen preparation without relying on scattered manual communication." },
          { title: "The users", body: "The product serves restaurant administrators, company administrators and employees who need to select meals within an agreed ordering window." },
          { title: "The product goal", body: "Create one shared workflow for menu publishing, company approval, employee ordering and restaurant-side order aggregation." }
        ] },
      { id: "decisions", label: "Decisions", heading: "Product and architecture decisions",
        intro: "The first release prioritised a usable end-to-end workflow and a manageable operating footprint over a broad feature set.",
        cards: [
          { title: "Start with the core workflow", body: "Prioritised menu creation, company approval, employee ordering, cutoff handling and kitchen-facing aggregation. Payments, native mobile apps, white-labeling and subscription billing were kept outside the MVP." },
          { title: "Choose a lean MVP stack", body: "React and Firebase reduced infrastructure overhead for a solo-built MVP. The architecture keeps business logic in service and Cloud Functions layers rather than relying on client-side enforcement." },
          { title: "Model the two-sided relationship", body: "Separated restaurants, companies, memberships, menus and orders so each side of the service could operate within a clear role and workflow." }
        ] },
      { id: "solution", label: "Solution", heading: "What was built",
        intro: "The MVP brings the daily meal coordination process into a connected set of role-based experiences.",
        cards: [
          { title: "Menu publishing and approval", body: "Restaurant administrators prepare menus for a company and date, configure ordering details and submit them for company approval before employees can order." },
          { title: "Employee ordering", body: "Company members access the available menu and place their meal choices before the cutoff. Invite codes support member onboarding." },
          { title: "Order preparation", body: "Restaurants receive an aggregated view of orders by meal components, helping the kitchen prepare quantities. A default meal can be assigned after cutoff where configured." },
          { title: "Supporting workflows", body: "The MVP also includes member management, absence handling, order history, notifications, feedback and ratings." }
        ] },
      { id: "reflection", label: "Reflection", heading: "Current stage and learning",
        intro: "MealFlow is an early-stage MVP. It has been built and deployed, but it does not yet have paying customers; commercial validation remains ahead.",
        cards: [
          { title: "What this work demonstrates", body: "Taking a workflow from problem framing and requirements through role design, data modelling, implementation and deployment." },
          { title: "What remains", body: "Validate the workflow with real restaurant and company users, observe operational friction, prioritise improvements and establish evidence of repeat usage." },
          { title: "Live MVP", body: "The current application is available at mealflow-303d8.web.app.", link: "https://mealflow-303d8.web.app/", linkLabel: "Visit MealFlow" }
        ] }
    ]
  },
  chopstack: {
    name: "Chopstack",
    subtitle: "A clearer operating system for restaurant businesses.",
    intro: "An all-in-one restaurant operations concept for coordinating sales, orders, staff, inventory and financial workflows.",
    stage: "Active development · Product definition",
    tabs: [
      { id: "overview", label: "Overview", heading: "The opportunity",
        intro: "Restaurant operations can span walk-in sales, online orders, payment confirmation, staff responsibilities, stock and customer credit. Chopstack is being shaped around the need to manage these connected activities in one system.",
        cards: [
          { title: "The problem space", body: "Restaurant teams need operational tools that reflect how food businesses actually work, including multiple payment methods, delivery, stock control and credit-based relationships." },
          { title: "The product", body: "A multi-tenant restaurant operations platform with a branded customer storefront and a staff-facing dashboard." },
          { title: "Product ambition", body: "Help restaurant owners run day-to-day operations with clearer records, role-based access and reliable business data." }
        ] },
      { id: "decisions", label: "Decisions", heading: "Foundational product decisions",
        intro: "The work has focused on defining the data, permissions and integrity rules that need to be reliable before operational features expand.",
        cards: [
          { title: "Tenant isolation first", body: "Treat each restaurant organisation as a tenant and enforce data access boundaries at the database and trusted backend layers." },
          { title: "Capabilities, not arbitrary roles", body: "Use centrally defined role templates such as Manager, Cashier and Delivery Person. Restaurants can customise roles while the capability registry remains centrally controlled." },
          { title: "Protect ownership and auditability", body: "Represent ownership through restaurant membership, enforce at least one owner at database level and audit privileged platform actions. Platform administration uses explicit capabilities rather than an unrestricted global role." },
          { title: "Model money safely", body: "Represent monetary values in integer kobo, calculate totals on trusted server-side logic and preserve financial history rather than allowing silent edits." }
        ] },
      { id: "solution", label: "Solution", heading: "Product and system design",
        intro: "The product definition covers the operational areas that need to work together. These are planned capabilities, not a claim that every module is already implemented.",
        cards: [
          { title: "Sales and orders", body: "Support walk-in POS sales and online orders, with cash, bank transfer and POS-terminal payment methods and an auditable confirmation process." },
          { title: "Restaurant teams", body: "Define staff memberships and role-based capabilities for activities such as sales, payment confirmation, delivery and inventory." },
          { title: "Inventory and finance", body: "Plan inventory, wallets, credit lines, costing and financial records as connected operational modules." },
          { title: "Organisation and branches", body: "Separate organisation-level ownership, subscription and reporting concerns from branch-level operations, with a default branch for each organisation." },
          { title: "Technology foundation", body: "React, Vite and Supabase with PostgreSQL. The current work includes product requirements, schema design and foundational database decisions." }
        ] },
      { id: "reflection", label: "Reflection", heading: "Current stage and next validation",
        intro: "Chopstack is in active development. Its product requirements and architecture are being defined; the full operational platform should not be presented as already shipped.",
        cards: [
          { title: "What this work demonstrates", body: "Product thinking across multi-tenant architecture, permission modelling, data integrity, operational workflows and the realities of restaurant businesses." },
          { title: "Open questions", body: "Subscription tier allocation and pricing, rollout sequencing and validation with restaurant operators remain areas for further definition." },
          { title: "Next step", body: "Validate the highest-priority workflows with restaurant users, then implement and test the foundations before expanding into additional modules." }
        ] }
    ]
  },
  todoworkspaces: {
    name: "TodoWorkspaces",
    subtitle: "Making team tasks visible, accountable and reviewable.",
    intro: "A workspace-based task management application with task completion, supervisor review and controlled revision.",
    stage: "Completed build · Further refinement planned",
    tabs: [
      { id: "overview", label: "Overview", heading: "The opportunity",
        intro: "Teams need more than a shared checklist when tasks require ownership, review and approval. TodoWorkspaces explores a workflow where completion is visible and accountable.",
        cards: [
          { title: "The problem", body: "A simple task list does not always provide enough structure when supervisors need to review completed work and return tasks for correction." },
          { title: "The product", body: "A task management application organised around multiple workspaces, shared todos and a supervisor review process." },
          { title: "The intended users", body: "Team members manage and complete assigned work, while supervisors review outcomes and decide whether tasks are approved or need revision." }
        ] },
      { id: "decisions", label: "Decisions", heading: "Workflow decisions",
        intro: "The central product decision was to make task completion a state transition that triggers review, rather than treating completion as the end of the workflow.",
        cards: [
          { title: "Organise workspaces separately", body: "Allow users to create multiple workspaces so tasks can be grouped by team or area of work." },
          { title: "Lock completed tasks", body: "When a team member marks a task complete, the task becomes locked against further edits unless it is explicitly unlocked." },
          { title: "Add supervisor review", body: "Give supervisors the ability to approve completed tasks or unlock them for revision, making the review step part of the task lifecycle." }
        ] },
      { id: "solution", label: "Solution", heading: "What was implemented",
        intro: "The application combines workspace organisation with a controlled task lifecycle.",
        cards: [
          { title: "Workspace and todo management", body: "Users can create multiple workspaces and manage todos within them." },
          { title: "Team collaboration", body: "Team members can work on tasks and mark them complete." },
          { title: "Completion lock", body: "Completed tasks are locked from editing unless an authorised unlock action is taken." },
          { title: "Supervisor decision", body: "Supervisors can review a completed task, approve it or unlock it so the team member can make revisions." },
          { title: "Technology", body: "Built with React, Vite, React Router, Redux Toolkit and Firebase." }
        ] },
      { id: "reflection", label: "Reflection", heading: "Learning and further refinement",
        intro: "TodoWorkspaces is a completed build retained for further refinement. No user adoption or business outcome is claimed here.",
        cards: [
          { title: "What this work demonstrates", body: "Translating a team process into product states, permissions and review interactions, then implementing the workflow in a working application." },
          { title: "Potential refinement", body: "Further usability testing could examine how clearly users understand task ownership, locked states, review outcomes and revision requests." },
          { title: "Next step", body: "Review the end-to-end experience with representative team members and supervisors before prioritising additional functionality." }
        ] }
    ]
  }
};
