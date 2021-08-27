import { LitElement, html } from '@polymer/lit-element';
import { SignUpScreenTabletStyle } from './signUpScreenTablet.style';

export class SignUpScreenTablet extends LitElement {
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
      ${SignUpScreenTabletStyle}
    </style>
    <div data-layer="14ef06a3-f8a4-4875-8b7c-dc6b1fdc98f6" class="signUpScreenTablet">        <div data-layer="ec8a8793-51ab-4ff7-86b6-93f719a2a6e5" class="rectangle3"></div>
        <div data-layer="3267a69b-8756-43ed-b5da-e5a5f9216361" class="rectangle6"></div>
        <div data-layer="12dcc6ca-f01b-431e-826b-b64c38e59d54" class="cordonBleuLogo"></div>
        <div data-layer="09bc4680-0cd1-45e4-bed3-896ec63a9f58" class="group3">            <div data-layer="6635e9ac-e232-4465-93f0-c40bcd1b26cf" class="rectangle1"></div>
            <div data-layer="24da0f38-b278-49f9-ac17-bb88bb801e33" class="rectangle2"></div>
            <div data-layer="16b62143-0768-4aad-b0f2-8a0018e332e0" class="signUp">SIGN UP</div>
            <div data-layer="4d10024a-a447-4663-aadc-d643b3a54a25" class="signIn">SIGN IN</div>
</div>
        <div data-layer="96be1898-31c2-4515-82a4-3a89035f2d3f" class="orderFoodFromOurhomeChefs">Order food from our<br />home chefs</div>
        <div data-layer="3ef3cfae-5602-43fb-9b12-33d24810aa39" class="faqs">FAQ's</div>
        <div data-layer="47d9d461-0197-4ad6-ab0d-dff23e08d6aa" class="termsAndConditions">Terms and Conditions</div>
        <div data-layer="6a3083d1-f948-4d9d-b675-8122faf0f010" class="followUs">Follow us</div>
        <div data-layer="49c0b078-2175-4500-b6cf-38af0f8aa057" class="x262c1c60">|</div>
        <div data-layer="244dff82-8c49-4b82-8f77-fb3ae4f916cd" class="x735400ec">|</div>
        <div data-layer="943d33d5-3d7d-4789-b28a-dd230996e5d0" class="x4be5e8b6">|</div>
        <div data-layer="ccbb76ba-1aef-41ca-b8fd-67a0bc16f007" class="privacy">Privacy</div>
        <div data-layer="3922da96-aa69-4629-bd97-cc45cc2e7d7d" class="cookies">Cookies</div>
        <div data-layer="e2aa5184-fb44-410b-8542-f526f2328230" class="whereDoYouLive">Where do you live?</div>
        <div data-layer="b2654b64-8e1c-4d32-ac52-30f2b5f5c775" class="group7">            <div data-layer="e0bbb48c-d4b2-4bbc-9514-9e2e33c9029e" class="delivery">Delivery</div>
            <div data-layer="e567791d-f0da-432f-809c-089b8d050eea" class="pickup">Pickup</div>
            <div data-layer="6967ecd8-903c-4958-909c-bdaac70eb28e" class="group1">                <div data-layer="3f2ed089-4acb-43d7-8e4c-76c7c171beea" class="rectangle4"></div>
                <svg data-layer="75309659-c60c-4793-b5d5-b387f85d8815" preserveAspectRatio="none" viewBox="0 0 30.595947265625 30.595916748046875" class="ellipse1"><path d="M 15.29795742034912 0 C 23.74678611755371 0 30.59591484069824 6.849128723144531 30.59591484069824 15.29795742034912 C 30.59591484069824 23.74678611755371 23.74678611755371 30.59591484069824 15.29795742034912 30.59591484069824 C 6.849128723144531 30.59591484069824 0 23.74678611755371 0 15.29795742034912 C 0 6.849128723144531 6.849128723144531 0 15.29795742034912 0 Z"  /></svg>
</div>
</div>
        <div data-layer="9e0b2935-cbae-4e00-809c-674ded09308f" class="group5">            <div data-layer="9f30668c-eb71-4d88-9598-14d33cd17301" class="rectangle5"></div>
            <div data-layer="9f17bbb3-b616-41aa-9d78-e898430b6b46" class="searchda61e8be">Search</div>
            <div data-layer="ce34a2a6-47ad-4baf-a4ec-a4ec3efa56dd" class="search">                <svg data-layer="e441aac1-480d-4f3e-9b5e-3494c5444d6c" preserveAspectRatio="none" viewBox="22.837997436523438 22.834989547729492 8.272705078125 8.273590087890625" class="path1"><path d="M 23.25092315673828 23.24980354309082 C 23.51616668701172 22.98422050476074 23.87611770629883 22.83498954772949 24.25146865844727 22.83498954772949 C 24.6268196105957 22.83498954772949 24.98677062988281 22.98422050476074 25.25201034545898 23.24980354309082 L 30.69593048095703 28.69372177124023 C 31.24851608276367 29.24578857421875 31.24894332885742 30.14128112792969 30.69687271118164 30.69386672973633 C 30.14480972290039 31.24645233154297 29.24931335449219 31.24687385559082 28.69672775268555 30.6948127746582 L 23.2528076171875 25.25089263916016 C 22.98722839355469 24.98564910888672 22.83799743652344 24.62569999694824 22.83799743652344 24.25035095214844 C 22.83799743652344 23.87500190734863 22.98722839355469 23.51505088806152 23.2528076171875 23.24980545043945 Z"  /></svg>
                <svg data-layer="2c19c65e-e6f8-465a-8651-a48f76683cdb" preserveAspectRatio="none" viewBox="0 0 18.383056640625 18.38311767578125" class="path2"><path d="M 9.191564559936523 16.96904182434082 C 13.48694610595703 16.96904182434082 16.96904182434082 13.48694705963135 16.96904182434082 9.191564559936523 C 16.96904182434082 4.896182060241699 13.48694610595703 1.414087414741516 9.191563606262207 1.414087414741516 C 4.896181106567383 1.414087414741516 1.414084434509277 4.896183967590332 1.414085626602173 9.191566467285156 C 1.414085626602173 13.48694896697998 4.896182060241699 16.96904563903809 9.191564559936523 16.96904182434082 Z M 18.38312911987305 9.191564559936523 C 18.38312911987305 14.26792526245117 14.26792526245117 18.38312911987305 9.191563606262207 18.38312911987305 C 4.115203380584717 18.38312911987305 0 14.26792526245117 0 9.191563606262207 C 0 4.115203380584717 4.115204334259033 0 9.19156551361084 0 C 14.26792526245117 0 18.38312911987305 4.115204334259033 18.38312911987305 9.19156551361084 Z"  /></svg>
</div>
</div>
        <div data-layer="c69a3346-4687-48e0-b505-4e35fbc6f4db" class="group6">            <div data-layer="e9e5a273-b682-4385-b851-bb4de3e63393" class="contactUs">CONTACT US</div>
            <div data-layer="6dbc83ec-7505-49a5-ba05-3fc734c661d3" class="group4">                <div data-layer="f98e1dd9-9dde-4e3f-953e-799a086581c1" class="cart">                    <svg data-layer="eff75455-8c1a-4dba-a3ab-77d1e5dc9b77" preserveAspectRatio="none" viewBox="4.320000171661377 5.760000228881836 21.599853515625 18.719993591308594" class="path3"><path d="M 25.20000076293945 24.47999954223633 L 9.359999656677246 24.47999954223633 C 9.144000053405762 24.47999954223633 8.927999496459961 24.33600044250488 8.783999443054199 24.1919994354248 C 8.639999389648438 24.04799842834473 8.639999389648438 23.76000022888184 8.711999893188477 23.54399871826172 L 10.07999992370605 20.08799934387207 L 8.711999893188477 7.199999809265137 L 4.320000171661377 7.199999809265137 L 4.320000171661377 5.760000228881836 L 9.360000610351563 5.760000228881836 C 9.720000267028809 5.760000228881836 10.00800037384033 6.048000335693359 10.08000087738037 6.407999992370605 L 11.52000045776367 20.0880012512207 C 11.52000045776367 20.23200035095215 11.52000045776367 20.30400085449219 11.44800090789795 20.44800186157227 L 10.4399995803833 23.04000091552734 L 25.92000007629395 23.04000091552734 L 25.20000076293945 24.48000144958496 Z"  /></svg>
                    <svg data-layer="09d7529b-c891-4372-a598-5412f1b2f07f" preserveAspectRatio="none" viewBox="10.079999923706055 8.639999389648438 18.719970703125 12.240005493164062" class="path4"><path d="M 10.94400024414063 20.8799991607666 L 10.6560001373291 19.43999862670898 L 27.36000061035156 15.98400020599365 L 27.36000061035156 10.07999992370605 L 10.07999992370605 10.07999992370605 L 10.07999992370605 8.639999389648438 L 28.07999992370605 8.639999389648438 C 28.51199913024902 8.639999389648438 28.79999923706055 8.927999496459961 28.79999923706055 9.359999656677246 L 28.79999923706055 16.55999946594238 C 28.79999923706055 16.92000007629395 28.58399963378906 17.20800018310547 28.2239990234375 17.27999877929688 L 10.94399833679199 20.8799991607666 Z"  /></svg>
                    <svg data-layer="feff050f-942f-423d-8998-2ef83ac23cd0" preserveAspectRatio="none" viewBox="23.040000915527344 23.039997100830078 5.760009765625 5.760009765625" class="path5"><path d="M 25.92000007629395 28.79999923706055 C 24.33600044250488 28.79999923706055 23.04000091552734 27.50399971008301 23.04000091552734 25.91999816894531 C 23.04000091552734 24.33599662780762 24.33600044250488 23.03999710083008 25.92000198364258 23.03999710083008 C 27.50400352478027 23.03999710083008 28.80000305175781 24.33599662780762 28.80000305175781 25.91999816894531 C 28.80000305175781 27.50399971008301 27.50400352478027 28.79999923706055 25.92000198364258 28.79999923706055 Z M 25.92000007629395 24.47999954223633 C 25.12800025939941 24.47999954223633 24.47999954223633 25.12800025939941 24.47999954223633 25.92000007629395 C 24.47999954223633 26.71199989318848 25.12800025939941 27.36000061035156 25.92000007629395 27.36000061035156 C 26.71199989318848 27.36000061035156 27.36000061035156 26.71199989318848 27.36000061035156 25.92000007629395 C 27.36000061035156 25.12800025939941 26.71199989318848 24.47999954223633 25.92000007629395 24.47999954223633 Z"  /></svg>
                    <svg data-layer="960bac91-2eb5-4ec8-9d52-ebf7a7912d2c" preserveAspectRatio="none" viewBox="5.760000228881836 23.039997100830078 5.760009765625 5.760009765625" class="path6"><path d="M 8.640000343322754 28.79999923706055 C 7.056000232696533 28.79999923706055 5.760000228881836 27.50399971008301 5.760000228881836 25.91999816894531 C 5.760000228881836 24.33599662780762 7.056000232696533 23.03999710083008 8.640000343322754 23.03999710083008 C 10.22400093078613 23.03999710083008 11.52000045776367 24.33599662780762 11.52000045776367 25.91999816894531 C 11.52000045776367 27.50399971008301 10.22400093078613 28.79999923706055 8.640000343322754 28.79999923706055 Z M 8.640000343322754 24.47999954223633 C 7.848000526428223 24.47999954223633 7.200000286102295 25.12800025939941 7.200000286102295 25.92000007629395 C 7.200000286102295 26.71199989318848 7.848000526428223 27.36000061035156 8.640000343322754 27.36000061035156 C 9.432000160217285 27.36000061035156 10.07999992370605 26.71199989318848 10.07999992370605 25.92000007629395 C 10.07999992370605 25.12800025939941 9.432000160217285 24.47999954223633 8.639999389648438 24.47999954223633 Z"  /></svg>
</div>
                <svg data-layer="12fa4eea-0156-4d33-8e6d-80ed550a4e74" preserveAspectRatio="none" viewBox="7.5 12 9.699951171875 5.5428314208984375" class="dropDown"><path d="M 7.5 12 L 12.3499755859375 17.5428295135498 L 17.199951171875 12 L 7.5 12 Z"  /></svg>
</div>
</div>
        <div data-layer="ed0d4183-7bbb-4bb9-bdd7-bdfa2bcdd6d3" class="group8">            <div data-layer="8bd985e7-001f-4486-85e8-0624ecb7bd31" class="signUpAndGetAChanceToDeliverYourHandMadeFood">Sign Up and get a chance to deliver your hand made food...</div>
            <div data-layer="25517335-28e1-42dc-bd3c-2d3c0997ff86" class="becomeACordonBleuChef">BECOME A CORDON BLEU CHEF</div>
            <div data-layer="8d246eb1-c96c-4841-aeb1-5f04e65ecb0a" class="cordonBleuLogo01"></div>
</div>
        <div data-layer="26bc09ee-1819-4665-841b-a492b5ed7027" class="group9">            <div data-layer="e0b10d33-03a2-43bb-b843-7020c9d100c7" class="lendYourKitchenToAHomeChefAndSoOn">Lend your kitchen to a home chef and so on...</div>
            <div data-layer="d2ee6689-3ee6-4356-a74b-6c3f910ebc66" class="lendYourKitchen">LEND YOUR KITCHEN</div>
            <svg data-layer="c7be51b6-0238-4a2d-b713-1272fb7b5e9d" preserveAspectRatio="none" viewBox="3 6 30 25.4998779296875" class="kitchenCooker"><path d="M 6.401999950408936 30 L 6 30 C 4.343145370483398 30 3 28.6568546295166 3 27 L 3 9 C 3 7.343145370483398 4.343146324157715 5.999999523162842 6.000000476837158 6 L 30 6 C 31.6568546295166 6 33 7.343145847320557 33 9 L 33 27 C 33 28.6568546295166 31.6568546295166 30 30 30 L 29.59799957275391 30 C 29.06208038330078 30.92812728881836 28.07174110412598 31.4998664855957 27 31.4998664855957 C 25.92825889587402 31.4998664855957 24.93791961669922 30.92812728881836 24.40200042724609 30 L 11.59799957275391 30 C 11.06208229064941 30.92812919616699 10.07174205780029 31.49986839294434 9 31.49986839294434 C 7.928257465362549 31.49986839294434 6.937918186187744 30.92812919616699 6.401999950408936 30 Z M 6 9 L 6 27 L 30 27 L 30 9 L 6 9 Z M 9 18 L 27 18 L 27 24 L 9 24 L 9 18 Z M 9 12 L 16.5 12 L 16.5 15 L 9 15 L 9 12 Z M 15 19.5 L 15 21 L 21 21 L 21 19.5 L 15 19.5 Z M 21 15 C 20.17157363891602 15 19.5 14.3284273147583 19.5 13.5 C 19.5 12.6715726852417 20.17157363891602 12 21 12 C 21.82842636108398 12 22.5 12.6715726852417 22.5 13.5 C 22.5 14.3284273147583 21.82842636108398 15 21 15 Z M 25.5 15 C 24.67157363891602 15 24 14.3284273147583 24 13.5 C 24 12.6715726852417 24.67157363891602 12 25.5 12 C 26.32842636108398 12 27 12.6715726852417 27 13.5 C 27 14.3284273147583 26.32842636108398 15 25.5 15 Z"  /></svg>
</div>
        <div data-layer="23dc979e-d61d-4c99-a3b9-d18500d8ac45" class="rectangle7"></div>
        <div data-layer="3162ac6c-9d9d-47a3-9cd6-19f2f5bfc8db" class="arrowSmallUp">            <svg data-layer="c9a8b3ee-fe03-44a2-9ebe-b01feff04633" preserveAspectRatio="none" viewBox="11.249984741210938 -5.0000152587890625 15.1376953125 9.4666748046875" class="path7"><path d="M 11.24998474121094 2.554527282714844 L 18.80452919006348 -5.000015258789063 L 18.83314514160156 -5.000015258789063 L 26.3876895904541 2.554527282714844 L 24.5286693572998 4.439509868621826 L 18.83986663818359 -1.223327398300171 L 18.79898834228516 -1.222146272659302 L 13.10900115966797 4.466659069061279 L 11.24998474121094 2.554527282714844 Z"  /></svg>
</div>
        <svg data-layer="0032f326-cb2a-4b97-9cd6-b4c5e1357529" preserveAspectRatio="none" viewBox="0 0 35.998046875 35.780029296875" class="facebook"><path d="M 35.99700164794922 18 C 35.99700164794922 8.057999610900879 27.93900299072266 0 17.99900245666504 0 C 8.057999610900879 0 0 8.057999610900879 0 18 C 0 26.98200035095215 6.581999778747559 34.42800140380859 15.18599987030029 35.77799987792969 L 15.18599987030029 23.20199966430664 L 10.61699962615967 23.20199966430664 L 10.61699962615967 17.99799919128418 L 15.18599891662598 17.99799919128418 L 15.18599891662598 14.03400039672852 C 15.18599891662598 9.522000312805176 17.87399864196777 7.03100061416626 21.98399925231934 7.03100061416626 C 23.95399856567383 7.03100061416626 26.01299858093262 7.38200044631958 26.01299858093262 7.38200044631958 L 26.01299858093262 11.81100082397461 L 23.7450008392334 11.81100082397461 C 21.51000022888184 11.81100082397461 20.8120002746582 13.19900131225586 20.8120002746582 14.6220006942749 L 20.8120002746582 18 L 25.80400085449219 18 L 25.00600051879883 23.20400047302246 L 20.8120002746582 23.20400047302246 L 20.8120002746582 35.77999877929688 C 29.41600036621094 34.43000030517578 35.99800109863281 26.98399925231934 35.99800109863281 18.00099945068359 Z"  /></svg>
        <svg data-layer="bcb03015-f6f6-4c6d-b966-00e407735c4d" preserveAspectRatio="none" viewBox="-1.5967241905837787e-13 -3.9917999461458464e-12 36 36" class="circleinstagram"><path d="M 18 36 C 15.56266593933105 36 13.23066711425781 35.52533340454102 11.00399971008301 34.57600021362305 C 8.777332305908203 33.62666702270508 6.861332893371582 32.34933471679688 5.255999565124512 30.74399948120117 C 3.650666236877441 29.1386661529541 2.373332977294922 27.22266578674316 1.424000024795532 24.99600028991699 C 0.474666953086853 22.76933479309082 3.178914482759865e-07 20.43733406066895 0 18 C -3.178914482759865e-07 15.56266498565674 0.4746663570404053 13.23066520690918 1.424000024795532 11.00399971008301 C 2.373333692550659 8.777334213256836 3.650666952133179 6.861334323883057 5.25600004196167 5.255999565124512 C 6.861332893371582 3.650664806365967 8.777332305908203 2.373331785202026 11.00399971008301 1.424000024795532 C 13.23066711425781 0.4746682643890381 15.56266593933105 1.589457269801642e-06 18 0 C 20.43733406066895 -1.589457269801642e-06 22.76933288574219 0.4746650457382202 24.99600028991699 1.424000024795532 C 27.2226676940918 2.373334884643555 29.1386661529541 3.650668144226074 30.74399948120117 5.25600004196167 C 32.34933471679688 6.861331939697266 33.62666702270508 8.777331352233887 34.57600021362305 11.00399971008301 C 35.52533340454102 13.23066806793213 36 15.56266784667969 36 18 C 36 20.43733215332031 35.52533340454102 22.76933288574219 34.57600021362305 24.99600028991699 C 33.62666702270508 27.2226676940918 32.34933471679688 29.13866806030273 30.74399948120117 30.74399948120117 C 29.1386661529541 32.34933090209961 27.22266578674316 33.62666320800781 24.99599838256836 34.57600021362305 C 22.76933097839355 35.52533721923828 20.43733215332031 36.00000381469727 17.99999809265137 36 Z M 27 11.25 C 27 10.64066696166992 26.78333282470703 10.1133337020874 26.35000038146973 9.668000221252441 C 25.91666793823242 9.22266674041748 25.38333320617676 9 24.75 9 L 11.25 9 C 10.64066696166992 9 10.1133337020874 9.22266674041748 9.668000221252441 9.668000221252441 C 9.22266674041748 10.1133337020874 9 10.64066696166992 9 11.25 L 9 13.5 L 13.00799942016602 13.5 C 14.36733245849609 12 16.03133201599121 11.25 18 11.25 C 19.96866798400879 11.25 21.63266754150391 12 22.99200057983398 13.5 L 27 13.5 L 27 11.25 Z M 13.5 18 C 13.5 19.24200057983398 13.93933296203613 20.30266761779785 14.81799983978271 21.18199920654297 C 15.6966667175293 22.06133079528809 16.75733375549316 22.50066566467285 18 22.5 C 19.24266624450684 22.49933433532715 20.3033332824707 22.06000137329102 21.18199920654297 21.18199920654297 C 22.06066513061523 20.30399703979492 22.49999809265137 19.24333000183105 22.5 18 C 22.50000190734863 16.75666999816895 22.06066703796387 15.69600296020508 21.18199920654297 14.81799983978271 C 20.30333137512207 13.93999671936035 19.2426643371582 13.50066375732422 18 13.5 C 16.7573356628418 13.49933624267578 15.69666862487793 13.93866920471191 14.81799983978271 14.81799983978271 C 13.9393310546875 15.69733047485352 13.49999713897705 16.75799751281738 13.5 18 Z M 27 15.75 L 24.32799911499023 15.75 C 24.60933303833008 16.5233325958252 24.75 17.2733325958252 24.75 18 C 24.75 19.87533378601074 24.09366607666016 21.4689998626709 22.7810001373291 22.7810001373291 C 21.46833419799805 24.0930004119873 19.87466621398926 24.74933433532715 18 24.75 C 16.12533378601074 24.75066566467285 14.53166675567627 24.09433364868164 13.2189998626709 22.7810001373291 C 11.90633296966553 21.46766662597656 11.25 19.87400054931641 11.25 18 C 11.25 17.2733325958252 11.39066696166992 16.5233325958252 11.67199993133545 15.75 L 9 15.75 L 9 24.75 C 9 25.38266563415527 9.216666221618652 25.91600036621094 9.649999618530273 26.35000038146973 C 10.08333301544189 26.78400039672852 10.61666584014893 27.00066757202148 11.25 27 L 24.75 27 C 25.38266563415527 27 25.91600036621094 26.78333282470703 26.35000038146973 26.35000038146973 C 26.78400039672852 25.91666793823242 27.00066757202148 25.38333320617676 27 24.75 L 27 15.75 Z"  /></svg>
</div>

    `;
  }
}
customElements.define('signUpScreenTablet-element', SignUpScreenTablet);
