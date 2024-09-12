# Calculadora de Salário

## Descrição

A Calculadora de Salário é uma ferramenta desenvolvida para calcular o salário líquido de um funcionário com base em diversos fatores, incluindo salário base, adicionais de insalubridade e periculosidade, descontos de vale-refeição, passagem e impostos. A calculadora leva em consideração as tabelas progressivas do INSS e IRPF para o ano de 2024 e é projetada para funcionar tanto em desktops quanto em dispositivos móveis.

## Funcionalidades

- Cálculo de adicionais:
  - **Insalubridade**: Percentual aplicado sobre o salário mínimo.
  - **Periculosidade**: Percentual aplicado sobre o salário base.
- Cálculo de descontos:
  - **Vale Refeição**: Valor diário multiplicado pelos dias trabalhados, com desconto percentual.
  - **Passagem**: Percentual de desconto aplicado sobre o salário base.
- Cálculo de impostos:
  - **INSS**: Segue a tabela progressiva de 2024.
  - **IRPF**: Segue a tabela progressiva de 2024.
- Cálculo do salário líquido final após todos os descontos e impostos.

## Tabelas Utilizadas

### INSS (2024)
- Até R$ 1.412,00: 7,5%
- De R$ 1.412,01 a R$ 2.666,68: 9%
- De R$ 2.666,69 a R$ 4.000,03: 12%
- Acima de R$ 4.000,03: 14%

### IRPF (2024)
- Até R$ 2.112,00: Isento
- De R$ 2.112,01 até R$ 2.826,65: 7,5% – Dedução de R$ 158,40
- De R$ 2.826,66 até R$ 3.751,05: 15% – Dedução de R$ 370,40
- De R$ 3.751,06 até R$ 4.664,68: 22,5% – Dedução de R$ 636,13
- Acima de R$ 4.664,68: 27,5% – Dedução de R$ 869,36

## Tecnologias Utilizadas

- **HTML5**: Estruturação da página.
- **CSS3**: Estilização da página.
- **Bootstrap 4**: Framework CSS para responsividade e design moderno.
- **JavaScript**: Lógica de cálculo e interação com o usuário.
- **API Externa**: Obtenção do salário mínimo atualizado.

## Como Utilizar

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/seu-repositorio.git

Contribuições são bem-vindas! Sinta-se à vontade para abrir uma issue ou enviar um pull request com melhorias.

Licença
Este projeto está licenciado sob a Licença MIT - veja o arquivo LICENSE para mais detalhes.

Contato
Autor: Efraim Oliveira
Email: efraimoliveira10@gmail.com
LinkedIn: Efraim Oliveira
