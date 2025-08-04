// I've got the pattern for brazilian tel from this gist
// https://gist.github.com/claudiosanches/9200536

export default function useFormatTel(val) {
  const onlyNumbers = val.replace(/\D/g, "");

  if (onlyNumbers.length === 11) {
    return onlyNumbers.replace(/(\d{2})(\d{1})(\d{4})(\d{4})/, "($1) $2$3-$4");
  }

  return onlyNumbers.replace(/(\d{2})(\d{4})(\d{4})/, "($1) $2-$3");
}
