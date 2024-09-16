import { useState } from "react";
import React from 'react';
import { objetivos, getStatus } from '../utils/data';
function Main({ name, debilidades, fortalezas, amenazas, oportunidades }) {

    return (
      <main className="font-Public Sans px-12 p-10 text-2xl bg-[#F4F4F9] text-[#2C3E50] sm:text-2xl">

      <div className="flex justify-center">
        <h2 className="font-bold text-center border-2 border-[#1e2a37] p-2 mt-4 mb-[5px] bg-[#2C3E50] rounded-md shadow-md text-white w-[100px] md:w-[200px]">Introducción </h2>
      </div>

      <section className="bg-[#f9f9f9] mt-[32px] ml-0 p-[20px] pt-0 pl-8 pr-9 pb-[25px] text-justify border-gray-300 shadow-2xl rounded-lg  max-w-[1430px] mx-auto text-[20px]">
        <br></br>
        <p>
          La planificación estratégica es un proceso fundamental para el éxito y la competitividad en el mercado automotriz, especialmente para un modelo icónico como el Toyota Corolla 2024. Este proceso implica definir objetivos a largo plazo, identificar oportunidades y amenazas del entorno, y alinear los recursos y capacidades de la empresa para alcanzar sus metas. <br />
          <br />
          El Toyota Corolla, conocido por su fiabilidad, eficiencia y accesibilidad, ha sido uno de los vehículos más vendidos a nivel mundial durante décadas. La versión 2024 no es una excepción, y su planificación estratégica está diseñada para mantener y potenciar estos atributos, mientras se adapta a las nuevas tendencias y demandas del mercado.
        </p>
      </section>

        <br></br>

        <section>
          <h2 className="font-bold text-center border-2 border-[#1e2a37] pb-[5px] mt-2 mb-[40px] bg-[#2C3E50] rounded-md shadow-md text-white w-[250px] items-center h-[40px] text-[23px]">
            1. Diagnóstico Actual
          </h2>

          
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Debilidades */}
            <ol className="list-decimal font-bold ml-0 space-y-2 pl-[40px] pt-[26px] bg-[#f9f9f9] p-[20px] text-justify border-gray-300 shadow-2xl rounded-lg text-[20px]">
              <div className="flex justify-center">
                <h3 className="font-bold text-center border-2 border-[#1e2a37] pt-[3px] mt-2 mb-[10px] bg-[#2C3E50] rounded-md shadow-md text-white w-[200px] items-center h-[40px] text-[23px]">
                  Debilidades
                </h3>
              </div>

              {debilidades.map((item) => (
                <li key={item.id}>
                  {item.name}
                  <p className="pt-3 text-[15px] font-normal leading-normal">{item.description}</p>
                </li>
              ))}
            </ol>

            {/* Fortalezas */}
            <ol className="list-decimal font-bold ml-0 space-y-2 pl-[40px] pt-[26px] bg-[#f9f9f9] p-[20px] text-justify border-gray-300 shadow-2xl rounded-lg text-[20px]">
              <div className="flex justify-center">
                <h3 className="font-bold text-center border-2 border-[#1e2a37] pt-[3px] mt-2 mb-[10px] bg-[#2C3E50] rounded-md shadow-md text-white w-[200px] items-center h-[40px] text-[23px]">
                  Fortalezas
                </h3>
              </div>

              {fortalezas.map((item) => (
                <li key={item.id}>
                  {item.name}
                  <p className="pt-3 text-[15px] font-normal leading-normal">{item.description}</p>
                </li>
              ))}
            </ol>
          </section>

          
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-10">
            {/* Amenazas */}
            <ol className="list-decimal font-bold ml-0 space-y-2 pl-[40px] pt-[26px] bg-[#f9f9f9] p-[20px] text-justify border-gray-300 shadow-2xl rounded-lg text-[20px]">
              <div className="flex justify-center">
                <h3 className="font-bold text-center border-2 border-[#1e2a37] pt-[3px] mt-2 mb-[10px] bg-[#2C3E50] rounded-md shadow-md text-white w-[200px] items-center h-[40px] text-[23px]">
                  Amenazas
                </h3>
              </div>

              {amenazas.map((item) => (
                <li key={item.id}>
                  {item.name}
                  <p className="pt-3 text-[15px] font-normal leading-normal">{item.description}</p>
                </li>
              ))}
            </ol>

           {/* Oportunidades */}
           <ol className="list-decimal font-bold ml-0 space-y-2 pl-[40px] pt-[26px] bg-[#f9f9f9] p-[20px] text-justify border-gray-300 shadow-2xl rounded-lg text-[20px]">
              <div className="flex justify-center">
                <h3 className="font-bold text-center border-2 border-[#1e2a37] pt-[3px] mt-2 mb-[10px] bg-[#2C3E50] rounded-md shadow-md text-white w-[200px] items-center h-[40px] text-[23px]">
                  Oportunidades
                </h3>
              </div>

              {oportunidades.map((item) => (
                <li key={item.id}>
                  {item.name}
                  <p className="pt-3 text-[15px] font-normal leading-normal">{item.description}</p>
                </li>
              ))}
            </ol>
          </section>
        </section>

        <br></br>
       
       <section>
        <h2 className="font-bold text-center border-2 border-[#1e2a37] pb-[5px] mt-2 mb-[13px] bg-[#2C3E50] rounded-md shadow-md text-white w-[340px] items-center h-[40px] text-[23px]">
          2. Identidad Organizacional
        </h2>

            <div className="bg-[#f9f9f9] mt-[39px] ml-0 p-[20px] pt-0 pl-8 pr-9 pb-[25px] text-justify border-gray-300 shadow-2xl rounded-lg  max-w-[1430px] mx-auto">
              <div className="flex justify-start">
                <h3 className="font-bold text-center border-2 border-[#1e2a37] pt-[3px] mt-8 mb-6 bg-[#2C3E50] rounded-md shadow-md text-white w-[200px] items-center h-[40px]">
                  Misión
                </h3>
              </div>
              <p className="text-[20px] ">
                Proporcionar a nuestros clientes un vehículo compacto que combine fiabilidad, eficiencia y tecnología avanzada, con un enfoque en la sostenibilidad y la satisfacción del cliente, a través de una red global de distribución y servicio que garantice un alto nivel de calidad y valor
              </p>
            </div>

            
            <div className="bg-[#f9f9f9] mt-[32px] ml-0 p-[20px] pt-0 pl-8 pr-9 pb-[25px] text-justify border-gray-300 shadow-2xl rounded-lg  max-w-[1430px] mx-auto">
              
              <div className="flex justify-start">
                  <h3 className="font-bold text-center border-2 border-[#1e2a37] pt-[3px] mt-8 mb-6 bg-[#2C3E50] rounded-md shadow-md text-white w-[200px] items-center h-[40px]">Visión</h3>
              </div>   
              <p className="text-[20px]">
                Ser el vehículo compacto preferido a nivel mundial, destacando por su fiabilidad, innovación tecnológica y compromiso con la sostenibilidad, mientras brindamos una experiencia excepcional para nuestros clientes.
              </p>
            </div>
            
            <div className="bg-[#f9f9f9] mt-[32px] ml-0 p-[20px] pt-0 pl-8 pr-9 pb-[25px] text-justify border-gray-300 shadow-2xl rounded-lg  max-w-[1430px] mx-auto">
              
              <div className="flex justify-start">
                  <h3 className="font-bold text-center border-2 border-[#1e2a37] pt-[3px] mt-8 mb-6 bg-[#2C3E50] rounded-md shadow-md text-white w-[300px] items-center h-[40px]">Políticas Coorporativas</h3>
              </div>   
              <p className="text-[20px]">
              Las políticas corporativas del Toyota Corolla 2024 se centran en la sostenibilidad, la innovación y la responsabilidad social. Toyota promueve la reducción de emisiones mediante el desarrollo de tecnologías híbridas y eléctricas, alineándose con su compromiso hacia un futuro de movilidad sostenible. Además, fomenta la calidad y seguridad en todos sus vehículos, aplicando altos estándares en la producción y materiales. La inclusión y la diversidad son valores clave en su entorno laboral, apoyando iniciativas globales para mejorar la comunidad. Estas políticas refuerzan su enfoque en la creación de valor tanto para los clientes como para la sociedad.
              </p>
            </div>
            
        </section>

        <section>
          <h2 className="font-bold text-center border-2 border-[#1e2a37] pb-[5px] mt-9 mb-[7px] bg-[#2C3E50] rounded-md shadow-md text-white w-[300px] items-center h-[40px] text-[23px]">
              3. Objetivos Estratégicos
          </h2>

          <div className="overflow-x-auto scrollbar-hide lg:overflow-x-hidden">
            <table border="1" cellPadding="10" className="bg-[#f9f9f9] mt-[32px] ml-0 p-[30px] pt-0 pl-8 pr-9 pb-[25px] text-justify border-gray-300 shadow-2xl rounded-lg w-[1430px] gap-0 min-w-[700px]">
              <thead>
                <tr>
                  <th className="text-center">Código</th>
                  <th>Objetivo</th>
                  <th>Meta</th>
                  <th className="pr-0">Avance</th>
                  <th className="text-center pl-0 pr-12">Cumplimiento</th>
                  <th>Estado</th>
                </tr>
              </thead>

              <tbody className="text-[20px]">
                {objetivos.map((goal) => {
                  const status = getStatus(goal.compliance);
                  return (
                    <tr key={goal.id} className="odd:bg-gray-100 even:bg-white">
                      <td className="text-center">{goal.id}</td>
                      <td className="w-[500px]">{goal.goal}</td>
                      <td className="pr-0">
                        {goal.goal.includes("ventas")
                          ? goal.target.toLocaleString("es-CO", { style: "currency", currency: "COP" })
                          : `${goal.target} ${goal.goal.includes("emisiones") ? "g/km" : goal.goal.includes("combustible") ? "km/l" : "%"}`}
                      </td>
                      <td className="pr-0">
                        {goal.goal.includes("ventas")
                          ? goal.progress.toLocaleString("es-CO", { style: "currency", currency: "COP" })
                          : `${goal.progress} ${goal.goal.includes("emisiones") ? "g/km" : goal.goal.includes("combustible") ? "km/l" : "%"}`}
                      </td>
                      <td className="text-center w-[100px] pl-0 pr-12">{goal.compliance}%</td>
                      <td style={{ color: status.color }}>{status.text}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>



        </section>
      </main>
    );
}
  
export default Main;
  