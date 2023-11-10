export default function Propiedades({ opciones }) {
  return (
    <>
    <label>Selecciona el tipo de propiedad</label>
    <select defaultValue={<option selected disabled>...</option>} name="tipo">
    
      {opciones?.propiedades?.map((e) => {
        return (
          <option value={e.factor} id={e.tipo} key={e.tipo}>
            {e.tipo}
          </option>
        );
      })}
    </select>
    </>
  );
}
