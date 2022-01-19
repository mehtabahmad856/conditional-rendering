
import './App.css';
import Posts from './components/Posts';


// function App() {
  
// }

//   return (
//     <div className="App">
      
//       <Posts/>



     
//     </div>
//   );
// }

// export default App;

import React, { Component } from 'react'
import User from './User';
import Guest from './Guest';


//..........if else.................

// export default class App extends Component {
//   render() {
//     const isRegistered = this.props.consumer;
//   if(isRegistered){

//     return <User />
//   }
//   else {

//   return <Guest />

//   }


//     return (
//       <div>
        
//       </div>
//     )
//   }
// }


//.............&& operator.............

// export default class App extends Component {
//   render() {
//     const primeMember = this.props.primeMember
//     return (
//       <>
//       <h1>Welcome User</h1>
//       {primeMember && <User/>}
        
//       </>
//     )
//   }
// }

//.............if else statement.............



// export default class App extends Component {
//     state = {
//         isLoggedIn: false
//     };

//     clickLogin = () =>{
//         this.setState({isLoggedIn:true})
//     }

//     clickLogout = () =>{
//         this.setState({isLoggedIn:false})
//     }



//     render() {
//         const isLoggedIn = this.state.isLoggedIn;
//         let consumer;
//         if(isLoggedIn){
//             consumer = <User clickData= {this.clickLogout}/>
//         }
//         else{
//             consumer = <Guest clickData= {this.clickLogin} />
//         }
//         return (
//             <div>
//                 {consumer}
                
//             </div>
//         )
//     }
// }


//...Inline if-else with conditional operator.....


// export default class App extends Component {
//     state = {
//         isLoggedIn: false
//     };

//     clickLogin = () =>{
//         this.setState({isLoggedIn:true});
//     };

//     clickLogout = () =>{
//         this.setState({isLoggedIn:false});
//     };



//     render() {
//         const isLoggedIn = this.state.isLoggedIn;
        
//         return (
//             <div>
//                 {isLoggedIn ? (
//                      <User clickData={this.clickLogout} /> 
//                 ) : ( 
//                    <Guest clickData={this.clickLogin} />
//                 )}
                
//             </div>
//         );
                
            
//     }
// }


//...IIFE(immediately invoked function expression)...


export default class App extends Component {
    state = {
        isLoggedIn: false
    };

    clickLogin = () =>{
        this.setState({isLoggedIn:true});
    };

    clickLogout = () =>{
        this.setState({isLoggedIn:false});
    };



    render() {
        const isLoggedIn = this.state.isLoggedIn;
        
        return (
            <div>
               {
                   (
                       () => {
                           if(isLoggedIn){
                               return <User clickData={this.clickLogout} />
                           } else {
                               return <Guest clickData={this.clickLogin} />
                           }
                       }
                   )
                   ()
               } 
                
            </div>
        );
                
            
    }
}