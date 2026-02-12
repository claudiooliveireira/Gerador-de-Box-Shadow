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
        webkitRule,
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
        this.webkitRule =webkitRule
        this.mozRule =mozRule
    }

    /* função de inicilização, valores dentro do bloco */
    initialize() {

        this.horizontalRef.value =  this.horizontal.value;
        this.verticalRef.value =  this.vertical.value;
        this.blurRef.value =  this.blur.value;
        this.spreadRef.value =  this.spread.value;


        this.applyRule();
        this.showRule(); // vai exibir a regra do code no html
    }

    /* função para aplicar a regra code (regra inicial da shadow) */
    applyRule() {

        this.previewBox.style.boxShadow = ` 
        ${this.horizontalRef.value}px
        ${this.verticalRef.value}px 
        ${this.blurRef.value}px 
        ${this.spreadRef.value}px 
        #000000 
        `
        /* mostra a regra em code */
        this.currentRule = this.previewBox.style.boxShadow;
    }
    /* exibir a regra code no html */
    showRule() {
        this.rule.innerText = this.currentRule;
        this.webkitRule.innerText = this.currentRule;
        this.mozRule.innerText = this.currentRule;
    }


    /* função updateValue */
    updateValue(type, value) {

        switch(type) {
            case "horizontal": // se o switch type for igual (case) a "horizontal"
                this.horizontalRef.value = value; // muda com base no valor da referencia
                break

            case "vertical":
                this.verticalRef.value = value;
                break

            case "blur":
                this.blurRef.value = value;
                break

            case "spread":
                this.spreadRef.value = value
                break

        }






        // refrete o value (efeito)  na boxShadow
        this.applyRule();
        this.showRule();
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



/* inicializando o boxShadow initialize() volores dentro do bloco */
boxShadow.initialize();


/* Eventos */ 

// evento horizontal
horizontal.addEventListener("input", (e) => {
    const value = e.target.value;

    boxShadow.updateValue("horizontal", value);
});

// evento vertical
vertical.addEventListener("input", (e) => {
    const value = e.target.value;
    
    boxShadow.updateValue("vertical", value);
});

// evento de blur borrão 
blur.addEventListener("input", (e) => {
    const value = e.target.value;
    
    boxShadow.updateValue("blur", value);
});

// evento de spread espalhamento 
spread.addEventListener("input", (e) => {
    const value = e.target.value;
    
    boxShadow.updateValue("spread", value);
});



















