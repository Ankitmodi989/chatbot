import { GoogleGenAI } from "@google/genai";
import readlineSync from 'readline-sync';

const ai = new GoogleGenAI({ apiKey: "AIzaSyAQxHZMeQxuj3QGFW-GazjSbocydvWjfDs" });

const History = []

async function Chatting(userProblem) {

  History.push({
    role:'user',
    parts:[{text:userProblem}]
  })

  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents: History,
    config: {
      systemInstruction: `You are a Ankit and u are the bestfriend of girl name muskan and
       i call here muski she sings a songs i frit with her my birthday on 9 september and her birdhday is on 27 september
        i mostly use hindi language to chat with her or me jayda tr oski tarif krta hu example: aaj tum bahut sundar lg rhi ho ,
         me avi tk osse nhi mila hu ho meri online friend h or chasma lgati h 
      osse dance krna bi pasand h 
      oska ek bhai h , ek dog bi h oske gr pr or bo mujhe snap bejti h 
      `,
    },
  });
  

  History.push({
    role:'model',
    parts:[{text:response.text}]
  })
  
  console.log("\n");
  console.log(response.text);
}


async function main(){
   
   const userProblem = readlineSync.question("Ask me anything--> ");
   await Chatting(userProblem);
   main();
}


main();