import type { NextApiRequest, NextApiResponse } from "next"
import { getServerClient, DATABASE_ID, COLLECTIONS } from "../../lib/appwrite"
import { Query } from "node-appwrite"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { databases } = getServerClient()

  if (req.method === "GET") {
    const { businessId, limit = "25", offset = "0" } = req.query
    const queries = [
      Query.limit(Number(limit)),
      Query.offset(Number(offset)),
      Query.orderDesc("$createdAt"),
    ]
    if (businessId) queries.push(Query.equal("businessId", String(businessId)))

    try {
      const result = await databases.listDocuments(DATABASE_ID, COLLECTIONS.REVIEW_REQUESTS, queries)
      return res.status(200).json(result)
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Failed to fetch review requests"
      return res.status(500).json({ error: message })
    }
  }

  return res.status(405).json({ error: "Method not allowed" })
}
