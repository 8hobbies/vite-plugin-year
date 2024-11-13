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

/**
 * The year plugin. Add it to the list of plugins in vite.config.ts. See README.
 */
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export default function yearPlugin() {
  return {
    name: "year",
    transformIndexHtml(html: string): string {
      return html.replace("__YEAR__", new Date().getFullYear().toString());
    },
  } as const;
}
