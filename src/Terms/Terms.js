export default function(data) {

  const header = `
    <div id="header">
      <div class="row">
        <div class="col-2"> <img src="data:image/jpeg;base64, ${data.hospitalCare.logo}" width='110' height='41' /> </div>
        <div class="col-8 text-center"> <h4> <b>TERMO DE CONSENTIMENTO</b> </h4> </div>
        <div class="col-2"></div>
      </div>
      <div class="row">
        <div class="col-8"></div>
        <div class="col-4"> Registro: ${data.hospitalCare.registry} Leito: ${data.hospitalCare.bed} </div>
      </div>
      <div class="row">
        <div class="col-8"> <b>${data.hospitalCare.name}</b> </div>
        <div class="col-4"> Data / Hora: ${data.hospitalCare.dateTime} </div>
      </div>
      <hr>
      <div class="row">
        <div class="col-6"> Paciente: ${data.patient.name} </div>
        <div class="col-3"> Idade: ${data.patient.age} </div>
        <div class="col-3"> Sexo: ${data.patient.gender} </div>
      </div>
      <div class="row">
        <div class="col-12"> Data de Nascimento: ${data.patient.dateOfBirth} </div>
      </div>
    </div>`;

  const footer = `
    <div id="footer">
      <div class="row">
        <div class="col-5"> 
          <figure>
            <img src="data:image/jpeg;base64, ${data.patient.signature}"> 
            <figcaption>_____________________________________________________________________</figcaption>
            <b>Paciente</b> <br/>
            ${data.patient.name} / RG: ${data.patient.rg}
          </figure>
        </div>
        <div class="col-2"></div>
        <div class="col-5">
          <figure>
            <img src="data:image/jpeg;base64, ${data.patient.signature}"> 
            <figcaption>_____________________________________________________________________</figcaption>
            <b>Acompanhante/Testemunha</b> <br/>
            ${data.patient.accompanying} / RG: ${data.patient.accompanyingRG}
          </figure>
        </div>
      </div>

      <div class="row">
        <div class="col-5"> Gerado em ${data.hospitalCare.dateTime} </div>
        <div class="col-2"></div>
        <div class="col-5 text-right"> ${data.hospitalCare.category} </div>
      </div>
    </div>`;

  return (
    `<html>
      <head>
        <title> Radiologia Intervencionista Hemodinamica </title>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
        <style>
          div {
            border-style: solid;
            border-width: 0px;
          }

          hr {
            color: #000;
            background-color: #000;
            height: 2px;
            margin-top: 0px;
          }

          signature {
            width: 80px;
            height: 3px;
            background: #000000;
            margin: 20px auto;
          }
        </style>
      </head>
      <body>
        <div class="container" style="margin-top: 25px">

          ${header}

          <div class="row">
            <div class="col-12 text-center"> <b>Radiologia Intervencionista Hemodinâmica</b> </div>
          </div>
          
          <div class="row">
            <div class="col-12"> Data: ${data.hospitalCare.date} </div>
          </div>
          <div class="row">
              <div class="col-6"> Paciente: ${data.patient.name} </div>
              <div class="col-3"> Idade: ${data.patient.age} </div>
              <div class="col-3"> Sexo: ${data.patient.gender} </div>
          </div>
          <div class="row">
            <div class="col-12"> Peso: ${data.patient.weight} Altura: ${data.patient.height} </div>
          </div>
          <br><br>
          
          <div class="row">
            <div class="col-12">
              Declaro para os devidos fins de direito, que fui prévia e adequadamente informado dos efeitos clínicos, adversos e
              colaterais, decorrentes da realização de exames de <b>Radiologia Intervencionista e Hemodinâmica</b>, bem como de
              seu procedimento, abaixo especificado:
            </div>
          </div>
          
          <br>

          <div class="row">
            <div class="col-12">
              <b> 1) </b> procedimento invasivo, através da inserção de catéteres no sistema arterial e/ou venoso; <br>
              <b> 2) </b> no decorrer do procedimento é necessária a injeção de Contraste, de substâncias iodadas; <br>
              <b> 3) </b> utiliza-se para realização do procedimento, emissão de ondas de RAIO-X. <br>
            </div>
          </div>

          <br>

          <div class="row">
            <div class="col-12">
              Tenho conhecimento de que os procedimentos médicos/cirúrgicos, a que serei submetido, indicados pela equipe
              médica que me assiste, e necessários à salvaguarda de minha saúde, podem me trazer benefícios, porém oferecem
              alguns riscos. <br>

              Todas as dúvidas, relacionadas com o referido procedimentos foram-me amplamente esclarecidas, notadamente
              quanto a possíveis resultados insatisfatórios, com a possibilidade do agravamento do quadro e cuidados posteriores
              que por mim devem ser observados. <br>

              Reconheço que a medicina não é uma ciência exata e que efeitos adversos, seqüelas ou complicações poderão
              ocorrer, em razão de meu próprio metabolismo, independente da boa técnica médica aplicada.
              Declaro que fui esclarecido que o procedimento pode ocasionar, embora raramente, intercorrências como: <br>
            </div>
          </div>

          <br>

          <div class="row">
            <div class="col-12">
              <b> a) </b> hematoma ou inflamação da veia pela punção venosa e injeção de medicamentos; <br>
              <b> b) </b> reações alérgicas ao uso de contraste iodado; <br>
              <b> c) </b> complicações com grau de gravidade variável, podendo exigir intervenções cirúrgicas; <br>
              <b> d) </b> hematoma ou obstruções de artérias ou veias utilizadas como via de acesso, ou na região onde o cateter foi alocado; <br>
              <b> e) </b> o procedimento não deve ser realizado durante o período da gravidez, exceto em casos de extrema necessidade; <br>
              <b> f) </b> em raríssimos casos pode causar o óbito. <br>
            </div>
          </div>

          <br>

          <div class="row">
            <div class="col-12">
              Autorizo expressamente a equipe médica que me assiste, a realizar todos os exames e procedimentos médicos,
              terapêuticos, cirúrgicos, diagnósticos e/ou periciais que sejam necessários, em caso de necessidade e urgência, em
              face de possíveis intercorrências, ou com vistas à investigação de causas cirúrgicas. <br>

              Declaro ainda, que estou de acordo com as condições acima descritas para realização do referido procedimento, bem
              como recebi as recomendações a serem seguidas após o procedimento/exame, por escrito.
            </div>
          </div>

          <br>

          <div class="row">
            <div class="col-12"><b>Questionário ao paciente:</b></div>
            <div class="col-12">
              Já realizou exames com contraste iodado (ex. Tomografia Computadorizada, Urografia Excretora, Mapeamento de
              Tiróide, Cateterismo Cardiaco, Arteriografia,flebografia)?
            </div>
            <div class="col-1">
              <input type="radio" name="qp1" value="sim" ${data.patient.answers.q1 === true ? 'checked' : ''}> Sim 
            </div>
            <div class="col-1">
              <input type="radio" name="qp1" value="nao" ${data.patient.answers.q1 === false ? 'checked' : ''}> Não 
            </div>
            <div class="col-2">
              <input type="radio" name="qp1" value="nao-sei" ${data.patient.answers.q1 === null ? 'checked' : ''}> Não sei
            </div>
          </div>

          <br/>

          <div class="row">
            <div class="col-12">
              Já apresentou algum tipo de reação alérgica ao utilizar o Contraste iodado ou outra substância a base de iodo (Iodeto
              de potássio, solução de iodo para a pele), ou ainda qualquer outro medicamento ou picada de insetos? À produtos,
              alimentos e/ou medicamentos?
            </div>
            <div class="col-1">
              <input type="radio" name="qp2" value="sim" ${data.patient.answers.q2 === true ? 'checked' : ''}> Sim 
            </div>
            <div class="col-1">
              <input type="radio" name="qp2" value="nao" ${data.patient.answers.q2 === false ? 'checked' : ''}> Não 
            </div>
            <div class="col-2">
              <input type="radio" name="qp2" value="nao-sei" ${data.patient.answers.q2 === null ? 'checked' : ''}> Não sei
            </div>
            <div class="col-2">
              Qual(is)?
            </div>
            <div class="col-12">
              <br />
              <textarea rows="2" cols="100">${data.patient.answers.q2Description}</textarea>
            </div>
          </div>

          <br>
          ${footer}
          <br><br><br><br>
          ${header}

          <br>

          <div class="row">
            <div class="col-12">
              Possui Bronquite Asmática, Mieloma Múltiplo ou Trombocitopenia?
            </div>
            <div class="col-1">
              <input type="radio" name="qp3" value="sim" ${data.patient.answers.q3 === true ? 'checked' : ''}> Sim 
            </div>
            <div class="col-1">
              <input type="radio" name="qp3" value="nao" ${data.patient.answers.q3 === false ? 'checked' : ''}> Não 
            </div>
            <div class="col-2">
              <input type="radio" name="qp3" value="nao-sei" ${data.patient.answers.q3 === null ? 'checked' : ''}> Não sei
            </div>
          </div>

          <br>

          <div class="row">
            <div class="col-12">
              Sofre de diabetes e faz uso de metformina? (Ex. glucoformina, glifage, glucoformin)?
            </div>
            <div class="col-1">
              <input type="radio" name="qp4" value="sim" ${data.patient.answers.q4 === true ? 'checked' : ''}> Sim 
            </div>
            <div class="col-1">
              <input type="radio" name="qp4" value="nao" ${data.patient.answers.q4 === false ? 'checked' : ''}> Não 
            </div>
            <div class="col-2">
              <input type="radio" name="qp4" value="nao-sei" ${data.patient.answers.q4 === null ? 'checked' : ''}> Não sei
            </div>
          </div>

          <br>

          <div class="row">
            <div class="col-12">
              Sofre de alguma doença crônica (Ex. hipertensão, cirrose hepática), ou faz uso constante de medicamentos?
            </div>
            <div class="col-1">
              <input type="radio" name="qp5" value="sim" ${data.patient.answers.q5 === true ? 'checked' : ''}> Sim 
            </div>
            <div class="col-1">
              <input type="radio" name="qp5" value="nao" ${data.patient.answers.q5 === false ? 'checked' : ''}> Não 
            </div>
            <div class="col-2">
              <input type="radio" name="qp5" value="nao-sei" ${data.patient.answers.q5 === null ? 'checked' : ''}> Não sei
            </div>
          </div>

          <br>

          <div class="row">
            <div class="col-12">
              Faz uso de medicamentos anticoagulantes (ex. Marevan, Marcomar, Dindevan, Clexane e Fraxiparina)?
            </div>
            <div class="col-1">
              <input type="radio" name="qp6" value="sim" ${data.patient.answers.q6 === true ? 'checked' : ''}> Sim 
            </div>
            <div class="col-1">
              <input type="radio" name="qp6" value="nao" ${data.patient.answers.q6 === false ? 'checked' : ''}> Não 
            </div>
          </div>

          <br>

          <div class="row">
            <div class="col-12">
              Já se submeteu à Radioterapia ou Quimioterapia? Há quanto tempo?
            </div>
            <div class="col-1">
              <textarea rows="2" cols="100">${data.patient.answers.q7}</textarea>
            </div>
          </div>

          <br>

          <div class="row">
            <div class="col-12">
              Já se submeteu á algum trauma ou cirurgia na região a ser examinada? Qual? Onde?
            </div>
            <div class="col-1">
              <textarea rows="2" cols="100">${data.patient.answers.q8}</textarea>
            </div>
          </div>

          <br/>

          <div class="row">
            <div class="col-12">
              A Sra. está grávida ou sob suspeita de gravidez?
            </div>
            <div class="col-1">
              <input type="radio" name="qp9" value="sim" ${data.patient.answers.q9 === true ? 'checked' : ''}> Sim 
            </div>
            <div class="col-1">
              <input type="radio" name="qp9" value="nao" ${data.patient.answers.q9 === false ? 'checked' : ''}> Não 
            </div>
          </div>
          
          <div class="row">
            <div class="col-10"> 
              <figure>
                <img src="data:image/jpeg;base64, ${data.patient.signature}"> 
                <figcaption>_____________________________________________________________________</figcaption>
                Data: ${data.hospitalCare.date} <br/>
                Nome do paciente: ${data.patient.name} <br/>
                Responsável:${data.patient.accompanying}
              </figure>
            </div>
          </div>


          <div class="row">
            <div class="col-10"> 
              <figure>
                <img src="data:image/jpeg;base64, ${data.patient.signature}"> 
                <figcaption>_____________________________________________________________________</figcaption>
                Data: ${data.hospitalCare.date} <br/>
                Nome do Médico: ${data.hospitalCare.nameOfDoctor}
              </figure>
            </div>
          </div>
          
          ${footer}
          
        </div>
      </body>
    </html>`
  )
}