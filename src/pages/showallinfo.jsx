import { Button } from "@mui/material";
import Link from "next/link";

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

export default function Showallinfo() {
  return (
    <>
      <section className="w-full md:py[4rem] min-h-screen  md:py-[4rem] flex items-center justify-center bg-gray-200 ">
        <section className=" md:w-[45rem]  rounded-lg shadow-2xl flex flex-col items-center justify-center gap-8 p-[2rem] bg-white">
          <ul className="w-full">
            <li className="w-full mt-6">
              <h1 className=" font-bold">Histórico Prontuários:</h1>
              <div className="w-full flex flex-col items-start justify-center ">
                <div className="w-full flex flex-row items-start justify-between">
                  <h1 className="w-[40%] font-bold">Data</h1>
                  <h1 className="w-[20%] font-bold">CNES</h1>
                  <h1 className="w-[40%] font-bold">Médico</h1>
                  {/* <h1>PROGNOSTICO</h1> */}
                  {/* <h1>MEDICAÇÃO</h1> */}
                </div>
                <div className="w-full flex flex-col items-start justify-center  pt-4">
                  <div className="w-full flex flex-row items-start justify-start">
                    <h1 className="w-[40%]">10/10/2022</h1>
                    <h1 className="w-[20%]">125345</h1>
                    <h1 className="w-[40%]">Eduardo Parente Matsunaga</h1>
                  </div>

                  <h1 className="font-bold  pt-4">Prognóstico:</h1>
                  <h1>
                    A prescrição médica e a informação sobre a terapêutica para
                    o paciente são colocados como pontos centrais para o alcance
                    de uma terapêutica efetiva, de acordo com a organização
                    Mundial da Saúde, além do diagnóstico correto e definição
                    dos objetivos terapêuticos.:
                  </h1>

                  <h1 className="font-bold  pt-4">Medicação:</h1>
                  <h1>
                    Metamizol ou dipirona é um medicamento ainda utilizado
                    principalmente como analgésico e antipirético
                  </h1>

                  <div className="w-full flex items-center justify-center">
                    <Link href={"/dashboard"}>
                      <Button>voltar</Button>
                    </Link>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </section>
      </section>
    </>
  );
}
