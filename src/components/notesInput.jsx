import React from "react";
import Button from "./button"

export default class NotesInput extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            title: '',
            body: '',
        }

        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeBody = this.onChangeBody.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
    }

    onChangeTitle(e){
        let title = e.target.value
        if (title.length <= 50) {
            this.setState(()=>{
                return{
                    title
                }
            })
        } else {
            alert("Title tidak boleh lebih dari 50 Karakter")
        }
    }

    onChangeBody(e){
        this.setState(()=>{
            return{
                body: e.target.value
            }
        })
    }

    onSubmitHandler(e){
        e.preventDefault();
        const sameTitle = this.props.notes.find((note) => note.title.toLowerCase() == this.state.title.toLowerCase());
        if (this.state.title === '') {
            alert("Title tidak boleh kosong")
        } else if (this.state.body === '') {
            alert("Body tidak boleh kosong")
        } else if (sameTitle){
            alert("Title tidak boleh sama")
        }
        else {
            this.props.onAddNotes(this.state);
            this.setState(() => {
                return {
                    title: "",
                    body: ""
                };
            });
        }
    }

    render() {
        return (
            <div className="notes-input-area">
                <form className="notes-input" onSubmit={this.onSubmitHandler}>
                    <h2 className="add-notes">Tambah Catatan</h2>
                    <label>
                        <h3>Title</h3>
                        <input type="text" placeholder="Isi Judul Catatan..." value={this.state.title} onChange={this.onChangeTitle} />
                        {(() => {
                            if (this.state.title.length >= 40) {
                                return (
                                    <p className="title-length text-danger">Sisa Karakter : {50 - this.state.title.length}</p>
                                )
                            } else {
                                return (
                                    <p className="title-length text-success">Sisa Karakter : {50 - this.state.title.length}</p>
                                )
                            }
                        })()}
                    </label>
                    <label>
                        <h3>Isi Catatan</h3>
                        <textarea placeholder="Isi Catatan Disini..." cols="10" rows="10" name="text_body" charswidth="23"
                        value={this.state.body}
                        onChange={this.onChangeBody}
                        />
                    </label>
                    <Button style="button" type="submit">Tambah</Button>
                </form>
            </div>
        )
    }
}