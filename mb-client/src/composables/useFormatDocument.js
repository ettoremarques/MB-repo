const cpfRegex = /(\d{3})(\d{3})(\d{3})(\d{2})/;
const cnpjRegex = /(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/;

export default function useFormatDocument(val, document) {
  const onlyNumbers = val.replace(/\D/g, "");

  if (document === "cpf") {
    return onlyNumbers.replace(cpfRegex, "$1.$2.$3-$4");
  }

  if (document === "cnpj") {
    return onlyNumbers.replace(cnpjRegex, "$1.$2.$3/$4-$5");
  }
}
