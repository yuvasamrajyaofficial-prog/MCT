import fs from "fs/promises";
import path from "path";

const DATA_DIR = path.join(process.cwd(), "data");
const CONTACTS_FILE = path.join(DATA_DIR, "contacts.json");
const APPLICATIONS_FILE = path.join(DATA_DIR, "applications.json");

// Ensure data folder and default files exist
async function ensureDataFiles() {
  try {
    await fs.mkdir(DATA_DIR, { recursive: true });
  } catch (err) {
    // Directory might already exist
  }

  // Initial Seed for Contacts if file doesn't exist
  try {
    await fs.access(CONTACTS_FILE);
  } catch {
    const seedContacts = [
      {
        id: "cnt_101",
        name: "Vikram Malhotra",
        email: "vikram@malhotratech.com",
        phone: "+919845012345",
        service: "AI Sales Agent (₹9,999/mo)",
        message: "We need an automated conversational sales bot integrated with our WhatsApp Business API for lead qualification.",
        status: "new",
        notes: "High intent lead. Wants demo by Thursday.",
        createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      },
      {
        id: "cnt_102",
        name: "Ananya Deshmukh",
        email: "ananya@deshmukhjewels.in",
        phone: "+919820067890",
        service: "E-Commerce Website (₹29,999)",
        message: "Looking for an ultra-luxury online jewelry store with 3D product previews and instant UPI checkout.",
        status: "in_discussion",
        notes: "Shared proposal deck. Discussing payment gateway integration.",
        createdAt: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(),
      },
      {
        id: "cnt_103",
        name: "Rahul Verma",
        email: "rahul@vfitstudio.com",
        phone: "+919731154321",
        service: "Social Growth Pro (₹12,999/mo)",
        message: "Need brand management and short-form video content creation for our 3 fitness gyms in Bangalore.",
        status: "contacted",
        notes: "Connected on WhatsApp. Scheduled discovery call for tomorrow 4 PM.",
        createdAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
      },
      {
        id: "cnt_104",
        name: "Dr. Suresh Reddy",
        email: "suresh@careplusclinics.org",
        phone: "+919448098765",
        service: "Local SEO Lite (₹7,999/mo)",
        message: "Want our 4 diagnostic centers to rank #1 on Google Maps for local health checkup queries.",
        status: "closed_won",
        notes: "Advance payment received. SEO audit underway.",
        createdAt: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000).toISOString(),
      },
    ];
    await fs.writeFile(CONTACTS_FILE, JSON.stringify(seedContacts, null, 2), "utf-8");
  }

  // Initial Seed for Applications if file doesn't exist
  try {
    await fs.access(APPLICATIONS_FILE);
  } catch {
    const seedApplications = [
      {
        id: "app_201",
        fullName: "Aditya Hegde",
        email: "aditya.hegde@gmail.com",
        phone: "+919886043210",
        role: "AI Research Scientist",
        experience: "3-5 years",
        portfolio: "https://github.com/aditya-hegde-ai",
        skills: "PyTorch, LangChain, HuggingFace, RAG pipelines, Fine-tuning Llama 3",
        resumeNote: "Previously built autonomous agentic workflows at a Series-A healthtech startup. Passionate about LLM evals.",
        status: "reviewing",
        rating: 5,
        internalNotes: "Strong candidate. Excellent GitHub portfolio with published papers on arXiv.",
        appliedAt: new Date(Date.now() - 5 * 60 * 60 * 1000).toISOString(),
      },
      {
        id: "app_202",
        fullName: "Sneha Kulkarni",
        email: "sneha.kulkarni@devmail.io",
        phone: "+919740055443",
        role: "Senior Full Stack Engineer",
        experience: "5+ years",
        portfolio: "https://snehakulkarni.dev",
        skills: "Next.js 15, React 19, TypeScript, PostgreSQL, Prisma, AWS, Tailwind CSS",
        resumeNote: "Lead frontend architect for 3 enterprise web platforms. Designed 3D web applications with Three.js.",
        status: "interview",
        rating: 4,
        internalNotes: "Technical screening completed with flying colors. Next round with Prashant.",
        appliedAt: new Date(Date.now() - 28 * 60 * 60 * 1000).toISOString(),
      },
      {
        id: "app_203",
        fullName: "Rohan Iyer",
        email: "rohan.growth@gmail.com",
        phone: "+919900012399",
        role: "Digital Marketing Specialist",
        experience: "1-3 years",
        portfolio: "https://linkedin.com/in/rohan-growth-marketer",
        skills: "Performance Ads (Meta/Google), Technical SEO, Ahrefs, High-converting landing pages",
        resumeNote: "Generated over ₹2.4Cr in tracked client GMV using structured paid search & Instagram funnels.",
        status: "applied",
        rating: 3,
        internalNotes: "Reviewing campaign case studies.",
        appliedAt: new Date(Date.now() - 48 * 60 * 60 * 1000).toISOString(),
      },
      {
        id: "app_204",
        fullName: "Pooja Sharma",
        email: "pooja.designs@figma.community",
        phone: "+919611298877",
        role: "UI/UX Designer",
        experience: "3-5 years",
        portfolio: "https://dribbble.com/poojasharma-ux",
        skills: "Figma, Design Systems, Mobile App UI, Prototyping, Glassmorphism, Micro-interactions",
        resumeNote: "Crafted complete design systems for 2 FinTech apps with 500k+ downloads. Deep love for dark mode aesthetics.",
        status: "reviewing",
        rating: 4,
        internalNotes: "Dribbble showcase is top notch. Aesthetic matches PraBaS style.",
        appliedAt: new Date(Date.now() - 72 * 60 * 60 * 1000).toISOString(),
      },
    ];
    await fs.writeFile(APPLICATIONS_FILE, JSON.stringify(seedApplications, null, 2), "utf-8");
  }
}

// Contacts CRUD
export async function getContacts() {
  await ensureDataFiles();
  try {
    const raw = await fs.readFile(CONTACTS_FILE, "utf-8");
    return JSON.parse(raw);
  } catch (err) {
    console.error("Error reading contacts:", err);
    return [];
  }
}

export async function saveContact(contactData) {
  await ensureDataFiles();
  const contacts = await getContacts();
  const newContact = {
    id: `cnt_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`,
    ...contactData,
    status: contactData.status || "new",
    notes: contactData.notes || "",
    createdAt: new Date().toISOString(),
  };
  contacts.unshift(newContact);
  await fs.writeFile(CONTACTS_FILE, JSON.stringify(contacts, null, 2), "utf-8");
  return newContact;
}

export async function updateContact(id, updates) {
  await ensureDataFiles();
  const contacts = await getContacts();
  const index = contacts.findIndex((c) => c.id === id);
  if (index === -1) return null;

  contacts[index] = {
    ...contacts[index],
    ...updates,
    updatedAt: new Date().toISOString(),
  };
  await fs.writeFile(CONTACTS_FILE, JSON.stringify(contacts, null, 2), "utf-8");
  return contacts[index];
}

export async function deleteContact(id) {
  await ensureDataFiles();
  const contacts = await getContacts();
  const filtered = contacts.filter((c) => c.id !== id);
  if (filtered.length === contacts.length) return false;
  await fs.writeFile(CONTACTS_FILE, JSON.stringify(filtered, null, 2), "utf-8");
  return true;
}

// Applications CRUD
export async function getApplications() {
  await ensureDataFiles();
  try {
    const raw = await fs.readFile(APPLICATIONS_FILE, "utf-8");
    return JSON.parse(raw);
  } catch (err) {
    console.error("Error reading applications:", err);
    return [];
  }
}

export async function saveApplication(appData) {
  await ensureDataFiles();
  const applications = await getApplications();
  const newApp = {
    id: `app_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`,
    ...appData,
    status: appData.status || "applied",
    rating: appData.rating || 0,
    internalNotes: appData.internalNotes || "",
    appliedAt: new Date().toISOString(),
  };
  applications.unshift(newApp);
  await fs.writeFile(APPLICATIONS_FILE, JSON.stringify(applications, null, 2), "utf-8");
  return newApp;
}

export async function updateApplication(id, updates) {
  await ensureDataFiles();
  const applications = await getApplications();
  const index = applications.findIndex((a) => a.id === id);
  if (index === -1) return null;

  applications[index] = {
    ...applications[index],
    ...updates,
    updatedAt: new Date().toISOString(),
  };
  await fs.writeFile(APPLICATIONS_FILE, JSON.stringify(applications, null, 2), "utf-8");
  return applications[index];
}

export async function deleteApplication(id) {
  await ensureDataFiles();
  const applications = await getApplications();
  const filtered = applications.filter((a) => a.id !== id);
  if (filtered.length === applications.length) return false;
  await fs.writeFile(APPLICATIONS_FILE, JSON.stringify(filtered, null, 2), "utf-8");
  return true;
}
