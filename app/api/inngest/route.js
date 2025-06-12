import { serve } from "inngest/next";
import { inngest } from "@config/inngest";
import { syncUserCreate, syncUserUpdate, syncUserDelete } from "@/config/inngest";

// Create an API that serves zero functions
export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [
    syncUserCreate,
    syncUserUpdate,
    syncUserDelete
  ],
});