// Imports
import Head from "../components/Head";
import {
  Section1,
  Sct_Intro,
  Sct_Title,
  Title1,
  Sct_SubIntro1,
  TextP,
  Sct_Button,
  BT1,
  BT2,
  Sct_Image,
} from "../styles/pg_Home/stl_Home";
import Image from "next/image";
//import { Section } from "../styles/stl_Body";

export default function Home() {
  return (
    <>
      <Head
        title="Home - Santarém TI"
        description="Santarém TI, aqui você encontra os melhores profissionais de TI."
      />
      <Section1>
        <Sct_Title>
          <Title1>Bem vindo à Santarém TI</Title1>
        </Sct_Title>
        <Sct_Intro>
          <Sct_SubIntro1>
            <TextP>
              Encontre os melhores profissionais de TI da nossa região.
            </TextP>
            <Sct_Button>
              <BT1>Tornar-se Colaborador</BT1>
              <BT2>Contratar Serviços</BT2>
            </Sct_Button>
          </Sct_SubIntro1>
          <Sct_Image>
            <Image
              src={
                "https://res.cloudinary.com/rayson/image/upload/v1654613155/Santarem%20TI/Home%20Page/img_HomePage03.png"
              }
              width={633}
              height={586}
              objectFit={"cover"}
              layout="responsive"
            />
          </Sct_Image>
        </Sct_Intro>
      </Section1>
    </>
  );
}
