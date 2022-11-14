import { Button, TextField } from "@mui/material";
import { useForm } from "react-hook-form";

export const FormHospital = (props) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const dataCreateUser = {
      userData: props.userData,
      hospitalForm: data,
    };
    console.log(dataCreateUser);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full flex flex-col items-start justify-center"
      >
        <span>Dados do Hospital</span>
        <label className="w-full">
          <TextField
            className="w-full mt-4"
            id="name"
            label="Nome do hospital"
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
            id="cnpj"
            label="CNPJ"
            variant="outlined"
            {...register("cnpj", { required: true })}
          />
        </label>
        {errors.cnpj && (
          <span className="text-red-400">Preencha esse campo</span>
        )}

        <label className="w-full">
          <TextField
            className="w-full mt-4"
            id="typeOperation"
            label="Publico/Privado/Militar"
            variant="outlined"
            {...register("typeOperation", { required: true })}
          />
        </label>
        {errors.typeOperation && (
          <span className="text-red-400">Preencha esse campo</span>
        )}

        <label className="w-full">
          <TextField
            className="w-full mt-4"
            id="register"
            label="Registro"
            variant="outlined"
            {...register("register", { required: true })}
          />
        </label>
        {errors.register && (
          <span className="text-red-400">Preencha esse campo</span>
        )}

        <label className="w-full">
          <TextField
            className="w-full mt-4"
            id="hospitalType"
            label="Hospital/UPA/PSF/Clínica"
            variant="outlined"
            {...register("hospitalType", { required: true })}
          />
        </label>
        {errors.hospitalType && (
          <span className="text-red-400">Preencha esse campo</span>
        )}

        <span className="w-full mt-4">Endereço</span>

        <label className="w-full">
          <TextField
            className="w-full mt-4"
            id="cep"
            label="CEP"
            variant="outlined"
            {...register("cep", { required: true })}
          />
        </label>
        {errors.cep && (
          <span className="text-red-400">Preencha esse campo</span>
        )}

        <label className="w-full">
          <TextField
            className="w-full mt-4"
            id="state"
            label="Estado"
            variant="outlined"
            {...register("state", { required: true })}
          />
        </label>
        {errors.state && (
          <span className="text-red-400">Preencha esse campo</span>
        )}

        <label className="w-full">
          <TextField
            className="w-full mt-4"
            id="city"
            label="Cidade"
            variant="outlined"
            {...register("city", { required: true })}
          />
        </label>
        {errors.city && (
          <span className="text-red-400">Preencha esse campo</span>
        )}

        <label className="w-full">
          <TextField
            className="w-full mt-4"
            id="street"
            label="Rua"
            variant="outlined"
            {...register("street", { required: true })}
          />
        </label>
        {errors.street && (
          <span className="text-red-400">Preencha esse campo</span>
        )}

        <label className="w-full">
          <TextField
            className="w-full mt-4"
            id="district"
            label="Bairro"
            variant="outlined"
            {...register("district", { required: true })}
          />
        </label>
        {errors.district && (
          <span className="text-red-400">Preencha esse campo</span>
        )}

        <label className="w-full">
          <TextField
            className="w-full mt-4"
            id="number"
            label="Numero"
            variant="outlined"
            {...register("number", { required: true })}
          />
        </label>
        {errors.number && (
          <span className="text-red-400">Preencha esse campo</span>
        )}

        <label className="w-full">
          <TextField
            className="w-full mt-4"
            id="complement"
            label="Complemento"
            variant="outlined"
            {...register("complement")}
          />
        </label>

        <div className="w-full flex items-center justify-end  ">
          <Button className="mt-8">
            <input type="submit" value="enviar" />
          </Button>
        </div>
      </form>
    </>
  );
};
