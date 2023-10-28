

window.addEventListener("DOMContentLoaded", (event) => {
    var home = document.getElementById("home");
    home.addEventListener('click', (event) => 
    {
        alert("Уже? Вы только зашли")
    })
    var exit = document.getElementById("exit");
    exit.addEventListener('click', (event) => 
    {
        alert("Куда? туда нельзя!")
    })


    var in_name = document.getElementById("name");
    var out_name = document.getElementById("out_name");
    var lab_name = document.getElementById("lab_name");
    var k = 0;
    var prov = 0;
    var prov_2 = 0;

    var conti = document.getElementById("conti");

    in_name.oninput = function() {
        if ((in_name.value).match(/^([а-яё][А-ЯЁ]+|[a-z][A-Z]+)$/i))
        {
            out_name.innerHTML = in_name.value;
            in_name.style.background = "#f5f5f5";
            lab_name.style.color = "#6e6e6e";
            prov = 1;
            if (prov === 1 && prov_2 === 1)
            {
                conti.style.backgroundColor = "rgb(72, 0, 189, 0.7)";
            }
        }
        else if (k > 0)
        {
            out_name.innerHTML = "Имя";
            in_name.style.background = "#FFCCCC";
            lab_name.innerHTML = "Имя (введите без цифр и знаков)";
            lab_name.style.color = "#FF0000";
            prov = 0;
        }
        k += 1;
    };

    var t = 0;
    var in_suname = document.getElementById("suname");
    var out_suname = document.getElementById("out_suname");
    var lab_suname = document.getElementById("lab_suname");
    var prov_2 = 0;

    in_suname.oninput = function() {
        if ((in_suname.value).match(/^([а-яё][А-ЯЁ]+|[a-z][A-Z]+)$/i))
        {
            out_suname.innerHTML = in_suname.value;
            in_suname.style.background = "#f5f5f5";
            lab_suname.style.color = "#6e6e6e";
            prov_2 = 1;
            if (prov === 1 && prov_2 === 1)
            {
                conti.style.backgroundColor = "rgb(72, 0, 189, 0.7)";
            }
        }
        else if (t > 0)
        {
            out_suname.innerHTML = "Фамилия";
            in_suname.style.background = "#FFCCCC";
            lab_suname.innerHTML = "Фамилия (введите без цифр и знаков)";
            lab_suname.style.color = "#FF0000";
            prov_2 = 0;
        }
        t += 1;
    };

    var avatar_load = document.getElementById("avatar");
    var avatar_but = document.getElementById("avatar_but");
    var photo_end = document.getElementById("photo_end");
    var photo_load = document.getElementById("photo_load");

    avatar_but.addEventListener('click', (event) => 
    {
        avatar_load.click()
    })

    const reader = new FileReader();

    avatar_load.addEventListener('change', (event) =>
    {
        if (avatar_load)
        {
            const files = event.target.files;
            const file = files[0];
            
            reader.readAsDataURL(file);
  
            reader.addEventListener('load', (event) => {
                photo_end.src = event.target.result;
                photo_end.alt = file.name;
                photo_load.style.backgroundImage = "url(" + event.target.result + ")";
                photo_load.style.backgroundSize = "100% 100%";
            });
        }
    })

    var gen = document.getElementById("gen");
    var radio_gen = document.getElementById("radio_gen");

    radio_gen.addEventListener('change', (event) =>
    {
        if(document.getElementById('huey').checked) {
            gen.innerHTML = "   Парень";
        }
        else if(document.getElementById('dewey').checked) {
            gen.innerHTML = "   Девушка";
        }
    })

    var true_end = document.getElementById("true_end");
    var lets = document.getElementById("lets");
    var show_cotact = document.getElementById("show_cotact");

    lets.addEventListener('change', (event) =>
    {
        if(true_end.checked) {
            show_cotact.style.backgroundColor = "rgb(72, 0, 189, 0.7)";
        }
    })

    var data_birth = document.getElementById("start");
    var age = document.getElementById("age");

    data_birth.addEventListener('change', (event) =>
    {
        let now = new Date();
        year = now.getFullYear()
        month = now.getMonth()
        date = now.getDate()

        var birthday = data_birth.value
        year_b = Number(birthday.slice(0, 4))
        month_b = Number(birthday.slice(5, 7))
        date_b =  Number(birthday.slice(8))

        var value1 = year - year_b
        
        if (month === month_b)
        {
            if (date < date_b)
            {
                value1 -= 1;
            }
        }
        else if (month < month_b)
        {
            value1 -= 1;
        }
        age.innerHTML = value1;
    })

    var tel = document.getElementById("tel");

    tel.oninput = function() {
        if (tel.value.replace(/[^0-9]/g,"").length === 2 && tel.value.replace(/[^(]/g,"").length === 0)
            tel.value = tel.value[0] + '(' + tel.value[1]
        else if (tel.value.replace(/[^0-9]/g,"").length === 5 && tel.value.replace(/[^)]/g,"").length === 0)
            tel.value = tel.value.slice(0, 5) + ')' + tel.value[5]
        else if (tel.value.replace(/[^0-9]/g,"").length === 8 && tel.value.replace(/[^-]/g,"").length === 0)
            tel.value = tel.value.slice(0, 9) + '-' + tel.value[9]
        else if (tel.value.replace(/[^0-9]/g,"").length === 10 && tel.value.replace(/[^-]/g,"").length === 1)
            tel.value = tel.value.slice(0, 12) + '-' + tel.value[12]
    };

    var nik = document.getElementById("nik");

    nik.oninput = function() {
        if (nik.value[1] != "@")
            nik.value = " @" + nik.value
    };

    var taxi = document.getElementById("taxi");
    var me = document.getElementById("me_only");

    me.oninput = function() {
        if (me.value.length % 32 === 31)
            taxi.innerHTML = me.value + '\n'
        else
            taxi.innerHTML = me.value
    };

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

    conti.addEventListener('click', (event) => 
    {
        if (prov === 1 && prov_2 === 1)
            window.location.href='site2.html';
    })

});


// kz.onclick = function () {
//   const rndCol = "rgb(" + random(255) + "," + random(255) + "," + random(255) + ")";
//   document.body.style.backgroundColor = rndCol;
//   kz.backgroundColor = rndCol;
// };

// var form = document.querySelector("form");
// var fname = document.getElementById("name");
// var lname = document.getElementById("lname");
// var tutu = document.getElementById("tutu");
// var submit = document.getElementById("submit");
// var para = document.querySelector("p");
// const regex = /[1-9]/g;


// // form.onsubmit = function (e) 
// // {
// //   if (fname.value === "" || lname.value === "" || ((fname.value).match(regex)) === "") 
// //   {
// //     e.preventDefault();
// //     para.textContent = "Оба поля должны быть заполнены!";
// //   }
// // };

// lname.oninput = function() {
//   if ((lname.value).match(/^([а-яё][А-ЯЁ]+|[a-z][A-Z]+)$/i))
//   {
//     fname.value = lname.value;
//   }
//   else
//   {
//     fname.value = "";
    
//   }
// };


    // const btn = document.querySelector("button");
    // var kz = document.getElementById("out_akk");

    // function random(number) {
    // return Math.floor(Math.random() * (number + 1));
    // }

    // kz.addEventListener('click', (event) => { // событие клика
    //     const rndCol = "rgb(" + random(255) + "," + random(255) + "," + random(255) + ")";
    //     document.body.style.backgroundColor = rndCol;
    // })