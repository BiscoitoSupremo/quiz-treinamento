const competencies = ["Conexão","Investigação","Argumentação","Fechamento"];

const teamPhotos = {
  corretoria: "corretor.png",
  captacao: "captacao.png"
};

const personaPhotos = {
  mariana: "mariana.png",
  eduardo: "eduardo.png",
  familia: "casal.png",
  helena: "helena.jpg",
  lucas: "Lucas.png",
  carlos: "carlos.png",
  sandra: "Sandra.png",
  antonio: "antonio.jpg",
  irmaos: "irmaoss.png",
  fernando: "fernando.png"
};

  // Personas e cenários novel like

const teams = {
  "corretoria": {
    "name": "Corretoria",
    "description": "Escolha um tipo de comprador. Cada perfil reage de um jeito e exige uma condução diferente durante a visita.",
    "personas": [
      {
        "id": "mariana",
        "name": "Mariana Oliveira",
        "initials": "MO",
        "role": "Primeira compra",
        "subtitle": "Quer sair do aluguel sem perder segurança financeira.",
        "preview": "Analítica, cautelosa e sensível à parcela. Precisa sentir segurança antes de avançar.",
        "goal": "Comprar o primeiro imóvel sem comprometer demais a renda.",
        "tension": "Medo de assumir uma parcela alta ou comprar no momento errado.",
        "scenes": [
          {
            "label": "Chegada",
            "title": "Ela observa antes de falar.",
            "narration": "Mariana chega alguns minutos adiantada, percorre o hall com os olhos e compara mentalmente o ambiente com outros dois empreendimentos.",
            "speaker": "Mariana",
            "dialogue": "Gostei pelas fotos, mas ainda estou comparando. Quero ter certeza de que não vou me apertar depois.",
            "note": "Ela segura o celular com força e fala em tom baixo.",
            "insight": "O primeiro desafio é gerar segurança sem transformar tudo em preço.",
            "question": "Como você abre a conversa?",
            "options": [
              {
                "title": "Pergunto qual parcela máxima ela consegue assumir.",
                "description": "Vou direto ao limite financeiro.",
                "points": 12,
                "category": "Investigação",
                "why": "A pergunta é útil, mas antecipa a conversa financeira."
              },
              {
                "title": "Pergunto o que fez ela começar a procurar um imóvel agora.",
                "description": "Entendo motivação, contexto e urgência.",
                "points": 20,
                "category": "Conexão",
                "why": "Você começa pela motivação e cria contexto antes de apresentar produto ou condição."
              },
              {
                "title": "Começo mostrando os diferenciais do empreendimento.",
                "description": "Tento aumentar percepção de valor.",
                "points": 8,
                "category": "Argumentação",
                "why": "Você apresenta antes de entender o que realmente importa."
              }
            ]
          },
          {
            "label": "Visita",
            "title": "Ela para diante da janela.",
            "narration": "Mariana fica alguns segundos olhando o vidro e depois encara a sala como se tentasse se imaginar morando ali.",
            "speaker": "Mariana",
            "dialogue": "Eu consigo me imaginar aqui... mas fico pensando se estou fazendo isso cedo demais.",
            "note": "Ela sorri e logo volta a uma expressão séria.",
            "insight": "Há interesse emocional, mas a insegurança ainda conduz a decisão.",
            "question": "Qual é sua próxima pergunta?",
            "options": [
              {
                "title": "Pergunto o que precisaria acontecer para ela se sentir segura.",
                "description": "Investigo o critério de segurança.",
                "points": 20,
                "category": "Investigação",
                "why": "Você transforma insegurança ampla em critérios concretos."
              },
              {
                "title": "Mostro uma simulação de financiamento.",
                "description": "Levo a conversa para números.",
                "points": 13,
                "category": "Fechamento",
                "why": "Pode ajudar, mas talvez antecipe uma etapa."
              },
              {
                "title": "Digo que comprar cedo costuma ser melhor que pagar aluguel.",
                "description": "Uso comparação compra versus aluguel.",
                "points": 11,
                "category": "Argumentação",
                "why": "O argumento vem antes de entender a origem do receio."
              }
            ]
          },
          {
            "label": "Preço",
            "title": "O número muda o clima.",
            "narration": "Ao ouvir a faixa de valor, Mariana abre uma anotação no celular, faz uma conta e permanece em silêncio.",
            "speaker": "Mariana",
            "dialogue": "A parcela fica um pouco acima do que eu imaginava.",
            "note": "Ela deixa o celular sobre a mesa.",
            "insight": "Ainda não sabemos se a objeção é parcela, entrada ou valor total.",
            "question": "Como você responde?",
            "options": [
              {
                "title": "Pergunto qual parte da composição ficou acima do esperado.",
                "description": "Investigo parcela, entrada e total.",
                "points": 20,
                "category": "Investigação",
                "why": "Você evita tratar uma objeção ampla como simples preço."
              },
              {
                "title": "Ofereço tentar uma condição melhor.",
                "description": "Ataco o preço rapidamente.",
                "points": 9,
                "category": "Fechamento",
                "why": "Você concede antes de descobrir o problema."
              },
              {
                "title": "Reforço a valorização do empreendimento.",
                "description": "Levo para ganho patrimonial.",
                "points": 12,
                "category": "Argumentação",
                "why": "Pode ajudar, mas não resolve a insegurança de fluxo de caixa."
              }
            ]
          },
          {
            "label": "Comparação",
            "title": "Ela menciona o concorrente.",
            "narration": "Mariana guarda o celular e cita outro empreendimento com entrada menor.",
            "speaker": "Mariana",
            "dialogue": "No outro que eu vi, a entrada era menor.",
            "note": "Ela fala em tom neutro, testando sua reação.",
            "insight": "Ela compara acessibilidade, não necessariamente produto.",
            "question": "Qual é a melhor condução?",
            "options": [
              {
                "title": "Peço a condição completa do concorrente antes de comparar.",
                "description": "Evito comparar um número isolado.",
                "points": 20,
                "category": "Argumentação",
                "why": "Você melhora a comparação sem desqualificar o concorrente."
              },
              {
                "title": "Tento igualar a entrada.",
                "description": "Vou direto à condição.",
                "points": 10,
                "category": "Fechamento",
                "why": "Você negocia sem validar equivalência."
              },
              {
                "title": "Digo que nosso produto é superior.",
                "description": "Defendo o empreendimento.",
                "points": 11,
                "category": "Argumentação",
                "why": "A defesa é genérica e pouco conectada ao critério financeiro."
              }
            ]
          },
          {
            "label": "Saída",
            "title": "Ela pede tempo.",
            "narration": "Na porta, Mariana olha mais uma vez para a sala antes de sair.",
            "speaker": "Mariana",
            "dialogue": "Gostei. Quero conversar com a minha mãe antes de decidir.",
            "note": "Ela permanece disponível para ouvir você.",
            "insight": "O fechamento precisa criar direção sem pressão.",
            "question": "Como você fecha a visita?",
            "options": [
              {
                "title": "Combino um retorno com data e preparo uma simulação para ela levar.",
                "description": "Crio avanço concreto e de baixo atrito.",
                "points": 20,
                "category": "Fechamento",
                "why": "Você respeita o processo e mantém direção."
              },
              {
                "title": "Peço uma proposta antes que ela vá.",
                "description": "Tento aproveitar o interesse.",
                "points": 13,
                "category": "Fechamento",
                "why": "Existe intenção, mas o pedido pode ser prematuro."
              },
              {
                "title": "Digo que fico à disposição.",
                "description": "Deixo o próximo passo com a cliente.",
                "points": 9,
                "category": "Conexão",
                "why": "É confortável, mas reduz previsibilidade."
              }
            ]
          }
        ]
      },
      {
        "id": "eduardo",
        "name": "Eduardo Martins",
        "initials": "EM",
        "role": "Investidor de renda",
        "subtitle": "Compra com calculadora na mão e pouca paciência para discurso genérico.",
        "preview": "Objetivo, comparador e focado em aluguel, liquidez e retorno.",
        "goal": "Encontrar boa relação entre aquisição, aluguel e liquidez.",
        "tension": "Comprar caro e ter retorno abaixo do esperado.",
        "scenes": [
          {
            "label": "Chegada",
            "title": "Ele pula a apresentação institucional.",
            "narration": "Eduardo cumprimenta rápido e abre uma planilha no celular.",
            "speaker": "Eduardo",
            "dialogue": "Pode ir direto ao ponto. Quanto esse imóvel costuma alugar?",
            "note": "Ele já anotou preço, condomínio e metragem.",
            "insight": "Com esse perfil, relevância vale mais que volume.",
            "question": "Como você responde?",
            "options": [
              {
                "title": "Apresento uma faixa e explico as variáveis do retorno.",
                "description": "Dado com contexto.",
                "points": 20,
                "category": "Argumentação",
                "why": "Você responde sem transformar estimativa em promessa."
              },
              {
                "title": "Digo que é excelente para investir.",
                "description": "Uso afirmação geral.",
                "points": 7,
                "category": "Argumentação",
                "why": "É vago para um cliente orientado por números."
              },
              {
                "title": "Pergunto qual retorno ele considera aceitável.",
                "description": "Investigo a régua dele.",
                "points": 18,
                "category": "Investigação",
                "why": "Você entende o objetivo real antes de comparar."
              }
            ]
          },
          {
            "label": "Planta",
            "title": "Ele olha menos para decoração e mais para distribuição.",
            "narration": "Eduardo percorre o imóvel rápido e observa a planta.",
            "speaker": "Eduardo",
            "dialogue": "Esse tamanho tem saída fácil para locação?",
            "note": "Ele não demonstra vínculo emocional.",
            "insight": "Ele quer liquidez e aderência de produto.",
            "question": "Qual abordagem faz mais sentido?",
            "options": [
              {
                "title": "Relaciono tipologia, público-alvo e facilidade de locação sem prometer ocupação.",
                "description": "Falo de aderência.",
                "points": 20,
                "category": "Argumentação",
                "why": "Você responde à lógica de liquidez."
              },
              {
                "title": "Destaco acabamento e área de lazer.",
                "description": "Uso diferenciais emocionais.",
                "points": 8,
                "category": "Argumentação",
                "why": "Não é o critério central declarado."
              },
              {
                "title": "Pergunto se ele já possui imóveis alugados.",
                "description": "Entendo experiência e carteira.",
                "points": 17,
                "category": "Investigação",
                "why": "Você calibra a conversa ao perfil real."
              }
            ]
          },
          {
            "label": "Retorno",
            "title": "A calculadora aparece de novo.",
            "narration": "Eduardo divide aluguel estimado pelo valor de aquisição.",
            "speaker": "Eduardo",
            "dialogue": "Então vocês garantem esse retorno?",
            "note": "Ele espera uma resposta objetiva.",
            "insight": "Exagerar aqui destrói credibilidade.",
            "question": "O que você responde?",
            "options": [
              {
                "title": "Não. Explico que é estimativa de mercado e precisa ser analisada individualmente.",
                "description": "Separo dado de garantia.",
                "points": 20,
                "category": "Conexão",
                "why": "Você protege a confiança e demonstra profissionalismo."
              },
              {
                "title": "Sim, porque a região é muito procurada.",
                "description": "Transformo demanda em garantia.",
                "points": 4,
                "category": "Argumentação",
                "why": "Prometer retorno cria expectativa inadequada."
              },
              {
                "title": "Desvio para valorização.",
                "description": "Troco renda por ganho patrimonial.",
                "points": 8,
                "category": "Argumentação",
                "why": "Você evita a pergunta central."
              }
            ]
          },
          {
            "label": "Comparação",
            "title": "Ele coloca dois imóveis lado a lado.",
            "narration": "Eduardo mostra outro anúncio com preço menor.",
            "speaker": "Eduardo",
            "dialogue": "Por que eu não compraria esse outro?",
            "note": "Ele desliza a tela entre dois anúncios.",
            "insight": "A comparação precisa sair do preço isolado.",
            "question": "Como você conduz?",
            "options": [
              {
                "title": "Digo que o nosso é melhor localizado.",
                "description": "Defesa curta.",
                "points": 10,
                "category": "Argumentação",
                "why": "Localização importa, mas é insuficiente."
              },
              {
                "title": "Comparo custo total, aluguel, condomínio, liquidez e demanda.",
                "description": "Faço a comparação completa.",
                "points": 20,
                "category": "Argumentação",
                "why": "Você muda preço para retorno ajustado ao produto."
              },
              {
                "title": "Pergunto qual dos dois ele compraria e por quê.",
                "description": "Faço revelar o critério.",
                "points": 17,
                "category": "Investigação",
                "why": "Você descobre a preferência dominante."
              }
            ]
          },
          {
            "label": "Decisão",
            "title": "Ele fecha a planilha.",
            "narration": "Eduardo bloqueia o celular e resume o que falta.",
            "speaker": "Eduardo",
            "dialogue": "Se os números fecharem, eu avanço.",
            "note": "Ele espera objetividade.",
            "insight": "O fechamento deve virar uma tarefa concreta.",
            "question": "Qual próximo passo?",
            "options": [
              {
                "title": "Envio análise com compra, aluguel, custos e retorno estimado.",
                "description": "Transformo a conversa em decisão mensurável.",
                "points": 20,
                "category": "Fechamento",
                "why": "Você fecha usando a linguagem decisória dele."
              },
              {
                "title": "Digo que fico à disposição.",
                "description": "Encerramento neutro.",
                "points": 8,
                "category": "Conexão",
                "why": "Você perde a oportunidade de criar próximo passo."
              },
              {
                "title": "Peço proposta agora.",
                "description": "Tento converter interesse.",
                "points": 13,
                "category": "Fechamento",
                "why": "Ignora a condição declarada de validar números."
              }
            ]
          }
        ]
      },
      {
        "id": "familia",
        "name": "Rafael & Camila",
        "initials": "RC",
        "role": "Família em upgrade",
        "subtitle": "Precisam de espaço, mas a venda do imóvel atual trava a decisão.",
        "preview": "Casal com filho pequeno, desejo real de mudança e duas transações conectadas.",
        "goal": "Trocar o imóvel atual por um apartamento maior e funcional.",
        "tension": "Depender da venda atual para montar a entrada.",
        "scenes": [
          {
            "label": "Chegada",
            "title": "Eles olham para espaços diferentes.",
            "narration": "Camila observa a cozinha; Rafael vai para a varanda; o filho pergunta sobre o quarto.",
            "speaker": "Camila",
            "dialogue": "A gente precisa de espaço, mas não pode fazer uma loucura.",
            "note": "Rafael pergunta sobre metragem.",
            "insight": "Há desejo de mudança e uma equação financeira por trás.",
            "question": "Como você começa?",
            "options": [
              {
                "title": "Mostro os maiores ambientes.",
                "description": "Vou direto ao benefício.",
                "points": 11,
                "category": "Argumentação",
                "why": "Você acerta o tema, mas não sabe quais espaços são críticos."
              },
              {
                "title": "Pergunto o que mudou na rotina para o imóvel atual deixar de funcionar.",
                "description": "Entendo dor e urgência.",
                "points": 20,
                "category": "Investigação",
                "why": "Você descobre a causa do upgrade."
              },
              {
                "title": "Pergunto quanto vale o imóvel atual.",
                "description": "Entro pela equação financeira.",
                "points": 14,
                "category": "Investigação",
                "why": "É relevante, mas muito transacional para a abertura."
              }
            ]
          },
          {
            "label": "Planta",
            "title": "A rotina aparece na planta.",
            "narration": "Rafael mede mentalmente um espaço para escritório.",
            "speaker": "Rafael",
            "dialogue": "Se eu conseguir trabalhar daqui e nosso filho tiver o quarto dele, já muda tudo.",
            "note": "A conversa é sobre vida cotidiana, não metragem.",
            "insight": "É hora de transformar planta em benefício.",
            "question": "Como você apresenta?",
            "options": [
              {
                "title": "Apresento todas as áreas comuns.",
                "description": "Mostro o pacote completo.",
                "points": 10,
                "category": "Argumentação",
                "why": "Fica amplo demais."
              },
              {
                "title": "Conecto cada ambiente à rotina que eles descreveram.",
                "description": "Transformo característica em solução.",
                "points": 20,
                "category": "Argumentação",
                "why": "Você personaliza a apresentação."
              },
              {
                "title": "Pergunto se pretendem ter mais filhos.",
                "description": "Aprofundo necessidade futura.",
                "points": 17,
                "category": "Investigação",
                "why": "Você testa longevidade da solução."
              }
            ]
          },
          {
            "label": "Trava",
            "title": "A venda atual entra na conversa.",
            "narration": "Rafael olha para Camila antes de responder.",
            "speaker": "Rafael",
            "dialogue": "A gente precisa vender nosso apartamento primeiro.",
            "note": "Camila suspira.",
            "insight": "Existem duas operações conectadas.",
            "question": "Qual é sua melhor resposta?",
            "options": [
              {
                "title": "Mapeio saldo, expectativa, prazo e possibilidades de coordenar as operações.",
                "description": "Transformo a trava em plano.",
                "points": 20,
                "category": "Investigação",
                "why": "Você estrutura a operação."
              },
              {
                "title": "Digo que imóveis bons vendem rápido.",
                "description": "Tento reduzir a preocupação.",
                "points": 7,
                "category": "Conexão",
                "why": "Você oferece conforto sem base suficiente."
              },
              {
                "title": "Sugiro proposta condicionada à venda.",
                "description": "Levo à negociação.",
                "points": 14,
                "category": "Fechamento",
                "why": "Pode ser caminho, mas falta avaliar viabilidade."
              }
            ]
          },
          {
            "label": "Divergência",
            "title": "O casal não concorda.",
            "narration": "Camila se anima com lazer; Rafael olha o condomínio.",
            "speaker": "Rafael",
            "dialogue": "Eu gosto, mas não sei se vale pagar tudo isso.",
            "note": "Camila responde que usaria a estrutura.",
            "insight": "Você precisa lidar com duas prioridades.",
            "question": "Como conduz?",
            "options": [
              {
                "title": "Coloco as duas prioridades na mesa e relaciono custo ao uso real.",
                "description": "Ajudo o casal a construir critério comum.",
                "points": 20,
                "category": "Conexão",
                "why": "Você evita tomar partido."
              },
              {
                "title": "Defendo que a área valoriza o imóvel.",
                "description": "Reforço patrimônio.",
                "points": 11,
                "category": "Argumentação",
                "why": "Não resolve a divergência de uso."
              },
              {
                "title": "Digo que o condomínio está na média.",
                "description": "Normalizo o valor.",
                "points": 9,
                "category": "Argumentação",
                "why": "A média não responde ao critério deles."
              }
            ]
          },
          {
            "label": "Saída",
            "title": "Eles não querem perder o imóvel.",
            "narration": "Camila volta dois passos e olha a sala.",
            "speaker": "Camila",
            "dialogue": "Se desse para organizar a venda do nosso, eu faria isso.",
            "note": "Rafael não discorda.",
            "insight": "Há intenção clara.",
            "question": "Qual próximo passo?",
            "options": [
              {
                "title": "Agendo avaliação do imóvel atual e estruturo um plano de transição.",
                "description": "Coordeno compra e venda.",
                "points": 20,
                "category": "Fechamento",
                "why": "Você reduz a principal incerteza."
              },
              {
                "title": "Envio mais opções maiores.",
                "description": "Amplio o leque.",
                "points": 8,
                "category": "Argumentação",
                "why": "O problema não é falta de opção."
              },
              {
                "title": "Peço proposta no novo primeiro.",
                "description": "Tento garantir a oportunidade.",
                "points": 12,
                "category": "Fechamento",
                "why": "Ignora a dependência declarada."
              }
            ]
          }
        ]
      },
      {
        "id": "helena",
        "name": "Helena Vasconcelos",
        "initials": "HV",
        "role": "Alto padrão patrimonial",
        "subtitle": "Compra menos pelo tamanho e mais pela qualidade da escolha.",
        "preview": "Exigente, discreta e sensível a detalhes. Não gosta de excesso de fala.",
        "goal": "Comprar qualidade de vida e patrimônio.",
        "tension": "Pagar caro por algo comum ou pouco exclusivo.",
        "scenes": [
          {
            "label": "Recepção",
            "title": "Ela percebe tudo.",
            "narration": "Helena olha paisagismo, iluminação, materiais e silêncio do hall.",
            "speaker": "Helena",
            "dialogue": "Quero entender por que esse endereço merece esse preço.",
            "note": "Ela presta atenção à precisão das respostas.",
            "insight": "Excesso de informação diminui valor.",
            "question": "Como você responde?",
            "options": [
              {
                "title": "Pergunto quais atributos tornam um imóvel especial para ela.",
                "description": "Investigo a régua de exclusividade.",
                "points": 20,
                "category": "Investigação",
                "why": "Você descobre o critério antes de justificar preço."
              },
              {
                "title": "Falo sobre valorização da região.",
                "description": "Levo para patrimônio.",
                "points": 13,
                "category": "Argumentação",
                "why": "Falta entender a régua dela."
              },
              {
                "title": "Listo acabamentos e diferenciais.",
                "description": "Entrego informação.",
                "points": 10,
                "category": "Argumentação",
                "why": "Pode soar como catálogo."
              }
            ]
          },
          {
            "label": "Detalhes",
            "title": "Ela toca o acabamento.",
            "narration": "Helena abre uma esquadria e observa a execução.",
            "speaker": "Helena",
            "dialogue": "É bonito. Mas bonito tem em muitos lugares.",
            "note": "Ela espera algo mais profundo.",
            "insight": "O valor precisa vir de coerência, não adjetivo.",
            "question": "Como argumentar?",
            "options": [
              {
                "title": "Relaciono arquitetura, execução, privacidade e posição ao conjunto da experiência.",
                "description": "Construo valor por combinação.",
                "points": 20,
                "category": "Argumentação",
                "why": "Você demonstra singularidade sem superlativos."
              },
              {
                "title": "Digo que é um dos melhores imóveis de Campinas.",
                "description": "Uso autoridade.",
                "points": 8,
                "category": "Argumentação",
                "why": "É amplo e pouco demonstrável."
              },
              {
                "title": "Pergunto quais imóveis ela considerou superiores.",
                "description": "Entendo a referência.",
                "points": 17,
                "category": "Investigação",
                "why": "Você identifica a comparação real."
              }
            ]
          },
          {
            "label": "Preço",
            "title": "Ela não reage ao número.",
            "narration": "Helena apenas olha para a varanda.",
            "speaker": "Helena",
            "dialogue": "Preço alto não me incomoda. Preço sem justificativa, sim.",
            "note": "Ela não pediu desconto.",
            "insight": "Ceder preço cedo pode reduzir valor percebido.",
            "question": "O que fazer?",
            "options": [
              {
                "title": "Retomo os critérios que ela valorizou e mostro como o imóvel entrega cada um.",
                "description": "Justifico pela aderência.",
                "points": 20,
                "category": "Argumentação",
                "why": "Você ancora valor no critério da cliente."
              },
              {
                "title": "Ofereço negociar condição.",
                "description": "Busco facilitar fechamento.",
                "points": 8,
                "category": "Fechamento",
                "why": "Ela não apresentou preço como barreira."
              },
              {
                "title": "Falo sobre ganho futuro.",
                "description": "Levo para valorização.",
                "points": 12,
                "category": "Argumentação",
                "why": "O foco declarado foi qualidade presente."
              }
            ]
          },
          {
            "label": "Silêncio",
            "title": "Ela fica alguns segundos sem falar.",
            "narration": "Helena permanece olhando a sala.",
            "speaker": "Helena",
            "dialogue": "Preciso sentir que esse imóvel não é substituível por qualquer outro.",
            "note": "Ela não olha para você.",
            "insight": "Interromper demais pode atrapalhar.",
            "question": "Como conduz?",
            "options": [
              {
                "title": "Dou espaço e depois pergunto o que ainda falta para ela enxergar singularidade.",
                "description": "Respeito o silêncio.",
                "points": 20,
                "category": "Conexão",
                "why": "Você usa o ritmo como informação."
              },
              {
                "title": "Continuo apresentando diferenciais.",
                "description": "Evito silêncio.",
                "points": 7,
                "category": "Argumentação",
                "why": "O excesso de fala atrapalha."
              },
              {
                "title": "Pergunto se quer fazer proposta.",
                "description": "Testo intenção.",
                "points": 11,
                "category": "Fechamento",
                "why": "Pode ser prematuro."
              }
            ]
          },
          {
            "label": "Decisão",
            "title": "Ela pede material.",
            "narration": "Helena caminha até a saída.",
            "speaker": "Helena",
            "dialogue": "Me mande só o que realmente importa.",
            "note": "Ela enfatiza 'só'.",
            "insight": "O acompanhamento deve preservar curadoria.",
            "question": "Qual próximo passo?",
            "options": [
              
              {
                "title": "Envio todo o material.",
                "description": "Garanto que nada fique de fora.",
                "points": 8,
                "category": "Argumentação",
                "why": "Ignora a preferência por concisão."
              },
              {
                "title": "Envio uma curadoria curta e proponho segunda visita objetiva.",
                "description": "Mantenho consistência.",
                "points": 20,
                "category": "Fechamento",
                "why": "Você acompanha com precisão."
              },
              {
                "title": "Peço proposta imediatamente.",
                "description": "Tento converter.",
                "points": 12,
                "category": "Fechamento",
                "why": "Ela pediu tempo e informação seletiva."
              }
            ]
          }
        ]
      },
      {
        "id": "lucas",
        "name": "Lucas Ferreira",
        "initials": "LF",
        "role": "Profissional de tecnologia",
        "subtitle": "Valoriza praticidade, localização e eficiência de planta.",
        "preview": "Objetivo, conectado e pouco impressionado com metragem pela metragem.",
        "goal": "Morar bem, reduzir deslocamento e manter flexibilidade.",
        "tension": "Pagar por espaços e estruturas que não vai usar.",
        "scenes": [
          {
            "label": "Início",
            "title": "Ele pergunta sobre tempo antes de área.",
            "narration": "Lucas chega de mochila e abre o mapa.",
            "speaker": "Lucas",
            "dialogue": "Quanto tempo daqui até Barão Geraldo em horário normal?",
            "note": "Ele olha a rota no celular.",
            "insight": "Tempo de deslocamento faz parte do valor.",
            "question": "Como você conduz?",
            "options": [
              {
                "title": "Pergunto como é a rotina semanal e quais deslocamentos mais pesam.",
                "description": "Entendo custo de tempo.",
                "points": 20,
                "category": "Investigação",
                "why": "Você transforma localização em benefício mensurável."
              },
              {
                "title": "Dou uma estimativa e continuo.",
                "description": "Respondo e avanço.",
                "points": 12,
                "category": "Argumentação",
                "why": "Perde a chance de entender o peso do critério."
              },
              {
                "title": "Falo sobre valorização do bairro.",
                "description": "Levo para investimento.",
                "points": 8,
                "category": "Argumentação",
                "why": "Não foi o critério apresentado."
              }
            ]
          },
          {
            "label": "Planta",
            "title": "Ele testa funcionalidade.",
            "narration": "Lucas imagina uma mesa de trabalho no canto da sala.",
            "speaker": "Lucas",
            "dialogue": "Trabalho de casa três dias. Esse espaço funciona sem virar improviso?",
            "note": "Ele pergunta sobre acústica e internet.",
            "insight": "Eficiência de uso vale mais que metragem bruta.",
            "question": "Como você responde?",
            "options": [
              {
                "title": "Mostro possibilidades reais de layout conectadas ao home office.",
                "description": "Traduzo planta em uso.",
                "points": 20,
                "category": "Argumentação",
                "why": "Você responde à funcionalidade."
              },
              {
                "title": "Digo que a planta é bem aproveitada.",
                "description": "Uso argumento genérico.",
                "points": 9,
                "category": "Argumentação",
                "why": "Precisa ser demonstrado."
              },
              {
                "title": "Pergunto como ele organiza trabalho e lazer.",
                "description": "Aprofundo uso.",
                "points": 18,
                "category": "Investigação",
                "why": "Você entende melhor a rotina."
              }
            ]
          },
          {
            "label": "Condomínio",
            "title": "Ele questiona o pacote.",
            "narration": "Lucas passa rápido por várias áreas comuns.",
            "speaker": "Lucas",
            "dialogue": "Preciso pagar por tudo isso se quase não vou usar?",
            "note": "Ele destaca coworking e academia.",
            "insight": "O desafio é justificar valor sem vender amenidade inútil.",
            "question": "Qual resposta?",
            "options": [
              {
                "title": "Digo que oferece muita coisa pelo preço.",
                "description": "Defendo o pacote.",
                "points": 9,
                "category": "Argumentação",
                "why": "Quantidade não equivale a relevância."
              },
              {
                "title": "Separo o que ele usaria e relaciono ao custo de conveniência.",
                "description": "Personalizo valor.",
                "points": 20,
                "category": "Argumentação",
                "why": "Você foca no que gera valor para ele."
              },
              {
                "title": "Pergunto quais facilidades ele pagaria para ter no prédio.",
                "description": "Faço construir o critério.",
                "points": 18,
                "category": "Investigação",
                "why": "Você identifica valor percebido."
              }
            ]
          },
          {
            "label": "Tamanho",
            "title": "A objeção vem curta.",
            "narration": "Lucas mede visualmente o quarto.",
            "speaker": "Lucas",
            "dialogue": "É menor do que eu imaginei.",
            "note": "Ele não rejeita; testa funcionalidade.",
            "insight": "Defender metragem é menos eficaz que demonstrar uso.",
            "question": "Como responder?",
            "options": [
              {
                "title": "Pergunto qual atividade ou móvel ele teme não acomodar.",
                "description": "Descubro o impacto real.",
                "points": 20,
                "category": "Investigação",
                "why": "Você transforma objeção subjetiva em necessidade."
              },
              {
                "title": "Digo que hoje os apartamentos estão menores.",
                "description": "Normalizo.",
                "points": 7,
                "category": "Conexão",
                "why": "Não resolve a preocupação funcional."
              },
              {
                "title": "Mostro soluções de marcenaria.",
                "description": "Respondo com eficiência.",
                "points": 16,
                "category": "Argumentação",
                "why": "Pode ser útil se conectado ao problema específico."
              }
            ]
          },
          {
            "label": "Próximo passo",
            "title": "Ele quer decidir com informação.",
            "narration": "Lucas fecha o aplicativo de notas.",
            "speaker": "Lucas",
            "dialogue": "Se fizer sentido na rotina e no custo, eu avanço.",
            "note": "Ele resume a lógica de decisão.",
            "insight": "O fechamento deve organizar os critérios.",
            "question": "Como fechar?",
            "options": [
              {
                "title": "Monto resumo com custo total, deslocamento, usos da planta e próximos passos.",
                "description": "Transformo em decisão comparável.",
                "points": 20,
                "category": "Fechamento",
                "why": "Você organiza exatamente os critérios dele."
              },
              {
                "title": "Peço proposta imediatamente.",
                "description": "Tento converter.",
                "points": 12,
                "category": "Fechamento",
                "why": "Ele explicitou que precisa validar aderência."
              },
              {
                "title": "Envio mais opções parecidas.",
                "description": "Amplio alternativas.",
                "points": 9,
                "category": "Argumentação",
                "why": "Mais opções podem aumentar comparação sem resolver critérios."
              }
            ]
          }
        ]
      }
    ]
  },
  "captacao": {
    "name": "Captação",
    "description": "Escolha um perfil de proprietário. Cada um traz uma resistência diferente para preço, exclusividade ou entrada no mercado.",
    "personas": [
      {
        "id": "carlos",
        "name": "Carlos Mendes",
        "initials": "CM",
        "role": "Preço acima do mercado",
        "subtitle": "Tem convicção de que o imóvel vale mais do que os comparáveis.",
        "preview": "Confiante, emocionalmente ligado ao patrimônio e influenciado por anúncios de vizinhos.",
        "goal": "Vender pelo maior valor possível sem sentir que está perdendo dinheiro.",
        "tension": "Acredita que aceitar preço de mercado significa vender barato.",
        "scenes": [
          {
            "label": "Primeiro encontro",
            "title": "O preço já vem pronto.",
            "narration": "Carlos recebe você e aponta para a varanda antes da avaliação.",
            "speaker": "Carlos",
            "dialogue": "Quero anunciar por R$ 950 mil. O do meu vizinho está por R$ 980 mil.",
            "note": "Ele espera concordância.",
            "insight": "Não confronte e não aceite expectativa sem base.",
            "question": "Como você responde?",
            "options": [
              {
                "title": "Pergunto como chegou ao valor e quais referências usa.",
                "description": "Entendo a lógica primeiro.",
                "points": 20,
                "category": "Conexão",
                "why": "Você reduz confronto e descobre a origem da expectativa."
              },
              {
                "title": "Digo que R$ 950 mil está muito acima.",
                "description": "Corrijo imediatamente.",
                "points": 9,
                "category": "Argumentação",
                "why": "Aumenta resistência antes de construir evidência."
              },
              {
                "title": "Aceito para garantir a captação.",
                "description": "Evito perder o proprietário.",
                "points": 4,
                "category": "Fechamento",
                "why": "Você ganha o anúncio e pode perder liquidez."
              }
            ]
          },
          {
            "label": "Comparáveis",
            "title": "Ele usa anúncios como prova.",
            "narration": "Carlos abre dois portais e mostra imóveis da região.",
            "speaker": "Carlos",
            "dialogue": "Está vendo? Tem imóvel pior pedindo quase um milhão.",
            "note": "Ele destaca preço pedido.",
            "insight": "É preciso separar anúncio de evidência de mercado.",
            "question": "Como conduz?",
            "options": [
              {
                "title": "Explico diferença entre preço anunciado, tempo e valor negociado.",
                "description": "Mudo a referência para liquidez.",
                "points": 20,
                "category": "Argumentação",
                "why": "Você introduz leitura profissional."
              },
              {
                "title": "Mostro um imóvel mais barato e mando baixar.",
                "description": "Uso comparação direta.",
                "points": 10,
                "category": "Argumentação",
                "why": "Pode parecer arbitrário."
              },
              {
                "title": "Pergunto qual prazo considera aceitável para vender.",
                "description": "Conecto preço à urgência.",
                "points": 18,
                "category": "Investigação",
                "why": "Prazo é essencial para estratégia."
              }
            ]
          },
          {
            "label": "Emoção",
            "title": "O imóvel vira memória.",
            "narration": "Carlos conta que reformou quando os filhos ainda moravam ali.",
            "speaker": "Carlos",
            "dialogue": "Eu investi muito aqui. Não vou vender barato.",
            "note": "A fala fica emocional.",
            "insight": "Valor investido e valor de mercado não são iguais.",
            "question": "Como responder?",
            "options": [
              {
                "title": "Reconheço o investimento e separo valor afetivo de mercado.",
                "description": "Valido sem confundir critérios.",
                "points": 20,
                "category": "Conexão",
                "why": "Você preserva respeito e volta à análise."
              },
              {
                "title": "Digo que reforma nunca se recupera.",
                "description": "Trago verdade dura.",
                "points": 8,
                "category": "Argumentação",
                "why": "Pode soar como desvalorização da história."
              },
              {
                "title": "Prometo usar a reforma para justificar o preço.",
                "description": "Transformo emoção em argumento.",
                "points": 11,
                "category": "Argumentação",
                "why": "Pode agregar valor, mas não sustenta qualquer preço."
              }
            ]
          },
          {
            "label": "Estratégia",
            "title": "Ele quer começar alto.",
            "narration": "Carlos cruza os braços após ouvir sua análise.",
            "speaker": "Carlos",
            "dialogue": "Vamos anunciar alto e, se não vender, baixamos depois.",
            "note": "Ele acha que testar não custa.",
            "insight": "A discussão agora é sobre efeito do tempo.",
            "question": "Qual resposta?",
            "options": [
              {
                "title": "Explico superexposição, perda de novidade e reduções sucessivas.",
                "description": "Mostro o custo do teste.",
                "points": 20,
                "category": "Argumentação",
                "why": "Você demonstra que testar preço também tem custo."
              },
              {
                "title": "Aceito e reviso em 60 dias.",
                "description": "Faço concessão com prazo.",
                "points": 12,
                "category": "Fechamento",
                "why": "Pode consumir a melhor janela."
              },
              {
                "title": "Recuso captar imediatamente.",
                "description": "Protejo estratégia.",
                "points": 9,
                "category": "Fechamento",
                "why": "Pode encerrar cedo demais a construção de consenso."
              }
            ]
          },
          {
            "label": "Fechamento",
            "title": "Ele quer garantia.",
            "narration": "Carlos olha sua estimativa antes de assinar.",
            "speaker": "Carlos",
            "dialogue": "Se eu aceitar esse preço, você garante que vende?",
            "note": "Ele transforma recomendação em garantia.",
            "insight": "Credibilidade depende de não prometer o que o mercado decide.",
            "question": "Como fechar?",
            "options": [
              {
                "title": "Não garanto venda; garanto estratégia, acompanhamento e revisão por evidência.",
                "description": "Assumo o que está sob controle.",
                "points": 20,
                "category": "Fechamento",
                "why": "Você estabelece expectativa profissional."
              },
              {
                "title": "Digo que pelo preço certo vende rápido.",
                "description": "Dou segurança máxima.",
                "points": 6,
                "category": "Argumentação",
                "why": "Transforma probabilidade em promessa."
              },
              {
                "title": "Volto para R$ 950 mil.",
                "description": "Uso concessão para captar.",
                "points": 5,
                "category": "Fechamento",
                "why": "Você abandona a estratégia."
              }
            ]
          }
        ]
      },
      {
        "id": "sandra",
        "name": "Sandra Ribeiro",
        "initials": "SR",
        "role": "Resistência à exclusividade",
        "subtitle": "Acredita que mais imobiliárias significam venda mais rápida.",
        "preview": "Pragmática, desconfiada e preocupada em ficar presa a uma única operação.",
        "goal": "Vender rápido com máxima sensação de exposição.",
        "tension": "Acredita que exclusividade reduz suas chances.",
        "scenes": [
          {
            "label": "Abertura",
            "title": "Ela já decidiu divulgar em todo lugar.",
            "narration": "Sandra mostra uma lista de quatro imobiliárias.",
            "speaker": "Sandra",
            "dialogue": "Quanto mais gente anunciando, mais rápido aparece comprador, certo?",
            "note": "Ela trata a lógica como óbvia.",
            "insight": "A defesa deve partir do benefício do proprietário.",
            "question": "Como responder?",
            "options": [
              {
                "title": "Pergunto o que ela espera ganhar com vários anúncios.",
                "description": "Entendo a expectativa.",
                "points": 20,
                "category": "Investigação",
                "why": "Você descobre se é alcance, velocidade ou confiança."
              },
              {
                "title": "Digo que exclusividade é muito melhor.",
                "description": "Defendo diretamente.",
                "points": 8,
                "category": "Argumentação",
                "why": "Pode soar como conveniência da imobiliária."
              },
              {
                "title": "Aceito sem exclusividade.",
                "description": "Evito perder o imóvel.",
                "points": 9,
                "category": "Fechamento",
                "why": "Você não demonstra valor nem estratégia."
              }
            ]
          },
          {
            "label": "Exposição",
            "title": "Ela quer muitos anúncios.",
            "narration": "Sandra fala em fotos e preços diferentes para testar.",
            "speaker": "Sandra",
            "dialogue": "Assim a gente descobre qual anúncio funciona.",
            "note": "Ela vê variação como experimento.",
            "insight": "É hora de falar de percepção de mercado.",
            "question": "Qual argumento?",
            "options": [
              {
                "title": "Explico como duplicidade e divergência geram desconfiança e sensação de encalhe.",
                "description": "Falo da percepção do comprador.",
                "points": 20,
                "category": "Argumentação",
                "why": "Você mostra um risco concreto."
              },
              {
                "title": "Digo que os portais penalizam duplicidade.",
                "description": "Uso argumento técnico.",
                "points": 13,
                "category": "Argumentação",
                "why": "É relevante, mas não é toda a estratégia."
              },
              {
                "title": "Sugiro mesmo preço em todos.",
                "description": "Organizo a multiplicidade.",
                "points": 12,
                "category": "Fechamento",
                "why": "Reduz ruído, mas não resolve gestão de leads."
              }
            ]
          },
          {
            "label": "Controle",
            "title": "Ela teme ficar dependente.",
            "narration": "Sandra cruza os braços ao ouvir sobre contrato.",
            "speaker": "Sandra",
            "dialogue": "E se vocês não fizerem nada? Eu fico presa?",
            "note": "Essa é a objeção central.",
            "insight": "A resposta precisa mostrar prestação de contas.",
            "question": "Como conduzir?",
            "options": [
              {
                "title": "Apresento plano, indicadores, frequência de retorno e critérios claros.",
                "description": "Transformo confiança em processo.",
                "points": 20,
                "category": "Conexão",
                "why": "Você reduz dependência percebida."
              },
              {
                "title": "Ofereço contrato curto.",
                "description": "Reduzo risco percebido.",
                "points": 14,
                "category": "Fechamento",
                "why": "Ajuda, mas funciona melhor com critérios."
              },
              {
                "title": "Digo que isso nunca acontece.",
                "description": "Dou garantia institucional.",
                "points": 6,
                "category": "Argumentação",
                "why": "É amplo e pouco verificável."
              }
            ]
          },
          {
            "label": "Lead",
            "title": "Ela pergunta quem fica com o comprador.",
            "narration": "Sandra imagina duas imobiliárias trazendo a mesma pessoa.",
            "speaker": "Sandra",
            "dialogue": "E se duas pessoas trouxerem o mesmo comprador?",
            "note": "Ela percebe a complexidade.",
            "insight": "Agora vale mostrar governança.",
            "question": "Qual resposta?",
            "options": [
              {
                "title": "Explico como centralização melhora histórico, retorno e negociação.",
                "description": "Mostro coordenação.",
                "points": 20,
                "category": "Argumentação",
                "why": "Você conecta exclusividade a gestão."
              },
              {
                "title": "Digo que isso se resolve entre as imobiliárias.",
                "description": "Simplifico.",
                "points": 8,
                "category": "Conexão",
                "why": "Não demonstra controle."
              },
              {
                "title": "Falo que com exclusividade o problema desaparece.",
                "description": "Uso para fechar.",
                "points": 14,
                "category": "Fechamento",
                "why": "Fica mais forte com explicação de processo."
              }
            ]
          },
          {
            "label": "Decisão",
            "title": "Ela quer transparência.",
            "narration": "Sandra lê o prazo do contrato.",
            "speaker": "Sandra",
            "dialogue": "Eu topo, desde que consiga acompanhar tudo.",
            "note": "A resistência virou condição.",
            "insight": "O melhor fechamento é operacional.",
            "question": "Como fechar?",
            "options": [
              {
                "title": "Defino calendário, indicadores e canal de atualização.",
                "description": "Formalizo transparência.",
                "points": 20,
                "category": "Fechamento",
                "why": "Você resolve a objeção principal com processo."
              },
              {
                "title": "Digo que pode me chamar quando quiser.",
                "description": "Ofereço disponibilidade.",
                "points": 10,
                "category": "Conexão",
                "why": "Disponibilidade não substitui prestação de contas."
              },
              {
                "title": "Reduzo o prazo do contrato.",
                "description": "Faço concessão.",
                "points": 13,
                "category": "Fechamento",
                "why": "Não atende totalmente à necessidade."
              }
            ]
          }
        ]
      },
      {
        "id": "antonio",
        "name": "Antônio Prado",
        "initials": "AP",
        "role": "Imóvel com pendências",
        "subtitle": "Quer vender, mas documentação e manutenção atrapalham.",
        "preview": "Tem pressa e tende a minimizar problemas que podem travar a negociação.",
        "goal": "Colocar o imóvel no mercado rapidamente.",
        "tension": "Não quer gastar tempo ou dinheiro antes do anúncio.",
        "scenes": [
          {
            "label": "Vistoria",
            "title": "A pendência aparece cedo.",
            "narration": "Você percebe infiltração recente próxima à janela.",
            "speaker": "Antônio",
            "dialogue": "Isso é pouca coisa. Nem precisa mencionar.",
            "note": "Ele tenta seguir rápido.",
            "insight": "Transparência e estratégia precisam andar juntas.",
            "question": "Como agir?",
            "options": [
              {
                "title": "Investigo a origem e defino como tratar antes da divulgação.",
                "description": "Transformo o problema em plano.",
                "points": 20,
                "category": "Investigação",
                "why": "Você evita esconder algo que pode comprometer negociação."
              },
              {
                "title": "Concordo e fotografo outro ângulo.",
                "description": "Evito enfraquecer o anúncio.",
                "points": 3,
                "category": "Fechamento",
                "why": "Ocultar aumenta risco de perda de confiança."
              },
              {
                "title": "Digo que precisa de reforma completa.",
                "description": "Amplio a preocupação.",
                "points": 8,
                "category": "Argumentação",
                "why": "Você conclui sem diagnóstico."
              }
            ]
          },
          {
            "label": "Documentos",
            "title": "A matrícula não está atualizada.",
            "narration": "Surge uma divergência de área.",
            "speaker": "Antônio",
            "dialogue": "Isso nunca deu problema. Dá para anunciar assim mesmo?",
            "note": "Ele teme atraso.",
            "insight": "Captação também exige gestão de risco documental.",
            "question": "Como responder?",
            "options": [
              {
                "title": "Mapeio a pendência e explico impacto em financiamento e escritura.",
                "description": "Dou contexto.",
                "points": 20,
                "category": "Argumentação",
                "why": "Você conecta documento à venda."
              },
              {
                "title": "Anuncio primeiro e resolvo depois.",
                "description": "Priorizo velocidade.",
                "points": 5,
                "category": "Fechamento",
                "why": "Pode gerar proposta inviável."
              },
              {
                "title": "Digo que sem documento perfeito não vende.",
                "description": "Uso postura rígida.",
                "points": 9,
                "category": "Argumentação",
                "why": "Nem toda pendência impede anúncio."
              }
            ]
          },
          {
            "label": "Preparação",
            "title": "Ele não quer investir antes.",
            "narration": "Você sugere pequenos reparos e limpeza.",
            "speaker": "Antônio",
            "dialogue": "Não quero colocar mais dinheiro nisso antes de receber.",
            "note": "Ele vê gasto como perda.",
            "insight": "Converse sobre retorno da preparação.",
            "question": "Como conduzir?",
            "options": [
              {
                "title": "Priorizo intervenções baratas que reduzem objeções.",
                "description": "Faço lista mínima estratégica.",
                "points": 20,
                "category": "Argumentação",
                "why": "Você respeita limite e melhora liquidez."
              },
              {
                "title": "Digo que sem reforma não vende.",
                "description": "Pressiono.",
                "points": 7,
                "category": "Argumentação",
                "why": "É absoluto e possivelmente incorreto."
              },
              {
                "title": "Não sugiro nenhuma melhoria.",
                "description": "Evito resistência.",
                "points": 8,
                "category": "Conexão",
                "why": "Você deixa valor comercial na mesa."
              }
            ]
          },
          {
            "label": "Preço",
            "title": "Ele quer compensar defeitos.",
            "narration": "Antônio sugere anunciar acima para dar desconto depois.",
            "speaker": "Antônio",
            "dialogue": "Coloca acima e depois a gente negocia.",
            "note": "Ele trata defeito como margem.",
            "insight": "Preço e condição devem ser coerentes desde o lançamento.",
            "question": "Qual abordagem?",
            "options": [
              {
                "title": "Mostro como a condição entra na comparação e defendo preço coerente.",
                "description": "Alinho posicionamento ao produto.",
                "points": 20,
                "category": "Argumentação",
                "why": "Você reduz atrito e evita correção tardia."
              },
              {
                "title": "Aceito e deixo margem de 10%.",
                "description": "Crio barganha.",
                "points": 10,
                "category": "Fechamento",
                "why": "Pode aumentar tempo e objeções."
              },
              {
                "title": "Sugiro anunciar barato.",
                "description": "Vou para o outro extremo.",
                "points": 9,
                "category": "Fechamento",
                "why": "Competitivo não significa baixo."
              }
            ]
          },
          {
            "label": "Plano",
            "title": "Ele pede o mínimo necessário.",
            "narration": "Antônio aceita resolver o essencial.",
            "speaker": "Antônio",
            "dialogue": "Me diz o mínimo que preciso fazer para colocar isso direito no mercado.",
            "note": "A resistência virou pedido de orientação.",
            "insight": "O fechamento é um plano curto e executável.",
            "question": "Como fechar?",
            "options": [
              {
                "title": "Entrego checklist: documento, reparo essencial, preparação e data.",
                "description": "Crio sequência clara.",
                "points": 20,
                "category": "Fechamento",
                "why": "Você reduz incerteza."
              },
              {
                "title": "Anuncio imediatamente e ajusto no caminho.",
                "description": "Maximizo velocidade.",
                "points": 8,
                "category": "Fechamento",
                "why": "Ignora pendências identificadas."
              },
              {
                "title": "Peço que resolva tudo e me procure depois.",
                "description": "Evito assumir processo.",
                "points": 7,
                "category": "Conexão",
                "why": "Você perde a chance de conduzir a preparação."
              }
            ]
          }
        ]
      },
      {
        "id": "irmaos",
        "name": "Paula & Renato",
        "initials": "PR",
        "role": "Imóvel de família",
        "subtitle": "Dois proprietários, duas expectativas e uma decisão só.",
        "preview": "Um quer vender rápido; o outro tem vínculo afetivo e quer esperar.",
        "goal": "Resolver a venda do imóvel herdado.",
        "tension": "Urgência financeira versus valor emocional.",
        "scenes": [
          {
            "label": "Reunião",
            "title": "Eles discordam antes da avaliação.",
            "narration": "Paula fala em vender rápido; Renato pede calma.",
            "speaker": "Paula",
            "dialogue": "Eu queria resolver isso logo.",
            "note": "Renato olha para a janela.",
            "insight": "Antes do preço, crie critério comum.",
            "question": "Como começar?",
            "options": [
              {
                "title": "Pergunto separadamente o que cada um considera uma boa venda.",
                "description": "Faço aparecer critérios.",
                "points": 20,
                "category": "Investigação",
                "why": "Você evita assumir que querem a mesma coisa."
              },
              {
                "title": "Apresento meu preço imediatamente.",
                "description": "Trago objetividade.",
                "points": 10,
                "category": "Argumentação",
                "why": "Pode intensificar o conflito."
              },
              {
                "title": "Digo que decidam entre eles primeiro.",
                "description": "Evito o conflito.",
                "points": 7,
                "category": "Conexão",
                "why": "Você perde a oportunidade de facilitar consenso."
              }
            ]
          },
          {
            "label": "Memória",
            "title": "Renato abre um armário antigo.",
            "narration": "Ele conta histórias da infância no imóvel.",
            "speaker": "Renato",
            "dialogue": "Não quero que pareça que estamos nos desfazendo disso por qualquer valor.",
            "note": "Paula fica em silêncio.",
            "insight": "O emocional precisa ser reconhecido.",
            "question": "Como responder?",
            "options": [
              {
                "title": "Reconheço a história e conecto preservação de valor a estratégia.",
                "description": "Conecto emoção e técnica.",
                "points": 20,
                "category": "Conexão",
                "why": "Você valida a memória sem abandonar a venda."
              },
              {
                "title": "Digo que comprador não paga pela história.",
                "description": "Trago racionalidade.",
                "points": 6,
                "category": "Argumentação",
                "why": "Gera resistência desnecessária."
              },
              {
                "title": "Sugiro preço alto para respeitar a história.",
                "description": "Concedo ao vínculo.",
                "points": 8,
                "category": "Argumentação",
                "why": "Mistura afetivo com preço."
              }
            ]
          },
          {
            "label": "Urgência",
            "title": "Paula revela algo em particular.",
            "narration": "Ela conta que precisa do dinheiro.",
            "speaker": "Paula",
            "dialogue": "Eu não queria falar na frente dele, mas preciso vender.",
            "note": "A informação muda o prazo.",
            "insight": "Use o dado sem quebrar confiança.",
            "question": "Como agir?",
            "options": [
              {
                "title": "Acolho e proponho estratégia de prazo sem expor detalhes pessoais.",
                "description": "Uso o dado com ética.",
                "points": 20,
                "category": "Conexão",
                "why": "Você protege confiança e incorpora urgência."
              },
              {
                "title": "Uso a urgência para pressionar Renato.",
                "description": "Transformo em pressão.",
                "points": 5,
                "category": "Fechamento",
                "why": "Quebra confiança."
              },
              {
                "title": "Ignoro para não me envolver.",
                "description": "Mantenho neutralidade.",
                "points": 8,
                "category": "Conexão",
                "why": "Impede estratégia aderente."
              }
            ]
          },
          {
            "label": "Preço",
            "title": "Os dois olham a mesma planilha.",
            "narration": "Você apresenta cenários de preço e prazo.",
            "speaker": "Renato",
            "dialogue": "Então quanto mais alto, maior a chance de demorar?",
            "note": "Ele formula a relação preço-prazo.",
            "insight": "O consenso começa a surgir.",
            "question": "Como responder?",
            "options": [
              {
                "title": "Mostro cenários como escolhas de estratégia.",
                "description": "Faço ambos escolherem o equilíbrio.",
                "points": 20,
                "category": "Argumentação",
                "why": "Você reduz personalização do conflito."
              },
              {
                "title": "Digo que meu preço é o único correto.",
                "description": "Assumo autoridade.",
                "points": 8,
                "category": "Argumentação",
                "why": "Ainda existe estratégia e contexto."
              },
              {
                "title": "Peço que escolham um número.",
                "description": "Delego a decisão.",
                "points": 9,
                "category": "Fechamento",
                "why": "Você perde o papel consultivo."
              }
            ]
          },
          {
            "label": "Acordo",
            "title": "Eles precisam fechar juntos.",
            "narration": "Paula e Renato concordam com uma faixa.",
            "speaker": "Renato",
            "dialogue": "Quero acompanhar de perto.",
            "note": "Paula concorda.",
            "insight": "O fechamento precisa dar visibilidade para ambos.",
            "question": "Como finalizar?",
            "options": [
              {
                "title": "Defino estratégia, responsáveis e rotina de atualização para os dois.",
                "description": "Crio governança.",
                "points": 20,
                "category": "Fechamento",
                "why": "Você reduz novo conflito."
              },
              {
                "title": "Escolho Paula como contato principal.",
                "description": "Simplifico comunicação.",
                "points": 8,
                "category": "Fechamento",
                "why": "Pode criar assimetria."
              },
              {
                "title": "Crio um grupo e deixo que decidam tudo por ali.",
                "description": "Centralizo canal.",
                "points": 11,
                "category": "Conexão",
                "why": "Falta definir processo e responsabilidade."
              }
            ]
          }
        ]
      },
      {
        "id": "fernando",
        "name": "Fernando Lima",
        "initials": "FL",
        "role": "Só quer testar o mercado",
        "subtitle": "Não tem urgência e quer anunciar para ver o que acontece.",
        "preview": "Curioso, sem decisão real e disposto a aceitar apenas proposta excepcional.",
        "goal": "Descobrir quanto o mercado pagaria sem assumir compromisso real.",
        "tension": "Quer exposição, mas não quer compromisso com preço ou prazo.",
        "scenes": [
          {
            "label": "Abertura",
            "title": "Ele não sabe se quer vender.",
            "narration": "Fernando fala de anúncios semelhantes.",
            "speaker": "Fernando",
            "dialogue": "Se aparecer alguém pagando bem, eu vendo. Senão, fico com ele.",
            "note": "Ele parece confortável com qualquer resultado.",
            "insight": "Antes de captar, meça motivação real.",
            "question": "Como começar?",
            "options": [
              {
                "title": "Apresento minha avaliação.",
                "description": "Dou referência.",
                "points": 11,
                "category": "Argumentação",
                "why": "Preço não resolve falta de intenção."
              },
              {
                "title": "Pergunto o que faria ele realmente decidir vender hoje.",
                "description": "Testo motivação.",
                "points": 20,
                "category": "Investigação",
                "why": "Você descobre se existe condição objetiva."
              },
              {
                "title": "Aceito anunciar.",
                "description": "Aproveito o imóvel no portfólio.",
                "points": 7,
                "category": "Fechamento",
                "why": "Pode consumir esforço sem decisão real."
              }
            ]
          },
          {
            "label": "Preço",
            "title": "Ele quer uma proposta excepcional.",
            "narration": "Fernando ouve sua análise e sorri.",
            "speaker": "Fernando",
            "dialogue": "Por esse valor eu não vendo. Só bem acima.",
            "note": "Ele confirma que o teste é opcional.",
            "insight": "O imóvel pode não estar realmente disponível.",
            "question": "Como responder?",
            "options": [
              {
                "title": "Pergunto qual número mudaria a decisão e por quê.",
                "description": "Defino condição real.",
                "points": 20,
                "category": "Investigação",
                "why": "Você transforma intenção vaga em critério."
              },
              {
                "title": "Anuncio acima e testo.",
                "description": "Adapto ao desejo.",
                "points": 8,
                "category": "Fechamento",
                "why": "Pode não representar oferta real."
              },
              {
                "title": "Tento convencê-lo a vender pelo mercado.",
                "description": "Busco criar motivação.",
                "points": 10,
                "category": "Argumentação",
                "why": "Motivação não nasce só de preço."
              }
            ]
          },
          {
            "label": "Visitas",
            "title": "Ele impõe restrições.",
            "narration": "Fernando aceita visita só duas vezes por mês.",
            "speaker": "Fernando",
            "dialogue": "Não quero gente entrando toda hora.",
            "note": "A baixa motivação aparece na operação.",
            "insight": "Oferta sem disponibilidade perde conversão.",
            "question": "Como conduzir?",
            "options": [
              {
                "title": "Explico o impacto e proponho processo filtrado de visitas.",
                "description": "Compatibilizo conforto e venda.",
                "points": 20,
                "category": "Argumentação",
                "why": "Você mostra consequência e alternativa."
              },
              {
                "title": "Digo que sem liberdade não capto.",
                "description": "Estabeleço limite.",
                "points": 11,
                "category": "Fechamento",
                "why": "Talvez seja cedo antes de testar solução."
              },
              {
                "title": "Aceito qualquer restrição.",
                "description": "Respeito o proprietário.",
                "points": 8,
                "category": "Conexão",
                "why": "Não cria condição comercial adequada."
              }
            ]
          },
          {
            "label": "Proposta",
            "title": "Ele não quer compromisso.",
            "narration": "Você explica que uma proposta real exige resposta clara.",
            "speaker": "Fernando",
            "dialogue": "Aí eu penso. Não prometo nada.",
            "note": "A oferta continua indefinida.",
            "insight": "O problema é ausência de intenção firme.",
            "question": "Como agir?",
            "options": [
              {
                "title": "Alinho critérios mínimos de aceite antes de divulgar.",
                "description": "Defino regras.",
                "points": 20,
                "category": "Fechamento",
                "why": "Você protege compradores e equipe."
              },
              {
                "title": "Anuncio e vejo no que dá.",
                "description": "Deixo para depois.",
                "points": 6,
                "category": "Fechamento",
                "why": "Transfere indefinição ao mercado."
              },
              {
                "title": "Pressiono para assinar compromisso.",
                "description": "Busco formalizar.",
                "points": 9,
                "category": "Fechamento",
                "why": "Formalizar sem motivação não resolve."
              }
            ]
          },
          {
            "label": "Decisão",
            "title": "Talvez a melhor captação seja não captar.",
            "narration": "Fernando segue sem prazo, preço realista ou disponibilidade.",
            "speaker": "Fernando",
            "dialogue": "Então coloca lá e a gente vê.",
            "note": "Nada essencial mudou.",
            "insight": "Qualificação também é saber dizer não.",
            "question": "Qual decisão profissional?",
            "options": [
              {
                "title": "Prefiro não anunciar agora e deixo critérios para retomarmos depois.",
                "description": "Qualifico a oportunidade.",
                "points": 20,
                "category": "Fechamento",
                "why": "Você protege tempo e reputação."
              },
              {
                "title": "Anuncio muito alto para filtrar curiosos.",
                "description": "Adapto ao proprietário.",
                "points": 7,
                "category": "Argumentação",
                "why": "Cria oferta pouco aderente ao mercado."
              },
              {
                "title": "Capto porque todo imóvel gera lead.",
                "description": "Priorizo volume.",
                "points": 5,
                "category": "Fechamento",
                "why": "Volume sem oferta real degrada operação."
              }
            ]
          }
        ]
      }
    ]
  }
};

/* /- ESTADO DO JOGO -/ */
const state={
  teamKey:null,personaId:null,sceneIndex:0,selectedOption:null,total:0,
  scores:createEmptyScores(),history:[]
};

function createEmptyScores(){
  return Object.fromEntries(competencies.map(c=>[c,0]));
}

/* /- ELEMENTOS -/ */
const el={
  screens:document.querySelectorAll(".screen"),
  teamScreen:document.getElementById("teamScreen"),
  personaScreen:document.getElementById("personaScreen"),
  gameScreen:document.getElementById("gameScreen"),
  resultScreen:document.getElementById("resultScreen"),
  topStatus:document.getElementById("topStatus"),
  personaTeamTitle:document.getElementById("personaTeamTitle"),
  personaTeamDescription:document.getElementById("personaTeamDescription"),
  personaGrid:document.getElementById("personaGrid"),
  changeTeamBtn:document.getElementById("changeTeamBtn"),
  activePersonaInitials:document.getElementById("activePersonaInitials"),
  activePersonaRole:document.getElementById("activePersonaRole"),
  activePersonaName:document.getElementById("activePersonaName"),
  roundCounter:document.getElementById("roundCounter"),
  storyLabel:document.getElementById("storyLabel"),
  storyTitle:document.getElementById("storyTitle"),
  storyNarration:document.getElementById("storyNarration"),
  dialogueSpeaker:document.getElementById("dialogueSpeaker"),
  dialogueText:document.getElementById("dialogueText"),
  sceneNote:document.getElementById("sceneNote"),
  questionTitle:document.getElementById("questionTitle"),
  choiceStatus:document.getElementById("choiceStatus"),
  choiceList:document.getElementById("choiceList"),
  confirmChoiceBtn:document.getElementById("confirmChoiceBtn"),
  leaveGameBtn:document.getElementById("leaveGameBtn"),
  scoreList:document.getElementById("scoreList"),
  contextGoal:document.getElementById("contextGoal"),
  contextTension:document.getElementById("contextTension"),
  sceneInsight:document.getElementById("sceneInsight"),
  resultProfileName:document.getElementById("resultProfileName"),
  resultProfileText:document.getElementById("resultProfileText"),
  resultPersonaName:document.getElementById("resultPersonaName"),
  resultTotal:document.getElementById("resultTotal"),
  historyList:document.getElementById("historyList"),
  competencyResult:document.getElementById("competencyResult"),
  newPersonaBtn:document.getElementById("newPersonaBtn"),
  restartSameBtn:document.getElementById("restartSameBtn")
};

function showScreen(screen){
  el.screens.forEach(s=>s.classList.remove("active"));
  screen.classList.add("active");
  window.scrollTo({top:0,behavior:"smooth"});
}
function makeAvatarSvg(label, background="#36434f", color="#ffffff"){
  const initials = (label || "?")
    .trim()
    .split(/\s+/)
    .map(part => part[0])
    .slice(0,2)
    .join("")
    .toUpperCase() || "?";

  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120">
      <rect width="120" height="120" rx="24" fill="${background}"/>
      <text x="50%" y="54%" text-anchor="middle" dominant-baseline="middle" fill="${color}" font-size="38" font-family="Arial, Helvetica, sans-serif" font-weight="700">${initials}</text>
    </svg>
  `;

  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}
function avatarMarkup(item, className="avatar-mini"){
  const name = item?.name || item?.label || "?";
  const src = personaPhotos[item?.id] || item?.photo || item?.icon || makeAvatarSvg(name, item?.color || "#36434f", item?.textColor || "#ffffff");
  return `<img class="${className} avatar-image" src="${src}" alt="${name}" loading="lazy">`;
}
function team(){return teams[state.teamKey]}
function persona(){return team().personas.find(p=>p.id===state.personaId)}
function scene(){return persona().scenes[state.sceneIndex]}

/* /- TELA 1: TIME -/ */
document.querySelectorAll("[data-team]").forEach(btn=>{
  const label = btn.querySelector("h2")?.textContent?.trim() || "Time";
  btn.dataset.icon = teamPhotos[btn.dataset.team] || makeAvatarSvg(label, btn.dataset.team === "corretoria" ? "#36434f" : "#034CAE");
  const teamIcon = btn.querySelector(".team-icon");
  if (teamIcon) teamIcon.innerHTML = `<img class="team-icon-image" src="${btn.dataset.icon}" alt="${label}">`;
  btn.addEventListener("click",()=>{
    state.teamKey=btn.dataset.team;
    renderPersonas();
    showScreen(el.personaScreen);
  });
});

/* /- TELA 2: PERSONAS -/ */
function renderPersonas(){
  const t=team();
  el.personaTeamTitle.textContent=`Escolha uma persona de ${t.name}`;
  el.personaTeamDescription.textContent=t.description;
  el.topStatus.textContent=`${t.name} · escolha a persona`;
  el.personaGrid.innerHTML="";
  t.personas.forEach(p=>{
    const b=document.createElement("button");
    b.type="button";
    b.className="persona-card";
    b.innerHTML=`
      ${avatarMarkup(p, "avatar-mini")}
      <div class="type">${p.role}</div>
      <h3>${p.name}</h3>
      <div class="subtitle">${p.subtitle}</div>
      <p>${p.preview}</p>
      <span class="select-persona">Escolher persona →</span>`;
    b.addEventListener("click",()=>startPersona(p.id));
    el.personaGrid.appendChild(b);
  });
}

el.changeTeamBtn.addEventListener("click",()=>{
  state.teamKey=null;state.personaId=null;
  el.topStatus.textContent="Escolha seu time";
  showScreen(el.teamScreen);
});

/* /- INÍCIO DO QUIZ -/ */
function startPersona(id){
  state.personaId=id;state.sceneIndex=0;state.selectedOption=null;state.total=0;
  state.scores=createEmptyScores();state.history=[];
  const p=persona();
  el.activePersonaInitials.innerHTML = avatarMarkup(p, "persona-avatar-image");
  el.activePersonaRole.textContent=p.role;
  el.activePersonaName.textContent=p.name;
  el.contextGoal.textContent=p.goal;
  el.contextTension.textContent=p.tension;
  el.topStatus.textContent=`${team().name} · ${p.name}`;
  renderScene();renderScores();showScreen(el.gameScreen);
}

/* /- GAME NOVEL / NARRATIVA -/ */
function renderScene(){
  const p=persona(),s=scene();
  el.roundCounter.textContent=`${state.sceneIndex+1} / ${p.scenes.length}`;
  el.storyLabel.textContent=s.label;
  el.storyTitle.textContent=s.title;
  el.storyNarration.textContent=s.narration;
  el.dialogueSpeaker.textContent=s.speaker;
  el.dialogueText.textContent=s.dialogue;
  el.sceneNote.textContent=s.note;
  el.sceneInsight.textContent=s.insight;
  el.questionTitle.textContent=s.question;
  state.selectedOption=null;
  el.confirmChoiceBtn.disabled=true;
  el.choiceStatus.textContent="Selecione uma resposta.";
  el.choiceList.innerHTML="";
  s.options.forEach((o,i)=>{
    const b=document.createElement("button");
    b.type="button";b.className="choice";
    b.innerHTML=`<strong>${o.title}</strong><span>${o.description}</span>`;
    b.addEventListener("click",()=>{
      state.selectedOption=i;
      [...el.choiceList.children].forEach(x=>x.classList.remove("selected"));
      b.classList.add("selected");
      el.confirmChoiceBtn.disabled=false;
      el.choiceStatus.textContent="Escolha pronta para confirmar.";
    });
    el.choiceList.appendChild(b);
  });
}

/* /- SCORE -/ */
function renderScores(){
  el.scoreList.innerHTML=competencies.map(c=>{
    const score=state.scores[c]||0;
    const width=Math.min(100,score*2.5); // /- ESCALA VISUAL DA BARRA -/
    return `<div class="score-row"><span>${c}</span><strong>${score}</strong>
    <div class="score-bar"><i style="width:${width}%"></i></div></div>`;
  }).join("");
}

/* /- CONFIRMAR ESCOLHA / SOMA DE PONTOS -/ */
el.confirmChoiceBtn.addEventListener("click",()=>{
  if(state.selectedOption===null)return;
  const s=scene(),o=s.options[state.selectedOption];
  state.total+=o.points;                    // /- SOMA TOTAL -/
  state.scores[o.category]+=o.points;       // /- SOMA POR TÓPICO -/
  state.history.push({
    scene:s.label,choice:o.title,points:o.points,category:o.category,why:o.why
  });
  renderScores();
  if(state.sceneIndex===persona().scenes.length-1) finishGame();
  else {state.sceneIndex++;renderScene();}
});

el.leaveGameBtn.addEventListener("click",()=>{renderPersonas();showScreen(el.personaScreen)});

/* =========================================================
   /- PERFIS FINAIS -/
   ========================================================= */
function resultProfile(){
  const strongest=[...competencies].sort((a,b)=>state.scores[b]-state.scores[a])[0];
  if(state.total>=88)return{name:"Consultor Estratégico",text:"Você manteve alta consistência ao longo da conversa, equilibrando leitura de contexto, diagnóstico, argumentação e avanço comercial."};
  if(strongest==="Conexão")return{name:"Construtor de Confiança",text:"Seu padrão priorizou leitura humana, ritmo e segurança. O próximo passo é transformar conexão em direção comercial mais clara."};
  if(strongest==="Investigação")return{name:"Consultor Investigativo",text:"Você tende a descobrir o problema antes de responder. O próximo ganho está em converter diagnóstico em argumento e próximo passo."};
  if(strongest==="Argumentação")return{name:"Argumentador de Valor",text:"Você demonstra força ao contextualizar produto, preço e estratégia. Garanta que cada argumento esteja ligado ao critério real da persona."};
  if(strongest==="Fechamento")return{name:"Condutor de Decisão",text:"Você busca transformar conversa em ação. O ponto de atenção é calibrar o momento do fechamento ao estágio da pessoa."};
  return{name:"Consultor em Evolução",text:"Seu resultado ficou distribuído entre competências. Use a próxima rodada para tornar suas decisões mais consistentes."};
}

/* /- FAIXAS DAS COMPETÊNCIAS -/ */
function competencyReading(score){
  if(score>=30)return"Competência muito presente e consistente nas suas decisões.";
  if(score>=20)return"Competência bem representada ao longo da simulação.";
  if(score>=10)return"Competência utilizada de forma pontual.";
  return"Competência pouco acionada nesta rodada.";
}

/* /- FIM DO QUIZ / EXPLICAÇÃO DO RESULTADO -/ */
function finishGame(){
  const p=persona(),r=resultProfile();
  el.resultProfileName.textContent=r.name;
  el.resultProfileText.textContent=r.text;
  el.resultPersonaName.textContent=`${p.name} · ${p.role}`;
  el.resultTotal.textContent=state.total;

  el.historyList.innerHTML=state.history.map((h,i)=>`
    <div class="history-card">
      <div class="history-top">
        <strong>${i+1}. ${h.scene} · ${h.choice}</strong>
        <span class="history-points">+${h.points} · ${h.category}</span>
      </div>
      <p>${h.why}</p>
    </div>`).join("");

  el.competencyResult.innerHTML=competencies.map(c=>{
    const score=state.scores[c]||0;
    return `<div class="competency-card"><strong><span>${c}</span><span>${score} pts</span></strong><p>${competencyReading(score)}</p></div>`;
  }).join("");

  el.topStatus.textContent="Resultado da simulação";
  showScreen(el.resultScreen);
}

el.newPersonaBtn.addEventListener("click",()=>{renderPersonas();showScreen(el.personaScreen)});
el.restartSameBtn.addEventListener("click",()=>startPersona(state.personaId));
