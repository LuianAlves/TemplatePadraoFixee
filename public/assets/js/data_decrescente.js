const dias = document.getElementById("dias");
const horas = document.getElementById("horas");
const minutos = document.getElementById("minutos");
const segundos = document.getElementById("segundos");

const vencimento = "18 Jan 2023";

function countdown() {

    const mesVencimento = new Date(vencimento);
    const dataAtual = new Date();

    const totalSegundos = (mesVencimento - dataAtual) / 1000;

    const dias1 = Math.floor(totalSegundos / 3600 / 24);
    const horas1 = Math.floor(totalSegundos / 3600) % 24;
    const minutos1 = Math.floor(totalSegundos / 60) % 60;
    const segundos1 = Math.floor(totalSegundos) % 60;

    dias.innerHTML = dias1;
    horas.innerHTML = formatarData(horas1);
    minutos.innerHTML = formatarData(minutos1);
    segundos.innerHTML = formatarData(segundos1);

}

function formatarData(data) {
    return data < 10 ? `0${data}` : data;
}

countdown();

setInterval(countdown, 1000);