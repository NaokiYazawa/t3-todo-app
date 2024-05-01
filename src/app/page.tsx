import type { Metadata } from "next";
import Image from "next/image";
import { getServerAuthSession } from "~/server/auth";
import { SignInButton } from "./_components/sign-in-button";
import { SignOutButton } from "./_components/sign-out-button";

export const metadata: Metadata = {
  title: "ToDo アプリ",
  description: "最高の ToDo アプリ",
};

export default async function Home() {
  const session = await getServerAuthSession();

  return (
    <div className="bg-olive-one selection:bg-green-two min-h-screen p-0 md:px-8 md:py-24">
      <main className="bg-cream-four md:outline-cream-four mx-auto max-w-none rounded-none px-5 pb-10 pt-24 outline-none md:max-w-[60rem] md:rounded-2xl md:px-8 md:outline md:outline-4 md:outline-offset-8">
        <h1 className="text-gray-three mb-6 text-center text-4xl font-bold">
          ToDo List
        </h1>
        {session ? (
          <>
            <div className="flex flex-col items-center">
              <p className="text-l mb-4 text-center text-white">
                <span>Logged in as {session.user?.email}</span>
              </p>
              <SignOutButton />
            </div>
            <div>Todo components coming soon...</div>
          </>
        ) : (
          <div className="flex flex-col items-center">
            <SignInButton />
            <div className="mb-5 text-xl">
              <p className="text-gray-four text-center">
                Keep your life in order with todolist
              </p>
              <p className="text-gray-four text-center">
                - The ultimate productivity tool -
              </p>
            </div>
            <div className="">
              <Image
                src="/images/main-img.png"
                width={600}
                height={600}
                alt="main-img"
              />
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
