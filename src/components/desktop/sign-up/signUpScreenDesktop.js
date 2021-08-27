import { LitElement, html } from '@polymer/lit-element';
import { SignUpScreenDesktopStyle } from './signUpScreenDesktop.style';

export class SignUpScreenDesktop extends LitElement {
  static get properties(){
    return {
      
      
    };
  }

  attributeChangedCallback(name, oldval, newval) {
    super.attributeChangedCallback(name, oldval, newval);
  }

  
  

  constructor(){
    super();

    
    
    
  }

  handleKeyPress(e) {
      if (e.key === 'Enter') {
        let name;
        let id;
        let index = -1;
        const value = e.target.value;
        if (e.target.name.search("::") > -1) {
            const varCount = e.target.name.split("::").length;
            if (varCount === 2) {
                name = e.target.name.split("::")[0];
                id = e.target.name.split("::")[1];
            } else if (varCount === 3) {
                name = e.target.name.split("::")[0];
                index = e.target.name.split("::")[1];
                id = e.target.name.split("::")[2];
            }
        } else {
            name = e.target.name;
        }
        this.dispatchEvent(new CustomEvent(`${name}:enter`, {
            bubbles: true,
            detail: {
                type: "textinput",
                name: name,
                value: value,
                index: index,
                id: id
          }
        }));
      }
      let name;
      let id;
      let index = -1;
      const value = e.key;
      if (e.target.name.search("::") > -1) {
          const varCount = e.target.name.split("::").length;
          if (varCount === 2) {
              name = e.target.name.split("::")[0];
              id = e.target.name.split("::")[1];
          } else if (varCount === 3) {
              name = e.target.name.split("::")[0];
              index = e.target.name.split("::")[1];
              id = e.target.name.split("::")[2];
          }
      } else {
          name = e.target.name;
      }
      this.dispatchEvent(new CustomEvent(`${name}:keypress`, {
          bubbles: true,
          detail: {
              type: "textinput",
              name: name,
              value: value,
              index: index,
              id: id
          }
      }));
  }

  handleChange(e) {
    let name;
    let id;
    let index = -1;
    const value = e.target.value;
    if (e.target.name.search("::") > -1) {
        const varCount = e.target.name.split("::").length;
        if (varCount === 2) {
            name = e.target.name.split("::")[0];
            id = e.target.name.split("::")[1];
        } else if (varCount === 3) {
            name = e.target.name.split("::")[0];
            index = e.target.name.split("::")[1];
            id = e.target.name.split("::")[2];
        }
    } else {
        name = e.target.name;
    }
    this.dispatchEvent(new CustomEvent(`${name}:change`, {
        bubbles: true,
        detail: {
            type: "textinput",
            name: name,
            value: value,
            index: index,
            id: id
        }
    }));
  }

  handleClick(target, owner, e) {
    let name;
    let id;
    let index = -1;
    if (target.search("::") > -1) {
        const varCount = target.split("::").length;
        if (varCount === 2) {
            name = target.split("::")[0];
            id = target.split("::")[1];
        } else if (varCount === 3) {
            name = target.split("::")[0];
            index = parseInt(target.split("::")[1]);
            id = target.split("::")[2];
            this[`${owner}SelectedIndex`] = index;
            this.requestUpdate();
        }
    } else {
        name = target;
    }
    this.dispatchEvent(new CustomEvent(`${name}:click`, {
        bubbles: true,
        detail: {
            type: "button",
            name: name,
            index: index,
            id: id
        }
    }));
  }

  handleMouseOver(target, owner, e) {
    let name;
    let id;
    let index = -1;
    if (target.search("::") > -1) {
        const varCount = target.split("::").length;
        if (varCount === 2) {
            name = target.split("::")[0];
            id = target.split("::")[1];
        } else if (varCount === 3) {
            name = target.split("::")[0];
            index = parseInt(target.split("::")[1]);
            id = target.split("::")[2];
        }
    } else {
        name = target;
    }
    this.dispatchEvent(new CustomEvent(`${name}:mouseover`, {
        bubbles: true,
        detail: {
            type: "button",
            name: name,
            index: index,
            id: id
        }
    }));
  }

  handleMouseOut(target, owner, e) {
    let name;
    let id;
    let index = -1;
    if (target.search("::") > -1) {
        const varCount = target.split("::").length;
        if (varCount === 2) {
            name = target.split("::")[0];
            id = target.split("::")[1];
        } else if (varCount === 3) {
            name = target.split("::")[0];
            index = parseInt(target.split("::")[1]);
            id = target.split("::")[2];
        }
    } else {
        name = target;
    }
    this.dispatchEvent(new CustomEvent(`${name}:mouseout`, {
        bubbles: true,
        detail: {
            type: "button",
            name: name,
            index: index,
            id: id
        }
    }));
  }

  handleChangeCheckbox(e) {
      let name;
      let id;
      let index = -1;
      const value = e.target.checked;
      if (e.target.name.search("::") > -1) {
          const varCount = e.target.name.split("::").length;
          if (varCount === 2) {
              name = e.target.name.split("::")[0];
              id = e.target.name.split("::")[1];
          } else if (varCount === 3) {
              name = e.target.name.split("::")[0];
              index = e.target.name.split("::")[1];
              id = e.target.name.split("::")[2];
          }
      } else {
          name = e.target.name;
      }
      this.dispatchEvent(new CustomEvent(`${name}:change`, {
          bubbles: true,
          detail: {
              type: "checkbox",
              name: name,
              value: value,
              index: index,
              id: id
          }
      }));
  }

  handleChangeRadio(e) {
      let name;
      let id;
      let index = -1;
      const value = e.target.checked;
      if (e.target.name.search("::") > -1) {
          const varCount = e.target.name.split("::").length;
          if (varCount === 2) {
              name = e.target.name.split("::")[0];
              id = e.target.name.split("::")[1];
          } else if (varCount === 3) {
              name = e.target.name.split("::")[0];
              index = e.target.name.split("::")[1];
              id = e.target.name.split("::")[2];
          }
      } else {
          name = e.target.name;
      }
      this.dispatchEvent(new CustomEvent(`${name}:change`, {
          bubbles: true,
          detail: {
              type: "radio",
              name: name,
              value: value,
              index: index,
              id: id
          }
      }));
  }

  handleChangeRadioGroup(e) {
      let name;
      let id;
      let index = -1;
      const value = e.target.value;
      if (e.target.name.search("::") > -1) {
          const varCount = e.target.name.split("::").length;
          if (varCount === 2) {
              name = e.target.name.split("::")[0];
              id = e.target.name.split("::")[1];
          } else if (varCount === 3) {
              name = e.target.name.split("::")[0];
              index = e.target.name.split("::")[1];
              id = e.target.name.split("::")[2];
          }
      } else {
          name = e.target.name;
      }
      // this.state[groupName] = value;
      this.dispatchEvent(new CustomEvent(`${name}:change`, {
          bubbles: true,
          detail: {
              type: "radiogroup",
              name: name,
              value: value,
              index: index,
              id: id
          }
      }));
  }

  handleChangeSelect(e) {
      let name;
      let id;
      const value = e.target.value;
      if (value !== "selectdefault") {
          if (e.target.id.search("::") > -1) {
              id = e.target.id.split("::")[1];
          }
          name = e.target.name;
          // this.state[groupName] = value;
          this.dispatchEvent(new CustomEvent(`${name}:change`, {
              bubbles: true,
              detail: {
                  type: "select",
                  name: name,
                  value: value,
                  id: id
              }
          }));
      }
  }

  render(){
    
    return html`
    <style>
      ${SignUpScreenDesktopStyle}
    </style>
    <div data-layer="d2d0e95a-4712-43e3-956f-cd7b5fe46058" class="signUpScreenDesktop">        <div data-layer="2a7b1d34-1ab0-4931-9af2-694f621752f3" class="rectangle3"></div>
        <div data-layer="07280eeb-d7aa-4773-917f-c7b42bd5e7a3" class="rectangle6"></div>
        <div data-layer="e749bd41-d068-4968-b360-f882c36c160f" class="cordonBleuLogo"></div>
        <div data-layer="875568a8-0494-4f58-bd84-3556ca7514d1" class="rectangle5"></div>
        <div data-layer="78f4056d-3d73-49a3-8edd-b5d422a11686" class="group3">            <div data-layer="e1a84cc8-8d8a-423d-8ed2-552c18629be6" class="rectangle1"></div>
            <div data-layer="7de0df66-68f8-46bb-b72c-cba885d095c9" class="rectangle2"></div>
            <div data-layer="6c565896-abbc-408a-b2de-62a9d4b3cf11" class="signUp">SIGN UP</div>
            <div data-layer="935686ea-9496-4480-a3d2-bcf89c1dd090" class="signIn">SIGN IN</div>
</div>
        <div data-layer="26f99d8b-6d87-4f7d-a063-7675d66589b8" class="orderFoodFromOurhomeChefs">Order food from our<br />home chefs</div>
        <div data-layer="da48666a-f551-4b82-b537-e43b6af0e17d" class="contactUs">CONTACT US</div>
        <div data-layer="dbe4ab06-0c2e-45d8-aa89-4f2cb793588d" class="faqs">FAQ's</div>
        <div data-layer="ed66d86e-2794-4b05-8b02-e856c8fa75fc" class="termsAndConditions">Terms and Conditions</div>
        <div data-layer="d1c5d7ac-7176-40f1-96e6-9927ea564956" class="followUs">Follow us</div>
        <div data-layer="7591cdd3-da02-4d45-a6c1-ec959e25fadd" class="x783a1925">|</div>
        <div data-layer="741b9bf6-4be0-42b6-8351-0542f881fbbf" class="xb32d9923">|</div>
        <div data-layer="952bfb06-f5e7-4b04-9b34-534f5857506f" class="x66e2a035">|</div>
        <div data-layer="c6a828b2-a679-4ee8-9d99-290025b34b8c" class="privacy">Privacy</div>
        <div data-layer="8ead37e7-b86c-4283-82a4-5acc630b5158" class="cookies">Cookies</div>
        <div data-layer="584256ad-f618-4b03-bec2-895110d6dd84" class="whereDoYouLive">Where do you live?</div>
        <div data-layer="bb716f52-2c65-41a1-9ce8-398ffdfe2e33" class="searchfa5ae65c">Search</div>
        <div data-layer="6ac463b1-5c56-479c-bc69-16fa1e3ffb8a" class="signUpAndGetAChanceToDeliverYourHandMadeFood">Sign Up and get a chance to deliver your hand made food...</div>
        <div data-layer="70a432eb-22b1-43d8-bfed-ea6cbf30f6c7" class="lendYourKitchenToAHomeChefAndSoOn">Lend your kitchen to a home chef and so on...</div>
        <div data-layer="b0528d3b-ecde-4978-bad8-8118c012edcc" class="becomeACordonBleuChef">BECOME A CORDON BLEU CHEF</div>
        <div data-layer="c1ea1e9a-a812-4e4b-b29b-2e5b7d3cb062" class="lendYourKitchen">LEND YOUR KITCHEN</div>
        <div data-layer="0e2fc862-1219-4091-a00d-a723cc85bf9d" class="group2">            <div data-layer="bc21ac51-5398-4f43-8a3a-9dd649384aaf" class="delivery">Delivery</div>
            <div data-layer="4358fa0a-ff9c-4674-be5d-dac8de1bcdc4" class="pickup">Pickup</div>
            <div data-layer="fc46f4b6-ead9-4323-bb9d-069623837be9" class="group1">                <div data-layer="994eace2-d2d6-4ce0-9559-437edc0288d3" class="rectangle4"></div>
                <svg data-layer="69d07dc6-7016-4bc0-8548-547ae5769448" preserveAspectRatio="none" viewBox="0 0 34 34" class="ellipse1"><path d="M 17 0 C 26.38883972167969 0 34 7.611159324645996 34 17 C 34 26.38883972167969 26.38883972167969 34 17 34 C 7.611159324645996 34 0 26.38883972167969 0 17 C 0 7.611159324645996 7.611159324645996 0 17 0 Z"  /></svg>
</div>
</div>
        <div data-layer="76170333-5bfa-4e73-8949-9b712e14a1bb" class="search">            <svg data-layer="691bc59c-df66-4ab2-92a8-3492a4d4323e" preserveAspectRatio="none" viewBox="22.837997436523438 22.834991455078125 8.69384765625 8.69482421875" class="path1"><path d="M 23.27194595336914 23.27092361450195 C 23.55069541931152 22.99181938171387 23.92897033691406 22.83499145507813 24.32343101501465 22.83499145507813 C 24.71789169311523 22.83499145507813 25.09616851806641 22.99181938171387 25.37491607666016 23.27092361450195 L 31.09599685668945 28.99200439453125 C 31.67671775817871 29.57217788696289 31.67716407775879 30.51326370239258 31.09698867797852 31.0939826965332 C 30.51681900024414 31.67470169067383 29.57572937011719 31.67514419555664 28.99500846862793 31.0949764251709 L 23.27392578125 25.37389373779297 C 22.99482536315918 25.09514617919922 22.83799743652344 24.71686935424805 22.83799743652344 24.32241058349609 C 22.83799743652344 23.92795181274414 22.99482536315918 23.54967498779297 23.27392578125 23.27092552185059 Z"  /></svg>
            <svg data-layer="489bc88c-e1c4-40fd-8e54-a0f2114d2fd5" preserveAspectRatio="none" viewBox="0 0 19.31903076171875 19.319061279296875" class="path2"><path d="M 9.659528732299805 17.83297538757324 C 14.17359828948975 17.83297538757324 17.83297538757324 14.17359924316406 17.83297538757324 9.659528732299805 C 17.83297538757324 5.145458221435547 14.17359828948975 1.486081957817078 9.659527778625488 1.486081957817078 C 5.14545726776123 1.486081957817078 1.486078858375549 5.14546012878418 1.486080050468445 9.659530639648438 C 1.486080050468445 14.1736011505127 5.145458221435547 17.83297920227051 9.659528732299805 17.83297538757324 Z M 19.31905746459961 9.659528732299805 C 19.31905746459961 14.99433898925781 14.99433898925781 19.31905746459961 9.659527778625488 19.31905746459961 C 4.324717998504639 19.31905746459961 0 14.99433898925781 0 9.659527778625488 C 0 4.324717998504639 4.324718952178955 0 9.659529685974121 0 C 14.99433898925781 0 19.31905746459961 4.324718952178955 19.31905746459961 9.659529685974121 Z"  /></svg>
</div>
        <div data-layer="75743606-fe1b-44c0-b62d-a84adfb9ab34" class="group4">            <div data-layer="5e86c654-eea7-4697-910f-9d3e518f6d05" class="cart">                <svg data-layer="de65c98f-1fe4-48d0-8f31-770abc8c9f78" preserveAspectRatio="none" viewBox="4.320000171661377 5.760000228881836 21.60009765625 18.720001220703125" class="path3"><path d="M 25.20000076293945 24.47999954223633 L 9.359999656677246 24.47999954223633 C 9.144000053405762 24.47999954223633 8.927999496459961 24.33600044250488 8.783999443054199 24.1919994354248 C 8.639999389648438 24.04799842834473 8.639999389648438 23.76000022888184 8.711999893188477 23.54399871826172 L 10.07999992370605 20.08799934387207 L 8.711999893188477 7.199999809265137 L 4.320000171661377 7.199999809265137 L 4.320000171661377 5.760000228881836 L 9.360000610351563 5.760000228881836 C 9.720000267028809 5.760000228881836 10.00800037384033 6.048000335693359 10.08000087738037 6.407999992370605 L 11.52000045776367 20.0880012512207 C 11.52000045776367 20.23200035095215 11.52000045776367 20.30400085449219 11.44800090789795 20.44800186157227 L 10.4399995803833 23.04000091552734 L 25.92000007629395 23.04000091552734 L 25.20000076293945 24.48000144958496 Z"  /></svg>
                <svg data-layer="58942c77-d350-4410-81c9-2c3c50d78aec" preserveAspectRatio="none" viewBox="10.079999923706055 8.639999389648438 18.7200927734375 12.240005493164062" class="path4"><path d="M 10.94400024414063 20.8799991607666 L 10.6560001373291 19.43999862670898 L 27.36000061035156 15.98400020599365 L 27.36000061035156 10.07999992370605 L 10.07999992370605 10.07999992370605 L 10.07999992370605 8.639999389648438 L 28.07999992370605 8.639999389648438 C 28.51199913024902 8.639999389648438 28.79999923706055 8.927999496459961 28.79999923706055 9.359999656677246 L 28.79999923706055 16.55999946594238 C 28.79999923706055 16.92000007629395 28.58399963378906 17.20800018310547 28.2239990234375 17.27999877929688 L 10.94399833679199 20.8799991607666 Z"  /></svg>
                <svg data-layer="e7231d12-acd3-495c-b7ff-e398e2e97a6f" preserveAspectRatio="none" viewBox="23.040000915527344 23.039997100830078 5.760009765625 5.760009765625" class="path5"><path d="M 25.92000007629395 28.79999923706055 C 24.33600044250488 28.79999923706055 23.04000091552734 27.50399971008301 23.04000091552734 25.91999816894531 C 23.04000091552734 24.33599662780762 24.33600044250488 23.03999710083008 25.92000198364258 23.03999710083008 C 27.50400352478027 23.03999710083008 28.80000305175781 24.33599662780762 28.80000305175781 25.91999816894531 C 28.80000305175781 27.50399971008301 27.50400352478027 28.79999923706055 25.92000198364258 28.79999923706055 Z M 25.92000007629395 24.47999954223633 C 25.12800025939941 24.47999954223633 24.47999954223633 25.12800025939941 24.47999954223633 25.92000007629395 C 24.47999954223633 26.71199989318848 25.12800025939941 27.36000061035156 25.92000007629395 27.36000061035156 C 26.71199989318848 27.36000061035156 27.36000061035156 26.71199989318848 27.36000061035156 25.92000007629395 C 27.36000061035156 25.12800025939941 26.71199989318848 24.47999954223633 25.92000007629395 24.47999954223633 Z"  /></svg>
                <svg data-layer="de2588da-fd05-420b-95f3-5c65dbd4e853" preserveAspectRatio="none" viewBox="5.760000228881836 23.039997100830078 5.760009765625 5.760009765625" class="path6"><path d="M 8.640000343322754 28.79999923706055 C 7.056000232696533 28.79999923706055 5.760000228881836 27.50399971008301 5.760000228881836 25.91999816894531 C 5.760000228881836 24.33599662780762 7.056000232696533 23.03999710083008 8.640000343322754 23.03999710083008 C 10.22400093078613 23.03999710083008 11.52000045776367 24.33599662780762 11.52000045776367 25.91999816894531 C 11.52000045776367 27.50399971008301 10.22400093078613 28.79999923706055 8.640000343322754 28.79999923706055 Z M 8.640000343322754 24.47999954223633 C 7.848000526428223 24.47999954223633 7.200000286102295 25.12800025939941 7.200000286102295 25.92000007629395 C 7.200000286102295 26.71199989318848 7.848000526428223 27.36000061035156 8.640000343322754 27.36000061035156 C 9.432000160217285 27.36000061035156 10.07999992370605 26.71199989318848 10.07999992370605 25.92000007629395 C 10.07999992370605 25.12800025939941 9.432000160217285 24.47999954223633 8.639999389648438 24.47999954223633 Z"  /></svg>
</div>
            <svg data-layer="1414c8f6-03c4-4d3a-b7d8-6f9768bfea9a" preserveAspectRatio="none" viewBox="7.5 12 9.699951171875 5.5428314208984375" class="dropDown"><path d="M 7.5 12 L 12.3499755859375 17.5428295135498 L 17.199951171875 12 L 7.5 12 Z"  /></svg>
</div>
        <div data-layer="15c4a6ae-28a0-4d49-b7e1-cfda06b01699" class="cordonBleuLogo01"></div>
        <svg data-layer="43e7248d-2b4f-41ed-8405-da53fd41b616" preserveAspectRatio="none" viewBox="3 6 30 25.4998779296875" class="kitchenCooker"><path d="M 6.401999950408936 30 L 6 30 C 4.343145370483398 30 3 28.6568546295166 3 27 L 3 9 C 3 7.343145370483398 4.343146324157715 5.999999523162842 6.000000476837158 6 L 30 6 C 31.6568546295166 6 33 7.343145847320557 33 9 L 33 27 C 33 28.6568546295166 31.6568546295166 30 30 30 L 29.59799957275391 30 C 29.06208038330078 30.92812728881836 28.07174110412598 31.4998664855957 27 31.4998664855957 C 25.92825889587402 31.4998664855957 24.93791961669922 30.92812728881836 24.40200042724609 30 L 11.59799957275391 30 C 11.06208229064941 30.92812919616699 10.07174205780029 31.49986839294434 9 31.49986839294434 C 7.928257465362549 31.49986839294434 6.937918186187744 30.92812919616699 6.401999950408936 30 Z M 6 9 L 6 27 L 30 27 L 30 9 L 6 9 Z M 9 18 L 27 18 L 27 24 L 9 24 L 9 18 Z M 9 12 L 16.5 12 L 16.5 15 L 9 15 L 9 12 Z M 15 19.5 L 15 21 L 21 21 L 21 19.5 L 15 19.5 Z M 21 15 C 20.17157363891602 15 19.5 14.3284273147583 19.5 13.5 C 19.5 12.6715726852417 20.17157363891602 12 21 12 C 21.82842636108398 12 22.5 12.6715726852417 22.5 13.5 C 22.5 14.3284273147583 21.82842636108398 15 21 15 Z M 25.5 15 C 24.67157363891602 15 24 14.3284273147583 24 13.5 C 24 12.6715726852417 24.67157363891602 12 25.5 12 C 26.32842636108398 12 27 12.6715726852417 27 13.5 C 27 14.3284273147583 26.32842636108398 15 25.5 15 Z"  /></svg>
        <div data-layer="e680b3a9-d9f5-44a1-b48c-517e5d36417c" class="rectangle7"></div>
        <div data-layer="c526fb33-7521-49be-a661-b97df3105858" class="arrowSmallUp">            <svg data-layer="cfc686e9-63fc-4b36-b76a-578d50a42896" preserveAspectRatio="none" viewBox="11.249984741210938 -5.0000152587890625 15.1376953125 9.4666748046875" class="path7"><path d="M 11.24998474121094 2.554527282714844 L 18.80452919006348 -5.000015258789063 L 18.83314514160156 -5.000015258789063 L 26.3876895904541 2.554527282714844 L 24.5286693572998 4.439509868621826 L 18.83986663818359 -1.223327398300171 L 18.79898834228516 -1.222146272659302 L 13.10900115966797 4.466659069061279 L 11.24998474121094 2.554527282714844 Z"  /></svg>
</div>
        <svg data-layer="8c6226d3-b491-448c-9e05-a393141b7947" preserveAspectRatio="none" viewBox="0 0 35.99800109863281 35.780029296875" class="facebook"><path d="M 35.99700164794922 18 C 35.99700164794922 8.057999610900879 27.93900299072266 0 17.99900245666504 0 C 8.057999610900879 0 0 8.057999610900879 0 18 C 0 26.98200035095215 6.581999778747559 34.42800140380859 15.18599987030029 35.77799987792969 L 15.18599987030029 23.20199966430664 L 10.61699962615967 23.20199966430664 L 10.61699962615967 17.99799919128418 L 15.18599891662598 17.99799919128418 L 15.18599891662598 14.03400039672852 C 15.18599891662598 9.522000312805176 17.87399864196777 7.03100061416626 21.98399925231934 7.03100061416626 C 23.95399856567383 7.03100061416626 26.01299858093262 7.38200044631958 26.01299858093262 7.38200044631958 L 26.01299858093262 11.81100082397461 L 23.7450008392334 11.81100082397461 C 21.51000022888184 11.81100082397461 20.8120002746582 13.19900131225586 20.8120002746582 14.6220006942749 L 20.8120002746582 18 L 25.80400085449219 18 L 25.00600051879883 23.20400047302246 L 20.8120002746582 23.20400047302246 L 20.8120002746582 35.77999877929688 C 29.41600036621094 34.43000030517578 35.99800109863281 26.98399925231934 35.99800109863281 18.00099945068359 Z"  /></svg>
        <svg data-layer="f2ea5682-f96b-405e-a250-ef08d6525312" preserveAspectRatio="none" viewBox="-1.5967241905837787e-13 -3.9917999461458464e-12 36 36" class="circleinstagram"><path d="M 18 36 C 15.56266593933105 36 13.23066711425781 35.52533340454102 11.00399971008301 34.57600021362305 C 8.777332305908203 33.62666702270508 6.861332893371582 32.34933471679688 5.255999565124512 30.74399948120117 C 3.650666236877441 29.1386661529541 2.373332977294922 27.22266578674316 1.424000024795532 24.99600028991699 C 0.474666953086853 22.76933479309082 3.178914482759865e-07 20.43733406066895 0 18 C -3.178914482759865e-07 15.56266498565674 0.4746663570404053 13.23066520690918 1.424000024795532 11.00399971008301 C 2.373333692550659 8.777334213256836 3.650666952133179 6.861334323883057 5.25600004196167 5.255999565124512 C 6.861332893371582 3.650664806365967 8.777332305908203 2.373331785202026 11.00399971008301 1.424000024795532 C 13.23066711425781 0.4746682643890381 15.56266593933105 1.589457269801642e-06 18 0 C 20.43733406066895 -1.589457269801642e-06 22.76933288574219 0.4746650457382202 24.99600028991699 1.424000024795532 C 27.2226676940918 2.373334884643555 29.1386661529541 3.650668144226074 30.74399948120117 5.25600004196167 C 32.34933471679688 6.861331939697266 33.62666702270508 8.777331352233887 34.57600021362305 11.00399971008301 C 35.52533340454102 13.23066806793213 36 15.56266784667969 36 18 C 36 20.43733215332031 35.52533340454102 22.76933288574219 34.57600021362305 24.99600028991699 C 33.62666702270508 27.2226676940918 32.34933471679688 29.13866806030273 30.74399948120117 30.74399948120117 C 29.1386661529541 32.34933090209961 27.22266578674316 33.62666320800781 24.99599838256836 34.57600021362305 C 22.76933097839355 35.52533721923828 20.43733215332031 36.00000381469727 17.99999809265137 36 Z M 27 11.25 C 27 10.64066696166992 26.78333282470703 10.1133337020874 26.35000038146973 9.668000221252441 C 25.91666793823242 9.22266674041748 25.38333320617676 9 24.75 9 L 11.25 9 C 10.64066696166992 9 10.1133337020874 9.22266674041748 9.668000221252441 9.668000221252441 C 9.22266674041748 10.1133337020874 9 10.64066696166992 9 11.25 L 9 13.5 L 13.00799942016602 13.5 C 14.36733245849609 12 16.03133201599121 11.25 18 11.25 C 19.96866798400879 11.25 21.63266754150391 12 22.99200057983398 13.5 L 27 13.5 L 27 11.25 Z M 13.5 18 C 13.5 19.24200057983398 13.93933296203613 20.30266761779785 14.81799983978271 21.18199920654297 C 15.6966667175293 22.06133079528809 16.75733375549316 22.50066566467285 18 22.5 C 19.24266624450684 22.49933433532715 20.3033332824707 22.06000137329102 21.18199920654297 21.18199920654297 C 22.06066513061523 20.30399703979492 22.49999809265137 19.24333000183105 22.5 18 C 22.50000190734863 16.75666999816895 22.06066703796387 15.69600296020508 21.18199920654297 14.81799983978271 C 20.30333137512207 13.93999671936035 19.2426643371582 13.50066375732422 18 13.5 C 16.7573356628418 13.49933624267578 15.69666862487793 13.93866920471191 14.81799983978271 14.81799983978271 C 13.9393310546875 15.69733047485352 13.49999713897705 16.75799751281738 13.5 18 Z M 27 15.75 L 24.32799911499023 15.75 C 24.60933303833008 16.5233325958252 24.75 17.2733325958252 24.75 18 C 24.75 19.87533378601074 24.09366607666016 21.4689998626709 22.7810001373291 22.7810001373291 C 21.46833419799805 24.0930004119873 19.87466621398926 24.74933433532715 18 24.75 C 16.12533378601074 24.75066566467285 14.53166675567627 24.09433364868164 13.2189998626709 22.7810001373291 C 11.90633296966553 21.46766662597656 11.25 19.87400054931641 11.25 18 C 11.25 17.2733325958252 11.39066696166992 16.5233325958252 11.67199993133545 15.75 L 9 15.75 L 9 24.75 C 9 25.38266563415527 9.216666221618652 25.91600036621094 9.649999618530273 26.35000038146973 C 10.08333301544189 26.78400039672852 10.61666584014893 27.00066757202148 11.25 27 L 24.75 27 C 25.38266563415527 27 25.91600036621094 26.78333282470703 26.35000038146973 26.35000038146973 C 26.78400039672852 25.91666793823242 27.00066757202148 25.38333320617676 27 24.75 L 27 15.75 Z"  /></svg>
</div>

    `;
  }
}
customElements.define('signUpScreenDesktop-element', SignUpScreenDesktop);
