import React, { useState } from "react";
import client from "../utils/openAI";
import { resume } from "../utils/constants";
import QueryButton from "./QueryButton";

const GPTBar = () => {
  const [inputText, setInputText] = useState("");
  const [gptResponse, setGptResponse] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async (searchQuery) => {
    const query = searchQuery || inputText;
    if (!query) return;
    setIsLoading(true);
    const gptQuery = `You are giving details about Abhayjeet Sharma from his resume ${resume}, Act like you are him. Talk on his behalf. If the question is like who is Abhay or Who is Abhayjeet then only tell with the name. Don't use any other names.  Based on the query ${query}. You can be witty and funny. The maximum length of response should be less than 200 words. You can also advise them to visit my github when they ask about my projects after tellig them in brief about the projects: https://github.com/abhayHub17 or tell them to download my resume for more details by clicking the Download resume button in the navbar`;
    const completion = await client.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: gptQuery }],
    });

    const gptData = completion.choices[0].message.content;
    setGptResponse(gptData);
    setInputText("");
    setIsLoading(false);
  };

  return (
    <div
      id="ai"
      className="flex justify-center items-center mt-20 text-black h-screen"
    >
      <div className="w-[800px] ">
        {isLoading && (
          <div className="my-8  text-white text-xl">
            <span className="animate-pulse">Thinking...</span>
          </div>
        )}
        {!isLoading && gptResponse && (
          <div className="text-white">
            <p className="whitespace-pre-line px-4">{gptResponse}</p>
          </div>
        )}
        {!isLoading && !gptResponse && (
          <div>
            <h1
              className="text-6xl font-extrabold text-center mb-20 bg-gradient-to-r from-cyan-200 via-fuchsia-200 to-indigo-300 bg-clip-text text-transparent animate-gradient-x"
              style={{
                backgroundSize: "200% 200%",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundPosition: "0% 50%",
              }}
            >
              IMAGINE. BUILD. EVOLVE.
            </h1>
          </div>
        )}

        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSearch();
          }}
          className="w-full mt-4 flex"
        >
          <div className="relative w-full">
            <div
              className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-indigo-500 animate-gradient-x opacity-80"
              style={{ padding: 2 }}
            >
              <div className="w-full h-full rounded-full bg-black" />
            </div>
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Ask me anything..."
              className="relative p-4 w-full rounded-full bg-black bg-opacity-80 border-2 border-transparent focus:outline-none text-white z-10"
              style={{ backgroundClip: "padding-box" }}
            />
          </div>
          {/* <button
            className="ml-2 py-4 px-6 bg-transparent border text-gray-400  rounded-lg"
            onClick={handleSearch}
          >
            Search
          </button> */}
        </form>
        <div className="flex flex-col mt-6">
          <div className="flex text-sm md:text-base">
            <QueryButton
              query={"Tell me about youself"}
              onClick={() => handleSearch("Tell me about youself")}
            />
            <QueryButton
              query={"What are your key skills?"}
              onClick={() => handleSearch("What are your key skills?")}
            />
            <QueryButton
              query={"Show me your project"}
              onClick={() => handleSearch("Show me your project")}
            />
          </div>
          <div className="flex justify-center  items-center mt-4 text-sm md:text-base">
            <QueryButton
              query={"What's your work experience?"}
              onClick={() => handleSearch("What's your work experience?")}
            />
            <QueryButton
              query={"How can I contact you?"}
              onClick={() => handleSearch("How can I contact you?")}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GPTBar;
