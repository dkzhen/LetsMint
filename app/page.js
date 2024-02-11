import Card from "@/components/Card";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="w-full flex justify-center bg-cover bg-center h-screen" style={{ backgroundImage: "url('/map.png')" }}>
      <Navbar />
      <div className="mt-[90px] md:w-[600px]  mx-5 rounded-lg">
        <Card className="m-2" />
      </div>
    </div>
  );
}
