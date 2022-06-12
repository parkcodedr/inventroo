import React, { useState } from "react";
import Screen from "components/Screen";
import ButtonBox from "components/ButtonBox";
import Button from "components/Button";


const btnValues = [
    ["C", "+-", "%", "/"],
    [7, 8, 9, "*"],
    [4, 5, 6, "-"],
    [1, 2, 3, "+"],
    [0, ".", "="],
  ];
  
  const toLocaleString = (num) =>
    String(num).replace(/(?<!\..*)(\d)(?=(?:\d{3})+(?:\.|$))/g, "$1,");
  
  const removeSpaces = (num) => num.toString().replace(/,/g, "");
  
  const math = (a, b, sign) =>
    sign === "+" ? a + b : sign === "-" ? a - b : sign === "*" ? a * b : a / b;
  

const CashCalculator = ()=>{
let operation ='0';
    let [calc, setCalc] = useState({
        sign: "",
        num: 0,
        res: 0,
      });
    
      const numClickHandler = (e) => {
        e.preventDefault();
        const value = e.target.innerHTML;
        if (removeSpaces(calc.num).length < 16) {
          operation=operation+operation;
          setCalc({
            ...calc,
            num:
              removeSpaces(calc.num) % 1 === 0 && !calc.num.toString().includes(".")
                ? toLocaleString(Number(removeSpaces(calc.num + value)))
                : toLocaleString(calc.num + value),
            res: !calc.sign ? 0 : calc.res,
          });
        }
      };
    
      const comaClickHandler = (e) => {
        e.preventDefault();
        const value = e.target.innerHTML;
    
        setCalc({
          ...calc,
          num: !calc.num.toString().includes(".") ? calc.num + value : calc.num,
        });
      };
    
      const signClickHandler = (e) => {
        setCalc({
          ...calc,
          sign: e.target.innerHTML,
          res: !calc.num
            ? calc.res
            : !calc.res
            ? calc.num
            : toLocaleString(
                math(
                  Number(removeSpaces(calc.res)),
                  Number(removeSpaces(calc.num)),
                  calc.sign
                )
              ),
          num: 0,
        });
      };
    
      const equalsClickHandler = () => {
        if (calc.sign && calc.num) {
          setCalc({
            ...calc,
            res:
              calc.num === "0" && calc.sign === "/"
                ? "Can't divide with 0"
                : toLocaleString(
                    math(
                      Number(removeSpaces(calc.res)),
                      Number(removeSpaces(calc.num)),
                      calc.sign
                    )
                  ),
            sign: "",
            num: 0,
          });
        }
      };
    
      const invertClickHandler = () => {
        setCalc({
          ...calc,
          num: calc.num ? toLocaleString(removeSpaces(calc.num) * -1) : 0,
          res: calc.res ? toLocaleString(removeSpaces(calc.res) * -1) : 0,
          sign: "",
        });
      };
    
      const percentClickHandler = () => {
        let num = calc.num ? parseFloat(removeSpaces(calc.num)) : 0;
        let res = calc.res ? parseFloat(removeSpaces(calc.res)) : 0;
        setCalc({
          ...calc,
          num: (num /= Math.pow(100, 1)),
          res: (res /= Math.pow(100, 1)),
          sign: "",
        });
      };
    
      const resetClickHandler = () => {
        setCalc({
          ...calc,
          sign: "",
          num: 0,
          res: 0,
        });
      };

     
return(
  <>
  
  <div className="row mx-auto">
     
     <div className="col-md-6">
     <ButtonBox>
        {btnValues.flat().map((btn, i) => {
          return (
            <Button
              key={i}
              className={btn === "=" ? "equals"
              : btn==="+"?"operator" 
              : btn==="*"?"operator" :
              btn==="-"?"operator" :
              btn==="/"?"operator" :
               ""}
              value={btn}
              onClick={
                btn === "C"
                  ? resetClickHandler
                  : btn === "+-"
                  ? invertClickHandler
                  : btn === "%"
                  ? percentClickHandler
                  : btn === "="
                  ? equalsClickHandler
                  : btn === "/" || btn === "*" || btn === "-" || btn === "+"
                  ? signClickHandler
                  : btn === "."
                  ? comaClickHandler
                  : numClickHandler
              }
            />
          );
        })}
     
      </ButtonBox>
     </div>
     <div className="col-md-6 border-left-column">
       <aside className="d-flex flex-column  flex-wrap">
       <p className="mb-5 mt-3 h4 font-weight-bold ">{calc.num && calc.num }</p>
       <p className="mt-5 font-weight-bold h3">Total
       <Screen value={calc.res && calc.res} />
       </p>
       </aside>
       
     </div>
    </div>
  
  </>

)
}

export default CashCalculator;