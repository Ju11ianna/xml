// console.log("klik");
// const Connect = new XMLHttpRequest();

// const first_xml = document.getElementById('first_xml');
// const second_xml = document.getElementById('second_xml');

// Connect.open('GET', "/index.html", true);
// Connect.setRequestHeader('Content-Type', 'text/xml');
// Connect.send(null);

// var TheDocument = Connect.responseXML;

// console.log();

// var adress =
//   TheDocument.getElementsByTagName('first_xml')[0].textContent.toString();
// var namee =
//   TheDocument.getElementsByTagName('second_xml')[0].textContent.toString();
//   first_xml.innerHTML=adress;
//   second_xml.innerHTML=namee;

$(function () {
  let
      // ссылка на контейнер
      container = $('.'),
      // html внутри контейнера
      content = "",
      // файл с информацией
      tasksFile = "https://raw.githubusercontent.com/Ju11ianna/xml/main/index.xml";


  // GET запрос на получение данных из xml файла
  const RequestObject = {

      url: tasksFile,
      method: 'GET',
      dataType: 'xml',
      async: true,
      success: (resp) => {
          // найти все и пройтись
          // сформировав заполненный данными html шаблон

          $(resp).find("contacts").children().each((index, item) => {
              content += <p>${item.textContent}</p>;
          })

          // добавляем в контейнер содержимое шаблона
          container.html(content);
      },

      // ошибку выводим в консоль
      error: (error) => console.log(error)
  }

  // здесь непосредственно выполняем запрос
  $.ajax(RequestObject);
});
