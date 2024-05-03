/* Qual o valor de sua conta?
        X = R$ 250,00

consumo = (X - 24.26)*0.95553117
consumo = 215,70 kwh

Custos instalação:
0 a 400 - 15.000
400 a 600 - 22.000
600 a 800 - 25.000
800 a 1000 - 30.000
1000 > pra uso comercial a industrial

--------------------------------------------------------------------------------------------------

Taxa fixa conta de luz, mesmo com consumo 0:
Em regra, residencial, bifásico, é COSIP + custo de disponibilidade 50kWh = R$ 72,00 em média.

--------------------------------------------------------------------------------------------------
Quanto a pessoa vai gastar em conta de luz por mes considerando reajustes?
2019 - 250             3000
2020 - 267,325         3207,09
2021 - 262,994         3155,93
2022 - 276,72          3320,64
2023 - 317,98          3815,76        
                     16.499,42           

Considerando que uma pessoa que pagava aproximadamente 250 em 2019, hoje paga 320,00, e que o aumento da conta de energia mantêm um valor maior do que o da inflação, a projeção é que em 5 anos ela gaste 

250*x = 320
x = 28% de inflação em 5 anos para o consumidor residencial
Despesa mensal console.log(250*1.008**12)
Despesa anual*1,28

--------------------------------------------------------------------------------------------------

250*x*12*5 = 16499.42


*/





while (valord >= valora) {
        valord = 72*meses;
        valora = 250*1.008**meses;
        meses++
}
console.log(meses)