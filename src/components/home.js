import React, { Component } from 'react';
import { BrowserRouter as Router,Route,Link,NavLink, Switch } from 'react-router-dom';
import { MovingNumbers } from './movingNumbers.js';


export class Home extends Component {
  constructor(props) {
  super(props);
  this.state = {
    active: true,
    position: 0,
    position2: 0,
    topScrollBtn:false,
    noOfkm:1,
    noOfkmAction:false,
    changeofstate:false,
    interval:1,
    };
    this.handleScroll = this.handleScroll.bind(this)

  } //props end

  componentDidMount(){

    this.intervalId = setInterval(() => {
      this.setState({
        position: (this.state.position + 1),
        });
    }, 30);

    window.addEventListener('scroll', this.handleScroll);

  //   this.intervalId2 = setInterval(() => {
  //
  //     if(!this.state.changeofstate){
  //         if(this.state.noOfkm>=9){
  //           this.setState({
  //             noOfkm: 3,
  //             noOfkmAction:true,
  //             changeofstate:true,
  //           });
  //         } else{
  //           this.setState({
  //             noOfkm: (this.state.noOfkm + 2),
  //             noOfkmAction:true,
  //             changeofstate:true,
  //           });
  //         }
  //       } else {
  //         this.setState({
  //           noOfkmAction:false,
  //           changeofstate:false,
  //         });
  //       }
  //     },1500 ,
  //   );
  //
  //
  // this.intervalId3 = setInterval(() => {
  //       if(this.state.noOfclass===4){
  //         this.setState({
  //           noOfclass:1;
  //         });
  //       } else {
  //         this.setState({
  //           noOfclass:this.state.noOfclass+1;
  //         });
  //       }
  //     },1500 ,
  //   );
  }
  //
  //
  //





  toggleClass(e) {
    e.preventDefault();
    const currentState = this.state.active;
    this.setState({ active: !currentState });
  };

  componentWillUnmount(){
    clearInterval(this.intervalId);
    // clearInterval(this.intervalId2);
    // clearInterval(this.intervalId3);
    window.removeEventListener('scroll', this.handleScroll);
  }

  // window.onscroll = function() {scrollFunction()};
  //
  // function scrollFunction() {
  //     if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
  //         document.getElementById("myBtn").style.display = "block";
  //     } else {
  //         document.getElementById("myBtn").style.display = "none";
  //     }
  // }
  //
  // // When the user clicks on the button, scroll to the top of the document
  // function topFunction() {
  //     document.body.scrollTop = 0;
  //     document.documentElement.scrollTop = 0;
  // }

  moveDown(e){
    e.preventDefault();
    console.log(window.scrollY);
    const curentmove= window.innerHeight-66;
    console.log(curentmove);
    window.scrollTo(0,curentmove);
  }

  handleScroll(e){
    e.preventDefault();
        if (window.scrollY > window.innerHeight-67) {
          this.setState({
            topScrollBtn:true,
            });
        } else if(window.scrollY < window.innerHeight-67){
          this.setState({
            topScrollBtn:false,
            });
        }
  }

  returnToTop(e){
    e.preventDefault();
    console.log(window.scrollY);
    window.scrollTo(0,0);
  }


  render(){
    return(
      <div>
      <section id="home-entry">
        <div onClick={this.returnToTop} className="show-return-btn" style={{display:this.state.topScrollBtn ? "block":"none"}}></div>
        <div className="row home-class" style={{backgroundPosition:this.state.position}}>
          <div className="col-1">
          </div>
          <div className="welcome-text-cnt col-10">
            <div className="welcome-text">
              <p>Profesionalny ultramaratonowy trening rowerowy w kilka chwil.</p>
              <NavLink to={`/wyswietltrening`} style={{textDecoration:"none",color:"white"}}><div className="welcome-btn" >nowy trening</div></NavLink>
              <Route exact path={`/wyswietltrening`}/>
            </div>
            <div className="move-down-cnt"><div onClick={this.moveDown} className="move-down-btn">&nabla;</div></div>
          </div>
          <div className="col-1">
          </div>
        </div>
      </section>

      <section id="encourage-entry">
        <div id="welcome-encourage-break"></div>
        <div className="row encourage-class">
          <div className="col-1"></div>
            <div className="encourage-text-cnt col-10">
              <div className="encourage-text">
                  <div className="encourage-text-psc">Chcesz</div><div className="encourage-text-psc">przejechać</div> <MovingNumbers></MovingNumbers><div className="encourage-text-psc">km</div><div className="encourage-text-psc">i nie masz</div><div className="encourage-text-psc">planu</div><div className="encourage-text-psc">treningowego?</div>
                  <div className="encourage-text-final">Wiemy jak Ci pomóc!</div>
              </div>
            </div>
          <div className="col-1"></div>
        </div>
        <div id="encourage-advantage-break"></div>
      </section>

      <section id="advantage-entry">
        <div className="row advantage-class">
          <div className="col-1">
          </div>
          <div className="advantage-cnt col-10">
            <div className="advantage-title">W ultratreningu znajdziesz:</div>
            <div className="advantage-text">
                <div className="advantage-point"><div className="advantage-text-no">1</div><div className="advantage-text">datę rozpoczęcia</div></div>
                <div className="advantage-point"><div className="advantage-text-no">2</div><div className="advantage-text">szczyt formy</div></div>
                <div className="advantage-point"><div className="advantage-text-no">3</div><div className="advantage-text">rodzaje ćwiczeń</div></div>
                <div className="advantage-point"><div className="advantage-text-no">4</div><div className="advantage-text">opisy</div></div>
                <div className="advantage-point"><div className="advantage-text-no">5</div><div className="advantage-text">ociążenia</div></div>
                <div className="advantage-point"><div className="advantage-text-no">6</div><div className="advantage-text">progresje</div></div>
                <div className="advantage-point"><div className="advantage-text-no">7</div><div className="advantage-text">czas wolny</div></div>
                <div className="advantage-point"><div className="advantage-text-no">8</div><div className="advantage-text">okresy</div></div>
            </div>
          </div>
          <div className="col-1">
          </div>
        </div>
      </section>

      <section id="safety-entry">
        <div id="advantage-chain-break"></div>
        <div id="chain-title">jak zacząć?</div>
        <div className="row chain-class">
          <div className="col-1">
          </div>
          <div className="chain-cnt col-10">

            <div className="link"></div>
            <div className="first-link chain-all-links">
              <div className="first-link-title chain-link-titles">nowy trening</div>
              <div className="first-link-text chain-link-texts">kliknij na stronie "nowy trening". Jeżeli masz trening to kliknij "stary trening"</div>
            </div>
            <div className="link"></div>

            <div className="second-link chain-all-links">
              <div className="second-link-title chain-link-titles">formularz</div>
              <div className="second-link-text chain-link-texts">Wypełnij poprawnie formularz.</div>
            </div>
            <div className="link"></div>


            <div className="third-link chain-all-links">
              <div className="third-link-title chain-link-titles">akceptacja</div>
              <div className="third-link-text chain-link-texts">jeżeli wypełniłeś poprawnie formularz - zaakceptuj go</div>
            </div>
            <div className="link"></div>

            <div className="fourth-link chain-all-links">
              <div className="fourth-link-title chain-link-titles">wyświetl</div>
              <div className="fourth-link-text chain-link-texts">teraz powinien wyświetlić ci się plan treningowy</div>
            </div>
            <div className="link"></div>

            <div className="fifth-link chain-all-links">
              <div className="fifth-link-title chain-link-titles">zapisz</div>
              <div className="fifth-link-text chain-link-texts">możesz zapisac ten plan lub wrócić do formularza</div>
            </div>

          </div>
          <div className="col-1">
          </div>
        </div>
        <div id="chain-footer-break">
        </div>
      </section>

      <section id="safety-entry">
        <div id="advantage-safety-break">
        </div>
        <div className="row safety-class">
          <div className="col-1">
          </div>
          <div className="safety-cnt col-10">
            <div className="safety-title">bezpieczeństwo!</div>
            <div className="safety-text">
              Ultramaratony mają dobry wpływ na zdrowie i samopoczucie rowerzysty. Niestety, extremalne uprawianie tej dyscypliny niesie za sobą sporo ryzyko kontuzji i przetrenowania. Dlatego pamiętaj, że to jest tylko sugestia planu i sam musisz go na bieżąco modyfikować do swoich potrzeb ponieważ każdy jest inny i wymaga innych bodźcców do rozwoju. Zapraszamy do treningu i Życzymy samych dobrych wyników!
            </div>
          </div>
          <div className="col-1">
          </div>
        </div>
        <div id="safety-footer-break">
        </div>
      </section>

      </div>
    )
  }
}
