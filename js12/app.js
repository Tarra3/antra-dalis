//zanro pasirinkimo laukas
const zanrasSelect = document.getElementById("zanras");
const rodytiButton = document.getElementById("rodyti");
const rezultatai = document.getElementById("rezultatai");
const loading = document.getElementById("loading");

//parametrai f=jai fetch(prisijungimo duomenys)
const req = {
    headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNDNhMTcxMGNkMDc4NTU2NWM1MmM4YjQxYjU2YWYwYiIsInN1YiI6IjY2MGUxOTFiZGE5ZWYyMDE3ZDU4YmRjMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wCP5A-AExFKtZPZAzK4yr5Nh4f8h0jHhZmaksgY4C2w`
    }
}

//uzkrauname visus zanrus
fetch(`https://api.themoviedb.org/3/genre/movie/list?language=en`, req)
    .then((response) => {
        //gauta info konvertuojame i JSON
        return response.json();
    })
    .then((data) => {
        console.log(data);
        data.genres.forEach((g) => {
            const o = document.createElement("option");
            o.textContent = g.name;
            o.value = g.id;
            zanrasSelect.appendChild(o);

        })
    });


//filmu pagal zanra uzkrovimas
const rodytiFilmusPagalZanra = () => {
    const genreId = zanrasSelect.value;
    loading.style.display = "block";
    fetch(`https://api.themoviedb.org/3/discover/movie?language=lt&with_genres=${genreId}`, req)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data);
            rezultatai.innerHTML = '';
            //jei serveris grazina rezult, bet rezult yra neigiamas,kai data success egzistuoja:
            if (data.success !== undefined) {
                let e = new Error(`zanras nerastas`);
                e.name = "nerasta";
                //komanda throw lygiia kaip ir return-nutraukia vykdyma
                throw e;

            }
            //jei nebuvo klaidos bus tesiamas

            data.results.forEach((m) => {
                const li = document.createElement("li");
                li.className = "list-group-item";
                li.textContent = m.title;

                rezultatai.appendChild(li);

            })
            loading.style.display = "none";
        })
        //kai ivyksta klaida vykdome f-ja:
        .catch((e) =>) {
        console.log(`klaida: ${e}`);
        loading.style.display = "none";
        //parodome pranesima apie klaida
        pranesimas.innerHTML = `klaida: ${e}`;
        if (e.name == "typeError") {
            pranesimas.innerHTML = `klaida, serveris neveikia`; {
            }else if (e.name == `nerastas`) {

            }
        }
    }
};


rodytiButton.onclick = rodytiFilmusPagalZanra;

