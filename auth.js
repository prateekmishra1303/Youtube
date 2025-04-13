class User{
    constructor(){

    }

    validateUsername(username){

        // if(username.includes('@)){
    // return false;
    // }else{
        // return true;
    // }    
    
    return username.includes('@')? false: true;

    }

    validatePassword(password){

        //if password length is less than 8, return false else return true
        
        return password.length < 8 ? false: true;

    }


    async signup(n, e, u, p){


        //u ->username
        //p ->password

        let isValidated = this.validateUsername(u) && this.validatePassword(p);
        
        if(isValidated){
           
            //if condition satisfies then store the data

            this.name = n;
            this.email = e;
            this.username = u;
            this.password = p;
            // this.mobile = m;
            // this.description = d;

            //const register_api ="https://masai-api-mocker.herokuapp.com/auth/register";

           const register_api ="https://jsonplaceholder.typicode.com/users";

            const response = await fetch(register_api,{
                method: 'POST',
                body: JSON.stringify(this),
              //  mode: 'no-cors',

                headers: {
                    'Content-Type': 'application/json',
                   // 'Authorization': 'Bearer auth/register'
            },
        });

        const data =await response.json();
        console.log('data', data);
        
     }
    }

    async Login(u,p){
        const login_data ={
            username: u,
            password: p,
        };
        event.preventDefault();
        const login_api = 'https://jsonplaceholder.typicode.com/users';

        const response = await fetch(login_api, {
            method: 'POST',
            body: JSON.stringify(login_data),

            headers:{
                'Content-Type': 'application/json'
            },
        });

        const data = await response.json();
        // console.log('data:', data);
        return data;

    }
}

let user= new User();

const Register = () => {
    event.preventDefault();
    console.log('Register button clicked');
    const reg_form = document.getElementById('reg_form');

    const name = reg_form.name.value;
    const email = reg_form.email.value;
    const username = reg_form.username.value;
    const password = reg_form.password.value;
    // const mobile = reg_form.mobile.value;
    // const description = reg_form.description.value;

    console.log('User data:', {
        name, email, username, password, 
    });

    user.signup(name, email, username, password);
    // console.log('user', user);
};

const Login = async () => {
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

 let data = await user.Login(username, password);

    getProfile(username, password);
};

const getProfile = async (username, password) => {
    let api_Link = "https://jsonplaceholder.typicode.com/users";

    let response = await fetch(api_Link); 

    let  = await response.json();
    console.log('data:', data);
};

// 2:00:00
