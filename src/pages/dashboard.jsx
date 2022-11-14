import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { FormPerson } from "../components/Registration/Person/FormPerson";
import { FormDoctor } from "../components/Registration/Doctor/FormDoctor";
import { FormOperational } from "../components/Registration/Operational/FormOperational";
import { FormHospital } from "../components/Registration/Hospital/FormHospital";
import Link from "next/link";
import { Button, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { ShowDataUser } from "../components/ShowDataUser";
import { ShowListAttendance } from "../components/ShowListAttendance";
import { UserDataFaker as user } from "../components/userData";

export default function Dashboard() {
  // const [user, setUser] = useState();
  const [showInforUser, setshowInforUser] = useState(true);

  // const {
  //   register,
  //   handleSubmit,
  //   watch,
  //   formState: { errors },
  // } = useForm();

  // const onSubmit = (data) => {
  //   console.log(data);
  //   if (data.search === "091.234.212.23") {
  //     setshowInforUser(!showInforUser);
  //   } else {
  //     setshowButtonRegister(!showButtonRegister);
  //   }
  //   // Router.push("/dashboard");
  // };

  // function showDataUser() {
  //   ShowDataUser();
  // }

  return (
    <>
      <section className="w-full md:py[4rem] min-h-screen  md:py-[4rem] flex items-center justify-center bg-gray-200 ">
        <aside className="w-[20rem] min-h-screen fixed left-0 top-0 bg-white border-r-4  border-gray-300 ">
          <div className="w-full  px-[1rem] py-[3rem] flex flex-col gap-8">
            <div className="w-full h-[7rem] rounded-xl shadow-lg border-2 border-gray-200  bg-gray-100  flex flex-col items-center justify-center p-4 ">
              <h1>
                Usuário: <span className="font-medium">{user.name}</span>
              </h1>
              <Link href={"/"}>
                <Button>sair</Button>
              </Link>
            </div>
            <div>
              <h1>Navegue</h1>
              <ul className="ml-[1rem] mt-[0.5rem]">
                {/* <li>
                  <h1
                    className="hover:cursor-pointer hover:font-bold"
                    onClick={() => {
                      setshowInforUser(!showInforUser);
                    }}
                  >
                    Informações do Usuário
                  </h1>
                </li> */}
                <li className="mt-2">
                  <h1
                    className="hover:cursor-pointer hover:font-bold"
                    onClick={() => {
                      setshowInforUser(!showInforUser);
                    }}
                  >
                    Historico de atendimento
                  </h1>
                </li>
              </ul>
            </div>
          </div>
        </aside>
        <section className="w-[80%] md:w-[45rem]  rounded-lg shadow-2xl flex flex-col items-start justify-center gap-4 ml-[20rem] p-[2rem] bg-white">
          <h1>Informações do Usuário</h1>
          {/* <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full flex flex-col items-start justify-center"
          >
            <label className="w-full">
              <TextField
                className="w-full"
                id="search"
                label="CNS ou CPF"
                value="091.234.212.23"
                variant="outlined"
                {...register("search", { required: true })}
              />
            </label>
            {errors.search && (
              <span className="text-red-400">Preencha esse campo</span>
            )}
            <div className="w-full flex items-center justify-end  ">
              <Button>
                <input type="submit" value="Buscar" />
              </Button>
            </div>
          </form> */}

          {/* {showButtonRegister ? (
            <div className=" w-full flex flex-col items-center justify-center">
              <h1>Usuário não encontrado!</h1>
              <Link href={"/register"}>
                <Button>Cadastre-se</Button>
              </Link>
            </div>
          ) : (
            ""
          )} */}

          {showInforUser ? <ShowDataUser /> : <ShowListAttendance />}
        </section>
      </section>
    </>
  );
}
