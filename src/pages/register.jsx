import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { useForm } from "react-hook-form";
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

export default function Login() {
  const [user, setuser] = useState(null);
  const [age, setAge] = React.useState("");

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => setuser(data);

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  function renderForm() {
    switch (age) {
      case 10:
        return <FormPerson userData={user} />;

      case 20:
        return <FormDoctor userData={user} />;

      case 30:
        return <FormOperational userData={user} />;

      case 40:
        return <FormHospital userData={user} />;

      default:
        return "";
    }
  }

  return (
    <>
      <section className="w-full min-h-screen md:py[4rem] md:py-[4rem] flex items-center justify-center  bg-gray-200 ">
        <section className="w-[80%] md:w-[45rem] rounded-lg shadow-2xl flex flex-col items-center justify-center gap-8 p-[2rem] bg-white">
          {!user ? (
            <>
              <h1>Cadastro</h1>

              <form
                onSubmit={handleSubmit(onSubmit)}
                className="w-full flex flex-col items-start justify-center"
              >
                <label className="w-full">
                  <TextField
                    className="w-full mt-4"
                    id="name"
                    label="Nome completo"
                    value="Pedro Oliveira dos Santos Silva"
                    variant="outlined"
                    {...register("name", { required: true })}
                  />
                </label>
                {errors.name && (
                  <span className="text-red-400">Preencha esse campo</span>
                )}
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
                    value="testetestest"
                    variant="outlined"
                    type="password"
                    {...register("password", { required: true })}
                  />
                </label>
                {errors.password && (
                  <span className="text-red-400">Preencha esse campo</span>
                )}

                {/* <label className="w-full">
    <TextField
      className="w-full mt-4"
      id="password"
      label="Confirmar senha"
      variant="outlined"
      type="password"
      {...register("password", { required: true })}
    />
  </label>
  {errors.password && (
    <span className="text-red-400">Preencha esse campo</span>
  )} */}
                <div className="w-full flex items-center justify-end  ">
                  <Button className="mt-8">
                    <input type="submit" value="Cadastrar" />
                  </Button>
                </div>
                <div className="w-full flex items-center justify-center">
                  <Link href={"/"}>
                    <Button>voltar</Button>
                  </Link>
                </div>
              </form>
            </>
          ) : (
            <>
              <h1>Selecione o tipo de cadastro</h1>
              <Box sx={{ minWidth: 120 }} className="w-full">
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Tipo de cadastro
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Age"
                    onChange={handleChange}
                  >
                    <MenuItem value={10}>Pessoa</MenuItem>
                    <MenuItem value={20}>Médico</MenuItem>
                    <MenuItem value={30}>Operacional</MenuItem>
                    <MenuItem value={40}>Hospital</MenuItem>
                  </Select>
                </FormControl>
              </Box>
              {renderForm()}
              <div className="w-full flex items-center justify-center">
                <Link href={"/"}>
                  <Button>voltar</Button>
                </Link>
              </div>
            </>
          )}
        </section>
      </section>
    </>
  );
}
