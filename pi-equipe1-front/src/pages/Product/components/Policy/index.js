import './style.css';

const Policy = () => {

    return (
        <div id="policyContainer">
            <div id="policyTitle">
                <h4>O que você precisa saber</h4>
            </div>
            <div id="policyDescription">
                <div id="houseRules">
                    <h5>Regras da casa</h5>
                    <p>Check-out: 10:00</p>
                    <p>Não é permitido festa</p>
                    <p>Não fumar</p>
                </div>
                <div id="healthSecurity">
                    <h5>Saúde e segurança</h5>
                    <p>Diretrizes de distanciamento social e outras regulamentações relacionadas ao coronavírus se aplicam</p>
                    <p>Detector de fumaça</p>
                    <p>Depósito de segurança</p>
                </div>
                <div id="cancellation">
                    <h5>Política de cancelamento</h5>
                    <p>Adicione as datas da viagem para obter detalhes de cancelamento para esta estadia</p>
                </div>
            </div>
        </div>
    );
};

export default Policy;