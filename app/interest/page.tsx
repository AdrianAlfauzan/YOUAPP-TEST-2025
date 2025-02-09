"use client";
import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";

const Interest = () => {
  const router = useRouter();
  const [tags, setTags] = useState<string>("");
  const [tagList, setTagList] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    const savedTags = localStorage.getItem("tags");
    if (savedTags) {
      setTagList(JSON.parse(savedTags));
    }
  }, []);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && tags.trim() !== "") {
      setTagList((prevTags) => [...prevTags, tags]);
      setTags("");
      e.preventDefault();
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (tagList.length > 0) {
      localStorage.setItem("tags", JSON.stringify(tagList));
      alert("Tags saved successfully!");
      router.push("/about");
    }
  };

  const handleRemoveTag = (index: number) => {
    const newTags = tagList.filter((_, i) => i !== index);
    setTagList(newTags);
  };

  return (
    <section className="min-h-screen flex items-center justify-center font-sans px-4 bg-css-custom">
      <main className="w-full max-w-md rounded-lg ">
        <h1 className="text-lg font-bold mb-1 ml-4 text-transparent bg-clip-text bg-[linear-gradient(74.08deg,_#94783E_-6.8%,_#F3EDA6_16.76%,_#F8FAE5_30.5%,_#FFE2BE_49.6%,_#D5BE88_78.56%,_#F8FAE5_89.01%,_#D5BE88_100.43%)] hover:underline cursor-pointer">
          Tell everyone about yourself
        </h1>
        <h1 className="text-2xl text-white font-bold mb-6 ml-4">What interests you?</h1>

        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Label sebagai wrapper input */}
          <label htmlFor="tags-input" className="flex flex-wrap rounded-md bg-[rgba(255,255,255,0.06)] text-white placeholder:text-gray-300 border border-transparent focus:ring-2 cursor-pointer">
            <div className="top-0 left-0 flex flex-wrap gap-2 px-4 py-2 w-full ">
              {tagList.map((tag, index) => (
                <span key={index} className="bg-[#FFFFFF1A] text-white rounded-md px-2 py-1 text-sm items-center flex">
                  {tag}
                  <button type="button" onClick={() => handleRemoveTag(index)} className="ml-2 text-xs text-white hover:text-red-500 focus:outline-none">
                    &#10005;
                  </button>
                </span>
              ))}
              <input
                id="tags-input"
                ref={inputRef}
                type="text"
                value={tags}
                onChange={(e) => setTags(e.target.value)}
                onKeyDown={handleKeyDown}
                className="rounded-md bg-transparent border border-transparent focus:outline-none focus:ring-2 focus:ring-[#62CDCB] px-2 py-1 text-sm placeholder:text-gray-300 flex-grow"
              />
            </div>
          </label>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={tagList.length === 0}
            className="absolute top-4 right-4 text-transparent bg-clip-text bg-gradient-to-r from-[#62CDCB] to-[#4599DB] hover:bg-gradient-to-r hover:from-[#62CDCB] hover:to-[#4599DB] hover:underline cursor-pointer"
          >
            Save
          </button>
        </form>
      </main>
    </section>
  );
};

export default Interest;
