let submit=()=>{
        let values="";
        values += "Username = "+document.getElementsByName("username")[0].value+"\n";
        values += "Password = "+document.getElementsByName("passwd")[0].value+"\n";
        alert(values);
    };