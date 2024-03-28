import React, { useState } from "react";

const Calculette = () => {
    const[total, setTotal] =useState("");

    const clickOnButton = (e) => {
        setTotal(total+e.target.innerHTML);
    }

    const calc = () => {
        if (total != "") {
         setTotal(eval(total));
        }
    }

    const resetTotal = () =>{
        if (total != "") {
            setTotal("");
        }
    }

    const deleteTotal = () => {
        setTotal(total.slice(0,-1));
    }
 
  return <>
    <div id="block_calculatrice">
      <div id="barre_total">
        <input id="input_total" type="text" value={total}/>
      </div>
      <div id="premiere_ligne">
        <button className="boutton_ce" onClick={resetTotal}>CE</button>
        <button className="boutton_symbole" onClick={clickOnButton}>%</button>
        <button className="boutton_symbole" onClick={clickOnButton}>+</button>
        <button className="boutton_symbole" onClick={clickOnButton}>-</button>
      </div>
      <div id="deuxieme_ligne">
        <button className="boutton_chiffre" onClick={clickOnButton}>7</button>
        <button className="boutton_chiffre" onClick={clickOnButton}>8</button>
        <button className="boutton_chiffre" onClick={clickOnButton}>9</button>
        <button className="boutton_symbole" onClick={clickOnButton}>/</button>
      </div>
      <div id="troisieme_ligne">
        <button className="boutton_chiffre" onClick={clickOnButton}>4</button>
        <button className="boutton_chiffre" onClick={clickOnButton}>5</button>
        <button className="boutton_chiffre" onClick={clickOnButton}>6</button>
        <button className="boutton_symbole" onClick={clickOnButton}>*</button>
      </div>
      <div id="quatrieme_ligne">
        <button className="boutton_chiffre" onClick={clickOnButton}>1</button>
        <button className="boutton_chiffre" onClick={clickOnButton}>2</button>
        <button className="boutton_chiffre" onClick={clickOnButton}>3</button>
        <button className="boutton_symbole" onClick={calc}>=</button>
      </div>
      <div id="cinquieme_ligne">
        <button className="boutton_chiffre" onClick={clickOnButton}>0</button>
        <button className="boutton_symbole" onClick={clickOnButton}>.</button>
        <button className="boutton_symbole" onClick={deleteTotal}> Delete</button>
      </div>
      </div>
    </>
};

export default Calculette;
