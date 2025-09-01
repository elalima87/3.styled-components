import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import  bannerImage  from "../../assets/banner.png";

import { Container, TextContent, Title, TitleHighlight } from "./styles";
import { use } from "react";

const Home = () => {

    const navigate = useNavigate();

    const handleClickSignIn = () => {
        navigate("/login");
    }



    return (<>
            <Header />
            <Container>
                <div>
                    <Title>
                        <TitleHighlight>
                        Implemente
                        <br />
                        </TitleHighlight> 
                        o seu futuro global agora!
                    </Title>
                    <TextContent>
                        Domine as tecnologias utilizadas pelas empresas mais inovadoras do mundo e encare os desafios para se tornar um(a) 
                        profissional desejado(a).
                    </TextContent>
                    <Button title="Começar agora" variant="secondary" onClick={handleClickSignIn}/>
                </div>
                <div>
                    <img src={bannerImage} alt="Imagem de um desenvolvedor" />
                </div>
            </Container>


        </>
    );
}

export { Home };
