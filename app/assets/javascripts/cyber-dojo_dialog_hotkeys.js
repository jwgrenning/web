/*global jQuery,cyberDojo*/
'use strict';
var cyberDojo = ((cd, $) => {

  cd.setupHotkeysButton = () => {
    cd.hotkeysButton().show().click(() => { hotkeysDialog(); });
  };

  const cmd    = "<span class='mac-cmd'></span>";
  const option = "<span class='mac-option'></span>";
  const shift  = "<span class='mac-shift'></span>";

  const hotkeysDialog = () => {
    let html = '';
    html += '<div id="hotkeys-dialog">';
    html += 'Open a page of all <a href="https://defkey.com/codemirror-shortcuts" target="_blank">CodeMirror hotkeys</a>.';
    html += '<table class="info" style="width:400px;">';
    html += tr3('start searching', 'Ctrl-F',       `${cmd}&thinsp;F`, );
    html += tr3('find next',       'Ctrl-G',       `${cmd}&thinsp;G`);
    html += tr3('find previous',   'Shift-Ctrl-G', `${cmd}${shift}&thinsp;G`);
    html += tr3('replace',         'Shift-Ctrl-F', `${cmd}${option}&thinsp;F`);
    html += tr3('replace all',     'Shift-Ctrl-R', `${cmd}${option}${shift}&thinsp;F`);
    html += tr3('jump to line',    'Alt-G',        `${option}&thinsp;G`);
    html += '</table>';
    html += '<table class="info" style="width:400px;">';
    html += tr2('Alt-J', 'cycles&darr; through the filenames');
    html += tr2('Alt-K', 'cycles&uarr; through the filenames');
    html += tr2('Alt-O', 'toggle the output tab');
    html += tr2('Alt-T', 'runs the tests');
    html += '</table>';
    html += '</div>';

    const node = $(html);
    node.dialog({
              width: '435',
           autoOpen: true,
      closeOnEscape: true,
              modal: true,
              title: cd.dialogTitle('hotkeys'),
        beforeClose: event => {
          if (event.keyCode === $.ui.keyCode.ESCAPE) {
            node.remove();
            cd.kata.editor.refocus();
            return true;
          }
        }
    });
  };

  const tr2 = (key, what) => {
    return '<tr>' +
      `<td style="text-align:right;">${key}</td>` +
      '<td>&nbsp;:&nbsp;</td>' +
      `<td>${what}</td>` +
    '</tr>';
  };

  const tr3 = (key, notMac, mac) => {
    return '<tr>' +
      `<td style="text-align:right;">${key}</td>` +
      '<td>&nbsp;:&nbsp;</td>' +
      `<td>${notMac}</td>` +
      '<td>&nbsp;&nbsp;&nbsp;&nbsp;</td>' +
      `<td>${mac}</td>` +
    '</tr>';
  };

  return cd;

})(cyberDojo || {}, jQuery);
