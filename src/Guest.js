//..........if else.................

// import React, { Component } from 'react'

// export default class Guest extends Component {
//     render() {
//         return (
//             <div>
//                 <h1>Welcome Guest</h1>
//                 <button>Login</button>
//                 <button>SignUp</button>
//             </div>
//         )
//     }
// }


//.............if else statement.............


// import React, { Component } from 'react'

// export default class Guest extends Component {
//     render() {
//         return (
//             <>
//             <h1>Welcome guest</h1>
//             <button onClick={this.props.clickData}>Login</button>
//             <button>SignUp</button>
                
//             </>
//         )
//     }
// }


//...Inline if-else with conditional operator.....


// import React, { Component } from 'react'

// export default class Guest extends Component {
//     render() {
//         return (
//             <>
//             <h1>Welcome guest</h1>
//             <button onClick={this.props.clickData}>Login</button>
//             <button>SignUp</button>
                
//             </>
//         )
//     }
// }



//...IIFE(immediately invoked function expression)...


import React, { Component } from 'react'

export default class Guest extends Component {
    render() {
        return (
            <>
            <h1>Welcome guest</h1>
            <button onClick={this.props.clickData}>Login</button>
            <button>SignUp</button>
                
            </>
        )
    }
}