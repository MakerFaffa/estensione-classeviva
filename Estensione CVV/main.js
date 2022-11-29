var link = window.location.href

if(link.includes('https://web.spaggiari.eu/cvv/app/default/genitori_voti.php')) {
    var riga_materie = document.getElementsByClassName("riga_materia_componente")

    var colorID = 0
    var media_tot = 0
    var materie_tot = 0
    for (let index = 0; index < riga_materie.length; index++) {
        var materia = riga_materie[index]
        materie_tot++;

        var title = materia.getElementsByClassName("materia_desc")[0];
        title.innerText = title.innerText.toUpperCase()
        
        if(colorID == 0)
        {
            title.parentElement.classList.remove("graytext")
            title.parentElement.classList.add("blacktext")
            colorID = 1
        }
        else
        {
            colorID = 0
        }

        title.parentElement.classList.remove("font_size_14")
        title.parentElement.classList.add("font_size_13")
        
        var voti = []

        var voti_pos = materia.getElementsByClassName("f_reg_voto_positivo")
        for (let votoID = 0; votoID < voti_pos.length; votoID++) {if(voti_pos[votoID].getElementsByClassName("s_reg_testo")[0].innerText != ""){voti.push(voti_pos[votoID].getElementsByClassName("s_reg_testo")[0].innerText)}}        

        var voti_neg = materia.getElementsByClassName("f_reg_voto_negativo")
        for (let votoID = 0; votoID < voti_neg.length; votoID++) {if(voti_neg[votoID].getElementsByClassName("s_reg_testo")[0].innerText != ""){voti.push(voti_neg[votoID].getElementsByClassName("s_reg_testo")[0].innerText)}}
        
        var media = 0
        
        var totVoti = 0
        var quantVoti = 0


        for (let votoID = 0; votoID < voti.length; votoID++) {
            const voto = voti[votoID]
            
            var numVoto = 0
            
            if(voto.includes("-")){
                numVoto = parseFloat(voto.split("-")[0]) - 0.25
            }
            else if(voto.includes("+")){
                numVoto = parseFloat(voto.split("+")[0]) + 0.25
            }
            else if(voto.includes("½")){
                numVoto = parseFloat(voto.split("½")[0]) + 0.5
            }
            else
            {
                numVoto = parseFloat(voto)
            }
            
            
            if(numVoto != NaN)
            {
                totVoti += numVoto;
                quantVoti += 1;
            }
            
            media = (totVoti / quantVoti).toFixed(1)
        }
        
        title.innerText = title.innerText + " (" + media + ")" 
        media_tot += totVoti / quantVoti
    }

    var media_totale = document.createElement('h1')
    media_totale.style = "text-align:center;"
    media_totale.classList.add("blacktext")
    media_totale.innerText = "MEDIA TOTALE: " + (media_tot / materie_tot).toFixed(1)
    document.getElementsByClassName("page-container")[0].append(media_totale)


    document.body.style.backgroundColor = "#202020"
    document.body.style.height = "2hrem"
    
    document.getElementsByClassName("page-container")[0].style.backgroundColor = "#303030"
    document.getElementsByClassName("navbar")[0].style.backgroundColor = "#252525"
    document.getElementById("tabs").style.backgroundColor = "#303030"
    document.getElementById("tabs").style.border = "unset"
    document.getElementById("S1").style.backgroundColor = "#303030"
    document.getElementById("S1").children[2].style.backgroundColor = "#303030"
    document.getElementsByClassName("table_sessione")[0].style.backgroundColor = "#303030"
    
    const riga =  document.querySelectorAll('[colspan="2"]')
    for (let index = 0; index < riga.length; index++) {
        const element = riga[index];
        element.style.backgroundColor = "#303030"
        
        if(element.classList.contains("f_reg_voto_sfo2"))
        {
            element.parentElement.removeChild(element)
        }
        else
        {
            element.style.border = "solid 1px #303030"
        }
    }
    
    const mat =  document.querySelectorAll('[colspan="16"]')
    for (let index = 0; index < mat.length; index++) {
        const element = mat[index];
        element.style.backgroundColor = "#303030"
        element.style.color = "#fff"
        element.classList.remove("blacktext");
        element.classList.remove("graytext");
    }
}
if(link.includes("https://web.spaggiari.eu/home/app/default/menu_webinfoschool_genitori.php")) {
    var container = document.getElementById("data_table")
    
    var item = document.getElementsByClassName("griglia rigtab")[0]
    
    var clone = item.cloneNode(true);
    
    clone.querySelectorAll('[colspan="9"]')[0].getElementsByClassName("handwriting_2 ")[0].innerText = "Medie"
    clone.querySelectorAll('[colspan="9"]')[0].getElementsByClassName("graytext")[0].innerText = "Visualizza"
    clone.querySelectorAll('[colspan="9"]')[0].querySelector('a').href = "				../../../cvv/app/default/genitori_voti.php"
    
    var user = container.getElementsByClassName("page-usr")[0].querySelectorAll('[colspan="18"]')[0].getElementsByClassName("name")[0].innerText.split(" ")[0];
    
    clone.querySelectorAll('[colspan="22"]')[0].getElementsByClassName("double_vocemenu handwriting")[0].innerText = `Visualizza le medie di ${user}`
    clone.querySelectorAll('[colspan="22"]')[0].getElementsByClassName("single_vocemenu")[0].innerHTML = '&nbsp;'
    clone.querySelectorAll('[colspan="22"]')[0].querySelector('a').href = "				../../../cvv/app/default/genitori_voti.php"
    
    container.appendChild(clone)
    
    document.body.style.backgroundColor = "#202020"
    document.getElementsByClassName("page-container")[0].style.backgroundColor = "#303030"
    document.getElementsByClassName("page-container")[0].style.height = "100%"
    
    const rigtab = document.getElementsByClassName("rigtab")
    
    for (let index = 0; index < rigtab.length; index++) {
        const element = rigtab[index];
        element.style.borderLeft = "0"
        element.style.borderRight = "0"
        
        const rigtabch = rigtab[index].children
        
        for (let index = 0; index < rigtabch.length; index++) {
            const elementc = rigtabch[index];
            elementc.style.borderLeft = "0"
            elementc.style.borderRight = "0"
            
            if(elementc.getAttribute("colspan") == "3")
            {
                elementc.children[0].removeChild(elementc.children[0].children[0])
            }
        }
        
    }

    const span = document.querySelectorAll('span')
    
    for (let index = 0; index < span.length; index++) {
        const element = span[index];
        element.style.color = "#fff"
    }
    const p = document.querySelectorAll('p')
    
    for (let index = 0; index < p.length; index++) {
        const element = p[index];
        if(!element.classList.contains("handwriting_2")) element.style.color = "#fff"
    }
    const font = document.querySelectorAll('font')
    
    for (let index = 0; index < font.length; index++) {
        const element = font[index];
        element.style.color = "#fff"
    }
    const h1 = document.querySelectorAll('h1')
    
    for (let index = 0; index < h1.length; index++) {
        const element = h1[index];
        element.style.color = "#fff"
    }
    const h2 = document.querySelectorAll('h2')
    
    for (let index = 0; index < h2.length; index++) {
        const element = h2[index];
        element.style.color = "#fff"
    }

    const footer = document.getElementById("footer_copyright").innerText = "©2022 Engineered & Powered by Gruppo Spaggiari Parma S.p.A. - Divisione Infoschool - P.IVA 00150470342 - Migliorato da Fabrizio Gasparini"
}    


if(link.includes("https://web.spaggiari.eu/fml/app/default/agenda_studenti.php")) {
    // CSS
    document.body.style.backgroundColor = "#202020"
    document.body.style.height = "max-content"
    
    document.getElementsByClassName("page-container")[0].style.backgroundColor = "#303030"

    const days = document.getElementsByClassName("fc-day-number")

    for (let index = 0; index < days.length; index++) {
        const element = days[index];
        element.style.color = "#fff"
    }

    const span = document.querySelectorAll('span')

    for (let index = 0; index < span.length; index++) {
        const element = span[index];
        element.style.color = "#fff"
    }
    const p = document.querySelectorAll('p')

    for (let index = 0; index < p.length; index++) {
        const element = p[index];
        element.style.color = "#fff"
    }
    const font = document.querySelectorAll('font')

    for (let index = 0; index < font.length; index++) {
        const element = font[index];
        element.style.color = "#fff"
    }
    const h1 = document.querySelectorAll('h1')

    for (let index = 0; index < h1.length; index++) {
        const element = h1[index];
        element.style.color = "#fff"
    }
    const h2 = document.querySelectorAll('h2')

    for (let index = 0; index < h2.length; index++) {
        const element = h2[index];
        element.style.color = "#fff"
    }
    const fcbutton = document.getElementsByClassName("fc-button")

    for (let index = 0; index < fcbutton.length; index++) {
        const element = fcbutton[index];
        element.style = "background-position : unset; background-image: linear-gradient(to bottom, #202020, #353535); border: 1px solid #505050; background-repeat: unset; color: #fff;"
    }
    
    const fcwg = document.getElementsByClassName("fc-widget-content")
    
    for (let index = 0; index < fcwg.length; index++) {
        const element = fcwg[index];
        element.style.border = "1px solid #505050"
    }
    const fcom = document.getElementsByClassName("fc-other-month")
    
    for (let index = 0; index < fcom.length; index++) {
        const element = fcom[index];
        element.style.backgroundColor = "rgb(30,30,30)"
    }
    
    document.querySelector('[colspan="21"]').style.color = "#fff"
    document.querySelector(".luogo").innerText = "|"
    
    document.querySelector(".fc-today").style = "border: 1px solid rgb(80, 80, 80); background-color: rgb(37,37,37)"
    document.querySelector(".fc-state-highlight").style = "border: 1px solid rgb(80, 80, 80); background-color: rgb(37,37,37)"
    
    document.getElementsByClassName("fc-header-center")[0].parentNode.removeChild(document.getElementsByClassName("fc-header-center")[0])
    
    document.querySelector('[alt="lezioni"]').src = "https://i.ibb.co/fYxdqzH/indietro.png"
    document.querySelector('[alt="voti"]').src = "https://i.ibb.co/nkwfhsT/orario.png"
    document.querySelector('[alt="Esportazione Excel"]').src = "https://i.ibb.co/T4cGqCG/excel.png"
    
    document.getElementById("nota_classe_scorr").parentNode.parentNode.style.backgroundColor = "rgb(40,40,40)"
}
