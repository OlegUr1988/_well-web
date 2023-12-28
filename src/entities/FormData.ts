import { z } from "zod";
import { PHDTagSchema, listViewFormSchema } from "../validationSchema";

export type ListViewFormData = z.infer<typeof listViewFormSchema>;

export type PHDTagFormData = z.infer<typeof PHDTagSchema>;
