import React from "react";

const Calculette = () => {
  return (
    <>
    <div id="block_calculatrice">
      <div id="barre_total">
        <input id="input_total" type="text" />
      </div>
      <div id="premiere_ligne">
        <button className="boutton_ce">CE</button>
        <button className="boutton_symbole">%</button>
        <button className="boutton_symbole">+</button>
        <button className="boutton_symbole">-</button>
      </div>
      <div id="deuxieme_ligne">
        <button className="boutton_chiffre">7</button>
        <button className="boutton_chiffre">8</button>
        <button className="boutton_chiffre">9</button>
        <button className="boutton_symbole">/</button>
      </div>
      <div id="troisieme_ligne">
        <button className="boutton_chiffre">4</button>
        <button className="boutton_chiffre">5</button>
        <button className="boutton_chiffre">6</button>
        <button className="boutton_symbole">*</button>
      </div>
      <div id="quatrieme_ligne">
        <button className="boutton_chiffre">1</button>
        <button className="boutton_chiffre">2</button>
        <button className="boutton_chiffre">3</button>
        <button className="boutton_symbole">=</button>
      </div>
      <div id="cinquieme_ligne">
        <button className="boutton_chiffre">0</button>
        <button className="boutton_symbole">.</button>
      </div>
      </div>
    </>
  );
};

export default Calculette;
