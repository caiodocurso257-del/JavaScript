let quartoDisponiveis = 3;
let reservaConfirmado = true;

let statusReserva = (reservaConfirmado && quartoDisponiveis > 0) ? "reserva confirmada" 
                  : (quartoDisponiveis > 0) ? "Aguardando confirmação"
                  : "semquartos disponíveis";

console.log(statusReserva);                  

