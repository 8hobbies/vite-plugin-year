/** @license 0BSD
 *  Copyright (C) 2024 8 Hobbies, LLC <hong@8hobbies.com>
 *
 *  Permission to use, copy, modify, and/or distribute this software for anypurpose with or without
 *  fee is hereby granted.
 *
 *  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIESWITH REGARD TO THIS
 *  SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OFMERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE
 *  AUTHOR BE LIABLE FORANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY
 *  DAMAGESWHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN ANACTION OF CONTRACT,
 *  NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OFOR IN CONNECTION WITH THE USE OR PERFORMANCE
 *  OF THIS SOFTWARE.
 */

import yearPlugin from "./index.ts";

test("With __YEAR__", () => {
  const input = "<p>__YEAR__ is here.</p>" as const;
  const expected =
    `<p>${new Date().getFullYear().toString()} is here.</p>` as const;
  expect(yearPlugin().transformIndexHtml(input)).toBe(expected);
});

test("Without __YEAR__", () => {
  const input = "<p>No __YEAR_ present.</p>" as const;
  const expected = input;
  expect(yearPlugin().transformIndexHtml(input)).toBe(expected);
});
