# Algoritmo de ordenação

## -- MergeSort

###### • O método de ordenação por mistura (mergeSort) é um exemplo clássico de um algoritmo de ordenação por comparação do tipo 'dividir e conquistar'.
###### • Basicamente, consiste em dividir o array em pedaços menores quantos forem possíveis, usando recursividade, e ordenar esses pedaços juntando-os para formar um array completamente ordenado.
###### • A função mergeSort() divide o array usando recursividade.
###### • As partes são mandadas como parâmetros para a função orderingArrays(), que junta os arrays de forma ordenada.

## -- Funcionamento

###### • Para utilizar o algoritmo, basta aplicar um console.log() na função mergeSort(arrayObject, 'key')

    arrayObject = Array de objetos que queremos ordenar
    key(str) = Chave dos objetos contidos no array que será usado para ordenação

#### mergeSort();

###### • A função que divide o array, mergeSort(), usa a recursividade, chama a si própria para continuar dividindo os arrays até que ele seja composto por apenas um elemento.
###### • Cada vez que a recursão acontece, o array passado trata-se da metade do array que foi passado anteriormente, isso é feito para a metade que vai do início ao meio e também para a metade que vai do meio ao final.
###### • A variável 'halfOne' e 'halfTwo' contém os menores arrays possíveis que serão passados como parâmetros para a função orderingArrays().
###### • A recursão cria novas instancias da função cada vez que ela é chamada, aplicando o conceito de aninhamento. Após a primeira divisão, temos o primeiro nível de aninhamento, onde o array é dividido em dois, o segundo nível é a divisão do que foi criado no primeiro nível e assim sucessivamente.
###### • As funções mais externas no nível de aninhamento, não são substituídos, da mesma forma que a recursão entra em níveis de aninhamento ela também volta a esses níveis. Dessa forma o algoritmo consegue voltar às partes criadas juntando-as de maneira ordenada.

#### orderingArrays();

###### • Na função orderingArrays, comparamos os valores dos arrays a partir de seus índices, aplicando o método push() em um array de retorno.
###### • Percorremos os índices dos dois arrays simultaneamente, comparando os respectivos valores e adicionando no array de retorno aquele que for menor.
###### • Como estamos no ultimo nível de aninhamento, estamos comparando dois arrays com um elemento cada, formando arrays ordenados de dois elementos.
###### • Quando retrocedemos um nível de aninhamento, estamos comparando dois arrays com dois elementos cada, os índices são percorridos simultaneamente sendo comparados seus respectivos valores e adicionando-os no array de retorno de forma ordenada. Criando um array de quatro elementos e retrocedendo um nível de aninhamento.
###### • Isso é feito sucessivamente até que o nível zero de aninhamento seja atingindo, nesse momento teremos um array completamente ordenado.

### -- Vantagens

##### ♦ É um algoritmo estável na maioria das implementações
##### ♦ Sua eficiência é notável para uma grande quantidade de dados

### -- Desvantagens

##### ♦ O algoritmo cria uma cópia do array para cada nível da chamada recursiva, totalizando um uso adicional de memória igual a O(n log n)
##### ♦ Exige um certo nível de complexidade 
##### ♦ Complexidade de O(nLog2N)
.
.
.
###### Referencias:
    • https://pt.wikipedia.org/wiki/Merge_sort
    • https://en.wikipedia.org/wiki/Merge_sort#:~:text=In
    • https://www.geeksforgeeks.org/merge-sort/

