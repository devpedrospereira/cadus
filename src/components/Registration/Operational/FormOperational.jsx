import { Button, TextField } from "@mui/material";
import { useForm } from "react-hook-form";

export const FormOperational = (props) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const dataCreateUser = {
      userData: props.userData,
      OperationalForm: data,
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
            id="namberRegistration"
            label="Numero de Registro"
            variant="outlined"
            {...register("namberRegistration", { required: true })}
          />
        </label>
        {errors.namberRegistration && (
          <span className="text-red-400">Preencha esse campo</span>
        )}

        <span className="w-full mt-4">Endereço de Residencia</span>

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

        <span className="w-full mt-4">Endereço de Serviço</span>

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

        <span className="w-full mt-4">Informações adicionais</span>

        <label className="w-full">
          <TextField
            className="w-full mt-4"
            id="permissions"
            label="Permissões"
            variant="outlined"
            {...register("permissions")}
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
