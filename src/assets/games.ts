export interface Game {
  name: string;
  description: string;
  link?: string;
  duration: 'fast' | 'medium' | 'long' | 'variable';
  format: 'both' | 'online' | 'offline';
  minNumberOfPlayers?: number;
  maxNumberOfPlayers?: number;
  tags?: Array<string>;
}

export const GamesList: Array<Game> = [{
  name: 'Bicho Bebe',
  description: 'Cada jogador deve escolher um animal para ser. Uma pessoa começa e pergunta "<Bicho> bebe?". A pessoa associada ao bicho deve responder "<Bicho> não bebe, quem bebe é o <Bicho>", escolhendo um outro jogador - sem ser o que te perguntou. O jogo continua até alguém não responder quando seu bicho for mencionado ou quando esquecer o bicho dos outros jogadores - aí o bicho bebe.',
  duration: 'fast',
  minNumberOfPlayers: 5,
  tags: ['jogo de bebida'],
  format: 'both'
}, {
  name: 'Buraco',
  description: 'A versão online do famoso e tradicional jogo de cartas Buraco!',
  link: 'https://www.jogatina.com/welcome.do?game=BURACO',
  duration: 'long',
  minNumberOfPlayers: 2,
  maxNumberOfPlayers: 4,
  format: 'online',
  tags: ['jogo de cartas'],
}, {
  name: 'Cara séria',
  description: 'Todos escrevem em papéis uma frase ridícula ou inapropriada - com o intuito de fazer as pessoas rirem. Uma pessoa de cada vez, pega um papel e deve ler do início ao fim a frase sem rir ou esboçar qualquer sorriso. Quem não conseguir, bebe. Se conseguir, todos os outros jogadores bebem.',
  duration: 'medium',
  minNumberOfPlayers: 3,
  tags: ['jogo de bebida'],
  format: 'offline'
}, {
  name: 'Cards Against Humanity',
  description: 'A cada rodada um jogador lê uma pergunta com um espaço em branco a ser preenchido. Os demais jogadores devem então escolher uma das cartas de sua mão para responder à pergunta tenbtando ser o mais engraçado possível. O jogador que leu a pergunta lê todas as respostas e escolhe a mais engraçada!',
  link: 'https://allbad.cards/',
  duration: 'long',
  format: 'both',
  minNumberOfPlayers: 3,
}, {
  name: 'CodeNames',
  description: 'Dois times competem para contatar os seus agentes secretos. Um integrante será o Spymaster e dará uma dica a cada rodada relacionada a palavras no quadro. Os aliados devem tentar adivinhar as palavras associadas à dica para contatar os agentes do seu time, tomando cuidado para não contatar os do time inimigo ou encontrar o assassino e pôr tudo a perder.',
  link: 'https://codenames.game/',
  duration: 'medium',
  format: 'online',
  minNumberOfPlayers: 4,
  maxNumberOfPlayers: 8,
}, {
  name: 'Dreams Game',
  description: 'Os jogadores se revezam como o sonhador e os espíritos dos sonhos (Fadas, Sandman e Bichos-Papão). Cada um utilizará apenas uma palavra para descrever uma palavra sorteada. Enquanto alguns tentam ajudar o sonhador a acertar, outros vão tentar atrapalhá-lo!',
  link: 'https://dreams-game.netlify.app/',
  duration: 'medium',
  format: 'online',
  minNumberOfPlayers: 4,
  maxNumberOfPlayers: 10,
}, {
  name: 'Eu nunca...',
  description: 'Cada jogador por vez deve dizer algo que nunca fez na vida. Todos os jogadores que já tenham feito o que foi dito devem tomar um shot.',
  link: 'https://discord.com/',
  duration: 'medium',
  format: 'both',
  minNumberOfPlayers: 3,
  tags: ['jogo de bebida'],
}, {
  name: 'Game of Bombs',
  description: 'Versão online do clássico jogo de grupo do Bomberman! Coloque bombas para explodir as paredes, pegue itens para se fortalecer e exploda seus inimigos para ser o vencedor!',
  link: 'https://gameofbombs.com/#/',
  duration: 'fast',
  minNumberOfPlayers: 2,
  format: 'online',
}, {
  name: 'Gartic',
  description: 'O objetivo do jogo é acumular pontos ao acertarem o seu desenho ou acertando o desenho dos outros. A cada rodada, um dos jogadores é designado a desenhar uma determinada palavra. Sempre que alguém acertar a palavra, tanto o desenhista quanto as pessoas que acertaram ganham pontos!',
  link: 'https://gartic.io/',
  duration: 'variable',
  minNumberOfPlayers: 2,
  maxNumberOfPlayers: 50,
  format: 'online',
}, {
  name: 'Grande Mentiroso',
  description: ' Cada jogador por vez deve dizer algo que já fez fez na vida, que pode ser verdade ou mentira. Os outros jogadores devem indicar se acham que é verdade ou mentira o que foi dito. Depois a verdade é revelada e quem errou bebe.',
  link: 'https://discord.com/',
  duration: 'variable',
  minNumberOfPlayers: 3,
  tags: ['jogo de bebida'],
  format: 'both',
}, {
  name: 'iFood Secreto',
  description: 'A ideia do conhecido Amigo Oculto/Amigo Secreto, mas adaptado. Junta o grupo de amigos, todo mundo compartilha seu endereço e faz o sorteio como de costume. Em seguida, cada um deve pedir um delivery de presente para o amigo que tirou e esperar para receber um!',
  link: 'https://www.sorteioamigosecreto.com/',
  duration: 'variable',
  minNumberOfPlayers: 2,
  format: 'online',
}, {
  name: 'Karaokê',
  description: 'Basta abrir um vídeo de karaokê, uma pessoa compartilhar a sua tela mostrando a letra para todos e soltar a voz juntos!',
  link: 'https://www.youtube.com/results?search_query=karaoke+playlist',
  duration: 'variable',
  minNumberOfPlayers: 2,
  format: 'both',
}, {
  name: 'Leilão',
  description: 'Uma pessoa faz uma pergunta para outra pessoa - no ouvido dela, para que só ela ouça -, cuja resposta deve ser uma das outras pessoas. Ela então responde qual pessoa é a resposta da pergunta, sem revelar a pergunta. Aí começa um leilão; 1 shot para relevar a pergunta. 2 shots da pessoa que respondeu se não quiser revelar. 3 shots para revelar. E por aí vai - todos da mesa podem jogar.',
  duration: 'variable',
  minNumberOfPlayers: 5,
  tags: ['jogo de bebida'],
  format: 'offline'
}, {
  name: 'Lousa das Regras',
  description: 'Com uma lousa (mesa de vidro, cartolina, etc), joga-se um dado (ou outro objeto) nela. Onde parar, a pessoa escreve uma regra (curta) e envolve a frase. Se onde foi jogado já houver algo escrito, a pessoa deve cumprir o que a regra prevê - ou tomar shots cumulativos para cada vez que recusar (1ª recusa = 1 shot, 10ª recusa = 10 shots)!',
  duration: 'long',
  minNumberOfPlayers: 3,
  tags: ['jogo de bebida'],
  format: 'offline'
}, {
  name: 'Mais Provável',
  description: 'Uma pessoa por vez fala uma frase que comece com "Quem é o mais provável de...". Logo em seguida conta-se até três e ao mesmo tempo todos devem apontar para a pessoa que acham que é a mais provável de ser a resposta da pergunta. O jogador que receber o maior número de votos bebe!',
  duration: 'fast',
  minNumberOfPlayers: 4,
  tags: ['jogo de bebida'],
  format: 'both'
}, {
  name: 'Medusa',
  description: 'Escolha alguém para fazer a contagem. Todos abaixam as cabeças e essa pessoa contará até três. No três, todos devem levantar simultaneamente as cabeças e olhar para alguém da roda. Se duas pessoas encontrarem os olhares, elas bebem.',
  duration: 'fast',
  minNumberOfPlayers: 4,
  tags: ['jogo de bebida'],
  format: 'offline'
}, {
  name: 'Mímica',
  description: 'Se dividem em duas equipes conforme preferência e cada equipe escolhe uma mímica (ou sorteia) para a outra fazer por vez!',
  link: 'https://www.thegamegal.com/word-generator/',
  duration: 'long',
  minNumberOfPlayers: 4,
  format: 'both',
}, {
  name: 'Morde Sacola',
  description: 'Um saco/sacola (de preferência de papel) é colocado no chão. Cada um deve pegá-lo com a boca e levantar-se, encostando apenas os pés no chão e sem cair. Cada vez que todos tenham conseguido, corta-se um pedaço de cima do saco, diminuindo sua altura e dificultando o jogo. Quem não conseguir pegar ou cair, está fora e deve beber um shot.',
  duration: 'fast',
  minNumberOfPlayers: 3,
  tags: ['jogo de bebida'],
  format: 'offline'
}, {
  name: 'Pokemon Card?',
  description: 'Cada pessoa por vez deve falar uma pessoa, animal ou personagem. Em seguida, pesquisa-se no Google "<coisa> pokemon card". Se existir uma versão de um card Pokémon com aquela coisa, a pessoa bebe. Caso contrário, todos bebem. É bem mais difícil do que parece!',
  duration: 'fast',
  link: 'https://www.mypokecard.com/en/Gallery/my/galery/Nk3oMr34bATi.jpg',
  minNumberOfPlayers: 2,
  tags: ['jogo de bebida'],
  format: 'both'
}, {
  name: 'Polícia & Ladrão & Álcool',
  description: 'Cada ladrão deve esconder uma bebida e depois se esconder em outro lugar. Os policiais devem achar as bebidas antes de procurar os ladrões - e tomar 1 shot quando acharem. Quando um ladrão é encontrado, o policial toma 1 shot para comemorar e o ladrão 2 shots, e é levado para prisão. Para um ladrão libertar os outros da prisão ele deve virar um copo de bebida cheio que ficará na prisão sem ser pego.',
  duration: 'long',
  minNumberOfPlayers: 6,
  tags: ['jogo de bebida'],
  format: 'offline'
}, {
  name: 'Qual é a música?',
  description: 'Um jogador compartilha o áudio do seu computador/celular e escolhe músicas aleatórias para tocar sem os demais saberem. Só que: a pessoa só deverá tocar os 2 segundos iniciais da música para que os outros jogadores adivinhem!',
  link: 'https://discord.com/',
  duration: 'fast',
  minNumberOfPlayers: 3,
  format: 'both',
}, {
  name: 'Quem sou eu?',
  description: 'Você escolhe um tema (ou cria o seu próprio), coloca o celular na testa (ou um pedaço de papel) e palavras aleatórias são sorteadas sem você ver. Então, você precisará da ajuda de seus amigos para te ajudarem a adivinhar respondendo apenas perguntas de SIM ou NÃO!',
  link: 'https://play.google.com/store/apps/details?id=net.artgamestudio.charadesapp&hl=pt_BR',
  duration: 'fast',
  minNumberOfPlayers: 2,
  format: 'both'
}, {
  name: 'Roxanne',
  description: 'Uma pessoa escolhe uma música e uma palavra dita naquela música. Toda vez que aquela palavra for dita, todos os jogadores devem tomar um shot. Quem não conseguir acompanhar os shots no ritmo da música ou desistir, perde o jogo.',
  duration: 'fast',
  link: 'https://www.youtube.com/watch?v=3T1c7GkzRQQ',
  minNumberOfPlayers: 2,
  tags: ['jogo de bebida'],
  format: 'both'
}, {
  name: 'Se é que me entende...',
  description: 'Escolhe-se um tema/cenário (por ex.: estão em um restaurante). Cada jogador, deve falar frases dentro do contexto, mas ambígua e com conotação sexual. Quem não souber novas frases ou falar uma que não faça sentido perde e deve beber.',
  duration: 'fast',
  minNumberOfPlayers: 2,
  tags: ['jogo de bebida'],
  format: 'both'
}, {
  name: 'StopotS',
  description: 'Versão online do jogo conhecido como Stop, Adedanha ou Adedonha! Preencha os campos com palavras que comecem com a letra sorteada. O seu desafio é preencher todos os campos antes que o tempo acabe ou alguém termine antes de você e aperte o botão STOP!',
  link: 'https://stopots.com/pt/',
  duration: 'variable',
  minNumberOfPlayers: 2,
  maxNumberOfPlayers: 50,
  format: 'online'
}, {
  name: 'Tabletop Simulator',
  description: 'Jogo online que simula diversos jogos clássicos de tabuleiro, desde gamão e quebra-cabeças a RPGs de mesa!',
  link: 'https://store.steampowered.com/app/286160/Tabletop_Simulator/',
  duration: 'variable',
  minNumberOfPlayers: 2,
  tags: ['pago'],
  format: 'online'
}, {
  name: 'Troca Copo',
  description: 'Dois copos são postos à frente de cada jogador - um cheio de bebida. Usando apenas uma colher, cada jogador deve transferir o conteúdo de um copo para o outro. O jogo acaba quando alguém conseguir ou o tempo esgotar. Todos que não conseguirem, bebem o conteúdo que restou no copo original.',
  duration: 'fast',
  minNumberOfPlayers: 2,
  tags: ['jogo de bebida'],
  format: 'offline'
}, {
  name: 'Truco',
  description: 'A versão online do famoso e tradicional jogo de cartas Truco!',
  link: 'https://trucoon.com.br/',
  duration: 'long',
  maxNumberOfPlayers: 4,
  tags: ['jogo de cartas'],
  format: 'online'
}, {
  name: 'Uno',
  description: 'O clássico e famoso jogo de cartas Uno, numa versão digital para jogar online com os amigos pelo celular!',
  link: 'https://play.google.com/store/apps/details?id=com.matteljv.uno&hl=pt_BR',
  duration: 'medium',
  minNumberOfPlayers: 2,
  maxNumberOfPlayers: 10,
  tags: ['jogo de cartas'],
  format: 'online'
}, {
  name: 'Verdade ou Shot',
  description: 'Cada pessoa por vez deve escolher uma outra e lhe fazer uma pergunta. A pessoa pode responder ou beber um shot no lugar.',
  link: 'https://discord.com/',
  duration: 'fast',
  minNumberOfPlayers: 3,
  tags: ['jogo de bebida'],
  format: 'both'
}, {
  name: 'Waterfall',
  description: 'Com um baralho em mãos, cada jogador compra uma carta por turno. Cada carta representa possui um significado: que vão desde tomar um shot, fazer um amigo beber ou jogar um mini-jogo!',
  link: 'https://darksquaregames.com/app/waterfall-the-drinking-game/',
  duration: 'long',
  minNumberOfPlayers: 2,
  tags: ['jogo de bebida'],
  format: 'both'
}];
