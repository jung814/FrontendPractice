let submit=()=>{
        let values="";
        values += "First Name= "+document.getElementsByName("fname")[0].value+"\n";
        values += "Last Name= "+document.getElementsByName("lname")[0].value+"\n";
        values += "Email= "+document.getElementsByName("email")[0].value+"\n";
        values += "Password= "+document.getElementsByName("passwd")[0].value+"\n";
        alert(values);
    };