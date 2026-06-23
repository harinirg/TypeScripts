function showDetails(id: number, name: string, email ?: string){
    console.log("Id: "+id);
    console.log("Name: "+name);
    if(email != undefined){
        console.log("Email: "+email);
    }
}
showDetails(101, "Sam");
showDetails(105, "Sachin", "sachin@gmail.com");
