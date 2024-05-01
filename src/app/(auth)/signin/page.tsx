import type { Metadata } from "next";
import Image from "next/image";
import { SignInForm } from "./_components/sign-in-form";

export const metadata: Metadata = {
  title: "ログイン",
  description: "アカウントにログイン",
};

export default function Page() {
  return (
    <>
      <div className="bg-olive-one selection:bg-green-two min-h-screen p-0 md:px-8 md:py-24">
        <div className="flex flex-col items-center space-y-20 pt-40">
          <Image
            src="/images/github-icon.png"
            width={170}
            height={170}
            alt="github-icon"
          />
          <SignInForm />
        </div>
      </div>
    </>
  );
}
