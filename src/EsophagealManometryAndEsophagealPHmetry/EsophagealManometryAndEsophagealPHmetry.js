import React, { Component } from 'react';
import { Container, Header, Body, Title, Left, Icon, H1, Content } from 'native-base';
import { StyleSheet, ScrollView, Dimensions } from 'react-native';
import HTML from 'react-native-render-html';

export default class EsophagealManometryAndEsophagealPHmetry extends Component {
  render() {
    
    const htmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="UTF-8">
          <style>
            body {
              margin-left: 85.05pt;
              margin-right: 85.05pt;
              margin-top: 70.85pt;
              margin-bottom: 70.85pt;
              font-size: 12pt;
              text-indent: 0pt;
            }
          </style>
        </head>
        <body>
          <p style="text-align: center;font-size: 11pt;"> Procedimento de Manometria esofágica e pHmetria esofágica</p>
          <p style="text-align: justify;">Data: 11/01/2019</p>
          <p style="text-align: justify;">Peso: 63          Altura: 155  </p>
          <p style="text-align: justify;">Declaro para os devidos fins de direito, que fui prévia e adequadamente informado dos efeitos clínicos, adversos e colaterais, decorrentes da realização dos exames de:</p>
          <p style="text-align: justify;">1) Manometria esofágica; </p>
          <p style="text-align: justify;">2) pHmetria esofágica.</p>
          <p style="text-align: justify;">Tenho conhecimento de que os procedimentos médicos, a que serei submetido, indicados pela equipe médica que me assiste, e necessários à salvaguarda de minha saúde, podem me trazer benefícios, porém oferecem alguns riscos.</p>
          <p style="text-align: justify;">Todas as dúvidas, relacionadas com o referido procedimentos foram-me amplamente esclarecidas, notadamente quanto a possíveis resultados insatisfatórios, com a possibilidade do agravamento do quadro e cuidados posteriores que por mim devem ser observados.</p>
          <p style="text-align: justify;">Reconheço que a medicina não é uma ciência exata e que efeitos adversos, seqüelas ou complicações poderão ocorrer, em razão de meu próprio metabolismo e das condições do meu organismo, independente da boa técnica médica aplicada.</p>
          <p style="text-align: justify;">Declaro que fui esclarecido que o procedimento pode ocasionar, embora raramente, intercorrências como:</p>
          <p style="text-align: justify;">a) náuseas e vômitos devido a passagem da sonda; </p>
          <p style="text-align: justify;">b) efeitos do anestésico local (alergia, batedeiras no coração, queda de pressão ou dificuldade de respirar...);</p>
          <p style="text-align: justify;">d) aspiração do conteúdo do estômago, especialmente quando o jejum não foi feito como orientado ou é de digestão muito lenta;</p>
          <p style="text-align: justify;">e) sangramento ou perfuração pela passagem da sonda, principalmente quando o paciente já tem uma lesão ou fica muito agitado;</p>
          <p style="text-align: justify;">f) complicações decorrentes de outras doenças que o paciente já teve como, diabetes, ataque do coração ou derrame cerebral;</p>
          <p style="text-align: justify;">g) risco de sangramento nasal, decorrentes de problemas pré existentes na cavidade nasal.</p>
          <p style="text-align: justify;">     </p>
          <p style="text-align: justify;">Autorizo expressamente a equipe médica que me assiste, a realizar todos os exames e procedimentos médicos, terapêuticos, cirúrgicos, diagnósticos e/ou periciais que sejam necessários, em caso de necessidade e urgência, em face de possíveis intercorrências, ou com vistas à investigação de causas cirúrgicas</p>
          <p style="text-align: justify;">Declaro ainda, que estou de acordo com as condições acima descritas para realização dos referidos procedimentos, bem como recebi as recomendações a serem seguidas após os exames, por escrito.</p>
          <p>Questionário ao paciente:</p>
          <p>Fone: [  ].</p>
          <p>1- Motivos pelos quais foram solicitados os exames de Manometria esofágica e pHmetria esofágica:</p>
          <p>2- Cirurgias de nariz, esôfago ou estômago realizadas? </p>
          <p>Não ( x  ) Sim (x   )  Quais e quando? </p>
          <p>3- Está em jejum de pelo menos 6 horas e com acompanhante adulto? </p>
          <p>Não (  x ) Sim (   )  </p>
          <p>4- Exame de Endoscopia Digestiva Alta já realizado? Sim (   x    )   Não (       )</p>
          <p>5- Alergia a produtos e/ou medicamentos? </p>
          <p>Não ( x   )  Sim  (    )  Quais?</p>
          <p style="text-align: justify;">Ass.______________________________________</p>
          <p style="text-align: justify;">Data: 11/01/2019</p>
          <p style="text-align: justify;">Nome do paciente: Marizete Chaves Lacerda</p>
          <p>Responsável:</p>
        </body>
      </html>`;

    return (
      <Container>
        <Header>
          <Left style={ styles.header }>
            <Icon onPress={() => this.props.navigation.openDrawer()} name="md-menu" style={ styles.icon } />
          </Left>
          <Body>
            <Title>Manometria esofágica e pHmetria esofágica</Title>
          </Body>
        </Header>
        <Content padder>
          <H1 style={ styles.titlePage } >
            Manometria esofágica e pHmetria esofágica
          </H1>
          <ScrollView style={{ flex: 1 }}>
            <HTML html={htmlContent} imagesMaxWidth={Dimensions.get('window').width} />
          </ScrollView>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
    },
    icon: {
        color: 'white', 
        marginRight: 15
    },
    titlePage: {
        marginRight: 'auto', 
        marginLeft: 'auto', 
        marginTop: '5%', 
        marginBottom: '2%'
    },
});