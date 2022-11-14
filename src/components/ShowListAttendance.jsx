import { Link } from "@mui/material";

const user = {
  name: "Pedro Oliveira dos Santos Silva",
  email: "pedro_oliveira@gmail.com",
  password: "sono@12",
  nameMother: "Eduarda da Silva Party",
  dateBirth: "12/02/1999",
  cpf: "198.343.245-12",
  rg: "4.123.12",

  cep: "03651-060",
  city: "São Paulo",
  street: "R. Tapari, Esperança - SP",
  state: "SP",
  number: "123",
  complement: "",
  InfosAdditional: "",

  bloodType: "A+",
  comorbidity: "Sim, Obesidade",
  familyComorbidity: "Sim, Obesidade",
  surgery: "sim, bariátrica",
  district: "centro",
  Allergies: "Sim, abelha",
  historyRecords: "",
};

export function ShowListAttendance() {
  return (
    <>
      Histórico Prontuários:
      <div className="w-full flex flex-col items-start justify-center ">
        <div className="w-full flex flex-row items-start justify-between">
          <h1 className="w-[40%] font-bold">Data</h1>
          <h1 className="w-[20%] font-bold">CNES</h1>
          <h1 className="w-[40%] font-bold">Médico</h1>
          {/* <h1>PROGNOSTICO</h1> */}
          {/* <h1>MEDICAÇÃO</h1> */}
        </div>
        <div className="w-full flex flex-col items-start justify-center  pt-4">
          <Link className="w-full " href={"/showallinfo"}>
            <div className="w-full flex flex-row items-start justify-start hover:cursor-pointer hover:font-bold">
              <h1 className="w-[40%]">10/10/2022</h1>
              <h1 className="w-[20%]">125345</h1>
              <h1 className="w-[40%]">Eduardo Parente Matsunaga</h1>
            </div>
          </Link>
          <Link className="w-full " href={"/showallinfo"}>
            <div className="w-full flex flex-row items-start justify-between hover:cursor-pointer hover:font-bold pt-4">
              <h1 className="w-[40%]">12/10/2022</h1>
              <h1 className="w-[20%]">543153</h1>
              <h1 className="w-[40%]">Antonio Pretini Silva</h1>
            </div>
          </Link>

          <Link className="w-full " href={"/showallinfo"}>
            <div className="w-full flex flex-row items-start justify-between hover:cursor-pointer hover:font-bold pt-4">
              <h1 className="w-[40%]">26/10/2022</h1>
              <h1 className="w-[20%]">685312</h1>
              <h1 className="w-[40%]">Fabi betollyni Valentin</h1>
            </div>
          </Link>

          <Link className="w-full " href={"/showallinfo"}>
            <div className="w-full flex flex-row items-start justify-between hover:cursor-pointer hover:font-bold pt-4">
              <h1 className="w-[40%]">26/10/2022</h1>
              <h1 className="w-[20%]">685312</h1>
              <h1 className="w-[40%]">Fabi betollyni Valentin</h1>
            </div>
          </Link>
          <Link className="w-full " href={"/showallinfo"}>
            <div className="w-full flex flex-row items-start justify-between hover:cursor-pointer hover:font-bold pt-4">
              <h1 className="w-[40%]">12/10/2022</h1>
              <h1 className="w-[20%]">543153</h1>
              <h1 className="w-[40%]">Antonio Pretini Silva</h1>
            </div>
          </Link>

          <Link className="w-full " href={"/showallinfo"}>
            <div className="w-full flex flex-row items-start justify-between hover:cursor-pointer hover:font-bold pt-4">
              <h1 className="w-[40%]">26/10/2022</h1>
              <h1 className="w-[20%]">685312</h1>
              <h1 className="w-[40%]">Fabi betollyni Valentin</h1>
            </div>
          </Link>

          <Link className="w-full " href={"/showallinfo"}>
            <div className="w-full flex flex-row items-start justify-between hover:cursor-pointer hover:font-bold pt-4">
              <h1 className="w-[40%]">26/10/2022</h1>
              <h1 className="w-[20%]">685312</h1>
              <h1 className="w-[40%]">Fabi betollyni Valentin</h1>
            </div>
          </Link>

          <Link className="w-full " href={"/showallinfo"}>
            <div className="w-full flex flex-row items-start justify-between hover:cursor-pointer hover:font-bold pt-4">
              <h1 className="w-[40%]">12/10/2022</h1>
              <h1 className="w-[20%]">543153</h1>
              <h1 className="w-[40%]">Antonio Pretini Silva</h1>
            </div>
          </Link>

          <Link className="w-full " href={"/showallinfo"}>
            <div className="w-full flex flex-row items-start justify-between hover:cursor-pointer hover:font-bold pt-4">
              <h1 className="w-[40%]">26/10/2022</h1>
              <h1 className="w-[20%]">685312</h1>
              <h1 className="w-[40%]">Fabi betollyni Valentin</h1>
            </div>
          </Link>

          <Link className="w-full " href={"/showallinfo"}>
            <div className="w-full flex flex-row items-start justify-between hover:cursor-pointer hover:font-bold pt-4">
              <h1 className="w-[40%]">26/10/2022</h1>
              <h1 className="w-[20%]">685312</h1>
              <h1 className="w-[40%]">Fabi betollyni Valentin</h1>
            </div>
          </Link>

          <Link className="w-full " href={"/showallinfo"}>
            <div className="w-full flex flex-row items-start justify-between hover:cursor-pointer hover:font-bold pt-4">
              <h1 className="w-[40%]">12/10/2022</h1>
              <h1 className="w-[20%]">543153</h1>
              <h1 className="w-[40%]">Antonio Pretini Silva</h1>
            </div>
          </Link>

          <Link className="w-full " href={"/showallinfo"}>
            <div className="w-full flex flex-row items-start justify-between hover:cursor-pointer hover:font-bold pt-4">
              <h1 className="w-[40%]">26/10/2022</h1>
              <h1 className="w-[20%]">685312</h1>
              <h1 className="w-[40%]">Fabi betollyni Valentin</h1>
            </div>
          </Link>

          <Link className="w-full " href={"/showallinfo"}>
            <div className="w-full flex flex-row items-start justify-between hover:cursor-pointer hover:font-bold pt-4">
              <h1 className="w-[40%]">26/10/2022</h1>
              <h1 className="w-[20%]">685312</h1>
              <h1 className="w-[40%]">Fabi betollyni Valentin</h1>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
