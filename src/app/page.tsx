import { Avatar } from "@mui/material";
import Link from "next/link";

export default function Home() {
  return (
    <section>
      <div className="flex justify-center items-center">
        <h1 className="font-bold text-orange-500">CV Builder App</h1>
        <Avatar
          alt="demo user"
          src="https://images.pexels.com/photos/7098048/pexels-photo-7098048.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
      </div>
      <div className="flex justify-center">
        <Link
          className="transition ease-in-out delay-100 bg-blue-500 px-4 py-2 rounded-lg text-white hover:bg-blue-600"
          href="/builder"
        >
          Builder
        </Link>
      </div>

      <div className="flex justify-center">
        <Link
          className="transition ease-in-out delay-100 bg-blue-500 px-4 py-2 rounded-lg text-white hover:bg-blue-600"
          href="/home"
        >
          Home
        </Link>
      </div>
    </section>
  );
}
