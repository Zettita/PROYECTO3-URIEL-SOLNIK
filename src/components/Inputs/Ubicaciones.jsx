export default function Ubicaciones({ opciones }) {
  return (
    <>
    <label>Selecciona su ubicacion</label>
    <select defaultValue={<option>...</option>} name="ubicacion">
      {opciones?.ubicaciones?.map((e) => {
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
