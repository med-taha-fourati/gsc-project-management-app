import Navbar from "@/components/Navbar/Navbar";
import Card from "@/components/Card/Card";

export default function Projects() {
  return (
    <>
    <Navbar profileName={"Taha Fourati"}/>
    <div className="flex flex-col items-center justify-center w-full mt-[6rem] p-[2rem] text-center">
      <h1 className="text-6xl font-bold text-gray-800 mb-4">Your Projects</h1>
      <p className="text-lg text-gray-600 mb-8">Manage your projects efficiently and effectively.</p>
      
    </div>

    <div className="flex flex-col items-center justify-center w-full">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
    </>
  );
}
