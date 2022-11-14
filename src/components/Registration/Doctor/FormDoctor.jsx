import { Button, TextField } from "@mui/material";
import { useForm } from "react-hook-form";

export const FormDoctor = (userData) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const dataCreateUser = {
      userData: props.userData,
      DoctorForm: data,
    };
    console.log(dataCreateUser);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full flex flex-col items-start justify-center"
      >
        <span>Documentos</span>
        <label className="w-full">
          <TextField
            className="w-full mt-4"
            id="name"
            label="Nome completo"
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
            id="dateBirth"
            label="Data de nascimento"
            variant="outlined"
            {...register("dateBirth", { required: true })}
          />
        </label>
        {errors.dateBirth && (
          <span className="text-red-400">Preencha esse campo</span>
        )}

        <label className="w-full">
          <TextField
            className="w-full mt-4"
            id="nameMother"
            label="Nome da Mãe"
            variant="outlined"
            {...register("nameMother", { required: true })}
          />
        </label>
        {errors.nameMother && (
          <span className="text-red-400">Preencha esse campo</span>
        )}

        <label className="w-full">
          <TextField
            className="w-full mt-4"
            id="cpf"
            label="CPF"
            variant="outlined"
            {...register("cpf", { required: true })}
          />
        </label>
        {errors.cpf && (
          <span className="text-red-400">Preencha esse campo</span>
        )}

        <label className="w-full">
          <TextField
            className="w-full mt-4"
            id="rg"
            label="Identidade"
            variant="outlined"
            {...register("rg", { required: true })}
          />
        </label>
        {errors.rg && <span className="text-red-400">Preencha esse campo</span>}

        <label className="w-full">
          <TextField
            className="w-full mt-4"
            id="crm"
            label="CMR"
            variant="outlined"
            {...register("crm", { required: true })}
          />
        </label>
        {errors.crm && (
          <span className="text-red-400">Preencha esse campo</span>
        )}

        <div className="w-full flex items-center justify-end  ">
          <Button className="mt-8">
            <input type="submit" value="enviar" />
          </Button>
        </div>
      </form>
    </>
  );
};
