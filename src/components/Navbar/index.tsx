import Link from "next/link";
import Image from "next/image";

export const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Image
          width={128}
          height={77}
          src="/logo.png"
          alt="logo"
          quality={100}
          objectFit="cover"
        />
      </div>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/ninjas">
        <a>Ninja listing</a>
      </Link>
    </nav>
  );
};
