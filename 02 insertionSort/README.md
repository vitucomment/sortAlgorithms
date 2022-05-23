# Algoritmo de ordenação: 

## -- InsertionSort
    
###### • O método de ordenação por inserção (InsertionSort) é um algoritmo de ordenação, onde o array é virtualmente dividido em uma parte classificada e uma parte não classificada. 
###### • Os valores da peça não classificada são selecionados e colocados na posição correta na peça classificada.
###### • Uma boa comparação, é a forma em que ordenamos cartas de baralho em nossa mão.
###### • Possui um loop externo que incrementa + 1 a cada interação, e um loop interno que testa os valores e os posiciona de acordo com inserções anteriores.

## -- Funcionamento

###### • Para utilizar o algoritmo, basta aplicar um console.log() na função insertionSort(arrayObject, 'key')

    arrayObject = Array de objetos que queremos ordenar
    key(str) = Chave dos objetos contidos no array que será usado para ordenação

###### • É criada uma cópia do array original, que será retornado ao usuário 
###### • O loop externo começa com o primeiro índice do array = 0
###### • O loop interno, não é executado quando o índice = 0, pois não há valores anteriores para comparar, então inicia o segundo loop externo com índice = 1
###### • Quando o índice em análise é > 0 e menor que o valor anterior, ele é deslocado para a esquerda até que seja maior que o valor a sua esquerda, assim que essa condição é satisfeita, o loop interno encerra.
###### • Isso ocorre sucessivamente, garantindo que quando um valor está sendo analisado seja continuamente deslocado e o deslocamento termine quando o valor do item a esquerda seja maior que o item analisado.

### -- Vantagens

##### ♦ Simplicidade de implementação
##### ♦ É estável
##### ♦ Possui custo linear de memória
##### ♦ Recomendado quando o arquivo está semi-ordenado

### -- Desvantagens

##### ♦ Lento para grandes arrays
##### ♦ A movimentação dos elementos no vetor tem grande custo de memória
##### ♦ Possui complexidade média de O(n²), apenas no melhor caso pode ser O(n)
.
.
.
Referencias:
https://www.geeksforgeeks.org/insertion-sort/
https://pt.wikipedia.org/wiki/Insertion_sort
