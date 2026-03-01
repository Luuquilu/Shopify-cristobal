import type { ActionFunctionArgs } from "@remix-run/node";
import { authenticate } from "../shopify.server";

export const action = async ({ request }: ActionFunctionArgs) => {
  const { topic, shop, payload } = await authenticate.webhook(request);
  console.log("[COMPLIANCE WEBHOOK]", { topic, shop, payload });
  return new Response("ok", { status: 200 });
};
