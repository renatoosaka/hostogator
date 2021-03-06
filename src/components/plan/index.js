import React from 'react';
import {
  Container,
  Header,
  Image,
  Title,
  Content,
  FullPriceContainer,
  OldPriceText,
  NewPriceText,
  PriceInfoText,
  PriceContainer,
  Price,
  PriceLabel,
  Button,
  DomainTextContainer,
  DomainText,
  SaveContainer,
  SaveText,
  SaveBadge,
  InfoImage,
  Footer,
  FooterList,
  FooterListItem,
  FooterHightLightText
} from './styles'
import infoImage from '../../assets/images/Componente 4.svg';

export default ({
  image,
  planLink,
  title, 
  oldPrice, 
  newPrice, 
  price,
  savePrice,
  siteQty,
  storage,
  indication
}) => (
    <Container indication={indication}>
    <Header>
      <Image src={image}/>
      <Title>{title}</Title>
    </Header>
    <Content>
      <FullPriceContainer>
        <OldPriceText>R$ {oldPrice}</OldPriceText>&nbsp;<NewPriceText>R$ {newPrice}</NewPriceText>
      </FullPriceContainer>
      <PriceInfoText>equivalente a</PriceInfoText>
      <PriceContainer>
        <PriceLabel>R$</PriceLabel><Price>{price}</Price><PriceLabel>/mês*</PriceLabel>
      </PriceContainer>
      <Button href={`?${planLink}`} indication={indication}>Contrate Agora</Button>
      <DomainTextContainer>
        <DomainText>1 ano de Domínio Grátis.</DomainText>&nbsp;<InfoImage src={infoImage} />
      </DomainTextContainer>
      <SaveContainer>
        <SaveText>economize R$ {savePrice}</SaveText>&nbsp;<SaveBadge>40% off</SaveBadge>
      </SaveContainer>
    </Content>
    <Footer>
      <FooterList>
        <FooterListItem>{siteQty}</FooterListItem>
        <FooterListItem><FooterHightLightText>{storage} GB</FooterHightLightText> de armazenamento</FooterListItem>
        <FooterListItem>Contas de E-mail <FooterHightLightText>ilimitadas</FooterHightLightText></FooterListItem>
        <FooterListItem>Criador de Sites <FooterHightLightText>Grátis</FooterHightLightText></FooterListItem>
        <FooterListItem>Certificado SSL <FooterHightLightText>Grátis</FooterHightLightText> (https)</FooterListItem>
      </FooterList>
    </Footer>
  </Container>
);