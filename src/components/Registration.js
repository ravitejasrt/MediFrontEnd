import React, { Component } from 'react'
import Location from './Location'
import Services from './Services'
import Login from './Login'
import Postcode from './Postcode'
import Steps from './Steps'
import Confirmation from './Confirmation'
import Hospitals from './Hospitals'
import WardDetails from './WardDetails'
import Hospphydtls from './Hospphydtls'

class Registration extends Component {

    constructor(){
        super()
        this.state = {
            step: 1,
            data: "Default parent state",
            theme:'theme',
            SECTION_NAME:'',
            group_name:'',
            location: '',
            action:'',
            actions:'',
            surgvalue:'',
            surgsubvalue:'',
            SECTION_ID:'',
            group_name:'',
            locationError: '',
            services: '',
            servicesError: '',
            confirm: '',
            confirmError: '',
            forename: '',
            forenameError: '',
            surname: '',
            surnameError: '',
            username: '',
            usernameError: '',
            country: '',
            countryError: '',
            postcode: '',
            postcodeError: '',
            terms: false,
            termsError: '',
            name:'',
            isbn:'',
            author:'',
            cover:'',
            status:'',
            books: [
				{
					name: 'Zero to one',
					isbn: '9780804139298',
					author: 'Peter Thiel',
					cover: 'https://images.gr-assets.com/books/1414347376l/18050143.jpg',
					status: false
				}
			]
        }
        this.childHandler = this.childHandler.bind(this)
        this.handleOnChangeSurgical = this.handleOnChangeSurgical.bind(this)
    }

    childHandler(dataFromChild) {
        // log our state before and after we updated it
        alert('%cPrevious Parent State: ' + JSON.stringify(this.state), "color:orange");
        this.setState({
            data: dataFromChild
        },() => console.log('Updated Parent State:', this.state));
        alert(this.state.data)
    }


    validate = () => {
        let isError = false;
        const errors = {
            locationError: '',
            servicesError: '',
            confirmError: '',
            forenameError: '',
            surnameError: '',
            usernameError: '',
            termsError: ''
        }

        if(this.state.location.length < 1){
            isError = true;
            errors.locationError = 'Please enter a valid city';
        }

        if(this.state.step > 1){
            if(this.state.services.length){
                isError = true;
                errors.servicesError = 'services must be at least 4 characters long';
            }

            if(this.state.services !== this.state.confirm && this.state.services.length < 4){
                isError = true;
                errors.confirmError = 'servicess must match';
            }
        }

        if(this.state.step > 2){
            if(this.state.forename.length){
                isError = true;
                errors.forenameError = 'Forename cannot be blank';
            }

            if(this.state.surname.length){
                isError = true;
                errors.surnameError = 'Surname cannot be blank';
            }

            if(this.state.username.length){
                isError = true;
                errors.usernameError = 'Username cannot be blank';
            }
        }


        if(this.state.step > 3){

        }        


        if(this.state.step > 4){

        }    

        if(this.state.step > 5){

        }

        if(this.state.step > 6){
            if(this.state.terms){
                isError = true;
                errors.termsError = 'Please accept the Terms and Conditions by ticking the checkbox';
            }
        }

        this.setState({
            ...this.state,
            ...errors
        })

        return isError;
    }

    next(event){
        event.preventDefault()
        const err = this.validate()
  //      alert("action = "+this.props.action)
  //      alert("action = "+this.props.actions)
  //      alert("action = "+this.state.actions)
        if(!err){
            this.setState({                
                step:this.state.step + 1,
                locationError: '',
                servicesError: '',
                confirmError: '',
                forenameError: '',
                surnameError: '',
                usernameError: '',
                termsError: '',
                isAuthed:this.state.isAuthed,
            })
        }
    }

    prev(){
        const err = this.validate()
        if(!err){
            this.setState({step:this.state.step - 1})
        }
    }

    handleOnChange(e){
        this.setState({[e.target.id]: e.target.value})
    }

    handleOnChangeSurgical(e){
  //      alert("handleOnChangeSurgical details")
 //       alert("e.target.value = "+e.target.value)        
        this.setState({[e.target.id]: e.target.value})
    }
    
    handleOnClickwarddetails(e){
 //       alert("ward details onclick")
        this.setState({[e.target.id]: e.target.value})
    }   

    handleOnCheck(e){
        this.setState({[e.target.id]: !this.state.terms})
    }

    render() {
      switch (this.state.step) {
          case 1:
            return <div>
                <Steps step={this.state.step}/>
                <Location
                   locationError={this.state.locationError}
                   onChange={this.handleOnChange.bind(this)}
                   next={this.next.bind(this)}/>
                </div>
          case 2:
            return <div>
                <Steps step={this.state.step} />
                <Services
                   action={this.childHandler}
                   theme="dark" 
                   SECTION_NAME={this.state.SECTION_NAME}
                   group_name={this.state.group_name}
                   location={this.state.location}
                   surgvalue={this.state.surgvalue}
                   surgsubvalue={this.state.surgsubvalue}
                   services={this.state.services}
                   confirm={this.state.confirm}
                   servicesError={this.state.servicesError}
                   confirmError={this.state.confirmError}
                   onClick={this.handleOnChangeSurgical.bind(this)}
                   next={this.next.bind(this)}
                   prev={this.prev.bind(this)}/>
                </div>
          case 3:
          return <div>
              <Steps step={this.state.step}/>
              <Hospitals
                 name_of_hospital={this.state.name_of_hospital}
                 actions={this.state.action}
                 SECTION_NAME={this.state.SECTION_NAME}
                 group_name={this.state.group_name}
                 location={this.state.location}
                 isAuthed={this.state.isAuthed}
                 surgvalue={this.state.surgvalue}
                 surgsubvalue={this.state.surgsubvalue}
                 SECTION_ID={this.state.SECTION_ID}
                 group_name={this.state.group_name}                 
                 services={this.state.services}
                 confirm={this.state.confirm}
                 servicesError={this.state.servicesError}
                 confirmError={this.state.confirmError}
                 onChange={this.handleOnChange.bind(this)}
                 next={this.next.bind(this)}
                 prev={this.prev.bind(this)}/>
              </div>   
          case 4:
          return <div>
              <Steps step={this.state.step}/>
              <WardDetails
                 name_of_hospital={this.state.name_of_hospital}
                 location={this.state.location}              
                 surgvalue={this.state.surgvalue}
                 surgsubvalue={this.state.surgsubvalue}              
                 services={this.state.services}
                 confirm={this.state.confirm}
                 servicesError={this.state.servicesError}
                 confirmError={this.state.confirmError}
                 onClick={this.handleOnClickwarddetails.bind(this)}
                 next={this.next.bind(this)}
                 prev={this.prev.bind(this)}/>
              </div>                              
          case 5:
            return <div>
                <Steps step={this.state.step}/>
                <Login
                   date={new Date()}  
                   test_name={this.state.test_name}
                   forename={this.state.forename}
                   surname={this.state.surname}
                   username={this.state.username}
                   forenameError={this.state.forenameError}
                   surnameError={this.state.surnameError}
                   usernameError={this.state.usernameError}
                   onChange={this.handleOnChange.bind(this)}
                   next={this.next.bind(this)}
                   prev={this.prev.bind(this)}/>
                </div>
          case 6:
            return <div>
                <Steps step={this.state.step}/>
                <Hospphydtls
                 onChange={this.handleOnChange.bind(this)}
                 email={this.state.email}
                 psw={this.state.psw}     
                 next={this.next.bind(this)}
                 prev={this.prev.bind(this)}                
                />
            </div>

          case 7:
            return <div>
                <Steps step={this.state.step}/>
                <Postcode
                   email={this.state.email}
                   psw={this.state.psw}  
                   country={this.state.country}
                   location={this.state.location}
                   postcode={this.state.postcode}
                   terms={this.state.terms}
                   termsError={this.state.termsError}
                   onChange={this.handleOnChange.bind(this)}
                   onCheck={this.handleOnCheck.bind(this)}
                   next={this.next.bind(this)}
                   prev={this.prev.bind(this)}/>
                </div>
          case 7:
            return <Confirmation 
                   email={this.state.email}
                   psw={this.state.psw}     
                   name={this.state.books[0].name}
				   isbn={this.state.books[0].isbn}
				   author={this.state.books[0].author}
				   cover={this.state.books[0].cover}
				   status={this.state.books[0].status}   
            />
          default:
            return null
        }
    }
}

export default Registration;
