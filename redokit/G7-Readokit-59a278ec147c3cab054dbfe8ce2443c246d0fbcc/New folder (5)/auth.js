async function signup(e){
    e.preventDefault ()
    const email = document.querSelector('#SignUpEmail')
    const password = document.querySelcetor('#SignUpPassword')
    try{
    
   const result = await firebase.auth().createUserWithEmailAndPassword(email.value,password.value)
   M.toast({html:'welcome ${result.user.email',classes:"green"})
   console.log(result)
    }catch(err){
        console.log(err)
        M.toast({html: err.message,classes:"red"})
    }
}