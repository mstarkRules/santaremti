import React, { useEffect, useState } from "react";

import ServiceCard from "../components/service-card";

import Head from "../components/Head";
import styled from "styled-components";

import getServices from "../lib/fetchServices";

const Text = styled.h1`
  margin: auto;
  font-family: "Manrope", sans-serif;
  font-size: xx-large;
`;

const servicesFake = [
  {
    id: "1",
    name: "Formatação",
    date: "25/12/2022",
    description: "Por favor formatem meu note",
  },
  {
    id: "2",
    name: "Limpeza de sistema",
    date: "24/12/2022",
    description: "Por favor limpem meu note",
  },
  {
    id: "3",
    name: "Instalação do office",
    date: "04/12/2022",
    description: "Por favor instalem meu office",
  },
];

function Servicos({ services }) {
  // const [serv, setServ] = useState([]);

  // useEffect(() => {
  //   const getServices = async () => {
  //     try {
  //       const response = await api.get("/services");

  //       // const servicesResponse = response.data;

  //       // setServ(servicesResponse);

  //       console.log("veio response: ", response);
  //       setServ(servicesFake);
  //     } catch (error) {
  //       console.log("erro ao buscar dados. ", error.message);
  //     }
  //   };

  //   getServices();
  // }, []);
  return (
    <>
      <Head
        title="Serviços - Santarém TI"
        description="Pagina que lista os serviços disponíveis"
      />
      <Text>Pagina em Construção!</Text>

      {services &&
        services?.map((service, index) => (
          <ServiceCard key={index} data={service} />
        ))}
    </>
  );
}

// export async function getServerSideProps() {
//   const services = [];
//   try {
//     const response = {};
//     // const response = await getUsers();

//     console.log("serv: ", response);
//     // services = await response.json();
//   } catch (error) {
//     console.log("Error while attempt fetch: ", error);
//   }

//   return {
//     props: {
//       services: services,
//     },
//   };
// }

export default Servicos;

export async function getStaticProps() {
  const data = await getServices();

  console.log("dadoss: ", data);

  return {
    props: {
      services: JSON.parse(JSON.stringify(data)),
    },
    revalidate: 10,
  };
}
