// components/Navigation.tsx
import Link from "next/link";

interface NavigationProps {
  type: "login" | "register";
}

const Navigation = ({ type }: NavigationProps) => {
  if (type === "login") {
    return (
      <p className="text-center text-sm text-gray-400 mt-4">
        Don&lsquo;t have an account?{" "}
        <Link
          href="/register"
          className="text-transparent bg-clip-text bg-[linear-gradient(74.08deg,_#94783E_-6.8%,_#F3EDA6_16.76%,_#F8FAE5_30.5%,_#FFE2BE_49.6%,_#D5BE88_78.56%,_#F8FAE5_89.01%,_#D5BE88_100.43%)] hover:underline cursor-pointer"
        >
          Register
        </Link>
      </p>
    );
  } else {
    return (
      <p className="text-center text-sm text-gray-400 mt-4">
        Already have an account?{" "}
        <Link href="/" className="text-transparent bg-clip-text bg-[linear-gradient(74.08deg,_#94783E_-6.8%,_#F3EDA6_16.76%,_#F8FAE5_30.5%,_#FFE2BE_49.6%,_#D5BE88_78.56%,_#F8FAE5_89.01%,_#D5BE88_100.43%)] hover:underline cursor-pointer">
          Login
        </Link>
      </p>
    );
  }
};

export default Navigation;
