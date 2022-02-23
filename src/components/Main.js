import News from "./News";
import PromoWidget from "./PromoWidget";
import Search from "./Search";
import Banner from './Banner';
import WidgetsList from "./WidgetsList";

/**
 * Основной компонент страницы
 * Объединяет компоненты:
 * - News (Новости)
 * - PromoWidget (ПромоБаннер внутреннего сервиса)
 * - Search (Блок поисковой строки)
 * - Banner (Рекламный горизонтальный баннер)
 * - WidgetsList (Блок дополнительных виджетов)
 */
export default function Main() {
  return (
    <main>
      <News />
      <PromoWidget />
      <Search />
      <Banner />
      <WidgetsList />
    </main>
  );
}