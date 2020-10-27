var questions = [
    {
        "title": "Dictionary",
        "question": "Дан dictionary со свойством <code>property1</code> и значением <code>value1</code>",
        "subText": "Добавь новое свойство <code>property2</code> и значение <code>value2</code>.",
        "stage": {"property1": "value1"},
        "answer": {"property1": "value1", "property2": "value2"}
    },
    {
        "title": "Dictionary",
        "question": "Дан dictionary со свойством <code>name</code> и значением <code>apple</code>. Добавь дополнительные свойства в  dictionary.",
        "subText": "<table align='center'>  <tr>  <th>Key/Property</th>    <th>Value</th>  </tr>  <tr>    <td>name</td>    <td>apple</td>  </tr> <tr>    <td>color</td>    <td>red</td>  </tr>  <tr>    <td>weight</td>    <td>90g</td>  </tr>  </table>",
        "stage": {"name": "apple"},
        "answer": {"name": "apple", "color": "red" , "weight": "90g"}
    },
    {
        "title": "Dictionary in Dictionary",
        "question": "Дан dictionary <code>employee</code>. Добавь к нему остальные свойства используя информацию из таблицы ниже.",
        "subText": "<table align='center'>  <tr>  <th>Key/Property</th>    <th>Value</th>  </tr>  <tr>    <td>name</td>    <td>john</td>  </tr> <tr>    <td>gender</td>    <td>male</td>  </tr>  <tr>    <td>age</td>    <td>24</td>  </tr>  </table>",
        "stage": {"employee":{"name":"john"}},
        "answer": {"employee":{"name":"john","gender":"male","age":24}}
    },
    {
        "title": "Dictionary in Dictionary in Dictionary",
        "question": "Добавь информацию об адресе. Имей в виду, что address это тоже dictionary",
        "subText": "<table align='center'>  <tr>  <th>Key/Property</th>    <th>Value</th>  </tr>  <tr>    <td>name</td>    <td>john</td>  </tr> <tr>    <td>gender</td>    <td>male</td>  </tr>  <tr>    <td>age</td>    <td>24</td>  </tr> <tr>    <td> address </td>    <td> <table align='center'>  <tr>  <th>Key/Property</th>    <th>Value</th>  </tr>  <tr>    <td>city</td>    <td>edison</td>  </tr> <tr>    <td>state</td>    <td>new jersey</td>  </tr>  <tr>    <td>country</td>    <td>united states</td>  </tr>  </table> </td>  </tr>  </table>",
        "stage": {"employee":{"name":"john","gender":"male","age":24}},
        "answer": {"employee":{"name":"john","gender":"male","age":24,"address":{"city":"edison","state":"new jersey","country":"united states"}}}
    },
    {
        "question": "Дан массив яблок. Добавь новый элемент в list, чтобы яблок стало 4.",
        "title": "List/Array",
        "stage": ["apple", "apple", "apple"],
        "answer": ["apple", "apple", "apple", "apple"]
    },
    {
        "question": "Добавь еще яблок до 6.",
        "title": "List/Array",
        "stage": ["apple", "apple", "apple", "apple"],
        "answer": ["apple", "apple", "apple", "apple", "apple", "apple"]
    },
    {
        "question": "Добавь 2 'mango' в list.",
        "title": "List/Array",
        "stage": ["apple", "apple", "apple", "apple", "apple"],
        "answer": ["apple", "apple", "apple", "apple", "apple", "mango", "mango"]
    },
    {
        "title": "List of Dictionaries",
        "question": "Мы хотели бы добавить дополнительную информацию к каждому элементу, например цвет, вес и т. Д. Первая запись это образец. Аналогичным образом измени остальные элементы, чтобы они соответствовали приведенным ниже данным.",
        "subText": "<table align='center'>  <tr>    <th>Fruit</th>    <th>Color</th>    <th>Weight</th>  </tr>  <tr>    <td>apple</td>    <td>red</td>    <td>100g</td>  </tr>  <tr>    <td>apple</td>    <td>red</td>    <td>90g</td>  </tr>  <tr>    <td>mango</td>    <td>yellow</td>    <td>150g</td>  </tr></table>",
        "stage": [{"name":"apple","color":"red","weight":"100g"},"apple","mango"],
        "answer": [{"name":"apple","color":"red","weight":"100g"},{"name":"apple","color":"red","weight":"90g"},{"name":"mango","color":"yellow","weight":"150g"}]
    },
    {
        "title": "List of Dictionary",
        "question": "Нам нужно записать информацию о нескольких сотрудниках. Преобразуй dictionary <code>employee</code> в list <code>employees</code>.",
        "subText": "",
        "stage": {"employee":{"name":"john","gender":"male","age":24}},
        "answer": {"employees":[{"name":"john","gender":"male","age":24}]}
    },
    {
        "title": "List of Dictionary",
        "question": "Добавь еще одного сотрудника в list, используя информацию из таблицы.",
        "subText": "<table align='center'>  <tr>  <th>Key/Property</th>    <th>Value</th>  </tr>  <tr>    <td>name</td>    <td>sarah</td>  </tr> <tr>    <td>gender</td>    <td>female</td>  </tr>  <tr>    <td>age</td>    <td>28</td>  </tr> </table>",
        "stage": {"employees":[{"name":"john","gender":"male","age":24}]},
        "answer": {"employees":[{"name":"john","gender":"male","age":24},{"name":"sarah","gender":"female","age":28}]}
    },
    {
        "title": "List of Dictionary in Dictionary",
        "question": "Попрактикуем более сложный случай. Добавим инфо о выплатах. Имей в виду, что <code>address</code> это dictionary, <code>payslips</code> это list of (<code>month</code> и <code>amount</code>)",
        "subText": "<table align='center'>  <tr>  <th>Key/Property</th>    <th>Value</th>  </tr>  <tr>    <td>name</td>    <td>john</td>  </tr> <tr>    <td>gender</td>    <td>male</td>  </tr>  <tr>    <td>age</td>    <td>24</td>  </tr> <tr>    <td>address</td>    <td> ... </td>  </tr> <tr>    <td> payslips </td>    <td> <table align='center'>  <tr> <th>#</th> <th>month</th>    <th>amount</th>  </tr>  <tr>    <td>1</td>  <td>june</td>  <td>1400</td>  </tr> <tr>    <td>2</td>  <td>july</td>  <td>2400</td>  </tr> <tr>    <td>3</td>  <td>august</td>  <td>3400</td>  </tr>  </table> </td>  </tr>  </table>",
        "stage": {"employee":{"name":"john","gender":"male","age":24,"address":{"city":"edison","state":"new jersey","country":"united states"}}},
        "answer": {"employee":{"name":"john","gender":"male","age":24,"address":{"city":"edison","state":"new jersey","country":"united states"},"payslips":[{"month":"june","amount":1400},{"month":"july","amount":2400},{"month":"august","amount":3400}]}}
    },
    {
        "title": "ПОЗДРАВЛЕНИЯ!!!",
        "question": "Ты успешно закончил упражнение!",
        "subText": "",
        "stage": {"employee":{"name":"john","gender":"male","age":24,"address":{"city":"edison","state":"new jersey","country":"united states"},"payslips":[{"month":"june","amount":1400},{"month":"july","amount":2400},{"month":"august","amount":3400}]}},
        "answer": {"employee":"sdfsdfsd"}
    }
]