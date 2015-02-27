<article class="aboutArticle">
                <h1>{{heading}}</h1>
                <p>
                    {{paragraph}}
                </p>
                <p>
                    {{quote}}
                </p>
            </article>
            <nav>
                <ul>
                    {{#each this.colors}}
                    <li><a href="#" class="changeColor" title="Click to change text color!" onclick="button_clickEvent(this);">{{agree_button}}</a></li>
                    {{/each}}
                </ul>
            </nav>