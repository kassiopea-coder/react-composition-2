import ServiceLink from './ListItems/ServiceLink';

/**
 * Компонент "Блок поисковой строки"
 * Выводит логотип, поисковую строку, подпись к поисковой строке
 * Выводит перечень ссылок на внутренние сервисы через перечисляемый компонент ServiceLink
 */
export default function Search() {
  return (
    <div>
      <div className="logo" />
      <ServiceLink />
      <div className="searchBar" />
      <div className="subtitle" />
    </div>
  );
}