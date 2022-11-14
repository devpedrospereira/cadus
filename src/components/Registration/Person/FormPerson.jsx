import { Button, TextField } from "@mui/material";
import { useForm } from "react-hook-form";

export const FormPerson = (props) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const dataCreateUser = {
      userData: props.userData,
      PersonForm: data,
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
        <label className="w-full mt-8">
          <TextField
            className="w-full  "
            id="name"
            value="Pedro Oliveira dos Santos Silva"
            label="Nome completo"
            variant="outlined"
            {...register("name", { required: true })}
          />
        </label>
        {errors.name && (
          <span className="text-red-400">Preencha esse campo</span>
        )}

        <label className="w-full mt-8">
          <TextField
            className="w-full  "
            id="dateBirth"
            value="12/02/1999"
            label="Data de nascimento"
            variant="outlined"
            {...register("dateBirth", { required: true })}
          />
        </label>
        {errors.dateBirth && (
          <span className="text-red-400">Preencha esse campo</span>
        )}

        <label className="w-full mt-8">
          <TextField
            className="w-full  "
            id="nameMother"
            value="Eduarda da Silva Party"
            label="Nome da Mãe"
            variant="outlined"
            {...register("nameMother", { required: true })}
          />
        </label>
        {errors.nameMother && (
          <span className="text-red-400">Preencha esse campo</span>
        )}

        <label className="w-full mt-8">
          <TextField
            className="w-full  "
            id="cpf"
            value="198.343.245-12"
            label="CPF"
            variant="outlined"
            {...register("cpf", { required: true })}
          />
        </label>
        {errors.cpf && (
          <span className="text-red-400">Preencha esse campo</span>
        )}

        <label className="w-full mt-8">
          <TextField
            className="w-full  "
            id="rg"
            value="4.123.12"
            label="Identidade"
            variant="outlined"
            {...register("rg", { required: true })}
          />
        </label>
        {errors.rg && <span className="text-red-400">Preencha esse campo</span>}

        <span className="w-full mt-4">Endereço</span>

        <label className="w-full mt-8">
          <TextField
            className="w-full  "
            id="cep"
            label="CEP"
            value="03651-060"
            variant="outlined"
            {...register("cep", { required: true })}
          />
        </label>
        {errors.cep && (
          <span className="text-red-400">Preencha esse campo</span>
        )}

        <label className="w-full mt-8">
          <TextField
            className="w-full  "
            id="state"
            value="SP"
            label="Estado"
            variant="outlined"
            {...register("state", { required: true })}
          />
        </label>
        {errors.state && (
          <span className="text-red-400">Preencha esse campo</span>
        )}

        <label className="w-full mt-8">
          <TextField
            className="w-full  "
            id="city"
            value="São Paulo"
            label="Cidade"
            variant="outlined"
            {...register("city", { required: true })}
          />
        </label>
        {errors.city && (
          <span className="text-red-400">Preencha esse campo</span>
        )}

        <label className="w-full mt-8">
          <TextField
            className="w-full  "
            id="street"
            value="R. Tapari, Esperança - SP"
            label="Rua"
            variant="outlined"
            {...register("street", { required: true })}
          />
        </label>
        {errors.street && (
          <span className="text-red-400">Preencha esse campo</span>
        )}

        <label className="w-full mt-8">
          <TextField
            className="w-full  "
            id="district"
            value="centro"
            label="Bairro"
            variant="outlined"
            {...register("district", { required: true })}
          />
        </label>
        {errors.district && (
          <span className="text-red-400">Preencha esse campo</span>
        )}

        <label className="w-full mt-8">
          <TextField
            className="w-full  "
            id="number"
            value="123"
            label="Numero"
            variant="outlined"
            {...register("number", { required: true })}
          />
        </label>
        {errors.number && (
          <span className="text-red-400">Preencha esse campo</span>
        )}

        <label className="w-full mt-8">
          <TextField
            className="w-full  "
            id="complement"
            label="Complemento"
            variant="outlined"
            {...register("complement")}
          />
        </label>

        <span className="w-full mt-4">Informações médicas</span>

        <label className="w-full mt-8">
          <TextField
            className="w-full  "
            id="comorbidity"
            label="Comorbidade (não, sim e qual?)"
            variant="outlined"
            value="Sim, Obesidade"
            {...register("comorbidity")}
          />
        </label>

        <label className="w-full mt-8">
          <TextField
            className="w-full  "
            id="familyComorbidity"
            label="Comorbidade Familiar (não, sim e qual?)"
            variant="outlined"
            value="Sim, Obesidade"
            {...register("familyComorbidity")}
          />
        </label>

        <label className="w-full mt-8">
          <TextField
            className="w-full  "
            id="bloodType"
            value="A+"
            label="Tipo Sanguíneo"
            variant="outlined"
            {...register("bloodType")}
          />
        </label>

        <label className="w-full mt-8">
          <TextField
            className="w-full  "
            id="Allergies"
            value="Sim, abelha"
            label="Alergias (não, sim e qual?)"
            variant="outlined"
            {...register("Allergies")}
          />
        </label>

        <label className="w-full mt-8">
          <TextField
            className="w-full  "
            id="InfosAdditional"
            label="Informações Adicionais"
            variant="outlined"
            value=""
            {...register("InfosAdditional")}
          />
        </label>

        {/* <label className="w- mt-8full">
          <TextField
            className="w-full  "
            id="historyRecords"
            value=""
            label="Histórico Prontuários"
            variant="outlined"
            {...register("historyRecords")}
          />
        </label> */}

        <div className="w-full flex items-center justify-end  ">
          <Button className="mt-8">
            <input type="submit" value="enviar" />
          </Button>
        </div>
      </form>
    </>
  );
};
