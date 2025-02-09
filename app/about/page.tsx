"use client";

import { useState, useEffect } from "react";
import { PencilLine } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function About() {
  const router = useRouter();
  const [isEditing, setIsEditing] = useState(false);
  const [image, setImage] = useState<string | null>(null);
  const [displayName, setDisplayName] = useState<string>("");
  const [gender, setGender] = useState<string>("Select Gender");
  const [birthday, setBirthday] = useState<string>("");
  const [horoscope, setHoroscope] = useState<string>("");
  const [zodiac, setZodiac] = useState<string>("");
  const [height, setHeight] = useState<string>("");
  const [weight, setWeight] = useState<string>("");
  const [interestText, setInterestText] = useState("");

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };
  const handleSave = () => {
    setIsEditing(false);
  };

  useEffect(() => {
    const savedInterest = localStorage.getItem("tags");
    if (savedInterest) {
      setInterestText(savedInterest);
    }
  }, []);

  return (
    <section className="min-h-screen flex flex-col items-center justify-start font-sans bg-[#09141A] text-white">
      <main className="w-full max-w-lg lg:max-w-2xl rounded-lg p-6">
        <div className="mb-6">
          {/* Image Section */}
          <div className="mb-6 rounded-2xl h-52 relative">
            {image ? (
              <Image src={image} width={500} height={500} alt="Uploaded" className="w-full h-full object-cover rounded-2xl" />
            ) : (
              <div className="w-full h-full bg-[rgba(255,255,255,0.08)] flex justify-center items-center rounded-2xl">
                <span className="text-white text-xl"></span>
              </div>
            )}
            <div className="text-white p-4 absolute top-0 right-0 cursor-pointer" onClick={() => setIsEditing(true)}>
              <PencilLine size={20} />
            </div>
            <div className="text-white text-xl lg:text-3xl font-bold p-4 absolute bottom-0 left-4">
              @{displayName}
              {gender !== "Select Gender" && gender && <p className="mt-2 text-sm text-gray-300">{gender}</p>}
              <div className="flex items-center space-x-2 mt-2">
                {horoscope && <span className="flex items-center px-3 py-1 rounded-full bg-[rgba(14,25,31,1)] text-white text-sm">{horoscope}</span>}
                {zodiac && <span className="flex items-center px-3 py-1 rounded-full bg-[rgba(14,25,31,1)] text-white text-sm">{zodiac}</span>}
              </div>
            </div>
          </div>

          {/* About Section */}
          {isEditing ? (
            <div className="mb-6 bg-[#0E191F] rounded-2xl p-4">
              <div className="rounded-2xl flex justify-between mb-4">
                <div className="text-white flex-col justify-between items-center">
                  <h1 className="text-white text-sm lg:text-sm font-bold text-left">About</h1>
                </div>
                <button
                  className="text-transparent bg-clip-text bg-[linear-gradient(74.08deg,_#94783E_-6.8%,_#F3EDA6_16.76%,_#F8FAE5_30.5%,_#FFE2BE_49.6%,_#D5BE88_78.56%,_#F8FAE5_89.01%,_#D5BE88_100.43%)] hover:underline cursor-pointer"
                  onClick={handleSave}
                >
                  Save & Update
                </button>
              </div>

              {/* Input Gambar */}
              <div className="flex items-center space-x-4 mb-4">
                <label htmlFor="image-upload" className="w-12 h-12 bg-[rgba(255,255,255,0.08)] rounded-2xl flex items-center justify-center cursor-pointer">
                  {!image ? (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" className="cursor-pointer">
                      <defs>
                        <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" style={{ stopColor: "#94783E" }} />
                          <stop offset="16.76%" style={{ stopColor: "#F3EDA6" }} />
                          <stop offset="30.5%" style={{ stopColor: "#F8FAE5" }} />
                          <stop offset="49.6%" style={{ stopColor: "#FFE2BE" }} />
                          <stop offset="78.56%" style={{ stopColor: "#D5BE88" }} />
                          <stop offset="89.01%" style={{ stopColor: "#F8FAE5" }} />
                          <stop offset="100%" style={{ stopColor: "#D5BE88" }} />
                        </linearGradient>
                      </defs>
                      <path d="M12 2v20M2 12h20" stroke="url(#gradient1)" strokeWidth="2" fill="none" />
                    </svg>
                  ) : (
                    <Image src={image} width={500} height={500} alt="Uploaded" className="w-12 h-12 object-cover rounded-2xl" />
                  )}
                </label>
                <input type="file" id="image-upload" className="hidden" onChange={handleImageChange} accept="image/*" />
                <span>Add image</span>
              </div>

              {/* Input Fields */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-[rgba(255,255,255,0.33)]">Display Name :</span>
                  <input
                    type="text"
                    placeholder="Enter name"
                    value={displayName}
                    onChange={(e) => setDisplayName(e.target.value)}
                    className="w-52 p-2 rounded-lg placeholder:text-[rgba(255,255,255,0.33)] placeholder:text-right placeholder:text-sm border border-white border-opacity-30 bg-[#D9D9D90F] text-white text-right"
                  />
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-[rgba(255,255,255,0.33)]">Gender :</span>
                  <select
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                    className="w-52 p-2 rounded-lg placeholder:text-right placeholder:text-sm border  border-white border-opacity-30 bg-[#D9D9D90F] placeholder:text-[rgba(255,255,255,0.3)] text-[rgba(255,255,255,0.33)]"
                  >
                    <option className="text-sm text-[rgba(255,255,255,0.33)] text-right bg-[#1E2A30]">Select Gender</option>
                    <option className="text-sm text-[rgba(255,255,255,0.33)] text-right bg-[#1E2A30]">Male</option>
                    <option className="text-sm text-[rgba(255,255,255,0.33)] text-right bg-[#1E2A30]">Female</option>
                  </select>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-[rgba(255,255,255,0.33)]">Birthday :</span>
                  <input
                    type="text"
                    placeholder="DD MM YYYY"
                    value={birthday}
                    onChange={(e) => setBirthday(e.target.value)}
                    className="w-52 p-2 rounded-lg placeholder:text-[rgba(255,255,255,0.33)] placeholder:text-right placeholder:text-sm border border-white border-opacity-30 bg-[#D9D9D90F] text-white text-right"
                  />
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-[rgba(255,255,255,0.33)]">Horoscope :</span>
                  <input
                    type="text"
                    placeholder="Horoscope"
                    value={horoscope}
                    onChange={(e) => setHoroscope(e.target.value)}
                    className="w-52 p-2 rounded-lg placeholder:text-[rgba(255,255,255,0.33)] placeholder:text-right placeholder:text-sm border border-white border-opacity-30 bg-[#D9D9D90F] text-white text-right"
                  />
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-[rgba(255,255,255,0.33)]">Zodiac :</span>
                  <input
                    type="text"
                    placeholder="Zodiac"
                    value={zodiac}
                    onChange={(e) => setZodiac(e.target.value)}
                    className="w-52 p-2 rounded-lg placeholder:text-[rgba(255,255,255,0.33)] placeholder:text-right placeholder:text-sm border border-white border-opacity-30 bg-[#D9D9D90F] text-white text-right"
                  />
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-[rgba(255,255,255,0.33)]">Height :</span>
                  <input
                    type="text"
                    placeholder="Height"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                    className="w-52 p-2 rounded-lg placeholder:text-[rgba(255,255,255,0.33)] placeholder:text-right placeholder:text-sm border border-white border-opacity-30 bg-[#D9D9D90F] text-white text-right"
                  />
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-[rgba(255,255,255,0.33)]">Weight :</span>
                  <input
                    type="text"
                    placeholder="Weight"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    className="w-52 p-2 rounded-lg placeholder:text-[rgba(255,255,255,0.33)] placeholder:text-right placeholder:text-sm border border-white border-opacity-30 bg-[#D9D9D90F] text-white text-right"
                  />
                </div>
              </div>
            </div>
          ) : (
            <div className="mb-6 bg-[#0E191F] rounded-2xl h-auto px-2 flex items-center justify-between relative">
              {/* Bagian Kiri - Informasi */}
              <div className="text-white flex-1 p-4">
                <h1 className="text-white text-sm lg:text-sm font-bold">About</h1>
                <div className="text-white text-sm lg:text-sm py-4 text-left">
                  {displayName || gender !== "Select Gender" || birthday || horoscope || zodiac || height || weight ? (
                    <div className="space-y-4">
                      {birthday && (
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-[rgba(255,255,255,0.33)]">Birthday :</span>
                          <span className="text-white">{birthday}</span>
                        </div>
                      )}
                      {horoscope && (
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-[rgba(255,255,255,0.33)]">Horoscope :</span>
                          <span className="text-white">{horoscope}</span>
                        </div>
                      )}
                      {zodiac && (
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-[rgba(255,255,255,0.33)]">Zodiac :</span>
                          <span className="text-white">{zodiac}</span>
                        </div>
                      )}
                      {height && (
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-[rgba(255,255,255,0.33)]">Height :</span>
                          <span className="text-white">{height}</span>
                        </div>
                      )}
                      {weight && (
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-[rgba(255,255,255,0.33)]">Weight :</span>
                          <span className="text-white">{weight}</span>
                        </div>
                      )}
                    </div>
                  ) : (
                    "Add in your information to help others know you better"
                  )}
                </div>
              </div>

              {/* Bagian Kanan - Ikon Pencil */}
              <div className="absolute top-2 right-2 text-white cursor-pointer p-2" onClick={() => setIsEditing(true)}>
                <PencilLine size={20} />
              </div>
            </div>
          )}

          {/* Interest Section */}
          <div className="mb-6 bg-[#0E191F] rounded-2xl h-auto px-2 flex">
            <div className="text-white flex-col justify-between items-center p-4">
              <h1 className="text-white text-sm lg:text-sm font-bold">Interest</h1>
              <p className="text-white text-sm lg:text-sm py-4 text-left flex flex-wrap">
                {interestText && interestText.length > 0
                  ? (JSON.parse(interestText) as string[]).map((tag: string, index: number) => (
                      <span key={index} className="bg-[#FFFFFF1A] text-white rounded-md px-3 py-1 text-sm flex items-center mr-2 mb-2">
                        {tag}
                      </span>
                    ))
                  : "Add in your information to help others know you better"}
              </p>
            </div>
            <div className="text-white cursor-pointer items-center p-2">
              <PencilLine onClick={() => router.push("/interest")} size={20} />
            </div>
          </div>
        </div>
      </main>
    </section>
  );
}
