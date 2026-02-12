import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';

// Initialize the client only if the key is available
const getAiClient = () => {
  if (!apiKey) {
    console.warn("API_KEY is missing. AI features will not work.");
    return null;
  }
  return new GoogleGenAI({ apiKey });
};

export const generateRoofVisualization = async (
  base64Image: string,
  promptText: string = "Add sleek, modern solar panels to the roof of this building. Ensure the perspective matches the roof angle and lighting. Make it look photorealistic and high-end."
): Promise<string | null> => {
  const ai = getAiClient();
  if (!ai) return null;

  try {
    // According to documentation, we can edit images using prompt + image input
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image', // Using the flash model for image editing capabilities
      contents: {
        parts: [
          {
            inlineData: {
              data: base64Image,
              mimeType: 'image/jpeg', // Assuming jpeg, or we could detect
            },
          },
          {
            text: promptText,
          },
        ],
      },
    });

    // Iterate to find the image part in the response
    if (response.candidates && response.candidates[0].content && response.candidates[0].content.parts) {
      for (const part of response.candidates[0].content.parts) {
        if (part.inlineData && part.inlineData.data) {
          return `data:image/png;base64,${part.inlineData.data}`;
        }
      }
    }
    
    // If no image returned, it might have returned text description instead
    console.log("No image generated, response text:", response.text);
    return null;

  } catch (error) {
    console.error("Error generating roof visualization:", error);
    throw error;
  }
};
