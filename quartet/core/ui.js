
//
// Copyright 2016 Kary Foundation, Inc.
//   Author: Pouya Kary <k@karyfoundation.org>
//

//
// ─── STORAGE ────────────────────────────────────────────────────────────────────
//

    var quartetActiveBlockId = '';

//
// ─── IMPORTS ────────────────────────────────────────────────────────────────────
//

     const clipboard = require('electron').clipboard;

//
// ─── UPDATE CODE ON CHANGE ──────────────────────────────────────────────────────
//

    function quartetOnUIChange ( event ) {
        if ( event.type === Blockly.Events.MOVE ) return;
        if ( workspace.topBlocks_.length > 1 ) return;
        if ( event.type === Blockly.Events.UI ) {
            if ( event.element === 'selected' ) {
                quartetActiveBlockId = event.newValue || event.blockId;
            }
        }

        var compiledRegex = QuartetGenerator.blockToCode( ComposeBlock );
        // this is the master shared one...
        let consoleView = document.getElementById( 'ribbon-console-regexp' );
        consoleView.innerHTML = `/${ compiledRegex }/`;
    }

//
// ─── ON REGEXP COPY ─────────────────────────────────────────────────────────────
//

    function onCopyRegExp ( ) {
        clipboard.writeText( document.getElementById( 'ribbon-console-regexp' ).innerText );
    }

//
// ─── ON RESIZE ──────────────────────────────────────────────────────────────────
//

    window.onresize = function ( ) {
        quartetOnResize( );
    }

    function quartetOnResize ( ) {
        /*
        setTimeout( function ( ) {
            document.getElementsByClassName('blocklyFlyoutBackground')[ 0 ].setAttribute(
                'd', 'M 0 0 H 350 V ' + ( innerHeight - 150 ) + ' H 0 z'
            );
        });*/
    }

// ────────────────────────────────────────────────────────────────────────────────
