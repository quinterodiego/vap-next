import { serve } from "inngest/next";
import { inngest } from "@config/inngest";
import { inngest } from "../../../inngest/client";

// Create an API that serves zero functions
export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [
    syncUserCreate,
    syncUserUpdate,
    syncUserDelete
  ],
});