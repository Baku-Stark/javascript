<Operadores>
    Aritiméticos
        --- Usado para fazer cálculo
        ('+', '-', '*', '/', '%', '**')

    Atribuição
        --- Sinal de igualdade
        ('x = y', 'x += y', 'X -= Y')

    Relacionais
        --- Símbolos 
        ('>', '<', '>=', '<=', '==', '===', '!=')

    Lógicos
        --- Operador de situação
        ('!', '&&', '||')
        
        [!] -> true (false)
            -> false (true)

     true   [&&]  -> true  (true)
     true         -> false (false)
     false        -> true  (false)
     false        -> false (false)

     true   [||] -> true  (true)
     true        -> false (true)
     false       -> true  (true)
     false       -> false (false)

     {a > b && b % 2 == 0}
     ----- false

     {a <= b || b / 2 == 2}
    ----- true
    idade >= 15 && idade <= 17       // a idade está entre 15 e 17?
    estado == 'RJ' || estado == 'SP' // o estado é RJ ou SP?
    salário > 1500 && sexo == 'M'    // o salário é acima de 1500 e não é homem?
    
        {Ordem de Precedência}
        | (). **, /
        | >; <, >=
        | !
        | &&
        | !!

    Ternário
        --- Junção de três operandos
        ('?', ':')
            {Exemplo}
            > var media = 5.5
            undefined
            média >=7?"Aprovado":"Reprovado"
            'Reprovado'
            > media +=3
            8.5
            > media > 7?"Aprovado":"Reprovado"
            'Aprovado'

            {Exemplo 2}
            > var x = 8
            undefined
            > var res = x % 2 == 0 ? 5: 9
            undefined
            > x
            8
            > res
            5

            {Exemplo 3}
            > var idade = 19
            undefined
            > var res = idade >= 18 ? 'MAIOR' : 'MENOR'
            undefined
            > idade
            19
            > res
            'MAIOR'
            --------
            > var idade = 16
            undefined
            > var res = idade >= 18 ? 'MAIOR' : 'MENOR'
            undefined
            > res
            'MENOR'
