'use strict'

/**
 * Before the page unloads
 */
addEventListener("beforeunload", ()=>{});

/**
 * After the page loads
 */
addEventListener("DOMContentLoaded", ()=>{

    /**
     * HTML's Classes and IDs that are accessible
     */
    let fa_bars = document.querySelector(".fa-bars");
    let exit = document.querySelector(".exit");
    let exit_warning = document.querySelector(".exit_warning");
    let important_warning = document.querySelector(".warning_content");
    let overlay = document.querySelector(".overlay_card");
    let folder_name = document.getElementById("folder");
    let text = document.getElementById("text");
    let content = document.getElementById("given_title");
    let save = document.getElementById("save");
    let flush = document.querySelector(".saved_notes");
    let del = document.getElementById("delete");
    let view_note = document.getElementById("see");
    let warning = document.querySelector(".delete_file_warning");
    let remove = document.getElementById("remove");
    let cancel = document.getElementById("cancel");
    let do_not_save = document.getElementById("do_not_save");
    let formed = document.querySelector(".formed");
    let note_page = document.querySelector(".note_page");
    let laschif = document.querySelector(".laschif");
    let fs_div = document.querySelector(".fs_div");
    let context_length = document.getElementById("length");


    /**
     * delete dashboard
     */
    function dashboard()
    {
        overlay.classList.toggle("grid-format");
    }

    /**
     * warning dashboard
     */

    function warn(text_warn)
    {
        important_warning.classList.toggle("flex_format");
        let paragraph = document.getElementById("paragraph")
        paragraph.innerHTML = `${text_warn}`;
        important_warning.appendChild(paragraph);
    }
        
    exit.addEventListener("click", dashboard);
    exit_warning.addEventListener("click", warn);

    /**
     * Codes that show all the files present
     * in the local Storage when the page gets reloaded.
     */

    addEventListener("load", ()=>{

        function create_folder(keys, value)
        {
            let create_div = document.createElement("div");
            let header = document.createElement("div");
            let span_title = document.createElement("span");
            let text_info = document.createElement("div");
            let option = document.createElement("span");
            
            create_div.setAttribute('class', 'card shadow-sm');
            create_div.setAttribute("id", `${keys}`);
            create_div.setAttribute("title",`${keys}`);
    
            header.setAttribute("class", "card-header text-center text-white")
            create_div.append(header);
                
            span_title.setAttribute("class", "text-white");
            span_title.innerText = `${keys}`;
            header.append(span_title);
    
            text_info.setAttribute("class", "card-body text-secondary text-center");
            text_info.innerText = `CVD`;
            create_div.appendChild(text_info);

            option.innerHTML = "<i class='fa fa-star'></i>";
            option.setAttribute("class", "ellipses");
            header.append(option);

            flush.append(create_div);
        }

        for (var i = 0; i < localStorage.length; i++)
        {
            let keys = localStorage.key(i);
            let value = localStorage.getItem(keys);
            /**let situation = localStorage.getItem(keys) != null;*/

            create_folder(keys, value);
            console.log(`${keys} and ${value}`)
        }
        
        let all_cards_body = document.querySelectorAll(".card");
        
        all_cards_body.forEach((x)=>{

            x.addEventListener("click", ()=>{
                
                let decide = localStorage.getItem(x.id) != null;    

                if (decide)
                {
                    flush.style.display = "none" //grid
                    note_page.style.display = "block"; //none
                    laschif.style.display = "none"; //grid
                    fs_div.style.display = "none";

                    let paragraph = document.createElement("p");
                    paragraph.setAttribute("class", "text-white");
                    paragraph.innerHTML = localStorage.getItem(`${x.id}`);
                    note_page.appendChild(paragraph);    
                    /**
                    * when the @exit button get clicked
                    * remove the webpage back to normal
                    */
                   
                    let exit_note = document.getElementById("exit_note_page");
                    exit_note.addEventListener("click", ()=>{
                        flush.style.display = "grid";
                        note_page.style.display = "none";
                        laschif.style.display = "grid";
                        fs_div.style.display = "grid";
                        note_page.removeChild(paragraph);
                    })
                    }

                    else
                    {
                        return false;
                    }
                })
            })
        })

    /**
     * function that @add_note to the storage
     * if it passes necessary stages such as:
     * 
     * 1) when the file is not ""
     * 2) file does not exist before
     */

    
    function adding_note()
    {
        if (folder_name.value != "" )
        {
            let isFilePresent = localStorage.getItem(`${folder_name.value}`) != null;

            if (isFilePresent)
            {
                text.style.display = "grid"
                content.value = localStorage.getItem(`${folder_name.value}`);
            }

            else
            {
                let areatext = document.querySelector("textarea");
                areatext.placeholder = `Write something on ${folder_name.value} ...`;
                text.style.display = "grid";
            }
        }
        else
        {
            text.style.display = "none";
            warn("File name cannot be empty");

            setTimeout(() => {
                warn();
            }, 2000);
            return false;
        }
    }

    /**
     * Length of the context
     */

    content.addEventListener("keyup", ()=>{
        context_length.innerHTML = content.value.length;
    })
    formed.addEventListener("submit", (event)=>{
        event.preventDefault();
        adding_note()
    })
 

    /**
     * After the necessary stages has been accepted
     * in the @add_note function, the function goes next to
     * saving the documents using the @save function after
     * the requirement such as
     * 
     * 1) when the content value is not ""
     */
    save.addEventListener("click", ()=>{
        if(content.value == "")
        {
            warn("Please write a valid note")
            return false;
        }

        else
        {
            let isTrue = localStorage.getItem(`${folder_name.value}`) != null;

            if (isTrue)
            {
                let cads = document.querySelectorAll(".card");

                for (var i = 0; i < cads.length; i++)
                {
                    if (cads[i].id == folder_name.value)
                    {
                        flush.remove(cads[i]);
                    }
                }
                
                localStorage.setItem(`${folder_name.value}`, content.value);
                add_card(folder_name.value, content.value);
            }
            else
            {
                localStorage.setItem(`${folder_name.value}`, content.value);
                setTimeout(() => {
                    add_card(folder_name.value, content.value);
                    window.location.reload();
                }, 2000);
            }
        }

        /**
         * inputs and text getting disabled temporarily
         * after the data has been saved
         */
        text.style.display = "none"

        /**
         * inputs and texts getting enabled after 1 seconds.
         * 
         * Creating a folder/file in the page entered by the user
         * so the user can know it is created and accessible
         */

        function add_card(folder, cont){
            save.disabled = false;
            save.innerHTML = `<span>Save <i class='fa fa-file'></i></span>`;
            
            
            let create_div = document.createElement("div");
            create_div.setAttribute('class', 'card shadow-sm');
            create_div.setAttribute("id", `${folder}`);
            create_div.setAttribute("title",`${folder}`);

            let header = document.createElement("div");
            header.setAttribute("class", "card-header text-center text-white")
            create_div.append(header);
            
            let span_title = document.createElement("span");
            span_title.setAttribute("class", "text-white");
            span_title.innerText = `${folder}`;
            header.append(span_title);

            let text_info = document.createElement("div");
            text_info.setAttribute("class", "card-body text-secondary text-center");
            text_info.innerText = `CVD`;
            create_div.appendChild(text_info);

            let option = document.createElement("span");
            option.innerHTML = "<i class='fa fa-star'></i>";
            option.setAttribute("class", "ellipses");
            header.append(option)

            flush.append(create_div);
            setTimeout(() => {
                folder_name.value = "";
                content.value = '';
                context_length.innerHTML = 0;
            }, 1000);

        };
    })

    /**
     * @do_not_save fumction won't save the note was once the
     * button is clicked.
     */
    do_not_save.addEventListener("click", ()=>{
        text.style.display = "none";
        folder_name.value = "";
        content.value = "";
    })

    del.addEventListener("click", ()=>{
        if (folder_name.value != "" )
        {
            let confirm_del = localStorage.getItem(`${folder_name.value}`) != null;

            if (confirm_del)
            {
                dashboard();
                warning.innerHTML = `Are you sure you want to delete ${folder_name.value}?`;
                remove.addEventListener("click", ()=>{

                    let all_cards = document.querySelectorAll(".card");

                    for (var i = 0; i < all_cards['length']; i++)
                    {
                        if (all_cards[i].id == folder_name.value)
                        {
                            flush.removeChild(all_cards[i]);
                        }
                    }

                    localStorage.removeItem(`${folder_name.value}`)
                    
                    remove.innerHTML = "File Deleted";
                    cancel.style.display = "none";
                    remove.disabled = true;
                    warning.style.display = "none";
                    folder_name.value = "";

                    exit.addEventListener("click", ()=>{
                        remove.innerHTML = "Delete File";
                        cancel.style.display = "inline";
                        remove.disabled = false;
                        warning.style.display = "inline";
                    })
                });

                cancel.addEventListener("click", ()=>{
                    cancel.innerHTML = "Action Cancelled";
                    remove.style.display = "none";
                    folder_name.value = "";
                    cancel.disabled = true;
                    warning.style.display = "none";


                    exit.addEventListener("click", ()=>{
                        cancel.innerHTML = "Cancel Action";
                        remove.style.display = "inline";
                        cancel.disabled = false;
                        warning.style.display = "inline";
                    })
                })
            }
            else
            {
                warn("File doesn't exist");

                setTimeout(() => {
                    warn();
                }, 2000);
                return false;
            }
        }
        else
        {
            text.style.display = "none";
            warn("File name cannot be empty");

            setTimeout(() => {
                warn();
            }, 2000);
            return false;
        }
    })

    /**
     * view file
     */

    view_note.addEventListener("click", ()=>{
        if (folder_name.value != "")
        {
            let isTrue = localStorage.getItem(`${folder_name.value}`) != null;

            if (isTrue)
            {
                flush.style.display = "none" //grid
                note_page.style.display = "block"; //none
                laschif.style.display = "none"; //grid
                fs_div.style.display = "none";

                let paragraph = document.createElement("p");
                paragraph.setAttribute("class", "text-white");
                paragraph.innerHTML = localStorage.getItem(`${folder_name.value}`);
                note_page.appendChild(paragraph);

                /**
                 * when the @exit button get clicked
                 * remove the webpage back to normal
                 */

                let exit_note = document.getElementById("exit_note_page");
                exit_note.addEventListener("click", ()=>{
                    flush.style.display = "grid";
                    note_page.style.display = "none";
                    laschif.style.display = "grid";
                    fs_div.style.display = "grid";
                    note_page.removeChild(paragraph);
                })
            }
            else
            {
                warn("File doesn't exist");
            }
        }
        else
        {
            warn("Please, input a file name")
            return false;
        }
    });
})
