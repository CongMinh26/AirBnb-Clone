import Image from "next/image";
// import { useRouter } from "next/router";

const Logo = () => {
    // const router = useRouter();
  return (
    <Image
      className="hidden md:block cursor-pointer"
      width={100}
      height={100}
      src="/images/logo.png"
      alt={"Logo"}
    ></Image>
  );
};

export default Logo;
