function handleClick(event) {
    console.log("Hello!");
    console.log(event);
}

function handleMouseOver() {
    console.log("bye!");
}

function handleDblClick() {
    console.log("You Double clicked!")
}

export default function Button() {
    return (
        <div>
            <button onClick={handleClick}>Click me!</button>
            <p onMouseOver={handleMouseOver}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                Facere recusandae natus consectetur veniam ea veritatis optio corrupti. Maiores, error temporibus, 
                laborum nobis quam architecto debitis autem, accusamus neque aliquam ipsum?
                </p>
            <button onDoubleClick={handleDblClick}>Double Clice here!</button>
        </div>
    );
}