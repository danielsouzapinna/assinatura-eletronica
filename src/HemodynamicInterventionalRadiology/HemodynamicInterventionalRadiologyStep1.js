import React, { Component } from 'react';
import { Button, Container, Header, Body, Title, Left, Right, Icon, Text, H1, H3, Content, Switch } from 'native-base';
import moment from "moment";

export default class HemodynamicInterventionalRadiologyStep1 extends Component {

  constructor(props) {
    super(props);
    //const { navigation } = this.props;
    //let teste = navigation.getParam('dateTime', null)

    this.state = { 
      hospitalCare: {
        logo: '/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAQEBUPDhAQFRAQEA8YEhYXEBUYGhgYGh0WGBoXFhcaICggHR0lJxYWITEhJSktLi4uFx8zODMsNygtLisBCgoKDg0OGxAQGy0dHSUtKy0tLS0tLS0tLS0tLS0tLS0tLSstLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAFIA3AMBEQACEQEDEQH/xAAcAAABBAMBAAAAAAAAAAAAAAAAAQUGBwIDBAj/xABFEAACAQIDBAMLCQYGAwAAAAABAgMABAUREgYHITETQVEUIjI0UlRhc3STshYzQnGBkZKhwRUXIzWCsSRipNHS4nKiwv/EABoBAAIDAQEAAAAAAAAAAAAAAAAEAQMFAgb/xAAoEQACAgIBAwQCAgMAAAAAAAAAAQIDBBEhEjEyEyJBUQUUM2EVI/D/2gAMAwEAAhEDEQA/ALxoAKAEzo0RsKCAoJA1CDegqQegNBKCgG9CZ1HJGxakNoKA2gzo1sNpBUaSDewoTOgqSGxGYDmaNMjaDOgnaFoAKht/AaDOhckPgKklMKCNoKA2goJ2FAC0AFABQAjcqCH2PNt3j96JHAvLoASSgDp38o1uRqh0IyJ2y2PGz+M3bW1+z3VwWjtEZCZSSp1jiOyqr64KS0W1WSZc2zMhayt2ZizNbwFiTmSSo4msuxe5mhU9xGLendyRYczwyPG/SwAMrFTkWHWKsxI9VmmVZEtRKb+UV957de/etmOPWZzsmd2AY/etd26Pd3LK1xAGUyvkQWHA1TdTBI7hZPZNN8eJTwS2wgnmjDRz6gjlc8jHzypTDhGXcvy5yj2K9+UV957de/etD0a/oU9aeg+UV957de/ep/Xr+iPUmHyivvPbr371P69f0T6kw+UV957de/eoePX9BK2aLR3PX008U7TzSyFZECl3LZcDyzrMzYKL0h/Fm5Lkeds9tYMOATLpLhxmsYOWQ8pz1CqaMeVjLLblEqbF9u8RuSdVwY1PJIu8H3+F+dakMSEO4hLIlIYZL2Vjm8shJ5kyuf1q70o/RV6j+zbbYpcRnOO4nQ9qyuP1odMfoPUf2SzAN5t7AQLnK4i688lcD0MOf20pbhxfiMVZLXct/AsagvYRPbvqRuB6mVutWHUazJ1uD0zQhPrXBWm9zFLmG8jWC4mjUwKSEcqM9R48K0MKuElyJ5U5JkH+UV957de/enfQr32FfWnoPlFfee3Xv3o/XrOfVmHyivvPbr370fr1/QerM2wbVYhGc1vbjP0vq/Js6j0K5fB08iaJbs1vRnRxHiADxEgGRRkyekgcGFJ3Ya7xGast/JcMbhgCpzUjMEciDWY1o0EZ0AFACNyoRD7Hl27+dk9ZL8Rr0UfBGLJe5j1s34riPsSfGKpvW5L/AL4LanwXnsn4jbezQfCKx7fNmlUtRI/ve/ljeug+IVdhfylWV4FF1tPsZQ5bO+O23tVt8Qqq7xO6vIne/D5219Xc/wB46U/HfI5llZVoiCHrZHAf2hci36Xo843bVo1curLMVTfZ6UdltNfW+5Of3Onz/wD0w/50l/kOPEaeH/YfudPn/wDph/zqF+Q/oP09/JIMDwVcCs7mV5ulGWvwNHFRkF5nmTVNln7E0tFsIelDuUnfXkk8rzTNqkkfNj6f9hWtVHSM6b2aKs3o4SLE2Q3ad1QLcXcrxiQZxooGrSeTMWz59lZ1+b0vSHa8XfLGPbfY6TDWVg/SQSHJW05ENz0sPqq7HyfV4Kr6Ogi9NLuLx4RKt3OPtZ3yKT/BuWWOQdWZ4I/2H8qUzKepbQ1jW9LHffR47H7OPiNcYHidZfkV9WgKMmO77ZGLEum6aSROi0adGXHVq56gaSy7/T1oYx6VPuSTFd0iiMm0uJDIBmFkAIb0ahllS8M9t6ZdLES7FVcevgesGtRLYg46CoaBHoXd5Kz4ZbF+JEWXHsUlR+QrCyeLGbOO/YSM1Si4yqCBKAIwdgcLJJNohLEknW/MnPyqu/Zs+yr0YbN1vsXh0aSIlsoWZNMg1P3yg55HjUvIsfdgqopD1aW6xIsUYySNVVR2ADICqN7ZalpER3vfyxvXQfEKawv5RfJ8Ci62n2MkctnfHbb2q2+IVVd4ndXkTvfh87a+ruf7x0p+O+RzLKyrREEPWyWPnD7nugR9IdBXSW0+F158aqvr9WOi2mzofYm/74X8xHv/APrSX+P/ALGv3f6D98D+Yj3/AP1qX+O57h+7p9jHaratr/BmlMfRFryOLIPqzCgSZ8hXNVHp362TZb119isK09aM9s22kPSSJGeUkkan+ohf1rix8HcFyeoIkCqFHIAAfZXnny9m0l7eCK707YSYXMTzjMbD7GFM4ctWaF8mPsKEraMzQaivfDmvEfWONEntBFaZOt7Llri3ZuJayiJPpJNJYXZjOV3RBafFWTrdltPbYf0/dTOOk6LRpQty1Z8qQy6p2a0NY9ij3JZiu9WzWM9yrLJKQwUFNKg9rE0tHCmn7i+WUvgptiSSScyeJPaTWtBaRmyltnfgeCz3soht0JJPfN9FB5THqqq29RLqq+o9F4RYLbQR26eDFGqgnmchz+2sKcuuTZrRj0o7a5R0haAEoAqCfe1cq7L3LAQruuet+okVpLB2tiDydM78K3lzzRXUrW8INtArqA7d8SwXI1zPDUWjqGTtFhYJeGe2inYANLEjEdQLDPKkbFqWhuHMSMb3v5Y3roPiFMYf8hRk+BRdbT7GUOWzvjtt7VbfEKqu8TuryJ3vw+dtfV3P946U/HfI5llZVoiCN9paSzNohjd3yz0opY5DryFcuUY8s6its7fk9feZXXuHrh5FZLplsPk9feZXXuHqFkQR2qZEilw6aPAXE0UiMmIq2ToVOkqi55H00vXYpZGy2UGqyE082KJG+ymCSxu3JJImP1KwNVyXB3F8nqBSCMx11598dza1wRbehMEwufP6Soo+sstX4kf9qYvkv2FA1t6MoGXMEDmeA+2iS0gjLbJzvXQi4t1PArZRA/YTSmF2Y3ld0QanRVmUaEnJVJPYqkn8qOtJcnSi/gJEIOTAg9hUg/nXEZpvghxfyCtkQeyu/jRylzstjd5tzG7LZTwQws/CJok0I7eSy9TH86ycrHa9xo0XLsWfSGx0KNki0ECNQQzy7e/Oyeul+I16OCfSYtnkx62b8VxD2JfjFL5O04nVPYvLZPxC29lg+EVj2+ZrQ8Rg3vfyxvXQfEKvw/5CnJ8Ci62n2MoctnfHbb2q2+MVVd4ndXkTvfh87a+ruf7x0p+O+RzLKyrREETfdD/Mh6iX9KSzX/rGsVe4vGsdPZqcC0EcbGvaXChd2ktseBljYKexhxU/fVldnTNM4sgnFnm6eF43McilXQsrg8ww4EVuxe0ZElo11Zo42WnshvMijt1gvlk1xBVV1XUHUcBq486zL8JuXtNCvLSXIxbwttxiAWC3R1t431EtwaRurgOQFXY2N6fuZXff1rghNOy4Yn8Eh2EwRr29ijyziiZZJj1BVOYH9R4UplW9MS3Hq6mSDfP47H7OPiNV4PiX5XkV9T4oywNzHj0vptmz/ElIZ61BaG8RpvksTb3B0urGZSgMkcbPEcuIdRmMj6eX20hjWuM0N3Vpo891vxW+TJfHBsilKMrocmQqynsKnMGuZpSQL2s9NYZdiaCOZeUsaMP6hnXnZx02jbre0ddc6OhaAEoAqefdFIzs3dqDU8jZdAfpHPy60Vn6WtCTw9vezuwzdlJDFcxG7RjcwLGD0JGnJg2fhVxZl9bT0dQxeldye4PZ9z28UBbUYoo0zyyz0jLPKk5z6pDMY6RF97ik4YwAzPTQcv8Ayq/Dl02bKr1uJSHc7+Q/4TWz6i+zLcX9Hfs9C4vLYlSP8VB9E+UKqvkmu53BPfYne+1C0trpBP8ADueS59cdJYT1svy1vsVr3O/kP+E1pqcfsT1LXYme6OJhiQLKR/Al5j6qTzZRcOBnFUlIvGsg1BaACgCCbdbApfE3FuwjutORJ8F8uWvLkfTTePlOHD7C1tCl2KlxXZ28tSRcW0igfSC6k/GuYrUjlRmhCVMosaqsc4spakZKpJCqCSeQHE1y7IktSJLgOwl/dkZRNFEebyqV4ehfCNUWZUIrgvrxnLuXPsxs5Bh8PRQjNm4yOfCdu0/oKyrbZWPZo1VqtFab5Yi17HpUn/DjkP8AMa0MGSS5EsrbfYgPc7+Q/wCE091Rb7ivS9diebmoiL2TUpH+GbmP8yUjmyi4aQ1hxcZclxzx6lZfKUj7xWZHSex+S4PMUlo6ll0P3jsvgn6Jyr0ClHXcxnF77GPc7+Q/4TU9Ufsjpf0XvuwuzLhkQbg8OuNh1jSeH5aaw8pJWcGtjt9HJLCKWaGDKuiBKAK1m3twqxU2kpKuy/OJ1HKnlgtruJPM0+x2YbvLjnjnkFrIBbQq5Bde+zbTlXM8Rxa5OoZXUuxM8LvRPBHOFIEsaOAeY1DPKlZR0xmMto6SM+dcJ6Ya2hOjHYPurrqf2DivoNA7B91G2SkjJlB5ioT0DWzHox2D7qnqf2Gl9ChAOQFG2wSSZlXJL7i1IBQAlG9kJHPdzxxRtJKQI0VmYnkFHEmulvfAS18jZh89hfRmeFYJkBYFjEDxHE+EM67l6kXo4SrZls/iNjcoWsTEyI2liiaQDln2ComppckJVseRVZbwFBDMSgPMA1KbRD0xOjHYPuo6n9kqK+hlxjaO2s54reVX6S4ICaUzHFgvE/WasjCU0VtqLHG4xGCORIpJY1klOUaFhqb6hzriMXoscls6dA7B91RuX2R0r6Ndy6Ro0hXgiMxyHHJRnRuT+Q6V9DXsttFDiETTWyuFWQoQ6hTmAD1Z9tWW1uD5OYWKa4HuqdbO96FqSRGoIfY8u3vzsnrpfiNeig/aYs17mPWy/i2IexJ8Yqm98x/74OquxeWyPiFr7LB8K1jW+TNWrxHauPksQtABQAUAFABQAUAFABQAlQiBp2s8RufZZ/hNW1eaObOxWGwGP3dvZNFBh81wheQmRGyAJA4eCeVP5EI9a5EKpS6Wa9h9of2fhNzcKoZzdIsYPLUyJxPoFTdSp2KJ1CxwiOl3fY7BaLib3MLIyxu0JiXvUbLLkB28eNVqNUpenFcncpWRj1MTaPbq4c2nQyrawXUAd5ynSaXzKso4cQpH/tUV48dtPuTK6ek0dGL4/eW+GG4S/iuHN0qpMiJwQqTpYZcGqK6oys00Dtl07RzYvjWOR2qYp0sCQFYiYQmeStkFZyRx1E8cjwzrqNdLm4rucyss6dnZje11wZsNeAhIr3oDIpRW8J0VhmRn9KohSkpJ/B1O/sMe0dtfftuJDcR90Oc7Z+j4Roxk0qRlxyFW19HottFU+r1UiWbUX1zAII5MWt7ZhCOkJgDtJJy1BepKWqjF7etl05yXA2bJ7VT3K3lncypN0VvK0cyLpDqAQeyu7aYrUkEbJNdJ1bkvEZfan+COuczyDEWkWJSY0LQSJQBSFxuxxFnZgIMmkdh/F6iSeytaOZBLRmyxZbHPBd319DDdxuIdVxbKiZP9IMG48Krty4SaJrxZJFl4BavDawwvlrigiVsuWagA1n2Pctj1a1Eca5+TtC0AFABQAUAFABQAUAFACVCIG/HbVprWaFMtUsMqrnwGbAgVZW9S2c2coYt3+z81jZNb3GjpGdyNJzGRAFXXXKc1IqqqcYNEfwTd7N+zprK7ZFeSZJI2U6gpVQOPKrZ5S600Vxx3pmE+zGNzWy4dLLaC2XQpcai5RD3oPD0V161Sl1ruEqrJLTHi9wS/gjjtLCKzltI4FVhcatRfNtTcOHHPOqo2wbcpPTO5VNLSIXjmy0uHYVIZ3QyTXMJKpnoQAP29dNV3RlbwhaVbhHQ4jZzFryygtVuLc2bpEwY6g4XmEYfS0VU7YQm5JcliqlOGh5xrYmZpsP7mKGGxEQYscmIR0YnLLr01XXcvc5fJZOnlJG3bHZe8lvocQsGh6SFFBWRiBmpOR4A8w9FNsFBxkTZTJzTRx3uy+J92LiMItHmkhVZUlZiqPlpYRnI972V1G2tRcTidM3LZswLY+9huruad4pO6beRQ47zORgv0OodVRO+MopIIUzUtjvu22emw+2eG40a3nZxpOYyKoP8A5qrItVktotprcIkupfZcLQSFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFAEO3pIDYgEAjp4+Y9DU1i+YtkeJIMBUC1hAAAEEXAD0CqbPJltXiONVlgUAFABQAUAFAH/2Q==',
        name:'São Luiz - Analia Franco(3)',
        registry: '12799847',
        bed: 1,
        dateTime: moment(new Date()).format("DD/MM/YYYY HH:mm:ss"),
        nameOfDoctor: 'DANIEL BRITO DE SOUZA - CRM: 40430',
        category: 'CATE42'
      },
      patient: {
        signature: null,
        name: 'Elena Loureiro Pasqueti',
        rg: '128138955',
        dateOfBirth: '21/11/2009',
        age: 9,
        gender: 'Feminino',
        height: '1,20m',
        weight: '40kg',
        accompanying: 'Simone Souza Pasqueti',
        accompanyingRG: '114568595',
        answers: {
          q1: false,
          q2: true,
          q2Description: 'Alergia a plazil',
          q3: null,
          q4: false,
          q5: true,
          q6: false,
          q7: 'Sim, há 5 anos atrás.',
          q8: 'Sim, cirurgia para retirada de amígdalas.',
          q9: false,
        },
      }
    };
  }

  willFocus = this.props.navigation.addListener('willFocus',
    (payload) => {
      this.setState({
        hospitalCare: {
          ...this.state.hospitalCare,
          dateTime: moment(new Date()).format("DD/MM/YYYY HH:mm:ss"),
        }
      })
    }
  );
  
  answerQ6 = (value) => {
    this.setState({
      patient: {
        ...this.state.patient,
        answers: {
          ...this.state.patient.answers,
          q6: value,
        }
      }
    })
  }

  answerQ9 = (value) => {
    this.setState({
      patient: {
        ...this.state.patient,
        answers: {
          ...this.state.patient.answers,
          q9: value,
        }
      }
    })
  }

  render() {
    return (
      <Container>
        <Header>
          <Left style={{ flexDirection: 'row'}}>
            <Icon onPress={() => this.props.navigation.openDrawer()} name="md-menu" style={{ color: 'white', marginRight: 15 }} />
          </Left>
          <Body>
            <Title>Informações</Title>
          </Body>
          <Right>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name='arrow-back' />
              <Text>Voltar</Text>
            </Button>
          </Right>
        </Header>
        <Content>
          <H1 style={{ marginRight: 'auto', marginLeft: 'auto', marginTop: '5%', marginBottom: '2%' }} > Informações: </H1>
          
          <H3 style={{ marginTop: '5%', marginBottom: '2%', fontWeight: 'bold' }} > Hospitalares: </H3>
          <Text>Registro: {this.state.hospitalCare.registry} </Text>
          <Text>Leito: {this.state.hospitalCare.bed} </Text>
          <Text>Nome do Médico: {this.state.hospitalCare.nameOfDoctor} </Text>
          <Text>Data: {this.state.hospitalCare.dateTime} {"\n"} </Text>

          <H3 style={{ marginTop: '5%', marginBottom: '2%', fontWeight: 'bold'}} > Paciente: </H3>
          <Text>Paciente: {this.state.patient.name} </Text>
          <Text>Data de Nascimento: {this.state.patient.dateOfBirth} </Text>
          <Text>Sexo: {this.state.patient.gender} </Text>
          <Text>Altura: {this.state.patient.height} </Text>
          <Text>Peso: {this.state.patient.weight} </Text>
          <Text>RG: {this.state.patient.rg} </Text>
          <Text>Acompanhante: {this.state.patient.accompanying} </Text>
          <Text>Acompanhante RG: {this.state.patient.accompanyingRG} {"\n"} </Text>

          <H3 style={{ marginTop: '5%', marginBottom: '2%', fontWeight: 'bold' }} > Questionário do Paciente: </H3>
          <Text> 
            Já realizou exames com contraste iodado (ex. Tomografia Computadorizada, Urografia Excretora, Mapeamento de Tiróide, Cateterismo Cardiaco, Arteriografia,flebografia)? 
            {"\n\n"} 
          </Text>
          
          <Text>
            Já apresentou algum tipo de reação alérgica ao utilizar o Contraste iodado ou outra substância a base de iodo (Iodeto de potássio, solução de iodo para a pele), ou ainda qualquer outro medicamento ou picada de insetos? À produtos, alimentos e/ou medicamentos?
            {"\n\n"}
          </Text>

          <Text>
            Possui Bronquite Asmática, Mieloma Múltiplo ou Trombocitopenia?
            {"\n\n"}
          </Text>

          <Text>
            Sofre de diabetes e faz uso de metformina? (Ex. glucoformina, glifage, glucoformin)?
            {"\n\n"}
          </Text>

          <Text>
            Sofre de alguma doença crônica (Ex. hipertensão, cirrose hepática), ou faz uso constante de medicamentos?
            {"\n\n"}
          </Text>

          <Text>
            Faz uso de medicamentos anticoagulantes (ex. Marevan, Marcomar, Dindevan, Clexane e Fraxiparina)?
            {"\n\n"}
          </Text>
          <Switch value={this.state.patient.answers.q6} onValueChange={this.answerQ6} />

          <Text>
            Já se submeteu à Radioterapia ou Quimioterapia? Há quanto tempo?
            {"\n\n"}
          </Text>

          <Text>
            Já se submeteu á algum trauma ou cirurgia na região a ser examinada? Qual? Onde?
            {"\n\n"}
          </Text>

          <Text>
            A Sra. está grávida ou sob suspeita de gravidez?
            {"\n\n"}
          </Text>
          <Switch value={this.state.patient.answers.q9} onValueChange={this.answerQ9} />

          <Button style={{ marginTop: '3%' }} block primary onPress={() => this.props.navigation.navigate('HemodynamicInterventionalRadiologyStep2')}>
            <Text> Próximo </Text>
          </Button>
        </Content>
      </Container>
    );
  }
}