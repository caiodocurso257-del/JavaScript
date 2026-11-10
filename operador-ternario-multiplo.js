let quartoDisponiveis = 3;
let reservaConfirmado = true;

let statusReserva =
  reservaConfirmado && quartoDisponiveis > 0
    ? "reserva confirmada"
    : quartoDisponiveis > 0
      ? "Aguardando confirmação"
           N                                                                
            : "semquartos disponíveis";

console.log(statusReserva);
