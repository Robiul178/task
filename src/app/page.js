"use client";

import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import logo from "/src/assets/logo.svg";
import { Button } from "@nextui-org/button";

export default function Home() {
  return (
    <main className="max-w-[1400px] mx-auto">
      <div className="flex justify-between p-6">
        <Image src={logo} width={150} height={100} alt="logo" />
        <Button className="font-medium text-sm text-blue-500 underline">
          {" "}
          Create an account
        </Button>
      </div>
      <div className="flex flex-col items-center mt-20">
        <div className="text-center">
          <h2 className="text-2xl font-bold">Forgot password?</h2>
          <p>No worries, we ll send you reset instructions.</p>
        </div>
        <div className="mt-6 w-[350px]">
          <p className="py-1 font-semibold">Email</p>
          <input
            type="email"
            placeholder="Enter your email"
            className="border w-full p-2 rounded outline-0"
          />{" "}
          <br />
          <Button className="w-full border p-2 bg-blue-500 mt-3 text-white font-semibold rounded">
            Reset Password
          </Button>{" "}
          <br />
          <div className="flex flex-col items-center mt-5">
            <Button className="flex items-center font-medium text-sm text-gray-500 underline">
              {" "}
              <ArrowLeft className="mr-1" size={16} /> Back to login
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
