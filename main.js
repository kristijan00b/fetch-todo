$(document).ready(function(){
    var filter=0;
    var fromId= parseInt($("#fromId").val());
    var toId= parseInt($("#toId").val());
    RetriveData(filter,fromId,toId)

    $("#showId").click(function(){
        fromId= parseInt($("#fromId").val());
        toId= parseInt($("#toId").val());
        RetriveData(filter,fromId,toId)
    })

    $("#completedShow").click(function(){
        filter=1;
        fromId= parseInt($("#fromId").val());
        toId= parseInt($("#toId").val());
        RetriveData(filter,fromId,toId)
    })

    $("#notCompletedShow").click(function(){
        filter=2;
        fromId= parseInt($("#fromId").val());
        toId= parseInt($("#toId").val());
        RetriveData(filter,fromId,toId)
    })
    $("#showAll").click(function(){
        filter=0;
        fromId= parseInt($("#fromId").val());
        toId= parseInt($("#toId").val());
        RetriveData(filter,fromId,toId)
    })

    $("#submit").click(function(){
        var ime=$("#ime").val();
        var prezime=$("#prezime").val();
        var email=$("#email").val();
        var phone=$("#phone").val();
        var message=$("#message").val()
        pozdrav(ime, prezime, email, phone)
    })

})

function RetriveData(filter,fromId,toId){
    fetch('https://jsonplaceholder.typicode.com/todos/')
    .then((response)=>{
        return response.json();
    })
    .then((myJson)=>{
        var todoTable=document.getElementById('todoTable');
        var tableData="";
        $.each(myJson,function(index,todoItem){
            if((fromId<=todoItem.id)&&(toId>=todoItem.id)&&(filter==0))
                tableData+=inhtml(todoItem,filter)
            else if((fromId<=todoItem.id)&&(toId>=todoItem.id)&&(filter==1))
                tableData+=inhtml(todoItem,filter)
            else if((fromId<=todoItem.id)&&(toId>=todoItem.id)&&(filter==2))
                tableData+=inhtml(todoItem,filter)
                    

           })
        todoTable.innerHTML=tableData;
    })
}

function color(completed){
    return completed==true? 'success" >Completed':'danger">Not completed'
}

function inhtml(todoItem,filter){
    var p;
    if(filter==0)
        p='<tr><td>'+todoItem.userId+'</td><td>'+todoItem.id+'</td><td style="text-align: left;">'+todoItem.title+
        '</td><td class="d-grid gap-2" ><button type="button" onclick="alert('+todoItem.id+');" class="btn btn-'+color(todoItem.completed)+'</button></td></tr>';
    else if(filter==1)
        p='<tr><td>'+todoItem.userId+'</td><td>'+todoItem.id+'</td><td style="text-align: left;">'+todoItem.title+
        '</td><td class="d-grid gap-2" ><button type="button" onclick="alert('+todoItem.id+');" class="btn btn-'+color(true)+'</button></td></tr>';
    else if(filter==2)    
        p='<tr><td>'+todoItem.userId+'</td><td>'+todoItem.id+'</td><td style="text-align: left;">'+todoItem.title+
        '</td><td class="d-grid gap-2" ><button onclick="alert('+todoItem.id+');" type="button" class="btn btn-'+color(false)+'</button></td></tr>';
    return p;
}

function pozdrav(ime, prezime, email, phone){
    alert('Ime: '+ime+', Prezime: '+prezime+', Email: '+email+', Phone: '+phone)
    document.forma.reset();
}