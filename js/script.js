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
        color,
        colorRef,
        opacity,
        opacityRef,
        inset,
        previewBox,
        rule,
        webkitRule,
        mozRule
    ) { /* onde recebe os argumentos e os atribui a cada propriedade da classe */
        this.horizontal = horizontal;
        this.horizontalRef = horizontalRef;
        this.vertical = vertical;
        this.verticalRef = verticalRef ;
        this.blur = blur;
        this.blurRef = blurRef;
        this.spread =spread;
        this.spreadRef = spreadRef;
        this.color = color;
        this.colorRef = colorRef;
        this.opacity = opacity
        this.opacityRef = opacityRef;
        this.inset = inset;
        this.insetRef = inset.checked;
        this.previewBox =previewBox;
        this.rule =rule;
        this.webkitRule =webkitRule;
        this.mozRule =mozRule;
    };

    /* função de inicilização, valores dentro do bloco */
    initialize() {

        this.horizontalRef.value =  this.horizontal.value;
        this.verticalRef.value =  this.vertical.value;
        this.blurRef.value =  this.blur.value;
        this.spreadRef.value =  this.spread.value;
        this.colorRef.value =  this.color.value;
        this.opacityRef.value = this.opacity.value;



        this.applyRule();
        this.showRule(); // vai exibir a regra do code no html
    }

    /* função para aplicar e (mostrar) a regra code (regra inicial da shadow) */
    applyRule() {

        const rgbValue = this.hexToRgb(this.colorRef.value); //transformar o color hexademimal(#00000) em  Rgba


        const shadowRule = ` ${this.insetRef ? "inset" : ""} ${this.horizontalRef.value}px ${this.verticalRef.value}px ${this.blurRef.value}px ${this.spreadRef.value}px rgba(${rgbValue}, ${this.opacityRef.value}) `

        this.previewBox.style.boxShadow = shadowRule;


        /* mostra a regra em code */
        this.currentRule = shadowRule;
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
                this.spreadRef.value = value;
                break

            case "color":
                this.colorRef.value = value;
                break

            case "opacity":
                this.opacityRef.value = value;
                break

            case "inset":
                this.insetRef = value;
                break
        }






        // refrete o value (efeito)  na boxShadow
        this.applyRule();
        this.showRule();
    }
    /* transformar o color hexademimal(#00000) em  Rgba*/
    hexToRgb(hex) {
        return `${("0x" + hex[1] + hex[2] | 0)}, ${("0x" + hex[3] + hex[4]) | 0}, ${("0x" + hex[5] + hex[6]) | 0}`;
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


const color = document.querySelector("#color") /* cor */
const colorRef = document.querySelector("#color-value")

const opacity = document.querySelector("#opacity") /* opacidade */
const opacityRef = document.querySelector("#opacity-value")

const inset = document.querySelector("#inset") /* sombra interna */


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
    color,
    colorRef,
    opacity,
    opacityRef,
    inset,
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


// evento de trocar a cor da shadow
color.addEventListener("input", (e) => {
    const value = e.target.value;
    
    boxShadow.updateValue("color", value);
});

// evento de opacidade 
opacity.addEventListener("input", (e) => {
    const value = e.target.value;
    
    boxShadow.updateValue("opacity", value);
});

// evento de combra interna (inset)

inset.addEventListener("input", (e) => {
    const value = e.target.checked;
    
    boxShadow.updateValue("inset", value);
});


/* copiar regra css */

const rulesArea = document.querySelector("#rules-area");

const copyInstructions = document.querySelector("#copy-instructions")// para muda o text quando cópia

rulesArea.addEventListener("click", () => {

    const rules = rulesArea.innerText.replace(/^\s*\n/gm, "");
    /* replace(/^\s*\n/gm, "") vai indentificar as quebrar de linha(espaço em branco) e trocar (eliminar ela), para pode juntar elas */

    navigator.clipboard.writeText(rules).then(() => {
         copyInstructions.innerText = "CSS copiado com sucesso!"


        setTimeout(() => {
            copyInstructions.innerText = "Clique no quadro acima para copiar as regras ( CSS )"

        }, 2000)

    })

})





