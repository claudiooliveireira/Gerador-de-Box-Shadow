/* Classe para controlar todos comportamentos do box-shadow */
class BoxShadowGenerator {

    constructor( /* argumentos que recebe de cada instância */
        horizontal, 
        horizontalRef, 
        vertical, 
        verticalRef, 
        blur, 
        blurRef, 
        spread, 
        spreadRef,
        previewBox,
        rule,
        webRule,
        mozRule
    ) { /* onde recebe os argumentos e os atribui a cada propriedade da classe */
        this.horizontal = horizontal
        this.horizontalRef = horizontalRef
        this.vertical = vertical
        this.verticalRef = verticalRef 
        this.blur = blur
        this.blurRef = blurRef
        this.spread =spread
        this.spreadRef = spreadRef
        this.previewBox =previewBox
        this.rule =rule
        this.webRule =webRule
        this.mozRule =mozRule
    }

       
}


/* Seleção de elementos */
const horizontal = document.querySelector("#horizontal"); /* seleciona o input do eixo horizontal */ 
const horizontalRef = document.querySelector("#horizontal-value"); /* seleciona o span (px) do eixo horizontal */

const vertical = document.querySelector("#vertical");/* seleciona o input do eixo vertical */
const verticalRef = document.querySelector("#vertical-value"); /* spam (px) do eixo vertical */

const blur = document.querySelector("#blur");/* seleciona o input do blur( borrão ) */
const blurRef = document.querySelector("#blur-value"); /* span do blur (borrão) */ 

const spread = document.querySelector("#spread");/* seleciona o input do spread (espalhamento) */
const spreadRef = document.querySelector("#spread-value"); /* span do spread (espalamento) */

const previewBox = document.querySelector("#box");/* seleciona a caixa de preview do box-shadow */

 
/* Box Shadow code regras */
const rule = document.querySelector("#rule span");/* seleciona o elemento onde a regra do box-shadow será exibido */
const webkitRule = document.querySelector("#webkit-rule span");
const mozRule = document.querySelector("#moz-rule span");

/* Instância da classe BoxShadowGenerator, onde passamos os elementos selecionados como argumentos para o construtor da classe. */
const boxShadow = new BoxShadowGenerator(
    horizontal, 
    horizontalRef, 
    vertical, 
    verticalRef, 
    blur, 
    blurRef, 
    spread, 
    spreadRef,
    previewBox,
    rule,
    webkitRule,
    mozRule
)

console.log(boxShadow)


/* Eventos */ 









