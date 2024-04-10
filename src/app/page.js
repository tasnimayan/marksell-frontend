import CategoryList from "@/components/CategoryList";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-12 ">
      <div className="h-screen">

        <CategoryList/>
      </div>

      
    </main>
  );
}
