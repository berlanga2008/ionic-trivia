import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the ConvertHtmlPipe pipe.
 *
 * See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
 * Angular Pipes.
 */
@Pipe({
  name: 'convertHtml',
})
export class ConvertHtmlPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value: string, ...args) {
    return decodeHtml(value.toLowerCase());
  }
}

function decodeHtml(html) {
    var txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
}
