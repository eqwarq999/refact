export default function SearchInput({ value, onChange }) {
  return (
    <label className="search-field">
      <span>Поиск по имени</span>
      <input
        type="search"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Введите имя пользователя"
        autoComplete="off"
      />
    </label>
  )
}
