export class Admin {
    /**
     * @param {HTMLElement} element 
     */
    constructor(element) {
        this.element = element;
    }

    render(name) {
        this.element.innerHTML = `
            <label for="question">Question: </label><br>
            <input type="text" name="question" id="question">
            <br>
            <label for="answer">Answer: </label><br>
            <input type="text" name="answer" id="answer">
            <br>
            <button id="btn">Submit!</button>
        `;

        this.element.querySelector("button").addEventListener("click", ev => {
            // always add `preventDefault` in an event handler. otherwise, the browser
            // will do some default action which usually means submitting the data to the server, 
            // which causes the entire page to reload.
            // since we have no server, we don't want that :-)
            ev.preventDefault();

            const bestPizza = this.element.querySelector("input[name=pizza]:checked").value;
            this.element.innerHTML = `<p>Indeed ${name}, Pizza ${bestPizza} is by far the best.</p><div id="pizza"></div>`;
            
            makeAsciiArt(this.element.querySelector("#pizza"));
        })
    }
}