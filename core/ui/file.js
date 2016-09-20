
//
// Copyright 2016 Kary Foundation, Inc.
//   Author: Pouya Kary <k@karyfoundation.org>
//

//
// ─── SET DIRTY ──────────────────────────────────────────────────────────────────
//

    function setFileDirty ( dirt ) {
        currentFile.dirty = dirt;
        updateConsoleTitle( );
    }

//
// ─── LOAD NEW FILE ──────────────────────────────────────────────────────────────
//

    function loadFile ( fileJSONString ) {
        let fileJSON = JSON.parse( fileJSONString );
        setupWorkspaceWithNewFile( fileJSON.workspaceXML );
        playgroundEditor.setValue( fileJSON.playgroundText );
    }

//
// ─── SERIALIZE FILE ─────────────────────────────────────────────────────────────
//

    function serializeFile ( ) {
        return JSON.stringify({
            workspaceXML: serializeWorkspaceIntoXML( ),
            playgroundText: playgroundText.getText( ),
        });
    }

//
// ─── WORKSPACE TO XML ───────────────────────────────────────────────────────────
//

    function serializeWorkspaceIntoXML ( ) {
        return Blockly.Xml.domToText( Blockly.Xml.workspaceToDom( workspace ) );
    }

//
// ─── SAVE FILE ──────────────────────────────────────────────────────────────────
//

    function saveFileWithInfo ( ) {
        // Going with the file path
        let fileJSON = serializeFile( );

        // save the file
        fs.writeFile( currentFile.path, workspaceXML, err => {
            if ( err ) {
                alert(`Could not save your file at "${ currentFile.path }"`);
            }
        });

        // show that we're done
        setFileDirty( false );
    }

// ────────────────────────────────────────────────────────────────────────────────
