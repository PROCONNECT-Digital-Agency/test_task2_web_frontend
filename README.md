# Тестовое задание Front-End

Здесь находится описание тестового задания на позицию Front-End-разработчика в PROCONNECT Digital Agency.\
Если вы нашли его слуйчайно - попробуйте сделать! Авось и вас к себе возьмём. 😉

## Задача

Создать одностраничное TODO-приложение с использованием Vue.js,\
с возможностью ведения/импорта/экспорта проектов.

Приложение может быть имплементировано в одном из уровней сложности:

- **easy** - минимально-оцениваемый функционал;
- **medium** - **easy** с дополнительными усложнениями;
- **hard** - **medium** с дополнительными усложнениями;

каждый из которых имеет опциональные задания с более высокой оценкой.

## Подробные требования задачи

Ниже приведены подробные требования к приложению, разделённые по сложности.\
Каждая последующая сложность включает в себя **все** требования предыдущей как обязательные.


---

### **Easy**

- Каждая новая вкладка с приложением - отдельный проект со своим списком задач;
- Редактируемое название проекта в качестве заголовка страницы;
- Список с задачами:
  - Добавление новой задачи в список;
  - Удаление любой задачи из списка;
  - Возможность пометить любую задачу сделанной и возможность убрать эту пометку (mark as done/not done);
- Вся информация (название проекта, список задач, состояние задач) должна сохраняться при перезагрузке страницы;

Опционально:
- Возможность добавлять подзадачи в любую задачу (с потенциально бесконечной глубиной);
- Поле ввода для поиска/фильтрации задач в списке (фильтр должен сохраняться после перезагрузки страницы);
- Возможность редактирования названия задачи после её создания;

---

### **Medium**

Все требования [**easy**](#easy), включая опциональные.
А также:

- Возможность перемещать любые задачи (со всем списком подзадач) из любого открытого проекта в любой другой открытый проект;
- Нельзя использовать `LocalStorage`, `Cookies`, `IndexedDB` и `WebSQL` хранилища;
- Экспорт проекта в файл / импорт проекта из файла;
  - Имя сохраняемого файла должно соответствовать названию проекта.
- Drag-n-drop для перемещения задач в списке;
- Сохранение текущего фильтра для возможности его быстрого применения потом;
- Итоговое приложение должно весить не более **200 KB** (сумма всех загружаемых браузером файлов, включая сторонние библиотеки, gzipped);

Опционально:
- Наличие CSS-анимаций для drag-n-drop и фильтрации задач;
- Использовать TypeScript для 100% кодовой базы (исключая вёрстку и стили);
- Использовать [Vue Composition API](https://vue-composition-api-rfc.netlify.com/) или [vue@next](https://www.npmjs.com/package/vue/v/next);
- Использовать ESLint/TSLint для контроля качества кода (приветствуется использование настройки [KazanExpress/TSLint](https://github.com/KazanExpress/tslint));
- Использовать сборщик/бандлер (например, [webpack](https://webpack.js.org/)) для сборки приложения в SPA;

---

### **Hard**

Все требования [**medium**](#medium), включая опциональные, а также:

- Итоговое приложение должно весить не более **100 KB** (сумма всех загружаемых браузером файлов, включая сторонние библиотеки, gzipped);
- Drag-n-drop с поддержкой тач-скрина;
- Масштабируемость на мобильные устройства до 320*480px (iPhone 4);
- Возможность быстрого просмотра и редактирования описания у любой задачи;

Опционально:
- [SSR](https://google.com/search?q=SSR+(web+development));
- [PWA](https://google.com/search?q=PWA+(web+development));
- Опция фильтрации задач по RegExp;
- Если в двух вкладках открыт один и тот же проект (например, совершён импорт из одного и того же файла),\
  **все** действия в этих вкладках/проектах должны синхронизироваться без задержки.\
  Включая (но не ограничиваясь):
  - Название проекта;
  - Список, состояния, описания, порядок и названия всех задач\
    (например, при добавлении задачи в одной вкладке - она должна появиться и в другой);
  - Список сохранённых фильтров;
- Возможность добавлять/удалять именованные списки для задач, между которыми их можно перетаскивать (как в trello)

---

<details><summary>Для тех, кто не любит формальности</summary>
Короче, надо написать очень всратый менеджер задач. Его таким просим, чтобы нам было проще оценить твои навыки и креативность в подходе к решению проблем (нам это важно 😎).

Представь проблему: Команда не может организованно вести список тасок. У каждого сотрудника есть свои хотелки к системе. Необходимо предоставить максимально приемлемый вариант реализации приложения, который устроит наибольшее количество пользователей.

Хотелки:
- Петя: Я хочу, чтобы можно было выгружать проект в файл, чтобы я мог прийти домой и открыть его там. Но я не хочу синхронизацию через клауд сервисы. Это небезопасно.

- Вася: Я привык работать с тысячами открытых вкладок браузера. Если в самой вкладке будут еще вкладки (подпроекты) - это будет меня бесить. Хочу, чтобы каждая открытая вкладка приложения была отдельным новым проектом, чтобы я их мог менеджить как и все мои вкладки через браузер!

- Коля: В одной популярной программе по работе с тасками очень плохо сделана фильтрация. Я хочу, чтобы когда я настраиваю фильтр - он, мать его, сохранялся при перезагрузке страницы! Было бы не плохо давать возможность создавать свой пресет фильтров для быстрого применения.

- Иван: Вот что должно происходить, когда кликаешь по таске? Правильно, должно открыться описание таски. Но другие сервисы посылают меня на новую страницу. Зачем? ведь есть модалки и их все любят! Максимум что я потерплю - выползающее нечто, которое не блокирует пользовательский интерфейс.

- Максим: Мне мало платят и я не могу себе позволить мак бук. или любой другой бук. У меня дома стоит Pentium 3 и там XP и старый браузер, который я не могу обновить. Он говорит, что я должен сначала обновить систему. Но я ничего ему не должен! Короче, я работаю из дома и на плохом компе. Пусть не виснет и работает!

- Марсель: Я ценитель прекрасного и хочу, чтобы любой софт, который я запускаю на своей машине обладал такими же восхитительными анимациями, как и моя любимая и самая крутая операционная система ♥

- Дима: Я ненавижу клавиатуры. Зачем их придумали, если есть тач скрин? Я хочу все двигать пальцами с телефона или планшета. Запилите плиз тач саппорт.

- Маша: Я хочу работать с коллегой над одним проектом. И было бы классно видеть в моей вкладке то, что делает он в своей.


</details>

---

Всё, что не указано в требованиях, остаётся на усмотрение исполнителя задачи.

Опциональные требования сложности, которая выше текущей выполняемой, допустимы к имплементации и дадут дополнительные баллы.\
Например, если вы решили выполнять задачу на сложности **medium**, выполнение опциональных требований из сложности **hard** даст преимущество при итоговой оценке.

---

## Процесс выполнения задачи

1. Сделать Fork этого репозитория;
2. Выполнить задачу;
3.
3.1.  Сделать Pull-Request в этот репозиторий.\
   Описание должно содержать:
   - Список выполненных требований;
   - Инструкцию по запуску/развёртыванию приложения на Windows/Unix.
3.2. После выполнения задания отправляйте ссылку на ваш репозиторий в телеграм [PRO MANAGER](https://t.me/proconnect_manager)

