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

export function ShowDataUser() {
  return (
    <>
      <ul className="w-full">
        <h1 className="font-semibold mb-4">Dados do usuário:</h1>
        <li>
          <h1>
            Nome: <span className="font-semibold">{user.name}</span>
          </h1>
        </li>
        <li>
          <h1>
            email: <span className="font-semibold">{user.email}</span>
          </h1>
        </li>
        <li>
          <h1>
            Data de nascimento:
            <span className="font-semibold">{user.dateBirth}</span>
          </h1>
        </li>
        <li>
          <h1>
            Nome da mãe:
            <span className="font-semibold">{user.nameMother}</span>
          </h1>
        </li>
        <li>
          <h1>
            CPF: <span className="font-semibold">{user.cpf}</span>
          </h1>
        </li>
        <li>
          <h1>
            Identidade: <span className="font-semibold">{user.rg}</span>
          </h1>
        </li>
        <h1 className="font-semibold my-4">Endereço:</h1>
        <li>
          <h1>
            CEP: <span className="font-semibold">{user.cep}</span>
          </h1>
        </li>
        <li>
          <h1>
            Estado: <span className="font-semibold">{user.state}</span>
          </h1>
        </li>
        <li>
          <h1>
            Cidade: <span className="font-semibold">{user.city}</span>
          </h1>
        </li>
        <li>
          <h1>
            Rua: <span className="font-semibold">{user.street}</span>
          </h1>
        </li>
        <li>
          <h1>
            Bairro: <span className="font-semibold">{user.district}</span>
          </h1>
        </li>
        <li>
          <h1>
            Número: <span className="font-semibold">{user.number}</span>
          </h1>
        </li>
        <li>
          <h1>
            Complemento:
            <span className="font-semibold">{user.complement}</span>
          </h1>
        </li>
        <h1 className="font-semibold my-4">Informações médicas:</h1>
        <li>
          <h1>
            Comorbidade:
            <span className="font-semibold">{user.comorbidity}</span>
          </h1>
        </li>
        <li>
          <h1>
            Comorbidade Familiar:
            <span className="font-semibold">{user.familyComorbidity}</span>
          </h1>
        </li>
        <li>
          <h1>
            Procedimento cirurgico:
            <span className="font-semibold">{user.surgery}</span>
          </h1>
        </li>
        <li>
          <h1>
            Informações adicionais:
            <span className="font-semibold">{user.InfosAdditional}</span>
          </h1>
        </li>
        <li>
          <h1>
            Tipo Sanguíneo:
            <span className="font-semibold">{user.bloodType}</span>
          </h1>
        </li>
        <li>
          <h1>
            Alergias: <span className="font-semibold">{user.Allergies}</span>
          </h1>
        </li>
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
            </div>
          </div>
        </li>
      </ul>
    </>
  );
}
