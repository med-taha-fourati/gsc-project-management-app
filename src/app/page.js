import Navbar from "@/components/Navbar/Navbar";
import Card from "@/components/Card/Card";

export default function Home() {
  return (
    <>
    <Navbar profileName={"Taha Fourati"}/>
    <div className="flex flex-col items-center justify-center w-full mt-[6rem] p-[2rem] text-center">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to GSC Project Management App</h1>
      <p className="text-lg text-gray-600 mb-8">All in one solution for project tracking using Git as well as Jira for Scrum integration</p>
      
    </div>
    </>
  );
}
