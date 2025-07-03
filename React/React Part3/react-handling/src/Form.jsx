function handleFormSubmite(event) {
    event.preventDefault();
    console.log("Form was Submitted")
}

export default function Form() {
    return (
        <form onSubmit={handleFormSubmite}>
            <input placeholder="write something"/>
            <button>Submite</button>
        </form>
    );
}