import * as S from './styles'

const Main = () => (
  <S.Wrapper>
    <S.Logo
      src="/img/logo.svg"
      alt="Image de um átomo e react avançado escrito ao lado"
    />
    <S.Title>React Avançado</S.Title>
    <S.Description>
      Typescript, ReactJS, NextJS e Style Components
    </S.Description>
    <S.Illustration
      src="/img/hero-illustration.svg"
      alt="Desenvolvedor de frente para uma tela de computador"
    />
  </S.Wrapper>
)

export default Main
