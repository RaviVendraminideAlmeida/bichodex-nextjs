import Header from "@/components/header";

export default function Home() {
  return (
    <div>
      <Header></Header>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1 className="text-2xl text-center">Hello, Next!</h1>
      </main>
   </div>
 );
}
