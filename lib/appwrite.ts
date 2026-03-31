import { Client, Account, Databases, Storage } from "appwrite"
import { Client as ServerClient, Databases as ServerDatabases, Storage as ServerStorage, Users } from "node-appwrite"

// --- Browser client (public, used in React components) ---
const client = new Client()
client
  .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!)
  .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT!)

export const account = new Account(client)
export const databases = new Databases(client)
export const storage = new Storage(client)
export { client }

// --- Server client (API routes / getServerSideProps only) ---
export function getServerClient() {
  const serverClient = new ServerClient()
  serverClient
    .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!)
    .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT!)
    .setKey(process.env.APPWRITE_API_KEY!)
  return {
    client: serverClient,
    databases: new ServerDatabases(serverClient),
    storage: new ServerStorage(serverClient),
    users: new Users(serverClient),
  }
}

// Collection IDs
export const COLLECTIONS = {
  USERS: "users",
  BUSINESSES: "businesses",
  REVIEWS: "reviews",
  REVIEW_REQUESTS: "review-requests",
  CAMPAIGNS: "campaigns",
  WIDGETS: "widgets",
  INTEGRATIONS: "integrations",
  REPORTS: "reports",
  SUBSCRIPTIONS: "subscriptions",
} as const

// Storage bucket IDs
export const BUCKETS = {
  MEDIA: "media",
  LOGOS: "logos",
} as const

// Database ID
export const DATABASE_ID = process.env.APPWRITE_DATABASE_ID || "main"
