import '../css/search.css'

export default function Search({ value, data, change, submit }) {
  return (
    <div>
      <form className='search-container' onSubmit={submit}>
        <input
          type='text'
          value={value}
          className='search-input'
          placeholder='e.g. New York, New York'
          onChange={change}
        />
      </form>
    </div>
  );
}
