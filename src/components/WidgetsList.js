import Widget from "./Widget";
import Weather from "./Weather";
import FavoritesItem from "./ListItems/FavoritesItem";
import TvItem from "./ListItems/TvItem";
import EfirItem from "./ListItems/EfirItem";

/**
 * Компонент "Блок дополнительных виджетов"
 * Обеспечивает вывод виджетов в три колонки с помощью компонента Widget
 * Выводит виджет "Погода" с помощью компонента Weather
 * Выводит виджет "Посещаемое" через перечисляемый компонент FavoritesItem
 * Выводит виджет "Карта"
 * Выводит виджет "Телепрограмма" через перечисляемый компонент TvItem
 * Выводит виджет "Эфир" через перечисляемый компонент EfirItem
 */
export default function WidgetsList() {
  return (
    <section>
      <Widget title="Погода">
        <Weather />
      </Widget>
      <Widget title="Посещаемое">
        <FavoritesItem />
      </Widget>
      <Widget title="Карта Германии">
        Расписания
      </Widget>
      <Widget title="Телепрограмма">
        <TvItem />
      </Widget>
      <Widget title="Эфир">
        <EfirItem />
      </Widget>
    </section>
  );
}