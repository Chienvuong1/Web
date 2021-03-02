const style=`<style>
    .home{
        width: 100vw;
        height: 100vh;
        background: url('https://i.pinimg.com/originals/ab/43/cc/ab43ccddfe558b5f1d455bbc035770a4.jpg');
        background-size: cover;
        background-repeat: no-repeat;
        margin = 0;
    }
    .form{
        text-align: center;
        box-shadow: 0 0 10px red;
        width: 50vw;
        height: 70vh;
        margin: auto;
        margin-top: -5vh;
        background-color: #272525;
    }
    #point{
        color: yellow;
        font-size: 50px;
        line-height: 6.5vh;
        margin-top: 50px;
    }
    #question{
        color: red;
        padding:50px;
        line-height: 6.5vh;
    }
    #all-answer{
        color: red;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 40px; 
        font-size: 50px;
    }
      
</style>`
export class Gameplay extends HTMLElement{
    listQuestion
    point
    
    constructor(){
        super()
        this.listQuestion= []
        this.point=0
        this.shadowDom=this.attachShadow({mode:'open'})
    }
    async connectedCallback(){

        this.shadowDom.innerHTML=`
        ${style}
        <div id="all">
            <div id="question-answer">
            
            </div>
            
        </div>
        
        `
        this.listQuestion =[]
        var string=`
        {"response_code":0,"results":[{"category":"Sports","type":"multiple","difficulty":"easy","question":"In baseball, how many fouls are an out?","correct_answer":"0","incorrect_answers":["5","3","2"]},{"category":"Sports","type":"multiple","difficulty":"easy","question":"This Canadian television sportscaster is known for his &quot;Hockey Night in Canada&quot; role, a commentary show during hockey games.","correct_answer":"Don Cherry","incorrect_answers":["Don McKellar","Don Taylor ","Donald Sutherland"]},{"category":"Sports","type":"multiple","difficulty":"easy","question":"What is the name of Manchester United&#039;s home stadium?","correct_answer":"Old Trafford","incorrect_answers":["Anfield","City of Manchester Stadium","St James Park"]},{"category":"Sports","type":"multiple","difficulty":"easy","question":"The Los Angeles Dodgers were originally from what U.S. city?","correct_answer":"Brooklyn","incorrect_answers":["Las Vegas","Boston","Seattle"]},{"category":"Sports","type":"multiple","difficulty":"easy","question":"Which country will host the 2022 FIFA World Cup?","correct_answer":"Qatar","incorrect_answers":["USA","Japan","Switzerland"]}]}`;

        var object = JSON.parse(string); 
         for(let i=0;i<object.results.length;i++){
             this.listQuestion.push(object.results[i])
         }
         
         this.showQuestion()
    }
    
    showQuestion(){
        const question=this.listQuestion[0]      
        this.shadowDom.querySelector('#question-answer').innerHTML = `
            <div class="home">
                <div class="form">
                    <div id="point">Point: 0</div>
                    <div id="question">
                        <question-component id="game-question" question="${question.question}"></question-component>
                    </div>
                    <div id="all-answer">
                        <answer-component id="a1" answer="${question.correct_answer}" isTrue="1"></answer-component>
                        <answer-component id="a2" answer="${question.incorrect_answers[0]}" isTrue="0"></answer-component>
                        <answer-component id="a3" answer="${question.incorrect_answers[1]}" isTrue="0"></answer-component>
                        <answer-component id="a4" answer="${question.incorrect_answers[2]}" isTrue="0"></answer-component> 
                    </div>
                         
                </div>
                
            </div>
            
        `
        
        this.shadowDom.querySelector('#all-answer').addEventListener('click',(e) => {  
            const id=e.target.id
                setTimeout(()=>{
                if(this.listQuestion.length>=2){  
                    if(this.shadowDom.querySelector('#'+id).getAttribute('isTrue')==1) {
                        this.order=Math.floor(Math.random()*this.listQuestion.length)
                        this.listQuestion.shift()
                        alert('Chính xác')
                        setTimeout(()=>{
                            this.showQuestion()
                            this.point+=10
                            this.shadowDom.getElementById('point').innerHTML=`Point: ${this.point}`
                       },500)
                    }
                    else if(this.shadowDom.querySelector('#'+id).getAttribute('isTrue')==0){
                       
                        setTimeout(()=>{ 
                            alert(`Game over, Your core: ${this.point}`)
                        },500)
                    }
                }
                else{
                    if(this.shadowDom.querySelector('#'+id).getAttribute('isTrue')==1) {
                        setTimeout(()=>{
                            alert(`Victory, Your Point: ${this.point+10}`)
                        },500)
                    }
                    else  alert(`Game over, Your core: ${this.point}`)
                       
                }},500)
               
         })
         
        
    }
}

window.customElements.define('game-play',Gameplay)