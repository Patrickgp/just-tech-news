const { format_date, format_plural, format_url } = require("../utils/helper");

test("format_date() returns a date string", () => {
  const date = new Date("2022-08-23 21:48:50");

  expect(format_date(date)).toBe("8/23/2022");
});

test("format_plural() changes a word to plural if there is more than one", () => {
  const plural = "tiger";
  const singular = "lion";

  expect(format_plural(plural, 2)).toBe("tigers");
  expect(format_plural(singular, 1)).toBe("lion");
});

test("format_url() returns a simplified url string", () => {
  const url1 = format_url("http://test.com/page/1");
  const url2 = format_url("https://www.coolstuff.com/abcdefg/");
  const url3 = format_url("https://www.google.com?q=hello");

  expect(url1).toBe("test.com");
  expect(url2).toBe("coolstuff.com");
  expect(url3).toBe("google.com");
});
