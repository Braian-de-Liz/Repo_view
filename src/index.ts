// src\index.ts
import { createGoogleGenerativeAI } from "@ai-sdk/google";

const google = createGoogleGenerativeAI({
    apiKey: Bun.env.GEMINI_API_KEY,
    name: "Repo_View"
});


