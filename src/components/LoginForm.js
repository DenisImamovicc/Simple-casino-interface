import React,{useState} from 'react'

function LoginForm({Login,err}) {
    const [details,setDetails]=useState({ userName: "", password: "" })

    const submitHandler = e =>{
        e.preventDefault()
        Login(details)
    }

    return (
        <div className="login" style={{ display: "block" }}>
            <div className="ui grid centered">
                <form onSubmit={submitHandler}>
                    <div className="fields">
                        <div className="required field">
                            <div className="ui icon input">
                                <input type="text" name="username" placeholder="Username" required onChange={e=>setDetails({...details,userName:e.target.value})}  value={details.userName}/>
                                <i className="user icon"></i>
                            </div>
                        </div>
                        <div className="required field">
                            <div className="ui icon input">
                                <input type="password" name="password" placeholder="Password" required onChange={e=>setDetails({...details,password:e.target.value})}  value={details.password}/>
                                <i className="lock icon"></i>
                            </div>
                        </div>
                        <div className="field">
                            <div className="ui icon input">
                                <input type="submit" value="Login" />
                                <i className="right chevron icon"></i>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default LoginForm