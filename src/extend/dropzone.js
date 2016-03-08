 /**
         * Dropzone
         *
         * Handle the drag and the drop events.
         */
        
        $.fn.dropzone = function(config)
        {
            Config = Config || {}
            
            /** The number we used to name the file input */
            dropzoneNumber += 1
            
            var DragEnter     = Config.dragenter     || function(){},
                DragOver      = Config.dragover      || function(){},
                Clickable     = Config.clickable     || true,
                Multiple      = Config.multiple      || false,
                ForceSingle   = Config.forceSingle   || false,
                Error         = Config.error         || function(){},
                Success       = Config.success       || function(){},
                Each          = Config.each          || function(){},
                AccpetedFiles = Config.acceptedFiles || '*',
                InputName     = Config.inputName     || 'tocas-dropzone-' + dropzoneNumber,
                Dropzone      = this

            /*
            {
                maxFilesize: 1024,
                clickable: true,
                multiple: true
                success:
                each:
                error:
                accpetedFiles: "image/*"
                dragenter:
                dragover:
                forceSingle:
            }
            
            */
            
            
            
            
            /**
             * Create Input
             *
             * Create the file upload input or use the existing element.
             */
            
            
            /** Create an invisiable file input if the input was not existed or use the eixsted element */
            var UploadInput = ($('#' + InputName).length == 0) ? document.createElement('input')
                                                               : $_('#' + InputName)    
                
            UploadInput.type          = 'file'
            UploadInput.style.display = 'none'
            UploadInput.id            = InputName
            
            if(Multiple)
                UploadInput.multiple  = 'multiple'
        
            /** Insert to the element before */
            var Parent = $(this).parent()
            $(Parent).prepend(UploadInput)

            /** Set the dropzone file input name to the dropzone */
            $(this).attr('data-dropzone-name', InputName)

            
            
            
            /**
             * Put File
             *
             * Put the files to the dropzone and store it.
             */
            
            function PutFile(Files)
            {
                var Length = Files.length,
                    dropzoneCount = $(Dropzone)[0].dropzoneCount || 0
                
                /** Store the files to the node */
                $(Dropzone)[0].files = Files
                
                /** Add the total dropped or file selected count */
                $(Dropzone)[0].dropzoneCount = dropzoneCount + Length
            }

            
            
            
            /**
             * Event Handlers
             *
             *
             */
            
            /** Allow to click the dropzone to open the upload window if the clickable was true */
            if(Clickable)
            {
                $(this).on('click'    , function(){ $('#' + InputName).trigger('click') })
                $(this).on('mouseover', function(){ $(this).css('cursor', 'pointer') })
            }
            
            
            
            /** The file input handler */
            $('#' + InputName).on('change', function()
            {
                var Files = this.files,
                    Length = Files.length
                
                /** Put files to the dropzone */
                PutFile(Files)
                
                /** Load each file and callback */
                for(var i = 0; i < Length; i++)
                    Each.call(Dropzone, Files[i])
                    
                Success.call(Dropzone, Files)
            })

            
            
            /** The main event handler */
            $(this).on('dragover dragenter drop', function(e)
            {
                /** Stop default events */
                e.stopPropagation()
                e.preventDefault()
                
                /** The callbacks */
                switch(e.type)
                {
                    case 'dragover' : DragOver.call();  break
                    case 'dragenter': DragEnter.call(); break
                }

                
                /** Only accpet the drop action */
                if(e.type != 'drop') return
                
                
                /** The datas here */
                var Data   = e.dataTransfer,
                    Files  = Data.files,
                    Length = Files.length

                
                /** Put files to the dropzone */
                PutFile(Files)
                    
                
                /** Load each file or only single file and callback */
                if(Multiple)
                    for(var i = 0; i < Length; i++)
                        Each.call(Dropzone, Files[i])
                else
                    Each.call(Dropzone, Files[0])
                    
                Success.call(Dropzone, Files)
            })
        },
        
        