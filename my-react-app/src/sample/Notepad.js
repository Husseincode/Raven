import React, { useState, useEffect} from "react";
import './Notepad.css';
import img from '../images/loading_3305803.png'


const Notepad = () => {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const handlePage = () => {
            setIsLoaded(true);
        }

        window.addEventListener('beforeunload', handlePage)
    }, [])

    if (isLoaded)
    {
        return (
            <>
            <div key={1}>
                <img style={{width: "3cm", height: "3cm"}} src={img}  alt="loading"/>
            </div>
            </>
        )
    }

    else {
    return (
        <React.Fragment>
            <header className="bg-primary shadow">
                <nav>
                    <div>
                        <h1 class="text-dark">Notepad</h1>
                    </div>
                    <span style={{fontSize: '20px'}} class="fa fa-search text-dark"></span>
                </nav>
            </header>
            <main>
                <div className="fs_div">
                    <form className="formed">
                        <label htmlFor="attach">
                            <input maxlength="10" autofocus autocomplete className="text-white" placeholder="Create, view or delete file ..." type="text" name="quicknotes" id="folder"/>
                            &nbsp;
                            <i title="Delete file" style={{fontSize: "25px"}} id="delete" className="fa fa-trash-o"></i>
                            &nbsp;
                            <i title="View note" style={{fontSize: "25px"}} id="see" className="fa fa-eye"></i>
                        </label>
                    </form>
                </div>
                <div className="laschif">
                    <form id="text" className="textare">
                        <div>
                            <button value="Save" type="button" id="save" className="btn btn-primary text-white">Save <i className="fa fa-file"></i></button>
                            <button value="Cancel" type="button" id="do_not_save" className="btn btn-dark text-white">Cancel <i className="fa fa-close"></i></button>
                            <button type="button" disabled className="text-white btn btn-dark" style={{float: "right"}}>Length <span id="length">0</span></button>
                        </div>
                        <textarea autofocus className="text-white" name="" id="given_title" ></textarea>
                    </form>
                </div>
                <div className="saved_notes"></div>
                <div className="note_page">
                    <i style={{fontSize: '25px'}} id="exit_note_page" class="fa fa-close text-white"></i>
                </div>
            </main>
            <footer className="text-secondary text-center">
                <h3>Notepad</h3>
                <div className="m-2">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores quas modi
                    , laudantium aperiam incidunt sapiente at ipsa vel, delectus non porro repellen
                    dus, architecto dolorem iste itaque vero inventore! Illum, eius.
                </div>
                <div className="m-2">
                    <i class="fa fa-facebook"></i>
                    <i class="fa fa-twitter"></i>
                    <i class="fa fa-whatsapp"></i>
                    <i class="fa fa-instagram"></i>
                </div>
                <time>Notepad &copy; 2023</time>
            </footer>
        </React.Fragment>
    )
    }
}

export default Notepad