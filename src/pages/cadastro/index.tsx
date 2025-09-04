import { MdEmail, MdLock } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import { Link } from "react-router-dom";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";


import { Column,  Container, FazerLoginText,JaTenhoText,  Row, SubTitleCadastro, Title, TitleCadastro, Wrapper } from "./styles";
import { IFormData } from "./types";

//Validação do formulário
const schema = yup.object({
    email: yup.string().email('Email inválido').required('Campo obrigatório'),
    password: yup.string().min(3, 'No mínimo 3 caracteres').required('Campo obrigatório'),
}).required();


const Cadastro = () => {

    const navigate = useNavigate();
    
            //Aonde pega os dados do formulário
            const { control, handleSubmit, formState: { errors } } = useForm<IFormData>({
                resolver: yupResolver(schema), //Validação do formulário
                mode: 'onChange' //Quando o erro vai ser disparado (onChange, onBlur, onSubmit)
            });
            
            
            const onSubmit = async (formData: IFormData ) => {
                try {
                                        
                } catch (error) {
                    alert('Houve um erro, tente novamente');
                }
            };
    
    return (<>
        <Header />
        <Container>
            <Column>
                <Title>                    
                    A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.
                </Title>
            </Column>
            <Column>
                <Wrapper>
                    <TitleCadastro>Comece agora grátis</TitleCadastro>
                    <SubTitleCadastro>Crie sua conta e make the change._</SubTitleCadastro>
                    <form >
                        <Input name="nome" control={control} errorMessage={errors?.email?.message} placeholder="Nome completo"  type="text" leftIcon={<MdEmail />} />
                        <Input name="email" control={control} errorMessage={errors?.email?.message} placeholder="E-mail"  type="email" leftIcon={<MdEmail />} />
                        <Input name="password" control={control} errorMessage={errors?.password?.message} placeholder="Senha"  type="password" leftIcon={<MdLock />} />

                        <Button title="Criar Minha conta" variant="secondary" type="submit"  />
                    </form>
                    <Row>                        
                        <Link to="/cadastro" style={{ display: "flex", gap: "5px;" }}>
                            <JaTenhoText>
                                Já tenho conta
                            </JaTenhoText>
                            <FazerLoginText>
                                Fazer Login
                                </FazerLoginText>
                        </Link>
                    </Row>
                </Wrapper>
            </Column>
        </Container>
    </>);
}

export { Cadastro };
