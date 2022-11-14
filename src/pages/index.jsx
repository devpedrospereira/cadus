import Link from "next/link";

import Button from "@mui/material/Button";
import { Typography } from "@mui/material";

export default function Home() {
  function handleLogin() {}

  return (
    <>
      <section className="w-full flex h-screen items-center justify-center bg-gray-200">
        <section className="w-[15rem] md:w-[25rem] h-[25rem] md:h-[20rem] rounded-lg shadow-2xl flex flex-col items-center justify-center gap-8 p-[2rem] bg-white">
          <h1 className="text-center font-bold">
            Olá, seja bem-vindo ao <span>CADUS</span>!
          </h1>
          <div className=" flex flex-col items-center justify-center gap-2">
            <Link href={"/login"}>
              <Button>Entrar</Button>
            </Link>
            <Link href={"/register"}>
              <Button>Cadastre-se</Button>
            </Link>
          </div>
        </section>
      </section>
    </>
  );
}
