const getData = async <T>(url: string, headers: HeadersInit) => {
  const response = await fetch(url, { headers });
  if (response.status !== 200) {
    throw new Error("Ha ocurrido un error al tratar de consultar los datos")
  }
  const countries = await response.json()
  /**
   * TODO: validate errors here throwing new error and catch in service
   */
  return countries as T
};

const http = {
  getData
}

export default http
