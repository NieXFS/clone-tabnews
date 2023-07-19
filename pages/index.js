import React, { useState } from 'react';

function Home() {

  const [mensagemBotao1, setMensagemBotao1] = useState('Botão 1');
  const [mensagemBotao2, setMensagemBotao2] = useState('Botão 2');
  const [mensagemResultado, setMensagemResultado] = useState('');

  const handleClickBotao1 = () => {
    setMensagemBotao1('Vai me dar o bumbum');
    setMensagemBotao2('Não vai me dar o bumbum');
    setMensagemResultado('Parabéns, você vai me dar o bumbum 😘');
  };

  const handleClickBotao2 = () => {
    setMensagemBotao1('Não vai me dar o bumbum');
    setMensagemBotao2('Vai me dar o bumbum');
    setMensagemResultado('Parabéns, você vai me dar o bumbum 😘');
  };
  return (
    <div>
      <h1>Clica em um dos dois e veja o quanto eu te amo e se vc tem sorte</h1>
      <button onClick={handleClickBotao1}>{mensagemBotao1}</button>
      <button onClick={handleClickBotao2}>{mensagemBotao2}</button>
      {mensagemResultado && <p>{mensagemResultado}</p>}
    </div>
  );
}

export default Home;