var c = 0;

function f1()
{   
    c = c + 1
    if (c==1)
    {
        setTimeout((function (){
            document.getElementById("crucible0").style.display = "none"
            document.getElementById("fun1").style.display = "none"
            document.getElementById("crucible_to_weighingmachine").style.display = "block"
        }), (800))
    }
    else
    {
        alert("You have clicked on the wrong apparatus. Please follow the instructions given above.Refresh to avoid errors")
    }
}

function f2()
{   
    c = c + 1
    if (c==2)
    {
        setTimeout((function (){
            document.getElementById("fun2").style.display = "none"
            document.getElementById("Crucibleinmachine").style.display = "block"
            document.getElementById("crucible_to_weighingmachine").style.display = "none"
        }), (2000))
    }
    else
    {
        alert("You have clicked on the wrong apparatus. Please follow the instructions given above.Refresh to avoid errors")
    }
}

function f3()
{   
    c = c + 1
    if (c==3)
    {
        setTimeout((function (){
            document.getElementById("fun3").style.display = "none"
        }), (2000))
    }
    else
    {
        alert("You have clicked on the wrong apparatus. Please follow the instructions given above.Refresh to avoid errors")
    }
}

function f4()
{   
    c = c + 1
    if (c==4)
    {
        setTimeout((function (){
            document.getElementById("fun4").style.display = "none"
        }), (2000))
    }
    else
    {
        alert("You have clicked on the wrong apparatus. Please follow the instructions given above.Refresh to avoid errors")
    }
}

function f5()
{   
    c = c + 1
    if (c==5)
    {
        setTimeout((function (){
            document.getElementById("fun5").style.display = "none"
            document.getElementById("fancyspoon").style.display = "none"
            document.getElementById("fancyspoon1").style.display = "block"
            document.getElementById("blackpowder").style.display="block"
        }), (1000))
    }
    else
    {
        alert("You have clicked on the wrong apparatus. Please follow the instructions given above.Refresh to avoid errors")
    }
}

function f6()
{
    c= c+1
    if (c==6)
    {
        setTimeout((function(){
            document.getElementById("fun6").style.display= "none"
        }), (1000))
    }
}