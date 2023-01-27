// 동일
type Type = string[];
type Type2 = Array<string>;

// 동일
type ObjectTypeRecord = Record<string, string>;
type ObjectTypeObject = { [x: string]: string };

// Record-----------------------------------------------------------------------
type Country = "Korea" | "USA" | "Canada" | "UK"; // enum으로 구현해도 됩니다
type CountryCode = 82 | 1 | 44; // enum으로 구현해도 됩니다

// 동일
type CountryToCountryCode = Record<Country, CountryCode>;
type CountryToCountryCodeObject = { [countryName in Country]: CountryCode };

const countries1: CountryToCountryCode = {
  Canada: 1,
  Korea: 82,
  UK: 44,
  USA: 1,
};
const countries2: CountryToCountryCodeObject = {
  Korea: 82,
  USA: 1,
  Canada: 1,
  UK: 44,
};
