# Algoritmo de ordenação

## -- QuickSort

###### • O algoritmo de ordenação rápida (quickSort), utiliza de maneira muito eficiente o termo 'dividir e conquistar', que consiste em rearranjar as chaves escolhendo um elemento como pivô, deixando ao lado esquerdo os valores menores que o pivô e ao lado direito valores maiores que o pivô.
###### • Essa ordenação é feita de maneira recursiva, até que cada elemento do array possua ao seu lado esquerdo apenas valores menores que ele e ao lado direito apenas valores maiores que ele.
###### • O algoritmo foi dividido em três funções, que desempenham papeis distintos
###### • A função quickSort() recebe o array e a chave de comparação, a recursividade executa a função getPartition() de acordo com dois resultados possíveis de cada execução anterior.
###### • A função getPartition() recebe os parâmetros determinados pela função quickSort(), executando sempre o mesmo papel, ao final chamando a função changeIndex() cujo único papel é trocar os itens de lugar dentro do array.

## -- Funcionamento

###### • Para utilizar o algoritmo, basta aplicar um console.log() na função quickSort(arrayObject, 'key')

    arrayObject = Array de objetos que queremos ordenar
    key(str) = Chave dos objetos contidos no array que será usado para ordenação

###### • A primeira execução da função quickSort, trata-se do array completo, o pivô selecionado será o elemento no centro do array
###### • A função getPartition() divide o array em lado esquerdo e direito, onde ao lado esquerdo devemos ter elementos menores que o valor do pivô e ao lado direito elementos maiores que o valor do pivô
###### • Essa verificação é feita percorrendo todos os índices do lado esquerdo e verificando se seu valor é maior que o pivô, caso seja, esse índice é guardado na memória
###### • O lado direito é percorrido afim de encontrar um valor que seja menor que o pivô, caso seja encontrado, a função changeIndex() é executada
###### • A função changeIndex() recebe o valor maior que foi encontrado no lado esquerdo e o valor menor que foi encontrado do lado direito, fazendo a troca de lugar no array
###### • Após a execução da função changeIndex(), voltamos a verificação de valores maiores que o pivô no lado esquerdo e menores no lado direito
###### • A verificação se encerra quando passamos a verificar o mesmo indice do array em ambos os lados direito e esquerdo, indicando que não há mais valores menores ou maiores que o pivô que não estejam do lado certo.
###### • A função getPartition retorna o índice onde a verificação do lado esquerdo terminou.
###### • Esse retorno é usado como parâmetro para as próximas chamadas recursivas e a cada recursividade esse valor é alterado 
###### • É feita uma verificação para saber se o valor retornado marcará o final ou o início do próximo array
###### • Esse valor será marcado como o final até o valor de início, que foi marcado na primeira execução como = 0, não seja menor que o valor de retorno, indicando que esses valores estão ordenados.
###### • Quando essa condição é satisfeita, o valor retornado pela função getPartition() será usado como início do array que será ordenado.
###### • O valor de left é alterando toda vez que a segunda condição de quickSort() é satisfeita, sendo substituido pelo valor retornado pela função getPartition()
###### • A função tem fim quando o valor retornado pela função getPartition() não satisfaz mais a condição de que deve ser maior que o tamanho do array, indicando que todos os valores do lado direito estão ordenados.

### -- Vantagens

##### ♦ Eficiente para ordenar arquivos de dados, principalmente em grande quantidade
##### ♦ Requer, para o melhor caso, O(n log n) comparações em média.

### -- Desvantagens

##### ♦ Implementação difícil
##### ♦ Metodo instável
##### ♦ Em seu pior caso, há O(n²) comparações
.
.
.
###### Referencias:
    • https://pt.wikipedia.org/wiki/Quicksort
    • https://pt.khanacademy.org/computing/computer-science/algorithms/quick-sort/a/overview-of-quicksort
    • https://www.geeksforgeeks.org/quick-sort/
