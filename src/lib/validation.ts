import { z } from "zod";

export const WatchFilterSchema = z.object({
  query: z.string().optional(),
  material: z.string().optional(),
  brand: z.string().optional(),
});

export type WatchFilterValues = z.infer<typeof WatchFilterSchema>;
