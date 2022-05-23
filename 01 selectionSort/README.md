# Algoritmo de ordenação: 
## -- SelectionSort
    
###### • O método de ordenação por seleção (selection sort) é baseado em se passar sempre o menor valor da sequência para a primeira posição, depois o segundo menor para a segunda posição e assim sucessivamente.
###### • O algoritmo funciona com dois laços, um externo que serve para controlar o índice inicial e um interno que percorre todo o array em busca do menor valor.

    selectionSort             ---> laço externo
    getLowerValue             ---> laço interno


## -- Funcionamento

###### • Para utilizar o algoritmo, basta aplicar um console.log() na função selectionSort(arrayObject, 'key')

    arrayObject = Array de objetos que queremos ordenar
    key(str) = Chave dos objetos contidos no array que será usado para ordenação

###### • É criada uma cópia do array original, que será retornado ao usuário
###### • Na primeira iteração do laço externo o índice começa de 0 e cada iteração ele soma uma unidade até o final do array e o laço mais interno percorre o array começando desse índice externo + 1 até o final do array.
###### • O primeiro laço o índice inicial é 0. O laço mais interno começa do índice_inicial_externo + 1 e percorre o array até achar o menor elemento. O elemento encontrado passa para a posição inicial do array.
###### • Ao fim do laço interno, o laço externo incrementa uma unidade, agora a posição inicial do array passa a ser 1, pois o menor elemento do array foi encontrado no primeiro laço e está na posição 0.
###### • O processo se repete até o array estar ordenado.


### -- Vantagens 

##### ♦ Simplicidade de implementação
##### ♦ Ocupa menos memória
##### ♦ Rápido na ordenação de pequenos arrays


### -- Desvantagens

##### ♦ Lento para array grandes
##### ♦ Instável
##### ♦ O número de comparações (n² - n) / 2 é sempre o mesmo, independente do array já estar ordenado ou não.
##### ♦ Complexidade de O(n²) em todas as entradas
.
.
.
Refererência:
https://www.geeksforgeeks.org/selection-sort/
https://pt.wikipedia.org/wiki/Selection_sort