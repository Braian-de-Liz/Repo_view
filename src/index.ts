import { createGoogleGenerativeAI } from "@ai-sdk/google";
import { generateObject } from "ai";
import { z } from "zod";

const google = createGoogleGenerativeAI({
    apiKey: Bun.env.GOOGLE_GENERATIVE_AI_API_KEY!,
});

const star = async () => {
    try {
        console.log(" Solicitando dados ao Gemini...");

        const result = await generateObject({
            model: google("gemini-1.5-flash-latest"),
            schema: z.object({
                users: z.array(z.object({
                    id: z.number(),
                    name: z.string(),
                    age: z.number(),
                })),
            }),
            prompt: "Gere uma lista de 3 usuários fictícios para teste de sistema.",
        });

        console.table(result.object.users);
        console.log(" Sucesso!");
    } 
    catch (error: any) {
        console.error(" Erro:", error.message || error);
    }
}

star();