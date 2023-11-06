export default function Metros() {
  return (
    <>
    <label>Ingresa los Metros cuadrados:</label>
    <label style={{ display: "block" }}>
      <input placeholder="Metros" type="number" name="metros" min="0" required />
    </label>
    </>
  );
}
