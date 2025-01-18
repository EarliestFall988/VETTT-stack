import { z } from "zod";
import { router, publicProcedure } from "..";

const messages = [] as string[];

export const MessagesRouter = router({
  HelloMessage: publicProcedure
    .input(
      z.object({
        hiMessage: z.string(),
      })
    )
    .query(({ input }) => {
      return "hello from trpc " + input.hiMessage;
    }),

  SendMessage: publicProcedure
    .input(
      z.object({
        message: z.string().min(2, "too short").max(20, "too long"),
      })
    )
    .mutation(({ input }) => {
      messages.push(input.message);
    }),
  GetAllMessages: publicProcedure.query(() => {
    return messages;
  }),
});
