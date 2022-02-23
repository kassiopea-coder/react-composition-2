import Title from "./Title";
import NewsItem from "./ListItems/NewsItem";
import CurrencyItem from "./ListItems/CurrencyItem";

/**
 * Компонент "Новости"
 * Выводит три категории Новостей с помощью компонента Title
 * Выводит перечень новостей через перечисляемый компонент NewsItem
 * Выводит перечень курсов валют через перечисляемый компонент CurrencyItem
 */
export default function News() {
  return (
    <section>
      <Title text="Сейчас в СМИ" link="#" />
      <Title text="В Германии" link="#" selected={false} />
      <Title text="Рекомендуем" link="#" selected={false} />
      <div className="date" />
        <NewsItem />
        <CurrencyItem />
    </section>
  );
}