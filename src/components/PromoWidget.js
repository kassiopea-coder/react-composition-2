import Widget from "./Widget";

/**
 * Компонент "ПромоБаннер внутреннего сервиса"
 * Выводит баннер сервиса
 * Выводит виджет с текстовым описанием с помощью компонента Widget
 */
export default function PromoWidget() {
  return (
    <div>
      <img src="" alt="logo"/>
      <Widget title="Работа над ошибками">
        Text
      </Widget>
    </div>
  );
}