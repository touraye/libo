import Image from "next/image";

export default function Home() {
  return (
    <>
      <h1>Welcome to the Next.js app!</h1>
      <Image
        src="/logo.svg"
        alt="Next.js Logo"
        width={500}
        height={500}
      />
    </>
  );
}
