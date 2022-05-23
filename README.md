# Algoritmos de ordenação (JavaScript):

###### • Cada linguagem de programação possui seus métodos para ordenar valores, sejam arrays de elementos primitivos ou arrays de objetos. Em python, podemos usar a função sorted() para retornar uma lista ordenada de objetos inteiráveis, no c# há operadores como OrderBy entre outras maneiras de se ordenar listas, arrays, dicionários e qualquer tipo de variável. 
###### • No JavaScript, o método sort() é utilizado em diversas ordenações, porém a sua utilização requer um cuidado especial, devemos informar uma função de comparação que define a ordenação. Caso não seja informada, o array é ordenado de acordo com a pontuação do código Unicode.
###### • Sabendo da existência de métodos, como sort, que fazem a ordenação daquilo que buscamos, o que de fato acontece nas suas entranhas? Ai que entra os algoritmos de ordenação. Cada algoritmo possui sua complexidade, sua estabilidade, que estão atreladas a sua eficiencia.0

###### • Para melhor entendimento dos algoritmos, como e onde implementa-los, é necessário saber dessas características, pois o consumo de memória do computador pode ser comprometido ao tentar ordenar arrays utilizando um algoritmo que não se adequa a necessidade do usuário.

###### ♦ Leia sobre complexidade: 
    https://pt.stackoverflow.com/questions/33319/o-que-%C3%A9-a-complexidade-de-um-algoritmo
###### ♦ Leia sobre estabilidade: 
    https://www.ime.usp.br/~leo/mac/mac122/algoritmos_ordenacao_estaveis.html
###### ♦ Método sort JS:
    https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

### Como usar
#### Os métodos foram escritos em JavaScript, mas sua lógica de funcionamento é igual para qualquer linguagem
##### • Para a utilização dos métodos abaixo, é necessário um array de objetos:
    listaAlunos [
    {nome: 'Victor', idade: 23},
    {nome: 'João', idade: 24},
    {nome: 'Neto', idade: 19}
    ]

##### • Basta utilizar a função correspondente ao método (selectionSort(), insertionSort(), mergeSort(), quicksSort()), passando como primeiro parâmetro o nome do array e o segundo a chave que vamos usar como ordenação:
    functionSort(listaAlunos, 'idade')

##### • O array será ordenado de forma crescente por idade.

##### • Em cada algoritmo há uma explicação de como funciona, bem como vantagens e desvantagens de sua utilização.
.
.
.
Referencias:
https://pt.wikipedia.org/wiki/Algoritmo_de_ordena%C3%A7%C3%A3o
https://pt.stackoverflow.com/questions/188646/o-que-define-um-algoritmo-de-ordena%C3%A7%C3%A3o-est%C3%A1vel
https://pt.wikipedia.org/wiki/Ordena%C3%A7%C3%A3o_est%C3%A1vel
https://pt.wikipedia.org/wiki/Selection_sort
https://pt.wikipedia.org/wiki/Insertion_sort
https://pt.wikipedia.org/wiki/Merge_sort
https://pt.wikipedia.org/wiki/Quicksort
