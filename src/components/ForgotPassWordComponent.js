exports default ForgotPassword(){
    return(
        <div>
            <form>
                <input type="text" name="uid" id="uid" onChange={()} ></input>
                <button type="submit" id="btn" onClick={(e)=>{sendData(e)}}>submit</button>
                <h1>ForgotPassword</h1>
            </form>
        </div>
    )
}