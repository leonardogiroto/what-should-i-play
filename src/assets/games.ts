export interface Game {
  name: string;
  description: string;
  link: string;
  duration: 'fast' | 'medium' | 'long' | 'variable';
  minNumberOfPlayers?: number;
  maxNumberOfPlayers?: number;
  tags?: Array<string>;
}

export const GamesList: Array<Game> = [{
  name: 'Buraco',
  description: 'A versão online do famoso e tradicional jogo de cartas Buraco!',
  link: 'https://www.jogatina.com/welcome.do?game=BURACO',
  duration: 'long',
  minNumberOfPlayers: 2,
  maxNumberOfPlayers: 4,
  tags: ['jogo de cartas'],
}, {
  name: 'Cards Against Humanity',
  description: 'A cada rodada um jogador lê uma pergunta com um espaço em branco a ser preenchido. Os demais jogadores devem então escolher uma das cartas de sua mão para responder à pergunta tenbtando ser o mais engraçado possível. O jogador que leu a pergunta lê todas as respostas e escolhe a mais engraçada!',
  link: 'https://allbad.cards/',
  duration: 'long',
  minNumberOfPlayers: 3,
}, {
  name: 'CodeNames',
  description: 'Dois times competem para contatar os seus agentes secretos. Um integrante será o Spymaster e dará uma dica a cada rodada relacionada a palavras no quadro. Os aliados devem tentar adivinhar as palavras associadas à dica para contatar os agentes do seu time, tomando cuidado para não contatar os do time inimigo ou encontrar o assassino e pôr tudo a perder.',
  link: 'https://codenames.game/',
  duration: 'medium',
  minNumberOfPlayers: 4,
  maxNumberOfPlayers: 8,
}, {
  name: 'Dreams Game',
  description: 'Os jogadores se revezam como o sonhador e os espíritos dos sonhos (Fadas, Sandman e Bichos-Papão). Cada um utilizará apenas uma palavra para descrever uma palavra sorteada. Enquanto alguns tentam ajudar o sonhador a acertar, outros vão tentar atrapalhá-lo!',
  link: 'https://dreams-game.netlify.app/',
  duration: 'medium',
  minNumberOfPlayers: 4,
  maxNumberOfPlayers: 10,
}, {
  name: 'Eu nunca...',
  description: 'O pessoal se junta em uma chamada de áudio e vídeo. Cada jogador por vez deve dizer algo que nunca fez na vida. Todos os jogadores que já tenham feito o que foi dito devem tomar um shot.',
  link: 'https://discord.com/',
  duration: 'medium',
  minNumberOfPlayers: 3,
  tags: ['jogo de bebida'],
}, {
  name: 'Game of Bombs',
  description: 'Versão online do clássico jogo de grupo do Bomberman! Coloque bombas para explodir as paredes, pegue itens para se fortalecer e exploda seus inimigos para ser o vencedor!',
  link: 'https://gameofbombs.com/#/',
  duration: 'fast',
  minNumberOfPlayers: 2,
}, {
  name: 'Gartic',
  description: 'O objetivo do jogo é acumular pontos ao acertarem o seu desenho ou acertando o desenho dos outros. A cada rodada, um dos jogadores é designado a desenhar uma determinada palavra. Sempre que alguém acertar a palavra, tanto o desenhista quanto as pessoas que acertaram ganham pontos!',
  link: 'https://gartic.io/',
  duration: 'variable',
  minNumberOfPlayers: 2,
  maxNumberOfPlayers: 50,
}, {
  name: 'Grande Mentiroso',
  description: 'O pessoal se junta em uma chamada de áudio e vídeo. Cada jogador por vez deve dizer algo que já fez fez na vida, que pode ser verdade ou mentira. Os outros jogadores devem indicar se acham que é verdade ou mentira o que foi dito. Depois a verdade é revelada e quem errou bebe.',
  link: 'https://discord.com/',
  duration: 'variable',
  minNumberOfPlayers: 3,
  tags: ['jogo de bebida'],
}, {
  name: 'iFood Secreto',
  description: 'A ideia do conhecido Amigo Oculto/Amigo Secreto, mas adaptado. Junta o grupo de amigos, todo mundo compartilha seu endereço e faz o sorteio como de costume. Em seguida, cada um deve pedir um delivery de presente para o amigo que tirou e esperar para receber um!',
  link: 'https://www.sorteioamigosecreto.com/',
  duration: 'variable',
  minNumberOfPlayers: 2,
}, {
  name: 'Karaokê',
  description: 'O pessoal se junta em uma chamada de áudio e vídeo. Aí basta abrir um vídeo de karaokê, uma pessoa compartilhar a sua tela mostrando a letra para todos e soltar a voz juntos!',
  link: 'https://www.youtube.com/results?search_query=karaoke+playlist',
  duration: 'variable',
  minNumberOfPlayers: 2,
}, {
  name: 'Mímica',
  description: 'O pessoal se junta em uma chamada de áudio e vídeo. Se dividem em duas equipes conforme preferência e cada equipe escolhe uma mímica (ou sorteia) para a outra fazer por vez!',
  link: 'https://www.thegamegal.com/word-generator/',
  duration: 'long',
  minNumberOfPlayers: 4,
}, {
  name: 'Qual é a música?',
  description: 'O pessoal se junta em uma chamada de áudio. Um jogador compartilha o áudio do seu computador e escolhe músicas aleatórias para tocar sem os demais saberem. Só que: a pessoa só deverá tocar os 2 segundos iniciais da música para que os outros jogadores adivinhem!',
  link: 'https://discord.com/',
  duration: 'fast',
  minNumberOfPlayers: 3,
}, {
  name: 'Quem sou eu?',
  description: 'Você escolhe um tema (ou cria o seu próprio), coloca o celular na testa e palavras aleatórias são sorteadas sem você ver. Então, você precisará da ajuda de seus amigos para te ajudarem a adivinhar fazendo mímicas ou dando dicas!',
  link: 'https://play.google.com/store/apps/details?id=net.artgamestudio.charadesapp&hl=pt_BR',
  duration: 'fast',
  minNumberOfPlayers: 2,
  tags: ['mobile'],
}, {
  name: 'StopotS',
  description: 'Versão online do jogo conhecido como Stop, Adedanha ou Adedonha! Preencha os campos com palavras que comecem com a letra sorteada. O seu desafio é preencher todos os campos antes que o tempo acabe ou alguém termine antes de você e aperte o botão STOP!',
  link: 'https://stopots.com/pt/',
  duration: 'variable',
  minNumberOfPlayers: 2,
  maxNumberOfPlayers: 50,
}, {
  name: 'Tabletop Simulator',
  description: 'Jogo online que simula diversos jogos clássicos de tabuleiro, desde gamão e quebra-cabeças a RPGs de mesa!',
  link: 'https://store.steampowered.com/app/286160/Tabletop_Simulator/',
  duration: 'variable',
  minNumberOfPlayers: 2,
  tags: ['pago'],
}, {
  name: 'Truco',
  description: 'A versão online do famoso e tradicional jogo de cartas Buraco!',
  link: 'https://trucoon.com.br/',
  duration: 'long',
  maxNumberOfPlayers: 4,
  tags: ['jogo de cartas'],
}, {
  name: 'Uno',
  description: 'O clássico e famoso jogo de cartas Uno, numa versão digital para jogar online com os amigos pelo celular!',
  link: 'https://play.google.com/store/apps/details?id=com.matteljv.uno&hl=pt_BR',
  duration: 'medium',
  minNumberOfPlayers: 2,
  maxNumberOfPlayers: 10,
  tags: ['jogo de cartas', 'mobile'],
}, {
  name: 'Verdade ou Shot',
  description: 'O pessoal se junta em uma chamada de áudio e vídeo. Cada pessoa por vez deve escolher uma outra e lhe fazer uma pergunta. A pessoa pode responder ou beber um shot no lugar.',
  link: 'https://discord.com/',
  duration: 'fast',
  minNumberOfPlayers: 3,
  tags: ['jogo de bebida'],
}, {
  name: 'Waterfall',
  description: 'Com um baralho em mãos, cada jogador compra uma carta por turno. Cada carta representa possui um significado: que vão desde tomar um shot, fazer um amigo beber ou jogar um mini-jogo!',
  link: 'https://waterfall.beer/',
  duration: 'long',
  minNumberOfPlayers: 2,
  tags: ['jogo de bebida'],
}];
