import { Button, TextField } from "@mui/material";
import Link from "next/link";
import Router from "next/router";
import { useForm } from "react-hook-form";

export default function Login() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    Router.push("/dashboard");
  };

  return (
    <>
      <section className="w-full md:py[4rem] md:py-[4rem] h-screen flex items-center justify-center bg-gray-200  ">
        <section className="w-[80%] md:w-[45rem]  rounded-lg shadow-2xl flex flex-col items-center justify-center gap-8 p-[2rem] bg-white">
          <h1>Entrar</h1>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full flex flex-col items-start justify-center"
          >
            <label className="w-full">
              <TextField
                className="w-full mt-4"
                id="email"
                label="E-mail"
                value="pedro_oliveira@gmail.com"
                variant="outlined"
                type="email"
                {...register("email", { required: true })}
              />
            </label>
            {errors.email && (
              <span className="text-red-400">Preencha esse campo</span>
            )}

            <label className="w-full">
              <TextField
                className="w-full mt-4"
                id="password"
                label="Senha"
                value="1111111111"
                variant="outlined"
                type="password"
                {...register("password", { required: true })}
              />
            </label>
            {errors.password && (
              <span className="text-red-400">Preencha esse campo</span>
            )}
            <div className="w-full flex items-center justify-end  ">
              <Button className="mt-8">
                <input type="submit" value="Entrar" />
              </Button>
            </div>
            <div className="w-full flex items-center justify-center">
              <Link href={"/"}>
                <Button>voltar</Button>
              </Link>
            </div>
          </form>
        </section>
      </section>
    </>
  );
}
