const UserForm = ({ data, updateFieldHandler }) => {
  return (
    <div>
      <div className="formControl">
        <label htmlFor="name">Nome:</label>
        <input type="text" name="name" id="name" placeholder="Digite seu nome" required
          value={data.name || ''} onChange={(event) => updateFieldHandler('name', event.target.value)} />
      </div>
      <div className="formControl">
        <label htmlFor="email">E-mail:</label>
        <input type="email" name="email" id="email" placeholder="Digite seu email" required
          value={data.email || ''} onChange={(event) => updateFieldHandler('email', event.target.value)} />
      </div>
    </div>
  )
}

export default UserForm