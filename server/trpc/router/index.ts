import { router } from "..";
import { MessagesRouter } from "./messages";

export const appRouter = router({
  messages: MessagesRouter,
});

export type AppRouter = typeof appRouter;
