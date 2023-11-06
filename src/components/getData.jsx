const getData = async () => {
    const res = await fetch('/data/datos.json');
    const json = await res.json();
    return json;
  };

  export default getData