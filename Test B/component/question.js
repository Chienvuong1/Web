const style=`<style>
.game-question{
    width:70%;
    height:3.5vw;
    margin:auto;
    margin-bottom: 2.5vh;
    margin-top: -3vh;
    cursor: pointer;
    font-family: 'Chakra Petch', sans-serif;
    font-size: 25px;
    color:#d0d007;
    background-color: #790101;
}
.question{
    text-align:center;
    background-color: #790101;
    border: 2px solid red;
    box-shadow: 0 0 20px;
}
</style>`
export class Question extends HTMLElement{
    
    constructor(){
        super()
        this.shadowDom=this.attachShadow({mode:'open'})
    }
    connectedCallback(){
        this.question=this.getAttribute('question')
        this.shadowDom.innerHTML=`
       ${style}
            <div class="game-question">
                <div class="question">
                    ${this.question}
                </div>
            </div>
        `
    }

}
window.customElements.define('question-component',Question)