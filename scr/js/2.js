

window.addEventListener("DOMContentLoaded", (event) => {
    var prov_1 = 0;
    var radio_who = document.getElementById("radio_who");

    radio_who.addEventListener('change', (event) =>
    {
        prov_1 = 1;
        radio_who.style.backgroundColor = "rgb(255, 255, 255)";
        conti.style.backgroundColor = "rgb(72, 0, 189, 0.7)";
    })

    var prov = 0;

    var back = document.getElementById("back");

    back.addEventListener('click', (event) => 
    {
        window.location.href='site.html';
    })

    var vk = document.getElementById("vk");

    vk.addEventListener('click', (event) => 
    {
        window.location.href='https://homeet.hse.ru/registration';
    })

    var tg = document.getElementById("tg");

    tg.addEventListener('click', (event) => 
    {
        window.location.href='https://homeet.hse.ru/registration';
    })
    var kurs = document.getElementById("kurs");

    var true_end = document.getElementById("true_end");
    var not_hse = document.getElementById("not_hse");
    var edu = document.getElementById("education");

    not_hse.addEventListener('change', (event) =>
    {
        if(true_end.checked) {
            prov = 1;
            edu.innerHTML = "   Не студент";
            conti.style.backgroundColor = "rgb(72, 0, 189, 0.7)";
            kurs.style.color = "rgb(0, 0, 0)";
        }
        else{
            prov = 0;
        }
    })

    var course1 = document.getElementById("course1");
    var course2 = document.getElementById("course2");
    var course3 = document.getElementById("course3");
    var course4 = document.getElementById("course4");
    var course5 = document.getElementById("course5");
    var course6 = document.getElementById("course6");

    course1.addEventListener('click', (event) => 
    {
        prov = 1;
        kurs.style.color = "rgb(0, 0, 0)";
        edu.innerHTML = "   1 курс";
        course1.style.backgroundColor = "rgb(72, 0, 189, 0.7)";
        course1.style.color = "rgb(255, 255, 255)";
        course2.style.backgroundColor = "#f5f5f5";
        course2.style.color = "rgb(0, 0, 0)";
        course3.style.backgroundColor = "#f5f5f5";
        course3.style.color = "rgb(0, 0, 0)";
        course4.style.backgroundColor = "#f5f5f5";
        course4.style.color = "rgb(0, 0, 0)";
        course5.style.backgroundColor = "#f5f5f5";
        course5.style.color = "rgb(0, 0, 0)";
        course6.style.backgroundColor = "#f5f5f5";
        course6.style.color = "rgb(0, 0, 0)";
        conti.style.backgroundColor = "rgb(72, 0, 189, 0.7)";
    })
    course2.addEventListener('click', (event) => 
    {
        prov = 1;
        kurs.style.color = "rgb(0, 0, 0)";
        edu.innerHTML = "   2 курс";
        course1.style.backgroundColor = "#f5f5f5";
        course1.style.color = "rgb(0, 0, 0)";
        course2.style.backgroundColor = "rgb(72, 0, 189, 0.7)";
        course2.style.color = "rgb(255, 255, 255)";
        course3.style.backgroundColor = "#f5f5f5";
        course3.style.color = "rgb(0, 0, 0)";
        course4.style.backgroundColor = "#f5f5f5";
        course4.style.color = "rgb(0, 0, 0)";
        course5.style.backgroundColor = "#f5f5f5";
        course5.style.color = "rgb(0, 0, 0)";
        course6.style.backgroundColor = "#f5f5f5";
        course6.style.color = "rgb(0, 0, 0)";
        conti.style.backgroundColor = "rgb(72, 0, 189, 0.7)";
    })
    course3.addEventListener('click', (event) => 
    {
        prov = 1;
        kurs.style.color = "rgb(0, 0, 0)";
        edu.innerHTML = "   3 курс";
        course1.style.backgroundColor = "#f5f5f5";
        course1.style.color = "rgb(0, 0, 0)";
        course3.style.backgroundColor = "rgb(72, 0, 189, 0.7)";
        course3.style.color = "rgb(255, 255, 255)";
        course2.style.backgroundColor = "#f5f5f5";
        course2.style.color = "rgb(0, 0, 0)";
        course4.style.backgroundColor = "#f5f5f5";
        course4.style.color = "rgb(0, 0, 0)";
        course5.style.backgroundColor = "#f5f5f5";
        course5.style.color = "rgb(0, 0, 0)";
        course6.style.backgroundColor = "#f5f5f5";
        course6.style.color = "rgb(0, 0, 0)";
        conti.style.backgroundColor = "rgb(72, 0, 189, 0.7)";
    })
    course4.addEventListener('click', (event) => 
    {
        prov = 1;
        kurs.style.color = "rgb(0, 0, 0)";
        edu.innerHTML = "   4 курс";
        course1.style.backgroundColor = "#f5f5f5";
        course1.style.color = "rgb(0, 0, 0)";
        course4.style.backgroundColor = "rgb(72, 0, 189, 0.7)";
        course4.style.color = "rgb(255, 255, 255)";
        course2.style.backgroundColor = "#f5f5f5";
        course2.style.color = "rgb(0, 0, 0)";
        course3.style.backgroundColor = "#f5f5f5";
        course3.style.color = "rgb(0, 0, 0)";
        course5.style.backgroundColor = "#f5f5f5";
        course5.style.color = "rgb(0, 0, 0)";
        course6.style.backgroundColor = "#f5f5f5";
        course6.style.color = "rgb(0, 0, 0)";
        conti.style.backgroundColor = "rgb(72, 0, 189, 0.7)";
    })
    course5.addEventListener('click', (event) => 
    {
        prov = 1;
        kurs.style.color = "rgb(0, 0, 0)";
        edu.innerHTML = "   5 курс";
        course1.style.backgroundColor = "#f5f5f5";
        course1.style.color = "rgb(0, 0, 0)";
        course5.style.backgroundColor = "rgb(72, 0, 189, 0.7)";
        course5.style.color = "rgb(255, 255, 255)";
        course2.style.backgroundColor = "#f5f5f5";
        course2.style.color = "rgb(0, 0, 0)";
        course3.style.backgroundColor = "#f5f5f5";
        course3.style.color = "rgb(0, 0, 0)";
        course4.style.backgroundColor = "#f5f5f5";
        course4.style.color = "rgb(0, 0, 0)";
        course6.style.backgroundColor = "#f5f5f5";
        course6.style.color = "rgb(0, 0, 0)";
        conti.style.backgroundColor = "rgb(72, 0, 189, 0.7)";
    })
    course6.addEventListener('click', (event) => 
    {
        prov = 1;
        kurs.style.color = "rgb(0, 0, 0)";
        edu.innerHTML = "   6 курс";
        course1.style.backgroundColor = "#f5f5f5";
        course1.style.color = "rgb(0, 0, 0)";
        course6.style.backgroundColor = "rgb(72, 0, 189, 0.7)";
        course6.style.color = "rgb(255, 255, 255)";
        course2.style.backgroundColor = "#f5f5f5";
        course2.style.color = "rgb(0, 0, 0)";
        course3.style.backgroundColor = "#f5f5f5";
        course3.style.color = "rgb(0, 0, 0)";
        course4.style.backgroundColor = "#f5f5f5";
        course4.style.color = "rgb(0, 0, 0)";
        course5.style.backgroundColor = "#f5f5f5";
        course5.style.color = "rgb(0, 0, 0)";
        conti.style.backgroundColor = "rgb(72, 0, 189, 0.7)";
    })

    var level_ed = document.getElementById("level_ed");
    var step = document.getElementById("step")
    var lab_lev = document.getElementById("lab_lev")
    var prov_2 = 0;

    level_ed.addEventListener('change', (event) =>
    {
        var index_edu = level_ed.step.selectedIndex;
        var name = level_ed.step.options[index_edu].text;
        if (name === "Бакалавриат")
        {
            edu.innerHTML += " бак. ";
            prov_2 = 1;
            step.style.background = "#f5f5f5";
            lab_lev.style.color = "#6e6e6e";
            conti.style.backgroundColor = "rgb(72, 0, 189, 0.7)";
        }
        else if (name === "Магистратура")
        {
            edu.innerHTML += " маг. ";
            prov_2 = 1;
            step.style.background = "#f5f5f5";
            lab_lev.style.color = "#6e6e6e";
            conti.style.backgroundColor = "rgb(72, 0, 189, 0.7)";
        }
        else if (name === "Специалитет")
        {
            edu.innerHTML += " спец. ";
            prov_2 = 1;
            step.style.background = "#f5f5f5";
            lab_lev.style.color = "#6e6e6e";
            conti.style.backgroundColor = "rgb(72, 0, 189, 0.7)";
        }
        else if (name === "Работаю")
        {
            edu.innerHTML = "Не студент, работаю";
            prov_2 = 1;
            step.style.background = "#f5f5f5";
            lab_lev.style.color = "#6e6e6e";
            conti.style.backgroundColor = "rgb(72, 0, 189, 0.7)";
        }
        else
        {
            step.style.background = "#FFCCCC";
            lab_lev.innerHTML = "Ступень образования (обязательно)";
            lab_lev.style.color = "#FF0000";
            prov_2 = 0;
        }
    })

    var facy_ed = document.getElementById("facy_ed");
    var facy = document.getElementById("facy")
    var lab_fac = document.getElementById("lab_fac");
    var prov_3 = 0;

    facy_ed.addEventListener('change', (event) =>
    {
        var index_edu = facy_ed.facy.selectedIndex;
        var name = facy_ed.facy.options[index_edu].text;
        if (index_edu === 0)
        {
            facy.style.background = "#FFCCCC";
            lab_fac.innerHTML = "Факультрет (обязательно)";
            lab_fac.style.color = "#FF0000";
            prov_3 = 0;
        }
        else
        {
            edu.innerHTML += name;
            conti.style.backgroundColor = "rgb(72, 0, 189, 0.7)";
            facy.style.background = "#f5f5f5";
            lab_fac.style.color = "#6e6e6e";
            prov_3 = 1;
        }
    })

    var work = document.getElementById("work");
    var q_3 = document.getElementById("q_3")

    work.addEventListener('change', (event) =>
    {
        q_3.innerHTML += work.value;
    })

    var program = document.getElementById("program");
    var movie = document.getElementById("movie")

    program.addEventListener('change', (event) =>
    {
        var index_edu = program.value;
        var name = movie.children;
    })

    conti.addEventListener('click', (event) => 
    {
        if (prov === 1 && prov_2 === 1 && prov_3 === 1 && prov_1 === 1)
            alert("Good! The end!")
        if (prov_2 === 0)
        {
            step.style.background = "#FFCCCC";
            lab_lev.innerHTML = "Ступень образования (обязательно)";
            lab_lev.style.color = "#FF0000";
        }
        if (prov_3 === 0)
        {
            facy.style.background = "#FFCCCC";
            lab_fac.innerHTML = "Факультрет (обязательно)";
            lab_fac.style.color = "#FF0000";
        }
        if (prov === 0)
        {
            kurs.innerHTML = "Курс (обязательно)";
            kurs.style.color = "#FF0000";
        }
        if (prov_1 === 0)
        {
            radio_who.style.backgroundColor = "#FF0000";
        }


    })

})
    

